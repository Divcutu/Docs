/**
 * 手写 Promise
 */

// class 版

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected'
class MyPromise2 {

    constructor(executor) {
        // executor 是一个执行器，进入会立即执行
        executor(this.resolve, this.reject);
    }

    // 储存状态的变量，初始值是 pending
    status = PENDING;
    // 成功之后的值
    value = null;
    // 失败之后的原因
    reason = null;

    // 存储成功回调函数
    // 用户数组存储多次 then 方法的调用
    onFulfilledCallback = [];
    // 存储失败回调函数
    onRejectedCallback = [];

    // resolve和reject为什么要用箭头函数？
    // 如果直接调用的话，普通函数this指向的是window或者undefined
    // 用箭头函数就可以让this指向当前实例对象

    resolve = (val) => {
        if (this.status === 'pending') {
            this.value = val;
            this.status = FULFILLED;
            // this.onFulfilledCallback && this.onFulfilledCallback(val);
            while (this.onFulfilledCallback.length) {
                this.onFulfilledCallback.shift()(val)
            }
        }
    };

    reject = (reason) => {
        if (this.status === 'pending') {
            this.reason = reason;
            this.status = REJECTED;
            while (this.onRejectedCallback.length) {
                this.onRejectedCallback.shift()(reason)
            }
        }
    };

    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            onFulfilled(this.value);
        } else if (this.status === REJECTED) {
            onRejected(this.reason);
        } else if(this.status === PENDING ) {
            // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
            // 等到执行成功失败函数的时候再传递
            this.onFulfilledCallback.push(onFulfilled);
            this.onRejectedCallback.push(onRejected);
        }
    }
}


class MyPromise {

    constructor(executor) {
        executor(this.resolve, this.reject);
    }

    status = PENDING;
    value = null;
    reason = null;

    onFulfilledCallback = [];
    onRejectedCallback = []

    resolve = (value) => {
        this.value = value;
        this.status = FULFILLED;
        this.onFulfilledCallback.forEach(val => val());
    };

    reject = (reason) => {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallback.forEach(val => val());
    };

    then(onFulfilled, onRejected) {
        const promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                resolve(onFulfilled(this.value));
            } else if (this.status === REJECTED) {
                onRejected(this.reason);
            } else {
                this.onFulfilledCallback.push(() => {
                    queueMicrotask(() => {
                        resolve(onFulfilled(this.value))
                    })
                });
                this.onRejectedCallback.push(onRejected);
            }
        })
        return promise2
    };
}

module.exports = MyPromise
