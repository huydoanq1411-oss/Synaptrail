AGENTS.md — Luật làm việc cho dự án Synaptrail

Synaptrail là website học lập trình bằng tiếng Việt, gồm khoảng 380 trang HTML tĩnh (giáo trình, quiz, flashcard, glossary). Repo private, dùng để học cá nhân.

1. Kiến trúc (đã kiểm tra)
Site tĩnh: HTML/CSS/JS thuần. Không có package.json, không có bước build. Node.js chỉ dùng cho các script trong scripts/ (đuôi .cjs).
Thư mục khóa học: thuat-toan, cpp, html-css-nnlt, javascript-nnlt, languages, java, react, fullstack-js, security, system-design, python, machine-learning, ai-engineer.
Quiz_and_other/: cheatsheet, bài tập, flashcard, glossary, quiz tổng hợp, free-apis (quiz-tracker.js ở đây).
assets/: ui.css (CSS dùng chung), courses.css, home.css, catalog.js (dữ liệu/logic danh mục).
Trang gốc: index.html (trang chủ), courses.html (danh mục: role, skill, dự án, ôn tập).
Trang chương đặt tên chapterNN.html (riêng python có tên dài hơn, ví dụ chapter001.html; machine-learning dùng phan-N). Mỗi khóa có index.html là mục lục.
Hiện nhiều trang chương còn CSS/JS nhúng inline lặp lại. Đây là nợ kỹ thuật đã biết (xem mục 8).
2. Lệnh kiểm tra

Chạy từ thư mục gốc repo:

node scripts/check-ui.cjs: kiểm tra tĩnh. Bắt buộc chạy sau mọi thay đổi và báo kết quả. Script kiểm tra: cú pháp mọi <script> inline, mọi trang phải có <link rel="stylesheet" href=".../assets/ui.css">, cú pháp assets/catalog.js, các data-skill/data-skills trong courses.html phải khớp nhau, các link trong <main> của courses.html phải tồn tại.
node scripts/browser-check.cjs: kiểm tra bằng Chrome headless. Đường dẫn Chrome đang hard-code kiểu Windows (C:/Program Files/Google/Chrome/...) và dùng cổng 9333. Nếu lỗi đường dẫn thì báo, không tự đoán.
scripts/upgrade-ui.cjs: ghi đè NHIỀU file (mọi trang HTML và courses.html). KHÔNG chạy nếu chưa được tôi cho phép rõ ràng.

Môi trường của tôi là Windows. Viết script Node dùng path.join, không hard-code dấu \.

