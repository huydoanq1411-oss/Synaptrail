(function(){
  'use strict';
  try{document.documentElement.dataset.theme=localStorage.getItem('synaptrail-theme')==='light'?'light':'dark';}catch{}
  document.addEventListener('DOMContentLoaded',init,{once:true});
  function init(){
    const data=globalThis.SynaptrailRoadmapData;if(!data)return;
    const $=id=>document.getElementById(id),panel=$('rm-panel'),map=$('rm-map'),stages=$('rm-stages');
    const types={'bat-buoc':'Bắt buộc','chi-tiet':'Chi tiết','tuy-chon':'Tùy chọn'};
    const states={learning:'◐ Đang học',done:'✓ Đã xong',skip:'↷ Bỏ qua'};
    const byId=new Map(data.nodes.map(n=>[n.id,n])),buttons=new Map();let selected=null,opener=null,current={},store;
    const notify=message=>{$('rm-message').textContent=message;};
    try{store=SynaptrailProgress.createStore(localStorage);current=store.read();}catch(error){notify('Không đọc được bộ nhớ. Bạn vẫn có thể xem lộ trình; thay đổi tiến độ chỉ lưu khi bộ nhớ khả dụng.');}
    const make=(tag,className,text)=>{const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined)el.textContent=text;return el;};
    const url=chapter=>'../'+chapter;
    data.continueWith.forEach(item=>{const a=make('a','',item.title);a.href=url(item.chapter);a.title=item.summary;$('rm-next').append(a);});
    data.nodes.filter(n=>n.side==='spine').forEach(group=>{
      const stage=make('li','rm-stage');stage.dataset.stage=group.id;
      const children=data.nodes.filter(n=>n.parent===group.id);let left=0,right=0;
      [group,...children].forEach(node=>{
        const b=make('button','rm-node');b.type='button';b.dataset.node=node.id;b.dataset.type=node.type;b.dataset.soon=String(node.comingSoon);b.setAttribute('aria-expanded','false');b.setAttribute('aria-controls','rm-panel');b.setAttribute('aria-haspopup','dialog');
        b.append(make('span','rm-node-type',types[node.type]),make('span','rm-node-title',node.title),make('span','rm-node-state'));
        if(node.side!=='spine'){b.style.gridColumn=node.side==='left'?'1':'3';b.style.gridRow=String(2+(node.side==='left'?left++:right++));}
        b.addEventListener('click',()=>open(node,b));buttons.set(node.id,b);stage.append(b);
      });stages.append(stage);
    });
    function getState(n){const r=current[data.course]?.[n.id];return r?.status||(r?.done?'done':null);}
    function render(){
      for(const node of data.nodes){const b=buttons.get(node.id),state=getState(node);if(state)b.dataset.state=state;else delete b.dataset.state;const label=[state?states[state]:'',node.comingSoon?'◷ Sắp có':'',!state&&!node.comingSoon?(node.side==='spine'?'Khám phá chặng học':`Chưa học · ~${node.time} phút`):''].filter(Boolean).join(' · ');b.querySelector('.rm-node-state').textContent=label;b.setAttribute('aria-label',node.title+' — '+label);}
      const available=data.nodes.filter(n=>n.chapter&&!n.comingSoon),done=available.filter(n=>getState(n)==='done').length,percent=Math.round(done/available.length*100);
      $('rm-percent').textContent=percent+'%';$('rm-count').textContent=`${done}/${available.length} mục hoàn thành`;$('rm-progress').value=percent;
      if(selected){panel.querySelectorAll('[data-status]').forEach(b=>{b.setAttribute('aria-pressed',String(getState(selected)===b.dataset.status));b.disabled=selected.comingSoon;});}
    }
    function read(){try{current=store.read();render();}catch(error){notify(error.message);}}
    function save(status){if(!store||!selected||selected.comingSoon)return;try{current=store.update(data.course,selected.id,{status});render();notify('Đã lưu: '+selected.title+' — '+states[status]);}catch(error){notify(error.message);}}
    panel.querySelectorAll('[data-status]').forEach(b=>b.addEventListener('click',()=>save(b.dataset.status)));
    function open(node,b){
      selected=node;opener=b;b.setAttribute('aria-expanded','true');$('rm-panel-kicker').textContent=types[node.type]+(node.comingSoon?' / SẮP CÓ':node.chapter?' / NỘI DUNG HIỆN CÓ':' / CHẶNG HỌC');
      $('rm-panel-title').textContent=node.title;$('rm-panel-summary').textContent=node.summary;
      $('rm-panel-meta').textContent=node.comingSoon?'◷ Sắp có · Chưa có thời lượng':`◷ Khoảng ${node.time||data.nodes.filter(n=>n.parent===node.id).reduce((sum,n)=>sum+n.time,0)} phút · Ước tính`;
      const link=$('rm-open-chapter');link.hidden=!node.chapter||node.comingSoon;if(!link.hidden)link.href=url(node.chapter);else link.removeAttribute('href');
      const goals=node.source?.goals||[];$('rm-goals').replaceChildren(...goals.map(t=>make('li','',t)));$('rm-goals-section').hidden=!goals.length;
      const related=[...new Set([...data.nodes.filter(n=>n.parent===node.id).map(n=>n.id),...node.related])].map(id=>byId.get(id)).filter(n=>n?.chapter&&!n.comingSoon);
      $('rm-related').replaceChildren(...related.map(n=>{const li=make('li'),a=make('a','',n.title+' ↗');a.href=url(n.chapter);li.append(a);return li;}));$('rm-related-section').hidden=!related.length;$('rm-related-title').textContent=node.side==='spine'?'Bài học trong chặng':'Chương liên quan';
      $('rm-panel-tabs').replaceChildren();$('rm-excerpt').hidden=true;$('rm-excerpt').replaceChildren();
      const source=node.source;
      const actions=source?[['summary','Tóm tắt',!!source.summary],['quiz','Làm quiz',source.quiz.length>0],['code','Xem ví dụ code',!!source.code]]:[];
      actions.filter(a=>a[2]).forEach(([kind,label])=>{const action=make('button','',label);action.type='button';action.dataset.excerpt=kind;action.setAttribute('aria-pressed','false');action.setAttribute('aria-controls','rm-excerpt');action.addEventListener('click',()=>showExcerpt(kind));$('rm-panel-tabs').append(action);});
      render();panel.showModal();document.body.style.overflow='hidden';$('rm-close').focus();drawSoon();
    }
    function showExcerpt(kind){
      const source=selected.source,area=$('rm-excerpt');area.hidden=false;area.replaceChildren();panel.querySelectorAll('[data-excerpt]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.excerpt===kind)));
      if(kind==='summary')area.append(make('p','',source.summary));
      if(kind==='code'){const pre=make('pre'),code=make('code','',source.code);pre.append(code);area.append(pre);}
      if(kind==='quiz'){
        const form=make('form');form.dataset.quiz='true';
        source.quiz.forEach((q,i)=>{const field=make('fieldset','rm-quiz');field.append(make('legend','',q.question));q.options.forEach((option,j)=>{const label=make('label'),radio=make('input');radio.type='radio';radio.name='question-'+i;radio.value=String(j);radio.required=true;label.append(radio,make('span','',option));field.append(label);});form.append(field);});
        const submit=make('button','','Chấm điểm');submit.type='submit';const result=make('p','rm-quiz-result');result.setAttribute('role','status');form.append(submit,result);
        form.addEventListener('submit',event=>{event.preventDefault();let correct=0;source.quiz.forEach((q,i)=>{const field=form.querySelectorAll('fieldset')[i],choice=field.querySelector('input:checked');const ok=Number(choice.value)===q.answer;if(ok)correct++;field.querySelectorAll('label').forEach((l,j)=>{delete l.dataset.result;if(j===q.answer)l.dataset.result='correct';else if(l.querySelector('input').checked)l.dataset.result='wrong';});});result.textContent=`Đúng ${correct}/${source.quiz.length} câu. `+source.quiz.map((q,i)=>`Câu ${i+1}: ${q.options[q.answer]}.`).join(' ');try{current=store.update(data.course,selected.id,{quizScore:Math.round(correct/source.quiz.length*100)});render();}catch{notify('Không thể lưu điểm quiz trên thiết bị này.');}});area.append(form);
      }
      area.focus();
    }
    function close(){if(panel.open)panel.close();}
    $('rm-close').addEventListener('click',close);
    panel.addEventListener('click',event=>{if(event.target===panel){const r=panel.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close();}});
    panel.addEventListener('close',()=>{document.body.style.overflow='';opener?.setAttribute('aria-expanded','false');opener?.focus({preventScroll:true});selected=null;drawSoon();});
    panel.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const focusable=[...panel.querySelectorAll('button:not([disabled]),a[href],input,[tabindex="0"]')].filter(el=>el.getClientRects().length);const first=focusable[0],last=focusable.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}});
    $('rm-theme').addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=theme;try{localStorage.setItem('synaptrail-theme',theme);}catch{}updateTheme();});
    function updateTheme(){$('rm-theme').textContent=document.documentElement.dataset.theme==='light'?'◐ Chế độ tối':'◐ Chế độ sáng';}
    $('rm-export').addEventListener('click',()=>{try{const blob=new Blob([JSON.stringify(store.read(),null,2)],{type:'application/json'}),href=URL.createObjectURL(blob),a=make('a');a.href=href;a.download='synaptrail-progress.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(href),1000);notify('Đã xuất tiến độ Synaptrail.');}catch(error){notify('Không thể xuất: '+error.message);}});
    $('rm-import').addEventListener('click',()=>$('rm-file').click());$('rm-file').addEventListener('change',async event=>{const file=event.target.files[0];if(!file)return;try{if(file.size>5*1024*1024)throw Error('File vượt quá 5 MB.');current=store.importData(await file.text());render();notify('Đã nhập và gộp tiến độ Synaptrail.');}catch(error){notify(error.message);}finally{event.target.value='';}});
    $('rm-reset').addEventListener('click',()=>{if(!confirm('Xóa toàn bộ tiến độ Synaptrail trên thiết bị? Hãy xuất file trước nếu muốn giữ bản sao.'))return;try{store.reset();current={};render();notify('Đã reset tiến độ Synaptrail.');}catch(error){notify(error.message);}});
    globalThis.addEventListener('storage',event=>{if(event.key===SynaptrailProgress.KEY||event.key===null)read();});document.addEventListener('synaptrail:progress-change',read);
    const small=matchMedia('(max-width: 767px)'),reduced=matchMedia('(prefers-reduced-motion: reduce)');let timer;
    function drawSoon(){clearTimeout(timer);timer=setTimeout(draw,80);}
    function draw(){
      const svg=$('rm-connections');svg.replaceChildren();const list=small.matches||reduced.matches;map.classList.toggle('rm-list-mode',list);if(list)return;
      const bounds=map.getBoundingClientRect();svg.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);
      const box=id=>{const r=buttons.get(id).getBoundingClientRect();return {x:r.left-bounds.left,y:r.top-bounds.top,w:r.width,h:r.height};};
      const path=(d,c)=>{const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',d);p.setAttribute('class',c);svg.append(p);};
      const spine=data.nodes.filter(n=>n.side==='spine');
      spine.forEach((node,i)=>{const a=box(node.id);if(i<spine.length-1){const b=box(spine[i+1].id);path(`M ${a.x+a.w/2} ${a.y+a.h} L ${b.x+b.w/2} ${b.y}`,'rm-spine-line');}
        data.nodes.filter(n=>n.parent===node.id).forEach(child=>{const b=box(child.id),left=child.side==='left',sx=left?a.x:a.x+a.w,sy=a.y+a.h/2,ex=left?b.x+b.w:b.x,ey=b.y+b.h/2,mid=(sx+ex)/2;path(`M ${sx} ${sy} C ${mid} ${sy}, ${mid} ${ey}, ${ex} ${ey}`,'rm-branch-line');});
      });
    }
    if(globalThis.ResizeObserver)new ResizeObserver(drawSoon).observe(map);globalThis.addEventListener('resize',drawSoon);small.addEventListener('change',drawSoon);reduced.addEventListener('change',drawSoon);
    updateTheme();render();drawSoon();
  }
})();
