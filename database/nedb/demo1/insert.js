var db = require('./db.js')

// 插入单一数据
db.insert({
	name: 'Alice',
  age: 20,
  rank: 1
}, function(err, docs){
  // docs：插入后的数据
})

// 批量插入数据
db.insert([{
  name: 'Jack',
  age: 20,
  rank: 2
}, {
  name: 'Jhon',
  age: 21,
  rank: 3
}], function(err, docs){
})