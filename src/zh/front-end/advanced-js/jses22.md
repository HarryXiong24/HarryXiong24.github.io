---
icon: js
category: Web前端
tag: JS进阶教程
time: 2021-8-1
footer: 一切都是最好的安排
title: 22.DOM事件
---

# DOM 事件



## EventTarget 接口

### 概述

DOM 的事件操作（监听和触发），都定义在`EventTarget`接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，`XMLHttpRequest`、`AudioNode`、`AudioContext`）也部署了这个接口。

该接口主要提供三个实例方法。

- `addEventListener`：绑定事件的监听函数
- `removeEventListener`：移除事件的监听函数
- `dispatchEvent`：触发事件

### EventTarget.addEventListener()

`EventTarget.addEventListener()`用于在当前节点或对象上，定义一个特定事件的监听函数。一旦这个事件发生，就会执行监听函数。该方法没有返回值。

```js
target.addEventListener(type, listener[, useCapture]);
```

该方法接受三个参数。

- `type`：事件名称，大小写敏感。
- `listener`：监听函数。事件发生时，会调用该监听函数。
- `useCapture`：布尔值，表示监听函数是否在捕获阶段（capture）触发（参见后文《事件的传播》部分），默认为`false`（监听函数只在冒泡阶段被触发）。该参数可选。

下面是一个例子。

```js
function hello() {
  console.log('Hello world');
}

var button = document.getElementById('btn');
button.addEventListener('click', hello, false);
```

上面代码中，`button`节点的`addEventListener`方法绑定`click`事件的监听函数`hello`，该函数只在冒泡阶段触发。

关于参数，有两个地方需要注意。

首先，第二个参数除了监听函数，还可以是一个具有`handleEvent`方法的对象。

```js
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    console.log('click');
  }
});
```

上面代码中，`addEventListener`方法的第二个参数，就是一个具有`handleEvent`方法的对象。

其次，第三个参数除了布尔值`useCapture`，还可以是一个属性配置对象。该对象有以下属性。

> - `capture`：布尔值，表示该事件是否在`捕获阶段`触发监听函数。
> - `once`：布尔值，表示监听函数是否只触发一次，然后就自动移除。
> - `passive`：布尔值，表示监听函数不会调用事件的`preventDefault`方法。如果监听函数调用了，浏览器将忽略这个要求，并在监控台输出一行警告。

如果希望事件监听函数只执行一次，可以打开属性配置对象的`once`属性。

```js
element.addEventListener('click', function (event) {
  // 只执行一次的代码
}, {once: true});
```

`addEventListener`方法可以为针对当前对象的同一个事件，添加多个不同的监听函数。这些函数按照添加顺序触发，即先添加先触发。如果为同一个事件多次添加同一个监听函数，该函数只会执行一次，多余的添加将自动被去除（不必使用`removeEventListener`方法手动去除）。

```js
function hello() {
  console.log('Hello world');
}

document.addEventListener('click', hello, false);
document.addEventListener('click', hello, false);
```

执行上面代码，点击文档只会输出一行`Hello world`。

如果希望向监听函数传递参数，可以用匿名函数包装一下监听函数。

```js
function print(x) {
  console.log(x);
}

var el = document.getElementById('div1');
el.addEventListener('click', function () { print('Hello'); }, false);
```

上面代码通过匿名函数，向监听函数`print`传递了一个参数。

监听函数内部的`this`，指向当前事件所在的那个对象。

```js
// HTML 代码如下
// <p id="para">Hello</p>
var para = document.getElementById('para');
para.addEventListener('click', function (e) {
  console.log(this.nodeName); // "P"
}, false);
```

上面代码中，监听函数内部的`this`指向事件所在的对象`para`。

### EventTarget.removeEventListener()

`EventTarget.removeEventListener`方法用来移除`addEventListener`方法添加的事件监听函数。该方法没有返回值。

```js
div.addEventListener('click', listener, false);
div.removeEventListener('click', listener, false);
```

`removeEventListener`方法的参数，与`addEventListener`方法完全一致。它的第一个参数“事件类型”，大小写敏感。

注意，`removeEventListener`方法移除的监听函数，必须是`addEventListener`方法添加的那个监听函数，而且必须在同一个元素节点，否则无效。

```js
div.addEventListener('click', function (e) {}, false);
div.removeEventListener('click', function (e) {}, false);
```

