---
icon: storage
category: Web前端
tags:
  - Cookie
  - localStorage
  - SessionStorage
  - 浏览器的本地存储
time: 2020-6-9
---

# Data Storage

[[toc]]

## 1. Cookie

**cookie 用于存储数据,当用户访问了某个网站(网页)的时候,可以通过 cookie 来访问客户端上存储的数据**

**注意:**

- 不同的浏览器存放的 cookie 位置不一样，也是不能通用的

- cookie 的存储是以域名形式进行区分的

- cookie 的数据可以设置名字的

- 一个域名下存放的 cookie 的个数是有限制的，不同的浏览器存放的个数不一样

- 每个 cookie 存放的内容大小也是有限制的，不同的浏览器存放大小不一样

### 1.1 访问 cookie

**通过 document.cookie 属性可以获取当前网站下的所有 cookie,得到字符串形式的值,**该返回值会将所有的 cookie 通过**分号+空格**的形式串联起来

```js
console.log(document.cookie);
```

### 1.2 存储 cookie

```js
document.cookie = "数据名=值";
```

**注意:**

- 如果设置不同的 cookie 值,则用 document.cookie 再次赋值不会将原来设置的 cookie 覆盖掉,而是再加上一条 cookie

- 如果设置相同的 cookie 值,则再次用 document.coolkie 设置 cookie 值时会将原来的 cookie 值覆盖掉

### 1.3 设置 cookie 过期时间

cookie 默认是临时存储的,当浏览器关闭进程的时候自动销毁 ,如果想长时间存放一个 cookie。需要在设置这个 cookie 的时候设置一个过期的时间

**注意:**过期时间必须是一个日期对象转换成的字符串

**document.cookie = "数据名=值; expires=过期时间"**;

```js
var oDate = new Date();
oDate.setDate(oDate.getDate() + 5);
oDate.toUTCString(); //转换为日期字符串

document.cookie = "age=20; expires=" + oDate;

//转码
var content = encodeURI("20");
document.cookie = "agex=" + content + ";expires=" + oDate;
```

`

### 1.4 cookie 封装

- 设置 cookie 封装

  ```js
  function setCookie(obj, time) {
    for (key in obj) {
      var d = new Date();
      d.setDate(d.getDate() + time);
      document.cookie = key + "=" + obj[key] + "; expires=" + d.toUTCString();
    }
  }

  setCookie(
    {
      name: "zhangsan",
      sex: "man",
      age: 18,
    },
    5
  ); //5天后自动删除cookie
  ```

- 获取 cookie 封装

  ```js
  function getCookie(name) {
    //这里是用的arguments来设置的,所以可以获取多个cookie值
    var cookie = document.cookie;
    var result = {};
    for (key in arguments) {
      var value = "\\b" + arguments[key] + "=(\\w*)+";

      var reg = new RegExp(value, "i");
      value = reg.exec(cookie);

      result[arguments[key]] = value ? decodeURI(value[1]) : null; //解码
    }
    return result;
  }

  console.log(getCookie("name", "sex", "age")); //能够查找多个
  ```

- 移除 cookie

  ```js
  function removeCookie(name) {
    //这里是用的arguments来获取的,所以可以删除多个cookie值
    for (key in arguments) {
      var json = {};
      json[arguments[key]] = null;
      setCookie(json, -1);
    }
  }
  removeCookie("name");
  ```

## 2. 本地存储

### 2.1 sessionStorage

**sessionStorage 属性允许用户访问一个 session Storage 对象,存储在 sessionStorage 中的数据在页面会话结束时被清除**

**注意:**

- 页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。

- 在新标签或窗口打开一个页面时会在顶级浏览上下文中初始化一个新的会话,这点和 cookies 的运行方式不同

**方法**

- setItem("对象名","对象值"),增加一个数据项目

- getItem("对象名"),获取一个数据项目

- removeItem("对象名"),移除一个数据项目

- clear(),不传参数,移除所有的数据项目

### 2.2 localStorage

localStorage 属性允许用户访问一个了 local Storage 对象,存储在 localStorage 中的数据能在跨浏览器会话保留,也就是说该属性中存入的值会在本地存储中永久保存

**注意:**localStorage 中的键值对总是以字符串的形式存储,所有如果传入的是非字符串参数会自动转换为字符串,最好手动转化

**方法**

- setItem("对象名","对象值"),增加一个数据项目

- getItem("对象名"),获取一个数据项目

- removeItem("对象名"),移除一个数据项目

- clear(),不传参数,移除所有的数据项目
