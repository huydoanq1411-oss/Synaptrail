# Thuật toán: sơ đồ → trang bài học → trang quiz riêng

Mở [lộ trình](../../roadmap/thuat-toan.html). Trục chính ở giữa; các chặng dùng bố cục khác nhau theo ảnh: nhập môn có bốn nhánh bên phải, sắp xếp có cụm ô nhỏ bên trái và nhánh “Sắp xếp nâng cao” tách tiếp bên phải, cấu trúc tuyến tính có các nhóm ô riêng. Đường trục và nhánh lớn dùng nét liền, đường tới từng bài dùng Bezier chấm. Không còn chia mọi chặng thành hai cột đối xứng giống nhau. Bố cục lấy từ `layout` trong dữ liệu; không dùng tọa độ viết tay.

Ảnh tập trung vào cấu trúc mới:

| Chiều rộng | Tối | Sáng |
| --- | --- | --- |
| 375px | [Sơ đồ](dark-375-diagram.png) | [Sơ đồ](light-375-diagram.png) |
| 768px | [Sơ đồ](dark-768-diagram.png) | [Sơ đồ](light-768-diagram.png) |
| 1440px | [Sơ đồ](dark-1440-diagram.png) | [Sơ đồ](light-1440-diagram.png) |

Lần chỉnh cấu trúc thay đổi bốn file nguồn: `assets/roadmaps/thuat-toan.js`, `assets/roadmap.js`, `assets/roadmap.css`, `scripts/check-algorithm-roadmap.cjs`; cùng báo cáo này, `checks.json`, `check-ui.json` và ảnh kiểm tra trong thư mục. Không sửa trang bài học hoặc quiz. Đã xem sáu ảnh cấu trúc ở cả hai theme; sửa màu chữ ô nhóm để tăng tương phản và căn lại đường trục sau thay kích thước. Kiểm tra tự động đo sai lệch điểm nối dưới 2px và xác nhận Tab vẫn theo thứ tự học dù các nút nằm trong cụm khác nhau. Chưa kiểm tra trên điện thoại vật lý; bước tiếp theo là xem bố cục này trước khi nhân rộng sang khóa khác.

Bấm “Thuật toán là gì?” hoặc “Big O Notation” sẽ chuyển tài liệu sang [chapter01.html](../../thuat-toan/chapter01.html) hoặc [chapter02.html](../../thuat-toan/chapter02.html). Đây là các trang HTML riêng, không phải mở panel, đọc nội tuyến hoặc chuyển hướng về sơ đồ. Bài đọc giữ đủ nội dung, bảng, code và tổng kết; không có sidebar chương hay câu hỏi quiz.

Quiz có [file HTML riêng](../../thuat-toan/quiz.html) và file dữ liệu `assets/roadmaps/thuat-toan-quiz.js`, chỉ được tải trên trang quiz. 12 chương có câu hỏi gốc. Bài có quiz chỉ cung cấp một liên kết tới trang luyện tập riêng. Nút quay lại từ quiz trở về bài đang luyện; từ bài trở về đúng nút trên lộ trình; từ lộ trình trở về danh mục. Mọi nút quay lại có icon SVG mũi tên, nằm trong header sticky để luôn thấy khi cuộn. Có thêm Trang chủ trên cả ba loại trang.

## Dữ liệu và tiến độ

- `assets/roadmaps/thuat-toan.js`: 38 nút (9 chặng, 23 bài, 3 nhánh đồ thị sắp có, 3 tài nguyên), nội dung bài và liên kết quiz; không chứa câu hỏi/đáp án quiz.
- `assets/roadmaps/thuat-toan-quiz.js`: dữ liệu câu hỏi, lựa chọn, đáp án và giải thích đã tách khỏi bài đọc.
- `node scripts/sync-algorithm-roadmap.cjs` sinh 23 trang bài học từ dữ liệu chuẩn và danh sách fallback. Không chạy script để mở trang; tất cả dùng được qua `file://`, không API/CDN.
- `synaptrail-progress` giữ bản ghi trạng thái học, điểm quiz cao nhất và thời gian cập nhật. Xuất/Nhập/Reset và bản ghi Java cũ vẫn tương thích. Tiến độ tính 26 mục có tài liệu; không tính “Sắp có”.
- Dưới 768px hoặc giảm chuyển động: danh sách có thứ tự. Tắt JS: lộ trình có đủ 26 liên kết và từng bài vẫn đọc được bằng HTML tĩnh.

## 18 ảnh sau thay đổi

Đã xem ảnh ở 375, 768 và 1440px với cả hai theme. Không có nút chồng nhau, đường nối qua chữ, tràn ngang hoặc nút quay lại bị che. Trên điện thoại, code xuống dòng và vùng trên khối code dành chỗ cho nút Copy.

| Kích thước | Tối: sơ đồ | Tối: bài đọc | Tối: quiz riêng | Sáng: sơ đồ | Sáng: bài đọc | Sáng: quiz riêng |
| --- | --- | --- | --- | --- | --- | --- |
| 375px | [Ảnh](dark-375-roadmap.png) | [Ảnh](dark-375-lesson.png) | [Ảnh](dark-375-quiz.png) | [Ảnh](light-375-roadmap.png) | [Ảnh](light-375-lesson.png) | [Ảnh](light-375-quiz.png) |
| 768px | [Ảnh](dark-768-roadmap.png) | [Ảnh](dark-768-lesson.png) | [Ảnh](dark-768-quiz.png) | [Ảnh](light-768-roadmap.png) | [Ảnh](light-768-lesson.png) | [Ảnh](light-768-quiz.png) |
| 1440px | [Ảnh](dark-1440-roadmap.png) | [Ảnh](dark-1440-lesson.png) | [Ảnh](dark-1440-quiz.png) | [Ảnh](light-1440-roadmap.png) | [Ảnh](light-1440-lesson.png) | [Ảnh](light-1440-quiz.png) |

Ảnh bổ sung: [toàn sơ đồ tối](dark-1440-full.png), [toàn sơ đồ sáng](light-1440-full.png), [không JS](no-js-1440.png), [giảm chuyển động](reduced-motion-1440.png).

## Kiểm tra

- `node scripts/check-algorithm-roadmap.cjs`: đạt. Kiểm tra đủ 23 trang, dữ liệu quiz tách riêng, không tải quiz vào bài/lộ trình, bấm chương 1 và 2 chuyển trang, nút quay lại có icon, chuỗi điều hướng qua quiz và quay về, chấm/lưu điểm, giữ tiến độ, sơ đồ responsive, 18 ảnh, “Sắp có”, HTML tĩnh, `file://`, không tài nguyên ngoài. [Kết quả JSON](checks.json).
- `node scripts/check-progress.cjs`: đạt kiểm tra tương thích tiến độ cũ, giữ điểm cao nhất, nhập/gộp, reset và lỗi bộ nhớ.
- `node scripts/check-ui.cjs`: đã chạy trên 423 trang; còn 681 lỗi H1/meta description ở các khóa cũ. Không có lỗi mới ở `roadmap/` hoặc `thuat-toan/`. [Chi tiết](check-ui.json).

Đã sửa lỗi anchor của nút quay lại bằng cách sinh ID tương ứng trong danh sách fallback, để liên kết hợp lệ cả khi tắt JS và khi kiểm tra HTML tĩnh.
