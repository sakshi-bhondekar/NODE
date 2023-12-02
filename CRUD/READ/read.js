//2. READ

const fs = require('fs')
const { pathToFileURL } = require('D:/Nodejs/CRUD/READ/orange2')
fs.readFile(pathToFileURL, 'utf8',(err,item)=>{
              console.log(item)
       })