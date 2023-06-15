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
title: 3.基本指令
---

## 基本指令

### 3.1 v-text

**v-text,**该指令的用法同原生 JS 中的 innerText,更新绑定元素内部的文本内容

```vue
<div id="div">
<span v-text="msg"></span><!--不会有闪烁问题-->
<!-- 和下面的一样 -->
<span>{{msg}}</span>
</div>
```

### 3.2 v-html

**v-html,**该指令用法同原生 JS 的 innerHTML,可以解析内部的 HTML 标签

### 3.3 v-cloak

**v-cloak**,该指令 CSS 一起使用,用于隐藏还没有开始编译的{{}}(插值表达式)直到编译完成,解决其闪烁问题

```vue
[v-cloak] { display:
none;/*如果没有起作用可能是由于优先级不够导致的,可以加上!important提高优先级*/ }
```

```vue
<div v-cloak>
  {{ message }}
</div>
```

### 3.4 v-show

**v-show,**该指令用于显示和隐藏 DOM 元素,根据表达式之真假值,切换元素的 display 属性值

**注意:**

- 当条件变化时该指令触发过渡效果

- v-show 指令不支持在< template>< /template>标签上写,也不支持 v-else,一般来说,v-if 有更高的切换开销,而 v-show 有更高的初始渲染开销。因此,如果需要非常频繁地切换,则使用 v-show 较好,如果在运行时条件很少改变,则使用 v-if 较好

### 3.5 v-if,v-else 与 v-else-if

- **v-if,**该指令用于是否渲染 DOM 元素,传入一个布尔值,通过该布尔值的条件改变实现对于 DOM 元素的删除和重建,该指令不同于 v-show,而是会完全销毁这个 DOM 元素
  **注意:**当条件变化时该指令触发过渡效果

- v-else,

  该指令用于

  不需要任何表达式

  ,但是在该指令的前一个兄弟元素必须有 v-if 或者 v-else-if 指令,该指令的用处是为 v-if 或者 v-else-if 添加 else 的选项

  ```vue
  <div v-if="Math.random() > 0.5">
    Now you see me
  </div>
  <div v-else>
    Now you don't
  </div
  ```

* v-else-if,

  该指令用于用于 v-if 的 else if 选项,前一个兄弟元素必须要 v-if 指令,并且该指令可以链式调用,也就是说可以调用多次 v-else-if 指令

  ```vue
  <div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>
  ```

### 3.6 v-for

**v-for,**该指令可以基于源数据多次渲染元素或模板块,用于循环遍历某个数组或对象,如果只用一个变量代表得到是数组或对象的 value 值

**注意:**在内部必须使用固定的 i**tem in/of items**形式的特殊语法(下面的 in 都可以用 of 代替,并且更符合实际)

```vue
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }} <!--Foo Bar-->
  </li>
</ul>
<script>
var example1 = new Vue({
  el: "#example-1",
  data: {
    items: [{ message: "Foo" }, { message: "Bar" }],
  },
});
</script>
```

- 遍历数组时其实还支持第二个变量,代表的是遍历数组的索引值

  ```vue
  <ul id="example-2">
    <li v-for="(item, index) in items">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
      <!--
          Parent-0-Foo
          Parent-1-Bar
      -->
    </li>
  </ul>
  <script>
  var example2 = new Vue({
    el: "#example-2",
    data: {
      parentMessage: "Parent",
      items: [{ message: "Foo" }, { message: "Bar" }],
    },
  });
  </script>
  ```

- 遍历对象时还可以接受第二三两个变量,分别代表了键名和索引值

  ```vue
  <ul id="v-for-object" class="demo">
   <div v-for="(value, key, index) in object">
    {{ index }}. {{ key }}: {{ value }}
    <!--
      0. firstName: John
      1. lastName: Doe
      2. age: 30
     -->
  </div>
  </ul>
  <script>
  new Vue({
    el: "#v-for-object",
    data: {
      object: {
        firstName: "John",
        lastName: "Doe",
        age: 30,
      },
    },
  });
  </script>
  ```

- 该指令还可以遍历一个整数,遍历的量会分别从 1 开始得到赋值直到到这个整数的值

  ```vue
  <p v-for="count in 10">{{count}}</p>
  //1 2 3 4 5 6 7 8 9 10
  ```

**注意:**当 v-for 和 v-if 处于同一节点时,v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中,当想为仅有的一些项渲染节点时,这种优先级的机制会十分有用

