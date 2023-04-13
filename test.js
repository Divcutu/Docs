
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

// let a  = {
//   func: function(callback) {
//     console.log(this);
//     return function() {
//       console.log(this, 00)
//       callback();
//     }
//   }
// }
// function asd() {
//   console.log(this, 11)
// }

// a.func(asd)()

// class A {
//   a;
//   b;
//   constructor() {
//     a = 1;
//   }
//   static setb() {
//     this.b = '11111'
//   }
// }

// A.setb();
// console.log(A.b)

// function aaa() {
//   setTimeout(() => {
//     document.querySelector('ul').style.display = 'none';
//   }, 0)
//   setTimeout(() => {
//     document.querySelector('ul').style.display = 'block';
//   }, 0)
// }

// aaa();

// function func(input) {
//   let obj = {};

//   function ret(object, curr = '') {
//     for (let key in object) {
//       if (typeof object[key] !== 'object') {
//         obj[(curr ? curr + '.' : '') + key] = object[key]
//       } else {
//         ret(object[key], (curr ? curr + '.' : '') + key)
//       }
//     }
//   }

//   ret(input)
  
//   return obj
// }

// let a = {
//   asd: {a:1},
//   b:2,
//   c: [1,2, {a:1}]
// }

// console.log(func(a))

// var reverse = function(x) {
//   let s = String(x);
//   let char;
//   let ret;
//   if (s.startsWith('-') || s.startsWith('+')) {
//       char = s.substr(0, 1);
//       ret = s.substr(1).split('').reverse().join('');
//   } else ret = s.split('').reverse().join('');

//   if (char) ret = Number(char + ret);
//   if (ret < (0 - (2 ** 31) - 1) || ret > (2 ** 31)) return 0
//   return Number(ret)
// };

// console.log(reverse(123))

// var myAtoi = function(s) {
//   let index = 0;
//   let ret = '';
//   while(index >= 0 && index < s.length) {
//       if (s[index] == ' ') {

//       } else if ((s[index] === '+' || s[index] === '-') && !ret) {
//           ret += s[index]
//       } else if (Number(s[index]) || Number(s[index]) == 0) {
//           ret += s[index];
//       } else {
//           index = -10;
//       }
//       index++
//   }
//   console.log(ret)
//   ret = Number(ret);
//   if (Number.isNaN(ret)) return 0;
//   ret = Math.max(ret, -(2 ** 31));
//   console.log(ret)
//   ret = Math.min(ret, 2**31 - 1)
//   console.log(ret)
//   return ret
// };

// console.log(myAtoi("21474836460"))

// async function async1() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }

// async function async2() {
//   console.log('async2');
// }

// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0)

// async1();

// new Promise(function(resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function() {
//   console.log('promise2');
// });
// console.log('script end');


// let a = new Promise((resolve, reject) => {
//   return 1
//   resolve('22')
// })
// console.log(a)

function _new(func, ...args) {
  let obj = Object.create(func.prototype);
  func.apply(obj, args);
  return obj
}

// window.addEventListener('popstate', () => { console.log('popstate') })
// setTimeout(() => {
//   history.pushState({key: 1}, '', 'advance-css/发光按钮/index.html')
// }, 3000)
// window.addEventListener('hashchange', () => { console.log('hashchange') })
// setTimeout(() => {
//   location.hash = '#/aa'
// }, 6000)

// function max (originFuncs: Array<() => Promise>, max: number): Promise {
// }

// 最大重试封装。
// 已知函数 originFunc 执行返回 Promise 对象，返回值可能会 resolve 可能会 reject。
// 封装最大重试函数，支持在传入参数的情况下，遇到 reject 就重试，直到限制次数。
// 返回首次 resolve 的值 或者 最大重试之后的返回值。

// function retry (originFunc: () => Promise, times: number): Promise {
// }


/**
* 设计和实现一个 LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和写入数据 put 。
* 获取数据 get(key) - 如果密钥 ( key ) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1 。
* 写入数据 add(key, value) - 如果密钥不存在，则写入数据。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据，从而为新数据留出空间。
*/


// function LRU(max) {
// 	this.max = max;
// 	this.arr = new Array();
// 	this.data = new Object();
// }
 
