---
category: Web 前端
tag: Ajax
date: 2020-06-01
---

# Ajax

**Ajax 全称 Asynchronous JavaScript and XML(异步的 JavaScript 和 XML),既是一个对象,也是一种方法模式**

AJAX 是一种用于创建快速动态网页的技术,通过在后台与服务器进行少量数据交换,Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新,传统的不使用 Ajax 的网页如果需要更新内容,必需重载整个网页面。

[[toc]]

## 1. 原生 Ajax

### 1.1 用法

#### 1.1.1 创建 Ajax 对象

- **通过 XMLHttpRequest()类创建一个 Ajax 对象(此方法不兼容 IE6 以下浏览器)**  
   var Ajax=new XMLHttpRequest();
- **在 IE6 以下浏览器通过 ActiveXObject("Microsoft.XMLHTTP")创建一个 Ajax 对象**  
   var Ajax=new ActiveXObject("Microsoft.XMLHTTP")

#### 1.1.2 连接服务器

**通过 open()方法,可以设置跟后台交互的一些行为,该方法有三个参数**

参数

• 请求方式,一个包含具体请求方式的字符串

**主要请求方式：**

​ **• POST,建议在添加数据时使用**

​ **• GET,建议在查询数据时使用**

​ **• PUT,建议在修改数据时使用**

​ **• DELETE,建议在删除数据时使用**

**• url,要请求数据的具体地址**

**• bool,进行同步或异步传输,true 为异步,false 为同步**

```js
//请求方式可以用大写也可以用小写
Ajax.open("GET", "a.txt", true);
```

注意:在 IE 浏览器中,如果通过 Ajax 发生 GET 请求,那么 IE 浏览器认为同一个 url 只有一个结果，修改文件内容浏览器中显示的值也不会发生改变

```js
//一般按照如下格式写
Ajax.open("GET", "a.txt?t=" + newDate().getTime(), true);
```

**设置需求**

```js
// 如果想用GET的时候直接添加需求,可以在url后面加上?再写具体的需求,多个需求通过&符号连接

Ajax.open("GET","https://www.baidu.com?user=zhangsan&pwd=123456",true);


// 如果是POST请求,需要设置请求头信息,如:
// 表单格式请求头信息的写法

Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); //url格式

// 或

Ajax.setRequestHeader("Content-Type","application/json");//json格式

//在下一步的send()方法中传入需求
Ajax.send(“user=zhangsan&pwd=123456");
```

**Tip：GET 还是 POST？**

与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。

然而，在以下情况中，请使用 POST 请求：

​ • 无法使用缓存文件（更新服务器上的文件或数据库）

​ • 向服务器发送大量数据（POST 没有数据量限制）

​ • 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

#### 1.1.3 发送请求

**通过 send()方法正式发送请求**

```js
Ajax.send();
```

**注:** 如果请求方式是 POST 方式,添加的需求作为参数写入 send()方法中

#### 1.1.4 返回请求结果

- **通过 readyState(Ajax 自身的状态码)属性来返回请求进行到了某一步,该属性存有请求的状态**
  **请求状态**
- 0: 请求未初始化
- 1: 服务器连接已建立
- 2: 请求已接收
- 3: 请求处理中
- 4: 请求已完成，且响应已就绪
- **通过 onreadystatechange 事件(在状态码发生改变时就会执行此事件)或 onload 事件来对状态码发生改变时进行操作**
- **通过 status(http 的状态码)属性的值判断请求后的结果从而得到请求信息,一般该值为 200 到 300 直接和等于 304 时代表请求成功,值为 404 代表请求失败**
- **response 属性保留着后台返回到前端的数据**

```js
Ajax.onreadystatechange = function() {
  if (Ajax.readyState === 4) {
    //确定http的状态码
    if ((Ajax.status >= 200 && Ajax.status < 300) || Ajax.status === 304) {
      console.log(Ajax.response);
    }
  }
};
```

**解释为什么 Ajax.readyState === 4**

1. 服务器通知客户端当前的通信状态，并不是直接通知的，而是服务器通过修改 readyState 属性值。
2. 一旦 readyState 属性值发生改变，浏览器里的 Ajax 引擎就会触发 onreadyStatechang 事件，我们就可以通过该事件完成一些动作。
3. 有的说 onreadyStatechang 事件是由服务器触发的，其实应该是浏览器里的 Ajax 引擎触发的

#### 1.1.5 返回结果演示