3. Quy tắc bắt buộc
Chỉ sửa trong phạm vi được yêu cầu. Sau khi làm xong, liệt kê chính xác file đã đổi.
Không đổi tên hoặc xóa file/thư mục. Nếu thật sự cần, hỏi trước và để lại trang chuyển hướng ở đường dẫn cũ.
Không đổi id, anchor, tên data-skill đang được trang khác tham chiếu mà chưa cập nhật mọi nơi dùng chúng.
Không thêm dependency, framework, bundler hoặc công cụ build. Nếu nghĩ rằng cần, đề xuất và chờ tôi đồng ý.
Không dùng CDN cho thư viện mới. Thư viện cần thiết thì tải về assets/vendor/ và ghi rõ phiên bản.
Việc lặp lại trên nhiều file (từ vài chục file trở lên): viết script có chế độ --dry-run, chạy thử trên 3 file, cho tôi xem diff rồi mới chạy toàn bộ. Không sửa tay từng file.
Không thêm CSS/JS inline mới vào trang chương. Code dùng chung đặt vào assets/.
Không đưa khóa API, mật khẩu, token vào repo.
4. Quy tắc giao diện
Giao diện phải đẹp ở cả theme sáng và tối, ở 375px, 768px, 1440px, không tràn ngang.
Màu sắc, khoảng cách, cỡ chữ dùng biến CSS dùng chung; không viết màu cứng rải rác.
Tương phản chữ đạt WCAG AA; mọi thành phần dùng được bằng bàn phím, có :focus-visible rõ ràng.
Trạng thái (đang học, xong, bỏ qua) phải có biểu tượng hoặc chữ, không chỉ phân biệt bằng màu.
Tôn trọng prefers-reduced-motion. Hiệu ứng 3D/animation chỉ đặt ở trang danh mục và mục lục, không đặt ở trang chương. Luôn có bản dự phòng khi không có WebGL.
Nút/icon dùng SVG, không dùng ký tự chữ làm mũi tên hay biểu tượng (từng gây lỗi hiển thị dấu "?").
Mỗi box trong courses.html có ảnh minh họa riêng; hai box không dùng chung một ảnh.
5. Quy tắc nội dung
Ngôn ngữ nội dung: tiếng Việt. Thuật ngữ kỹ thuật giữ tiếng Anh, có chú giải lần đầu.
Khung chương chuẩn: mục tiêu → vấn đề thực tế → lý thuyết nền → ví dụ giải thích từng dòng → lỗi thường gặp → bài tập 3 mức → tóm tắt → quiz.
Mọi đoạn code trong bài phải chạy được. Ghi rõ phiên bản ngôn ngữ/thư viện.
Không bịa thư viện, hàm, số liệu. Chỗ nào không chắc, đánh dấu để tôi tự kiểm chứng, đừng viết như thể chắc chắn.
Kiến thức dễ lỗi thời (tên model AI, phiên bản framework): không hard-code; dùng biến môi trường hoặc ghi chú trỏ tới tài liệu chính thức.
Không thêm quiz ngoài nội dung bài; câu dựa trên kiến thức ngoài bài phải được đánh dấu.
6. Quy trình làm việc
Với việc lớn: đọc đúng thư mục liên quan, đưa kế hoạch (danh sách file sẽ đổi) và chờ tôi duyệt trước khi viết code.
Làm MẪU nhỏ trước (1 khóa, 1 chương, vài box), chạy kiểm tra, rồi dừng cho tôi xem. Chỉ nhân rộng khi tôi đồng ý.
Với thay đổi giao diện: tự chụp màn hình ở 375/768/1440px (theme sáng và tối), xem lại và sửa lỗi bố cục trước khi báo cáo.
Khi làm xong, báo cáo theo mẫu: (a) file đã đổi, (b) kết quả check-ui, (c) điều chưa kiểm tra được hoặc chưa chắc, (d) việc nên làm tiếp.
Commit nhỏ, thông điệp rõ ràng, mỗi commit một việc.
7. Giải thích cho người học

Tôi là sinh viên và dùng dự án này để học. Khi viết code mới hoặc sửa phần phức tạp, giải thích ngắn gọn vì sao làm như vậy và giải thích từng đoạn quan trọng, không chỉ đưa kết quả.

8. Nợ kỹ thuật đã biết (chỉ sửa khi được yêu cầu)
CSS/JS inline lặp lại ở các trang chương (nặng, khó bảo trì). Dự kiến tách vào assets/.
Bộ tô màu code chạy lúc tải trang có lỗi với URL chứa // (hiển thị chuỗi class="tok-com"> giữa URL).
Sidebar fullstack-js ghi 26 chương trong khi thực tế có 22.
fullstack-js gộp nhiều chủ đề (Git, TypeScript, Bootstrap, SASS, MySQL, GraphQL, NestJS, Docker...) cần tách thành khóa riêng.
Thiếu <h1> ở nhiều trang chương, gần như không có meta description, chưa có favicon, sitemap.
Trong courses.html, nhiều box trùng đích đến (Best Practices lặp lại box Skill; link công cụ ôn tập xuất hiện nhiều lần).
scripts/browser-check.cjs chỉ chạy được với đường dẫn Chrome kiểu Windows cố định.
Tên thư mục chưa nhất quán: html-css-nnlt, javascript-nnlt, Quiz_and_other.