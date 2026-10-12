const fs=require('node:fs');
let h=fs.readFileSync('courses.html','utf8');
const start=h.indexOf('<nav class="category-nav"');
const end=h.indexOf('<section class="section" id="agent-toolbox">',start);
const articles=[...h.slice(start,end).matchAll(/<article class="card"[\s\S]*?<\/article>/g)].map(m=>m[0]);
if(articles.length!==22)throw Error('Expected 22 existing course cards');
const skills=articles.filter(a=>!a.includes('data-name="du an cuoi khoa')&&!a.includes('<h3>Công Cụ Ôn Tập'));
const projects=articles.filter(a=>!skills.includes(a));
const roleDefs=[
 ['frontend','Frontend Developer','Xây dựng giao diện web và ứng dụng React.',['html-css-nnlt','javascript-nnlt','react','bootstrap']],
 ['fullstack','Full Stack Developer','Từ giao diện đến API, dữ liệu và triển khai.',['html-css-nnlt','javascript-nnlt','react','git','typescript','mysql','graphql','socket','nestjs','docker','system-design','security']],
 ['ai','AI Engineer','Python, Machine Learning và hệ thống LLM/RAG.',['python','machine-learning','ai-engineer','system-design','security']],
 ['security','Security Engineer','Củng cố nền tảng lập trình, hệ thống và bảo mật.',['python','cpp','thuat-toan','system-design','security']],
 ['devops','System / DevOps','Quản lý mã nguồn, triển khai và thiết kế hệ thống.',['git','docker','system-design','security']]
];
function skillKey(a){const url=a.match(/class="card-footer">[\s\S]*?href="([^"]+)"/)[1];const chapter=url.match(/fullstack-js\/chapter(\d+)/);return chapter?({'01':'git','03':'typescript','04':'bootstrap','09':'mysql','12':'graphql','14':'socket','17':'nestjs','19':'docker'}[chapter[1]]||url):url.split('/')[0]}
const heading=(id,n,title,desc)=>`<section class="section resource-section" id="${id}" aria-labelledby="${id}-title"><div class="section-head"><div><span class="tag-line">${n}</span><h2 id="${id}-title" tabindex="-1">${title}</h2><p>${desc}</p></div></div>`;
const linkCard=(name,desc,url)=>`<article class="card resource-card" data-name="${name}"><h3>${name}</h3><p class="desc">${desc}</p><div class="card-footer"><a class="btn btn-start" href="${url}">Khám phá →</a></div></article>`;
let groups=heading('role-based','01 / ĐỊNH HƯỚNG','Role-based','Chọn vai trò để xem những kỹ năng liên quan ngay bên dưới.');
groups+='<div class="role-grid">'+roleDefs.map(([id,title,desc,keys])=>`<button type="button" class="role-box" data-role="${id}" data-skills="${keys.join(' ')}" aria-pressed="false" aria-controls="allCourses"><span class="role-box-title">${title}</span><span class="role-box-desc">${desc}</span><span class="role-box-action">Xem kỹ năng liên quan →</span></button>`).join('')+'</div></section>';
groups+='<div id="roadmap">'+heading('skill-based','02 / KỸ NĂNG','Skill-based','Chọn một kỹ năng để mở bài học. Bạn có thể học độc lập hoặc chọn theo role ở trên.')+'<div class="skill-toolbar"><p id="roleStatus" role="status" aria-live="polite">Đang xem tất cả kỹ năng</p><button type="button" id="showAllSkills" class="btn btn-ghost" hidden>Xem tất cả kỹ năng</button></div><p class="search-status" id="searchStatus" role="status" aria-live="polite"></p><div class="grid" id="allCourses">'+skills.map(a=>a.replace('class="card"',`class="card resource-card" data-skill="${skillKey(a)}"`)).join('\n')+'</div><div class="empty-state" id="emptyState" role="status">Không có kỹ năng phù hợp. Thử từ khóa khác hoặc chọn “Xem tất cả kỹ năng”.</div></section></div>';
groups+=heading('best-practices','03 / CHẤT LƯỢNG','Best Practices','Các hướng dẫn giúp bạn quản lý mã nguồn, bảo mật và xây dựng hệ thống đáng tin cậy.')+'<div class="grid">'+[
 ['Git & GitHub','Quản lý phiên bản và tổ chức quy trình làm việc với mã nguồn.','fullstack-js/chapter01.html'],
 ['Bảo mật ứng dụng','Nắm các nguyên tắc bảo mật trước khi phát triển ứng dụng.','security/chapter01.html'],
 ['Thiết kế hệ thống','Hiểu kiến trúc và các lựa chọn khi xây dựng hệ thống.','system-design/chapter01.html'],
 ['Docker & triển khai','Đóng gói và triển khai ứng dụng trong môi trường thực tế.','fullstack-js/chapter19.html'],
 ['AI production','RAG, quyền của agent, đánh giá và quan sát hệ thống AI.','#ai-engineering-knowledge'],
 ['Cheatsheet','Tra cứu nhanh kiến thức khi viết mã và ôn tập.','Quiz_and_other/cheatsheet.html']
].map(a=>linkCard(...a)).join('')+'</div></section>';
groups+=heading('project-ideas','04 / THỰC HÀNH','Project Ideas','Chọn dự án, bài tập hoặc tài nguyên thực hành từ tài liệu hiện có.')+'<div class="grid">'+projects.map(a=>a.replace('class="card"','class="card resource-card"')).join('\n')+linkCard('Bài tập lập trình','Rèn luyện kỹ năng qua các bài tập trong thư viện.','Quiz_and_other/exercises.html')+linkCard('Thực hành với API','Khám phá danh sách API và giáo trình để xây dựng ứng dụng.','Quiz_and_other/free-apis-giao-trinh.html')+'</div></section><p id="resourceEmpty" class="resource-empty" role="status" hidden>Không có tài liệu phù hợp ở các nhóm này. Hãy thử từ khóa khác.</p>\n';
h=h.slice(0,start)+groups+h.slice(end);
h=h.replace('Khám phá 22 chủ đề →','Chọn lộ trình phù hợp →').replace('class="btn btn-primary" href="#roadmap"','class="btn btn-primary" href="#role-based"');
h=h.replace(/searchInput.addEventListener\('input', function\(\)\{[\s\S]*?\n\}\);/,'/* Search and role selection are handled by assets/catalog.js. */');
h=h.replace('</body>','<script src="assets/catalog.js"></script>\n</body>');
fs.writeFileSync('courses.html',h);
console.log('Grouped catalogue:',skills.length,'skills,',roleDefs.length,'roles.');
