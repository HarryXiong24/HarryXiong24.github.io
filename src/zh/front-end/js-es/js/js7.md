---
icon: js
category: Web 前端
tag: 
  - JavaScript
  - Promise 对象
  - JS 异步
  - async 与 await
date: 2020-06-06
title: 7. 一般对象
---

## 一般对象

### 7.1 对象的分类

**JS 中数据类型有 String Number Boolean Null Undefined Object 前五个为基本数据类型,Object 对象为引用**

**数据类型,值只要不是前 5 种,都是对象**

```js
//使用基本数据类型创建变量
var name = "孙悟空";
var gender = "男";
var age = 18;
//使用基本数据类型的创建数据，我们所创建的变量都是独立，不能成为一个整体

//使用对象创建变量
var obj = { name: "孙悟空", gender: "男", age: 18 };
//对象属于一个复合的数据类型，在对象中可以保存多个不同数据类型的属性
```

**对象的分类:**

- **内建对象**
  由 es 标准中定义的对象，在任何的 ES 的实现中都可以使用,如 Math String Number Boolean Function Object
  等

- **宿主对象**
  由 js 的运算环境提供的对象，目前来讲主要指由浏览器提供的对象如 BOM DOM,如 console.log 中的 console 和
  document.write 中的 document 就是一个对象

- **自定义对象**
  由开发人员自己创建的对象

### 7.2 创建对象

#### 7.2.1 构造函数创建对象

**使用 new 关键字调用的函数，是构造函数 construstor,构造函数是专门用来创建对象的函数**

```js
var obj = new Object(); //通过构造函数的方式创建对象
console.log(typeof obj); //使用typeof检查一个对象时，会返回object
console.log(obj); //这里obj是一个空的对象,之间打印这个对象会返回Oject{}
```

- **属性**

在对象中保存的值称为属性,向对象中添加属性

语法:

对象.属性名=属性值 或 对象["属性名"]=属性值;

```js
var obj = new Object();
obj.name = "孙悟空";
obj.gender = "男";
obj.age = 18;
console.log(obj); //在这里obj中有值会打印出Object{name:"孙悟空",gender:"男",age:18}
```

- **读取对象中的属性**

**语法:**

**对象.属性名 或 对象["属性名"]**

**注:**如果读取对象中没有的属性,不会报错而是会返回 undefined

- **修改对象的属性值**

**语法:对象.属性名=新值 或 对象["属性名"]=新值**

- **删除对象的属性**

**语法:delete 对象.属性名 或 delete 对象["属性名"]**

**注:**删除后的属性不再存在于整个对象中,如果再次读取会返回 undefined

- **验证对象中是否有该属性**

**语法:"属性名" in 对象**

**注:**属性名实质上时字符串,所以要加引号

- **属性名**

- **对象的属性名不强制要求遵守标识符的规范,但是使用时尽量按照标识符的规范去做**

- **如果在创建属性名时用的是.或者[]方法中的一个,在调用和修改删除时也要用同样的方式调用**

- 要使用特殊的属性名，不能使用.的方式，需要用 对象["属性名"]=属性值的方式

  使用[]这种形式去操作属性更加的灵活，在

  []中甚至可以直接传递一个变量

  ,这样就能通过变量名来改变属性名,

  而

  .只能跟去掉了""的字符串.的方式,不能使用变量

  ```js
  var obj = new Object();
  var x = "name";

  obj["name"] = "孙悟空";
  obj["gender"] = "男";

  console.log(obj[x]); //打印结果为孙悟空
  x = "gender";
  console.log(obj[x]); //打印结果为男
  ```

  注意:

  - - 如果[]中是一个变量就不要加引号,否则会认为是一个字符串

  - - []里面除了字符串必须加引号，其他的可以不加引号，和基本数据类型相似

- **属性值**

JS 对象的属性值,可以是任意的数据类型,包括对象

