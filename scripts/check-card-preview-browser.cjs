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

  fs.mkdirSync(path.join(root,'artifacts/cards-preview'),{recursive:true});
  const results=[];
  for(const theme of ['dark','light'])for(const width of [375,768,1440]){
    await call('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});
    await call('Page.navigate',{url:'http://127.0.0.1:'+server.address().port+'/courses.html'});await pause(700);
    await evaluate('localStorage.setItem("synaptrail-theme",'+JSON.stringify(theme)+')');await call('Page.reload');await pause(1000);
    await evaluate("document.querySelectorAll('img').forEach(i=>i.loading='eager')");await evaluate("Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))");await pause(500);
    await evaluate("window.scrollTo({top:0,behavior:'instant'})");await pause(200);const topShot=await call('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(root,'artifacts/cards-preview',theme+'-'+width+'-top.png'),Buffer.from(topShot.data,'base64'));
    for(const section of ['role-based','skill-based']){
      await evaluate("document.getElementById('"+section+"').scrollIntoView({block:'start',behavior:'instant'})");await pause(700);
      const shot=await call('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(root,'artifacts/cards-preview',theme+'-'+width+'-'+section+'.png'),Buffer.from(shot.data,'base64'));
    }
    await evaluate("document.querySelector('[data-skill=docker]').closest('.skill-cluster').scrollIntoView({block:'start',behavior:'instant'})");await pause(700);const systems=await call('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(root,'artifacts/cards-preview',theme+'-'+width+'-systems.png'),Buffer.from(systems.data,'base64'));
    await evaluate("window.scrollTo({top:0,behavior:'instant'})");await pause(200);
    const full=await evaluate('({width:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight})');
    const shot=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width,height:full.height,scale:1}});fs.writeFileSync(path.join(root,'artifacts/cards-preview',theme+'-'+width+'-full.png'),Buffer.from(shot.data,'base64'));
    const state=await evaluate(`(()=>{const cards=[...document.querySelectorAll('.sample-card')];function lum(c){const v=c.match(/[0-9.]+/g).slice(0,3).map(Number).map(x=>{x/=255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4});return .2126*v[0]+.7152*v[1]+.0722*v[2]}const bg=lum(getComputedStyle(cards[0]).backgroundColor);return {overflow:document.documentElement.scrollWidth>innerWidth,images:cards.every(c=>{const i=c.querySelector('img');return i.complete&&i.naturalWidth>0&&i.getBoundingClientRect().width>=c.clientWidth-2}),contrast:cards.map(c=>{const text=lum(getComputedStyle(c.querySelector('.sample-desc')).color);return (Math.max(bg,text)+.05)/(Math.min(bg,text)+.05)}),imageRatios:cards.map(c=>c.querySelector(".card-art").getBoundingClientRect().height/c.getBoundingClientRect().height),cards:cards.length}})()`);
    await evaluate("document.querySelector('[data-role=frontend]').click()");await pause(300);
    const panel=await evaluate("(()=>{const p=document.querySelector(innerWidth<=600?'#roleModal':'#rolePanel'),b=p.querySelector('[data-close-role]'),r=p.getBoundingClientRect(),s=b.getBoundingClientRect();return {visible:r.width>0,closeInside:s.left>=r.left&&s.right<=r.right,expanded:document.querySelector('[data-role=frontend]').getAttribute('aria-expanded')==='true'}})()");
    const panelShot=await call('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(root,'artifacts/cards-preview',theme+'-'+width+'-panel.png'),Buffer.from(panelShot.data,'base64'));
    await evaluate("document.querySelector((innerWidth<=600?'#roleModal':'#rolePanel')+' [data-close-role]').click()");
    const search=await evaluate("(()=>{const i=document.getElementById('searchInput');i.value='zzzz-no-match';i.dispatchEvent(new Event('input'));const hidden=[...document.querySelectorAll('.sample-card[data-skill]')].every(c=>getComputedStyle(c).display==='none');i.value='';i.dispatchEvent(new Event('input'));return hidden})()");
    results.push({theme,width,...state,panel,search});
  }
  fs.writeFileSync(path.join(root,'artifacts/cards-preview/checks.json'),JSON.stringify({results,failures},null,2));console.log(JSON.stringify({results,failures},null,2));
  if(results.some(r=>r.overflow||!r.images||r.cards!==9||r.contrast.some(x=>x<4.5)||!r.panel.closeInside||r.search===false||r.imageRatios.some(x=>x<.54))||failures.length)process.exitCode=1;
 }finally{if(ws)ws.close();chrome.kill();server.close()}
})().catch(e=>{console.error(e);server.close();process.exitCode=1});




