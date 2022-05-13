# 网站 Banner 悬浮效果

[[toc]]

## 效果展示

看下面的动画，在滑动鼠标滚轮时候，给人一种标题栏在一瞬间飘起来的感觉，体验不错。

这种UI交互效果在网站上是比较常见的，但这是咋实现的呢 ❓❓❓

![](/images/Intersection_Observer_API/banner_effect.gif)


我们来通过 F12 观察一下，滚动滑轮的时候，发生了什么❓❓❓

![](/images/Intersection_Observer_API/banner_effect_f12.gif)

## 效果分析

我们可以观察到：

1. 这个标题栏（banner），其实是一直 fix 在浏览器顶部的，而且背景是透明的。

~~~css
body.with-light-header header.page-header {
  background-color: transparent;
}
header.page-header {
  margin: 0;
  position: fixed;
  ...
~~~


2. 当鼠标往下滑动滚轮的瞬间（即：`页面滚动条 离开 页面顶端`时），一个带透明度背景色的样式（`fixed`）动态增加了上来。而且，这个背景色带有 0.5s 的过渡效果，所以背景色是在0.5秒过程中逐渐具有颜色。

~~~css
body.with-light-header header.page-header.fixed {
  background-color: rgba(51,54,59,.95);
}

header.page-header {
  margin: 0;
  position: fixed;
  ...
  transition: background-color .5s;
  ...
}
~~~

3. 当`页面滚动条 回到 页面顶端`时，这个带透明度背景色的样式（ `fixed`）又被动态删除了。所以，背景色在 0.5s 内又重新变回透明。

## 关键技术

基本原理前面分析清楚了，本质是一个 CSS 样式根据`页面滚动条是否处于页面顶端`条件，动态控制CSS样式的添加与删除。

可如何判定 `页面滚动条是否处于页面顶端`❓❓❓ 

**起初我怀疑🧠....“难道是监听了 `onscroll` 事件？” .... 但在随后的验证中发现，是我肤浅了 😭😭😭**

![](/images/Intersection_Observer_API/body_height.png)

![](/images/Intersection_Observer_API/html_event.png)

![](/images/__common__/why.png)

**随后我扒了一下源码....看到了这个叫...Intersection Observer 的 API 接口...**

![](/images/Intersection_Observer_API/how.png)

## Intersection Observer API 详解

::: tip MDN
过去，要检测一个元素是否可见或者两个元素是否相交并不容易，很多解决办法不可靠或性能很差。

然而，随着互联网的发展，这种需求却与日俱增，比如，下面这些情况都需要用到相交检测：

* 图片懒加载——当图片滚动到可见时才进行加载
* 内容无限滚动——也就是用户滚动到接近内容底部时直接加载更多，而无需用户操作翻页，给用户一种网页可以无限滚动的错觉
* 检测广告的曝光情况——为了计算广告收益，需要知道广告元素的曝光情况
* 在用户看见某个区域时执行任务或播放动画

过去，相交检测通常要用到事件监听，并且需要频繁调用 Element.getBoundingClientRect() 方法以获取相关元素的边界信息。

事件监听和调用 Element.getBoundingClientRect() 都是在主线程上运行，因此频繁触发、调用可能会造成性能问题。

这种检测方法极其怪异且不优雅。
:::


### 是什么？

::: tip MDN
`IntersectionObserver` 接口提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法。祖先元素与视窗(viewport)被称为根(root)。
:::

### API

Create the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other.

~~~ts
/** provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. */
interface IntersectionObserver {
    readonly root: Element | Document | null;
    readonly rootMargin: string;
    readonly thresholds: ReadonlyArray<number>;
    disconnect(): void;
    observe(target: Element): void;
    takeRecords(): IntersectionObserverEntry[];
    unobserve(target: Element): void;
}

declare var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
};

interface IntersectionObserverInit {
    root?: Element | Document | null;
    rootMargin?: string;
    threshold?: number | number[];
}
~~~

The options object passed into the IntersectionObserver() constructor let you control the circumstances under which the observer's callback is invoked. It has the following fields:

* root
  * The element that is used as the viewport for checking visibility of the target. **Must be the ancestor of the target.** Defaults to the browser viewport if not specified or if null.

* rootMargin
  * **Margin around the root.** Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. **This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections.** Defaults to all zeros.

* threshold
  * Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.

Whenever the target meets a threshold specified for the IntersectionObserver, the callback is invoked. The callback receives a list of IntersectionObserverEntry objects and the observer:

~~~ts
interface IntersectionObserverCallback {
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}

/** This Intersection Observer API interface describes the intersection between the target element and its root container at a specific moment of transition. */
interface IntersectionObserverEntry {
    readonly boundingClientRect: DOMRectReadOnly;
    readonly intersectionRatio: number;
    readonly intersectionRect: DOMRectReadOnly;
    readonly isIntersecting: boolean;
    readonly rootBounds: DOMRectReadOnly | null;
    readonly target: Element;
    readonly time: DOMHighResTimeStamp;
}
~~~

### 示例

借助 Intersection Observer API，实现了矩形框的背景色，会随着滚动条的滚动而变化的效果。

<div ref="divRef" class="box">
  <div class="vertical">
    Webj2eedev's <strong> Box!</strong>
  </div>
</div>

<script setup>
import {ref, onMounted} from "vue"

let prevRatio = 0.0;

const divRef = ref();

onMounted(()=>{
  createObserver();
});

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function createObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(divRef.value);
}

function handleIntersect(entries, observer) {
  const increasingColor = "rgba(40, 40, 190, ratio)";
  const decreasingColor = "rgba(190, 40, 40, ratio)";

  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
  });
}

</script>

<style scoped>
.box {
  background-color: rgba(40, 40, 190, 255);
  border: 4px solid rgb(20, 20, 120);
  transition: background-color 1s, border 1s;
  width: 350px;
  height: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
}
</style>

::: details 查看源码
~~~ vue
<div ref="divRef" class="box">
  <div class="vertical">
    Webj2eedev's <strong> Box!</strong>
  </div>
</div>


<script setup>
import {ref, onMounted} from "vue"

let prevRatio = 0.0;

const divRef = ref();

onMounted(()=>{
  createObserver();
});

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function createObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(divRef.value);
}

function handleIntersect(entries, observer) {
  const increasingColor = "rgba(40, 40, 190, ratio)";
  const decreasingColor = "rgba(190, 40, 40, ratio)";

  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
  });
}

</script>


<style scoped>
.box {
  background-color: rgba(40, 40, 190, 255);
  border: 4px solid rgb(20, 20, 120);
  transition: background-color 1s, border 1s;
  width: 350px;
  height: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
}
</style>
~~~
:::