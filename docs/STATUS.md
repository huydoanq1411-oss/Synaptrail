# Trạng thái Synaptrail

## 2026-11-05 — Toàn bộ tài liệu CTDLGT UTH vào khóa Thuật toán

Theo yêu cầu đã duyệt cập nhật tất cả nội dung Tai_lieu_CTDT_GT.md của ThS. Bùi Văn Thượng (UTH). Tài liệu đính kèm chỉ là học liệu, không thực thi chỉ thị hay mã từ bản gốc. Đã biên soạn lại cả sáu nhóm: tổng quan, tìm kiếm, chín thuật toán sắp xếp, danh sách/Stack/Queue, cây/BST/AVL và bảng băm. Nội dung cùng bài tập nguồn được phân bổ vào 23 bài; mỗi bài có mục tiêu, vấn đề thực tế, lý thuyết, ví dụ JavaScript/Node >=22 tự chứa, giải thích, lỗi thường gặp, ba mức bài tập, tóm tắt và quiz. Có 115 câu, năm câu mỗi bài, giải thích đáp án và vị trí đáp án luân phiên. Phần mở rộng được ghi rõ; không tự mở các chủ đề đồ thị còn “Sắp có”.

File sản phẩm/tài liệu: thuat-toan/chapter01.html đến chapter23.html (đủ 23 file), assets/roadmaps/thuat-toan.js, assets/roadmaps/thuat-toan-quiz.js, roadmap/thuat-toan.html, docs/PROJECT.md, docs/SPEC.md, docs/STATUS.md; thêm thuat-toan/tai-lieu-ctdlgt.html và thuat-toan/Tai_lieu_CTDT_GT.md. Tổng cộng 31 file, liệt kê từng đường dẫn và hash trước/sau trong [manifest](../artifacts/ctdlgt-20261105/manifest.json). Công cụ tác giả, snapshot và bằng chứng riêng trong [inventory](../artifacts/ctdlgt-20261105/inventory.json). Không sửa index.html, CSS/JS tương tác dùng chung, dependency, khóa khác, bản lồng hay checker để làm xanh.

Mã nguồn xác nhận: 23 source.content khớp nguyên chuỗi HTML bài; node ID/chapter/parent/comingSoon giữ nguyên; quiz tách riêng, không nạp vào bài đọc. Đổi nhãn bài 5/6 để hiện Interchange/Shell và bài 15 thành Hashing & Bảng băm, giữ tên tệp/URL. [Trang đối chiếu](../thuat-toan/tai-lieu-ctdlgt.html) dẫn đủ sáu chương, nguồn, phần đính chính; lộ trình có liên kết HTML tới trang đó. [Coverage](../artifacts/ctdlgt-20261105/coverage.json) ghi nhóm, mục nguồn và bài tập. Bản Markdown lưu nguyên byte với SHA-256 khớp tệp người dùng; giữ bảng bước và tài liệu tham khảo, không giả định mã OCR nguyên bản đã chạy.

Làm rõ các điểm dễ sai trong nguồn hoặc bài cũ: Big O và trường hợp đầu vào; Insertion/Bubble tốt nhất; chi phí Radix theo chữ số/cơ số; Binary Search rỗng/khóa trùng; số nút 2^i, duyệt cây tuyến tính và perfect/complete; xác suất băm phổ quát, bước băm kép, tombstone; static storage/cấp phát động. Tài liệu đối chiếu Cornell Sorting/AVL và Open Data Structures đã đọc qua web; Princeton Radix có kết quả tìm kiếm nhưng truy cập PDF trả 403 nên chưa đọc toàn văn. Liên kết nguồn bổ sung nằm trong trang đối chiếu, không sao chép mã của chúng.

Đã chạy:

- Đọc script trước khi dùng. update.cjs --dry-run xác định 30 output; --sample tạo preview/diff chương 1, 6, 22 ngoài sản phẩm trước khi --apply. Đã trình diff và tiếp tục trong phạm vi người dùng duyệt toàn bộ. Có snapshot/hash vì thư mục không được Git nhận diện; không git init hay commit giả.
- node artifacts/ctdlgt-20261105/check-examples.cjs: 23 ví dụ, 27282 assert đạt, Node v24.21.0. Dữ liệu ngẫu nhiên xác định bằng xorshift32, cùng rỗng/trùng/đảo/biên; sắp đối chiếu sorted, tìm với mô hình mảng, hash/danh sách/queue với mô hình chuẩn, cả bốn quay và thêm/xóa AVL kiểm BST/height/balance sau từng cập nhật, Hà Nội kiểm từng bước di chuyển. [Kết quả](../artifacts/ctdlgt-20261105/example-results.json). Đây là kiểm dữ liệu đã thử, không phải chứng minh hình thức.
- node artifacts/ctdlgt-20261105/check-content.cjs: 23 bài/115 câu/46 link trong bài; cấu trúc, source/HTML/code khớp, miền đáp án, giữ ID/route và bản nguồn nguyên byte đạt. [Kết quả](../artifacts/ctdlgt-20261105/content-results.json).
- node artifacts/ctdlgt-20261105/browser.cjs: HTTP loopback, Chrome finder, profile Temp cô lập, cổng ngẫu nhiên. 26 trang/trạng thái × 3 viewport × 2 theme = 156 ca bố cục, không overflow hay phần tử main vượt khung; cả hai theme khớp. Thử 23 quiz đúng 5/5 rồi sai 0/5, giải thích và link quay lại; Enter đổi theme/trạng thái, Copy khớp nguyên code, trang đối chiếu vẫn có link khi tắt JavaScript đều đạt. 0 runtime exception. Chỉ request tự động /favicon.ico 404, giữ báo cáo riêng. [Kết quả cuối](../artifacts/ctdlgt-20261105/browser-results.json). Hai lần khởi động đầu timeout CDP; sau thêm cờ headless phù hợp Chrome chạy được. Lượt phím đầu thiếu mô phỏng focus/text Enter, đã sửa harness và chạy lại đạt; không sửa sản phẩm để che lỗi test. Chrome/server đã đóng.
- Chụp 36 ảnh đầu trang cho sáu trang đại diện ở đủ 375/768/1440 × sáng/tối và bốn ảnh code Stack ở mobile/desktop hai theme; đã xem các ảnh qua 12 sheet ghép native và ảnh riêng. Chưa thấy lỗi bố cục. Bản ghi ảnh trước lần sửa một cụm từ ở mô tả nguồn; không thay layout/CSS.
- node scripts/check-ui.cjs: trước 878 HTML/817 inline script/729 lỗi; sau 879 HTML/817 inline script/729 lỗi, exit 1. Danh sách lỗi giống hệt, tất cả thuộc Synaptrail-main; không lỗi mới hoặc lỗi site chính do checker báo. [Trước](../artifacts/ctdlgt-20261105/before.json), [sau](../artifacts/ctdlgt-20261105/after.json). Checker browser-check và check-algorithm-roadmap cũ không chạy vì giả định inline quiz/đúng 12 chương quiz; dùng harness hiện tại kiểm đủ 23, không sửa/bỏ baseline của chúng.

Frontend cần để trình bày học liệu static; backend/database server/API/auth không áp dụng cho lát nội dung; tiến độ localStorage hiện có giữ nguyên. Hosting public/domain/DNS/HTTPS hoãn, không deploy. Không thêm dependency hoặc build.

Giới hạn: chưa biên dịch mã C/C++ nguyên gốc; ví dụ mới chuyển thể JavaScript, không thay thế bài thực hành quản lý con trỏ C++. Hình toa tàu trong Markdown không đủ rõ: ghi rõ giả thiết mô hình chuẩn ngay ở bài Stack để người dùng đối chiếu hình gốc. Chưa thử thiết bị thật/screen reader, audit WCAG toàn diện, tải lớn, mọi tổ hợp đầu vào, hay chấm đáp án bài tập mở. Bước tiếp theo: học theo sáu nhóm trên trang đối chiếu, chạy ví dụ và làm bài tập; bổ sung hình đường ray gốc nếu cần xác định đúng mô hình toa tàu. Các bảng truy vết nguyên văn có trong tệp nguồn tải xuống.


## 2026-11-04 — Cây Full Stack: Frontend / Backend / DevOps

Đã thực hiện phạm vi được duyệt từ full-stack.md bên ngoài repo. File đổi: `assets/roadmaps/fullstack-js.js`, `roadmap/fullstack-js.html`, `fullstack-js/index.html`, `docs/PROJECT.md`, `docs/SPEC.md`, `docs/STATUS.md`. File sản phẩm mới: `fullstack-js/tai-nguyen.html`, `assets/fullstack-resources.js`, `assets/fullstack.css`. Artifact và snapshot ba file cũ trong [manifest](../artifacts/fullstack-tree-20261104/manifest.json). Không sửa file đính kèm, chương học, JSON nguồn bài cũ, quiz hoặc bản lồng.

Mã xác nhận: 3 nhánh/37 mục con, gồm 10 đường vào bài nội bộ, 14 mục tài liệu chính thức và 13 checkpoint. Cây là liên kết HTML thật; bấm nhóm mở phần mục lục tài nguyên tương ứng, bấm bài mở bài, bấm chủ đề chưa có bài mở phần tài nguyên đã ghi rõ. Checkpoint có gợi ý và tiêu chí tự kiểm tra, dẫn tới bài/tài liệu phù hợp. PostgreSQL không gắn nhầm MySQL; Deployment ghi rõ bài nội bộ là DigitalOcean, không giả là AWS. Không có UI tiến độ trên hai cây và trang tài nguyên; không nạp progress store ở ba trang này. Các bài khác giữ hành vi cũ.

Đã đọc generator hiện có nhưng không chạy; script tác giả riêng `node artifacts/fullstack-tree-20261104/update.cjs --dry-run` báo đúng bốn output (metadata, hai cây, tài nguyên) trước khi ghi. Giữ nguyên ID và chapter của cả 30 node cũ, đưa liên kết cũ vào phần tài liệu mở rộng. Metadata đánh dấu legacy để trang chủ đề/quiz cũ tiếp tục tra cứu được. CSS/JS riêng giữ phạm vi Full Stack; desktop là sơ đồ tĩnh có đường nối, mobile/tablet là danh sách; reduced motion không làm mất cấu trúc desktop vì không có animation.

Đã đối chiếu 14 URL tài liệu chính thức qua web, gồm Tailwind, PostgreSQL, Redis, Ubuntu Server, AWS và năm dịch vụ, GitHub Actions, Monit, Ansible, Terraform. URL Monit có www không đọc được, đã dùng manual chính thức tại https://mmonit.com/monit/documentation/monit.html đọc được. Không hard-code phiên bản framework/cloud. Đường dẫn ngoài cần mạng và có thể thay đổi về sau; chưa thực hành các dịch vụ. Liên kết nằm ngay trong từng mục tài nguyên và danh sách [official-sources](../artifacts/fullstack-tree-20261104/official-sources.json).

Kiểm tra đã chạy:

- `node --check assets/fullstack-resources.js` và `node --check assets/roadmaps/fullstack-js.js`: đạt.
- `node artifacts/fullstack-tree-20261104/check.cjs`: đạt tính duy nhất ID, file/anchor tồn tại, hai cây giống nhau, giữ đích node cũ. [Link checks](../artifacts/fullstack-tree-20261104/link-checks.json).
- [Harness Chrome](../artifacts/fullstack-tree-20261104/run-browser.cjs): HTTP loopback, finder Chrome, profile Temp cô lập, cổng ngẫu nhiên. Thử bấm đủ 40 liên kết mới, Enter mở bài HTML, đổi theme, 40 link cây còn hiện khi tắt JavaScript: đạt. [Navigation results](../artifacts/fullstack-tree-20261104/navigation-results.json). Không runtime exception hoặc request 404 trong lượt này; các trang HTTPS ngoài bị chặn trong harness, kiểm URL ngoài thực hiện bằng web riêng.
- Sau sửa CSS hiển thị nhãn loại tài liệu, giữ sơ đồ desktop trong reduced motion và khoảng cách tablet, chạy lại `--layout-only`: 3 trang × 3 viewport × 2 theme = 18 ca, không overflow, chồng node hoặc cắt chữ, đúng theme và không UI tiến độ; 0 runtime exception/request thiếu. [Kết quả cuối](../artifacts/fullstack-tree-20261104/results.json). Đã chụp và xem 18 ảnh của ba trang; hai cây có HTML giống hệt nhau. Server/Chrome đã đóng.
- `node scripts/check-ui.cjs`: trước 877 HTML/817 inline scripts/729 lỗi, sau 878 HTML/817 inline scripts/729 lỗi, exit 1. Danh sách lỗi không đổi, đều thuộc Synaptrail-main, không lỗi mới. [Trước](../artifacts/fullstack-tree-20261104/before.json), [sau](../artifacts/fullstack-tree-20261104/after.json).

