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
title: 16.对象数组更新
---

## 对象数组更新

### 16.1 Vue.set

```js
Vue.set( target, propertyName/index, value )

参数：

{Object | Array} target
{string | number} propertyName/index
{any} value
返回值：设置的值。

用法：

向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性
 (比如 this.myObject.newProperty = 'hi')

注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。
```

### 16.2vm.\$set

```js
vm.$set( target, propertyName/index, value )
参数：

{Object | Array} target
{string | number} propertyName/index
{any} value
返回值：设置的值。

用法：

这是全局 Vue.set 的别名。
```

### 16.3 Vue.set 与 vm.\$set

**向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性**

- **数组添加**
  Vue 中的 data 中的数组可以通过 Vue 返回后的实例进行改变,所拥有的方法同原生 JS,变异方法会直接改变数组,重新渲染页面,但**如果不是变异方法也可以通过重新赋值来使用,Vue 不会直接重新渲染,**而是由其内部高效的机制
  **注意:**如果直接通过赋值改变数组中成员的值或者 length 的长度,并不能够渲染页面,这是由 JS 内部的机制决定的
  **解决方案:**

- - `Vue.set(vm.items, indexOfItem, newValue)`**(第一个参数为素组名,第二个为数组索引,第三个为成员值)**

- - `vm.items.splice(indexOfItem, 1, newValue)`

- - `vm.$set(vm.items, indexOfItem, newValue)`**(其实 vm.\$set()就是 Vue.set()方法的别名)**

- - **如果要解决改变 length 属性的问题,**使用`vm.items.splice(newLength)`

- **对象添加**
  如果要更新对象的属性,在已有属性的情况下改变原来的值是可以进行动态更新的,但是**如果是添加一个新的属性或为一个对象添加新的属性不能做到响应式的更新,**这也是由于 JS 的内部机制决定的
  **解决方案:**

- - `Vue.set(vm.userProfile, 'age', 27`)**(第一个参数为对象名,第二个为键名,第三个为键值)**

- - `vm.$set(vm.userProfile, 'age', 27)`

- - 如果要同时给多个属性使用下面这种方式

    ```
    vm.userProfile = Object.assign({}, vm.userProfile, {
        age: 27,
        favoriteColor: 'Vue Green'
    })
    //不好的方式:
    Object.assign(vm.userProfile, {
        age: 27,
        favoriteColor: 'Vue Green'
    })
    ```
