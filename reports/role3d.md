# Bản đồ 3D theo role

courses.html: mở role, chọn Danh sách hoặc Bản đồ 3D. Danh sách luôn mặc định,
bao gồm điện thoại và máy yếu. Không lưu chế độ map qua lần mở role kế tiếp.

Nguồn thứ tự duy nhất là SynaptrailCatalog.roles trong assets/catalog.js.
Tên/URL lấy từ courses trong cùng API; ảnh SVG và số chương đọc từ card catalog.
Không thêm framework, build hoặc CDN. three.js chỉ dynamic import khi bật map,
có WebGL và mở qua server; file:// dùng SVG tĩnh như hero trang chủ.

Đường cong theo thứ tự, ba đảo mỗi hàng, độ sâu thay đổi nhẹ; khoảng cách cố định
và tiêu đề có giới hạn chiều rộng. Một InstancedMesh cho các đảo, một đường cong,
mỗi SVG là một sprite. Full Stack có 15 skill: tổng 17 đối tượng render.
Không dùng bóng hoặc hậu kỳ. DPR/30 FPS/fallback dùng assets/fx3d.js.

Bấm lần đầu chọn skill và bay camera/zoom; sau khi camera dừng, bấm lại mở khóa.
Nút Xem toàn lộ trình đưa camera về tổng quan. Tiêu đề trạng thái thông báo qua role=status.
Danh sách liên kết bàn phím hiện ra khi focus. SVG fallback có ảnh, tiêu đề và liên kết;
reduced motion, tắt hiệu ứng, không WebGL hoặc file:// luôn có cách mở khóa trực tiếp.

Tiến độ đọc qua SynaptrailProgress.createStore(localStorage).read(), schema
synaptrail-progress hiện hữu. Hoàn thành khi số bản ghi done=true đạt tổng chương
trong catalog; đang học khi ít nhất một chương done; chưa học khi chưa có chương done.
Chưa học có sprite mờ, đang học tăng độ sáng, hoàn thành đảo xanh sáng.
Dữ liệu không hợp lệ/bị chặn giữ trạng thái chưa học. Import/update/reset trong tab
phát synaptrail:progress-change; thay đổi tab khác dùng storage, quay lại tab dùng focus.
UI ghi tiến độ hiện có chủ yếu cho Java; bản đồ đọc được dữ liệu các khóa khác khi có.

Đổi role, đóng panel, chuyển về danh sách và rời trang dọn scene, texture,
observer/listener. Async mount cũ bị hủy kết quả khi người dùng chuyển mode nhanh.

Kiểm thử Chrome/Edge bằng scripts/check-fx3d-preview.cjs:
- Frontend: 7 skill, tiến độ Git hoàn thành, texture tải, camera bay, lần hai mở Git.
- Tất cả 5 role giữ đúng số skill và mở mặc định bằng danh sách.
- Full Stack: 15 skill, không chồng nhãn, không tràn ngang; đóng panel bỏ canvas.
- Reduced motion dùng fallback; file:// dùng map SVG ở 375/768/1440px.
- Hero và CSS tilt trước đó vẫn đạt kiểm thử.
- scripts/check-progress.cjs đạt kiểm tra persistence, import, reset, dữ liệu hỏng,
  prototype protection và storage bị chặn. Kiểm tra cú pháp JS và diff whitespace đạt.

Firefox chưa cài nên chưa kiểm thử. Chưa đo FPS thực tế trên laptop phổ thông.
Tài nguyên mới: role3d.js khoảng 11,8 KB + role3d.css 2,3 KB chưa nén;
SVG chỉ dùng ảnh có sẵn. Không thêm tài nguyên 3D vào trang chương.

Ảnh xem trước: artifacts/role3d-chrome.png và artifacts/role3d-fullstack-chrome.png.
