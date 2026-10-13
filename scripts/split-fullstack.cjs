/* Bootstrap pilot. Remaining courses will be enabled after review. */
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const dryRun = process.argv.includes('--dry-run');
const titles = ['Grid System', 'Components &amp; Utilities'];
const changes = [];
function stage(file, text) {
  const target = path.join(root, file);
  if (fs.existsSync(target) && fs.readFileSync(target, 'utf8') === text) return;
  changes.push({ file, action: fs.existsSync(target) ? 'modify' : 'create' });
  if (!dryRun) { fs.mkdirSync(path.dirname(target), { recursive: true }); fs.writeFileSync(target, text); }
}
function redirect(target) {
  return `<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="refresh" content="0;url=${target}">
<meta name="description" content="Bài học Bootstrap đã chuyển sang khóa riêng tại Synaptrail. Dùng liên kết bên dưới để mở bài học nếu trình duyệt không tự chuyển hướng.">
<title>Bài học đã chuyển — Bootstrap | Synaptrail</title>
<link rel="stylesheet" href="../assets/ui.css"></head>
<body><main><h1>Bài học Bootstrap đã chuyển</h1><p><a href="${target}">Mở bài học tại vị trí mới →</a></p></main>
<script>location.replace(${JSON.stringify(target)} + location.hash);</script>
</body></html>
`;
}
for (let i = 0; i < 2; i++) {
  const oldN = i + 5, newN = i + 1;
  const oldPath = `fullstack-js/chapter0${oldN}.html`, newPath = `bootstrap/chapter0${newN}.html`;
  let source = fs.readFileSync(path.join(root, oldPath), 'utf8');
  if (/http-equiv="refresh"/.test(source)) {
    if (!fs.existsSync(path.join(root, newPath))) throw Error('Redirect exists without destination: ' + newPath);
    continue;
  }
  const nav = titles.map((title, j) => `    <a class="nav-link${i === j ? ' active' : ''}" href="chapter0${j + 1}.html">Chương ${j + 1} — Bootstrap — ${title}</a>`).join('\n');
  source = source.replace(/    <a class="nav-link[\s\S]*?(?=    <button id="theme-toggle")/, nav + '\n');
  source = source.replace(/<div class="sub"[^>]*>[\s\S]*?<\/div>/, '<div class="sub" aria-live="polite">2 chương</div>');
  source = source.replace(/Giáo Trình Full-Stack JS Roadmap/g, 'Bootstrap').replace(/Full-Stack JS/g, 'Bootstrap');
  source = source.replace(new RegExp('Chương ' + oldN + ' —', 'g'), 'Chương ' + newN + ' —')
    .replace(`<span class="num">${oldN}</span>`, `<span class="num">${newN}</span>`)
    .replace(`Tổng kết chương ${oldN}`, `Tổng kết chương ${newN}`)
    .replace('Quiz nhanh — Chương 5-6', 'Quiz nhanh — Chương 1–2');
  const navigation = i === 0
    ? `<a class="nav-btn prev" href="index.html">← Mục lục Bootstrap</a>\n    <a class="nav-btn next" href="chapter02.html">Chương 2 — Bootstrap — ${titles[1]} →</a>`
    : `<a class="nav-btn prev" href="chapter01.html">← Chương 1 — Bootstrap — ${titles[0]}</a>\n    <a class="nav-btn next" href="index.html">Mục lục Bootstrap →</a>`;
  source = source.replace(/(<div class="chnav">)[\s\S]*?<\/div>/, '$1\n    ' + navigation + '\n  </div>');
  // Preserve all section/code/quiz IDs and the existing scoring runtime.
  stage(newPath, source);
  stage(oldPath, redirect(`../bootstrap/chapter0${newN}.html`));
}
let toc = fs.readFileSync(path.join(root, 'fullstack-js/index.html'), 'utf8');
toc = toc.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="../assets/lesson.css">');
toc = toc.slice(0, toc.indexOf('<body>')) + `<body>
<div id="topbar"><span class="brand">Bootstrap</span><div class="topbar-right"><a class="home-btn" href="../courses.html">Danh mục khóa học</a></div></div>
<main class="toc-wrap"><div class="crumb"><a href="../index.html">Trang chủ</a> · <a href="../courses.html">Khóa học</a> · Bootstrap</div>
<h1>Mục lục Bootstrap</h1><p>2 chương nhập môn: hệ lưới responsive, components và utilities.</p>
<a class="btn-start" href="chapter01.html">Bắt đầu học →</a>
<ol class="toc-list">${titles.map((title, i) => `<li><a href="chapter0${i + 1}.html"><span class="toc-num">0${i + 1}</span>Chương ${i + 1} — Bootstrap — ${title}</a></li>`).join('\n')}</ol>
</main></body></html>\n`;
toc = toc.replace(/<title>[\s\S]*?<\/title>/, '<title>Mục lục — Bootstrap | Synaptrail</title>');
toc = toc.replace('</head>', '<meta name="description" content="Khóa Bootstrap nhập môn tại Synaptrail gồm hai chương về hệ lưới responsive, components và utilities, với ví dụ HTML và quiz ôn tập.">\n</head>');
stage('bootstrap/index.html', toc);
let catalog = fs.readFileSync(path.join(root, 'courses.html'), 'utf8');
catalog = catalog.replace(/<article class="card resource-card" data-skill="sass"[\s\S]*?<\/article>\s*/, '');
catalog = catalog.replace(/<article class="card resource-card" data-skill="bootstrap"[\s\S]*?<\/article>/, `<article class="card resource-card" data-skill="bootstrap" data-name="bootstrap grid components utilities">
<div class="card-top"><div class="card-icon">🎨</div><span class="card-index mono">09</span></div>
<h3>Bootstrap</h3><p class="desc">2 chương nhập môn về Grid System, Components và Utilities.</p>
<div class="tags"><span class="tag">Bootstrap</span></div><div class="card-footer"><a href="bootstrap/index.html" class="btn btn-start">Bắt đầu học →</a></div>
</article>
<article class="card resource-card" data-skill="sass" data-name="sass scss variables nesting mixin">
<div class="card-top"><div class="card-icon">🎨</div></div><h3>SASS / SCSS</h3>
<p class="desc">Biến, nesting, mixin và tổ chức SCSS. Khóa riêng sẽ được tách sau khi duyệt bản thử.</p>
<div class="card-footer"><a href="fullstack-js/chapter07.html" class="btn btn-start">Bắt đầu học →</a></div></article>`);
stage('courses.html', catalog);
let oldToc = fs.readFileSync(path.join(root, 'fullstack-js/index.html'), 'utf8');
oldToc = oldToc.replace('href="chapter05.html"', 'href="../bootstrap/chapter01.html"').replace('href="chapter06.html"', 'href="../bootstrap/chapter02.html"');
stage('fullstack-js/index.html', oldToc);
let readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
if (!readme.includes('### Bản thử tách Bootstrap')) readme += `\n### Bản thử tách Bootstrap\n\n- Mục lục mới: [Bootstrap](bootstrap/index.html), hai chương đánh số 1–2.\n- URL cũ fullstack-js/chapter05.html và chapter06.html chuyển hướng, giữ fragment bookmark.\n- Sidebar và nút trước/sau chỉ điều hướng trong Bootstrap; ID nội dung và quiz được giữ nguyên.\n- Catalog tách Bootstrap khỏi SASS/SCSS; SASS tạm dùng bài cũ cho đến khi duyệt tách toàn bộ.\n- Xem kế hoạch: \`node scripts/split-fullstack.cjs --dry-run\`; áp dụng bản thử: \`node scripts/split-fullstack.cjs\`. Chạy lại không thay đổi file đã chuyển.\n- Các khóa còn lại và panel role chưa triển khai, chờ duyệt diff Bootstrap.\n`;
stage('README.md', readme);
console.log(JSON.stringify({ dryRun, scope: 'bootstrap pilot', changed: changes.length, files: changes }, null, 2));
