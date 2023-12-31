---
icon: js
category: Web 前端
tag: 
  - JavaScript
  - Promise 对象
  - JS 异步
  - async 与 await
date: 2020-06-06
title: 4. 运算符
---

## 运算符



**运算符不会对原来的值进行影响**

**运算符的运算时按住自身的层级进行顺序运算**



### 4.1 JS功能运算符



- typeof,用于鉴定数据类型的时候使用,它会将值得类型以字符串的形式返回

  ```
  var a=123;
  var result=typeof a;
  console.log(result)/*这里会显示number*/
  /*
      注意:typeof对null用时会返回object
          typeof对函数function用时会返回function,实际上函数也是一个对象
          typeof对symbol数据的返回值就是symbol
  */
  ```

- in,用于检查一个对象中是否含有指定的属性,如果有则返回true,没有则返回false

  ```
  var obj=new Object();
  console.log("test2" in obj); //这里显示false,因为obj中没有这个属性
                               //属性名实际上是字符串，所以要加""
  ```

- instanceof,用于确定一个对象是否在另一个对象的原型链上,也就是一个对象是否属于另一个类对象的实例

  ```
  //可以使用instanceof可以检验一个对象是否是一个类的实例
  
  function Person(name){
      this.name=name
  }       
    var per= new Person("孙悟空");
    console.log(per instanceof Person);//如果per是Person类的实例返回true，否则返回false
    
    console.log(per instanceof Object);
  //所有的对象都是Object的后代，所有任何对象和Object与instanceof检验都会返回true
  ```



### 4.2 算术运算符



JS中的算术运算符和其他语言一样有+ -  */ %等*



**注意:**

- 在用算术运算符进行运算的时候如果进行运算的两边有非number类型的,则会先转换为number类型,再进行运算,如:a=true a=-a会将a转化为number,所以可以利用这个特性用a=+a将一个其他类型的数很快的转化number类型

- 在ES6中新增了三点(扩展)运算符(...)和指数运算符(**)等



**+的特殊用法:**如果对两个字符串进行加法运算，则会做拼串并返回,任何值和字符串做加法运算，都会先转换为字符串，然后再拼串



**注:**可以利用+的特殊性这一特点将任意数据类型转换为String，将任意数据类型+一个""空串转换为String，实质上也是调用的String函数



```js
var result=1+"2"+3//结果会是字符串123

var result=1++"2"+3//结果会是数字6，++"2"实际是是先计算的+"2"把字符2转换为数字2
```



**自增自减**



自增有两种:a和a,两种方法用完a都马上+1

自减和自增没有差别



**注意:**

1. a和a不同,a是一个变量，而a是一个表达式

2. a++等于原值,++a等于+1后的值，调用一次就直接用表达式进行运算



### 4.3 逻辑运算符



**逻辑运算符有:! && ||三种**

- !(非运算符)对一个数进行非运算，如果不是布尔值会被转换为布尔值(这种运算方法只适合JS)

  可以利用这一特性为任意数据类型取两次反将其转换为布尔值，原理与Boolean()一样

  ```js
  var a="hello"
  a=!!a//true
  ```

- &&(与运算符)如果第一个值就是false就不会去看第二个值，第一个值是true会检查第二个值

- ||(或运算符)如果第一个值是true就不会检查第二个值,直接返回第一个值

  ```js
  true||alert("s")//不会执行弹窗
  false||alert("s")//执行弹窗
  ```



对于非布尔值进行运算，会先转换为布尔值，再进行运算，并返回原值，不会返回布尔值



**总结:**

1. &&运算如果第一个值为true则直接返回第一个值，如果第一个值是false，则直接返回第一个值

2. ||运算如果第一个值为true则直接返回第一个值，如果第一个值是false则直接返回第二个值



### 4.4 关系运算符



通过关系运算符比较两个值之间的大小关系,关系成立则返回true,关系不成立则返回false

**关系运算符有:>  <   >=   <= 等**



**注意:**

- 关系运算符比较的一般都是number类型的值,如果不是number类型会转换为number类型

- 任何值和NaN做比较都会返回false

- 如果符合两测的值都是字符串时(如果有一方不是字符串就是全部转换为number类型再比较)，不会将其转换 
  为数字进行比较，而会分别比较Unicode编码(UTF-8)，和C语言中的strcmp一样。所以，在比较两个字符串型 
  的数字时，一定要转型，至少在其中一个前面加上+



**Unicode编码**

想输出一个Unicode编码需要在前面加上\和u 如\u1C00,在JS控制台中输入的编码是16进制数

如果要在网页中输入为&#+编码;这里的编码是10进制数，所以会和在JS控制台里的输入不一样

所以**在需要用到unicode编码是要清楚写在网页的代码和写在控制台代码的区别**



