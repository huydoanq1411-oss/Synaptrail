'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),asset=path.join(root,'assets/lesson.js'),manifestFile=path.join(__dirname,'lesson-js-manifest.json');
const args=process.argv.slice(2),dry=args.includes('--dry-run');
if(args.some(a=>a!=='--dry-run'))throw Error('Usage: node scripts/extract-js.cjs [--dry-run]');
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const relative=f=>path.relative(root,f).split(path.sep).join('/');
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.name.startsWith('.')?[]:e.isDirectory()?walk(path.join(d,e.name)):/^chapter.*\.html$/i.test(e.name)?[path.join(d,e.name)]:[])}
// Only compare formatting of already hash-verified source groups. Strings are copied verbatim.
const normalize=s=>s.replace(/^\s*\/\/[^\r\n]*/gm,'').replace(/\s+/g,'');
function parts(source){
 const navStart=source.indexOf("const links = document.querySelectorAll('.nav-link[data-target]');");
 const quizStart=source.indexOf('function gradeQuiz(quizId){');
 if(navStart<0||quizStart<navStart)return null;
 const highlightStart=source.indexOf('function highlight',navStart);
 const navEnd=highlightStart>=0?highlightStart:quizStart;
 return {theme:source.slice(0,navStart),nav:source.slice(navStart,navEnd),local:highlightStart>=0?source.slice(highlightStart,quizStart):'',quiz:source.slice(quizStart)};
}
function main(){
 const records=walk(root).sort().map(file=>({file,html:fs.readFileSync(file,'utf8')}));
 const groups=new Map();
 for(const r of records)for(const m of r.html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)){
  if(m[1].trim())continue;
  const digest=hash(m[2]);if(!groups.has(digest))groups.set(digest,{hash:digest,source:m[2],bytes:Buffer.byteLength(m[2]),files:[]});
  groups.get(digest).files.push(relative(r.file));
 }
 let manifest,generated;
 if(fs.existsSync(manifestFile)){
  manifest=JSON.parse(fs.readFileSync(manifestFile,'utf8'));
  if(!fs.existsSync(asset)||hash(fs.readFileSync(asset,'utf8'))!==manifest.assetHash)throw Error('lesson.js missing or modified; refusing automatic extraction');
 }else{
  const bodies=[...groups.values()].filter(g=>parts(g.source));
  const canonical=bodies.find(g=>g.files.includes('react/chapter01.html'));
  if(!canonical)throw Error('Original React chapter script required for initial generation');
  const base=parts(canonical.source),themes=[],themeHashes=[];
  const variants={};
  for(const g of bodies){
   const p=parts(g.source);
   if(normalize(p.nav)!==normalize(base.nav)||normalize(p.quiz)!==normalize(base.quiz))continue;
   const themeKey=hash(p.theme);let mode=themeHashes.indexOf(themeKey);
   if(mode<0){mode=themes.length;themeHashes.push(themeKey);themes.push(p.theme)}
   new vm.Script(p.source||g.source);
   variants[g.hash]={mode,localHash:hash(p.local)};
  }
  // Two synchronous loads preserve the original setup -> language highlighter -> quiz order.
  generated=`/* Generated from verified chapter scripts. Do not defer these script tags. */\n(function(){\nif(!window.SynaptrailLesson){\nwindow.SynaptrailLesson=(function(){\nconst themes=[\n${themes.map(t=>`function(){\n${t}\nwindow.toggleTheme=toggleTheme;\n}`).join(',\n')}\n];\nlet finish;\nfunction setup(mode){\nthemes[mode]();\n${base.nav}\nObject.assign(window,{updateActiveNav,filterNav,copyCode});\nfinish=function(){\n${base.quiz}\nwindow.gradeQuiz=gradeQuiz;\n};\n}\nreturn {setup,finish:function(){finish();}};\n})();\n}\nconst script=document.currentScript;\nif(script.dataset.lessonPhase==='setup') window.SynaptrailLesson.setup(Number(script.dataset.lessonTheme));\nelse if(script.dataset.lessonPhase==='finish') window.SynaptrailLesson.finish();\n})();\n`;
  new vm.Script(generated);
  manifest={assetHash:hash(generated),variants,audit:[...groups.values()].map(({hash,bytes,files})=>({hash,bytes,files})),note:'Head theme bootstrap and language highlighters remain inline. Quiz answers remain in HTML.'};
 }
 const plans=[],skipped=[];let before=0,after=0,inlineBefore=0,inlineAfter=0;
 for(const r of records){
  before+=Buffer.byteLength(r.html);
  for(const m of r.html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi))if(!/\bsrc=/.test(m[1]))inlineBefore+=Buffer.byteLength(m[2]);
  if(r.html.includes('data-lesson-phase=')){skipped.push({file:relative(r.file),reason:'Already extracted'});after+=Buffer.byteLength(r.html);for(const m of r.html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi))if(!/\bsrc=/.test(m[1]))inlineAfter+=Buffer.byteLength(m[2]);continue;}
  let changed=false;
  const next=r.html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi,(whole,attrs,source)=>{
   if(attrs.trim())return whole;
   const variant=manifest.variants[hash(source)];if(!variant)return whole;
   const p=parts(source);if(hash(p.local)!==variant.localHash)throw Error('Unexpected local script change');
   const src=path.relative(path.dirname(r.file),asset).split(path.sep).join('/');
   changed=true;
   const highlighterPath=path.join(root,'assets/code-highlighter.js');
   const highlighter=fs.existsSync(highlighterPath)?`\n<script src="${path.relative(path.dirname(r.file),highlighterPath).split(path.sep).join('/')}"></script>`:(p.local?`\n<script>${p.local}</script>`:'');
   return `<script src="${src}" data-lesson-phase="setup" data-lesson-theme="${variant.mode}"></script>`+highlighter+`\n<script src="${src}" data-lesson-phase="finish"></script>`;
  });
  if(changed)plans.push({file:r.file,next});else skipped.push({file:relative(r.file),reason:'No verified common body; inline scripts preserved'});
  after+=Buffer.byteLength(next);
  for(const m of next.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi))if(!/\bsrc=/.test(m[1]))inlineAfter+=Buffer.byteLength(m[2]);
 }
 const assetBytes=Buffer.byteLength(generated??fs.readFileSync(asset,'utf8'));
 const report={dryRun:dry,chapters:records.length,inlineHashGroups:[...groups.values()].map(({hash,bytes,files})=>({hash,bytes,count:files.length,example:files[0]})),changedFiles:plans.map(p=>relative(p.file)),skipped,chapterBytesBefore:before,chapterBytesAfter:after,inlineBytesBefore:inlineBefore,inlineBytesAfter:inlineAfter,sharedAssetBytes:assetBytes,netSavingBytes:before-after-(generated?assetBytes:0)};
 if(!dry){
  if(generated){fs.writeFileSync(asset,generated);fs.writeFileSync(manifestFile,JSON.stringify(manifest,null,2)+'\n');}
  for(const p of plans)fs.writeFileSync(p.file,p.next);
  fs.writeFileSync(path.join(__dirname,plans.length?'js-extraction-result.json':'js-extraction-rerun.json'),JSON.stringify(report,null,2)+'\n');
 }
 console.log(JSON.stringify({...report,changedFiles:report.changedFiles.length,skipped:report.skipped.length,skipReasons:[...new Set(report.skipped.map(s=>s.reason))]},null,2));
}
try{main()}catch(e){console.error(e.message);process.exitCode=1}