Frontend cần; backend/database/API/auth không áp dụng cho lát liên kết tài liệu; hosting/domain/DNS/HTTPS hoãn, không deploy hoặc thao tác AWS. Chưa đo WCAG toàn diện, screen reader, điện thoại thật, chạy mọi code trong các bài đích hoặc thực hành checkpoint mới. Chưa Git được nhận diện nên không commit/diff Git; snapshot ba file cũ chỉ hỗ trợ đối chiếu lát này. Bước tiếp theo: người dùng xem cây mới; nếu cần giáo trình tiếng Việt cho Tailwind/PostgreSQL/Redis/DevOps, chọn một chủ đề để làm bài mẫu riêng.

## 2026-11-04 — Sửa frontend sau mẫu

File sản phẩm đổi: `index.html`, `projects/fullstack-js.html`, `assets/home.css`, `assets/particle-network.js`. File sản phẩm mới: `assets/project-page.css`. Tài liệu đổi: `docs/PROJECT.md`, `docs/SPEC.md`, `docs/STATUS.md`. Artifact trong [manifest](../artifacts/frontend-fixes-20261104/manifest.json). Không sửa chín description hoặc các trang chương/bản lồng.

Đã sửa CSS: cô lập token trang chủ và màu nhấn tiêu đề khỏi !important trong studio.css bằng override chỉ dành cho landing-page, không thay CSS chung; sửa màu liên kết phụ và skip link. Header dưới 900px không sticky, bỏ CTA trùng với hero ở header và gom logo/hai nút vào hàng đầu trên 375px. Khai báo assets/favicon.svg hiện có ở trang chủ. Trang dự án đổi tiêu đề h2 thành h1, CSS riêng giữ kích thước cũ; giữ s22 và nội dung. Vòng vẽ mạng hạt kiểm tra điều kiện dừng trước mỗi frame, đồng bộ trạng thái khi dừng; xóa vị trí con trỏ khi blur/đổi loại pointer và không nhận tracking khi tắt/giảm chuyển động.

Đã chạy `node --check assets/particle-network.js`: đạt. `node scripts/check-ui.cjs`: 877 HTML/817 inline script, trước 730 lỗi, sau 729 lỗi, exit 1; giảm đúng một lỗi thiếu h1 dự án, không lỗi mới. Site chính không còn lỗi do checker này báo; 729 lỗi bản lồng giữ nguyên. [Baseline](../artifacts/frontend-fixes-20261104/before.json), [sau](../artifacts/frontend-fixes-20261104/after.json). Không suy rộng thành không có mọi lỗi frontend.

Đã chạy [harness](../artifacts/frontend-fixes-20261104/run-browser.cjs) HTTP loopback/Chrome finder/profile Temp cô lập/cổng ngẫu nhiên. Lượt đầu 10 trang × 375/768/1440 × sáng/tối: kiểm overflow/theme/h1/description đều đạt; [kết quả ban đầu](../artifacts/frontend-fixes-20261104/initial-results.json) cũng lưu lỗi header/motion trong quá trình sửa. Sau sửa header, chạy `--changed-only` cho hai trang: 12 ca bố cục và sáu ca palette/header đều đạt, [layout-results](../artifacts/frontend-fixes-20261104/layout-results.json); kết quả này còn ghi trạng thái reduced-motion lỗi trước lần sửa cuối. Lượt cuối `--motion-only`: toggle Enter/focus, reduced motion hình tĩnh/trạng thái dừng, bật chuyển động lại, tab nền thật và foreground đều đạt; không runtime exception hoặc request thiếu ở lượt này. [Kết quả cuối](../artifacts/frontend-fixes-20261104/results.json). Đã tắt focus emulation trước thử tab nền để document.hidden phản ánh đúng; lượt thử cũ có focus emulation không chứng minh lỗi site.

Đã chụp/xem 18 ảnh: sáu đầu trang chủ, sáu phần card, sáu đầu trang dự án. Không tràn ngang toàn trang; sơ đồ văn bản dự án cuộn ngang bên trong pre ở 375px theo thiết kế hiện có. Server và Chrome thử đã đóng. Yêu cầu tự động `/favicon.ico` 404 vẫn xuất hiện khi kiểm các trang khác chưa khai báo icon, được giữ trong báo cáo; riêng lượt cuối trang chủ không có request thiếu.

Frontend cần trong lát này; backend/database/API/auth không cần cho sửa static; hosting/domain/DNS/HTTPS hoãn, không deploy. Chưa đo FPS, audit WCAG toàn diện, điện thoại thật hoặc kiểm mọi tương tác của công cụ ôn tập. Chưa mở rộng sửa các khóa hoặc Synaptrail-main. Không Git được nhận diện nên không commit/diff Git. Bước tiếp theo: chọn nhóm trang/khóa tiếp theo để rà lỗi tương tác và bố cục, không coi lượt kiểm DOM này là nghiệm thu toàn website.

## 2026-11-04 — Metadata và mẫu mạng hạt trang chủ

Đã thực hiện phạm vi người dùng duyệt. Giữ nguyên bốn nhãn tiếng Anh; không thêm tiến độ. File sản phẩm thay đổi: `index.html`, `courses.html`, `projects/fullstack-js.html`, `Quiz_and_other/cheatsheet.html`, `Quiz_and_other/exercises.html`, `Quiz_and_other/flashcards.html`, `Quiz_and_other/free-apis-giao-trinh.html`, `Quiz_and_other/glossary.html`, `Quiz_and_other/index.html`, `Quiz_and_other/quiz-tong-hop.html`, `assets/home.css`. File sản phẩm mới: `assets/particle-network.css`, `assets/particle-network.js`. Tài liệu đổi: SPEC và STATUS. Artifact liệt kê chính xác trong [manifest](../artifacts/site-sample-20261104/manifest.json).

Mã nguồn xác nhận: chín description tiếng Việt; chín mũi tên trang chủ thành SVG trang trí. Trang chủ bỏ nạp glass.css, refresh.css và home-theme.css; gom bố cục/màu trong home.css dùng token chung, giữ riêng CSS bản đồ 3D và tương tác card. Không sửa hoặc xóa các CSS cũ vì catalog vẫn sử dụng. Mạng hạt Canvas 2D giới hạn 64 hạt, tối đa 30 lần vẽ/giây, DPR tối đa 2; nối tới con trỏ chuột, không chặn tương tác. Nút bật/tắt không lưu storage, reduced motion dùng hình tĩnh, visibilitychange dừng vòng vẽ khi tab ẩn. Không thêm thư viện hoặc backend/database/API/auth; hosting/domain/DNS/HTTPS hoãn vì không có yêu cầu deploy.

Đã chạy `node --check assets/particle-network.js`: đạt. `node scripts/check-ui.cjs`: trước 877 HTML/817 inline script/739 lỗi, sau cùng số trang/script và 730 lỗi, exit 1. Giảm đúng chín description; còn một lỗi site chính (projects/fullstack-js.html thiếu h1), 729 lỗi bản lồng. Không sửa checker hoặc che lỗi baseline. [Trước](../artifacts/site-sample-20261104/before.json), [sau](../artifacts/site-sample-20261104/after.json).

Đã chạy [harness](../artifacts/site-sample-20261104/run-browser.cjs) qua HTTP loopback, Chrome headless bằng finder, profile Temp riêng, cổng ngẫu nhiên. Sáu tổ hợp 375/768/1440 × sáng/tối đạt kiểm tra overflow/theme/chín SVG/nhãn/CSS tách/mạng hạt. Đã chụp và xem 12 ảnh phần đầu và phần card; bố cục không tràn ngang. Toggle click/Enter/focus, khung hình thay đổi khi có con trỏ và reduced motion hình tĩnh đạt; không runtime exception, asset trang không 404. Yêu cầu tự động `/favicon.ico` trả 404 được báo riêng, không coi toàn bộ request là thành công. Server và Chrome thử đã đóng. [Kết quả](../artifacts/site-sample-20261104/results.json).

Đã chạy [đối chiếu Java](../artifacts/site-sample-20261104/audit-java.cjs): 31 bài có content HTML chứa nguyên nội dung nguồn, anchor được khai báo còn đủ, title/summary/đường dẫn roadmap khớp. 15 chương có quiz khớp nguồn; 16 chương không có câu hỏi nguồn và không có entry quiz, không coi đây là dữ liệu lệch. Đây chỉ là kiểm tra cấu trúc/đồng bộ, chưa chứng minh câu hỏi đúng kiến thức hoặc mọi ví dụ chạy được. Không sửa nội dung khóa. [Báo cáo](../artifacts/site-sample-20261104/java-audit.json).

Giới hạn: chưa đo FPS, chưa audit WCAG toàn trang hoặc thiết bị thật; dừng tab ẩn được xác nhận bằng mã, chưa thử chuyển tab thật. Không kiểm semantic toàn bộ giáo trình; chưa đối chiếu khóa khác. Không có Git được nhận diện nên không commit hoặc tuyên bố diff Git. PROJECT còn mô tả home-theme.css được nạp, không còn đúng với mẫu này; kiến trúc static không đổi. Bước tiếp theo: người dùng xem mẫu trước khi duyệt nhân rộng SVG/CSS/mạng hạt và đối chiếu khóa tiếp theo.

## 2026-11-03 — Mẫu tilt & shine, glitch & typing đã duyệt

File sản phẩm đổi: `index.html`, `courses.html`, `assets/box-tilt.js`; file mới `assets/interaction-fx.css`, `assets/search-fx.js`. Tài liệu đổi: `docs/SPEC.md`, `docs/STATUS.md`. Danh sách artifact chính xác ở [manifest](../artifacts/card-fx-20261103/manifest.json).

Frontend: dùng lại bộ theo dõi chuột với requestAnimationFrame cho bốn card trang chủ; CSS perspective/rotate và radial-gradient shine, không cần WebGL. Glitch WAAPI 180ms trên icon, ba chấm 240ms mỗi đợt nhập và tự ẩn sau 650ms; không thay chữ nhập. Composition events giữ phản hồi trang trí im khi đang ghép dấu. Reduced motion chỉ còn chỉ báo tĩnh. Backend/database/API/auth không áp dụng cho lát trang trí static; hosting/domain/DNS/HTTPS hoãn, không deploy.

Đã chạy `node --check assets/search-fx.js`, `node --check assets/box-tilt.js`: đạt. `node scripts/check-ui.cjs` trước/sau: 877 HTML, 817 inline script, cùng 739 lỗi baseline, exit 1; danh sách lỗi giống hệt, gồm reports và Synaptrail-main, không bỏ qua lỗi. [before](../artifacts/card-fx-20261103/before.json), [after](../artifacts/card-fx-20261103/after.json).

Đã chạy [harness Chrome riêng](../artifacts/card-fx-20261103/run-browser.cjs), profile Temp cô lập, cổng debug ngẫu nhiên do harness sở hữu, không chạy checker tổng cũ. Hai trang × ba viewport × hai theme: 12 ảnh, không tràn ngang; đã xem đủ 12 ảnh. Tilt/shine khi cho phép chuyển động, nút 3D reset, typing/idle, composition tiếng Việt mô phỏng và reduced-motion đạt; không runtime exception. [Kết quả](../artifacts/card-fx-20261103/results.json). Máy mặc định reduced-motion, đã kiểm thêm no-preference qua CDP. Server/Chrome thử đã đóng.

Giới hạn: chưa thử bộ gõ hệ điều hành và điện thoại thật, chưa audit WCAG toàn trang; gradient shine có chi phí paint, chưa đo FPS. Không có Git ở thư mục này nên không commit hoặc tuyên bố diff Git. Bước tiếp: người dùng xem mẫu trước khi duyệt nhân rộng.

Cập nhật: 2026-11-01. Hồ sơ **static**, playbook **1.4.0**. Xem [PROJECT](PROJECT.md), [SPEC](SPEC.md), [AGENTS](../AGENTS.md).

## 2026-11-01 — Kiểm HTTP thật và củng cố hai mẫu Express

