---
category: Web 前端
tag:
    - DOM
    - BOM
date: 2020-06-11
title: 4. 元素样式
---



## 元素样式



### 4.1 修改元素CSS样式



#### 4.1.1 通过style属性修改元素样式



通过 **元素.style.样式名="样式值"** 的方式设置修改CSS样式



**注意:**



- 如果CSS的样式名中含有-(也就是减号)，这种名称在JS中是不合法的，比如background-color,需要将这种样式名修改为**驼峰命名法**，去掉-，然后将-后的字母大写，如:background-color写作backgroumdColor，border-top-width写作borderTopWidth

- 因为float样式是JS中的保留字,所有在修改元素浮动属性的时候不能够直接写作 **元素.style.float="样式值"** 的形式,需要**用styleFloat(兼容IE6~8)或cssFloat(IE9以上使用)**来代替使用

- 通过style属性设置的样式都是内联样式，而内联样式有较高的优先级，所以通过JS修改的样式往往会立即重置，但是如果在样式中用了!important则样式会拥有最高优先级，导致JS修改样式失效，所以尽量不要使用important

- 通过JS的style属性设置和读取的都是内联样式，无法读取CSS样式表中的样式(外部样式和嵌套样式)



**简写方式**



通过 **元素.style.cssText="样式值"**  的方式可以将多个CSS属性同时写入,右边的值的写法和内联的CSS样式一样的,并不用遵循驼峰命名法,也不用在意JS的保留字问题



#### 4.1.2 通过类修改元素样式



通过**修改类(class)**来修改CSS样式



- **修改className属性**
  通过修改元素的className属性(在JS中的class是保留字,所以用className来代替)来间接修改样式，这样一来，只需要修改一次，即可同时修改多个样式，浏览器只需要重新渲染页面一次，性能比较好
  **用className属性添加一个类**
  **元素.className+=" 类名"**，记得在类名前面加上空格

- **通过classList属性**
  每个标签元素都有classList属性,这个属性和当中的一些方法可以让我们修改类时更加简便

- - **classList属性返回元素的类名,该属性只读**,只能通过该属性的一些方法来修改元素的类

- - **classList属性有length属性,该属性返回元素类的属性,并且该属性只读**

- - classList属性的方法

    | 方法                          | 描述                                                         |
    | ----------------------------- | ------------------------------------------------------------ |
    | `add(class1, class2, ...)`    | 在元素中添加一个或多个类名。  如果指定的类名已存在，则不会添加 |
    | `contains(class)`             | 返回布尔值，判断指定的类名是否存在。可能值：true - 元素包已经包含了该类名false - 元素中不存在该类名 |
    | `item(index)`                 | 返回元素中索引值对应的类名。索引值从 0 开始。  如果索引值在区间范围外则返回 *null* |
    | `remove(class1, class2, ...)` | 移除元素中一个或多个类名。**注意:** 移除不存在的类名，不会报错。 |
    | `toggle(class, true\|false)`  | 在元素中切换类名。  第一个参数为要在元素中移除的类名，并返回 false。  如果该类名不存在则会在元素中添加类名，并返回 true。   第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存在。也就是说如果写了第二个参数那么该方法就变成了add()或remover()方法 |



### 4.2 获取元素样式



#### 4.2.1 通用样式



- **在IE了浏览器中通过currentStyle属性来获取当前元素正在显示的样式**,如果获取的是没有设置的样式,就会返回该样式的默认值,并且如果**默认是以px为单位**来返回的
  **如:**没有设置width就会返回默认值auto
  **语法:**元素.currentStyle.样式名

- 在其他浏览器可以使用getComputedStyle()方法来获取元素样式(IE8以下不支持,)这个方法是window的方法，可以直接进行调用

  该方法

  有两个参数，

  第一个参数传入一个元素,第二个参数传入一个伪类,第二个参数可选,当不查询伪类元素的时候可以忽略或者传入null。该方法会

  返回一个对象

  ，对象中封装了当前元素对应的样式，可以通过样式名来读取样式，如果获取的样式没有设置，与currentStyle属性不同,会获取真实的值，而不是默认值，同时值也是默认以

  px为单位

  来返回的

  如:

  没有设置width,不会返回auto,而是返回一个长度

  ```js
  var div=document.getElementById("box");
  var obj=getComputedStyle(Odiv,null);
  
  console.log(obj.width);
  console.log(getComputedStyle(box1,null).width);//也可以直接输出
  ```



**注意:**通过currentStyle属性和getComputedStyle()方法读取到的样式都是只读的，不能修改，如果要修改必须通过style属性



**兼容写法**



```js
/*
参数:obj 要获取样式的元素
    name 要获取的样式名
*/
function getStyle(obj,name){

if(window.getComputedStyle){   //因为getComputedStyle函数实质上是一个对象，所以如果有就返回true,这里必须要用window，因为这是要在全局范围类寻找，但是IE8全局里没有这个变量，肯定会报错，必须加上window，如果没有这个window里的属性就会返回undefined

return getComputedStyle(obj，null)[name]//因为是变量必须使用[]的方法

}else{
return obj.currentStyle[name]
}
//当然if的对象也可以反过来，但是如果判断obj.currentStyle有问题在于IE8以上的IE浏览器两种方法都有，这样它就会优先使用第一个方法，但是我们推荐优先使用getComputedStyle()
}
```



