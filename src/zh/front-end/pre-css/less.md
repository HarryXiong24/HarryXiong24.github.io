---
tag: Less
category: Web 前端
date: 2020-06-03
---

# Less

**It's CSS, with just a little more.**

[[toc]]

## 1. 认识 less

**less 是一种动态样式语言,属于 CSS 预处理器的范畴,它拓展了 CSS 语言,**其余的 CSS 预处理器有 sass 和 stylus 等

less 增加了变量,MIxin,函数等特性,使 CSS 更易维护和扩展,less 既可以在客户端上运行,也可以借助 node.js 在服务端

运行

**less 的编译工具**

koala 官网:www.koala-app.com

## 2.less 的引入

less 可以通过多种方式引入具体在http://lesscss.cn/中有详细说明

这里主要说明**浏览器端的用法:**

在上面的网址中下载 less 的 js 文件,然后放入项目中引入,然后在前面引入已经编写的 less 文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>less引入</title>
    <link rel="stylesheet/less" type="text/css" href="css/less.less" />
    <script src="js/less.min.js"></script>
    <!--引入less的地址-->
  </head>
  <body></body>
</html>
<!--
    引入less文件的时候和引入普通外部CSS文件类似,只是需要在rel="stylesheet"后面加上/less表明引入的    是less样式
-->
```

**注意:less 在引入的时候 js 文件一定要写在引入的 less 文件的后面,这样才能实现 less 的编译**

## 3.less 的注释

less 中的注释和 CSS 一样有两种单行注释//，多行注释/\*\*/

**注意:通过编译器转换的时候,以//开头的注释不会被编译到 CSS 文件中,而已/ /包裹的注释才会被编译在 CSS 文件中**

## 4.less 的变量

**less 中使用@来申明和使用一个变量**

具体用法为:@变量名:属性值

@pink:pink//在以后的使用中就可以用@pink 来代替 pink

- 变量作为普通的属性值使用,直接用这个变量:@变量名
- 变量作为选择器或者属性名来使用,需要在变量两边加上{}

{变量名}

- 变量作为 url，使用是也需要在两边加上{}

{url}

- 变量的加载会有延迟效果,当整个文件的所有东西被加载完时才会将变量赋值给对应的属性
- 变量运用的时候会现在自身的作用域里面找到是否定义了该变量,如果定义了就直接用自身作用域中的,如果没 有才会在外层逐层寻找,如果在最外层都没有找到对应的变量就会报错

```less
@var: 0;
.class {
  @var: 1;
  .brass {
    @var: 2;
    three: @var;
    @var: 3;
  }
  one: @var;
}
/*
      最终的结果为one:1;
      three:3;
      变量在最后赋完所有值才会赋值给属性,而且这个赋值也是只针对自身的作用域
  */
```

## 5.嵌套规则

### 5.1 基本嵌套规则

**less 中可以在父选择器中包含有子选择器,在转换为 CSS 文件的时候会自动用空格来隔开**

```less
.father {
  position: relative;
  margin: 200px auto;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  .child {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100px;
    height: 100px;
    background-color: red;
  }
}
/*
   通过上方的写法可以分别对父元素和子元素进行样式设置
 */
```

### 5.2 &符号的使用

**&符号能取消默认的嵌套关系的中的空格,**从而从父子关系变成兄弟关系,这个兄弟关系是本身拓展出的一些兄弟关

系,如伪类选择器等，可以理解为&符号就是这个选择器本身

```less
.father {
  position: relative;
  margin: 200px auto;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  .child {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100px;
    height: 100px;
    background-color: red;
    &:hover {
      background-color: pink;
    }
  }
}
/*
   如果在:hover前面没有写&符合,hover的效果就不能起作用
 */
```

## 6.less 的混合

**混合就是将一系列属性从一个规则集引入到另外一个规则集的方式**

### 6.1 普通混合与不带输出混合

把样式中共同的代码单独提出来在最上方,单独的用一个类名或 ID 名来定义(因为在开头用了点号和#号,暂且叫作是类名和 ID 名),然后在下面输入的时候通过 .类名/ID 名;来调用

**注意:混合中写样式代码的方式和写普通 CSS 或 less 文件是一样的,混合的名字也是可以用选择器的方式的,只不过所有混合的名字都必须是看起来相识类名或者 ID 名,下面先统一说成是类名**

**普通混合定义的类名是会被编译到 CSS 文件中的,如果不想被编译到 CSS 文件中,需要使用不带输出的混合在名字后面再加上()**

```less
/*这是不混合的写法*/
.father {
  position: relative;
  margin: 200px auto;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  .child1 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100px;
    height: 100px;
    background-color: red;
  }
  .child2 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100px;
    height: 100px;
    background-color: red;
  }
}
```

```less
/*这是混合后的写法*/
.mix() {
  //不加()是普通混合,会被编译到CSS文件中
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  background-color: red;
}

