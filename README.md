### 重要知识点  viewbox ,preserveAspectRatio,getSvgDocument ,

####viewBox='-200.5,-200.5,400,400'
```
<svg 
    id='svg'
    version="1.1"
    xmlns="http://www.w3.org/2000/svg" 
    fill='grey'
    >
    <script>
        const svg= document.getElementById('svg');
        const width='400',height='400',vWidth=-0.5*width+0.5,vheight=-0.5*height+.5,
        arg=10,viewBox = [vWidth ,vheight, width ,height];
        let pathCir = ['M'+0.2*width,0];
        svg.setAttribute('viewBox',viewBox);
        svg.setAttribute('width',width);
        svg.setAttribute('height',height);
        svg.addEventListener('load',()=>{
            document.getElementById('drewCircle').setAttribute('d',pathCir);
        })
        var lastTime = new Date();
        function update (){
            var newTime = new Date() ;
            var time = newTime-lastTime;
            <!-- lastTime = newTime; -->
            x = Math.sin(2*Math.PI / 360*arg) * 0.2*height;
            y = Math.cos(2*Math.PI / 360*arg) * 0.2*height;
            pathCir.push('A'+0.2*width,0.2*height,0.2,1,1,x,y) 
            window.requestAnimationFrame(update);
        }
        setInterval(update(),300)
    </script>
        fill="none" stroke="blue" stroke-width="2" >
        <text id="TextElement" x="-200" y="0" style="font-family:Verdana;font-size:24;color:#f7eeee">-200
        </text>
        <text id="TextElement" x="0" y="0" style="font-family:Verdana;font-size:24;color:#f7eeee">0
        </text>
        <text id="TextElement" x="150" y="0" style="font-family:Verdana;font-size:24;color:#f7eeee">200
        </text>
        <text id="TextElement" y="-180" x="0" style="font-family:Verdana;font-size:24;color:#f7eeee">-200
        </text>
        <text id="TextElement" y="190" x="0" style="font-family:Verdana;font-size:24;color:#f7eeee">200
        </text>
        <line x1="-200" y1="0" x2="400" y2="0" style="stroke:rgb(99,99,99);stroke-width:1"/>
        <line y1="-200" x1="0" y2="400" x2="0" style="stroke:rgb(99,99,99);stroke-width:1"/>
        <g id='circle'>
        <path id='drewCircle' 
            stroke="blue" 
            stroke-width="2"
            fill="#fff"
        >
        </path>
    </g>
</svg>
```

### css: 


####详解 viewbox
```
<svg 
    id='svg'
    width="200" 
    height="200" 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg" 
    fill='grey'
    >
    <script>
        const svg= document.getElementById('svg');
        const width='400',height='400',vWidth=-0.5*width+0.5,vheight=-0.5*height+.5,
        viewBox = [vWidth ,vheight, width ,height]
        svg.setAttribute('viewBox',viewBox);
        svg.setAttribute('width',width);
         svg.setAttribute('height',height);
        svg.addEventListener('load',()=>{
        
        })
    </script>
        fill="none" stroke="blue" stroke-width="2" >
        <text id="TextElement" x="-200" y="0" style="font-family:Verdana;font-size:24;color:#f7eeee">-200
        </text>
        <text id="TextElement" x="0" y="0" style="font-family:Verdana;font-size:24;color:#f7eeee">0
        </text>
        <text id="TextElement" x="150" y="0" style="font-family:Verdana;font-size:24;color:#f7eeee">200
        </text>

        <text id="TextElement" y="-180" x="0" style="font-family:Verdana;font-size:24;color:#f7eeee">-200
        </text>
      
        <text id="TextElement" y="190" x="0" style="font-family:Verdana;font-size:24;color:#f7eeee">200
        </text>


        <line x1="-200" y1="0" x2="400" y2="0" style="stroke:rgb(99,99,99);stroke-width:1"/>
        <line y1="-200" x1="0" y2="400" x2="0" style="stroke:rgb(99,99,99);stroke-width:1"/>
       
        <g id='circle'>
        <path id='drewCircle'>
        </path>
   
    </g>
   
</svg>

```

```
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
    </svg>
```
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
```
<svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" rx="20" ry="20" width="250"
    height="100" style="fill:red;stroke:black;
    stroke-width:5;opacity:0.5"/>

</svg>
```

## 椭圆
### rx 和 ry 属性可使矩形产生圆角。
### cx 属性定义圆点的 x 坐标  ,cy 属性定义圆点的 y 坐标

```
    <svg width="100%" height="100%" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="300" cy="150" rx="200" ry="80"
        style="fill:rgb(200,100,50);
        stroke:rgb(0,0,100);stroke-width:2"/>
    </svg>

```

### 两个椭圆  重贴在一起，形成一个环
```
    <svg width="100%" height="100%" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="240" cy="100" rx="220" ry="30"
        style="fill:yellow"/>
        <ellipse cx="220" cy="100" rx="190" ry="20"
        style="fill:white"/>
    </svg>
```


