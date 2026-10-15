(function(){
  'use strict';
  try{document.documentElement.dataset.theme=localStorage.getItem('synaptrail-theme')==='light'?'light':'dark';}catch{}
  document.addEventListener('DOMContentLoaded',()=>{
    const data=globalThis.SynaptrailRoadmapData;if(!data)return;document.body.classList.add('rm-ready');
    const $=id=>document.getElementById(id),map=$('rm-map'),buttons=new Map(),types={'bat-buoc':'Bắt buộc','chi-tiet':'Chi tiết','tuy-chon':'Tùy chọn'},states={learning:'◐ Đang học',done:'✓ Đã xong',skip:'↷ Bỏ qua'};
    const notify=text=>{$('rm-message').textContent=text;};let store,current={};
    const make=(tag,className,text)=>{const e=document.createElement(tag);if(className)e.className=className;if(text!==undefined)e.textContent=text;return e;};
    document.querySelectorAll('.rm-home,.rm-footer a[href="../index.html"]').forEach(a=>{a.classList.add('rm-home');if(a.querySelector('svg'))return;const svg=document.createElementNS('http://www.w3.org/2000/svg','svg'),path=document.createElementNS(svg.namespaceURI,'path');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('width','20');svg.setAttribute('height','20');svg.setAttribute('aria-hidden','true');path.setAttribute('d','m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7');path.setAttribute('fill','none');path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','2');path.setAttribute('stroke-linecap','round');path.setAttribute('stroke-linejoin','round');svg.append(path);a.replaceChildren(svg,make('span','','Trang chủ'));});
    try{store=SynaptrailProgress.createStore(localStorage);current=store.read();}catch{notify('Không đọc được bộ nhớ tiến độ. Bạn vẫn có thể mở các bài học.');}
    data.continueWith.forEach(item=>{const a=make('a','',item.title);a.href='../'+item.chapter;$('rm-next').append(a);});
    const groups=data.nodes.filter(n=>n.side==='spine'),hubs=new Map();
    groups.forEach(group=>{
      const stage=make('li','rm-stage');stage.dataset.stage=group.id;const children=data.nodes.filter(n=>n.parent===group.id);
      const plan=data.layout?.[group.id]||{left:[{nodes:children.filter(n=>n.side==='left').map(n=>n.id)}],right:[{nodes:children.filter(n=>n.side==='right').map(n=>n.id)}]};
      [group,...children].forEach(node=>{
        const b=make('button','rm-node');b.type='button';b.id=node.id;b.dataset.node=node.id;b.dataset.type=node.type;b.dataset.soon=String(node.comingSoon);b.style.setProperty('--rm-learning-order',data.nodes.indexOf(node));
        b.append(make('span','rm-node-type',types[node.type]),make('span','rm-node-title',node.title),make('span','rm-node-state'));
        b.addEventListener('click',()=>location.assign(node.chapter?'../'+node.chapter:'../'+data.course+'/chu-de.html?node='+encodeURIComponent(node.id)));
        buttons.set(node.id,b);if(node.side==='spine')stage.append(b);
      });
      for(const side of ['left','right']){
        const column=make('div','rm-branch-column');column.dataset.side=side;
        for(const [index,cluster] of (plan[side]||[]).entries()){
          if(!cluster.nodes.length)continue;
          const box=make('div','rm-branch-group');box.classList.toggle('rm-branch-tiles',!!cluster.tiles);box.classList.toggle('rm-branch-framed',!!cluster.title&&!cluster.hub);
          let hub;
          if(cluster.title){const title=make(cluster.hub?'button':'h3','rm-branch-heading',cluster.title);box.append(title);if(cluster.hub){hub=title;hub.type='button';hub.classList.add('rm-branch-hub');hub.addEventListener('click',()=>location.assign('../'+data.course+'/chu-de.html?node='+encodeURIComponent(group.id)+'&branch='+side+'-'+index));stage.classList.add('rm-stage-has-hub');hubs.set(group.id+'-'+side+'-'+index,hub);}}
          cluster.nodes.forEach(id=>{const b=buttons.get(id);if(!b)return;b.dataset.branchSide=side;if(hub)b.dataset.hub=group.id+'-'+side+'-'+index;box.append(b);});column.append(box);
        }
        stage.append(column);
      }
      $('rm-stages').append(stage);
    });
    // Keep keyboard traversal in learning order even when visual clusters span both sides.
    const ordered=groups.flatMap(g=>[buttons.get(g.id),...[...hubs.entries()].filter(([id])=>id.startsWith(g.id+'-')).map(([,el])=>el),...data.nodes.filter(n=>n.parent===g.id).map(n=>buttons.get(n.id))]);
    map.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const index=ordered.indexOf(document.activeElement);if(index<0)return;const next=ordered[index+(event.shiftKey?-1:1)];if(next){event.preventDefault();next.focus();}});
    function render(){
      for(const node of data.nodes){const record=current[data.course]?.[node.id],state=record?.status||(record?.done?'done':null),b=buttons.get(node.id);if(state)b.dataset.state=state;else delete b.dataset.state;const label=[state?states[state]:'',node.comingSoon?'◷ Sắp có':''].filter(Boolean).join(' · ');b.querySelector('.rm-node-state').textContent=label;b.setAttribute('aria-label',node.title+' — '+(label||types[node.type])+(node.chapter?' — Mở trang bài học':' — Mở trang chủ đề'));}
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
      // Reduced motion disables animation, not the desktop diagram structure.
      const svg=$('rm-connections');svg.replaceChildren();const list=small.matches;map.classList.toggle('rm-list-mode',list);if(list)return;
      const bounds=svg.getBoundingClientRect();svg.setAttribute('preserveAspectRatio','none');svg.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);
      const rect=el=>{const r=el.getBoundingClientRect();return{x:r.left-bounds.left,y:r.top-bounds.top,w:r.width,h:r.height};};
      const box=id=>rect(buttons.get(id));
      const path=(d,cls)=>{const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',d);p.setAttribute('class',cls);svg.append(p);};
      groups.forEach((node,i)=>{
        const a=box(node.id);if(i<groups.length-1){const b=box(groups[i+1].id);path(`M ${a.x+a.w/2} ${a.y+a.h} L ${b.x+b.w/2} ${b.y}`,'rm-spine-line');}
        const connected=new Set();
        data.nodes.filter(n=>n.parent===node.id).forEach(child=>{
          const button=buttons.get(child.id),b=box(child.id),left=button.dataset.branchSide==='left',hub=hubs.get(button.dataset.hub);
          if(hub){const h=rect(hub);if(!connected.has(hub)){const sx=left?a.x:a.x+a.w,ex=left?h.x+h.w:h.x;path(`M ${sx} ${a.y+a.h/2} L ${ex} ${h.y+h.h/2}`,'rm-hub-line');connected.add(hub);}const sx=left?h.x:h.x+h.w,sy=h.y+h.h/2,ex=left?b.x:b.x+b.w,ey=b.y+b.h/2,gap=parseFloat(getComputedStyle(map).getPropertyValue('--rm-rail-gap')),rail=(left?Math.min(sx,ex):Math.max(sx,ex))+(left?-gap:gap);path(`M ${sx} ${sy} C ${rail} ${sy}, ${rail} ${ey}, ${ex} ${ey}`,'rm-branch-line');}
          else{const sx=left?a.x:a.x+a.w,sy=a.y+a.h/2,ex=left?b.x+b.w:b.x,ey=b.y+b.h/2,mid=(sx+ex)/2;path(`M ${sx} ${sy} C ${mid} ${sy}, ${mid} ${ey}, ${ex} ${ey}`,'rm-branch-line');}
        });
      });
    }
    if(globalThis.ResizeObserver)new ResizeObserver(drawSoon).observe(map);addEventListener('resize',drawSoon);globalThis.visualViewport?.addEventListener('resize',drawSoon);small.addEventListener('change',drawSoon);reduced.addEventListener('change',drawSoon);
    function focusHash(){const b=buttons.get(location.hash.slice(1));if(b){b.focus({preventScroll:true});b.scrollIntoView({block:'center',behavior:'instant'});}}
    addEventListener('hashchange',focusHash);themeLabel();render();drawSoon();focusHash();
  },{once:true});
})();
