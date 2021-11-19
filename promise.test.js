
const MyPromise = require('./promise');

// new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
//     // reject(2)
    
// }).then(ret => console.log('resolve:', ret), reason => console.log('reject:',reason))

// let promise = new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve('12323')
//     }, 2000)
// })

// promise.then(val => {
//     console.log(1)
//     console.log(val)
// })

// promise.then(val => {
//     console.log(2)
//     console.log(val)
// })

new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
}).then(ret=> {
    console.log(ret)
    return 2
}).then(ret => {
    console.log(ret)
})