# Đặc tả và nghiệm thu

## 2026-11-09 — Sửa audit theo phạm vi đã duyệt

Giữ site static, stack và nội dung hiện có; không dependency/backend/DB/auth, không commit/push/deploy. Sửa phím tắt flashcards để bỏ qua input/textarea/select/contenteditable kể cả phần tử con; thêm label nhìn thấy liên kết đúng cho các ô tìm kiếm được audit; giới hạn màu CTA catalog đạt 4,5:1 ở hai theme; khai báo favicon hiện có. Khi storage bị chặn/hết quota, bài vẫn đọc được và thao tác lưu có thông báo tiếng Việt, không có lỗi JS chưa xử lý.

Fixture phải đối chiếu câu hỏi, mọi lựa chọn, đáp án và giải thích với bài hiện hành. Giữ quét đầy đủ Synaptrail-main/ và exit lỗi; phân nhóm để nhìn rõ site chính/bản lồng/reports, chưa tự đặt baseline CI mới. Java chỉ chạy nếu có JDK phù hợp.

Quyết định người dùng: HTML mở rộng docker/chapter01.html (ví dụ Nginx) là bản chuẩn; đồng bộ riêng content/ids/words của bài này vào JSON, giữ snapshot Node.js cũ trong docs/reference/docker-chapter01-node-legacy.json. Kiểm tra nguồn/output đã chuẩn hóa và chặn generator nếu hai bản lệch trước khi ghi. Không chạy generator toàn site.


## 2026-11-08 — Java bài 18: Generics, đã duyệt tiếp tục

Sau mẫu bài 16, người dùng duyệt tiếp tục bổ sung Generics. Phạm vi: java/chapter18.html, assets/roadmaps/java-source.json, assets/roadmaps/java.js, assets/roadmaps/java-quiz.js, docs/SPEC.md, docs/STATUS.md. Nội dung theo khung chuẩn: tham số/đối số kiểu, class/method tổng quát, wrapper, invariant, wildcard extends/super/PECS, erasure và giới hạn; hai chương trình Java 8+ độc lập, bài tập ba mức và năm câu quiz chỉ dựa trên bài. Có nguồn Oracle đối chiếu. Giữ s18/chapter18, route, navigation, tiến độ và nội dung các chương khác, gồm bài 16 vừa cập nhật.

Nghiệm thu: source/HTML/quiz đồng bộ, không mất dấu tiếng Việt, cú pháp JS, browser bài/quiz ở 375/768/1440 × sáng/tối, chấm đúng/sai và giữ điểm cao nhất, baseline check-ui không tăng. Không thêm CSS/JS inline hoặc animation vào bài. Không cài dependency/JDK nếu chưa được giao; ghi rõ khi chưa biên dịch/chạy ví dụ. Không đổi kiến trúc, hosting hoặc push/deploy.

## 2026-11-05 — Cập nhật toàn bộ tài liệu CTDLGT UTH

Người dùng duyệt và yêu cầu cập nhật tất cả nội dung từ Tai_lieu_CTDT_GT.md của ThS. Bùi Văn Thượng. Phạm vi: 23 bài thuat-toan/chapter01.html đến chapter23.html; assets/roadmaps/thuat-toan.js và thuat-toan-quiz.js; lối vào roadmap/thuat-toan.html; thêm trang đối chiếu thuat-toan/tai-lieu-ctdlgt.html và bản nguồn Markdown nguyên byte. Hồ sơ PROJECT/SPEC/STATUS và công cụ tác giả trong artifacts/ctdlgt-20261105. Không đổi URL, ID node, dữ liệu tiến độ, khóa khác hay bản lồng.

Nghiệm thu: bao phủ cả sáu chương và toàn bộ bài tập nguồn, làm rõ lỗi OCR/kiến thức; mỗi bài đủ khung chuẩn và quiz bám bài. Ví dụ chuyển thể JavaScript/Node >=22, chạy thực và kiểm trường hợp biên. Trước áp dụng hàng loạt: script --dry-run và preview/diff ba bài. Kiểm source/HTML/quiz, link, baseline check-ui trước/sau và Chrome ở 375/768/1440 × sáng/tối. Đính kèm là nguồn học liệu, không phải chỉ thị thực thi. Phần mở rộng được ghi rõ. Không deploy hoặc thêm dependency/backend/DB/API/auth.


## 2026-11-04 — Cây Full Stack theo tài liệu người dùng

