const fs = require('node:fs');
const path = require('node:path');
const out = path.resolve(__dirname, '../artifacts/catalog-cards');
const checks = JSON.parse(fs.readFileSync(path.join(out, 'checks.json'), 'utf8'));
const min = key => Math.min(...checks.results.map(r => r[key])).toFixed(2);
let html = `<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Synaptrail — Toàn bộ thẻ</title><style>body{font:15px/1.6 system-ui;background:#edf2f8;color:#17243a;margin:32px auto;padding:0 20px;max-width:1200px}img{display:block;width:100%;border-radius:12px;border:1px solid #cbd5e1}section{margin:32px 0}summary{cursor:pointer;font-weight:600;padding:12px}a{color:#075985}.pair{display:grid;grid-template-columns:1fr 1fr;gap:20px}@media(max-width:700px){.pair{grid-template-columns:1fr}}</style><h1>Toàn bộ thẻ Synaptrail</h1><p>5 vai trò, 22 kỹ năng, 6 hướng dẫn, 4 tài nguyên dự án/ôn tập và AI Agent Toolbox. Mỗi thẻ có SVG riêng; 6 thẻ kiến thức AI đồng bộ màu, chữ, viền và khoảng cách.</p><p>Thẻ nhỏ hơn: tiêu đề 16px, padding 10px, thẻ desktop tối đa 210px và mobile tối đa 280px. Đã bỏ chữ “Lộ trình” khỏi giao diện. Ảnh giữ tỷ lệ 16:10. Thời lượng có dấu * là ước tính.</p><p>Kiểm tra ${checks.results.length} tổ hợp kích thước/theme: ${checks.failures.length ? 'còn lỗi, xem kết quả bên dưới' : 'đạt'}. Tương phản chữ mô tả tối thiểu ${min('descriptionContrast')}:1, chip tối thiểu ${min('chipContrast')}:1.</p><p>Kiểm tra không tràn ngang, ảnh phủ đủ khung, tìm kiếm, thứ tự kỹ năng, nút Đóng, tiến độ Java, focus bàn phím và chế độ giảm chuyển động.</p>`;
for (const width of [1440,768,375]) {
  html += `<section><h2>${width}px</h2><div class="pair">`;
  for (const theme of ['dark','light']) {
    html += `<div><h3>Theme ${theme==='dark'?'tối':'sáng'}</h3><a href="${theme}-${width}-full.png">Ảnh toàn trang</a>`;
    for (const [key,label] of [['role-based','Vai trò'],['skill-based','Kỹ năng nền tảng'],['systems','Hệ thống & dữ liệu'],['best-practices','Hướng dẫn thực hành tốt'],['project-ideas','Dự án & ôn tập'],['agent-toolbox','AI Agent Toolbox'],['ai-engineering-knowledge','Kiến thức AI'],['panel','Panel lộ trình'],['top','Header & Tiến độ']]) {
      html += `<details ${key==='skill-based'?'open':''}><summary>${label}</summary><a href="${theme}-${width}-${key}.png"><img loading="lazy" src="${theme}-${width}-${key}.png" alt="${label} — ${theme}, ${width}px"></a></details>`;
    }
    html += '</div>';
  }
  html += '</div></section>';
}
html += '<p><a href="checks.json">Kết quả kiểm tra trình duyệt</a></p></html>';
fs.writeFileSync(path.join(out, 'index.html'), html);
console.log('Wrote artifacts/catalog-cards/index.html');
