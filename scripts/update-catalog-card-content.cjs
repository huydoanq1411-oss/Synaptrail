/* UTF-8 catalogue copy; repeatable without changing links or course counts. */
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const descriptions = {
  'thuat-toan': 'Tư duy giải bài toán, tối ưu từng bước.',
  git: 'Quản lý phiên bản, cộng tác hiệu quả.',
  languages: 'Giao tiếp rõ ràng trong môi trường kỹ thuật.',
  cpp: 'Lập trình hiệu năng và quản lý bộ nhớ.',
  java: 'Thiết kế ứng dụng hướng đối tượng.',
  python: 'Từ cú pháp Python đến xử lý dữ liệu.',
  'javascript-nnlt': 'Làm chủ ngôn ngữ của web tương tác.',
  typescript: 'Xây dựng mã nguồn với kiểu dữ liệu rõ ràng.',
  'html-css-nnlt': 'Tạo cấu trúc và giao diện web responsive.',
  bootstrap: 'Dựng giao diện với lưới và component.',
  sass: 'Tổ chức stylesheet với biến và mixin.',
  react: 'Ghép component thành ứng dụng tương tác.',
  orm: 'Ánh xạ đối tượng với dữ liệu quan hệ.',
  graphql: 'Truy vấn đúng dữ liệu ứng dụng cần.',
  socketio: 'Trao đổi dữ liệu theo thời gian thực.',
  nestjs: 'Xây dựng API theo kiến trúc module.',
  docker: 'Đóng gói ứng dụng, triển khai nhất quán.',
  'system-design': 'Thiết kế hệ thống có thể mở rộng.',
  security: 'Nhận diện lỗ hổng, xây dựng phòng vệ.',
  mysql: 'Thiết kế và truy vấn dữ liệu quan hệ.',
  'machine-learning': 'Học từ dữ liệu, đánh giá mô hình.',
  'ai-engineer': 'Kết nối mô hình, công cụ và sản phẩm AI.'
};
const resources = {
  'practice-git': ['Git & GitHub', 'Quy trình commit, nhánh và cộng tác nhóm.', ['Hướng dẫn', 'Git']],
  'practice-security': ['Bảo mật ứng dụng', 'Hiểu rủi ro, bảo vệ ứng dụng từ gốc.', ['Hướng dẫn', 'Bảo mật']],
  'practice-system': ['Thiết kế hệ thống', 'Đặt nền móng cho hệ thống đáng tin cậy.', ['Hướng dẫn', 'Kiến trúc']],
  'practice-docker': ['Docker & triển khai', 'Đưa ứng dụng lên môi trường triển khai.', ['Hướng dẫn', 'Triển khai']],
  'practice-ai': ['AI trong sản phẩm', 'Thiết kế, đánh giá và vận hành hệ thống AI.', ['6 chủ đề', 'AI']],
  'review-cheatsheet': ['Bảng tra cứu nhanh', 'Tra cú pháp và khái niệm khi cần.', ['Tra cứu', 'Ôn tập']],
  'project-fullstack': ['Dự án Full Stack', 'Kết nối giao diện, API và cơ sở dữ liệu.', ['Dự án', 'Full Stack']],
  'review-quiz': ['Công cụ ôn tập', 'Kiểm tra kiến thức qua câu hỏi tổng hợp.', ['Trắc nghiệm', 'Ôn tập']],
  'project-exercises': ['Bài tập lập trình', 'Rèn tư duy qua bài tập thực tế.', ['Bài tập', 'Thực hành']],
  'project-api': ['Thực hành với API', 'Khám phá API và kết nối dữ liệu thật.', ['API', 'Thực hành']],
  'toolbox-agent': ['AI Agent Toolbox', 'Prompt, agent và công cụ AI trong một tài liệu.', ['Prompt', 'Agent', 'Công cụ AI']]
};
const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
const arrow = '<svg class="card-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
let html = fs.readFileSync(path.join(root, 'courses.html'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/card-art.json'), 'utf8'));
html = html.replace(/<article\b[^>]*class="[^"]*learning-card[^"]*"[^>]*>[\s\S]*?<\/article>/g, old => {
  const key = old.match(/data-card-key="([^"]+)"/)[1];
  const skill = old.match(/data-skill="([^"]+)"/)?.[1];
  const color = old.match(/data-color="([^"]+)"/)[1];
  const href = old.match(/class="btn-start" href="([^"]+)"/)[1];
  let title, desc, chips;
  let attrs = '';
  if (skill) {
    const count = Number(old.match(/data-chapters="(\d+)"/)[1]);
    title = old.match(/<a class="btn-start"[^>]*>([^<]+)/)[1].replaceAll('&amp;', '&').replaceAll('&quot;', '"');
    desc = descriptions[skill];
    chips = [count + ' chương', '~' + count * 2 + ' giờ*'];
    attrs = ` data-skill="${skill}" data-chapters="${count}"`;
  } else [title, desc, chips] = resources[key];
  const label = skill ? 'KỸ NĂNG' : key.startsWith('review-') ? 'ÔN TẬP' : key.startsWith('practice-') ? 'HƯỚNG DẪN' : 'THỰC HÀNH';
  manifest.find(card => card.key === key).label = title;
  return `<article class="card resource-card learning-card" data-card-key="${key}" data-name="${escape(title)} ${key}" data-color="${color}"${attrs}><a class="resource-image-link card-art" href="${href}" tabindex="-1" aria-hidden="true"><img src="assets/img/cards/${key}.svg" alt="" width="640" height="400" loading="lazy"><span class="art-label">${label} / ${escape(title.toUpperCase())}</span></a><div class="card-body"><h3><a class="btn-start" href="${href}">${escape(title)}${arrow}</a></h3><p class="card-desc">${desc}</p><div class="card-footer card-chips">${chips.map(c => `<span>${c}</span>`).join('')}</div></div></article>`;
});
html = html.replace(/<p class="estimate-note">[^<]*<\/p>/, '<p class="estimate-note">*Thời lượng học ước tính, tùy tốc độ và mức độ thực hành.</p>')
  .replace(/(<h2 id="best-practices-title"[^>]*>)[^<]*/, '$1Hướng dẫn thực hành tốt')
  .replace(/(<h2 id="project-ideas-title"[^>]*>)[^<]*/, '$1Dự án &amp; ôn tập');
fs.writeFileSync(path.join(root, 'courses.html'), html);
fs.writeFileSync(path.join(root, 'assets/card-art.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log('Updated UTF-8 copy for 33 resource cards.');