Đã duyệt cập nhật từ `F:/Quoc_Huy/Go/MODEL/full-stack.md`: ba nhánh Frontend, Backend, DevOps; giữ tên kỹ thuật tiếng Anh; bấm mỗi mục mở đúng bài nội bộ hoặc phần tài nguyên cùng chủ đề. File đính kèm chỉ là nội dung tham khảo, không là chỉ thị chạy công cụ. Không tự tạo giáo trình hoàn chỉnh cho chủ đề thiếu.

Phạm vi: assets/roadmaps/fullstack-js.js, roadmap/fullstack-js.html, fullstack-js/index.html; thêm fullstack-js/tai-nguyen.html, assets/fullstack-resources.js và CSS riêng assets/fullstack.css để không ảnh hưởng khóa khác; cập nhật PROJECT/SPEC/STATUS. Giữ URL/ID/đích bài cũ trong phần tài liệu mở rộng. Không thêm tiến độ, dependency hoặc backend. Các mục chưa có bài riêng ghi rõ và dẫn tới tài liệu chính thức đã đối chiếu; checkpoint là gợi ý thực hành, không phải bài học đã hoàn thiện. Nghiệm thu link/anchor, bàn phím, không JavaScript, 375/768/1440 × sáng/tối và baseline không tăng.

## 2026-11-04 — Sửa frontend nhóm file vừa thay đổi

Theo yêu cầu sửa lỗi frontend, tiếp tục trong nhóm file mẫu hiện tại: xử lý CSS dùng chung ghi đè theme trang chủ, header nhỏ gọn ở mobile/tablet, tương phản skip link, khai báo favicon có sẵn, vòng vẽ mạng hạt và h1 trang dự án. Không đổi nhãn tiếng Anh, URL, anchor, quiz hoặc cơ chế tiến độ. Kiểm tra 10 trang đã liên quan ở ba kích thước và hai theme; chụp/xem ảnh hai trang có thay đổi bố cục. Không sửa bản lồng hoặc mở rộng toàn bộ chương.

## 2026-11-04 — Tài liệu học tập, metadata và mẫu mạng hạt trang chủ

Người dùng xác nhận website là tài liệu học tập, không yêu cầu thêm tiến độ; giữ nhãn Role-based, Skill-based, Best Practices, Project Ideas bằng tiếng Anh. Không suy diễn thành yêu cầu xóa cơ chế tiến độ hiện có.

Phạm vi mẫu đã duyệt: thêm meta description cho courses.html, projects/fullstack-js.html và bảy trang công cụ ôn tập; thay mũi tên ký tự bằng SVG ở index.html; gom CSS trang chủ; mạng hạt Canvas 2D ở nền trang chủ, nút bật/tắt, reduced motion và dừng khi tab ẩn. Không dependency, không hiệu ứng mới ở trang chương. Đối chiếu nguồn–HTML–roadmap–quiz khóa Java ở chế độ đọc; không tự bổ sung câu hỏi hoặc sinh lại HTML.

Nghiệm thu: 375/768/1440 × sáng/tối, xem ảnh, không tràn ngang, nút dùng được bằng bàn phím, không lỗi JavaScript mới; check-ui giảm đúng chín lỗi description và không phát sinh lỗi. Dừng ở mẫu, chỉ nhân rộng sau khi người dùng xem và duyệt.

## 2026-11-03 — Mẫu tilt, shine và phản hồi nhập

Đã duyệt mẫu bốn `.path-card` ở trang chủ: tilt theo chuột và shine theo tọa độ, dùng nút 3D hiện có. Ô tìm kiếm catalog có glitch ngắn trên icon và ba chấm typing mỗi đợt nhập; không sửa value/selection, không cản bộ gõ tiếng Việt. Không nhân rộng sang nhóm card khác hoặc trang chương. CSS/JS thuần trong assets, không dependency mới. Tôn trọng giảm chuyển động, thiết bị cảm ứng và bàn phím. Nghiệm thu hai trang ở 375/768/1440 với hai theme; baseline không tăng.

Cập nhật: 2026-11-01. Ngữ cảnh: [PROJECT](PROJECT.md); bằng chứng thực thi: [STATUS](STATUS.md). Tiêu chí dưới đây là yêu cầu/đích kiểm tra, không phải tuyên bố mọi mục đã đạt.

## Lát hiện tại: kiểm HTTP thật và củng cố client Express

