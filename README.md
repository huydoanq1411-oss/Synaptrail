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

### Đề xuất mở rộng MySQL và Docker — chưa sửa catalog

Xem [phân tích tám kỹ năng trong Full Stack](reports/course-proposals/README.md). Đề xuất giữ các chương Full Stack làm nội dung nhập môn/tích hợp; ưu tiên viết khóa MySQL và Docker độc lập đủ sâu trước khi đổi catalog.

- MySQL: [mục lục 10 chương](reports/course-proposals/mysql/index.html), [chương 1 mẫu](reports/course-proposals/mysql/chapter01.html).
- Docker: [mục lục 8 chương](reports/course-proposals/docker/index.html), [chương 1 mẫu](reports/course-proposals/docker/chapter01.html).

Chỉ chương 1 có bài; các phần còn lại là đề cương. Bản HTML dùng style và chấm quiz hiện có, nằm trong `reports/`, có `noindex` và được loại khỏi script tạo sitemap. `courses.html` và các chương Full Stack giữ nguyên. Chưa kiểm thử runtime SQL/Docker vì không có MySQL client và Docker Engine không chạy; không tự cài/bật dịch vụ. Chờ duyệt phạm vi và chương mẫu trước khi viết tiếp.

### Khung chương chuẩn — đã duyệt

1. **Mục tiêu học:** kiến thức đầu vào và điều người học làm được sau bài.
2. **Vấn đề thực tế:** tình huống cụ thể để giải thích vì sao cần kiến thức này.
3. **Lý thuyết nền:** khái niệm, điều kiện áp dụng và giới hạn.
4. **Ví dụ từng bước:** chương trình hoàn chỉnh, giải thích dòng code, lệnh chạy và kết quả dự kiến.
5. **Lỗi thường gặp:** nguyên nhân, cách tránh và tình huống biên.
6. **Bài tập dễ/vừa/khó:** đầu vào, yêu cầu và tiêu chí kiểm tra.
7. **Tóm tắt:** những điểm cần nhớ.
8. **Năm câu quiz:** kiểm tra hiểu biết, dùng cơ chế chấm điểm/tiến độ hiện có.

Bản mẫu đã duyệt ở [Java — Chương 17: HashMap & HashSet](java/chapter17.html), 1.033 từ diễn giải (không tính khối code), hai chương trình Java hoàn chỉnh. Giữ ID `s17`, quiz `q17`, kết quả `result-q17`, sidebar, link và style hiện có. Nội dung kỹ thuật đối chiếu tài liệu Java API được dẫn ở cuối bài.

Kiểm tra ví dụ bằng JDK 9 trở lên (biên dịch với `--release 8`), không dùng Java Runtime đơn lẻ:

```sh
node scripts/check-java17.cjs
```

Script đọc code trực tiếp từ HTML, biên dịch hai ví dụ và đối chiếu stdout; đặt `JAVA_HOME` hoặc `SYNAPTRAIL_TEST_JDK` nếu JDK chưa có trong PATH. File tạm nằm trong `artifacts/java-chapter17/`. Sau khi bản mẫu được duyệt, các chương Java được nâng cấp lần lượt, mỗi đợt ba chương.

**Đợt 1 — chương 1–3:**

| Chương | Nội dung | Từ diễn giải, không tính code và quiz |
| --- | --- | ---: |
| [1](java/chapter01.html) | Giới thiệu Java, mã nguồn → bytecode → JVM | 1.063 |
| [2](java/chapter02.html) | Cài JDK, kiểm tra môi trường và lựa chọn JDK của IDE | 1.049 |
| [3](java/chapter03.html) | Hello World, giải thích từng dòng, print/println và debug | 1.064 |

Mỗi chương có năm câu quiz và bài tập ba mức. Giữ ID `s1`/`s2`/`s3`, quiz `q1` và kết quả `result-q1` cũ; bổ sung `q2`/`q3` cho hai chương trước đây chưa có quiz. Không đổi đường dẫn, sidebar, điều hướng hoặc stylesheet. Mã Java dùng ví dụ hoàn chỉnh với class/main; lệnh terminal không nhúng comment khác cú pháp shell.

