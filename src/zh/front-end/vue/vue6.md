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
title: 6.Vue基本操作
---

## Vue 基本操作

### 6.1 条件渲染实例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ifAndshow</title>
  </head>
  <body>
    <div id="app">
      <h2>Is a number?</h2>
      <input type="text" placeholder="Input" v-model="value" />
      <button @click="check">Check</button>
      <!-- 条件渲染里面可以写表达式 -->
      <p v-if="res === true">True</p>
      <p v-else>False</p>
      <!-- v-show相当于display的切换 -->
      <p v-show="ok">v-show</p>
      <button @click="change">Change</button>
    </div>
  </body>
  <script text="javascript" src="./vue.js"></script>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        value: "",
        res: false,
        ok: "true",
      },
      methods: {
        check() {
          if (isNaN(Number(this.value)) === false) {
            this.res = true;
          } else {
            this.res = false;
          }
        },
        change() {
          if (this.ok === true) {
            this.ok = false;
          } else {
            this.ok = true;
          }
        },
      },
    });
  </script>
</html>
```

### 6.2 列表渲染的实例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>for</title>
  </head>
  <body>
    <div id="app">
      <h2>搜索</h2>
      姓名搜索:
      <input type="text" placeholder="Please input name" v-model="value" />
      <ul>
        <!-- v-for的使用方法，filterPeople是一个计算属性 -->
        <li v-for="(person, index) in filterPeople" :key="index">
          {{index}}---{{person.name}}---{{person.age}}
        </li>
      </ul>
      <button @click="sort(1)">年龄升序</button>
      <button @click="sort(2)">年龄降序</button>
      <button @click="sort(0)">原本顺序</button>
    </div>
  </body>
  <script text="javascript" src="./vue.js"></script>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        value: "",
        people: [
          { name: "jack", age: 18 },
          { name: "jackson", age: 19 },
          { name: "pete", age: 20 },
          { name: "peter", age: 22 },
          { name: "john", age: 20 },
          { name: "james", age: 45 },
          { name: "frack", age: 6 },
          { name: "susan", age: 46 },
        ],
        sortWay: 0,
      },
      computed: {
        filterPeople: function() {
          var newArr = [...this.people];
          if (this.value.trim()) {
            newArr = this.people.filter((item) => {
              return item.name.indexOf(this.value) !== -1;
            });
          } // 0代表不排序
          if (this.sortWay) {
            newArr.sort(function(p1, p2) {
              if (this.sortWay === 1) {
                return p1.age - p2.age;
              } else {
                return p2.age - p1.age;
              }
            });
            console.log(this.sortWay);
          }
          return newArr;
        },
      },
      methods: {
        sort(res) {
          this.sortWay = res;
        },
      },
    });
  </script>
</html>
```

### 6.3 事件绑定的实例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>事件处理</title>
  </head>
  <body>
    <!--
        1. 绑定监听:
            v-on:xxx="fun"
            @xxx="fun"
            @xxx="fun(参数)"
            当没有参数时@xxx="fun"时，默认@xxx="fun($event)"，绑定了该事件
            当带有参数时@xxx="fun(参数)"，如果需要绑定该事件，则要自己加上@xxx="fun(参数, $event)
        
        2. 事件修饰符:
        .prevent : 阻止事件的默认行为 event.preventDefault()
        .stop : 停止事件冒泡 event.stopPropagation()
        3. 按键修饰符
        .keycode : 操作的是某个keycode值的健
        .enter : 操作的是enter键
    -->
    <div id="example">
      <h2>1. 绑定监听</h2>
      <button @click="test1">test1</button>
      <button @click="test2('abc')">test2</button>
      <button @click="test3('abcd', $event)">test3</button>
      <h2>2. 事件修饰符</h2>
      <a href="http://www.baidu.com" @click.prevent="test4">百度一下</a>
      <div style="width: 200px;height: 200px;background: red" @click="test5">
        <div
          style="width: 100px;height: 100px;background: blue"
          @click.stop="test6"
        ></div>
      </div>

      <!-- 可以用来做回车符提交密码操作 -->
      <h2>3. 按键修饰符</h2>
      <input type="text" @keyup.13="test7" />
      <input type="text" @keyup.enter="test7" />
    </div>
    <script type="text/javascript" src="./vue.js"></script>
    <script type="text/javascript">
      new Vue({
        el: "#example",
        data: {},
        methods: {
          test1(event) {
            alert(event.target.innerHTML);
          },
          test2(msg) {
            alert(msg);
          },
          test3(msg, event) {
            alert(msg + "---" + event.target.textContent);
          },
          test4() {
            alert("点击了链接");
          },
          test5() {
            alert("out");
          },
          test6() {
            alert("inner");
          },
          test7(event) {
            // 可以用来显示键盘操作对应的数值码
            console.log(event.keyCode);
            alert(event.target.value);
          },
        },
      });
    </script>
  </body>
</html>
```

### 6.4 表单的制作实例

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>表单输入绑定</title>
</head>
<body>
<!--
1. 使用v-model(双向数据绑定)自动收集数据
  text/textarea
  checkbox
  radio
  select
-->
<div id="demo">
  <form action="/xxx" @submit.prevent="handleSubmit">
    <span>用户名: </span>
    <input type="text" v-model="username"><br>
    <span>密码: </span>
    <input type="password" v-model="pwd"><br>
    <span>性别: </span>
    <input type="radio" id="female" value="女" v-model="sex">
    <label for="female">女</label>
    <input type="radio" id="male" value="男" v-model="sex">
    <label for="male">男</label><br>
    <span>爱好: </span>
    <input type="checkbox" id="basket" value="basket" v-model="likes">
    <label for="basket">篮球</label>
    <input type="checkbox" id="foot" value="foot" v-model="likes">
    <label for="foot">足球</label>
    <input type="checkbox" id="pingpang" value="pingpang" v-model="likes">
    <label for="pingpang">乒乓</label><br>
    <span>城市: </span>
    <select v-model="cityId">
      <option value="">未选择</option>
      <option :value="city.id" v-for="(city, index) in allCitys" :key="city.id">{{city.name}}</option>
    </select><br>
    <span>介绍: </span>
    <textarea rows="10" v-model="info"></textarea><br><br>
    <input type="submit" value="注册">
  </form>
</div>
<script type="text/javascript" src="./vue.js"></script>
<script type="text/javascript">
  new Vue({
    el: '#demo',
    data: {
      username: '',
      pwd: '',
      sex: '男',
      likes: ['foot'],
      allCitys: [{id: 1, name: 'BJ'}, {id: 2, name: 'SS'}, {id: 3, name: 'SZ'}],
      cityId: '2',
      info: ''
    },
    methods: {
      handleSubmit () {
        console.log(this.username, this.pwd, this.sex, this.likes, this.cityId, this.info)
        alert('提交注册的ajax请求')
      }
    }
  })
</script>
</body>
</html>

```
