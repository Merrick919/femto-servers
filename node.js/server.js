fs=require('fs');
require('http').createServer((req,res)=>{path='public'+(!require('path').basename(req.url)?'/home.txt':req.url);fs.exists(path,callback=>{fs.readFile(callback?(path):'public/404.txt',(err,data)=>{res.end(data)})})}).listen(80);