```sh
node scripts/check-java-batch.cjs
```

Script biên dịch và chạy bốn ví dụ của đợt 1, đối chiếu stdout, chạy các lệnh terminal trong bài và kiểm tra độ dài/năm câu quiz. Dùng JDK 21 với `--release 8` để xác nhận phần mã Java tương thích Java 8. Đợt tiếp theo là chương 4–6; chưa sửa các chương này.

Kết quả bản mẫu: đã biên dịch bằng JDK 21 với `--release 8` và chạy cả hai chương trình; stdout khớp kết quả trong bài. Kiểm tra trình duyệt của Java 17 đạt cho năm câu quiz, theme, Copy và tiến độ học. Kiểm tra tĩnh không phát hiện lỗi link mới; 346 lỗi thiếu h1 và 383 lỗi thiếu description từ trước vẫn còn.

- **Nền tảng:** HTML/CSS, JavaScript, thuật toán và cấu trúc dữ liệu.
- **Ngôn ngữ:** Python, Java, C++, TypeScript và kỹ năng ngôn ngữ/kỹ năng mềm.
- **Frontend:** React, Bootstrap, SASS/SCSS.
- **Full Stack:** Git, MySQL/ORM, GraphQL, Socket.IO, NestJS, Docker và dự án cuối khóa.
- **AI:** Machine Learning, LLM, RAG, prompt engineering và AI agents.
- **Hệ thống:** System Design và bảo mật ứng dụng.
- **Ôn tập:** quiz, flashcards, glossary, cheatsheet, bài tập và tài liệu API.

Bạn có thể học từng kỹ năng độc lập hoặc theo nhóm kỹ năng của một role. Kết hợp bài học với bài tập và dự án để củng cố kiến thức.

## Giao diện và điều hướng

### Quiz mẫu — chờ duyệt 5 chương đầu của ba môn

Đã bổ sung **75 câu** cho chương 1–5 của **Java, C++ và thuật toán**. Mỗi chương có 2 câu nhớ khái niệm, 2 câu áp dụng/đọc code và 1 câu tìm lỗi; mỗi câu có 4 lựa chọn, giải thích vì sao từng lựa chọn đúng/sai. Các chương nhập môn chưa có code dùng tình huống áp dụng trong phạm vi nội dung bài. Không có câu sử dụng kiến thức ngoài chương trong đợt này.

Giải thích ẩn trước khi chấm và hiện sau **Chấm điểm**. `assets/quiz-feedback.js` chỉ bổ sung hiển thị và thao tác bàn phím cho các lựa chọn; việc chọn đáp án, tính điểm và lưu tiến độ vẫn dùng `lesson.js`/`progress.js` hiện có. Quiz dùng `data-answer`, `data-idx`, `gradeQuiz`, `qN` và `result-qN` như trước. Không bật theo dõi tiến độ C++ hoặc thuật toán trong đợt quiz này.

Đọc [toàn bộ câu hỏi và giải thích để duyệt](reports/quiz-first-five/review.md). Nguồn biên soạn và căn cứ nội dung từng câu ở `scripts/quiz-first-five-data.cjs`. Không sửa các chương sau chương 5 trước khi duyệt.

```sh
node scripts/check-first-five-quizzes.cjs
node scripts/apply-first-five-quizzes.cjs --dry-run
```

Kiểm tra cấu trúc đạt: 15 chương, 75 câu, 300 lựa chọn, 75 phần giải thích ẩn. Kiểm tra trình duyệt đạt cho cả 15 trang: chọn bằng Enter, điểm 5/5 và 0/5, bốn lựa chọn/câu, giải thích chỉ hiện sau chấm. Chạy lại generator không đổi trang. Các ví dụ Java chương 1–3 vẫn biên dịch/chạy đúng; lỗi SEO trước đây vẫn chưa xử lý.

### Bản thử theo dõi tiến độ — Java

Tính năng mới chỉ bật cho **31 chương Java**, mục lục Java và thẻ Java trong danh mục để duyệt trước khi triển khai các môn khác. Không có script áp dụng các môn còn lại ở giai đoạn này.

