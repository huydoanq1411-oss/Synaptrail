const fs=require('node:fs');const path=require('node:path');const os=require('node:os');const http=require('node:http');const {spawn}=require('node:child_process');
const root=path.resolve(__dirname,'..');
const {findChrome}=require('./find-chrome.cjs');
const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0] === '/' ? '/index.html' : req.url.split('?')[0]));if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end()}fs.readFile(file,(err,data)=>{res.writeHead(err?404:200,{'Content-Type':file.endsWith('.svg')?'image/svg+xml':file.endsWith('.js')?'text/javascript; charset=utf-8':file.endsWith('.css')?'text/css; charset=utf-8':'text/html; charset=utf-8'});res.end(err?'Not found':data)})});
const pause=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 const chromePath=findChrome();
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const profile=fs.mkdtempSync(path.join(os.tmpdir(),'synaptrail-ui-'));
 const chrome=spawn(chromePath,['--headless=new','--disable-gpu','--no-sandbox','--disable-extensions','--run-all-compositor-stages-before-draw','--disable-features=PaintHolding','--no-first-run','--remote-debugging-port=9447','--user-data-dir='+profile,'about:blank'],{stdio:['ignore','ignore','pipe']});
 let launchError;chrome.on('error',error=>{launchError=error});
 let ws;
 try{
  let targets;for(let i=0;i<30;i++){try{targets=await(await fetch('http://127.0.0.1:9447/json')).json();break}catch{await pause(200)}}
  if(!targets)throw Error(launchError?.message||'Chrome debugging unavailable');
  ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((r,j)=>{const timer=setTimeout(()=>j(Error('Chrome connection timed out')),10000);ws.onopen=()=>{clearTimeout(timer);r()};ws.onerror=()=>{clearTimeout(timer);j(Error('Chrome connection failed'))}});
  let id=0;const pending=new Map();const failures=[];
  ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result)}else if(m.method==='Runtime.exceptionThrown')failures.push(m.params.exceptionDetails.text)};
  const call=(method,params={})=>new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error(method+' timed out')),10000);pending.set(++id,{resolve:value=>{clearTimeout(timer);resolve(value)},reject:error=>{clearTimeout(timer);reject(error)}});ws.send(JSON.stringify({id,method,params}))});
  const evaluate=async expression=>{const evaluated=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(evaluated.exceptionDetails)throw Error(evaluated.exceptionDetails.exception?.description||evaluated.exceptionDetails.text);return evaluated.result.value;};
  await call('Runtime.enable');await call('Page.enable');

