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
const deadline = setTimeout(() => { console.error('Preview browser check timed out'); process.exit(1); }, 55000);
const server = http.createServer((req,res)=>{
  const file=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));
  if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
  fs.readFile(file,(error,data)=>{res.writeHead(error?404:200,{'Content-Type':file.endsWith('.js')?'text/javascript; charset=utf-8':file.endsWith('.css')?'text/css; charset=utf-8':file.endsWith('.svg')?'image/svg+xml':'text/html; charset=utf-8'});res.end(error?'Not found':data);});
});
(async () => {
  await new Promise(r=>server.listen(0,'127.0.0.1',r));
  for (const binary of browsers.filter(p => fs.existsSync(p) && (!process.argv.includes('--edge') || p.includes('msedge')))) {
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
        await evaluate(`document.querySelector('[data-role="frontend"]').click()`);
        const defaultList=await evaluate(`(()=>{const t=innerWidth<=600?document.querySelector('#roleModal'):document.querySelector('#rolePanel');return t.querySelector('.role-map').hidden&&!t.querySelector('.role-skills').hidden})()`);
        if(!defaultList)throw Error('Role must open in list mode');
        await evaluate(`(()=>{const t=innerWidth<=600?document.querySelector('#roleModal'):document.querySelector('#rolePanel');t.querySelectorAll('.role-view-switch button')[1].click()})()`);await pause(50);
        const fileMap=await evaluate(`(()=>{const t=innerWidth<=600?document.querySelector('#roleModal'):document.querySelector('#rolePanel');return !t.querySelector('.role-map').hidden&&!t.querySelector('.role-map canvas')&&t.querySelectorAll('.role-map svg g').length===7&&document.documentElement.scrollWidth<=innerWidth})()`);
        if(!fileMap)throw Error('Static role map must work on file:// without overflow: '+JSON.stringify(await evaluate(`(()=>{const t=innerWidth<=600?document.querySelector('#roleModal'):document.querySelector('#rolePanel');return {width:innerWidth,scroll:document.documentElement.scrollWidth,hidden:t.querySelector('.role-map')?.hidden,canvas:!!t.querySelector('.role-map canvas'),nodes:t.querySelectorAll('.role-map svg g').length}})()`)));
        await evaluate(`(()=>{const t=innerWidth<=600?document.querySelector('#roleModal'):document.querySelector('#rolePanel');t.querySelector('[data-close-role]').click()})()`);
      }
      const toggle=await evaluate(`(()=>{const b=document.querySelector('[data-fx3d-toggle]');if(b.getAttribute('aria-pressed')==='true')b.click();b.click();return localStorage.getItem('synaptrail-fx3d')==='on'&&b.getAttribute('aria-pressed')==='true';})()`);
      await call('Page.reload');await pause(700);
      const persisted=await evaluate(`document.querySelector('[data-fx3d-toggle]').getAttribute('aria-pressed')==='true'`);
      await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
      const reduced=await evaluate(`document.documentElement.dataset.fx3dMotion==='off'`);
      await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
      await evaluate(`document.querySelector('#skill-based').scrollIntoView();`);
      await pause(300);
      const tilt=await evaluate(`(async()=>{const c=document.querySelector('#allCourses .resource-card');c.scrollIntoView({block:'center'});await new Promise(r=>setTimeout(r,300));const r=c.getBoundingClientRect();c.dispatchEvent(new PointerEvent('pointermove',{pointerType:'mouse',clientX:r.right,clientY:r.top}));await new Promise(requestAnimationFrame);const s=getComputedStyle(c);const result={rx:c.style.getPropertyValue('--rx'),ry:c.style.getPropertyValue('--ry'),mx:c.style.getPropertyValue('--mx'),tracking:c.classList.contains('fx3d-tracking'),transformed:s.transform!=='none',glow:getComputedStyle(c,'::before').opacity==='1',depth:getComputedStyle(c.querySelector('.resource-image-link')).transform!=='none'};return result})()`);
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
      await evaluate(`(()=>{const b=document.querySelector('[data-fx3d-toggle]');if(b.getAttribute('aria-pressed')!=='true')b.click();document.querySelector('[data-role="frontend"]').click();})()`);
      const roleMap={listDefault:await evaluate(`document.querySelector('#rolePanel .role-map').hidden&&!document.querySelector('#rolePanel .role-skills').hidden`)};
      await evaluate(`(()=>{const store=SynaptrailProgress.createStore(localStorage);store.update('git','chapter01',{done:true});store.update('git','chapter02',{done:true});document.querySelectorAll('#rolePanel .role-view-switch button')[1].click();document.querySelector('#rolePanel .role-map').scrollIntoView({block:'center',behavior:'instant'});})()`);await pause(700);
      Object.assign(roleMap,await evaluate(`(()=>{const e=document.querySelector('#rolePanel .role-map');return {ready:e.dataset.fx3dReady==='true',nodes:e.querySelectorAll('svg g').length,complete:e.querySelector('svg g').dataset.progress==='complete',links:e.querySelectorAll('.role-map-links a').length,textures:performance.getEntriesByType('resource').filter(r=>r.name.includes('/assets/img/skills/')).length>0}})()`));
      fs.writeFileSync(path.join(root,'artifacts','role3d-'+name+'.png'),Buffer.from((await call('Page.captureScreenshot',{format:'png'})).data,'base64'));
      let rp=await evaluate(`(()=>{const r=document.querySelector('#rolePanel .role-map').getBoundingClientRect(),half=Math.max(4.6,4.7/(r.width/r.height));return {x:r.left+r.width/2-3*r.height/(2*half),y:r.top+r.height/2-2.8*r.height/(2*half)}})()`);
      await call('Input.dispatchMouseEvent',{type:'mousePressed',button:'left',clickCount:1,...rp});await call('Input.dispatchMouseEvent',{type:'mouseReleased',button:'left',clickCount:1,...rp});await pause(1600);
      roleMap.fly=await evaluate(`document.querySelector('#rolePanel .role-map-message').textContent.includes('Git:')`);
      await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});await pause(100);
      roleMap.reduced=await evaluate(`document.querySelector('#rolePanel .role-map').dataset.fx3dReady==='false'`);
      await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});await pause(100);
      rp=await evaluate(`(()=>{const r=document.querySelector('#rolePanel .role-map').getBoundingClientRect();return {x:r.left+r.width/2,y:r.top+r.height/2}})()`);
      await call('Input.dispatchMouseEvent',{type:'mousePressed',button:'left',clickCount:1,...rp});await call('Input.dispatchMouseEvent',{type:'mouseReleased',button:'left',clickCount:1,...rp});await pause(250);
      roleMap.secondClick=await evaluate(`location.pathname.endsWith('/git/index.html')`);
      await call('Page.navigate',{url:`http://127.0.0.1:${server.address().port}/courses.html`});await pause(500);
      roleMap.allRoles=await evaluate(`(()=>{const out=[];for(const key of Object.keys(SynaptrailCatalog.roles)){document.querySelector('[data-role="'+key+'"]').click();const t=document.querySelector('#rolePanel');out.push(t.querySelectorAll('.role-skills a').length===SynaptrailCatalog.roles[key].skills.length&&t.querySelector('.role-map').hidden);}return out.every(Boolean)})()`);
      await evaluate(`(()=>{const t=document.querySelector('#rolePanel');const b=document.querySelector('[data-fx3d-toggle]');if(b.getAttribute('aria-pressed')!=='true')b.click();document.querySelector('[data-role="fullstack"]').click();document.querySelectorAll('#rolePanel .role-view-switch button')[1].click();document.querySelector('#rolePanel .role-map').scrollIntoView({block:'center',behavior:'instant'});})()`);await pause(900);
      roleMap.fullstack=await evaluate(`(()=>{const t=document.querySelector('#rolePanel .role-map');const labels=[...t.querySelectorAll('.role-map-label')].filter(e=>!e.hidden).map(e=>e.getBoundingClientRect());let overlap=false;for(let i=0;i<labels.length;i++)for(let j=i+1;j<labels.length;j++){const a=labels[i],b=labels[j];if(a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top)overlap=true;}return {ready:t.dataset.fx3dReady==='true',nodes:t.querySelectorAll('svg g').length,overlap,overflow:document.documentElement.scrollWidth>innerWidth}})()`);
      fs.writeFileSync(path.join(root,'artifacts','role3d-fullstack-'+name+'.png'),Buffer.from((await call('Page.captureScreenshot',{format:'png'})).data,'base64'));
      await evaluate(`document.querySelector('#rolePanel [data-close-role]').click()`);
      roleMap.cleanup=await evaluate(`!document.querySelector('.role-map canvas')`);
      console.log(JSON.stringify({roleMapBrowser:name,...roleMap}));
      if(!roleMap.listDefault||!roleMap.ready||roleMap.nodes!==7||roleMap.links!==7||!roleMap.complete||!roleMap.fly||!roleMap.reduced||!roleMap.secondClick)process.exitCode=1;
      if(!roleMap.allRoles||!roleMap.fullstack.ready||roleMap.fullstack.nodes!==15||roleMap.fullstack.overlap||roleMap.fullstack.overflow||!roleMap.cleanup)process.exitCode=1;
      await call('Page.navigate',{url:`http://127.0.0.1:${server.address().port}/index.html`});await pause(700);
      await evaluate(`(()=>{const b=document.querySelector('[data-fx3d-toggle]');if(b.getAttribute('aria-pressed')!=='true')b.click()})()`);
      await pause(900);
      const hero=await evaluate(`(()=>{const e=document.querySelector('[data-knowledge-map]'),c=e.querySelector('canvas'),r=e.getBoundingClientRect();return {ready:e.dataset.fx3dReady==='true',links:e.querySelectorAll('.knowledge-links a').length,svgNodes:e.querySelectorAll('svg g').length,label:!!c?.getAttribute('aria-label'),height:r.height<=innerHeight*.6+1,overflow:document.documentElement.scrollWidth>innerWidth}})()`);
      const point=await evaluate(`(()=>{const r=document.querySelector('[data-knowledge-map]').getBoundingClientRect(),halfY=Math.max(3.2,4.8/(r.width/r.height)),halfX=halfY*r.width/r.height;return {x:r.left+r.width*(1-3/halfX)/2,y:r.top+r.height*(1-1.7/halfY)/2}})()`);
      await call('Input.dispatchMouseEvent',{type:'mouseMoved',...point});await pause(150);
      hero.hover=await evaluate(`document.querySelector('.knowledge-label').textContent==='Git'&&!document.querySelector('.knowledge-label').hidden`);
      fs.writeFileSync(path.join(root,'artifacts','hero3d-'+name+'.png'),Buffer.from((await call('Page.captureScreenshot',{format:'png'})).data,'base64'));
      await evaluate(`document.documentElement.dataset.theme='light'`);await pause(100);
      hero.light=await evaluate(`getComputedStyle(document.querySelector('[data-knowledge-map]')).getPropertyValue('--map-node').trim()==='#08795e'`);
      await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});await pause(100);
      hero.reduced=await evaluate(`document.querySelector('[data-knowledge-map]').dataset.fx3dReady==='false'&&getComputedStyle(document.querySelector('.knowledge-fallback')).visibility==='visible'`);
      await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
      await pause(100);
      await evaluate(`document.querySelector('[data-fx3d-toggle]').click()`);await pause(100);
      hero.off=await evaluate(`document.querySelector('[data-knowledge-map]').dataset.fx3dReady==='false'`);
      await evaluate(`document.querySelector('[data-fx3d-toggle]').click()`);await pause(100);
      await call('Input.dispatchMouseEvent',{type:'mousePressed',button:'left',clickCount:1,...point});
      await call('Input.dispatchMouseEvent',{type:'mouseReleased',button:'left',clickCount:1,...point});await pause(400);
      hero.click=await evaluate(`location.pathname.endsWith('/git/index.html')`);
      console.log(JSON.stringify({heroBrowser:name,...hero}));
      if(!hero.ready||hero.links!==8||hero.svgNodes!==8||!hero.label||!hero.height||hero.overflow||!hero.hover||!hero.light||!hero.reduced||!hero.off||!hero.click)process.exitCode=1;
      console.log(JSON.stringify({browser:name,protocol:'file:',results,toggle,persisted,reduced,tilt,touch,focus,staticMotion,home,noWebGL,webgl}));
      if(!toggle||!persisted||!reduced||!noWebGL||home.some(r=>r.overflow||!r.button)||results.some(r=>r.overflow||!r.button||!r.loaded||!r.cards)||webgl.reason==='initialization-failed'||!webgl.disposed)process.exitCode=1;
      if(tilt.rx!=='8.00deg'||tilt.ry!=='8.00deg'||!tilt.tracking||!tilt.transformed||!tilt.glow||!tilt.depth||!touch||!focus.visible||!focus.ring||!focus.lift||!staticMotion)process.exitCode=1;
    } finally { ws?.close(); child.kill(); await pause(300); }
  }
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>{clearTimeout(deadline);server.close();});