Người dùng giao tiếp tục nhiều bước trong phạm vi đã rõ, không hỏi lại. Dùng Express chỉ trong artifacts/http-integration-20261101, không đổi dependency/stack website. Kiểm HTTP thật chương 23/24 từ code trong nguồn hiện tại; dùng loopback/cổng ngẫu nhiên do harness sở hữu, đóng sau test. Củng cố client 24 bằng assert/timeout, cập nhật hai bài/nguồn và hồ sơ theo bằng chứng. Không bật MySQL/Docker, deploy hoặc sửa baseline.

Nghiệm thu: routing/query/parser/CRUD/status/Location/204/cổng bận thật, hai client đạt và client sai phải thất bại. Giữ quiz/URL/tiến độ; source/HTML khớp, metadata thời gian khớp nếu thay; kiểm trình duyệt khi thay nội dung và đối chiếu hash/baseline.

## Lịch sử — nâng chương 23 — Express cơ bản

Người dùng giao một chương mẫu. Sáu file: `javascript-nnlt/chapter23.html`, `assets/roadmaps/javascript-nnlt-source.json`, `assets/roadmaps/javascript-nnlt-quiz.js`, `assets/roadmaps/javascript-nnlt.js`, SPEC/STATUS. Giữ URL, s23, tiến độ, chương/câu hỏi khác. Không cài dependency, mở dịch vụ backend hoặc chạy generator toàn khóa.

Nghiệm thu: tám phần, Node 24.x/Express 5.x, server local và client assert; phân biệt params/query, 400/404, trang rỗng, response một lần và lỗi listen. Năm quiz bám bài, metadata và toolbar đồng bộ. Test logic bằng Node/test double khi thiếu Express; ghi rõ chưa HTTP integration. Kiểm UI/quiz sáu tổ hợp, bàn phím, baseline và hash phạm vi.

## Lịch sử — đồng bộ metadata và đường vào quiz của ba chương mẫu

Người dùng giao đồng bộ MySQL chương 3 và JavaScript chương 22/24. Phạm vi: `assets/roadmaps/mysql.js`, `assets/roadmaps/javascript-nnlt.js`, `mysql/chapter03.html`, `javascript-nnlt/chapter22.html`, SPEC/STATUS. Không sửa nội dung bài, nguồn JSON, câu hỏi, URL hoặc dữ liệu tiến độ.

Nghiệm thu: summary node khớp nguồn; thời gian dùng công thức dự án max(5, ceil(words/180)) và nhóm cha bằng tổng node con; quiz trỏ đúng chương có năm câu. Hai bài thiếu có link đầu bài cùng mẫu SVG/CSS hiện có; link cuối bài và chương 24 giữ nguyên. Kiểm đường roadmap → quiz và bài → quiz bằng profile tạm, bàn phím, sáu viewport/theme và baseline trước/sau. Thời gian là ước lượng đọc, không tính thực hành. Không chạy generator toàn khóa.

## Lịch sử — Node.js File System chương 22

Tiếp tục một chương nền Node theo yêu cầu nâng cấp. Sửa `javascript-nnlt/chapter22.html`, `assets/roadmaps/javascript-nnlt-source.json`, `assets/roadmaps/javascript-nnlt-quiz.js`, SPEC/STATUS; thêm artifact kiểm thử. Giữ anchor s22, URL, key tiến độ, chương/quiz khác. Không cài dependency hoặc dịch vụ.

Nghiệm thu: tám phần, ví dụ Node 24.x dùng fs/promises chạy thật trong thư mục tạm, UTF-8/JSON/schema, ENOENT khác lỗi dữ liệu, wx/EEXIST không ghi đè. Năm quiz bám bài; kiểm Node I/O thật và UI sáu tổ hợp viewport/theme; baseline không tăng. Không thay chức năng xuất/nhập tiến độ của website.

## Lịch sử — Express REST API chương 24

Tiếp tục theo yêu cầu người dùng, làm một chương mẫu trong JavaScript. Phạm vi: `assets/roadmaps/javascript-nnlt-source.json`, `javascript-nnlt/chapter24.html`, `assets/roadmaps/javascript-nnlt-quiz.js`, SPEC và STATUS. Giữ URL, anchor s24, key tiến độ, chương/quiz khác và stack website. Không cài Express hoặc triển khai backend.

Nghiệm thu: khung tám phần, ví dụ Node 24.x/Express 5.x có điểm chạy, CRUD RAM với ID không trùng sau xóa, validation và mã HTTP rõ; không coi header là xác thực; năm quiz có giải thích bám bài. Chạy kiểm tra hàm bằng Node, handler qua test double khi thiếu Express; ghi rõ chưa tích hợp HTTP thật. Kiểm tra HTML/nguồn/quiz, sáu viewport/theme, quiz đúng/sai/bàn phím và baseline trước/sau. Không nhân rộng cả khóa.

