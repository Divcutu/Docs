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
// console.log(longestPalindrome(s))

const data = [[1,2,3,4,5],[2,3,4,5,6],[2, 43,65],[3,245,656,32,43],[34,32,32,31,55]];

const flat = (params) => {
  let _params = params;
  const ret = [];
  const mayFlat = () => {
    if (_params.length === 0) {
      return;
    }
    if (_params.length === 1) {
      ret.push(..._params[0]);
      return;
    }
    let pre = new Array(_params.length - 2);
    let end = new Array(_params.length - 2);
    for (let i = 1; i < _params.length - 1; i++) {
      pre.push(_params[i].pop());
      end.unshift(_params[i].shift());
    }
    _params = _params.filter(val => val.length);
    ret.push(..._params.shift(), ...pre.filter(val => !!val || val === 0), ..._params.pop().reverse(), ...end.filter(val => val));
    if (_params.length) {
      mayFlat();
    }
  }
  mayFlat();
  return ret;
}

// const ret= flat(data)
// console.log(ret)

// 腾讯云面试题  把数组转为树结构
const flatTreeData = [
  { id: "1", parentId: "0" },
  { id: "1-1", parentId: "1" },
  { id: "1-1-1", parentId: "1-1" },
  { id: "1-2", parentId: "1" },
  { id: "1-3", parentId: "1" },
  { id: "2", parentId: "0" },
  { id: "2-1", parentId: "2" },
  { id: "2-2", parentId: "2" },
  { id: "2-3", parentId: "2" }
];

const buildTree = (arr) => {
  let ret = {};
  for (let i = 0; i < arr.length; i++) {
    const { parentId } = arr[i];
    const parent = arr.find(val => val.id === parentId);
    if (parent) {
      !parent?.children && (parent.children = []);
      parent.children.push(arr[i])
    } else {
      ret[arr[i].id] = arr[i];
    }
  }
  return ret;
};
// console.log(JSON.stringify(buildTree(flatTreeData)));
//   实现一个 QQMan:
// QQMan("jack") 输出:
// I am jack

/**
 * 
  QQMan("jack").rest(10).learn("computer") 输出:
  I am jack
  //等待10秒
  Start learning after 10 seconds
  Learning computer

  QQMan("jack").restFirst(5).learn("chinese") 输出:
  //等待5秒
  Start learning after 5 seconds
  I am jack
  Learning chinese
 */

// 使用类
class QQMan {
  firstTime = 0;
  constructor(name = '') {
    setTimeout(() => {
      if (this.firstTime) {
        console.log(`Start learning after ${this.firstTime} seconds`);
      }
      console.log(`I am ${name}`)
    }, time)
  }

}



var search = function(nums, target) {

  let left = 0;
  let right =  Math.floor(nums.length / 2);
  let ret = -1;
  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  if (nums[left] < target && nums[right] > target) {
  } else {
      left = Math.floor(nums.length / 2);
      right = nums.length - 1;
  }
  if (right === left) {
    if (nums[left] === target) return left;
    else return -1 
  }
  while (nums[ret] !== target && left !== right) {
      let curr = left + Math.floor((right -left) / 2);
      console.log(left, right, nums[curr] )
      if (nums[curr] === target) {
        ret = curr;
      }
      if (curr === left) {
        if (nums[right] === target) return right;
        break;
      }
      else if (nums[left] < nums[curr] && nums[left] < target && nums[curr] > target) {
          right = curr;
      } else if (nums[left] < nums[curr] && nums[left] < target && nums[curr] < target) {
          left = curr;
      } else if (nums[left] < nums[curr] && nums[left] > target && nums[curr] < target) {
           left = curr;
      } else if (nums[left] > nums[curr] && nums[left] > target && nums[curr] > target) {
          right = curr;
      } else {
        break;
      }
  }
   return ret
};

// console.log(search([4,5,6,7,0,1,2], 1))


/**
 * react 与vue 的区别
 * 
 * get post 区别 cookie session localStroage
 * 
 * react 跟 vue 的原理 diff
 * 
 * 自定义hook  泛型约束  reactredux
 * 
 */

var simplifyPath = function(path) {
  const stack = [];
  let arr = path.split('/');
  for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
          if (arr[i] === '..') {
              stack.pop();
          } else {
              stack.push(arr[i])
          }
      }
  }
  console.log( stack)

  return '/' + stack.join('/')
};

console.log(simplifyPath("/home/"));