/* Generated from verified chapter scripts. Do not defer these script tags. */
(function(){
if(!window.SynaptrailLesson){
window.SynaptrailLesson=(function(){
const themes=[
function(){

function toggleTheme(){
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  try{ localStorage.setItem('synaptrail-theme', newTheme); }catch(e){}
  const label = document.getElementById('theme-label');
  const icon = document.getElementById('theme-icon');
  if(label) label.textContent = newTheme === 'dark' ? 'Chế độ tối' : 'Chế độ sáng';
  if(icon) icon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
}
(function(){
  const label = document.getElementById('theme-label');
  const icon = document.getElementById('theme-icon');
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  if(label) label.textContent = current === 'dark' ? 'Chế độ tối' : 'Chế độ sáng';
  if(icon) icon.textContent = current === 'dark' ? '🌙' : '☀️';
})();

window.toggleTheme=toggleTheme;
},
function(){


function toggleTheme(){
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  try{ localStorage.setItem('synaptrail-theme', newTheme); }catch(e){}
  const label = document.getElementById('theme-label');
  const icon = document.getElementById('theme-icon');
  if(label) label.textContent = newTheme === 'dark' ? 'Chế độ tối' : 'Chế độ sáng';
  if(icon) icon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
}
(function(){
  const label = document.getElementById('theme-label');
  const icon = document.getElementById('theme-icon');
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  if(label) label.textContent = current === 'dark' ? 'Chế độ tối' : 'Chế độ sáng';
  if(icon) icon.textContent = current === 'dark' ? '🌙' : '☀️';
})();

window.toggleTheme=toggleTheme;
},
function(){

// ---------- Theme toggle ----------
function toggleTheme(){
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  try{ localStorage.setItem('synaptrail-theme', newTheme); }catch(e){}
  const label = document.getElementById('theme-label');
  const icon = document.getElementById('theme-icon');
  if(label) label.textContent = newTheme === 'dark' ? 'Chế độ tối' : 'Chế độ sáng';
  if(icon) icon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
}
(function(){
  const label = document.getElementById('theme-label');
  const icon = document.getElementById('theme-icon');
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  if(label) label.textContent = current === 'dark' ? 'Chế độ tối' : 'Chế độ sáng';
  if(icon) icon.textContent = current === 'dark' ? '🌙' : '☀️';
})();

// ---------- Sidebar nav ----------

window.toggleTheme=toggleTheme;
},
function(){

function toggleTheme(){
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  try{ localStorage.setItem('synaptrail-theme', newTheme); }catch(e){}
  const label = document.getElementById('theme-label');
  const icon = document.getElementById('theme-icon');
  if(label) label.textContent = newTheme === 'dark' ? 'Chế độ tối' : 'Chế độ sáng';
  if(icon) icon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
}
(function(){
  const label = document.getElementById('theme-label');
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  if(label) label.textContent = current === 'dark' ? 'Chế độ tối' : 'Chế độ sáng';
})();

function toggleTheme(){
  const body = document.body;
  const isDark = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('theme-label').textContent = isDark ? 'Chế độ tối' : 'Chế độ sáng';
}

window.toggleTheme=toggleTheme;
}
];
let finish;
function setup(mode){
themes[mode]();
const links = document.querySelectorAll('.nav-link[data-target]');
links.forEach(link=>{
  link.addEventListener('click', ()=>{
    const target = document.getElementById(link.dataset.target);
    if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
    document.getElementById('sidebar').classList.remove('open');
  });
});
const sections = document.querySelectorAll('.chapter');
function updateActiveNav(){
  let current = sections[0]?.id;
  sections.forEach(sec=>{
    const rect = sec.getBoundingClientRect();
    if(rect.top <= 140) current = sec.id;
  });
  links.forEach(l=>l.classList.toggle('active', l.dataset.target===current));
}
window.addEventListener('scroll', ()=>{
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight>0 ? (scrollTop/docHeight)*100 : 0;
  document.getElementById('progress-bar').style.width = pct+'%';
  document.getElementById('back-to-top').classList.toggle('show', scrollTop>500);
  updateActiveNav();
});
function filterNav(query){
  const q = query.trim().toLowerCase();
  links.forEach(link=>{
    const text = link.textContent.toLowerCase();
    link.style.display = (q==='' || text.includes(q)) ? 'block' : 'none';
  });
}
function copyCode(btn){
  const pre = btn.parentElement.querySelector('pre code') || btn.parentElement.querySelector('pre');
  const text = pre.textContent;
  navigator.clipboard.writeText(text).then(()=>{
    const old = btn.textContent;
    btn.textContent = '✓ Đã copy';
    setTimeout(()=>{ btn.textContent = old; }, 1500);
  });
}


// Count distinct chapter links in the actual sidebar, rather than legacy labels.
const sidebar = document.getElementById('sidebar');
if (sidebar && location.pathname.includes('/fullstack-js/')) {
  const chapterLinks = new Set(Array.from(sidebar.querySelectorAll('a[href]')).map(link => new URL(link.getAttribute('href'), location.href)).filter(url => url.origin === location.origin && /\/fullstack-js\/chapter\d+\.html$/.test(url.pathname)).map(url => url.pathname));
  const subtitle = sidebar.querySelector('.sub');
  if (subtitle) subtitle.textContent = chapterLinks.size + ' chương';
}

Object.assign(window,{updateActiveNav,filterNav,copyCode});
finish=function(){
function gradeQuiz(quizId){
  const quiz = document.querySelector(`[data-quiz="${quizId}"]`);
  const questions = quiz.querySelectorAll('.quiz-q');
  let correct = 0;
  questions.forEach(q=>{
    const answer = q.dataset.answer;
    const opts = q.querySelectorAll('.quiz-opt');
    opts.forEach(opt=>{
      opt.classList.remove('correct','wrong');
      opt.style.pointerEvents = 'none';
      if(opt.dataset.idx === answer){ opt.classList.add('correct'); }
    });
    const selected = q.dataset.selected;
    if(selected === answer){ correct++; }
    else if(selected !== undefined){
      const wrongOpt = q.querySelector(`.quiz-opt[data-idx="${selected}"]`);
      if(wrongOpt) wrongOpt.classList.add('wrong');
    }
  });
  const resultEl = document.getElementById('result-'+quizId);
  resultEl.textContent = `Kết quả: ${correct}/${questions.length} câu đúng`;
  resultEl.style.color = correct===questions.length ? 'var(--ok)' : 'var(--warn)';
}
document.querySelectorAll('.quiz-q').forEach(q=>{
  q.querySelectorAll('.quiz-opt').forEach(opt=>{
    opt.addEventListener('click', ()=>{
      q.dataset.selected = opt.dataset.idx;
      q.querySelectorAll('.quiz-opt').forEach(o=>o.style.borderColor='var(--border)');
      opt.style.borderColor = 'var(--accent)';
    });
  });
});
updateActiveNav();
const chapterObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      const link = document.querySelector(`.nav-link[data-target="${entry.target.id}"]`);
      if(link) link.classList.add('visited');
    }
  });
}, {threshold:0.08, rootMargin:'0px 0px -10% 0px'});
document.querySelectorAll('.chapter').forEach(sec=>chapterObserver.observe(sec));

window.gradeQuiz=gradeQuiz;
};
}
return {setup,finish:function(){finish();}};
})();
}
const script=document.currentScript;
if(script.dataset.lessonPhase==='setup') window.SynaptrailLesson.setup(Number(script.dataset.lessonTheme));
else if(script.dataset.lessonPhase==='finish') window.SynaptrailLesson.finish();
})();
