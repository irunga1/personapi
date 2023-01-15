const router = require("express").Router();
const person = require("../libs/person");
const db = require("../models/person");
router.get("/phrase1/:name/:age",(req,res)=>{
    console.log("phrase");
    var p1 = new person(req.params.name,req.params.age);
    var phrase1 = p1.createPhrase();
    console.log("phrases");
    return res.send({"message":phrase1});
});
router.get("/phrase2/:name/:profesion",(req,res)=>{
    console.log("phrofesion");
    var p1 = new person("juan","pedro");
    var phrase1  = p1.creatPhrase2(req.params.name, req.params.profesion);
    return res.send({"message":phrase1});
});
//conected to sqlite
router.get("/id/:id",(req,res)=>{
    console.log("get info");
    var query  = "select * from persona where id = "+req.params.id;
    var sqlite3 = require('sqlite3');
    var db = new sqlite3.Database('person2.db');
    console.log(query); 
    var obj = {"exist":true};
    db.all(query, function(err, rows) {
        obj = rows
        return res.json({"id":req.params.id,"query":query,"info":rows[0] });        
    });    
    console.log(obj)

});
module.exports = router;