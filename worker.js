// this.addEventListener('message', (event) => {
//   console.log(1)
// })

new Promise((resolve, reject) => {
  // return 1
  resolve(1)
  // return 1
  // resolve(1)
  // throw 'error'
  // reject('111')
  console.log('contain')
}).then(ret => {
  console.log('ok2：' + ret)
  return 2222
}).then(ret => {
  console.log(ret)
}).catch(e => {
  console.log(e)
})