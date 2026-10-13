const fs=require('node:fs');const path=require('node:path');const os=require('node:os');const http=require('node:http');const {spawn}=require('node:child_process');
const root=path.resolve(__dirname,'..');
const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0] === '/' ? '/index.html' : req.url.split('?')[0]));if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end()}fs.readFile(file,(err,data)=>{res.writeHead(err?404:200,{'Content-Type':file.endsWith('.js')?'text/javascript; charset=utf-8':file.endsWith('.css')?'text/css; charset=utf-8':'text/html; charset=utf-8'});res.end(err?'Not found':data)})});
const pause=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const profile=fs.mkdtempSync(path.join(os.tmpdir(),'synaptrail-ui-'));
 const chrome=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--remote-debugging-port=9333','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'});
 let ws;
 try{
  let targets;for(let i=0;i<30;i++){try{targets=await(await fetch('http://127.0.0.1:9333/json')).json();break}catch{await pause(200)}}
  if(!targets)throw Error('Chrome debugging unavailable');
  ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((r,j)=>{const timer=setTimeout(()=>j(Error('Chrome connection timed out')),10000);ws.onopen=()=>{clearTimeout(timer);r()};ws.onerror=()=>{clearTimeout(timer);j(Error('Chrome connection failed'))}});
  let id=0;const pending=new Map();const failures=[];
  ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result)}else if(m.method==='Runtime.exceptionThrown')failures.push(m.params.exceptionDetails.text)};
  const call=(method,params={})=>new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error(method+' timed out')),10000);pending.set(++id,{resolve:value=>{clearTimeout(timer);resolve(value)},reject:error=>{clearTimeout(timer);reject(error)}});ws.send(JSON.stringify({id,method,params}))});
  const evaluate=async expression=>{const evaluated=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(evaluated.exceptionDetails)throw Error(evaluated.exceptionDetails.exception?.description||evaluated.exceptionDetails.text);return evaluated.result.value;};
  await call('Runtime.enable');await call('Page.enable');
  const results=[];
  const lessonResults=[];
  for(const route of ['python/chapter001.html','react/chapter01.html','cpp/chapter01.html','thuat-toan/chapter01.html']){
   await call('Page.navigate',{url:`http://127.0.0.1:${server.address().port}/${route}`});await pause(500);
   const lesson=await evaluate(`(async()=>{const api=['toggleTheme','copyCode','filterNav','gradeQuiz','updateActiveNav'].every(name=>typeof window[name]==='function');const usesBody=${JSON.stringify(route)}.startsWith('thuat-toan/');const target=usesBody?document.body:document.documentElement;const before=target.dataset.theme;toggleTheme();const theme=target.dataset.theme!==before;toggleTheme();filterNav('zzzz-no-match');const search=[...document.querySelectorAll('.nav-link[data-target]')].every(l=>l.style.display==='none');filterNav('');const restored=[...document.querySelectorAll('.nav-link[data-target]')].every(l=>l.style.display==='block');const menu=document.getElementById('menu-toggle');if(menu)menu.click();const sidebar=!menu||document.getElementById('sidebar').classList.contains('open');if(menu)menu.click();let copy=true;const button=document.querySelector('[onclick^="copyCode"]');if(button){let copied;Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async text=>{copied=text}}});const pre=button.parentElement.querySelector('pre code')||button.parentElement.querySelector('pre');copyCode(button);await Promise.resolve();copy=copied===pre.innerText&&button.textContent==='✓ Đã copy';}let quiz=true;for(const quizEl of document.querySelectorAll('[data-quiz]')){const questions=[...quizEl.querySelectorAll('.quiz-q')];for(const q of questions)q.querySelector('[data-idx="'+q.dataset.answer+'"]').click();gradeQuiz(quizEl.dataset.quiz);quiz=quiz&&document.getElementById('result-'+quizEl.dataset.quiz).textContent==='Kết quả: '+questions.length+'/'+questions.length+' câu đúng';}window.scrollTo(0,document.documentElement.scrollHeight);await new Promise(r=>setTimeout(r,100));const progress=parseFloat(document.getElementById('progress-bar').style.width)>0;const highlighted=!document.querySelector('pre code')||!!document.querySelector('pre code .tok-kw, pre code .tok-com, pre code .tok-str');return {api,theme,search,restored,sidebar,copy,quiz,progress,highlighted}})()`);
   lessonResults.push({route,...lesson});if(Object.values(lesson).some(value=>value!==true))failures.push('Lesson interaction failed '+route);
  }
  for(const route of ['index.html','courses.html','react/index.html','python/chapter001.html','fullstack-js/index.html','Quiz_and_other/quiz-tong-hop.html']){
   for(const width of [375,768,1440]){
    await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});
    await call('Page.navigate',{url:`http://127.0.0.1:${server.address().port}/${route}`});await pause(800);
    const state=await evaluate(`({overflow:document.documentElement.scrollWidth>innerWidth,background:getComputedStyle(document.body).backgroundColor,css:!!document.querySelector('link[href$="assets/ui.css"]')})`);
    results.push({route,width,...state});
    if(state.overflow)failures.push('Overflow '+route+' @ '+width);
    if(state.background!=='rgb(255, 255, 255)')failures.push('Expected white background '+route+' @ '+width);
    if(route==='index.html'&&width===1440){const screenshot=await call('Page.captureScreenshot',{format:'png'});fs.mkdirSync(path.join(root,'artifacts'),{recursive:true});fs.writeFileSync(path.join(root,'artifacts/home-desktop.png'),Buffer.from(screenshot.data,'base64'));}
    if(route==='courses.html'){const screenshot=await call('Page.captureScreenshot',{format:'png'});fs.mkdirSync(path.join(root,'artifacts'),{recursive:true});fs.writeFileSync(path.join(root,'artifacts/catalog-'+width+'.png'),Buffer.from(screenshot.data,'base64'));}
   }
  }
  await call('Page.navigate',{url:`http://127.0.0.1:${server.address().port}/courses.html`});await pause(500);
  const interactions=await evaluate(`(()=>{const input=document.getElementById('searchInput');input.value='zzzz-nothing';input.dispatchEvent(new Event('input'));const empty=getComputedStyle(document.getElementById('emptyState')).display!=='none';input.value='thuat toan';input.dispatchEvent(new Event('input'));const search=[...document.querySelectorAll('#roadmap .card')].filter(c=>c.style.display!=='none').length;document.getElementById('menuBtn').click();const opened=document.activeElement.id==='closeDrawerBtn';document.getElementById('closeDrawerBtn').click();const closed=document.activeElement.id==='menuBtn'&&document.getElementById('roadmapDrawer').inert;document.getElementById('themeBtn').click();const light=document.documentElement.dataset.theme==='light';return {empty,search,opened,closed,light,boxes:document.querySelectorAll('.purpose-box').length}})()`);
  if(!interactions.empty||interactions.search!==1||!interactions.opened||!interactions.closed||interactions.light)failures.push('Interaction check failed');
  const roleSelection=await evaluate(`(()=>{const input=document.getElementById('searchInput');input.value='';input.dispatchEvent(new Event('input'));const roles=[...document.querySelectorAll('.role-box')];const counts=roles.map(role=>{role.click();const visible=[...document.querySelectorAll('#allCourses .card')].filter(c=>!c.hidden);return {role:role.dataset.role,count:visible.length,valid:visible.every(c=>role.dataset.skills.split(' ').includes(c.dataset.skill))&&visible.length===role.dataset.skills.split(' ').length,pressed:role.getAttribute('aria-pressed')==='true'}});input.value='zzzz';input.dispatchEvent(new Event('input'));const empty=getComputedStyle(document.getElementById('emptyState')).display!=='none';input.value='';input.dispatchEvent(new Event('input'));document.getElementById('showAllSkills').click();return {counts,empty,reset:[...document.querySelectorAll('#allCourses .card')].every(c=>!c.hidden),groups:['role-based','skill-based','best-practices','project-ideas'].every(id=>!!document.querySelector('#'+id+' h2'))}})()`);
  if(!roleSelection.empty||!roleSelection.reset||!roleSelection.groups||roleSelection.counts.length!==5||roleSelection.counts.some(r=>!r.valid||!r.pressed))failures.push('Role selection check failed');
  await call('Page.navigate',{url:`http://127.0.0.1:${server.address().port}/index.html`});await pause(300);
  await evaluate("document.querySelector('.header-cta').click()");await pause(500);
  const catalogueNavigation=await evaluate("location.pathname.endsWith('/courses.html')");
  await call('Page.navigate',{url:`http://127.0.0.1:${server.address().port}/index.html#roadmap`});await pause(500);
  const legacyNavigation=await evaluate("location.pathname.endsWith('/courses.html')&&location.hash==='#roadmap'");
  if(!catalogueNavigation||!legacyNavigation)failures.push('Homepage navigation failed');
  console.log(JSON.stringify({results,interactions,roleSelection,lessonResults,failures},null,2));process.exitCode=failures.length?1:0;
 }finally{if(ws)ws.close();chrome.kill();server.close()}
})().catch(e=>{console.error(e);server.close();process.exitCode=1});
