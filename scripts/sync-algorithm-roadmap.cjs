// Generate standalone lessons from the canonical content; quizzes live in a separate file.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),dataPath=path.join(root,'assets/roadmaps/thuat-toan.js'),quizPath=path.join(root,'assets/roadmaps/thuat-toan-quiz.js');
const context={};vm.runInNewContext(fs.readFileSync(dataPath,'utf8'),context);const data=context.SynaptrailRoadmapData;
let quizzes={course:data.course,chapters:{}};
if(fs.existsSync(quizPath)){const q={};vm.runInNewContext(fs.readFileSync(quizPath,'utf8'),q);quizzes=q.SynaptrailAlgorithmQuizzes;}
for(const node of data.nodes){if(!node.source)continue;if(node.source.quiz?.length)quizzes.chapters[node.id]={title:node.title,questions:node.source.quiz};delete node.source.quiz;node.quiz=quizzes.chapters[node.id]?'thuat-toan/quiz.html?chapter='+node.id:null;}
fs.writeFileSync(dataPath,'/* Canonical algorithm roadmap and lesson content. Generate pages: node scripts/sync-algorithm-roadmap.cjs */\nglobalThis.SynaptrailRoadmapData = '+JSON.stringify(data,null,2)+';\n');
fs.writeFileSync(quizPath,'/* Quiz questions are loaded only by thuat-toan/quiz.html. */\nglobalThis.SynaptrailAlgorithmQuizzes = '+JSON.stringify(quizzes,null,2)+';\n');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const arrow='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="m12 5-7 7 7 7M5 12h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const home='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const lessons=data.nodes.filter(n=>n.source);
for(const [index,node] of lessons.entries()){
 if(!node.source.content||/class="quiz(?:\s|"|-q)/.test(node.source.content))throw Error('Invalid lesson content '+node.id);
 const back='../roadmap/thuat-toan.html#'+node.id;
 const related=node.related.map(id=>data.nodes.find(n=>n.id===id)).filter(n=>n?.chapter);
 const next=lessons[index+1],prev=lessons[index-1];
 const html=`<!DOCTYPE html>
<html lang="vi" data-theme="dark">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${esc(node.summary)}">
  <title>${esc(node.title)} | Thuật toán — Synaptrail</title>
  <link rel="stylesheet" href="../assets/ui.css"><link rel="stylesheet" href="../assets/tokens.css"><link rel="stylesheet" href="../assets/roadmap.css">
  <script src="../assets/progress.js" defer></script><script src="../assets/algorithm-pages.js" defer></script>
</head>
<body class="algorithm-roadmap algorithm-lesson" data-node="${node.id}">
  <a class="rm-skip" href="#lesson-content">Bỏ qua điều hướng</a>
  <header class="rm-header ap-header"><a class="rm-back" href="${back}">${arrow}<span>Quay lại lộ trình</span></a><nav aria-label="Điều hướng"><a class="rm-home" href="../index.html">${home}<span>Trang chủ</span></a><button type="button" id="rm-theme">◐ Giao diện</button></nav></header>
  <main class="ap-main" id="lesson-content">
    <div class="ap-heading"><p class="rm-eyebrow">THUẬT TOÁN / CHƯƠNG ${index+1}</p><h1>${esc(node.title)}</h1><p class="rm-lead">${esc(node.summary)}</p><p class="ap-meta">Khoảng ${node.time} phút · Thời lượng ước tính</p></div>
    <div class="ap-toolbar"><div class="rm-status-actions" aria-label="Trạng thái học"><button type="button" data-status="learning" aria-pressed="false">◐ Đang học</button><button type="button" data-status="done" aria-pressed="false">✓ Đã xong</button><button type="button" data-status="skip" aria-pressed="false">↷ Bỏ qua</button></div>${node.quiz?'<a class="ap-quiz-link" href="quiz.html?chapter='+node.id+'">Làm quiz ở trang riêng →</a>':''}</div>
    <p id="ap-message" role="status" aria-live="polite"></p>
    <article class="rm-lesson-content">${node.source.content}</article>
    ${related.length?'<section class="ap-related"><h2>Bài học liên quan</h2>'+related.map(n=>'<a href="'+esc(path.basename(n.chapter))+'">'+esc(n.title)+' →</a>').join('')+'</section>':''}
    <nav class="ap-pagination" aria-label="Điều hướng bài học">${prev?'<a href="'+path.basename(prev.chapter)+'">'+arrow+'<span>Bài trước</span></a>':'<span></span>'}${next?'<a href="'+path.basename(next.chapter)+'"><span>Bài tiếp theo →</span></a>':''}</nav>
    <footer class="rm-footer"><a class="rm-back" href="${back}">${arrow}<span>Quay lại lộ trình</span></a><a href="../index.html">Trang chủ</a></footer>
  </main>
</body>
</html>
`;
 fs.writeFileSync(path.join(root,node.chapter),html);
}
const groups=data.nodes.filter(n=>n.side==='spine');
const fallback='<ol class="fallback-list">'+groups.map(n=>'<li><h2>'+esc(n.title)+'</h2><p>'+esc(n.summary)+(n.comingSoon?' · Sắp có':'')+'</p><ol>'+data.nodes.filter(c=>c.parent===n.id).map(c=>'<li>'+(c.chapter?'<a href="../'+esc(c.chapter)+'">'+esc(c.title)+' →</a>':'<strong>'+esc(c.title)+' · Sắp có</strong>')+'</li>').join('')+'</ol></li>').join('')+'</ol>';
const page=path.join(root,'roadmap/thuat-toan.html');
fs.writeFileSync(page,fs.readFileSync(page,'utf8').replace(/<!-- fallback:start -->[\s\S]*?<!-- fallback:end -->/,'<!-- fallback:start -->\n'+fallback+'\n<!-- fallback:end -->'));
for(const node of data.nodes){if(node.chapter&&!fs.existsSync(path.join(root,node.chapter)))throw Error('Missing '+node.chapter);for(const id of node.related)if(!data.nodes.some(n=>n.id===id))throw Error('Missing relation '+id);}
console.log('Generated 23 standalone lessons; separated '+Object.keys(quizzes.chapters).length+' chapter quizzes; refreshed roadmap fallback.');
