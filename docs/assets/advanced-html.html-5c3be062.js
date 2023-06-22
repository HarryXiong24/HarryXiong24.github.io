const l=JSON.parse('{"key":"v-dc3c55de","path":"/zh/front-end/html-css/advanced-html.html","title":"HTML进阶","lang":"zh-CN","frontmatter":{"icon":"html","category":"Web前端","tags":["HTML进阶","SVG","Canvas","布局适配"],"time":"2020-6-9","description":"[[toc]] 1.拖拽 拖拽事件需要在需要拖拽的元素上设置draggable=true来让该元素可以被拖拽 1.1 主要事件 dragstart:当用户开始拖动元素或者拖动选中文本时触发，应用在被拖拽元素上; drag:当元素或者选中的文本被拖动时触发（每几百毫秒触发一次），应用在被拖拽元素上; dragend:当拖动操作结束时触发（通过释放鼠标按钮...","head":[["meta",{"property":"og:url","content":"https://harryxiong24.github.io/zh/front-end/html-css/advanced-html.html"}],["meta",{"property":"og:site_name","content":"Harry Xiong"}],["meta",{"property":"og:title","content":"HTML进阶"}],["meta",{"property":"og:description","content":"[[toc]] 1.拖拽 拖拽事件需要在需要拖拽的元素上设置draggable=true来让该元素可以被拖拽 1.1 主要事件 dragstart:当用户开始拖动元素或者拖动选中文本时触发，应用在被拖拽元素上; drag:当元素或者选中的文本被拖动时触发（每几百毫秒触发一次），应用在被拖拽元素上; dragend:当拖动操作结束时触发（通过释放鼠标按钮..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-15T10:30:18.000Z"}],["meta",{"property":"article:author","content":"Harry Xiong"}],["meta",{"property":"article:tag","content":"HTML进阶"}],["meta",{"property":"article:tag","content":"SVG"}],["meta",{"property":"article:tag","content":"Canvas"}],["meta",{"property":"article:tag","content":"布局适配"}],["meta",{"property":"article:published_time","content":"2020-06-08T16:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-15T10:30:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTML进阶\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-06-08T16:00:00.000Z\\",\\"dateModified\\":\\"2023-06-15T10:30:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Harry Xiong\\",\\"url\\":\\"https://harryxiong24.github.io\\"}]}"]]},"headers":[{"level":2,"title":"1.拖拽","slug":"_1-拖拽","link":"#_1-拖拽","children":[{"level":3,"title":"1.1 主要事件","slug":"_1-1-主要事件","link":"#_1-1-主要事件","children":[]},{"level":3,"title":"1.2 注意事项及兼容问题","slug":"_1-2-注意事项及兼容问题","link":"#_1-2-注意事项及兼容问题","children":[]},{"level":3,"title":"1.3 案例-将外部文件拖入盒子中","slug":"_1-3-案例-将外部文件拖入盒子中","link":"#_1-3-案例-将外部文件拖入盒子中","children":[]},{"level":3,"title":"1.4 dataTransfer","slug":"_1-4-datatransfer","link":"#_1-4-datatransfer","children":[]}]},{"level":2,"title":"2.Blob","slug":"_2-blob","link":"#_2-blob","children":[{"level":3,"title":"2.1 Bolb构造函数","slug":"_2-1-bolb构造函数","link":"#_2-1-bolb构造函数","children":[]},{"level":3,"title":"2.2 Bolb对象的slice方法","slug":"_2-2-bolb对象的slice方法","link":"#_2-2-bolb对象的slice方法","children":[]},{"level":3,"title":"2.3 对象URL","slug":"_2-3-对象url","link":"#_2-3-对象url","children":[]},{"level":3,"title":"2.4 案例-使用Bolb和对象URL下载文件","slug":"_2-4-案例-使用bolb和对象url下载文件","link":"#_2-4-案例-使用bolb和对象url下载文件","children":[]},{"level":3,"title":"2.5 加密","slug":"_2-5-加密","link":"#_2-5-加密","children":[]}]},{"level":2,"title":"3.attribute和property","slug":"_3-attribute和property","link":"#_3-attribute和property","children":[{"level":3,"title":"3.1 布尔值属性与非布尔值属性","slug":"_3-1-布尔值属性与非布尔值属性","link":"#_3-1-布尔值属性与非布尔值属性","children":[]}]},{"level":2,"title":"4.Canvas","slug":"_4-canvas","link":"#_4-canvas","children":[{"level":3,"title":"4.1 什么是Canvas?","slug":"_4-1-什么是canvas","link":"#_4-1-什么是canvas","children":[]},{"level":3,"title":"4.2 画布API","slug":"_4-2-画布api","link":"#_4-2-画布api","children":[]},{"level":3,"title":"4.3 绘制矩形","slug":"_4-3-绘制矩形","link":"#_4-3-绘制矩形","children":[]},{"level":3,"title":"4.4 绘制路径","slug":"_4-4-绘制路径","link":"#_4-4-绘制路径","children":[]},{"level":3,"title":"4.5 变换","slug":"_4-5-变换","link":"#_4-5-变换","children":[]},{"level":3,"title":"4.6 图片操作","slug":"_4-6-图片操作","link":"#_4-6-图片操作","children":[]},{"level":3,"title":"4.7 设置渐变","slug":"_4-7-设置渐变","link":"#_4-7-设置渐变","children":[]},{"level":3,"title":"4.8 绘制文本","slug":"_4-8-绘制文本","link":"#_4-8-绘制文本","children":[]},{"level":3,"title":"4.9 像素操作","slug":"_4-9-像素操作","link":"#_4-9-像素操作","children":[]},{"level":3,"title":"4.10 合成","slug":"_4-10-合成","link":"#_4-10-合成","children":[]},{"level":3,"title":"4.11 导出与事件操作","slug":"_4-11-导出与事件操作","link":"#_4-11-导出与事件操作","children":[]}]},{"level":2,"title":"5.SVG","slug":"_5-svg","link":"#_5-svg","children":[{"level":3,"title":"5.1 SVG与Canvas的区别","slug":"_5-1-svg与canvas的区别","link":"#_5-1-svg与canvas的区别","children":[]},{"level":3,"title":"5.2 引入SVG","slug":"_5-2-引入svg","link":"#_5-2-引入svg","children":[]},{"level":3,"title":"5.3 基本图形","slug":"_5-3-基本图形","link":"#_5-3-基本图形","children":[]},{"level":3,"title":"5.4 其余标签","slug":"_5-4-其余标签","link":"#_5-4-其余标签","children":[]},{"level":3,"title":"5.5 渐变","slug":"_5-5-渐变","link":"#_5-5-渐变","children":[]},{"level":3,"title":"5.6 使用JS创建SVG","slug":"_5-6-使用js创建svg","link":"#_5-6-使用js创建svg","children":[]},{"level":3,"title":"5.7 SVG动画","slug":"_5-7-svg动画","link":"#_5-7-svg动画","children":[]}]},{"level":2,"title":"6.Audio与Video","slug":"_6-audio与video","link":"#_6-audio与video","children":[{"level":3,"title":"6.1 容器","slug":"_6-1-容器","link":"#_6-1-容器","children":[]},{"level":3,"title":"6.2 兼容","slug":"_6-2-兼容","link":"#_6-2-兼容","children":[]},{"level":3,"title":"6.3 音视频的attribute","slug":"_6-3-音视频的attribute","link":"#_6-3-音视频的attribute","children":[]},{"level":3,"title":"6.4 音视频的property","slug":"_6-4-音视频的property","link":"#_6-4-音视频的property","children":[]},{"level":3,"title":"6.5 音视频相关事件及函数","slug":"_6-5-音视频相关事件及函数","link":"#_6-5-音视频相关事件及函数","children":[]},{"level":3,"title":"6.6 视频与canvas结合","slug":"_6-6-视频与canvas结合","link":"#_6-6-视频与canvas结合","children":[]}]},{"level":2,"title":"7.表单验证","slug":"_7-表单验证","link":"#_7-表单验证","children":[]},{"level":2,"title":"8.地理信息","slug":"_8-地理信息","link":"#_8-地理信息","children":[{"level":3,"title":"8.1 位置信息来源","slug":"_8-1-位置信息来源","link":"#_8-1-位置信息来源","children":[]}]},{"level":2,"title":"9.Worker与EventSource","slug":"_9-worker与eventsource","link":"#_9-worker与eventsource","children":[{"level":3,"title":"9.1 Worker","slug":"_9-1-worker","link":"#_9-1-worker","children":[]},{"level":3,"title":"9.2 EventSource","slug":"_9-2-eventsource","link":"#_9-2-eventsource","children":[]}]},{"level":2,"title":"10.离线存储和跨文档请求","slug":"_10-离线存储和跨文档请求","link":"#_10-离线存储和跨文档请求","children":[{"level":3,"title":"10.1 离线存储","slug":"_10-1-离线存储","link":"#_10-1-离线存储","children":[]},{"level":3,"title":"10.2 跨文档请求","slug":"_10-2-跨文档请求","link":"#_10-2-跨文档请求","children":[]}]},{"level":2,"title":"11.移动端事件","slug":"_11-移动端事件","link":"#_11-移动端事件","children":[{"level":3,"title":"11.1 基础事件","slug":"_11-1-基础事件","link":"#_11-1-基础事件","children":[]},{"level":3,"title":"11.2 注意事项","slug":"_11-2-注意事项","link":"#_11-2-注意事项","children":[]},{"level":3,"title":"11.3 获取手指信息","slug":"_11-3-获取手指信息","link":"#_11-3-获取手指信息","children":[]}]},{"level":2,"title":"12.移动端适配","slug":"_12-移动端适配","link":"#_12-移动端适配","children":[{"level":3,"title":"12.1 固定高度,宽度百分比","slug":"_12-1-固定高度-宽度百分比","link":"#_12-1-固定高度-宽度百分比","children":[]},{"level":3,"title":"12.2 固定宽度,改变缩放比例","slug":"_12-2-固定宽度-改变缩放比例","link":"#_12-2-固定宽度-改变缩放比例","children":[]},{"level":3,"title":"12.3 rem适配","slug":"_12-3-rem适配","link":"#_12-3-rem适配","children":[]},{"level":3,"title":"12.4 像素比适配","slug":"_12-4-像素比适配","link":"#_12-4-像素比适配","children":[]},{"level":3,"title":"12.5 横竖屏切换","slug":"_12-5-横竖屏切换","link":"#_12-5-横竖屏切换","children":[]}]}],"git":{"createdTime":1686825018000,"updatedTime":1686825018000,"contributors":[{"name":"harryxiong24","email":"harryxiong24@gmail.com","commits":1}]},"readingTime":{"minutes":67.78,"words":20334},"filePathRelative":"zh/front-end/html-css/advanced-html.md","localizedDate":"2023年6月15日","excerpt":"","autoDesc":true}');export{l as data};