---
category: Web 前端
tag:
    - DOM
    - BOM
date: 2020-06-11
title: 7. 事件的委派
---

## 事件的委派



事件的委派指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件,事件委派是利用了冒泡，通过委派可以事件绑定的次数，提高程序的性能



**例子:**



为每一个超链接都绑定一个单击响应函数，这里我们为每一个超链接都绑定了一个单击响应函数，这种中操作比较麻烦，而且这些操作只能为已有的超链接设置事件，而新添加超链接必须重新绑定



```js
var a=document.getElementByTagName("a");
for(var i=0;i<a.length;i++){
    a[i].onclick=function(){
        alert(123);
    }
}
```



我们希望，只绑定一次事件，即可应用到多个元素上，即使元素是后添加的，我们可以尝试将其绑定给元素的共同的祖先元素



```js
//假设所以的a元素都是由一个父元素包裹
var parent=document.getElementById("parent");
parent.onclick=function(){
    alert(123);
}
```



但是这个例子需要判断如果触发的对象是我们期望的元素,就执行该代码,否则不执行,因为如果点击的是a元素之外的其它地方就不触发弹窗效果,这个时候需要使用target 事件对象中的event中的target表示的触发事件的对象



```js
parent.onclick=function(event){
    event=event||window.event;
    if(event.target.nodeName==="A"){//nodeName返回的标签名全大写
        alert(123);   
    }
}
```

