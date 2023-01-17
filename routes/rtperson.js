
const router = require("express").Router();
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
var db = new sqlite3.Database("person2.db");
router.get("/id/:id",(req,res)=>{
    var query  = "select * from persona where id = "+req.params.id;    
    console.log(query); 
    db.all(query, function(err, rows) {
        obj = rows
        return res.json({"id":req.params.id,"query":query,"info":rows[0] });        
    });    

});
router.get("/getall",(req,res)=>{
    var query  = "select * from persona";
    console.log("query: "+query);
    db.all(query,(err,rows)=>{
        return res.json({"id":"none","query":query,"info":rows});        
    });
});
router.post("/insert",(req,res)=>{
    var edad = req.query.edad
    var profesion = req.query.profesion;
    var nombre = req.query.nombre;
    var id = req.query.id;
    console.log(req.query);
    var query  = "INSERT INTO Persona (edad, profesion, nombre) VALUES("+edad+",'"+profesion+"','"+nombre+"')";      
    console.log("query: "+query);
    db.run(query);
    return res.json({"status":"succes"});
});
router.put("/update", (req,res)=>{
    try {
        var edad = req.query.edad
        var profesion = req.query.profesion;
        var nombre = req.query.nombre;
        var id = req.query.id;
        var query = "UPDATE Persona SET edad = " +edad+ ", profesion='"+ profesion+ "',nombre='"+nombre+ "' where id = "+id;
        console.log("query--update");
        console.log(query);
        db.run(query);
        return res.json({"status":"success"})

    } catch (error) {
        console.log("entro en catch");
        //return res.json({"status":"error", "message":error});
    }
})


module.exports = router;