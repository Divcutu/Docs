/**
 * 字节的一道面试题 要求非递归算法
 */

const arr=[1,2,['3',4,'5',[6,[7,8],9]]];
/**
 * 递归版
 * @param {*} arr 
 * @returns 
 */
function flatten(arr) {
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) ret.push(...flatten(arr[i]));
      else ret.push(arr[i])
  }
  return ret
}


/**
 * 非递归版 - 展开
 * @param {*} arr 
 * @returns 
 */
function flatten2(arr) {
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          arr.splice(i , 1, ...arr[i]);
          i--;
        }
        else ret.push(arr[i])
    }
    return ret
}

/**
 * 非递归版 - 栈版
 * @param {*} arr 
 * @returns 
 */
function flatten3(arr) {
  let ret = [];
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        stack.push(arr[i])
      }
  }
  return ret
}

console.log(flatten2(arr))