```bash
XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
// 展开后

onabort: null
onerror: null
onload: null
onloadend: null
onloadstart: null
onprogress: null
onreadystatechange: ƒ ()
ontimeout: null
readyState: 4
response: "{↵  "title": "koa2 json"↵}"
responseText: "{↵  "title": "koa2 json"↵}"
responseType: ""
responseURL: "http://localhost:3000/json"
responseXML: null
status: 200
statusText: "OK"
timeout: 0
upload: XMLHttpRequestUpload {onloadstart: null, onprogress: null, onabort: null, onerror: null, onload: null, …}
withCredentials: false
__proto__: XMLHttpRequest
```

### 1.2 超时请求

如果请求事件太长就是请求超时,如果事件过长则可能内部出现了错了,可以设置超过一定时间结束请求

```js
//可以通过定时器进行结束请求
setTimeout(function() {
  Ajax.abort();
}, 3000);
//低版本IE可以使用
Ajax.timeout = 3000;
```

### 1.3 跨域请求

如果通过 Ajax 跨域传输一个请求,浏览器会自动将该请求阻止并返回报错信息。如果要进行跨域就要进行特殊方法进行实现

**实现跨域**

- JOSNP 方式,通过 script 标签中的 src 属性传输请求
- CORS 方式,在后台中设置可以让对应的域进行访问
- 通过信任服务器代理请求进入(翻墙)

### 1.4 XmlHttpRequest 对象的主要方法与属性

**XmlHttpRequest 对象的主要方法**

1. void open(String method,String url,Boolen async)
   用于创建请求
   参数：
   method： 请求方式（字符串类型），如：POST、GET、DELETE...
   url： 要请求的地址（字符串类型）
   async： 是否异步（布尔类型）
2. void send(String body)
   用于发送请求
   参数：
   body： 要发送的数据（字符串类型）
3. void setRequestHeader(String header,String value)
   用于设置请求头
   参数：
   header： 请求头的 key（字符串类型）
   vlaue： 请求头的 value（字符串类型）
4. String getAllResponseHeaders()
   获取所有响应头
   返回值：
   响应头数据（字符串类型）
5. String getResponseHeader(String header)
   获取响应头中指定 header 的值
   参数：
   header： 响应头的 key（字符串类型）
   返回值：
   响应头中指定的 header 对应的值
6. void abort()
   终止请求

**XmlHttpRequest 对象的主要属性**

1. Number readyState
   状态值（整数）
   详细：
   0-未初始化，尚未调用 open()方法；
   1-启动，调用了 open()方法，未调用 send()方法；
   2-发送，已经调用了 send()方法，未接收到响应；
   3-接收，已经接收到部分响应数据；
   4-完成，已经接收到全部响应数据；
2. Function onreadystatechange
   当 readyState 的值改变时自动触发执行其对应的函数（回调函数）
3. String responseText
   服务器返回的数据（字符串类型）
4. XmlDocument responseXML
   服务器返回的数据（Xml 对象）
5. Number states
   状态码（整数），如：200、404...
6. String statesText
   状态文本（字符串），如：OK、NotFound...

### 1.5 封装 Ajax

```js
function request() {
  ajax({
    type: "POST", //请求类型
    url: "data.json", //请求路径
    asyn: true, //是否异步
    data: {
      //数据
      username: "千寻",
      password: "888",
    },
    dataType: "text", //请求数据类型
    success: function(response) {
      //请求成功处理函数
      console.log(response);
      var response = JSON.parse(response);
      console.log(response[2].name);
    },
    error: function(status) {
      //请求失败处理函数
      console.log(status);
    },
  });
}

//Ajax 封装
function ajax(obj) {
  var type = obj.type || "GET", //请求类型
    url = obj.url, //url处理
    asny = obj.asny !== true, //异步处理
    data = "", //预设写入数据
    dataType = obj.dataType || "json", //请求类型
    success = obj.success, //回调函数
    error = obj.error; //错误处理函数
  for (key in obj.data) {
    //数据处理
    data += key + "=" + obj.data[key] + "&";
  }
  data = encodeURI(data);
  //console.log(data);
  var xhr = new XMLHttpRequest();
  //console.log(xhr);
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (e) {
      xhr = new ActiveXObject("Msxml2.XMLHTTP.3.0");
    }
  }
  //如果是GET请求方式,设置数据
  if (type.toUpperCase() == "GET") {
    var date = new Date().getTime(); //添加一个时间用来处理，GET方式缓存的问题
    //console.log(date);
    url = url + "?" + data + date;
    data = null;
  } else if (dataType.toUpperCase() == "XML") {
    data = null;
  }
  xhr.open(type, url, asny); //请求架设
  xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded");
  //设置请求头信息
  //console.log(data);
  xhr.send(data); //发送数据
  xhr.onreadystatechange = function() {
    //监听请求
    //readyState 为XMLHttpRequest对象的状态
    //status 为服务器返回的http状态码

    if (xhr.readyState == 4 && xhr.status == 200) {
      var response;
      if (dataType === "json" || dataType === "text") {
        if (dataType === "json") {
          //解析json数据
          response = JSON.parse(xhr.responseText);
        } else {
          //普通数据
          response = xhr.responseText;
        }
      } else {
        response = xhr.responseXML;
      }
      success && success(response);
    } else {
      error && error(xhr.status);
    }
  };
}
```