- Bấm **Đánh dấu đã học** để đánh dấu hoặc bỏ đánh dấu chương; trạng thái được giữ khi tải lại. Sidebar và mục lục hiển thị dấu ✓ cho chương đã học.
- Khi bấm **Chấm điểm**, lưu điểm quiz cao nhất theo phần trăm 0–100. Chấm quiz không tự đánh dấu đã học. Phần trăm hoàn thành môn chỉ tính số chương được đánh dấu / 31.
- Thanh tiến độ Java xuất hiện ở trang chương, mục lục và danh mục khóa học.
- **Xuất tiến độ** tải file JSON. **Nhập tiến độ** gộp bản ghi, giữ toàn bộ bản có `updatedAt` mới hơn; nếu cùng thời gian, giữ bản hiện có. Quy tắc nhập này có thể thay điểm bằng điểm trong bản mới hơn. File sai cấu trúc, điểm ngoài 0–100 hoặc file trên 5 MB bị từ chối mà không sửa dữ liệu.
- **Reset tiến độ** yêu cầu xác nhận trước khi xóa toàn bộ key tiến độ (kể cả các môn trong file đã nhập). Không xóa theme hoặc dữ liệu quiz khác.
- Lưu bằng key `synaptrail-progress`, dạng `{course: {chapter: {done, quizScore, updatedAt}}}`. Ví dụ mã môn `java`, chương `chapter01`, thời gian ISO 8601. Nếu localStorage bị chặn hoặc hết dung lượng, hiển thị lỗi và không báo đã lưu thành công.

Mã nguồn: `assets/progress.js`, `assets/progress.css`. Dữ liệu chỉ nằm trong trình duyệt, không đồng bộ tài khoản; xuất file trước khi đổi trình duyệt hoặc xóa dữ liệu website. Các tab cùng origin cập nhật qua sự kiện storage.

Để duyệt: mở `java/chapter01.html`, đánh dấu và chấm quiz; tải lại, mở `java/index.html` và `courses.html` để kiểm tra dấu ✓ và thanh %. Xuất file, bỏ đánh dấu, nhập lại để kiểm tra gộp theo thời gian; thử Reset và chọn Hủy trước khi xác nhận xóa. Sau khi xóa, nhập file xuất để khôi phục.

`node scripts/check-progress.cjs` kiểm tra lưu/tải, giữ điểm cao nhất, gộp nhập, JSON sai, prototype, reset và localStorage bị chặn/hết dung lượng. Kiểm tra trình duyệt đã đạt cho đánh dấu, quiz, sidebar, mục lục, danh mục, nhập đúng/sai, hủy reset và reset.

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
│   ├── code-highlighter.js # Tokenizer code một lượt, bảo toàn văn bản gốc
│   ├── home.css            # Bố cục trang chủ
│   ├── courses.css         # Bố cục danh mục và các box
│   └── catalog.js          # Chọn role, lọc kỹ năng và tìm kiếm
├── ai-engineer/            # AI Engineer, LLM/RAG, prompt và agent
├── cpp/                    # C++
├── fullstack-js/           # Redirect c?c URL c?; kh?a ??c l?p n?m ? git/, nestjs/, docker/?
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

Tiêu đề chương được chuẩn hóa thành **Chương N — Tên bài** trên 360 bài (345 chapter và 15 bài ML), đồng bộ tab, tiêu đề chính, mục lục/sidebar và điều hướng trước/sau. Chạy `node scripts/normalize-chapter-titles.cjs --dry-run` để kiểm tra thay đổi dự kiến; chạy lại sau chuẩn hóa không đổi file. Các mục nội dung trong từng chương giữ nguyên tên.

Đề xuất đổi thư mục đang **chờ duyệt**, chưa áp dụng: `html-css-nnlt` → `html-css`, `javascript-nnlt` → `javascript`, `Quiz_and_other` → `practice`. Xem [bảng đề xuất](reports/consistency/proposal.md) và [mọi dòng tham chiếu](reports/consistency/references.md). Sau khi được duyệt mới di chuyển thư mục và tạo redirect cho các URL cũ.

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

### Kiểm tra tô màu code và Copy

