/**
 *  实现call、apply 主要利用谁调用指向谁的原理
 */

Function.prototype.myCall = function(content, ...args) {
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    if (!content) content = window;

    let fun = Symbol();

    content[fun] = this;

    Reflect.deleteProperty(content, fun);

    return content[fun](...args)
}

// 相比call 只是传参方式不一样
Function.prototype.myApply = function(content, args = []) {
    if (typeof this !== 'function') {
        throw new Error('error')
    }
    if (!content) content = window;

    let fun = Symbol();

    content[fun] = this;
    
    Reflect.deleteProperty(content, fun);

    return content[fun](...args)
}

// 相比 call、apply bind是返回一个函数

Function.prototype.myBind = function(content, ...args) {
    const fn = this
    if(typeof this !== 'function') {
        throw new Error('error')
    }
    if (!content) content = window;

    return function(...other) {
        return fn.apply(content, [...args, ...others])
    }
}