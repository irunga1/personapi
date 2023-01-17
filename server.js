const express = require("express");
const person  = require("./libs/person.js");
const phrases = require("./routes/phrases");
const rtperson = require("./routes/rtperson");
const rtpaquete = require("./routes/rtpaquete");

var whiteList = ["http://localhost"];
app = new express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
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
app.listen(3002,(req,res)=>{
    console.log("server start");
});