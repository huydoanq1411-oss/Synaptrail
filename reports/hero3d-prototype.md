# Hero chòm sao kiến thức — bản thử nghiệm 8 nút

Khung mới thay khối minh họa cũ trong index.html, tối đa 60vh.
8 khóa: Git, HTML/CSS, JavaScript, TypeScript, React, Python, Machine Learning, AI Engineer.
Tên và URL lấy từ `window.SynaptrailCatalog.courses` trong assets/catalog.js.
hero3d.js chỉ chọn ID; không chép lại tên hay URL khóa học.

Một InstancedMesh cho 8 nút, một Points dùng texture radial 64×64 tạo ánh sáng,
một LineSegments cho 14 kết nối. Tổng 3 đối tượng render, không shadow hoặc hậu kỳ.
Các nút có độ sâu khác nhau; camera chuyển động chậm và nghiêng nhẹ khi kéo.
Raycaster trên InstancedMesh xử lý hover và điều hướng; kéo hơn 6px không mở liên kết.

SVG tĩnh tạo từ cùng tọa độ và dữ liệu, có nhãn khóa học và màu theo theme.
Hiển thị SVG khi file://, không WebGL, reduced motion, tắt hiệu ứng hoặc quá chậm.
Canvas có role img và aria-label. 8 liên kết văn bản đọc được và tab được;
khi focus, danh sách hiện ra trong khung với focus ring rõ ràng.

Nền tảng dùng DPR tối đa 2 (quality low: 1), render quality low tối đa 30 FPS,
đo FPS trong khoảng 2 giây để giảm chất lượng hoặc dùng dự phòng.
Máy yếu mặc định tắt; bật thủ công sẽ dùng low. Tab ẩn/ngoài màn hình dừng render.
Mục tiêu 60 FPS là mục tiêu thiết kế, chưa xác nhận trên laptop phổ thông.

Chi phí bổ sung riêng cho prototype: hero3d.js 7,15 KB + hero3d.css 2,01 KB;
homepage cũng tải catalog.js khoảng 8,02 KB. three.js 670,68 KB chỉ nạp khi cần WebGL.
Đơn vị KB = 1.000 bytes, chưa nén/cache; không đổi tài nguyên trang chương.

Kiểm thử Chrome và Edge headless qua scripts/check-fx3d-preview.cjs:
- 8 nút SVG/8 liên kết, canvas có aria-label, chiều cao trong giới hạn.
- Hover Git hiện đúng nhãn; click nút Git điều hướng git/index.html.
- Đổi theme light, reduced motion và bật/tắt 3D hoạt động.
- Trang chủ và catalog không tràn ngang ở 375/768/1440px.
- Kiểm thử nền tảng không WebGL và dispose vẫn đạt.

Firefox chưa cài nên chưa kiểm thử; chưa đo tốc độ render thực tế trên laptop.
Ảnh xem trước: artifacts/hero3d-chrome.png, artifacts/hero3d-edge.png.
