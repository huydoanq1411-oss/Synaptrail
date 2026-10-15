const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),{spawn}=require('node:child_process');
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function browser(){
 const profile=fs.mkdtempSync(path.join(os.tmpdir(),'synaptrail-courses-'));
 const chrome=spawn(require('./find-chrome.cjs').findChrome(),['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore'});
 let ws;try{
  let port;for(let i=0;i<100;i++){try{port=Number(fs.readFileSync(path.join(profile,'DevToolsActivePort'),'utf8').split('\n')[0]);break;}catch{}await pause(100);}if(!port)throw Error('Chrome did not start');
  const targets=await(await fetch('http://127.0.0.1:'+port+'/json')).json();ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
  let id=0;const pending=new Map(),errors=[];
  ws.onmessage=event=>{const m=JSON.parse(event.data);if(m.id){const p=pending.get(m.id);if(!p)return;pending.delete(m.id);clearTimeout(p.timer);m.error?p.reject(Error(m.error.message)):p.resolve(m.result);}else if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.exception?.description||m.params.exceptionDetails.text);};
  const call=(method,params={})=>new Promise((resolve,reject)=>{const n=++id,timer=setTimeout(()=>{pending.delete(n);reject(Error(method+' timed out'));},30000);pending.set(n,{resolve,reject,timer});ws.send(JSON.stringify({id:n,method,params}));});
  const evaluate=async expression=>{const r=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result.value;};
  await call('Page.enable');await call('Runtime.enable');
  return{call,evaluate,errors,pause,close(){ws.close();chrome.kill();}};
 }catch(error){ws?.close();chrome.kill();throw error;}
}
module.exports={browser,pause};
