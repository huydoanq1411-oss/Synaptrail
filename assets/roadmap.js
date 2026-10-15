(function(){
  'use strict';
  try{document.documentElement.dataset.theme=localStorage.getItem('synaptrail-theme')==='light'?'light':'dark';}catch{}
  document.addEventListener('DOMContentLoaded',()=>{
    const data=globalThis.SynaptrailRoadmapData;if(!data)return;document.body.classList.add('rm-ready');
    const $=id=>document.getElementById(id),map=$('rm-map'),buttons=new Map(),types={'bat-buoc':'Bắt buộc','chi-tiet':'Chi tiết','tuy-chon':'Tùy chọn'},states={learning:'◐ Đang học',done:'✓ Đã xong',skip:'↷ Bỏ qua'};
    const notify=text=>{$('rm-message').textContent=text;};let store,current={};
    const make=(tag,className,text)=>{const e=document.createElement(tag);if(className)e.className=className;if(text!==undefined)e.textContent=text;return e;};
    try{store=SynaptrailProgress.createStore(localStorage);current=store.read();}catch{notify('Không đọc được bộ nhớ tiến độ. Bạn vẫn có thể mở các bài học.');}
    data.continueWith.forEach(item=>{const a=make('a','',item.title);a.href='../'+item.chapter;$('rm-next').append(a);});
    const groups=data.nodes.filter(n=>n.side==='spine');
    groups.forEach(group=>{
      const stage=make('li','rm-stage');stage.dataset.stage=group.id;const children=data.nodes.filter(n=>n.parent===group.id);let left=0,right=0;
      [group,...children].forEach(node=>{
        const b=make('button','rm-node');b.type='button';b.id=node.id;b.dataset.node=node.id;b.dataset.type=node.type;b.dataset.soon=String(node.comingSoon);
        b.append(make('span','rm-node-type',types[node.type]),make('span','rm-node-title',node.title),make('span','rm-node-state'));
        if(node.side==='spine')b.style.gridRow='1 / span '+Math.max(1,children.filter(n=>n.side==='left').length,children.filter(n=>n.side==='right').length);
        else{b.style.gridColumn=node.side==='left'?'1':'3';b.style.gridRow=String(1+(node.side==='left'?left++:right++));}
        if(node.comingSoon)b.setAttribute('aria-disabled','true');
        b.addEventListener('click',()=>{if(node.comingSoon){notify(node.title+' · Sắp có bài học.');return;}if(node.chapter){location.assign('../'+node.chapter);return;}stage.classList.toggle('rm-stage-selected');notify('Chọn một chủ đề ở hai bên chặng “'+node.title+'” để mở bài học.');});
        buttons.set(node.id,b);stage.append(b);
      });$('rm-stages').append(stage);
    });
    function render(){
      for(const node of data.nodes){const record=current[data.course]?.[node.id],state=record?.status||(record?.done?'done':null),b=buttons.get(node.id);if(state)b.dataset.state=state;else delete b.dataset.state;const label=[state?states[state]:'',node.comingSoon?'◷ Sắp có':''].filter(Boolean).join(' · ');b.querySelector('.rm-node-state').textContent=label;b.setAttribute('aria-label',node.title+' — '+(label||types[node.type])+(node.chapter?' — Mở trang bài học':''));}
      const available=data.nodes.filter(n=>n.chapter&&!n.comingSoon),done=available.filter(n=>current[data.course]?.[n.id]?.done).length,percent=Math.round(done/available.length*100);$('rm-percent').textContent=percent+'%';$('rm-count').textContent=done+'/'+available.length+' mục hoàn thành';$('rm-progress').value=percent;
    }
    function read(){try{current=store.read();render();}catch(error){notify(error.message);}}
    function themeLabel(){$('rm-theme').textContent=document.documentElement.dataset.theme==='light'?'◐ Chế độ tối':'◐ Chế độ sáng';}
    $('rm-theme').addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=theme;try{localStorage.setItem('synaptrail-theme',theme);}catch{}themeLabel();});
    $('rm-export').addEventListener('click',()=>{try{const href=URL.createObjectURL(new Blob([JSON.stringify(store.read(),null,2)],{type:'application/json'})),a=make('a');a.href=href;a.download='synaptrail-progress.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(href),1000);notify('Đã xuất tiến độ.');}catch(error){notify(error.message);}});
    $('rm-import').addEventListener('click',()=>$('rm-file').click());$('rm-file').addEventListener('change',async event=>{const file=event.target.files[0];if(!file)return;try{if(file.size>5*1024*1024)throw Error('File vượt quá 5 MB.');current=store.importData(await file.text());render();notify('Đã nhập tiến độ.');}catch(error){notify(error.message);}finally{event.target.value='';}});
    $('rm-reset').addEventListener('click',()=>{if(!confirm('Xóa toàn bộ tiến độ Synaptrail? Hãy xuất file trước nếu cần.'))return;try{store.reset();current={};render();notify('Đã reset tiến độ.');}catch(error){notify(error.message);}});
    addEventListener('storage',event=>{if(event.key===SynaptrailProgress.KEY||event.key===null)read();});document.addEventListener('synaptrail:progress-change',read);
    const small=matchMedia('(max-width:767px)'),reduced=matchMedia('(prefers-reduced-motion:reduce)');let timer;
    function drawSoon(){clearTimeout(timer);timer=setTimeout(draw,80);}
    function draw(){
      const svg=$('rm-connections');svg.replaceChildren();const list=small.matches||reduced.matches;map.classList.toggle('rm-list-mode',list);if(list)return;
      const bounds=svg.getBoundingClientRect();svg.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);
      const box=id=>{const r=buttons.get(id).getBoundingClientRect();return{x:r.left-bounds.left,y:r.top-bounds.top,w:r.width,h:r.height};};
      const path=(d,cls)=>{const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',d);p.setAttribute('class',cls);svg.append(p);};
      groups.forEach((node,i)=>{const a=box(node.id);if(i<groups.length-1){const b=box(groups[i+1].id);path(`M ${a.x+a.w/2} ${a.y+a.h} L ${b.x+b.w/2} ${b.y}`,'rm-spine-line');}data.nodes.filter(n=>n.parent===node.id).forEach(child=>{const b=box(child.id),left=child.side==='left',sx=left?a.x:a.x+a.w,sy=a.y+a.h/2,ex=left?b.x+b.w:b.x,ey=b.y+b.h/2,mid=(sx+ex)/2;path(`M ${sx} ${sy} C ${mid} ${sy}, ${mid} ${ey}, ${ex} ${ey}`,'rm-branch-line');});});
    }
    if(globalThis.ResizeObserver)new ResizeObserver(drawSoon).observe(map);addEventListener('resize',drawSoon);small.addEventListener('change',drawSoon);reduced.addEventListener('change',drawSoon);
    function focusHash(){const b=buttons.get(location.hash.slice(1));if(b){b.focus({preventScroll:true});b.scrollIntoView({block:'center',behavior:'instant'});}}
    addEventListener('hashchange',focusHash);themeLabel();render();drawSoon();focusHash();
  },{once:true});
})();
