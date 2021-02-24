// var foo = {
//   name: 'dxx',
//   getFoo(callback) {
//     callback()
//   }
// }

let urlSearchParams = new URLSearchParams({a:1,b:2})
urlSearchParams.set('a', 2)
urlSearchParams.set('a', 3)
console.log(urlSearchParams.values())

let s = new URLSearchParams('https://zhuanlan.zhihu.com/p?a=1')

console.log(s.toString())