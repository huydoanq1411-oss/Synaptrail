const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
function walk(dir) { return fs.readdirSync(dir, {withFileTypes:true}).flatMap(e => e.name.startsWith('.') ? [] : e.isDirectory() ? walk(path.join(dir,e.name)) : e.name.endsWith('.html') ? [path.join(dir,e.name)] : []); }
for (const file of walk(root)) {
  let html = fs.readFileSync(file,'utf8');
  const href = path.relative(path.dirname(file),path.join(root,'assets/ui.css')).split(path.sep).join('/');
  if (!html.includes('assets/ui.css')) html = html.replace('</head>', `<link rel="stylesheet" href="${href}">\n</head>`);
  fs.writeFileSync(file,html);
}
let html = fs.readFileSync(path.join(root,'index.html'),'utf8');
if (html.includes('class="purpose-grid"')) {
  console.log('Shared styles verified; homepage already upgraded.');
  process.exit(0);
}
const groups = [
 ['role-based','01 / ĐỊNH HƯỚNG','Role-based','Chọn nghề nghiệp và học theo lộ trình có thứ tự.',[['fullstack-js/index.html','Full Stack Developer'],['ai-engineer/index.html','AI Engineer'],['security/index.html','Security Engineer'],['system-design/index.html','System / DevOps']],'#roadmap','Khám phá lộ trình'],
 ['skill-based','02 / NỀN TẢNG','Skill-based','Bổ sung đúng kỹ năng bạn cần, theo tốc độ của bạn.',[['python/index.html','Python'],['javascript-nnlt/index.html','JavaScript'],['react/index.html','React'],['thuat-toan/index.html','Thuật toán & cấu trúc dữ liệu']],'#roadmap','Xem tất cả kỹ năng'],
 ['best-practices','03 / CHẤT LƯỢNG','Best Practices','Viết mã rõ ràng, thiết kế an toàn và triển khai đáng tin cậy.',[['security/chapter01.html','Bảo mật ứng dụng'],['system-design/chapter01.html','Thiết kế hệ thống'],['fullstack-js/chapter01.html','Git & GitHub'],['Quiz_and_other/cheatsheet.html','Cheatsheet thực hành']],'#ai-engineering-knowledge','Đọc hướng dẫn AI production'],
 ['project-ideas','04 / THỰC HÀNH','Project Ideas','Biến kiến thức thành sản phẩm và xây dựng portfolio.',[['fullstack-js/chapter22.html','Dự án Full Stack cuối khóa'],['Quiz_and_other/exercises.html','Bài tập lập trình'],['Quiz_and_other/free-apis-giao-trinh.html','Thực hành với API'],['Quiz_and_other/quiz-tong-hop.html','Kiểm tra kiến thức']],'fullstack-js/chapter22.html','Bắt đầu dự án']
];
const boxes = `<nav class="category-nav" aria-label="Nhóm tài liệu">${groups.map(g=>`<a href="#${g[0]}">${g[2]}</a>`).join('')}</nav><section class="purpose-grid" aria-label="Khám phá theo mục tiêu">${groups.map(g=>`<article class="purpose-box" id="${g[0]}"><span class="overline">${g[1]}</span><h2>${g[2]}</h2><p>${g[3]}</p><ul>${g[4].map(([url,label])=>`<li><a href="${url}">${label} →</a></li>`).join('')}</ul><a class="purpose-action" href="${g[5]}">${g[6]} →</a></article>`).join('')}</section>`;
html = html.replace('<body>','<body>\n<a class="skip-link" href="#main-content">Chuyển đến nội dung</a>').replace('<main>','<main id="main-content">');
html = html.replace('  <section class="section" id="agent-toolbox">',boxes+'\n  <section class="section" id="agent-toolbox">');
html = html.replace('id="searchInput"','aria-label="Tìm chủ đề học" type-placeholder="search" id="searchInput"').replace(' type-placeholder="search"','');
html = html.replace('<div class="grid" id="allCourses">','<p class="search-status" id="searchStatus" role="status" aria-live="polite">22 chủ đề học · Chọn một kỹ năng để bắt đầu</p>\n    <div class="grid" id="allCourses">');
html = html.replace('const saved = localStorage.getItem(\'algo-mastery-theme\');',"let saved; try { saved = localStorage.getItem('algo-mastery-theme'); } catch {}")
 .replace("localStorage.setItem('algo-mastery-theme', next);","try { localStorage.setItem('algo-mastery-theme', next); } catch {}")
 .replace("const query = this.value.trim().toLowerCase();","const normalize = value => value.normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').replace(/đ/g, 'd').toLowerCase();\n  const query = normalize(this.value.trim());")
 .replace("(card.dataset.name + ' ' + card.querySelector('h3').textContent).toLowerCase()","normalize(card.dataset.name + ' ' + card.querySelector('h3').textContent)")
 .replace("emptyState.style.display = visibleCount === 0 ? 'block' : 'none';","emptyState.style.display = visibleCount === 0 ? 'block' : 'none';\n  document.getElementById('searchStatus').textContent = visibleCount + ' chủ đề phù hợp';")
 .replace('id="emptyState"','id="emptyState" role="status"')
 .replace("document.body.style.overflow = 'hidden';","document.body.style.overflow = 'hidden';\n  roadmapDrawer.inert = false; closeDrawerBtn.focus();")
 .replace("document.body.style.overflow = '';","document.body.style.overflow = '';\n  roadmapDrawer.inert = true; menuBtn.focus();")
 .replace("menuBtn.addEventListener('click', function(){","roadmapDrawer.inert = true;\nroadmapDrawer.addEventListener('keydown', function(e){\n  if(e.key !== 'Tab') return;\n  const items = Array.from(roadmapDrawer.querySelectorAll('button,a[href]')).filter(el => el.getClientRects().length);\n  const first = items[0], last = items[items.length - 1];\n  if(e.shiftKey && document.activeElement === first){e.preventDefault();last.focus();}\n  else if(!e.shiftKey && document.activeElement === last){e.preventDefault();first.focus();}\n});\nmenuBtn.addEventListener('click', function(){")
 .replace("try{ document.execCommand('copy'); }catch(e){}","let copied = false; try{ copied = document.execCommand('copy'); }catch(e){}")
 .replace('if(cb) cb();',"if(copied && cb) cb(); else alert('Không thể sao chép. Hãy chọn nội dung và sao chép thủ công.');");
fs.writeFileSync(path.join(root,'index.html'),html);
console.log('Updated',walk(root).length,'HTML pages.');
