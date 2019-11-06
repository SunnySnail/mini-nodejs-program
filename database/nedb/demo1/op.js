var db = require('./db.js')

// 找出所有年龄为20的同学
db.find({
  age: 20
}, function(err, docs){
  console.log(docs)
})

// 更新多条数据
db.update({
  age: 20
}, {
  $set: {
    rank: 2
  }
}, {
  // 是否更新多条数据，默认值为false
  multi: true
}, function(err, numUpdate, updateDoc){
})

// 删除年龄小于20的所有数据
db.remove({
  age: {
    $lt: 21
  }
}, {
  // 是否删除多条数据，默认值为false
  multi: true
}, function(err, numRemoved) {
  console.log(numRemoved)
})