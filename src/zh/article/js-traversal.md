---
article: true
date: 2022-04-15
category: Javascript
sticky: 10
star: 10
tag: 
- Javascript
---

# 一文总结 Javascript 中的遍历方式

## 前言

说到 Javascript 中的遍历，可以分为两种情况：数组的遍历和对象的遍历。

下面我们就来总结梳理一下 JS 中所有的有关数组的遍历和对象的遍历的方法。

PS：这里的 Javascript 指的是广义的 JS，包括了 ES6 里的方法。

## 数组的遍历

JavaScript 提供多种遍历语法。

### for 循环

最原始的写法就是`for`循环。

``` js
 for (var index = 0; index < myArray.length; index++) {
   console.log(myArray[index]);
 }
```

### `forEach` 方法

这种写法比较麻烦，因此数组提供内置的`forEach`方法。

``` js
 myArray.forEach(function (value) {
   console.log(value);
 });
```

**这种写法的问题在于，无法中途跳出`forEach`循环，`break`命令或`return`命令都不能奏效。**

### `for...in` 循环

`for...in`循环可以遍历数组的键名，然后通过数组的键访问数组的值。

``` js
 for (var index in myArray) {
   console.log(myArray[index]);
 }
```

**`for...in`循环有几个缺点：**

-   数组的键名是数字，但是`for...in`循环是以字符串作为键名“0”、“1”、“2”等等。
-   `for...in`循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
-   某些情况下，`for...in`循环会以任意顺序遍历键名。

总之，`for...in`循环主要是为遍历对象而设计的，不适用于遍历数组。因此不推荐在遍历数组中使用。

### `for...of` 循环

`for...of` 循环是 ES6 里新提出的。

``` js
 for (let value of myArray) {
   console.log(value);
 }
```

`for...of`循环相比上面几种做法，有一些显著的优点。

-   有着同`for...in`一样的简洁语法，但是没有`for...in`那些缺点。
-   不同于`forEach`方法，它可以与`break`、`continue`和`return`配合使用。
-   提供了遍历所有数据结构的统一操作接口。

下面是一个使用 break 语句，跳出`for...of`循环的例子。

``` js
 for (var n of fibonacci) {
   if (n > 1000)
     break;
   console.log(n);
 }
```

上面的例子，会输出斐波纳契数列小于等于 1000 的项。如果当前项大于 1000，就会使用`break`语句跳出`for...of`循环。


## 对象的遍历

对象的遍历，其实准确的说，应该理解成对象属性的遍历。因为只要获取到了对象名，对象的值自然也就没问题，可以轻易的拿到。

### 可枚举性

对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。

`Object.getOwnPropertyDescriptor`方法可以获取该属性的描述对象。

``` js
 let obj = { foo: 123 };
 Object.getOwnPropertyDescriptor(obj, 'foo')
 //  {
 //    value: 123,
 //    writable: true,
 //    enumerable: true,
 //    configurable: true
 //  }
```

描述对象的`enumerable`属性，称为“可枚举性”，如果该属性为`false`，就表示某些操作会忽略当前属性。

**目前，有四个操作会忽略`enumerable`为`false`的属性。**

-   **`for...in`循环：只遍历对象自身的和继承的可枚举的属性。**
-   **`Object.keys()`：返回对象自身的所有可枚举的属性的键名。**
-   **`JSON.stringify()`：只串行化对象自身的可枚举的属性。**
-   **`Object.assign()`： 忽略`enumerable`为`false`的属性，只拷贝对象自身的可枚举的属性。**

这四个操作之中，前三个是 ES5 就有的，最后一个`Object.assign()`是 ES6 新增的。其中，只有`for...in`会返回继承的属性，其他三个方法都会忽略继承的属性，只处理对象自身的属性。

实际上，引入“可枚举”（`enumerable`）这个概念的最初目的，就是让某些属性可以规避掉`for...in`操作，不然所有内部属性和方法都会被遍历到。比如，对象原型的`toString`方法，以及数组的`length`属性，就通过“可枚举性”，从而避免被`for...in`遍历到。

``` js
 Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable
 // false
 ​
 Object.getOwnPropertyDescriptor([], 'length').enumerable
 // false
```

上面代码中，`toString`和`length`属性的`enumerable`都是`false`，因此`for...in`不会遍历到这两个继承自原型的属性。

