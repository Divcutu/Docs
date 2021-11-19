// var climbStairs = function(n) {
//   let ret = 1;
//   for(let i = n; i > 0; i--) {
//     console.log(ret, i)
//       ret = ret*n;
//   }
//   return ret
// };

// console.log(climbStairs(2))

var countSubstrings = function(s) {
  let ret = s.split('');

  for (let i = 0; i < s.length; i++) {
      expand(i - 1, i + 1);
      expand(i, i + 1);
  }

  function expand(left, right) {
      while(left >= 0 && right < s.length && s[left] === s[right]) {
        ret.push(s.substring(left, right + 1));
        left--;
        right++;
      }
  }
  
  return ret;
};

// console.log(countSubstrings('aaa'))


var minEatingSpeed = function(piles, h) {
  let arr = piles.sort((a, b) => a - b);
  let left = 1;
  let right = arr.slice(-1)[0];
  let current;
  while (left < right) {
    current = Math.floor((right + left) / 2) ;
    if (isEat() > h) {
      left = current + 1;
    } else if (isEat() <= h){
      right = current;
    } else {
      return current
    }
  }

  function isEat() {
    let time = 0;
    for (let i = 0; i < arr.length; i++) {
      time += Math.ceil(arr[i] / current);
    }
    return time
  }

  return left;
};

let arr = [312884470];
console.log(minEatingSpeed(arr, 312884469))
