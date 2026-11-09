// Local static preview only: no build, dependency or application backend.
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const port = Number(process.env.PORT || 8000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('PORT phải là số nguyên từ 1 đến 65535.');
  process.exit(1);
}
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8', '.md': 'text/plain; charset=utf-8'
};
function inside(file) {
  const relative = path.relative(root, file);
  return relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative);
}
function blocked(file) {
  return path.relative(root, file).split(path.sep).some(part =>
    part.startsWith('.') || ['artifacts', 'node_modules'].includes(part));
}
const server = http.createServer(async (req, res) => {
  const reply = (status, message) => {
    res.writeHead(status, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(req.method === 'HEAD' ? undefined : message);
  };
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.setHeader('Allow', 'GET, HEAD');
    reply(405, 'Chỉ hỗ trợ đọc tệp.'); return;
  }
  try {
    let pathname;
    try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
    catch { reply(400, 'Đường dẫn không hợp lệ.'); return; }
    if (pathname.includes('\0')) { reply(400, 'Đường dẫn không hợp lệ.'); return; }
    let file = path.resolve(root, '.' + pathname);
    if (!inside(file) || blocked(file)) { reply(403, 'Không được phép truy cập.'); return; }
    file = await fs.realpath(file);
    if (!inside(file) || blocked(file)) { reply(403, 'Không được phép truy cập.'); return; }
    if ((await fs.stat(file)).isDirectory()) {
      if (!pathname.endsWith('/')) {
        const url = new URL(req.url, 'http://localhost');
        res.writeHead(308, {Location: url.pathname + '/' + url.search}); res.end(); return;
      }
      file = await fs.realpath(path.join(file, 'index.html'));
      if (!inside(file) || blocked(file)) { reply(403, 'Không được phép truy cập.'); return; }
    }
    const body = await fs.readFile(file);
    res.writeHead(200, {
      'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': body.length, 'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff'
    });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch (error) {
    if (['ENOENT', 'ENOTDIR', 'EISDIR'].includes(error.code)) reply(404, 'Không tìm thấy trang.');
    else if (['EACCES', 'EPERM'].includes(error.code)) reply(403, 'Không được phép truy cập.');
    else reply(500, 'Không thể đọc tệp.');
  }
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? `Cổng ${port} đang được sử dụng. Hãy dừng server cũ hoặc chọn PORT khác.`
    : 'Không thể khởi động server: ' + error.code);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
  console.log(`Synaptrail: http://localhost:${port}/`);
  console.log('Chỉ truy cập trên máy này. Sửa tệp rồi tải lại trang; Ctrl+C để dừng.');
});
