/* Eight-course prototype. Course metadata belongs to catalog.js. */
(() => {
  'use strict';
  const surface = document.querySelector('[data-knowledge-map]');
  if (!surface) return;
  const ids = ['git', 'html-css-nnlt', 'javascript-nnlt', 'typescript', 'react', 'python', 'machine-learning', 'ai-engineer'];
  const courses = ids.map(id => window.SynaptrailCatalog.courses.find(course => course.id === id));
  const positions = [[-3,1.7,.2],[-1.1,2,-.5],[.4,.5,.6],[2.8,1.8,-.3],[3,-.9,.3],[.5,-2,-.4],[-1.4,-.7,.4],[-3,-1.8,-.2]];
  const edges = [[0,1],[0,6],[0,7],[1,2],[1,3],[2,3],[2,4],[2,5],[2,6],[3,4],[4,5],[5,6],[5,7],[6,7]];
  const namespace = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(namespace, 'svg');
  svg.setAttribute('viewBox','-480 -320 960 640');
  svg.setAttribute('role','img'); svg.setAttribute('aria-label','Bản đồ tĩnh tám khóa học kết nối với nhau');
  svg.classList.add('knowledge-fallback');
  for (const [a,b] of edges) {
    const line = document.createElementNS(namespace,'line');
    for (const [key,value] of Object.entries({x1:positions[a][0]*100,y1:-positions[a][1]*100,x2:positions[b][0]*100,y2:-positions[b][1]*100})) line.setAttribute(key,value);
    svg.append(line);
  }
  const links = surface.querySelector('.knowledge-links');
  courses.forEach((course,i) => {
    const link = document.createElement('a');link.href=course.href;link.textContent=course.name;links.append(link);
    const group = document.createElementNS(namespace,'g');
    group.setAttribute('transform',`translate(${positions[i][0]*100} ${-positions[i][1]*100})`);
    const halo=document.createElementNS(namespace,'circle');halo.setAttribute('r','30');halo.classList.add('node-halo');
    const dot=document.createElementNS(namespace,'circle');dot.setAttribute('r','12');
    const text=document.createElementNS(namespace,'text');text.setAttribute('y','46');text.setAttribute('text-anchor','middle');text.textContent=course.name;
    group.append(halo,dot,text);svg.append(group);
  });
  surface.prepend(svg);
  const label=surface.querySelector('.knowledge-label');
  let state, pending=false, ended=false;
  const abort=new AbortController();
  async function start() {
    if(ended||pending||state?.dispose||document.documentElement.dataset.fx3d!=='on')return;
    pending=true;
    state=await window.SynaptrailFX3D.mount(surface,setup);
    pending=false;
  }
  function setup(T,renderer,{quality}) {
    const scene=new T.Scene();
    const camera=new T.OrthographicCamera(-4.8,4.8,3.2,-3.2,.1,50);camera.position.z=8;
    const geometry=new T.SphereGeometry(.13,quality==='low'?8:16,8);
    const material=new T.MeshBasicMaterial();
    const nodes=new T.InstancedMesh(geometry,material,courses.length);
    const matrix=new T.Matrix4();positions.forEach((p,i)=>nodes.setMatrixAt(i,matrix.makeTranslation(...p)));scene.add(nodes);
    const linePositions=edges.flatMap(([a,b])=>[...positions[a],...positions[b]]);
    const lineMaterial=new T.LineBasicMaterial({transparent:true,opacity:.45});
    scene.add(new T.LineSegments(new T.BufferGeometry().setAttribute('position',new T.Float32BufferAttribute(linePositions,3)),lineMaterial));
    const bitmap=document.createElement('canvas');bitmap.width=bitmap.height=64;
    const ctx=bitmap.getContext('2d'),gradient=ctx.createRadialGradient(32,32,0,32,32,32);
    gradient.addColorStop(0,'#ffffff');gradient.addColorStop(.2,'#ffffff99');gradient.addColorStop(1,'#ffffff00');
    ctx.fillStyle=gradient;ctx.fillRect(0,0,64,64);
    const glowMaterial=new T.PointsMaterial({size:.8,map:new T.CanvasTexture(bitmap),transparent:true,opacity:.5,depthWrite:false});
    scene.add(new T.Points(new T.BufferGeometry().setAttribute('position',new T.Float32BufferAttribute(positions.flat(),3)),glowMaterial));
    const theme=()=>{const light=document.documentElement.dataset.theme==='light';material.color.set(light?'#08795e':'#9affd5');lineMaterial.color.set(light?'#2c7b70':'#77e0b5');glowMaterial.color.copy(material.color);};
    theme();const themeObserver=new MutationObserver(theme);themeObserver.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
    const listeners=new AbortController();const canvas=renderer.domElement;
    let pointer=null,down=null,dragged=false,tiltX=0,tiltY=0,hover=-1,phase=0;
    const raycaster=new T.Raycaster(),mouse=new T.Vector2(),vector=new T.Vector3();
    const hit=event=>{const r=canvas.getBoundingClientRect();mouse.set((event.clientX-r.left)/r.width*2-1,-(event.clientY-r.top)/r.height*2+1);scene.updateMatrixWorld();camera.updateMatrixWorld();raycaster.setFromCamera(mouse,camera);return raycaster.intersectObject(nodes)[0]?.instanceId??-1;};
    const hide=()=>{pointer=null;hover=-1;label.hidden=true;canvas.style.cursor='grab';};
    const move=event=>{pointer={clientX:event.clientX,clientY:event.clientY};if(down){const dx=event.clientX-down.x,dy=event.clientY-down.y;dragged ||= Math.hypot(dx,dy)>6;tiltX=Math.max(-.22,Math.min(.22,dx/600));tiltY=Math.max(-.16,Math.min(.16,dy/600));}hover=hit(event);canvas.style.cursor=down?'grabbing':hover>=0?'pointer':'grab';};
    canvas.addEventListener('pointermove',move,{signal:listeners.signal});
    canvas.addEventListener('pointerleave',()=>{if(!down)hide();},{signal:listeners.signal});
    canvas.addEventListener('pointerdown',event=>{if(event.button!==0)return;down={x:event.clientX,y:event.clientY};dragged=false;canvas.setPointerCapture(event.pointerId);},{signal:listeners.signal});
    canvas.addEventListener('pointerup',event=>{if(!down)return;const i=hit(event);down=null;if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);if(!dragged&&i>=0)location.assign(courses[i].href);},{signal:listeners.signal});
    canvas.addEventListener('pointercancel',()=>{down=null;hide();},{signal:listeners.signal});
    return {scene,camera,
      resize(width,height){const aspect=width/height;const halfY=Math.max(3.2,4.8/aspect);camera.top=halfY;camera.bottom=-halfY;camera.right=halfY*aspect;camera.left=-camera.right;camera.updateProjectionMatrix();},
      animate(delta){phase+=delta*.09;camera.position.set(Math.sin(phase)*.7+tiltX*8,tiltY*8,8);camera.lookAt(0,0,0);if(!down){tiltX*=.97;tiltY*=.97;}if(pointer)hover=hit(pointer);if(hover>=0){label.textContent=courses[hover].name;vector.set(...positions[hover]).project(camera);label.style.left=`${(vector.x+1)*50}%`;label.style.top=`${(1-vector.y)*50}%`;label.hidden=false;}else label.hidden=true;},
      setQuality(){glowMaterial.size=.6;},
      dispose(){listeners.abort();themeObserver.disconnect();label.hidden=true;nodes.dispose();}
    };
  }
  const rootObserver=new MutationObserver(()=>{start();if(surface.dataset.fx3dReady!=='true')label.hidden=true;});
  rootObserver.observe(document.documentElement,{attributes:true,attributeFilter:['data-fx3d','data-fx3d-motion']});
  rootObserver.observe(surface,{attributes:true,attributeFilter:['data-fx3d-ready']});
  window.addEventListener('pagehide',event=>{if(!event.persisted){ended=true;rootObserver.disconnect();abort.abort();}}, {signal:abort.signal});
  start();
})();
