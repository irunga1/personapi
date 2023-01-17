const router = require("express").Router();
const sqlite3 = require("sqlite3");
const bodyParser = require("body-parser");
var db = new sqlite3.Database("person2.db");
router.post("/insert", (req,res)=>{

    var idMensajero  = req.query.idmensajero;
    var idPaquete  = req.query.idpaquete;
    var lat  = req.query.lat;
    var lon  = req.query.lon;
    var date1 = "notyet";
    var time1 = "notyet";
    console.log(req.query);
    var query  = "INSERT INTO entrega (id_mensajero, id_paquete, lat,lon,date,time) VALUES("+idMensajero+",'"+idPaquete+"','"+lat+"','"+lon+"' ,'"+date1+"','"+time1+"')";      
    console.log("query: "+query);
    db.run(query);
    next();
    return res.json({"status":"succes"});

});


module.exports =  router;