Đã tái hiện lỗi URL CDN của `fullstack-js/chapter05.html`: highlighter regex cũ nhận `//` trong chuỗi là comment, rồi sửa chính markup span vừa tạo. Bản mới dùng tokenizer một lượt trong `assets/code-highlighter.js`, nhận diện ngôn ngữ theo nhãn file/khối code hoặc `data-language`/class `language-*`.

- Chuỗi được đọc trọn token; regex không chạy lên markup đã chèn. Mỗi token được escape `&`, `<`, `>` trước khi tạo span.
- JS/Java/C++: `//` chỉ là comment ngoài chuỗi và không ngay sau `:`; hỗ trợ `/* */`. HTML dùng `<!-- -->`; Python/Bash dùng `#`; CSS dùng `/* */`. URL và dấu comment trong chuỗi được giữ nguyên.
- Copy dùng `textContent`, không dùng `innerText`/`innerHTML`. Kiểm tra payload gửi cho clipboard bằng stub, đối chiếu với văn bản gốc trước khi tô màu; không kiểm tra quyền clipboard hệ điều hành trong lượt này.
- Sidebar Full Stack đếm các URL chương khác nhau trong danh sách thực tế; hiện hiển thị **22 chương**, không còn nhãn 26 cố định.

```sh
node scripts/check-highlighter.cjs
node scripts/check-highlight-browser.cjs
```

