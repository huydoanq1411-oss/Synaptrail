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

  const out=path.join(root,'artifacts/catalog-cards');fs.mkdirSync(out,{recursive:true});
  const results=[];
  const snapshot=async name=>{const shot=await call('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(out,name+'.png'),Buffer.from(shot.data,'base64'));};
  await call('Network.enable');await call('Network.setBlockedURLs',{urls:['*fonts.googleapis.com*','*fonts.gstatic.com*']});
  for(const theme of ['dark','light'])for(const width of [375,768,1440]){
    await call('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});
    await call('Page.navigate',{url:'http://127.0.0.1:'+server.address().port+'/courses.html'});await pause(500);
    await evaluate('localStorage.setItem("synaptrail-theme",'+JSON.stringify(theme)+');localStorage.setItem("synaptrail-progress",JSON.stringify({java:{chapter01:{done:true,quizScore:100,updatedAt:new Date().toISOString()}}}))');
    await call('Page.reload');await pause(700);
    await evaluate("document.querySelectorAll('img').forEach(i=>i.loading='eager');Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))");
    await pause(500);
    for(const section of ['role-based','skill-based','best-practices','project-ideas','agent-toolbox','ai-engineering-knowledge']){
      await evaluate("document.getElementById('"+section+"').scrollIntoView({block:'start',behavior:'instant'})");await pause(350);await snapshot(theme+'-'+width+'-'+section);
    }
    await evaluate("document.querySelector('[data-skill=docker]').closest('.skill-cluster').scrollIntoView({block:'start',behavior:'instant'})");await pause(350);await snapshot(theme+'-'+width+'-systems');
    await evaluate("window.scrollTo({top:0,behavior:'instant'})");await pause(200);await snapshot(theme+'-'+width+'-top');
    const full=await evaluate('document.documentElement.scrollHeight');
    const fullShot=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width,height:full,scale:1}});fs.writeFileSync(path.join(out,theme+'-'+width+'-full.png'),Buffer.from(fullShot.data,'base64'));
    const state=await evaluate(`(()=>{
      const cards=[...document.querySelectorAll('.learning-card')],canvas=document.createElement('canvas');canvas.width=canvas.height=1;const ctx=canvas.getContext('2d',{willReadFrequently:true});
      function lum(color){ctx.fillStyle=color;ctx.fillRect(0,0,1,1);const a=[...ctx.getImageData(0,0,1,1).data].slice(0,3).map(x=>{x/=255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4});return .2126*a[0]+.7152*a[1]+.0722*a[2];}
      const contrast=(a,b)=>{a=lum(a);b=lum(b);return (Math.max(a,b)+.05)/(Math.min(a,b)+.05)};
      return {cards:cards.length,overflow:document.documentElement.scrollWidth>innerWidth,images:cards.every(c=>{const i=c.querySelector('img'),art=c.querySelector('.card-art');return i.complete&&i.naturalWidth>0&&Math.abs(i.getBoundingClientRect().width-art.getBoundingClientRect().width)<2&&Math.abs(i.getBoundingClientRect().height-art.getBoundingClientRect().height)<2}),widths:cards.map(c=>c.getBoundingClientRect().width),imageRatios:cards.map(c=>c.querySelector('.card-art').getBoundingClientRect().height/c.getBoundingClientRect().height),descriptionContrast:Math.min(...cards.map(c=>contrast(getComputedStyle(c.querySelector('.card-desc')).color,getComputedStyle(c).backgroundColor))),chipContrast:Math.min(...cards.flatMap(c=>[...c.querySelectorAll('.card-chips>span')].map(s=>contrast(getComputedStyle(s).color,getComputedStyle(s).backgroundColor)))),progress:document.querySelector('[data-skill=java] progress').value===1};
    })()`);
    const roleResults=[];
    for(const key of ['frontend','fullstack','ai-engineer','security','devops']){
      await evaluate("document.querySelector('[data-role="+key+"]').click()");await pause(250);
      const role=await evaluate(`(()=>{const p=document.querySelector(innerWidth<=600?'#roleModal':'#rolePanel'),b=p.querySelector('[data-close-role]'),r=p.getBoundingClientRect(),s=b.getBoundingClientRect(),links=[...p.querySelectorAll('.role-skill')];return {key:'${key}',closeInside:s.left>=r.left&&s.right<=r.right,visible:r.width>0,ordered:JSON.stringify(links.map(a=>a.getAttribute('href').split('/')[0]))===JSON.stringify(window.SynaptrailCatalog.roles['${key}'].skills),focus:p.contains(document.activeElement),overflow:p.scrollWidth>p.clientWidth+1}})()`);
      roleResults.push(role);if(key==='fullstack')await snapshot(theme+'-'+width+'-panel');
      await evaluate("document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}))");
    }
    const search=await evaluate("(()=>{const input=document.getElementById('searchInput');input.value='zzzz-no-match';input.dispatchEvent(new Event('input'));const hidden=[...document.querySelectorAll('.resource-card')].every(c=>getComputedStyle(c).display==='none');input.value='docker';input.dispatchEvent(new Event('input'));const found=!document.querySelector('[data-skill=docker]').hidden;input.value='';input.dispatchEvent(new Event('input'));return hidden&&found&&[...document.querySelectorAll('.resource-card')].every(c=>!c.hidden)})()");
    await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
    const reduced=await evaluate("(()=>{const c=document.querySelector('.learning-card');c.focus({preventScroll:true});const s=getComputedStyle(c);return s.transitionDuration==='0s'&&s.animationName==='none'&&s.outlineStyle!=='none'})()");
    await call('Emulation.setEmulatedMedia',{features:[]});
    const result={theme,width,...state,roleResults,search,reduced};results.push(result);
    if(state.cards!==38||state.overflow||!state.images||!state.progress||state.descriptionContrast<4.5||state.chipContrast<4.5||!search||!reduced||roleResults.some(r=>!r.closeInside||!r.visible||!r.ordered||!r.focus||r.overflow))failures.push('Failed catalogue checks '+theme+' '+width);
  }
  fs.writeFileSync(path.join(out,'checks.json'),JSON.stringify({results,failures},null,2));
  console.log(JSON.stringify({cases:results.length,cards:results[0]?.cards,descriptionContrast:results.map(r=>[r.theme,r.width,r.descriptionContrast]),chipContrast:results.map(r=>[r.theme,r.width,r.chipContrast]),minImageRatio:Math.min(...results.flatMap(r=>r.imageRatios)),failures},null,2));process.exitCode=failures.length?1:0;
 }finally{if(ws)ws.close();chrome.kill();server.close()}
})().catch(e=>{console.error(e);server.close();process.exitCode=1});
