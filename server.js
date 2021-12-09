// var http = require('http'); // 1 - Import Node.js core module

// var server = http.createServer(function (req, res) {   // 2 - creating server
//     res.writeHead(200, { 'Content-Type': 'application/json' });
    
//     let params = new URLSearchParams(req.url);
//     console.log(params);

//     // console.log(req);

//     res.write(JSON.stringify({ message: req.url}));  

//     res.end(); 
// });

// server.listen(9999); //3 - listen for any incoming requests

// console.log('Node.js web server at port 9999 is running..')


var express = require('express');
var app = express(); 
var PORT = 9999;
  
// app.get('/build', function (req, res) {
//   res.send(req.path);
// });

app.get('/build/:version', function(req, res) {
    res.send({results: [{version: req.params.version}]});    
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});