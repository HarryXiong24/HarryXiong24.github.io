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
title: 12.组件
---

## 组件

### 12.1 **组件的定义**

**组件的出现是为了拆分 Vue 实例的代码量,能够让我们以不同的组件来划分不同的功能模板,将来需要什么样的功能,只需要调用对应的组件就可以了**

**组件化与模块化的区别**

- 模块化是从代码逻辑的角度进行划分的;方便代码分层开发,保证每个功能模块的职能单一

- 组件化是从 UI 界面的角度进行划分的,前端的组件化是为了方便 UI 组件的重用

### 12.2 创建组件

**组件的注意事项:**

- **每个组件必须只有一个根元素,**可以将模板的内容包裹在一个父元素内来解决这个问题

- 组件中可以有自己的 data 数据,使用方式同 Vue 实例中一样,**但是组件的 data 只能是一个方法,而且必须要返回一个包含了数据的对象,**因为需要每个组件之间相互独立,如果不是一个函数,那么每个组件就会影响其他的组件
  **如果要想同时影响其他数据,可以创建一个外部的镀锡,每次 data 返回这个对象**

#### 12.2.1 组件名

**在创建一个组件时,我们始终需要给该组件一个名字用作标识**,组件名的有多种写法

- **短横线命名法**,使用短横线命名法来命名组件在使用的时候也是直接将引用的组件名作为标签名来使用

- **驼峰命名法,**使用驼峰命名法命名的组件在引用这个组件时可以通过两种命名的方式来引用
  **注意:**当用作标签时只能使用短横线命名法,所以最好都使用短横线命名法来命名

#### 12.2.2 全局组件

**创建全局组件有三种方式,都是基于 Vue.component()方法来创建的**

- 通过

  ```js
  Vue.extend();
  ```

  的方式,创建一个含有 template 属性的子类,引用子类到

  ```js
  Vue.component();
  ```

  创建的组件中去

  ```js
  var tem1 = Vue.extend({
      template:'<h3>这是使用 Vue.extend 创建的组件</h3>'
  });
  Vue.component('myTem1',tem1);

  <!--可以通过组合的形式引用-->
  Vue.component('myTem1',Vue.extend({
      template :'<h3>这是使用 Vue.extend 创建的组件</h3>'
  }));
  ```

- 直接使用

  ```js
  Vue.component();
  ```

  方法传入一个对象

  ```js
  Vue.component("my-component-name", {
    template: "<h3>这是直接使用Vue.component创建的组件</h3>",
  });
  ```

- 在一个 `<script>` 标签中，并为其带上 `text/x-template`的类型，然后通过 ID 引用模板(这种方式有代码提示)

  ```js
  <script type="text/x-template" id="hello-world-template">
    <p>Hello hello hello</p>
  </script>

  <script>
  Vue.component('hello-world', {
    template: '#hello-world-template'
  })
  </script>
  ```

#### 12.2.3 私有组件

**通过在一个 Vue 实例中向 components 对象中添加属性可以在局部注册只能在该 Vue 实例内部使用的私有组件**

**对于 components 对象中的每个属性来说，其属性名就是自定义元素的名字，其属性值就是这个组件的选项对象**

```js
new Vue({
  el: "#app",
  components: {
    "component-a": {
      template: "",
    },
    "component-b": {
      template: "",
    },
  },
});
/*
    也可以通过一个普通的变量来定义组件
*/
var ComponentA = {
  /* ... */
};
var ComponentB = {
  /* ... */
};
var ComponentC = {
  /* ... */
};

new Vue({
  el: "#app",
  components: {
    "component-a": ComponentA,
    "component-b": ComponentB,
  },
});
```

**注意:**局部注册的组件在其子组件中不可以使用,如果要使用需要嵌套创建组件或通过 webpack 等导出

```js
//嵌套组件
var ComponentA = {
  /* ... */
};

var ComponentB = {
  components: {
    "component-a": ComponentA,
  },
  // ...
};
```

### 12.3 Props

**子组件是无法直接使用父组件的 data 中的数据的,需要通过 props 属性才能够使用父组件传入过来的值**

#### 12.3.1 向子组件传入数据

**在父组件的引用中填入属性名与对应的属性值,然后在子组件的 props 值填入与引用子组件的属性名一致的属性名,就可以在子组件中引用父组件的数据了，就如访问 data 中的值一样**

```html
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
<script>
  Vue.component("blog-post", {
    props: ["title"],
    template: "<h3>{{ title }}</h3>",
  });
</script>
```

**注意:**

- **-一个组件默认可以拥有任意数量的 prop,**任何值都可以传递给任何 prop,但是为了方便可以传入一个对象,调用对象的属性来使用传入的数据

- 组件中的所有 props 中的数据都是通过父组件传递给子组件**的,不要试图去修改 props 中传入的数据,**一般都是只读的,如果修改 Vue 会抛出报错信息

- **可以通过 v-bind 动态传递给 prop 一个值**

- 子组件的 data 数据并不是通过父组件传递过来的,而是子组件自身私有的,比如子组件通过 Ajax 请求回来的数据都可以放在 data 身上,**子组件的 data 上的数据都是可读可写的**

#### 12.3.2 Prop 的大小写

**HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当使用 DOM 中的模板时，驼峰命名法的 prop 名需要使用其等价的短横线分隔命名**

```js
<blog-post post-title="hello!"></blog-post>

<script>
Vue.component('blog-post', {
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
</script>
```

#### 12.3.3 Prop 类型

