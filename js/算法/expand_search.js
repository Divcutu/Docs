/**
 * 中心扩散算法  leetcode查找最长回文题。
 * @param {*} s 
 * @returns 
 */


function longestPalindrome(s) {
    if (s.length <= 1) return s;
    let result = ''
    for (let i = 0; i < s.length; i++) {
        let evenNumber = expand(i, i + 1);
        let oddNumber = expand(i - 1, i + 1);
        let ret = ''
        evenNumber.length > oddNumber.length ? ret = evenNumber : ret = oddNumber
        if (ret.length > result.length) result = ret
    }
  
    function expand(left, right) {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        
        if (left + 1 > right) return '';
        return s.substring(left + 1, right);
       
    }
  
    return result
  }