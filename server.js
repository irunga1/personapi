const express = require("express");
const person  = require("./libs/person.js");
const phrases = require("./routes/phrases");
const rtperson = require("./routes/rtperson");
const rtpaquete = require("./routes/rtpaquete");
const rtcompany = require("./routes/rtcompany");
const rtclient = require("./routes/rtclient");
const rtdriver = require("./routes/rtdriver");
const rtpackaget = require("./routes/rtpackagetype");
const bodyParser = require("body-parser");
// const cors = require("cors");

var whiteList = ["http://localhost"];
app = new express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use("/company",rtcompany);
app.use("/client",rtclient);
app.use("/driver",rtdriver);
app.use("/driver",rtpackaget);



app.use("/test",(req,res)=>{
    res.send({
        "server":"start"
    });
});
app.use("/phrase/",(req,res)=>{
    var p1 = new person("Juan","39");
    var phrase1 = p1.createPhrase();
    res.send({
        "message":phrase1
    });    
});

app.use("/person",rtperson);
app.use("/entrega",rtpaquete);


app.use("/phrases",phrases );
app.listen(3000,(req,res)=>{
    console.log("server start");
});
