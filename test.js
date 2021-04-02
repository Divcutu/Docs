
// const worker = new Worker('http://www.ruanyifeng.com/blog/stats.js')

// document.addEventListener('DOMContentLoaded', (e) => {
//   console.log(e)
// })
// document.addEventListener('DOMContentLoaded', (e) => {
//   console.log(e)
// }, true)
// document.addEventListener('load', (e) => {
//   console.log('load--capture', e)
// }, true)
// document.addEventListener('load', (e) => {
//   console.log('load-bubbl', e)
// }, true)


// let o1 = {}
// let o2 = Object.create({})

// console.log(o1.constructor === Object) // true
// console.log(o2.constructor === Object) // true

function func() {}
let f = new func()
console.log(Function.__proto__ === Object.prototype)

// console.log(f.constructor === Object) // false
// console.log(f.constructor === func) // true

// function A() {}
// console.log(A.__proto__ === Function.prototype)

// console.log(Function.prototype.__proto__ === Object.prototype) 
// console.log(Object.__proto__ === Function.prototype)