
//3.UPDATE

const fs = require ('fs')
const path = require ('path')
// const { fileURLToPath } = require('D:/Nodejs/orange2')
fs.appendFile('orange2.js', 'this is a shohrab fruit ',(err)=>{
       if (!err) console.log("file is updated")
})