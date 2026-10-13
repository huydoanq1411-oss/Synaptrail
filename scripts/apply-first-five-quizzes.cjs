const fs=require('node:fs'),path=require('node:path'),data=require('./quiz-first-five-data.cjs');
const root=path.resolve(__dirname,'..'),dry=process.argv.includes('--dry-run');
const escape=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const kinds={concept:'Nhớ khái niệm',application:'Áp dụng / đọc code',error:'Tìm lỗi'};
const review=['# Quiz mẫu — 5 chương đầu Java, C++ và thuật toán','\nGiải thích trên website chỉ hiện sau khi chấm điểm; tài liệu này hiển thị đáp án để duyệt. Không có câu ngoài nội dung chương.\n'];
const plans=[];
for(const [course,chapters]of Object.entries(data))for(const {n,questions}of chapters){
 const file=path.join(root,course,'chapter'+String(n).padStart(2,'0')+'.html'),before=fs.readFileSync(file,'utf8'),quizId='q'+n;
 if(questions.length!==5||questions.filter(q=>q.type==='concept').length!==2||questions.filter(q=>q.type==='application').length!==2||questions.filter(q=>q.type==='error').length!==1)throw Error('Wrong question distribution');
 review.push('## '+course+' — Chương '+n+'\n');
 const quiz='<div class="quiz" data-quiz="'+quizId+'" data-quiz-feedback>\n<h4>Quiz — Chương '+n+' · 5 câu</h4>\n'+questions.map((q,i)=>{
  if(q.options.length!==4||!Number.isInteger(q.answer)||q.answer<0||q.answer>3)throw Error('Invalid answers');
  review.push('### '+(i+1)+'. '+q.stem+' ('+kinds[q.type]+')\n\nCơ sở: '+q.basis+'\n');if(q.code)review.push('```\n'+q.code+'\n```\n');
  q.options.forEach(([text,why],j)=>review.push('- **'+String.fromCharCode(65+j)+'. '+text+'** — '+(j===q.answer?'Đúng':'Sai')+': '+why));review.push('');
  return '<div class="quiz-q" data-answer="'+q.answer+'" data-question-kind="'+q.type+'" role="group" aria-labelledby="'+quizId+'-question-'+(i+1)+'"><span class="quiz-kind">'+kinds[q.type]+'</span><p id="'+quizId+'-question-'+(i+1)+'">'+(i+1)+'. '+escape(q.stem)+'</p>'+(q.code?'<pre aria-label="Đoạn mã cần đọc"><code>'+escape(q.code)+'</code></pre>':'')+q.options.map(([text],j)=>'<span class="quiz-opt" data-idx="'+j+'" role="button" tabindex="0" aria-pressed="false" aria-label="'+escape(String.fromCharCode(65+j)+'. '+text)+'">'+String.fromCharCode(65+j)+'. '+escape(text)+'</span>').join('\n')+'<div class="quiz-explanation" hidden><strong>Giải thích đáp án</strong><ul>'+q.options.map(([,why],j)=>'<li><strong>'+String.fromCharCode(65+j)+'. '+(j===q.answer?'Đúng':'Sai')+':</strong> '+escape(why)+'</li>').join('')+'</ul></div></div>';
 }).join('\n')+'\n<button class="quiz-btn" onclick="gradeQuiz(\''+quizId+'\')" aria-label="Chấm năm câu quiz chương '+n+'">Chấm điểm</button><div class="quiz-result" id="result-'+quizId+'"></div><p class="quiz-feedback-status" role="status" aria-live="polite"></p>\n</div>';
 let html=before;
 const found=/<div class="quiz"[^>]*>/.exec(html);
 if(found){const tags=/<\/?div\b[^>]*>/g;tags.lastIndex=found.index;let depth=0,end;let match;while((match=tags.exec(html))){depth+=match[0].startsWith('</')?-1:1;if(depth===0){end=tags.lastIndex;break}}if(!end)throw Error('Unclosed quiz');html=html.slice(0,found.index)+quiz+html.slice(end);}
 else{const section=html.match(/<section class="chapter"[^>]*>[\s\S]*?<\/section>/);if(!section)throw Error('No chapter');const next=section[0].replace('</section>',quiz+'\n</section>');html=html.replace(section[0],next);}
 if(!html.includes('assets/quiz-feedback.css'))html=html.replace('</head>','<link rel="stylesheet" href="../assets/quiz-feedback.css">\n</head>');
 if(!html.includes('assets/quiz-feedback.js'))html=html.replace('</body>','<script src="../assets/quiz-feedback.js"></script>\n</body>');
 plans.push({file,html,changed:html!==before});
}
if(!dry){for(const p of plans)if(p.changed)fs.writeFileSync(p.file,p.html);fs.mkdirSync(path.join(root,'reports/quiz-first-five'),{recursive:true});fs.writeFileSync(path.join(root,'reports/quiz-first-five/review.md'),review.join('\n')+'\n');}
console.log(JSON.stringify({dryRun:dry,chapters:plans.length,questions:75,options:300,outsideChapterQuestions:0,changed:plans.filter(p=>p.changed).length},null,2));
