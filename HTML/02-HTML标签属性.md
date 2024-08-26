###### HTML 标签属性（用于给标签提供额外信息，比如大小、颜色等）

注意点：
1. 不同的标签，有不同的属性；也有一些通用属性（在任何标签内都能写）。
2. 属性名、属性值不能乱写，都是W3C规定好的。
3. 属性名、属性值，都不区分大小写，但推荐小写。
4. 双引号，也可以写成单引号，甚至不写都行，但还是推荐写双引号。
5. 标签中不要出现同名属性，否则后写的会失效

##### HTML 标准格式
``` javascript
        <!DOCTYPE html><!--声明网页版本 html 5-->>
        <html lang="zh-CN"> <!-html为HTML文档的根元素。zh-cn-声明所用语言-->> 语言-国家/地区
            
            <head>
                <meta charset="UTF-8"><!-meta元数据-声明编码格式-->>（默认编码）编码错误问题很大
                <title> 网页</title>  // <title>是一个标记，网页是所写的内容，整个东西被称为一个元素
            </head>
            <body>
        
            </body>
        </html>
        
        UTF-8 ：包含世界上所有语言的：所有文字与符号。—— 很常用
        zh-CN ：中文-中国大陆（简体中文） 
        zh-TW ：中文-中国台湾（繁体中文） 
        zh ：中文 
        en-US ：英语-美国 
        en-GB ：英语-英国
        W3School 上的说明：《语言代码参考手册》、《国家/地区代码参考手册》 
        W3C官网上的说明：《Language tags in HTML》 
  ```  
#####  meta 元信息
``` javascript
1. 配置字符编码
   <meta charset="utf-8">
2. 针对 IE 浏览器的兼容性配置。
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
3. 针对移动端的配置
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
4. 配置网页关键字
    <meta name="keywords" content="8-12个以英文逗号隔开的单词/词语">
5. 配置网页描述信息  
    <meta name="description" content="80字以内的一段话，与网站内容相关">
6. 针对搜索引擎爬虫配置：
<meta name="robots" content="此处可选值见下">
    index 允许搜索爬虫索引此页面。
    noindex 要求搜索爬虫不索引此页面。
    follow 允许搜索爬虫跟随此页面上的链接。
    nofollow 要求搜索爬虫不跟随此页面上的链接。
    all 与 index, follow 等价
    none 与 noindex, nofollow 等价
    noarchive 要求搜索引擎不缓存页面内容。
    nocache noarchive 的替代名称。

7. 配置网页作者：
<meta name="author" content="tony">
8. 配置网页生成工具
<meta name="generator" content="Visual Studio Code">
9.  配置定义网页版权信息：
<meta name="copyright" content="2023-2027©版权所有">
10. 配置网页自动刷新
<meta http-equiv="refresh" content="10;url=http://www.baidu.com">