## Lịch sử — nâng cấp mẫu MySQL chương 3

Người dùng đã chọn Node.js/REST API/MySQL và duyệt phạm vi năm file: `assets/roadmaps/mysql-source.json`, `mysql/chapter03.html`, `assets/roadmaps/mysql-quiz.js`, `docs/SPEC.md`, `docs/STATUS.md`. Thay nội dung một chương; không đổi stack Synaptrail, URL, anchor s11, key tiến độ, CSS/JS dùng chung hoặc câu hỏi chương khác. Không cài package, bật MySQL/Docker hoặc chạy migration toàn bộ. Ví dụ Express/mysql2 nằm trong bài và artifact kiểm thử, không phải dependency của website.

Nghiệm thu: đủ mục tiêu → vấn đề → lý thuyết → ví dụ hoàn chỉnh/giải thích → lỗi → bài tập ba mức → tóm tắt → năm quiz riêng bám bài. Ví dụ ghi rõ Node 24.x, Express 5.x, mysql2 3.x, MySQL 8.4; cấu hình không chứa bí mật thật. SQL cố định + execute với tham số, validation tên/giá, GET danh sách/chi tiết và POST, status 200/201/400/404/413/415/500/503 theo tình huống. Không đồng nhất query có values với server-side prepared statement; không dùng tài khoản root trong API hoặc public ví dụ chưa có auth.

Kiểm tra: nguồn/HTML/quiz khớp, giữ chương 2 và anchor, cú pháp ví dụ, các hành vi validation/handler bằng test double nếu thiếu dependency, UI/quiz qua profile tạm và sáu tổ hợp viewport/theme, baseline check-ui trước/sau. Test double không thay kiểm tra Express parser/network hoặc MySQL thật; phần chưa chạy phải ghi ngay trong bài và STATUS. Làm mẫu rồi dừng, chưa nhân rộng sang các chương Node/REST khác.

## Lịch sử — J-03: giữ lựa chọn theme ở catalog lần đầu

Người dùng yêu cầu tiếp tục sau đề xuất J-03. Sửa nhỏ `courses.html` và cập nhật PROJECT/SPEC/STATUS; không thêm asset/dependency, không chỉnh CSS, URL, khóa học hoặc dữ liệu tiến độ. Không nhân rộng theme initializer sang các trang khác; J-02/favicon và baseline còn ngoài phạm vi.

Nghiệm thu: có/không cờ migration, lựa chọn light/dark hợp lệ được giữ, không có giá trị/sai/bị chặn đọc thì dùng tối; ghi cờ bị chặn/hết quota không thay lựa chọn đã đọc được. Catalog không tự ghi đè key theme hoặc chạm tiến độ; nút theme vẫn đổi/lưu lựa chọn khi người dùng bấm. Thử Java → Trang chủ → catalog ngay lần đầu, reload/Back, bàn phím; chụp/xem catalog ở 375/768/1440px × hai theme; check-ui không thêm lỗi baseline.

## Lịch sử — sửa mẫu J-01: theme trang chủ

Người dùng yêu cầu “Làm bước tiếp theo” sau đề xuất sửa J-01. Phạm vi: `index.html`, thêm `assets/theme-init.js` và `assets/home-theme.css`; cập nhật PROJECT/SPEC/STATUS để ghi nhận. Giữ URL/anchor, key dữ liệu, theme mặc định tối khi chưa có lựa chọn, hành vi Java và catalog. Không thêm dependency, dịch vụ, nút mới, sửa favicon hoặc 739 lỗi baseline.

Nghiệm thu: từ bài Java chọn sáng hoặc tối, quay về trang chủ, reload và đi/Back từ danh mục vẫn giữ lựa chọn; giao diện thực tế theo theme, không chỉ thay data attribute. Chụp/xem lại trang chủ 375/768/1440px × hai theme, gồm phần dưới trang; không tràn ngang. Không có lựa chọn, giá trị sai hoặc storage bị chặn vẫn đọc được trang với mặc định tối, không ghi đè dữ liệu. Kiểm tra CSS chỉ áp dụng trang chủ sáng, code mới có cú pháp hợp lệ và check-ui không thêm lỗi baseline.

