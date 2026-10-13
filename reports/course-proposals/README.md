# Đề xuất tổ chức tám kỹ năng trong Full Stack

Đây là tài liệu duyệt và bản mẫu, chưa phải các khóa đã phát hành. `courses.html`, khóa kỹ năng, bài Full Stack và đường dẫn hiện có được giữ nguyên.

## Phạm vi thực tế

| Kỹ năng trên catalog | Chương Full Stack liên quan | Nhận xét |
| --- | --- | --- |
| Git | 1–2 | Git cơ bản, GitHub và quy trình nhóm |
| TypeScript | 3–4 | Kiểu cơ bản, interface/type/generics |
| Bootstrap | 5–6; SCSS 7–8 | Thẻ hiện ghép hai công nghệ; SCSS không phải nội dung riêng của Bootstrap |
| MySQL & ORM | 9–13 | SQL 9–10, kết nối Node 11, Sequelize 12, Prisma 13; năm chương nhưng không phải khóa MySQL chuyên sâu |
| GraphQL | 14–15 | Query/mutation và Apollo |
| Socket.IO | 16 | Một chương giao tiếp realtime |
| NestJS | 17–18 | Kiến trúc và DI/DTO |
| Docker | 19–20; triển khai VPS 21 | Dockerfile, chạy container và Compose; triển khai VPS là bước ứng dụng |

## Hai phương án

| Phương án | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| A. Giữ nguyên, ghi rõ “nhập môn trong Full Stack” | Không đổi URL, tận dụng luồng học hiện tại, ít nội dung cần duy trì; kỳ vọng đúng với 1–2 chương chuyên đề | Khó học độc lập; thiếu chiều sâu; thanh tiến độ theo kỹ năng khó tách khỏi khóa Full Stack |
| B. Tách khóa độc lập | Có prerequisite, mục tiêu, bài tập và tiến độ theo môn; mở rộng chuyên sâu; hỗ trợ người không theo Full Stack | Cần viết nội dung đủ sâu và xác minh ví dụ; dễ trùng bài; phải duy trì link chéo, điều kiện tiên quyết và đo tiến độ |

**Đề xuất:** giữ Full Stack là lộ trình tích hợp, sau này ghi rõ phạm vi nhập môn của tám thẻ. Ưu tiên mở rộng **MySQL và Docker**; không tạo tám thư mục với cùng 1–2 bài rồi gọi là khóa riêng. Các bài cũ giữ vai trò nhập môn và ví dụ tích hợp; khóa mới đi sâu vận hành/thiết kế. Catalog chỉ thay sau khi được duyệt.

## Bản để duyệt

- [MySQL — mục lục 10 chương](mysql/index.html), [chương 1 mẫu](mysql/chapter01.html).
- [Docker — mục lục 8 chương](docker/index.html), [chương 1 mẫu](docker/chapter01.html).

Chỉ chương 1 có nội dung; các chương còn lại là đề cương, không có link giả đến file chưa viết. MySQL mẫu giới thiệu mô hình quan hệ và SQL cơ bản, không giả định đã có server chạy; phần chạy cần MySQL và client như ghi trong bài. Docker mẫu dùng Linux container; phần chạy cần Engine/Desktop đang hoạt động. Đây là phạm vi bản mẫu được nêu rõ, không tự cài môi trường hay phát hành khóa.

Nguồn đối chiếu: [MySQL Reference Manual](https://dev.mysql.com/doc/refman/8.4/en/), [EXPLAIN](https://dev.mysql.com/doc/refman/8.4/en/explain.html), [container](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/), [image](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/), [multi-stage build](https://docs.docker.com/build/building/multi-stage/).
