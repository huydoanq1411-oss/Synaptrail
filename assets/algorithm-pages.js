(function(){
  'use strict';
  try{document.documentElement.dataset.theme=localStorage.getItem('synaptrail-theme')==='light'?'light':'dark';}catch{}
  document.addEventListener('DOMContentLoaded',()=>{
    document.body.classList.add('rm-ready');const $=id=>document.getElementById(id),make=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
    const notify=message=>{$('ap-message').textContent=message;};let store;
    try{store=SynaptrailProgress.createStore(localStorage);store.read();}catch{notify('Không đọc được bộ nhớ tiến độ. Nội dung vẫn có thể sử dụng.');}
    function labelTheme(){$('rm-theme').textContent=document.documentElement.dataset.theme==='light'?'◐ Chế độ tối':'◐ Chế độ sáng';}
    $('rm-theme').addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=theme;try{localStorage.setItem('synaptrail-theme',theme);}catch{}labelTheme();});labelTheme();
    const chapter=document.body.dataset.node;
    function renderStatus(){if(!chapter)return;try{const record=store.read()['thuat-toan']?.[chapter],status=record?.status||(record?.done?'done':null);document.querySelectorAll('[data-status]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.status===status)));}catch(error){notify(error.message);}}
    document.querySelectorAll('[data-status]').forEach(b=>b.addEventListener('click',()=>{try{store.update('thuat-toan',chapter,{status:b.dataset.status});renderStatus();notify('Đã lưu trạng thái học.');}catch(error){notify(error.message);}}));
    addEventListener('storage',event=>{if(event.key==='synaptrail-progress'||event.key===null)renderStatus();});renderStatus();
    document.querySelectorAll('.rm-lesson-content pre').forEach(pre=>{const copy=make('button','ap-copy','Copy');copy.type='button';copy.setAttribute('aria-label','Sao chép đoạn code');copy.addEventListener('click',async()=>{const text=pre.querySelector('code')?.textContent||pre.textContent;try{await navigator.clipboard.writeText(text);copy.textContent='Đã chép ✓';}catch{const selection=getSelection(),range=document.createRange();range.selectNodeContents(pre);selection.removeAllRanges();selection.addRange(range);notify('Đã chọn code. Nhấn Ctrl+C để sao chép.');}});pre.before(copy);});
    const quizData=globalThis.SynaptrailAlgorithmQuizzes;if(!quizData)return;
    const select=$('ap-quiz-select');Object.entries(quizData.chapters).forEach(([id,q])=>{const option=make('option','',q.title);option.value=id;select.append(option);});
    function showQuiz(id){
      const area=$('ap-quiz-area');area.replaceChildren();$('ap-message').textContent='';const quiz=quizData.chapters[id];select.value=quiz?id:'';
      document.querySelectorAll('[data-quiz-back]').forEach(a=>a.href=quiz?id+'.html':'../roadmap/thuat-toan.html');
      if(!quiz){$('ap-quiz-title').textContent='Quiz Thuật toán';if(id)notify('Chương này chưa có quiz. Chọn một chương khác trong danh sách.');return;}
      $('ap-quiz-title').textContent='Quiz · '+quiz.title;document.title='Quiz '+quiz.title+' | Synaptrail';
      try{history.replaceState(null,'','?chapter='+id);}catch{}
      const form=make('form');form.dataset.quiz='true';
      quiz.questions.forEach((question,i)=>{const field=make('fieldset','rm-quiz');field.append(make('legend','',question.question));question.options.forEach((text,j)=>{const label=make('label'),input=make('input');input.type='radio';input.name='question-'+i;input.value=String(j);input.required=true;label.append(input,make('span','',text));field.append(label);});form.append(field);});
      const submit=make('button','ap-submit','Chấm điểm'),result=make('p','rm-quiz-result');submit.type='submit';result.setAttribute('role','status');form.append(submit,result);
      form.addEventListener('submit',event=>{event.preventDefault();let correct=0;quiz.questions.forEach((q,i)=>{const field=form.querySelectorAll('fieldset')[i],choice=field.querySelector('input:checked');if(Number(choice.value)===q.answer)correct++;field.querySelectorAll('label').forEach((label,j)=>{delete label.dataset.result;if(j===q.answer)label.dataset.result='correct';else if(label.querySelector('input').checked)label.dataset.result='wrong';});field.querySelector('.ap-answer')?.remove();const answer=make('p','ap-answer',`Đáp án: ${q.options[q.answer]}. ${q.explanation||''}`);field.append(answer);});const score=Math.round(correct/quiz.questions.length*100);result.textContent=`Đúng ${correct}/${quiz.questions.length} câu · ${score}%.`;try{store.update('thuat-toan',id,{quizScore:score});notify('Đã lưu điểm quiz cao nhất.');}catch{notify('Không thể lưu điểm trên thiết bị này.');}});
      area.append(form);
    }
    select.addEventListener('change',()=>showQuiz(select.value));showQuiz(new URLSearchParams(location.search).get('chapter')||'');
  },{once:true});
})();
