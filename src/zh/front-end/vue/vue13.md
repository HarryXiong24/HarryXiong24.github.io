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
title: 13.组件之间的通信方式
---

## 组件之间的通信方式

### 13.1 props

父子组件间通信的基本方式

属性值的 2 大类型:

​ 一般: 父组件-->子组件

​ 函数: 子组件-->父组件

隔层组件间传递: 必须逐层传递(麻烦)

兄弟组件间: 必须借助父组件(麻烦)

#### 13.1.1 声明

在组件内声明所有的 props

1. 方式一: 只指定名称 `props:['name','age','setName']`

2. 方式二: 指定名称和类型

   ```js
   props:{
   	name:String,
   	age:Number,
   	setName:Function
   }
   ```

3. 方式三: 指定名称/类型/必要性/默认值

   ```js
   props:{
       name:{
           type:String,
           required:true,
           default:xxx
       },
   }
   ```

#### 13.1.2 优缺点

1. 此方式用于父组件向子组件传递数据

2. 所有标签属性都会成为组件对象的属性, 模板页面可以直接引用

3. 问题:

a. 如果需要向非子后代传递数据必须多层逐层传递

b. 兄弟组件间也不能直接 props 通信, 必须借助父组件才可以

### 13.2 自定义事件

**子组件也无法使用组件的事件,要想传递给父组件事件,需要通过内置的\$emit 方法并传入事件的名字,来向父级组件触发一个事件**

#### 13.2.1 \$emit()向子组件传递事件

**在子组件的引用中绑定事件的自定义名字,然后绑定父组件的事件,在子组件中通过抛出事件\$emit 来使用父组件的事件**

```html
<!--引用子组件-->
<blog-post v-on:enlarge-text="doSomething"></blog-post>
<!--子组件-->
<script>
  Vue.component("enlarge-text",{
      template:"<button v-on:click="$emit('enlarge-text')">Enlarge text</button>"
  })
</script>
```

#### 13.2.2 \$emit()向父组件抛出值

**子父组件的函数中写入参数,那么当子组件使用\$emit 的时候可以传入后面多个参数来将值传递给父组件的参数,从而实现子组件向父组件传值**

```html
<div id="app">
  <blog-post v-on:enlarge-text="onEnlargeText"></blog-post>
</div>
<script>
  Vue.component("blog-post",{
      template:"<button v-on:click="$emit('enlarge-text',0.1)">Enlarge text</button>"
  })
  new Vue({
      el="#app",
      data:{
          postFontSize:1
      }
      methods: {
          onEnlargeText: function (enlargeAmount) {
              this.postFontSize += enlargeAmount
      }
     }
  })
</script>
```

**注意:**虽然子组件能触发父组件的方法或值,但是这些方法中的 this 指向依然是父组件,子组件只是使用的这些方法,同时传递了一些参数

#### 13.2.3 实例

```html
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 需要自定义一个事件，事件名最好与对应方法名一致 -->
      <!-- 在子组件调用的地方使用，即可调用
          this.$emit('addItem', this.value)
          参数格式：自定义事件名，后面是要跟参数 -->
      <myHeader @addItem="addItem"></myHeader>
    </div>
  </div>
</template>
<script>
  import myHeader from "./myHeader";
  export default {
    data() {
      return {
        // 读取localStorage保存的数据
        items: JSON.parse(localStorage.getItem("todos_key") || "[]"),
      };
    },
    components: {
      myHeader,
    },
    methods: {
      addItem(newValue) {
        const newItem = { name: newValue, complete: false };
        this.items.push(newItem);
      },
    },
    watch: {
      items: {
        deep: true,
        handler: function(val) {
          // 将数据(json)保存到localStorage
          localStorage.setItem("todos_key", JSON.stringify(val));
        },
      },
    },
  };
</script>
<style></style>
```

#### 13.2.4 \$on 与\$once

- **\$on 属性用于监听在当前实例上的自定义事件,事件可以由 vm.\$emit 触发。回调函数会接收所有传入事件触发函数的额外参数**
- **\$once 属性与\$on 一致,只不过只会触发一次,触发一次后移除该事件**

```js
vm.$on("test", function(msg) {
  console.log(msg);
});
vm.$once("test", function(msg) {
  console.log(msg);
});
vm.$emit("test", "hi");
// => "hi"
```

**注意:**在组件化中通过创建一个中间的 Vue 实例可以进行中转完成父子组件的事件传值