##  直线
### x1 属性在 x 轴定义线条的开始
### y1 属性在 y 轴定义线条的开始
### x2 属性在 x 轴定义线条的结束
### y2 属性在 y 轴定义线条的结束

```
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="300" y2="300" style="stroke:rgb(99,99,99);stroke-width:2"/>
    </svg>

```

## 多边形
### points 属性定义多边形每个角的 x 和 y 坐标
```
    <svg width="100%" height="100%" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="220,100 300,210 170,250"
        style="fill:#cccccc;
        stroke:#000000;stroke-width:1"/>
    </svg>
```

## 直线组成的图形
### points 属性定义多边形每个角的 x 和 y 坐标
```
    <svg width="100%" height="100%" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <polyline points="0,0 0,20 20,20 20,40 40,40 40,60"
        style="fill:white;stroke:red;stroke-width:5"/>
    </svg>
```

## SVG 编辑器  https://www.cnblogs.com/timxgb/p/5176555.html
----
### path 
#### 对各个属性的解释：https://www.cnblogs.com/guxuelong/p/7743736.html

#### 详细讲解 C 三次方贝塞尔曲线 https://www.cnblogs.com/yjstonestar/p/5003715.html

##### M = moveto
##### L = lineto
##### H = horizontal lineto
##### V = vertical lineto
##### C = curveto
##### S = smooth curveto
##### Q = quadratic Belzier curve
##### T = smooth quadratic Belzier curveto
##### A = elliptical Arc
##### Z = closepath

```
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

```


## 高斯模糊（Gaussian Blur
### <filter> 标签用来定义 SVG 滤镜。<filter> 标签使用必需的 id 属性来定义向图形应用哪个滤镜？<filter> 标签必须嵌套在 <defs> 标签内。<defs> 标签是 definitions 的缩写，它允许对诸如滤镜等特殊元素进行定义。
###<filter> 标签的 id 属性可为滤镜定义一个唯一的名称（同一滤镜可被文档中的多个元素使用）
###filter:url 属性用来把元素链接到滤镜。当链接滤镜 id 时，必须使用 # 字符
###滤镜效果是通过 <feGaussianBlur> 标签进行定义的。fe 后缀可用于所有的滤镜
###<feGaussianBlur> 标签的 stdDeviation 属性可定义模糊的程度
###in="SourceGraphic" 这个部分定义了由整个图像创建效果

```
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

```

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



```
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

```
```
<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

    <defs>
        <radialGradient id="grey_blue" cx="50%" cy="50%" r="50%"
        fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:rgb(200,200,200);
            stop-opacity:0"/>
            <stop offset="120%" style="stop-color:rgb(0,0,255);
            stop-opacity:1"/>
        </radialGradient>
    </defs>

    <ellipse cx="50" cy="40" rx="50" ry="40"
    style="fill:url(#grey_blue)"/>

</svg>

```
## 在svg 中使用超链接

### 使用超链接svg 中，最好使用 embed 标签，其他标签可能无法正确显示链接


```
<svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <a xlink:href="http://www.w3schools.com" target="_blank">
        <rect x="2" y="5" width="100" height="100"
        style="fill:blue;stroke:pink;stroke-width:5;opacity:0.9"/>
    </a>
</svg>

```

## svg 中使用动画
### attributeType="XML|CSS|auto" 
####  attributeName="opacity" attributeType="CSS"  from="1" to="0" dur="5s" 
####  attributeName="x" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="300" to="0"
####  attributeName="y" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="100" to="0"
####  attributeName="width" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="300" to="800"
####  attributeName="height" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="100" to="300"   ---> `<animate />`
####  attributeName="fill" attributeType="CSS" from="lime" to="red" begin="2s" dur="4s" fill="freeze"    ---> `<animateColor />`
####  <animateMotion path="M 0 0 L 100 100" dur="5s" fill="freeze"/>               --->  `<animateMotion />`

#####  fill的两个属性.freeze：动画结束以后，动画保持最后状态。.remove：动画结束之后，恢复到初始状态。
```
<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

    <rect x="20" y="20" width="100" height="100" style="fill:blue">
    <animate attributeType="CSS" attributeName="opacity" 
    from="1" to="0" dur="5s" repeatCount="indefinite" />
    </rect>

</svg>
```
###尽管SVG定义了"animateColor"，但是它已经被弃用了，替代它的是"animate"元素。 详细链接：https://blog.csdn.net/seacean2000/article/details/9669655
```
    <?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
    "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

    <svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
        <rect id="rec" x="0" y="0" width="100" height="100" style="fill:lime"> 
            <animate attributeName="x" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="300" to="0"/> 
            <animate attributeName="y" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="100" to="0"/> 
            <animate attributeName="width" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="300" to="800"/> 
            <animate attributeName="height" attributeType="XML" begin="0s" dur="6s" fill="freeze" from="100" to="300"/> 
            <animateColor attributeName="fill" attributeType="CSS" from="lime" to="red" begin="2s" dur="4s" fill="freeze"/>
        </rect>
    </svg>
```
## 沿固定路径动画
###  <animateMotion path="M 0 0 L 100 100" dur="5s" fill="freeze"/>


