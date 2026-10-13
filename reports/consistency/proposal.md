# Đề xuất chuẩn hóa thư mục — chờ duyệt

Chưa đổi tên thư mục hoặc đường dẫn bài học.

| Hiện tại | Đề xuất | HTML cần redirect | Lý do |
| --- | --- | ---: | --- |
| `html-css-nnlt/` | `html-css/` | 19 | Tên môn rõ ràng, bỏ hậu tố viết tắt |
| `javascript-nnlt/` | `javascript/` | 35 | Đồng nhất với `java/`, `python/`, `react/` |
| `Quiz_and_other/` | `practice/` | 7 | Chữ thường, mô tả quiz, bài tập và tài nguyên thực hành |

NNLT thường được hiểu là “ngôn ngữ lập trình”; repo hiện có nhãn “(NNLT)” nhưng không định nghĩa rõ chữ viết tắt này. Đây là cách diễn giải, không phải định nghĩa đã được xác nhận từ tài liệu dự án. Hậu tố không giúp phân biệt rõ môn HTML/CSS nên đề xuất bỏ.

## Phạm vi cập nhật sau khi được duyệt

- `courses.html`: href, sidebar/drawer, `data-skill` và `data-skills` phải đổi đồng bộ.
- `index.html`: link ôn tập/kiểm tra kiến thức.
- Các mục lục, sidebar, breadcrumb, nút trước/sau và link chéo trong HTML; đường dẫn tương đối phải được xác minh sau khi di chuyển.
- `assets/catalog.js`: không chứa trực tiếp ba tên thư mục; đọc data từ HTML. Cần kiểm tra bộ lọc role sau khi cập nhật khóa trong `courses.html`.
- Scripts kiểm tra, cấu hình SEO, README và dữ liệu manifest/báo cáo có tham chiếu đường dẫn. Các snapshot lịch sử cần được phân biệt với cấu hình đang sử dụng trước khi sửa.
- Giữ 61 trang redirect ở đường dẫn HTML cũ: meta refresh, link chuyển trang dự phòng và JavaScript giữ query/hash khi chuyển. Tài nguyên JS tại đường dẫn cũ (ví dụ `quiz-tracker.js`) cần tiếp tục truy cập được để không phá trang/nguồn ngoài đang dùng.
- Kiểm tra link, lọc role, quiz, bookmark và redirect. Không chuyển hướng sang trang chủ thay cho đúng bài cũ.

## Danh sách tham chiếu

[references.md](references.md) liệt kê từng file, số dòng, số lần và toàn bộ dòng tham chiếu. [references.json](references.json) chứa cùng dữ liệu và danh sách 360 trang chương để xử lý bằng script. Các báo cáo không quét chính thư mục `reports/` để tránh tự đếm lại dữ liệu audit.

## Tiêu đề đã được chấp thuận

Quy ước **Chương N — Tên bài**, áp dụng cho tab (thêm môn và `| Synaptrail`), tiêu đề chính, mục lục/sidebar và nút trước/sau. Không đổi heading các mục nội dung bên trong một chương. ML vẫn giữ filename `phan-N-...html`; chỉ thay nhãn hiển thị.
