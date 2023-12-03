const path = require('path')

const a1 = path.basename('C:\\temp\\myfile.html');
console.log(a1);
const a2 = path.dirname('C:\\temp\\myfile.html');
console.log(a2);
const a3 = path.join('C:\\temp\\myfile.html');
console.log(a3);
const a4 = path.parse('C:\\temp\\myfile.html');
console.log(a4);
const a5 = path.extname(__filename);
const a6 = path.extname(__dirname);
console.log(__filename, a5);
console.log(__dirname, a6);
require('node:path').win32
