var addTwoNumbers = function(l1, l2) {
  let reverse_l1 = arrNode(l1)
  let reverse_l2 = arrNode(l2)
  console.log(reverse_l1, reverse_l2)
  let total = String(reverse_l1 + reverse_l2).split('').reverse().map((val) => {
    return {val: Number(val), next: null}
  }).map((val, index, self) => {
    if (index < self.length - 1) {
      val.next = self[index + 1]
    }
    return val
  })

  return total
};

function arrNode (node) {
  let arr = []
  arr.push(node.val ? node.val : 0)
  while(node.next) {
    node = node.next
    arr.push(node.val ? node.val : 0)
  }
  console.log(arr)
  return BigInt(arr.reverse().join(''))
}

function dealArray(i, arr) {
  if (i < arr.length - 1) return {val: arr[i], next: dealArray(++i, arr)}
  else return {val: arr[i], next: null}
}

// const listNode5 = { val: 5, next: null}
// const listNode4 = { val: 4, next: listNode5}
const listNode31 = { val: 1, next: null}
const listNode30 = { val: 0, next: listNode31}
const listNode29 = { val: 0, next: listNode30}
const listNode28 = { val: 0, next: listNode29}
const listNode27 = { val: 0, next: listNode28}
const listNode26 = { val: 0, next: listNode27}
const listNode25 = { val: 0, next: listNode26}
const listNode24 = { val: 0, next: listNode25}
const listNode23 = { val: 0, next: listNode24}
const listNode22 = { val: 0, next: listNode23}
const listNode21 = { val: 0, next: listNode22}
const listNode20 = { val: 0, next: listNode21}
const listNode19 = { val: 0, next: listNode20}
const listNode18 = { val: 0, next: listNode19}
const listNode17 = { val: 0, next: listNode18}
const listNode16 = { val: 0, next: listNode17}
const listNode15 = { val: 0, next: listNode16}
const listNode14 = { val: 0, next: listNode15}
const listNode13 = { val: 0, next: listNode14}
const listNode12 = { val: 0, next: listNode13}
const listNode11= { val: 0, next: listNode12}
const listNode10 = { val: 0, next: listNode11}
const listNode9 = { val: 0, next: listNode10}
const listNode8 = { val: 0, next: listNode9}
const listNode7 = { val: 0, next: listNode8}
const listNode6 = { val: 0, next: listNode7}
const listNode5 = { val: 0, next: listNode6}
const listNode4 = { val: 0, next: listNode5}
const listNode3 = { val: 0, next: listNode4}
const listNode2 = { val: 0, next: listNode3}
const listNode1 = { val: 1, next: listNode2}

// const list5 = { val: 5, next: null}
// const list4 = { val: 4, next: list5}
const list3 = { val: 4, next: null}
const list2 = { val: 6, next: list3}
const list1 = { val: 5, next: list2}

// addTwoNumbers(listNode1, list1)

var longestPalindrome = function(s) {
  let arr = s.split('')
  let str = ''
  for (let i = 0; i< arr.length; i++) {
      // 当前index 下 选出最后一个跟arr[i] 一样的元素
      let _arr = arr.slice(i, arr.lastIndexOf(arr[i]) + 1)
      // 传入字符串长度为一的判断
      if (_arr.lastIndexOf(arr[i]) === 0) {
        if(str.length < _arr.length) str = _arr.join('')
      }
      // 若不为一 判断字符串中是否有第二个相同元素
      else while (_arr.lastIndexOf(arr[i]) > 0) {
        // 判断是否是回文
        if (_arr.join('') === _arr.reverse().join('')) {
          if(str.length < _arr.length) str = _arr.join('')
        }
        // 再判断时reverse旋转了原数组 需要第二次旋转
        // 移除最后一个元素
        _arr.reverse().splice(-1)
        // 删除跟当前元素相同的最后一个字符 并删除最后一个相同元素后找出倒数第二个相同元素
        _arr = _arr.slice(0, _arr.lastIndexOf(arr[i]) + 1)
      }
  }
  return str
};

let s = "rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip"
console.log(longestPalindrome(s))