const router = require("express").Router();
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
var db = new sqlite3.Database("person2.db");
router.get("/insert", (req,res)=>{
    console.log("entro insert");
    console.log(req.query);
    var idMensajero  = req.query.idmensajero;
    var idPaquete  = req.query.idpaquete;
    var lat  = req.query.lat;
    var lon  = req.query.lon;
    var date1 = req.query.date;
    var time1 = req.query.time;
    console.log(req.query);
    var query  = "INSERT INTO entrega (id_mensajero, id_paquete, lat,lon,date,time) VALUES("+idMensajero+",'"+idPaquete+"','"+lat+"','"+lon+"' ,'"+date1+"','"+time1+"')";      
    console.log(query);
    console.log("query: "+query);
    db.run(query);
    return res.json({"status":"succes"});

});
router.get("/get/:id",(req,res)=>{//show ids
    console.log("show by id");
    var query  = "select * from entrega where id_paquete = "+req.params.id;
    console.log(query); 
    db.all(query, function(err, rows) {
        obj = rows
        return res.json({"id":req.params.id,"info":rows });        
    });    
})
router.get("/getall",(req,res)=>{
    console.log("show all");
    var query  = "select * from entrega";
    console.log("query: "+query);
    db.all(query,(err,rows)=>{
        return res.json({"id":"none","info":rows});        
    });
})

module.exports =  router;