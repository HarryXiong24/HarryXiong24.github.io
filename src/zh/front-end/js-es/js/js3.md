---
icon: js
category: Web 前端
tag: 
  - JavaScript
  - Promise 对象
  - JS 异步
  - async 与 await
date: 2020-06-06
title: 3. 变量及数据类型
---

## 变量及数据类型



### 3.1 变量和常量



- **标识符可以含有字母，数字, $等; **
- **标识符不能以数字开头；**
- **标识符不能是JS中的关键字或保留字；**
- **标识符一般采用驼峰命名法：首字母小写，每个单词的开头字母大写，其余字母小写**
- **标识符就是JS中的变量(ES6有了常量的概念),变量使用前必须要先定义**

 

- **有3种命名符来命名表示符**

- var，ES6之前用的命名符,但是作用域是函数作用域,并且支持在当前作用域中进行重复命名,有很大隐患

- let，ES6新增命名变量方法,作用域和其他语言的作用域一样都在块级作用域中,ES6推荐使用

- const,ES6新增的常量命名法,用这个命名符来命名的标识符为常量,只能用不能修改值,修改值就会报错,推荐在某一个量只用一次的时候用这个命名符     

   

  **注意:**

  **用const声明的常量不是不能赋值,而是不能通过=进行二次赋值,在不改变原来常量结构的情况下可以改变这个常量的属性值**



### 3.2 检测数据类型的方法



JavaScript 有三种方法，可以确定一个值到底是什么类型。

- `typeof`运算符

- `instanceof`运算符

- `Object.prototype.toString`方法

  

#### 3.2.1 typeof运算符

`typeof`运算符可以返回一个值的数据类型。

数值、字符串、布尔值分别返回`number`、`string`、`boolean`。

```js
typeof 123; // "number"
typeof "123"; // "string"
typeof false; // "boolean"
```

函数返回`function`。

```js
function f() {}
typeof f;
// "function"
```

`undefined`返回`undefined`。

```js
typeof undefined;
// "undefined"
```

利用这一点，`typeof`可以用来检查一个没有声明的变量，而不报错。

```js
v;
// ReferenceError: v is not defined

typeof v;
// "undefined"
```

上面代码中，变量`v`没有用`const` `var` 或 `let` 命令声明，直接使用就会报错。但是，放在`typeof`后面，就不报错了，而是返回`undefined`。

实际编程中，这个特点通常用在判断语句。

```js
// 错误的写法
if (v) {
  // ...
}
// ReferenceError: v is not defined

// 正确的写法
if (typeof v === "undefined") {
  // ...
}
```

对象返回`object`。

```js
typeof window; // "object"
typeof {}; // "object"
typeof []; // "object"
```

上面代码中，空数组(`[]`)的类型也是`object`，这表示在 JavaScript 内部，数组本质上只是一种特殊的对象。这里顺便提一下，`instanceof`运算符可以区分数组和对象。

```js
const o = {};
const a = [];

o instanceof Array; // false
a instanceof Array; // true
```

`null`返回`object`。

```js
typeof null; // "object"
```

`null`的类型是`object`，这是由于历史原因造成的。1995 年的 JavaScript 语言第一版，只设计了五种数据类型(对象、整数、浮点数、字符串和布尔值)，没考虑`null`，只把它当作`object`的一种特殊值。后来`null`独立出来，作为一种单独的数据类型，为了兼容以前的代码，`typeof null`返回`object`就没法改变了。



#### 3.2.2 instanceof运算符



instanceof运算符用来判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上



**语法**

```javascript
obj instanceof Object;//true 实例obj在不在Object构造函数中
```

instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。



**实例**

1. **instanceof的普通的用法，obj instanceof Object 检测Object.prototype是否存在于参数obj的原型链上。**

Person的原型在p的原型链中

```javascript
function Person(){};
var p =new Person();
console.log(p instanceof Person);//true
```

2. **继承中判断实例是否属于它的父类**

Student和Person都在s的原型链中

```javascript
function Person(){};
function Student(){};

var p =new Person();
Student.prototype=p;//继承原型

var s=new Student();

console.log(s instanceof Student);//true
console.log(s instanceof Person);//true
```

3. **复杂用法**

这里的案例要有熟练的原型链的认识才能理解

```javascript
function Person() {}

console.log(Object instanceof Object);     //true

//第一个Object的原型链：Object=>
//Object.__proto__ => Function.prototype=>Function.prototype.__proto__=>Object.prototype

//第二个Object的原型：Object=> Object.prototype


console.log(Function instanceof Function); //true

//第一个Function的原型链：Function=>Function.__proto__ => Function.prototype
//第二个Function的原型：Function=>Function.prototype

console.log(Function instanceof Object);   //true

//Function=>
//Function.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//Object => Object.prototype


console.log(Person instanceof Function);      //true

//Person=>Person.__proto__=>Function.prototype
//Function=>Function.prototype


console.log(String instanceof String);   //false

//第一个String的原型链：String=>
//String.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个String的原型链：String=>String.prototype

console.log(Boolean instanceof Boolean); //false

//第一个Boolean的原型链：Boolean=>
//Boolean.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个Boolean的原型链：Boolean=>Boolean.prototype


console.log(Person instanceof Person); //false


//第一个Person的原型链：Person=>
//Person.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个Person的原型链：Person=>Person.prototype
```

**总结**

对应上述规范做个函数模拟A instanceof B：

```javascript
function _instanceof(A, B) {
    var O = B.prototype;// 取B的显示原型
    A = A.__proto__;// 取A的隐式原型
    while (true) {
        //Object.prototype.__proto__ === null
        if (A === null)
            return false;
        if (O === A)// 这里重点：当 O 严格等于 A 时，返回 true
            return true;
        A = A.__proto__;
    }
```



#### 3.2.3 Object.prototype.toString方法



在 JavaScript 里使用 typeof 来判断数据类型，只能区分基本类型，即 “number”，”string”，”undefined”，”boolean”，”object”，“function”，“symbol” (ES6新增)七种。

**对于数组、null、对象来说，其关系错综复杂，使用 typeof 都会统一返回 “object” 字符串。**

要想区别对象、数组、函数单纯使用 typeof 是不行的，JavaScript中,通过Object.prototype.toString方法，判断某个对象值属于哪种内置类型。

在介绍Object.prototype.toString方法之前，我们先把toString()方法和Object.prototype.toString.call()方法进行对比。

**toString()方法和Object.prototype.toString.call()方法对比**

```js
var arr=[1,2];

//直接对一个数组调用toString()
arr.toString();// "1,2"

//通过call指定arr数组为Object.prototype对象中的toString方法的上下文
Object.prototype.toString.call(arr); //"[object Array]"
```

Object.prototype中的toString方法是确实被继承下来了，但是很多东西总不会一层不变，作为儿子的数组重写了

toString方法，所以直接调用数组对象上面的toString方法调用到的实际是重写后的方法，并不Object.prototype

中的toString方法。

**应用场景**

Object.prototype对象上的toString方法可以用来判断数据类型

```js
Object.prototype.toString.call(arr); //"[object Array]"  判断是否是数组
```

而重写后的toString方法可以把对象转换成字符串，还可以把数值转换成不同进制的数

```js
[1,2].toString();// "1,2"  得到字符串

(10).toString(2);//10进制转2进制 1010 ，如果1.toString(2)会报错，因为js会认为.是数字的小数点而不是调用符号
```

**精确判断对象的类型**

JavaScript 中一切都是对象，任何都不例外，对所有值类型应用 Object.prototype.toString.call() 方法结果如下：

```js
console.log(Object.prototype.toString.call(123));    //[object Number]
console.log(Object.prototype.toString.call('123'));    //[object String]
console.log(Object.prototype.toString.call(undefined));    //[object Undefined]
console.log(Object.prototype.toString.call(true));    //[object Boolean]
console.log(Object.prototype.toString.call({}));    //[object Object]
console.log(Object.prototype.toString.call([]));    //[object Array]
console.log(Object.prototype.toString.call(function(){}));    //[object Function]
console.log(Object.prototype.toString.call(null));    //[[object Null]]
```





### 3.3 六大数据类型



JavaScript的数据类型分为5大基本数据类型和一个复杂数据类型object

共有六种

- 数值(number): 整数和小数(比如`1`和`3.14`)
- 字符串(string): 文本(比如`Hello World`)。
- 布尔值(boolean): 表示真伪的两个特殊值，即`true`(真)和`false`(假)
- `undefined`: 表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
- `null`: 表示空值，即此处的值为空。
- 对象(object): 各种值组成的集合。

通常，数值、字符串、布尔值这三种类型，合称为原始类型(primitive type)的值，即它们是最基本的数据类型，不能再细分了。对象则称为合成类型(complex type)的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。至于`undefined`和`null`，一般将它们看成两个特殊值。

