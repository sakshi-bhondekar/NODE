// const { ifError } = require("assert");
const mysql = require("mysql2")
const con = mysql.createConnection({

    host:'localhost',
    user:"admin",
    password:"",
    database: "sakshi"

});

con.connect((err)=>{
    if(err){
        console.warn("error in connection")
    }
    else{
        console.warn("connected")
    }
});



module.exports = con;





