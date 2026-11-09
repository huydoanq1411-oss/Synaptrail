# Ngữ cảnh Synaptrail

## 2026-11-09 — Chạy local bằng npm

`npm run dev` gọi `node scripts/dev-server.cjs`, dùng module Node có sẵn (>=22), không dependency/build hoặc backend nghiệp vụ. Server phục vụ tệp static từ gốc dự án, mặc định `127.0.0.1:8000`, chỉ GET/HEAD; thư mục dùng index.html, không liệt kê thư mục. Chặn tệp/thư mục ẩn, artifacts, node_modules và đường dẫn/symlink ra ngoài gốc. Không xác thực, không dành cho hosting production; không kết luận quyền riêng tư của bản đã deploy từ server local này. Synaptrail-main/ vẫn có thể được phục vụ local theo đường dẫn của nó, không bị loại để che lỗi.

Chạy từ gốc: `npm run dev`, mở http://localhost:8000/, Ctrl+C để dừng. Có thể chọn cổng qua biến PORT (PowerShell: `$env:PORT=8001; npm run dev`); không hỗ trợ đổi host/LAN trong script này. Không cần npm install/Python. Sửa file rồi reload thủ công; no-store tránh cache cũ. Không chạy generator hoặc ghi dữ liệu tiến độ; tiến độ vẫn phụ thuộc origin/profile trình duyệt.

## 2026-11-09 — Nguồn Docker và phạm vi kiểm tra

Docker bài 1: người dùng chọn HTML mở rộng docker/chapter01.html làm bản chuẩn khi giải quyết lệch nguồn. assets/roadmaps/docker-source.json đã đồng bộ riêng bài 1; bản Node.js cũ được giữ trong docs/reference/docker-chapter01-node-legacy.json, chỉ tham khảo. scripts/check-lesson-sync.cjs so sánh token nội dung/markup đã chuẩn hóa (giữ cấu trúc, anchor, route, code và thụt dòng; bỏ khác biệt định dạng và class/style). Tokenizer dành cho fragment bài học đang có, không thay thế HTML parser tổng quát. node scripts/check-lesson-sync-checks.cjs kiểm tra chính cơ chế này. check-ui gọi checker nguồn/output; migrate-course-roadmaps kiểm tra đề xuất bài 1 trước khi ghi, kể cả chế độ lấy từ revision. Không chạy generator để kiểm chứng.

check-ui vẫn quét tất cả HTML và trả exit 1 nếu có lỗi; JSON thêm groups.main/nested/reports, giữ nguyên errors đầy đủ. Synaptrail-main/ là cây website lồng cũ, không phải đích sửa; chưa thấy cấu hình phát hành chứng minh đó là bản lưu hoặc đang được phục vụ. Không đổi chính sách CI trước khi chủ dự án xác nhận vai trò. Workflow hiện có vẫn chạy npm run check.

check-first-five-quizzes dùng fixture thuật toán hiện hành ở scripts/quiz-first-five-algorithm.cjs; dữ liệu bốn lựa chọn lịch sử trong quiz-first-five-data.cjs được giữ nguyên cho công cụ tác giả cũ, không dùng nó để ghi đè bài hiện hành. Checker đối chiếu 15 bài/75 câu và chạy ví dụ JavaScript đầu khóa; điều này không thay thế biên dịch Java/C++.


Cập nhật: 2026-11-01. Áp dụng có chọn lọc Vibe Web Playbook 1.4.0. Quy tắc riêng: [AGENTS.md](../AGENTS.md); yêu cầu: [SPEC](SPEC.md); kết quả có ngày: [STATUS](STATUS.md).

## Sản phẩm và phạm vi

Website tự học lập trình tiếng Việt: chọn role nghề nghiệp/kỹ năng, đọc bài, làm quiz và lưu tiến độ cá nhân. Người dùng mô tả dự án là repo private dùng để học; chưa xác minh quyền truy cập hosting. Role trong catalog là hướng nghề nghiệp, không phải quyền tài khoản.

