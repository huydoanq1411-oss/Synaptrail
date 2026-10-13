# Synaptrail

Không gian tự học lập trình, Full Stack và AI. Synaptrail tập hợp lộ trình theo nghề nghiệp, bài học theo kỹ năng, hướng dẫn thực hành và tài nguyên xây dựng dự án.

Website sử dụng **HTML, CSS và JavaScript thuần**, không cần cài dependency hoặc chạy build để xem nội dung.

## Giấy phép

Dự án sử dụng [giấy phép MIT](LICENSE). Copyright (c) 2026 Synaptrail.

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
│   ├── lesson.js           # Theme, sidebar, progress, copy và quiz dùng chung
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

### Chuẩn bị SEO

`scripts/add-seo.cjs` chuẩn bị h1, description 120–155 ký tự, Open Graph, canonical, favicon, sitemap và robots. URL gốc cấu hình trong `scripts/seo-config.json` qua `baseUrl`, hoặc truyền `--base-url`. **Hiện chưa có domain nên chỉ chạy dry-run; SEO chưa được áp dụng lên HTML và chưa tạo sitemap/robots.** Không dùng URL mẫu để triển khai.

```sh
node scripts/add-seo.cjs --dry-run
```

Khi có URL triển khai thật (bao gồm đường dẫn repository nếu dùng GitHub Pages), điền `baseUrl` rồi chạy:

```sh
node scripts/add-seo.cjs
node scripts/check-ui.cjs
```

Script từ chối áp dụng khi URL trống. Các heading đã có h1 được giữ; tiêu đề chương h2 được nâng thành h1 với class/style tương ứng trong `assets/seo.css`. CSS bài học gốc không bị sửa. `assets/favicon.svg` là favicon đã chuẩn bị, chỉ được gắn vào HTML khi áp dụng. Title mục lục được chuẩn hóa, thực thể HTML được giải mã rồi escape một lần; các tag SEO được thay thay vì chèn trùng.

Dry-run hiện tại: 384 trang, 346 h1 cần nâng, 155 title cần sửa, 383 description cần thêm. Có thể chạy `node scripts/check-seo.cjs` để kiểm tra áp dụng và chạy lại bằng filesystem giả lập trong bộ nhớ, không ghi URL thử nghiệm ra file thật.

### Tách CSS bài học

`scripts/extract-css.cjs` chuyển khối CSS đã xác minh từ `chapter*.html` sang `assets/lesson.css`, giữ vị trí stylesheet, biến CSS và theme. Các khối style riêng được giữ nguyên; khối không khớp hash được bỏ qua và báo lý do. Script chạy lại an toàn, không chèn link trùng hoặc ghi đè CSS đã thay đổi.

```sh
node scripts/extract-css.cjs --audit
node scripts/extract-css.cjs
```

Đã xác nhận 345 khối CSS gốc giống hệt nhau bằng SHA-256, không có file khác biệt. Sau thử nghiệm 3 file và chạy 342 file còn lại, tổng dung lượng 345 chapter giảm từ **9.872.059 byte** xuống **5.245.609 byte**. Tính thêm **13.446 byte** của stylesheet chung, còn **5.259.055 byte**, tiết kiệm **4.613.004 byte (46,73%)**. Số liệu không bao gồm script/báo cáo kiểm tra. Chạy lại không đổi file nào; `check-ui.cjs` đạt. Báo cáo chi tiết: `scripts/css-audit.json`, `scripts/css-extraction-result.json`, `scripts/css-extraction-rerun.json`.

Các công cụ kiểm tra yêu cầu **Node.js**. Website không dùng bundler nên không có lệnh build.

Yêu cầu **Node.js 22 trở lên** (CI dùng Node.js 24). `package.json` chỉ chứa các lệnh kiểm tra, không có dependency; không cần `npm install`.

```sh
npm run check
npm run check:browser
node scripts/check-checkers.cjs
```

`npm run check` kiểm tra cú pháp script, CSS/script được liên kết, khóa kỹ năng và toàn bộ link nội bộ (bao gồm anchor). Đồng thời báo lỗi khi thiếu h1, meta description hoặc ảnh thiếu alt. Ví dụ trong `pre`, `code`, script và template được bỏ qua để không xem code mẫu là nội dung trang. Link bên ngoài không được truy cập; ảnh trang trí được phép dùng `alt=""`.

`npm run check:browser` tự dò Chrome/Chromium ở thư mục cài đặt Windows/macOS/Linux và trong PATH. Có thể chỉ định đường dẫn executable; nếu `CHROME_PATH` sai, script báo lỗi thay vì tự dùng trình duyệt khác:

```powershell
# PowerShell — thay bằng đường dẫn Chrome/Chromium trên máy bạn
$env:CHROME_PATH = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
npm run check:browser
```

```sh
# macOS/Linux — thay bằng đường dẫn executable trên máy bạn
CHROME_PATH=/usr/bin/chromium npm run check:browser
```

Workflow `.github/workflows/check.yml` chạy `npm run check` trên mỗi push và pull request. Không chạy browser check trong CI và không cần cài dependency.

