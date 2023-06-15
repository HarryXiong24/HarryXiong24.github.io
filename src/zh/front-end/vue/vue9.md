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
title: 9.过渡与动画
---

## 过渡与动画

**Vue 中可以通过`transition`组件来实现过渡效果 Vue 在插入,更新或者移除 DOM 时,提供多种不同方式的应用过渡效果**

- 在 CSS 过渡和动画中自动应用 class

- 可以配合使用第三方 CSS 动画库，如 Animate.css

- 在过渡钩子函数中使用 JavaScript 直接操作 DOM

- 可以配合使用第三方 JavaScript 动画库，如 Velocity.js

### 9.1 过渡的类名

#### 9.1.1 自身实现的类名

**这些类名是 transition 组件中自定好的,在使用的时候只需要在 CSS 中写入特定的类名和样式就可以了**

- **v-enter**：定义进入过渡的开始状态。在元素被插入之前生效，此时元素还没有进入过渡，在元素被插入之后的下一帧移除

- **v-enter-active**：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数

- **v-enter-to**: 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 **v-enter** 被移除)，在过渡/动画完成之后移除

- **v-leave**: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除

- **v-leave-active**：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数

- **v-leave-to**:定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 **v-leave** 被删除)，在过渡/动画完成之后移除

**注:**

- **一般都是使用 v-enter,v-leave-to 与 v-enter-active 和 v-leave-active 的组合**

- **对于这些在过渡中切换的类名来说,如果使用一个没有名字的 `<transition>`,则 `v-` 是这些类名的默认前缀,如果使用了 `<transition name="my-transition">`,那么 `v-enter` 会替换为 `my-transition-enter**`,通过这个可以绑定:name 实现动态过渡的效果

```html
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>

<script>
  new Vue({
    el: "#demo",
    data: {
      show: true,
    },
  });
</script>
```

- 动画效果同过渡效果,只是在动画中 v-enter 这个类名在插入 DOM 中后不会立刻被删除,

  而是在

  animationend

  事件触发时才会被删除

  注:

  动画可以实现多个阶段的样式

  ```html
  <style>
    .bounce-enter-active {
      animation: bounce-in 0.5s;
    }
    .bounce-leave-active {
      animation: bounce-in 0.5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
  </style>

  <div id="example">
    <button @click="show = !show">Toggle show</button>
    <transition name="bounce">
      <p v-if="show">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        facilisis enim libero, at lacinia diam fermentum id. Pellentesque
        habitant morbi tristique senectus et netus.
      </p>
    </transition>
  </div>

  <script>
    new Vue({
      el: "#example-2",
      data: {
        show: true,
      },
    });
  </script>
  ```

#### 9.1.2 自定义过渡的类名

**可以通过引入第三方库实现过渡效果,这时需要使用自定义过渡的类名来加第三方库的过渡效果使用**

可以通过以下特性来自定义过渡类名,这些类名分别也对应着上方的执行时期,它们的优先级高于普通的类名

- **enter-class**

- **enter-active-class**

- **enter-to-class**

- **leave-class**

- **leave-active-class**

- **leave-to-class**

**在这些自定义的属性中可以写入要引入的第三方库的 CSS 样式就能实现效果**

```html
<link
  href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
  rel="stylesheet"
  type="text/css"
/>

<div id="example">
  <button @click="show = !show">
    Toggle render
  </button>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <p v-if="show">hello</p>
  </transition>
</div>

<script>
  new Vue({
    el: "#example",
    data: {
      show: true,
    },
  });
</script>
```

#### 9.1.3 实例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>过渡与动画</title>
    <style>
      .fade1-enter, .fade1-leave-to {
          opacity: 0;
      }
      .fade1-enter-active, .fade1-leave-active {
          transition: opacity 1s;
      }
      .fade2-enter {
          opacity: 0;
          transform: translateX(-20px);
      }
      .fade2-leave-to {
        opacity: 0;
        transform: translateX(20px);
      }
      .fade2-enter-active, .fade2-leave-active {
          transition: all 3s;
      }
    </style>
  </head>
  <body>
    <!--
        1. vue动画的理解
            操作css的transition或animation
            vue会给目标元素添加/移除特定的class
        2. 基本过渡动画的编码
            1). 在目标元素外包裹<transition name="xxx">
            2). 定义class样式
                1>. 指定过渡样式: transition
                2>. 指定隐藏时的样式: opacity/其它
        3. 过渡的类名
            xxx-enter-active: 指定显示的transition
            xxx-leave-active: 指定隐藏的transition
            xxx-enter: 指定隐藏时的样式
    -->
    <div id="app1">
      <button @click="isShow = !isShow">Destroy</button>
      <transition name="fade1">
        <p v-if="isShow">Hello</p>
      </transition>
    </div>
    <div id="app2">
      <button @click="isShow = !isShow">Destroy</button>
      <transition name="fade2">
        <p v-if="isShow">Hello</p>
      </transition>
    </div>
    <script type="text/javascript" src="./vue.js"></script>
    <script type="text/javascript">
      new Vue({
        el: "#app1",
        data() {
          return {
            isShow: "false",
          };
        },
      });
      new Vue({
        el: "#app2",
        data() {
          return {
            isShow: "false",
          };
        },
      });
    </script>
  </body>
