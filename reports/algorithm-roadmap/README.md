# Bản thử lộ trình Thuật toán

Mở [trang lộ trình](../../roadmap/thuat-toan.html) trực tiếp bằng trình duyệt, không cần server. Bản thử chỉ dành cho khóa Thuật toán.

## Dữ liệu và hành vi

- 38 nút: 9 chặng chính, 23 chương, 3 nhánh đồ thị chưa có bài và 3 tài nguyên luyện tập.
- Một nguồn chạy thực tế: `assets/roadmaps/thuat-toan.js`. Giới thiệu, tổng kết, đề mục, quiz và khối code đầu tiên được trích từ 23 file chương hiện có; không tải HTML bằng fetch nên chạy được qua `file://`.
- 12 chương có quiz. Nút không có code hoặc quiz sẽ ẩn thao tác tương ứng. Nội dung chưa có chương chỉ hiện “Sắp có”, không có liên kết bài học.
- Tiến độ dùng khóa `synaptrail-progress`, giữ cấu trúc `{done, quizScore, updatedAt}` hiện tại và thêm trường `status` tùy chọn. Bản ghi cũ không cần chuyển đổi. Xuất/Nhập/Reset dùng chung store và định dạng với trang chính; Reset có xác nhận và xóa toàn bộ tiến độ Synaptrail như trang chính.
- Thanh tiến độ tính 26 mục có tài liệu (23 chương + 3 tài nguyên), không tính nút nhóm hoặc nội dung sắp có. Thời lượng là ước tính đọc/thực hành, không phải thời lượng chính thức của giáo trình.
- Dưới 768px hoặc bật giảm chuyển động: danh sách có số thứ tự. Tắt JavaScript: danh sách tĩnh được sinh từ cùng dữ liệu, có đủ 26 liên kết tài liệu.

## Ảnh kiểm tra

Đã mở và xem từng ảnh trong 12 ảnh dưới đây. Ảnh đóng panel chụp phần đầu trang; ảnh mở panel chụp chi tiết Heap Sort sau khi cuộn tới chương. Các file `*-full.png` cung cấp toàn bộ lộ trình.

| Chiều rộng | Theme tối: đóng | Theme tối: mở | Theme sáng: đóng | Theme sáng: mở |
| --- | --- | --- | --- | --- |
| 375px | [Ảnh](dark-375-closed.png) | [Ảnh](dark-375-panel.png) | [Ảnh](light-375-closed.png) | [Ảnh](light-375-panel.png) |
| 768px | [Ảnh](dark-768-closed.png) | [Ảnh](dark-768-panel.png) | [Ảnh](light-768-closed.png) | [Ảnh](light-768-panel.png) |
| 1440px | [Ảnh](dark-1440-closed.png) | [Ảnh](dark-1440-panel.png) | [Ảnh](light-1440-closed.png) | [Ảnh](light-1440-panel.png) |

Ảnh bổ sung: [không JavaScript](no-js-1440.png), [giảm chuyển động](reduced-motion-1440.png), [toàn sơ đồ tối](dark-1440-full.png), [toàn sơ đồ sáng](light-1440-full.png).

## Lỗi tìm thấy và sửa

| Kiểm tra | Phát hiện / cách xử lý | Sau sửa |
| --- | --- | --- |
| Tương phản | Viền đôi nút chi tiết quá nhạt trong theme tối; tăng độ rõ bằng token màu chữ phụ. Tăng độ rõ đường nhánh trong theme sáng. | Kiểu viền đôi/đứt/đặc đều phân biệt được ngoài màu sắc. |
| Bàn phím | Escape chưa đóng ổn định khi gửi phím trong kiểm tra; thêm xử lý Escape rõ ràng trong panel. | Đóng bằng Esc, bấm ngoài, nút Đóng; focus quay về nút mở. |
| Giảm chuyển động | Cần số thứ tự nhánh cả khi chuyển về danh sách trên màn hình rộng. | Đã thêm bộ đếm nhánh ở chế độ giảm chuyển động. |
| Không JavaScript | Nút công cụ tiến độ và đổi theme không hoạt động khi JS tắt. | Ẩn các nút thao tác này, giữ danh sách và liên kết bài học. |
| Chồng nút | Kiểm tra mọi cặp trong 38 nút ở cả sáu cấu hình và khi panel mở. | Không có nút chồng nhau. |
| Đường nối | 8 đoạn trục chính liền + 29 nhánh Bezier chấm; kiểm tra lại sau thay kích thước và khi panel mở. | Đường nối đi tới cạnh nút, không đi qua chữ. |
| Chữ bị cắt / tràn ngang | Kiểm tra `scrollWidth`, hộp nút và giới hạn panel tại ba kích thước. | Không có nút bị cắt hoặc trang tràn ngang. |
| Panel che nội dung | Desktop dành vùng riêng cho panel; tablet dùng modal bên phải; điện thoại dùng ngăn kéo dưới. Nội dung panel cuộn riêng. | Tiêu đề, nút trạng thái, tóm tắt và liên kết liên quan hiển thị đủ; nền modal được làm mờ có chủ đích. |

## Kết quả chạy

- `node scripts/check-algorithm-roadmap.cjs`: đạt. Kiểm tra dữ liệu/liên kết, không gọi mạng, mở trực tiếp qua `file://`, responsive, lưu/tải lại tiến độ, quiz đúng đáp án, ẩn nút thiếu dữ liệu, trạng thái “Sắp có”, focus trap, Esc, bấm ngoài, giảm chuyển động và không JS. Kết quả máy đọc: [checks.json](checks.json).
- `node scripts/check-progress.cjs`: đạt, gồm tương thích bản ghi cũ, giữ điểm quiz cao nhất, nhập/gộp, reset và lỗi bộ nhớ.
- `node scripts/check-ui.cjs`: đã chạy; toàn repo còn **728 lỗi có sẵn**: 346 trang thiếu H1 và 382 trang thiếu meta description. Không có lỗi liên kết hay lỗi được báo ở `roadmap/thuat-toan.html`. Chi tiết: [check-ui.json](check-ui.json). Không sửa hàng loạt các chương ngoài phạm vi bản thử.

Đồng bộ lại trích đoạn và danh sách không JS: `node scripts/sync-algorithm-roadmap.cjs`, rồi chạy lại hai lệnh kiểm tra liên quan bên trên. Không cần chạy script này để xem trang.
