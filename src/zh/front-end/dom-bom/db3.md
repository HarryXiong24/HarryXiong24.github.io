---
icon: infofill
category: Web前端
tags:
    - DOM
    - BOM
time: 2020-6-11
footer: 我和我最后的倔强，握紧双手绝对不放
title: 3.DOM查询
---

## DOM查询



### 3.1 获取DOM节点



#### 3.1.1 获取元素节点



- **getElementById()通过ID获取元素节点**,返回一个普通对象
  **注意:**ID其实可以不用获取而直接使用,因为ID是具有唯一性的,但是不推荐不获取就直接使用ID，因为以后会很难区分这个变量是哪里来的

- **getElementsByTagName()方法通过标签名获取元素节点**,返回一个类数组对象

- **getElementsByClassName()方法通过类名获取元素节点(IE8及以下版本不支持)**,返回一个类数组对象

- **getElementsByName()方法通过name属性获取元素节点,**这个方法主要是获取表单项,返回一个类数组对象

- **quertSelector()方法需要一个选择器的字符串作为参数,可以根据一个CSS选择器来查询一个元素节点对象，**语法和CSS语法一样，可以多个选择器一起使用,该方法在IE8也可用
  **注意:**使用该方法总会返回唯一的一个元素，如果满足条件的元素有多个，也只会返回第一个找到的

- **quertSelectorAll()方法用法同quertSelector()方法相同**
  **注意:**使用该方法就返回一个类数组对象，类数组对象里包含的所有符号要求的元素对象,即使符合条件的元素只有一个，也会返回类数组



**注意:querySelector()和quertSlectorAll()方法尽量少用,这两种对元素节点的查找效率很低**



**静态获取与动态获取元素节点**



- 通过ID查找元素节点和以query开头的查找的元素节点是静态获取元素节点,这时无论元素怎么改变已经获取的元素节点所赋值后的变量永远指向该被查找到的元素节点

  ```js
  var box=document.getElementById("box");
  box.onclick=function(){
      box.id="wrap";
      console.log(box);//还是能获取到
  }
  ```

  ```js
  var box=document.querySelectorAll(".box");//假设有5个box
  document.onclick=function(){
      document.body.innerHTML+="<div class='box'></div>";
      console.log(box);//还是5个box
  }
  ```

- 通过集合进行获取元素节点的方式为动态获取,这时每次使用集合都会获取集合的最新状态,此时通过集合赋值的变量的值也会发生相应变化

  ```js
  var box=document.getElementByClassName("box");//假设有5个box
  document.onclick=function(){
      document.body.innerHTML+="<div class='box'></div>";
      console.log(box);//6个box
  }
  ```

  注意:

  如果选中了集合中的单个元素,这时获取的元素节点是静态获取



#### 3.1.2 获取属性节点



- 读取元素的属性节点,使用 **元素.属性名** 或 **元素[属性名]**

- 修改元素的属性节点,使用 **元素.属性名=新值** 或 **元素[属性名]=新值**



**注意:读取元素的class属性时必须用className来代替class关键字**



**获取、设立、删除标签属性节点**



如果JS中的自定义属性与标签属性重复时,直接获取会得到自定义属性的值,所以需要特定的值获取标签属性的方法



- 通过getAttribute()方法获取标签属性节点

  ```js
  var box=document.getElementById("box");
  console.log(box.getAttribute("id"));//box
  ```

- 通过setAttribute()方法设立或改变一个标签属性节点

  ```js
  var box=document.getElementById("box");
  box.setAttribute("class","nameBox");
  console.log(box);
  //如果已有该属性会是重新赋值
  ```

- 通过removeAttribute()方法删除一个标签属性节点

  ```js
  var box=document.getElementById("box");
  box.removeAttribute("id");
  console.log(box);
  ```



#### 3.1.3 获取文本节点



- **innerHTML属性可以获取双标签元素内部的html代码，包括子标签,这个属性对于单标签元素(如表单标签)没有意义**,返回一个字符串

- **InnerText属性可以获取双标签元素内部的文本内容，它和InnerHTML属性类似，但会自动将HTML标签去除**,返回一个字符串

- **value属性可以获取单标签元素(如表单标签)内部的内容,**同时要向单标签元素写入内容也必须使用value属性,返回一个字符串

- **nodeValue属性通过获取标签内的文本节点的内容来获取元素内部的文本内容**(因为文本节点实际是一个标签的子节点,所以需要先找到文本节点)

  ,返回一个字符串

  ```js
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Document</title>
    </head>
    <div>123</div>
    <body>
      <script>
          let div = document.getElementsByTagName("div")[0];
          console.log(div.firstChild.nodeValue);//123
          console.log(div.nodeValue);//null
      </script>
    </body>
  </html>
  ```