Hồ sơ **static**: các luồng đã đọc chạy trong trình duyệt, chưa có nhu cầu bắt buộc về nghiệp vụ server, dữ liệu đa người dùng, giao dịch hoặc bí mật phía server. Số trang không quyết định hồ sơ. Chưa có số liệu tải, ngân sách hay mục tiêu hiệu năng được chốt; chưa kết luận khả năng chịu tải. Đánh giá lại khi thêm tài khoản, đồng bộ, dữ liệu nhạy cảm hoặc tích hợp ngoài.

Lát hiện tại: kiểm HTTP thật các ví dụ Express chương 23/24 sau các lát nâng nội dung Full Stack. Express 5 được cài riêng trong artifacts/http-integration-20261101, không thuộc dependency hoặc backend của website. Chi tiết yêu cầu và kết quả có ngày ở SPEC/STATUS; các lát J-01/J-03 là lịch sử.

## Bảy phần kỹ thuật

| Phần | Quyết định | Bằng chứng và giới hạn |
| --- | --- | --- |
| Frontend | Cần | HTML/CSS/JS; `assets/catalog.js` (`search/open/close`), `roadmap.js`, `algorithm-pages.js` (`renderStatus/showQuiz`). Có implementation; chưa nghiệm thu toàn bộ. |
| Backend | Không áp dụng hiện tại | Không thấy backend sản phẩm trong phạm vi đọc. Server trong `scripts/browser-check.cjs` chỉ phục vụ test. Bài học backend không phải backend của website. |
| Database | DB server không áp dụng; lưu tiến độ cần | `assets/progress.js`: `validate/createStore/importData/reset`, localStorage và JSON xuất/nhập. Không đồng bộ thiết bị; không dùng để giữ bí mật. |
| API | API sản phẩm không áp dụng hiện tại | Luồng đã đọc dùng dữ liệu tĩnh và API trình duyệt. Free APIs là nội dung học; chưa kiểm chứng mọi ví dụ gọi dịch vụ trong giáo trình. |
| Xác thực/phân quyền | Không áp dụng cho tự học cá nhân | Chưa có tài khoản được xác nhận. Nếu cần hạn chế website public phải đánh giá quyền truy cập riêng. |
| Hosting | Local cần; public hoãn | Có hướng dẫn local; CI chỉ kiểm tra tĩnh, không chứng minh deploy. Chưa biết host/URL/quota/rollback production. |
| Domain/DNS/HTTPS | Hoãn | `scripts/seo-config.json` có `baseUrl` rỗng; chưa xác minh domain, DNS, HTTPS hoặc chủ tài khoản. |

## Công nghệ và cấu trúc

