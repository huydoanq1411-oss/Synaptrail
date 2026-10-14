/* Ordered role → skill mapping lives only here. */
(() => {
  const courses = Object.freeze([
  {
    "id": "thuat-toan",
    "href": "thuat-toan/index.html",
    "name": "Thuật toán"
  },
  {
    "id": "git",
    "href": "git/index.html",
    "name": "Git"
  },
  {
    "id": "languages",
    "href": "languages/index.html",
    "name": "Kỹ năng giao tiếp"
  },
  {
    "id": "cpp",
    "href": "cpp/index.html",
    "name": "C++"
  },
  {
    "id": "java",
    "href": "java/index.html",
    "name": "Java"
  },
  {
    "id": "python",
    "href": "python/index.html",
    "name": "Python"
  },
  {
    "id": "javascript-nnlt",
    "href": "javascript-nnlt/index.html",
    "name": "JavaScript"
  },
  {
    "id": "typescript",
    "href": "typescript/index.html",
    "name": "TypeScript"
  },
  {
    "id": "html-css-nnlt",
    "href": "html-css-nnlt/index.html",
    "name": "HTML & CSS"
  },
  {
    "id": "bootstrap",
    "href": "bootstrap/index.html",
    "name": "Bootstrap"
  },
  {
    "id": "sass",
    "href": "sass/index.html",
    "name": "SASS / SCSS"
  },
  {
    "id": "react",
    "href": "react/index.html",
    "name": "React"
  },
  {
    "id": "orm",
    "href": "orm/index.html",
    "name": "ORM"
  },
  {
    "id": "graphql",
    "href": "graphql/index.html",
    "name": "GraphQL"
  },
  {
    "id": "socketio",
    "href": "socketio/index.html",
    "name": "Socket.IO"
  },
  {
    "id": "nestjs",
    "href": "nestjs/index.html",
    "name": "NestJS"
  },
  {
    "id": "docker",
    "href": "docker/index.html",
    "name": "Docker"
  },
  {
    "id": "system-design",
    "href": "system-design/index.html",
    "name": "System Design"
  },
  {
    "id": "security",
    "href": "security/index.html",
    "name": "Security"
  },
  {
    "id": "mysql",
    "href": "mysql/index.html",
    "name": "MySQL"
  },
  {
    "id": "machine-learning",
    "href": "machine-learning/index.html",
    "name": "Machine Learning"
  },
  {
    "id": "ai-engineer",
    "href": "ai-engineer/index.html",
    "name": "AI Engineer"
  }
].map(course => Object.freeze(course)));
  const roles = {
    frontend: {name:'Frontend Developer', skills:['git','html-css-nnlt','javascript-nnlt','typescript','bootstrap','sass','react']},
    fullstack: {name:'Full Stack Developer', skills:['git','html-css-nnlt','javascript-nnlt','typescript','bootstrap','sass','react','mysql','orm','graphql','socketio','nestjs','docker','system-design','security']},
    'ai-engineer': {name:'AI Engineer', skills:['python','thuat-toan','machine-learning','ai-engineer','system-design','security']},
    security: {name:'Security Engineer', skills:['python','cpp','thuat-toan','system-design','security']},
    devops: {name:'System / DevOps', skills:['git','docker','system-design','security']}
  };
  window.SynaptrailCatalog = Object.freeze({courses, roles});
  if (!document.getElementById("searchInput")) return;
  const buttons=[...document.querySelectorAll('.role-box')];
  const cards=[...document.querySelectorAll('#allCourses .card')];
  const others=[...document.querySelectorAll('#best-practices .resource-card,#project-ideas .resource-card,#agent-toolbox .resource-card')];
  const panel=document.getElementById('rolePanel'),modal=document.getElementById('roleModal');
  const reset=document.getElementById('showAllSkills'),input=document.getElementById('searchInput');
  const media=matchMedia('(max-width:600px)');
  const normalize=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
  let active=null,opener=null;
  const data=new Map(cards.map(c=>[c.dataset.skill,c]));
  function fallback(img){img.addEventListener('error',()=>{if(!img.src.endsWith('/assets/img/default.svg'))img.src='assets/img/default.svg';});}
  document.querySelectorAll('.resource-card img,.role-box img').forEach(fallback);
  function search(){
    const query=normalize(input.value.trim());let count=0,extra=0;
    for(const card of cards){card.hidden=!normalize(card.dataset.name+' '+card.textContent).includes(query);if(!card.hidden)count++;}
    document.querySelectorAll('.skill-cluster').forEach(group=>group.hidden=![...group.querySelectorAll('.card')].some(c=>!c.hidden));
    for(const card of others){card.hidden=!normalize(card.textContent).includes(query);if(!card.hidden)extra++;}
    document.getElementById('searchStatus').textContent=count+' kỹ năng'+(query?' phù hợp với tìm kiếm':' có thể bắt đầu');
    document.getElementById('emptyState').style.display=count?'none':'block';
    document.getElementById('resourceEmpty').hidden=!query||extra>0;
  }
  function setHash(key){const url=new URL(location.href);url.hash=key?'role='+key:'';history.replaceState(null,'',url);}
  function close(updateURL=true,restore=true){document.dispatchEvent(new CustomEvent("synaptrail:role-close"));if(modal.open)modal.close();panel.hidden=true;active=null;buttons.forEach(b=>{b.setAttribute('aria-expanded','false');b.setAttribute('aria-pressed','false');});reset.hidden=true;document.getElementById('roleStatus').textContent='Đang xem tất cả kỹ năng';if(updateURL)setHash(null);if(restore){const button=opener;button?.focus({preventScroll:true});}}
  function open(key,focus=true){
    document.dispatchEvent(new CustomEvent('synaptrail:role-close'));
    const role=roles[key];if(!role){close(false,false);return;}
    if(modal.open)modal.close();panel.hidden=true;active=key;opener=buttons.find(b=>b.dataset.role===key);
    const target=media.matches?modal:panel;
    target.querySelector('[data-role-title]').textContent='Lộ trình '+role.name;
    const list=target.querySelector('.role-skills');list.replaceChildren();
    role.skills.forEach((skill,i)=>{const card=data.get(skill);if(!card)return;const link=document.createElement('a');link.className='role-skill';link.href=card.querySelector('.btn-start').getAttribute('href');const img=document.createElement('img');img.src=card.querySelector('img').getAttribute('src');img.alt='';img.width=320;img.height=180;img.loading='lazy';fallback(img);const title=document.createElement('span');title.className='role-skill-title';title.textContent=(i+1)+'. '+card.querySelector('h3').textContent;const count=document.createElement('span');count.className='role-skill-count';count.textContent=card.dataset.chapters+' chương';link.append(img,title,count);list.append(link);});
    buttons.forEach(b=>{b.setAttribute('aria-expanded',String(b===opener));b.setAttribute('aria-pressed',String(b===opener));b.setAttribute('aria-controls',target.id);});reset.hidden=false;document.getElementById('roleStatus').textContent='Lộ trình '+role.name+' đang mở';setHash(key);
    if(media.matches){opener?.focus({preventScroll:true});modal.showModal();}else panel.hidden=false;
    target.dataset.activeRole=key;
    document.dispatchEvent(new CustomEvent('synaptrail:role-open',{detail:{key,target}}));
    if(focus){target.querySelector('[data-close-role]').focus({preventScroll:true});if(!media.matches)panel.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});}
  }
  buttons.forEach(b=>b.addEventListener('click',()=>active===b.dataset.role?close():open(b.dataset.role)));
  document.querySelectorAll('[data-close-role]').forEach(b=>b.addEventListener('click',()=>close()));
  modal.addEventListener('cancel',e=>{e.preventDefault();close();});
  modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&active){e.preventDefault();close();}});
  reset.addEventListener('click',()=>{close();document.getElementById('skill-based-title').focus({preventScroll:true});document.getElementById('skill-based-title').scrollIntoView({block:'start'});});
  media.addEventListener('change',()=>{if(active)open(active);});
  function fromHash(){const match=location.hash.match(/^#role=([^&]+)/);if(match){let key;try{key=decodeURIComponent(match[1]);}catch{return;}open(key);}else close(false,false);}
  window.addEventListener('hashchange',fromHash);input.addEventListener('input',search);search();fromHash();
})();