上面代码中，`removeEventListener`方法无效，因为监听函数不是同一个匿名函数。

```js
element.addEventListener('mousedown', handleMouseDown, true);
element.removeEventListener("mousedown", handleMouseDown, false);
```

上面代码中，`removeEventListener`方法也是无效的，因为第三个参数不一样。

### EventTarget.dispatchEvent()

`EventTarget.dispatchEvent`方法在当前节点上触发指定事件，从而触发监听函数的执行。该方法返回一个布尔值，只要有一个监听函数调用了`Event.preventDefault()`，则返回值为`false`，否则为`true`。

```js
target.dispatchEvent(event)
```

`dispatchEvent`方法的参数是一个`Event`对象的实例（详见《Event 对象》章节）。

```js
para.addEventListener('click', hello, false);
var event = new Event('click');
para.dispatchEvent(event);
```

上面代码在当前节点触发了`click`事件。

如果`dispatchEvent`方法的参数为空，或者不是一个有效的事件对象，将报错。

下面代码根据`dispatchEvent`方法的返回值，判断事件是否被取消了。

```js
var canceled = !cb.dispatchEvent(event);
if (canceled) {
  console.log('事件取消');
} else {
  console.log('事件未取消');
}
```



## 事件模型

### 监听函数

浏览器的事件模型，就是通过监听函数（listener）对事件做出反应。事件发生后，浏览器监听到了这个事件，就会执行对应的监听函数。这是事件驱动编程模式（event-driven）的主要编程方式。

JavaScript 有三种方法，可以为事件绑定监听函数。

#### HTML 的 on- 属性

HTML 语言允许在元素的属性中，直接定义某些事件的监听代码。

```html
<body onload="doSomething()">
<div onclick="console.log('触发事件')">
```

上面代码为`body`节点的`load`事件、`div`节点的`click`事件，指定了监听代码。一旦事件发生，就会执行这段代码。

元素的事件监听属性，都是`on`加上事件名，比如`onload`就是`on + load`，表示`load`事件的监听代码。

注意，这些属性的值是将会执行的代码，而不是一个函数。

```html
<!-- 正确 -->
<body onload="doSomething()">

<!-- 错误 -->
<body onload="doSomething">
```

一旦指定的事件发生，`on-`属性的值是原样传入 JavaScript 引擎执行。因此如果要执行函数，不要忘记加上一对圆括号。

使用这个方法指定的监听代码，只会在冒泡阶段触发。

```html
<div onclick="console.log(2)">
  <button onclick="console.log(1)">点击</button>
</div>
```

上面代码中，`<button>`是`<div>`的子元素。`<button>`的`click`事件，也会触发`<div>`的`click`事件。由于`on-`属性的监听代码，只在冒泡阶段触发，所以点击结果是先输出`1`，再输出`2`，即事件从子元素开始冒泡到父元素。

直接设置`on-`属性，与通过元素节点的`setAttribute`方法设置`on-`属性，效果是一样的。

```js
el.setAttribute('onclick', 'doSomething()');
// 等同于
// <Element onclick="doSomething()">
```

#### 元素节点的事件属性

元素节点对象的事件属性，同样可以指定监听函数。

```js
window.onload = doSomething;

div.onclick = function (event) {
  console.log('触发事件');
};
```

使用这个方法指定的监听函数，也是只会在冒泡阶段触发。

注意，这种方法与 HTML 的`on-`属性的差异是，它的值是函数名（`doSomething`），而不像后者，必须给出完整的监听代码（`doSomething()`）。

#### EventTarget.addEventListener()

所有 DOM 节点实例都有`addEventListener`方法，用来为该节点定义事件的监听函数。

```js
window.addEventListener('load', doSomething, false);
```

`addEventListener`方法的详细介绍，参见`EventTarget`章节。

#### 小结

上面三种方法，第一种“HTML 的 on- 属性”，违反了 HTML 与 JavaScript 代码相分离的原则，将两者写在一起，不利于代码分工，因此不推荐使用。

第二种“元素节点的事件属性”的缺点在于，同一个事件只能定义一个监听函数，也就是说，如果定义两次`onclick`属性，后一次定义会覆盖前一次。因此，也不推荐使用。

第三种`EventTarget.addEventListener`是推荐的指定监听函数的方法。它有如下优点：