另外，ES6 规定，所有 Class 的原型的方法都是不可枚举的。

``` js
 Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable
 // false
```

总的来说，操作中引入继承的属性会让问题复杂化，大多数时候，我们只关心对象自身的属性。所以，尽量不要用`for...in`循环，而用`Object.keys()`代替。

### 属性的遍历方法

ES6 一共有 5 种方法可以遍历对象的属性。

#### for...in

**`for...in`循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。**

**`for...in`循环用来遍历一个对象的全部属性。**

``` js
 var obj = {a: 1, b: 2, c: 3};
 
 for (var i in obj) {
   console.log('键名：', i);
   console.log('键值：', obj[i]);
 }
 // 键名： a
 // 键值： 1
 // 键名： b
 // 键值： 2
 // 键名： c
 // 键值： 3
```

**`for...in`循环有两个使用注意点。**

-   **它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。**
-   **它不仅遍历对象自身的属性，还遍历继承的属性。**

举例来说，对象都继承了`toString`属性，但是`for...in`循环不会遍历到这个属性。

``` js
 var obj = {};
 ​
 // toString 属性是存在的
 obj.toString // toString() { [native code] }
 ​
 for (var p in obj) {
   console.log(p);
 } // 没有任何输出
```

上面代码中，对象`obj`继承了`toString`属性，该属性不会被`for...in`循环遍历到，因为它默认是“不可遍历”的。关于对象属性的可遍历性，参见《标准库》章节中 Object 一章的介绍。

如果继承的属性是可遍历的，那么就会被`for...in`循环遍历到。但是，一般情况下，都是只想遍历对象自身的属性，所以使用`for...in`的时候，应该结合使用`hasOwnProperty`方法，在循环内部判断一下，某个属性是否为对象自身的属性。

``` js
 var person = { name: '老张' };
 
 for (var key in person) {
   if (person.hasOwnProperty(key)) {
     console.log(key);
   }
 }
 // name
```

#### Object.keys(obj)

`Object.keys`返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

#### Object.getOwnPropertyNames(obj)

`Object.getOwnPropertyNames`返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

#### Object.getOwnPropertySymbols(obj)

`Object.getOwnPropertySymbols`返回一个数组，包含对象自身的所有 Symbol 属性的键名。

与`Object.getOwnPropertyNames()`类似，您可以将给定对象的所有符号属性作为 Symbol 数组获取。 请注意，`Object.getOwnPropertyNames()`本身不包含对象的 Symbol 属性，只包含字符串属性。

因为所有的对象在初始化的时候不会包含任何的 Symbol，除非你在对象上赋值了 Symbol 否则`Object.getOwnPropertySymbols()`只会返回一个空的数组。

**示例**

``` js
 var obj = {};
 var a = Symbol("a");
 var b = Symbol.for("b");
 ​
 obj[a] = "localSymbol";
 obj[b] = "globalSymbol";
 ​
 var objectSymbols = Object.getOwnPropertySymbols(obj);
 ​
 console.log(objectSymbols.length); // 2
 console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
 console.log(objectSymbols[0])      // Symbol(a)
```

#### Reflect.ownKeys(obj)

`Reflect.ownKeys`返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

--- 

以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。

-   **首先遍历所有数值键，按照数值升序排列。**
-   **其次遍历所有字符串键，按照加入时间升序排列。**
-   **最后遍历所有 Symbol 键，按照加入时间升序排列。**

``` js
 Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
 // ['2', '10', 'b', 'a', Symbol()]
```

上面代码中，`Reflect.ownKeys`方法返回一个数组，包含了参数对象的所有属性。这个数组的属性次序是这样的，首先是数值属性`2`和`10`，其次是字符串属性`b`和`a`，最后是 Symbol 属性。

## 总结

最后我们来总结一下：

在数组遍历中，推荐使用 `for ... of ...` 循环，当对不需要使用 `break`, `continue` 这些循环中断命令的时候，使用 `forEach` 方法也是一个很好的选择。

在对象属性遍历的时候，在大多数情况下，我们不会想要获取该对象继承的一些属性，所以一般常见我们会使用 `Object.keys(obj)` 来进行遍历。其他情况，我们需要根据对象遍历的需求选择相适应的遍历方法。