```js
var obj=new Object();
obj.test=obj2;
obj2=new Object();
Obj2.name="猪八戒"；

console.log(obj.test);//打印出obj2对象
console.log(obj.test.name);//打印出猪八戒
//由此可以说明对象的属性值可以是以对象来构成无限嵌套关系
```

#### 7.2.2 对象字面量创建对象

**语法:{属性名:属性值,属性名:属性值....}**

```js
var obj = { name: "孙悟空", gender: "男", age: 18 };
```

**注意:**

- 属性名和属性值之间的=要变成:

- 对象字面量的属性名加引号也可以不加，建议不加。但是如果使用一些特殊非法的名字，必须加引号，汉字也
  可以使用，对象字面量里面也可以嵌套使用对象字面量

**对象字面量创建对象的简化操作**

- 在创建函数的时候可以省略`:function`,直接用函数名

- 可以使用[]对属性名进行操作

```js
var obj = {
  ["a" + "b"]: 123,

  /*
    say:function(){
        alert("hello");
    }
    */
  //方法的简写
  say() {
    alert("hello");
  },
};
```

#### 7.2.3 枚举对象中的属性

for…in 语句与 for...of 语句能够枚举对象中的属性，对象中有几个属性，循环体就会执行几次
**注:**

  - - for...of 语句只能遍历数组,不能遍历 JSON 对象

  - - for...in 的性能很差,因为会遍历对象的原型对象

```js
/*
语法:
for(var 变量 in/of 对象）{
}
*/
var obj = { name: "孙悟空", gender: "男", age: 18 };
for (var i in obj) {
  console.log(obj[i]); //打印出属性值
}
/*
for…in语句
每次执行时，会将对象中的属性名赋值给变量
可以利用console.log(n);来获取属性值，n取得的属性值都会转化为字符串的形式,和前面的查找一个属性是否在字符串里面用in的情况不同
*/

for (var i of obj) {
  console.log(i); //打印出属性值
}
/*
for...of语句
每次执行时,会将数组中的值赋值给变量，和for...in语句有所差别
*/
```

### 7.3 原型类与原型继承

#### 7.3.1 简述

在传统的基于 Class 的语言如 Java、C++ 中，继承的本质是扩展一个已有的 Class，并生成新的 Subclass。

由于这类语言严格区分类和实例，继承实际上是类型的扩展。但是，JavaScript 由于采用原型继承，我们无法直接扩展一个 Class，因为根本不存在 Class 这种类型。

但是办法还是有的。我们先回顾 Student 构造函数:

```js
function Student(props) {
  this.name = props.name || "Unnamed";
}

Student.prototype.hello = function() {
  alert(`Hello, ${this.name}!`);
};
```

以及 Student 的原型链:

![js-proto](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/front-end/js-es/js-proto.png?raw=true)

现在，我们要基于 `Student` 扩展出 `PrimaryStudent`，可以先定义出 `PrimaryStudent`:

```js
function PrimaryStudent(props) {
  // 调用Student构造函数，绑定this变量:
  Student.call(this, props);
  this.grade = props.grade || 1;
}
```

但是，调用了 `Student` 构造函数不等于继承了 `Student`，`PrimaryStudent` 创建的对象的原型是:

```js
new PrimaryStudent()---- >
  PrimaryStudent.prototype---- >
  Object.prototype---- >
  null;
```

必须想办法把原型链修改为:

```js
new PrimaryStudent()---- >
  PrimaryStudent.prototype---- >
  Student.prototype---- >
  Object.prototype---- >
  null;
```

这样，原型链对了，继承关系就对了。新的基于 `PrimaryStudent` 创建的对象不但能调用 `PrimaryStudent.prototype` 定义的方法，也可以调用 `Student.prototype` 定义的方法。

如果您想用最简单粗暴的方法这么干:

```js
PrimaryStudent.prototype = Student.prototype;
```

