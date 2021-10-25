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
 console.log('123123123'.replace(numberSplit, ','))