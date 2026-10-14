const fs = require('node:fs');
for (const file of ['courses.html', 'assets/catalog.js', 'assets/role3d.js']) {
  let text = fs.readFileSync(file, 'utf8');
  if (file === 'courses.html') {
    text = text.replaceAll('Lộ Trình Học Toàn Diện', 'Học Toàn Diện')
      .replaceAll('LỘ TRÌNH / ', '')
      .replaceAll('Lộ trình theo vai trò', 'Chọn vai trò')
      .replaceAll('Chọn lộ trình phù hợp', 'Chọn vai trò phù hợp')
      .replaceAll('Lộ trình, kỹ năng', 'Khóa học, kỹ năng')
      .replaceAll('Lộ trình tự học', 'Tự học')
      .replaceAll('Lộ trình IT', 'Danh mục IT')
      .replaceAll('menu lộ trình', 'menu khóa học')
      .replaceAll('Đóng lộ trình', 'Đóng bảng kỹ năng')
      .replaceAll('lộ trình đầy đủ nhất trên site', 'chuỗi khóa học đầy đủ nhất trên site');
  } else if (file === 'assets/catalog.js') {
    text = text.replaceAll("'Lộ trình '+role.name", 'role.name');
  } else {
    text = text.replaceAll('Cách xem lộ trình', 'Cách xem kỹ năng')
      .replaceAll('Lộ trình tĩnh ', 'Sơ đồ kỹ năng ')
      .replaceAll('Xem toàn lộ trình', 'Xem toàn bộ kỹ năng');
  }
  fs.writeFileSync(file, text);
}
