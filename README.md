# extension_experiment


npm i -g http-server

cd ./main/ && http-server -p 8080

cd ..

cd ./iframe-content/ && http-server -p 8081


then 

load this the root dir as unpacked browser extension into  brave://extensions/  or equivalent


then visit 

http://localhost:8080/test.html

the extension should automatically override window.alert and Array.push (as per injectedScript.js)

-> click alert button to see override
-> in browser console do e.g.:
let arr = [];
arr.push(1, 2, 3);
