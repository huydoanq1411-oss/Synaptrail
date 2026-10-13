const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname,'..');
if(fs.existsSync(path.join(root,'assets/lesson.js')))new vm.Script(fs.readFileSync(path.join(root,'assets/lesson.js'),'utf8'),{filename:'assets/lesson.js'});
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name.startsWith('.')?[]:e.isDirectory()?walk(path.join(dir,e.name)):e.name.endsWith('.html')?[path.join(dir,e.name)]:[])}
let scripts=0;const errors=[];
for(const file of walk(root)){
 const html=fs.readFileSync(file,'utf8');
 for(const [,src]of html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/gi)){
  if(/^(https?:)?\/\//.test(src))continue;
  if(!fs.existsSync(path.resolve(path.dirname(file),src)))errors.push('Missing script '+src+' in '+file);
 }
 for(const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)){
  if(/type\s*=\s*["'](?:application\/ld\+json|importmap)/.test(match[1])||/\bsrc=/.test(match[1]))continue;
  try{new vm.Script(match[2],{filename:path.relative(root,file)});scripts++}catch(e){errors.push(e.message+' in '+path.relative(root,file))}
 }
 const css=html.match(/<link rel="stylesheet" href="([^"]*assets\/ui.css)">/);
 if(!css||!fs.existsSync(path.resolve(path.dirname(file),css[1])))errors.push('Missing shared CSS: '+file);
}
const home=fs.readFileSync(path.join(root,'courses.html'),'utf8');
new vm.Script(fs.readFileSync(path.join(root,'assets/catalog.js'),'utf8'));
const boxes=home.slice(home.indexOf('<main'),home.indexOf('</main>'));
const skillKeys=[...home.matchAll(/data-skill="([^"]+)"/g)].map(m=>m[1]);
for(const [,keys] of home.matchAll(/data-skills="([^"]+)"/g))for(const key of keys.split(' '))if(!skillKeys.includes(key))errors.push('Unknown role skill '+key);
for(const [,href]of boxes.matchAll(/href="([^"]+)"/g)){
 if(href.startsWith('#')){if(!home.includes('id="'+href.slice(1)+'"'))errors.push('Missing anchor '+href)}
 else if(!fs.existsSync(path.join(root,href)))errors.push('Missing route '+href);
}
const landing=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const [,href]of landing.matchAll(/href="([^"]+)"/g)){
 const [route,anchor]=href.split('#');
 const target=route?path.resolve(root,route):path.join(root,'index.html');
 if(!fs.existsSync(target)){errors.push('Missing homepage route '+href);continue;}
 if(anchor&&!fs.readFileSync(target,'utf8').includes('id="'+anchor+'"'))errors.push('Missing homepage anchor '+href);
}
console.log(JSON.stringify({pages:walk(root).length,inlineScripts:scripts,errors},null,2));
process.exitCode=errors.length?1:0;
