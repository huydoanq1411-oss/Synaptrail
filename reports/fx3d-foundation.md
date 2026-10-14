# Nền tảng 3D và bản xem trước Skill-based

Ngày kiểm tra: 2026-10-14. Không thêm framework, build hoặc dependency npm.

## Phạm vi hiện tại

- Nghiêng CSS tối đa 3 độ, chỉ cho `#allCourses .resource-card` tại courses.html.
- Nút bật/tắt ở trang chủ, courses.html và 22 mục lục khóa học trong catalog.
- fullstack-js/index.html là trang chuyển hướng sang courses.html, không có topbar riêng.
- Trang chương không sửa và không nạp tài nguyên 3D.
- Hero mạng kiến thức chưa triển khai: chờ người dùng duyệt mẫu box theo thứ tự yêu cầu.

## Thư viện và chi phí

three.js 0.160.0 (r160), module min lưu offline; xem assets/vendor/three/README.md.
Kích thước KB dưới đây dùng 1 KB = 1.000 bytes, chưa nén và chưa cache.

| Loại trang | JS/CSS thêm | three.js tải thêm |
| --- | ---: | ---: |
| Trang chủ, catalog, mục lục | khoảng 10,0 KB | 0 KB khi chưa có phần tử WebGL |
| Trang chương | 0 KB | 0 KB |
| Trang có WebGL trong tương lai, bật hiệu ứng và chạy qua server | khoảng 10,0 KB | 670,681 KB lần đầu |
| file://, tắt hiệu ứng hoặc không có WebGL | khoảng 10,0 KB trên trang có nút | 0 KB |

HTML thêm khoảng 0,25–0,28 KB mỗi trang có nút. Giấy phép và README không tải trên trang.

## API dùng chung

Loader là script thường để chạy được trên file://. `window.SynaptrailFX3D` cung cấp
`webglAvailable()`, `mount(element, setup)` và `maxPixelRatio: 2`.
Phần tử mount bắt buộc có `data-fx3d`. Callback setup nhận `(THREE, renderer, {quality})`
và trả `{scene, camera, animate(deltaSeconds, elapsedSeconds)?, setQuality(level)?, dispose()?}`.
Mount trả Promise trạng thái `{status, reason, quality, dispose?}`; trạng thái dự phòng là `tĩnh`.
Caller gọi mount khi bật hiệu ứng; nếu bị từ chối vì disabled thì gọi lại sau khi bật.

Chọn mặc định tắt khi hardwareConcurrency <= 4, deviceMemory <= 4 hoặc reduced motion.
Người dùng có thể bật lại, nhưng reduced motion luôn chặn animation.
Máy yếu bật lại dùng DPR tối đa 1 và không antialias. Máy khác dùng DPR tối đa 2.
FPS đo trong các khoảng render liên tục 2 giây; dưới 40 FPS giảm quality xuống low,
và nếu khoảng tiếp theo vẫn dưới 40 thì giữ khung hình tĩnh.
Tab ẩn, phần tử ngoài màn hình và pagehide đều dừng vòng render. ResizeObserver cập nhật kích thước.
Rời trang dọn geometry/material/texture, observer, listener, renderer và context.
Callback dispose phải dọn tài nguyên riêng như render target, controls và listener do scene tạo.
Với bfcache, giữ scene nhưng dừng render và khôi phục qua pageshow.

## Kiểm thử

`node scripts/check-fx3d-preview.cjs` dùng Chrome/Edge headless với profile tạm, không dùng font mạng.
Đã xác nhận cả hai trình duyệt:
- Box CSS và nút trên file://; bật/tắt, localStorage qua reload và reduced motion.
- Catalog ở 375/768/1440 px không tràn ngang.
- Trang chủ có nút ở ba kích thước; ở viewport 375 px innerWidth là 385 px,
  cần xem lại khả năng tràn bố cục hero hiện hữu trước bước làm hero mới.
- Fixture WebGL thực tế qua server cục bộ nạp module, tạo scene và dispose canvas thành công.
- Giả lập getContext(WebGL) trả null: API trả `tĩnh`, reason `no-webgl`, không chạy setup.
- DPR fixture đo được 1 (không vượt giới hạn 2).

Ảnh xem trước: artifacts/fx3d-skill-chrome.png và artifacts/fx3d-skill-edge.png.
Firefox chưa cài nên chưa kiểm thử. Chưa kiểm thử định lượng FPS thấp, bfcache,
ẩn tab hoặc cuộn canvas bằng test tự động; cơ chế đã có trong API.
`node --check assets/fx3d.js` đạt. `node scripts/check-ui.cjs` báo nhiều lỗi có sẵn
về h1/meta description ở trang chương, không phải các file chương bị thay đổi.
