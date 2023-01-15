var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('person1.db');
module.exports = db;