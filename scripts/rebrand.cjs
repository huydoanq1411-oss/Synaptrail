// One-time migration: keep the original course catalogue and all lesson URLs.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name.startsWith('.')?[]:e.isDirectory()?walk(path.join(dir,e.name)):e.name.endsWith('.html')?[path.join(dir,e.name)]:[])}
const catalogue = path.join(root,'courses.html');
if(!fs.existsSync(catalogue)) fs.copyFileSync(path.join(root,'index.html'),catalogue);
for(const file of walk(root)){
 let html=fs.readFileSync(file,'utf8');
 html=html.replaceAll('AI Engineer Full Stack and Programming Language','Học đúng kỹ năng. Đi xa hơn mỗi ngày.')
  .replaceAll('AI Engineer Full Stack','Synaptrail')
  .replaceAll('algo-mastery-theme','synaptrail-theme')
  .replace(/\|\| 'dark'/g,"|| 'light'")
  .replace(/saved \|\| 'dark'/g,"saved || 'light'")
  .replace(/setAttribute\('data-theme', 'dark'\);/g,"setAttribute('data-theme', 'light');")
  .replace(/<title>([\s\S]*?)<\/title>/,(_,title)=>`<title>${title.includes('Synaptrail')?title:title+' | Synaptrail'}</title>`);
 if(file===catalogue){
  html=html.replace('<body>','<body class="catalog-page">')
   .replace('<span class="brand-mark">AI</span>','<span class="brand-mark">S</span>')
   .replace('<span> Lập trình viên </span>','<span>KHÔNG GIAN HỌC LẬP TRÌNH</span>')
   .replace(/<section class="hero">[\s\S]*?<\/section>/,`<section class="catalog-intro"><a class="back-home" href="index.html">← Trang chủ</a><span class="eyebrow">THƯ VIỆN SYNAPTRAIL</span><h1>Tìm hướng đi.<br><em>Chọn kỹ năng tiếp theo.</em></h1><p>Lộ trình, kỹ năng và bài tập thực hành — tất cả trong một không gian học tập.</p><a class="btn btn-primary" href="#roadmap">Khám phá 22 chủ đề →</a></section>`);
 }
 fs.writeFileSync(file,html);
}
console.log('Synaptrail branding and light default applied to',walk(root).length,'pages.');
