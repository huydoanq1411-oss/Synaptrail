const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),http=require('node:http'),{spawn}=require('node:child_process');
const {findChrome}=require('./find-chrome.cjs'),root=path.resolve(__dirname,'..'),baseline=process.argv.includes('--baseline');
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const fixtureSources=[['python','# comment\nurl = "https://example.test/#fragment"'],['javascript','// comment\nconst url = "https://example.test/a//b";'],['html','<!-- note --><link href="https://cdn.example.test/file.css">'],['bash','# note\necho "https://example.test/#hash"'],['css','/* note */ .link { content: "https://example.test"; }']];
const server=http.createServer((req,res)=>{let file;try{file=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));}catch{res.writeHead(400);return res.end()}if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end()}fs.readFile(file,(error,data)=>{res.writeHead(error?404:200,{'Content-Type':file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html'});res.end(error?'missing':data)});});
(async()=>{
 const chromePath=findChrome();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const profile=fs.mkdtempSync(path.join(os.tmpdir(),'synaptrail-highlight-'));
 const chrome=spawn(chromePath,['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'});
 let ws;
 try{
  let port;for(let i=0;i<80;i++){try{port=fs.readFileSync(path.join(profile,'DevToolsActivePort'),'utf8').split('\n')[0];break}catch{await delay(100)}}if(!port)throw Error('Chrome startup failed');
  const targets=await(await fetch('http://127.0.0.1:'+port+'/json')).json();ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((resolve,reject)=>{ws.onopen=resolve;ws.onerror=reject});
  let id=0;const pending=new Map();ws.onmessage=event=>{const msg=JSON.parse(event.data);if(msg.id){const task=pending.get(msg.id);pending.delete(msg.id);msg.error?task.reject(Error(msg.error.message)):task.resolve(msg.result)}};
  const call=(method,params={})=>new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error(method+' timed out')),15000);pending.set(++id,{resolve:value=>{clearTimeout(timer);resolve(value)},reject:error=>{clearTimeout(timer);reject(error)}});ws.send(JSON.stringify({id,method,params}))});
  const evaluate=async expression=>{const result=await call('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(result.exceptionDetails)throw Error(result.exceptionDetails.exception?.description||result.exceptionDetails.text);return result.result.value};
  await call('Page.enable');await call('Runtime.enable');await call('Network.enable');await call('Network.setBlockedURLs',{urls:['*fonts.googleapis.com*','*fonts.gstatic.com*']});
  const results=[];
  for(const width of [375,768,1440]){
   await call('Emulation.setDeviceMetricsOverride',{width,height:1100,deviceScaleFactor:1,mobile:false});
   await call('Page.navigate',{url:'http://127.0.0.1:'+server.address().port+'/reports/illustration-preview.html'});await delay(700);
   results.push(await evaluate('({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,images:[...document.images].every(i=>i.complete&&i.naturalWidth===320),count:document.images.length})'));
   if(width===1440){const shot=await call('Page.captureScreenshot',{captureBeyondViewport:true});fs.writeFileSync(path.join(root,'artifacts/illustration-preview.png'),Buffer.from(shot.data,'base64'));}
  }
  console.log(JSON.stringify(results,null,2));process.exitCode=results.some(r=>r.overflow||!r.images)?1:0;
 }finally{ws?.close();chrome.kill();server.close()}
})().catch(error=>{console.error(error);server.close();process.exitCode=1});
