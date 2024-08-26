#### @media 规则用于定义不同媒体类型和条件下的样式
  通过 @media 规则，可以根据设备的特性（如屏幕宽度、高度、分辨率等）应用不同的样式，从而实现响应式设计

* 根据屏幕宽度设置样式
```
/* 当屏幕宽度小于600px时，应用以下样式 */
@media (max-width: 600px) {
body {
    background-color: lightblue;
}
}
```
* 根据屏幕高度设置样式：
```
/* 当屏幕高度大于800px时，应用以下样式 */
@media (min-height: 800px) {
  body {
    background-color: lightgreen;
  }
}
```
* 根据设备类型设置样式：
```
/* 仅在打印时应用以下样式 */
@media print {
  body {
    font-size: 12pt;
  }
}
```
* 组合条件
```
/* 当屏幕宽度在600px到1200px之间，并且屏幕方向为横向时，应用以下样式 */
@media (min-width: 600px) and (max-width: 1200px) and (orientation: landscape) {
  body {
    background-color: lightcoral;
  }
}
```
* 颜色 color：@media (min-color: 2) { ... }
