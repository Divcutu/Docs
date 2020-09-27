
function debounce(func, wait) {
  let timer;
  console.log(func)
  return function() {
    let context = this; // 注意 this 指向
    let args = arguments; // arguments中存着e
    console.log(this)
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
let interval
let num = 0
function aaa() {
  interval = setInterval(() => {
    console.log(num++)
  }, 1000);
}
// debounce(aaa,3000)()
const all = aa => aa.keys().map()
const demo = {
  a:1,
  b:2,
  keys() {
    return Object.keys(this)
  }
}

all(demo)