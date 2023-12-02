const express = require ("express");
const app = express();
const con = require("./config")

app.get("/", (req, resp)=>{
//     resp.send("route done")
con.query("select * from shohrab",(err, result)=>{

    if (err){
        resp.send("error in getting data from db")
    }
    else{
        resp.send("result")

    }
})
})
app.listen(5000,()=>{
    console.log("server started at port 5000")
})




