---
icon: vue
category: Web前端
tags:
  - Vue
  - MVVM
  - Vuex
  - Vue-router
  - Vue源码分析
time: 2020-6-18
footer: How easy to do
title: 4.计算属性与监视
---

## 计算属性与监视

### 4.1 computed

**计算属性 computed 是用于定义一些可以动态改变的属性的,模板内的表达式非常便利,但是设计它们的初衷是用于简单运算的。**

在模板中放入太多的逻辑会让模板过重且难以维护,所以尽量不要在模板{{}}中使用计算表达式,这时就可以用 Vue 实例中的 computed 属性,computed 里面的属性的值为一个函数,可以在该函数中间一系列的计算,然后将需要的结果返回

```vue
<div id="app">
    <input type="text" v-model="firstName"> +
    <input type="text" v-model="lastName"> =
    <span>{{fullName}}</span>
  </div>
<script>
// 创建 Vue 实例，得到 ViewModel
var vm = new Vue({
  el: "#app",
  data: {
    firstName: "jack",
    lastName: "chen",
  },
  methods: {},
  computed: {
    /*
    计算属性； 特点：当计算属性中所以来的任何一个 data 属性改变之后，都会重新触发 本计算属性 的重新计    算，从而更新 fullName 的值
    */
    fullName() {
      return this.firstName + " - " + this.lastName;
    },
  },
});
</script>
```

**计算属性默认只有 getter,不过在需要时也可以提供一个 setter,这时最外层的属性会是一个对象,内部分别有 get()方法和 set()方法**

```vue
<div id="app">
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <!-- 点击按钮重新为 计算属性 fullName 赋值 -->
    <input type="button" value="修改fullName" @click="changeName">
<span>{{fullName}}</span>
</div>
<script>
// 创建 Vue 实例，得到 ViewModel
var vm = new Vue({
  el: "#app",
  data: {
    firstName: "jack",
    lastName: "chen",
  },
  methods: {
    changeName() {
      this.fullName = "TOM - chen2";
    },
  },
  computed: {
    fullName: {
      get: function() {
        return this.firstName + " - " + this.lastName;
      },
      set: function(newVal) {
        var parts = newVal.split(" - ");
        this.firstName = parts[0];
        this.lastName = parts[1];
      },
    },
  },
});
</script>
```

**注意:**

- 计算属性本质上就是一个方法,不过只需要将其当做一个属性来用,**在使用这些属性的时候是直接使用它们的名称**,而不是将其当做方法来用,所以**在引用的时候不要在后面加上()**
- **只要计算属性的函数内部所用到的 data 中的数据发生了变化就会立刻调用该函数,计算属性的值会重新被计算**
- **与方法不同的是 computed 是有缓存的,意味着只要内部的响应式依赖变量没有发生改变访问的该函数的结果依然不会发生改变**,而如果是方法,每当再次访问方法时都会重新执行一次函数,所以不会有缓存,如果不相同要有缓存,computed 就用方法 methods 来代替

### 4.2 watch

**watch 属性为 Vue 实例或组件中的一个自定义的侦听器,通过该属性可以在实例或组件的数据发生变化时进行相应的操作,对于路由这些虚拟 DOM 的监听是非常好用的**

**watch 的属性方法里有两个参数**

```
xxx（new, old）{

//第一个参数是新数据，第二个参数是旧数据
//只写一个的时候代表新数据**

}
```

- 类型：{ [key: string]: string | Function | Object | Array }
- 详细：
  一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 \$watch()，遍历 watch 对象的每一个属性。
- 示例：

