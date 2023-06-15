---
icon: js
category: Web前端
tags: 
  - JavaScript
  - Promise对象
  - JS异步
  - async与await
time: 2020-6-10
footer: 生命的广阔不经历磨难怎能达到
title: 9.字符串方法
---

## 字符串方法



### 9.1 length



**在底层字符串是以字符数组的形式保存的,所以字符串其实是有length属性的,并且也可以使用索引(低版本IE不**



**支持直接用索引,所以用charAt()代替)**



**注意:**与数组的length不同,字符串的length是只读的,不能修改



### 9.2 charAt,charCodeAt与fromCharCode方法



- **charAt()方法可以返回字符串中指定位置的字符,根据索引获取指定的字符**



```js
var str="Hello"
var result=str.charAt(0)
console.log(result)//会打印出H字符
```



- **charCodeAt()方法会返回指定字符串中指定字符的Unicode编码**



```js
var str="123"
var result=str.charCodeAt(0);
console.log(result)//打印出49(1的unicode编码)
```



- **fromCharCode()方法可以根据字符编码去获取字符**,这个方法由String来调用



```js
var result=String.fromCharCode(72)//result的值为字符串H
console.log(result);
```



### 9.3 concat方法



**concat()方法用于连接两个或多个字符串(中间,隔开),**作用和+一样,但是+更加简便,所以一般字符串拼接还是用+



```js
var str1="123";
var str2="456";
var str3=str1.concat(str2);//通str1+str2
//新字符串中的顺序还是先是调用者,然后后面是参数传入的顺序
```



### 9.4 indexOf与lastIndexOf方法



- indexOf()方法可以检索一个字符串中是否含有指定的字符

  找到返回该字符在字符串中的索引位置,没有找到则

  返回-1

  该方法可以指定第二个参数,第二个参数是指定开始查找的位置(0是第一个位置)

  ```js
  var str="hello"
  var result=str.indexOf("h");
  console.log(result);
  result=str.indexOf("h",1);
  console.log(result);
  ```

- lastIndexOf()方法用法和IndexOf()类似,不同的是检索字符时是**从右到左**检索,也可以指定开始查找的位置 
  **注意:**虽然是从右往左检索,但是在设置第二个参数的时候指定开始查找的位置还是从左往右数的,只是查找的时 
  候是从右往左



### 9.5 strartsWith,endsWith与includes方法



- **includes()：**返回布尔值，表示是否找到了参数字符串，支持第二个参数，表示开始搜索的位置

- **startsWith()：**返回布尔值,表示参数字符串是否在查找字符串的头部,支持第二个参数，表示开始搜索的位置

- endsWith()：

  返回布尔值，表示参数字符串是否在查找字符串的尾部,一般用做后缀名判断,支持第二个参数，

  表示前n个字符,与前两个的表现形式不同

  ```js
  var str = 'Hello world!';
  str.startsWith('Hello') // true
  str.endsWith('!') // true
  str.includes('o') // true
  
  str.startsWith('world', 6) // true
  str.endsWith('Hello', 5) // true
  str .includes('Hello', 6) // false
  ```



### 9.6 slice方法



**slice()方法可以从字符串中截取指定的内容**,截取完成后会将截取到的字符串作为返回值返回



该方法有**两个参数,**第一个参数是开始位置,第二个参数是结束位置(但查找时不包括结束位置),可以不写第二个参数,这样会将从开始到后面所有的字符截取



```js
var str="hello";
var result=str.slice(0,3);
console.log(result);//返回hel(不包含索引为3的l)
```



**注意:**



- 该方法只能从左往右边截取,如果第一个数比第二个数大,则会返回空串

- 该方法接收负值,负值意味着从右往左数



### 9.7 subString与substr方法



- **subString()方法可以用来截取一个字符串，和slice()类似**，也有两个参数,不同的是这个方法不能接收负值作 
  为参数，如果传递了一个负值，则默认变成0,而且它会自动调整参数的位置，如果第二个参数小于第二个，则 
  自动交换参数位置

- **substr()方法也是用来截取字符串**，该方法有两个参数,与slice()和subString()都不同,第一个参数是开始位置的 
  索引，**第二个参数是要截取的长度**



### 9.8 split方法



**split()方法可以将一个字符串拆分为一个数组,**需要一个**字符串**作为参数，该方法将会根据字符串去拆分数组



```js
var str="abc,bcd,efg,hij"

var result=str.split(",");//将str用,作为间隔去拆分字符串

console.log(result);//result就变成了一个数组，第一个值是abc,第二个值是bcd
```



**注意:**

- 如果传递一个空串作为参数，则会将每个字符都拆分为数组中的一个值

- 如果不传入参数会返回一个只有一个整个字符串的值的数组



```js
//split方法的妙用-->字符倒序 
var str="abc";
var result=str.spilt("").reserve().join("");
console.log(result);//值为cba
```



### 9.9 toLowerCase与toUpperCase方法



- **toLowerCase()方法将字符串转换为小写并返回**

- **toUpperCase()方法将字符串转换为大写并返回**



```js
var str="aBc";
var result1=str.toLowerCase();
console.lof(result1);//值为abc

var result2=str.toUpperCase();
console.lof(result2);//值为ABC

//这两种方法通常用做在进行无视大小写验证的时候使用
```



### 9.10 valueOf方法



**valueOf()方法返回字符串的原始值(就是字符串本身)**



```js
var str="abc";
var result=str.valueOf();
console.log(str===result);//true
```



### 9.11 trim方法



**trim()方法用作删除字符串前后的空格(字符中间的空格不会删除),通常在用户输入验证的时候使用**



- 直接使用,调用浏览器中的字符串自带的trim()方法(不兼容低版本IE)

  ```js
  var str="   12  3   "
  var result=str.trim();
  console.log(result);//打印出123
  ```

- 间接使用,使用正则表达式

  ```js
  function myTrim(x) {
      return x.replace(/^\s+|\s+$/gm,'');
  }
   
      var str = myTrim("        Hello World!        ");
      alert(str);
  ```



### 9.12 repeat方法



**repeat()方法通过字符串调用,会返回一个新的字符串,该方法内传入的数值参数表示将该字符串复制几次,不会改变原字符串**



```js
var str = "123";
var str2 = str.repeat(2);
var str3=str.repeat(0);
console.log(str);//"123"
console.log(str2);//"123123"
console.log(str3);//""空字符串
```



**注意:**

- 参数如果是浮点数,会向下取整

- 参数是负值或是Infinity会报错

- 参数为0到-1之间的小数等同于0，这是因为会先进行取整运算,0到-1之间的小数,取整以后等于-0,视同为0

- 参数为NaN等同于0

- 如果参数为字符串则会先转换为数值类型



### 9.13 padStart与padEnd方法



**ES8(ES2017)中引入了字符串的补全功能,如果某个字符串不够指定长度,会在头部会尾部补全该字符串,不会改变原字符串**



- **padStart()方法用于在头部补全**

- **padEnd()方法用于在尾部补全**



```js
var str="123";
var str2=str.padStart(5,"ab");
var str3=str.padEnd(5);
console.log(str);//"123"
console.log(str2);//"ab123"
console.log(str3);//"123  "
```



**注意:**

- 如果原字符串的长度等于或大于指定的最小长度,则返回原字符串

- 如果用来补全的字符串与原字符串,两者的长度之和超过了指定的最小长度,则会截去超出位数的补全字符串

- 如果省略第二个参数,默认使用空格补全长度


