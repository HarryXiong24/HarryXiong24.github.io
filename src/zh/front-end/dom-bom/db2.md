---
category: Web 前端
tag:
    - DOM
    - BOM
date: 2020-06-11
title: 2. DOM事件
---

## DOM事件



**事件是用户和浏览器之间的交互行为**



### 2.1 鼠标事件



| 属性          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| onclick       | 当用户点击某个对象时调用的事件句柄。单击鼠标左键或者按下回车键时触发,意味着onclick事件处理程序既可以通过键盘也可以通过鼠标执行 |
| oncontextmenu | 在用户点击鼠标右键打开上下文菜单时触发。可以用做自定义菜单   |
| ondblclick    | 当用户双击某个对象时调用的事件句柄。双击鼠标左键时触发       |
| onmousedown   | 鼠标按钮被按下。                                             |
| onmouseenter  | 当鼠标指针移动到元素上时触发。该事件不冒泡，即鼠标移到其后代元素上时不会触发。 |
| onmouseleave  | 当鼠标指针移出元素时触发。该事件不冒泡，即鼠标移出其后代元素时不会触发。 |
| onmousemove   | 鼠标被移动。                                                 |
| onmouseover   | 鼠标移到某元素之上。鼠标移到其后代元素上时会触发,意味着支持冒泡 |
| onmouseout    | 鼠标从某元素移开。支持冒泡                                   |
| onmouseup     | 鼠标按键被松开。                                             |



### 2.2 键盘事件



| 属性       | 描述                       |
| ---------- | -------------------------- |
| onkeydown  | 某个键盘按键被按下。       |
| onkeypress | 某个键盘按键被按下并松开。 |
| onkeyup    | 某个键盘按键被松开。       |



### 2.3 框架/对象事件



| 属性           | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| onabort        | 图像的加载被中断。 ( `<object>`)                             |
| onbeforeunload | 该事件在即将离开页面（刷新或关闭）时触发                     |
| onerror        | 在加载文档或图像时发生错误。 ( `<object>`, `<body>`和 `<frameset>`) |
| onhashchange   | 该事件在当前 URL 的锚部分发生修改时触发。                    |
| onload         | 一张页面或一幅图像完成加载。                                 |
| onpageshow     | 该事件在用户访问页面时触发                                   |
| onpagehide     | 该事件在用户离开当前网页跳转到另外一个页面时触发             |
| onresize       | 窗口或框架被重新调整大小。由window调用                       |
| onscroll       | 当文档被滚动时发生的事件。                                   |
| onunload       | 用户退出页面。 ( `<body>` 和 `<frameset>`)                   |



### 2.4 表单事件



| 属性       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| onblur     | 元素失去焦点时触发                                           |
| onchange   | 该事件在表单元素的内容改变时触发( `<input>`, `<keygen>`, `<select>`, 和 `<textarea>`) |
| onfocus    | 元素获取焦点时触发                                           |
| onfocusin  | 元素即将获取焦点时触发                                       |
| onfocusout | 元素即将失去焦点时触发                                       |
| oninput    | 元素获取用户输入时触发                                       |
| onreset    | 表单重置时触发                                               |
| onsearch   | 用户向搜索域输入文本时触发 ( ·<input="search">)              |
| onselect   | 用户选取文本时触发 ( `<input> `和` <textarea>`)              |
| onsubmit   | 表单提交时触发                                               |



### 2.5 剪贴板事件



| 属性    | 描述                           |
| ------- | ------------------------------ |
| oncopy  | 该事件在用户拷贝元素内容时触发 |
| oncut   | 该事件在用户剪切元素内容时触发 |
| onpaste | 该事件在用户粘贴元素内容时触发 |



### 2.6 打印事件



| 属性          | 描述                                                 |
| ------------- | ---------------------------------------------------- |
| onafterprint  | 该事件在页面已经开始打印，或者打印窗口已经关闭时触发 |
| onbeforeprint | 该事件在页面即将开始打印时触发                       |



### 2.7 拖动事件



