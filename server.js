const express = require("express");
const person  = require("./libs/person.js");
const phrases = require("./routes/phrases");
const rtperson = require("./routes/rtperson");
app = new express();
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

app.use("/phrases",phrases );
app.listen(3002,(req,res)=>{
    console.log("server start");
});