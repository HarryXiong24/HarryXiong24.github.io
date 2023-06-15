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
title: 2.Vue实例对象
---

## Vue 实例对象

### 2.1 创建并绑定 Vue 对象

**Vue 也是一个构造函数,通过 new Vue()可以创建一个 Vue 对象,通过 Vue 对象进行对 DOM 元素以及内部的子孙元素的操作**

```vue
<div id="div">
    {{msg}}<!--显示123-->
</div>
<script>
new Vue({
    el:"#div",
    /*
    在Vue中通过el属性来绑定一个DOM元素,从而让该DOM元素以及内部都绑定Vue的相关操作,一般是通过ID进行查找,因为这样才能够精确绑定
    */
    data:{//data属性中包含着在el中使用的使用的变量或属性
        msg:123
    }
    //也可以使用函数形式的
    data(){
    return{
        msg:123
    };
    //methods属性包含着需要使用的方法
    methods:{
        show(){
            console.log(this.msg);
        }
    }
}
})
</script>
```

**注:在实例内部使用定义的属性或方法时不能直接使用,必须通过 this 来指定需要用的属性**

### 2.2 vue 实例中的参数与选项

**el:"#id", //DOM 成员（1/3）**

提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。

**template:"`<tag></tag>`", //DOM 成员（2/3）**

一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发 slot

**render: (h)=>{h(App)}, //DOM 成员（3/3）**

字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。

```vue
// 原理 render: (h) => { return <APP></APP>

} // 可以代替components和template
```

**data //数据成员（1/6）**

data():{ return{ } },

Vue 实例的数据对象。Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化

**methods //数据成员（2/6）**

methods:{ func(){ } }

methods 将被混入到 Vue 实例中，可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用

方法中的 this 自动绑定为 Vue 实例

**watch //数据成员（3/6）**

watch:{ key:value \$route:function (newValue, oldValue) { //监控路由 } }

整个为一个对象，键是需要观察的表达式，值是对应回调函数

**computed //数据成员（4/6）**

computed:{ getTotalCount(){ const totalCount=0; return totalCount; } },

vue 的计算属性，将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例

**props //数据成员（5/6）**

props:['counts','ids'],

用于父子组件的 eventbus 传值，是数组或对象，props 的成员是子组件接收的来自父组件的数据

**propsData //数据成员（6/6）**

创建实例时传递 props。主要作用是方便测试。基本不使用。

**filters //资源（1/3）**

filters('filterName',(input,function(){ return newvalue }))

包含 Vue 实例可用过滤器的哈希表。

**directives //资源（2/3）**

包含 Vue 实例可用指令的哈希表。

**components //资源（3/3）**

（即该组件的子实例）这里是包含 Vue 实例可用组件的哈希表。

**name //杂项（1/6）**

允许组件模板递归地调用自身。注意，组件在全局用 Vue.component() 注册时，全局 ID 自动作为组件的 name。

**parent //杂项（2/6）**

指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。

**mixins //杂项（3/6）**

mixins 选项接受一个混合对象的数组。Mixin 钩子按照传入顺序依次调用,并在调用组件自身的钩子之前被调用。

**extends //杂项（4/6）**

允许声明扩展另一个组件。这主要是为了便于扩展单文件组件。这和 mixins 类似，区别在于，组件自身的选项会比要扩展的源组件具有更高的优先级。

**delimiters //杂项（5/6）**

改变纯文本插入分隔符。

**functional //杂项（6/6）**

使组件无状态（没有 data ）和无实例（没有 this 上下文）。他们用一个简单的 render 函数返回虚拟节点使他们更容易渲染。

### 2.3 常用指令实例

```vue
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>startVue</title>
  </head>
  <body>
    <div id="app">
      <!-- {{}}双大括号表达式，里面是js代码 -->
      <p>{{ msg }}</p>
      <!-- 相当于innerText -->
      <p v-text="str"></p>
      <!-- 相当于innerHTML -->
      <p v-html="str"></p>
      <!-- 强制绑定事件, 一般用于用于响应式地更新HTML attribute, 简写方式:
            从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数
            <a v-bind:[attributeName]="url"> ... </a>
            这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值,求得的值将会作为最终的参数来使用。
            例如，如果你的 Vue 实例有一个 data 属性 attributeName，其值为 "href"
            那么这个绑定将等价于 v-bind:href
        -->
      <a v-bind:href="url">Baidu</a>
      <!-- 绑定事件监听,监听 DOM 事件, 简写方式@ -->
      <button v-on:click="test">Submit</button>
      <!-- 双向绑定事件,动态实时更新里面的内容 -->
      <div>
        <input type="text" v-model="input" placeholder="Please input" />
        <p>{{ input }}</p>
      </div>
    </div>
  </body>
  <script text="javascript" src="./vue.js"></script>
  <script text="javascript">
    const app = new Vue({
      //要挂载的位置
      //在Vue中通过el属性来绑定一个DOM元素,从而让该DOM元素以及内部都绑定Vue的相关操作
      //一般是通过ID进行查找,因为这样才能够精确绑定
      el: "#app", // data属性中包含着在el中使用的使用的变量或属性
      data: {
        msg: "xhw",
        str: '<a href="#">XHW</a>',
        url: "https://www.baidu.com",
        input: "",
      }
      /**
       * 也可以写成(以组件形式里必须写成这个)
       * data() {
       *     return {
       *
       * }
       * },
       */, // methods属性包含着需要使用的方法
      methods: {
        test() {
          alert("!!!");
        },
      },
    });
  </script>
</html>
```

### 2.4 vm.\$mount

如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.\$mount() 手动地挂载一个未挂载的实例

**注意:**这个方法返回实例自身,因而可以链式调用其它实例方法

```vue
var MyComponent = Vue.extend({ template: '
<div>Hello!</div>
' }) // 创建并挂载到 #app (会替换 #app) new MyComponent().$mount('#app') // 同上
new MyComponent({ el: '#app' }) // 或者，在文档之外渲染并且随后挂载 var
component = new MyComponent().$mount()
document.getElementById('app').appendChild(component.$el)
```
