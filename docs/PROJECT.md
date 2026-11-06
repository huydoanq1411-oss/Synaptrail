# Ngữ cảnh Synaptrail

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
