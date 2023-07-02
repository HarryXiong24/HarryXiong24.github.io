---
category: Web 前端
tag:
    - DOM
    - BOM
date: 2020-06-11
title: 5. 事件对象
---



## 事件对象



当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为默认实参(如果没有传入参数位置为arguments[0])传递进响应函数，在事件对象中封装了当前事件相关的一些信息，比如:鼠标的坐标，键盘哪个按键被按下 ，鼠标滚轮滚动的方向



**注:**



- 一般都会把形参写在事件对象的形参里,虽然不写也不会报错,但是获取方式会相对麻烦

- 在IE中,event事件对象通过window.event来获取，在其他浏览器中是作为参数传入使用



```js
//写实参调用event
function eventTest(event){
   event=event||window.event;
}

//不写实参调用event
function eventTest(){
    var event = window.event||arguments[0];
}

//传入额外实参
function eventTest(a,b){
    var event = window.event || arguments.callee.caller.arguments[0];
}

//如果传入了参数却如第二种写法的话，则arguments中将会传入已经传入的参数，这时获取的arguments[0]就会是第一个传入的参数
```



```js
//target为该调用对象
target = event.srcElement||event.target//低版本IE用srcElement
```



### 5.1 基本事件对象



- **常量**



| 静态变量        | 描述                                 |
| --------------- | ------------------------------------ |
| CAPTURING-PHASE | 当前事件阶段为捕获阶段(1)            |
| AT-TARGET       | 当前事件是目标阶段,在评估目标事件(1) |
| BUBBLING-PHASE  | 当前的事件为冒泡阶段 (3)             |



- **属性**



| 属性          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| bubbles       | 返回布尔值，指示事件是否是起泡事件类型。                     |
| cancelable    | 返回布尔值，指示事件是否可拥可取消的默认动作。               |
| currentTarget | 返回其事件监听器触发该事件的元素。                           |
| eventPhase    | 返回事件传播的当前阶段。                                     |
| target        | 返回触发此事件的元素（事件的目标节点）。不兼容低版本IE,低版本IE用srcElement |
| timeStamp     | 返回事件生成的日期和时间。                                   |
| type          | 返回当前 Event 对象表示的事件的名称。                        |



- **方法**



| 方法              | 描述                                     |
| ----------------- | ---------------------------------------- |
| initEvent()       | 初始化新创建的 Event 对象的属性。        |
| preventDefault()  | 通知浏览器不要执行与事件关联的默认动作。 |
| stopPropagation() | 不再派发事件。                           |



### 5.2 目标事件对象



**方法**



| 方法                  | 描述                                                    |
| --------------------- | ------------------------------------------------------- |
| addEventListener()    | 允许在目标事件中注册监听事件(IE8 = attachEvent())       |
| dispatchEvent()       | 允许发送事件到监听器上 (IE8 = fireEvent())              |
| removeEventListener() | 运行一次注册在事件目标上的监听事件(IE8 = detachEvent()) |



### 5.3 事件监听对象



**方法**



| 方法          | 描述                         |
| ------------- | ---------------------------- |
| handleEvent() | 把任意对象注册为事件处理程序 |



### 5.4 文档事件对象



**方法**



| 方法          | 描述                  |
| ------------- | --------------------- |
| createEvent() | 返回新创建的event对象 |



### 5.4 鼠标/键盘事件对象



- **属性**



| 属性          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| altKey        | 返回当事件被触发时，"ALT" 是否被按下。                       |
| button        | 返回当事件被触发时，哪个鼠标按钮被点击。                     |
| clientX       | 返回当事件被触发时，鼠标指针的水平坐标。                     |
| clientY       | 返回当事件被触发时，鼠标指针的垂直坐标。                     |
| ctrlKey       | 返回当事件被触发时，"CTRL" 键是否被按下。                    |
| Location      | 返回按键在设备上的位置                                       |
| charCode      | 返回onkeypress事件触发键值的字母代码。                       |
| key           | 在按下按键时返回按键的标识符。                               |
| keyCode       | 返回onkeypress事件触发的键的值的字符代码，或者 onkeydown 或 onkeyup 事件的键的代码。 |
| which         | 返回onkeypress事件触发的键的值的字符代码，或者 onkeydown 或 onkeyup 事件的键的代码。 |
| metaKey       | 返回当事件被触发时，"meta" 键是否被按下。                    |
| relatedTarget | 返回与事件的目标节点相关的节点。                             |
| screenX       | 返回当某个事件被触发时，鼠标指针的水平坐标。                 |
| screenY       | 返回当某个事件被触发时，鼠标指针的垂直坐标。                 |
| shiftKey      | 返回当事件被触发时，"SHIFT" 键是否被按下。                   |



- **方法**



| 方法                | 描述                   |
| ------------------- | ---------------------- |
| initMouseEvent()    | 初始化鼠标事件对象的值 |
| initKeyboardEvent() | 初始化键盘事件对象的值 |


