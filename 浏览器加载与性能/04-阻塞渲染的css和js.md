* 阻塞渲染的 CSS
```javascript
    CSS 是一种阻塞渲染的资源。应尽快将其分发给客户端，以缩短首次呈现网页所需的时间。
    可以通过媒体查询来决定是否阻塞渲染。
        <link href="style.css" rel="stylesheet" />
        <link href="print.css" rel="stylesheet" media="print" />
        <link href="other.css" rel="stylesheet" media="(min-width: 40em)" />
    例如，第一个样式表声明不提供媒体类型或查询，因此它适用于所有情况；也就是说，它始终会阻塞渲染。
    第二个样式表示，只在打印时使用，此样式的声明将标记不需要在页面首次加载时阻止渲染。
    第三个表示，符合浏览器条件（也就是窗口小于视口40%时），浏览器将阻塞渲染。
```
* 阻塞渲染的 javascript
  ```javascript
      JavaScript 也会阻止 DOM 构建和延迟网页渲染，最好让JavaScript 异步执行，并去除关键渲染路径中任何不必要的 JavaScript
    #当 HTML 解析器遇到一个脚本标记时，它会暂停构建 DOM 的过程，并将控制权移交给 JavaScript 引擎；在 JavaScript 引擎运行完毕后，浏览器会从上次停止的位置继续进行 DOM 构建

    #如果运行脚本时，浏览器还没有完成 CSSOM 的下载和构建，浏览器会延迟脚本执行和 DOM 构建，直到完成 CSSOM 的下载和构建为止

    #脚本在文档中的位置非常重要（放最后，不然Dom和CSSom树都还没有构建完毕的话，会显示找不到节点，运行失败）

    #将 async / defer 关键字添加到脚本标记中可指示浏览器在等待脚本可用期间不要阻止 DOM 构建，这样可以显著提升性能。
         <script src="app.js" async></script>
    这行代码表示：不需要当程序实践上运行到这里之后再执行这行代码，浏览器可以一直执行构建DOM，当这个脚本准备就绪时，执行。
  
  ```