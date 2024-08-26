#### 背景属性
* background-color
* background-image
```
    background-image: url('background.jpg');
```
* background-repeat
```
    background-repeat: no-repeat; /* 不重复 *
    background-repeat: repeat-x; /* 水平重复 *
    background-repeat: repeat-y; /* 垂直重复 *
```
* background-position
```
    background-position: center; /* 居中 *
    background-position: top right; /* 右上角 *
```
* background-size
```
    background-size: cover; /* 覆盖整个元素 */
    background-size: contain; /* 保持图像比例，适应元素 */
```
* background
```
简写属性，用于同时设置背景颜色、图像、重复方式、位置、大小等
background: lightblue url('background.jpg') no-repeat center/cover;
```