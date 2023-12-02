// 1.CREATING FILE INSIDE FOLDER NAME NODEJS

const fs = require ('fs')
const path = require ('path')
const dirPath = path.join(__dirname,'CRUD');
const filePath =`${dirPath}/apple.txt`;
fs.writeFileSync(filePath, 'this is a simple text file made by shohrab')