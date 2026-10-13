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
  for(const route of baseline?['fullstack-js/chapter05.html']:['fullstack-js/chapter05.html','python/chapter008.html','java/chapter01.html','cpp/chapter03.html','security/chapter05.html']){
   const url='http://127.0.0.1:'+server.address().port+'/'+route;
   await call('Emulation.setScriptExecutionDisabled',{value:true});await call('Page.navigate',{url});
   let loaded=false;for(let i=0;i<60;i++){loaded=await evaluate("document.readyState==='complete'");if(loaded)break;await delay(100)}if(!loaded)throw Error('Page did not load');
   const original=await evaluate("[...document.querySelectorAll('pre')].map(p=>(p.querySelector('code')||p).textContent)");
   await call('Emulation.setScriptExecutionDisabled',{value:false});await call('Page.reload');
   for(let i=0;i<60;i++){loaded=await evaluate("document.readyState==='complete'&&typeof copyCode==='function'");if(loaded)break;await delay(100)}if(!loaded)throw Error('Scripts did not load');
   const actual=await evaluate("[...document.querySelectorAll('pre')].map(p=>(p.querySelector('code')||p).textContent)");
   if(baseline){results.push({route,reproduced:JSON.stringify(original)!==JSON.stringify(actual),original:original[0],broken:actual[0]});continue;}
   const copy=await evaluate(`(async()=>{let captured;Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async text=>{captured=text}}});const buttons=[...document.querySelectorAll('[onclick^="copyCode"]')];const values=[];for(const button of buttons){copyCode(button);await Promise.resolve();const pre=button.parentElement.querySelector('pre code')||button.parentElement.querySelector('pre');values.push(captured===pre.textContent);}return {buttons:buttons.length,passed:values.every(Boolean)}})()`);
   const fixtures=await evaluate('(' + JSON.stringify(fixtureSources) + ').map(([language,source])=>{const node=document.createElement("code");node.innerHTML=SynaptrailHighlighter.highlight(source,language);const comment=node.querySelector(".tok-com")?.textContent;return {language,preserved:node.textContent===source,comment:!!comment&&!comment.includes("https:")}})');
   const count=route.startsWith('fullstack-js/')?await evaluate("document.querySelector('#sidebar .sub').textContent"):null;
   results.push({route,blocks:original.length,textPreserved:JSON.stringify(original)===JSON.stringify(actual),copy,fixtures,sidebarCount:count});
  }
  const failures=baseline?[]:results.filter(r=>!r.textPreserved||!r.copy.passed||r.fixtures.some(f=>!f.preserved||!f.comment)||r.sidebarCount&&r.sidebarCount!=='22 chương');
  fs.mkdirSync(path.join(root,'artifacts'),{recursive:true});fs.writeFileSync(path.join(root,'artifacts',baseline?'highlight-before.json':'highlight-after.json'),JSON.stringify(results,null,2));
  console.log(JSON.stringify({results,failures:failures.length},null,2));process.exitCode=failures.length?1:0;
 }finally{ws?.close();chrome.kill();server.close()}
})().catch(error=>{console.error(error);server.close();process.exitCode=1});
