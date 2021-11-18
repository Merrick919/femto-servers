fs=require('fs');

function f(path,res){fs.exists(path,callback=>{if(callback){fs.readFile(path,(err,data)=>{res.end(data)})}else{fs.readFile('public/404.txt',(err,data)=>{res.end(data)})}})}

require('http').createServer(function t(req,res){f('public'+(!require('path').basename(req.url)?'/home.txt':req.url),res)}).listen(80);