### 1.6 总结

使用步骤

1. 创建 XmlHttpRequest 对象
2. 调用 open 方法设置基本请求信息
3. 设置发送的数据，发送请求
4. 注册监听的回调函数
5. 拿到返回值，对页面进行更新

## 2. Fetch

fetch 是一种 HTTP 数据请求的方式，是 XMLHttpRequest 的一种替代方案。fetch 不是 ajax 的进一步封装，而是原生 js。Fetch 函数就是原生 js，没有使用 XMLHttpRequest 对象。

### 2.1 用法

#### 2.1.1 Fetch 的参数

- **url,该参数定义要获取的资源,可以是一个 url 字符串,也可以是一个 Request 对象**

- **options,该参数可选,为一个对象,内部含有一些对请求的设置属性**
  **内部属性：**

- - **method:**请求使用的方法。如:GET、POST 等
  - **headers:**请求头信息。形式为 Headers 对象或 ByteString
  - **body:**请求的 body 信息,可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息
  - **mode:**请求的模式。如 cors、no-cors 或者 same-origin
  - **credentiala:**请求的 credentials。如 omit、same-origin 或者 include
  - **cache:**请求的 cache 模式:default,no-store,reload,no-cache 或者 only-if-cached

#### 2.1.2 response 对象

**response 为一个 Promise 对象成功时传回的对象,该属性含有对应返回数据的属性和方法**

- **属性**
- **status (number),HTTP 请求结果参数,在 100-599 范围**
- **statusText (string),服务器返回的状态报告**
- **ok (boolean),如果返回 200 表示请求成功则为 true**
- **headers (Headers),返回头部信息,该属性后面也有对应的方法**
- has(name) (boolean),判断是否存在该信息头
- get(name) (string),获取信息头的数据
- getAll(name) (Array),获取所有头部数据
- set(name,value),设置请求头信息
- append(name,value),添加 header 的内容
- delete(name),删除 header 的信息
- forEach(function(value,name){...},[thisContext]),循环读取 header 的信息
- **url (string),详细的地址**

* **方法**
* **text(),以 string 的形式生成请求 text**
* **json(),生成 JSON.parse(responseText)的结果**
* **blob(),生成一个 Blob**
* **arrayBuffer(),生成一个 ArrayBuffer**
* **formData(),生成格式化数据,可用于其它的请求**
* **其他方法**
* **clone(),创建一个 Response 对象的克隆**
* **Response.error(),返回一个绑定了网络错误的新的 Response 对象**
* **Response.redirect(),用另一个 URL 创建一个新的 Resonse 对象**

#### 2.1.3 使用

**引入 npm install whatwg-fetch --save**

- **get**

```js
fetch("a.html")
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.body.innerHTML = body;
  });
```

- **post**

```js
fetch("a.html",{
    method:"POST",
    headers:{
    "Accept":"application/json",
    "Content-Type":"application/json";
    },
    body:JSON.stringify({
        user:"zhangsan",
        pwd:123456;
    })
})
```

### 2.2 与原生 Ajax 的比较

- 原生 Ajax

```js
var Ajax = new XMLHttpRequest();
Ajax.open("GET", url);
Ajax.responseType = "json";
Ajax.send();
Ajax.onreadystatechange = function() {
  console.log(Ajax.response);
};
Ajax.onerror = function() {
  console.log("error");
};
```

- Fetch

```js
fetch(url).then( function (response){
		return response.json();//相当于JSON.parse(response);
   	}).then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log("error",err);
	});

//使用箭头函数
fetch(url).then(
    	response=>response.json();
    ).then(
		data=>console.log(data);
	).catch(
		err=>console.log("error",err);
);

//使用async函数
let Fetch = async function() {
	try {
		let response = await fetch(url);
		let data = await response.json();
		console.log(data);
	} catch(err) {
		console.log("error",err);
	}
}

```