- HTML/CSS/JS thuần, không build. `package.json` không khai báo dependency; Node >=22 cho checker. Môi trường chạy ở phiên đánh giá: Node v24.21.0, Windows/PowerShell.
- Three.js 0.160.0 nằm trong `assets/vendor/three/`, có README và LICENSE. Theo loader/tài liệu vendor, import qua HTTP(S) khi điều kiện WebGL/effect phù hợp; `file://` dùng fallback. Chưa kiểm chứng WebGL runtime trong phiên tích hợp tài liệu.
- `index.html`: trang chủ; `courses.html`: catalog; `assets/catalog.js`: dữ liệu 22 kỹ năng và 5 role, tìm kiếm không dấu và panel/modal. Tìm kiếm hiện độc lập với role đang mở.
- Theme catalog được xác định một lần trong head của `courses.html`: chỉ chấp nhận light/dark từ key hiện có, mặc định tối. Cờ `synaptrail-glass-design` được ghi best effort riêng, không thay theme; initializer cuối trang chỉ cập nhật icon. Không chuyển toàn bộ theme code sang asset chung trong lát này.
- Trang chủ nạp đồng bộ `assets/theme-init.js` trước CSS để đọc key `synaptrail-theme`; chỉ nhận light/dark, mặc định tối khi thiếu/sai/bị chặn và không ghi storage. Từ mẫu 2026-11-04, bố cục và màu sáng/tối nằm trong `assets/home.css`, dùng `tokens.css`; trang chủ không còn nạp glass.css, refresh.css hoặc home-theme.css. Mạng hạt Canvas 2D dùng `particle-network.css`/`.js`, tách khỏi bản đồ 3D. Các trang khác giữ theme hiện có. Kết quả kiểm thử có ngày ở STATUS.
- `roadmap/`, `<khóa>/index.html`: lộ trình; `<khóa>/chapter*.html`: bài; `<khóa>/quiz.html`: quiz riêng ở các khóa đã chuyển đổi. Giữ các URL/anchor hiện có, không suy luận mọi bài dùng cùng tên file.
- `assets/roadmaps/<khóa>.js`: sơ đồ; `<khóa>-source.json`: nội dung nguồn ở các khóa đã chuyển; `<khóa>-quiz.js`: dữ liệu quiz; `course-structure.json`: nhóm/nhánh. Thuật toán có dữ liệu và script sync riêng. Phải đọc script sinh và đối chiếu từng khóa trước khi sửa nguồn hoặc HTML; chưa audit đồng bộ toàn bộ nguồn với output.
- Full Stack từ 2026-11-04: `roadmap/fullstack-js.html` và `fullstack-js/index.html` là cùng cây liên kết HTML tĩnh cho Frontend/Backend/DevOps; không nạp progress.js hoặc roadmap.js. `assets/fullstack-resources.js` chỉ đổi theme và vẽ đường nối; `assets/fullstack.css` giới hạn kiểu riêng. `fullstack-js/tai-nguyen.html` chứa tài liệu chính thức và checkpoint. `assets/roadmaps/fullstack-js.js` giữ cả node mới và node cũ có cờ legacy để trang chủ đề cũ tiếp tục hoạt động. Source JSON/quiz cũ vẫn là nguồn bài cũ, không phải nguồn đầy đủ của cây mới; không chạy generator toàn khóa để ghi đè cây. Script tác giả có dry-run của lát này nằm trong artifacts/fullstack-tree-20261104/update.cjs.
- `assets/algorithm-pages.js`, `algorithm-topic.js`, `roadmap.js`, `progress.js`: tương tác dùng chung; `ui.css`, `tokens.css` và các stylesheet theo trang: giao diện. Một số trang vẫn còn inline.
- `Quiz_and_other/`: công cụ ôn tập; `projects/`: tài liệu dự án, không chứng minh ứng dụng đã triển khai; `reports/`: báo cáo và mẫu, không mặc định là nội dung hoàn chỉnh.
- `Synaptrail-main/`: bản website lồng, giữ nguyên ngoài phạm vi sửa. `check-ui` hiện quét cả bản này.

- Thuật toán từ 2026-11-05: nội dung 23 bài và quiz nằm trong assets/roadmaps/thuat-toan.js và thuat-toan-quiz.js; trang thuat-toan/tai-lieu-ctdlgt.html đối chiếu sáu chương UTH, bản Markdown nguyên byte ở thuat-toan/Tai_lieu_CTDT_GT.md. Công cụ tác giả có --dry-run và --sample trong artifacts/ctdlgt-20261105/update.cjs; không cần chạy để phục vụ site. Không dùng checker thuật toán cũ có giả định đúng 12 quiz làm bằng chứng cho dữ liệu mới; harness riêng kiểm theo 23 bài.

## Nguồn chuẩn và code sinh tự động

Xác minh ngày 2026-11-09 bằng đọc code và kiểm tra chỉ đọc. Website phục vụ HTML/CSS/JS có sẵn; không cần chạy generator để chạy web. Không có một nguồn hoặc lệnh build duy nhất tái tạo an toàn mọi trang hiện tại. Các lệnh dưới đây được xác minh từ code, **không được thực thi sinh trang trong lượt này**. Không coi comment “Generated” là bằng chứng output hiện tại còn khớp template.

### Nội dung, mã giao diện và nơi sửa tiếp

