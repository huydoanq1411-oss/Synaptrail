# Synaptrail

Không gian tự học lập trình, Full Stack và AI. Synaptrail tập hợp lộ trình theo nghề nghiệp, bài học theo kỹ năng, hướng dẫn thực hành và tài nguyên xây dựng dự án.

Website sử dụng **HTML, CSS và JavaScript thuần**, không cần cài dependency hoặc chạy build để xem nội dung.

## Mở website

### Mở trực tiếp

1. Mở thư mục dự án và nhấp đúp vào [index.html](index.html).
2. Bấm **Khám phá khóa học** để đến trang danh mục.
3. Chọn role hoặc kỹ năng, sau đó mở bài học.

### Dùng VS Code và Live Server

1. Mở thư mục Synaptrail trong VS Code.
2. Cài extension **Live Server** nếu chưa có.
3. Nhấp chuột phải vào `index.html` → **Open with Live Server**.

Trang web tự cập nhật khi lưu mã. Nếu trình duyệt vẫn hiển thị giao diện cũ, nhấn **Ctrl + F5**.

### Dùng server cục bộ

Nếu máy đã cài Python, mở terminal trong thư mục gốc dự án và chạy:

```sh
python -m http.server 8000
```

Truy cập `http://localhost:8000/`. Nhấn **Ctrl + C** trong terminal để dừng server. Python chỉ cần cho cách mở này, không phải dependency của website.

## Cách học trên Synaptrail

[Trang chủ](index.html) giới thiệu website và dẫn đến [danh mục khóa học](courses.html). Danh mục gồm bốn khu vực nối tiếp, mỗi khu vực có các box nội dung bên dưới:

| Khu vực | Nội dung | Cách sử dụng |
| --- | --- | --- |
| **Role-based** | 5 vai trò nghề nghiệp | Chọn role để hiển thị kỹ năng liên quan trong Skill-based |
| **Skill-based** | 20 chủ đề kỹ năng | Chọn box kỹ năng để vào bài học |
| **Best Practices** | 6 box hướng dẫn | Đọc về Git, bảo mật, thiết kế hệ thống, triển khai, AI production và cheatsheet |
| **Project Ideas** | 4 box thực hành | Mở dự án cuối khóa, công cụ ôn tập, bài tập hoặc tài liệu API |

### Liên kết giữa role và kỹ năng

| Role | Kỹ năng được hiển thị |
| --- | --- |
| Frontend Developer | HTML/CSS, JavaScript, React, Bootstrap & SASS/SCSS |
| Full Stack Developer | HTML/CSS, JavaScript, React, Git, TypeScript, MySQL, GraphQL, Socket.IO, NestJS, Docker, System Design, Security |
| AI Engineer | Python, Machine Learning, AI Engineer (LLM/RAG), System Design, Security |
| Security Engineer | Python, C++, thuật toán, System Design, Security |
| System / DevOps | Git, Docker, System Design, Security |

Chọn **Xem tất cả kỹ năng** để bỏ bộ lọc role. Ô tìm kiếm hỗ trợ tiếng Việt không dấu và kết hợp với role đang chọn; tìm kiếm cũng lọc các box Best Practices và Project Ideas. Khi không có kết quả, trang hiển thị thông báo để bạn đổi từ khóa hoặc bỏ bộ lọc.

Các nhóm được phân loại từ tài liệu có sẵn. Project Ideas dẫn đến tài liệu thực hành, không phải danh sách ứng dụng đã được triển khai. Tài liệu AI Agent Toolbox và kiến thức AI production nằm ở cuối danh mục.

## Nội dung học tập

- **Nền tảng:** HTML/CSS, JavaScript, thuật toán và cấu trúc dữ liệu.
- **Ngôn ngữ:** Python, Java, C++, TypeScript và kỹ năng ngôn ngữ/kỹ năng mềm.
- **Frontend:** React, Bootstrap, SASS/SCSS.
- **Full Stack:** Git, MySQL/ORM, GraphQL, Socket.IO, NestJS, Docker và dự án cuối khóa.
- **AI:** Machine Learning, LLM, RAG, prompt engineering và AI agents.
- **Hệ thống:** System Design và bảo mật ứng dụng.
- **Ôn tập:** quiz, flashcards, glossary, cheatsheet, bài tập và tài liệu API.

Bạn có thể học từng kỹ năng độc lập hoặc theo nhóm kỹ năng của một role. Kết hợp bài học với bài tập và dự án để củng cố kiến thức.

## Giao diện và điều hướng

- Nền trắng, màu nhấn teal; bố cục responsive cho điện thoại, tablet và desktop.
- Trang chủ riêng, danh mục có các box nhỏ gọn và khung nội dung căn giữa.
- Các trang học và danh mục giữ tùy chọn sáng/tối, lưu bằng khóa `synaptrail-theme` trong localStorage.
- Hỗ trợ focus bàn phím, bỏ qua điều hướng, quản lý focus khi mở/đóng menu và giảm chuyển động theo cài đặt thiết bị.
- Bảng và code dài có vùng cuộn riêng để tránh tràn nội dung.
- Đường dẫn bài học được giữ nguyên. Bookmark cũ như `index.html#roadmap` tự chuyển đến phần kỹ năng trong `courses.html`.

## Cấu trúc dự án