对象是最复杂的数据类型，又可以分成三个子类型。

- 狭义的对象(object)
- 数组(array)
- 函数(function)

狭义的对象和数组是两种不同的数据组合方式，除非特别声明，本教程的“对象”都特指狭义的对象。函数其实是处理数据的方法，JavaScript 把它当成一种数据类型，可以赋值给变量，这为编程带来了很大的灵活性，也为 JavaScript 的“函数式编程”奠定了基础。

- **字符串string**

- - 字符串可以用""(单引号)或者''(双引号)或者``(反引号:ES6支持)

- - 单双引号没有区别，但是不要混合用

- - 在字符串中要使用js的变量有两种写法

- - - ES5支持的用字符串拼接的方法

- - - ES6中支持的必须用``(反引号)才支持的${变量名}的写法 
      用``写的字符串又被称作**模板字符串**,能够更轻松的在字符串中插入变量

- - 当需要用一些特殊符号表示时，可以在特殊符号前加一个\和转义字符的用法基本相似比如用\ "表示" 
    \ \ 表示 \

    

- **数值number**

- - JS中可以表示数值的最大值Number.MAX_VALUE

- - 如果超过了最大值,就会返回一个Infinity意为无穷,此时这个无穷是正无穷,而-Infinity为负无穷

- - NaN也是一个特殊的数字，意为not a number,可以用很多方法得到这个数 
    比如:两个字符串相乘返回NaN

- - Number.MIN_VALUE为最小值,但是是0以上的最小值,并不是负数

- - JS中的整数运算可以基本保证精确，浮点运算得到的结果不够精确

  

- **布尔值boolean** 
  该类型只有两个值:true(正确),false(错误)



- **null** 
  null的值就是null，专门用来表示空对象



- **undefined**

- - undefined的类型只有一个,就是undefined,当声明一个变量,却不给它赋值时,它的值就是undefined

- - 使用typeof来检验undefined也会返回undefined

  

- **object** 
  这个类型的值最多,应为所有事物都可以看做是对象



### 3.4 String



#### 3.4.1  定义

字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。

```js
'abc'
"abc"
```

单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号。

```js
'key = "value"'
"It's a long journey"
```

上面两个都是合法的字符串。

如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。

```js
'Did she say \'Hello\'?'
// "Did she say 'Hello'?"

"Did she say \"Hello\"?"
// "Did she say "Hello"?"
```

::: tip
由于 HTML 语言的属性值使用双引号，所以很多项目约定 JavaScript 语言的字符串只使用单引号。当然，只使用双引号也完全可以。重要的是坚持使用一种风格，不要一会使用单引号表示字符串，一会又使用双引号表示。
:::

字符串默认只能写在一行内，分成多行将会报错。

```js
'a
b
c'
// SyntaxError: Unexpected token ILLEGAL
```

上面代码将一个字符串分成三行，JavaScript 就会报错。

如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。

```js
const longString =
  'Long \
long \
long \
string';

longString;
// "Long long long string"
```

上面代码表示，加了反斜杠以后，原来写在一行的字符串，可以分成多行书写。但是，输出的时候还是单行，效果与写在同一行完全一样。注意，反斜杠的后面必须是换行符，而不能有其他字符(比如空格)，否则会报错。

连接运算符(`+`)可以连接多个单行字符串，将长字符串拆成多行书写，输出的时候也是单行。

```js
const longString = 'Long '
  + 'long '
  + 'long '
  + 'string';
```

如果想输出多行字符串，有一种利用多行注释的变通方法。

```js
(function () {
  /*
line 1
line 2
line 3
*/
}
  .toString()
  .split('\n')
  .slice(1, -1)
  .join('\n'));
// "line 1
// line 2
// line 3"
```

上面的例子中，输出的字符串就是多行。



#### 3.4.2 转义

反斜杠(\)在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。

需要用反斜杠转义的特殊字符，主要有下面这些。

- `\0` : null(`\u0000`)
- `\b` : 后退键(`\u0008`)
- `\f` : 换页符(`\u000C`)
- `\n` : 换行符(`\u000A`)
- `\r` : 回车键(`\u000D`)
- `\t` : 制表符(`\u0009`)
- `\v` : 垂直制表符(`\u000B`)
- `\'` : 单引号(`\u0027`)
- `\"` : 双引号(`\u0022`)
- `\\` : 反斜杠(`\u005C`)

上面这些字符前面加上反斜杠，都表示特殊含义。

```js
console.log('1\n2');
// 1
// 2
```

上面代码中，`\n`表示换行，输出的时候就分成了两行。

反斜杠还有三种特殊用法。

1. `\HHH`

   反斜杠后面紧跟三个八进制数(`000`到`377`)，代表一个字符。`HHH`对应该字符的 Unicode 码点，比如`\251`表示版权符号。显然，这种方法只能输出 256 种字符。

1. `\xHH`

   `\x`后面紧跟两个十六进制数(`00`到`FF`)，代表一个字符。`HH`对应该字符的 Unicode 码点，比如`\xA9`表示版权符号。这种方法也只能输出 256 种字符。

1. `\uXXXX`

   `\u`后面紧跟四个十六进制数(`0000`到`FFFF`)，代表一个字符。`XXXX`对应该字符的 Unicode 码点，比如`\u00A9`表示版权符号。

   下面是这三种字符特殊写法的例子。

   ```js
   '\251'; // "©"
   '\xA9'; // "©"
   '\u00A9'; // "©"

   '\172' === 'z'; // true
   '\x7A' === 'z'; // true
   '\u007A' === 'z'; // true
   ```

如果在非特殊字符前面使用反斜杠，则反斜杠会被省略。

```js
'\a';
// "a"
```

上面代码中，`a`是一个正常字符，前面加反斜杠没有特殊含义，反斜杠会被自动省略。

如果字符串的正常内容之中，需要包含反斜杠，则反斜杠前面需要再加一个反斜杠，用来对自身转义。

```js
'Prev \\ Next';
// "Prev \ Next"
```



#### 3.4.3 多行字符串

由于多行字符串用 `\n` 写起来比较费事，所以最新的 ES6 标准新增了一种多行字符串的表示方法，用反引号 ` 表示:

```js
`这是一个
多行
字符串`;
```

::: tip
反引号在键盘的 **ESC** 下方，数字键 1 的左边。
:::



#### 3.4.4 模板字符串

要把多个字符串连接起来，可以用 `+` 号连接:

```js
const name = '小明';
const age = 20;
const message = '您好, ' + name + ', 您今年' + age + '岁了!';

alert(message);
```

如果有很多变量需要连接，用 `+` 号就比较麻烦。ES6 新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量:

```js
const name = '小明';
const age = 20;
const message = `您好, ${name}, 您今年${age}岁了!`;

alert(message);
```



#### 3.4.5 字符串与数组

字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符(位置编号从 0 开始)。

```js
const s = 'hello';

s[0]; // "h"
s[1]; // "e"
s[4]; // "o"

// 直接对字符串使用方括号运算符
'hello'[1]; // "e"
```

如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回`undefined`。

```js
'abc'[3]; // undefined
'abc'[-1]; // undefined
'abc'['x']; // undefined
```

::: warning
需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值或进行删除操作，不会有任何错误，但是也没有任何效果:

```js
const s = 'hello';

delete s[0];
s; // "hello"

s[1] = 'a';
s; // "hello"

s[5] = '!';
s; // "hello"
```

:::



#### 3.4.6 length 属性

`length`属性返回字符串的长度，该属性也是无法改变的。

```js
const s = 'hello';

s.length; // 5

s.length = 3;
s.length; // 5

s.length = 7;
s.length; // 5
```

上面代码表示字符串的`length`属性无法改变，但是不会报错。



#### 3.4.7 字符集

JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示。

JavaScript 不仅以 Unicode 储存字符，还允许直接在程序中使用 Unicode 码点表示字符，即将字符写成`\uxxxx`的形式，其中`xxxx`代表该字符的 Unicode 码点。比如，`\u00A9`代表版权符号。

```js
const s = '\u00A9';

s; // "©"
```

解析代码的时候，JavaScript 会自动识别一个字符是字面形式表示，还是 Unicode 形式表示。输出给用户的时候，所有字符都会转成字面形式。

```js
const foo = 'abc';