**如果希望传入的 prop 都有指令的值类型,可以用对象的方式来,可以以对象形式列出 prop，这些属性的名称和值分别是 prop 各自的名称和类型。除此之外,还可以用于配置其他高级选项**

```js
//数组形式
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
//对象形式
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object
}
```

```js
// 简单语法
Vue.component("props-demo-simple", {
  props: ["size", "myMessage"],
});

// 对象语法，提供校验
Vue.component("props-demo-advanced", {
  props: {
    // 检测类型
    height: Number,
    // 检测类型 + 其他验证
    age: {
      type: Number,
      default: 0, //设置默认值
      required: true, //是否必须
      validator: function(value) {
        //对值进行验证
        return value >= 0;
      },
    },
  },
});
```

#### 12.3.4 动态传递 Prop

**可以通过 v-bind 的方式动态传递一个变量值给一个 prop**

- 传入一个数字

  ```html
  <!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
  <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
  <blog-post v-bind:likes="42"></blog-post>

  <!-- 用一个变量进行动态赋值。-->
  <blog-post v-bind:likes="post.likes"></blog-post>
  ```

- 传入一个布尔值

  ```html
  <!-- 包含该 prop 没有值的情况在内，都意味着 `true`。-->
  <blog-post is-published></blog-post>

  <!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
  <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
  <blog-post v-bind:is-published="false"></blog-post>

  <!-- 用一个变量进行动态赋值。-->
  <blog-post v-bind:is-published="post.isPublished"></blog-post>
  ```

- 传入一个数组

  ```html
  <!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
  <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
  <blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>

  <!-- 用一个变量进行动态赋值。-->
  <blog-post v-bind:comment-ids="post.commentIds"></blog-post>
  ```

- 传入一个对象

  ```html
  <!-- 即便对象是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
  <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
  <blog-post
    v-bind:author="{
      name: 'Veronica',
      company: 'Veridian Dynamics'
    }"
  ></blog-post>

  <!-- 用一个变量进行动态赋值。-->
  <blog-post v-bind:author="post.author"></blog-post>
  ```

- 传入一个对象的所有属性

  如果想要将一个对象的所有属性都作为 prop 传入，你可以使用不带参数的 `v-bind`

  (取代 `v-bind:prop-name`)

  ```js
  post: {
    id: 1,
    title: 'My Journey with Vue'
  }
  ```

  ```js
  <blog-post v-bind="post"></blog-post>
  <!--与下面的方法等价-->
  <blog-post v-bind:id="post.id"  v-bind:title="post.title"></blog-post>
  ```

### 12.4 \$ref

**可以使用 ref 属性为一个组件或是子元素赋予一个引用的 ID,通过这个引用的 ID,父组件可以直接通过`this.$refs`访问这个组件或子元素**

```html
<div id="app">
  <div>
    <input type="button" value="获取元素内容" @click="getElement" />
    <!-- 使用 ref 获取元素 -->
    <h1 ref="myh1">这是一个大大的H1</h1>

    <hr />
    <!-- 使用 ref 获取子组件 -->
    <my-com ref="mycom"></my-com>
  </div>
</div>

<script>
  Vue.component("my-com", {
    template: "<h5>这是一个子组件</h5>",
    data() {
      return {
        name: "子组件",
      };
    },
  });

  // 创建 Vue 实例，得到 ViewModel
  var vm = new Vue({
    el: "#app",
    data: {},
    methods: {
      getElement() {
        // 通过 this.$refs 来获取元素
        console.log(this.$refs.myh1.innerText);
        // 通过 this.$refs 来获取组件
        console.log(this.$refs.mycom.name);
      },
    },
  });
</script>
```

### 12.5 组件切换

#### 12.5.1 通过 v-if 切换组件

**通过一个标识可以进行两个组件之间的切换**

```js
<div id="app">
    <a href="#" @click.prevent="flag=true">登录</a>
    <a href="#" @click.prevent="flag=false">注册</a>
    <login v-if="flag"></login>
    <register v-else></register>
</div>

<script>
    Vue.component("login",{
        template:"<h2>登录<h2>"
    })
     Vue.component("register",{
        template:"<h2>注册<h2>"
    })
    new Vue({
        el:"#app",
        data:{
            flag:true
        }
    })
</script>
```

#### 12.5.2 通过 component 切换组件

**通过 Vue 中自带的 component 标签的:is 特性来实现多个组件之间的切换**

```js
<div id="app">
    <a href="#" @click.prevent="clickName='login'">登录</a>
    <a href="#" @click.prevent="clickName='register'">注册</a>
    <component :is="clickName"></component>
</div>

<script>
    Vue.component("login",{
        template:"<h2>登录<h2>"
    })
     Vue.component("register",{
        template:"<h2>注册<h2>"
    })
    new Vue({
        el:"#app",
        data:{
            clickName:"login"
        }
    })
</script>
```

#### 12.5.3 过渡切换

**组件的切换比其他的东西容易很多,只需要使用过渡模式就能完成切换**

```js
<style>
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to{
        opacity: 0;
    }
</style>

<div id="app">
    <a href="#" @click.prevent="clickName='login'">登录</a>
    <a href="#" @click.prevent="clickName='register'">注册</a>
    <transition mode="out-in">
    <component :is="clickName" name="component-fade"></component>
    </transition>
</div>

<script>
    Vue.component("login",{
        template:"<h2>登录<h2>"
    })
     Vue.component("register",{
        template:"<h2>注册<h2>"
    })
    new Vue({
        el:"#app",
        data:{
            clickName:"login"
        }
    })
</script>
```