```vue
var vm = new Vue({ data: { a: 1, b: 2, c: 3, d: 4, e: { f: { g: 5 } } }, watch:
{ a: function (val, oldVal) { console.log('new: %s, old: %s', val, oldVal) }, //
方法名 b: 'someMethod', // 该回调会在任何被侦听的对象的 property
改变时被调用，不论其被嵌套多深 c: { handler: function (val, oldVal) { /* ... */
}, deep: true }, // 该回调将会在侦听开始之后被立即调用 d: { handler:
'someMethod', immediate: true }, e: [ 'handle1', function handle2 (val, oldVal)
{ /* ... */ }, { handler: function handle3 (val, oldVal) { /* ... */ }, /* ...
*/ } ], // watch vm.e.f's value: {g: 5} 'e.f': function (val, oldVal) { /* ...
*/ } } }) vm.a = 2 // => new: 2, old: 1
```

**注意:**

不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。

**监听 data 数据变化**

```vue
<div id="app">
    <input type="text" v-model="firstName"> +
    <input type="text" v-model="lastName"> =
    <span>{{fullName}}</span>
  </div>

<script>
// 创建 Vue 实例，得到 ViewModel
var vm = new Vue({
  el: "#app",
  data: {
    firstName: "jack",
    lastName: "chen",
    fullName: "jack - chen",
  },
  methods: {},
  watch: {
    firstName: function(newVal, oldVal) {
      // 第一个参数是新数据，第二个参数是旧数据
      this.fullName = newVal + " - " + this.lastName;
    },
    lastName: function(newVal, oldVal) {
      this.fullName = this.firstName + " - " + newVal;
    },
  },
});
</script>
```

**监听路由的变化**

```vue
<div id="app">
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>

	<router-view></router-view>
</div>

<script>
var login = Vue.extend({
  template: "<h1>登录组件</h1>",
});

var register = Vue.extend({
  template: "<h1>注册组件</h1>",
});

var router = new VueRouter({
  routes: [
    { path: "/login", component: login },
    { path: "/register", component: register },
  ],
});

// 创建 Vue 实例，得到 ViewModel
var vm = new Vue({
  el: "#app",
  data: {},
  methods: {},
  router: router,
  watch: {
    $route: function(newVal, oldVal) {
      if (newVal.path === "/login") {
        console.log("这是登录组件");
      }
    },
  },
});
</script>
```

### 4.3 wath,computed 与 methods 的区别

- **computed 属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用**
- **methods 方法表示一个具体的操作，主要书写业务逻辑**
- **watch 一个对象，键是需要观察的表达式，值是对应回调函数。主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作,可以看作是 computed 和 methods 的结合体**

### 4.4 实例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>startVue</title>
  </head>
  <body>
    <div id="app">
      <div>
        FirstName<input
          type="text"
          v-model="firstName"
          placeholder="Please input"
        />
        LastName<input
          type="text"
          v-model="lastName"
          placeholder="Please input"
        />
        <br />
        FullNameComputed<input type="text" v-model="fullName1" />
        <br />
        FullName2Watch<input type="text" v-model="fullName2" />
        <br />
        FullNameSet<input type="text" v-model="fullName3" />
      </div>
    </div>
  </body>
  <script text="javascript" src="./vue.js"></script>
  <script text="javascript">
    const app = new Vue({
      el: "#app",
      data: {
        firstName: "",
        lastName: "",
        fullName2: "",
      }, // computed当做属性来使用,里面的属性名一般不用写到data中，属性值是一个方法
      computed: {
        fullName1: function() {
          // this就是指app这个Vue的实例对象
          return this.firstName + " " + this.lastName;
        },
        fullName3: {
          // 接受
          // 需要读取当前属性值的时候进行回调
          get() {
            return this.firstName + " " + this.lastName;
          }, // 更新数据时输出
          // 当属性值发生改变的时候进行回调，更新相关数据
          set(newValue) {
            var names = newValue.split(" ");
            this.firstName = names[0];
            this.lastName = names[names.length - 1];
          },
        },
      }, //watch是一个对象,对象里的属性写到data中
      watch: {
        firstName: function(value) {
          this.fullName2 = value + " " + this.lastName;
        },
        lastName: function(value) {
          this.fullName2 = this.firstName + " " + value;
        },
      },
    });
  </script>
</html>
```
