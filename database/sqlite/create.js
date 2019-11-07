var db = new sqlite3.Database('./user.db', sqlite3.OPEN_READWRITE, function(err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('connect database successfully')
})

db.run('CREATE TABLE langs(name text)', function(err) {
  if (err) {
    return console.log(err.message)
  }
  console.log('create table langs')
})