```vue
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
<!--
官方并不建议v-for和v-if指令一起使用,如果要使用这种方式,就进行条件渲染
-->

<!--
如果想有条件才继续v-for指令,则可以将v-if置于外层元素(或<template>)上
-->
<ul v-if="todos.length">
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>
<p v-else>No todos left!</p>
<!--
条件渲染
v-if如果想只写一个而同时切换多个元素,可以在最外成包裹一层<template></template>标签,在这个标签上面
使用v-if,在渲染的时候并不会将<template>标签渲染出来
-->
```

### 3.7 v-bind

**v-bind**,该指令用于动态绑定一个或多个特性,该方法绑定的特性与普通的属性效果一致,只是其内部会被解析为 JS 表达式,而不是普通特性一样会是一个字符串

**修辞符:**

- **.prop** - 被用于绑定 DOM 属性(property)

- **.camel** - 将短横线命名法特性名转换为驼峰命名法

- **.sync** - 会扩展成一个更新父组件绑定值的 v-on 侦听器

**注意:**

- 该指令有其简写写法,通过:来代替 v-bind:

- 该指令可以动态对绑定的参数进行改变,参数用[]括起来

```vue
<!-- 绑定一个属性 -->
<img v-bind:src="imageSrc">

<!-- 动态特性名 (2.6.0+) -->
<button v-bind:[key]="value"></button>

<!-- 缩写 -->
<img :src="imageSrc">

<!-- 动态特性名缩写 (2.6.0+) -->
<button :[key]="value"></button>

<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName">

<!-- class 绑定 -->
<div :class="{ red: isRed }"></div><!--对象通过布尔值确定是否传入class中-->
<div :class="[classA, classB]"></div><!--数组会直接将类名传入到class中-->
<div :class="[classA, { classB: isB, classC: isC }]"><!--对象和数组可以混用-->

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div><!--通过对象写入每个属性-->
<div :style="[styleObjectA, styleObjectB]"></div><!--数组的成员中实际是一个个对象-->

<!-- 绑定一个有属性的对象 -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- 通过 prop 修饰符绑定 DOM 属性 -->
<div v-bind:text-content.prop="text"></div>

<!-- prop 绑定。“prop”必须在 my-component 中声明。-->
<my-component :prop="someThing"></my-component>

<!-- 通过 $props 将父组件的 props 一起传给子组件 -->
<child-component v-bind="$props"></child-component>

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
```

### 3.8 v-on

**v-on**,该指令用于绑定监听事件,表达式可以是一个方法的名字或一个内联语句(也就是说在传入事件的时候可以选择加()可以选择不加(),推荐在传入参数的时候添加,在不传参的时候写事件名)

**参数:**该指令的参数为原生 JS 中的事件名,只不过没有 on

**修饰符**

- **.stop** - 调用 event.stopPropagation(),会阻止本元素上的事件进行冒泡传播

- **.prevent** - 调用 event.preventDefault(),不能和.passive 一起使用

- **.capture** - 添加事件侦听器时使用 capture 模式,父元素会执行在子元素上进行的同名事件

- **.self** - 只当事件是从侦听器绑定的元素本身触发时才触发回调,只会真正自己触发的事件才会进行,和.stop 是有区别的,这个只会阻止自己的冒泡,但不会阻止该元素的父元素事件的冒泡进行

- **.{keyCode | keyAlias}** - 只当事件是从特定键触发时才触发回调,可以是表示键盘字符的数字或者表示特效事件的按键修饰符

- **.native** - 监听组件根元素的原生事件,一个 Vue 实例内部通过只能 v-on 只能绑定自己内部的方法,不能绑定原生 DOM 事件的方法,通过该修饰符就可以使用原生 JS 的事件方法了

- **.once** - 只触发一次回调

- .**left** - 只当点击鼠标左键时触发

- **.right** - 只当点击鼠标右键时触发

- **.middle** - 只当点击鼠标中键时触发

- **.passive** - 不用查找是否阻止默认事件的请求直接进行操作。如在滚动页面时的 onscroll 事件,每次触发事件时浏览器都会查看是否有阻止默认滚动事件的操作,但是如果本来就没有进行这个操作,在滚动的时候就会出现卡的的情况,因为在触发滚动条滚动时总会先查找请求,这个修饰符就是告诉浏览器不用进行查找直接进行滚动操作。因为作用的冲突,所以不能和.prevent 一起使用

**注意:**

- 该指令有简写形式,通过@来代替 v-on:

- 该指令可以动态对绑定的参数进行改变,参数用[]括起来

