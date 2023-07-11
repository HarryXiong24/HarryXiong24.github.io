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
title: 15.Vuex
---

## Vuex

### 15.1 Vuex 理解

**Vuex 是一个全局的共享存储区域,相当于是一个数据仓库**

Vuex 是为了保存组件之间的共享数据而诞生的,如果组件之间要有共享数据,可以直接挂载到 Vuex 中,而不必通过父子组件直接的传值了,而私有的数据则不需要挂载到 Vuex 中,**只有需要共享的数据才放在 Vuex 中,私有的数据只需要放在组件的 data 中即可**

**多组件共享状态的问题**

1. 多个视图依赖于同一状态

2. 来自不同视图的行为需要变更同一状态

3. 以前的解决办法：

a. 将数据以及操作数据的行为都定义在父组件

b. 将数据以及操作数据的行为传递给需要的各个子组件(有可能需要多级传递)

4. vuex 就是用来解决这个问题的

**状态自管理应用**

这个状态自管理应用包含以下几个部分：

1. state: 驱动应用的数据源

2. view: 以声明方式将 state 映射到视图

3. actions: 响应在 view 上的用户输入导致的状态变化(包含 n 个更新状态的方法)

以下是一个表示“单向数据流”理念的简单示意：

![img](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/front-end/vue/5.png?raw=true)

**Vuex 的结构模型**

![vuex](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/front-end/vue/6.png?raw=true)

### 15.2 核心概念

#### 15.2.1 state

1. vuex 管理的状态**对象**

2. 它应该是唯一的`const state = { xxx: initValue }`

#### 15.2.2 mutations

1. 包含多个直接更新 state 的方法(回调函数)的对象

2. 谁来触发: action 中的 commit('mutation 名称')

3. 只能包含同步的代码, 不能写异步代码

```js
 const mutations = {
 方法名 (state, {data1}) {
  xxxxx                      // 更新 state 某个属性的操作
 }
}
参数：
可选：{
  state,      // 等同于 `store.state`，若在模块中则为局部状态
  rootState,  // 等同于 `store.state`，只存在于模块中
  commit,     // 等同于 `store.commit`
  dispatch,   // 等同于 `store.dispatch`
  getters,    // 等同于 `store.getters`
  rootGetters // 等同于 `store.getters`，只存在于模块中
}
{data1}： 参数，可以为任意类型，但最后都会包装成一个对象
```

#### 15.2.3 actions

1. 包含多个事件回调函数的对象

2. 通过执行: commit()来触发 mutation 的调用, 间接更新 state

3. 谁来触发:

组件中: this.\$store.dispatch('action 名称', data)

data 为参数

4. 可以包含异步代码(定时器, ajax)

```js
const actions = {
 action 名称 ({commit, state}, data) {
  commit('对应mutations的名字', {data})
 }
 }
第一个参数：
可选：{
  state,      // 等同于 `store.state`，若在模块中则为局部状态
  rootState,  // 等同于 `store.state`，只存在于模块中
  commit,     // 等同于 `store.commit`
  dispatch,   // 等同于 `store.dispatch`
  getters,    // 等同于 `store.getters`
  rootGetters // 等同于 `store.getters`，只存在于模块中
}
第二个参数： 可以为任意类型，但最后都会包装成一个对象


```

#### 15.2.4 getters

1. 包含多个计算属性(get)的**对象**

2. 谁来读取: 组件中: \$store.getters.xxx

3. 使用

```js
const getters = {
  mmm(state) {
    return;
  },
};
```

注意：

只能写相等于 get()的方法，不能写 set()的功能

所以如果需要 set 的功能，必须到组件中写

#### 15.2.5 modules

1. 包含多个 module

2. 一个 module 是一个 store 的配置对象

3. 与一个组件(包含有共享数据)对应

```js

const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}
const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态

```

**模块的局部状态**

对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。

```js
const moduleA = {
  state: { count: 0 },
  mutations: {
    increment(state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++;
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
};
```

同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：

```js
const moduleA = {
  // ...
  actions: {
    incrementIfOddOnRootSum({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit("increment");
      }
    },
  },
};
```

对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：

```js
const moduleA = {
  // ...
  getters: {
    sumWithRootCount(state, getters, rootState) {
      return state.count + rootState.count;
    },
  },
};
```

### 15.3 项目结构

Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：

1. 应用层级的状态应该集中到单个 store 对象中。
2. 提交 **mutation** 是更改状态的唯一方法，并且这个过程是同步的。
3. 异步逻辑都应该封装到 **action** 里面。

只要你遵守以上规则，如何组织代码随你便。如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。

对于大型应用，我们会希望把 Vuex 相关代码分割到模块中。下面是项目结构示例：

