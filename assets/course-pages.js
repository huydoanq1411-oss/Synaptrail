/* Existing exercise interactions, shared by migrated course lessons. */
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-course-print]').forEach(b=>b.addEventListener('click',()=>window.print()));
 document.querySelectorAll('[data-course-toggle]').forEach(button=>{
  const kind=button.dataset.courseToggle,target=kind==='answer'?button.nextElementSibling:button.parentElement;
  if(!target)return;
  const update=()=>{const open=kind==='answer'?target.classList.contains('show'):target.classList.contains('open');button.setAttribute('aria-expanded',String(open));if(kind==='answer'){target.hidden=!open;button.textContent=open?'Ẩn đáp án':'Xem đáp án';}};
  button.addEventListener('click',()=>{target.classList.toggle(kind==='answer'?'show':'open');update();});update();
 });
});