```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(100,100)">
        <text id="TextElement" x="0" y="0" style="font-family:Verdana;font-size:24"> It's SVG!
            <animateMotion path="M 0 0 L 100 100" dur="5s" fill="freeze"/>
        </text>
    </g>
</svg>

```

####  `<g>`元素通常用来对相关图形元素进行分组，以便统一操作，比如旋转，缩放或者添加相关样式等。


```
<svg xmlns="http://www.w3.org/2000/svg"  version="1.1">
    <g id="group" fill="red" >
      <rect x="10" y="10" width="100" height="100"/>
    </g>
    <use id="one" x="0" y="110" xlink:href="#group"/>
    <use id="two" x="0" y="220" xlink:href="#group" stroke="black" stroke-width="2"/>
  </svg>
  ```

###（1）.`<g>`元素可以直接显示。
###（2）.`<use>`元素可以使用xlink:href属性（属性值是#+g元素id）多次引用`<g>`元素。
###（3）.被引用后创建的新元素是最初元素的一个副本；新元素会继承最初元素的样式、旋转、缩放等特性。
###（4）.不能在新元素中覆盖初始元素的样式（例如描边和填充）。
###（5）.x和y属性规定新元素的坐标原点。

```
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <rect
            id="defs"
            x="90" y="110"
            width="100" height="100" />
    </defs>
  
    <use id="ant"
         transform="translate(0 110) rotate(10 0 0)"
         fill="red"
         xlink:href="#defs" />
    <rect id="rect"
          fill="blue"
          x="90" y="220"
          width="110" height="110"
          transform="rotate(10 0 110)"
          fill-opacity="0.5" />
  </svg>
  ```
  ###  可以认为<defs>是为了定义初始不可见且可重用的元件，而<g>是一个初始可见且本身就是一个元件（当然具有分组功能

  ----
  ###  

```
<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

    <rect x="10" y="20" width="90" height="60">
        <animateColor id="a1" attributeName="fill" from="red" to="blue" dur="3s"/>
    </rect>
    <rect x="10" y="120" width="90" height="60">
        <animateColor id="a2" attributeName="fill" from="blue" to="yellow" begin="a1.end" dur="3s"/>
    </rect>
    <rect x="10" y="220" width="90" height="60">
        <animateColor id="a3" attributeName="fill" from="yellow" to="green" begin="a2.end" dur="3s"/>
    </rect>

</svg>
```

## 参考文档 
## SVG 动态添加元素与事件
##### https://www.cnblogs.com/lovellll/p/10208207.html
##### https://www.cnblogs.com/siyunianhua/p/3340589.html
##### https://www.zhangxinxu.com/wordpress/?p=4333


##### 动态脚本svg变化 https://www.cnblogs.com/nzbin/p/7811451.html


##动态彩贝壳loading
```
<svg width='210' height='200' version="1.1"
xmlns="http://www.w3.org/2000/svg" id='loading' 
> 
    <script>
    </script>
    <path 
        d="
        M100 180 
        C60 150, 50 140, 20 140 
        C5 136, 11 108, 15 110 
        C20 98, 90 140, 103 180 
        "
    stroke="" 
    fill="#5977df"
    >
    <animate 
        id="a1" 
        attributeName="fill"
        from="5944d0" 
        to="#5977df"
        dur="0.2s"
        fill="freeze"
        begin='0;a5.end'
        />
    </path>
    <path 
        d="
        M110 180
        Q 70 105 15 100
        C-1 90, 20 60 40 65
        Q 80 80 115 180
        "
    stroke="" fill="#1ebbda">
    <animate id="a2" 
        attributeName="fill"
        from="1e99da" 
        to="1ebbda"
        dur="0.2s" 
        begin="a1.end"
        fill="freeze"
        />
    </path>
    <path 
        d="
        M120 180
        Q 100 85 55 60
        C 50 48 70 13 105 40
        Q 140 100 125 180
        "
    stroke="" fill="#57d841">
      <animate 
        id="a3" 
        attributeName="fill"
        from="57aa41" 
        to="57d841"
        dur="0.2s" 
        begin="a1.end"
        fill="freeze"
        />
    </path>
    <path 
        d="
        M130 180
        Q 150 85 115 40
        C 110 40 140 0 168 55
        C 180 80 160 150 135 180 
        "
    stroke="" fill="#f2b81a">
     <animate id="a4" 
        attributeName="fill"
        from="f2aa1a" 
        to="f2b81a"
        dur="0.2s" 
        begin="a2.end"
        fill="freeze"
        />
    </path>
    <path 
        d="
        M165 140
        C 180 120 180 90 180 70
        C 190 70 210 85 196 120
        Q 165 140 165 140
        "
    stroke="" fill="#f78c2b">
     <animate id="a5" 
        attributeName="fill"
        from="f7cc2b" 
        to="f78c2b"
        dur="0.2s" 
        begin="a4.end"
        fill="freeze"
        />
    </path>
</svg>
```

