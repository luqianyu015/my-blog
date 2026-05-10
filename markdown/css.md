# CSS
## 重置代码
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
## CSS 三种引入方式
### 1. 行内样式（临时用）
```html
<p style="color:red; font-size:18px;">红色文字</p>
```

### 2. 内部样式（写在 html 里）
放在 `<head>` 里面
```html
<head>
  <style>
    p {
      color: #333;
    }
  </style>
</head>
```

### 3. 外部样式（做网站必用）
单独建 `css/style.css` 文件，所有页面共用
```html
<head>
  <link rel="stylesheet" href="/css/style.css">
</head>
```

## CSS 基础选择器
### 1. 标签选择器
直接选中所有同名标签
```css
body { }
p { }
h1 { }
div { }
a { }
```

### 2. 类选择器（最常用）
HTML 加 `class`，CSS 用 `.`
```html
<div class="box">内容</div>
```
```css
.box {
  width: 800px;
}
```

### 3. ID 选择器（只用一次）
```html
<div id="main"></div>
```
```css
#main {
  background: #f5f5f5;
}
```

## 核心：盒子模型
所有网页元素都是**盒子**
从内到外：
**内容 → padding → border → margin**

### 1. margin 外边距 和 padding 内边距
盒子和**外面**的距离

常用写法：
```css
margin:auto; 居中
margin-left:auto: 推到最右侧
margin: 上 右 下 左;
```

### 2. border 边框
```css
/* 粗细 线型 颜色 */
border: 1px solid #ccc;
```
线型常用：
- `solid` 实线
- `dashed` 虚线
- `dotted` 点线

只设下边框：
```css
border-bottom: 2px solid #666;
```

### 4. border-radius 圆角
```css
border-radius: 5px;    /* 小圆角 */
border-radius: 10px;   /* 大圆角 */
border-radius: 50%;    /* 圆形（头像专用） */
```

## 宽高设置
```css
/* 固定像素 */
width: 800px;
height: 300px;

/* 百分比（自适应） */
width: 90%;

/* 最大宽度，不会太宽 */
max-width: 1000px;
```

## 文字样式 全套
```css
/* 文字颜色 */
color: #333;

/* 字体大小 */
font-size: 16px;

/* 字体加粗 */
font-weight: bold;

/* 字体 */
font-family: "微软雅黑", sans-serif;

/* 行高（行距） */
line-height: 1.6;

/* 文字对齐 */
text-align: center;  /* 居中 */
text-align: left;    /* 左 */
text-align: right;   /* 右 */

/* 文字下划线 */
text-decoration: none; /* 去掉下划线 */
text-decoration: underline; /* 加下划线 */
```

## 背景样式
```css
/* 背景颜色 */
background-color: #f9f9f9;
background: #f0f0f0;

/* 背景图片 */
background: url(/image/bg.jpg);
background-repeat: no-repeat; /* 不重复 */
background-size: cover;       /* 铺满 */
```

## display 布局
```css
/*把当前元素变成一个 Flex 容器，它的直接子元素会自动变成「弹性项目」，可以通过 Flex 属性控制排列方式*/
display: flex;

align-items: flex-start;   /* 靠顶部 */
align-items: flex-end;     /* 靠底部 */
align-items: center;       /* 垂直居中 */
align-items: baseline;     /* 按文字基线对齐 */
align-items: stretch;      /* 默认值，拉伸填满高度 */

justify-content: flex-start;    /* 靠左边 */
justify-content: flex-end;      /* 靠右边 */
justify-content: center;        /* 水平居中 */
justify-content: space-between; /* 两端对齐，中间留空 */
justify-content: space-around;  /* 每个元素左右留相等的空白 */
justify-content: space-evenly;  /* 所有空白均匀分配 */

/* 块级：独占一行，可以设宽高、居中 */
display: block;

/* 行内：不换行，不能设宽高 */
display: inline;

/* 行内块：不换行，又能设宽高（做按钮、导航） */
display: inline-block;

/* 直接隐藏元素 */
display: none;
```

## 链接 a 伪类
鼠标放上去变色
```css
/* 默认状态 */
a {
  text-decoration: none;
  color: #222;
}
/* 鼠标悬浮 */
a:hover {
  color: #0066cc;
}
```

## 列表样式（导航栏必用）
```css
/* 去掉小圆点、默认左边距 */
ul {
  list-style: none;
  padding-left: 0;
}
```

