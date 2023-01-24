var conf = {
    'host':'trackingdb.cepnwkdbm3wm.us-east-1.rds.amazonaws.com',
    'user':'apitrackinguser',
    'password':'##20230122$$20230122rJ',
    'database':'trackingdb'
}
const  knex = require('knex')({
    client:"mysql",
    connection:conf,
    pool:{min:2,max:10}
});

module.exports = knex;