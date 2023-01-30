const router  =  require("express").Router();
const company = require("../models/driver");
router.get("/test",(req,res)=>{    
    res.json({"test":"test"});

});
router.get("/getall",async(req,res)=>{ 
    let result = await company.getAll();
    res.json({"data":result});

});
router.get("/get/:id",async (req,res)=>{  
    var id = req.params.id;
    let result = await company.getById(id);
    res.json({"data":result});
});
router.post("/insert",async (req,res)=>{ 
    console.log("========================="); 
    let obj = req.query;
    let result = await company.insert(obj);
    res.json({"info":req.query});
});
router.put("/update",async(req,res)=>{ 
    console.log("========================="); 
    let obj = req.query;
    let result = await company.update(obj);
    res.json({"info":req.query});
});


module.exports = router;