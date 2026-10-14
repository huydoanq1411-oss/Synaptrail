// Run the CSS preview against installed Chromium browsers, directly via file://.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const {pathToFileURL} = require('node:url');
const {spawn} = require('node:child_process');
const root = path.resolve(__dirname, '..');
const pause = ms => new Promise(r => setTimeout(r, ms));
const browsers = [require('./find-chrome.cjs').findChrome(), 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'];
(async () => {
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
      fs.mkdirSync(path.join(root,'artifacts'),{recursive:true});
      const shot=await call('Page.captureScreenshot',{format:'png'});
      const name=binary.toLowerCase().includes('msedge')?'edge':'chrome';
      fs.writeFileSync(path.join(root,'artifacts','fx3d-skill-'+name+'.png'),Buffer.from(shot.data,'base64'));
      console.log(JSON.stringify({browser:name,protocol:'file:',results,toggle,persisted,reduced}));
      if(!toggle||!persisted||!reduced||results.some(r=>r.overflow||!r.button||!r.loaded||!r.cards))process.exitCode=1;
    } finally { ws?.close(); child.kill(); await pause(300); }
  }
})().catch(e=>{console.error(e);process.exitCode=1;});