#### 3.1.4 获取元素子节点



**元素子节点的有同父节点一样获取子节点的方法或属性**



- **childNodes属性获取元素子节点**，该属性会获取包括文本节点的所有子节点，返回一个类数组对象

- **children属性可以获取当前元素的所有子元素**，推荐用这个属性，返回一个类数组对象,而且是动态获取

- **firstChild属性表示当前节点的第一个子节点**，也包括空白文本，返回一个普通对象

- **firstElementChild属性获取第一个子元素**

  返回一个普通对象，但是不兼容IE8，不推荐使用

  兼容代码

  ```js
  //获取任意一个父级元素的第一个子级元素
  function getFirstElementChild(element){
      if(element.firstElementChild){
          return element.firstElementChild;
      }else{
          let node=element.firstChild;//第一个节点
          while(node&&node.nodeType!==1){//判断是否为元素节点
              node=node.nextSibling;
          }
      }
  }
  ```

- **lastChild属性表示当前节点的最后一个子节点，**也包括空白文本，返回一个普通对象

- **lastElementChld属性获取最后一个子元素，**返回一个普通对象，但是不兼容IE8，不推荐使用

- **childElementCount属性元素子节点个数,不兼容IE8**



#### 3.1.5 获取父和兄弟节点



- **parentElement属性获取当前节点的父元素(只在IE中可用)**

- **parentNode属性获取当前节点的父节点,**这是W3C标准的,推荐使用

- **offsetParent属性获取到离当前元素最近的开启了定位(除去默认的static)的祖先元素**，如果所以的祖先元素都没有开启定位，则会返回body

- **previousSibling属性获取当前节点的前一个兄弟节点**
  **注意:**可能获取空白文本，如果两个元素中间有空白就会获取空白

- **previosElementSibling属性获取前一个元素，**IE8不支持

- **nextSibiling属性表示当前节点的后一个兄弟节点**

- **nextElementSibling获取后一个元素，**IE8不支持



#### 3.1.6 获取特殊元素节点



- 在document元素中有一个body属性,它保存的是对body元素的引用

  ```js
  var body=document.body
  ```

- 在document元素中有一个documentElement属性,它保存html标签的引用

  ```js
  var html=document.documentElement
  ```

- 在document元素中有一个all属性,该属性代表页面中所有元素(不建议使用)

  ```js
  var all=document.all;//它的值是undefined,但是却有长度数组的特性
  ```



**表格的简便操作**



- getElementsByTagName("tbody")[0]与tBodies[0]相同

- getElementsByTagName("thead")[0]与tHead相同

- getElementsByTagName("tfoot")[0]与tFoot相同

- getElementsByTagName("tr")[0]与rows[0]相同

- getElementsByTagName("td")[0]与cells[0]相同



### 3.2 创建或添加元素节点



- createElement()方法可以创建一个元素节点对象

  它需要一个标签名作为参数，将会根据该标签名创建元素节点对象，并将创建好的对象作为返回值返回

  注意:

  该方法由document使用

  ```js
  var oDiv=document.createElement("div");
  ```

- createTextNote()方法可以创建一个文本节点对象

  需要一个文本内容作为参数，将会根据该内容创建文本节点，并将新节点返回

  注意:

  该方法由document创建

  ```js
  var oTxt=document.createTextNote("123");
  ```

- **createElementFragment()方法**创建一个文档片段,

  可以向这个文档片段中添加一个个节点,然后直接将该文档片段加到要添加到的父元素中,该方法可以实现同时给页面加多个节点而只用渲染一次页面,所以如果要添加多个同级节点时最好使用这个来添加

  注意:

  放入文档片段的节点一定要是同级的片段

  ```js
  var box=document.createDocumentFragment();
  box.appendChild(p1);//创建的p元素节点
  box.appendChild(p2);
  document.body.appendChild(box);
  ```

