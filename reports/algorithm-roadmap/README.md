# Lộ trình Thuật toán — đọc từng mục ngay trong sơ đồ

Mở [trang lộ trình](../../roadmap/thuat-toan.html) trực tiếp bằng trình duyệt. Bấm một nút để đọc nội dung ngay bên dưới sơ đồ, từ trên xuống. Mỗi lần chỉ có một mục được mở; chọn mục khác sẽ thay nội dung cũ. Không còn panel phủ bên phải hoặc thanh danh sách chương bên trái.

Có nút **Trang chủ** ở thanh điều hướng và đầu phần đọc, cùng nút **Về sơ đồ** để đóng mục đang đọc. Esc cũng đóng mục và trả focus về nút đã chọn. Các liên kết mục liên quan mở ngay trong cùng phần đọc. 23 đường dẫn chương cũ tự chuyển đến đúng mục trên sơ đồ, ví dụ `thuat-toan/chapter09.html` → `roadmap/thuat-toan.html#chapter09`.

## Nội dung

- Dữ liệu chạy trang nằm trong `assets/roadmaps/thuat-toan.js`: 38 nút, gồm 9 chặng, 23 chương, 3 nhánh đồ thị sắp có và 3 tài nguyên thực hành.
- Nội dung chương đầy đủ, bảng, tất cả ví dụ code và tổng kết được trích từ chương gốc; quiz được dựng lại bằng các câu hỏi và đáp án gốc. Bài hiện có 12 chương có quiz.
- Mục chưa có nội dung hiện “Sắp có”, không có liên kết hỏng. Các tài nguyên luyện tập vẫn có liên kết tới công cụ tương ứng.
- Tiến độ giữ nguyên khóa `synaptrail-progress`, các trường `done`, `quizScore`, `updatedAt` và trường tùy chọn `status`. Thanh tiến độ tính 26 mục có tài liệu. Nhập, xuất, reset và dữ liệu Java cũ vẫn tương thích.
- Mở được qua `file://`, không gọi API hoặc tải tài nguyên ngoài. Trên điện thoại/giảm chuyển động dùng danh sách nút. Khi tắt JS, nội dung 23 chương có thể mở trực tiếp qua các mục `<details>` được sinh từ cùng dữ liệu.
- File chương gốc được giữ làm nguồn nội dung để không mất bài; phần giao diện cũ được thay bằng chuyển hướng qua `assets/algorithm-entry.js`. Đồng bộ bằng `node scripts/sync-algorithm-roadmap.cjs`.

## Ảnh sau thay đổi

Tên file `panel` được giữ để các liên kết báo cáo cũ vẫn mở được; ảnh hiện tại thể hiện phần đọc nội tuyến, không phải modal. Đã xem lại phần đọc trên điện thoại, tablet và desktop: nội dung không chồng nhau hay tràn ngang; code tự xuống dòng trên màn hình nhỏ, nút Trang chủ hiển thị rõ.

| Chiều rộng | Tối: sơ đồ | Tối: đọc một mục | Sáng: sơ đồ | Sáng: đọc một mục |
| --- | --- | --- | --- | --- |
| 375px | [Ảnh](dark-375-closed.png) | [Ảnh](dark-375-panel.png) | [Ảnh](light-375-closed.png) | [Ảnh](light-375-panel.png) |
| 768px | [Ảnh](dark-768-closed.png) | [Ảnh](dark-768-panel.png) | [Ảnh](light-768-closed.png) | [Ảnh](light-768-panel.png) |
| 1440px | [Ảnh](dark-1440-closed.png) | [Ảnh](dark-1440-panel.png) | [Ảnh](light-1440-closed.png) | [Ảnh](light-1440-panel.png) |

## Kiểm tra

- `node scripts/check-algorithm-roadmap.cjs`: đạt. Kiểm tra dữ liệu, liên kết, 12 ảnh, không tràn ngang/chồng nút, đọc đầy đủ một mục, chuyển mục thay nội dung cũ, nút Trang chủ, quiz, tiến độ, Esc, giảm chuyển động, không JS, mở trực tiếp bằng file và chuyển hướng đủ 23 chương. [Kết quả](checks.json).
- `node scripts/check-progress.cjs`: đạt các kiểm tra tiến độ cũ.
- `node scripts/check-ui.cjs`: toàn repo còn 727 lỗi H1/meta description của trang cũ; không có lỗi được báo cho trang lộ trình. [Chi tiết](check-ui.json).
