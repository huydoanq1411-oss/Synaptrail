/* Role learning routes use the same ordered mapping as the catalog panel. */
(() => {
  'use strict';
  const catalog=window.SynaptrailCatalog;
  if(!catalog?.roles)return;
  const lifetime=new AbortController();let current;
  const ns='http://www.w3.org/2000/svg';
  const svgElement=(name,attrs={})=>{const e=document.createElementNS(ns,name);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,v);return e;};
  function build({key,target}) {
    current?.dispose();
    const role=catalog.roles[key];if(!role)return;
    const list=target.querySelector('.role-skills');list.hidden=false;
    const data=role.skills.map(id=>{
      const card=document.querySelector(`#allCourses [data-skill="${CSS.escape(id)}"]`);
      return {...catalog.courses.find(c=>c.id===id),image:card.querySelector('img').getAttribute('src'),chapters:Number(card.dataset.chapters)};
    });
    const bar=document.createElement('div');bar.className='role-view-switch';bar.setAttribute('role','group');bar.setAttribute('aria-label','Cách xem lộ trình');
    const listButton=document.createElement('button'),mapButton=document.createElement('button');
    for(const b of [listButton,mapButton])b.type='button';listButton.textContent='Danh sách';mapButton.textContent='Bản đồ 3D';
    listButton.setAttribute('aria-pressed','true');mapButton.setAttribute('aria-pressed','false');bar.append(listButton,mapButton);
    const map=document.createElement('div');map.className='role-map fx3d-surface';map.hidden=true;map.dataset.fx3d='';map.dataset.fx3dStaticReduced='';map.dataset.canvasLabel=`Bản đồ kỹ năng ${role.name}. Bấm một lần để bay tới kỹ năng, bấm lần nữa để mở khóa.`;
    map.id=target.id+'-map';mapButton.setAttribute('aria-controls',map.id);
    const status=document.createElement('p');status.className='role-map-message';status.setAttribute('role','status');status.hidden=true;
    const svg=svgElement('svg',{viewBox:`-450 -130 900 ${Math.ceil(data.length/3)*280}`,role:'img','aria-label':`Lộ trình tĩnh ${role.name}`});svg.classList.add('role-map-fallback');
    // Serpentine curve: wide spacing, shallow depth; deterministic study order.
    const positions=data.map((_,i)=>{const row=Math.floor(i/3),col=row%2?2-i%3:i%3;return [(col-1)*3,-row*2.8,Math.sin(i*.8)*.35];});
    const path=svgElement('path');let route='';positions.forEach((p,i)=>{route+=`${i?' L':'M'} ${p[0]*100} ${-p[1]*100}`;});path.setAttribute('d',route);svg.append(path);
    const fallbackGroups=[],labels=document.createElement('div');labels.className='role-map-labels';
    const links=document.createElement('nav');links.className='role-map-links';links.setAttribute('aria-label','Khóa học theo thứ tự khuyến nghị');
    const labelElements=[];
    data.forEach((course,i)=>{
      const group=svgElement('g',{transform:`translate(${positions[i][0]*100} ${-positions[i][1]*100})`});
      const anchor=svgElement('a',{href:course.href,'aria-label':`${i+1}. ${course.name}`});
      anchor.append(svgElement('rect',{x:-95,y:-75,width:190,height:135,rx:15}),svgElement('image',{href:course.image,x:-85,y:-65,width:170,height:95}));
      const title=svgElement('text',{y:50,'text-anchor':'middle'});title.textContent=`${i+1}. ${course.name}`;anchor.append(title);group.append(anchor);svg.append(group);fallbackGroups.push(group);
      const text=document.createElement('span');text.className='role-map-label';labels.append(text);labelElements.push(text);
      const link=document.createElement('a');link.href=course.href;links.append(link);
    });
    const home=document.createElement('button');home.type='button';home.className='role-map-home';home.textContent='Xem toàn lộ trình';
    map.append(svg,labels,links,home);list.before(bar);list.after(map,status);
    const listeners=new AbortController();let state,pending=false,disposed=false,version=0,selected=-1,settled=false;
    let sceneUpdate=()=>{},resetView=()=>{};
    function progress() {
      let stored={};try{stored=window.SynaptrailProgress.createStore(localStorage).read();}catch{/* Unreadable progress keeps every skill unstarted. */}
      return data.map(c=>{const done=Object.values(stored[c.id]||{}).filter(r=>r.done===true).length;return done>=c.chapters?'complete':done?'started':'new';});
    }
    function updateProgress(){const states=progress();states.forEach((s,i)=>{fallbackGroups[i].dataset.progress=s;const suffix=s==='complete'?'Đã hoàn thành':s==='started'?'Đang học':'Chưa học';labelElements[i].textContent=`${i+1}. ${data[i].name}`;links.children[i].textContent=`${i+1}. ${data[i].name} — ${suffix}`;});sceneUpdate(states);}
    function message(){status.textContent=map.dataset.fx3dReady==='true'?'Bấm kỹ năng để bay tới; bấm lại khi camera dừng để mở khóa.': 'Đang hiển thị bản đồ tĩnh. Chọn kỹ năng hoặc dùng Danh sách để mở khóa.';}
    async function mount() {
      if(disposed||map.hidden||pending||state?.dispose)return;
      pending=true;const ticket=++version;
      const result=await window.SynaptrailFX3D.mount(map,setup);
      pending=false;
      if(disposed||ticket!==version||map.hidden){result.dispose?.();return;}
      state=result;message();
    }
    function view(useMap){
      if(disposed)return;
      map.hidden=!useMap;status.hidden=!useMap;list.hidden=useMap;
      listButton.setAttribute('aria-pressed',String(!useMap));mapButton.setAttribute('aria-pressed',String(useMap));
      if(useMap){updateProgress();mount();message();}else{version++;state?.dispose?.();state=null;sceneUpdate=()=>{};selected=-1;}
    }
    listButton.addEventListener('click',()=>view(false),{signal:listeners.signal});mapButton.addEventListener('click',()=>view(true),{signal:listeners.signal});
    home.addEventListener('click',()=>resetView(),{signal:listeners.signal});
    const observer=new MutationObserver(records=>{message();if(records.some(record=>record.target===document.documentElement))mount();});observer.observe(map,{attributes:true,attributeFilter:['data-fx3d-ready']});
    observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-fx3d','data-fx3d-motion','data-theme']});
    window.addEventListener('storage',e=>{if(e.key==='synaptrail-progress'||e.key===null)updateProgress();},{signal:listeners.signal});
    window.addEventListener('focus',updateProgress,{signal:listeners.signal});
    document.addEventListener('synaptrail:progress-change',updateProgress,{signal:listeners.signal});
    function setup(T,renderer) {
      const scene=new T.Scene(),camera=new T.OrthographicCamera(-5,5,3,-3,.1,100);camera.position.z=12;
      const center=new T.Vector3(0,-(Math.ceil(data.length/3)-1)*1.4,0),destination=center.clone();
      let zoomTarget=1,fullHeight=5;
      const islandMaterial=new T.MeshBasicMaterial({transparent:true});
      const islands=new T.InstancedMesh(new T.BoxGeometry(2.1,1.4,.22),islandMaterial,data.length);
      const matrix=new T.Matrix4();positions.forEach((p,i)=>islands.setMatrixAt(i,matrix.makeTranslation(...p)));scene.add(islands);
      const lineMaterial=new T.LineBasicMaterial({transparent:true,opacity:.8});
      const curve=new T.CatmullRomCurve3(positions.map(p=>new T.Vector3(...p)));scene.add(new T.Line(new T.BufferGeometry().setFromPoints(curve.getPoints(data.length*16)),lineMaterial));
      const sprites=[],textures=[],loader=new T.TextureLoader();
      data.forEach((c,i)=>{const texture=loader.load(c.image);texture.colorSpace=T.SRGBColorSpace;textures.push(texture);const sprite=new T.Sprite(new T.SpriteMaterial({map:texture,transparent:true,depthTest:false}));sprite.position.set(positions[i][0],positions[i][1]+.12,positions[i][2]+.2);sprite.scale.set(1.8,1,1);scene.add(sprite);sprites.push(sprite);});
      const colors=()=>{const light=document.documentElement.dataset.theme==='light';lineMaterial.color.set(light?'#147b5b':'#77e0b5');sceneUpdate(progress());};
      sceneUpdate=states=>{states.forEach((s,i)=>{const light=document.documentElement.dataset.theme==='light';islands.setColorAt(i,new T.Color(s==='complete'?(light?'#16b77b':'#77ffb7'):s==='started'?(light?'#a1cfb9':'#345c49'):(light?'#d5e0da':'#243029')));sprites[i].material.opacity=s==='new'?.5:1;});islands.instanceColor.needsUpdate=true;};colors();
      const themeObserver=new MutationObserver(colors);themeObserver.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
      const canvas=renderer.domElement,ray=new T.Raycaster(),mouse=new T.Vector2(),vector=new T.Vector3();
      const events=new AbortController();let down=null;
      function choose(i){if(i===selected&&settled){location.assign(data[i].href);return;}selected=i;settled=false;destination.set(...positions[i]);zoomTarget=1.6;status.textContent=`Đang bay tới ${data[i].name}.`;}
      const hit=e=>{const r=canvas.getBoundingClientRect();mouse.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);camera.updateMatrixWorld();scene.updateMatrixWorld();ray.setFromCamera(mouse,camera);return ray.intersectObject(islands)[0]?.instanceId??-1;};
      canvas.addEventListener('pointermove',e=>{canvas.style.cursor=hit(e)>=0?'pointer':'default';},{signal:events.signal});
      canvas.addEventListener('pointerdown',e=>{if(e.button===0)down={x:e.clientX,y:e.clientY};},{signal:events.signal});
      canvas.addEventListener('pointerup',e=>{if(!down)return;const moved=Math.hypot(e.clientX-down.x,e.clientY-down.y)>6;down=null;if(!moved){const i=hit(e);if(i>=0)choose(i);}},{signal:events.signal});
      canvas.addEventListener('pointercancel',()=>{down=null;},{signal:events.signal});
      resetView=()=>{selected=-1;settled=false;destination.set(0,-(Math.ceil(data.length/3)-1)*1.4,0);zoomTarget=1;message();};
      return {scene,camera,
        resize(w,h){fullHeight=Math.max(Math.ceil(data.length/3)*1.4+.4,4.7/(w/h));camera.top=fullHeight;camera.bottom=-fullHeight;camera.left=-fullHeight*w/h;camera.right=-camera.left;camera.updateProjectionMatrix();},
        animate(delta){const factor=1-Math.exp(-delta*5);center.lerp(destination,factor);camera.position.set(center.x,center.y+.5,center.z+12);camera.lookAt(center);camera.zoom+=(zoomTarget-camera.zoom)*factor;camera.updateProjectionMatrix();if(selected>=0&&!settled&&center.distanceTo(destination)<.015&&Math.abs(camera.zoom-zoomTarget)<.01){settled=true;status.textContent=`${data[selected].name}: bấm lần nữa để mở khóa.`;}positions.forEach((p,i)=>{vector.set(p[0],p[1]-.78,p[2]).project(camera);labelElements[i].style.left=`${(vector.x+1)*50}%`;labelElements[i].style.top=`${(1-vector.y)*50}%`;labelElements[i].hidden=Math.abs(vector.x)>.9||Math.abs(vector.y)>.95||(selected>=0&&!settled&&i!==selected);});},
        dispose(){events.abort();themeObserver.disconnect();textures.forEach(t=>t.dispose());islands.dispose();sceneUpdate=()=>{};resetView=()=>{};}
      };
    }
    updateProgress();
    current={dispose(){if(disposed)return;disposed=true;version++;state?.dispose?.();observer.disconnect();listeners.abort();bar.remove();map.remove();status.remove();list.hidden=false;}};
  }
  document.addEventListener('synaptrail:role-open',event=>build(event.detail),{signal:lifetime.signal});
  document.addEventListener('synaptrail:role-close',()=>{current?.dispose();current=null;},{signal:lifetime.signal});
  for(const target of document.querySelectorAll('#rolePanel,#roleModal'))if((target.open||!target.hidden)&&target.dataset.activeRole)build({key:target.dataset.activeRole,target});
  window.addEventListener('pagehide',event=>{if(!event.persisted){current?.dispose();lifetime.abort();}},{signal:lifetime.signal});
})();