```text
Synaptrail/
├── index.html              # Trang chủ giới thiệu
├── courses.html            # Danh mục và bốn khu vực nội dung
├── assets/
│   ├── ui.css              # Giao diện chung cho các trang
│   ├── lesson.css          # CSS gốc dùng chung cho 345 trang chapter
│   ├── home.css            # Bố cục trang chủ
│   ├── courses.css         # Bố cục danh mục và các box
│   └── catalog.js          # Chọn role, lọc kỹ năng và tìm kiếm
├── ai-engineer/            # AI Engineer, LLM/RAG, prompt và agent
├── cpp/                    # C++
├── fullstack-js/           # Full Stack JavaScript
├── html-css-nnlt/          # HTML/CSS
├── java/                   # Java
├── javascript-nnlt/        # JavaScript
├── languages/              # Ngôn ngữ và kỹ năng mềm
├── machine-learning/      # Machine Learning
├── python/                 # Python
├── Quiz_and_other/         # Quiz và tài liệu thực hành
├── react/                  # React
├── security/               # Bảo mật
├── system-design/          # Thiết kế hệ thống
├── thuat-toan/             # Thuật toán và cấu trúc dữ liệu
├── scripts/                # Công cụ kiểm tra giao diện
└── README.md
```

## Chỉnh sửa mã nguồn

Chạy các lệnh từ thư mục gốc dự án.

| Muốn chỉnh | File liên quan |
| --- | --- |
| Nội dung và bố cục trang chủ | `index.html`, `assets/home.css` |
| Các role, box kỹ năng và liên kết tài liệu | `courses.html` |
| Bố cục danh mục | `assets/courses.css` |
| Hành vi chọn role và tìm kiếm | `assets/catalog.js` |
| Màu sắc và thành phần dùng chung | `assets/ui.css` |
| Nội dung bài học | File HTML trong thư mục môn học tương ứng |

Các nút role trong `courses.html` dùng `data-skills` để liệt kê khóa kỹ năng. Mỗi box kỹ năng có `data-skill` tương ứng; giữ hai giá trị khớp nhau khi thêm hoặc đổi nhóm.

Sau khi thêm trang HTML mới, có thể chạy công cụ sau để gắn stylesheet chung:

```sh
node scripts/upgrade-ui.cjs
```

## Kiểm tra

### Tách CSS bài học

`scripts/extract-css.cjs` chuyển khối CSS đã xác minh từ `chapter*.html` sang `assets/lesson.css`, giữ vị trí stylesheet, biến CSS và theme. Các khối style riêng được giữ nguyên; khối không khớp hash được bỏ qua và báo lý do. Script chạy lại an toàn, không chèn link trùng hoặc ghi đè CSS đã thay đổi.

```sh
node scripts/extract-css.cjs --audit
node scripts/extract-css.cjs
```

Đã xác nhận 345 khối CSS gốc giống hệt nhau bằng SHA-256, không có file khác biệt. Sau thử nghiệm 3 file và chạy 342 file còn lại, tổng dung lượng 345 chapter giảm từ **9.872.059 byte** xuống **5.245.609 byte**. Tính thêm **13.446 byte** của stylesheet chung, còn **5.259.055 byte**, tiết kiệm **4.613.004 byte (46,73%)**. Số liệu không bao gồm script/báo cáo kiểm tra. Chạy lại không đổi file nào; `check-ui.cjs` đạt. Báo cáo chi tiết: `scripts/css-audit.json`, `scripts/css-extraction-result.json`, `scripts/css-extraction-rerun.json`.

Các công cụ kiểm tra yêu cầu **Node.js**. Website không dùng bundler nên không có lệnh build.

```sh
node scripts/check-ui.cjs
node scripts/browser-check.cjs
```

- `check-ui.cjs` kiểm tra cú pháp script inline và `catalog.js`, liên kết CSS chung, liên kết/anchor ở trang chủ và danh mục, cùng khóa kỹ năng của các role.
- `browser-check.cjs` dùng Chrome headless tại đường dẫn Windows mặc định `C:/Program Files/Google/Chrome/Application/chrome.exe`, mở server cục bộ tạm thời và kiểm tra responsive/tương tác. Máy khác cần điều chỉnh đường dẫn Chrome trong script. Ảnh chụp lưu ở `artifacts/`, được bỏ qua bởi Git.

### Kết quả kiểm tra gần nhất

Sau lần chỉnh danh mục thành bốn khu vực:

- **384 trang HTML**, **772 script inline**: không phát hiện lỗi cú pháp; CSS chung và các liên kết được kiểm tra đều tồn tại.
- **6 trang đại diện × 3 độ rộng** (375, 768, 1440 px): không phát hiện tràn ngang hoặc exception JavaScript, nền trắng mặc định hiển thị đúng.
- Cả **5 role** hiển thị đúng bộ kỹ năng; tìm kiếm khi chọn role, trạng thái trống và nút bỏ bộ lọc đều đạt.
- Điều hướng trang chủ → danh mục, bookmark cũ, menu/focus và chuyển sáng/tối đều đạt.

Các kiểm tra trình duyệt lấy mẫu trang chủ, danh mục, mục lục React, bài Python đầu tiên, mục lục Full Stack và quiz tổng hợp. Chưa kiểm tra thủ công toàn bộ bài học, mọi chức năng quiz hoặc thiết bị vật lý.
