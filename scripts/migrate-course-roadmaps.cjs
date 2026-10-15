/* Run --dry-run first. --sample writes exactly three lesson previews, not live pages.
   --apply is the explicitly approved rollout. Sources make subsequent runs repeatable. */
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),args=new Set(process.argv.slice(2)),apply=args.has('--apply'),sample=args.has('--sample'),revision=process.argv.find(a=>a.startsWith('--from-revision='))?.split('=')[1];
const names={'ai-engineer':'AI Engineer',bootstrap:'Bootstrap',cpp:'C++',docker:'Docker','fullstack-js':'Fullstack JavaScript',git:'Git',graphql:'GraphQL','html-css-nnlt':'HTML & CSS',java:'Java','javascript-nnlt':'JavaScript',languages:'Ngôn ngữ lập trình','machine-learning':'Machine Learning',mysql:'MySQL',nestjs:'NestJS',orm:'ORM',python:'Python',react:'React',sass:'Sass',security:'Bảo mật','socketio':'Socket.IO','system-design':'System Design',typescript:'TypeScript'};
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const icon=d=>'<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="'+d+'" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const backIcon=icon('m12 5-7 7 7 7M5 12h14'),homeIcon=icon('m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7'),nextIcon=icon('M5 12h14m-6-6 6 6-6 6');
const outputs=new Map(),stats=[],previews=[];
function put(file,text){outputs.set(file,text);}
function header(back='../courses.html',attrs=''){return '<header class="rm-header ap-header"><a class="rm-back" '+attrs+' href="'+back+'">'+backIcon+'<span>Quay lại</span></a><nav aria-label="Điều hướng"><a class="rm-home" href="../index.html">'+homeIcon+'<span>Trang chủ</span></a><button type="button" id="rm-theme">Giao diện</button></nav></header>';}
function footer(back,attrs=''){return '<footer class="rm-footer"><a class="rm-back" '+attrs+' href="'+back+'">'+backIcon+'<span>Quay lại lộ trình</span></a><a class="rm-home" href="../index.html">'+homeIcon+'<span>Trang chủ</span></a></footer>';}
function shell(course,title,desc,body,classes,scripts,extra=''){
 return '<!DOCTYPE html>\n<html lang="vi" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(title)+' | Synaptrail</title><meta name="description" content="'+esc(desc)+'"><link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">'+['ui','tokens','roadmap','thuat-toan-roadmap','course-pages'].map(f=>'<link rel="stylesheet" href="../assets/'+f+'.css">').join('')+scripts.map(f=>'<script src="../assets/'+f+'" defer></script>').join('')+'</head><body class="algorithm-roadmap '+classes+'" data-course="'+course+'" data-skill="'+course+'" '+extra+'><a class="rm-skip" href="#course-content">Bỏ qua điều hướng</a>'+body+'</body></html>\n';
}
function extract(html){
 const d=new DOMParser().parseFromString(html,'text/html'),main=d.querySelector('main,.wrap');if(!main)throw Error('Missing main');
 const clean=s=>(s||'').replace(/\s+/g,' ').trim();
 const heading=main.querySelector('h1,h2'),title=clean(heading?.textContent||d.title).replace(/^Chương\s*\d+\s*[—–:.-]?\s*/i,'');
 const summary=clean(main.querySelector('.lead,.chapter-desc,.summary-box p')?.textContent||main.querySelector('p')?.textContent||title);
 const questions=[...main.querySelectorAll('.quiz-q[data-answer]')].map(q=>({question:clean(q.querySelector('p')?.textContent),code:[...q.querySelectorAll('pre')].map(p=>p.textContent).join('\n\n'),options:[...q.querySelectorAll('.quiz-opt')].map(o=>clean(o.textContent).replace(/^[A-Z][.)]\s*/,'')),answer:Number(q.dataset.answer),explanation:clean(q.querySelector('.quiz-explanation')?.textContent)}));
 for(const q of questions)if(!q.question||q.options.length<2||q.answer<0||q.answer>=q.options.length)throw Error('Invalid existing quiz');
 main.querySelectorAll('.quiz,[data-quiz],.quiz-q[data-answer]').forEach(e=>e.remove());
 main.querySelectorAll('script,.chnav,.breadcrumb,.crumb,.copy-btn,.btn-copy').forEach(e=>e.remove());
 if(heading?.parentNode)heading.remove();
 const styles=[];
 for(const e of [main,...main.querySelectorAll('*')]){
  for(const a of [...e.attributes])if(a.name.startsWith('on')){
   const code=a.value; e.removeAttribute(a.name);
   if(code==='window.print()'){e.dataset.coursePrint='true';continue;}
   if(/copyCode/.test(code)){e.remove();break;}
   if(/toggleChapter|classList.toggle\('open'\)/.test(code)||/toggleAnswer/.test(code)){
    const b=d.createElement('button');for(const attr of [...e.attributes])b.setAttribute(attr.name,attr.value);b.innerHTML=e.innerHTML;b.type='button';b.dataset.courseToggle=/toggleAnswer/.test(code)?'answer':'section';e.replaceWith(b);break;
   }
   throw Error('Unrecognized lesson interaction: '+code);
  }
 }
 // Existing decorative inline declarations are replaced by shared semantic styles.
 main.querySelectorAll('[style]').forEach(e=>e.removeAttribute('style'));
 return{title,summary,content:main.innerHTML.trim(),questions,ids:[...main.querySelectorAll('[id]')].map(e=>e.id),words:clean(main.textContent).split(' ').length};
}
(async()=>{
 const browser=await require('./course-browser.cjs').browser();
 try{for(const [course,name] of Object.entries(names)){
  const sourceFile='assets/roadmaps/'+course+'-source.json';let lessons;
  if(!revision&&fs.existsSync(path.join(root,sourceFile)))lessons=JSON.parse(fs.readFileSync(path.join(root,sourceFile),'utf8')).lessons;
  else{
   lessons=[];const files=fs.readdirSync(path.join(root,course)).filter(f=>f.endsWith('.html')&&!['index.html','quiz.html','chu-de.html'].includes(f)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
   for(const file of files){const html=revision?require('node:child_process').execFileSync('git',['show',revision+':'+course+'/'+file],{encoding:'utf8',maxBuffer:10*1024*1024}):fs.readFileSync(path.join(root,course,file),'utf8'),redirect=html.match(/http-equiv="refresh"[^>]*content="[^";]*;url=([^"#]+)/i);
    if(redirect){lessons.push({id:path.basename(file,'.html'),file,title:(html.match(/<title>(.*?)\s*\|/i)||[])[1]||name,summary:'Nội dung thuộc khóa '+name+'.',redirect:redirect[1],content:null,questions:[]});continue;}
    const lesson=await browser.evaluate('('+extract.toString()+')('+JSON.stringify(html)+')');lessons.push({id:path.basename(file,'.html'),file,...lesson});
   }
  }
  put(sourceFile,JSON.stringify({course,title:name,lessons},null,2)+'\n');
  const nodes=[],layout={},groups=[];
  const structure=require('../assets/roadmaps/course-structure.json')[course];if(!structure)throw Error('Missing semantic structure '+course);
  const covered=[];
  for(const [index,definition] of structure.entries()){
   const [title,start,end,leftTitle,leftCount,rightTitle,mode]=definition,batch=lessons.slice(start-1,end),id='stage-'+(index+1);
   if(batch.length!==end-start+1)throw Error('Invalid chapter range '+course+'/'+title);covered.push(...batch.map(l=>l.id));
   const group={id,title,type:'bat-buoc',side:'spine',parent:null,chapter:null,summary:batch.map(l=>l.title).join(' · '),time:batch.reduce((t,l)=>t+Math.max(5,Math.ceil((l.words||500)/180)),0),related:[],comingSoon:false};groups.push(group);nodes.push(group);layout[id]={left:[],right:[]};
   // Like the algorithm reference: an introductory fan, named clusters, tiles and advanced hubs.
   const split=leftCount??(index===0?0:batch.length<=2?(index%2?batch.length:0):Math.ceil(batch.length/2));
   const left=batch.slice(0,split).map(l=>l.id),right=batch.slice(split).map(l=>l.id);
   batch.forEach(lesson=>nodes.push({id:lesson.id,title:lesson.title,type:'chi-tiet',side:left.includes(lesson.id)?'left':'right',parent:id,chapter:course+'/'+lesson.file,summary:lesson.summary,time:Math.max(5,Math.ceil((lesson.words||500)/180)),related:[],comingSoon:false,quiz:lesson.questions.length?course+'/quiz.html?chapter='+lesson.id:null}));
   if(left.length)layout[id].left.push({...(leftTitle?{title:leftTitle,tiles:left.length===2}:{}),nodes:left});
   if(right.length)layout[id].right.push({...(rightTitle?{title:rightTitle,hub:mode==='hub',tiles:mode!=='hub'&&right.length===2}:{}),nodes:right});
  }
  if(covered.length!==lessons.length||new Set(covered).size!==lessons.length)throw Error('Missing/duplicate chapters in '+course);
  for(const lesson of lessons.filter(l=>l.redirect)){const node=nodes.find(n=>n.id===lesson.id),target=path.posix.normalize(course+'/'+lesson.redirect);node.chapter=target;node.progressCourse=target.split('/')[0];node.progressNode=path.posix.basename(target,'.html');}
  const data={course,title:name,nodes,layout,continueWith:[{title:'Danh mục khóa học',chapter:'courses.html'},{title:'Bài tập thực hành',chapter:'Quiz_and_other/exercises.html'},{title:'Quiz tổng hợp',chapter:'Quiz_and_other/quiz-tong-hop.html'}]};
  put('assets/roadmaps/'+course+'.js','/* Generated from existing lessons. Source: '+course+'-source.json. */\nglobalThis.SynaptrailRoadmapData = '+JSON.stringify(data,null,2)+';\n');
  const quizzes={course,title:name,chapters:{}};
  for(let i=0;i<lessons.length;i++){
   const l=lessons[i];if(l.redirect)continue;
   if(l.questions.length)quizzes.chapters[l.id]={title:l.title,chapter:l.file,questions:l.questions};
   const back='../roadmap/'+course+'.html#'+l.id,prev=lessons[i-1],next=lessons[i+1];
   const body=header(back)+'<main class="ap-main" id="course-content"><div class="ap-heading"><p class="rm-eyebrow">'+esc(name)+' / BÀI '+(i+1)+'</p><h1>'+esc(l.title)+'</h1><p class="rm-lead">'+esc(l.summary)+'</p></div><div class="ap-toolbar"><div class="rm-status-actions" aria-label="Trạng thái học"><button type="button" data-status="learning" aria-pressed="false">Đang học</button><button type="button" data-status="done" aria-pressed="false">Đã xong</button><button type="button" data-status="skip" aria-pressed="false">Bỏ qua</button></div>'+(l.questions.length?'<a class="ap-quiz-link" href="quiz.html?chapter='+l.id+'">Làm quiz ở trang riêng '+nextIcon+'</a>':'')+'</div><p id="ap-message" role="status" aria-live="polite"></p><article class="rm-lesson-content">'+l.content+'</article><nav class="ap-pagination" aria-label="Điều hướng bài học">'+(prev?'<a href="'+prev.file+'">'+backIcon+'Bài trước</a>':'<span></span>')+(next?'<a href="'+next.file+'">Bài tiếp theo'+nextIcon+'</a>':'')+'</nav>'+footer(back)+'</main>';
   const html=shell(course,l.title+' — '+name,l.summary,body,'algorithm-lesson',['progress.js','algorithm-pages.js','course-pages.js','code-highlighter.js'],'data-node="'+l.id+'"');
   put(course+'/'+l.file,html);if(['cpp/chapter01.html','python/chapter001.html','machine-learning/phan-2-toan-cho-ml.html'].includes(course+'/'+l.file))previews.push({file:course+'/'+l.file,html,before:fs.readFileSync(path.join(root,course,l.file),'utf8')});
  }
  put('assets/roadmaps/'+course+'-quiz.js','/* Loaded only on the separate quiz page. */\nglobalThis.SynaptrailAlgorithmQuizzes = '+JSON.stringify(quizzes,null,2)+';\n');
  const fallback='<ol class="fallback-list">'+groups.map(g=>'<li id="'+g.id+'"><h2>'+esc(g.title)+'</h2><ol>'+nodes.filter(n=>n.parent===g.id).map(n=>'<li id="'+n.id+'"><a href="../'+n.chapter+'">'+esc(n.title)+'</a></li>').join('')+'</ol></li>').join('')+'</ol>';
  let map=fs.readFileSync(path.join(root,'roadmap/thuat-toan.html'),'utf8');
  map=map.replace(/<!-- fallback:start -->[\s\S]*?<!-- fallback:end -->/,'<!-- fallback:start -->'+fallback+'<!-- fallback:end -->').replace(/<div class="rm-next" id="rm-next">[\s\S]*?<\/div>/,'<div class="rm-next" id="rm-next"></div>').replace('23 chương',lessons.length+' bài').replace('9 chặng học',groups.length+' chặng học').replace(/<h1>[\s\S]*?<\/h1>/,'<h1>'+esc(name)+'</h1>').replaceAll('Thuật toán &amp; Cấu trúc dữ liệu',esc(name)).replaceAll('Thuật toán & Cấu trúc dữ liệu',esc(name)).replace('LEARNING PATH 01','LỘ TRÌNH HỌC').replace('assets/roadmaps/thuat-toan.js','assets/roadmaps/'+course+'.js').replace('<body class="algorithm-roadmap">','<body class="algorithm-roadmap" data-course="'+course+'" data-skill="'+course+'">').replace('</head>','<link rel="stylesheet" href="../assets/course-pages.css"></head>');
  map=map.replace(/<a class="rm-home" href="..\/index.html">[^<]*<\/a>/,'<a class="rm-home" href="../index.html">'+homeIcon+'<span>Trang chủ</span></a>');
  put('roadmap/'+course+'.html',map);
  // Keep the course entry URL: display the actual diagram here as well as at roadmap/.
  put(course+'/index.html',map);
  let topic=fs.readFileSync(path.join(root,'thuat-toan/chu-de.html'),'utf8').replaceAll('assets/roadmaps/thuat-toan.js','assets/roadmaps/'+course+'.js').replaceAll('../roadmap/thuat-toan.html','../roadmap/'+course+'.html').replaceAll('THUẬT TOÁN',esc(name.toUpperCase())).replaceAll('Thuật toán',esc(name)).replace('<body class="algorithm-roadmap algorithm-lesson algorithm-topic">','<body class="algorithm-roadmap algorithm-lesson algorithm-topic" data-course="'+course+'" data-skill="'+course+'">').replace('</head>','<link rel="stylesheet" href="../assets/course-pages.css"></head>');put(course+'/chu-de.html',topic);
  let quiz=fs.readFileSync(path.join(root,'thuat-toan/quiz.html'),'utf8').replaceAll('assets/roadmaps/thuat-toan-quiz.js','assets/roadmaps/'+course+'-quiz.js').replaceAll('../roadmap/thuat-toan.html','../roadmap/'+course+'.html').replaceAll('THUẬT TOÁN',esc(name.toUpperCase())).replaceAll('Thuật toán',esc(name)).replace('<body class="algorithm-roadmap algorithm-quiz">','<body class="algorithm-roadmap algorithm-quiz" data-course="'+course+'" data-skill="'+course+'">').replace('</head>','<link rel="stylesheet" href="../assets/course-pages.css"></head>');put(course+'/quiz.html',quiz);
  stats.push({course,title:name,lessons:lessons.filter(l=>!l.redirect).length,redirects:lessons.filter(l=>l.redirect).length,quizChapters:Object.keys(quizzes.chapters).length,questions:lessons.reduce((n,l)=>n+l.questions.length,0)});
 }}finally{browser.close();}
 // Legacy Fullstack cards use the real destination titles and share its progress.
 const fullstackContext={};require('node:vm').runInNewContext(outputs.get('assets/roadmaps/fullstack-js.js'),fullstackContext);const fullstack=fullstackContext.SynaptrailRoadmapData;
 for(const node of fullstack.nodes.filter(n=>n.progressCourse)){const source=JSON.parse(outputs.get('assets/roadmaps/'+node.progressCourse+'-source.json')||'{"lessons":[]}'),lesson=source.lessons.find(l=>l.id===node.progressNode);if(lesson){node.title=lesson.title;node.summary=lesson.summary;}}
 for(const group of fullstack.nodes.filter(n=>n.side==='spine'))group.summary=fullstack.nodes.filter(n=>n.parent===group.id).map(n=>n.title).join(' · ');
 put('assets/roadmaps/fullstack-js.js','/* Legacy paths open their existing standalone course lessons. */\nglobalThis.SynaptrailRoadmapData = '+JSON.stringify(fullstack,null,2)+';\n');
 const fullstackFallback='<ol class="fallback-list">'+fullstack.nodes.filter(n=>n.side==='spine').map(g=>'<li id="'+g.id+'"><h2>'+esc(g.title)+'</h2><ol>'+fullstack.nodes.filter(n=>n.parent===g.id).map(n=>'<li id="'+n.id+'"><a href="../'+n.chapter+'">'+esc(n.title)+'</a></li>').join('')+'</ol></li>').join('')+'</ol>';
 for(const file of ['fullstack-js/index.html','roadmap/fullstack-js.html'])put(file,outputs.get(file).replace(/<!-- fallback:start -->[\s\S]*?<!-- fallback:end -->/,'<!-- fallback:start -->'+fullstackFallback+'<!-- fallback:end -->'));
 for(const [file,text] of outputs)if(file.endsWith('.html'))put(file,text.replace(/<a href="..\/index.html">Trang chủ[^<]*<\/a>/g,'<a class="rm-home" href="../index.html">'+homeIcon+'<span>Trang chủ</span></a>').replace(/<a([^>]*class="rm-(home|back)"[^>]*)>([\s\S]*?)<\/a>/g,(all,attrs,type,body)=>body.includes('<svg')?all:'<a'+attrs+'>'+(type==='home'?homeIcon:backIcon)+'<span>'+(type==='home'?'Trang chủ':body)+'</span></a>'));
 const reportDir=path.join(root,'reports/course-roadmaps');fs.mkdirSync(reportDir,{recursive:true});
 if(args.has('--sample-maps')){const previewDir=path.join(reportDir,'structure-preview');fs.mkdirSync(previewDir,{recursive:true});for(const course of ['cpp','python','java']){const file='assets/roadmaps/'+course+'.js',target=path.join(previewDir,course+'.js');fs.writeFileSync(target,outputs.get(file));const diff=require('node:child_process').spawnSync('git',['diff','--no-index','--',path.join(root,file),target],{encoding:'utf8'});if(diff.status>1)throw Error(diff.stderr);fs.writeFileSync(target+'.diff',diff.stdout);}}
 const changed=[...outputs].filter(([file,text])=>!fs.existsSync(path.join(root,file))||fs.readFileSync(path.join(root,file),'utf8')!==text).map(([file])=>file);
 const report={mode:apply?'apply':sample?'sample':'dry-run',courses:stats,files:[...outputs.keys()],changedFiles:changed,sourceHashes:Object.fromEntries([...outputs].filter(([f])=>f.endsWith('-source.json')).map(([f,s])=>[f,crypto.createHash('sha256').update(s).digest('hex')]))};
 fs.writeFileSync(path.join(reportDir,apply?'migration.json':'dry-run.json'),JSON.stringify(report,null,2)+'\n');
 if(sample){for(const p of previews){const target=path.join(reportDir,'preview',p.file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,p.html.replace(/(href|src)="([^"]+)"/g,(m,a,v)=>/^(?:[a-z]+:|#|\/)/i.test(v)?m:a+'="../../../../'+path.posix.normalize(path.posix.dirname(p.file)+'/'+v)+'"'));fs.writeFileSync(target+'.diff.txt','--- '+p.file+' (original)\n+++ '+p.file+' (preview)\n- Sidebar, embedded quiz and old lesson shell\n+ Shared roadmap lesson shell, SVG Back/Home, separate quiz link\n+ Preserved lesson content and IDs\n\n'+p.html.slice(0,3500));}console.log('Wrote three lesson previews to reports/course-roadmaps/preview. Live course pages untouched.');}
 if(apply){for(const [file,text] of outputs){if(fs.existsSync(path.join(root,file))&&fs.readFileSync(path.join(root,file),'utf8')===text)continue;fs.mkdirSync(path.dirname(path.join(root,file)),{recursive:true});fs.writeFileSync(path.join(root,file),text);}}
 console.log(JSON.stringify({mode:report.mode,courses:stats.length,lessons:stats.reduce((n,c)=>n+c.lessons,0),redirects:stats.reduce((n,c)=>n+c.redirects,0),questions:stats.reduce((n,c)=>n+c.questions,0),changedFiles:changed.length,report:'reports/course-roadmaps/'+(apply?'migration.json':'dry-run.json')},null,2));
})().catch(error=>{console.error(error);process.exitCode=1;});
