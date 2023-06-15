---
icon: advance
category: Web前端
tag: 
  - CSS
  - Less
  - Scss
time: 2020-6-4
---

# 写在后面-对 css 预处理的补充

[[toc]]

## Sass 继承与混合的区别

### 继承

```scss
//继承
%flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrap {
  @extend %flex-center;
}

.container {
  @extend %flex-center;
}

//编译后的代码
.container,
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 混合

```scss
//混合
@mixin flex-center() {
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrap {
  @include flex-center();
}

.container {
  @include flex-center();
}

//编译后的代码
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 两者分析

通过以上编译的代码， 其实就知道了混合它不是公用样式类，而是直接复制一份出来，

而继承只是对类添加选择器达到共用的目的，所以继承的话是没有代码冗余的，而混合会有代码冗余。

**以上提到的都是直接引用样式类，都不涉及变量参数的情况。**

**如果要通过参数功能引入变量，输出多样化的样式的话，那继承就无法实现，只能通过混合来实现，看以下代码：**

```scss
//渐变
@mixin linear($direction, $color1, $color2) {
  background: -webkit-linear-gradient(
    $direction,
    $color1,
    $color2
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    $direction,
    $color1,
    $color2
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    $direction,
    $color1,
    $color2
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient($direction, $color1, $color2); /* 标准的语法 */
}
.wrap {
  width: 500px;
  height: 500px;
  @include linear(left, red, green);
}
```

编译后：

```css
.wrap {
  width: 500px;
  height: 500px;
  /* Safari 5.1 - 6.0 */
  background: -webkit-linear-gradient(left, red, green);
  /* Opera 11.1 - 12.0 */
  background: -o-linear-gradient(left, red, green);
  /* Firefox 3.6 - 15 */
  background: -moz-linear-gradient(left, red, green);
  /* 标准的语法 */
  background: linear-gradient(left, red, green);
}
```

### 结论

- 如果你的代码块中涉及到变量，建议使用混合来创建相同的代码块。
- 如果你的代码块不需要专任何变量参数，而且有一个通用类已在文件中存在，那么建议使用 `SCSS` 的继承。

## Sass 混合和函数的区别

混合和函数都是在`SCSS`中的作用都是通过传参来输出结果的，这两者的区别还是比较明显的。

### 混合

```php
@mixin linear($direction,$color1,$color2){
    background: -webkit-linear-gradient($direction,$color1, $color2); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient($direction,$color1, $color2); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient($direction,$color1, $color2); /* Firefox 3.6 - 15 */
    background: linear-gradient($direction,$color1, $color2); /* 标准的语法 */
}
.wrap {
    width:500px;
    height:500px;
    @include linear(left,red,green);
}

//转换CSS
.wrap {
    width: 500px;
    height: 500px;
    background: -webkit-linear-gradient(left, red, green);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left, red, green);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left, red, green);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(left, red, green);
    /* 标准的语法 */
}
```

### 函数

```php
//实现px与rem的转化
@function j($px, $base-font-size: 100px) {
    @if (unitless($px)) {
        @warn "Assuming #{$px} to be in pixels, attempting to convert it into pixels for you";
        @return j($px + 0px); // That may fail.
    }

    @else if (unit($px)==rem) {
        @return $px;
    }

    @return ($px / $base-font-size) * 1rem;
}

.box{
    width:j(200);
    height:j(200);
}

//转换CSS
.box {
    width: 2rem;
    height: 2rem;
}
```

### 结论

- 混合主要是通过参数功能引入变量，输出多样化的样式，为了可以现实代码复用。
- 函数的功能是传入参数，经过函数内部的计算判断，然后需要搭配`@return`输出一个值的。