- 同一个事件可以添加多个监听函数。
- 能够指定在哪个阶段（捕获阶段还是冒泡阶段）触发监听函数。
- 除了 DOM 节点，其他对象（比如`window`、`XMLHttpRequest`等）也有这个接口，它等于是整个 JavaScript 统一的监听函数接口。

### this 的指向

监听函数内部的`this`指向触发事件的那个元素节点。

```html
<button id="btn" onclick="console.log(this.id)">点击</button>
```

执行上面代码，点击后会输出`btn`。

其他两种监听函数的写法，`this`的指向也是如此。

```js
// HTML 代码如下
// <button id="btn">点击</button>
var btn = document.getElementById('btn');

// 写法一
btn.onclick = function () {
  console.log(this.id);
};

// 写法二
btn.addEventListener(
  'click',
  function (e) {
    console.log(this.id);
  },
  false
);
```

上面两种写法，点击按钮以后也是输出`btn`。

### 事件的传播

一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。

- **第一阶段**：从`window`对象传导到目标节点（上层传到底层），称为“捕获阶段”（capture phase）。
- **第二阶段**：在目标节点上触发，称为“目标阶段”（target phase）。
- **第三阶段**：从目标节点传导回`window`对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。

这种三阶段的传播模型，使得同一个事件会在多个节点上触发。

```html
<div>
  <p>点击</p>
</div>
```

上面代码中，`<div>`节点之中有一个`<p>`节点。

如果对这两个节点，都设置`click`事件的监听函数（每个节点的捕获阶段和冒泡阶段，各设置一个监听函数），共计设置四个监听函数。然后，对`<p>`点击，`click`事件会触发四次。

```js
var phases = {
  1: 'capture',
  2: 'target',
  3: 'bubble'
};

var div = document.querySelector('div');
var p = document.querySelector('p');

div.addEventListener('click', callback, true);
p.addEventListener('click', callback, true);
div.addEventListener('click', callback, false);
p.addEventListener('click', callback, false);

function callback(event) {
  var tag = event.currentTarget.tagName;
  var phase = phases[event.eventPhase];
  console.log("Tag: '" + tag + "'. EventPhase: '" + phase + "'");
}

// 点击以后的结果
// Tag: 'DIV'. EventPhase: 'capture'
// Tag: 'P'. EventPhase: 'target'
// Tag: 'P'. EventPhase: 'target'
// Tag: 'DIV'. EventPhase: 'bubble'
```

上面代码表示，`click`事件被触发了四次：`<div>`节点的捕获阶段和冒泡阶段各1次，`<p>`节点的目标阶段触发了2次。

1. 捕获阶段：事件从`<div>`向`<p>`传播时，触发`<div>`的`click`事件；
2. 目标阶段：事件从`<div>`到达`<p>`时，触发`<p>`的`click`事件；
3. 冒泡阶段：事件从`<p>`传回`<div>`时，再次触发`<div>`的`click`事件。

其中，`<p>`节点有两个监听函数（`addEventListener`方法第三个参数的不同，会导致绑定两个监听函数），因此它们都会因为`click`事件触发一次。所以，`<p>`会在`target`阶段有两次输出。

注意，浏览器总是假定`click`事件的目标节点，就是点击位置嵌套最深的那个节点（本例是`<div>`节点里面的`<p>`节点）。所以，`<p>`节点的捕获阶段和冒泡阶段，都会显示为`target`阶段。

事件传播的最上层对象是`window`，接着依次是`document`，`html`（`document.documentElement`）和`body`（`document.body`）。也就是说，上例的事件传播顺序，在捕获阶段依次为`window`、`document`、`html`、`body`、`div`、`p`，在冒泡阶段依次为`p`、`div`、`body`、`html`、`document`、`window`。

### 事件的代理

由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。

```js
var ul = document.querySelector('ul');

ul.addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    // some code
  }
});
```

上面代码中，`click`事件的监听函数定义在`<ul>`节点，但是实际上，它处理的是子节点`<li>`的`click`事件。这样做的好处是，只要定义一个监听函数，就能处理多个子节点的事件，而不用在每个`<li>`节点上定义监听函数。而且以后再添加子节点，监听函数依然有效。

如果希望事件到某个节点为止，不再传播，可以使用事件对象的`stopPropagation`方法。