### 2.3 封装 fetch

```js
export default async (url = "", data = {}, type = "GET", method = "fetch") => {
  type = type.toUpperCase();
  url = baseUrl + url;

  if (type == "GET") {
    let dataStr = ""; //数据拼接字符串
    Object.keys(data).forEach((key) => {
      dataStr += key + "=" + data[key] + "&";
    });

    if (dataStr !== "") {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
      url = url + "?" + dataStr;
    }
  }

  if (window.fetch && method == "fetch") {
    let requestConfig = {
      credentials: "include", //为了在当前域名内自动发送 cookie ， 必须提供这个选项
      method: type,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors", //请求的模式
      cache: "force-cache",
    };

    if (type == "POST") {
      Object.defineProperty(requestConfig, "body", {
        value: JSON.stringify(data),
      });
    }

    try {
      const response = await fetch(url, requestConfig);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error(error);
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        requestObj = new ActiveXObject();
      }

      let sendData = "";
      if (type == "POST") {
        sendData = JSON.stringify(data);
      }

      requestObj.open(type, url, true);
      requestObj.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      requestObj.send(sendData);

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
          if (requestObj.status == 200) {
            let obj = requestObj.response;
            if (typeof obj !== "object") {
              obj = JSON.parse(obj);
            }
            resolve(obj);
          } else {
            reject(requestObj);
          }
        }
      };
    });
  }
};
```

## 3. Axios

### 3.1 安装

使用 npm:

```bash
$ npm install axios
```

使用 bower:

```bash
$ bower install axios
```

使用 cdn:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

###3.2 用法

执行 GET 请求

```js
// 为给定 ID 的 user 创建请求
axios
  .get("/user?ID=12345")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

// 可选地，上面的请求可以这样做
axios
  .get("/user", {
    params: {
      ID: 12345,
    },
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
```

执行 POST 请求

```js
axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
```

执行多个并发请求

```js
function getUserAccount() {
  return axios.get("/user/12345");
}

function getUserPermissions() {
  return axios.get("/user/12345/permissions");
}

axios.all([getUserAccount(), getUserPermissions()]).then(
  axios.spread(function(acct, perms) {
    // 两个请求现在都执行完成
  })
);
```

### 3.3 Axios API

可以通过向 axios 传递相关配置来创建请求

```js
axios(config)

// 发送 POST 请求
 axios({
  method: 'post',
  url: '/user/12345',
  data: {
   firstName: 'Fred',
   lastName: 'Flintstone'
  }
 });

axios(url[, config])

// 发送 GET 请求（默认的方法）
 axios('/user/12345');
```

请求方法的别名

为方便起见，为所有支持的请求方法提供了别名

axios.request(config)

axios.get(url[, config])

axios.delete(url[, config])

axios.head(url[, config])

axios.post(url[, data[, config]])

axios.put(url[, data[, config]])

axios.patch(url[, data[, config]])

在使用别名方法时， url、method、data 这些属性都不必在配置中指定。

#### 处理并发

处理并发请求的助手函数

```js
axios.all(iterable);
axios.spread(callback);
```

#### 创建实例

可以使用自定义配置新建一个 axios 实例

```js
axios.create([config]);

var instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
```

实例方法

以下是可用的实例方法。指定的配置将与实例的配置合并

axios#request(config)

axios#get(url[, config])

axios#delete(url[, config])

axios#head(url[, config])

axios#post(url[, data[, config]])

axios#put(url[, data[, config]])

axios#patch(url[, data[, config]])

#### 请求配置

这些是创建请求时可以用的配置选项。只有 url 是必需的。如果没有指定 method，请求将默认使用 get 方法。

```js
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

// `method` 是创建请求时使用的方法
  method: 'get', // 默认是 get

// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

// `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
   // 对 data 进行任意转换处理

return data;
  }],

// `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
   // 对 data 进行任意转换处理

return data;
  }],

// `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

// `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
   ID: 12345
  },

// `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
   return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

// `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
   firstName: 'Fred'
  },

// `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

// `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的

// `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
   /* ... */
  },

// `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
   username: 'janedoe',
   password: 's00pers3cret'
  },

// `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // 默认的

// `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

// `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的

// `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
   // 对原生进度事件的处理
  },

// `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
   // 对原生进度事件的处理
  },

// `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

// `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
   return status >= 200 && status < 300; // 默认的
  },

// `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // 默认的

// `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

// 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
   host: '127.0.0.1',
   port: 9000,
   auth: : {
    username: 'mikeymike',
    password: 'rapunz3l'
   }
  },