```bash
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```

### 15.4 表单处理

当在严格模式中使用 Vuex 时，在属于 Vuex 的 state 上使用 `v-model` 会比较棘手：

```html
<input v-model="obj.message" />
```

假设这里的 `obj` 是在计算属性中返回的一个属于 Vuex store 的对象，在用户输入时，`v-model` 会试图直接修改 `obj.message`。在严格模式中，由于这个修改不是在 mutation 函数中执行的, 这里会抛出一个错误。

用“Vuex 的思维”去解决这个问题的方法是：给 `<input>` 中绑定 value，然后侦听 `input` 或者 `change` 事件，在事件回调中调用一个方法:

```html
<input :value="message" @input="updateMessage" /> // ... computed: {
...mapState({ message: state => state.obj.message }) }, methods: { updateMessage
(e) { this.$store.commit('updateMessage', e.target.value) } }
```

下面是 mutation 函数：

```js
// ...
mutations: {
  updateMessage (state, message) {
    state.obj.message = message
  }
}
```

**双向绑定的计算属性**

必须承认，这样做比简单地使用“`v-model` + 局部状态”要啰嗦得多，并且也损失了一些 `v-model` 中很有用的特性。另一个方法是使用带有 setter 的双向绑定计算属性：

```html
<input v-model="message" /> // ... computed: { message: { get () { return
this.$store.state.obj.message }, set (value) {
this.$store.commit('updateMessage', value) } } }
```

### 15.5 实例

#### 15.2.1 主要功能对象

```js
import Vue from "vue";
import Vuex from "vuex";
// 在一个模块化的打包系统中,必须显式地通过 Vue.use() 来安装 Vuex：
Vue.use(Vuex);
// 使用Vue.Store
export default new Vuex.Store({
  // 状态对象
  state: {
    count: 0,
  }, // 包含多个更新state函数的对象,mutations对象里的方法可以直接操作state对象
  mutations: {
    // 工程中一般这些模块都是分开文件写,所以传入state参数的写法比较好
    // 如果有其他参数则可以往后写
    INCREMENT(state) {
      state.count++;
    },
    DECREMENT(state) {
      state.count--;
    },
  }, // 包含多个对应事件回调函数的对象,actions对象里的方法用来接收组件信息,同时传递给mutations
  actions: {
    // 如果有其他参数则可以往对象后面写,称作载荷(payload)
    increment({ commit }) {
      commit("INCREMENT");
    },
    decrement({ commit }) {
      commit("DECREMENT");
    },
    incrementIfOdd({ commit, state }) {
      if (state.count % 2 !== 0) {
        commit("INCREMENT");
      }
    },
    incrementAsync({ commit }) {
      // 在action里直接可以写异步代码
      setInterval(() => {
        commit("INCREMENT");
      }, 1000);
    },
  }, // 包含多个getter计算属性的函数对象
  getters: {
    evenOrOdd: function(state) {
      if (state.count % 2 !== 0) {
        return "Odd";
      } else {
        return "Even";
      }
    },
  },
});
```

#### 15.2.2 组件绑定

```vue
<template>
  <div>
    <!-- 任何一个组件里都会有一个$store对象,里面有state,getters属性 -->
    <p>Count {{ $store.state.count }} & count is {{ evenOrOdd }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>
<script>
export default {
  computed: {
    evenOrOdd: function() {
      return this.$store.getters.evenOrOdd;
    },
  },
  methods: {
    increment() {
      // dispatch()去找到对应actions里面的方法
      // 参数为('对应的方法名',载荷)
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    },
  },
};
</script>
<style></style>
```

#### 15.2.3 辅助函数

```vue
<template>
  <div>
    <!-- 任何一个组件里都会有一个$store对象,里面有state,getters属性 -->
    <p>Count {{ count }} & count is {{ evenOrOdd }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>
<script>
// 这些分别为常用的组件绑定的辅助函数
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  computed: {
    // 等价于mapGetters()返回值为{evenOrOdd(){return this.$store.getters['evenOrOdd']}}
    ...mapGetters(["evenOrOdd"]), // 等价于mapState()返回值{count(){return this.$store['count']}}
    ...mapState(["count"]),
  },
  methods: {
    // 其中这三个方法也可以传入一个对象而非数组,例如：
    // mapActions({Increment: 'increment'})
    // 把 `this.Increment` 映射为 `this.$store.getters.increment`
    // 意思就是给getters里的属性取一个不同于increment的名字
    ...mapActions([
      "increment",
      "decrement",
      "incrementIfOdd",
      "incrementAsync",
    ]),
  },
};
</script>
<style></style>
```

### 15.6 总结

![image-20200617155816787](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/front-end/vue/7.png?raw=true)
