var db = require('./db.js')

db.count({
  age: 20
}, function(err, docs) {
  console.log(docs)
})