</html>
```

### 9.2 初始渲染过渡

**为`transition`组件添加一个简单的属性 appear 就能够实现在刚开始渲染的时候就使用一次`enter-active-class`来实现开始渲染列表的过渡效果**

**初始渲染时也可以使用自定义的 CSS 类名进行初始渲染**

- **appear-class**

- **appear-active-class**

- **appear-to-class**

**注意:**使用自定义类名进行渲染时也需要添加 appear 属性

```html
<transition
  appear
  appear-class="custom-appear-class"
  appear-to-class="custom-appear-to-class"
  appear-active-class="custom-appear-active-class"
>
  <!-- ... -->
</transition>

<!--当然也可以使用JS的钩子函数-->
<transition
  appear
  v-on:before-appear="customBeforeAppearHook"
  v-on:appear="customAppearHook"
  v-on:after-appear="customAfterAppearHook"
  v-on:appear-cancelled="customAppearCancelledHook"
>
  <!-- ... -->
</transition>
```

### 9.3 显性定义过渡时间

**默认情况下，Vue 会等待其在过渡效果的根元素的第一个 `transitionend` 或 `animationend` 事件。**然而也可以不这样设定——比如，我们可以拥有一个精心编排的一系列过渡效果，其中一些嵌套的内部元素相比于过渡效果的根元素有延迟的或更长的过渡效果。在这种情况下,**可以用 `<transition>` 组件上的绑定的 `duration` 属性定制一个显性的过渡持续时间 (以毫秒为单位)**

```html
<transition :duration="1000">...</transition>
```

**可以传入一个对象分别对移入和移除的时间进行设置**

```html
<transition :duration="{ enter: 500, leave: 800 }">...</transition>
```

### 9.4 JS 钩子

**除了通过 CSS 实现过渡效果,还可以用 JS 中的钩子函数实现过渡效果**,这些钩子可以结合 CSS 使用,也可以全部单独使用

```html
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"
  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
  <!-- ... -->
