var db = require('./db.js')

db.remove({
  age: {
    $lt: 20
  }
}, {
  multi: true
}, function(err, numRemoved) {
  console.log(numRemoved)
})