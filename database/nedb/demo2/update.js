var db = require('./db.js')

// db.update({
// 	age: {
//     $lt: 21
//   }
// }, {
// 	$unset: {
//   	grade: 2
//   }
// })

// db.update({
//   name: 'Alice'
// }, {
//   $inc: {
//     sex: 'female'
//   }
// })

db.update({
  name: 'Alice'
}, {
  $push: {
    hobbies: 'sing'
  }
})

db.update({
  name: 'Alice'
}, {
  $push: {
    hobbies: {
      $each: ['swimming', 'dance']
    }
  }
})

db.update({
  name: 'Alice'
}, {
  $addToSet: {
    hobbies: 'sing'
  }
})

// db.update({
//   name: 'Alice'
// }, {
//   $pop: {
//     hobbies: 1
//   }
// })

db.update({
  age: {
    $lte: 20
  }
}, {
  $unset: {
    grade: true
  }
}, {
  multi: true
})

db.update({
  name: 'Tony'
}, {
  $set: {
    age: 20,
    rank: 2,
    hobbies: ['sing', 'dance']
  }
}, {
  upsert: true,
  returnUpdatedDocs: true
}, function(err, numberReplaced, updateDocs, upsert) {
  console.log(updateDocs)
})