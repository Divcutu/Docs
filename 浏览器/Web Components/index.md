# Web Components 入门

`Web Components`是什么：`Web Components` 是一套技术，**允许创建可重用的自定义元素。从原生层面实现组件化，使开发者开发、复用、扩展自定义组，实现自定义标签**

[官网入口]('https://www.webcomponents.org/introduction' '点击进入官网')  
[chrome]('https://web.dev/articles/custom-elements-v1?hl=zh-cn' 'Chrome 开发者关系团队提供的指导')   
[mdn入口]('https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components' '点击跳转mdn')

## 目录

### 1. ES Modules
### 1. ES Modules
### 1. ES Modules

### 定义新元素

`customElements` 全局变量用于定义自定义元素并告知浏览器新代码。使用您要创建的标记名称和扩展基本 `HTMLElement` 的 `JavaScript` `class` 调用 `customElements.define()`

``````JS
class MyLoading extends HTMLElement {
}

window.customElements.define('my-loading', MyLoading)
``````


### 自定义元素内容
