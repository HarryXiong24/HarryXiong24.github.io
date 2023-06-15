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
title: 6.循环语句
---

## 循环语句

### 6.1 while 与 do...while 语句

while 和 do...while 都是循环语句,在条件允许的情况下会一直循环语句内的代码

```js
var i = 0;
while (i > 5) {
  console.log(i);
}

do {
  console.log(i);
} while (i > 5);

//两个语句循环功能类似，不同的是while是先判断后执行，do...while是先执行后判断
//所以在进行判断的时候while可以一次都不执行,而do...while至少会进行一次
```

### 6.2 for 循环语句

```js
/*
for(单次表达式;{条件表达式};末尾循环体)
{
    中间循环体；
}
*/
for (var i = 0; i < 5; i++) {
  console.log(i);
}
// 单次表达式只会在开始的时候进行一次,后面将不会进行,可以在单次表达式声明变量,也可以在前面先声明变量
// 执行末尾循环体后将再次进行条件判断，若条件还成立，则继续重复上述循环，当条件不成立时则跳出当下for循环
```

**注意:**

- 表达式皆可以省略，但分号不可省略，因为“;”可以代表一个空语句，省略了之后语句减少，即为语句格式发生
  变化

- 执行的中间循环体可以为一个语句，也可以为多个语句，当中间循环体只有一个语句时，其大括号{}可以省
  略，执行完中间循环体后接着执行末尾循环体

- 可以用 break 和 continue 等提前中断循环语句,但是这两个只是中断离得最近的循环语句

- 可以使用 label(关联)加上 break 或 continue 来跳出多个循环(标记内容不一样是 label 单词，可以为任意符合标准的) 结束离标记最近的 for 循环,如果没有直接使用标记的话，break 或 continue 结束的是当前的 for 循环

  ```js
  for(var k = 0;k<5;k++){
      console.log( '我是第k:'+k+'个' );

      jump://结束下面最近的for循环
      for( var i = 0; i <3;i++ ){

          console.log( '我是第i:'+i+'个' )；

          for( var s = 0;s<4;s++ ){
              if( s === 2 ){

                  break zhuang; //结束
              }

              console.log( '我是第s:'+s+'个' )；
          }

      }

  }
  ```

- 在用 for 循环循环一个数组的长度时,如果先在外边将数组的长度赋值,会提升程序性能

  ```js
  var arr = [1, 2, 3, 4, 5];
  for (let i = 0, len = arr.length; i < len; i++) {
    console.log(i);
  }
  ```

### 6.3 性能测试

用 console.time()测试程序性能

```js
/*
 console.time("计时器的名字")可以用来开启计时器，它需要一个字符串作为参数，这个字符串作为计时器的标识
 然后在需要测试的代码后面加console.timeEnd("计时器的名字")停止一个计时器
*/
console.time("test");
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.timeEnd("test");
// 会在控制台中显示之间一共用了多长时间
```