```vue
<!-- 方法处理器 -->
<button v-on:click="doThis"></button>

<!-- 动态事件 (2.6.0+) -->
<button v-on:[event]="doThis"></button>

<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 动态事件缩写 (2.6.0+) -->
<button @[event]="doThis"></button>

<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>

<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>

<!-- 阻止默认行为，没有表达式 -->
<form @submit.prevent></form>

<!--  串联修饰符 -->
<button @click.stop.prevent="doThis"></button>

<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter">

<!-- 键修饰符，键代码 -->
<input @keyup.13="onEnter">

<!-- 点击回调只会触发一次 -->
<button v-on:click.once="doThis"></button>

<!-- 对象语法 (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>

<!-- 组件中的自定义事件 -->
<my-component @my-event="handleThis"></my-component>

<!-- 内联语句 -->
<my-component @my-event="handleThis(123, $event)"></my-component>

<!-- 组件中的原生事件 -->
<my-component @click.native="onClick"></my-component>
```

### 3.9 v-model

**v-model**,该指令用于表单内的标签进行双向的数据绑定

**注意:**v-model 只能绑定给 input,textarea,select 等表单元素和自定义的组件中,除此之外不能在其他标签上绑定

**修辞符:**

- **.lazy** - 取代 input 监听 change 事件,默认在用户写入值时是使用的 input 事件,也就是当值输入完成后才会触发事件,而 change 是一些有输入法的语言在值还没有输入时就时刻监听改变

- **.number**- 输入字符串转为有效的数字

- **.trim** - 输入首尾空格过滤

**用法:**

- **如果是对 input 文本框和 textarea 绑定的**,绑定的值会根据输入的内容,就是将内部的变量的值改为 value 中的值

- **如果是对复选框绑定的**

- - **如果绑定的变量不是数组**,会根据复选框是否被选中而改变为 false 或 true,即使原来不是布尔值也会被强制转换为布尔值,这是因为双向的数据绑定,如果是有多个复选框,那么则会一起被选中或不选中

- - **如果变量是数组**则会将 value 属性中的值(没有写 value 属性会传入 null)传入该数组作为其中的一个成员,Vue 会根据数组内部的值来判断是否选中该复选框(内部其实就是这样运作的),如果 value 值一样会有多个复选框被选中,再次点击就会将该值删去然后取消复选框的选中

```vue
<div id='example'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div>

<!--也可以在被选中和没被选择直接设置不同的值-->
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no"
>
<!--
 当选中时
vm.toggle === 'yes'
 当没有选中时
vm.toggle === 'no'
注意:点击了才会改变值,如果没有点击过而变量本身有值的话就不会是fasle-value的值
-->
```

- **如果是对单选按钮进行绑定的**,变量值会随着选中单选框的 value 值而变化,如果变量的值刚开始就是一个单选框的 value 值,那么就会自动选中这个单选框
  **注意:**

- - 单选框和复选框即使不写相同的 name 而只绑定了相同的 modle 也会认做是一类单选框的,但是最好还是将 name 写上

- - 单选框和复选框都可以通过 v-bind:value 绑定的 value 值来设置值自身的 value 值

- 如果是对选择框 select 进行绑定的

  ,绑定的变量的值会随着选中的 option 选项内部的内容而发生变化,如果 option 没有写 value 属性,该变量会变成< option>< /option>内部的值,如果有 value 属性,变量会变成 value 值而不是 option 的内容

  ```vue
  <div id="example">
    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
  <script>
  new Vue({
    el: "#example",
    data: {
      selected: "",
    },
  });
  </script>
  ```

  注意:

  在 s 多选时要绑定一个数组,将上方的 selected:[]，这样在选入的时候就能将每个选择的选项的值加到变量中去,还可以是一个对象,但是要通过 v-bind:value 绑定

  ```vue
  <select v-model="selected">
      <!-- 内联对象字面量 -->
    <option v-bind:value="{ number: 123 }">123</option>
  </select>
  ```

### 3.10 v-pre

**该指令不接受任何表达式,使用了该指令的元素 Vue 在编译时跳过这个元素和它的子元素的编译过程,可以用来显示原始的模板{{}}标签,跳过大量没有指令的节点会加快编译**

### 3.11 v-once

**该指令不需要表达式,只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能**

### 3.12 ref

```vue
// 和react里的ref用法基本一致
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>ref</title>
    <style></style>
  </head>
  <body>
    <div id="app">
      <!-- 给需要获取的标签去一个ref属性的别名 -->
      <p ref="content">Hello ref!</p>
      <button @click="get">Get</button>
    </div>
    <script type="text/javascript" src="./vue.js"></script>
    <script type="text/javascript">
      new Vue({
        el: "#app",
        data() {
          return {};
        },
        methods: {
          get() {
            // 调用this.$refs.xxx获取到相应的标签
            alert(this.$refs.content.innerHTML);
          },
        },
      });
    </script>
  </body>
</html>
```