#### 13.2.5 \$on()实例

```html
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 要给组件一个ref，在接下来进行绑定 -->
      <myHeader ref="myhead"></myHeader>
    </div>
  </div>
</template>
<script>
  import myHeader from "./myHeader";
  export default {
    data() {
      return {
        // 读取localStorage保存的数据
        items: JSON.parse(localStorage.getItem("todos_key") || "[]"),
      };
    },
    components: {
      myHeader,
    }, // 需要在mouunted()中使用$on,理由是要在程序还没有开始的时候就挂载该事件 // 确保其总能被触发
    mounted() {
      // 哪个子组件要，就给谁$on
      // 不能写成this.$on('addItem', this.addItem)
      // 参数为自定义事件名，要使用的方法
      this.$refs.head.$on("addItem", this.addItem);
    },
    methods: {
      addItem(newValue) {
        const newItem = { name: newValue, complete: false };
        this.items.push(newItem);
      },
    },
    watch: {
      items: {
        deep: true,
        handler: function(val) {
          // 将数据(json)保存到localStorage
          localStorage.setItem("todos_key", JSON.stringify(val));
        },
      },
    },
  };
</script>
<style></style>
```

#### 13.2.6 总结

1. 方式一:

   通过 `v-on`绑定`@delete_todo="deleteTodo"`

   触发事件(只能在父组件中接收) `this.$emit(eventName,data)`

2. 方式二:

   通过

   ```JS
   $on() this.$refs.xxx.$on('delete_todo',
   		function(todo){
   		this.deleteTodo(todo)
   	})
   )

   ```

1) 此方式只用于子组件向父组件发送消息(数据)，用来取代 function props(用来取代方法)

2) 问题: 隔代组件或兄弟组件间通信此种方式不合适

### 13.3 发布-订阅通信机制

#### 13.3.1 pubsub-js 的下载引入

使用消息订阅(subscribe)-发布(publish)机制: 自定义事件机制

**工具库** : PubSubJS

**下载**: npm install pubsub-js --S --D

使用:

```JS
import PubSub from 'pubsub-js' //引入
PubSub.subscribe('delete', function(msg, data){ }); //订阅
PubSub.publish('delete', data) //发布消息

```

优点: 可以支持任意关系组件之间的通信

#### 13.3.2 发布消息

发布------触发事件监听

```JS
PubSub.publish('msg',data)

msg：给本次发布-订阅取的名字

data：需要传递的参数
```

#### 13.3.3 订阅消息

订阅------绑定事件监听

```JS
PubSub.subscribe('msg',
	(msg,data) => {


})
```

msg: 对应发布时的名字

data: 发布时传递过来的参数

回调函数: 处理的方法，再此建议用箭头函数，避免使用 this 的时候指向错误

#### 13.3.4 实例

```HTML
// 父组件
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 需要给它的子组件(也就是这个组件的父组件)绑定一个remove(index)方法 -->
      <myMain :items="items"></myMain>
    </div>
   </div>
</template>
<script>
  import myMain from './myMain'
  import Pubsub from 'pubsub-js'
  export default {
    data () {
      return {
        // 读取localStorage保存的数据
        items: JSON.parse(localStorage.getItem('todos_key') || '[]')
      }
    },
    components: {
      myMain
    },
    mounted () {
      // 在此进行发布，理由是要在程序还没有开始的时候就挂载该事件，确保其总能被触发
      // 取名为delItems，msg不可省略，指代delItems，index为参数
      Pubsub.subscribe('delItems', (msg, index) => {
        // 用箭头函数使得this指向该实例
        this.remove(index)
      })
    },
    methods: {
      remove (index) {
        this.items.splice(index, 1)
      }
    }
  }
</script>
<style>
</style>

```

### 13.4 Slot 传递标签

#### 13.4.1 理解

此方式用于父组件向子组件传递标签数据

#### 13.4.2 用法

子组件 Child.vue

```HTML
<template>
	<div>
		<slotname="xxx">不确定的标签结构 1</slot>
		<div>组件确定的标签结构</div>
		<slotname="yyy">不确定的标签结构 2</slot>
	</div>
</template>
```

父组件 Parent.vue

```HTML
<child>
	<div slot="xxx">xxx 对应的标签结构</div>
	<div slot="yyy">yyyy 对应的标签结构</div>
</child>
```