### 4.5 相等运算符



相等运算符通过判断两边是否相等来返回值,如果符合返回true,不符合返回flase

相等运算符有\== \=== \!= \!==



- **当\==和!\=两边类型不同时会进行类型转换再做比较，大部分情况都是转换为数字**



```js
console.log(true=="1")//将两边都转换为number,返回true

/*特殊情况*/
console.log(null==0)//按理说null转换为number应该是0结果是true，但是这个返回false
console.log(unfined==null)//undefined衍生于null，所以这两个值做相等判断时会返回true
```

- **当\=\==(全等)和\!==(不全等)两边类型不同时不会进行自动类型转换,直接返回false**



**注意:**

- 字符串相等依然是比较的unicode编码

- NaN不和任何值相等，包括它本身,所以不能通过相等运算符来判断一个值是否是NaN,可以通过isNaN()函数来

  判断

  ```js
  var a="abc";
  var b=NaN;
  console.log(isNaN(a));//true,先强制转换为数值类型
  console.log(isNaN(b));//返回true,如果b不是NaN返回false
  ```

  注意:

- - 在ES5中该方法是全局变量的方法,而在ES6中该方法是Number内置对象的方法,需要通过Number.isNaN()来调用

- - 通过Number.isNaN()来调用该方法时不会强制转换类型,如果是非数值类型直接返回false

    ```
    var a="abc";
    console.log(Number.isNaN(a));//false
    ```



**注:在ES6中引入了一个Object.is()方法作为判断,该方法能对NaN进行相等判断**



Object.is()方法可以接收两个参数,这两个参数为进行比较的两个值，该函数不会进行强制类型转换,相当于===



**与全等(===)的区别**

- +0不能用-0

- NaN等于自身

```js
console.log(Object.is(NaN,NaN));//true
console.log(Object.is(+0,-0));//false
console.log(Object.is(123,"abc"));//false
console.log(Object.is(123,"123"));//false
```



**拓展:**

- Number.isFinite()方法用来检测一个数值是否为有限的(finite),该方法不会进行强制类型转换,非数值的类型将直接返回false

  ```
  console.log(Number.isFinite(1));//true
  console.log(Number.isFinite(NaN));//false
  console.log(Number.isFinite(Infinitey));//false
  console.log(Number.isFinite(-Infinitey));//false
  console.log(Number.isFinite(false));//false
  console.log(Number.isFinite(true));//false
  console.log(Number.isFinite("15"));//false
  console.log(Number.isFinite(Math.PI));//true，JS里的PI只保留了前几位小数
  ```

- Number.isInteger()方法用来判断一个值是否为整数,也不会强制转换类型

  ```
  console.log(Number.isInterger(1));//true
  console.log(Number.isInterger(1.0));//true
  console.log(Number.isInterger(1.1));//false
  console.log(Number.isInterger("1"));//false
  console.log(Number.isInterger(true));//false
  ```

  注意:

  在JS内部,整数和浮点数时同样的储存方法,如1与1.0是同一个数



### 4.6 扩展运算符



**...为扩展运算符(ES6新增)，用作展开一些列表式的值(比如数组和JSON对象)**,会将列表以原本的方式展开



```js
var arr=[1,2,3];
var arr2=[...arr];//arr展开为1,2,3
var obj=["a":0,"b":1];
var obj2=[...obj]
console.log(arr2);//[1,2,3]
console.log(obj2);//["a":0,"b":1]
```



### 4.7 运算符优先级



**js中的运算符优先级是一套规则,该规则在计算表达式时控制运算符执行的顺序,具有较高优先级的运算符先于较低优先级的运算符执行**



**下表按从最高到最低的优先级列出js运算符,具有相同优先级的运算符按从左至右的顺序求值**

| 运算符                             | 描述                                         |
| ---------------------------------- | -------------------------------------------- |
| . [] ()                            | 字段访问、数组下标、函数调用以及表达式分组   |
| ++ -- - ~ ! delete new typeof void | 一元运算符、返回数据类型、对象创建、未定义值 |
| * / %                              | 乘法、除法、取模                             |
| + - +                              | 加法、减法、字符串连接                       |
| << >> >>>                          | 移位                                         |
| < <= > >= instanceof               | 小于、小于等于、大于、大于等于、instanceof   |
| == != \=== !==                     | 等于、不等于、严格相等、非严格相等           |
| &                                  | 按位与                                       |
| ^                                  | 按位异或                                     |
| \|                                 | 按位或                                       |
| &&                                 | 逻辑与                                       |
| \|\|                               | 逻辑或                                       |
| ?:                                 | 条件                                         |
| = oP=                              | 赋值、运算赋值                               |
| ,                                  | 多重求值                                     |
