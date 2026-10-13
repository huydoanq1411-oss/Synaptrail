const fs=require('node:fs'),path=require('node:path');
const decode=s=>s.replace(/&amp;/g,'&').replace(/&#(x[\da-f]+|\d+);/gi,(_,n)=>String.fromCodePoint(n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):Number(n)));
function attributes(tag){const result={};for(const match of tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g))result[match[1].toLowerCase()]=decode(match[2]??match[3]??match[4]);if(/\balt(?=\s|\/?>)/i.test(tag)&&!('alt' in result))result.alt='';return result;}
function content(html){return html.replace(/<!--[\s\S]*?-->/g,'').replace(/<(script|style|pre|code|template)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,'');}
function checkHtml(file,html,root,cache=new Map()){
 const errors=[],visible=content(html),label=path.relative(root,file).split(path.sep).join('/');
 const report=message=>errors.push(label+': '+message);
 if(!/<h1\b/i.test(visible))report('Missing <h1>');
 const metas=[...visible.matchAll(/<meta\b[^>]*>/gi)].map(m=>attributes(m[0]));
 if(!metas.some(a=>a.name?.toLowerCase()==='description'&&a.content?.trim()))report('Missing meta description');
 for(const [tag]of visible.matchAll(/<img\b[^>]*>/gi)){const a=attributes(tag);if(!('alt' in a))report('Image missing alt: '+(a.src||'(no src)'));}
 for(const [tag]of visible.matchAll(/<a\b[^>]*>/gi)){
  const href=attributes(tag).href;if(!href||/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href))continue;
  const fragmentAt=href.indexOf('#'),fragment=fragmentAt<0?'':href.slice(fragmentAt+1),route=(fragmentAt<0?href:href.slice(0,fragmentAt)).split('?')[0];
  let destination;
  try{destination=route?route.startsWith('/')?path.resolve(root,'.'+decodeURIComponent(route)):path.resolve(path.dirname(file),decodeURIComponent(route)):file;}catch{report('Invalid URL encoding: '+href);continue;}
  if(path.relative(root,destination).startsWith('..')){report('Internal link outside project: '+href);continue;}
  if(fs.existsSync(destination)&&fs.statSync(destination).isDirectory())destination=path.join(destination,'index.html');
  if(!fs.existsSync(destination)){report('Broken internal link: '+href);continue;}
  if(fragment&&destination.endsWith('.html')){
   let target=cache.get(destination);if(target===undefined){target=content(fs.readFileSync(destination,'utf8'));cache.set(destination,target)}
   let anchor;try{anchor=decodeURIComponent(fragment)}catch{report('Invalid fragment encoding: '+href);continue;}
   const ids=[...target.matchAll(/<[a-z][^>]*>/gi)].map(m=>attributes(m[0]));
   if(!ids.some(a=>a.id===anchor||a.name===anchor))report('Broken internal anchor: '+href);
  }
 }
 return errors;
}
module.exports={checkHtml};