**Trạng thái kiểm tra mới:** đang báo 346 trang thiếu h1 và 383 trang thiếu description, do SEO chưa được áp dụng khi chưa có URL triển khai. Không phát hiện link nội bộ hỏng hay ảnh thiếu alt. CI sẽ thất bại cho đến khi các lỗi nội dung này được xử lý; không bỏ qua hoặc hạ mức các lỗi này. Danh sách chi tiết nằm trong `scripts/check-results.json`.

### Tách JavaScript bài học

```sh
node scripts/extract-js.cjs --dry-run
node scripts/extract-js.cjs
```

`--dry-run` chỉ phân tích và in báo cáo, không ghi file. Script nhận diện các nhóm script theo SHA-256; phần không được xác minh giữ nguyên. Các trang đã chuyển đổi được bỏ qua khi chạy lại. `scripts/lesson-js-manifest.json` ghi hash các nhóm gốc, danh sách trang và hash của asset; script không tự ghi đè `lesson.js` nếu asset đã được sửa.

Phân tích 345 chapter cho thấy 11 nhóm script gốc: một bootstrap theme 244 byte lặp trên mọi trang và 10 nhóm script cuối trang. Phần sidebar, progress, search, copy và quiz giống nhau sau khi loại khác biệt định dạng/comment; khác biệt ở theme và highlighter được giữ nguyên. Nhóm thuật toán có hàm theme ghi đè và dùng `body`; lần tách này giữ nguyên hành vi cũ.

`lesson.js` được tải đồng bộ ở hai vị trí (setup / finish), bao quanh highlighter inline để giữ thứ tự chạy cũ. Không thêm `async` hoặc `defer` vào hai thẻ này. Bootstrap theme nhỏ ở đầu trang vẫn inline để tránh nháy màu; highlighter theo ngôn ngữ, nội dung và đáp án quiz trong `data-answer` vẫn ở từng chương.

Đã chuyển **345 file**, không bỏ qua file nào ở lần đầu. JS inline giảm từ **1.997.212** xuống **428.033 byte**; asset chung **8.372 byte**. Tổng HTML cộng asset mới giảm **1.505.112 byte**. Chạy lại: 0 thay đổi, 345 file được bỏ qua vì đã tách. Báo cáo: `scripts/js-extraction-result.json`, `scripts/js-extraction-rerun.json`.

### Test thủ công ba trang bài học

Mở bằng Live Server hoặc server localhost để kiểm tra clipboard:

1. `python/chapter001.html`: đổi sáng/tối rồi tải lại; lọc sidebar với từ khóa có/không có kết quả và xóa từ khóa; chọn đáp án quiz rồi chấm điểm.
2. `react/chapter01.html`: bấm **Copy** trên một đoạn code, dán vào trình soạn thảo để đối chiếu; kiểm tra màu cú pháp và quiz. Tải lại để thử bộ đáp án khác sau khi chấm.
3. `cpp/chapter01.html`: kiểm tra màu cú pháp C++, Copy và quiz; cuộn xuống để kiểm tra thanh tiến độ và nút về đầu trang. Thu màn hình xuống khoảng 375 px, mở/đóng menu sidebar và kiểm tra điều hướng chương trước/sau.

Trên cả ba trang, mở Console để kiểm tra lỗi JavaScript và Network để xác nhận `lesson.js` tải thành công. Theme, kết quả quiz, copy và điều hướng phải hoạt động như trước khi tách.

```sh
node scripts/check-ui.cjs
node scripts/browser-check.cjs
```

- `check-ui.cjs` kiểm tra cú pháp script inline và `catalog.js`, liên kết CSS chung, liên kết/anchor ở trang chủ và danh mục, cùng khóa kỹ năng của các role.
- `browser-check.cjs` tự dò Chrome/Chromium hoặc dùng `CHROME_PATH`, mở server cục bộ tạm thời và kiểm tra responsive/tương tác. Ảnh chụp lưu ở `artifacts/`, được bỏ qua bởi Git.

### Kết quả kiểm tra gần nhất

Sau lần chỉnh danh mục thành bốn khu vực:

- **384 trang HTML**, **742 script inline** cùng `assets/lesson.js`: không phát hiện lỗi cú pháp; CSS chung và các liên kết được kiểm tra đều tồn tại. Các kiểm tra mới về h1/description hiện báo lỗi như nêu ở trên.
- **6 trang đại diện × 3 độ rộng** (375, 768, 1440 px): không phát hiện tràn ngang hoặc exception JavaScript, nền trắng mặc định hiển thị đúng.
- Cả **5 role** hiển thị đúng bộ kỹ năng; tìm kiếm khi chọn role, trạng thái trống và nút bỏ bộ lọc đều đạt.
- Điều hướng trang chủ → danh mục, bookmark cũ, menu/focus và chuyển sáng/tối đều đạt.
- Sau tách JS, kiểm tra theme, sidebar, search, progress, highlighter và chấm quiz trên Python, React, C++ và thuật toán đều đạt. Copy được kiểm tra bằng clipboard giả lập ở trang có nút Copy; cần test dán vào trình soạn thảo để xác minh quyền clipboard thực tế.

Các kiểm tra trình duyệt lấy mẫu trang chủ, danh mục, mục lục React, bài Python đầu tiên, mục lục Full Stack và quiz tổng hợp. Chưa kiểm tra thủ công toàn bộ bài học, mọi chức năng quiz hoặc thiết bị vật lý.