foo; // "abc"
```

上面代码中，第一行的变量名`foo`是 Unicode 形式表示，第二行是字面形式表示。JavaScript 会自动识别。

我们还需要知道，每个字符在 JavaScript 内部都是以 16 位(即 2 个字节)的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为 16 位长度，即 2 个字节。

但是，UTF-16 有两种长度: 对于码点在`U+0000`到`U+FFFF`之间的字符，长度为 16 位(即 2 个字节)；对于码点在`U+10000`到`U+10FFFF`之间的字符，长度为 32 位(即 4 个字节)，而且前两个字节在`0xD800`到`0xDBFF`之间，后两个字节在`0xDC00`到`0xDFFF`之间。举例来说，码点`U+1D306`对应的字符为`𝌆，`它写成 UTF-16 就是`0xD834 0xDF06`。

JavaScript 对 UTF-16 的支持是不完整的，由于历史原因，只支持两字节的字符，不支持四字节的字符。这是因为 JavaScript 第一版发布的时候，Unicode 的码点只编到`U+FFFF`，因此两字节足够表示了。后来，Unicode 纳入的字符越来越多，出现了四字节的编码。但是，JavaScript 的标准此时已经定型了，统一将字符长度限制在两字节，导致无法识别四字节的字符。上一节的那个四字节字符`𝌆`，浏览器会正确识别这是一个字符，但是 JavaScript 无法识别，会认为这是两个字符。

```js
'𝌆'.length; // 2
```

上面代码中，JavaScript 认为`𝌆`的长度为 2，而不是 1。

总结一下，对于码点在`U+10000`到`U+10FFFF`之间的字符，JavaScript 总是认为它们是两个字符(`length`属性为 2)。所以处理的时候，必须把这一点考虑在内，也就是说，JavaScript 返回的字符串长度可能是不正确的。



#### 3.4.8 Base64 转码

有时，文本里面包含一些不可打印的符号，比如 ASCII 码 0 到 31 的符号都无法打印出来，这时可以使用 Base64 编码，将它们转成可以打印的字符。另一个场景是，有时需要以文本格式传递二进制数据，那么也可以使用 Base64 编码。

所谓 Base64 就是一种编码方法，可以将任意值转成 0 ～ 9、A ～ Z、a-z、`+`和`/`这 64 个字符组成的可打印字符。使用它的主要目的，不是为了加密，而是为了不出现特殊字符，简化程序的处理。

JavaScript 原生提供两个 Base64 相关的方法。

- `btoa()`: 任意值转为 Base64 编码
- `atob()`: Base64 编码转为原来的值

```js
const string = 'Hello World!';

btoa(string); // "SGVsbG8gV29ybGQh"
atob('SGVsbG8gV29ybGQh'); // "Hello World!"
```

注意，这两个方法不适合非 ASCII 码的字符，会报错。

```js
btoa('您好'); // 报错
```

要将非 ASCII 码字符转为 Base64 编码，必须中间插入一个转码环节，再使用这两个方法。

```js
function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('您好'); // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE'); // "您好"
```



### 3.5 Number



#### 3.5.1 整数和浮点数

JavaScript 内部，所有数字都是以 64 位浮点数形式储存，即使整数也是如此。所以，`1` 与 `1.0` 是相同的，是同一个数。

```js
1 === 1.0; // true
```

这就是说，JavaScript 语言的底层根本没有整数，所有数字都是小数(64 位浮点数)。容易造成混淆的是，某些运算只有整数才能完成，此时 JavaScript 会自动把 64 位浮点数，转成 32 位整数，然后再进行运算，

由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。

```js
0.1 + 0.2 === 0.3; // false

0.3 / 0.1; // 2.9999999999999996

0.3 - 0.2 === 0.2 - 0.1; // false
```



#### 3.5.2 数值精度

根据国际标准 IEEE 754，JavaScript 浮点数的 64 个二进制位，从最左边开始，是这样组成的。

- 第 1 位: 符号位，`0` 表示正数，`1` 表示负数
- 第 2 位到第 12 位(共 11 位): 指数部分
- 第 13 位到第 64 位(共 52 位): 小数部分(即有效数字)

符号位决定了一个数的正负，指数部分决定了数值的大小，小数部分决定了数值的精度。

指数部分一共有 11 个二进制位，因此大小范围就是 0 到 2047。IEEE 754 规定，如果指数部分的值在 0 到 2047 之间(不含两个端点)，那么有效数字的第一位默认总是 1，不保存在 64 位浮点数之中。也就是说，有效数字这时总是 `1.xx...xx` 的形式，其中 `xx..xx` 的部分保存在 64 位浮点数之中，最长可能为 52 位。因此，JavaScript 提供的有效数字最长为 53 个二进制位。

```
(-1)^符号位^ * 1.xx...xx * 2^指数部分^
```

上面公式是正常情况下(指数部分在 0 到 2047 之间)，一个数在 JavaScript 内部实际的表示形式。

精度最多只能到 53 个二进制位，这意味着，绝对值小于 2 的 53 次方的整数，即-2^53^到 2^53^，都可以精确表示。

```js
Math.pow(2, 53);
// 9007199254740992

Math.pow(2, 53) + 1;
// 9007199254740992

Math.pow(2, 53) + 2;
// 9007199254740994

Math.pow(2, 53) + 3;
// 9007199254740996

Math.pow(2, 53) + 4;
// 9007199254740996
```

上面代码中，大于 2 的 53 次方以后，整数运算的结果开始出现错误。所以，大于 2 的 53 次方的数值，都无法保持精度。由于 2 的 53 次方是一个 16 位的十进制数值，所以简单的法则就是，JavaScript 对 15 位的十进制数都可以精确处理。

```js
Math.pow(2, 53);
// 9007199254740992

// 多出的三个有效数字，将无法保存
9007199254740992111;
// 9007199254740992000
```

上面示例表明，大于 2 的 53 次方以后，多出来的有效数字(最后三位的 `111` )都会无法保存，变成 0。



#### 3.5.3 数值范围

根据标准，64 位浮点数的指数部分的长度是 11 个二进制位，意味着指数部分的最大值是 2047(2 的 11 次方减 1)。也就是说，64 位浮点数的指数部分的值最大为 2047，分出一半表示负数，则 JavaScript 能够表示的数值范围为 2^1024^到 2^-1023^(开区间)，超出这个范围的数无法表示。

如果一个数大于等于 2 的 1024 次方，那么就会发生“正向溢出”，即 JavaScript 无法表示这么大的数，这时就会返回`Infinity`。

```js
Math.pow(2, 1024); // Infinity
```

如果一个数小于等于 2 的 -1075 次方(指数部分最小值 -1023，再加上小数部分的 52 位)，那么就会发生为“负向溢出”，即 JavaScript 无法表示这么小的数，这时会直接返回 0。

```js
Math.pow(2, -1075); // 0
```

下面是一个实际的例子。

```js
let x = 0.5;

for (let i = 0; i < 25; i++) x = x * x;

x; // 0
```

上面代码中，对 `0.5` 连续做 25 次平方，由于最后结果太接近 0，超出了可表示的范围，JavaScript 就直接将其转为 0。

JavaScript 提供 `Number` 对象的 `MAX_VALUE` 和 `MIN_VALUE` 属性，返回可以表示的具体的最大值和最小值。

```js
Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MIN_VALUE; // 5e-324
```



#### 3.5.4 数值的表示法

JavaScript 的数值有多种表示方法，可以用字面形式直接表示，比如 `35` (十进制)和 `0xFF` (十六进制)。

数值也可以采用科学计数法表示，下面是几个科学计数法的例子。

```js
123e3; // 123000
123e-3 - 3.1e12; // 0.123
0.1e-23;
```

科学计数法允许字母 `e` 或 `E` 的后面，跟着一个整数，表示这个数值的指数部分。

以下两种情况，JavaScript 会自动将数值转为科学计数法表示，其他情况都采用字面形式直接表示。

1. 小数点前的数字多于 21 位。

   ```js
   1234567890123456789012;
   // 1.2345678901234568e+21

   123456789012345678901;
   // 123456789012345680000
   ```

2. 小数点后的零多于 5 个。

   ```js
   // 小数点后紧跟5个以上的零，
   // 就自动转为科学计数法
   0.0000003; // 3e-7

   // 否则，就保持原来的字面形式
   0.000003; // 0.000003
   ```



#### 3.5.5 数值的进制

使用字面量(literal)直接表示一个数值时，JavaScript 对整数提供四种进制的表示方法: 十进制、十六进制、八进制、二进制。

- 十进制: 没有前导 0 的数值。
- 八进制: 有前缀 `0o` 或 `0O` 的数值，或者有前导 0、且只用到 0-7 的八个阿拉伯数字的数值。
- 十六进制: 有前缀 `0x` 或 `0X` 的数值。
- 二进制: 有前缀 `0b` 或 `0B` 的数值。

默认情况下，JavaScript 内部会自动将八进制、十六进制、二进制转为十进制。下面是一些例子。

```js
0xff; // 255
0o377; // 255
0b11; // 3
```

如果八进制、十六进制、二进制的数值里面，出现不属于该进制的数字，就会报错。

```js
0xzz // 报错
0o88 // 报错
0b22 // 报错
```

上面代码中，十六进制出现了字母 `z`、八进制出现数字 `8`、二进制出现数字 `2`，因此报错。

通常来说，有前导 0 的数值会被视为八进制，但是如果前导 0 后面有数字 `8` 和 `9`，则该数值被视为十进制。

```js
0888; // 888
0777; // 511
```

前导 0 表示八进制，处理时很容易造成混乱。ES5 的严格模式和 ES6，已经废除了这种表示法，但是浏览器为了兼容以前的代码，目前还继续支持这种表示法。



#### 3.5.6 正零和负零

前面说过，JavaScript 的 64 位浮点数之中，有一个二进制位是符号位。这意味着，任何一个数都有一个对应的负值，就连`0`也不例外。

JavaScript 内部实际上存在 2 个 `0`: 一个是 `+0`，一个是 `-0`，区别就是 64 位浮点数表示法的符号位不同。它们是等价的。

```js
-0 === +0; // true
0 === -0; // true
0 === +0; // true
```

几乎所有场合，正零和负零都会被当作正常的 `0`。

```js
+0 - // 0
  0(
    // 0
    -0
  )
    .toString()(
      // '0'
      +0
    )
    .toString(); // '0'