.father {
  position: relative;
  margin: 200px auto;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  .child1 {
    .mix; //调用混合样式
  }
  .child2 {
    .mix;
  }
}
```

### 6.2 带参数的混合

混合的参数也是**通过变量使用的形式来定义**的,混合中加参数的用法和函数类似,为了方便记忆可以理解为函数,但是不是函数,同时这个参数还可以有默认的值,默认值的定义也是和变量的定义相同

```less
/*定义形参*/
.mix(@w:100px,@h:100px,@b:pink) {
  /*这是定义的默认参数的写法,如果不定义默认的参数就是直接@w,@h,@b*/
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: @w;
  height: @h;
  background-color: @b;
}

.father {
  position: relative;
  margin: 200px auto;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  .child1 {
    .mix(100px, 100px, pink);
  }
  .child2 {
    .mix(200px, 200px, red);
  }
}
```

**注意:定义在外部的类并且后面加了()的时候，如果不传入参数在写实参的时候也应该写.mix**

### 6.3 命名参数

在实参传递给形参值的时候可以不用按照顺序进行传递,而是**直接通过参数的指定进行传参**,这样就能够实现当只想传递某些参数而不是所有参数的时候参数的值不产生混乱

**实参传入命名参数的时候和变量定义的时候是一样的**

```less
.father {
  position: relative;
  margin: 200px auto;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  .child1 {
    .mix(100px, 100px, pink);
  }
  .child2 {
    .mix(@b:red); /*直接通过命名参数传递*/
  }
}
```

### 6.4 匹配模式

用一些专门的标识符放在形参的首位用做匹配,注意**这个是标识符不用@符号**,当使用的时候会根据传入的第一个参数,匹配到那个,就使用哪一个样式

```less
/* 很像函数重构的写法 */
.float(l,@w){
    float:left
    width:@w
}
.float(r,@w){
    float:right
    width:@w
}
.box1{
        height: 200px;
        background: green;
        .float(l,200px);
    }

.box2{
        width: 300px;
        height: 200px;
        background: green;
        .float(r,200px);
    }