Người dùng giao làm bước tiếp và nhiều bước rõ phạm vi, không hỏi lại. Đã thực hiện liên tiếp: tạo môi trường Express riêng; kiểm HTTP và hai client thật; kiểm lỗi cổng bận; bổ sung assert/timeout client 24 và kiểm client phát hiện phản hồi sai; cập nhật bằng chứng trong hai bài; sửa đoạn PROJECT lỗi thời; kiểm trình duyệt/baseline/phạm vi. Frontend vẫn là website static; backend/API chỉ chạy tạm để kiểm ví dụ. Không cần database/auth cho hai mẫu RAM này; hosting/domain/DNS/HTTPS hoãn, không deploy.

**File sản phẩm/tài liệu đổi:** `assets/roadmaps/javascript-nnlt-source.json`, `javascript-nnlt/chapter23.html`, `javascript-nnlt/chapter24.html`, `docs/PROJECT.md`, `docs/SPEC.md`, `docs/STATUS.md`. Artifact mới gồm harness, client thử, kết quả, môi trường, lockfile và dependency chỉ trong [http-integration-20261101](../artifacts/http-integration-20261101/README.md); [manifest](../artifacts/http-integration-20261101/manifest.json) liệt kê file kiểm chứng, không liệt kê sâu node_modules. package.json gốc, quiz, metadata, URL, anchor và schema/key tiến độ không đổi. Words nguồn thành 1.654/2.065 theo bộ đếm hiện có; thời gian metadata vẫn đúng 10/12 phút nên file metadata không cần đổi.

**Môi trường đã chạy:** Node v24.21.0, Express 5.3.0. Cài 65 package vào artifacts với --ignore-scripts/--no-audit/--no-fund; không thêm dependency vào website. Tải đầu bị EACCES, thử offline bị ENOTCACHED; lần tải qua sandbox escalation được phép thành công. Không nâng npm, bật MySQL/Docker hoặc đổi cấu hình hệ thống. Không coi thông báo cài thành công là audit dependency/bảo mật.

| Kiểm tra đã chạy | Kết quả thực tế |
| --- | --- |
| `node artifacts/http-integration-20261101/check-http.cjs` | 7 nhóm đạt bằng Express thật trên loopback, trích code trực tiếp từ nguồn bài hiện tại |
| Chương 23 HTTP | Text/plain gốc, chi tiết 200/400/404, danh sách/default/trang 2/trang rỗng, query lặp và input sai bị từ chối 400; client bảy ca exit 0 |
| Cổng bận thật | Cổng do harness đang sở hữu gây EADDRINUSE; start đánh dấu thất bại, không log URL thành công. Chỉ đổi cổng truyền vào listen wrapper; không chiếm/dừng app khác |
| Chương 24 HTTP | POST 201/Location/trim, DELETE 204 body rỗng, xóa lại 404; ID mới 3 không làm mất ID 2; PATCH 200 đúng payload |
| Parser/validation thật | JSON hỏng 400 INVALID_JSON; payload trên 16 KB trả 413 BODY_TOO_LARGE; text/plain 415; tên/ID không hợp lệ 400; resource/route thiếu 404 |
| Store/client 24 | App instance mới rỗng; client có assert/timeout chạy thật exit 0, kiểm tạo/xóa/ID tăng/sửa/đọc lại. Chỉ thay base URL cổng thử, không sửa logic test để làm xanh |
| `node artifacts/http-integration-20261101/check-negative.cjs` | Đạt: HTTP stub cố tình trả DELETE 200, client assert yêu cầu 204 và thoát 1. Đã kiểm client phát hiện lỗi, không chỉ in status |
| Nguồn/HTML | Hai content khớp; toàn bộ câu hỏi/anchor và các bài khác giữ nguyên. Ghi rõ bằng chứng HTTP thay giới hạn cũ, vẫn giữ lịch sử test double ở các mục trước |
| `node artifacts/http-integration-20261101/run-browser.cjs` | 15 ca đạt: 12 ca hai bài × 375/768/1440 × hai theme, code sau render khớp; hai link quiz Enter mở đúng năm câu; 0 runtime exception |
| Ảnh | Chụp 24 ảnh đầu bài/code; đã xem sáu ảnh code client 24 và sáu ảnh đầu bài 23; không overflow sáu tổ hợp mỗi bài, theme giữ qua reload |
| `node scripts/check-ui.cjs` trước/sau | 877 HTML, 817 inline script, 739 lỗi cũ, exit 1; danh sách lỗi giữ nguyên, 0 lỗi mới |

Bằng chứng: [HTTP results và stdout hai client](../artifacts/http-integration-20261101/http-results.json), [negative results](../artifacts/http-integration-20261101/negative-results.json), [browser results và URL](../artifacts/http-integration-20261101/results.json), [source verification](../artifacts/http-integration-20261101/source-verification.json), [hash/baseline](../artifacts/http-integration-20261101/verification.json). Các server thử/Chrome đã dừng; browser dùng profile Temp riêng. Không tự Git init/commit; hash chỉ bảo vệ phạm vi trong phiên.

**Giới hạn còn giữ:** chưa kiểm HTTP 500 từ lỗi nội bộ thật, timeout mạng thật, restart tiến trình, durability, filesystem mạng, MySQL thực, auth, production/load/bảo mật hoặc mọi cấu hình query parser. Store rỗng chỉ được chứng minh ở app instance mới. Browser headless/CDP chặn HTTPS ngoài; chưa đo WCAG, font ngoài, screen reader hoặc thiết bị thật; không kiểm lại chấm quiz/import/reset vì logic và câu hỏi không đổi. MySQL chương 3 vẫn chỉ có test double, không gộp thành kết quả Express hai bài này.

**Bước kế tiếp:** khi có môi trường MySQL thực hành hoạt động và dữ liệu thử riêng, kiểm chương MySQL 3 theo cùng nguyên tắc. Không tự bật dịch vụ hoặc thao tác dữ liệu hiện có. Các bước Express đã rõ trong lượt này hoàn tất; không nhân rộng toàn khóa hoặc sửa 739 lỗi baseline.


## 2026-11-01 — Nâng chương 23: Express cơ bản

Người dùng giao nâng chương 23. Đã đọc AGENTS/PROJECT/SPEC/STATUS, bài cũ, generator và checker/harness trước làm. Website vẫn static: frontend cần bài/quiz; backend/API chỉ là giáo trình thực hành, không thêm dịch vụ chạy cho site; database và auth không cần trong lát này; hosting/domain/DNS/HTTPS hoãn xác minh, không deploy. PROJECT còn đoạn lát J-03 cũ; SPEC/STATUS là hồ sơ cập nhật, kiến trúc/lệnh website không đổi.

**Sáu file đổi:** `javascript-nnlt/chapter23.html`, `assets/roadmaps/javascript-nnlt-source.json`, `assets/roadmaps/javascript-nnlt-quiz.js`, `assets/roadmaps/javascript-nnlt.js`, `docs/SPEC.md`, `docs/STATUS.md`. Thêm artifact tại [manifest](../artifacts/express-chapter23-20261101/manifest.json). Giữ URL, anchor s23, key/schema tiến độ, các chương/quiz khác. Không thêm executable JS/CSS inline, dependency hoặc chạy generator toàn khóa. Hash phiên đối chiếu phạm vi, không phải lịch sử Git; không tự init/commit.

