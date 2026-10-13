const assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {findChrome}=require('./find-chrome.cjs'),{checkHtml}=require('./html-checks.cjs');
const root=fs.mkdtempSync(path.join(os.tmpdir(),'synaptrail-checkers-')),file=path.join(root,'index.html');
fs.writeFileSync(path.join(root,'target.html'),'<h1 id="valid">Target</h1>');
const good=`<meta name='description' content='A description'><h1>Page</h1><a href='target.html#valid'>Target</a><img src='decorative.svg' alt=''><pre><a href='missing.html'>example</a><img src='x'></pre><code><a href='other.html'>example</a></code><script>const example='<a href="no.html">';</script>`;
assert.deepEqual(checkHtml(file,good,root),[]);
const bad=checkHtml(file,"<a href='missing.html'>Missing</a><a href='target.html#missing'>Missing anchor</a><img src='x'>",root);
for(const message of ['Missing <h1>','Missing meta description','Broken internal link','Broken internal anchor','Image missing alt'])assert(bad.some(e=>e.includes(message)),message);
assert.deepEqual(checkHtml(file,good+"<a href='https://example.test/no'>external</a><a href='mailto:test@example.test'>mail</a>",root),[]);
for(const platform of ['win32','darwin','linux']){
 const candidates=[];
 const binary=findChrome({platform,env:{PATH:platform==='win32'?'C:/bin':'/custom/bin'},home:'/home/test',accessible:p=>{candidates.push(p);return p.includes(platform==='win32'?'Google':platform==='darwin'?'Chromium.app':'chromium-browser')}});
 assert(binary);assert(candidates.length);
}
assert.equal(findChrome({env:{CHROME_PATH:process.execPath},accessible:p=>p===process.execPath}),process.execPath);
assert.throws(()=>findChrome({env:{CHROME_PATH:'missing'},accessible:()=>false}),/CHROME_PATH/);
assert.throws(()=>findChrome({env:{},accessible:()=>false}),/Chrome\/Chromium not found/);
console.log('Passed: Chrome discovery/override; links/anchors; h1; description; alt; code-block exclusion.');
