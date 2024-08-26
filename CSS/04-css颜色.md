#### 多种方式设置颜色的方式
 ```javascript
1. 颜色名称（Color Names）
使用预定义的颜色名称，如 red、blue、green 等。
    color: red;
    background-color: blue;

2. 十六进制颜色（Hexadecimal Colors）
使用十六进制值表示颜色，格式为 #RRGGBB 或 #RGB。
    color: #ff0000; /* 红色 */
    background-color: #00f; /* 蓝色 */

3. RGB 颜色（RGB Colors）
使用 rgb() 函数，通过红、绿、蓝三种颜色的值（0-255）设置颜色。

    color: rgb(255, 0, 0); /* 红色 */
    background-color: rgb(0, 0, 255); /* 蓝色 */

4. RGBA 颜色（RGBA Colors）
使用 rgba() 函数，除了红、绿、蓝三种颜色的值外，还可以设置透明度（0-1）。

    color: rgba(255, 0, 0, 0.5); /* 半透明红色 */
    background-color: rgba(0, 0, 255, 0.3); /* 半透明蓝色 */

5. HSL 颜色（HSL Colors）
使用 hsl() 函数，通过色相（0-360）、饱和度（0%-100%）和亮度（0%-100%）设置颜色。

    color: hsl(0, 100%, 50%); /* 红色 */
    background-color: hsl(240, 100%, 50%); /* 蓝色 */

6. HSLA 颜色（HSLA Colors）
使用 hsla() 函数，除了色相、饱和度和亮度外，还可以设置透明度（0-1）。

    color: hsla(0, 100%, 50%, 0.5); /* 半透明红色 */
    background-color: hsla(240, 100%, 50%, 0.3); /* 半透明蓝色 */

```