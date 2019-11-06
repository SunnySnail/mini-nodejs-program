var Datastore = require('nedb')
var db = new Datastore({
  filename: './user.db',
  autoload: true
})

module.exports = db