// Run the CSS preview against installed Chromium browsers, directly via file://.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const {pathToFileURL} = require('node:url');
const {spawn} = require('node:child_process');
const http = require('node:http');
const root = path.resolve(__dirname, '..');
const pause = ms => new Promise(r => setTimeout(r, ms));
const browsers = [require('./find-chrome.cjs').findChrome(), 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'];
const deadline = setTimeout(() => { console.error('Preview browser check timed out'); process.exit(1); }, 45000);
const server = http.createServer((req,res)=>{
  const file=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));
  if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
  fs.readFile(file,(error,data)=>{res.writeHead(error?404:200,{'Content-Type':file.endsWith('.js')?'text/javascript; charset=utf-8':file.endsWith('.css')?'text/css; charset=utf-8':'text/html; charset=utf-8'});res.end(error?'Not found':data);});
});
(async () => {
  await new Promise(r=>server.listen(0,'127.0.0.1',r));
  for (const binary of browsers.filter(p => fs.existsSync(p))) {
    const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'synaptrail-fx3d-'));
    const child = spawn(binary, ['--headless=new', '--no-first-run', '--remote-debugging-port=9347', '--user-data-dir=' + profile, 'about:blank'], {stdio:'ignore'});
    let ws;
    try {
      let targets;
      for (let i=0;i<50;i++) { try { targets=await (await fetch('http://127.0.0.1:9347/json')).json(); break; } catch { await pause(200); } }
      if (!targets) throw Error('Browser unavailable: '+binary);
      ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
      await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
      let id=0; const pending=new Map();
      ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result);}};
      const call=(method,params={})=>new Promise((resolve,reject)=>{pending.set(++id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
      const evaluate=async expression=>{const r=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
      await call('Page.enable');
      await call('Network.enable');
      await call('Network.setBlockedURLs',{urls:['*fonts.googleapis.com*','*fonts.gstatic.com*']});
      await call('Page.navigate',{url:pathToFileURL(path.join(root,'courses.html')).href});
      await pause(1200);
      const results=[];
      for(const width of [375,768,1440]) {
        await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});
        results.push(await evaluate(`(()=>{const b=document.querySelector('[data-fx3d-toggle]');return {width:innerWidth,button:!!b,overflow:document.documentElement.scrollWidth>innerWidth,cards:document.querySelectorAll('#allCourses .resource-card').length,loaded:!!document.documentElement.dataset.fx3d}})()`));
      }
      const toggle=await evaluate(`(()=>{const b=document.querySelector('[data-fx3d-toggle]');if(b.getAttribute('aria-pressed')==='true')b.click();b.click();return localStorage.getItem('synaptrail-fx3d')==='on'&&b.getAttribute('aria-pressed')==='true';})()`);
      await call('Page.reload');await pause(700);
      const persisted=await evaluate(`document.querySelector('[data-fx3d-toggle]').getAttribute('aria-pressed')==='true'`);
      await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
      const reduced=await evaluate(`document.documentElement.dataset.fx3dMotion==='off'`);
      await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
      await evaluate(`document.querySelector('#skill-based').scrollIntoView();`);
      await pause(300);
      const tilt=await evaluate(`(async()=>{const c=document.querySelector('#allCourses .resource-card');c.scrollIntoView({block:'center'});const r=c.getBoundingClientRect();c.dispatchEvent(new PointerEvent('pointermove',{pointerType:'mouse',clientX:r.right,clientY:r.top}));await new Promise(requestAnimationFrame);const s=getComputedStyle(c);const result={rx:c.style.getPropertyValue('--rx'),ry:c.style.getPropertyValue('--ry'),mx:c.style.getPropertyValue('--mx'),tracking:c.classList.contains('fx3d-tracking'),transformed:s.transform!=='none',glow:getComputedStyle(c,'::before').opacity==='1',depth:getComputedStyle(c.querySelector('.resource-image-link')).transform!=='none'};return result})()`);
      fs.mkdirSync(path.join(root,'artifacts'),{recursive:true});
      const shot=await call('Page.captureScreenshot',{format:'png'});
      const name=binary.toLowerCase().includes('msedge')?'edge':'chrome';
      fs.writeFileSync(path.join(root,'artifacts','fx3d-skill-'+name+'.png'),Buffer.from(shot.data,'base64'));
      const touch=await evaluate(`(async()=>{const c=document.querySelector('#allCourses .resource-card');c.dispatchEvent(new PointerEvent('pointermove',{pointerType:'touch',clientX:0,clientY:0}));await new Promise(requestAnimationFrame);return !c.classList.contains('fx3d-tracking')&&!c.style.getPropertyValue('--rx')})()`);
      await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
      const focus=await evaluate(`(()=>{const a=document.querySelector('#allCourses .resource-card h3 a');a.focus();const c=a.closest('.resource-card');return {visible:a.matches(':focus-visible'),ring:getComputedStyle(c).outlineWidth==='3px',lift:getComputedStyle(c).transform!=='none'}})()`);
      await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
      const staticMotion=await evaluate(`getComputedStyle(document.querySelector('#allCourses .resource-card')).transform==='none'`);
      await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
      const home=[];
      await call('Page.navigate',{url:pathToFileURL(path.join(root,'index.html')).href});await pause(500);
      for(const width of [375,768,1440]) {
        await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});
        home.push(await evaluate(`({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,button:!!document.querySelector('[data-fx3d-toggle]')})`));
      }
      await call('Page.navigate',{url:`http://127.0.0.1:${server.address().port}/courses.html`});
      for(let i=0;i<40;i++){if(await evaluate(`typeof SynaptrailFX3D!=='undefined'`))break;await pause(100);}
      const noWebGL=await evaluate(`(async()=>{const e=document.createElement('div');e.dataset.fx3d='';document.body.append(e);const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(kind,...args){return /webgl/.test(kind)?null:original.call(this,kind,...args)};document.documentElement.dataset.fx3d='on';try{const state=await SynaptrailFX3D.mount(e,()=>{throw Error('setup must not execute')});return state.status==='tĩnh'&&state.reason==='no-webgl'&&!document.querySelector('script[src*="three.module"]')}finally{HTMLCanvasElement.prototype.getContext=original;e.remove()}})()`);
      const webgl=await evaluate(`(async()=>{document.documentElement.dataset.fx3d='on';const e=document.createElement('div');e.dataset.fx3d='';e.style.cssText='position:fixed;top:100px;left:0;width:240px;height:180px';document.body.append(e);const state=await SynaptrailFX3D.mount(e,T=>{const scene=new T.Scene();scene.add(new T.Mesh(new T.BoxGeometry(),new T.MeshBasicMaterial()));const camera=new T.PerspectiveCamera(45,1,.1,100);camera.position.z=4;return {scene,camera}});await new Promise(r=>setTimeout(r,2400));const result={status:state.status,reason:state.reason,quality:state.quality,canvas:!!e.querySelector('canvas'),pixelRatio:e.querySelector('canvas')?.width/240};state.dispose?.();result.disposed=!e.querySelector('canvas');e.remove();return result})()`);
      console.log(JSON.stringify({browser:name,protocol:'file:',results,toggle,persisted,reduced,tilt,touch,focus,staticMotion,home,noWebGL,webgl}));
      if(!toggle||!persisted||!reduced||!noWebGL||home.some(r=>r.overflow||!r.button)||results.some(r=>r.overflow||!r.button||!r.loaded||!r.cards)||webgl.reason==='initialization-failed'||!webgl.disposed)process.exitCode=1;
      if(tilt.rx!=='8.00deg'||tilt.ry!=='8.00deg'||!tilt.tracking||!tilt.transformed||!tilt.glow||!tilt.depth||!touch||!focus.visible||!focus.ring||!focus.lift||!staticMotion)process.exitCode=1;
    } finally { ws?.close(); child.kill(); await pause(300); }
  }
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>{clearTimeout(deadline);server.close();});
