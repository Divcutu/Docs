
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

var myAtoi = function(s) {
  let index = 0;
  let ret = '';
  while(index >= 0 && index < s.length) {
      if (s[index] == ' ') {

      } else if ((s[index] === '+' || s[index] === '-') && !ret) {
          ret += s[index]
      } else if (Number(s[index]) || Number(s[index]) == 0) {
          ret += s[index];
      } else {
          index = -10;
      }
      index++
  }
  console.log(ret)
  ret = Number(ret);
  if (Number.isNaN(ret)) return 0;
  ret = Math.max(ret, -(2 ** 31));
  console.log(ret)
  ret = Math.min(ret, 2**31 - 1)
  console.log(ret)
  return ret
};

console.log(myAtoi("21474836460"))