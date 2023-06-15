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
title: 10.过滤器
---

## 过滤器

**Vue 可以通过自定义过滤器,将需要的文本格式化输出**

**注意:**

- 过滤器只能写在插值表达式或者 v-bind 表达式中,并且过滤器需要添加到要添加的 JS 表达式的后方并用管道符|分割

  ```html
  <!-- 在双花括号中 -->
  {{ message | capitalize }}

  <!-- 在 `v-bind` 中 -->
  <div v-bind:id="rawId | formatId"></div>

  <!-- 管道符后方的都是声明的过滤器函数 -->
  ```

- 每个过滤器函数会将接收到的表达式作为函数内部的第一个参数,如果在使用时传入参数,那么传入的参数会依次成为第二个第三个等参数

  ```vue
  {{ message | filterA("arg1", arg2) }}
  ```

- 多个过滤器可以进行串联操作,将传入的表达式依次进行过滤

  ```vue
  {{ message | filterA | filterB }}
  ```

### 10.1 全局过滤器

**全局的过滤器可以在任意的 Vue 实例中使用**

```js
Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  // ...
});
```

### 10.2 私有过滤器

**私有的过滤器只能在自身的本地实例中使用**

```js
new Vue({
    data:{},
    methods{},
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})
```