/*
    匹配模式相当于if从句,当匹配到哪个正确的时候就会使用哪一个样式
*/
```

### 6.5 arguments 变量

**arguments 相当于是类中所有实参的集合,**其作用和 js 中的 arguments 类似

这个变量是 less 已经设置了的,**可以直接调用**它来使用,调用它的时候它包含了所有传入的实参,同时每个实参是通过空格隔开的

```less
.border(@size,@style,@color) {
  border: @arguments;
}
div {
  width: 200px;
  height: 200px;
  .border(1px, solid, #000);
}
```

**注意:**和 js 中不一样的是这个属性虽然保留着所有实参但是**在命名类的时候还是需要写入对应的形参**,不然会出现报错

## 7.less 的运算

在 less 中可以进行加减乘除的运算

**注意:在 less 的计算中计算的双方只需要一方带单位,最后再计算的时候单位会保留下来加在新值的后面**

```less
.box {
  widht: (100+100px);
}
```

## 8.less 的继承

less 的继承性能上高于 less 的混合,但是灵活性弱于混合,继承不支持参数的形式,同时后面也不加(),继承的类是需要被编译到 CSS 文件中的

**less 的继承用关键词&:extend()函数来实现**,下面是一种用法

```less
.center {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.father {
  position: relative;
  margin: 200px auto;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  .child {
    &:extend(.center);
    &:nth-child(1) {
      width: 100px;
      height: 100px;
      background-color: pink;
    }
    &:nth-child(2) {
      width: 200px;
      height: 200px;
      background-color: red;
    }
  }
}
/*
    上面的.child通过继承效果能够得到.center里面的样式
    转换为CSS样式如下
*/
.center,
.father .child {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.father {
  position: relative;
  margin: 200px auto;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}
.father .child:nth-child(1) {
  width: 100px;
  height: 100px;
  background-color: pink;
}
.father .child:nth-child(2) {
  width: 200px;
  height: 200px;
  background-color: red;
}
/*
    实质上继承是让两个选择器之间通过并集选择器把公共的代码合并起来
*/
```

**注意:**继承如果只是传入了一个需要被继承的参数到 extend 函数里面,只会接受这一个选择器,与它相关的兄弟选择器如`:hover`等是不会继承的,如果想要继承所有,需要在后面加上:空格 all

```less
.center {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.center:hover {
  background: black !important; /*因为权重不够,就这样写了*/
}

.father {
  position: relative;
  margin: 200px auto;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  .child {
    &:extend(.center all);
    &:nth-child(1) {
      width: 100px;
      height: 100px;
      background-color: pink;
    }
    &:nth-child(2) {
      width: 200px;
      height: 200px;
      background-color: red;
    }
  }
}
/*
    最终.child能继承到:hover中的样式
*/
```

## 9.less 的避免编译

**在 less 中如果想要一些值不被运算想要原封不动的变成 CSS 文件**,可以用~"值"的方式直接将值原封传递给 CSS 文件

```less
* {
  margin: ~"calc(100px + 100)"; //calc()是CSS中本来就有的计算形式的函数
}
```

## 10.less 的导入

**在 less 中使用@import 关键字能够将需要的文件中的代码导入到当前的 less 文件中**

- 导入 less 文件可一直接导入

```less
@import "a.less";
```

- 导入 CSS 文件时需要申明这是 CSS 文件

```less
@import (CSS) "b.css";
```

## 11.条件语句

**less 没有 if / else 但是 less 具有一个 when，and，not 与","语法。**

```less
/* Less */
#card {
  // and 运算符 ，相当于 与运算 &&，必须条件全部符合才会执行
  .border(@width,@color,@style) when (@width>100px) and(@color=#999) {
    border: @style @color @width;
  }
  // not 运算符，相当于 非运算 !，条件为 不符合才会执行
  .background(@color) when not (@color>=#222) {
    background: @color;
  }
  // , 逗号分隔符：相当于 或运算 ||，只要有一个符合条件就会执行
  .font(@size:20px) when (@size>50px) , (@size<100px) {
    font-size: @size;
  }
}
#main {
  #card>.border(200px, #999, solid);
  #card .background(#111);
  #card > .font(40px);
}
/* 生成后的 CSS */
#main {
  border: solid #999 200px;
  background: #111;
  font-size: 40px;
}
```

### 11.1 条件运算符

**比较运算符：**`>`、`>=`、 `=` 、`<=` 、`<`

**注意：**

- =代表是等于
- less 中有布尔值 true 和 false，除去关键字 true 以外的值其他都会被默认为 false

## 12.循环语句

**less 并没有提供一个 for 等循环的方法但是可以使用递归的方法实现。**

```less
/* Less */
.generate-columns(4);
.generate-columns(@n, @i: 1) when (@i =< @n) {
  .column-@{i} {
    width: (@i * 100% / @n);
  }
  .generate-columns(@n, (@i + 1));
}
/* 生成后的 CSS */
.column-1 {
  width: 25%;
}
.column-2 {
  width: 50%;
}
.column-3 {
  width: 75%;
}
.column-4 {
  width: 100%;
}
```

**案例：**less 循环输出类名

**目标输出**

```less
.a {
  background: url("./resource/a.png") top/100% no-repeat;
}
.b {
  background: url("./resource/b.png") top/100% no-repeat;
}
.c {
  background: url("./resource/c.png") top/100% no-repeat;
}
```

**实现思路**

- 由于形式上面很类似，所以先定义一个模板函数。
- 定义一个 less 列表，把需要的类名都写上。
- 循环遍历列表，调用函数。

**实现步骤**

1. 定义函数

```less
.backgroundcard(@className,@pngName) {
  .@{className} {
    background: url("./resource/@{pngName}.png") top/100% no-repeat;
  }
}
```

1. 定义一个数组

```less
@bgcardList: a, b, c, d, e, f, g;
```

1. 循环遍历

```less
.loop(@i) when (@i < length(@bgcardList)+1) {
  .backgroundcard(extract(@bgcardList, @i), extract(@bgcardList, @i));
  .loop(@i+1);
}
.loop(1);
```

**语法**

```less
+ 列表函数
    - 获取列表的长度  length(@bgcardList)  //7
    - 获取列表元素  extract(@bgcardList, 3)  //c
+ 循环函数
    - loop定义循环次数，when条件判断，符合进入函数，不符合不进入函数。之后次数+1，形成循环。
    - loop函数调用，直接传值1。
```
