const express = require("express");
const person  = require("./libs/person.js");
const phrases = require("./routes/phrases");
const rtperson = require("./routes/rtperson");
const rtpaquete = require("./routes/rtpaquete");

// const cors = require("cors");

var whiteList = ["http://localhost"];
app = new express();

// app.use(function (req, res, next) {
//     // console.log(req);
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// const whitelist = ['http://localhost', 'http://locahost']
// const corsOpts = {
//     origin: '*',
  
//     methods: [
//       'GET',
//       'POST',
//     ],
  
//     allowedHeaders: [
//       'Content-Type',
//     ],
// };
  
// app.use(cors(corsOpts));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

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