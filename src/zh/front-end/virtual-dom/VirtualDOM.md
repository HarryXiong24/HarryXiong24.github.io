---
icon: tree
time: 2020-6-16
category: Web前端
tags:
  - 虚拟DOM
  - Diff算法
  - 性能优化
footer: 为何表情, 要让着世界安排
---

# Virtual Dom

## 1. JS 操作真实 DOM 的代价

​

用我们传统的开发模式，原生 JS 或 JQ 操作 DOM 时，浏览器会从构建 DOM 树开始从头到尾执行一遍流程。在一次
操作中，我需要更新 10 个 DOM 节点，浏览器收到第一个 DOM 请求后并不知道还有 9 次更新操作，因此会马上执行
流程，最终执行 10 次。

例如，第一次计算完，紧接着下一个 DOM 更新请求，这个节点的坐标值就变了，前一次计算为无用功。计算 DOM 节点坐标值等都是白白浪费的性能。即使计算机硬件一直在迭代更新，操作 DOM 的代价仍旧是昂贵的，频繁操作还是会出现页面卡顿，影响用户体验。

## 2. 为什么需要虚拟 DOM，它的好处

​ Web 界面由 DOM 树(树的意思是数据结构)来构建，当其中一部分发生变化时，其实就是对应某个 DOM 节点发生了变化

​ 虚拟 DOM 就是为了**解决浏览器性能问题**而被设计出来的。

​ **如前**，若一次操作中有 10 次更新 DOM 的动作，虚拟 DOM 不会立即操作 DOM，而是将这 10 次更新的 diff 内容保存到本地一个 JS 对象中，最终将这个 JS 对象一次性更新到 DOM 树上，再进行后续操作，避免大量无谓的计算量。

​ **所以**，用 JS 对象模拟 DOM 节点的好处是，页面的更新可以先全部反映在 JS 对象(虚拟 DOM)上，操作内存中的 JS 对象的速度显然要更快，等更新完成后，再将最终的 JS 对象映射成真实的 DOM，交由浏览器去绘制。

## 3. 虚拟 DOM 的实现

```js
/**
 * Element virdual-dom对象定义
 * @param {String} tagName - dom元素名称
 * @param {Object} props - dom属性
 * @param {Array<Element|String>} - 子节点
 */

/**
 * Element 生成虚拟dom
 */
function Element(type, props, children) {
  this.type = type;
  this.props = props;
  this.children = children;

  // 如果有key值, 则要设置key值
  if (props.key) {
    this.key = props.key;
  }

  // diff算法才需要

  // // 记录子节点个数
  // let count = 0
  // children.forEach( (child, index) => {
  //   // 区分是子节点是元素节点还是文字节点
  //   if (child instanceof Element) {
  //       count += child.count     // 如果是元素节点, 则判断子节点下面还有多少个子节点
  //   } else {
  //       children[index] = '' + child   // 如果不是子节点, 把子文档节点里的文字记录到对应的children中, 等于重复赋值
  //   }
  //   count++
  // })
  // // 记录子节点个数
  // this.count = count
}

/**
 * render 将virdual-dom对象渲染为实际 DOM 元素
 * 绑定为Element的一个实例方法, 要创建一个对象才能使用
 */
Element.prototype.render = function() {
  let el = document.createElement(this.type); // 创建元素节点
  let props = this.props; // 获取节点的属性

  // 设置节点的DOM属性
  for (let propName in props) {
    let propValue = props[propName];
    el.setAttribute(propName, propValue);
  }

  // 处理子节点, 没有子节点的情况视为空文档节点
  let children = this.children || [];
  children.forEach((child) => {
    let childEl =
      child instanceof Element // 判断子节点为元素节点还是文档节点
        ? child.render() // 如果子节点也是虚拟DOM(元素节点)，递归构建DOM节点
        : document.createTextNode(child); // 如果是文档节点，只构建文本节点
    el.appendChild(childEl); // 将处理结果追加到当前节点里面
  });
  return el;
};

// 测试
// let virtualDom = createElement(
//   'div',
//   {id: '1'},
//   [
//     createElement('ul', {id: '2'}, ['this is ul'])
//   ]
// )

/**
 * Element 对象创建
 */
function createElement(tagName, props, children) {
  return new Element(tagName, props, children);
}
```

```html
<!-- 生成真实DOM的测试 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>

  <script src="./element.js"></script>
  <script>
    // 创建一个createElement实例对象
    let el = createElement;
    let app = el("div", { id: "virtual-dom" }, [
      el("p", {}, ["Virtual DOM"]),
      el("ul", { id: "list" }, [
        el("li", { class: "item" }, ["Item 1"]),
        el("li", { class: "item" }, ["Item 2"]),
        el("li", { class: "item" }, ["Item 3"]),
      ]),
      el("div", {}, ["Hello World"]),
    ]);

    console.log(app);
    let realDom = app.render(); // 虚拟dom生成真实dom
    document.body.appendChild(realDom);
  </script>
</html>
```
