d=require('fs');

function f(g,h){d.exists(g,y=>{if(y){d.readFile(g,(j,k)=>{h.end(k)})}else{d.readFile('public/404.txt',(j,k)=>{h.end(k)})}})}

require('http').createServer(function l(m,n){f('public'+(!require('path').basename(m.url)?'/home.txt':m.url),n)}).listen(80);