```js
// 事件传播到 p 元素后，就不再向下传播了
p.addEventListener('click', function (event) {
  event.stopPropagation();
}, true);

// 事件冒泡到 p 元素后，就不再向上冒泡了
p.addEventListener('click', function (event) {
  event.stopPropagation();
}, false);
```

上面代码中，`stopPropagation`方法分别在捕获阶段和冒泡阶段，阻止了事件的传播。

但是，`stopPropagation`方法只会阻止事件的传播，不会阻止该事件触发`<p>`节点的其他`click`事件的监听函数。也就是说，不是彻底取消`click`事件。

```js
p.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log(1);
});

p.addEventListener('click', function(event) {
  // 会触发
  console.log(2);
});
```

上面代码中，`p`元素绑定了两个`click`事件的监听函数。`stopPropagation`方法只能阻止这个事件的传播，不能取消这个事件，因此，第二个监听函数会触发。输出结果会先是1，然后是2。

如果想要彻底取消该事件，不再触发后面所有`click`的监听函数，可以使用`stopImmediatePropagation`方法。

```js
p.addEventListener('click', function (event) {
  event.stopImmediatePropagation();
  console.log(1);
});

p.addEventListener('click', function(event) {
  // 不会被触发
  console.log(2);
});
```

上面代码中，`stopImmediatePropagation`方法可以彻底取消这个事件，使得后面绑定的所有`click`监听函数都不再触发。所以，只会输出1，不会输出2。



## Event 对象

### 概述

事件发生以后，会产生一个事件对象，作为参数传给监听函数。浏览器原生提供一个`Event`对象，所有的事件都是这个对象的实例，或者说继承了`Event.prototype`对象。

`Event`对象本身就是一个构造函数，可以用来生成新的实例。

```js
event = new Event(type, options);
```

`Event`构造函数接受两个参数。第一个参数`type`是字符串，表示事件的名称；第二个参数`options`是一个对象，表示事件对象的配置。该对象主要有下面两个属性。

- `bubbles`：布尔值，可选，默认为`false`，表示事件对象是否冒泡。
- `cancelable`：布尔值，可选，默认为`false`，表示事件是否可以被取消，即能否用`Event.preventDefault()`取消这个事件。一旦事件被取消，就好像从来没有发生过，不会触发浏览器对该事件的默认行为。

```js
var ev = new Event(
  'look',
  {
    'bubbles': true,
    'cancelable': false
  }
);
document.dispatchEvent(ev);
```

上面代码新建一个`look`事件实例，然后使用`dispatchEvent`方法触发该事件。

注意，如果不是显式指定`bubbles`属性为`true`，生成的事件就只能在“捕获阶段”触发监听函数。

```js
// HTML 代码为
// <div><p>Hello</p></div>
var div = document.querySelector('div');
var p = document.querySelector('p');

function callback(event) {
  var tag = event.currentTarget.tagName;
  console.log('Tag: ' + tag); // 没有任何输出
}

div.addEventListener('click', callback, false);

var click = new Event('click');
p.dispatchEvent(click);
```

上面代码中，`p`元素发出一个`click`事件，该事件默认不会冒泡。`div.addEventListener`方法指定在冒泡阶段监听，因此监听函数不会触发。如果写成`div.addEventListener('click', callback, true)`，那么在“捕获阶段”可以监听到这个事件。

另一方面，如果这个事件在`div`元素上触发。

```js
div.dispatchEvent(click);
```

那么，不管`div`元素是在冒泡阶段监听，还是在捕获阶段监听，都会触发监听函数。因为这时`div`元素是事件的目标，不存在是否冒泡的问题，`div`元素总是会接收到事件，因此导致监听函数生效。

### 实例属性

#### Event.bubbles，Event.eventPhase

`Event.bubbles`属性返回一个布尔值，表示当前事件是否会冒泡。该属性为只读属性，一般用来了解 Event 实例是否可以冒泡。前面说过，除非显式声明，`Event`构造函数生成的事件，默认是不冒泡的。

`Event.eventPhase`属性返回一个整数常量，表示事件目前所处的阶段。该属性只读。

```js
var phase = event.eventPhase;
```

`Event.eventPhase`的返回值有四种可能。

