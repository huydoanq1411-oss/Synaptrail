const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),dry=process.argv.includes('--dry-run');
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.name.startsWith('.')||['reports','artifacts','node_modules'].includes(e.name)?[]:e.isDirectory()?walk(path.join(d,e.name)):e.name.endsWith('.html')?[path.join(d,e.name)]:[]);
const decode=s=>s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const plain=s=>decode(s.replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ').trim();
const escape=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const trimName=s=>s.replace(/^(?:Chương|Phần)\s*\d+\s*[.·—–:-]?\s*/i,'').replace(/^\d+\s*[.·—–:-]?\s*/,'').trim();
const all=walk(root),map=new Map();
for(const file of all){
 const match=path.basename(file).match(/^(?:chapter(\d+)|phan-(\d+)-.*)\.html$/);if(!match)continue;
 const html=fs.readFileSync(file,'utf8'),number=Number(match[1]||match[2]);
 const main=html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
 const heading=main?.match(/<h([12])\b([^>]*)>([\s\S]*?)<\/h\1>/i);if(!heading)throw Error('No primary heading '+file);
 let name=trimName(plain(heading[3]));
 if(match[2]){const index=fs.readFileSync(path.join(path.dirname(file),'index.html'),'utf8');const toc=[...index.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].find(m=>m[1]===path.basename(file)&&m[2].includes('class="toc-num"'));if(!toc)throw Error('No ML index title '+file);name=trimName(plain(toc[2].replace(/<span\b[^>]*>[\s\S]*?<\/span>/,'')));}
 const oldTitle=html.match(/<title>([\s\S]*?)<\/title>/i)[1];const suffix=decode(oldTitle).match(/—\s*(Giáo Trình[\s\S]*?)(?:\s*\|\s*Synaptrail)?$/i)?.[1]?.replace(/\s*\|\s*Synaptrail$/,'').trim()||path.basename(path.dirname(file));
 map.set(file,{name,number,label:`Chương ${number} — ${name}`,suffix,heading});
}
const changes=[];
for(const file of all){
 const before=fs.readFileSync(file,'utf8');let html=before;const chapter=map.get(file);
 if(chapter){
  html=html.replace(/<title>[\s\S]*?<\/title>/i,'<title>'+escape(chapter.label+' — '+chapter.suffix+' | Synaptrail')+'</title>');
  const h=chapter.heading;const badge=h[3].match(/<span\b[^>]*class="num"[^>]*>[\s\S]*?<\/span>/i);
  html=html.replace(h[0],'<h'+h[1]+h[2]+'>'+(badge?'Chương <span class="num">'+chapter.number+'</span> — '+escape(chapter.name):escape(chapter.label))+'</h'+h[1]+'>');
  html=html.replace(/(<div class="crumb">)([\s\S]*?)(<\/div>)/,(_,open,body,close)=>open+body.replace(/<span>([^<]*)<\/span>(\s*)$/, '<span>'+escape(chapter.label)+'</span>$2')+close);
 }
 html=html.replace(/<a\b([^>]*\bhref="([^"]+)"[^>]*)>([\s\S]*?)<\/a>/gi,(whole,attrs,href,body)=>{
  if(/^(?:[a-z]+:|\/\/)/i.test(href))return whole;
  const target=map.get(path.resolve(path.dirname(file),href.split(/[?#]/)[0]));if(!target)return whole;
  const toc=body.match(/<span\b[^>]*class="toc-num"[^>]*>[\s\S]*?<\/span>/i);
  if(toc)return '<a'+attrs+'>'+toc[0]+escape(target.label)+'</a>';
  if(!/class="[^"]*\b(?:nav-link|nav-btn)\b/.test(attrs))return whole;
  const prefix=/\bprev\b/.test(attrs)||plain(body).startsWith('←')?'← ':'';
  const suffix=/\bnext\b/.test(attrs)||plain(body).endsWith('→')?' →':'';
  return '<a'+attrs+'>'+prefix+escape(target.label)+suffix+'</a>';
 });
 if(html!==before){changes.push(path.relative(root,file).split(path.sep).join('/'));if(!dry)fs.writeFileSync(file,html);}
}
console.log(JSON.stringify({dryRun:dry,chapterPages:map.size,changedFiles:changes.length,files:changes},null,2));
