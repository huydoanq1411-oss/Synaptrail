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

  const out=path.join(root,'artifacts/backgrounds');fs.mkdirSync(out,{recursive:true});
  await call('Network.enable');await call('Network.setBlockedURLs',{urls:['*fonts.googleapis.com*','*fonts.gstatic.com*']});
  await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  const results=[];
  for(const route of ['index.html','courses.html','java/chapter01.html','python/chapter001.html','thuat-toan/chapter01.html','machine-learning/index.html','Quiz_and_other/quiz-tong-hop.html','projects/fullstack-js.html'])for(const theme of ['dark','light'])for(const width of [375,1440]){
    await call('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});
    await call('Page.navigate',{url:'http://127.0.0.1:'+server.address().port+'/'+route});await pause(350);
    await evaluate(`document.documentElement.dataset.theme='${theme}';if(document.body.hasAttribute('data-theme'))document.body.dataset.theme='${theme}'`);
    await evaluate("document.querySelectorAll('img').forEach(i=>i.loading='eager');Promise.all([...document.images].map(i=>i.decode().catch(()=>{})))");
    const result=await evaluate(`(()=>{
      let backgroundSheet;for(const sheet of document.styleSheets){if(!sheet.href?.endsWith('/assets/ui.css'))continue;for(const rule of sheet.cssRules){if(rule.href?.endsWith('background.css'))backgroundSheet=rule.styleSheet;}}if(!backgroundSheet)throw Error('Background sheet missing');
      const elements=[document.body,...document.querySelectorAll('body *')];
      const state=()=>JSON.stringify(elements.map(el=>{const s=getComputedStyle(el),r=el.getBoundingClientRect();return [s.backgroundColor,s.color,s.fontSize,s.fontFamily,s.padding,s.margin,s.borderRadius,s.boxShadow,s.display,r.width,r.height]}));
      backgroundSheet.disabled=true;const before=state(),beforeImage=getComputedStyle(document.body).backgroundImage;
      backgroundSheet.disabled=false;const after=state(),s=getComputedStyle(document.body);
      return {unchanged:before===after,beforeImage,image:s.backgroundImage,baseColor:s.backgroundColor,overflow:document.documentElement.scrollWidth>innerWidth};
    })()`);
    await evaluate("new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))");
    const shot=await call('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(out,route.replaceAll('/','-').replace('.html','')+'-'+theme+'-'+width+'.png'),Buffer.from(shot.data,'base64'));
    results.push({route,theme,width,...result});if(!result.unchanged||!result.image.includes('site-background-'+theme+'.svg'))failures.push('Background-only check '+route+' '+theme+' '+width);
  }
  fs.writeFileSync(path.join(out,'checks.json'),JSON.stringify({results,failures},null,2));console.log(JSON.stringify({cases:results.length,unchanged:results.every(r=>r.unchanged),backgrounds:results.every(r=>r.image.includes('site-background-'+r.theme+'.svg')),failures},null,2));process.exitCode=failures.length?1:0;
 }finally{if(ws)ws.close();chrome.kill();server.close()}
})().catch(e=>{console.error(e);server.close();process.exitCode=1});