是不行的！如果这样的话，`PrimaryStudent` 和 `Student` 共享一个原型对象，那还要定义 `PrimaryStudent` 干啥？

我们必须借助一个中间对象来实现正确的原型链，这个中间对象的原型要指向 `Student.prototype`。为了实现这一点，参考发明 JSON 的道格拉斯的代码，中间对象可以用一个空函数 `F` 来实现:

```js
// PrimaryStudent构造函数:
function PrimaryStudent(props) {
  Student.call(this, props);
  this.grade = props.grade || 1;
}

// 空函数F:
function F() {}

// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型(就是new F()对象)上定义方法:
PrimaryStudent.prototype.getGrade = function() {
  return this.grade;
};

// 创建xiaoming:
const xiaoming = new PrimaryStudent({
  name: "小明",
  grade: 2,
});

xiaoming.name; // '小明'
xiaoming.grade; // 2

// 验证原型:
xiaoming.__proto__ === PrimaryStudent.prototype; // true
xiaoming.__proto__.__proto__ === Student.prototype; // true

// 验证继承关系:
xiaoming instanceof PrimaryStudent; // true
xiaoming instanceof Student; // true
```

用一张图来表示新的原型链:

![js-proto-extend](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/front-end/js-es/js-proto-extend.png?raw=true)

注意，函数 `F` 仅用于桥接，我们仅创建了一个 `new F()` 实例，而且，没有改变原有的 `Student` 定义的原型链。

如果把继承这个动作用一个 `inherits()` 函数封装起来，还可以隐藏 `F` 的定义，并简化代码:

```js
function inherits(Child, Parent) {
  const F = () => {};

  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}
```

这个 `inherits()` 函数可以复用:

```js
function Student(props) {
  this.name = props.name || "Unnamed";
}

Student.prototype.hello = function() {
  alert(`Hello, ${this.name}!`);
};

function PrimaryStudent(props) {
  Student.call(this, props);
  this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent, Student);

// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function() {
  return this.grade;
};
```

**原型继承总结**

JavaScript 的原型继承实现方式就是:

1. 定义新的构造函数，并在内部用 `call()` 调用希望“继承”的构造函数，并绑定 `this`；

2. 借助中间函数 `F` 实现原型链继承，最好通过封装的 `inherits` 函数完成；

3. 继续在新的构造函数的原型上定义新方法。

#### 7.3.2 定义类

```js
function Person() {
  this.name = "张三";
  this.age = 20;
}
var p = new Person();
alert(p.name);
```

**构造函数和原型链里面定义**

```js
// 声明的构造方法

  function Person(){
    this.name = "张三";
    this.age=20;
    this.run = function()){
    alert(this.name+"在运动");
   }
 }

 // 原型链的属性和方法

Person.prototype.sex="男";
Person.prototype.work=function(){
 alert(xx)
}
var p = new Person();
p.work();
```

**静态方法**

```js
Person.getInfo = function() {};
```

#### 7.3.3 原型继承

**对象冒充继承**

```js
  // 要实现Web类 继承 Person类 原型链+对象冒充的组合继承模式

  function Person(){
 this.name = "张三";
    this.age=20;
    this.run = function()){
      alert(this.name+"在运动");
    }
  }

  // 原型链的属性和方法

  Person.prototype.sex="男";
  Person.prototype.work=function(){
    alert(xx)
  }

  // 要实现Web类 继承 Person类

  function Web(){
    Person.call(this); //对象冒充继承
  }
  var w = new Web();
  w.run();//执行父类Person的run，对象冒充可以继承构造函数里面的属性和方法
  w.work();// 对象冒充可以继承构造函数的属性和方法 但是没办法继承原型链的属性和方法（prototype）

```

