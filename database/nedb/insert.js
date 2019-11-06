var db = require('./db.js')
var docs = [{
  name: 'Alice',
  age: 20,
  grade: 2,
  classes: {
    math: 92,
    chinese: 98,
    english: 100
  },
  rank: 1
}, {
  name: 'Jack',
  age: 19,
  grade: 1,
  classes: {
    math: 91,
    chinese: 97,
    english: 99
  },
  hobbies: ['paint', 'sing'],
  rank: 2
}, {
  name: 'Jhon',
  age: 21,
  grade: 3,
  classes: {
    math: 89,
    chinese: 96,
    english: 95
  },
  rank: 3
}, {
  name: 'Jenny',
  age: 18,
  grade: 1,
  classes: {
    math: 90,
    chinese: 92,
    english: 94
  },
  rank: 4
}, {
  name: 'Paul',
  age: 20,
  grade: 2,
  classes: {
    math: 89,
    chinese: 93,
    english: 98
  },
  rank: 5
}, {
  name: 'Yan',
  age: 20,
  grade: 2,
  classes: {
    math: 90,
    chinese: 92,
    english: 96
  },
  hobbies: ['dance'],
  rank: 6
}, {
  name: 'Judy',
  age: 21,
  grade: 3,
  classes: {
    math: 90,
    chinese: 92,
    english: 89
  },
  rank: 7
}, {
  name: 'Bill',
  age: 20,
  grade: 2,
  classes: {
    math: 84,
    chinese: 80,
    english: 100
  },
  hobbies: ['swimming', 'basketball'], 
  rank: 8
}]

db.insert(docs, function(err, newDocs) {
  console.log(newDocs)
})