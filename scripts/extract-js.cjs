'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.name.startsWith('.')?[]:e.isDirectory()?walk(path.join(d,e.name)):/^chapter.*\.html$/i.test(e.name)?[path.join(d,e.name)]:[])}
const records=walk(root).sort().map(file=>({file,html:fs.readFileSync(file,'utf8')}));
const groups=new Map();
for(const r of records)for(const m of r.html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)){
 if(m[1].trim())continue;
 const digest=hash(m[2]);if(!groups.has(digest))groups.set(digest,{hash:digest,bytes:Buffer.byteLength(m[2]),source:m[2],files:[]});
 groups.get(digest).files.push(path.relative(root,r.file).split(path.sep).join('/'));
}
console.log(JSON.stringify([...groups.values()].map(g=>({hash:g.hash,bytes:g.bytes,count:g.files.length,example:g.files[0],functions:[...g.source.matchAll(/function\s+(\w+)\(/g)].map(m=>m[1])})),null,2));