关于 call：

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = { a: 1, b: 2 };
console.error(add.call(obj, 3, 4)); // 10
```

大统上的说法就是，call 改变了 this 的指向。但是实际发生的过程，可以看成下面的样子。

```js
const o = {
  a: 1,
  b: 2,
  add: function(c, d) {
    return this.a + this.b + c + d;
  },
};
```

给 o 对象添加一个 add 属性，这个时候 this 就指向了 o，

o.add(5,7)得到的结果和 add.call(o, 5, 6)相同。

**原型链继承方法**

```js
function Person(){
    this.name = "张三";
    this.age=20;
    this.run = function()){
      alert(this.name+"在运动");
    }
  }

  // 原型链的属性和方法
  Person.prototype.sex="男";
  Person.prototype.work=function(){
    alert(xx)
  }

  // web原型链方式继承 person
  function web(){

  }

  web.prototype= new person(); // 原型链继承
  web.work();  // 可以工作，可以继承原型链属性方法
```

**原型链实现继承的问题————无法给父类传参**

```js
 function Person(){
    this.name = "张三";
    this.age=20;
    this.run = function()){
      alert(this.name+"在运动");
    }
  }

  // 原型链的属性和方法
  Person.prototype.sex="男";
  Person.prototype.work=function(){
    alert(xx)
  }

  var p = new person('李四', 20);
  p.run(); // 没问题

  // 继承，无法给父类传参
  function Web(name,age){

  }

  Web.prototype= new Person();
  var w = new Web('sss', 20);
  w.run();// 父类会alert出来“undefiend在运动”
  // 实例化子类时候没法给父类传参
```

**原型链+构造函数的组合继承模式**

```js
  function Person(){
    this.name = "张三";
    this.age=20;
    this.run = function()){
      alert(this.name+"在运动");
    }
  }

  // 原型链的属性和方法

  Person.prototype.sex="男";
  Person.prototype.work=function(){
    alert(xx)
  }

  var p = new person('李四', 20);
  p.run(); // 没问题
  // 继承，无法给父类传参

  function Web(name,age){
    Person.call(this,name,age); // 对象冒充继承 可以继承构造函数里面的属性和方法 实例化子类可以给父类传参
  }

  Web.prototype = new Person();// 实例化
  var w = new Web('sss', 20);
  w.run();// 父类会alert出来“undefiend在运动”

  // 实例化子类时候没法给父类传参
```

**原型链+对象冒充的另一种写法**

```js
function Person(){
    this.name = "张三";
    this.age=20;
    this.run = function()){
      alert(this.name+"在运动");
    }
  }

  // 原型链的属性和方法
  Person.prototype.sex="男";
  Person.prototype.work=function(){
    alert(xx)
  }

  var p = new person('李四', 20);
  p.run(); // 没问题
  // 继承，无法给父类传参

  function Web(name,age){
    Person.call(this,name,age); // 对象冒充继承 可以继承构造函数里面的属性和方法 实例化子类可以给父类传参
  }

  Web.prototype = Person.prototype; // 和方法7中不同的是这里！！！
  var w = new Web('sss', 20);
  w.run();// 父类会alert出来“undefiend在运动”
  // 实例化子类时候没法给父类传参
