// let s = '//t.a.c.com/aasd/ccc/'

// let reg = /\/\/[\w]{0, 20}\//
// console.log(s.match(reg))

// let ss = '123 34 443 33'
// console.log(ss.match(/\d{2,}/g))

// var regex = /\d{2,5}/g;
// var string = "123 1234 12345 123456";
// console.log( string.match(regex) ); 

/**
 * 匹配时间
 */

//  let timeReg = /[0-2][0-4]:[0-5][0-9]/g
let timeReg = /^(0?[0-9]|1[0-9]|2[0-3]):(0?[0-9]|[0-5][0-9])$/
// console.log(timeReg.test('01:11'))

/**
 * 匹配日期
 */

 let DateReg = /\d{4}-(0\d|1[0-2])-([0-2][0-9]|3[01])/

//  console.log(DateReg.test('2021-12-30'))

/**
 * 文件路径匹配
 */
let FileReg = /[a-zA-Z]:\/(\/[/w]+)+/

/**
 * 数字千位逗号分隔
 */

 let numberSplit = /(?!^)(?=(\d{3})+$)/g
//  console.log('123123123'.replace(numberSplit, ','))

// webpack 插件暴露的方法 postcss 加载时机 页面刷新想保留数据的方法
class Scheduler {
    constructor() {
        this.que = [];
        this.isRun = false;
    }
    add = (func) => {
        return new Promise((resolve) => {
            this.que.push({ func, resolve });
            if (!this.isRun) {
                return this.run();
            }
        })
        
    }
    run = () => {
        if (this.que.length) {
            this.isRun = true;
            const { resolve, func } = this.que.shift();
            func().then(() => {
                resolve();
                this.run();
            });
        }    
    }
}

const scheduler = new Scheduler();
const timeout = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}
const addTask = (time, name) => {
    scheduler.add(() => timeout(time)).then(() => { console.log(name) });
}

addTask(1000, 1)
addTask(3000, 2)
addTask(500, 3)
addTask(1000, 4)

/**
 * 继承
 * 热重载原理
 * ts  type interface 区别 unknow 与any 的区别 
 * fibber结构
 * 在if中使用hooks
 */
/**
 * 数组去重
 *
 * @example
 * [1,'1',1]                            -> [1,'1']
 * [{a: 1}, {b: 1}, {a: 1}]             -> [{a: 1}, {b: 1}]
 * [{a: 1, b: 2}, {b: 1}, {b: 2, a: 1}] -> [{a: 1, b: 2}, {b: 1}]
 * [[1, {a: 1}], [2], [3], [1, {a: 1}]] -> [[1, {a: 1}], [2], [3]]
 */

function unique(nums) {
    let obj = {};
    const ret = [];
    const getType = (value) => Object.prototype.toString.call(value);
    const testObj = (val, value) => {
        let _ret = true;
        for (let key in value) {
            if (value[key] !== val[key]) {
                valiadRet = false;
            }
        }
        return _ret;
    }
    const valiad = (value, type) => {
        let _ret = [];
        if (type === 'object') {
            _ret = ret.filter(val => {
                let valiadRet = true;
                if (getType(val) === 'object' && Object.keys(val).length === Object.keys(value).length) {
                    valiadRet = testObj(val, value);
                }
                return valiadRet
            })
        } else if (type === 'Array') {
            _ret = ret.filter(val => {
                let valiadRet = true;
                if (getType(val) === 'Array' && val.length === value.length) {
                    for (let key of value) {
                        if (getType(value[key]) === 'object' && !testObj(val[key], value[key])) {
                            valiadRet = false;
                        } else if (value[key] !== val[key]){
                            valiadRet = false;
                        }

                    }
                }
                return valiadRet;
            })
        } else {
            _ret = ret.filter(val => val === value);
        }
        return _ret.length === 0;
    }
    for (let i = 0; i < nums.length; i++) {
        let type = getType(nums[i]);
        if (valiad(nums[i])) {
            ret.push(nums[i])
        }
    }
    return ret;
   
}
console.log(unique([1, '1', 1]))
console.log(unique([{ a: 1, b: 2 }, { b: 1 }, { b: 2, a: 1 }]))



/*
# 问题 最大子序列

输入一个整形数组，数组里有正数也有负数。
数组中连续的一个或多个整数组成一个子数组，每个子数组都有一个和。
求所有子数组的和的最大值。

# 示例
[-2, 11, -4, 13,-5, -2] -> 20
*/
var arr1 = [-2, 11, -4, 13, -5, -2];
function getMaxSum(nums) {
    let ret = 0;
    let arr = [nums[0]];
    let left = 0;
    const getTotal = (_arr) => _arr.reduce((pre, curr) => (pre + curr), 0);
    for (let i = 1; i < nums.length; i++) {
        // ret = Math.max(ret, getTotal(nums.slice(left, i + 1)));
       if (getTotal(nums.slice(left, i)) < getTotal(nums.slice(left, i + 1))) {
           ret = getTotal(nums.slice(left, i + 1));
       } else {
           left++;
       }
    }
    return ret;
}
console.log(getMaxSum(arr1));



/*
描述：
 
将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，
例如`110000000000000000000000000000000000000000000000`，
表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，
也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
时间区间被选中，例如`110010000000000000000000000000000000000000000000`，
表示00:00-1:00和02:00-02:30这两个时间区间被选中了。
 
要求：写一个函数timeBitmapToRanges，将上述规则描述的时间位图转换成一个选中时间区间的数组。
示例输入：`"110010000000000000000000000000000000000000000000"`
示例输出：`["00:00~01:00", "02:00~02:30"]`
*/
function timeBitmapToRanges(time) {
    
}
// console.log(timeBitmapToRanges("110011110000010001100000000000000000000000000000"));


// 封装管理一个组件库
// vue 编译原理 模板语法的编译到真实dom
// webpack插件 性能优化 npm包管理

// css module 原理 问题
// 主题色更改
//fibber架构原理
// 响应式原理

// 获取元素距离顶部宽高
// 手写 usememo 
// 监测内存泄露 、监测当前帧是多少、监测性能


/** 
<div>{{opt.msg}}</div>

new Vue({
    data: {
          opt: {},
     },
    created() {
          this.opt.msg = 124;
          setTimeout(() => {
              this.opt.msg = 234;
         })
     }
});


<A >

this.setState({
    name: 'xxx'
})

render() {
    <b name={this.state.name}>
    <c>
    <d>
}

onclick setTimeout 优先级

const p = new Promise((resolve, reject) => {
  reject('reject');
}).catch((err) => {
  console.log('catch1');
}).catch(() => {
  console.log('catch2'); 
}).then(() => {
  console.log('then1');
})
*/