- cloneNode()方法可以传入一个参数，克隆一个DOM节点，如果传入true则是把元素中的所有内容也一起克隆，如果传入的是false则会只克隆这一个DOM节点，不会将里面的内容也克隆

  (不传入参数默认为flase)

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Document</title>
    </head>
    <div>123</div>
    <body>
      <script>
          let Odiv = document.getElementsByTagName("div")[0];
          let cloneDiv = Odiv.cloneNode(false);
          let cloneDiv2= Odiv.cloneNode(true);
          console.log(cloneDiv);//<div></div>
          console.log(cloneDiv);//<div>123</div>
      </script>
    </body>
  </html>
  ```

- **appendChild()向父节点中添加一个新的子节点**，可以逐层添加子节点
  **注意:**

- - 该方法由父节点调用

- - 要添加子节点之前必须要先有这个子节点，没有就要先创建，并且新加的子节点会自动添加到所有子节点的最后面

    ```js
    var parent=document.getElementById("parent");
    var child=document.createElement("div");
    parent.appendChild(child);
    ```

- - 如果子节点不是新创建而是从原有父级节点上调用的,那么在用appenChild()方法时会先将原有父级节点上的该子节点删除

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <table>
      <tbody>
        <tr>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
        </tr>
      </tbody>
    </table>

    <script>
      var arr = [];
      var oTab = document.getElementsByTagName("table")[0];

      oTab.onclick = function() {
        for (var i = 0; i < oTab.tBodies[0].rows.length; i++) {
          arr[i] = oTab.tBodies[0].rows[i];
        }
        //arr = [...oTab.tBodies[0].rows];简写模式
          
        arr.sort(function(tr1, tr2) {
          var n1 = parseInt(tr1.cells[0].innerHTML);
          var n2 = parseInt(tr2.cells[0].innerHTML);
          return n1 - n2;
        });

        for (var i = 0; i < arr.length; i++) {
          oTab.tBodies[0].appendChild(arr[i]);//排序之后页面的结果为1 2 3
        }
      };
    </script>
  </body>
</html>
```

- **insertBefore()方法在指定的子节点前面插入子节点**
  **注意:**

- - 该方法由父节点调用,传入两个参数(新节点和旧节点),第一个参数必填,第二个参数可选

- - 要添加子节点之前必须要先有这个子节点，没有就要先创建，并且**如果没有传入第二个参数**会自动添加到所有子节点的最后面

- - 如果子节点不是新创建而是从原有父级节点上调用的,那么在用insertBefore()方法时会先将原有父级节点上的该子节点删除

```js
var parent=document.getElementById("parent");
var child=document.createElement("div");
parent.insertBefore(child,parent.childNotes[0]);//将新创建的元素插入的父元素内容最前面
```

- 使用innerHTML属性也可以完成DOM的增删改等操作

  可以给innerHTML属性赋值带有HTML标签的字符串实现操作,

  一般我们会将DOM查询和innerHTML属性两种方法同时使用

  ```js
  var parent=document.getElementById("parent"); 
  var child=document.createElement("div");
  
  child.innerHTML="123"；
  parent.appendChild(child);
  ```



### 3.3 替换或删除元素节点



- **replaceChild()方法可以使用指定的子节点替换已有的子节点**
  **注意:**

- - 该方法由父节点调用

- - 要替换子节点之前必须要先有这个新的子节点，没有就要先创建

- - 如果子节点不是新创建而是从原有父级节点上调用的,那么在用replace()方法时会先将原有父级节点上的该子节点删除

```js
var parent=document.getElementById("parent");
var child=var child=document.createElement("div");
parent.replaceChild(child,parent.children[0]);//替换父元素的第一个子元素
```

- **removeChild()方法可以用作删除一个子节点**

  注意:

  该方法由父节点调用

  ```js
  var parent=document.getElementById("parent");
  parent.removeChild(parent.children[0]);//删除父元素的第一个子元素
  ```



**注:上述的DOM查询方法可以混合搭配使用**



**如:**在不知道一个子节点的父节点的情况下删除该子节点



通过 **子节点.parentNode.removeChild(子节点)** 的方法就可以删除



### 3.4 遍历DOM元素



```js
/*
    第一个函数:功能函数,用来打印节点名称
    第二个函数:给根节点，找到所有子节点
    第三个函数:给子节点，把每个节点的名字显示出来
*/
function f1(node){
    console.log("节点的名字:"+node.nodeName);
}

function forDOM(root){
    //调用f1,显示节点的名字
    f1(root);
    //获取根节点中所有的子节点
    var children=root.children;
    //调用遍历所有子节点的函数
    forChildren(children);
}

//给该函数一个子节点,显示所有该子节点的子节点
function forChildren(children){
    //遍历所有的子节点
    for(var i=0;i<children.length;i++){
        //每个子节点
        var child=children[i];
        //显示每个子节点的名字
        f1(child);
        //判断child下面是否还有子节点,如果有继续遍历
        child.children&&forDOM(child);
    }
}
```