- 0，事件目前没有发生。
- 1，事件目前处于捕获阶段，即处于从祖先节点向目标节点的传播过程中。
- 2，事件到达目标节点，即`Event.target`属性指向的那个节点。
- 3，事件处于冒泡阶段，即处于从目标节点向祖先节点的反向传播过程中。

#### Event.cancelable，Event.cancelBubble，event.defaultPrevented

`Event.cancelable`属性返回一个布尔值，表示事件是否可以取消。该属性为只读属性，一般用来了解 Event 实例的特性。

大多数浏览器的原生事件是可以取消的。比如，取消`click`事件，点击链接将无效。但是除非显式声明，`Event`构造函数生成的事件，默认是不可以取消的。

```js
var evt = new Event('foo');
evt.cancelable  // false
```

当`Event.cancelable`属性为`true`时，调用`Event.preventDefault()`就可以取消这个事件，阻止浏览器对该事件的默认行为。

如果事件不能取消，调用`Event.preventDefault()`会没有任何效果。所以使用这个方法之前，最好用`Event.cancelable`属性判断一下是否可以取消。

```js
function preventEvent(event) {
  if (event.cancelable) {
    event.preventDefault();
  } else {
    console.warn('This event couldn\'t be canceled.');
    console.dir(event);
  }
}
```

`Event.cancelBubble`属性是一个布尔值，如果设为`true`，相当于执行`Event.stopPropagation()`，可以阻止事件的传播。

`Event.defaultPrevented`属性返回一个布尔值，表示该事件是否调用过`Event.preventDefault`方法。该属性只读。

```js
if (event.defaultPrevented) {
  console.log('该事件已经取消了');
}
```

#### Event.currentTarget，Event.target

事件发生以后，会经过捕获和冒泡两个阶段，依次通过多个 DOM 节点。因此，任意事件都有两个与事件相关的节点，一个是事件的原始触发节点（`Event.target`），另一个是事件当前正在通过的节点（`Event.currentTarget`）。前者通常是后者的后代节点。

`Event.currentTarget`属性返回事件当前所在的节点，即事件当前正在通过的节点，也就是当前正在执行的监听函数所在的那个节点。随着事件的传播，这个属性的值会变。

`Event.target`属性返回原始触发事件的那个节点，即事件最初发生的节点。这个属性不会随着事件的传播而改变。

事件传播过程中，不同节点的监听函数内部的`Event.target`与`Event.currentTarget`属性的值是不一样的。

```js
// HTML 代码为
// <p id="para">Hello <em>World</em></p>
function hide(e) {
  // 不管点击 Hello 或 World，总是返回 true
  console.log(this === e.currentTarget);

  // 点击 Hello，返回 true
  // 点击 World，返回 false
  console.log(this === e.target);
}

document.getElementById('para').addEventListener('click', hide, false);
```

上面代码中，`<em>`是`<p>`的子节点，点击`<em>`或者点击`<p>`，都会导致监听函数执行。这时，`e.target`总是指向原始点击位置的那个节点，而`e.currentTarget`指向事件传播过程中正在经过的那个节点。由于监听函数只有事件经过时才会触发，所以`e.currentTarget`总是等同于监听函数内部的`this`。

#### Event.type

`Event.type`属性返回一个字符串，表示事件类型。事件的类型是在生成事件的时候指定的。该属性只读。

```js
var evt = new Event('foo');
evt.type // "foo"
```

#### Event.timeStamp

`Event.timeStamp`属性返回一个毫秒时间戳，表示事件发生的时间。它是相对于网页加载成功开始计算的。

```js
var evt = new Event('foo');
evt.timeStamp // 3683.6999999995896
```

它的返回值有可能是整数，也有可能是小数（高精度时间戳），取决于浏览器的设置。

下面是一个计算鼠标移动速度的例子，显示每秒移动的像素数量。

```js
var previousX;
var previousY;
var previousT;

window.addEventListener('mousemove', function(event) {
  if (
    previousX !== undefined &&
    previousY !== undefined &&
    previousT !== undefined
  ) {
    var deltaX = event.screenX - previousX;
    var deltaY = event.screenY - previousY;
    var deltaD = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    var deltaT = event.timeStamp - previousT;
    console.log(deltaD / deltaT * 1000);
  }

  previousX = event.screenX;
  previousY = event.screenY;
  previousT = event.timeStamp;
});
```

#### Event.isTrusted

