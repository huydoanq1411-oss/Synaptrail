(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded',()=>{
    const data=globalThis.SynaptrailRoadmapData,params=new URLSearchParams(location.search),id=params.get('node'),node=data?.nodes.find(n=>n.id===id),title=document.getElementById('ap-topic-title'),summary=document.getElementById('ap-topic-summary'),list=document.getElementById('ap-topic-links');
    if(!node){title.textContent='Không tìm thấy chủ đề';summary.textContent='Quay lại lộ trình để chọn một chủ đề hiện có.';return;}
    let heading=node.title,description=node.summary,children=data.nodes.filter(n=>n.parent===id);
    const branch=params.get('branch')?.match(/^(left|right)-(\d+)$/);
    if(branch){const plan=data.layout?.[id]?.[branch[1]]?.[Number(branch[2])];if(plan){heading=plan.title||node.title;description='Các bài học thuộc nhóm '+heading+' trong lộ trình Thuật toán.';children=plan.nodes.map(key=>data.nodes.find(n=>n.id===key)).filter(Boolean);}}
    title.textContent=heading;document.title=heading+' | Thuật toán — Synaptrail';summary.textContent=description;
    document.querySelectorAll('[data-topic-back]').forEach(a=>a.href='../roadmap/'+data.course+'.html#'+encodeURIComponent(id));
    if(node.comingSoon)document.getElementById('ap-message').textContent='Sắp có · Chủ đề này chưa có chương riêng.';
    if(!children.length)children=node.related.map(key=>data.nodes.find(n=>n.id===key)).filter(n=>n?.chapter);
    children.forEach(child=>{const a=document.createElement('a'),text=document.createElement('span'),svg=document.createElementNS('http://www.w3.org/2000/svg','svg'),path=document.createElementNS(svg.namespaceURI,'path');a.href=child.chapter?'../'+child.chapter:'chu-de.html?node='+encodeURIComponent(child.id);text.textContent=child.title+(child.comingSoon?' · Sắp có':'');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('width','20');svg.setAttribute('height','20');svg.setAttribute('aria-hidden','true');path.setAttribute('d','M5 12h14m-6-6 6 6-6 6');path.setAttribute('fill','none');path.setAttribute('stroke','currentColor');path.setAttribute('stroke-width','2');svg.append(path);a.append(text,svg);list.append(a);});
  },{once:true});
})();