Giới hạn phát hiện khi nghiệm thu: lần đầu mở catalog có migration cũ ghi đè theme sáng (J-03 trong STATUS). Chuỗi đi/Back đạt sau lần catalog đầu; ca profile sạch này vẫn ghi lỗi, chưa được sửa trong lát trang chủ. Không coi bản sửa J-01 là đã hoàn thiện đồng bộ theme toàn website.

## Lịch sử — lát chuẩn hóa tài liệu

Người dùng đã yêu cầu áp dụng kế hoạch sau giai đoạn đánh giá. Placeholder `[TÊN VIỆC ĐÃ CHỌN]` được hiểu theo lát tài liệu vừa đề xuất, không mở thêm phạm vi chức năng.

Phạm vi chính xác: sửa `AGENTS.md`, `README.md`; tạo `docs/PROJECT.md`, `docs/SPEC.md`, `docs/STATUS.md`. Giữ nguyên thay đổi có sẵn ngoài năm file này. Chưa sao chép `docs/playbook/`, cài plugin, thêm stack/dịch vụ, sửa checker, UI, giáo trình hoặc lỗi SEO.

Tiêu chí nghiệm thu:

1. Giữ quy tắc dự án về duyệt mẫu, dependency/CDN, URL/anchor, dữ liệu, nội dung và UI; ghép playbook có chọn lọc.
2. PROJECT có mục tiêu, hồ sơ static theo rủi ro, đủ bảy phần, nguồn mã/lệnh và điều chưa biết.
3. README mô tả cách chạy và hành vi hiện tại; ghi chép cũ được đánh dấu lịch sử, không coi kết quả cũ là test vừa chạy.
4. STATUS ghi kiểm tra trước/sau, so sánh lỗi cụ thể, file đã đổi, giới hạn và bước tiếp. Không sửa checker để che baseline.
5. Không đổi file sản phẩm, URL, anchor, schema/key tiến độ hoặc dependency. Đối chiếu hash toàn cây với snapshot trước sửa; nếu có thay đổi ngoài phạm vi thì kiểm tra và báo, không tự hoàn tác file của người dùng.
6. Liên kết tài liệu nội bộ tồn tại; review nội dung không còn template chưa điền hoặc kết luận không có bằng chứng.

## Luồng học hiện có cần bảo toàn

Các mục sau rút từ mã đã đọc; cần kiểm thử riêng trước khi kết luận nghiệm thu toàn bộ.

| Luồng | Đầu vào và kết quả mong muốn | Lỗi/trạng thái cần kiểm tra | Mã liên quan |
| --- | --- | --- | --- |
| Chọn hướng học | Trang chủ → catalog; role mở nhóm kỹ năng theo cấu hình; link mở đúng khóa | Role hash không hợp lệ; đóng/Escape trả focus; panel desktop và modal mobile | `index.html`, `courses.html`, `assets/catalog.js` |
| Tìm kiếm | Chuỗi có/không dấu lọc kỹ năng và tài nguyên; độc lập với role mở | Từ khóa rỗng, không kết quả; thông báo đọc được bằng công nghệ hỗ trợ | `catalog.js`: `normalize/search` |
| Roadmap → bài | Chọn node mở bài hoặc trang chủ đề; có đường quay lại và trang chủ | Node không hợp lệ, nhóm không có chương riêng, trạng thái Sắp có; giữ fragment cũ | `roadmap.js`, `algorithm-topic.js`, dữ liệu từng khóa |
| Trạng thái học | Chọn đang học/xong/bỏ qua; giữ sau reload trên cùng origin/profile | Storage bị chặn, quota, JSON hỏng; báo lỗi, vẫn đọc được bài | `algorithm-pages.js`, `progress.js` |
| Quiz riêng | Chọn chương, trả lời radio, chấm điểm và giải thích; lưu điểm cao nhất | Chưa chọn đủ, chương không có quiz, khóa chưa có quiz, lỗi lưu; không tự đánh dấu hoàn thành | `algorithm-pages.js`: `showQuiz`, `<khóa>-quiz.js` |
| Sao lưu tiến độ | Xuất JSON, nhập và gộp bản mới hơn; không reset nếu hủy xác nhận | JSON/schema sai, khóa nguy hiểm, file >5 MB; dữ liệu cũ không bị thay khi nhập lỗi | `progress.js`, `roadmap.js` |
| Copy | Sao chép nguyên code | Clipboard bị từ chối: chọn code và hướng dẫn Ctrl+C; cần thử quyền thực qua HTTP | `algorithm-pages.js` |