#### 4.2.2 获取特殊样式



**注:以下获取的样式都是只读的,不能够修改**



**属性**



- **clientWidth和clientHeight属性获取元素的可见宽度和高度(内容区和内边距)，这些属性都是返回纯数值**，不带单位,可以直接进行计算

- **offsetWidth和offsetHeight属性获取元素的整个宽度和高度(内容区，内边距和边框),返回值也是纯数值**

- **offsetLeft和offsetTop属性获取当前元素相对于其定位父元素的水平偏移量和垂直偏移量**
  **注意:**偏移量的原点是父元素的左上角(left top),和背景图片的原点相同

- **window.innerWidth**和**window.innerHeight**属性可以获取window窗口的内部宽高

  注意:

  不包括页面的导航栏以及页面滚动条和控制台

  ```js
  console.log(window.innerHeigth);
  console.log(window.innerWidth);
  ```

- document.documentElement.clientWidth和document.documentElement.clientWidth属性获取文档可视区域

  ,该属性的值虽然与window,innerWidth和window.innerHeight的值相同,但是对象的调用者不同,内部的含义也不同

  ```js
  console.log(document.documentElement.clientHeith);
  console.log(document.documentElement.clientWidth);
  ```

- **scrollWidth和scrollHeight属性可以获取元素整个滚动区域的宽度和高度,如果没有隐藏的部分则等于clientWidth和clientHeight**

- scrollLeft和scrollTop属性可以获取水平和垂直滚动条滚动的距离

  浏览器滚动条问题

  chrome认为浏览器的滚动条是body元素的，可以通过body.scrollTopl来获取，而火狐和IE浏览器认为浏览器的滚动条是html元素的，所以在用到浏览器滚动条的时候就会出现兼容问题(现在的chrome版本已经和火狐与IE统一都是通过html元素获取了,通过body获取反而值为0)

  兼容代码

  ```js
  var st=document.body.scrollTop||document.documentElement.scrollTop;
  var sl=document.body.scrollLeft||document.documentElement.scrollLeft;
  //该兼容代码可以在计算页面的滚动条距离的时候使用
  ```



**注:当满足`scrollHeight-ScrollTop===clientHeight` 这个表示式时说明垂直滚动条到底了，同理水平滚动条也一样**



**自制滚动条**



```js
/*
    一个最大的容器box,一个装滚动条的div容器,一个滚动条div,一个文字div
    滚动条的高/装滚动条div的高=box的高/文字的高-->滚动条的高=装滚动条div的高*box的高/文字div的高
*/
//bar为滚动条,scroll为包裹滚动条的层，content为装文字的盒子
var box=document.getElementById("box");
var scroll=document.getElementById("scroll");
var content=document.getElementById("content");
var bar=document.getElementById("bar");

var height=scroll.offsetHeight*box.offsetHeight/content.offsetHeight;
bar.style.height=height+"px";
//移动滚动条
bar.onmousedowm=function(e){
    //鼠标在滚动条上的位置
    var spaceY=e.clientY-bar.offsetTop;
    document.onmousemove=function(e){
        //滚动条纵坐标
        var y=e.clientY-spaceY;
        y=y<0?0:y;//最小值
        y=y>(scroll.offsetHeight-bar.offsetHeight)?(scroll.offsetHeight-bar.offsetHeight):y;
        bar.style.top=y+"px";
        //设置鼠标移动时文字不被选中
        window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
        
        //文字div的移动距离=滚动条的移动距离*文字div的最大移动距离/滚动条的最大移动距离
        //文字的最大移动距离是content盒子的高度减去最外层盒子的高度
        var moveY=y*(content.offsetHeight-box.offsetHeight)/(scroll.offsetHeight-bar.offsetHeight);
        content.style.marginTop=-moveY+"px";
    }
}

document.onmouseup=function(){
    //鼠标抬起将鼠标移动事件去除
    document.onmousemove=null;
}
```



