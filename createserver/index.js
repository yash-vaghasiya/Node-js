const http = require('http');

http.createServer((req , res)=>{
    res.write("<h1> Hello This is Node </h1>");
    res.end();
}).listen(5500);