| Phần | Nguồn chuẩn và bằng chứng | Logic sinh → đầu ra/phạm vi ghi đè | Nơi sửa tiếp |
| --- | --- | --- | --- |
| Trang chủ, catalog, công cụ ôn tập, trang dự án | HTML hiện tại: index.html, courses.html, Quiz_and_other/*.html, projects/*.html; code runtime ở assets/*.js và CSS dùng chung. Không thấy pipeline build các trang này trong package.json:8–14 hoặc workflow. Đây là đích sửa trực tiếp hiện tại, không khẳng định chưa từng được script tạo. | Các script migration bên dưới vẫn có thể ghi các trang này. Catalog có dữ liệu/logic assets/catalog.js; không có lệnh tái sinh toàn trang đã chứng minh bảo toàn bản hiện tại. | Sửa HTML hoặc asset đang được trang nạp; giữ thay đổi sẵn có. Không chạy upgrade-ui để tái tạo catalog. |
| 22 khóa có JSON nguồn | assets/roadmaps/<khóa>-source.json: lessons gồm content, title, summary, questions, ids, words; course-structure.json giữ nhóm/nhánh. Đường đọc ưu tiên JSON: scripts/migrate-course-roadmaps.cjs:44–63. Đây là nguồn của generator, chưa phải bằng chứng toàn bộ bài đang đồng bộ. | node scripts/migrate-course-roadmaps.cjs --apply: shell()/header()/footer() trong cùng script + template roadmap/thuat-toan.html, thuat-toan/chu-de.html, thuat-toan/quiz.html → JSON nguồn được serialize lại, assets/roadmaps/<khóa>.js, <khóa>-quiz.js, từng bài không redirect, <khóa>/index.html, chu-de.html, quiz.html và roadmap/<khóa>.html (79–115). Danh sách names ở dòng 5 có 22 khóa, gồm languages; cả 22 đều có *-source.json hiện tại. Không có cờ lọc một khóa. | Sửa JSON bài cần đổi và cập nhật HTML/quiz/metadata đúng phạm vi. Trước khi dùng generator phải so sánh shell và các ngoại lệ mới; không chạy toàn khóa chỉ để đổi một bài. |
| Docker bài 1 — ngoại lệ đã có quyết định | Người dùng chọn HTML mở rộng làm chuẩn biên tập (docs/SPEC.md, mục 2026-11-09); article trong docker/chapter01.html đã chép đầy đủ vào docker-source.json:10. Xác minh thực: content bằng nguyên chuỗi article.trim(), 9.113 ký tự, 424 token chuẩn hóa; đủ sáu id. Lựa chọn dựa trên quyết định nội dung, không dựa vào độ dài/ngày sửa. | Luồng bình thường đọc docker-source.json; không đọc docs/reference/docker-chapter01-node-legacy.json. Guard migrate-course-roadmaps.cjs:55–60 so sánh nguồn đề xuất với article hiện tại trước khi ghi, kể cả --from-revision. shell ở dòng 13 không bảo toàn mọi CSS/head tùy biến của HTML. Guard bảo vệ nội dung article, không chứng minh toàn bộ trang giữ nguyên khi tái sinh. | Bảo toàn HTML mở rộng, đồng bộ riêng content/ids/words về JSON khi sửa. Giữ snapshot Node.js cũ chỉ tham khảo, không dùng làm nguồn sinh. Chạy check-lesson-sync sau sửa; nếu lệch thì đối chiếu cả hai trước khi sinh. |
| Thuật toán | assets/roadmaps/thuat-toan.js: nodes[].source.content cùng metadata/code; thuat-toan-quiz.js giữ quiz riêng. scripts/sync-algorithm-roadmap.cjs:3–9 xác nhận luồng đọc; đã đối chiếu mẫu chapter01 với HTML, chưa đối chiếu cả 23 bài trong lượt này. Markdown UTH là tài liệu tham khảo biên tập, không được runtime chuyển thành trang. | node scripts/sync-algorithm-roadmap.cjs: template inline dòng 18–42 → các node.chapter có source; serialize lại hai JS nguồn (8–9), cập nhật fallback trong roadmap/thuat-toan.html (49). Nếu source.quiz còn tồn tại, script chuyển sang quiz riêng rồi xóa thuộc tính đó trong dữ liệu ghi lại. Không có --dry-run; truyền cờ này vẫn ghi. | Sửa dữ liệu source/quiz hiện hành và HTML liên quan có kiểm soát. Công cụ sync lịch sử có thể làm mất CSS/script/head thêm về sau; phải xem diff trong bản sao trước. |
| Cây Full Stack mới | roadmap/fullstack-js.html và fullstack-js/index.html là cây liên kết tĩnh; assets/roadmaps/fullstack-js.js chứa node mới và legacy. Công cụ tác giả artifacts/fullstack-tree-20261104/update.cjs:5–11 đọc JS hiện tại, giữ node không có tiền tố fs-, định nghĩa nhóm mới trong script. JSON Full Stack cũ không mô tả đầy đủ cây mới. | node artifacts/fullstack-tree-20261104/update.cjs --dry-run chỉ in danh sách/bytes; bỏ cờ sẽ ghi bốn file: JS dữ liệu, hai trang cây và fullstack-js/tai-nguyen.html (65–67). Không có --apply guard. Migration tổng quát cũng có thể ghi đè cây này. | Sửa bốn file hiện hành nhất quán hoặc điều chỉnh công cụ tác giả trong bản sao; không lấy JSON bài cũ để tái sinh cây mới. artifacts/ bị gitignore nên công cụ này không được bảo đảm có trong checkout khác. |
| Java và các lần biên tập riêng | Java hiện dùng java-source.json → bài/quiz/roadmap theo migration; công cụ riêng Java18 là lịch sử tác giả. artifacts/java18-20261108/update.cjs:3–6 đọc snapshot before và content.html, không đọc toàn bộ nguồn đang sống. | Lệnh node artifacts/java18-20261108/update.cjs mặc định ghi preview; --apply ghi lại bài 18, JSON, java.js, java-quiz.js từ snapshot (36–42). Công cụ CTDLGT đọc content.cjs + nguồn ngoài repo, thay 23 bài và dữ liệu/tài liệu (artifacts/ctdlgt-20261105/update.cjs:4–6, 61–128); hỗ trợ --dry-run, --sample, --apply. | Không chạy lại công cụ snapshot cũ trên nguồn mới: có thể khôi phục nội dung cũ ngoài bài cần sửa. Đối chiếu dữ liệu live, chỉ cập nhật lát được giao. |

**Bootstrap và phạm vi nguy hiểm của migration:** nếu thiếu JSON hoặc có --from-revision=<revision>, script lấy các HTML trong khóa (trừ index/quiz/chu-de), có thể đọc qua git show rồi extract bằng Chrome DOMParser (migrate-course-roadmaps.cjs:15–52). Extract loại quiz, script, heading đầu và một số tương tác/style để tạo nguồn; không phải phép sao chép HTML nguyên trạng. --from-revision cần Git và revision tồn tại; thư mục làm việc hiện không có .git. Script lên kế hoạch mọi output rồi mới ghi ở cuối; không thấy lệnh xóa file trong hai generator chính, nhưng ghi đè nguyên tệp có thể làm mất thay đổi thủ công. Không áp dụng nhận định “không xóa” cho mọi script trong repo.

### Các luồng phụ có thể sửa nguồn/output

Đã đọc các điểm ghi; đây là bản đồ tác động, không phải khuyến nghị chạy lại:

| Script/lệnh từ gốc repo | Nguồn → đầu ra; chế độ thử/giới hạn |
| --- | --- |
| node scripts/split-courses.cjs --dry-run; scripts/split-fullstack.cjs là wrapper | HTML Full Stack cũ/đích redirect + bootstrap/index.html làm shell → khóa Git/TypeScript/Bootstrap/Sass/MySQL/ORM/GraphQL/Socket.IO/NestJS/Docker, redirect chương cũ, projects/fullstack-js.html, index Full Stack; rewrite link qua HTML toàn cây, có thể gồm bản lồng (split-courses.cjs:2–20). Bỏ --dry-run sẽ ghi. Là migration lịch sử, không phải nguồn bài Docker mới. |
| node scripts/apply-first-five-quizzes.cjs --dry-run | quiz-first-five-data.cjs + HTML hiện tại → quiz nhúng trong 15 bài Java/C++/thuật toán và reports/quiz-first-five/review.md; bỏ cờ sẽ ghi (1–30). Fixture tác giả cũ khác quiz thuật toán hiện hành; không dùng để tái tạo quiz mới. Fixture kiểm tra hiện hành ở quiz-first-five-algorithm.cjs được checker dùng riêng. |
| node scripts/build-card-art.cjs | assets/card-art.json + hàm vẽ trong script → assets/img/cards/<key>.svg; ghi trực tiếp, không dry-run (2–3,50). update-catalog-card-content.cjs dùng nội dung hard-code + catalog/manifest hiện tại, ghi cả courses.html và card-art.json (44–68), cũng không có dry-run. Sửa ảnh: sửa manifest/logic sinh; sửa UI: sửa HTML/asset tương ứng. |
| node scripts/build-course-proposals.cjs | Định nghĩa trong script + reports/course-proposals/<khóa>/chapter-body.txt → index.html/chapter01.html bản đề xuất MySQL/Docker; ghi trực tiếp, không dry-run (39–47). Không phải nguồn của docker/chapter01.html đang học. |
| node scripts/add-seo.cjs --dry-run | HTML + scripts/seo-config.json/--base-url → title/h1/description/favicon/canonical và sitemap.xml/robots.txt khi áp dụng (6–13,51–56). baseUrl hiện rỗng; không tự đặt domain. Walk có thể gồm bản lồng; đây là hậu xử lý, không phải template chuẩn. |
| extract-css.cjs --audit; extract-js.cjs --dry-run | Đọc nhóm inline từ chapter*.html → assets/lesson.css hoặc lesson.js và HTML/manifest tương ứng khi áp dụng. CSS dùng --audit, không phải --dry-run; JS kiểm hash manifest trước ghi (extract-css.cjs:15–25,67–68; extract-js.cjs:3–8,29–30,72–75). Walk đệ quy không loại artifacts/bản lồng; phải giới hạn trong bản sao. Runtime dùng chung sau trích xuất còn được bảo trì trực tiếp. |
| normalize-chapter-titles.cjs --dry-run; migrate-highlighter.cjs; remove-route-labels.cjs; upgrade-ui.cjs | Các công cụ hậu xử lý, không sinh từ nguồn nội dung duy nhất. Normalize có dry-run; ba công cụ sau ghi trực tiếp. upgrade-ui quét mọi HTML ngoài thư mục ẩn, gồm artifacts/reports/bản lồng, rồi sửa catalog (4–38); cần duyệt riêng, không tự chạy. migrate-highlighter còn ghi lesson.js/manifest (21–26); remove-route-labels ghi courses.html/catalog.js/role3d.js (2–22). |

Các script write-*-report.cjs tạo báo cáo từ JSON kiểm tra, không phải nguồn website học. Chưa kiểm kê mọi công cụ trong artifacts; các công cụ tác giả nêu trên chỉ được đọc, không được coi là pipeline phát hành có thể lặp lại an toàn.

### Sinh thử, diff và phục hồi

1. Trước thao tác sinh trong tương lai, chụp toàn bộ nguồn và các output theo phạm vi script, kèm hash vào vị trí ngoài cây được quét; giữ các thay đổi hiện có. Nếu có Git thật thì kiểm status/diff trước, không dùng reset/clean để bỏ thay đổi của người dùng. Hiện không có .git nên cần bản sao/snapshot; Git diff --no-index vẫn so hai tệp được.
2. Ưu tiên **bản sao cô lập** giữ cấu trúc thư mục. Với migration: node scripts/migrate-course-roadmaps.cjs --dry-run lên kế hoạch 22 khóa và vẫn ghi reports/course-roadmaps/dry-run.json, khởi chạy Chrome qua course-browser.cjs. --sample ghi đúng ba bài preview C++/Python/ML; --sample-maps ghi preview JS C++/Python/Java. Không có mẫu Docker hay lọc một khóa. --sample-maps có thể kết hợp --apply, nên không suy ra có cờ sample là an toàn. --sample tạo diff.txt mô tả, không phải diff đầy đủ: tự so toàn tệp.
3. Trong bản sao, công cụ không có dry-run (đặc biệt sync-algorithm-roadmap) chỉ được chạy sau khi chụp snapshot và xác định phạm vi; không thử bằng một cờ mà script không xử lý. Xem danh sách output, dùng git diff --no-index -- <bản-trước> <bản-sau> cho ba mẫu rồi mới xét mở rộng theo AGENTS. Chưa chạy những lệnh sinh này trong lượt xác minh.
4. Kiểm riêng Docker bằng node scripts/check-lesson-sync.cjs và node scripts/check-lesson-sync-checks.cjs; kiểm cú pháp, link bằng check-ui và kiểm nội dung/quiz/browser đúng phần thay đổi. Checker Docker chỉ so article đã chuẩn hóa (bỏ class/style), không kiểm toàn bộ head/CSS/metadata; lượt này có thêm so sánh nguyên chuỗi article nên xác nhận cả markup trong content đang giữ đủ. Không suy ra các khóa khác đồng bộ.
5. Nếu sinh sai: phục hồi **đúng các tệp** từ snapshot vừa tạo, gồm cả dữ liệu nguồn mà generator serialize lại; xem diff trước khi chép để giữ sửa đổi mới. Giữ cả hai bản nếu chưa rõ nội dung cần giữ. Không xóa tệp mới hoặc bản lưu tự động; thống kê và xin quyết định theo phạm vi được giao. Chạy lại kiểm tra sau phục hồi.

### Vai trò bản lồng và phát hành

**Synaptrail-main/ chưa xác định là bản lưu hay phần được phát hành.** Kiểm kê tên tệp/cấu hình trong cây chính và bản lồng không thấy vercel.json, netlify.toml, firebase.json, wrangler config, CNAME hoặc workflow deploy. Workflow duy nhất đã thấy là .github/workflows/check.yml:1–16 chạy npm run check; package.json không có build/deploy; seo-config.json:2 chưa có baseUrl. Tìm tham chiếu trong scripts/assets/.github/index/courses/README chỉ thấy checker/ghi nhận kiểm tra, không thấy đường nạp runtime từ bản lồng. Đây là bằng chứng về repo local, không chứng minh cấu hình trên dashboard hosting hoặc URL public.

.gitignore:1–2 chỉ bỏ .browser-check/ và artifacts/, không bỏ Synaptrail-main/. Dù được gitignore cũng không phải quy tắc loại khỏi upload của mọi host. Một host phục vụ nguyên gốc repo vẫn có thể công khai bản lồng và reports/docs. Giữ 729 lỗi trong check-ui, báo nhóm riêng; chưa loại khỏi phạm vi website. Cần cấu hình publish thực tế và URL để xác minh /Synaptrail-main/index.html cùng chính sách phục vụ thư mục. Không tự đổi CI, host hay deploy để kiểm chứng.

## Dữ liệu và khôi phục

`assets/progress.js` dùng key `synaptrail-progress`, cấu trúc `{course: {chapter: {done, quizScore, updatedAt, status?}}}`. `status` nhận `learning/done/skip`, phải nhất quán với `done`; `quizScore` trong 0–100. `update` giữ điểm cao nhất; import chọn toàn bộ bản ghi mới hơn theo `updatedAt`, có thể thay điểm bằng điểm của bản ghi đó. UI nhập giới hạn 5 MB. Reset xóa toàn bộ key sau xác nhận; không chạy với dữ liệu người dùng để kiểm thử.

Xuất JSON trước khi đổi trình duyệt/origin hoặc xóa dữ liệu. LocalStorage phụ thuộc origin/profile; không hứa chuyển dữ liệu giữa `file://`, localhost và production. `Quiz_and_other/quiz-tracker.js` có cơ chế lưu riêng, chưa đánh giá đồng bộ với tiến độ mới. Chưa có chính sách thời hạn lưu hoặc phục hồi đa thiết bị được chốt.

## Lệnh thực tế

Chạy từ gốc website. Đọc script trước mỗi lần dùng, nhất là script có ghi file.

| Việc | Lệnh/cách chạy | Bằng chứng và trạng thái |
| --- | --- | --- |
| Xem local tối thiểu | Mở `index.html` | Đã thử mẫu `file://` ở giai đoạn đánh giá; không chứng minh WebGL/clipboard HTTP. |
| Server local tùy chọn | `python -m http.server 8000` | Có trong README; chưa chạy lại ở lát tài liệu. Mở `http://localhost:8000/`, dừng Ctrl+C đúng terminal. Cần Python sẵn có. |
| Kiểm tra tĩnh | `node scripts/check-ui.cjs` hoặc `npm run check` | Đã chạy Node trước/sau; kết quả ở STATUS. Không cần npm install. |
| Kiểm tra bổ sung | `node scripts/check-progress.cjs`, `node scripts/check-highlighter.cjs`, `node scripts/check-card-images.cjs`, `node scripts/check-first-five-quizzes.cjs` | Đã chạy ở giai đoạn đánh giá; không coi đó là lần chạy của lát tài liệu. |
| Browser checker hiện có | `node scripts/browser-check.cjs` | Chưa chạy trong lát tài liệu; ghi artifact, cổng 9333 và giả định UI/quiz cũ cần rà. Chrome được dò hoặc lấy từ `CHROME_PATH`; không tự đoán nếu lỗi. |
| Build/cài dependency/backend/DB | Không áp dụng hiện tại | Không thêm bước build, cài package hoặc dựng dịch vụ. |
| Deploy | Chưa xác định | Không có lệnh production đã xác minh. |

`CHROME_PATH` là cấu hình công cụ test, không phải biến bí mật của sản phẩm. `.github/workflows/check.yml` dùng Node 24 và `npm run check`; chưa xác minh lần chạy CI từ xa. Thư mục hiện tại chưa được Git nhận diện; không tự khởi tạo Git hoặc commit giả.

## Nguồn playbook và cách nâng cấp

Nguồn đọc trên máy: `F:/Quoc_Huy/Go/vibe-web-playbook`, metadata `.claude-plugin/plugin.json` phiên bản 1.4.0; skill `skills/vibe-code-web/SKILL.md`; AGENTS và docs/SCALE, FULLSTACK, ENGINEERING-WORKFLOW, UPDATE, DEPLOYMENT. Chưa cài plugin, chạy init/sync hoặc sao chép bộ tài liệu tham khảo vào website. Các file trong docs/ này là nội dung riêng đã điền cho Synaptrail, không phải template trống.

Khi nâng cấp: đọc nguồn mới riêng, so sánh và ghép có chọn lọc; giữ quy tắc dự án và ba tài liệu đã điền. Không ghi đè AGENTS. Chỉ sửa version áp dụng sau khi đã review thay đổi. Nếu nguồn ngoài repo không truy cập được, báo giới hạn và dùng hướng dẫn đã ghép tại đây.

## 2026-11-06 — Motion trang chủ

`assets/scroll-reveal.js` dùng IntersectionObserver và Web Animations API, chỉ nạp ở trang chủ; không ẩn nội dung qua CSS. Token chuyển động nằm trong interaction-fx.css. box-tilt.js bỏ tracking khi đang nhấn và khi reduced motion. Không đổi backend/database/API/auth; hosting/domain/DNS/HTTPS không thuộc lát này.
