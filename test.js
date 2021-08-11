
// const worker = new Worker('http://www.ruanyifeng.com/blog/stats.js')

// document.addEventListener('load', (e) => {
//   console.log('load--capture', e)
// }, true)
// document.addEventListener('load', (e) => {
//   console.log('load-bubbl', e)
// }, true)
// document.addEventListener('DOMContentLoaded', (e) => {
//   console.log(e)
// })
// document.addEventListener('DOMContentLoaded', (e) => {
//   console.log(e)
// }, true)



// let o1 = {}
// let o2 = Object.create({})

// console.log(o1.constructor === Object) // true
// console.log(o2.constructor === Object) // true

// function func() {}
// let f = new func()
// console.log(Function.__proto__ === Object.prototype)

// console.log(f.constructor === Object) // false
// console.log(f.constructor === func) // true

// function A() {}
// console.log(A.__proto__ === Function.prototype)

// console.log(Function.prototype.__proto__ === Object.prototype) 
// console.log(Object.__proto__ === Function.prototype)

// let obj = Object.create({b:'2'},{a: {
//   get () {return this.aa},
//   set (v) {this.aa = v;console.log(this)},
//   enumerable: true,
//   configurable: true,
// }})
// obj.a = 10
// console.log(obj.a)

// function Element(tagName, props, children) {
  // 若当前环境变量不属于 Element 实例则返回
//   if (!(this instanceof Element)) {
//     return new Element(tagName, props, children);
//   }

//   this.tagName = tagName;
//   this.props = props || {};
//   this.children = children || [];
//   this.key = props ? props.key : undefined

//   let count = 0;
//   this.children.forEacn(child => {
//     if (child instanceof Element) {
//       count += child.count;
//     }
//     count++ ;
//   })
//   this.count = count;
// }

// const tree = Element('div', { id: 'virtual-container' }, [
//   Element('p', {}, ['Virtual DOM']),
//   Element('div', {}, ['before update']),
//   Element('ul', {}, [
//     Element('li', { class: 'item' }, ['item 1']),
//     Element('li', { class: 'item' }, ['item 2']),
//     Element('li', { class: 'item' }, ['item 3']),
//   ]),
// ])

// const root = tree.render();
// document.body.appendChild(root)

// Element.prototype.render = function() {
//   const el = document.createElement(this.tagName);
//   const props = this.props;

//   for ()
// }

// class A {
//   static aa = function(){ console.log(this) };
// }
// A.aa = function(){console.log(this)}

// A.aa()
// let a = new A()
// console.log(a)

// class A {
//   #a = {};
// }
// class B extends A {}

// const a = new A()
// const b = new B()

// console.log(a.__proto__ === A.prototype)
// console.log(b.__proto__ == B.prototype)
// console.log(b.__proto__.__proto__ == A.prototype)
// console.log(B.__proto__ === A)
// console.log(B.prototype.__proto__ === A.prototype)


// 正则
// https://juejin.cn/post/6844903487155732494#heading-1

// 渲染图层
// https://blog.csdn.net/wangfeijiu/article/details/106880978

// 设计模式
// https://www.cnblogs.com/imwtr/p/9451129.html

// createDocumentFragment
// css选择器从右往左解析
// vue 对数组的双向绑定
// https://blog.csdn.net/weixin_30919571/article/details/96586784

// const obj = {
//   a: 1,
//   func: function() {
//     console.log(this)
//   }
// };
// console.log((0, obj.func))
// // (0, obj.func)();
// console.log((1,2,3))

// function func(data) {
//   data.a = 1
// }
// let params = {}
// func(params);
// console.log(params);

// let arr = [1,2,3,3,4];
// for (let key in arr) {
//   console.log(key, arr[key])
// }

