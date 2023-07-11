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
title: 8.Vue的生命周期
---

## Vue 的生命周期

### 8.1 生命周期

![2](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/front-end/vue/2.png?raw=true)

### 8.2 Vue 实例创建阶段

- var vm=new Vue(),创建出一个 Vue 实例对象

- **beforeCreat**，当 Vue 实例被完全创建出来之前,就会执行该函数，这是表示刚初始化了一个空的 Vue 对象,这时候这个对象身上只有一些  
   **注意:**在 beforeCreat 生命周期函数执行的时候,data 和 methods 等中的数据还没有初始化,所以在这里面调用这些 data 或 methods 等中的属性和方法会报错

- **created**,在该函数中,data 和 methods 等数据已经被初始化好了,如果要调用 methods 中的方法或者 data 中的数据,最早只能在 created 中进行操作  
   **注:**如果要发 Ajax 请求尽量在这个阶段发送

- 在这两个生命周期函数之间进行 Vue 的编译模板,把 Vue 代码中的那些指令进行执行,最终在内存中生成一个编译好的最终模板字符串,然后把这个字符串渲染为内存中的 DOM,但是此时只是在内存中渲染 DOM,还没有将其挂载到页面中去

- **beforeMount**,在该函数中模板已经在内存中了,但是还没有把模板渲染到页面中,也就是说{{}}中的内容还没有被解析,页面中的元素还没有真正被替换,只是写了一些模板字符串

- 将内存中的 DOM 挂载到页面中去

- **mounted,**表示内存中的 DOM 已经挂载到页面中了,用户已经可以看到渲染好的页面了

  **注意:**

  mounted 是实例创建期间执行的最后一个生命周期函数,当执行完 mounted 就表示实例已经完全被创建好了

  如果要通过某些插件操作页面上的 DOM 节点,最早要在 mounted 中进行

### 8.3 Vue 实例运行阶段

**下面两个生命周期必须要数据发生改变时才会进行,会根据 data 数据的改变触发 0 次或多次**

- **beforeUpdate,**这个函数表明 Vue 实例在运行时数据已经被更新,而页面还没有被更新的时间节点,当执行该函数时,页面中显示的数据还是没有更新前的数据,而 data 中的数据是最新的,页面还没有和数据实现同步
- 在这两个函数之间,会根据 data 中的最新数据,重新渲染出一份最新的内存 DOM 树,当最新的内存 DOM 树被更新之后,会把最新的内存 DOM 树重新渲染到真实的页面中去,完成数据从 data 到页面视图的更新
- **updated,**当这个函数执行时证明 data 中的数据已经和页面中的数据保存同步更新了

### 8.4 Vue 实例销毁阶段

- **beforeDestroy,** 当执行该函数时,Vue 实例就已经从运行阶段进入到了销毁阶段,实例上的所以属性如 data,methods 等都还是处于可用状态,还没有真正的执行销毁
- **destroyed,**当执行到该函数时,Vue 实例已经被完全销毁,此时所有实例中的属性都不可用了

### 8.5 生命周期演示实例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>09_Vue实例_生命周期</title>
  </head>
  <body>
    <!--
    1. vue对象的生命周期
    1). 初始化显示
        * beforeCreate()
        * created()
        * beforeMount()
        * mounted()
    2). 更新状态
        * beforeUpdate()
        * updated()
    3). 销毁vue实例: vm.$destory()
        * beforeDestory()
        * destoryed()
    2. 常用的生命周期方法
    created()/mounted(): 发送ajax请求, 启动定时器等异步任务
    beforeDestory(): 做收尾工作, 如: 清除定时器
-->
    <div id="test">
      <button @click="destroyVue">destory vue</button>
      <p v-if="isShow">尚硅谷IT教育</p>
    </div>
    <script type="text/javascript" src="./vue.js"></script>
    <script type="text/javascript">
      new Vue({
        el: "#test",
        data: {
          isShow: true,
        },
        beforeCreate() {
          console.log("beforeCreate()");
        },
        created() {
          console.log("created()");
        },
        beforeMount() {
          console.log("beforeMount()");
        },
        mounted() {
          console.log("mounted()"); // 执行异步任务
          this.intervalId = setInterval(() => {
            console.log("-----");
            this.isShow = !this.isShow;
          }, 1000);
        },

        beforeUpdate() {
          console.log("beforeUpdate()");
        },
        updated() {
          console.log("updated()");
        },

        beforeDestroy() {
          console.log("beforeDestroy()"); // 执行收尾的工作
          clearInterval(this.intervalId);
        },
        destroyed() {
          console.log("destroyed()");
        },
        methods: {
          destroyVue() {
            this.$destroy();
          },
        },
      });
    </script>
  </body>
</html>
```

### 8.6 总结

![3](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/front-end/vue/3.png?raw=true)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>vue生命周期学习</title>
    <script src="https://cdn.bootcss.com/vue/2.4.2/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>{{message}}</h1>
    </div>
  </body>
  <script>
    var vm = new Vue({
      el: "#app",
      data: {
        message: "Vue的生命周期",
      },
      beforeCreate: function() {
        console.group("------beforeCreate创建前状态------");
        console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
        console.log("%c%s", "color:red", "message: " + this.message);
      },
      created: function() {
        console.group("------created创建完毕状态------");
        console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
        console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
      },
      beforeMount: function() {
        console.group("------beforeMount挂载前状态------");
        console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
      },
      mounted: function() {
        console.group("------mounted 挂载结束状态------");
        console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
        console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
      },
      beforeUpdate: function() {
        console.group("beforeUpdate 更新前状态===============》");
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data);
        console.log("%c%s", "color:red", "message: " + this.message);
      },
      updated: function() {
        console.group("updated 更新完成状态===============》");
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data);
        console.log("%c%s", "color:red", "message: " + this.message);
      },
      beforeDestroy: function() {
        console.group("beforeDestroy 销毁前状态===============》");
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data);
        console.log("%c%s", "color:red", "message: " + this.message);
      },
      destroyed: function() {
        console.group("destroyed 销毁完成状态===============》");
        console.log("%c%s", "color:red", "el     : " + this.$el);
        console.log(this.$el);
        console.log("%c%s", "color:red", "data   : " + this.$data);
        console.log("%c%s", "color:red", "message: " + this.message);
      },
    });
  </script>
</html>
```

![4](https://github.com/HarryXiong24/HarryXiong24.github.io/blob/main/public/zh/front-end/vue/4.png?raw=true)
