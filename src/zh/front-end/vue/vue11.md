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
title: 11.自定义指令
---

## 自定义指令

**自定义指令可以通过全局或局部的方式创建,在使用时需要在前面加上 v-的标识符表示时一个指令**

### 11.1 全局指令

**通过全局的 Vue 的 Vue.directive()可以创建一个能用在整个 Vue 实例内的指令**

```js
// 注册一个全局自定义指令 v-focus
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时聚焦
  inserted: function(el) {
    // 聚焦元素
    el.focus();
  },
});
```

### 11.2 局部指令

**通过局部创建的 directives 属性可以创建多个内部的指令,该指令只能用在自身的 Vue 实例中**

```js
new Vue({
    data:{},
    methods{},
        directives: {
        focus: {
            // 指令的定义
            inserted: function (el) {
             el.focus()
            }
        }
    }
}
```

### 11.3 钩子函数

**在定义的一个指令对象中可以绑定多个可选的钩子函数,这些钩子函数会在特定的时刻自动调用**

#### 11.3.1 函数

- **bind**: 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置

- **inserted**: 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)

- **update**: 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新

- **componentUpdate**: 指令所在组件的 VNode 及其子 VNode 全部更新后调用

- **unbind**: 只调用一次，指令与元素解绑时调用

**函数简写**

当只想要对 bind 与 update 设置相同行为而不设置其他的钩子函数时,可以直接写成一个函数,不用写一个包含了钩子函数的对象

```js
//全局
Vue.directive('focus', function(el){
    el.focus();
})
//局部
new Vue({
    data:{},
    methods{},
        directives: {
        function (el) {
             el.focus()
        }
    }
}
```

#### 11.3.2 钩子函数的参数

- **el**：指令所绑定的元素,可以用来直接操作 DOM

- **binding**：一个对象，还包含以下属性

- - `name`：指令名，不包括 `v-` 前缀

- - ```
    value
    ```

    ：指令的绑定值，会将参数的表达式进行解析,如果内部绑定的参数为 1+1,那么绑定后的值就为 2

    注意:

    如果想要传递多个值,可以传入一个对象,通过对象进行获取多个值

    ```html
    <div v-demo="{ color: 'white', text: 'hello!' }"></div>
    <script>
      Vue.directive("demo", function(el, binding) {
        console.log(binding.value.color); // => "white"
        console.log(binding.value.text); // => "hello!"
      });
    </script>
    ```

- - `oldValue`：指令绑定的前一个值，仅在 **update** 和 **componentUpdated** 钩子函数中中可以使用,无论值是否改变都可用

- - `expression`：字符串形式的指令表达式,不会对表达式进行解析,如果参数为 1+1 那么值还为 "1 + 1"

- - `arg`：传给指令的参数,可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。

- - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`

- **vnode**：Vue 编译生成的虚拟节点

- **oldVnode**：上一个虚拟节点，仅在 **update** 和 **componentUpdated** 钩子函数中可以使用

```html
<div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
```

```js
Vue.directive("demo", {
  bind: function(el, binding, vnode) {
    var s = JSON.stringify;
    el.innerHTML =
      "name: " +
      s(binding.name) +
      "<br>" +
      "value: " +
      s(binding.value) +
      "<br>" +
      "expression: " +
      s(binding.expression) +
      "<br>" +
      "argument: " +
      s(binding.arg) +
      "<br>" +
      "modifiers: " +
      s(binding.modifiers) +
      "<br>" +
      "vnode keys: " +
      Object.keys(vnode).join(", ");
  },
});

new Vue({
  el: "#hook-arguments-example",
  data: {
    message: "hello!",
  },
});
/*
name: "demo"
value: "hello!"
expression: "message"
argument: "foo"
modifiers: {"a":true,"b":true}
vnode keys: tag, data, children, text, elm, ns, context, fnContext, fnOptions, fnScopeId, key, componentOptions, componentInstance, parent, raw, isStatic, isRootInsert, isComment, isCloned, isOnce, asyncFactory, asyncMeta, isAsyncPlaceholder
*/
```

### 11.4 实例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>自定义指令</title>
  </head>
  <body>
    <!--
    1. 注册全局指令
    Vue.directive('my-directive', function(el, binding){
        el.innerHTML = binding.value.toUpperCase()
    })
    2. 注册局部指令
    directives : {
        'my-directive' : {
            bind (el, binding) {
            el.innerHTML = binding.value.toUpperCase()
            }
        }
    }
    3. 使用指令
    v-my-directive='xxx'
-->
    <!--
    需求: 自定义2个指令
    1. 功能类型于v-text, 但转换为全大写
    2. 功能类型于v-text, 但转换为全小写
-->
    <div id="test">
      <p v-upper-text="msg"></p>
      <p v-lower-text="msg"></p>
    </div>
    <div id="test2">
      <p v-upper-text="msg"></p>
      <p v-lower-text="msg"></p>
    </div>
    <script type="text/javascript" src="./vue.js"></script>
    <script type="text/javascript">
      // 注册一个全局指令
      // el: 指令所在的标签对象
      // binding: 包含指令相关数据的容器对象
      Vue.directive("upper-text", function(el, binding) {
        console.log(el, binding);
        el.textContent = binding.value.toUpperCase();
      });
      new Vue({
        el: "#test",
        data: {
          msg: "I Like You",
        }, // 注册局部指令
        directives: {
          "lower-text": function(el, binding) {
            console.log(el, binding);
            el.textContent = binding.value.toLowerCase();
          },
        },
      });
      new Vue({
        el: "#test2",
        data: {
          msg: "I Like You Too",
        },
      });
    </script>
  </body>
</html>
```
