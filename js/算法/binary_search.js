/**
 *  二分查找
 *  需要 有序列表
 */


// 非递归算法
let arr = [1,3,3,5,6,8,12,15,18,21];
function binary_search(arr, key) {
    if (arr.length <= 1) return 0;
    let index = Math.floor(arr.length / 2);
    let min_index = 0; // 记录上次分段位置
    let max_index = arr.length; // 记录上次分段位置 高位
    while (arr[index] != key) {
        if (arr[index] > key) {
            max_index = index - 1;
            index = min_index + Math.floor((index - min_index) / 2);
        } else  {
            min_index = index + 1;
            index = index + Math.floor((max_index - index) / 2);
        }
    }
    return index;
}
console.log(binary_search(arr, 1))

function binary_search_recursive(arr, key, min = 0 , max = arr.length) {
    let index = min + Math.floor(max - min / 2);
    if (arr[index] > key) return binary_search_recursive(arr, key, min, index - 1);
    else if (arr[index] < key) return binary_search_recursive(arr, key, index + 1, max);
    else return index
}

console.log(binary_search(arr, 18))