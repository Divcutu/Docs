# offsetWidth Vs clientWidth Vs scrollWidth

### 宽度含义

[codePen演示](https://codepen.io/Divcutu/pen/abXPEJB?editors=1111 '演示')

![示意图](../assets/offsetWidth-clientWidth-scrollWidth.png '示意图')

||`Width(Height)`|`padding`|`border`|`margin`|`scroll`|视口之外的内容|
|---|---|---|---|---|---|---|
|`offsetWidth`|包括|包括|包括|不包括|包括|包括|
|`clientWidth`|包括|包括|不包括|不包括|不包括|不包括|
|`scrollWidth`|包括|包括|不包括|不包括|不包括|包括|

结论：

1. `offsetWidth`:  除了(`margin`)，所有的宽度(高度)之和
2. `clientWidht`: **视口尺寸**，只包含**视口内**宽度(`width`)以及内边距(`padding`)
3. `scrollWidth`: 包含**视口外**宽度(`width`)以及内边距(`padding`)