/**
 * 快速排序
 * @returns 
 */
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const left = [];
    const right = [];
    const index = arr.splice(Math.floor(arr.length / 2), 1)[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > index) right.push(arr[i]);
        else left.push(arr[i])
    }
    return quickSort(left).concat([index], quickSort(right));
}


let arr_1 = [3, 6, 7, 8, 5, 4, 3, 6, 7, 6, 4, 3, 43, 6];
console.log(quickSort(arr_1));