```

唯一有区别的场合是，`+0` 或 `-0` 当作分母，返回的值是不相等的。

```js
1 / +0 === 1 / -0; // false
```

上面的代码之所以出现这样结果，是因为除以正零得到 `+Infinity`，除以负零得到 `-Infinity`，这两者是不相等的 (关于 `Infinity` 详见下文)。



#### 3.5.7 NaN

`NaN` 是 JavaScript 的特殊值，表示“非数字”(Not a Number)，主要出现在将字符串解析成数字出错的场合。

```js
5 - "x"; // NaN
```

上面代码运行时，会自动将字符串 `x` 转为数值，但是由于 `x` 不是数值，所以最后得到结果为 `NaN`，表示它是“非数字” (`NaN`)。

另外，一些数学函数的运算结果会出现 `NaN`。

```js
Math.acos(2); // NaN
Math.log(-1); // NaN
Math.sqrt(-1); // NaN
```

`0` 除以 `0` 也会得到 `NaN`。

```js
0 / 0; // NaN
```

需要注意的是，`NaN` 不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于 `Number`，使用 `typeof` 运算符可以看得很清楚。

```js
typeof NaN; // 'number'
```

**NaN 运算规则**

`NaN` 不等于任何值，包括它本身。

```js
NaN === NaN; // false
```

数组的 `indexOf` 方法内部使用的是严格相等运算符，所以该方法对 `NaN` 不成立。

```js
[NaN].indexOf(NaN); // -1
```

`NaN` 在布尔运算时被当作 `false`。

```js
Boolean(NaN); // false
```

`NaN` 与任何数(包括它自己)的运算，得到的都是 `NaN`。

```js
NaN + 32; // NaN
NaN - 32; // NaN
NaN * 32; // NaN
NaN / 32; // NaN
```



#### 3.5.8 Infinity

`Infinity` 表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非 0 数值除以 0，得到 `Infinity`。

```js
// 场景一
Math.pow(2, 1024);
// Infinity

// 场景二
0 / 0; // NaN
1 / 0; // Infinity
```

上面代码中，第一个场景是一个表达式的计算结果太大，超出了能够表示的范围，因此返回 `Infinity`。第二个场景是 `0` 除以 `0` 会得到 `NaN`，而非 0 数值除以 `0`，会返回 `Infinity`。

`Infinity` 有正负之分，`Infinity` 表示正的无穷，`-Infinity` 表示负的无穷。

```js
Infinity === -Infinity; // false

1 / -0; // -Infinity
-1 / -0; // Infinity
```

上面代码中，非零正数除以 `-0`，会得到 `-Infinity`，负数除以 `-0`，会得到 `Infinity`。

由于数值正向溢出(overflow)、负向溢出(underflow)和被 `0` 除，JavaScript 都不报错，所以单纯的数学运算几乎没有可能抛出错误。

`Infinity` 大于一切数值 (除了 `NaN`)，`-Infinity` 小于一切数值 (除了 `NaN`)。

```js
Infinity > 1000; // true

-Infinity < -1000; // true
```

`Infinity` 与 `NaN` 比较，总是返回 `false`。

```js
Infinity > NaN; // false
-Infinity > NaN; // false
Infinity < NaN; // false
-Infinity < NaN; // false
```

**Infinity 运算规则**

`Infinity`的四则运算，符合无穷的数学计算规则。

```js
5 * Infinity; // Infinity
5 - Infinity; // -Infinity
Infinity / 5; // Infinity
5 / Infinity; // 0
```

0 乘以`Infinity`，返回`NaN`；0 除以`Infinity`，返回`0`；`Infinity`除以 0，返回`Infinity`。

```js
0 * Infinity; // NaN
0 / Infinity; // 0
Infinity / 0; // Infinity
```

`Infinity`加上或乘以`Infinity`，返回的还是`Infinity`。

```js
Infinity + Infinity; // Infinity
Infinity * Infinity; // Infinity
```

`Infinity`减去或除以`Infinity`，得到`NaN`。

```js
Infinity - Infinity; // NaN
Infinity / Infinity; // NaN
```

`Infinity`与`null`计算时，`null`会转成 0，等同于与`0`的计算。

```js
null * Infinity; // NaN
null / Infinity; // 0
Infinity / null; // Infinity
```

`Infinity`与`undefined`计算，返回的都是`NaN`。

```js
undefined + Infinity; // NaN
undefined - Infinity; // NaN
undefined * Infinity; // NaN
undefined / Infinity; // NaN
Infinity / undefined; // NaN
```



#### 3.5.9 与数值相关的全局方法



##### parseInt()

`parseInt`方法用于将字符串转为整数。

```js
parseInt("123"); // 123
```

如果字符串头部有空格，空格会被自动去除。

```js
parseInt("81"); // 81
```

如果`parseInt`的参数不是字符串，则会先转为字符串再转换。

```js
parseInt(1.23); // 1
// 等同于
parseInt("1.23"); // 1
```

字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。

```js
parseInt("8a"); // 8
parseInt("12**"); // 12
parseInt("12.34"); // 12
parseInt("15e2"); // 15
parseInt("15px"); // 15
```

上面代码中，`parseInt`的参数都是字符串，结果只返回字符串头部可以转为数字的部分。

如果字符串的第一个字符不能转化为数字(后面跟着数字的正负号除外)，返回`NaN`。

```js
parseInt("abc"); // NaN
parseInt(".3"); // NaN
parseInt(""); // NaN
parseInt("+"); // NaN
parseInt("+1"); // 1
```

所以，`parseInt`的返回值只有两种可能，要么是一个十进制整数，要么是`NaN`。

如果字符串以`0x`或`0X`开头，`parseInt`会将其按照十六进制数解析。

```js
parseInt("0x10"); // 16
```

如果字符串以`0`开头，将其按照 10 进制解析。

```js
parseInt("011"); // 11
```

对于那些会自动转为科学计数法的数字，`parseInt`会将科学计数法的表示方法视为字符串，因此导致一些奇怪的结果。

```js
parseInt(1000000000000000000000.5); // 1
// 等同于
parseInt("1e+21"); // 1

parseInt(0.0000008); // 8
// 等同于
parseInt("8e-7"); // 8
```



##### 进制转换

`parseInt`方法还可以接受第二个参数(2 到 36 之间)，表示被解析的值的进制，返回该值对应的十进制数。默认情况下，`parseInt`的第二个参数为 10，即默认是十进制转十进制。

```js
parseInt("1000"); // 1000
// 等同于
parseInt("1000", 10); // 1000
```

下面是转换指定进制的数的例子。

```js
parseInt("1000", 2); // 8
parseInt("1000", 6); // 216
parseInt("1000", 8); // 512
```

上面代码中，二进制、六进制、八进制的`1000`，分别等于十进制的 8、216 和 512。这意味着，可以用`parseInt`方法进行进制的转换。

如果第二个参数不是数值，会被自动转为一个整数。这个整数只有在 2 到 36 之间，才能得到有意义的结果，超出这个范围，则返回`NaN`。如果第二个参数是`0`、`undefined`和`null`，则直接忽略。

```js
parseInt("10", 37); // NaN
parseInt("10", 1); // NaN
parseInt("10", 0); // 10
parseInt("10", null); // 10
parseInt("10", undefined); // 10
```

如果字符串包含对于指定进制无意义的字符，则从最高位开始，只返回可以转换的数值。如果最高位无法转换，则直接返回`NaN`。

```js
parseInt("1546", 2); // 1
parseInt("546", 2); // NaN
```

上面代码中，对于二进制来说，`1`是有意义的字符，`5`、`4`、`6`都是无意义的字符，所以第一行返回 1，第二行返回`NaN`。

前面说过，如果`parseInt`的第一个参数不是字符串，会被先转为字符串。这会导致一些令人意外的结果。

```js
parseInt(0x11, 36); // 43
parseInt(0x11, 2); // 1

