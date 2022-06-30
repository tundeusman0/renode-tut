const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("<h1>Hello Node</h1>")
});

server.listen(5000);