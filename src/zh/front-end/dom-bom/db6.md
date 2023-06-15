---
icon: infofill
category: Web前端
tags:
    - DOM
    - BOM
time: 2020-6-11
footer: 我和我最后的倔强，握紧双手绝对不放
title: 6.事件的冒泡(Bubble)
---

## 事件的冒泡(Bubble)



所谓的冒泡指的就是事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发，在开发中大部分情况冒泡都是有用的，如果不希望发生事件冒泡，可以通过事件对象来取消冒泡，可以通过设置`event.cancelBubble=true`来取消冒泡，这个需要**设置在子元素的事件中**，并且大多数都是设置的可以冒泡，除了某些函数默认不冒泡



**如果在父元素里面设置了一个事件,而在子元素中也有相同的事件,不想要父元素的事件在子元素的范围内出现时，可以通过多种方式设置取消冒泡**



**1.event.cancelBubble=true(低版本IE都通过该方法)**



**2.因为这是默认行为，所以也可以直接在事件函数返回flase即可(return flase)**



**注意:**这种方法阻止默认行为只能够阻止通过onclick等绑定的事件,不能阻止通过addEventListener()等绑定的事件



**3.通过event.stopPropagation()来阻止事件冒泡，但是不会阻止默认行为(低版本IE不兼容),低版本IE用event.returnValue=false**



**4.通过event.preventDefault()阻止默认行为来阻止冒泡**



**兼容写法**



```js
if(event.stopPropagation){
    event.stopPropagation();
}else{
    event.cancelBubble=true;//或event.returnValue=false;
}
```