// 等同于
parseInt(String(0x11), 36);
parseInt(String(0x11), 2);

// 等同于
parseInt("17", 36);
parseInt("17", 2);
```

上面代码中，十六进制的`0x11`会被先转为十进制的 17，再转为字符串。然后，再用 36 进制或二进制解读字符串`17`，最后返回结果`43`和`1`。

这种处理方式，对于八进制的前缀 0，尤其需要注意。

```js
parseInt(011, 2); // NaN

// 等同于
parseInt(String(011), 2);

// 等同于
parseInt(String(9), 2);
```

上面代码中，第一行的`011`会被先转为字符串`9`，因为`9`不是二进制的有效字符，所以返回`NaN`。如果直接计算`parseInt('011', 2)`，`011`则是会被当作二进制处理，返回 3。

JavaScript 不再允许将带有前缀 0 的数字视为八进制数，而是要求忽略这个`0`。但是，为了保证兼容性，大部分浏览器并没有部署这一条规定。



##### parseFloat()

`parseFloat`方法用于将一个字符串转为浮点数。

```js
parseFloat("3.14"); // 3.14
```

如果字符串符合科学计数法，则会进行相应的转换。

```js
parseFloat("314e-2"); // 3.14
parseFloat("0.0314E+2"); // 3.14
```

如果字符串包含不能转为浮点数的字符，则不再进行往后转换，返回已经转好的部分。

```js
parseFloat("3.14more non-digit characters"); // 3.14
```

`parseFloat`方法会自动过滤字符串前导的空格。

```js
parseFloat("\t\v\r12.34\n "); // 12.34
```

如果参数不是字符串，或者字符串的第一个字符不能转化为浮点数，则返回`NaN`。

```js
parseFloat([]); // NaN
parseFloat("FF2"); // NaN
parseFloat(""); // NaN
```

上面代码中，尤其值得注意，`parseFloat`会将空字符串转为`NaN`。

这些特点使得`parseFloat`的转换结果不同于`Number`函数。

```js
parseFloat(true); // NaN
Number(true); // 1

parseFloat(null); // NaN
Number(null); // 0

parseFloat(""); // NaN
Number(""); // 0

parseFloat("123.45#"); // 123.45
Number("123.45#"); // NaN
```



##### isNaN()

`isNaN`方法可以用来判断一个值是否为`NaN`。

```js
isNaN(NaN); // true
isNaN(123); // false
```

但是，`isNaN`只对数值有效，如果传入其他值，会被先转成数值。比如，传入字符串的时候，字符串会被先转成`NaN`，所以最后返回`true`，这一点要特别引起注意。也就是说，`isNaN`为`true`的值，有可能不是`NaN`，而是一个字符串。

```js
isNaN("Hello"); // true
// 相当于
isNaN(Number("Hello")); // true
```

出于同样的原因，对于对象和数组，`isNaN`也返回`true`。

```js
isNaN({}); // true
// 等同于
isNaN(Number({})); // true

isNaN(["xzy"]); // true
// 等同于
isNaN(Number(["xzy"])); // true
```

但是，对于空数组和只有一个数值成员的数组，`isNaN`返回`false`。

```js
isNaN([]); // false
isNaN([123]); // false
isNaN(["123"]); // false
```

上面代码之所以返回`false`，原因是这些数组能被`Number`函数转成数值，请参见《数据类型转换》一章。

因此，使用`isNaN`之前，最好判断一下数据类型。

```js
function myIsNaN(value) {
  return typeof value === "number" && isNaN(value);
}
```

判断`NaN`更可靠的方法是，利用`NaN`为唯一不等于自身的值的这个特点，进行判断。

```js
function myIsNaN(value) {
  return value !== value;
}
```



##### isFinite()

`isFinite`方法返回一个布尔值，表示某个值是否为正常的数值。

```js
isFinite(Infinity); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
isFinite(undefined); // false
isFinite(null); // true
isFinite(-1); // true
```

除了`Infinity`、`-Infinity`、`NaN`和`undefined`这几个值会返回`false`，`isFinite`对于其他的数值都会返回`true`。



#### 3.5.10 数字的运算

`Number` 可以直接做四则运算，规则和数学一致:

```js
1 + 2; // 3
((1 + 2) * 5) / 2; // 7.5
2 / 0; // Infinity
0 / 0; // NaN
10 % 3; // 1
10.5 % 3; // 1.5
```

::: warning
注意`%`是求余运算。

由于任何编程语言都有一定的精度，除非已经确定被除数可以被除数整除，正常情况下如果想要保持精度程序中不应出现除法运算。
:::





### 3.6 Boolean



#### 3.6.1 定义

布尔值代表“真”和“假”两个状态。“真”用关键字 `true` 表示，“假”用关键字 `false` 表示。布尔值只有这两个值。

下列运算符会返回布尔值:

- 前置逻辑运算符: `!` (Not)
- 相等运算符: `===`，`!==`，`==`，`!=`
- 比较运算符: `>`，`>=`，`<`，`<=`

如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为 `false`，其他值都视为 `true`。

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `""` 或 `''`(空字符串)

布尔值往往用于程序流程的控制，请看一个例子。

```js
if ("") {
  console.log("true");
}
// 没有任何输出
```

上面代码中，`if` 命令后面的判断条件，预期应该是一个布尔值，所以 JavaScript 自动将空字符串，转为布尔值 `false`，导致程序不会进入代码块，所以没有任何输出。

::: warning
注意，空数组(`[]`)和空对象(`{}`)对应的布尔值，都是 `true`。

```js
if ([]) {
  console.log("true");
}
// true

if ({}) {
  console.log("true");
}
// true
```

:::



#### 3.6.2 比较运算符

当我们对 `Number` 做比较时，可以通过比较运算符得到一个布尔值:

```js
2 > 5; // false
5 >= 2; // true
7 == 7; // true
```

实际上，JavaScript 允许对任意数据类型做比较:

```js
false == 0; // true
false === 0; // false
```

要特别注意相等运算符 `==`。JavaScript 在设计时，有两种比较运算符:

- 第一种是 `==` 比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；

- 第二种是 `===` 比较，它不会自动转换数据类型，如果数据类型不一致，返回 `false`，如果一致，再比较。

::: warning
由于 JavaScript 这个设计缺陷，不要使用 `==` 比较，始终坚持使用 `===` 比较。
:::

另一个例外是 `NaN` 这个特殊的 `Number` 与所有其他值都不相等，包括它自己:

```js
NaN === NaN; // false
```

唯一能判断 `NaN` 的方法是通过 `isNaN()` 函数:

```js
isNaN(NaN); // true
```

最后要注意浮点数的相等比较:

```js
1 / 3 === 1 - 2 / 3; // false
```

这不是 JavaScript 的设计缺陷。浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值:

```js
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true
```



#### 3.6.3 布尔运算符



##### 与运算符 `&&`

`&&` 运算是与运算，从左至右运行时，检测到有任一表达式为 `false` 时，即停止执行输出该表达式的值，否则输出最后一个表达式的值。

也就是所只有所有表达式都为“真”时， `&&` 才会输出真值。

```js
true && true; // 这个&&语句计算结果为true
true && false; // 这个&&语句计算结果为false
false && true && false; // 这个&&语句计算结果为false
```



##### 或运算符 `||`

`||` 运算是或运算，从左至右运行时，检测到有任一表达式为 `true` 时，即停止执行输出该表达式的值，否则输出最后一个表达式的值。

也就是所只有所有表达式都为“假”时， `||` 才会输出假值。

```js
false || false; // 这个||语句计算结果为false
true || false; // 这个||语句计算结果为true
false || true || false; // 这个||语句计算结果为true
```



##### 非运算符 `!`

`!` 运算是非运算，它是一个单目运算符，把 `true` 变成`false`，`false` 变成 `true`:

::: tip
`!` 会等待其后的表达式运算完毕，之后将其转换为 Boolean 后给出一个相反的值。
:::

```js
!true; // 结果为false
!false; // 结果为true
!(2 > 5); // 结果为true
```

布尔值经常用在条件判断中，比如:

```js
let age = 15;

