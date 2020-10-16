const demo = {
  a:1,
  aa() {
    console.log(this)
    setTimeout(() => {
      console.log(this)
    }, 1000);
  }
}
function asd() {
  this.a=1
  setTimeout(() => {
    console.log(this)
  }, 1000);
}
let r = new asd()
console.log(r)