Không có quyền tài khoản/server trong phạm vi này. Dữ liệu chỉ của trình duyệt hiện tại; không có yêu cầu đồng bộ cloud hoặc chống sửa điểm bởi chủ thiết bị. Bài học về AI/API/backend không phải dịch vụ AI/API/backend đang vận hành cho Synaptrail.

## Yêu cầu chất lượng

- Tiếng Việt, giải thích thuật ngữ và code theo AGENTS. Khung nội dung đã duyệt: mục tiêu → vấn đề → lý thuyết → ví dụ từng dòng → lỗi → bài tập ba mức → tóm tắt → quiz. Quiz có thể nằm ở trang riêng; không tự nhúng lại hoặc đổi ID.
- UI sáng/tối ở 375/768/1440 px, không tràn ngang; dùng bàn phím, focus rõ, WCAG AA là mục tiêu cần đo, không phải chứng nhận sẵn có. Khi đổi UI phải chụp/xem lại đủ sáu tổ hợp theo AGENTS.
- Trạng thái có chữ hoặc biểu tượng, icon theo quy tắc SVG; tôn trọng reduced motion và fallback WebGL. Không có thay đổi UI trong lát tài liệu nên không phát sinh đợt screenshot mới.
- Không thêm bí mật, tracking hoặc dịch vụ ngoài. Dữ liệu nhập là dữ liệu, không thực thi như code.
- Chưa chốt chỉ số hiệu năng, tải, ngân sách hoặc thời hạn; không tự đặt điểm Lighthouse/ngưỡng tải làm kết quả đã đạt.

## Quyết định và phạm vi tiếp theo

| Ngày | Quyết định | Trạng thái |
| --- | --- | --- |
| 2026-10-30 | Đánh giá trước, chưa sửa file ở giai đoạn 1 | Đã thực hiện; kết quả lịch sử ở STATUS |
| 2026-10-30 | Áp dụng playbook theo kế hoạch; thực hiện lát chuẩn hóa tài liệu | Người dùng đã giao; không cần hỏi lại quyền trong lát này |
| 2026-10-30 | Lát đề xuất tiếp: kiểm thử hành trình Java trên profile cô lập | Chưa triển khai; không tự nhân rộng hoặc sửa mọi lỗi baseline |

## 2026-11-06 — Mẫu animation trang chủ đã duyệt

Phạm vi mẫu: bốn path-card, tiêu đề lộ trình và khối cuối trang chủ. Card nâng nhẹ khi hover chuột, thu nhỏ khi nhấn; focus bàn phím rõ ràng. Scroll reveal chạy một lần, 280ms, stagger 50ms, dịch 8px và opacity. Không áp dụng trang chương. Giữ URL, dữ liệu và stack; không dependency. Reduced motion bỏ chuyển động; nội dung mặc định hiện khi không có JS. Animation nhường ngay cho pointer/focus để không tranh transform với tilt.

Nghiệm thu: check-ui trước/sau, Chrome profile cô lập ở 375/768/1440 × sáng/tối, giảm chuyển động, hover/press và focus. Dừng ở mẫu để người dùng xem trước khi nhân rộng.

## 2026-11-08 — Mẫu Java bài 16: List và lựa chọn cấu trúc

Người dùng yêu cầu tiếp tục cập nhật kiến thức và cho phép tiếp tục sau đề xuất mẫu bài 16. Phạm vi: java/chapter16.html, assets/roadmaps/java-source.json, assets/roadmaps/java.js, assets/roadmaps/java-quiz.js, docs/SPEC.md và docs/STATUS.md. Bổ sung khung mục tiêu, vấn đề thực tế, lý thuyết, hai ví dụ main độc lập Java 8+, giải thích, lỗi thường gặp, bài tập ba mức, tóm tắt và năm câu quiz ở trang riêng. Đối chiếu tài liệu Oracle List/Iterator Java 8 và ArrayList/LinkedList Java 21; chỉ dùng API Java 8 trong mã.

Giữ s16, ID node, URL, parent/side và dữ liệu tiến độ; source.content phải khớp HTML. Thêm quiz đúng nội dung bài, giải thích đáp án và đường vào từ bài/roadmap; không thay câu hỏi chương khác. Nghiệm thu check-ui trước/sau, source/HTML/quiz, browser responsive và chấm đúng/sai. Biên dịch/chạy ví dụ nếu tìm thấy JDK; không tự cài thêm công cụ, báo rõ giới hạn nếu chỉ có JRE. Không thêm animation trang chương, dependency, backend/database/API/auth; hosting/domain/DNS/HTTPS ngoài phạm vi, không deploy/push.