if (age >= 18) alert("adult");
else alert("teenager");
```





### 3.7 null和undefined



#### 3.7.1 概述

`null`与`undefined`都可以表示“没有”，含义非常相似。将一个变量赋值为`undefined`或`null`，老实说，语法效果几乎没区别。

```js
let a = undefined;
// 或者
let a = null;
```

上面代码中，变量`a`分别被赋值为`undefined`和`null`，这两种写法的效果几乎等价。

在`if`语句中，它们都会被自动转为`false`，相等运算符(`==`)甚至直接报告两者相等。

```js
if (!undefined) {
  console.log("undefined is false");
}
// undefined is false

if (!null) {
  console.log("null is false");
}
// null is false

undefined == null;
// true
```

从上面代码可见，两者的行为是何等相似！谷歌公司开发的 JavaScript 语言的替代品 Dart 语言，就明确规定只有`null`，没有`undefined`！

既然含义与用法都差不多，为什么要同时设置两个这样的值，这不是无端增加复杂度，令初学者困扰吗？这与历史原因有关。

1995 年 JavaScript 诞生时，最初像 Java 一样，只设置了`null`表示"无"。根据 C 语言的传统，`null`可以自动转为`0`。

```js
Number(null); // 0
5 + null; // 5
```

上面代码中，`null`转为数字时，自动变成 0。

但是，JavaScript 的设计者 Brendan Eich，觉得这样做还不够。首先，第一版的 JavaScript 里面，`null`就像在 Java 里一样，被当成一个对象，Brendan Eich 觉得表示“无”的值最好不是对象。其次，那时的 JavaScript 不包括错误处理机制，Brendan Eich 觉得，如果`null`自动转为 0，很不容易发现错误。

因此，他又设计了一个`undefined`。区别是这样的: `null`是一个表示“空”的对象，转为数值时为`0`；`undefined`是一个表示"此处无定义"的原始值，转为数值时为`NaN`。

```js
Number(undefined); // NaN
5 + undefined; // NaN
```



#### 3.7.2 用法和含义

对于`null`和`undefined`，大致可以像下面这样理解。

`null`表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入`null`，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入`null`，表示未发生错误。

`undefined`表示“未定义”，下面是返回`undefined`的典型场景。

```js
// 变量声明了，但没有赋值
let i;
i; // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f(); // undefined

// 对象没有赋值的属性
const o = new Object();
o.p; // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f(); // undefined
```



### 3.8 Object



#### 3.8.1 生成方法

对象(object)是 JavaScript 语言的核心概念，也是最重要的数据类型。

什么是对象？简单说，对象就是一组“键值对”(key-value)的集合，是一种无序的复合数据集合。

```js
const obj = {
  foo: "Hello",
  bar: "World",
};
```

上面代码中，大括号就定义了一个对象，它被赋值给变量`obj`，所以变量`obj`就指向一个对象。该对象内部包含两个键值对(又称为两个“成员”)，第一个键值对是`foo: 'Hello'`，其中`foo`是“键名”(成员的名称)，字符串`Hello`是“键值”(成员的值)。键名与键值之间用冒号分隔。第二个键值对是`bar: 'World'`，`bar`是键名，`World`是键值。两个键值对之间用逗号分隔。



#### 3.8.2 键名

对象的所有键名都是字符串(ES6 又引入了 Symbol 值也可以作为键名)，所以加不加引号都可以。上面的代码也可以写成下面这样。

```js
vconstar obj = {
  'foo': 'Hello',
  'bar': 'World'
};
```

如果键名是数值，会被自动转为字符串。

```js
const obj = {
  1: "a",
  3.2: "b",
  1e2: true,
  1e-2: true,
  0.234: true,
  0xff: true,
};

obj;
// Object {
//   1: "a",
//   3.2: "b",
//   100: true,
//   0.01: true,
//   0.234: true,
//   255: true
// }

obj["100"]; // true
```

上面代码中，对象`obj`的所有键名虽然看上去像数值，实际上都被自动转成了字符串。

如果键名不符合标识名的条件(比如第一个字符为数字，或者含有空格或运算符)，且也不是数字，则必须加上引号，否则会报错。

```js
// 报错
const obj = {
  1p: 'Hello World'
};

// 不报错
const obj = {
  '1p': 'Hello World',
  'h w': 'Hello World',
  'p+q': 'Hello World'
};
```

上面对象的三个键名，都不符合标识名的条件，所以必须加上引号。

对象的每一个键名又称为“属性”(property)，它的“键值”可以是任何数据类型。如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用。

```js
const obj = {
  p: function (x) {
    return 2 * x;
  },
};

obj.p(1); // 2
```

上面代码中，对象`obj`的属性`p`，就指向一个函数。

如果属性的值还是一个对象，就形成了链式引用。

```js
const o1 = {};
const o2 = { bar: "hello" };

o1.foo = o2;
o1.foo.bar; // "hello"
```

上面代码中，对象`o1`的属性`foo`指向对象`o2`，就可以链式引用`o2`的属性。

对象的属性之间用逗号分隔，最后一个属性后面可以加逗号(trailing comma)，也可以不加。

```js
const obj = {
  p: 123,
  m: function () { ... },
}
```

上面的代码中，`m`属性后面的那个逗号，有没有都可以。

属性可以动态创建，不必在对象声明时就指定。

```js
const obj = {};

obj.foo = 123;
obj.foo; // 123
```

上面代码中，直接对`obj`对象的`foo`属性赋值，结果就在运行时创建了`foo`属性。



#### 3.8.3 对象的引用

如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。

```js
const o1 = {};
const o2 = o1;

o1.a = 1;
o2.a; // 1

o2.b = 2;
o1.b; // 2
```

上面代码中，`o1`和`o2`指向同一个对象，因此为其中任何一个变量添加属性，另一个变量都可以读写该属性。

此时，如果取消某一个变量对于原对象的引用，不会影响到另一个变量。

```js
const o1 = {};
const o2 = o1;

o1 = 1;
o2; // {}
```

上面代码中，`o1`和`o2`指向同一个对象，然后`o1`的值变为 1，这时不会对`o2`产生影响，`o2`还是指向原来的那个对象。

但是，这种引用只局限于对象，如果两个变量指向同一个原始类型的值。那么，变量这时都是值的拷贝。

```js
const x = 1;
const y = x;

x = 2;
y; // 1
```

上面的代码中，当`x`的值发生变化后，`y`的值并不变，这就表示`y`和`x`并不是指向同一个内存地址。



#### 3.8.4 表达式or语句

对象采用大括号表示，这导致了一个问题: 如果行首是一个大括号，它到底是表达式还是语句？

```js
{
  foo: 123;
}
```

JavaScript 引擎读到上面这行代码，会发现可能有两种含义。第一种可能是，这是一个表达式，表示一个包含`foo`属性的对象；第二种可能是，这是一个语句，表示一个代码区块，里面有一个标签`foo`，指向表达式`123`。

为了避免这种歧义，JavaScript 引擎的做法是，如果遇到这种情况，无法确定是对象还是代码块，一律解释为代码块。

```js
{
  console.log(123);
} // 123
```

上面的语句是一个代码块，而且只有解释为代码块，才能执行。

如果要解释为对象，最好在大括号前加上圆括号。因为圆括号的里面，只能是表达式，所以确保大括号只能解释为对象。

```js
({ foo: 123 }) // 正确
({ console.log(123) }) // 报错
```

这种差异在`eval`语句(作用是对字符串求值)中反映得最明显。

```js
eval("{foo: 123}"); // 123
eval("({foo: 123})"); // {foo: 123}
```

上面代码中，如果没有圆括号，`eval`将其理解为一个代码块；加上圆括号以后，就理解成一个对象。



#### 3.8.5 属性的操作



##### 属性的读取

读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。

```js
const obj = {
  p: "Hello World",
};

obj.p; // "Hello World"
obj["p"]; // "Hello World"
```

上面代码分别采用点运算符和方括号运算符，读取属性`p`。

请注意，如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理。

```js
const foo = "bar";

const obj = {
  foo: 1,
  bar: 2,
};

obj.foo; // 1
obj[foo]; // 2
```

上面代码中，引用对象`obj`的`foo`属性时，如果使用点运算符，`foo`就是字符串；如果使用方括号运算符，但是不使用引号，那么`foo`就是一个变量，指向字符串`bar`。

方括号运算符内部还可以使用表达式。

```js
obj["hello" + " world"];
obj[3 + 3];
```

数字键可以不加引号，因为会自动转成字符串。

```js
const obj = {
  0.7: "Hello World",
};

