const fs = require('fs')


// const a = fs.readFileSync("file.txt");
// console.log(a);


// fs.readFile('file.txt', 'utf-8', (err, data)=>{
//     console.log((err, data));
// })


fs.writeFileSync('file.txt', "This is a data")
console.log("Finished reading file");