```html
<!--下面滚动条的方法与上方没有太大联系-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>滚动条</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      #box {
        position: relative;
        overflow: hidden;
        margin: 50px auto;
        width: 500px;
        height: 600px;
        background-color: rgb(231, 223, 223);
        border-radius: 5px;
      }
      #content {
        position: absolute;
        float: left;
        width: 480px;
      }
      #content > div {
        text-indent: 2em;
      }
      #bar-container {
        position: relative;
        float: right;
        height: 100%;
        width: 20px;
        background-color: #ccc;
        border-radius: 5px;
        cursor: pointer;
      }
      #bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 40px;
        background-color: pink;
        border-radius: 5px;
        cursor: pointer;
      }
    </style>
    <script src="js/animation.js"></script><!--装有运动函数-->
  </head>
  <body>
    <div id="box">
      <div id="content">
        code....
      </div>
      <div id="bar-container">
        <div id="bar"></div>
      </div>
    </div>
    <script>
      ///最大的包裹盒子
      let box = document.getElementById("box");
      //包裹文档的盒子
      let content = document.getElementById("content");
      //装滚动条的盒子
      let barContainer = document.getElementById("bar-container");
      //滚动条
      let bar = document.getElementById("bar");
      //计算滚动条的大小
      let barHeight =
        Math.min(box.offsetHeight / content.offsetHeight, 1) *
        barContainer.offsetHeight;
      bar.style.height = barHeight + "px";
      //滚动条最大滚动距离
      let maxScroll = barContainer.offsetHeight - bar.offsetHeight;
      //内容能滑动的最大距离
      let maxContent = content.offsetHeight - box.offsetHeight;
      //滑动时距顶部的距离
      let Top = 0;
      //判断内容长度绑定事件
      if (bar.offsetHeight / content.offsetHeight < 1) {
        mousewheel(box, function(event) {
          event = event || window.event;
          if (event.wheelDetail > 0) {
            //每次滑动的像素
            Top -= 10;
          } else {
            Top += 10;
          }
          Top = Math.max(0, Top);
          Top = Math.min(maxScroll, Top);
          bar.style.top = Top + "px";
          //文字内容滑动比例
          content.style.top = -(Top / maxScroll) * maxContent + "px";
        });
      } else {
        barContainer.style.display = "none";
        content.style.width = "100%";
      }
      barContainer.onclick = function(event) {
        Top = event.pageY - getDistance(this).top - bar.offsetHeight / 2;
        //上面也可以用event.clientY-this.getBoundingClientRect().top-bar.offsetHeight / 2
        Top = Math.max(0, Top);
        Top = Math.min(maxScroll, Top);
        if (event.target === this) {
          animation(//运动函数
            bar,
            {
              data: {
                top: Top
              }
            },
            500
          );
          animation(
            content,
            {
              data: {
                top: -(Top / maxScroll) * maxContent
              }
            },
            500
          );
        }
      };

      bar.onmousedown = function(event) {
        event = event || window.event;
        //开始时的鼠标坐标和滚动条的距离
        let startY = event.clientY;
        let startTop = bar.offsetTop;
        //清除阻止冒泡
        event.stopPropagation();
        document.onmousemove = function(event) {
          event = event || window.event;
          //拖动时的鼠标坐标和滚动距离
          let nowY = event.clientY;
          Top = startTop + nowY - startY;

          Top = Math.max(0, Top);
          Top = Math.min(maxScroll, Top);
          bar.style.top = Top + "px";
          //文字内容滑动比例
          content.style.top = -(Top / maxScroll) * maxContent + "px";
          event.preventDefault();
        };

        document.onmouseup = function() {
          this.onmousemove = null;
          this.onmouseup = null;
        };
      };

      function mousewheel(dom, callback, bool) {
        //bool为传入的一个布尔值,如果是true则阻止默认行为,默认是不阻止
        var type = "mousewheel";

        if (dom.onmousewheel === undefined) {
          //不能通过判断下面的那个,因为在火狐中dom属性也没有这个属性
          type = "DOMMouseScroll";
        }
        //真正的事件函数
        function cb(event) {
          /*
              自定义属性event.wheelDtail控制鼠标滚轮,所以在外部使用时应该用event.wheelDetail
          */
          /*外部可以传入event作为事件对象也可以不传入直接使用,也不需要进行兼容,但是不传入时应该用              event
          */
          event = event || window.event;
          //把滚动事件的方向处理一致
          event.wheelDetail = event.wheelDelta / 123 || event.detail / -3;
          //每次滚动的值为1,并且向上滚动为正值,向下滚动为负值

          //阻止默认行为
          if (!!bool) {
            if (event.preventDefault) {
              event.preventDefault();
            } else {
              event.returnValue = flase;
            }
          }
          callback.call(this, event);
        }

        if (dom.addEventListener) {
          dom.addEventListener(type, cb);
        } else {
          dom, attachEvent("on" + type, cb);
        }
      }

      //获取当前定位元素距离body顶部的距离
      function getDistance(dom) {
        let obj = {
          top: 0,
          left: 0
        };
        while (dom != document.body) {
          obj.top = dom.offsetTop;
          obj.left = dom.offsetLeft;
          dom = dom.offsetParent;
        }
        return obj;
      }
    </script>
  </body>
</html>
```



**方法**



- **getBoundingClientRect()方法获取元素节点对象到窗口的左上角(恒定为刚打开页面时的左上角为原点)的距离值以及自身的长宽等属性**,该方法不用传入参数

- **scrollIntoView()方法让滚动条滚动到调用对象的可视区,一旦执行此方法调用此方法的页面就会滚动到该元素节点的位置**,此方法不用传入参数