`Event.isTrusted`属性返回一个布尔值，表示该事件是否由真实的用户行为产生。比如，用户点击链接会产生一个`click`事件，该事件是用户产生的；`Event`构造函数生成的事件，则是脚本产生的。

```js
var evt = new Event('foo');
evt.isTrusted // false
```

上面代码中，`evt`对象是脚本产生的，所以`isTrusted`属性返回`false`。

#### Event.detail

`Event.detail`属性只有浏览器的 UI （用户界面）事件才具有。该属性返回一个数值，表示事件的某种信息。具体含义与事件类型相关。比如，对于`click`和`dblclick`事件，`Event.detail`是鼠标按下的次数（`1`表示单击，`2`表示双击，`3`表示三击）；对于鼠标滚轮事件，`Event.detail`是滚轮正向滚动的距离，负值就是负向滚动的距离，返回值总是3的倍数。

```js
// HTML 代码如下
// <p>Hello</p>
function giveDetails(e) {
  console.log(e.detail);
}

document.querySelector('p').onclick = giveDetails;
```

### 实例方法

#### Event.preventDefault()

`Event.preventDefault`方法取消浏览器对当前事件的默认行为。比如点击链接后，浏览器默认会跳转到另一个页面，使用这个方法以后，就不会跳转了；再比如，按一下空格键，页面向下滚动一段距离，使用这个方法以后也不会滚动了。该方法生效的前提是，事件对象的`cancelable`属性为`true`，如果为`false`，调用该方法没有任何效果。

注意，该方法只是取消事件对当前元素的默认影响，不会阻止事件的传播。如果要阻止传播，可以使用`stopPropagation()`或`stopImmediatePropagation()`方法。

```js
// HTML 代码为
// <input type="checkbox" id="my-checkbox" />
var cb = document.getElementById('my-checkbox');

cb.addEventListener(
  'click',
  function (e){ e.preventDefault(); },
  false
);
```

上面代码中，浏览器的默认行为是单击会选中单选框，取消这个行为，就导致无法选中单选框。

利用这个方法，可以为文本输入框设置校验条件。如果用户的输入不符合条件，就无法将字符输入文本框。

```js
// HTML 代码为
// <input type="text" id="my-input" />
var input = document.getElementById('my-input');
input.addEventListener('keypress', checkName, false);

function checkName(e) {
  if (e.charCode < 97 || e.charCode > 122) {
    e.preventDefault();
  }
}
```

上面代码为文本框的`keypress`事件设定监听函数后，将只能输入小写字母，否则输入事件的默认行为（写入文本框）将被取消，导致不能向文本框输入内容。

#### Event.stopPropagation()

`stopPropagation`方法阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上其他的事件监听函数。

```js
function stopEvent(e) {
  e.stopPropagation();
}

el.addEventListener('click', stopEvent, false);
```

上面代码中，`click`事件将不会进一步冒泡到`el`节点的父节点。

#### Event.stopImmediatePropagation()

`Event.stopImmediatePropagation`方法阻止同一个事件的其他监听函数被调用，不管监听函数定义在当前节点还是其他节点。也就是说，该方法阻止事件的传播，比`Event.stopPropagation()`更彻底。

如果同一个节点对于同一个事件指定了多个监听函数，这些函数会根据添加的顺序依次调用。只要其中有一个监听函数调用了`Event.stopImmediatePropagation`方法，其他的监听函数就不会再执行了。

```js
function l1(e){
  e.stopImmediatePropagation();
}

function l2(e){
  console.log('hello world');
}

el.addEventListener('click', l1, false);
el.addEventListener('click', l2, false);
```

上面代码在`el`节点上，为`click`事件添加了两个监听函数`l1`和`l2`。由于`l1`调用了`event.stopImmediatePropagation`方法，所以`l2`不会被调用。

#### Event.composedPath()

`Event.composedPath()`返回一个数组，成员是事件的最底层节点和依次冒泡经过的所有上层节点。

```js
// HTML 代码如下
// <div>
//   <p>Hello</p>
// </div>
var div = document.querySelector('div');
var p = document.querySelector('p');

div.addEventListener('click', function (e) {
  console.log(e.composedPath());
}, false);
// [p, div, body, html, document, Window]
```

上面代码中，`click`事件的最底层节点是`p`，向上依次是`div`、`body`、`html`、`document`、`Window`。

