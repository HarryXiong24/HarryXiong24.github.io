---
icon: vue
category: Web 前端
tag: 
  - Vue
  - MVVM
  - Vuex
  - Vue-router
  - Vue 源码分析
date: 2020-06-18
title: 5.绑定class和style
---

## 绑定 class 和 style

### 5.1 绑定 class

- 通过数组的书写传入

  :class

  形式绑定的类名

  ```vue
  <h1 :class="['red', 'big']">Vue</h1>
  ```

- 通过对象书写的形式绑定类名,对象中的属性名就是要传入的 class 名,而属性名对应的属性值为一个布尔值,可以是变量,如果是真就作为一个类名传入 class 中,如果是假的就不计入 class 中

  ```vue
  <h1 :class="{ red: true, big: true }">Vue</h1>
  ```

  注意:

  传入一个对象的时候完全可以在 Vue 的实例创建的时候传入变量,直接在 class 中写入变量名

- 传入三目表达式进行切换是否用该类名的判断

  ```vue
  <h1 :class="['red', isActive ? 'big' : 'small']">Vue</h1>
  ```

- 在数组中使用对象,可以使用该方法代替繁琐的三目表达式

  ```vue
  <h1 :class="['red', { big: isActive }]">Vue</h1>
  ```

### 5.2 绑定 style

**绑定的 style 样式可以通过驼峰命名法会短横线分割法进行命名(短横线命名需要在外层用单引号包住)**

- 直接在元素上同过

  :style

  的形式,通过对象的形式书写

  ```vue
  <h1 :style="{ color: 'red', 'font-size': '40px' }">Vue</h1>
  ```

- 将样式定义在 data 中,再引用到

  :style 中

  ```vue
  <h1 :style="foo">Vue</h1>
  ```

  ```vue
  data:{ foo:{color:'red','font-size':'40px'} }
  ```

- 在:style 中通过数组引用多个 data 中的样式对象,其实每个对象就相当于一个 class,只是需要在 data 中设置

  ```vue
  <h1 :style="[foo, foo2]">Vue</h1>
  ```

  ```vue
  data:{ foo:{color:'red','font-size':'40px'},
  foo2:{fontWight:200}//驼峰命名法也可以 }
  ```

### 5.3 实例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>classAndstyle</title>
    <style type="text/css">
      .red {
          color: red;
      }
      .blue {
          color: blue;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <!-- 一下都是需要动态操作css所采用的方法,如果只是普通的绑定css,则直接原生法绑定即可 -->
      <h2>class绑定</h2>
      <!-- 参数绑定 -->
      <p :class="color">111111</p>
      <!-- 对象绑定,后面的参数为布尔值 -->
      <p :class="{red: isred, blue: isblue}">222222</p>
      <!-- 数组绑定,可接若干个,用''括起 -->
      <p :class="['red']">333333</p>
      <button @click="update(color)">更新</button>

      <h2>style绑定</h2>
      <!-- 对于属性:属性值,可以只有属性,然后再data里写属性值;也可以写好属性:属性值,然后在data里写属性值;
            记住要用驼峰命名法,否则则要用""标注,比如"background-color"
        -->
      <p :style="{color:activeColor, fontSize, backgroundColor: value}">
        aaaaaa
      </p>
      <!-- 也可以用数组的形式 -->
      <p :style="[foo,foo2]">bbbbbb</p>
    </div>
  </body>
  <script text="javascript" src="./vue.js"></script>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        color: "red",
        isred: true,
        isblue: false,
        activeColor: "green",
        fontSize: "30px", //backgroundColor: "blue",
        value: "blue",
        foo: { color: "red", "font-size": "40px" },
        foo2: { fontWight: 200 },
      },
      methods: {
        update(color) {
          if (color === "blue") {
            this.color = "red";
            this.isred = true;
            this.isblue = false;
          } else if (color === "red") {
            this.color = "blue";
            this.isred = false;
            this.isblue = true;
          }
        },
      },
    });
  </script>
</html>
```
