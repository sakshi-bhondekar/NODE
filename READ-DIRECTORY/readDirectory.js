// READ DIRECTORY

const fs = require('fs')
fs.readdir(__dirname,(err,files)=>{
       files.forEach((a)=>{
              console.log("file name is " , a)
       })
})