// Refresh chapter-derived excerpts, then generate the no-JS view from the same data.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),dataPath=path.join(root,'assets/roadmaps/thuat-toan.js');
const sandbox={};vm.runInNewContext(fs.readFileSync(dataPath,'utf8'),sandbox);
const data=sandbox.SynaptrailRoadmapData;
const decode=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&nbsp;/g,' ').replace(/&amp;/g,'&');
const text=s=>decode(s.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim());
function divAt(html,start){if(start<0)return '';let depth=0;for(const m of html.slice(start).matchAll(/<\/?div\b[^>]*>/g)){depth+=m[0].startsWith('</')?-1:1;if(!depth)return html.slice(start,start+m.index+m[0].length);}throw Error('Unbalanced source div');}
const groups=[['nen-tang',1,4],['sap-xep',5,11],['tim-kiem',12,15],['tuyen-tinh',16,19],['cay',20,23]];
for(const [parent,first,last] of groups){
  for(let i=first;i<=last;i++){
    const id='chapter'+String(i).padStart(2,'0'),chapter='thuat-toan/'+id+'.html';
    const html=fs.readFileSync(path.join(root,chapter),'utf8');
    const summary=divAt(html,html.indexOf('<div class="summary-box">'));
    const quiz=divAt(html,html.indexOf('<div class="quiz"'));
    const code=html.match(/<pre><code>([\s\S]*?)<\/code><\/pre>/)?.[1];
    const questions=[...quiz.matchAll(/<div class="quiz-q"\s+data-answer="(\d+)"[^>]*>/g)].map(m=>{const body=divAt(quiz,m.index);return {answer:Number(m[1]),question:text(body.match(/<p\b[^>]*>([\s\S]*?)<\/p>/)[1]),options:[...body.matchAll(/<span class="quiz-opt"[^>]*>([\s\S]*?)<\/span>/g)].map(o=>text(o[1])),explanation:text(divAt(body,body.indexOf('<div class="quiz-explanation"')))};});
    const node={id,title:text(html.match(/<title>Chương \d+ — ([\s\S]*?) — Giáo/)[1]),type:'chi-tiet',side:(i-first)%2?'right':'left',parent,chapter,summary:text(html.match(/<p class="lead">([\s\S]*?)<\/p>/)[1]),time:Math.max(10,Math.round(text(html.match(/<section class="chapter"[\s\S]*?<\/section>/)[0]).length/700/5)*5),related:({9:['chapter23'],23:['chapter09'],7:['chapter08','chapter04'],8:['chapter07'],13:['chapter14','chapter12'],14:['chapter13'],16:['chapter17'],17:['chapter16'],18:['chapter20'],19:['chapter20'],20:['chapter18','chapter19','chapter21'],21:['chapter22'],22:['chapter21']}[i]||[]),comingSoon:false,source:{summary:text(summary.replace(/<h4>[\s\S]*?<\/h4>/,'')),code:code?decode(code):null,quiz:questions,goals:[...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map(m=>text(m[1]))}};
    const old=data.nodes.findIndex(n=>n.id===id);if(old<0)data.nodes.push(node);else data.nodes[old]=node;
  }
  const children=data.nodes.filter(n=>n.parent===parent),group=data.nodes.find(n=>n.id===parent);
  group.summary=children[0].summary;group.time=children.reduce((sum,n)=>sum+n.time,0);
}
const ordered=data.nodes.filter(n=>n.side==='spine').flatMap(n=>[n,...data.nodes.filter(c=>c.parent===n.id)]);
data.nodes=ordered;
fs.writeFileSync(dataPath,'/* Single runtime source. Chapter excerpts: node scripts/sync-algorithm-roadmap.cjs */\nglobalThis.SynaptrailRoadmapData = '+JSON.stringify(data,null,2)+';\n');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const fallback='<ol class="fallback-list">'+ordered.filter(n=>n.side==='spine').map(n=>'<li><h2>'+escape(n.title)+'</h2><p>'+escape(n.summary)+(n.comingSoon?' · Sắp có':'')+'</p><ol>'+ordered.filter(c=>c.parent===n.id).map(c=>'<li><strong>'+escape(c.title)+'</strong><p>'+escape(c.summary)+'</p>'+(c.chapter?'<a href="../'+escape(c.chapter)+'">Mở bài học →</a>':'<span>Sắp có</span>')+'</li>').join('')+'</ol></li>').join('')+'</ol>';
const page=path.join(root,'roadmap/thuat-toan.html');
fs.writeFileSync(page,fs.readFileSync(page,'utf8').replace(/<!-- fallback:start -->[\s\S]*?<!-- fallback:end -->/,'<!-- fallback:start -->\n'+fallback+'\n<!-- fallback:end -->'));
for(const n of data.nodes){if(n.chapter&&!fs.existsSync(path.join(root,n.chapter)))throw Error('Missing chapter '+n.chapter);for(const id of n.related)if(!data.nodes.some(r=>r.id===id))throw Error('Missing relation '+id);}
console.log('Synced 23 chapters; validated '+data.nodes.length+' nodes; generated no-JS fallback.');