obj["0.7"]; // "Hello World"
obj[0.7]; // "Hello World"
```

上面代码中，对象`obj`的数字键`0.7`，加不加引号都可以，因为会被自动转为字符串。

注意，数值键名不能使用点运算符(因为会被当成小数点)，只能使用方括号运算符。

```js
const obj = {
  123: 'hello world'
};

obj.123 // 报错
obj[123] // "hello world"
```

上面代码的第一个表达式，对数值键名`123`使用点运算符，结果报错。第二个表达式使用方括号运算符，结果就是正确的。



##### 属性的赋值

点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。

```js
const obj = {};

obj.foo = "Hello";
obj["bar"] = "World";
```

上面代码中，分别使用点运算符和方括号运算符，对属性赋值。

JavaScript 允许属性的“后绑定”，也就是说，您可以在任意时刻新增属性，没必要在定义对象的时候，就定义好属性。

```js
const obj = { p: 1 };

// 等价于

const obj = {};

obj.p = 1;
```



##### 属性的查看

查看一个对象本身的所有属性，可以使用`Object.keys`方法。

```js
const obj = {
  key1: 1,
  key2: 2,
};

Object.keys(obj);
// ['key1', 'key2']
```



##### 属性的删除: delete 命令

`delete`命令用于删除对象的属性，删除成功后返回`true`。

```js
const obj = { p: 1 };

Object.keys(obj); // ["p"]

delete obj.p; // true
obj.p; // undefined
Object.keys(obj); // []
```

上面代码中，`delete`命令删除对象`obj`的`p`属性。删除后，再读取`p`属性就会返回`undefined`，而且`Object.keys`方法的返回值也不再包括该属性。

注意，删除一个不存在的属性，`delete`不报错，而且返回`true`。

```js
const obj = {};

delete obj.p; // true
```

上面代码中，对象`obj`并没有`p`属性，但是`delete`命令照样返回`true`。因此，不能根据`delete`命令的结果，认定某个属性是存在的。

只有一种情况，`delete`命令会返回`false`，那就是该属性存在，且不得删除。

```js
const obj = Object.defineProperty({}, "p", {
  value: 123,
  configurable: false,
});

obj.p; // 123
delete obj.p; // false
```

上面代码之中，对象`obj`的`p`属性是不能删除的，所以`delete`命令返回`false`(关于`Object.defineProperty`方法的介绍，请看《标准库》的 Object 对象一章)。

另外，需要注意的是，`delete`命令只能删除对象本身的属性，无法删除继承的属性(关于继承参见《面向对象编程》章节)。

```js
const obj = {};

delete obj.toString; // true
obj.toString; // function toString() { [native code] }
```

上面代码中，`toString`是对象`obj`继承的属性，虽然`delete`命令返回`true`，但该属性并没有被删除，依然存在。这个例子还说明，即使`delete`返回`true`，该属性依然可能读取到值。



##### 属性是否存在: in 运算符

`in`运算符用于检查对象是否包含某个属性(注意，检查的是键名，不是键值)，如果包含就返回`true`，否则返回`false`。它的左边是一个字符串，表示属性名，右边是一个对象。

```js
const obj = { p: 1 };

"p" in obj; // true
"toString" in obj; // true
```

`in`运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。就像上面代码中，对象`obj`本身并没有`toString`属性，但是`in`运算符会返回`true`，因为这个属性是继承的。

这时，可以使用对象的`hasOwnProperty`方法判断一下，是否为对象自身的属性。

```js
const obj = {};

if ("toString" in obj) {
  console.log(obj.hasOwnProperty("toString")); // false
}
```



##### 属性的遍历: for...in 循环

`for...in`循环用来遍历一个对象的全部属性。

```js
const obj = { a: 1, b: 2, c: 3 };

for (let i in obj) {
  console.log("键名: ", i);
  console.log("键值: ", obj[i]);
}
// 键名:  a
// 键值:  1
// 键名:  b
// 键值:  2
// 键名:  c
// 键值:  3
```

`for...in`循环有两个使用注意点。

- 它遍历的是对象所有可遍历(enumerable)的属性，会跳过不可遍历的属性。
- 它不仅遍历对象自身的属性，还遍历继承的属性。

举例来说，对象都继承了`toString`属性，但是`for...in`循环不会遍历到这个属性。

```js
const obj = {};

// toString 属性是存在的
obj.toString; // toString() { [native code] }

for (let p in obj) {
  console.log(p);
} // 没有任何输出
```

上面代码中，对象`obj`继承了`toString`属性，该属性不会被`for...in`循环遍历到，因为它默认是“不可遍历”的。关于对象属性的可遍历性，参见《标准库》章节中 Object 一章的介绍。

如果继承的属性是可遍历的，那么就会被`for...in`循环遍历到。但是，一般情况下，都是只想遍历对象自身的属性，所以使用`for...in`的时候，应该结合使用`hasOwnProperty`方法，在循环内部判断一下，某个属性是否为对象自身的属性。

```js
const person = { name: "老张" };

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name
```



#### 3.8.6 with 语句

`with`语句的格式如下:

```js
with (对象) {
  语句;
}
```

它的作用是操作同一个对象的多个属性时，提供一些书写的方便。

```js
// 例一
const obj = {
  p1: 1,
  p2: 2,
};

with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二
with (document.links[0]) {
  console.log(href);
  console.log(title);
  console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);
```

注意，如果`with`区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。

```js
const obj = {};

with (obj) {
  p1 = 4;
  p2 = 5;
}

obj.p1; // undefined
p1; // 4
```

上面代码中，对象`obj`并没有`p1`属性，对`p1`赋值等于创造了一个全局变量`p1`。正确的写法应该是，先定义对象`obj`的属性`p1`，然后在`with`区块内操作它。

这是因为`with`区块没有改变作用域，它的内部依然是当前作用域。这造成了`with`语句的一个很大的弊病，就是绑定对象不明确。

```js
with (obj) {
  console.log(x);
}
```

单纯从上面的代码块，根本无法判断`x`到底是全局变量，还是对象`obj`的一个属性。这非常不利于代码的除错和模块化，编译器也无法对这段代码进行优化，只能留到运行时判断，这就拖慢了运行速度。因此，建议不要使用`with`语句，可以考虑用一个临时变量代替`with`。

```js
with (obj1.obj2.obj3) {
  console.log(p1 + p2);
}

// 可以写成
const temp = obj1.obj2.obj3;

