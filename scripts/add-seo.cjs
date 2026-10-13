'use strict';
const fs=require('node:fs'),path=require('node:path');
const {URL}=require('node:url');
const root=path.resolve(__dirname,'..');
const config=JSON.parse(fs.readFileSync(path.join(__dirname,'seo-config.json'),'utf8'));
const args=process.argv.slice(2),dry=args.includes('--dry-run');
let base=config.baseUrl||'';
for(let i=0;i<args.length;i++){if(args[i]==='--base-url'){if(!args[i+1])throw Error('Missing --base-url value');base=args[++i]}else if(args[i]!=='--dry-run')throw Error('Unknown argument '+args[i]);}
if(base){const url=new URL(base);if(!['http:','https:'].includes(url.protocol)||url.search||url.hash||url.username||url.password)throw Error('baseUrl must be an HTTP(S) website URL without query, hash or credentials');base=url.href.replace(/\/?$/,'/');}
if(!base&&!dry){console.error('Set baseUrl in scripts/seo-config.json or use --base-url before applying. No files changed.');process.exit(1);}
const subjects={'git':'Git','typescript':'TypeScript','bootstrap':'Bootstrap','sass':'SASS / SCSS','mysql':'MySQL','orm':'ORM','graphql':'GraphQL','socketio':'Socket.IO','nestjs':'NestJS','docker':'Docker','ai-engineer':'AI Engineer','cpp':'C++','fullstack-js':'Full Stack JavaScript','html-css-nnlt':'HTML & CSS','java':'Java','javascript-nnlt':'JavaScript','languages':'Ngôn ngữ & kỹ năng mềm','machine-learning':'Machine Learning','python':'Python','Quiz_and_other':'Quiz & tiện ích','react':'React','security':'Bảo mật ứng dụng Web','system-design':'System Design','thuat-toan':'Thuật toán & cấu trúc dữ liệu'};
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name.startsWith('.')||['artifacts','node_modules','reports'].includes(e.name)?[]:e.isDirectory()?walk(path.join(dir,e.name)):e.name.endsWith('.html')?[path.join(dir,e.name)]:[])}
function decode(s){for(let i=0;i<5;i++){const next=s.replace(/&#(x[\da-f]+|\d+);/gi,(_,n)=>{const value=n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):Number(n);return value<=0x10ffff?String.fromCodePoint(value):_}).replace(/&(amp|quot|apos|lt|gt|nbsp|mdash|ndash|hellip);/g,(_,n)=>({amp:'&',quot:'"',apos:"'",lt:'<',gt:'>',nbsp:' ',mdash:'—',ndash:'–',hellip:'…'}[n]));if(next===s)return s;s=next}return s}
const plain=s=>decode(s.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,'').replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();
const escape=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function description(intro){let text=intro;const suffixes=[' Khám phá kiến thức, ví dụ và bài tập thực hành trong chương này trên Synaptrail.',' Học theo nhịp độ của bạn và củng cố kỹ năng từng bước.'];for(const suffix of suffixes){if([...text].length>=120)break;text+=suffix}if([...text].length>155){text=[...text].slice(0,152).join('');text=text.slice(0,text.lastIndexOf(' '))+'…'}if([...text].length<120)text+=' Cùng Synaptrail.';return text;}
const pages=walk(root).sort(),plans=[],warnings=[];let headings=0,titles=0,descriptions=0;
for(const file of pages){
 const original=fs.readFileSync(file,'utf8'),relative=path.relative(root,file).split(path.sep).join('/');
 let html=original.replace(/\s*<!-- Synaptrail SEO -->[\s\S]*?<!-- \/Synaptrail SEO -->/g,'');
 const currentTitle=html.match(/<title>([\s\S]*?)<\/title>/i);if(!currentTitle)throw Error('Missing title: '+relative);
 let title=decode(currentTitle[1]).replace(/\s+/g,' ').trim();
 if(relative!=='index.html'&&path.basename(file)==='index.html'&&subjects[relative.split('/')[0]])title='Mục lục — '+subjects[relative.split('/')[0]]+' | Synaptrail';
 if(escape(title)!==currentTitle[1])titles++;
 html=html.replace(currentTitle[0],'<title>'+escape(title)+'</title>');
 const main=html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]||html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1]||'';
 const content=main.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,'');
 let promoted=false;
 if(!/<h1\b/i.test(html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,''))){
  const chapter=content.match(/<section\b[^>]*class="[^"]*\bchapter\b[^"]*"[^>]*>[\s\S]*?(<h2\b([^>]*)>([\s\S]*?)<\/h2>)/i);
  if(chapter){const attrs=chapter[2].includes('class=')?chapter[2].replace(/class="([^"]*)"/,'class="$1 seo-chapter-title"'):chapter[2]+' class="seo-chapter-title"';html=html.replace(chapter[1],'<h1'+attrs+'>'+chapter[3]+'</h1>');headings++;promoted=true;}
  else warnings.push({file:relative,reason:'No existing chapter heading to promote safely; manual h1 review required'});
 }
 const paragraphs=[...content.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map(m=>plain(m[1])).filter(Boolean);
 const lead=content.match(/<p\b[^>]*class="[^"]*(?:lead|landing-lead)[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
 const intro=lead?plain(lead[1]):paragraphs[0]||plain(content.match(/<h[12]\b[^>]*>([\s\S]*?)<\/h[12]>/i)?.[1]||title);
 const desc=description(intro);if([...desc].length<120||[...desc].length>155)throw Error('Description out of range: '+relative);
 if(!/<meta\b[^>]*name=["']description["']/i.test(original))descriptions++;
 const canonical=base?new URL(relative==='index.html'?'':relative,base).href:null;
 // Remove existing SEO entries before inserting one authoritative set.
 html=html.replace(/<head>([\s\S]*?)<\/head>/i,(_,head)=>{
  head=head.replace(/<meta\b[^>]*(?:name=["']description["']|property=["']og:[^"']+["'])[^>]*>\s*/gi,'').replace(/<link\b[^>]*rel=["'](?:canonical|icon|shortcut icon)["'][^>]*>\s*/gi,'');
  const favicon=path.relative(path.dirname(file),path.join(root,'assets/favicon.svg')).split(path.sep).join('/');
  const seoCSS=path.relative(path.dirname(file),path.join(root,'assets/seo.css')).split(path.sep).join('/');
  const needsStyle=promoted||html.includes('seo-chapter-title');
  head=head.replace(/<link\b[^>]*href=["'][^"']*assets\/seo\.css["'][^>]*>\s*/gi,'');
  return '<head>'+head.trimEnd()+'\n<!-- Synaptrail SEO -->\n'+`<meta name="description" content="${escape(desc)}">\n<meta property="og:title" content="${escape(title)}">\n<meta property="og:description" content="${escape(desc)}">\n<meta property="og:type" content="${/^chapter/i.test(path.basename(file))||relative.startsWith('machine-learning/')&&path.basename(file)!=='index.html'?'article':'website'}">\n`+(canonical?`<meta property="og:url" content="${escape(canonical)}">\n<link rel="canonical" href="${escape(canonical)}">\n`:'')+`<link rel="icon" type="image/svg+xml" href="${favicon}">\n`+(needsStyle?`<link rel="stylesheet" href="${seoCSS}">\n`:'')+'<!-- /Synaptrail SEO -->\n</head>';
 });
 plans.push({file,relative,html,changed:html!==original,title,description:desc,canonical});
}
if(!dry){
 if(warnings.length)throw Error('Resolve unsafe heading cases before applying: '+JSON.stringify(warnings));
 for(const p of plans)if(p.changed)fs.writeFileSync(p.file,p.html);
 const xml=escape;
 fs.writeFileSync(path.join(root,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+plans.map(p=>`  <url><loc>${xml(p.canonical)}</loc></url>`).join('\n')+'\n</urlset>\n');
 fs.writeFileSync(path.join(root,'robots.txt'),'User-agent: *\nAllow: /\n\nSitemap: '+new URL('sitemap.xml',base).href+'\n');
}
console.log(JSON.stringify({dryRun:dry,baseUrl:base||null,urlOutputsPending:!base,pages:pages.length,plannedChanged:plans.filter(p=>p.changed).length,h1Promotions:headings,titlesFixed:titles,newDescriptions:descriptions,descriptionLengthMin:Math.min(...plans.map(p=>[...p.description].length)),descriptionLengthMax:Math.max(...plans.map(p=>[...p.description].length)),warnings,samples:plans.filter(p=>['index.html','python/index.html','python/chapter001.html'].includes(p.relative)).map(({relative,title,description,canonical})=>({file:relative,title,description,canonical}))},null,2));
