const demo = {
  a:1,
  aa() {
    console.log(this)
    setTimeout(() => {
      console.log(this)
    }, 1000);
  }
}
function asd() {
  this.a=1
  setTimeout(() => {
    console.log(this)
  }, 1000);
}
let r = new asd()
console.log(r)

db.user.aggregate( 
  [
    { $skip: 100 },
    { $limit: 10 },
    { $lookup: { from: 'user_item', localField: 'name', foreignField: 'name', as: 'item' } },
  ]
).pretty()

// $project 修改输入文档的结构。可以用来重命名、增加或删除域，也可以用于创建计算结果以及嵌套文档。

db.user.aggregate([
  { $project: {name: 1}}
])

// $match 用于过滤数据，只输出符合条件的文档。$match使用MongoDB的标准查询操作。
db.user.aggregate([
  { $project: {age: 1}},
  { $match: {age: {$gte: 50, $lte: 100}} }
])

// $limit 用来限制MongoDB聚合管道返回的文档数
// $skip 在聚合管道中跳过指定数量的文档，并返回余下的文档

db.user.aggregate([
  { $project: {age: 1}},
  { $match: {age: {$gte: 50, $lte: 200}} },
  { $limit: 25 },
  { $skip: 20 },
])

// $sort：将输入文档排序后输出
db.user.aggregate([
  { $project: {age: 1}},
  { $match: {age: {$gte: 50, $lte: 200}} },
  { $limit: 25 },
  { $skip: 20 },
  { $sort: {age: -1}}
])

// $group：将集合中的文档分组，可用于统计结果。
// _id 为必填

db.user_item.aggregate([
  { $group: {
    _id: '$name',
    // total: {$addToSet: '$des'}
    total: {$push: '$des'}
  }}
])

// $unwind：将文档中的某一个数组类型字段拆分成多条，每条包含数组中的一个值。

db.user_item.aggregate([
  { $group: {
    _id: '$name',
    // total: {$addToSet: '$des'}
    total: {$push: '$des'}
  }},
  { $unwind: '$total' }
])

// $lookup 聚合 相当于联表查询

db.user.aggregate([
  {$lookup: { 
    from: 'user_item',
    localField: 'name',
    foreignField: 'name',
    as: 'item'
   }},
  { $skip: 100 },
  { $limit: 1 },
  { $unwind: '$item' }
])