**Mã nguồn xác nhận:** nội dung từ 154 từ metadata lên khoảng 1.625 từ đếm khoảng trắng ngoài pre, đủ tám phần chuẩn. Ví dụ Node 24.x/Express 5.x CommonJS: GET text gốc, danh sách phân trang và chi tiết hai sinh viên mẫu; kiểm params/query; phân biệt 400 sai input, 404 thiếu dữ liệu/route, 200 danh sách rỗng và 500 chung. Không còn trả sinh viên giả cho mọi ID. listen kiểm lỗi trước thông báo thành công; bind loopback. Client có bảy ca dùng assert/fetch và timeout. Có giải thích từng đoạn, lỗi, bài tập ba mức, năm quiz bám bài, link đầu/cuối bài và link sang REST/MySQL. Đã đối chiếu tài liệu chính thức [Express API](https://expressjs.com/en/5x/api/), [error handling](https://expressjs.com/en/guide/error-handling/), [listen Express 5](https://expressjs.com/en/guide/migrating-5/#app.listen).

Metadata summary/quiz khớp nguồn, thời gian ước lượng 10 phút theo max(5, ceil(words/180)); stage-6 từ 36 lên 41 theo tổng node con. Không phải thời gian học đo thực tế, chưa tính thực hành/quiz. Node/layout khác giữ nguyên.

| Đã chạy thử | Kết quả thật |
| --- | --- |
| `node artifacts/express-chapter23-20261101/check.cjs` | Năm nhóm đạt: cú pháp server/client; validator bằng Node thật; handler 200/400/404 bằng double; middleware 404/500 và startup thành công/lỗi bằng double; đồng bộ nguồn/HTML/quiz/metadata và giữ chương/quiz khác |
| Validation và handler | Từ chối ID không chuẩn/unsafe, query sai kiểu/trang vượt 1000; thiếu trang mặc định 1; trang 3 rỗng 200; ID 99 404, abc 400; mỗi handler gửi một response |
| Startup double | listen dùng 127.0.0.1:3000; lỗi EADDRINUSE báo thất bại, không in URL thành công. Không phải thử chiếm cổng thật |
| `node artifacts/express-chapter23-20261101/run.cjs` | 12 nhóm browser đạt, 0 Runtime.exceptionThrown; Chrome headless/CDP trên HTTP loopback cùng origin/profile Temp riêng; browser/server thử đã dừng |
| Bài ở 375/768/1440 × sáng/tối | Theme giữ sau reload, không overflow, tám h2, s23 và code render bảo toàn. Chụp sáu ảnh đầu bài và sáu ảnh code; đã xem sáu ảnh đầu bài |
| Quiz | Focus toolbar và Enter tới đúng quiz; năm câu, ẩn giải thích trước chấm; 5/5 và 0/5 hiện năm giải thích, giữ điểm cao nhất 100; Space/ArrowRight chọn radio |
| Quiz sáu tổ hợp | Không overflow; đã xem sáu ảnh đầu trang. Không phải audit toàn chiều dài hoặc screen reader |
| `node scripts/check-ui.cjs` trước/sau | 877 HTML, 817 inline scripts, 739 lỗi baseline; exit 1. Danh sách lỗi giữ nguyên, 0 lỗi mới; không sửa checker hoặc bản lồng |

Bằng chứng: [logic-results](../artifacts/express-chapter23-20261101/logic-results.json), [browser results và URL](../artifacts/express-chapter23-20261101/results.json), [environment](../artifacts/express-chapter23-20261101/environment.json), [verification/hash](../artifacts/express-chapter23-20261101/verification.json).

**Chưa kiểm chứng:** require.resolve('express') vẫn MODULE_NOT_FOUND; không tự cài. Handler/middleware/listen được gọi bằng test double, chưa chạy Express routing/query parser/network thật, chưa chạy client qua server thật. Bảy dòng client là kỳ vọng, không phải kết quả đã đạt. Chưa thử HTTP lặp query thật, screen reader, tương phản đo WCAG, thiết bị vật lý, font ngoài (harness chặn HTTPS ngoài), hiệu năng/bảo mật toàn hệ thống. Không suy rộng thành mọi chương đạt hoặc backend production đã sẵn sàng.

**Bước tiếp đề xuất:** kiểm HTTP thật của chương 23/24 trong thư mục thực hành có Express sẵn; cài dependency/dịch vụ ngoài phạm vi hiện tại chưa được thực hiện. Dừng một chương mẫu, chưa nhân rộng khóa.


## 2026-11-01 — Đồng bộ metadata và đường vào quiz của ba chương mẫu

Người dùng giao rõ phạm vi MySQL chương 3, JavaScript chương 22 và 24. Đã đọc AGENTS/PROJECT/SPEC/STATUS, generator liên quan và checker/harness; không chạy generator toàn khóa. Frontend cần đồng bộ điều hướng; backend/database/API/auth của website không áp dụng cho lát metadata này; hosting/domain/DNS/HTTPS hoãn xác minh, không có thao tác triển khai.

**Sáu file đổi:** `assets/roadmaps/mysql.js`, `assets/roadmaps/javascript-nnlt.js`, `mysql/chapter03.html`, `javascript-nnlt/chapter22.html`, `docs/SPEC.md`, `docs/STATUS.md`. Thêm artifact tại [manifest](../artifacts/sample-metadata-20261101/manifest.json). Không đổi nội dung bài/nguồn JSON/câu hỏi, URL, anchor, layout roadmap hay schema/key tiến độ; chương 24 HTML giữ nguyên. Snapshot hash trước/sau bảo vệ phạm vi phiên, không phải lịch sử Git; không tự init/commit.

**Mã xác nhận:** summary ba node khớp source JSON, quiz đều trỏ đúng URL chương. Thời gian theo công thức hiện có trong `scripts/migrate-course-roadmaps.cjs`: max(5, ceil(words/180)), lần lượt MySQL 3 = 13, JavaScript 22 = 9, JavaScript 24 = 12 phút. Đây là ước lượng đọc từ bộ đếm khoảng trắng, chưa tính thực hành/quiz và chưa đo người học. Nhóm MySQL stage-3 từ 5 lên 13, JavaScript stage-6 từ 25 lên 36 bằng tổng node con; metadata node khác giữ nguyên.

Hai bài thiếu được thêm link `.ap-quiz-link` vào toolbar dùng đúng SVG/CSS của chương 24; mỗi bài có đúng một link toolbar. Link cuối bài giữ nguyên. Roadmap hiện điều hướng node tới bài, không trực tiếp render thuộc tính quiz/time; metadata đã sẵn có nhưng không tuyên bố có nút quiz hoặc thời gian mới hiển thị trực tiếp trên sơ đồ.

**Đã chạy thử:** kiểm tĩnh bằng Node/VM xác nhận chỉ summary/time/quiz ba node và time hai nhóm cha đổi, layout/nội dung bài/quiz giữ nguyên. Browser harness [run.cjs](../artifacts/sample-metadata-20261101/run.cjs), [results](../artifacts/sample-metadata-20261101/results.json), [environment](../artifacts/sample-metadata-20261101/environment.json): 25 ca đều đạt, gồm 18 ca ba bài × 375/768/1440 × sáng/tối; mỗi ca reload theme, không overflow, có một link toolbar, focus và Enter mở đúng quiz năm câu. Ba ca metadata runtime khớp nguồn, ba ca roadmap → bài → quiz thành công; 0 Runtime.exceptionThrown. HTTP loopback cùng origin/profile Temp riêng; Chrome/server đã dừng. Chụp 18 ảnh, đã xem 12 ảnh của hai bài thay UI; không sửa CSS/JS dùng chung.

**Baseline trước/sau:** `node scripts/check-ui.cjs` vẫn exit 1 với 877 HTML, 817 inline script, 739 lỗi cũ (10 site chính, 729 bản lồng); danh sách lỗi không đổi, 0 mới. [Đối chiếu hash và baseline](../artifacts/sample-metadata-20261101/verification.json), [giá trị trước/sau](../artifacts/sample-metadata-20261101/changes.json). Không che hoặc xử lý baseline ngoài phạm vi.

**Giới hạn:** không kiểm lại chấm điểm/import/reset tiến độ vì dữ liệu/logic không đổi; các kết quả chấm quiz ở lát trước là lịch sử. Browser headless/CDP với profile cô lập, chặn HTTPS ngoài; chưa đo WCAG, screen reader, thiết bị thật, font ngoài hay backend Express/MySQL. Không suy rộng toàn khóa đã đồng bộ. PROJECT còn đoạn mô tả lát J-03 cũ; SPEC/STATUS mới hơn là bằng chứng lát hiện tại, kiến trúc không đổi nên chưa sửa PROJECT.

**Bước tiếp đề xuất:** nâng một chương tiền đề Express cơ bản (chương 23) hoặc kiểm tích hợp HTTP thật trong môi trường thực hành có dependency; chưa thực hiện hai việc này.


## 2026-11-01 — Nâng mẫu Node.js File System, chương 22

Theo yêu cầu tiếp tục nâng cấp, làm một chương nền Node trong phạm vi nội dung Full Stack đã chọn. Đã đọc AGENTS/PROJECT/SPEC/STATUS, chương 21–24, checker và harness trước chạy. Không thêm dependency, dịch vụ hoặc thay đổi kiến trúc. Frontend cần giữ UI bài/quiz; backend, database, API và auth của website không phát sinh nhu cầu từ bài thực hành CLI này; hosting/domain/DNS/HTTPS chưa xác minh lại.

**File sản phẩm/tài liệu đổi chính xác:** `javascript-nnlt/chapter22.html`, `assets/roadmaps/javascript-nnlt-source.json`, `assets/roadmaps/javascript-nnlt-quiz.js`, `docs/SPEC.md`, `docs/STATUS.md`. Artifact mới được liệt kê tại [manifest](../artifacts/node-fs-chapter22-20261101/manifest.json). Giữ URL, s22, key/schema tiến độ; các chương và quiz đã có khác giữ nguyên. Không sửa bản lồng hoặc checker. Metadata roadmap `assets/roadmaps/javascript-nnlt.js` chưa đồng bộ thời gian/tóm tắt/quiz mới; đầu trang chương vẫn chưa có nút quiz, link năm câu có ở phần 8 và hoạt động. Đây là giới hạn phạm vi, không coi toàn khóa đã nâng cấp.

**Mã nguồn xác nhận:** từ 146 từ metadata cũ lên khoảng 1.462 từ tách khoảng trắng ngoài pre; tám phần chuẩn, Node 24.x CommonJS dùng module có sẵn. Giải thích Promise/callback/synchronous, cwd/path.join/UTF-8, JSON.parse khác kiểm schema, ENOENT/EEXIST và wx. Ví dụ tạo bản chụp JSON trong thư mục tạm riêng, từ chối ghi đè; schema minh họa không phải schema import của Synaptrail. Năm quiz có giải thích bám bài. Đã đối chiếu tài liệu chính thức [Node 24 fs](https://nodejs.org/docs/latest-v24.x/api/fs.html) và [Path](https://nodejs.org/api/path.html); URL Path bản 24 không đọc được qua công cụ nên dùng tài liệu Path chung, không tuyên bố đây là trang phiên bản 24.

| Đã chạy thử | Kết quả |
| --- | --- |
| `node artifacts/node-fs-chapter22-20261101/doc-tien-do.cjs` | Node v24.21.0 chạy thật: trước tạo rỗng; sau tạo hai ID không trùng; lần tạo lặp báo từ chối ghi đè; đọc cuối giữ hai ID. Chỉ ghi trong thư mục Temp riêng |
| `node artifacts/node-fs-chapter22-20261101/check.cjs` | Đạt sáu nhóm: thiếu file không tự tạo; JSON round-trip/giữ byte khi EEXIST; schema/100–101 phần tử; JSON hỏng và schema sai không reset; hai create đồng thời một thành công một EEXIST; đồng bộ nguồn/HTML/quiz và giữ chương/quiz khác |
| `node artifacts/node-fs-chapter22-20261101/run.cjs` | 12 nhóm browser đạt; HTTP loopback cùng origin, Chrome headless/CDP, profile Temp riêng; server/browser đã dừng; không dùng storage cá nhân |
| Bài học ở 375/768/1440 × hai theme | Không overflow, đúng theme sau reload, tám h2, anchor s22 còn; code render khớp nguyên bản. Đã xem sáu ảnh đầu bài và sáu ảnh code |
| Quiz thực | Link phần 8 mở đúng quiz chương 22; năm câu, trước chấm chưa hiện giải thích; đúng 5/5, sai 0/5, năm giải thích; điểm cao nhất 100 giữ nguyên; Space và ArrowRight chọn/đổi radio |
| Quiz layout | Sáu tổ hợp viewport/theme không overflow, đã xem sáu ảnh; 0 Runtime.exceptionThrown trong hành trình mẫu |
| `node scripts/check-ui.cjs` trước/sau | 877 HTML, 817 script inline, 739 lỗi baseline, exit 1; danh sách lỗi giữ nguyên, 0 lỗi mới |

Bằng chứng: [logic-results](../artifacts/node-fs-chapter22-20261101/logic-results.json), [browser results và URL](../artifacts/node-fs-chapter22-20261101/results.json), [environment](../artifacts/node-fs-chapter22-20261101/environment.json), [verification](../artifacts/node-fs-chapter22-20261101/verification.json). Đối chiếu SHA-256 trước/sau để giữ thay đổi ngoài phạm vi; không có Git được xác minh, không tự init hoặc commit.

**Chưa kiểm chứng/giới hạn:** kiểm I/O trên máy Windows này; chưa thử EACCES thật, filesystem mạng, mất điện hoặc cập nhật file đồng thời. wx chỉ bảo vệ bước tạo mới, không chứng minh transaction/durability. Chưa chạy mọi chương hay kiểm WCAG/screen reader/thiết bị thật. Ảnh chỉ các vùng đầu bài/code/quiz, không kiểm hình ảnh toàn bộ chiều dài bài. Browser headless chặn HTTPS ngoài, không nghiệm thu font ngoài/WebGL. Không cài Express/MySQL hoặc khẳng định tích hợp HTTP của hai mẫu trước đã đạt.

**Đề xuất tiếp:** một lát nhỏ đồng bộ metadata/đường vào quiz của các chương mẫu, hoặc nâng chương 23 Express cơ bản. Dừng ở chương 22 để xem mẫu; không nhân rộng cả khóa.


## 2026-11-01 — Mẫu tiếp theo: Express REST API, JavaScript chương 24

Theo yêu cầu “Tiếp tục nâng cấp”, hoàn thiện một chương mẫu nối kiến thức Node.js/REST với bài MySQL đã làm. Đã đọc AGENTS, PROJECT, SPEC, STATUS và mã liên quan trước sửa. Website tiếp tục là static; ví dụ backend nằm trong giáo trình, không có dịch vụ backend mới. Database/auth của website không phát sinh nhu cầu; hosting, domain/DNS/HTTPS chưa xác minh lại.

**File sản phẩm/tài liệu đã đổi chính xác:** `assets/roadmaps/javascript-nnlt-source.json`, `javascript-nnlt/chapter24.html`, `assets/roadmaps/javascript-nnlt-quiz.js`, `docs/SPEC.md`, `docs/STATUS.md`. Thêm bằng chứng tại [artifacts/rest-chapter24-20261101](../artifacts/rest-chapter24-20261101/manifest.json); manifest liệt kê từng file artifact. Không sửa chương/quiz khác, CSS/JS dùng chung, dependency, URL, anchor s24 hay schema/key tiến độ. Không sửa metadata roadmap `assets/roadmaps/javascript-nnlt.js`; thời gian/tóm tắt ở đó chưa được đồng bộ, không coi metadata ấy là xác nhận độ hoàn thiện bài.

**Mã nguồn xác nhận:** bài từ nội dung ngắn thành tám phần chuẩn, khoảng 2.027 từ tách khoảng trắng ngoài khối code; ví dụ CommonJS Node 24.x/Express 5.x có điểm chạy và client fetch, CRUD sinh viên lưu Map RAM. Bộ đếm tăng không phụ thuộc số hàng, validation ID/tên, 201 Location và 204 không body, middleware chuyển tiếp hoặc phản hồi, phân biệt xác thực với sự hiện diện header. Có giải thích từng phần, lỗi thường gặp, bài tập ba mức, năm quiz có giải thích, liên kết bài MySQL và tài liệu chính thức. Map không phải DB bền vững, thiếu auth và không dùng làm backend production. Đã đối chiếu tài liệu Express middleware/error handling/app.listen và RFC 9110 trong phiên.

| Kiểm tra đã chạy | Kết quả thật |
| --- | --- |
| `node artifacts/rest-chapter24-20261101/check.cjs` | Đạt 6 nhóm: đồng bộ nguồn/HTML/quiz; tất cả chương/quiz khác giữ nguyên; cú pháp hai ví dụ; validation và store chạy bằng Node thật; CRUD/status và lỗi handler bằng test double |
| Chống trùng ID sau xóa | Tạo 1/2, xóa 1, tạo 3; hàng 2 còn nguyên. Bản sao trả ra không sửa được dữ liệu trong store; store mới rỗng |
| Handler qua Express test double | 200/201+Location/204 rỗng; xóa lại 404; ID/tên sai 400, route/tài nguyên thiếu 404, media sai 415; ánh xạ lỗi parser 400/413 và lỗi chung 500 không lộ message |
| `node artifacts/rest-chapter24-20261101/run.cjs` | 12 nhóm browser đạt; Chrome headless HTTP loopback, cùng origin, profile tạm riêng, không dùng storage cá nhân; 0 exception runtime |
| Bài học/quiz 375/768/1440 × sáng/tối | Đạt sáu tổ hợp mỗi trang; theme giữ qua reload ở bài; không tràn ngang; anchor và tám mục còn nguyên; nội dung code sau render khớp nguyên bản. Đã xem 18 ảnh đầu bài/khối code/quiz; chưa audit toàn chiều dài bằng ảnh |
| Quiz | Link thật đến đúng chương; chưa chấm thì ẩn giải thích; đúng 5/5, sai 0/5, hiện 5 giải thích, điểm cao nhất 100 vẫn giữ; Space/ArrowRight chọn/đổi radio |
| `node scripts/check-ui.cjs` trước/sau | 877 HTML, 817 script inline, 739 lỗi cũ; exit 1. Đối chiếu danh sách lỗi, không thêm hoặc xóa lỗi baseline; không đổi checker hay bản lồng |

Bằng chứng chi tiết: [logic-results](../artifacts/rest-chapter24-20261101/logic-results.json), [browser results và URL](../artifacts/rest-chapter24-20261101/results.json), [môi trường/profile](../artifacts/rest-chapter24-20261101/environment.json), [đối chiếu baseline/phạm vi](../artifacts/rest-chapter24-20261101/verification.json). Snapshot hash chỉ đối chiếu phiên này; Git chưa có trong repo, không tự khởi tạo hoặc commit.

**Chưa kiểm chứng:** `require.resolve('express')` trả MODULE_NOT_FOUND; không cài package. Chưa chạy HTTP Express/parser/network thật hoặc client qua server thật; ánh xạ lỗi parser ở trên chỉ được gọi bằng double. Không bật MySQL, Docker, chạy migration, deploy hay tác động dịch vụ ngoài. Công cụ điều khiển desktop trước đó lỗi khởi tạo kernel (os error 3), nên bằng chứng lần này dùng Chrome headless/CDP; không tuyên bố đã thao tác desktop trực tiếp. Không suy rộng thành mọi chương JavaScript đạt, đạt WCAG hoặc an toàn production.

**Bước tiếp đề xuất:** kiểm thử HTTP thật của hai mẫu REST/MySQL trong môi trường thực hành riêng đã có dependency, hoặc nâng một chương Node cơ bản làm tiền đề. Việc cài dịch vụ/dependency và nhân rộng toàn khóa vẫn chưa thực hiện. Dừng ở mẫu chương 24 để người dùng xem.


## Lát mới nhất — nâng cấp mẫu MySQL chương 3 (2026-11-01)

Người dùng đã chọn Node.js/REST API/MySQL và duyệt năm file. Đã nâng cấp [bài 3](../mysql/chapter03.html), đồng bộ nguồn `assets/roadmaps/mysql-source.json` và quiz `assets/roadmaps/mysql-quiz.js`; cập nhật SPEC/STATUS. Không đổi file khác ngoài phạm vi sản phẩm/tài liệu đã duyệt, không thêm dependency vào Synaptrail hoặc bật dịch vụ. Dừng ở một chương mẫu, chưa mở rộng hàng loạt.

### Nội dung mới

- Từ khoảng 242 từ metadata nguồn lên 2.248 từ không tính khối code theo bộ đếm tách khoảng trắng; không coi đây là số từ ngôn ngữ học chuẩn. Đủ tám phần: mục tiêu, vấn đề, lý thuyết, ví dụ/giải thích, lỗi, bài tập ba mức, tóm tắt và quiz riêng.
- Ví dụ schema thử, app.cjs và client Node: GET danh sách/chi tiết, POST tạo sản phẩm; môi trường Node 24.x/Express 5.x/mysql2 3.x/MySQL 8.4. HTTP status, validation, pool, cấu hình qua môi trường và error middleware được giải thích. query có values không bị gọi nhầm là cùng cơ chế prepared statement của execute. Đối chiếu tài liệu chính thức, gồm callback app.listen của Express 5 để không in thành công khi có lỗi mở cổng.
- Bổ sung năm câu quiz, mỗi câu bốn lựa chọn và giải thích; bám đúng nội dung bài. Giữ anchor s11, URL bài/quiz và cơ chế tiến độ. Quiz chương 2 giữ nguyên dữ liệu; không nhúng script/CSS mới vào bài. Tóm tắt hiển thị/meta của bài được cập nhật để bỏ câu cũ nói ORM nằm ở chương sau.
- Đây là nội dung giáo trình, không phải API/backend MySQL đã được cài cho website. Lệnh npm trong bài chỉ dành cho thư mục thực hành riêng. Không lưu mật khẩu thật hoặc chạy SQL trong môi trường của người dùng.

### Kiểm tra đã chạy

| Kiểm tra | Kết quả thật | Giới hạn |
| --- | --- | --- |
| Cú pháp app.cjs, thu-api.cjs | Đạt `node --check` và vm.Script | Không cài hoặc chạy Express/mysql2 thật. |
| Nguồn/HTML/quiz | Đạt | HTML chứa đúng content nguồn; s11 còn một lần; năm câu đồng bộ; dữ liệu quiz chương 2 không đổi. |
| Validation | Đạt bằng test double | Tên rỗng, quá dài, Unicode, giá chuỗi/âm/thập phân/vượt giới hạn, trim và giá 0; chưa kiểm ràng buộc SQL thật. |
| Handler API | Đạt bằng test double | POST 201/Location, input sai 400 và media sai 415 không gọi DB; GET 400/404/200; tên có nháy truyền riêng qua params, LIMIT cố định. Không phải test HTTP/server thật. |
| Error/startup | Đạt bằng test double | Mapping 400/413/503/500, không đưa lỗi thô ra payload; lỗi database/cổng đóng pool, exitCode=1 và không in thành công giả. Express tự chuyển Promise reject theo tài liệu, chưa kiểm runtime framework thật. |
| Bài ở sáu tổ hợp | Đạt | 375/768/1440 × sáng/tối, 8 h2, s11 và code sau render/highlight còn nguyên; không tràn ngang. Đã xem lại ảnh đầu bài và code. |
| Quiz thực trong Chrome | Đạt | Đi từ link cuối bài tới đúng quiz chương 3; năm câu, chưa có giải thích trước chấm; 5/5 và 0/5 đều hiện năm giải thích, lưu điểm cao nhất 100 trong profile thử. |
| Quiz layout/bàn phím | Đạt trong mẫu | Sáu tổ hợp không overflow, đã xem ảnh; Space chọn radio, ArrowRight đổi lựa chọn. Không kiểm toán toàn bộ Tab/screen reader. |
| Exception JavaScript trang học | Đạt trong mẫu | Không Runtime.exceptionThrown trong harness. Không suy thành mọi console warning đều sạch. |

Sáu nhóm kiểm tra logic: [check-lesson.cjs](../artifacts/mysql-chapter03-20261101/check-lesson.cjs), [logic-results.json](../artifacts/mysql-chapter03-20261101/logic-results.json). Mười hai nhóm browser: [run.cjs](../artifacts/mysql-chapter03-20261101/run.cjs), [results.json](../artifacts/mysql-chapter03-20261101/results.json), [environment.json](../artifacts/mysql-chapter03-20261101/environment.json). Lần kết luận dùng HTTP loopback `http://127.0.0.1:63104`, profile Temp riêng; tiến độ chỉ là dữ liệu thử, không dùng profile cá nhân. Chrome/server thử đã dừng. Headless theo helper cũ (disable-gpu/no-sandbox), chặn HTTPS ngoài; chưa nghiệm thu font ngoài, WebGL hoặc thiết bị vật lý.

Đã chụp/xem bài và quiz đủ sáu tổ hợp, gồm code dài; ảnh nằm trong [manifest.json](../artifacts/mysql-chapter03-20261101/manifest.json). Lần browser đầu dùng selector class không có ở bài cũ chưa có quiz, làm các ca phụ thuộc lỗi; đã sửa harness để bấm link href thực và chạy lại. Không gán các lỗi selector đó cho website; dữ liệu cũ giữ trong first-browser-run.json.

### Baseline và phạm vi

`node scripts/check-ui.cjs` trước/sau đều exit 1, 877 HTML, 817 script inline, 739 lỗi; mảng lỗi giống hệt, 0 lỗi phát sinh/0 lỗi giải quyết. 10 lỗi site chính, 729 bản lồng. Đối chiếu SHA-256 và danh sách file ở [verification.json](../artifacts/mysql-chapter03-20261101/verification.json); không bỏ lỗi hoặc thay checker để làm xanh. Git vẫn không nhận diện working tree; không tự init hoặc commit.

### Chưa kiểm chứng và bước tiếp

- Chưa có Express/mysql2 trong môi trường chạy mẫu; không tìm thấy MySQL client trong PATH. Docker CLI báo config access denied và không kết nối được docker_engine. Không tự thay quyền, cài package hoặc bật Engine. Chưa chạy schema, giao thức MySQL, parser Express thật, lưu bền sau restart, quyền SQL hoặc HTTP integration. Các phản hồi API ghi trong bài là kỳ vọng; cảnh báo kiểm chứng đã đặt ngay đầu bài.
- Computer Use native và cua runtime trước đó cùng lỗi `failed to write kernel assets ... os error 3`; không tuyên bố đã điều khiển UI desktop bằng Computer Use. Việc sửa file và kiểm tra headless thực hiện qua công cụ mã nguồn/CDP sẵn có trong phạm vi đã duyệt.
- Chưa đo contrast/Lighthouse, thử clipboard thật hoặc toàn bộ khóa. Không thêm auth, CORS tùy tiện, chống gửi trùng hoặc production deployment vào ví dụ; bài ghi rõ phạm vi local và thiếu sót này.
- Giữ phạm vi năm file: `assets/roadmaps/mysql.js` chưa thay đổi nên metadata roadmap vẫn còn summary/time/quiz của bản ngắn cũ (time=5, quiz=null). Người học mở quiz từ link cuối bài; chưa đồng bộ metadata roadmap ngoài phạm vi đã duyệt và không chạy generator toàn site.

Bước tiếp nên là kiểm chứng ví dụ trên MySQL 8.4 và Express/mysql2 thật trong môi trường thực hành riêng đã được chuẩn bị, rồi duyệt mẫu trước khi nâng cấp các chương Node/REST khác. Chưa tự nhân rộng hoặc thay đổi môi trường.

## Lịch sử — sửa J-03: theme catalog lần đầu (2026-11-01)

Đã sửa trong `courses.html`, cập nhật PROJECT/SPEC/STATUS. Không sửa CSS, trang chủ, initializer dùng chung, giáo trình, URL, dữ liệu tiến độ hoặc dependency. Chưa xử lý J-02 favicon và 739 lỗi baseline.

### Bản sửa và lý do

Head initializer chỉ đọc lựa chọn light/dark hợp lệ, mặc định dark khi thiếu/sai/bị chặn đọc, rồi áp dụng theme. Việc ghi cờ `synaptrail-glass-design` được tách thành try/catch riêng: chỉ ghi cờ, không tự ghi key theme. Nếu ghi cờ bị chặn hoặc hết quota, theme hợp lệ đã đọc vẫn giữ. Initializer cuối trang chỉ đồng bộ icon với theme đã xác định, bỏ lượt đọc/mặc định light thứ hai. Nút đổi theme hiện có vẫn lưu key khi người dùng chủ động bấm. Không xóa hoặc đổi tên các key cũ.

Không dùng initializer chung cho lát này để tránh thay đổi thêm hành vi pageshow/storage của catalog; giữ bản sửa nhỏ tại hai vị trí có nguyên nhân đã xác nhận. Không tuyên bố đồng bộ nhiều tab/Back trong mọi tình huống đã hoàn thiện.

### Kết quả chạy thật

Đã đọc AGENTS, PROJECT, SPEC, STATUS và mã/script liên quan trước khi sửa/chạy. Harness riêng [run.cjs](../artifacts/catalog-theme-20261101/run.cjs) dựa trên CDP harness đã đọc; Chrome finder sẵn có, profile Temp riêng, HTTP loopback và cổng debug tự cấp. Lần kết luận giữ cùng origin `http://127.0.0.1:49757`; không dùng profile/storage cá nhân. Headless dùng disable-gpu/no-sandbox như helper cũ, chặn HTTPS ngoài. Server và Chrome thử đã dừng sau các ca.

| Ca | Kết quả | Quan sát |
| --- | --- | --- |
| Tái hiện J-03 trên profile sạch | Đạt | Java chương 1 chọn sáng → Trang chủ → catalog lần đầu: light ở DOM/storage, cờ được đặt 1, không ép dark. |
| Thiếu/light/dark/invalid × thiếu/có cờ | Đạt 8/8 | Theme hợp lệ giữ nguyên; thiếu/sai dùng dark; reload, về Trang chủ và Back giữ đúng theme. Không tự ghi đè giá trị theme gốc. |
| Dữ liệu ngoài theme | Đạt trong 8 ca | JSON tiến độ fixture và key thử không liên quan giữ nguyên chính xác; không dùng dữ liệu người học làm fixture. |
| Giao diện 375/768/1440 × sáng/tối | Đạt 6/6 | Mỗi lượt bỏ cờ trong profile thử trước khi mở catalog; theme/icon đúng, không overflow. Đã chụp/xem 12 ảnh đầu trang và khu kỹ năng. Ví dụ [375 sáng](../artifacts/catalog-theme-20261101/catalog-375-light-top.png), [1440 tối](../artifacts/catalog-theme-20261101/catalog-1440-dark-cards.png). Không chỉnh bố cục/màu trong lát này. |
| Nút theme bằng bàn phím | Đạt trong mẫu | Đặt focus rồi Enter: đổi theme, có focus-visible và giữ lựa chọn sau reload. |
| Chặn đọc storage | Đạt | Catalog vẫn đọc được, dark fallback và icon khớp. |
| Chặn ghi storage | Đạt | Đọc được light thì vẫn light; lỗi ghi cờ không chuyển sang dark. |
| Quota riêng cho cờ | Đạt | Giả lập QuotaExceededError khi ghi flag: giữ light. |
| Exception JS | Đạt trong mẫu | Không Runtime.exceptionThrown. Không đồng nghĩa đã kiểm mọi console warning. |

Tổng 15 nhóm trong [results.json](../artifacts/catalog-theme-20261101/results.json) đều đạt, gồm nhóm tám tổ hợp và nhóm sáu viewport. [environment.json](../artifacts/catalog-theme-20261101/environment.json) ghi cấu hình thực, [manifest.json](../artifacts/catalog-theme-20261101/manifest.json) liệt kê artifact. Lần kiểm thử đầu được giữ tại first-run.json; đã sửa phép so sánh expectedTheme trong harness và chạy lại toàn bộ, không sửa website để làm test xanh.

Baseline trước/sau sửa: `node scripts/check-ui.cjs` đều exit 1, 877 HTML, 817 script inline, 739 lỗi (10 site chính, 729 bản lồng); toàn bộ mảng lỗi giống hệt, **0 lỗi phát sinh, 0 lỗi được giải quyết**. Hash toàn cây ngoài artifacts/.git chỉ khác `courses.html`, `docs/PROJECT.md`, `docs/SPEC.md`, `docs/STATUS.md`; không xóa file hoặc thay đổi ngoài phạm vi. [verification.json](../artifacts/catalog-theme-20261101/verification.json) ghi đối chiếu. Không hạ mức checker hoặc bỏ bản lồng; chưa có diff/commit Git được xác minh. Artifact nằm riêng trong artifacts, không phải dependency hay công cụ build mới.

### Giới hạn và bước tiếp

Chưa thử thiết bị thật, screen reader, nhiều tab, WebGL, font ngoài, Lighthouse hoặc đo tương phản toàn trang. Không suy từ mẫu catalog sang mọi trang. Bộ test dùng fixture và cơ chế chặn Storage trong profile cô lập để kiểm đường lỗi; không thay dữ liệu hoặc môi trường cá nhân.

J-03 đã xử lý trong phạm vi mẫu; J-01 vẫn giữ bản sửa trước đó. Bước tiếp đề xuất là J-02: khai báo favicon asset sẵn có cho trang chủ và kiểm Network bằng profile sạch. Chưa tự sửa favicon, chưa nhân rộng theme code hoặc xử lý baseline hàng loạt.

## Lịch sử — sửa mẫu J-01: theme trang chủ (2026-10-31)

Đã sửa J-01 trong phạm vi trang chủ theo yêu cầu “Làm bước tiếp theo”. Không đổi khóa học, catalog, URL/anchor, schema/key tiến độ, dependency hoặc dịch vụ; chưa sửa J-02 favicon và baseline SEO. Chưa coi theme toàn website đã nghiệm thu: còn lỗi J-03 ở lần đầu mở catalog, mô tả bên dưới.

### Thay đổi và giải thích

- `index.html`: nạp đồng bộ `assets/theme-init.js` trước CSS để áp dụng lựa chọn trước khi render; thêm stylesheet sáng sau các stylesheet/token cũ. Giữ mặc định dark trong HTML làm fallback, không thêm nút hoặc inline script mới.
- `assets/theme-init.js` (mới): chỉ đọc `synaptrail-theme`, chấp nhận light/dark; thiếu/sai hoặc storage bị chặn thì dùng mặc định của trang. Không ghi storage, không chạm tiến độ. Khôi phục ở pageshow để hỗ trợ Back/Forward và lắng nghe storage khi tab khác đổi lựa chọn. Chưa thử trực tiếp đồng bộ nhiều tab.
- `assets/home-theme.css` (mới): chỉ áp dụng `html[data-theme="light"] .landing-page`; dùng token sẵn có cho nền, header, chữ, nút, card, footer và focus. Cần lớp này vì CSS legacy vẫn ép màu tối dù data-theme đã sáng. Không sửa stylesheet dùng chung hay rule dark.
- `docs/PROJECT.md`, `docs/SPEC.md`, `docs/STATUS.md`: cập nhật phạm vi, cấu trúc, nghiệm thu và bằng chứng của lát này.

### Kiểm tra thật

Harness: [run.cjs](../artifacts/home-theme-20261031/run.cjs). Đã đọc script/helper liên quan trước khi chạy; dùng Chrome finder, HTTP loopback, profile Temp riêng và cổng debug tự cấp, không dùng profile/localStorage cá nhân. Lần kết luận dùng origin `http://127.0.0.1:61674`; server/Chrome thử đã đóng. Headless dùng disable-gpu/no-sandbox như helper sẵn có; HTTPS ngoài bị chặn, không nghiệm thu font ngoài/WebGL/phần cứng thật.

Raw log: [results.json](../artifacts/home-theme-20261031/results.json); cấu hình: [environment.json](../artifacts/home-theme-20261031/environment.json); artifact: [manifest.json](../artifacts/home-theme-20261031/manifest.json). Các lần thử trước giữ riêng trong first/second/third-run.json; không sửa kết quả cũ thành đạt. Ca bookmark được chỉnh harness để mở từ trang khác, tránh nhầm same-document hash navigation với tải bookmark mới; ca catalog đầu được tách riêng sau khi xác định hành vi migration có sẵn.

| Ca | Kết quả | Bằng chứng/giới hạn |
| --- | --- | --- |
| Java chọn light/dark → Trang chủ → reload | Đạt 6/6 | 375/768/1440px × hai theme: data-theme và nền/chữ/nút theo lựa chọn. |
| Trang chủ → catalog → Back | Đạt 6/6 sau lần vào catalog đầu | Dùng navigation history thật, cùng origin. Không che trường hợp lần đầu catalog tự đổi theme: xem J-03. |
| Screenshot/layout | Đạt trong mẫu | 12 ảnh đầu/cuối trang; đã xem lại cả sáu tổ hợp, không tràn ngang hoặc cắt chữ được thấy trong ảnh. Ví dụ [sáng 375](../artifacts/home-theme-20261031/home-375-light-top.png), [sáng 1440](../artifacts/home-theme-20261031/home-1440-light-top.png). |
| Chưa có theme / giá trị sai | Đạt | Trang chủ dark; không tự ghi/ghi đè key theme. |
| Storage bị chặn | Đạt | Chặn getItem trong profile thử trước khi tải: vẫn có nội dung, dark fallback, không exception. |
| Bookmark cũ | Đạt | Mở mới index.html#skill-based từ bài Java vẫn chuyển courses.html#skill-based. |
| Bàn phím | Đạt trong mẫu | Shift+Tab từ CTA tới nút 3D có focus-visible; Enter trên CTA mở catalog. Không phải kiểm toán toàn bộ thứ tự Tab. |
| Reduced motion/fallback | Đạt trong mẫu | prefers-reduced-motion=reduce, motion off, SVG fallback và 8 link khóa học tồn tại. Chưa kiểm WebGL thật. |
| Tương phản mẫu | Đạt hai cặp màu | Tính từ màu CSS thực: lead/nền ~5,93:1 sáng và ~7,82:1 tối; chữ/nút chính ~5,47:1 sáng và ~10,36:1 tối. Chưa đo toàn trang hoặc ảnh nền từng pixel, không tuyên bố WCAG toàn site. |
| JavaScript | Đạt trong mẫu | `node --check assets/theme-init.js` exit 0; không Runtime.exceptionThrown trong harness. |
| check-ui trước/sau | Baseline còn lỗi | Đều exit 1, 877 HTML, 817 inline script, 739 lỗi; toàn bộ mảng lỗi giống hệt, 0 lỗi mới/0 được giải quyết. 10 lỗi site chính, 729 bản lồng. |

### J-03 — catalog ghi đè lựa chọn sáng trong lần vào đầu (P2, chưa sửa)

Tái hiện với profile sạch, chưa có key `synaptrail-glass-design`: mở trực tiếp Java chương 1 → chọn sáng → Trang chủ (giữ sáng đúng sau bản sửa J-01) → bấm Bắt đầu học mở catalog. Kỳ vọng giữ `synaptrail-theme=light`; thực tế catalog ghi dark và đặt migration flag thành 1. Sau đó trang chủ tôn trọng giá trị dark vừa bị catalog thay. Raw case `catalog-first-visit-existing-override` vẫn ghi **lỗi**, không đánh dấu cả harness xanh.

Mã xác nhận tại script đầu `courses.html`: nếu chưa có migration flag thì t='dark' và ghi đè key theme. File này không thay đổi trong lát sửa; đây là hành vi cũ mới phát hiện, không phải regression do J-01. Sau lần vào đầu, sáu chuỗi theme đều đạt. Không tự đặt migration flag trong harness để che lỗi; lần vào đầu được chạy và ghi riêng trước vòng sáu tổ hợp.

Đề xuất lát kế: sửa nhỏ điều kiện migration để chỉ dùng dark mặc định khi chưa có lựa chọn light/dark hợp lệ, giữ lựa chọn người học và xử lý storage lỗi; kiểm profile sạch lẫn đã có flag, cả hai theme và reload/Back. Phạm vi dự kiến `courses.html` (ưu tiên dùng initializer chung nếu phù hợp sau khi đọc lại), test và STATUS; không đổi key hoặc chạy migration dữ liệu hàng loạt. Chưa triển khai ngoài phạm vi trang chủ.

### Phạm vi, giới hạn và bước tiếp

Git vẫn báo không phải repository; không git init/commit. Đã đối chiếu snapshot SHA-256 trước sửa: chỉ index.html; assets/theme-init.js; assets/home-theme.css; docs/PROJECT.md; docs/SPEC.md; docs/STATUS.md thay đổi/tạo mới, không xóa file hay sửa file ngoài phạm vi. Artifact nằm riêng trong `artifacts/home-theme-20261031/`. [verification.json](../artifacts/home-theme-20261031/verification.json) ghi đối chiếu phạm vi và baseline; không hoàn tác thay đổi của người dùng.

Chưa thử thiết bị vật lý, screen reader, nhiều tab, chặn JS hoặc Lighthouse; chưa khẳng định không nháy theme bằng phép đo video/paint. Khởi tạo đồng bộ trước CSS là bảo đảm về thứ tự code, không phải số đo hiệu năng. Bước tiếp đề xuất là J-03 vì ảnh hưởng lựa chọn theme ở profile mới; J-02 favicon vẫn để lát riêng. Dừng ở mẫu trang chủ, chưa nhân rộng initializer.

## Lịch sử — kiểm thử hành trình Java (2026-10-30)

Đã kiểm thử theo yêu cầu mới của người dùng; **chưa sửa mã nguồn website**. Phạm vi tài liệu lần này chỉ cập nhật STATUS. Các mục chuẩn hóa tài liệu bên dưới là lịch sử của lát trước; PROJECT/SPEC chưa được viết lại để tránh sửa ngoài nhu cầu ghi nhận kiểm thử.

### Môi trường và bằng chứng

- Gốc được kiểm tra: `F:/Quoc_Huy/Go/Git/Synaptrail`, không phải bản lồng. Đã đọc AGENTS, PROJECT, SPEC, STATUS; `scripts/browser-check.cjs`, `course-browser.cjs`, `find-chrome.cjs`, `check-ui.cjs`, `html-checks.cjs`; mã tiến độ, roadmap, bài/quiz và menu liên quan trước khi chạy.
- Harness riêng: [run.cjs](../artifacts/java-journey-20261030/run.cjs), chỉ tạo artifact và dữ liệu profile thử; không chạy generator/migration hoặc nguyên browser checker với các giả định cũ. Server Node tạm chỉ bind `127.0.0.1`, dùng cổng được hệ điều hành cấp, phục vụ HTML/JS/CSS/SVG đúng MIME từ gốc website.
- Lần chạy kết luận dùng **một origin duy nhất** `http://127.0.0.1:64392` và profile tạm `synaptrail-java-journey-profile-bibgI5` trong thư mục Temp. Trước thao tác, key tiến độ chưa tồn tại. Không mở profile hay localStorage cá nhân.
- Chrome được finder tìm tại `C:/Program Files/Google/Chrome/Application/chrome.exe`; CDP báo `Chrome/156.0.8078.74`, Node v24.21.0. Dùng headless với `--disable-gpu` và `--no-sandbox` theo helper test hiện có sau khi hai lần khởi động/kết nối ban đầu không hoàn tất. Đây là cấu hình tiến trình thử local; không cài phần mềm hoặc đổi cấu hình Chrome cá nhân, không dùng kết quả này để kết luận bảo mật/WebGL.
- HTTPS ngoài bị chặn trong profile thử để không gọi dịch vụ ngoài. Có 9 resource bị chặn theo chính sách test; font/tài nguyên ngoài và hoạt động online đầy đủ chưa được nghiệm thu.
- Đã xuất file JSON thật qua download, nhập file thật bằng CDP `DOM.setFileInputFiles`, dùng hộp thoại confirm thật với `Page.handleJavaScriptDialog`. Click chuột và phím gửi qua CDP; không thay `confirm`, không giả lập storage hoặc sửa hàm website.
- Bàn phím có đặt focus vào thành phần bằng DOM trước khi gửi phím. Đây là kiểm tra thao tác các thành phần đại diện, chưa phải toàn bộ thứ tự Tab từ đầu trang hoặc kiểm tra screen reader.
- Kết quả chi tiết/URL: [results.json](../artifacts/java-journey-20261030/results.json); cấu hình: [environment.json](../artifacts/java-journey-20261030/environment.json). Ảnh, file nhập/xuất và harness nằm trong `artifacts/java-journey-20261030/` (được Git ignore). [manifest.json](../artifacts/java-journey-20261030/manifest.json) liệt kê artifact; cần giữ cùng thư mục khi chia sẻ báo cáo.
- Lần chạy chức năng đầu có ca bàn phím sai do harness thiếu text cho Enter và chờ trang chưa đủ; đã chỉnh **harness**, bật focus emulation và chạy lại toàn bộ trên profile mới. Các ca tương ứng đều đạt ở lần kết luận. [first-functional-run.json](../artifacts/java-journey-20261030/first-functional-run.json) giữ dữ liệu lần trước; không coi lỗi harness đó là lỗi website.
- Kết thúc đã reset tiến độ thử, đóng Chrome và dừng server của lần chạy kết luận. Các URL loopback bên dưới là địa chỉ lúc thử, hiện không phải website đang phục vụ. Không xóa thư mục profile tạm hoặc artifact.

### Từng ca kiểm tra

URL dưới đây ghép với origin `http://127.0.0.1:64392`; raw log lưu URL đầy đủ. Kết quả áp dụng cho **Java chương 1**; chương 2 chỉ dùng kiểm tra trước/sau, không suy ra mọi chương đạt.

| Ca | Trạng thái | URL/đường dẫn | Quan sát |
| --- | --- | --- | --- |
| 01 Profile cô lập | Đạt | `/index.html` | Tiến độ ban đầu null; toàn bộ hành trình giữ cùng origin/profile tạm. |
| 02 Trang chủ → catalog → Java → bài | Đạt | `/index.html` → `/courses.html` → `/java/index.html` → `/java/chapter01.html` | Click link thật; mục lục render 40 node, bài có h1 “Giới thiệu Java”. 40 node không phải 40 chương. |
| 03 Sidebar bài học | Không áp dụng | `/java/chapter01.html` | Giao diện hiện tại không có `#sidebar`; dùng roadmap, Quay lại và pagination. Không coi thiếu sidebar cũ là lỗi. |
| 04 Trước/sau | Đạt | `/java/chapter01.html` ↔ `/java/chapter02.html` | Bài tiếp theo mở chương 2; Bài trước quay lại chương 1. Chương 1 không có bài trước, phù hợp vị trí đầu khóa. |
| 05 Theme và reload | Đạt | `/java/chapter01.html` | Đổi dark → light, tải lại vẫn light; key theme lưu light. Giới hạn trang chủ xem lỗi J-01 bên dưới. |
| 06 Quiz đúng | Đạt | `/java/quiz.html?chapter=chapter01` | Trước chấm chưa có giải thích; chọn đủ đáp án đúng → 5/5, 100%, hiện 5 giải thích và lưu điểm 100; chưa tự đánh dấu đã học. |
| 07 Quiz sai | Đạt | Cùng URL quiz | Chọn toàn bộ sai → 0/5, 0%, vẫn hiện 5 giải thích; điểm cao nhất giữ 100. |
| 08 Quiz chưa trả lời đủ | Đạt | Cùng URL quiz | HTML validation chặn chấm, không có điểm/giải thích mới. |
| 09 Hoàn thành và reload | Đạt | `/java/chapter01.html` | Nút “Đã xong” giữ aria-pressed=true sau reload; record done=true, quizScore=100. Bài chỉ hiển thị trạng thái, không có thanh đếm/nhãn điểm Java cũ; không kết luận đã có UI điểm trên bài. |
| 10 Tiến độ ở mục lục | Đạt | `/roadmap/java.html#chapter01` | Node chapter01 hiện “✓ Đã xong”; tổng 1/31 mục, 3%. `/java/index.html` dùng cùng roadmap. |
| 11 Tiến độ ở catalog | Đạt | `/courses.html` | Panel và card Java hiện 1/31 chương, 3%; progress.value=1. |
| 12 Menu desktop/bàn phím | Đạt | `/courses.html` @1440 | Enter mở menu, focus tới nút đóng; Tab vào drawer; Escape đóng, trả focus về menu, drawer inert. |
| 13 Xuất tiến độ | Đạt | `/java/index.html` | Tải `synaptrail-progress.json` thật; JSON khớp dữ liệu storage tại thời điểm xuất. Có bản sao `export-original.json`. |
| 14 Nhập bản xuất cũ | Đạt | `/roadmap/java.html#chapter01` | Sau xuất, đổi chương 1 sang “Bỏ qua”; nhập lại bản xuất cũ không đè record local mới hơn. Điểm vẫn 100, done=false, status=skip. |
| 15a Nhập bản mới hơn | Đạt | Cùng URL roadmap | File thử có updatedAt mới hơn 60 giây: chương 1 đổi thành done và điểm 20, thêm chương 2 điểm 60. Thay cả record đúng mã nguồn, không lấy max điểm khi import. |
| 15b Nhập cùng thời gian | Đạt | Cùng URL roadmap | File cùng updatedAt nhưng đổi trạng thái/điểm không đè dữ liệu local. |
| 16a JSON hỏng | Đạt | Cùng URL roadmap | File `{` bị từ chối, có thông báo lỗi parse; storage giữ nguyên. |
| 16b Sai đối tượng gốc | Đạt | Cùng URL roadmap | File `[]` bị từ chối với thông báo phải là đối tượng JSON; storage giữ nguyên. |
| 16c Khóa nguy hiểm | Đạt | Cùng URL roadmap | File chứa `__proto__` bị từ chối; storage giữ nguyên. |
| 16d Record sai schema | Đạt | Cùng URL roadmap | Điểm 101/thời gian sai bị từ chối; storage giữ nguyên. |
| 16e Quá dung lượng | Đạt | Cùng URL roadmap | File 5 MB + 1 byte bị từ chối, thông báo vượt quá 5 MB; storage giữ nguyên. |
| 17 Hủy reset | Đạt | Cùng URL roadmap | Hộp thoại thật hỏi xóa toàn bộ; chọn hủy không đổi dữ liệu. |
| 18 Xác nhận reset | Đạt | Cùng URL roadmap | Key tiến độ bị xóa, roadmap về 0/31; theme và key thử không liên quan vẫn giữ. Không phải reset trình duyệt cá nhân. |
| 19a Responsive | Đạt trong mẫu | 5 trang đại diện × 375/768/1440 × sáng/tối | 30 tổ hợp không overflow theo scrollWidth. Đã chụp và xem lại ảnh tổng hợp; xem thêm ảnh gốc desktop/mobile. Không chứng nhận WCAG/contrast hoặc mọi nội dung dưới màn hình đầu. |
| 19b Theme xuyên trang | Lỗi J-01 | `/index.html`, cả ba độ rộng | 27/30 tổ hợp giữ theme mong muốn; ba lượt home với lựa chọn light vẫn có data-theme=dark và hiển thị tối. |
| 20 Menu mobile | Đạt | `/courses.html` @375 | Enter mở menu/focus nút đóng, Escape đóng và trả focus. Ảnh `catalog-menu-mobile.png`. |
| 21 Roadmap bàn phím | Đạt | `/java/index.html` @375 | Từ chapter01, Tab sang chapter02; Shift+Tab trở lại; Enter mở bài 1. Chỉ kiểm đoạn thứ tự này. |
| 22 Bài học bàn phím | Đạt | `/java/chapter01.html` @375 | Space trên nút Đã xong lưu trạng thái; Enter trên link quiz mở quiz chương 1. |
| 23 Quiz bàn phím | Đạt | `/java/quiz.html?chapter=chapter01` @375 | Space chọn radio, ArrowRight đổi lựa chọn, Enter chấm 5/5. Nút Chấm điểm có focus-visible và outline solid 3px trong ca này. |
| 24 Reset kết thúc | Đạt | `/java/index.html` | Đã xóa tiến độ phát sinh từ ca bàn phím trong profile thử. |
| 25a Exception JavaScript | Đạt trong mẫu | Toàn hành trình | Không ghi nhận Runtime.exceptionThrown. Không đồng nghĩa không có mọi warning/console error. |
| 25b Tài nguyên local | Lỗi nhẹ J-02 | `/favicon.ico` | Một request favicon mặc định trả HTTP 404; ảnh hưởng biểu tượng tab, không chặn học. Các resource local ghi nhận còn lại trả 200. |
| Clipboard, thiết bị thật, screen reader, contrast/Lighthouse | Chưa thử | — | Không suy từ screenshot hoặc thao tác headless thành nghiệm thu các mục này. |

Raw harness có 29 dòng: 27 đạt, 1 không áp dụng, 1 lỗi theme tổng hợp. Bảng trên tách ca gộp để thể hiện rõ từng hành vi; riêng dòng console/network raw được tách thành exception đạt và favicon 404 lỗi nhẹ, không che request lỗi bằng kết quả console.

### Lỗi phát hiện, chưa sửa

**J-01 — Trang chủ không giữ lựa chọn theme sáng (P2).** Tái hiện trên cùng origin: ở bài Java chọn sáng → xác nhận key `synaptrail-theme=light` và reload vẫn sáng → bấm Trang chủ (hoặc mở `/index.html`). Kỳ vọng trang chủ tôn trọng lựa chọn sáng theo quy tắc theme chung. Thực tế trang chủ vẫn dark ở 375, 768, 1440 px; catalog và các trang Java giữ light. Ảnh [home-375-light.png](../artifacts/java-journey-20261030/home-375-light.png) so với [catalog-375-light.png](../artifacts/java-journey-20261030/catalog-375-light.png). Tên ảnh ghi theme yêu cầu, không khẳng định ảnh home thực tế là sáng. Mã xác nhận `index.html` đặt data-theme=dark và không có khởi tạo theme như `assets/algorithm-pages.js`/`roadmap.js`. Phạm vi bản sửa nhỏ đề xuất: khởi tạo lựa chọn theme bằng JS dùng chung ngoài inline và rà token/rule trang chủ trong `assets/home.css`, `glass.css`, `refresh.css`; chỉ đổi file thật sự cần sau khi đọc lại. Nghiệm thu bằng chuỗi đi/về trang chủ, reload và sáu tổ hợp UI; không cần đổi storage key, URL hoặc stack. Chưa sửa, chưa chứng minh chỉ thêm đọc storage là đủ để sửa mọi màu.

**J-02 — Favicon mặc định 404 (P3).** Mở trang chủ trong profile mới, Network có `GET /favicon.ico` → 404; `index.html` chưa khai báo rel=icon, trong khi `assets/favicon.svg` tồn tại. Kỳ vọng biểu tượng tab được khai báo và tải thành công. Đề xuất mẫu nhỏ: thêm link icon hiện có vào trang chủ, thử profile sạch, không tạo dependency hoặc đổi đường dẫn cũ. Chưa kiểm tra mọi trang và chưa sửa.

Hai phát hiện là hành vi sẵn có được quan sát khi website không thay đổi, không phải lỗi do lát kiểm thử tạo ra. Không phải hai lỗi mới trong danh sách 739 lỗi tĩnh; checker không bao phủ hai hành vi này. Các ca khởi động/kết nối và ca bàn phím lần đầu là giới hạn/lỗi harness đã tách riêng, không gán P0/P1 cho website.

### Kiểm tra trước/sau và bước tiếp

Baseline ngay trước chạy: `node scripts/check-ui.cjs`, exit 1, 877 HTML, 817 script inline, 739 lỗi (10 site chính, 729 bản lồng). Đã chạy lại sau cập nhật STATUS: cùng exit/số trang/script và toàn bộ danh sách lỗi giống hệt, **0 lỗi phát sinh, 0 lỗi được giải quyết**. Đối chiếu SHA-256 toàn cây ngoài artifacts/.git chỉ thấy `docs/STATUS.md` đổi; không xóa file, không đổi mã website hoặc tài liệu khác. Artifact là file mới phục vụ kiểm thử, liệt kê riêng trong manifest. Kiểm tra liên kết STATUS không phát hiện đích thiếu; [verification.json](../artifacts/java-journey-20261030/verification.json) ghi kết quả đối chiếu.

Bước tiếp đề xuất: duyệt bản sửa mẫu J-01 cho trang chủ, rồi kiểm lại cùng chuỗi theme; J-02 có thể là lát riêng. Không tự sửa hoặc nhân rộng, không xử lý toàn bộ baseline. Lát kiểm thử đã hoàn thành và ghi nhận cả ca đạt, lỗi, không áp dụng và phần chưa thử.

## Lịch sử — lát chuẩn hóa tài liệu

Đã hoàn thành lát chuẩn hóa tài liệu theo kế hoạch người dùng đã giao. File: `AGENTS.md`, `README.md`, `docs/PROJECT.md`, `docs/SPEC.md`, `docs/STATUS.md`. Không đổi website, checker, dữ liệu, dependency hoặc dịch vụ. Chưa deploy/cài plugin/chạy generator.

Đã ghép quy trình bảy phần, bằng chứng và baseline; giữ quy tắc riêng. Các nhận định cũ trong AGENTS/README được gắn nhãn lịch sử. Không coi lời mô tả về repo private, kết quả Java hoặc deploy là điều vừa được xác minh.

## Kiểm tra lát tài liệu

Trước sửa đã đọc `scripts/check-ui.cjs` và `scripts/html-checks.cjs`, rồi chạy `node scripts/check-ui.cjs`: exit **1**, **877 HTML**, **817 script inline**, **739 lỗi**. So với giai đoạn đánh giá, số lượng không đổi.

| Phạm vi | Lỗi trước sửa | Lỗi sau sửa | Phân loại |
| --- | ---: | ---: | --- |
| Site chính | 10 | 10 | 9 thiếu meta description, 1 thiếu h1 |
| `Synaptrail-main/` | 729 | 729 | 383 thiếu meta description, 346 thiếu h1 |
| Tổng | 739 | 739 | Chưa xử lý trong lát tài liệu |

Site chính: `courses.html` thiếu description; `projects/fullstack-js.html` thiếu h1 và description; `Quiz_and_other/cheatsheet.html`, `exercises.html`, `flashcards.html`, `free-apis-giao-trinh.html`, `glossary.html`, `index.html`, `quiz-tong-hop.html` thiếu description. Đầu ra baseline không có loại lỗi khác; điều này chỉ phản ánh phạm vi checker.

Đã chạy lại `node scripts/check-ui.cjs` sau sửa: exit **1**, **877 HTML**, **817 script inline**, **739 lỗi**. So sánh toàn bộ mảng lỗi với đầu ra trước sửa: giống hệt, **0 lỗi phát sinh, 0 lỗi được giải quyết**. Checker vẫn không đạt do baseline; không gọi đây là kiểm tra xanh.

Đã kiểm tra liên kết Markdown nội bộ trong cả năm file: không có đích thiếu. Đối chiếu SHA-256 của 1.671 file có sẵn trước sửa với cây sau sửa: chỉ `AGENTS.md` và `README.md` đổi; chỉ tạo ba file docs nêu trên; không xóa file hoặc phát hiện thay đổi ngoài phạm vi. Snapshot hash và đầu ra trước sửa lưu ngoài repo trong thư mục tạm; không phải bản backup nội dung hay artifact bền vững. Đã tự review nội dung và phạm vi; chưa có reviewer độc lập hoặc commit Git.

## Kết quả giai đoạn đánh giá trước đó

Các kết quả sau đã chạy trong giai đoạn 1 cùng ngày, không phải chạy lại ở lát tài liệu:

| Kiểm tra | Kết quả lịch sử |
| --- | --- |
| `check-ui.cjs` | 877 HTML, 817 script inline, 739 lỗi như trên |
| `check-progress.cjs` | Đạt: store qua bộ nhớ giả lập, điểm cao nhất, import, JSON lỗi/prototype, reset trong bộ nhớ giả lập, storage blocked/quota |
| `check-highlighter.cjs` | Đạt 14 ca, bảo toàn nội dung, gồm URL chứa `//` |
| `check-card-images.cjs` | Đạt 38 card có khóa, file/nội dung ảnh riêng, đích hợp lệ theo checker |
| `check-first-five-quizzes.cjs` | Đạt dữ liệu 15 chương, 75 câu, 300 lựa chọn; không phải test UI toàn bộ quiz |
| Phép thử Chrome riêng, không lưu ảnh | 5 trang × 3 độ rộng × 2 theme: không overflow hoặc exception; kiểm tra DOM qua file://, không chứng minh thẩm mỹ/WCAG/WebGL |

Mẫu Chrome: `index.html`, `courses.html`, `java/chapter01.html`, `java/quiz.html?chapter=chapter01`, `roadmap/docker.html`; 375/768/1440 px, sáng/tối. Không lấy kết quả trong README cũ làm kết quả phiên mới.

Kiểm kê trước đó: 485 HTML ngoài reports/bản lồng, 8 trong reports, 384 trong bản lồng. Mã xác nhận 22 kỹ năng trong catalog; roadmap thuật toán có 6 node Sắp có. Không đồng nhất số node với số bài hoàn chỉnh.

## Giới hạn và tồn đọng

- `git status --short` ở đầu lát tài liệu vẫn báo “not a git repository”. Chưa có diff/commit/khả năng rollback bằng Git được xác minh; không tự git init. Đối chiếu hash chỉ phát hiện phạm vi thay đổi trong phiên, không chứng minh lịch sử trước đó.
- Chưa chạy lại browser checker, chụp screenshot, kiểm tra thiết bị thật, bàn phím toàn luồng, tương phản, Lighthouse hoặc WebGL qua HTTP. Lát này chỉ sửa Markdown.
- `browser-check.cjs` dùng finder Chrome/CHROME_PATH, cổng 9333, có ghi ảnh và giả định quiz/sidebar/nền cũ. Chưa chạy nguyên script hoặc sửa giả định.
- Chưa chạy toàn bộ code giáo trình; kết quả Java/JDK, SQL/Docker và migration trong README cũ là ghi chép lịch sử, chưa xác minh lại môi trường/kết quả.
- Chưa audit đồng bộ nguồn JSON với HTML toàn bộ, lịch sử secret hoặc bảo mật toàn repo. Không kết luận an toàn chỉ vì test đạt.
- Chưa biết host, domain, DNS, HTTPS, lưu lượng, ngân sách, owner vận hành production; `seo-config.json` có baseUrl rỗng không chứng minh chưa từng deploy.
- Chủ đề Sắp có và đề xuất MySQL/Docker trong reports chưa tương đương khóa hoàn chỉnh. Chưa tự mở rộng nội dung.

## Việc tiếp theo đề xuất

Không có bằng chứng đủ để gán P0. Backlog chưa phải lệnh sửa toàn bộ.

| Mức | Việc | Phạm vi/phụ thuộc | Nghiệm thu |
| --- | --- | --- | --- |
| P1 | Kiểm thử hành trình Java hiện tại | Đọc và điều chỉnh checker liên quan, profile cô lập; duyệt kế hoạch file trước khi sửa | Catalog → roadmap → bài → quiz → tiến độ sau reload; sai đầu vào/storage; bàn phím; báo lỗi thật |
| P2 | Báo riêng site chính/bản lồng | `scripts/check-ui.cjs`, không xóa hoặc che lỗi bản lồng | Vẫn thấy đủ nhóm/lỗi; giữ mức thất bại phù hợp |
| P2 | Sửa 10 lỗi semantic/metadata site chính | 9 HTML nêu trên; mẫu `projects/fullstack-js.html` trước | h1/description đúng nội dung, giữ URL/anchor; không thêm lỗi mới |
| P2 | Đánh giá UI bằng ảnh và bàn phím | Một luồng mẫu; sáu tổ hợp theo AGENTS | Xem ảnh, kiểm focus/contrast/reduced motion/fallback; không bịa chứng nhận |
| P2 | Xác nhận nguồn chuẩn và đồng bộ | Một khóa, source JSON/roadmap/script sinh tương ứng | Dry-run và diff; giữ nội dung, anchor; không chạy hàng loạt trước khi duyệt |
| P3 | Hoàn thiện chủ đề/khóa ngắn | Từng khóa được chọn và duyệt riêng | Ví dụ chạy được, bài tập/quiz đúng nội dung |
| P3 | Chuẩn bị public nếu được yêu cầu | Chọn host/quyền xuất bản trước | URL/deep link/asset/HTTPS và phục hồi có bằng chứng; tránh xuất bản nhầm bản lồng/reports |

Theo dõi local bằng console, thao tác và checker phù hợp; không thêm analytics. Người chịu trách nhiệm vận hành production chưa chốt. Khi tiếp tục, đọc lại mã và chạy baseline mới; không dùng bảng này thay kết quả vừa chạy.

## Đồng bộ GitHub — 2026-11-06

Người dùng yêu cầu push lên `https://github.com/huydoanq1411-oss/Synaptrail.git`. Thư mục nguồn không có `.git`; dùng bản clone riêng tại `artifacts/push-sync-20261106`, giữ lịch sử remote, đồng bộ thêm/sửa, không xóa file và không force push. Không thay đổi kiến trúc hoặc dịch vụ hosting/DNS.

Đã chạy `node scripts/check-ui.cjs` trên nguồn: exit 1, 879 HTML, 817 script inline, 729 lỗi đều thuộc `Synaptrail-main/`; site chính không có lỗi theo checker. Đây là baseline hiện tại, không phải kiểm tra xanh. Lát này chỉ bổ sung mục STATUS này; các thay đổi website là cập nhật đã có trong thư mục nguồn. Không chạy lại browser hoặc nghiệm thu giao diện; không khẳng định WCAG hay toàn bộ ví dụ giáo trình đạt.

Danh sách file đồng bộ chính xác xem diff của commit cập nhật trên GitHub. Artifact, cấu hình IDE/agent cục bộ, dependency/cache và `.env*` không được đưa thêm vào commit. Bước tiếp: xác minh mã commit remote sau push và xử lý baseline bản lồng trong phạm vi được duyệt riêng.