| 事件        | 描述                                 |
| ----------- | ------------------------------------ |
| ondrag      | 该事件在元素正在拖动时触发           |
| ondragend   | 该事件在用户完成元素的拖动时触发     |
| ondragenter | 该事件在拖动的元素进入放置目标时触发 |
| ondragleave | 该事件在拖动元素离开放置目标时触发   |
| ondragover  | 该事件在拖动元素在放置目标上时触发   |
| ondragstart | 该事件在用户开始拖动元素时触发       |
| ondrop      | 该事件在拖动元素放置在目标区域时触发 |



### 2.8 多媒体事件



| 事件             | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| onabort          | 事件在视频/音频（audio/video）终止加载时触发。               |
| oncanplay        | 事件在用户可以开始播放视频/音频（audio/video）时触发。       |
| oncanplaythrough | 事件在视频/音频（audio/video）可以正常播放且无需停顿和缓冲时触发。 |
| ondurationchange | 事件在视频/音频（audio/video）的时长发生变化时触发。         |
| onemptied        | 当期播放列表为空时触发                                       |
| onended          | 事件在视频/音频（audio/video）播放结束时触发。               |
| onerror          | 事件在视频/音频（audio/video）数据加载期间发生错误时触发。   |
| onloadeddata     | 事件在浏览器加载视频/音频（audio/video）当前帧时触发触发。   |
| onloadedmetadata | 事件在指定视频/音频（audio/video）的元数据加载后触发。       |
| onloadstart      | 事件在浏览器开始寻找指定视频/音频（audio/video）触发。       |
| onpause          | 事件在视频/音频（audio/video）暂停时触发。                   |
| onplay           | 事件在视频/音频（audio/video）开始播放时触发。               |
| onplaying        | 事件在视频/音频（audio/video）暂停或者在缓冲后准备重新开始播放时触发。 |
| onprogress       | 事件在浏览器下载指定的视频/音频（audio/video）时触发。       |
| onratechange     | 事件在视频/音频（audio/video）的播放速度发送改变时触发。     |
| onseeked         | 事件在用户重新定位视频/音频（audio/video）的播放位置后触发。 |
| onseeking        | 事件在用户开始重新定位视频/音频（audio/video）时触发。       |
| onstalled        | 事件在浏览器获取媒体数据，但媒体数据不可用时触发。           |
| onsuspend        | 事件在浏览器读取媒体数据中止时触发。                         |
| ontimeupdate     | 事件在当前的播放位置发送改变时触发。                         |
| onvolumechange   | 事件在音量发生改变时触发。                                   |
| onwaiting        | 事件在视频由于要播放下一帧而需要缓冲时触发。                 |



### 2.9 动画事件



| 事件               | 描述                            |
| ------------------ | ------------------------------- |
| animationend       | 该事件在 CSS 动画结束播放时触发 |
| animationiteration | 该事件在 CSS 动画重复播放时触发 |
| animationstart     | 该事件在 CSS 动画开始播放时触发 |



### 2.10 过渡事件



| 事件          | 描述                          |
| ------------- | ----------------------------- |
| transitionend | 该事件在 CSS 完成过渡后触发。 |



### 2.11 其他事件



| 事件             | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| onmessage        | 该事件通过或者从对象(WebSocket, Web Worker, Event Source 或者子 frame 或父窗口)接收到消息时触发 |
| onmousewheel     | 已废弃。 使用 onwheel事件替代                                |
| ononline         | 该事件在浏览器开始在线工作时触发。                           |
| onoffline        | 该事件在浏览器开始离线工作时触发。                           |
| onpopstate       | 该事件在窗口的浏览历史（history 对象）发生改变时触发。       |
| onshow           | 该事件当 `<menu>` 元素在上下文菜单显示时触发                 |
| onstorage        | 该事件在 Web Storage(HTML 5 Web 存储)更新时触发              |
| ontoggle         | 该事件在用户打开或关闭 `<details> `元素时触发                |
| onwheel          | 该事件在鼠标滚轮在元素上下滚动时触发                         |
| DOMMouseScroll   | 火狐(firefox)支持的绑定鼠标滚轮的事件，并且该事件必须要通过addEventListener()函数来绑定事件 |
| DOMContentLoaded | 监听文档DOM元素的内容是否加载完成，比onload事件要监听的东西更少，DOM元素加载完毕后就会执行该事件,通过addEventListener()函数来绑定事件 |