```

### 7.4 JSON

**JSON 全称为 JavaScript Object Notation(javaScript 对象表示法)**,JS 中的对象只有 JS 才能够解析并识别,其它语言都不能识别,所以如果需要做数据传输,就需要一个所有语言都能够识别的通用数据类型

**JSON 就是一个特殊格式的字符串，这个字符串可以被任意的语言识别，并且可以转换为任意语言中的对象，JSON 在开发中主要用来数据的交互**,JSON 和 JS 中对象的格式一致，只不过 JSON 字符串中的属性名和属性值必须用双引号括起来,除此之外内部结构的语法和 JS 中的语法一致

#### 7.4.1 JSON 分类

- 对象{}

- 数组[]

**注意:**无论是对象还是数组都必须使用字面量形式的,并且在最外层都需要用引号包裹让整体成为字符串

7.4.2 属性值

**在 JSON 中的属性值只允许以下六种**

- 字符串

- 数值

- 布尔值

- null

- 对象

- 数组

**注:**undefined,symbol 值和函数都不能作为属性值,对象形式如果有这三种类型的值会在转换为 JSON 的时候被过滤掉,数组形式如果有会被转换为 null 传入 JSON 中

#### 7.4.3 JSON 与对象的转换

JS 为我们提供了一个工具类对象 JSON,这个对象可以帮助我们将一个 JSON 转换为 JS 对象，也可以将一个 JS 对象转换为 JSON

- JSON-->JS 对象

  通过 JSON.parse()函数可以将以 JSON 字符串转换为 JS 对象，该函数需要一个 JSON 字符串作为参数，会将 JSON 字符串转换为 JS 对象并返回

  ```js
  var json = '{"name":"孙悟空","age":"18"}';
  var obj = JSON.parse(json);
  console.log(obj.name); //"孙悟空"
  ```

- JS 对象-->JSON

  通过 JSON.stringify()函数可以将一个 JS 对象转换为 JSON 字符串,该函数需要一个 JS 对象作为参数，会返回一个 JSON 字符串

  ```js
  var json = { name: "孙悟空", age: "18" };
  var json = JSON.stringify(obj);
  console, log(json); //'{"name":"孙悟空","age":"18"}'
  ```

  确认一个对象是否为空对象

  ```js
  var obj = {};
  var str = JSON.stringify(obj).replace(/\s|\r\n/g, "");
  if (str.length === 2) {
    console.log("这是一个空对象");
  }
  ```

**注意:**JSON 这个类对象在 IE7 及以下的浏览器中不支持，所以在这些浏览器中调用时会报错

**兼容方法**

- 使用 eval()函数来替代 JSON 的类对象

  ```
  /*
      eval()函数
          1.可以用来执行一段字符串形式的JS代码,并将指向结果返回
          2.如果使用eval()函数执行的字符串中含有{},该函数会将{}当做代码块,如果不希望其被当成代码块         解析,则需要用()将字符串包裹
  */
  var str="alert('hello')";
  eval(str);//会出现弹框

  var json='{"name":"孙悟空","age":"18"}';
  var obj=eval("("+json+")");
  console.log(obj);//{name:"孙悟空",age:"18"}
  ```

  注意:

  eval()函数的功能很强大.可以直接执行一个字符串中的 JS 代码,但是在开发中尽量不要使用该函数,因为该函数不仅性能较差,而且存在非常大的安全隐患,容易被植入恶意代码造成损失

- 直接用外部引用的 JSON

### 7.5 栈内存与堆内存

在讲内存之前先将讲数据,**在 js 中的数据分为两种,一种是引用型数据,一种是值类型数据**

**引用型数据只有 object,而值类型数据有 number,boolean,string,undefined,null。值类型数据在比较时,只比较是否长的一样,而引用型数据在比较时是比较内存地址**

**关于栈内存与堆内存**

- **js 中的变量都是保存到栈内存中**

- **基本数据类型的值在栈内存中存储，值与值之间是独立存在，修改一个变量不会影响其他变量**

- 对象是保存到堆内存中的

  每创建一个新的对象，就会在堆内存中开辟一个新的空间，而变量保存的是对象的

  内存地址(对象的引用)，如果两个变量保存的是同一个对象引用，当一个通过一个变量修改属性时，另一个也

  会受到影响

  ```js
  var obj = { name: "孙悟空", gender: "男", age: 18 };
  var obj2 = obj;

  console.log(obj.age); //打印结果为18js

  obj2.age = 19;
  console.log(obj.age); //打印结果为19
  ```

  注意:

  - - 如果只是让 obj2=null，obj 并不会变化，因为这是让 obj2 的地址改变，而不是改变地址里面的值

  - - 当比较两个基本数据类型的值时,就是比较值,而比较两个引用数据类型时,比较的是对象的地址,如果两个对
    象是一模一样的，但是地址不同，也会返回 false
