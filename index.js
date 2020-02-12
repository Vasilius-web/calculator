const fs = require("fs");
const http = require('http');



function square(a, b) { return a * b; }
http.createServer((req, res) => {
    const input = JSON.parse(
        fs.readFileSync('./input.json', { encoding: "utf-8" }));
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(square(input.square,input.costPerMetr).toString());
    res.end();

  }).listen(8080);
