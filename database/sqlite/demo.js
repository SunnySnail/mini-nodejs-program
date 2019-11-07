const sqlite3 = require('sqlite3').verbose()

var db = new sqlite3.Database('./user.db', sqlite3.OPEN_READWRITE, function(err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('connect database successfully')
})

db.run('INSERT INTO langs(name) VALUES(?)', ['C'], function(err) {
  if (err) {
    return console.log(err.message)
  }
  console.log(this.changes)
})

db.all('SELECT DISTINCT Name name FROM langs', [], function(err, rows) {
  if (err) {
    return console.log(err.message)
  }

  console.log(rows)
})

db.run('UPDATE langs SET name = ? WHERE name = ?', ['Javascript', 'C'], function(err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('updated: ' + this.changes)
})

db.all('SELECT * FROM langs', [], function(err, rows) {
  if (err) {
    return console.log(err)
  }
  console.log('find updated data')
  console.log(rows)
})

db.run('DELETE FROM langs WHERE name = ?', ['C'], function(err) {
  if(err) {
    return console.log(err.message)
  }
  console.log('deleted: ' + this.changes)
})

db.close(function(err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('close database connection')
})


