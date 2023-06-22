---
article: true
date: 2022-04-20
category: Web Development
sticky: 10
star: 10
tag: 
- 错误处理模型
---

# 给你的库或框架设计一个通用错误处理模型

## 引言

不知道大家在封装一个库的时候，会不会考虑错误处理的问题？

错误处理是库或框架开发过程中重要的设计环节，建立良好的错误处理机制可以直接增强这个库或框架本身的健壮性和可扩展性，大大减少使用者的开发负担。

## 提出问题

假设我封装好了一个库：

``` ts
 export default {
   todoA(fn: (...any: any[]) => any) {
     fn && fn();
   },
 };
```

里面有一个 `todoA` 方法，当用户使用我这个库的这个方法的时候，出错了怎么办？

此时有两种解决方法：

-   让用户自行处理。
-   我们，也就是库的封装者，代替用户处理。

显然，让用户处理是一个很不人性化的方法。

以上面为例，用户需要：

``` ts
 import myLib from 'myLib';
 ​
 myLib.todoA(() => {
   try {
     // ...
   } catch(e) {
     // ...
   }
 })
```

假设这个库暴露了成百上千个方法，就意味着用户需要自行处理成百上千个方法。这很不友好。

所以一个封装优良的库，一般都会代替用户统一处理错误。

## 如何在库内部处理错误？

现在我们把错误处理放到库内部：

``` ts
 export default {
   todoA(fn: (...any: any[]) => any) {   
     try {
       fn && fn();
     } catch(e) {
       // ...
     }
   },
 };
```

问题似乎并没有很好解决，因此此时用户轻松了，但坑惨了开发者。

假设这个库暴露了成百上千个方法，就意味着我们自己需要自行处理成百上千个方法！

显然我们不会这么做，更好的解决办法是将错误处理统一封装成一个函数：

``` ts
 export default {
   todoA(fn: (...any: any[]) => any) {
     callWithErrorHandling(fn);
   },
   todoB(fn: (...any: any[]) => any) {
     callWithErrorHandling(fn);
   },
 };
 ​
 function callWithErrorHandling(fn: (...any: any[]) => any) {
   try {
     fn && fn();
   } catch (e) {
     // ...
   }
 }
```

这样我们的代码就简洁多了，但这不是我们的最终目的。这么做的真正好处是，我们能为用户提供统一的错误处理接口！

## 提供统一的错误处理接口

我们来把代码稍稍改造一下：

``` ts
 // 用来保存用户自定义的对此库的异常处理函数
 // 如果用户不设置，则使用默认提供的处理函数
 let handleError: (...any: any[]) => any = (e) => {
   console.log(e);
   // ...
 };
 ​
 export default {
   todoA(fn: (...any: any[]) => any) {
     callWithErrorHandling(fn);
   },
   todoB(fn: (...any: any[]) => any) {
     callWithErrorHandling(fn);
   },
   // 用户自定义的对此库的异常处理函数
   registerErrorHandler(fn: (...any: any[]) => any) {
     handleError = fn;
   },
 };
 ​
 function callWithErrorHandling(fn: (...any: any[]) => any) {
   try {
     fn && fn();
   } catch (e) {
     handleError(e);
   }
 }
```

我们提供了 `registerErrorHandler` 这个方法，供用户自行注册全局通用错误处理程序。

之后可以通过 `callWithErrorHandling` 捕获错误后，把错误传递给注册的错误处理程序处理。

这样用户使用起来就会非常的方便和简洁：

``` ts
 import myLib from 'myLib';
 ​
 // 注册自定义错误处理程序
 myLib.registerErrorHandler((e) => {
   console.log('registerErrorHandler', e);
 });
 ​
 // 不用在单独考虑错误处理的问题了，增强代码健壮性
 myLib.todoA(() => {
   // ...
 });
 myLib.todoB(() => {
   // ...
 });
```

这样我们就等于上了双保险，首先库本身给用户提供了默认的错误处理函数，其次用户可以自行定义错误处理程序，对错误进行注入上报、抛出、忽略等操作。

## 基于 class 的封装

上面的封装有一点不够优雅，没有使用 es6 的 class 模式，下面给出一版基于 class 的封装：

``` ts
 /**
  * 假设有一个库，我们需要暴露一个通用的错误处理接口
  */
 ​
 class myLib {
   // 用于存储用户自定义的对此库的异常处理函数
   private handleError: (...any: any[]) => any;
 ​
   constructor() {
     // 默认错误处理函数
     this.handleError = (e) => {
       console.log(e);
     };
   }
 ​
   todoA(fn: (...any: any[]) => any) {
     this.callWithErrorHandling(fn);
   }
 ​
   todoB(fn: (...any: any[]) => any) {
     this.callWithErrorHandling(fn);
   }
 ​
   // 用户自定义的对此库的异常处理函数
   registerErrorHandler(fn: (...any: any[]) => any) {
     this.handleError = fn;
   }
 ​
   // 错误捕获函数
   private callWithErrorHandling(fn: (...any: any[]) => any) {
     try {
       fn && fn();
     } catch (e) {
       this.handleError(e);
     }
   }
 }
 ​
export default new myLib();
```