// `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
```

### 3.4 响应结果

响应结构

某个请求的响应包含以下信息

```js
{
  // `data` 由服务器提供的响应
  data: {},

// `status` 来自服务器响应的 HTTP 状态码
  status: 200,

// `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

// `headers` 服务器响应的头
  headers: {},

// `config` 是为请求提供的配置信息
  config: {}
 }
```

使用 then 时，你将接收下面这样的响应：

```js
axios.get("/user/12345").then(function(response) {
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
});
```

在使用 catch 时，或传递 rejection callback 作为 then 的第二个参数时，响应可以通过 error 对象可被使用。

### 3.5 封装 Axios

```js
/*
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from "axios";
// 请求方式默认GET
export default function ajax(url, data = {}, type = "GET") {
  return new Promise(function(resolve, reject) {
    // 执行异步ajax请求
    let promise;
    if (type === "GET") {
      // 准备url query参数数据
      let dataStr = ""; // 数据拼接字符串
      Object.keys(data).forEach((key) => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      // 发送get请求
      promise = axios.get(url);
    } else {
      // 发送post请求
      promise = axios.post(url, data);
    }
    promise
      .then(function(response) {
        // 成功了调用resolve()
        resolve(response.data);
      })
      .catch(function(error) {
        //失败了调用reject()
        reject(error);
      });
  });
}
```

## 4 原生 Ajax, Axios, Fetch 的区别

### 原生 Ajax

传统 Ajax 指的是 XMLHttpRequest（XHR）， 最早出现的发送后端请求技术，隶属于原始 js 中，核心使用 XMLHttpRequest 对象，多个请求之间如果有先后关系的话，就会出现**回调地狱**。

JQuery ajax 是对原生 XHR 的封装，除此以外还增添了对**JSONP**的支持。经过多年的更新维护，真的已经是非常的方便了，优点无需多言；如果是硬要举出几个缺点，那可能只有：

1. 本身是针对 MVC 的编程,不符合现在前端**MVVM**的浪潮
2. 基于原生的 XHR 开发，XHR 本身的架构不清晰。
3. JQuery 整个项目太大，单纯使用 ajax 却要引入整个 JQuery 非常的不合理（采取个性化打包的方案又不能享受 CDN 服务）
4. 不符合关注分离（Separation of Concerns）的原则
5. 配置和调用方式非常混乱，而且基于事件的异步模型不友好。

### Axios

Axios 是一个基于 Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生 XHR 的封装，只不过它是 Promise 的实现版本，符合最新的 ES 规范，它本身具有以下特征：

1. 从浏览器中创建 XMLHttpRequest
2. 支持 Promise API
3. .客户端支持防止 CSRF
4. 提供了一些并发请求的接口（重要，方便了很多的操作）
5. 从 node.js 创建 http 请求
6. 拦截请求和响应
7. 转换请求和响应数据
8. 取消请求
9. 自动转换 JSON 数据

**PS:防止 CSRF:就是让你的每个请求都带一个从 cookie 中拿到的 key, 根据浏览器同源策略，假冒的网站是拿不到你 cookie 中得 key 的，这样，后台就可以轻松辨别出这个请求是否是用户在假冒网站上的误导输入，从而采取正确的策略。**

### Fetch

fetch 号称是 AJAX 的替代品，是在 ES6 出现的，使用了 ES6 中的 promise 对象。

Fetch 是基于 promise 设计的。Fetch 的代码结构比起 ajax 简单多了，参数有点像 jQuery ajax。

但是，一定记住**fetch 不是 ajax 的进一步封装，而是原生 js，没有使用 XMLHttpRequest 对象**。

**fetch 的优点：**

1. 符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
2. 更好更方便的写法
3. 语法简洁，更加语义化
4. 基于标准 Promise 实现，支持 async/await
5. 同构方便使用
6. 加底层，提供的 API 丰富（request, response）
7. 脱离了 XHR，是 ES 规范里新的实现方式

**使用 fetch 的时候，也遇到了不少的问题：**

1.  fetch 是一个低层次的 API，你可以把它考虑成原生的 XHR，所以使用起来并不是那么舒服，需要进行封装。1）fetch 只对网络请求报错，对 400，500 都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
    2）fetch 默认不会带 cookie，需要添加配置项： fetch(url, {credentials: 'include'})
    3）fetch 不支持 abort，不支持超时控制，使用 setTimeout 及 Promise.reject 的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
    4）fetch 没有办法原生监测请求的进度，而 XHR 可以