</transition>
```

```html
// ... methods: { // -------- // 进入中 // -------- beforeEnter: function (el) {
// ... }, // 当与 CSS 结合使用时 // 回调函数 done 是可选的 enter: function (el,
done) { // ... el.offsetWidth;
//玄学操作,不加这个设置全JS样式时,动画不会有过渡效果出现,可以认为是这个操作会强制动画刷新
done()
//done()所代表的函数就是下一个结束afterEnter的函数,只有调用了这个回调函数才会执行下面的方法
}, afterEnter: function (el) { // ... }, enterCancelled: function (el) { // ...
}, // -------- // 离开时 // -------- beforeLeave: function (el) { // ... }, //
当与 CSS 结合使用时 // 回调函数 done 是可选的 leave: function (el, done) { //
... done() }, afterLeave: function (el) { // ... }, // leaveCancelled 只用于
v-show 中 leaveCancelled: function (el) { // ... } }
```

**注意:**

- 推荐对于仅使用 JavaScript 过渡的元素添加 `v-bind:css="false"`，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响

- 当只用 JavaScript 过渡的时候，**在 enter 和 leave 中必须使用 done 进行回调**。否则，它们将被同步调用，过渡会立即完成。

### 9.5 多个元素过渡

对于原生标签可以使用 `v-if`和`v-else` 来实现多标签过渡效果

**注意:**当有相同标签名的元素切换时，需要通过 `key` 特性设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容

```html
<transition>
  <button v-if="isEditing" key="save">
    Save
  </button>
  <button v-else key="edit">
    Edit
  </button>
</transition>
<!--也可以也可以通过给同一个元素的 key 特性设置不同的状态来代替 v-if 和 v-else-->
<transition>
  <button v-bind:key="isEditing">
    {{ isEditing ? 'Save' : 'Edit' }}
  </button>
</transition>
```

**过渡模式**

**通过 mode 属性来定义多个元素过渡时的过渡模式**

- **in-out**：新元素先进行过渡，完成之后当前元素过渡离开

- **out-in**：当前元素先进行过渡，完成之后新元素过渡进入

```html
<transition mode="out-in"></transition>
```

### 9.6 列表过渡

**渲染一整个列表时,如用 v-for 来渲染,就需要使用< transition-group> 组件**、

**注意:**

- 不同于 < transition>组件，< transition-group>组件会以一个真实元素呈现,默认为一个 `<span>`标签,可以通过 tag 特性更换为其他元素
  **如:**内部是 li 列表,那么可以用`<transition-grounp tag="ul">`来让该组件被渲染时表现为 ul

- 过渡模式不可用，因为不再相互切换特有的元素

- 内部元素必须要有提供唯一的 key 属性值

#### 9.6.1 添加与删除列表

**通过对一个`transiton-grounp`用过渡的类名和实现当个成员在过渡时的效果**

```html
<style>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>

<div id="list-demo" class="demo">
  <button v-on:click="add">Add</button>
  <button v-on:click="remove">Remove</button>
  <transition-group name="list" tag="p">
    <span v-for="item in items" v-bind:key="item" class="list-item">
      {{ item }}
    </span>
  </transition-group>
</div>

<script>
  new Vue({
    el: "#list-demo",
    data: {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    },
    methods: {
      randomIndex: function() {
        return Math.floor(Math.random() * this.items.length);
      },
      add: function() {
        this.items.splice(this.randomIndex(), 0, this.nextNum++);
      },
      remove: function() {
        this.items.splice(this.randomIndex(), 1);
      },
    },
  });
</script>
```

#### 9.6.2 排序过渡列表

**上方的添加与删除列表只会对进行操作的成员自身产生过渡效果,对组件中的其他成员没有过渡效果,如果要想通过过渡效果进行添加,需要使用 v-move 的类名写入 CSS 样式**,该效果会在组件的成员改变其定位的时候起作用,所以要想起过渡效果还需要在过渡时将元素的定位改变为绝对定位.也可以通过 `name` 属性来自定义前缀,也能通过 `move-class` 属性 CSS 效果

```html
<style>
  .flip-list-move {
    transition: transform 1s;
  }
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>

<div id="flip-list-demo" class="demo">
  <button v-on:click="shuffle">Shuffle</button>
  <transition-group name="flip-list" tag="ul">
    <li v-for="item in items" v-bind:key="item">
      {{ item }}
    </li>
  </transition-group>
</div>

<script>
  new Vue({
    el: "#flip-list-demo",
    data: {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    methods: {
      shuffle: function() {
        this.items = _.shuffle(this.items);
      },
    },
  });
</script>
```

#### 9.6.3 交错过渡列表

**通过 JS 钩子来实现列表的过渡效果,使 data 属性与 JS 进行数据通信,就可以实现列表的交错过渡效果**

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

<div id="staggered-list-demo">
  <input v-model="query" />
  <transition-group
    name="staggered-fade"
    tag="ul"
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
    <li
      v-for="(item, index) in computedList"
      v-bind:key="item.msg"
      v-bind:data-index="index"
    >
      {{ item.msg }}
    </li>
  </transition-group>
</div>

<script>
  new Vue({
    el: "#staggered-list-demo",
    data: {
      query: "",
      list: [
        { msg: "Bruce Lee" },
        { msg: "Jackie Chan" },
        { msg: "Chuck Norris" },
        { msg: "Jet Li" },
        { msg: "Kung Fury" },
      ],
    },
    computed: {
      computedList: function() {
        var vm = this;
        return this.list.filter(function(item) {
          return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
        });
      },
    },
    methods: {
      beforeEnter: function(el) {
        el.style.opacity = 0;
        el.style.height = 0;
      },
      enter: function(el, done) {
        var delay = el.dataset.index * 150;
        setTimeout(function() {
          Velocity(el, { opacity: 1, height: "1.6em" }, { complete: done });
        }, delay);
      },
      leave: function(el, done) {
        var delay = el.dataset.index * 150;
        setTimeout(function() {
          Velocity(el, { opacity: 0, height: 0 }, { complete: done });
        }, delay);
      },
    },
  });
</script>
```