// LRU.prototype = {
// get(key) {
// 	if (this.data[key]) {
// 		let index = this.arr.findIndex(val => val === key);
// 		let value = this.arr.splice(index, 1)[0];
// 		this.arr.push(value);
// 		return this.data[key];
// 	} else return -1;
// },
// add(key, value) {
// 	if (this.arr.length === this.max) {
// 		delete this.data[this.arr.shift()];
// 	}
// 	this.arr.push(key);
// 	this.data[key] = value;
// },
// }
// const lru = new LRU(5)
// lru.add(1,1)
// lru.add(2,2)
// lru.add(3,3)
// lru.add(4,4)
// lru.get(1)
// lru.add(5,5)
// lru.get(3)
// lru.add(6,6)

// async function async1() {
//   return new Promise((resolve) => {
//     console.log(4)
//     resolve(5)
//   }).then(ret => console.log(ret))
// }
// let a = async1()
// setTimeout(function () {
//   console.log("1");
// }, 0);
// async function async1() {
//   console.log("2");
//   const data = await async2();
//   console.log("3");
//   return data;
// }
// async function async2() {
//   return new Promise((resolve) => {
//     console.log("4");
//     resolve("async2的结果");
//   }).then((data) => {
//     console.log("5");
//     return data;
//   });
// }
// async1().then((data) => {
//   console.log("6");
//   console.log(data);
// });
// new Promise(function (resolve) {
//   console.log("7");
//   resolve()
// }).then(function () {
//   console.log("8");
// });



// let p = Promise.resolve(new Promise((resolve) => {
//   console.log("4");
//   resolve("async2的结果");
// }).then((data) => {
//   console.log("5");
//   return data;
// })).then(ret => console.log(ret))
// console.log(p)

// let pp = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(new Promise((resolve) => {
//     console.log("4");
//     // return 11
//     resolve("async2的结果");
//   }).then((data) => {
//     console.log("5");
//     return data;
//   }))
// }).then(ret => {
//   console.log(2)
//   console.log(ret)
// })
// setTimeout(() => {
//   console.log(p)
// }, 0)


// async function async1() {

//   console.log('async1 start');
 
//   const data = await async2();
//   console.log(data)

//   console.log('async1 end');
 
//  }
 
//  async function async2() {
 
//   console.log('async2 start');
 
//   return new Promise((resolve, reject) => {
 
//    resolve('1');
 
//    console.log('async2 promise');
 
//   })
//  }
 
//  console.log('script start');
 
//  setTimeout(function() {
 
//   console.log('setTimeout');
 
//  }, 0);  
 
//  async1();
 
//  new Promise(function(resolve) {
 
//   console.log('promise1');
 
//   resolve();
 
//  }).then(function() {
 
//   console.log('promise2');
 
//  }).then(function() {
 
//   console.log('promise3');
 
//  }).then(function() {
 
//   console.log('promise4');
 
//  });
 
//  console.log('script end');

//  `
//  script start
//  async1 start
//  async2 start
//  async2 promise
//  promise1
//  script end
//  promise2
//  promise3
//  async1 end
//  `


/**
 * https: https://blog.csdn.net/hbdatouerzi/article/details/71440206
 * xss、csrf: https://blog.csdn.net/qq_41805715/article/details/88393410
 * js tree 前序、中序、 后序： https://www.cnblogs.com/echolun/p/13328927.html
 * tcp udp: https://blog.csdn.net/qq_43685242/article/details/108490347
 * 移动端0.5px： https://www.cnblogs.com/10manongit/p/12779153.html
 * 继承： https://segmentfault.com/a/1190000016708006
 * 柯理化： https://www.jianshu.com/p/2975c25e4d71
 * 白屏、首屏： https://www.cnblogs.com/longm/p/7382163.html
 * js 隐式转换： https://www.cnblogs.com/chenmeng0818/p/5954215.html
 * webpack-loader、plugin： https://www.jianshu.com/p/c021b78c9ef2
 * vue-router： https://zhuanlan.zhihu.com/p/27588422
 * 
 * 待学习：
 * service worker
 * 监听网页崩溃、报错
 * 
 * 
 * 
 * 手写usecontent
 * promise。all race some 区别
 * redux、
 * 泛型的方法。
 * 自己写的hooks 封装计时器啥的
 * Object。keys .ownProperties 的区别 for in of 的区别
 * instanceof type 的作用区别。 instanceof原理
 * 对 async 方法 promise 箭头函数 instanceof 以及 object.tostring的返回
 */

Promise.resolve().then(() => {
  console.log('current 1', Date.now())
  let time = Date.now();
  for(let i = time; i - time < 2000; i++){ i = Date.now()}
  
   console.log('current 2', Date.now())
})

setTimeout(() => { console.log('current 3', Date.now())}, 1000)