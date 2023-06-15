---
icon: infofill
category: Web前端
tags:
    - DOM
    - BOM
time: 2020-6-11
footer: 我和我最后的倔强，握紧双手绝对不放
title: 8.事件的绑定
---



## 事件的绑定



### 8.1 绑定事件



通过 **对象.事件=函数** 的形式绑定的响应函数，只能同时为一个元素的一个事件绑定一个响应函数，不能够绑定多个，如果绑定了多个，则后边绑定的响应函数会覆盖掉前边的



- **通过addEventListener()方法(不支持IE8及以下浏览器)可以为元素绑定多个响应函数**,该方法有三个参数
  **参数**

- - 代表事件的字符串,不要加on

- - 回调函数，当事件触发时该函数会被调用

- - 是否在捕获或冒泡阶段触发事件，需要一个布尔值，true表示事件在捕获阶段执行,flase表示在冒泡阶段执行,默认值为false(可选),如果想要这两个事件都可以在同一个对象上发生必须添加两次事件

```js
btn.addEventListener("click",function(){
    alert(123);
},false)
```


addEventListene0r()方法可以同时为一个元素的相同事件绑定响应函数，这样当事件被触发时，响应函数将**会按照函数的绑定顺序执行**

- **在IE8及以下浏览器中可以通过attachEvent()方法为元素绑定多个响应函数**,该方法有两个参数
  **参数**

- - 事件的字符串，要加on

- - 回调函数

```js
btn.attachEvent("onclick",function(){
    alert(123);
})
```



​	attachEvent()方法也可以同时为一个元素的相同事件绑定响应函数，不同的是该方法是**后绑定的响应函数先执行**



**注:**

- **大部分时候响应函数的执行顺序都不重要，如果需要对顺序要求就写成一个响应函数，要用这种方法添加的响应函数都是顺序不重要的函数**

- **事件的绑定和委派等最好都是通过addEventListener()方法等来绑定,以免和别人的发生冲突**



**注意:**addEventListener()方法中的this是绑定事件的对象，attachEvent()方法中的this是window对象



**兼容写法**



注意:addEventListener()中的this是绑定事件的对象，attachEvent()中的this是window，需要统一两个方法的this



```js
/*
参数:obj 要绑定事件的对象
    eventStr 事件的字符串
    callback 回调函数
*/
function addEvent(obj,eventStr,callback) {
    if(obj.addEventListener){
        obj.addEventListener(eventStr,callback,false)
    }
    else{
        obj.attachEvent("on"+eventStr,function () {
            callback.call(obj);
        })
    }
}
/*
因为this的不统一必须在attchEvent()中加一个回调函数，浏览器自动调用函数，然后我们自己手动调用函数，这样我们就能控制callback方法中的this了
*/
```



### 8.2 移除绑定



- **通过removeEventListener()方法(不支持IE8及以下浏览器)可以为元素移除响应函数**,该方法有三个参数
  **参数**

- - 代表事件的字符串,不要加on

- - 需要被移除的事件函数

- - 是否在捕获或冒泡阶段取消绑定事件，需要一个布尔值，true表示事件在捕获阶段执行,flase表示在冒泡阶段执行,默认值为false(可选)

- **在IE8及以下浏览器中可以通过detachEvent()方法为元素移除响应函数**,该方法有两个参数
  **参数**

- - 事件的字符串，要加on

- - 回调函数



**注意:**



- 如果要使用移除绑定,那么绑定时需要必须通过函数赋值的方式来绑定,因为如果是匿名函数移除的函数并不是同一个对象

- 如果不为removeEventListener()方法传入第三个参数会默认是移除冒泡状态的事件函数,不会移除捕获阶段的,因为这其实是两个不同的事件

- 移除绑定只能对用上述方法绑定的函数器作用,不会对用onclick属性等绑定的函数起作用



**兼容写法**



```js
/*
参数:obj 要绑定事件的对象
    eventStr 事件的字符串
    callback 回调函数
*/
function removeEvent(obj,eventStr,callback) {
    if(obj.removeEventListener){
        obj.removeEventListener(eventStr,callback,false)
    }
    else{
        obj.detachEven("on"+eventStr,callback)
    }
}
```
