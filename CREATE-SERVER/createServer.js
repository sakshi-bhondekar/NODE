// CREATE SERVER

const http = require('http');

http.createServer((req,resp)=>{
       resp.write("http server created");
       resp.end();
}).listen(4500)