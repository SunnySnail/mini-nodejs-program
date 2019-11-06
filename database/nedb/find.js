var db = require('./db.js')

db.find({
  age: 20
}, function(err, docs) {
  if (err) {
    console.log(err)
    return
  }
  console.log('----年龄为20的同学--------')
  console.log(docs)
})

db.findOne({
  age: 20
}, function(err, docs) {
  console.log('----年龄为20的第一位同学------')
  console.log(docs)
})

db.find({
  'classes.math': 90
}, function(err, docs) {
  console.log('-------数学成绩为90的同学--------')
  console.log(docs)
})

db.find({
  hobbies: {$regex: /si/}
}, function(err, docs) {
  console.log('--------爱好中存在si的同学--------')
  console.log(docs)
})

db.find({}).sort({
  age: -1
}).skip(0).limit(2)
.exec(function(err, docs) {
  console.log('----------以年龄倒序排序的第一页数据------------')
  console.log(docs)
})

db.find({}).sort({
  age: -1
}).skip(2).limit(2)
.exec(function(err, docs) {
  console.log('----------以年龄倒序排序的第二页数据------------')
  console.log(docs)
})

db.find({
  age: 20
}, {
  age: 1,
  name: 1
}, function(err, docs) {
  console.log('---------输出name和age字段的数据----------')
  console.log(docs)
})

db.find({
  age: 20
}).projection({
  classes: 0,
  hobbies: 0
}).exec(function(err, docs) {
  console.log('--------不输出classes和hobbies字段的数据---------')
  console.log(docs)
})