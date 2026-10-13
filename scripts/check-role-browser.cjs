const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),http=require('node:http'),{spawn}=require('node:child_process');
const {findChrome}=require('./find-chrome.cjs'),root=path.resolve(__dirname,'..'),baseline=process.argv.includes('--baseline');
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const fixtureSources=[['python','# comment\nurl = "https://example.test/#fragment"'],['javascript','// comment\nconst url = "https://example.test/a//b";'],['html','<!-- note --><link href="https://cdn.example.test/file.css">'],['bash','# note\necho "https://example.test/#hash"'],['css','/* note */ .link { content: "https://example.test"; }']];
const server=http.createServer((req,res)=>{let file;try{file=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));}catch{res.writeHead(400);return res.end()}if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end()}fs.readFile(file,(error,data)=>{res.writeHead(error?404:200,{'Content-Type':file.endsWith('.svg')?'image/svg+xml':file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html'});res.end(error?'missing':data)});});
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
  const results=[],jsErrors=[];ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')jsErrors.push(m.params.exceptionDetails.text)});
  for(const width of [375,768,1440]){
   await call('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});await call('Page.navigate',{url:'http://127.0.0.1:'+server.address().port+'/courses.html'});await delay(700);
   for(const key of ['frontend','fullstack','ai-engineer','security','devops']){
    await evaluate('('+String(function(key){document.querySelector('[data-role="'+key+'"]').click();})+')('+JSON.stringify(key)+')');await delay(100);
    const check=await evaluate('('+String(function(){const modal=document.getElementById('roleModal');const target=modal.open?modal:document.getElementById('rolePanel');const links=[...target.querySelectorAll('.role-skill')];return {hash:location.hash,modal:modal.open,panelVisible:!target.hidden,skills:links.map(a=>a.getAttribute('href')),counts:links.every(a=>/\d+ ch??ng/.test(a.textContent)),focus:target.contains(document.activeElement),overflow:document.documentElement.scrollWidth>innerWidth};})+')()');
    results.push({width,key,...check});await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await call('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
    await delay(120);const closed=await evaluate('('+String(function(){return !document.getElementById('roleModal').open&&document.getElementById('rolePanel').hidden&&document.activeElement.classList.contains('role-box')&&!location.hash;})+')()');if(!closed){console.log({width,key,state:await evaluate('({modal:document.getElementById("roleModal").open,panel:document.getElementById("rolePanel").hidden,focus:document.activeElement.tagName,button:document.querySelector('[data-role="frontend"]').outerHTML,buttonStyle:getComputedStyle(document.querySelector('[data-role="frontend"]')).display,hash:location.hash})')});throw Error('Escape/focus failed');}
   }
   const search=await evaluate('('+String(function(){const i=document.getElementById('searchInput');i.value='thuat toan';i.dispatchEvent(new Event('input'));return [...document.querySelectorAll('#allCourses .card')].filter(c=>!c.hidden).map(c=>c.dataset.skill);})+')()');if(!search.includes('thuat-toan'))throw Error('Accent search failed');
   await evaluate('location.hash="role=ai-engineer"');await delay(100);const shared=await evaluate('document.querySelector("[data-role=ai-engineer]").getAttribute("aria-expanded")');if(shared!=='true')throw Error('Hash navigation failed');
   if(width===1440){const shot=await call('Page.captureScreenshot',{captureBeyondViewport:true});fs.writeFileSync(path.join(root,'artifacts/role-panel.png'),Buffer.from(shot.data,'base64'));}
  }
  const failures=results.filter(r=>r.overflow||!r.focus||!r.counts||r.skills.some(s=>!s.endsWith('/index.html'))||r.modal!==(r.width===375));
  fs.writeFileSync(path.join(root,'artifacts/role-browser.json'),JSON.stringify({results,jsErrors,failures},null,2));console.log(JSON.stringify({cases:results.length,failures,jsErrors},null,2));process.exitCode=failures.length||jsErrors.length?1:0;
 }finally{ws?.close();chrome.kill();server.close()}
})().catch(error=>{console.error(error);server.close();process.exitCode=1});
