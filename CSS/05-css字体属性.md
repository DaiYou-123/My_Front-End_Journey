#### CSS字体属性
 ```javascript
1. font-family
    font-family: "Arial", sans-serif;
2. font-size
    font-size: 16px;
3. font-weight
    font-weight: bold; /* 或 400, 700 等数值 */
    lighter ：细
    normal ： 正常
    bold ：粗

    1. 100~1000 且无单位，数值越大，字体越粗 （或一样粗，具体得看字体设计时的
    精确程度）。
    2. 100~300 等同于 lighter ， 400~500 等同于 normal ， 600 及以上等同于
    bold 。

4. font-style
作用：设置文本的字体样式（如斜体）。
    font-style: italic;
5. font-variant
作用：设置文本的小型大写字母（small-caps）。
    font-variant: small-caps;
6. line-height
作用：设置文本的行高。
    line-height: 1.5;

    对于单行文字：让 height 等于 line-height ，可以实现文字垂直居中。

7. letter-spacing
作用：设置文本字符之间的间距。
    letter-spacing: 2px;
8. text-transform
作用：控制文本的大小写转换。
    text-transform: uppercase;
9. text-align
作用：设置文本的对齐方式。
    text-align: center;
10. font
作用：简写属性，用于同时设置字体样式、字体变体、字体粗细、字体大小、行高和字体系列。
    font: italic small-caps bold 16px/1.5 "Arial", sans-serif;

11.vertical-align
作用：用于指定同一行元素之间，或 表格单元格 内文字的 垂直对齐方式。
    1. baseline （默认值）：使元素的基线与父元素的基线对齐。
    2. top ：使元素的顶部与其所在行的顶部对齐。
    3. middle ：使元素的中部与父元素的基线加上父元素字母 x 的一半对齐。
    4. bottom ：使元素的底部与其所在行的底部对齐。
```