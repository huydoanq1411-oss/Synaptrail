const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),output=path.join(root,'reports/consistency');
const proposed={'html-css-nnlt':'html-css','javascript-nnlt':'javascript','Quiz_and_other':'practice'};
const ignored=new Set(['.git','node_modules','artifacts','reports']);
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>ignored.has(e.name)||e.name.startsWith('.')?[]:e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)])}
const all=walk(root),references=[];
for(const file of all){if(!/\.(html|css|js|cjs|json|md|txt|xml)$/i.test(file))continue;const lines=fs.readFileSync(file,'utf8').split(/\r?\n/);lines.forEach((text,index)=>{for(const name of Object.keys(proposed)){const count=text.split(name).length-1;if(count)references.push({file:path.relative(root,file).split(path.sep).join('/'),line:index+1,old:name,new:proposed[name],count,text})}})}
const chapters=[];
for(const file of all.filter(f=>/\/(?:chapter\d+|phan-\d+-[^/]+)\.html$/.test(f.split(path.sep).join('/')))){
 const h=fs.readFileSync(file,'utf8');const title=h.match(/<title>([\s\S]*?)<\/title>/i)?.[1];const content=h.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]||h;const heading=content.match(/<h[12]\b[^>]*>([\s\S]*?)<\/h[12]>/i)?.[1];chapters.push({file:path.relative(root,file).split(path.sep).join('/'),title,heading});
}
const summary=Object.entries(proposed).map(([old,next])=>({old,new:next,files:fs.readdirSync(path.join(root,old)).filter(f=>f.endsWith('.html')).length,referencingFiles:new Set(references.filter(r=>r.old===old).map(r=>r.file)).size,occurrences:references.filter(r=>r.old===old).reduce((n,r)=>n+r.count,0)}));
fs.mkdirSync(output,{recursive:true});fs.writeFileSync(path.join(output,'references.json'),JSON.stringify({summary,references,chapters},null,2)+'\n');
const rows=references.map(r=>`| ${r.old} | ${r.file}:${r.line} | ${r.count} | ${r.text.replace(/\|/g,'\\|').replace(/</g,'&lt;').replace(/>/g,'&gt;')} |`).join('\n');
fs.writeFileSync(path.join(output,'references.md'),'# Tham chiếu cần cập nhật khi đổi tên thư mục\n\nChưa đổi tên hoặc cập nhật tham chiếu. Báo cáo bao gồm tham chiếu trong nội dung, mã nguồn và các báo cáo JSON trước đây; cần phân biệt tham chiếu đang hoạt động và dữ liệu lịch sử trước khi áp dụng.\n\n| Thư mục | Vị trí | Số lần | Dòng tham chiếu |\n| --- | --- | ---: | --- |\n'+rows+'\n');
console.log(JSON.stringify({summary,chapterPages:chapters.length,referenceRows:references.length,catalogJsDirectReferences:references.filter(r=>r.file==='assets/catalog.js').length},null,2));
