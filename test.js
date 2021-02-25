// var foo = {
//   name: 'dxx',
//   getFoo(callback) {
//     callback()
//   }
// }

// let urlSearchParams = new URLSearchParams({a:1,b:2})
// urlSearchParams.set('a', 2)
// urlSearchParams.set('a', 3)
// console.log(urlSearchParams.values())

// let s = new URLSearchParams('https://zhuanlan.zhihu.com/p?a=1')

// console.log(s.toString())

// let observer = new MutationObserver((mutations) => {
//   console.log(mutations)
// })

// observer.observe(document.querySelector('ul').querySelectorAll('li')[0], { attributes: true, childList: true, characterData: true })

// setTimeout(() => {
//   // let el = document.createElement('li')
//   // el.innerHTML = 55
//   // document.querySelector('ul').appendChild(el)
//   document.querySelector('ul').querySelectorAll('li')[0].setAttribute('style', 'color:red')
// }, 5000)

// const {URL} = require('url')
// let base = 'https://www.baidu.com'

// let url = new URL('abc', base)

// console.log(url)

var _url = new URL('https://www.baidu.com:8080/note?name=URL#study')

console.log(_url.toJSON() === _url.href)


