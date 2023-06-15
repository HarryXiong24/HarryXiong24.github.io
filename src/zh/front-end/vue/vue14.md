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
title: 14.Vue-Router
---

## Vue-Router

### 14.1 路由的定义

- **后端路由：**对于普通的网站，所有的超链接都是 URL 地址，所有的 url 地址都对应服务器上对应的资源

  **后端路由是处理请求的回调函数**

- **前端路由：**对于单页面应用程序来说，主要通过 URL 中的 hash(#号)来实现不同页面之间的切换，同时，hash 有一个特点：HTTP 请求中不会包含 hash 相关的内容；所以，单页面程序中的页面跳转主要用 hash 实现,在单页面应用中这就叫做前端路由

  **前端路由让构建单页面应用变得易如反掌**

### 14.2 VueRouter 的安装

```bash
法一：
https://unpkg.com/vue-router/dist/vue-router.js
也可以像 https://unpkg.com/vue-router@2.0.0/dist/vue-router.js 这样指定 版本号 或者 Tag。
在 Vue 后面加载 vue-router，它会自动安装的：
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>

法二：
NPM
npm install vue-router
如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
如果使用全局的 script 标签，则无须如此 (手动安装)。

tip：
构建开发版
如果你想使用最新的开发版，就得从 GitHub 上直接 clone，然后自己 build 一个 vue-router。
git clone https://github.com/vuejs/vue-router.git node_modules/vue-router
cd node_modules/vue-router
npm install
npm run build

```

### 14.3 Vue-router 基本操作

**1.导入 vue-router 组件类库**

```html
<!-- 1. 导入 vue-router 组件类库 -->
<script src="./lib/vue-router-2.7.0.js"></script>
```

**2.使用 router-link 组件来导航**

```html
<!-- 
2. 使用 router-link 组件来导航
router-link组件默认渲染为一个a标签,可以使用tag属性来转换标签,但是无论转换为什么标签都可以进行跳转 
-->
<router-link to="/login">登录</router-link>
<router-link to="/register">注册</router-link>
<!--链接的跳转可以使用a标签,但是官方不推荐使用,因为a链接使用的时候需要在前面加上#,会很麻烦-->
```

**3.使用 router-view 组件来显示匹配到的组件**

```html
<!-- 
3. 使用 router-view 组件来显示匹配到的组件 
这是Vue-router提供的组件元素,专门用来当做占位符,当路由规则到了路径,就会把对应的组件展示到其中
可以使用多个router-view,这是会根据path属性的目录渲染多个组件
-->
<!--
    最外层也可以使用transition组件将 router-view 组件包裹实行过渡效果
-->
<router-view></router-view>
```

**4.创建使用`Vue.extend`创建组件**

```js
// 4.1 使用 Vue.extend 来创建登录组件
var login = Vue.extend({
  template: "<h1>登录组件</h1>",
});

// 4.2 使用 Vue.extend 来创建注册组件
var register = Vue.extend({
  template: "<h1>注册组件</h1>",
});
```

**5.创建一个路由 router 实例，通过 routers 属性来定义路由匹配规则**

```js
// 5. 创建一个路由 router 实例，通过 routers 属性来定义路由匹配规则
var router = new VueRouter({
  /*
      route这个配置对象中的route表示路由器匹配规则的意思
      每个路由规则都是一个规则对象,身上有两个必须的属性:
      第一个属性为path,表示监听哪个路由链接地址
      第二个属性为component,表示如果路由前面匹配到了path路径,则展示component属性对于的组件
      */

  routes: [
    //路由器匹配规则

    { path: "/", redirect: "/login" },
    //通过redirect属性设置路由重定向,当访问根目录的时候自动跳转到/login目录
    { path: "/login", component: login },
    { path: "/register", component: register },
  ],
});
```

**6.使用 router 属性来使用路由规则**

```js
// 6. 创建 Vue 实例，得到 ViewMode
var vm = new Vue({
  el: "#app",
  router: router, // 使用 router 属性来使用路由规则
});
```

### 14.4 修改路由的 CSS 样式

**当点击了`router-link`组件时,会默认为该路由设置一个`router-link-active`的 CSS 类名,在通过给该类名设置样式可以达到修改路由样式的能力,如果要修改这个默认的类名选用自己需要的类名,可以通过在 VueRouter 的构造函数中添加`linkActiveClass`来改变一个新值**

```js
var router = new VueRouter({
  routes: [
    //路由器匹配规则
    { path: "/", redirect: "/login" },
    //通过redirect属性设置路由重定向,当访问根目录的时候自动跳转到/login目录
    { path: "/login", component: login },
    { path: "/register", component: register },
  ],
  linkActiveClass: "myClass",
});
```

### 14.5 向路由里传入参数

**一个 Vue 组件内置的\$route 属性可以代表着正在进行跳转的路由**

#### 14.5.1 query

**当在路由器中链接中使用查询字符串(url 后面的?后的一系列值),不用修改路由规则中的 path 属性的路径,在路由视图的组件中可用通过 this.\$route 获取该路由实例,通过该实例的 query 属性获取传入的参数的属性和值**

传入

```html
<router-link to="/login?id=123">登录</router-link>
<router-link to="/register?id=456">注册</router-link>
```

获取

```js
var login = Vue.extend({
    template: '<h1>登录组件</h1>',
    created(){
        console.log(this.$route.query.id);
    }
});

var register = Vue.extend({
    template: '<h1>注册组件</h1>'
    created(){
    console.log(this.$route.query.id);
    }
});
```

#### 11.4.2 params

**使用 params 来获取参数需要在路由规则中定义参数,然后在路由器链接中需要在后面跟上对应数量的/+值传给参数实现传参,通过该实例的 params 属性获取传入的参数的属性和值**

```html
<router-link to="/login/123/zhangsan">登录</router-link>
<router-link to="/register/456/lisi">注册</router-link>
```

```js
var login = Vue.extend({
    template: '<h1>登录组件</h1>',
    created(){
        console.log(this.$route.params.id);
    }
});

var register = Vue.extend({
    template: '<h1>注册组件</h1>'
    created(){
    console.log(this.$route.params.id);
    }
});
```

```js
// 5. 创建一个路由 router 实例，通过 routers 属性来定义路由匹配规则
var router = new VueRouter({
  /*
      route这个配置对象中的route表示路由器匹配规则的意思
      每个路由规则都是一个规则对象,身上有两个必须的属性:
      第一个属性为path,表示监听哪个路由链接地址
      第二个属性为component,表示如果路由前面匹配到了path路径,则展示component属性对于的组件
      */

  routes: [
    //路由器匹配规则

    { path: "/", redirect: "/login" },
    //通过redirect属性设置路由重定向,当访问根目录的时候自动跳转到/login目录
    { path: "/login/:id/:name", component: login },
    { path: "/register/:id/:name", component: register },
  ],
});
```

#### 14.5.3 通过 router-view

```js
<router-view :message="message"></router-view>

在router-view中传入参数，然后再路由里像props一样使用
```

### 14.6 路由嵌套

**如果想要在一层路由组件下面开启第二层组件,不能够直接通过二级的路由链接得到二级的路由组件,因为这样一级的链接组件就会消失,需要通过`routes`路由器匹配规则中相应规则的 children 属性,在该属性构成的数组中写入子路由来实现路由嵌套的功能**

```js
<div id="app">
    <router-link to="/account">Account</router-link>

    <router-view></router-view>
  </div>

  <script>
    // 父路由中的组件
    const account = Vue.extend({
      template: `<div>
        这是account组件
        <router-link to="/account/login">login</router-link> |
        <router-link to="/account/register">register</router-link>
        <router-view></router-view>
      </div>`
    });

    // 子路由中的 login 组件
    const login = Vue.extend({
      template: '<div>登录组件</div>'
    });

    // 子路由中的 register 组件
    const register = Vue.extend({
      template: '<div>注册组件</div>'
    });

    // 路由实例
    var router = new VueRouter({
      routes: [
        { path: '/', redirect: '/account/login' }, // 使用 redirect 实现路由重定向
        {
          path: '/account',
          component: account,
          children: [ // 通过 children 数组属性，来实现路由的嵌套
            { path: 'login', component: login }, // 注意，子路由的开头位置，不要加 / 路径符
            { path: 'register', component: register }
          ]
        }
      ]
    });

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {},
      components: {
        account
      },
      router: router
    });
  </script>
```

### 14.7 命名路由

**通过在`<router-link></router-link>`的组件中 to 指向一个带有 name 属性的对象,而在路由规则中也添加一个对应的 name 属性实现路由跳转,该方法能让我们更加轻松的进行路由规则的匹配**

```js
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
<script>
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
</script>
```

### 14.8 命名视图

**在 Vue 的路由实例中,一个路由路径可以对应多个路由组件,所以可以设置多个路由的视图,在一个路径中就可以,通过命名的视图在一个路径中使用多个路由组件,从而实现经典的布局效果**

```js
<!--CSS-->
<style>
    .header {
      border: 1px solid red;
    }

    .content{
      display: flex;
    }
    .sidebar {
      flex: 2;
      border: 1px solid green;
      height: 500px;
    }
    .mainbox{
      flex: 8;
      border: 1px solid blue;
      height: 500px;
    }
  </style>
<!--HTML-->
<div id="app">
    <router-view></router-view>
    <div class="content">
      <router-view name="a"></router-view>
<!--通过name属性可以只参与对应组件的渲染,没有name属性代表是default,会渲染属性名为defalut的组件-->
      <router-view name="b"></router-view>
    </div>
  </div>
<!--JS-->
<script>
    var header = Vue.component('header', {
      template: '<div class="header">header</div>'
    });

    var sidebar = Vue.component('sidebar', {
      template: '<div class="sidebar">sidebar</div>'
    });

    var mainbox = Vue.component('mainbox', {
      template: '<div class="mainbox">mainbox</div>'
    });

    // 创建路由对象
    var router = new VueRouter({
      routes: [
        {
          path: '/', components: {
            default: header,//定义一个name为efalut的组件,即使视图不写name属性也能渲染该组件
            a: sidebar,
            b: mainbox
          }
        }
      ]
    });

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {},
      methods: {},
      router
    });
  </script>
```

### 14.9 route 与 router

- this.\$route 是路由的参数对象,所有的路由参数如 pararms 和 query 都属于该属性的参数

- this.\$router 是一个路由导航对象,用它可以方便的使用 JS 代码,实现路由器的前进,后退,跳转到新的 url 地址

- 有**push(), replace(), back()**三个常用方法

  ```js
  // 字符串
  this.$router.push("home");

  // 对象
  this.$router.push({ path: "home" });

  // 命名的路由
  this.$router.push({ name: "user", params: { userId: "123" } });

  // 带查询参数，变成 /register?plan=private
  this.$router.push({ path: "register", query: { plan: "private" } });
  ```

  注意:

- - 如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况

- - 该属性的 API`this.$router.push`、 `this.$router.replace` 和 `this.$router.go` 跟 `window.history.pushState`、 `window.history.replaceState` 和 `window.history.go`类似

### 14.10 重定向和别名

#### 14.10.1 重定向

“重定向”的意思是，当用户访问 /a 时，URL 将会被替换成 /b，然后匹配路由为 /b。

重定向也是通过 routes 配置来完成，下面例子是从 /a 重定向到 /b：

```js
const router = new VueRouter({
  routes: [{ path: "/a", redirect: "/b" }],
});
```

重定向的目标也可以是一个命名的路由：

```js
const router = new VueRouter({
  routes: [{ path: "/a", redirect: { name: "foo" } }],
});
```

甚至是一个方法，动态返回重定向目标：

```js
const router = new VueRouter({
  routes: [
    {
      path: "/a",
      redirect: (to) => {
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
      },
    },
  ],
});
```

#### 14.10.2 别名

别名的意思是：

**/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。**

上面对应的路由配置为：

```js
const router = new VueRouter({
  routes: [{ path: "/a", component: A, alias: "/b" }],
});
```

### 14.11 导航守卫(全局前置守卫)

“导航”表示路由正在发生改变。

正如其名，`vue-router` 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。

记住**参数或查询的改变并不会触发进入/离开的导航守卫**。你可以通过观察 `$route` 对象来应对这些变化，或使用 `beforeRouteUpdate` 的组件内守卫。

你可以使用 `router.beforeEach` 注册一个全局前置守卫：

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 **等待中**。

每个守卫方法接收三个参数：

- **`to: Route`**: 即将要进入的目标 [路由对象](https://router.vuejs.org/zh/api/#路由对象)
- **`from: Route`**: 当前导航正要离开的路由
- **`next: Function`**: 一定要调用该方法来 **resolve** 这个钩子。执行效果依赖 `next` 方法的调用参数。
  - **`next()`**: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 **confirmed** (确认的)。
  - **`next(false)`**: 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 `from` 路由对应的地址。
  - **`next('/')` 或者 `next({ path: '/' })`**: 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 `next` 传递任意位置对象，且允许设置诸如 `replace: true`、`name: 'home'` 之类的选项以及任何用在 [`router-link` 的 `to` prop](https://router.vuejs.org/zh/api/#to) 或 [`router.push`](https://router.vuejs.org/zh/api/#router-push) 中的选项。
  - **`next(error)`**: (2.4.0+) 如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止且该错误会被传递给 [`router.onError()`](https://router.vuejs.org/zh/api/#router-onerror) 注册过的回调。

**确保 `next` 函数在任何给定的导航守卫中都被严格调用一次。它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错。**

这里有一个在用户未能验证身份时重定向到 `/login` 的示例：

```js
// BAD
router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  // 如果用户未能验证身份，则 `next` 会被调用两次
  next();
});
// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else next();
});
```

### 14.12 实例

#### 14.12.1 项目中路由放置规则

1. 路由组件一般放置在 views/pages 的文件夹下，而不是放置在 components 文件夹下，一般 components 文件夹放置非路由组件

2. 路由器组件一般放置在 router 文件夹下，入口文件为 index.js，里面是路由的配置

#### 14.12.2 main.js 配置路由器

```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import router from "./router/index"; // 导入路由器
import App from "./views/路由/App.vue";
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>", // 也可以简写成router(ES6语法)
  router: router,
});
```

#### 14.12.3 index.js 配置

```js
/**
 * 路由器模块
 * 配置所有的路由
 */
import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/路由/About.vue";
import Home from "../views/路由/Home.vue";
import News from "../views/路由/News.vue";
import Message from "../views/路由/Message.vue";
import MsgDetail from "../views/路由/MsgDetail.vue";
// 如果在一个模块化工程中使用它,必须要通过Vue.use()明确地安装路由功能
Vue.use(VueRouter);
export default new VueRouter({
  // routes为一个数组对象
  routes: [
    {
      // 指定其跳转的位置
      path: "/About", // 指定其对应绑定的路由
      component: About,
    },
    {
      path: "/Home",
      component: Home, // 子路由的定义方式
      children: [
        {
          // /在开头永远代表根路径
          path: "/Home/News",
          component: News, // meta用来配置标识属性, 用于v-show等进行显示时的标识
          meta: {
            showFooter: true,
          },
        },
        {
          // ''代表当前路径，所以'Message'为简写
          path: "Message",
          component: Message,
          children: [
            {
              // :表示占位，一般用于params参数的使用
              path: "/Home/Message/MsgDetail/:id",
              component: MsgDetail,
            },
          ],
        },
        {
          path: "",
          redirect: "News",
        },
      ],
    }
    /**
     * 路由的重定向
     */,
    {
      path: "/",
      redirect: "/About",
    },
  ],
});
```

### 14.13 路由懒加载

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

结合 Vue 的[异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#异步组件)和 Webpack 的[代码分割功能](https://doc.webpack-china.org/guides/code-splitting-async/#require-ensure-/)，轻松实现路由组件的懒加载。

首先，可以将异步组件定义为返回一个 Promise 的工厂函数 (该函数返回的 Promise 应该 resolve 组件本身)：

```js
const Foo = () =>
  Promise.resolve({
    /* 组件定义对象 */
  });
```

第二，在 Webpack 2 中，我们可以使用[动态 import](https://github.com/tc39/proposal-dynamic-import)语法来定义代码分块点 (split point)：

```js
import("./Foo.vue"); // 返回 Promise
```

注意

如果您使用的是 Babel，你将需要添加 [`syntax-dynamic-import`](https://babeljs.io/docs/plugins/syntax-dynamic-import/) 插件，才能使 Babel 可以正确地解析语法。

结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件。

```js
const Foo = () => import("./Foo.vue");
```

在路由配置中什么都不需要改变，只需要像往常一样使用 `Foo`：

```js
const router = new VueRouter({
  routes: [{ path: "/foo", component: Foo }],
});
```

**把组件按组分块**

有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 [命名 chunk](https://webpack.js.org/guides/code-splitting-require/#chunkname)，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。

```js
const Foo = () => import(/* webpackChunkName: "group-foo" */ "./Foo.vue");
const Bar = () => import(/* webpackChunkName: "group-foo" */ "./Bar.vue");
const Baz = () => import(/* webpackChunkName: "group-foo" */ "./Baz.vue");
```

Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。
