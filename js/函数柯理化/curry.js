/**
 *  函数柯里化
 * 
 *  @好处 ：参数复用、提前确认、延迟运行
 */

/**
 * 实现一个add方法，使计算结果能够满足如下预期：
    add(1)(2)(3) == 6;
    add(1, 2, 3)(4) === 10;
    add(1)(2)(3)(4)(5) == 15; 
 */

function add () {
    const args = [...arguments];

    const _add = (...arg) => {
        args.push(...arg);
        return _add;
    }
    
    // 利用弱等于的隐式转换 调用方法的toString 属性
    _add.__proto__.toString = () => {
        return args.reduce((pre, curr) => pre + curr)
    }
    return _add;
}

console.log(add(1,2,3,4)(5) == 15)
console.log(add(0)==0)

const A = {
    desc: 'this is A',
    a: function() {
        console.log(this)
    },
    b: () => {
        console.log(this)
    }
}

const B = { desc: 'this is B' };

B.a = A.a;

B.b = A.b;
B.a()