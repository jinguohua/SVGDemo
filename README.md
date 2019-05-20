(```)
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
    </svg>
(```)
### SVG 代码以 <svg> 元素开始，包括开启标签 <svg> 和关闭标签 </svg> 。这是根元素。width 和 height 属性可设置此 SVG 文档的宽度和高度。version 属性可     定义所使用的 SVG 版本，xmlns 属性可定义 SVG 命名空间

### SVG 的 <circle> 用来创建一个圆。cx 和 cy 属性定义圆中心的 x 和 y 坐标。如果忽略这两个属性，那么圆点会被设置为 (0, 0)。r 属性定义圆的半径。stroke       和 stroke-width 属性控制如何显示形状的轮廓。我们把圆的轮廓设置为 2px 宽，黑边框。fill 属性设置形状内的颜色。我们把填充颜色设置为红色

----
矩形 <rect>
圆形 <circle>
椭圆 <ellipse>
线 <line>
折线 <polyline>
多边形 <polygon>
路径 <path>

----
## 矩形
### rx 和 ry 属性可使矩形产生圆角。
(```)
<svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" rx="20" ry="20" width="250"
    height="100" style="fill:red;stroke:black;
    stroke-width:5;opacity:0.5"/>

</svg>
(```)

## 椭圆
### rx 和 ry 属性可使矩形产生圆角。
### cx 属性定义圆点的 x 坐标  ,cy 属性定义圆点的 y 坐标

(```)
    <svg width="100%" height="100%" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="300" cy="150" rx="200" ry="80"
        style="fill:rgb(200,100,50);
        stroke:rgb(0,0,100);stroke-width:2"/>
</svg>

(```)

### 两个椭圆  重贴在一起，形成一个环
(```)
    <svg width="100%" height="100%" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="240" cy="100" rx="220" ry="30"
        style="fill:yellow"/>
        <ellipse cx="220" cy="100" rx="190" ry="20"
        style="fill:white"/>
    </svg>
(```)


##  直线
### x1 属性在 x 轴定义线条的开始
### y1 属性在 y 轴定义线条的开始
### x2 属性在 x 轴定义线条的结束
### y2 属性在 y 轴定义线条的结束

(```)
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="300" y2="300" style="stroke:rgb(99,99,99);stroke-width:2"/>
    </svg>

(```)

## 多边形
### points 属性定义多边形每个角的 x 和 y 坐标
(```)
    <svg width="100%" height="100%" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="220,100 300,210 170,250"
        style="fill:#cccccc;
        stroke:#000000;stroke-width:1"/>
    </svg>
(```)

## 直线组成的图形
### points 属性定义多边形每个角的 x 和 y 坐标
(```)
    <svg width="100%" height="100%" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <polyline points="0,0 0,20 20,20 20,40 40,40 40,60"
        style="fill:white;stroke:red;stroke-width:5"/>
    </svg>
(```)

## SVG 编辑器  https://www.cnblogs.com/timxgb/p/5176555.html
(```)
<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">
    <path d="M153 334
        C153 334 151 334 151 334
        C151 339 153 344 156 344
        C164 344 171 339 171 334
        C171 322 164 314 156 314
        C142 314 131 322 131 334
        C131 350 142 364 156 364
        C175 364 191 350 191 334
        C191 311 175 294 156 294
        C131 294 111 311 111 334
        C111 361 131 384 156 384
        C186 384 211 361 211 334
        C211 300 186 274 156 274"
        style="fill:white;stroke:red;stroke-width:2"/>
</svg>

(```)


## 高斯模糊（Gaussian Blur
### <filter> 标签用来定义 SVG 滤镜。<filter> 标签使用必需的 id 属性来定义向图形应用哪个滤镜？<filter> 标签必须嵌套在 <defs> 标签内。<defs> 标签是 definitions 的缩写，它允许对诸如滤镜等特殊元素进行定义。
###<filter> 标签的 id 属性可为滤镜定义一个唯一的名称（同一滤镜可被文档中的多个元素使用）
###filter:url 属性用来把元素链接到滤镜。当链接滤镜 id 时，必须使用 # 字符
###滤镜效果是通过 <feGaussianBlur> 标签进行定义的。fe 后缀可用于所有的滤镜
###<feGaussianBlur> 标签的 stdDeviation 属性可定义模糊的程度
###in="SourceGraphic" 这个部分定义了由整个图像创建效果

(```)
    <svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
        <filter id="Gaussian_Blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
    </defs>
    <ellipse cx="200" cy="150" rx="70" ry="40"
        style="fill:#ff0000;stroke:#000000;
        stroke-width:2;filter:url(#Gaussian_Blur)"/>
</svg>

(```)

## SVG 渐变 
###渐变是一种从一种颜色到另一种颜色的平滑过渡。另外，可以把多个颜色的过渡应用到同一个元素上。
###在 SVG 中，有两种主要的渐变类型：
####线性渐变
####放射性渐变

###<linearGradient> 可用来定义 SVG 的线性渐变。
###<linearGradient> 标签必须嵌套在 <defs> 的内部。<defs> 标签是 definitions 的缩写，它可对诸如渐变之类的特殊元素进行定义。
###线性渐变可被定义为水平、垂直或角形的渐变：
###当 y1 和 y2 相等，而 x1 和 x2 不同时，可创建水平渐变
###当 x1 和 x2 相等，而 y1 和 y2 不同时，可创建垂直渐变
###当 x1 和 x2 不同，且 y1 和 y2 不同时，可创建角形渐变


###<linearGradient> 标签的 id 属性可为渐变定义一个唯一的名称
###fill:url(#orange_red) 属性把 ellipse 元素链接到此渐变
###<linearGradient> 标签的 x1、x2、y1、y2 属性可定义渐变的开始和结束位置
###渐变的颜色范围可由两种或多种颜色组成。每种颜色通过一个 <stop> 标签来规定。offset 属性用来定义渐变的开始和结束位置。



(```)
<svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(255,255,0);
            stop-opacity:1"/>
            <stop offset="100%" style="stop-color:rgb(255,0,0);
            stop-opacity:1"/>
        </linearGradient>
    </defs>
    <ellipse cx="200" cy="190" rx="85" ry="55"
    style="fill:url(#orange_red)"/>
</svg>

(```)



## 在svg 中使用超链接

### 使用超链接svg 中，最好使用 embed 标签，其他标签可能无法正确显示链接


(```)
<svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <a xlink:href="http://www.w3schools.com" target="_blank">
        <rect x="2" y="5" width="100" height="100"
        style="fill:blue;stroke:pink;stroke-width:5;opacity:0.9"/>
    </a>
</svg>

(```)