console.log(temp.p1 + temp.p2);
```





### 3.9 强制类型转换



#### 3.9.1 将其他数据类型转换为String



**1.调用被转换数据类型的toString()方法**



**注:**

1. 该方法不能影响原来变量，而是有一个返回值

2. null和undefined这两个值没有toString()方法，如果调用会报错



```js
var a=123;
a=a.toString();
```



**原型prototype后说明toString()方法**



当我们直接在页面中打印一个对象时，实际上是输出对象的toString()方法的返回值,所以直接打印一个对象和打印这个对象用toString后的值是一样的,如果我们希望在输出对象时不输出[Object Object],可以为对象的原型添加一个toString()方法来改变输出的值,所以可以在里面写入自己想要的提示(直接只写return就可以),如果用的构造函数的方法最好加上this



**2.调用String()函数**



使用String()函数做强制转换时，实际对于Number和Boolen等调用toString()方法,但是对于null和undefined会直接转换为"null"和"undefined"



```js
var a=null; 
a=String(a);
```



#### 3.9.2将其他数据类型转换Number 



**1.使用Number()函数**

- - **字符串转换为数字**

- - - 如果是纯数字字符串，则直接转化为数字

- - - 如果字符串中有非数字字符，则返回NaN,只要有就会

- - - 如果是一个空串或者一个全是空格的字符串则会返回0

      如：

      ```js
      var a="123";
      a=Number(a);//会返回123
      var b="abc"
      b=Number(b);//会返回NaN
      ```

- - **布尔值转换为数字** 
    true为1,false为0

- - **null转化为数字为0**

- - **undefined转化为数字为NaN**



**2.使用parseInt()和parseFloat()函数** 
**注:该方法在ES6已经移植到Number对象下,作为Number的方法使用,与全局时的行为一样** 
该方法可以取出字符串的有效数字内容,从头开始取,parseInt是只要遇到非数字就会立刻结束,而parseFloat允许接收到一个小数点,遇到其他的非数字或者第二个小数点时会停止,想要把a="123px"中的123取出来的时候用这种方法才能达到效果 
**将一个小数转换为整数可以对它使用parseInt()函数** 
**注意:**

- - 这个方法最好专门对字符串用 如果对非String用回先把它转换为String再进行操作 
    **如：**如果是布尔值等会转换为"true"在这个字符串再进行转换，这样会返回NaN

- - 这个方法现在是可以直接作为window的方法调用,所以可以事件省略,但是ES6规定必须要通过Number内建函数来调用,所以最好还是通过Number对象调用

    ```
    var a="1.23px"
    console.log(Number.parseFloat(a));//1.23
    ```


**对数值及parseInt函数实现进制转换的补充:**

- - 在JS表达16进制数字，需要以0(零)x开头 。如:a=0x10,输出的时候得到a=16 
    任何用上方这种语法写的数字输出的时候都会转换为16进制的数字

- - 需要表示8进制的数字需要以0开头,用法如上

- - 2进制开头用0b表示(但不是所有浏览器都支持)

- - 实际上parseInt这个函数可以接收两个参数,第一个是要转换的字符串,第二个是需要转换的进制 
    **注意:**把 a="070"转化为整数,a=parseInt(a)再输出有些浏览器会当成8进制，有些浏览器会省略掉前面的0直接变为10进制，如果想所有的浏览器一样，可以a=parseInt(a,10)，添加第二个参数，来指定数字的进制

  
  
####  3.9.3 将其他的数据类型转换为Boolean

  **使用Boolean()函数**

- - 数字转换为布尔值，除了0和NaN都是true

- - 字符串转换为布尔值，除了空串都是true

- - null转换为布尔值，false

- - undefined转换为布尔值，false

- - 对象object也会转换为true


**六大假值:0  NaN  undefined  null  ""  false**



### 3.10 Symbol



#### 3.10.1 用法



**Symbol实际上是ES6引入的一种原始数据类型,Symbol引入出来的基础就是为了保存私有属性名,确保属性名发生冲突**,当引入一个别人创建的对象时,如果不清楚这个对象有哪些属性,但是又想要为这个对象添加一个属性时,这时两者如果有相同的属性名就会发生属性名的冲突问题,为了避免这种问题,所以引入了Symbol来创建一个独一无二的值



```js
//Symbol类型的值不能字面量创建,而是通过Symbol()函数来创建
var sym=Symbol();
console.log(sym);//Symbol();
console.log(typeof sym);//symbol
//现在当使用sym来做属性名时就不会与其他的属性名发生冲突
```



**注意:**

- **Symbo()函数不是一个构造函数,不能用new操作符。**所以Symbol类型的值也不是一个对象,不能添加任何属性,它只是一个类似于字符串的数据类型,如果在声明一个Symbol类型的值前面加上new就会报错

- **Symbol()类型的值不能够进行计算,**包括Symbol类型的任意数据类型都不可以,一旦进行计算就会报错

- Symbol类型的值可以转换为字符串和布尔值,但是不能转换为数值,否则会报错,

  并且转换成布尔值时永远都是true,不管内部是什么参数

  ```js
  var sym=Symbol();
  var sym1=Symbol(false);
  
  console.log(String(sym));"Symbol()"
  console.log(String(sym1));"Symbol(false)"
  console.log(Boolean(sym));//true
  console.log(Boolean(sym1))//true
  ```

- 因为是通过一个变量来接收的Symbol值,所以在使用Symbol值作为属性名时,获取对应的属性不能用点操作符,

  如果用点操作符实际上时获取一个字符串,而不是Symbol值。同时

  在对象内部用该变量创建属性名时也要要[]括起来

  否则该属性名依然只是一个字符串,而不是用的Symbol变量

  ```js
  //Symbol值作为属性名时有多种用法
  var name=Symbol();
  var a={};
  
  //第一种
  a[name]="孙悟空";
  
  //第二种
  a={
      [name]:"孙悟空";
  }
  
  //第三种
  Object.defineProperty(a,name,{value:"孙悟空"});//这里的name是变量
  
  //输出
  console.log(a.name);//undefined
  console.log(a[name]);//孙悟空
  console.log(a["name"]);//undefined
  ```

- 当遍历对象的属性值时,无法用for...in和for...of语句遍历到Symbol值的属性,也无法通过Object.keys() 、Object.getOwnPropertyNames()等函数来获取。

  但是可以通过使用Object.getOwnPropertySymbols()函数获取一个对象上的Symbol属性名,也可以使用Reflect.ownKeys()函数返回所有类型的属性名,包括常规的属性名和Symbol属性名

  ```js
  var sym1=Symbol("sym1");
  var sym2=Symbol("sym2");
  var a={
      [sym1]:"sym1",
      [sym2]:"sym2",
      hello:"hello"
  }
  console.log(Object.getOwnPropertyNames(a));//[Symbol(sym1),Symbol(sym2)]
  console.log(Object.keys(a));//["hello",Symbol(sym1),Symbol(sym2)]
  ```

  注:

  正因为Symbol值作为对象的属性值无法被遍历到的这一特性,可以对对象定义一些非私有的但是又希望只有内部可用的方法



#### 3.10.2 Symbol()的参数



- 字符串作参数

  在创建一个symbol类型的值的时候,如果不传入任何参数,在调用变量的时候不好进行去区分,打印的值全都是`Symbol()`,传入一个字符串作为参数,可以对Symbol的值进行描述,方便我们区分不同的Symbo值

  ```js
  var sym1=Symbol("sym1");
  var sym2=Symbol("sym2");
  var sym3=Symbol("sym1");
  console.log(sym1);//Symbol(sym1)
  console.log(sym2);//Symbol(sym2)
  console.log(sym1===sym3);//false
  
  /*
      1.给Symbol()函数传入参数后可以在控制台输出的时候区分到底是哪一个值
      2.Symbol()函数中传入的参数只是用来对当前的Symbol变量的描述,而没有其他意思,相同参数的
        Symbol()函数的返回值是不同的
  */
  ```

- **其他类型作参数** 
  **当用其它类型的值作为参数传入到Symbol()函数中时,会自动将该参数转换为字符串类型,但是注意当传入的值为undefined的时候此时Symbol()函数中相当于没有传入参数,所以返回的依然是Symbol()**



#### 3.10.3 Symbol.for与Symbol.keyFor函数



- Symbol.for()也函数可以用来生成Symbol值,但该函数有一个特殊的用处,该函数创建的Symbol值可以通过内部的参数重复使用一个Symbol值

  Symbol.for()函数接收一个字符串作为参数,先搜索有没有以该参数为名称的Symbol值,

  如果有直接返回这个Symbol值,如果没有就新建一个以给字符串为名称的Symbol值

  ```js
  var sym=Symbol("sym1");
  var sym1=Symbol.for("sym1");
  var sym2=Symbol.for("sym2");
  var sym3=Symbol.for("sym1");
  
  console.log(sym===sym1);//fasle,因为用Symbol()创建的Symbol值没有计入Symbol值的登记中
  console.log(sym1===sym2);//false,因为参数标识不一样,重新创建了Symbol值
  console.log(sym1===sym3);//true,参数标识一样,相当于先前是sym3=sym1
  ```

- Symbol.keyFor()函数用来查找一个Symbol值的登记信息(这个登记信息就是创建Symbol值时在函数中传入的参数)

  ,因为Symbol()函数创建的Symbol值没有登记机制,所以会返回undefined,而Symbol.for()函数会将生成的Symbol值的信息记录在全局环境中,所以Symbol.keyFor()函数可以查找到Symbol.for()函数创建的Symbol值，

  该函数的返回值是字符串

  ```js
  var sym1=Symbol.for("sym1");
  console.log(Symbol.keyFor(sym1));//"sym1"
  console.log(Symbol.keyFor(sym1)==="sym1");//true
  ```



### 3.11 解构赋值



**解构赋值为ES6的语法,ES6中,允许按照一定模式,从数数组和对象中提取值,对变量进行赋值,这种行为被称为解构**



```js
//右边为数组
var [a, b, c] = [1, 2, 3];
console.log(a, b, c);//1,2,3
//右边为对象
var {x:x,y:y,z:z} = {x: 1, y: 2, z: 3};
console.log(x, y, z);//1,2,3

var {x,y,z} = {x: 1, y: 2, z: 3};
console.log(x, y, z);//1,2,3
/*
注意:
1.当右边为对象时,对象中的属性也是模式的一部分,所以必须也要在左边写上相同的属性名
2.当左边的属性名和属性值的变量时相同时,可以只写属性值,这个属性值也是要用的变量名
*/

//模式不一致
var arr=[1,2,[3]];
var [a,b,c]=arr;
console.log(a,b,c);//1,2,[3]
//模式一致
var [a,b,[c]]=arr;
console.log(a,b,c);//1,2,[3]

var [json, arr, num, str] = [{ a: 1, b: 2 }, [1, 2, 3], 8, 'str'];
 console.log(json, arr, num, str);//{ a: 1, b: 2 }, [1, 2, 3], 8, 'str'
```

**注意:**

- 左右两边模式必须一样(都是数组或对象字面量)

- 声明和赋值赋值不能分开，必须在一句话里


