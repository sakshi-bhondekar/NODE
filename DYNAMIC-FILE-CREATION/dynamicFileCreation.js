// DYNAMIC FILE CREATION

const fs = require('fs');
const path = require ('path')
const dirPath =path.join(__dirname,'files');
for (i=0;i<5;i++){
       fs.writeFileSync(__dirname+"/hello"+i+".txt", "simple text file");
}