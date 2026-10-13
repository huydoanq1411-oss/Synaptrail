const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.name.startsWith('.')||['node_modules','artifacts'].includes(e.name)?[]:e.isDirectory()?walk(path.join(d,e.name)):/^chapter\d+\.html$/.test(e.name)?[path.join(d,e.name)]:[]);
let changed=0,removed=0;
for(const file of walk(root)){
 let html=fs.readFileSync(file,'utf8'),before=html;
 html=html.replace(/<script>\s*function highlight\w*\([\s\S]*?<\/script>/g,()=>{removed++;return ''});
 if(html.includes('data-lesson-phase="finish"')&&!html.includes('assets/code-highlighter.js')){
  const src=path.relative(path.dirname(file),path.join(root,'assets/code-highlighter.js')).split(path.sep).join('/');
  html=html.replace(/<script\b[^>]*data-lesson-phase="finish"[^>]*>/,'<script src="'+src+'"></script>\n$&');
 }
 if(html!==before){fs.writeFileSync(file,html);changed++;}
}
const lesson=path.join(root,'assets/lesson.js');let source=fs.readFileSync(lesson,'utf8');
source=source.replace('const text = pre.innerText;','const text = pre.textContent;');
const counter=`\n// Count distinct chapter links in the actual sidebar, rather than legacy labels.\nconst sidebar = document.getElementById('sidebar');\nif (sidebar && location.pathname.includes('/fullstack-js/')) {\n  const chapterLinks = new Set(Array.from(sidebar.querySelectorAll('a[href]')).map(link => new URL(link.getAttribute('href'), location.href)).filter(url => url.origin === location.origin && /\\/fullstack-js\\/chapter\\d+\\.html$/.test(url.pathname)).map(url => url.pathname));\n  const subtitle = sidebar.querySelector('.sub');\n  if (subtitle) subtitle.textContent = chapterLinks.size + ' chương';\n}\n`;
if(!source.includes('Count distinct chapter links'))source=source.replace('Object.assign(window,{updateActiveNav,filterNav,copyCode});',counter+'\nObject.assign(window,{updateActiveNav,filterNav,copyCode});');
fs.writeFileSync(lesson,source);
const manifestFile=path.join(root,'scripts/lesson-js-manifest.json');const manifest=JSON.parse(fs.readFileSync(manifestFile,'utf8'));manifest.assetHash=crypto.createHash('sha256').update(source).digest('hex');manifest.note='Shared lesson runtime maintained after extraction. Language highlighters migrated to code-highlighter.js; original source hashes kept for audit.';fs.writeFileSync(manifestFile,JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({changedPages:changed,removedInlineHighlighters:removed},null,2));
