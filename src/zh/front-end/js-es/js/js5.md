---
icon: js
category: Web 前端
tag: 
  - JavaScript
  - Promise 对象
  - JS 异步
  - async 与 await
date: 2020-06-06
title: 5. 逻辑语句
---

## 逻辑语句



### 5.1 if语句



if语句对一个属性或者表达式进行判断,里面的数或表达式最后会转换为布尔值，如果为真才执行执行if语句里面的代码

#### 5.1.1 if

```js
if(true){
    console.log(1);
}
//只判断是否为真
```



#### 5.1.2 if...else

```js
if(true){
    console.log(1);
}
else{
    consle.log(2);
}
//判断时否为真,如果为真执行上面的代码,如果为假执行下面的代码
```



#### 5.1.3 if....else if....else

```js
var a=1;
if(a===1){
    console.log(1);
}
else if(a===2){
    console.log(2);    
}
else{
    console,log(3);
}
// 从上到下一次进行判断,如果第一次判断为真则执行第一个判断里面的代码,如果第一次为假第二次为真则执行第二个  判断里的代码,如果都为假则执行第三个判断里的代码
// 在这里else if可以写无数个,因为这个其实还是按照if...else的写法来写的
```



### 5.2 switch语句

```js
switch(x)
{
    case 1：；
    break;
    case 2: ;
    break;
    default:
}
//括号里的字姆依次与下面做全等(===)比较
```



```js
可以在case里面用数字或者字符一起用，只是做全等比较而已，比如和以x="abc"
switch(x)
{
    case 1:;
    break;
    case 2:;
    break;
    case "abc":;
    break;
    default:
}
```



**注意:**

- **JS里面的switch中的case可以接受一个表达式**，因为swich语句在其他语句时case里面只能是数字或者字符

```js
var score=80;
switch(true){
case score>=60：
case score>=50:
}
```

- switch语句中每一个case后面需要加上break来表示跳出选择,不然就会一直往下面运行case直到遇到break或

将里面的选项全部运行完
