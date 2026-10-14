(function (global) {
  'use strict';
  const KEY = 'synaptrail-progress';
  const JAVA_CHAPTERS = Array.from({length:31}, (_,i) => 'chapter' + String(i+1).padStart(2,'0'));
  const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const safeKey = key => /^[a-zA-Z0-9_-]+$/.test(key) && !['__proto__','prototype','constructor'].includes(key);
  function validate(value) {
    if (!isObject(value)) throw Error('File tiến độ phải là một đối tượng JSON.');
    for (const [course,chapters] of Object.entries(value)) {
      if (!safeKey(course) || !isObject(chapters)) throw Error('Môn học trong file không hợp lệ.');
      for (const [chapter,record] of Object.entries(chapters)) {
        if (!safeKey(chapter) || !isObject(record) || typeof record.done !== 'boolean' || !Number.isFinite(record.quizScore) || record.quizScore < 0 || record.quizScore > 100 || typeof record.updatedAt !== 'string' || !Number.isFinite(Date.parse(record.updatedAt)) || Object.keys(record).some(k => !['done','quizScore','updatedAt'].includes(k))) throw Error('Bản ghi tiến độ không hợp lệ: ' + course + '/' + chapter);
      }
    }
    return value;
  }
  function createStore(storage) {
    const read = () => {try {return validate(JSON.parse(storage.getItem(KEY) || '{}'));} catch {throw Error('Không thể đọc tiến độ. Bộ nhớ có thể bị chặn hoặc dữ liệu JSON không hợp lệ.');}};
    const write = data => {try {storage.setItem(KEY,JSON.stringify(validate(data)));} catch {throw Error('Không thể lưu tiến độ. Kiểm tra quyền bộ nhớ hoặc dung lượng trình duyệt.');} if(global.document)global.document.dispatchEvent(new CustomEvent('synaptrail:progress-change')); return data;};
    return {
      read,
      update(course,chapter,patch) {
        if (!safeKey(course) || !safeKey(chapter)) throw Error('Mã môn học/chương không hợp lệ.');
        const data=read();const previous=data[course]?.[chapter] || {done:false,quizScore:0};
        data[course] ||= {};
        data[course][chapter]={done:patch.done ?? previous.done,quizScore:Math.max(previous.quizScore,patch.quizScore ?? previous.quizScore),updatedAt:new Date().toISOString()};
        return write(data);
      },
      importData(text) {
        let incoming;try {incoming=validate(JSON.parse(text));} catch(error) {throw Error('Không thể nhập: '+error.message);}
        const data=read();
        for (const [course,chapters] of Object.entries(incoming)) {
          data[course] ||= {};
          for (const [chapter,record] of Object.entries(chapters)) if (!data[course][chapter] || Date.parse(record.updatedAt)>Date.parse(data[course][chapter].updatedAt)) data[course][chapter]=record;
        }
        return write(data);
      },
      reset() {try {storage.removeItem(KEY);} catch {throw Error('Không thể xóa tiến độ do bộ nhớ bị chặn.');}}
    };
  }
  const api={KEY,JAVA_CHAPTERS,validate,createStore};
  if (typeof module !== 'undefined' && module.exports) module.exports=api;
  if (!global.document) return;
  global.SynaptrailProgress=api;
  function init() {
    let storage;
    try {storage=global.localStorage;} catch {storage={getItem(){throw Error()},setItem(){throw Error()},removeItem(){throw Error()}};}
    const store=createStore(storage);
    const isJava=global.location.pathname.split('/').includes('java');
    const chapter=isJava?global.location.pathname.split('/').pop().replace(/\.html$/,''):null;
    const isChapter=JAVA_CHAPTERS.includes(chapter);
    const mount=isChapter?document.querySelector('main'):isJava?document.querySelector('.toc-wrap'):document.querySelector('.catalog-intro-copy');
    if (!mount) return;
    const panel=document.createElement('section');panel.className='learning-progress';panel.setAttribute('aria-label','Tiến độ học Java');
    panel.innerHTML='<div class="learning-progress-head"><strong>Tiến độ Java</strong><span data-progress-count></span></div><progress max="31" value="0" aria-label="Số chương Java đã học"></progress><div class="learning-progress-actions">'+(isChapter?'<button type="button" data-progress-done aria-label="Đánh dấu chương Java này đã học" aria-pressed="false">Đánh dấu đã học</button><span data-progress-score></span>':'')+'</div><div class="learning-progress-tools"><button type="button" data-progress-export aria-label="Xuất tiến độ học thành file JSON">Xuất tiến độ</button><button type="button" data-progress-import aria-label="Nhập và gộp tiến độ từ file JSON">Nhập tiến độ</button><button type="button" data-progress-reset aria-label="Xóa toàn bộ tiến độ sau khi xác nhận">Reset tiến độ</button><input type="file" accept=".json,application/json" data-progress-file hidden aria-label="Chọn file JSON tiến độ"></div><p class="learning-progress-message" role="status" aria-live="polite" aria-atomic="true"></p>';
    if (isChapter)mount.prepend(panel);else mount.append(panel);
    const status=panel.querySelector('[role="status"]');
    const notify=(message,error=false)=>{status.textContent=message;status.classList.toggle('progress-error',error);};
    const doneButton=panel.querySelector('[data-progress-done]');
    let current={};
    function render() {
      try {current=store.read();} catch(error) {notify(error.message,true);return;}
      const records=current.java||{};
      const count=JAVA_CHAPTERS.filter(id=>records[id]?.done).length;const percent=Math.round(count/31*100);
      panel.querySelector('[data-progress-count]').textContent=count+'/31 chương · '+percent+'%';panel.querySelector('progress').value=count;
      if(doneButton){const done=!!records[chapter]?.done;doneButton.textContent=done?'✓ Đã học — bỏ đánh dấu':'Đánh dấu đã học';doneButton.setAttribute('aria-pressed',String(done));doneButton.setAttribute('aria-label',done?'Bỏ đánh dấu chương Java đã học':'Đánh dấu chương Java này đã học');panel.querySelector('[data-progress-score]').textContent='Điểm quiz cao nhất: '+(records[chapter]?.quizScore||0)+'%';}
      document.querySelectorAll('#sidebar a[href],.toc-list a[href]').forEach(link=>{
        const url=new URL(link.getAttribute('href'),global.location.href);const id=url.pathname.split('/').pop().replace(/\.html$/,'');
        if(!JAVA_CHAPTERS.includes(id)||!url.pathname.split('/').includes('java'))return;
        let badge=link.querySelector('.completed-chapter');if(!badge){badge=document.createElement('span');badge.className='completed-chapter';badge.textContent=' ✓';badge.setAttribute('aria-label','Đã học');link.append(badge);}badge.hidden=!records[id]?.done;
      });
      document.querySelectorAll('[data-skill="java"]').forEach(card=>{
        let meter=card.querySelector('.java-progress-meter');if(!meter){meter=document.createElement('div');meter.className='java-progress-meter';meter.innerHTML='<span></span><progress max="31" value="0" aria-label="Tiến độ môn Java"></progress>';card.querySelector('.card-footer').before(meter);}
        meter.querySelector('span').textContent='Đã học '+count+'/31 chương · '+percent+'%';meter.querySelector('progress').value=count;
      });
    }
    function save(patch,message){try {store.update('java',chapter,patch);render();notify(message);} catch(error){notify(error.message,true);}}
    doneButton?.addEventListener('click',()=>save({done:!current.java?.[chapter]?.done},current.java?.[chapter]?.done?'Đã bỏ đánh dấu chương.':'Đã lưu chương đã học.'));
    if(isChapter&&typeof global.gradeQuiz==='function'){
      const original=global.gradeQuiz;
      global.gradeQuiz=function(quizId){const result=original.apply(this,arguments);const questions=[...document.querySelectorAll('[data-quiz="'+CSS.escape(quizId)+'"] .quiz-q')];if(questions.length){const correct=questions.filter(q=>q.dataset.selected===q.dataset.answer).length;save({quizScore:Math.round(correct/questions.length*100)},'Đã lưu điểm quiz cao nhất.');}return result;};
    }
    panel.querySelector('[data-progress-export]').addEventListener('click',()=>{
      try {const data=store.read();const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='synaptrail-progress.json';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('Đã tạo file xuất tiến độ.');} catch(error){notify(error.message,true);}
    });
    const fileInput=panel.querySelector('[data-progress-file]');
    panel.querySelector('[data-progress-import]').addEventListener('click',()=>fileInput.click());
    fileInput.addEventListener('change',async()=>{
      const file=fileInput.files[0];if(!file)return;
      try {if(file.size>5*1024*1024)throw Error('File vượt quá giới hạn 5 MB.');store.importData(await file.text());render();notify('Đã gộp tiến độ, giữ bản ghi có thời gian cập nhật mới hơn.');} catch(error){notify(error.message,true);} finally {fileInput.value='';}
    });
    panel.querySelector('[data-progress-reset]').addEventListener('click',()=>{
      if(!global.confirm('Xóa toàn bộ tiến độ Synaptrail đang lưu trong trình duyệt này? Bạn nên xuất file trước khi xóa.'))return;
      try {store.reset();render();notify('Đã xóa toàn bộ tiến độ.');} catch(error){notify(error.message,true);}
    });
    global.addEventListener('storage',event=>{if(event.key===KEY||event.key===null){render();notify('Tiến độ được cập nhật từ tab khác.');}});
    render();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})(typeof window==='undefined'?globalThis:window);