14 ca tokenizer đạt. Kiểm tra trình duyệt đạt trên Full Stack chương 5 (CDN), Python chương 8 (comment, thêm fixture URL/# trong chuỗi), Java chương 1, C++ chương 3 và Security chương 5. Văn bản tất cả khối code không đổi sau tô màu; các nút Copy truyền đúng nội dung. Fixture HTML/JS/Python/Bash/CSS đều giữ nguyên textContent và phân loại comment ngoài chuỗi. Kết quả trước/sau nằm trong `artifacts/highlight-before.json` và `artifacts/highlight-after.json`.

`node scripts/migrate-highlighter.cjs` chuyển highlighter inline sang module chung; chạy lại không sửa trang đã chuyển. Các hàm legacy còn được nội dung động gọi trong ML/ôn tập chỉ ủy quyền cho tokenizer, không giữ pipeline regex cũ. Nội dung code trong HTML không bị thay đổi.

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

`lesson.js` được tải đồng bộ ở hai vị trí (setup / finish), bao quanh highlighter inline để giữ thứ tự chạy cũ. Không thêm `async` hoặc `defer` vào hai thẻ này. Bootstrap theme nhỏ ở đầu trang vẫn inline để tránh nháy màu; highlighter được chuyển sang `assets/code-highlighter.js`. Nội dung và đáp án quiz trong `data-answer` vẫn ở từng chương.

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

### Bản thử tách Bootstrap

- Mục lục mới: [Bootstrap](bootstrap/index.html), hai chương đánh số 1–2.
- URL cũ fullstack-js/chapter05.html và chapter06.html chuyển hướng, giữ fragment bookmark.
- Sidebar và nút trước/sau chỉ điều hướng trong Bootstrap; ID nội dung và quiz được giữ nguyên.
- Catalog tách Bootstrap khỏi SASS/SCSS; SASS tạm dùng bài cũ cho đến khi duyệt tách toàn bộ.
- Xem kế hoạch: `node scripts/split-fullstack.cjs --dry-run`; áp dụng bản thử: `node scripts/split-fullstack.cjs`. Chạy lại không thay đổi file đã chuyển.
- Các khóa còn lại và panel role chưa triển khai, chờ duyệt diff Bootstrap.

### Kh?a ri?ng v? l? tr?nh role

- ?? t?ch fullstack-js th?nh Git (2), TypeScript (2), Bootstrap (2), SASS (2), MySQL (3), ORM (2), GraphQL (2), Socket.IO (1), NestJS (2), Docker (3 ch??ng). M?i kh?a c? th? m?c, m?c l?c, sidebar v? ?i?u h??ng ri?ng, ??nh s? t? 1.
- D? ?n cu?i kh?a: [Task Manager](projects/fullstack-js.html), ch? thu?c Project Ideas. C?c kh?a ng?n c?n m? r?ng sau; l?n n?y gi? nguy?n n?i dung v? quiz.
- fullstack-js gi? index.html chuy?n t?i danh m?c v? 22 redirect ch??ng, gi? anchor bookmark.
- B?m role m? panel tr?n tablet/desktop, modal tr?n ?i?n tho?i ?600px. C?c box k? n?ng c? ?nh, th? t? v? s? ch??ng, d?n t?i m?c l?c ri?ng. Khu Skill-based v?n ??y ?? 22 kh?a, chia n?m c?m.
- Chia s? v? d?: courses.html#role=ai-engineer. Esc ho?c ??ng tr? focus v? role; Xem t?t c? k? n?ng ??a v? danh m?c.
- ?nh SVG n?n nh?t teal/t?m trong assets/img; ?nh l?i d?ng assets/img/default.svg. T?m ki?m kh?ng d?u ho?t ??ng ??c l?p v?i role.
- D? li?u role ch? s?a trong object roles c?a assets/catalog.js.
- Migration: node scripts/split-courses.cjs --dry-run; b? --dry-run ?? ?p d?ng. Ch?y l?i: 0 thay ??i.
- Ki?m tra: node scripts/check-role-browser.cjs (CHROME_PATH t?y ch?n), node scripts/check-ui.cjs. ?? ki?m tra 5 role ? 375/768/1440px: kh?ng tr?n ngang, kh?ng l?i JS, modal/panel, Esc/focus, URL v? t?m ki?m kh?ng d?u ??t. check-ui c?n l?i SEO c? s?n; kh?ng c? link h?ng.

### Giao di?n k?nh t?i teal

Trang ch? v? danh m?c d?ng assets/glass.css: n?n t?i teal, card k?nh m?, ?nh SVG c? b?ng ??, vi?n c?nh tr?n m? t? gi?a khi hover/focus. Danh m?c chuy?n m?c ??nh sang theme t?i m?t l?n; n?t theme v?n ho?t ??ng. Ch? ?? gi?m chuy?n ??ng ???c t?n tr?ng. Ki?m tra trang ch? 375/768/1440px v? 15 tr??ng h?p role: kh?ng tr?n ngang/l?i JS.

Giao di?n k?nh c?p nh?t: n?n t?i c? ???ng n?i SVG (assets/img/neural-trails.svg), card c? l?p s?ng v? b?ng ??; trang ch? c? c?a s? code v? terminal trang tr?. C?c l?p trang tr? kh?ng nh?n t??ng t?c; responsive v? ch? ?? gi?m chuy?n ??ng ???c gi?.

Card danh m?c c?p nh?t d?ng ngang nh? g?n (kho?ng 126px chi?u cao), ?nh minh h?a n?n trong su?t thay cho banner l?n; 5/3/2 c?t tr?n desktop/tablet/mobile. Role c? ?? nghi?ng nh? tr?n desktop; ch? ?? gi?m chuy?n ??ng kh?ng nghi?ng. Ki?m tra responsive v? 15 t??ng t?c role ??t.

Card k?nh tinh ch?nh: n?n xanh ?en pha t?m, b? m?t trong su?t h?n; hover n?ng 4px v? ph?ng nh? minh h?a v?i easing 420ms, gi?m rung do xoay card. Kh?ng ?p d?ng hover n?ng tr?n thi?t b? c?m ?ng; prefers-reduced-motion t?t chuy?n ??ng.

### M?u th?ng nh?t cho c?c trang kh?a h?c

assets/ui.css ??ng b? b?ng m?u xanh ?en pha t?m v? teal cho m?c l?c, b?i h?c, d? ?n v? c?ng c?; 390 trang chuy?n m?c ??nh sang t?i, v?n t?n tr?ng l?a ch?n theme ?? l?u. M?u code, sidebar, bi?u m?u v? quiz theo b?ng m?u chung. Ki?m tra node scripts/check-colors-browser.cjs: 13 trang ??i di?n ??t, chuy?n s?ng/t?i ho?t ??ng. Ki?m tra role/responsive: 15 tr??ng h?p ??t; check-ui c?n 728 l?i SEO s?n c?, kh?ng l?i ch?c n?ng/link/script m?i.
