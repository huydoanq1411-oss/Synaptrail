/* Canonical roadmap and lessons. CTDLGT editorial source: artifacts/ctdlgt-20261105/content.cjs. */
globalThis.SynaptrailRoadmapData = {
  "layout": {
    "nen-tang": {
      "right": [
        {
          "nodes": [
            "chapter01",
            "chapter02",
            "chapter03",
            "chapter04"
          ]
        }
      ]
    },
    "sap-xep": {
      "left": [
        {
          "title": "Sắp xếp cơ bản",
          "tiles": true,
          "nodes": [
            "chapter05",
            "chapter06"
          ]
        },
        {
          "nodes": [
            "chapter11"
          ]
        }
      ],
      "right": [
        {
          "title": "Sắp xếp nâng cao",
          "hub": true,
          "nodes": [
            "chapter07",
            "chapter08",
            "chapter09",
            "chapter10"
          ]
        }
      ]
    },
    "tim-kiem": {
      "left": [
        {
          "nodes": [
            "chapter12",
            "chapter13"
          ]
        }
      ],
      "right": [
        {
          "nodes": [
            "chapter14",
            "chapter15"
          ]
        }
      ]
    },
    "tuyen-tinh": {
      "left": [
        {
          "title": "Lưu trữ & liên kết",
          "nodes": [
            "chapter16",
            "chapter17"
          ]
        }
      ],
      "right": [
        {
          "title": "Ngăn xếp & hàng đợi",
          "tiles": true,
          "nodes": [
            "chapter18",
            "chapter19"
          ]
        }
      ]
    },
    "cay": {
      "left": [
        {
          "nodes": [
            "chapter20",
            "chapter21",
            "chapter22"
          ]
        }
      ],
      "right": [
        {
          "nodes": [
            "chapter23"
          ]
        }
      ]
    },
    "do-thi": {
      "right": [
        {
          "nodes": [
            "bfs-dfs",
            "dijkstra",
            "union-find"
          ]
        }
      ]
    }
  },
  "course": "thuat-toan",
  "title": "Thuật toán & Cấu trúc dữ liệu",
  "continueWith": [
    {
      "title": "C++",
      "chapter": "cpp/index.html",
      "summary": "Thực hành bằng C++"
    },
    {
      "title": "Java",
      "chapter": "java/index.html",
      "summary": "Thực hành bằng Java"
    },
    {
      "title": "Python",
      "chapter": "python/index.html",
      "summary": "Thực hành bằng Python"
    },
    {
      "title": "System Design",
      "chapter": "system-design/index.html",
      "summary": "Tiếp nối với thiết kế hệ thống"
    }
  ],
  "nodes": [
    {
      "id": "nen-tang",
      "title": "Nhập môn & độ phức tạp",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Định nghĩa, tính chất, và tại sao việc học thuật toán quan trọng hơn việc học riêng một ngôn ngữ lập trình.",
      "time": 40,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter01",
      "title": "Thuật toán là gì?",
      "type": "chi-tiet",
      "side": "left",
      "parent": "nen-tang",
      "chapter": "thuat-toan/chapter01.html",
      "summary": "Xác định bài toán và dữ liệu trước khi chọn thuật toán; kiểm tra cả tính đúng, điều kiện dừng và tài nguyên.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Xác định bài toán và dữ liệu trước khi chọn thuật toán; kiểm tra cả tính đúng, điều kiện dừng và tài nguyên.",
        "code": "function timSinhVien(danhSach, ma) {\n   for (const sinhVien of danhSach) { // Xét từng bản ghi theo thứ tự.\n     if (sinhVien.ma === ma) return sinhVien; // Trả đúng bản ghi cần tìm.\n   }\n   return null; // Đã xét hết mà không thấy.\n }\n const lop = [{ma: 12, ten: 'An'}, {ma: 34, ten: 'Bình'}];\n console.log(timSinhVien(lop, 34)); // {ma: 34, ten: 'Bình'}\n console.log(timSinhVien(lop, 99)); // null",
        "goals": [
          "Mô hình hóa đầu vào, đầu ra và ràng buộc.",
          "Chọn cấu trúc dữ liệu theo thao tác cần thực hiện.",
          "Phân biệt thuật toán đúng với chương trình chạy được."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 1.1, 1.2, 1.3.1, 1.3.2, 1.4. <a href=\"tai-lieu-ctdlgt.html#tong-quan\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Mô hình hóa đầu vào, đầu ra và ràng buộc.</li><li>Chọn cấu trúc dữ liệu theo thao tác cần thực hiện.</li><li>Phân biệt thuật toán đúng với chương trình chạy được.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Một lớp cần tìm sinh viên có mã số cho trước. Trước khi viết chương trình, phải xác định mã số có duy nhất không, dữ liệu nằm ở đâu và phải trả về gì khi không tìm thấy.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><h3>Từ bài toán thực tế đến mô hình</h3><p>Mô hình hóa là giữ lại dữ liệu và quan hệ cần cho lời giải. Bài tô màu bản đồ có thể biểu diễn mỗi vùng bằng một đỉnh, biên giới chung bằng một cạnh; yêu cầu trở thành tô màu các đỉnh kề nhau khác màu. Đây là ví dụ mô hình hóa, chưa phải một thuật toán tìm số màu tối thiểu.</p>\n <h3>Kiểu dữ liệu và cấu trúc dữ liệu</h3><p>Kiểu dữ liệu gồm tập giá trị và các phép toán hợp lệ. Boolean có hai giá trị đúng/sai; cấu trúc dữ liệu tổ chức nhiều giá trị cùng quan hệ: mảng và danh sách là tuyến tính, cây phân cấp, bảng băm ánh xạ khóa đến ô chứa, đồ thị diễn tả quan hệ tổng quát. Miền số nguyên phụ thuộc ngôn ngữ và kiểu cụ thể, không mặc định là số nguyên 16 bit.</p>\n <p>Chọn cấu trúc phải đủ thông tin nhập/xuất, phù hợp thao tác, khả năng ngôn ngữ và tài nguyên. Mảng thuận tiện truy cập theo chỉ số; danh sách thuận tiện đổi liên kết khi đã biết vị trí; bảng băm phục vụ tra cứu khóa.</p>\n <h3>Thuật toán và chương trình</h3><p>Algorithm (thuật toán) là dãy bước xác định để giải bài toán trong miền đầu vào đã nêu. Cần đầu vào/đầu ra rõ, các bước khả thi, tính hữu hạn và tính đúng. Kết thúc không đồng nghĩa kết quả đúng. Có thể biểu diễn bằng ngôn ngữ tự nhiên, lưu đồ, pseudocode (mã giả) hoặc mã thực thi.</p>\n <p>Chương trình kết hợp cấu trúc dữ liệu và thuật toán. Tiêu chí gồm tin cậy, dễ sửa đổi, dễ đọc và hiệu quả. Quy trình: xác định yêu cầu; phân tích và thiết kế; cài đặt; thử nghiệm; vận hành, theo dõi và bảo trì. Đoạn dưới quy ước trả về bản ghi đầu tiên hoặc null.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter01.cjs</code> rồi chạy <code>node chapter01.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter01.cjs · JavaScript</span><pre><code>function timSinhVien(danhSach, ma) {\n   for (const sinhVien of danhSach) { // Xét từng bản ghi theo thứ tự.\n     if (sinhVien.ma === ma) return sinhVien; // Trả đúng bản ghi cần tìm.\n   }\n   return null; // Đã xét hết mà không thấy.\n }\n const lop = [{ma: 12, ten: 'An'}, {ma: 34, ten: 'Bình'}];\n console.log(timSinhVien(lop, 34)); // {ma: 34, ten: 'Bình'}\n console.log(timSinhVien(lop, 99)); // null</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>Khai báo hàm với danh sách bản ghi và mã cần tìm; không trộn đọc bàn phím vào thuật toán.</li><li>for…of lần lượt lấy từng bản ghi; phép === kiểm tra khóa.</li><li>return trong if kết thúc ngay khi tìm thấy; return null chỉ chạy sau khi đã xét hết.</li><li>Hai lời gọi minh họa cả tìm thành công và thất bại.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Viết code trước khi thống nhất đầu ra khi thất bại.</li><li>Cho rằng một chương trình chạy không lỗi cú pháp thì thuật toán đã đúng.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Mô tả input/output và các bước tìm bội chung nhỏ nhất của hai số nguyên dương; kiểm tra với 6 và 8 được 24.</p><h3>Mức 2 — Vận dụng</h3><p>Viết các nhánh giải ax² + bx + c = 0, kể cả a = 0; biểu diễn bằng lưu đồ hoặc mô tả từng bước.</p><h3>Mức 3 — Nâng cao</h3><p>Tìm Fibonacci thứ n với F₀ = 0, F₁ = 1; nêu miền n nguyên không âm, điều kiện dừng và thử n = 0, 1, 10.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Xác định bài toán và dữ liệu trước khi chọn thuật toán; kiểm tra cả tính đúng, điều kiện dừng và tài nguyên.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter01\">Mở quiz Thuật toán là gì?</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter01"
    },
    {
      "id": "chapter02",
      "title": "Big O Notation",
      "type": "chi-tiet",
      "side": "right",
      "parent": "nen-tang",
      "chapter": "thuat-toan/chapter02.html",
      "summary": "Luôn ghi đại lượng đếm, kích thước đầu vào và trường hợp đang xét; Big O là cận, không phải đồng hồ.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Luôn ghi đại lượng đếm, kích thước đầu vào và trường hợp đang xét; Big O là cận, không phải đồng hồ.",
        "code": "function demSoSanh(a, x) {\n   let dem = 0;\n   for (const giaTri of a) {\n     dem++;\n     if (giaTri === x) return dem;\n   }\n   return dem;\n }\n console.log(demSoSanh([2, 4, 6, 8], 2)); // 1\n console.log(demSoSanh([2, 4, 6, 8], 9)); // 4",
        "goals": [
          "Hiểu định nghĩa Big O.",
          "Tách trường hợp đầu vào khỏi ký hiệu tiệm cận."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 1.3.3. <a href=\"tai-lieu-ctdlgt.html#tong-quan\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Hiểu định nghĩa Big O.</li><li>Tách trường hợp đầu vào khỏi ký hiệu tiệm cận.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Hai máy chạy cùng thuật toán có thời gian khác nhau; cần so sánh tốc độ tăng của số thao tác khi dữ liệu lớn hơn.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Big O là cận trên tiệm cận: T(n) thuộc O(g(n)) nếu tồn tại c &gt; 0 và n₀ sao cho 0 ≤ T(n) ≤ c·g(n) với n ≥ n₀. Bỏ hằng số và số hạng bậc thấp khi xét tăng trưởng. Θ mô tả cận chặt hai phía, Ω là cận dưới.</p><p>Big O không tự mang nghĩa trường hợp xấu nhất. Hãy nêu đang phân tích best case (tốt nhất), worst case (xấu nhất) hay average case (trung bình). Trung bình cần giả thiết phân bố đầu vào.</p><p>Các lớp thường gặp theo tốc độ tăng: O(1), O(log n), O(n), O(n log n), O(n²), O(n³), O(2ⁿ), O(n!). Đây là mô hình tăng trưởng, không phải số giây hay số phép toán chính xác. Logarit khác cơ số chỉ khác hằng số.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter02.cjs</code> rồi chạy <code>node chapter02.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter02.cjs · JavaScript</span><pre><code>function demSoSanh(a, x) {\n   let dem = 0;\n   for (const giaTri of a) {\n     dem++;\n     if (giaTri === x) return dem;\n   }\n   return dem;\n }\n console.log(demSoSanh([2, 4, 6, 8], 2)); // 1\n console.log(demSoSanh([2, 4, 6, 8], 9)); // 4</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>dem bắt đầu bằng 0 và chỉ đếm phép so sánh khóa, không đếm mọi lệnh máy.</li><li>Mỗi phần tử làm dem tăng một; return dừng khi trúng khóa.</li><li>Đầu dãy cho 1 phép so sánh; không tìm thấy cho n phép: tốt nhất Θ(1), xấu nhất Θ(n).</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Gọi O(n) là đúng n giây hoặc đúng n lệnh.</li><li>Viết “Big O luôn là trường hợp xấu nhất”.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Rút gọn cận của 3n + 7.</p><h3>Mức 2 — Vận dụng</h3><p>So sánh n² và n log₂ n khi n tăng gấp đôi.</p><h3>Mức 3 — Nâng cao</h3><p>Nêu giả thiết để số lần so sánh tuyến tính trung bình khi tìm thành công là (n + 1)/2.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Luôn ghi đại lượng đếm, kích thước đầu vào và trường hợp đang xét; Big O là cận, không phải đồng hồ.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter02\">Mở quiz Big O Notation</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter02"
    },
    {
      "id": "chapter03",
      "title": "Phân tích độ phức tạp",
      "type": "chi-tiet",
      "side": "left",
      "parent": "nen-tang",
      "chapter": "thuat-toan/chapter03.html",
      "summary": "Viết tổng số lượt thực tế trước khi rút gọn; ghi rõ giả thiết khi tính trung bình.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Viết tổng số lượt thực tế trước khi rút gọn; ghi rõ giả thiết khi tính trung bình.",
        "code": "function demCap(n) {\n   let dem = 0;\n   for (let i = 0; i < n; i++) {\n     for (let j = 0; j < i; j++) dem++;\n   }\n   return dem;\n }\n function demChiaDoi(n) {\n   let buoc = 0;\n   while (n > 1) { n = Math.floor(n / 2); buoc++; }\n   return buoc;\n }\n console.log(demCap(5), demChiaDoi(16)); // 10 4",
        "goals": [
          "Đếm vòng lặp liên tiếp, lồng nhau và chia đôi.",
          "Phân biệt phân tích toán học với đo thực nghiệm."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 1.3.3, 2.4, 3.11. <a href=\"tai-lieu-ctdlgt.html#tong-quan\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Đếm vòng lặp liên tiếp, lồng nhau và chia đôi.</li><li>Phân biệt phân tích toán học với đo thực nghiệm.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Cần dự đoán thuật toán còn dùng được khi số bản ghi tăng lên, thay vì chỉ đo một bộ dữ liệu nhỏ.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Vòng lặp liên tiếp cộng chi phí; lồng nhau phải tính tổng số lượt thực tế. Hai vòng mỗi vòng n lượt cho Θ(n²); vòng trong chỉ chạy j &lt; i cho n(n−1)/2, vẫn Θ(n²). Nếu mỗi bước giảm một nửa miền tìm kiếm thì số bước Θ(log n).</p><p>Tìm tuyến tính thành công ở vị trí i cần i+1 so sánh khóa. Với các vị trí có xác suất bằng nhau, trung bình (n+1)/2; tìm thất bại cần n. Binary Search cần tối đa bậc logarit trên mảng đã sắp.</p><p>Thực nghiệm đo phụ thuộc bộ dữ liệu, mã, trình chạy và máy. Thử dữ liệu rỗng, đã sắp, đảo, trùng và ngẫu nhiên; dùng cùng điều kiện khi so sánh. Phân tích tiệm cận bổ sung chứ không thay cho kiểm thử tính đúng.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter03.cjs</code> rồi chạy <code>node chapter03.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter03.cjs · JavaScript</span><pre><code>function demCap(n) {\n   let dem = 0;\n   for (let i = 0; i &lt; n; i++) {\n     for (let j = 0; j &lt; i; j++) dem++;\n   }\n   return dem;\n }\n function demChiaDoi(n) {\n   let buoc = 0;\n   while (n &gt; 1) { n = Math.floor(n / 2); buoc++; }\n   return buoc;\n }\n console.log(demCap(5), demChiaDoi(16)); // 10 4</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>Với i cố định, j nhận i giá trị; cộng i từ 0 đến n−1 được n(n−1)/2.</li><li>demChiaDoi giảm n bằng phép chia nguyên mỗi lượt; n = 16 đi qua 8, 4, 2, 1.</li><li>console.log kiểm chứng một đầu vào, không chứng minh cận cho mọi n.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Thấy hai vòng lặp là kết luận ngay n² mà không xem giới hạn.</li><li>Đếm thời gian nhập/xuất chung với phần thuật toán rồi so sánh thiếu công bằng.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Tính demCap với n = 0, 1, 4.</p><h3>Mức 2 — Vận dụng</h3><p>Phân tích một vòng n lượt tiếp theo một vòng n² lượt.</p><h3>Mức 3 — Nâng cao</h3><p>Đếm phép so sánh của Insertion Sort trên dãy tăng và đảo; giải thích vì sao hai kết quả khác bậc.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Viết tổng số lượt thực tế trước khi rút gọn; ghi rõ giả thiết khi tính trung bình.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter03\">Mở quiz Phân tích độ phức tạp</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter03"
    },
    {
      "id": "chapter04",
      "title": "Độ phức tạp không gian (Space Complexity)",
      "type": "chi-tiet",
      "side": "right",
      "parent": "nen-tang",
      "chapter": "thuat-toan/chapter04.html",
      "summary": "Tách chi phí của hàm khỏi phần chuẩn bị dữ liệu; ghi rõ bộ nhớ phụ, đầu ra và stack.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Tách chi phí của hàm khỏi phần chuẩn bị dữ liệu; ghi rõ bộ nhớ phụ, đầu ra và stack.",
        "code": "function daoTaiCho(a) {\n   let trai = 0, phai = a.length - 1;\n   while (trai < phai) {\n     [a[trai], a[phai]] = [a[phai], a[trai]];\n     trai++; phai--;\n   }\n   return a;\n }\n const a = [1, 2, 3, 4];\n const b = [...a]; // Bản sao n phần tử: O(n) bộ nhớ phụ.\n console.log(daoTaiCho(a), b); // [4,3,2,1] [1,2,3,4]",
        "goals": [
          "Phân biệt bộ nhớ đầu vào và bộ nhớ phụ.",
          "Tính cả ngăn xếp lời gọi đệ quy."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 1.2.2, 1.3.3, 4.1.1. <a href=\"tai-lieu-ctdlgt.html#tong-quan\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Phân biệt bộ nhớ đầu vào và bộ nhớ phụ.</li><li>Tính cả ngăn xếp lời gọi đệ quy.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Cùng một kết quả nhưng một lời giải tạo bản sao mảng, lời giải khác cập nhật tại chỗ; cần biết phần bộ nhớ tăng thêm.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Space complexity (độ phức tạp không gian) đo bộ nhớ theo kích thước đầu vào. Auxiliary space (bộ nhớ phụ) không tính vùng chứa đầu vào; cần ghi rõ có tính đầu ra không. Một vài biến số là O(1) theo mô hình số có kích thước cố định; bản sao n phần tử là O(n).</p><p>In-place (tại chỗ) thường chỉ cần O(1) bộ nhớ phụ ngoài đầu vào, nhưng thuật toán đệ quy vẫn có stack lời gọi. Merge Sort mảng dùng bộ đệm O(n); Quick Sort tại chỗ có stack theo chiều sâu, xấu nhất O(n).</p><p>Trong C++, thời gian sống tự động, static storage và dynamic allocation là các khái niệm khác nhau. Không đồng nhất “biến có tên” với static. new cấp phát đối tượng động; phải quản lý vòng đời đúng. Ví dụ JavaScript dùng tham chiếu và garbage collection (thu gom rác), không có delete con trỏ như C++.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter04.cjs</code> rồi chạy <code>node chapter04.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter04.cjs · JavaScript</span><pre><code>function daoTaiCho(a) {\n   let trai = 0, phai = a.length - 1;\n   while (trai &lt; phai) {\n     [a[trai], a[phai]] = [a[phai], a[trai]];\n     trai++; phai--;\n   }\n   return a;\n }\n const a = [1, 2, 3, 4];\n const b = [...a]; // Bản sao n phần tử: O(n) bộ nhớ phụ.\n console.log(daoTaiCho(a), b); // [4,3,2,1] [1,2,3,4]</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>Hai chỉ số tiến vào giữa; mỗi lượt đổi hai phần tử, lượng biến tạm không tăng theo n.</li><li>return a trả cùng mảng, không tạo bản sao.</li><li>[...a] tạo mảng khác trước khi đảo; tổng đoạn ví dụ vẫn có bản sao O(n), dù riêng hàm đảo dùng O(1) phụ.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Bỏ qua bộ nhớ stack đệ quy.</li><li>Nhầm gán b = a là sao chép các phần tử.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Phân loại bộ nhớ phụ của lấy phần tử đầu và sao chép mảng.</p><h3>Mức 2 — Vận dụng</h3><p>So sánh đảo tại chỗ với tạo mảng đảo mới.</p><h3>Mức 3 — Nâng cao</h3><p>Phân tích cả thời gian và stack của đệ quy đi qua danh sách n nút.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Tách chi phí của hàm khỏi phần chuẩn bị dữ liệu; ghi rõ bộ nhớ phụ, đầu ra và stack.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter04\">Mở quiz Độ phức tạp không gian (Space Complexity)</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter04"
    },
    {
      "id": "sap-xep",
      "title": "Sắp xếp",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Hai thuật toán sắp xếp đơn giản nhất — dễ hiểu nhưng kém hiệu quả, chủ yếu mang tính giáo dục.",
      "time": 70,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter05",
      "title": "Interchange, Selection & Bubble Sort",
      "type": "chi-tiet",
      "side": "left",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter05.html",
      "summary": "Ba thuật toán khác thời điểm và khoảng cách đổi chỗ; số phép so sánh không đồng nghĩa số lần đổi.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Ba thuật toán khác thời điểm và khoảng cách đổi chỗ; số phép so sánh không đồng nghĩa số lần đổi.",
        "code": "function interchangeSort(a) {\n   for (let i = 0; i < a.length - 1; i++)\n     for (let j = i + 1; j < a.length; j++)\n       if (a[j] < a[i]) [a[i], a[j]] = [a[j], a[i]];\n   return a;\n }\n function selectionSort(a) {\n   for (let i = 0; i < a.length - 1; i++) {\n     let min = i;\n     for (let j = i + 1; j < a.length; j++)\n       if (a[j] < a[min]) min = j;\n     [a[i], a[min]] = [a[min], a[i]];\n   }\n   return a;\n }\n function bubbleSort(a) {\n   for (let i = 0; i < a.length - 1; i++) {\n     let doi = false;\n     for (let j = a.length - 1; j > i; j--)\n       if (a[j] < a[j - 1]) {\n         [a[j], a[j - 1]] = [a[j - 1], a[j]]; doi = true;\n       }\n     if (!doi) break;\n   }\n   return a;\n }\n console.log(selectionSort([1, 4, 8, 9, 0, 12, -5]));\n // [-5, 0, 1, 4, 8, 9, 12]",
        "goals": [
          "Phân biệt đổi chỗ trực tiếp, chọn trực tiếp và nổi bọt.",
          "Theo dõi bất biến sau mỗi lượt."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 3.1, 3.2, 3.3, 3.5. <a href=\"tai-lieu-ctdlgt.html#sap-xep\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Phân biệt đổi chỗ trực tiếp, chọn trực tiếp và nổi bọt.</li><li>Theo dõi bất biến sau mỗi lượt.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Cần sắp danh sách điểm tăng dần và hiểu vì sao có thuật toán đổi nhiều lần, có thuật toán chỉ đổi một lần mỗi lượt.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Sắp xếp là đổi thứ tự bản ghi theo khóa. Interchange Sort (đổi chỗ trực tiếp) so sánh a[i] với mọi a[j] phía sau và đổi ngay nếu nhỏ hơn. Selection Sort (chọn trực tiếp) tìm vị trí nhỏ nhất rồi mới đổi một lần. Sau lượt i, a[i] là phần tử nhỏ nhất của đoạn chưa sắp.</p><p>Bubble Sort (nổi bọt) chỉ đổi cặp kề nhau. Biến thể đi từ cuối về đầu đưa phần tử nhỏ nhất về vị trí i. Nếu một lượt không đổi thì dừng sớm. Đổi chỗ trực tiếp và chọn trực tiếp so sánh n(n−1)/2 lần: Θ(n²) cả dãy đã sắp. Bubble có cờ dừng: tốt nhất Θ(n), trung bình/xấu nhất Θ(n²). Các bản ở đây dùng O(1) phụ.</p><p>Stable (ổn định) là giữ thứ tự tương đối của các bản ghi có khóa bằng nhau. Bubble chỉ đổi khi lớn hơn nên ổn định; Selection và Interchange với đổi chỗ xa không đảm bảo ổn định.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter05.cjs</code> rồi chạy <code>node chapter05.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter05.cjs · JavaScript</span><pre><code>function interchangeSort(a) {\n   for (let i = 0; i &lt; a.length - 1; i++)\n     for (let j = i + 1; j &lt; a.length; j++)\n       if (a[j] &lt; a[i]) [a[i], a[j]] = [a[j], a[i]];\n   return a;\n }\n function selectionSort(a) {\n   for (let i = 0; i &lt; a.length - 1; i++) {\n     let min = i;\n     for (let j = i + 1; j &lt; a.length; j++)\n       if (a[j] &lt; a[min]) min = j;\n     [a[i], a[min]] = [a[min], a[i]];\n   }\n   return a;\n }\n function bubbleSort(a) {\n   for (let i = 0; i &lt; a.length - 1; i++) {\n     let doi = false;\n     for (let j = a.length - 1; j &gt; i; j--)\n       if (a[j] &lt; a[j - 1]) {\n         [a[j], a[j - 1]] = [a[j - 1], a[j]]; doi = true;\n       }\n     if (!doi) break;\n   }\n   return a;\n }\n console.log(selectionSort([1, 4, 8, 9, 0, 12, -5]));\n // [-5, 0, 1, 4, 8, 9, 12]</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>Interchange đổi ngay trong vòng j; Selection chỉ cập nhật min trong vòng j và đổi sau vòng đó.</li><li>Bubble đi j từ cuối về i+1; so sánh hai hàng xóm và ghi nhận có đổi.</li><li>doi được đặt lại mỗi lượt i. Không có đổi nghĩa là đoạn còn lại đã có thứ tự.</li><li>Với dãy minh họa, lượt Selection đầu đưa −5 về đầu; lượt kế đưa 0 về vị trí 1.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Nhầm Interchange với Selection chỉ vì cùng hai vòng lặp.</li><li>Dùng >= ở Bubble khiến bản ghi bằng khóa có thể đổi thứ tự.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Ghi từng lần đổi của ba thuật toán với [3, 1, 2].</p><h3>Mức 2 — Vận dụng</h3><p>Dùng dãy [1, 4, 8, 9, 0, 12, −5] để lập bảng trạng thái sau từng lượt.</p><h3>Mức 3 — Nâng cao</h3><p>Sắp các bản ghi có khóa trùng và nhãn khác nhau; tìm phản ví dụ tính ổn định của Selection.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Ba thuật toán khác thời điểm và khoảng cách đổi chỗ; số phép so sánh không đồng nghĩa số lần đổi.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter05\">Mở quiz Interchange, Selection &amp; Bubble Sort</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter05"
    },
    {
      "id": "chapter06",
      "title": "Insertion Sort & Shell Sort",
      "type": "chi-tiet",
      "side": "right",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter06.html",
      "summary": "Insertion tận dụng thứ tự có sẵn; Shell cho phần tử dịch xa trước nhưng cần khai báo rõ dãy gap.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Insertion tận dụng thứ tự có sẵn; Shell cho phần tử dịch xa trước nhưng cần khai báo rõ dãy gap.",
        "code": "function insertionSort(a) {\n   for (let i = 1; i < a.length; i++) {\n     const key = a[i]; let j = i - 1;\n     while (j >= 0 && a[j] > key) {\n       a[j + 1] = a[j]; j--;\n     }\n     a[j + 1] = key;\n   }\n   return a;\n }\n function shellSort(a) {\n   for (let gap = Math.floor(a.length / 2); gap > 0;\n        gap = Math.floor(gap / 2)) {\n     for (let i = gap; i < a.length; i++) {\n       const key = a[i]; let j = i;\n       while (j >= gap && a[j - gap] > key) {\n         a[j] = a[j - gap]; j -= gap;\n       }\n       a[j] = key;\n     }\n   }\n   return a;\n }\n console.log(shellSort([1, 4, 8, 9, 0, 12, -5]));\n // [-5, 0, 1, 4, 8, 9, 12]",
        "goals": [
          "Cài Insertion Sort và Shell Sort.",
          "Giải thích ảnh hưởng của khoảng cách gap."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 3.4, 3.8. <a href=\"tai-lieu-ctdlgt.html#sap-xep\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Cài Insertion Sort và Shell Sort.</li><li>Giải thích ảnh hưởng của khoảng cách gap.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Xếp một lá bài mới vào phần bài đã có thứ tự; nếu phần tử cách vị trí đúng rất xa thì có thể dịch chuyển theo khoảng lớn trước.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Insertion Sort (chèn trực tiếp) duy trì đoạn đầu đã sắp. Giữ key, dịch các phần tử lớn hơn sang phải rồi chèn key vào chỗ trống. Với dãy đã tăng, vòng trong dừng ngay: Θ(n); trung bình và xấu nhất Θ(n²). Dùng so sánh nghiêm ngặt &gt; để giữ ổn định, bộ nhớ phụ O(1).</p><p>Shell Sort áp dụng chèn trực tiếp trên các dãy con cách nhau gap vị trí. Giảm gap dần và kết thúc bằng gap = 1. Ví dụ tài liệu dùng 3 rồi 1 cho dãy bảy phần tử. Bản dưới chọn floor(n/2), chia đôi đến 1. Không ổn định; cận phụ thuộc dãy gap, bản chia đôi có xấu nhất O(n²), không gán chung O(n log n).</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter06.cjs</code> rồi chạy <code>node chapter06.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter06.cjs · JavaScript</span><pre><code>function insertionSort(a) {\n   for (let i = 1; i &lt; a.length; i++) {\n     const key = a[i]; let j = i - 1;\n     while (j &gt;= 0 &amp;&amp; a[j] &gt; key) {\n       a[j + 1] = a[j]; j--;\n     }\n     a[j + 1] = key;\n   }\n   return a;\n }\n function shellSort(a) {\n   for (let gap = Math.floor(a.length / 2); gap &gt; 0;\n        gap = Math.floor(gap / 2)) {\n     for (let i = gap; i &lt; a.length; i++) {\n       const key = a[i]; let j = i;\n       while (j &gt;= gap &amp;&amp; a[j - gap] &gt; key) {\n         a[j] = a[j - gap]; j -= gap;\n       }\n       a[j] = key;\n     }\n   }\n   return a;\n }\n console.log(shellSort([1, 4, 8, 9, 0, 12, -5]));\n // [-5, 0, 1, 4, 8, 9, 12]</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>key giữ giá trị trước khi dịch để không ghi mất phần tử cần chèn.</li><li>Kiểm tra j >= 0 trước truy cập a[j]; chèn tại j+1 khi vòng trong dừng.</li><li>Shell thay bước 1 bằng gap; j >= gap đảm bảo j−gap hợp lệ.</li><li>Với n=7, gap lần lượt là 3 và 1; lượt cuối chèn trên toàn dãy.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Đọc a[j] trước khi kiểm tra chỉ số trong C/C++.</li><li>Quên gap=1 hoặc để gap không giảm, làm sai kết quả hay không dừng.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Chèn 0 vào đoạn [1, 4, 8, 9] và ghi các lần dịch.</p><h3>Mức 2 — Vận dụng</h3><p>Theo dõi Shell với gap 3, 1 trên dãy bảy số trong tài liệu.</p><h3>Mức 3 — Nâng cao</h3><p>So sánh số lần dịch trên dãy đã sắp và đảo; nêu rõ không suy ra cận tổng quát từ một lần đo.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Insertion tận dụng thứ tự có sẵn; Shell cho phần tử dịch xa trước nhưng cần khai báo rõ dãy gap.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter06\">Mở quiz Insertion Sort &amp; Shell Sort</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter06"
    },
    {
      "id": "chapter07",
      "title": "Merge Sort",
      "type": "chi-tiet",
      "side": "left",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter07.html",
      "summary": "Trộn tuyến tính từng tầng, có số tầng logarit; phải giữ cả phần dư và thứ tự các khóa bằng nhau.",
      "time": 10,
      "related": [
        "chapter08",
        "chapter04"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Trộn tuyến tính từng tầng, có số tầng logarit; phải giữ cả phần dư và thứ tự các khóa bằng nhau.",
        "code": "function merge(left, right) {\n   const out = []; let i = 0, j = 0;\n   while (i < left.length && j < right.length) {\n     if (left[i] <= right[j]) out.push(left[i++]);\n     else out.push(right[j++]);\n   }\n   while (i < left.length) out.push(left[i++]);\n   while (j < right.length) out.push(right[j++]);\n   return out;\n }\n function mergeSort(a) {\n   if (a.length < 2) return [...a];\n   const mid = Math.floor(a.length / 2);\n   return merge(mergeSort(a.slice(0, mid)), mergeSort(a.slice(mid)));\n }\n function mergeBottomUp(a) {\n   let out = [...a];\n   for (let width = 1; width < out.length; width *= 2) {\n     const next = [];\n     for (let i = 0; i < out.length; i += 2 * width) {\n       const end = Math.min(i + 2 * width, out.length);\n       next.push(...merge(out.slice(i, i + width), out.slice(i + width, end)));\n     }\n     out = next;\n   }\n   return out;\n }\n console.log(mergeBottomUp([1, 4, 8, 9, 0, 12, -5]));\n // [-5, 0, 1, 4, 8, 9, 12]",
        "goals": [
          "Trộn hai đoạn đã sắp.",
          "Cài bản đệ quy và bản lặp bottom-up."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 3.9. <a href=\"tai-lieu-ctdlgt.html#sap-xep\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Trộn hai đoạn đã sắp.</li><li>Cài bản đệ quy và bản lặp bottom-up.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Hai lớp đã xếp điểm tăng dần cần gộp thành một danh sách có thứ tự mà không sắp lại từ đầu bằng thuật toán bậc hai.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Merge Sort (sắp xếp trộn) chia để trị: sắp hai nửa rồi trộn. Trong bước trộn, so phần tử chưa lấy đầu tiên của mỗi nửa; lấy phần tử nhỏ hơn và nối phần dư khi một nửa hết. Lấy bên trái khi bằng nhau để ổn định.</p><p>Bottom-up (từ dưới lên) đúng với ý tưởng của tài liệu: ban đầu mỗi phần tử là một run (đoạn đã sắp) dài 1; trộn từng cặp run với độ dài 1, 2, 4… cho đến phủ cả dãy. Đoạn cuối có thể thiếu phần tử, luôn chặn biên bằng min. Thời gian Θ(n log n) với n ≥ 2, bộ nhớ phụ O(n); bản đệ quy thêm stack O(log n).</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter07.cjs</code> rồi chạy <code>node chapter07.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter07.cjs · JavaScript</span><pre><code>function merge(left, right) {\n   const out = []; let i = 0, j = 0;\n   while (i &lt; left.length &amp;&amp; j &lt; right.length) {\n     if (left[i] &lt;= right[j]) out.push(left[i++]);\n     else out.push(right[j++]);\n   }\n   while (i &lt; left.length) out.push(left[i++]);\n   while (j &lt; right.length) out.push(right[j++]);\n   return out;\n }\n function mergeSort(a) {\n   if (a.length &lt; 2) return [...a];\n   const mid = Math.floor(a.length / 2);\n   return merge(mergeSort(a.slice(0, mid)), mergeSort(a.slice(mid)));\n }\n function mergeBottomUp(a) {\n   let out = [...a];\n   for (let width = 1; width &lt; out.length; width *= 2) {\n     const next = [];\n     for (let i = 0; i &lt; out.length; i += 2 * width) {\n       const end = Math.min(i + 2 * width, out.length);\n       next.push(...merge(out.slice(i, i + width), out.slice(i + width, end)));\n     }\n     out = next;\n   }\n   return out;\n }\n console.log(mergeBottomUp([1, 4, 8, 9, 0, 12, -5]));\n // [-5, 0, 1, 4, 8, 9, 12]</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>i và j đánh dấu đầu phần chưa lấy; mỗi lượt tăng đúng một chỉ số.</li><li>Hai vòng sau nối phần dư; bỏ chúng sẽ làm mất dữ liệu.</li><li>Bản đệ quy dừng với 0 hoặc 1 phần tử. Bản lặp nhân đôi width sau mỗi tầng.</li><li>Ví dụ bảy phần tử có các run cuối không đều, nên cần chặn end. Spread vào push phù hợp dữ liệu nhỏ của bài; bản sản phẩm lớn nên nối bằng vòng lặp để tránh giới hạn số đối số.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Trộn hai đoạn chưa sắp.</li><li>Chỉ xử lý cặp đủ độ dài rồi bỏ đoạn dư ở cuối.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Trộn [1, 4, 8] và [0, 9, 12].</p><h3>Mức 2 — Vận dụng</h3><p>Vẽ các run độ dài 1, 2, 4 với dãy bảy phần tử.</p><h3>Mức 3 — Nâng cao</h3><p>Viết bản dùng một bộ đệm tái sử dụng và comparator cho bản ghi sinh viên; kiểm tra tính ổn định.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Trộn tuyến tính từng tầng, có số tầng logarit; phải giữ cả phần dư và thứ tự các khóa bằng nhau.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter07\">Mở quiz Merge Sort</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter07"
    },
    {
      "id": "chapter08",
      "title": "Quick Sort",
      "type": "chi-tiet",
      "side": "right",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter08.html",
      "summary": "Phân hoạch phải tiến triển và đoạn đệ quy phải nhỏ đi; trường hợp xấu của Quick Sort vẫn bậc hai.",
      "time": 10,
      "related": [
        "chapter07"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Phân hoạch phải tiến triển và đoạn đệ quy phải nhỏ đi; trường hợp xấu của Quick Sort vẫn bậc hai.",
        "code": "function quickSort(a, left = 0, right = a.length - 1) {\n   if (left >= right) return a;\n   const pivot = a[Math.floor((left + right) / 2)];\n   let i = left, j = right;\n   while (i <= j) {\n     while (a[i] < pivot) i++;\n     while (a[j] > pivot) j--;\n     if (i <= j) {\n       [a[i], a[j]] = [a[j], a[i]];\n       i++; j--;\n     }\n   }\n   if (left < j) quickSort(a, left, j);\n   if (i < right) quickSort(a, i, right);\n   return a;\n }\n console.log(quickSort([1, 4, 8, 9, 0, 12, -5]));\n // [-5, 0, 1, 4, 8, 9, 12]",
        "goals": [
          "Hiểu pivot và phân hoạch hai đầu.",
          "Xử lý đúng dãy trùng khóa, rỗng và một phần tử."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 3.6. <a href=\"tai-lieu-ctdlgt.html#sap-xep\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Hiểu pivot và phân hoạch hai đầu.</li><li>Xử lý đúng dãy trùng khóa, rỗng và một phần tử.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Cần sắp một mảng ngay trong vùng dữ liệu hiện có bằng cách đưa phần tử nhỏ về trái, lớn về phải một giá trị chốt.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Quick Sort chọn pivot (chốt), quét từ hai đầu để tìm phần tử nằm sai phía rồi đổi. Sau phân hoạch, tiếp tục sắp các đoạn chưa hoàn tất. Biến thể dưới lấy giá trị giữa làm chốt, dùng hai chỉ số i và j; pivot không nhất thiết nằm ở vị trí cuối cùng sau một lượt.</p><p>Ngay cả khi hai phần tử bằng pivot, sau đổi vẫn phải tăng i và giảm j để vòng lặp tiến triển. Dừng đệ quy khi left ≥ right trước khi đọc pivot. Phân hoạch cân đối cho Θ(n log n); trung bình cần giả thiết đầu vào/chọn chốt; xấu nhất Θ(n²). Stack thường O(log n) khi cân đối và có thể O(n) khi lệch.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter08.cjs</code> rồi chạy <code>node chapter08.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter08.cjs · JavaScript</span><pre><code>function quickSort(a, left = 0, right = a.length - 1) {\n   if (left &gt;= right) return a;\n   const pivot = a[Math.floor((left + right) / 2)];\n   let i = left, j = right;\n   while (i &lt;= j) {\n     while (a[i] &lt; pivot) i++;\n     while (a[j] &gt; pivot) j--;\n     if (i &lt;= j) {\n       [a[i], a[j]] = [a[j], a[i]];\n       i++; j--;\n     }\n   }\n   if (left &lt; j) quickSort(a, left, j);\n   if (i &lt; right) quickSort(a, i, right);\n   return a;\n }\n console.log(quickSort([1, 4, 8, 9, 0, 12, -5]));\n // [-5, 0, 1, 4, 8, 9, 12]</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>Điều kiện đầu hàm bảo vệ mảng rỗng và đoạn đơn.</li><li>Hai while dừng tại cặp sai phía hoặc bằng chốt; đổi cặp rồi tiến cả hai chỉ số.</li><li>Khi i vượt j, phân hoạch đã hoàn tất; đệ quy chỉ trên left…j và i…right.</li><li>Chốt đầu tiên bằng 9; đổi 9 với −5, sau đó tiếp tục chia các đoạn còn lại.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Quên cập nhật i/j khi khóa trùng.</li><li>Khẳng định mọi cách chọn chốt đều đảm bảo O(n log n).</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Theo dõi i/j trên [3, 1, 2].</p><h3>Mức 2 — Vận dụng</h3><p>Thử dãy tất cả phần tử bằng nhau và giải thích vì sao dừng.</p><h3>Mức 3 — Nâng cao</h3><p>So sánh chọn chốt đầu, giữa và ngẫu nhiên trên các họ đầu vào; trình bày rủi ro stack.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Phân hoạch phải tiến triển và đoạn đệ quy phải nhỏ đi; trường hợp xấu của Quick Sort vẫn bậc hai.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter08\">Mở quiz Quick Sort</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter08"
    },
    {
      "id": "chapter09",
      "title": "Heap Sort",
      "type": "chi-tiet",
      "side": "left",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter09.html",
      "summary": "Xây heap một lần rồi thu nhỏ miền; chỉ số và biên size quyết định tính đúng.",
      "time": 10,
      "related": [
        "chapter23"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Xây heap một lần rồi thu nhỏ miền; chỉ số và biên size quyết định tính đúng.",
        "code": "function siftDown(a, i, size) {\n   while (2 * i + 1 < size) {\n     let child = 2 * i + 1;\n     if (child + 1 < size && a[child + 1] > a[child]) child++;\n     if (a[i] >= a[child]) break;\n     [a[i], a[child]] = [a[child], a[i]];\n     i = child;\n   }\n }\n function heapSort(a) {\n   for (let i = Math.floor(a.length / 2) - 1; i >= 0; i--)\n     siftDown(a, i, a.length);\n   for (let end = a.length - 1; end > 0; end--) {\n     [a[0], a[end]] = [a[end], a[0]];\n     siftDown(a, 0, end);\n   }\n   return a;\n }\n console.log(heapSort([1, 4, 8, 9, 0, 12, -5]));\n // [-5, 0, 1, 4, 8, 9, 12]",
        "goals": [
          "Xây max-heap từ dưới lên.",
          "Tách vùng heap khỏi vùng đã sắp."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 3.7. <a href=\"tai-lieu-ctdlgt.html#sap-xep\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Xây max-heap từ dưới lên.</li><li>Tách vùng heap khỏi vùng đã sắp.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Cần liên tục lấy số lớn nhất và đặt về cuối mảng mà không tìm lại toàn bộ dãy mỗi lần.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Max-heap là cây nhị phân hoàn chỉnh có khóa cha ≥ khóa con. Với chỉ số từ 0, con của i ở 2i+1 và 2i+2. Sift-down (vun xuống) đổi nút với con lớn hơn cho đến khi đúng tính chất heap.</p><p>Xây heap bắt đầu từ nút cha cuối floor(n/2)−1 về gốc; chi phí tổng O(n), không phải n lần vun từ gốc. Heap Sort đổi gốc lớn nhất với cuối vùng heap, thu nhỏ vùng rồi vun lại gốc. Bản này có thời gian O(n log n), xấu nhất Θ(n log n), bộ nhớ phụ O(1), không ổn định. Heap chỉ đảm bảo quan hệ cha-con, chưa phải toàn mảng đã sắp.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter09.cjs</code> rồi chạy <code>node chapter09.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter09.cjs · JavaScript</span><pre><code>function siftDown(a, i, size) {\n   while (2 * i + 1 &lt; size) {\n     let child = 2 * i + 1;\n     if (child + 1 &lt; size &amp;&amp; a[child + 1] &gt; a[child]) child++;\n     if (a[i] &gt;= a[child]) break;\n     [a[i], a[child]] = [a[child], a[i]];\n     i = child;\n   }\n }\n function heapSort(a) {\n   for (let i = Math.floor(a.length / 2) - 1; i &gt;= 0; i--)\n     siftDown(a, i, a.length);\n   for (let end = a.length - 1; end &gt; 0; end--) {\n     [a[0], a[end]] = [a[end], a[0]];\n     siftDown(a, 0, end);\n   }\n   return a;\n }\n console.log(heapSort([1, 4, 8, 9, 0, 12, -5]));\n // [-5, 0, 1, 4, 8, 9, 12]</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>size là biên loại trừ; chỉ các vị trí nhỏ hơn size còn thuộc heap.</li><li>Chọn con lớn hơn trước khi so với cha, nhờ vậy đổi chỗ giữ heap của cây con.</li><li>Xây từ cha cuối vì các lá vốn đã là heap đơn.</li><li>Sau đổi gốc với end, gọi size=end để không kéo phần tử đã sắp trở vào heap.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Nhầm size là chỉ số cuối có tính cả phần tử đó.</li><li>Chọn con trái mà không so con phải.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Vẽ max-heap cho [1, 4, 8, 9, 0, 12, −5].</p><h3>Mức 2 — Vận dụng</h3><p>Ghi trạng thái sau mỗi lần lấy gốc và vun lại.</p><h3>Mức 3 — Nâng cao</h3><p>Giải thích vì sao cộng chi phí vun theo chiều cao nút cho O(n) ở bước xây heap.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Xây heap một lần rồi thu nhỏ miền; chỉ số và biên size quyết định tính đúng.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter09\">Mở quiz Heap Sort</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter09"
    },
    {
      "id": "chapter10",
      "title": "Counting Sort & Radix Sort",
      "type": "chi-tiet",
      "side": "right",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter10.html",
      "summary": "Sắp phân phối cần điều kiện miền khóa; chi phí phụ thuộc K hoặc số chữ số d và cơ số b.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Sắp phân phối cần điều kiện miền khóa; chi phí phụ thuộc K hoặc số chữ số d và cơ số b.",
        "code": "function kiemTra(a) {\n   if (!a.every(x => Number.isSafeInteger(x) && x >= 0))\n     throw new RangeError('Cần số nguyên không âm an toàn');\n }\n function countingSort(a) {\n   kiemTra(a); if (!a.length) return [];\n   let max = 0; for (const x of a) max = Math.max(max, x);\n   if (max > 100000) throw new RangeError('Miền đếm quá rộng');\n   const count = Array(max + 1).fill(0), out = [];\n   for (const x of a) count[x]++;\n   for (let x = 0; x <= max; x++)\n     for (let k = 0; k < count[x]; k++) out.push(x);\n   return out;\n }\n function radixSort(a) {\n   kiemTra(a); let out = [...a], max = 0;\n   for (const x of a) max = Math.max(max, x);\n   for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {\n     const buckets = Array.from({length: 10}, () => []);\n     for (const x of out) buckets[Math.floor(x / exp) % 10].push(x);\n     out = buckets.flat();\n   }\n   return out;\n }\n console.log(radixSort([7013,8425,1239,428,1424,7009,4518,3252,9170,999,1725,701]));\n // [428,701,999,1239,1424,1725,3252,4518,7009,7013,8425,9170]",
        "goals": [
          "Sắp theo tần suất hoặc từng chữ số.",
          "Nêu miền giá trị, tính ổn định và chi phí."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 3.10, 3.11. <a href=\"tai-lieu-ctdlgt.html#sap-xep\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Sắp theo tần suất hoặc từng chữ số.</li><li>Nêu miền giá trị, tính ổn định và chi phí.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Điểm nguyên thuộc một miền hẹp hoặc mã số có số chữ số hữu hạn có thể được sắp bằng phân phối thay vì so mọi cặp.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Counting Sort đếm tần suất từng giá trị trong miền K, rồi phát lại theo thứ tự: O(n+K) thời gian, bản dưới dùng O(n+K) bộ nhớ kể cả đầu ra. Bản phát giá trị số không giữ dữ liệu bản ghi; muốn ổn định cho bản ghi cần mảng vị trí cộng dồn và đặt phần tử đúng thứ tự.</p><p>Radix Sort LSD (least significant digit, chữ số ít quan trọng trước) phân phối vào các bucket 0…b−1 từ hàng đơn vị lên. Mỗi lượt phải ổn định, giữ thứ tự trong từng bucket; nếu phá thứ tự thì kết quả từ lượt trước bị mất. Với d chữ số cơ số b, thời gian O(d(n+b)), bộ nhớ phụ O(n+b); không mặc định O(n log n).</p><p>Ví dụ dưới nhận số nguyên không âm an toàn của JavaScript. Số âm phải có quy ước xử lý dấu riêng. Counting Sort không phù hợp miền cực rộng; ví dụ giới hạn max ≤ 100000 để tránh cấp phát quá lớn.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter10.cjs</code> rồi chạy <code>node chapter10.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter10.cjs · JavaScript</span><pre><code>function kiemTra(a) {\n   if (!a.every(x =&gt; Number.isSafeInteger(x) &amp;&amp; x &gt;= 0))\n     throw new RangeError('Cần số nguyên không âm an toàn');\n }\n function countingSort(a) {\n   kiemTra(a); if (!a.length) return [];\n   let max = 0; for (const x of a) max = Math.max(max, x);\n   if (max &gt; 100000) throw new RangeError('Miền đếm quá rộng');\n   const count = Array(max + 1).fill(0), out = [];\n   for (const x of a) count[x]++;\n   for (let x = 0; x &lt;= max; x++)\n     for (let k = 0; k &lt; count[x]; k++) out.push(x);\n   return out;\n }\n function radixSort(a) {\n   kiemTra(a); let out = [...a], max = 0;\n   for (const x of a) max = Math.max(max, x);\n   for (let exp = 1; Math.floor(max / exp) &gt; 0; exp *= 10) {\n     const buckets = Array.from({length: 10}, () =&gt; []);\n     for (const x of out) buckets[Math.floor(x / exp) % 10].push(x);\n     out = buckets.flat();\n   }\n   return out;\n }\n console.log(radixSort([7013,8425,1239,428,1424,7009,4518,3252,9170,999,1725,701]));\n // [428,701,999,1239,1424,1725,3252,4518,7009,7013,8425,9170]</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>kiemTra ngăn số âm, số lẻ và số vượt miền nguyên chính xác.</li><li>Counting tăng ô tần suất rồi phát lại count[x] lần.</li><li>Radix dùng exp=1,10,100… để lấy từng chữ số; push giữ thứ tự vào bucket.</li><li>flat nối bucket theo thứ tự chữ số. Số 0 và dãy rỗng không cần lượt phân phối nào và vẫn đúng.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Dùng Array.fill([]) làm mọi bucket trỏ cùng mảng.</li><li>Đưa số âm trực tiếp vào chỉ số chữ số.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Đếm tần suất [2, 0, 2, 1].</p><h3>Mức 2 — Vận dụng</h3><p>Lập các bucket cho hàng đơn vị và chục của dãy trong ví dụ.</p><h3>Mức 3 — Nâng cao</h3><p>Bổ sung xử lý số âm và kiểm tra thứ tự, hoặc viết Counting ổn định cho bản ghi có cùng điểm.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Sắp phân phối cần điều kiện miền khóa; chi phí phụ thuộc K hoặc số chữ số d và cơ số b.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter10\">Mở quiz Counting Sort &amp; Radix Sort</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter10"
    },
    {
      "id": "chapter11",
      "title": "So sánh & lựa chọn thuật toán sắp xếp",
      "type": "chi-tiet",
      "side": "left",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter11.html",
      "summary": "Chọn theo kích thước, thứ tự có sẵn, miền khóa, tính ổn định và giới hạn bộ nhớ; không có một thuật toán tối ưu cho mọi trường hợp.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Chọn theo kích thước, thứ tự có sẵn, miền khóa, tính ổn định và giới hạn bộ nhớ; không có một thuật toán tối ưu cho mọi trường hợp.",
        "code": "const sinhVien = [\n   {ma: 3, ten: 'Bình', diem: 8},\n   {ma: 1, ten: 'An', diem: 9},\n   {ma: 2, ten: 'Châu', diem: 8}\n ];\n const theoMa = [...sinhVien].sort((a, b) => a.ma - b.ma);\n const theoDiem = [...sinhVien].sort((a, b) => b.diem - a.diem || a.ma - b.ma);\n const doiChieu = new Intl.Collator('vi');\n const theoTen = [...sinhVien].sort((a, b) => doiChieu.compare(a.ten, b.ten));\n console.log(theoMa.map(x => x.ma)); // [1, 2, 3]\n console.log(theoDiem.map(x => x.ma)); // [1, 2, 3]\n console.log(theoTen.map(x => x.ten)); // ['An', 'Bình', 'Châu']",
        "goals": [
          "Chọn thuật toán theo dữ liệu và tài nguyên.",
          "Sắp bản ghi theo nhiều tiêu chí."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 3.1, 3.11, BT3. <a href=\"tai-lieu-ctdlgt.html#sap-xep\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Chọn thuật toán theo dữ liệu và tài nguyên.</li><li>Sắp bản ghi theo nhiều tiêu chí.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Danh sách sinh viên cần xem theo mã, theo điểm giảm dần và theo tên; cùng dữ liệu nhưng khóa và quy tắc bằng nhau khác nhau.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><h3>So sánh để lựa chọn</h3><ul><li>Interchange và Selection: Θ(n²) so sánh, O(1) phụ, không ổn định trong bản đổi chỗ thông thường.</li><li>Insertion: tốt nhất Θ(n), trung bình/xấu nhất Θ(n²), O(1) phụ, ổn định. Hữu ích cho dãy nhỏ hoặc gần sắp.</li><li>Bubble có cờ dừng: tốt nhất Θ(n), xấu nhất Θ(n²), O(1) phụ, ổn định.</li><li>Merge: Θ(n log n), O(n) phụ trên mảng, ổn định khi ưu tiên phần tử trái lúc bằng khóa.</li><li>Quick: phân hoạch cân đối Θ(n log n), xấu nhất Θ(n²); stack có thể O(n), không ổn định.</li><li>Heap: O(n log n), xấu nhất Θ(n log n), O(1) phụ với bản lặp, không ổn định.</li><li>Shell: phụ thuộc dãy gap, bản chia đôi xấu nhất O(n²), O(1) phụ, không ổn định.</li><li>Counting: O(n+K); Radix: O(d(n+b)); phải biết miền giá trị.</li></ul>\n <p>Thứ tự so sánh phải nhất quán. Với bản ghi, nêu khóa chính và khóa phụ. Sắp tên tiếng Việt cần quy ước: toàn bộ họ tên hay chỉ tên gọi, dùng collation (quy tắc đối chiếu chuỗi) nào; không coi thứ tự mã Unicode là thứ tự từ điển tiếng Việt.</p><p>Ví dụ dùng Array.sort của JavaScript để minh họa comparator (hàm so sánh), không dùng nó để khẳng định cận của một thuật toán tự cài. Tạo bản sao trước khi sort để giữ dữ liệu gốc.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter11.cjs</code> rồi chạy <code>node chapter11.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter11.cjs · JavaScript</span><pre><code>const sinhVien = [\n   {ma: 3, ten: 'Bình', diem: 8},\n   {ma: 1, ten: 'An', diem: 9},\n   {ma: 2, ten: 'Châu', diem: 8}\n ];\n const theoMa = [...sinhVien].sort((a, b) =&gt; a.ma - b.ma);\n const theoDiem = [...sinhVien].sort((a, b) =&gt; b.diem - a.diem || a.ma - b.ma);\n const doiChieu = new Intl.Collator('vi');\n const theoTen = [...sinhVien].sort((a, b) =&gt; doiChieu.compare(a.ten, b.ten));\n console.log(theoMa.map(x =&gt; x.ma)); // [1, 2, 3]\n console.log(theoDiem.map(x =&gt; x.ma)); // [1, 2, 3]\n console.log(theoTen.map(x =&gt; x.ten)); // ['An', 'Bình', 'Châu']</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>Mỗi bản ghi giữ mã, tên và điểm; comparator chỉ chọn trường khóa.</li><li>a.ma−b.ma cho thứ tự mã tăng. b.diem−a.diem cho điểm giảm, || dùng mã tăng để phá hòa.</li><li>Intl.Collator dùng quy tắc tiếng Việt của môi trường chạy; cần thống nhất yêu cầu tên gọi/toàn họ tên.</li><li>map chỉ lấy trường muốn in; các bản sao không làm đổi vị trí bản ghi trong mảng gốc.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Gọi sort() không comparator để sắp số, dẫn đến thứ tự chuỗi.</li><li>Nhầm “ổn định” với việc tất cả khóa đã đúng thứ tự.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Cài đủ chín thuật toán trong chương 3 tài liệu và kiểm tra cùng một dãy số.</p><h3>Mức 2 — Vận dụng</h3><p>Sắp nửa đầu tăng bằng một thuật toán, nửa sau giảm bằng thuật toán khác; nếu n lẻ giữ nguyên phần tử giữa.</p><h3>Mức 3 — Nâng cao</h3><p>Quản lý mảng sinh viên: sắp mã tăng, điểm giảm và tên theo quy ước đã nêu; kiểm tra khi trùng khóa và tên tiếng Việt.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Chọn theo kích thước, thứ tự có sẵn, miền khóa, tính ổn định và giới hạn bộ nhớ; không có một thuật toán tối ưu cho mọi trường hợp.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter11\">Mở quiz So sánh &amp; lựa chọn thuật toán sắp xếp</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter11"
    },
    {
      "id": "tim-kiem",
      "title": "Tìm kiếm",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Thuật toán tìm kiếm đơn giản nhất — duyệt tuần tự từng phần tử cho tới khi tìm thấy.",
      "time": 40,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter12",
      "title": "Linear Search",
      "type": "chi-tiet",
      "side": "left",
      "parent": "tim-kiem",
      "chapter": "thuat-toan/chapter12.html",
      "summary": "Tìm một khóa có thể dừng sớm; lọc/xóa toàn bộ phải quét hết và bảo vệ dữ liệu chưa đọc.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Tìm một khóa có thể dừng sớm; lọc/xóa toàn bộ phải quét hết và bảo vệ dữ liệu chưa đọc.",
        "code": "function linearSearch(a, x) {\n   for (let i = 0; i < a.length; i++) if (a[i] === x) return i;\n   return -1;\n }\n function sentinelSearch(a, x) {\n   const b = [...a, x], n = a.length; let i = 0;\n   while (b[i] !== x) i++;\n   return i < n ? i : -1;\n }\n function xoaDuongHaiChuSo(a) {\n   let ghi = 0;\n   for (let doc = 0; doc < a.length; doc++)\n     if (!(a[doc] >= 10 && a[doc] <= 99)) a[ghi++] = a[doc];\n   a.length = ghi;\n   return a;\n }\n console.log([0,9,12,-4,5,-1,22,4].filter(x => x > 0 && x % 3 === 0)); // [9,12]\n console.log(xoaDuongHaiChuSo([3,11,44,55,6,9,122])); // [3,6,9,122]\n console.log(sentinelSearch([2, 4, 4], 4)); // 1",
        "goals": [
          "Cài tìm tuyến tính và lính canh.",
          "Lọc/xóa theo điều kiện mà không bỏ sót phần tử."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 2.1, 2.2, 2.4, BT2. <a href=\"tai-lieu-ctdlgt.html#tim-kiem\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Cài tìm tuyến tính và lính canh.</li><li>Lọc/xóa theo điều kiện mà không bỏ sót phần tử.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Dữ liệu chưa sắp cần tìm mã, lọc số dương chia hết cho 3 hoặc xóa các số dương có hai chữ số.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Linear Search / Sequential Search (tìm tuyến tính/tuần tự) so khóa từng phần tử đến khi tìm thấy hoặc hết dãy. Không cần dữ liệu đã sắp; trả chỉ số đầu tiên hoặc −1. Tốt nhất Θ(1), xấu nhất Θ(n), phụ O(1). Tìm mọi phần tử thỏa điều kiện vẫn phải xét hết.</p><p>Sentinel (lính canh) đặt một bản sao của khóa ở ô cuối bổ sung để vòng quét không cần kiểm biên mỗi lượt. Trong C/C++ phải thật sự có ô hợp lệ a[n], không được ghi ngoài vùng cấp phát. Bản dưới sao chép rồi thêm lính canh nên dùng O(n) phụ; kiểm i &lt; n để phân biệt khóa thật với lính canh.</p><p>Xóa nhiều phần tử bằng dịch trái cần kiểm lại vị trí vừa dịch về. Có thể dùng kỹ thuật hai chỉ số đọc/ghi để nén mảng một lượt; chỉ ghi những phần tử muốn giữ, rồi thu ngắn length.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter12.cjs</code> rồi chạy <code>node chapter12.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter12.cjs · JavaScript</span><pre><code>function linearSearch(a, x) {\n   for (let i = 0; i &lt; a.length; i++) if (a[i] === x) return i;\n   return -1;\n }\n function sentinelSearch(a, x) {\n   const b = [...a, x], n = a.length; let i = 0;\n   while (b[i] !== x) i++;\n   return i &lt; n ? i : -1;\n }\n function xoaDuongHaiChuSo(a) {\n   let ghi = 0;\n   for (let doc = 0; doc &lt; a.length; doc++)\n     if (!(a[doc] &gt;= 10 &amp;&amp; a[doc] &lt;= 99)) a[ghi++] = a[doc];\n   a.length = ghi;\n   return a;\n }\n console.log([0,9,12,-4,5,-1,22,4].filter(x =&gt; x &gt; 0 &amp;&amp; x % 3 === 0)); // [9,12]\n console.log(xoaDuongHaiChuSo([3,11,44,55,6,9,122])); // [3,6,9,122]\n console.log(sentinelSearch([2, 4, 4], 4)); // 1</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>linearSearch trả ngay chỉ số đầu tiên. −1 là tín hiệu không có khóa, không phải chỉ số cần đọc.</li><li>b có n+1 ô, nên chắc chắn gặp x; chỉ số n chỉ là lính canh.</li><li>doc quét mọi ô ban đầu; ghi luôn không vượt doc nên không ghi hỏng phần chưa đọc.</li><li>Cuối vòng, length=ghi bỏ các ô dư. Ví dụ áp dụng trên số nguyên, không dùng khoảng 10…99 để phân loại số thực.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Xem chỉ số 0 là false và kết luận không tìm thấy.</li><li>Tăng chỉ số sau xóa bằng dịch trái làm bỏ sót hai phần tử liên tiếp cần xóa.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Tìm các số lẻ trong A và lưu sang B; thử cả số âm, rỗng và không có số lẻ.</p><h3>Mức 2 — Vận dụng</h3><p>Đếm khoảng trắng, chữ số ASCII 0–9 và chữ hoa A–Z trong chuỗi; ghi rõ nếu mở rộng Unicode.</p><h3>Mức 3 — Nâng cao</h3><p>Viết và so sánh xóa bằng dịch trái với nén hai chỉ số trên dãy có nhiều số hai chữ số liên tiếp.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Tìm một khóa có thể dừng sớm; lọc/xóa toàn bộ phải quét hết và bảo vệ dữ liệu chưa đọc.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter12\">Mở quiz Linear Search</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter12"
    },
    {
      "id": "chapter13",
      "title": "Binary Search",
      "type": "chi-tiet",
      "side": "right",
      "parent": "tim-kiem",
      "chapter": "thuat-toan/chapter13.html",
      "summary": "Điều kiện có thứ tự và quy ước biên phải được giữ xuyên suốt; chi phí thao tác sau tìm phải tính riêng.",
      "time": 10,
      "related": [
        "chapter14",
        "chapter12"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Điều kiện có thứ tự và quy ước biên phải được giữ xuyên suốt; chi phí thao tác sau tìm phải tính riêng.",
        "code": "function binarySearch(a, x) {\n   let left = 0, right = a.length - 1;\n   while (left <= right) {\n     const mid = left + Math.floor((right - left) / 2);\n     if (a[mid] === x) return mid;\n     if (a[mid] < x) left = mid + 1;\n     else right = mid - 1;\n   }\n   return -1;\n }\n const a = [1,2,3,4,5,6,7,8,9];\n const viTri = binarySearch(a, 5);\n if (viTri !== -1) a.splice(viTri, 1);\n console.log(a); // [1,2,3,4,6,7,8,9]\n console.log(binarySearch([], 5)); // -1",
        "goals": [
          "Cài Binary Search với biên đóng.",
          "Giữ điều kiện mảng tăng không giảm."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 2.3, 2.4, BT2. <a href=\"tai-lieu-ctdlgt.html#tim-kiem\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Cài Binary Search với biên đóng.</li><li>Giữ điều kiện mảng tăng không giảm.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Đã có mảng mã tăng dần và cần tra cứu nhiều lần; bỏ một nửa phạm vi sau mỗi phép so sánh.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Binary Search (tìm nhị phân) cần dữ liệu có thứ tự theo đúng comparator tìm kiếm, và truy cập phần tử giữa hiệu quả. Mảng tăng không giảm có thể chứa khóa trùng; không bắt buộc tăng nghiêm ngặt. Với đoạn đóng [left,right], nếu a[mid]&lt;x thì loại cả nửa trái gồm mid; nếu lớn hơn thì loại nửa phải.</p><p>Bất biến: nếu x còn tồn tại trong phần chưa loại, nó nằm trong [left,right]. Dùng while(left ≤ right) để mảng rỗng không bị đọc. Thời gian tốt nhất O(1), xấu nhất O(log n); bộ nhớ phụ O(1). Sắp trước tốn chi phí riêng; không nên sắp chỉ cho một lần tìm khi tuyến tính là đủ.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter13.cjs</code> rồi chạy <code>node chapter13.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter13.cjs · JavaScript</span><pre><code>function binarySearch(a, x) {\n   let left = 0, right = a.length - 1;\n   while (left &lt;= right) {\n     const mid = left + Math.floor((right - left) / 2);\n     if (a[mid] === x) return mid;\n     if (a[mid] &lt; x) left = mid + 1;\n     else right = mid - 1;\n   }\n   return -1;\n }\n const a = [1,2,3,4,5,6,7,8,9];\n const viTri = binarySearch(a, 5);\n if (viTri !== -1) a.splice(viTri, 1);\n console.log(a); // [1,2,3,4,6,7,8,9]\n console.log(binarySearch([], 5)); // -1</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>right=n−1 làm đoạn rỗng khi n=0; while không chạy nên an toàn.</li><li>mid tính từ độ dài đoạn; công thức cũng tránh cộng hai chỉ số lớn trong ngôn ngữ số nguyên hữu hạn.</li><li>mid±1 bỏ vị trí đã xét và làm đoạn nhỏ lại.</li><li>splice xóa một phần tử sau khi tìm, cần dịch phần sau nên tổng tìm-rồi-xóa vẫn có thể O(n).</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Tìm nhị phân trên dữ liệu chưa sắp.</li><li>Dùng do…while khiến mảng rỗng vẫn đọc mid một lần.</li><li>Kết luận thao tác xóa mảng O(log n) chỉ vì tìm vị trí O(log n).</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Theo dõi left/right/mid khi tìm 8 trong [1…9].</p><h3>Mức 2 — Vận dụng</h3><p>Nhập mảng, sắp tăng, tìm X và xóa một lần xuất hiện nếu có; thử X ngoài miền.</p><h3>Mức 3 — Nâng cao</h3><p>So sánh một lần tìm với nhiều lần tìm, tính cả chi phí sắp trước và dịch sau xóa.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Điều kiện có thứ tự và quy ước biên phải được giữ xuyên suốt; chi phí thao tác sau tìm phải tính riêng.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter13\">Mở quiz Binary Search</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter13"
    },
    {
      "id": "chapter14",
      "title": "Biến thể Binary Search",
      "type": "chi-tiet",
      "side": "left",
      "parent": "tim-kiem",
      "chapter": "thuat-toan/chapter14.html",
      "summary": "Tìm biên biến câu hỏi bằng khóa thành một ngưỡng đơn điệu và thống nhất quy ước nửa mở.",
      "time": 10,
      "related": [
        "chapter13"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Tìm biên biến câu hỏi bằng khóa thành một ngưỡng đơn điệu và thống nhất quy ước nửa mở.",
        "code": "function lowerBound(a, x) {\n   let left = 0, right = a.length;\n   while (left < right) {\n     const mid = left + Math.floor((right - left) / 2);\n     if (a[mid] < x) left = mid + 1;\n     else right = mid;\n   }\n   return left;\n }\n function upperBound(a, x) {\n   let left = 0, right = a.length;\n   while (left < right) {\n     const mid = left + Math.floor((right - left) / 2);\n     if (a[mid] <= x) left = mid + 1;\n     else right = mid;\n   }\n   return left;\n }\n const a = [1,2,2,2,4];\n console.log(lowerBound(a, 2), upperBound(a, 2)); // 1 4\n console.log(upperBound(a, 2) - lowerBound(a, 2)); // 3",
        "goals": [
          "Tìm biên trái/phải khi có khóa trùng.",
          "Dùng n như vị trí chèn hợp lệ."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 2.3. <a href=\"tai-lieu-ctdlgt.html#tim-kiem\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Tìm biên trái/phải khi có khóa trùng.</li><li>Dùng n như vị trí chèn hợp lệ.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Tìm số lượng bản ghi có cùng điểm: một vị trí bất kỳ chưa đủ, cần cả đầu và cuối đoạn có cùng khóa.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Phần mở rộng từ Binary Search: lower_bound là vị trí đầu có a[i] ≥ x; upper_bound là vị trí đầu có a[i] &gt; x. Không có vị trí thỏa thì trả n. Dùng đoạn nửa mở [left,right), ban đầu right=n; khi left=right đó là vị trí chèn.</p><p>Đếm số lần xuất hiện x bằng upper−lower. Chỉ đọc a[lower] nếu lower&lt;n. Tìm đầu tiên chính là lower nếu khóa khớp; cuối cùng là upper−1 khi đoạn không rỗng. Mỗi lần tìm biên O(log n), phụ O(1). Nội dung biến thể này mở rộng tài liệu, quiz chỉ hỏi những gì đã giải thích ở đây.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter14.cjs</code> rồi chạy <code>node chapter14.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter14.cjs · JavaScript</span><pre><code>function lowerBound(a, x) {\n   let left = 0, right = a.length;\n   while (left &lt; right) {\n     const mid = left + Math.floor((right - left) / 2);\n     if (a[mid] &lt; x) left = mid + 1;\n     else right = mid;\n   }\n   return left;\n }\n function upperBound(a, x) {\n   let left = 0, right = a.length;\n   while (left &lt; right) {\n     const mid = left + Math.floor((right - left) / 2);\n     if (a[mid] &lt;= x) left = mid + 1;\n     else right = mid;\n   }\n   return left;\n }\n const a = [1,2,2,2,4];\n console.log(lowerBound(a, 2), upperBound(a, 2)); // 1 4\n console.log(upperBound(a, 2) - lowerBound(a, 2)); // 3</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>right không thuộc đoạn nên vòng lặp dùng <, không dùng <=.</li><li>lower đẩy trái chỉ khi nhỏ hơn x; upper đẩy trái cả khi bằng x.</li><li>right=mid giữ ứng viên làm biên, không loại nó như bản tìm một khóa.</li><li>Hai kết quả 1 và 4 tạo đoạn [1,4), dài 3.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Trộn cập nhật của đoạn đóng với điều kiện của đoạn nửa mở.</li><li>Đọc a[n] sau khi không có phần tử thỏa.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Tính hai biên của 2 trong [1,2,2,4].</p><h3>Mức 2 — Vận dụng</h3><p>Trả vị trí đầu/cuối hoặc −1 cho khóa không xuất hiện.</p><h3>Mức 3 — Nâng cao</h3><p>Đếm phần tử trong khoảng giá trị [L,R] bằng hai phép tìm biên; thử L>R.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Tìm biên biến câu hỏi bằng khóa thành một ngưỡng đơn điệu và thống nhất quy ước nửa mở.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter14\">Mở quiz Biến thể Binary Search</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter14"
    },
    {
      "id": "chapter15",
      "title": "Hashing & Bảng băm",
      "type": "chi-tiet",
      "side": "right",
      "parent": "tim-kiem",
      "chapter": "thuat-toan/chapter15.html",
      "summary": "Băm nhanh khi phân bố và tải phù hợp; cách dò và quy tắc xóa phải nhất quán, không hứa O(1) trong mọi tình huống.",
      "time": 11,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Băm nhanh khi phân bố và tải phù hợp; cách dò và quy tắc xóa phải nhất quán, không hứa O(1) trong mọi tình huống.",
        "code": "class HashSet {\n   constructor(m = 11) {\n     if (!Number.isInteger(m) || m < 1) throw new RangeError('Kích thước sai');\n     this.empty = Symbol('empty'); this.deleted = Symbol('deleted');\n     this.slots = Array(m).fill(this.empty); this.size = 0;\n   }\n   hash(key) {\n     if (!Number.isSafeInteger(key)) throw new TypeError('Khóa phải là số nguyên an toàn');\n     return ((key % this.slots.length) + this.slots.length) % this.slots.length;\n   }\n   find(key) {\n     const m = this.slots.length, start = this.hash(key);\n     for (let i = 0; i < m; i++) {\n       const pos = (start + i) % m;\n       if (this.slots[pos] === this.empty) return -1;\n       if (this.slots[pos] === key) return pos;\n     }\n     return -1;\n   }\n   add(key) {\n     const start = this.hash(key);\n     if (this.find(key) !== -1) return false;\n     for (let i = 0; i < this.slots.length; i++) {\n       const pos = (start + i) % this.slots.length;\n       if (this.slots[pos] === this.empty || this.slots[pos] === this.deleted) {\n         this.slots[pos] = key; this.size++; return true;\n       }\n     }\n     throw new RangeError('Bảng đầy; cần rehash');\n   }\n   remove(key) {\n     const pos = this.find(key); if (pos < 0) return false;\n     this.slots[pos] = this.deleted; this.size--; return true;\n   }\n   values() { return this.slots.filter(x => x !== this.empty && x !== this.deleted); }\n   rehash(m) {\n     const next = new HashSet(m);\n     for (const key of this.values()) next.add(key);\n     this.slots = next.slots; this.empty = next.empty; this.deleted = next.deleted;\n   }\n }\n const h = new HashSet(10);\n for (const key of [32,53,22,92,17,34,24,37,56]) h.add(key);\n h.remove(22);\n console.log(h.find(92) !== -1, h.size); // true 8\n h.rehash(23);\n console.log(h.values().length); // 8",
        "goals": [
          "Phân biệt hàm băm, địa chỉ và đụng độ.",
          "So sánh nối chuỗi, hợp nhất và ba phương pháp dò.",
          "Cài thêm/tìm/xóa có tombstone và băm lại."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 6.1, 6.2, 6.3. <a href=\"tai-lieu-ctdlgt.html#bang-bam\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Phân biệt hàm băm, địa chỉ và đụng độ.</li><li>So sánh nối chuỗi, hợp nhất và ba phương pháp dò.</li><li>Cài thêm/tìm/xóa có tombstone và băm lại.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Tra cứu mã sinh viên cần nhanh nhưng không thể cấp một ô cho mọi mã có thể có; nhiều khóa phải chia sẻ địa chỉ gốc.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><h3>Khái niệm và phép toán</h3><p>Hash table (bảng băm) dùng hash function (hàm băm) ánh xạ khóa vào m ô. Collision (đụng độ) là hai khóa khác nhau có cùng địa chỉ. Hệ số tải α=n/m; cần khởi tạo, kiểm rỗng, đếm, tìm, thêm/cập nhật, xóa, duyệt và rehash (băm lại) khi đổi kích thước. Duyệt ô không tự cho thứ tự khóa tăng. Với phân bố phù hợp và tải được kiểm soát, tra cứu có kỳ vọng O(1); xấu nhất vẫn O(n).</p>\n <h3>Bốn cách xây hàm băm</h3><ul><li>Bảng tra: miền chữ a…z ánh xạ 0…25 khi chỉ nhận đúng 26 ký tự đó.</li><li>Chia: h(k)=k mod m; chọn m phù hợp phân bố khóa. Chuẩn hóa phần dư âm về 0…m−1.</li><li>Nhân: h(k)=floor(m·frac(kA)), 0&lt;A&lt;1; frac là phần lẻ. Công thức toán học cần chú ý làm tròn số thực khi cài.</li><li>Universal hashing (băm phổ quát): chọn ngẫu nhiên một hàm từ họ H; với mỗi cặp khóa phân biệt, xác suất đụng độ qua lựa chọn hàm ≤1/m. Xác suất không phải một thuộc tính của từng hàm cố định. Ví dụ họ h(a,b,k)=((ak+b) mod p) mod m cho khóa nguyên trong 0…p−1, p nguyên tố, a chọn 1…p−1 và b chọn 0…p−1.</li></ul>\n <h3>Xử lý đụng độ</h3><ul><li>Separate chaining (kết nối trực tiếp): mỗi ô là đầu một danh sách khóa cùng địa chỉ; tìm/thêm/xóa trong chuỗi, chi phí phụ thuộc chiều dài chuỗi.</li><li>Coalesced hashing (kết nối hợp nhất): các bản ghi nằm trong cùng mảng, trường next lưu chỉ số ô kế tiếp. Ví dụ m=5, khóa 2 và 7 cùng ô 2; đặt 7 ở ô trống 4 và cho next[2]=4. Tìm theo chuỗi chỉ số; xóa phải nối lại và bảo toàn điểm bắt đầu của các chuỗi.</li><li>Linear probing (dò tuần tự): (h(k)+i) mod m; dễ tạo cụm liên tiếp.</li><li>Quadratic probing (dò bậc hai): (h(k)+i²) mod m; không mặc định ghé mọi ô. m=8 cho bình phương mod 8 chỉ có 0,1,4. Cần chọn kích thước, tải và công thức phù hợp.</li><li>Double hashing (băm kép): (h₁(k)+i·h₂(k)) mod m. Bước phải khác 0 và nguyên tố cùng nhau với m để đi đủ ô; m nguyên tố cùng 1≤h₂&lt;m là một lựa chọn.</li></ul>\n <p>Dò luôn giới hạn tối đa m lượt. Xóa trong open addressing (địa chỉ mở) phải đánh dấu tombstone (ô đã xóa), không biến ngay thành ô chưa từng dùng; tìm kiếm phải đi tiếp qua tombstone. Bản dưới cài tập khóa số nguyên an toàn bằng dò tuần tự, tách EMPTY/DELETED khỏi giá trị khóa. Không phải hàm băm mật mã, không dùng bảo vệ mật khẩu.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter15.cjs</code> rồi chạy <code>node chapter15.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter15.cjs · JavaScript</span><pre><code>class HashSet {\n   constructor(m = 11) {\n     if (!Number.isInteger(m) || m &lt; 1) throw new RangeError('Kích thước sai');\n     this.empty = Symbol('empty'); this.deleted = Symbol('deleted');\n     this.slots = Array(m).fill(this.empty); this.size = 0;\n   }\n   hash(key) {\n     if (!Number.isSafeInteger(key)) throw new TypeError('Khóa phải là số nguyên an toàn');\n     return ((key % this.slots.length) + this.slots.length) % this.slots.length;\n   }\n   find(key) {\n     const m = this.slots.length, start = this.hash(key);\n     for (let i = 0; i &lt; m; i++) {\n       const pos = (start + i) % m;\n       if (this.slots[pos] === this.empty) return -1;\n       if (this.slots[pos] === key) return pos;\n     }\n     return -1;\n   }\n   add(key) {\n     const start = this.hash(key);\n     if (this.find(key) !== -1) return false;\n     for (let i = 0; i &lt; this.slots.length; i++) {\n       const pos = (start + i) % this.slots.length;\n       if (this.slots[pos] === this.empty || this.slots[pos] === this.deleted) {\n         this.slots[pos] = key; this.size++; return true;\n       }\n     }\n     throw new RangeError('Bảng đầy; cần rehash');\n   }\n   remove(key) {\n     const pos = this.find(key); if (pos &lt; 0) return false;\n     this.slots[pos] = this.deleted; this.size--; return true;\n   }\n   values() { return this.slots.filter(x =&gt; x !== this.empty &amp;&amp; x !== this.deleted); }\n   rehash(m) {\n     const next = new HashSet(m);\n     for (const key of this.values()) next.add(key);\n     this.slots = next.slots; this.empty = next.empty; this.deleted = next.deleted;\n   }\n }\n const h = new HashSet(10);\n for (const key of [32,53,22,92,17,34,24,37,56]) h.add(key);\n h.remove(22);\n console.log(h.find(92) !== -1, h.size); // true 8\n h.rehash(23);\n console.log(h.values().length); // 8</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>Hai Symbol phân biệt ô chưa dùng và đã xóa; các khóa như −1 vẫn hợp lệ.</li><li>hash kiểm miền khóa và chuẩn hóa số dư. find dừng ở EMPTY, bỏ qua DELETED và không lặp quá m ô.</li><li>add kiểm khóa trùng trước khi dùng lại tombstone; remove giữ đường dò cho các khóa phía sau.</li><li>rehash tạo bảng mới và thêm lại từng khóa theo kích thước mới; chỉ gán bảng mới sau khi xây thành công.</li><li>Theo dãy ví dụ, 32 ở ô 2; 53 ở 3; 22 dò đến 4; 92 đến 5. Xóa 22 vẫn phải tìm được 92 ở phía sau.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Dùng −1 làm ô rỗng khi −1 là khóa hợp lệ.</li><li>Tìm dừng ở ô đã xóa, làm mất dấu khóa phía sau.</li><li>Băm kép có bước 0 hoặc không nguyên tố cùng nhau với m.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Lập bảng dò tuần tự m=10 với 32,53,22,92,17,34,24,37,56; ghi từng lần đụng độ.</p><h3>Mức 2 — Vận dụng</h3><p>Thêm/tìm/xóa cùng bộ khóa bằng nối chuỗi; so sánh trạng thái sau xóa với tombstone.</p><h3>Mức 3 — Nâng cao</h3><p>Thiết kế bảng tra, hàm chia/nhân, họ phổ quát và băm kép; nêu miền khóa, tải, cách rehash và giới hạn lượt dò. Đây là bài tập bổ sung: chương 6 nguồn không có bài tập riêng.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Băm nhanh khi phân bố và tải phù hợp; cách dò và quy tắc xóa phải nhất quán, không hứa O(1) trong mọi tình huống.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter15\">Mở quiz Hashing &amp; Bảng băm</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter15"
    },
    {
      "id": "tuyen-tinh",
      "title": "Cấu trúc dữ liệu tuyến tính",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Hai cách cơ bản nhất để lưu trữ một dãy phần tử — mỗi cách có đánh đổi (trade-off) riêng.",
      "time": 40,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter16",
      "title": "Array vs Linked List",
      "type": "chi-tiet",
      "side": "left",
      "parent": "tuyen-tinh",
      "chapter": "thuat-toan/chapter16.html",
      "summary": "Chi phí tìm vị trí thường lớn hơn sửa liên kết; kiểu danh sách quyết định bất biến cần giữ.",
      "time": 10,
      "related": [
        "chapter17"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Chi phí tìm vị trí thường lớn hơn sửa liên kết; kiểu danh sách quyết định bất biến cần giữ.",
        "code": "const dau = {value: 'An', next: null};\n const cuoi = {value: 'Bình', next: null};\n dau.next = cuoi;\n function layTai(head, index) {\n   if (!Number.isInteger(index) || index < 0) return null;\n   let node = head;\n   for (let i = 0; node && i < index; i++) node = node.next;\n   return node;\n }\n console.log(layTai(dau, 1).value); // Bình\n const a = {value: 1, next: null, prev: null};\n const b = {value: 2, next: a, prev: a};\n a.next = b; a.prev = b; // Hai nút tạo danh sách kép vòng.\n const values = []; let p = a;\n do { values.push(p.value); p = p.next; } while (p !== a);\n console.log(values); // [1, 2]",
        "goals": [
          "So sánh truy cập, thêm/xóa và chi phí bộ nhớ.",
          "Nhận biết danh sách đơn, kép và vòng."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 4.1, 4.5. <a href=\"tai-lieu-ctdlgt.html#danh-sach\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>So sánh truy cập, thêm/xóa và chi phí bộ nhớ.</li><li>Nhận biết danh sách đơn, kép và vòng.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Danh sách sinh viên thay đổi thường xuyên; cần chọn mảng hay các nút liên kết theo thao tác chính thay vì chỉ theo số lượng dữ liệu.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Mảng cổ điển chứa các phần tử liên tiếp; chỉ số cho truy cập O(1). Chèn/xóa giữa mảng cần dịch O(n). Mảng động có thể tăng dung lượng; không nên phát biểu mọi mảng có kích thước cố định. JavaScript Array là cấu trúc của ngôn ngữ, không đảm bảo mọi kiểu phần tử có biểu diễn liên tiếp như mảng C++.</p><p>Linked List (danh sách liên kết) dùng node (nút) có dữ liệu và liên kết. Truy cập vị trí thứ i cần đi từ đầu O(n). Thêm sau một nút đã biết là O(1); nếu phải tìm nút trước thì tổng thao tác vẫn O(n). Nút và các liên kết có chi phí bộ nhớ; danh sách không mặc định tiết kiệm hơn mảng.</p><ul><li>Đơn: mỗi nút có next; nút cuối next=null.</li><li>Kép: thêm prev, liên kết hai chiều; khi chèn/xóa phải sửa cả hai phía.</li><li>Vòng đơn: tail.next=head; vòng kép thêm head.prev=tail. Duyệt dừng khi quay lại nút đầu, không chờ null.</li></ul><p>Trong C++ con trỏ là địa chỉ, cấp phát/giải phóng phải khớp nhau; JavaScript dùng tham chiếu đối tượng. Biến trỏ null khác với một nút chứa dữ liệu null.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter16.cjs</code> rồi chạy <code>node chapter16.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter16.cjs · JavaScript</span><pre><code>const dau = {value: 'An', next: null};\n const cuoi = {value: 'Bình', next: null};\n dau.next = cuoi;\n function layTai(head, index) {\n   if (!Number.isInteger(index) || index &lt; 0) return null;\n   let node = head;\n   for (let i = 0; node &amp;&amp; i &lt; index; i++) node = node.next;\n   return node;\n }\n console.log(layTai(dau, 1).value); // Bình\n const a = {value: 1, next: null, prev: null};\n const b = {value: 2, next: a, prev: a};\n a.next = b; a.prev = b; // Hai nút tạo danh sách kép vòng.\n const values = []; let p = a;\n do { values.push(p.value); p = p.next; } while (p !== a);\n console.log(values); // [1, 2]</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>dau.next=cuoi thiết lập liên kết; không sao chép bản ghi cuối.</li><li>layTai tăng qua next đúng index lần hoặc dừng khi hết.</li><li>Hai nút vòng có cả next và prev trỏ đúng phía; nút cuối không chứa next=null.</li><li>do…while ở đây chỉ dùng vì đã biết vòng không rỗng; với vòng rỗng phải kiểm head trước.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Nói mọi thêm/xóa Linked List đều O(1) dù phải tìm vị trí.</li><li>Duyệt danh sách vòng bằng while(node !== null).</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Lập bảng chi phí truy cập, tìm và chèn của mảng/danh sách.</p><h3>Mức 2 — Vận dụng</h3><p>Vẽ lại prev/next khi chèn một nút giữa hai nút của danh sách kép.</p><h3>Mức 3 — Nâng cao</h3><p>Thiết kế danh sách kép vòng cho chuyến bay, chèn tăng theo mã; truy vấn theo ngày và hủy danh sách khi kết thúc (BT4.6).</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Chi phí tìm vị trí thường lớn hơn sửa liên kết; kiểu danh sách quyết định bất biến cần giữ.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter16\">Mở quiz Array vs Linked List</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter16"
    },
    {
      "id": "chapter17",
      "title": "Cài đặt Linked List",
      "type": "chi-tiet",
      "side": "right",
      "parent": "tuyen-tinh",
      "chapter": "thuat-toan/chapter17.html",
      "summary": "Mọi thao tác phải giữ head/tail và liên kết cuối; kiểm rỗng, một nút, đầu/cuối và không tìm thấy.",
      "time": 10,
      "related": [
        "chapter16"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Mọi thao tác phải giữ head/tail và liên kết cuối; kiểm rỗng, một nút, đầu/cuối và không tìm thấy.",
        "code": "class LinkedList {\n   constructor() { this.head = null; this.tail = null; }\n   prepend(value) {\n     const node = {value, next: this.head};\n     this.head = node; if (!this.tail) this.tail = node;\n     return node;\n   }\n   append(value) {\n     const node = {value, next: null};\n     if (this.tail) this.tail.next = node; else this.head = node;\n     this.tail = node; return node;\n   }\n   find(value) {\n     for (let p = this.head; p; p = p.next) if (p.value === value) return p;\n     return null;\n   }\n   insertAfter(value, newValue) {\n     const q = this.find(value); if (!q) return null;\n     const node = {value: newValue, next: q.next}; q.next = node;\n     if (this.tail === q) this.tail = node;\n     return node;\n   }\n   remove(value) {\n     let prev = null, p = this.head;\n     while (p && p.value !== value) { prev = p; p = p.next; }\n     if (!p) return false;\n     if (prev) prev.next = p.next; else this.head = p.next;\n     if (this.tail === p) this.tail = prev;\n     p.next = null; return true;\n   }\n   values() {\n     const out = []; for (let p = this.head; p; p = p.next) out.push(p.value);\n     return out;\n   }\n   clear() { this.head = this.tail = null; }\n }\n const list = new LinkedList();\n list.append(12); list.prepend(3); list.insertAfter(12, 20);\n list.find(3).value = 4; // Sửa dữ liệu của nút đã tìm.\n list.remove(20);\n console.log(list.values(), list.tail.value); // [4,12] 12",
        "goals": [
          "Cài đầu/cuối, chèn, tìm, duyệt, sửa và xóa.",
          "Giữ bất biến ở danh sách rỗng và một nút."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 4.2, BT4. <a href=\"tai-lieu-ctdlgt.html#danh-sach\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Cài đầu/cuối, chèn, tìm, duyệt, sửa và xóa.</li><li>Giữ bất biến ở danh sách rỗng và một nút.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Quản lý sinh viên cần thêm sau mã chỉ định và xóa đúng bản ghi, kể cả khi đó là phần tử đầu hoặc cuối duy nhất.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Danh sách rỗng có head=tail=null. Nếu không rỗng thì tail.next=null. Thêm đầu: nối nút mới với head cũ rồi đổi head; thêm cuối: nối tail cũ với nút mới rồi đổi tail. Khi đang rỗng phải cập nhật cả hai.</p><p>Thêm sau q: nút mới nhận q.next trước, rồi q.next nhận nút mới. Nếu q là tail thì cập nhật tail. Bản này tìm q theo khóa, không nhận nút từ danh sách khác; không có khóa thì trả null để báo thất bại.</p><p>Xóa cần biết nút trước. Nếu xóa head thì đổi head; nếu xóa tail thì đổi tail; xóa nút duy nhất làm cả hai bằng null. JavaScript bỏ liên kết và để bộ thu gom rác thu hồi khi không còn tham chiếu; trong C++ phải giải phóng đúng đối tượng, không dùng lại con trỏ đã giải phóng.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter17.cjs</code> rồi chạy <code>node chapter17.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter17.cjs · JavaScript</span><pre><code>class LinkedList {\n   constructor() { this.head = null; this.tail = null; }\n   prepend(value) {\n     const node = {value, next: this.head};\n     this.head = node; if (!this.tail) this.tail = node;\n     return node;\n   }\n   append(value) {\n     const node = {value, next: null};\n     if (this.tail) this.tail.next = node; else this.head = node;\n     this.tail = node; return node;\n   }\n   find(value) {\n     for (let p = this.head; p; p = p.next) if (p.value === value) return p;\n     return null;\n   }\n   insertAfter(value, newValue) {\n     const q = this.find(value); if (!q) return null;\n     const node = {value: newValue, next: q.next}; q.next = node;\n     if (this.tail === q) this.tail = node;\n     return node;\n   }\n   remove(value) {\n     let prev = null, p = this.head;\n     while (p &amp;&amp; p.value !== value) { prev = p; p = p.next; }\n     if (!p) return false;\n     if (prev) prev.next = p.next; else this.head = p.next;\n     if (this.tail === p) this.tail = prev;\n     p.next = null; return true;\n   }\n   values() {\n     const out = []; for (let p = this.head; p; p = p.next) out.push(p.value);\n     return out;\n   }\n   clear() { this.head = this.tail = null; }\n }\n const list = new LinkedList();\n list.append(12); list.prepend(3); list.insertAfter(12, 20);\n list.find(3).value = 4; // Sửa dữ liệu của nút đã tìm.\n list.remove(20);\n console.log(list.values(), list.tail.value); // [4,12] 12</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>constructor thiết lập danh sách rỗng. prepend và append luôn trả nút vừa tạo.</li><li>find đi theo next; insertAfter lấy liên kết cũ trước khi đổi q.next.</li><li>remove giữ prev để nối bỏ p; cập nhật tail cả khi xóa nút duy nhất.</li><li>values duyệt hết, chi phí O(n); clear bỏ hai điểm giữ danh sách. Nếu code bên ngoài giữ tham chiếu node thì node đó vẫn còn sống.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Đổi q.next trước khi lưu phần đuôi, làm mất đoạn sau.</li><li>Xóa tail mà không đổi tail.</li><li>Cho rằng clear trong JavaScript tương đương delete từng nút C++.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Thêm/xóa trên danh sách rỗng, một nút và nhiều nút; kiểm head/tail.</p><h3>Mức 2 — Vận dụng</h3><p>Quản lý sinh viên (mã, họ tên, năm sinh, điểm): nhập, in, tìm theo tên, chèn sau mã, xóa theo mã, sắp mã/tên và hủy danh sách (BT4.1).</p><h3>Mức 3 — Nâng cao</h3><p>Quản lý thành phố (tên, diện tích, dân số): nhập/xuất, tìm diện tích lớn nhất và chèn sau, xóa Ha Noi nếu có, sắp dân số tăng (BT4.5).</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Mọi thao tác phải giữ head/tail và liên kết cuối; kiểm rỗng, một nút, đầu/cuối và không tìm thấy.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter17\">Mở quiz Cài đặt Linked List</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter17"
    },
    {
      "id": "chapter18",
      "title": "Stack — Ứng dụng thực tế",
      "type": "chi-tiet",
      "side": "left",
      "parent": "tuyen-tinh",
      "chapter": "thuat-toan/chapter18.html",
      "summary": "Stack giữ thứ tự ngược; kiểm đầy/rỗng, thứ tự toán hạng và trạng thái khung công việc là phần quyết định tính đúng.",
      "time": 13,
      "related": [
        "chapter20"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Stack giữ thứ tự ngược; kiểm đầy/rỗng, thứ tự toán hạng và trạng thái khung công việc là phần quyết định tính đúng.",
        "code": "class ArrayStack {\n   constructor(capacity = 100) {\n     if (!Number.isInteger(capacity) || capacity < 1) throw new RangeError('Sức chứa sai');\n     this.a = Array(capacity); this.top = -1;\n   }\n   isEmpty() { return this.top === -1; }\n   push(x) {\n     if (this.top + 1 === this.a.length) throw new RangeError('Stack đầy');\n     this.a[++this.top] = x;\n   }\n   peek() { if (this.isEmpty()) throw new RangeError('Stack rỗng'); return this.a[this.top]; }\n   pop() { const x = this.peek(); this.a[this.top--] = undefined; return x; }\n }\n class LinkedStack {\n   constructor() { this.head = null; }\n   isEmpty() { return this.head === null; }\n   push(value) { this.head = {value, next: this.head}; }\n   peek() { if (this.isEmpty()) throw new RangeError('Stack rỗng'); return this.head.value; }\n   pop() { const x = this.peek(); this.head = this.head.next; return x; }\n }\n function doiCoSo(n, b) {\n   if (!Number.isSafeInteger(n) || n < 0 || !Number.isInteger(b) || b < 2 || b > 36)\n     throw new RangeError('Cần n nguyên không âm, cơ số 2..36');\n   if (n === 0) return '0';\n   const stack = new LinkedStack(), digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';\n   while (n > 0) { stack.push(n % b); n = Math.floor(n / b); }\n   let out = ''; while (!stack.isEmpty()) out += digits[stack.pop()];\n   return out;\n }\n function daoChuoi(s) {\n   const stack = Array.from(s), out = [];\n   while (stack.length) out.push(stack.pop()); return out.join('');\n }\n function hauTo(tokens) {\n   const s = [];\n   for (const token of tokens) {\n     if (/^\\d+$/.test(token)) { s.push(Number(token)); continue; }\n     if (!['+', '-', '*', '/'].includes(token) || s.length < 2)\n       throw new SyntaxError('Hậu tố sai');\n     const right = s.pop(), left = s.pop();\n     if (token === '/' && right === 0) throw new RangeError('Chia cho 0');\n     s.push(token === '+' ? left + right : token === '-' ? left - right :\n       token === '*' ? left * right : left / right);\n   }\n   if (s.length !== 1) throw new SyntaxError('Thừa hoặc thiếu toán hạng');\n   return s[0];\n }\n function sangHauTo(tokens) {\n   const out = [], ops = [], rank = {'+':1, '-':1, '*':2, '/':2};\n   let canSo = true;\n   for (const t of tokens) {\n     if (/^\\d+$/.test(t)) {\n       if (!canSo) throw new SyntaxError('Thiếu toán tử');\n       out.push(t); canSo = false;\n     } else if (t === '(') {\n       if (!canSo) throw new SyntaxError('Thiếu toán tử trước ngoặc'); ops.push(t);\n     } else if (t === ')') {\n       if (canSo) throw new SyntaxError('Thiếu toán hạng');\n       while (ops.length && ops.at(-1) !== '(') out.push(ops.pop());\n       if (ops.pop() !== '(') throw new SyntaxError('Lệch ngoặc');\n     } else if (Object.hasOwn(rank, t)) {\n       if (canSo) throw new SyntaxError('Thiếu toán hạng');\n       while (ops.length && ops.at(-1) !== '(' && rank[ops.at(-1)] >= rank[t]) out.push(ops.pop());\n       ops.push(t); canSo = true;\n     } else throw new SyntaxError('Token không hỗ trợ');\n   }\n   if (canSo) throw new SyntaxError('Biểu thức chưa đủ');\n   while (ops.length) { const t = ops.pop(); if (t === '(') throw new SyntaxError('Lệch ngoặc'); out.push(t); }\n   return out;\n }\n function haNoi(n) {\n   if (!Number.isInteger(n) || n < 0 || n > 15) throw new RangeError('Ví dụ giới hạn 0..15 đĩa');\n   const todo = [{n, from:'A', to:'B', via:'C'}], moves = [];\n   while (todo.length) {\n     const t = todo.pop(); if (t.n === 0) continue;\n     if (t.n === 1) { moves.push([t.from, t.to]); continue; }\n     todo.push({n:t.n-1, from:t.via, to:t.to, via:t.from});\n     todo.push({n:1, from:t.from, to:t.to, via:t.via});\n     todo.push({n:t.n-1, from:t.from, to:t.via, via:t.to});\n   }\n   return moves;\n }\n console.log(doiCoSo(26, 16), daoChuoi('An')); // 1A nA\n console.log(hauTo(sangHauTo(['(', '2', '+', '3', ')', '*', '4']))); // 20\n console.log(haNoi(3).length); // 7",
        "goals": [
          "Cài Stack bằng mảng và danh sách.",
          "Áp dụng đổi cơ số, đảo chuỗi, biểu thức và khử đệ quy."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 4.3, BT4.2, BT4.3. <a href=\"tai-lieu-ctdlgt.html#danh-sach\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Cài Stack bằng mảng và danh sách.</li><li>Áp dụng đổi cơ số, đảo chuỗi, biểu thức và khử đệ quy.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Nút Undo phải hoàn tác thao tác vừa thực hiện; xử lý ngoặc phải ghép dấu đóng với dấu mở gần nhất chưa ghép.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Stack (ngăn xếp) theo LIFO: vào sau ra trước. push thêm đỉnh, pop lấy và bỏ đỉnh, peek xem đỉnh, isEmpty kiểm rỗng. Với mảng cố định capacity, top=−1 khi rỗng, đầy khi top=capacity−1. Kiểm đầy trước ghi và kiểm rỗng trước đọc. Với danh sách đơn, dùng head làm đỉnh; push/pop sửa liên kết O(1), mỗi nút có chi phí vùng nhớ.</p>\n <h3>Ứng dụng</h3><ul><li>Đổi cơ số: chia liên tiếp số nguyên không âm cho b, đẩy các phần dư; pop cho chữ số từ cao xuống thấp. Số 0 cần trả riêng “0”.</li><li>Đảo chuỗi: đẩy từng ký tự, lấy ngược. Ví dụ dùng Array.from để không tách đôi surrogate pair; chưa xử lý mọi grapheme gồm nhiều code point.</li><li>Hậu tố (postfix): toán hạng vào stack; gặp toán tử lấy phải trước, trái sau. Ví dụ 2 3 + 4 * cho 20. Biểu thức sai phải báo lỗi, không dùng eval.</li><li>Trung tố sang hậu tố: toán hạng ra output, dấu mở vào stack, dấu đóng lấy đến dấu mở; toán tử chờ các toán tử ưu tiên cao hơn hoặc bằng ở đỉnh rồi mới push. Ví dụ chỉ hỗ trợ + − * / hai ngôi, ngoặc và số nguyên không âm, không có dấu âm đơn ngôi.</li><li>Khử đệ quy: lưu khung công việc vào stack thay call stack. Tháp Hà Nội: chuyển n−1 từ nguồn sang tạm, chuyển đĩa lớn sang đích, chuyển n−1 từ tạm sang đích. Vì LIFO, đẩy ba việc theo thứ tự ngược. Số bước 2ⁿ−1; dùng stack không làm bài toán thành thời gian tuyến tính.</li></ul>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter18.cjs</code> rồi chạy <code>node chapter18.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter18.cjs · JavaScript</span><pre><code>class ArrayStack {\n   constructor(capacity = 100) {\n     if (!Number.isInteger(capacity) || capacity &lt; 1) throw new RangeError('Sức chứa sai');\n     this.a = Array(capacity); this.top = -1;\n   }\n   isEmpty() { return this.top === -1; }\n   push(x) {\n     if (this.top + 1 === this.a.length) throw new RangeError('Stack đầy');\n     this.a[++this.top] = x;\n   }\n   peek() { if (this.isEmpty()) throw new RangeError('Stack rỗng'); return this.a[this.top]; }\n   pop() { const x = this.peek(); this.a[this.top--] = undefined; return x; }\n }\n class LinkedStack {\n   constructor() { this.head = null; }\n   isEmpty() { return this.head === null; }\n   push(value) { this.head = {value, next: this.head}; }\n   peek() { if (this.isEmpty()) throw new RangeError('Stack rỗng'); return this.head.value; }\n   pop() { const x = this.peek(); this.head = this.head.next; return x; }\n }\n function doiCoSo(n, b) {\n   if (!Number.isSafeInteger(n) || n &lt; 0 || !Number.isInteger(b) || b &lt; 2 || b &gt; 36)\n     throw new RangeError('Cần n nguyên không âm, cơ số 2..36');\n   if (n === 0) return '0';\n   const stack = new LinkedStack(), digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';\n   while (n &gt; 0) { stack.push(n % b); n = Math.floor(n / b); }\n   let out = ''; while (!stack.isEmpty()) out += digits[stack.pop()];\n   return out;\n }\n function daoChuoi(s) {\n   const stack = Array.from(s), out = [];\n   while (stack.length) out.push(stack.pop()); return out.join('');\n }\n function hauTo(tokens) {\n   const s = [];\n   for (const token of tokens) {\n     if (/^\\d+$/.test(token)) { s.push(Number(token)); continue; }\n     if (!['+', '-', '*', '/'].includes(token) || s.length &lt; 2)\n       throw new SyntaxError('Hậu tố sai');\n     const right = s.pop(), left = s.pop();\n     if (token === '/' &amp;&amp; right === 0) throw new RangeError('Chia cho 0');\n     s.push(token === '+' ? left + right : token === '-' ? left - right :\n       token === '*' ? left * right : left / right);\n   }\n   if (s.length !== 1) throw new SyntaxError('Thừa hoặc thiếu toán hạng');\n   return s[0];\n }\n function sangHauTo(tokens) {\n   const out = [], ops = [], rank = {'+':1, '-':1, '*':2, '/':2};\n   let canSo = true;\n   for (const t of tokens) {\n     if (/^\\d+$/.test(t)) {\n       if (!canSo) throw new SyntaxError('Thiếu toán tử');\n       out.push(t); canSo = false;\n     } else if (t === '(') {\n       if (!canSo) throw new SyntaxError('Thiếu toán tử trước ngoặc'); ops.push(t);\n     } else if (t === ')') {\n       if (canSo) throw new SyntaxError('Thiếu toán hạng');\n       while (ops.length &amp;&amp; ops.at(-1) !== '(') out.push(ops.pop());\n       if (ops.pop() !== '(') throw new SyntaxError('Lệch ngoặc');\n     } else if (Object.hasOwn(rank, t)) {\n       if (canSo) throw new SyntaxError('Thiếu toán hạng');\n       while (ops.length &amp;&amp; ops.at(-1) !== '(' &amp;&amp; rank[ops.at(-1)] &gt;= rank[t]) out.push(ops.pop());\n       ops.push(t); canSo = true;\n     } else throw new SyntaxError('Token không hỗ trợ');\n   }\n   if (canSo) throw new SyntaxError('Biểu thức chưa đủ');\n   while (ops.length) { const t = ops.pop(); if (t === '(') throw new SyntaxError('Lệch ngoặc'); out.push(t); }\n   return out;\n }\n function haNoi(n) {\n   if (!Number.isInteger(n) || n &lt; 0 || n &gt; 15) throw new RangeError('Ví dụ giới hạn 0..15 đĩa');\n   const todo = [{n, from:'A', to:'B', via:'C'}], moves = [];\n   while (todo.length) {\n     const t = todo.pop(); if (t.n === 0) continue;\n     if (t.n === 1) { moves.push([t.from, t.to]); continue; }\n     todo.push({n:t.n-1, from:t.via, to:t.to, via:t.from});\n     todo.push({n:1, from:t.from, to:t.to, via:t.via});\n     todo.push({n:t.n-1, from:t.from, to:t.via, via:t.to});\n   }\n   return moves;\n }\n console.log(doiCoSo(26, 16), daoChuoi('An')); // 1A nA\n console.log(hauTo(sangHauTo(['(', '2', '+', '3', ')', '*', '4']))); // 20\n console.log(haNoi(3).length); // 7</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>ArrayStack dùng ++top trước ghi và giảm top sau đọc; LinkedStack đặt node mới trước head.</li><li>Đổi cơ số đẩy phần dư theo thứ tự từ thấp lên cao, lấy ra theo thứ tự ngược.</li><li>hauTo luôn pop right trước left: phép trừ/chia sẽ sai nếu đảo.</li><li>sangHauTo kiểm tra thứ tự token và ngoặc; rank quy định * / cao hơn + −, đều kết hợp trái.</li><li>haNoi đẩy việc cuối trước; đầu stack luôn là việc cần làm tiếp. Giới hạn 15 đĩa chỉ bảo vệ ví dụ khỏi tạo quá nhiều bước.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Pop/peek khi rỗng hoặc ghi vượt mảng cố định.</li><li>Đảo thứ tự toán hạng phép trừ và chia.</li><li>Đẩy ba việc Hà Nội theo thứ tự thực hiện thay vì thứ tự ngược.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Đổi 0, 10, 26 sang cơ số 2/8/16 bằng Stack danh sách (BT4.2); kiểm số âm/cơ số sai.</p><h3>Mức 2 — Vận dụng</h3><p>Đổi (2 + 3) * 4 sang hậu tố và tính; thử ngoặc sai, chia 0, thiếu toán hạng.</p><h3>Mức 3 — Nâng cao</h3><p>BT4.3 toa tàu: mô hình hóa A là đầu vào 1…n, B là một stack, C là đầu ra. Kiểm tra một hoán vị có thể đạt bằng push/pop và in các bước. Hình đường ray không có đầy đủ trong bản Markdown; đây là giả thiết của mô hình chuẩn, cần đối chiếu bản hình nếu tuyến khác.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Stack giữ thứ tự ngược; kiểm đầy/rỗng, thứ tự toán hạng và trạng thái khung công việc là phần quyết định tính đúng.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter18\">Mở quiz Stack — Ứng dụng thực tế</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter18"
    },
    {
      "id": "chapter19",
      "title": "Queue & Deque",
      "type": "chi-tiet",
      "side": "right",
      "parent": "tuyen-tinh",
      "chapter": "thuat-toan/chapter19.html",
      "summary": "FIFO quyết định thứ tự phục vụ; mảng vòng và danh sách đầu/cuối cung cấp thao tác hiệu quả khi giữ đúng bất biến.",
      "time": 10,
      "related": [
        "chapter20"
      ],
      "comingSoon": false,
      "source": {
        "summary": "FIFO quyết định thứ tự phục vụ; mảng vòng và danh sách đầu/cuối cung cấp thao tác hiệu quả khi giữ đúng bất biến.",
        "code": "class RingQueue {\n   constructor(capacity) {\n     if (!Number.isInteger(capacity) || capacity < 1) throw new RangeError('Sức chứa sai');\n     this.a = Array(capacity); this.head = 0; this.size = 0;\n   }\n   isEmpty() { return this.size === 0; }\n   isFull() { return this.size === this.a.length; }\n   enqueue(x) {\n     if (this.isFull()) throw new RangeError('Queue đầy');\n     this.a[(this.head + this.size) % this.a.length] = x; this.size++;\n   }\n   peek() { if (this.isEmpty()) throw new RangeError('Queue rỗng'); return this.a[this.head]; }\n   dequeue() {\n     const x = this.peek(); this.a[this.head] = undefined;\n     this.head = (this.head + 1) % this.a.length; this.size--; return x;\n   }\n }\n class LinkedQueue {\n   constructor() { this.head = this.tail = null; this.size = 0; }\n   isEmpty() { return this.head === null; }\n   enqueue(value) {\n     const node = {value, next: null};\n     if (this.tail) this.tail.next = node; else this.head = node;\n     this.tail = node; this.size++;\n   }\n   peek() { if (this.isEmpty()) throw new RangeError('Queue rỗng'); return this.head.value; }\n   dequeue() {\n     const x = this.peek(); this.head = this.head.next;\n     if (!this.head) this.tail = null;\n     this.size--; return x;\n   }\n }\n const q = new RingQueue(2);\n q.enqueue('An'); q.enqueue('Bình'); console.log(q.dequeue()); // An\n q.enqueue('Châu');\n console.log(q.dequeue(), q.dequeue()); // Bình Châu",
        "goals": [
          "Cài Queue mảng vòng và danh sách.",
          "Phân biệt FIFO, Deque và hàng ưu tiên."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 4.4, BT4.4. <a href=\"tai-lieu-ctdlgt.html#danh-sach\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Cài Queue mảng vòng và danh sách.</li><li>Phân biệt FIFO, Deque và hàng ưu tiên.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Khách đến thuê máy trước cần được phục vụ trước khi có máy trống; trả máy phải đưa máy về hàng sẵn sàng.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Queue (hàng đợi) theo FIFO: vào trước ra trước. enqueue thêm cuối, dequeue lấy đầu, front/peek xem đầu, isEmpty/isFull kiểm trạng thái. Hai biến head và tail xác định đầu/cuối. Danh sách đơn giữ cả head và tail giúp thêm cuối/lấy đầu O(1).</p><p>Mảng tuyến tính chỉ tăng chỉ số cuối có thể “đầy giả” khi đầu đã có ô trống; dịch cả mảng sau mỗi dequeue lại tốn O(n). Circular queue (hàng đợi vòng) dùng chỉ số modulo capacity và size để phân biệt rỗng/đầy, tái sử dụng ô. Bản dưới cho phép dùng đủ capacity ô.</p><p>Deque (double-ended queue, hàng đợi hai đầu) cho thêm/lấy ở cả hai đầu, phù hợp danh sách kép hoặc mảng vòng có thêm thao tác đầu. Priority Queue (hàng ưu tiên) chọn theo độ ưu tiên, không tự tuân FIFO. Đây là phần mở rộng; không nhầm ba kiểu dữ liệu trừu tượng.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter19.cjs</code> rồi chạy <code>node chapter19.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter19.cjs · JavaScript</span><pre><code>class RingQueue {\n   constructor(capacity) {\n     if (!Number.isInteger(capacity) || capacity &lt; 1) throw new RangeError('Sức chứa sai');\n     this.a = Array(capacity); this.head = 0; this.size = 0;\n   }\n   isEmpty() { return this.size === 0; }\n   isFull() { return this.size === this.a.length; }\n   enqueue(x) {\n     if (this.isFull()) throw new RangeError('Queue đầy');\n     this.a[(this.head + this.size) % this.a.length] = x; this.size++;\n   }\n   peek() { if (this.isEmpty()) throw new RangeError('Queue rỗng'); return this.a[this.head]; }\n   dequeue() {\n     const x = this.peek(); this.a[this.head] = undefined;\n     this.head = (this.head + 1) % this.a.length; this.size--; return x;\n   }\n }\n class LinkedQueue {\n   constructor() { this.head = this.tail = null; this.size = 0; }\n   isEmpty() { return this.head === null; }\n   enqueue(value) {\n     const node = {value, next: null};\n     if (this.tail) this.tail.next = node; else this.head = node;\n     this.tail = node; this.size++;\n   }\n   peek() { if (this.isEmpty()) throw new RangeError('Queue rỗng'); return this.head.value; }\n   dequeue() {\n     const x = this.peek(); this.head = this.head.next;\n     if (!this.head) this.tail = null;\n     this.size--; return x;\n   }\n }\n const q = new RingQueue(2);\n q.enqueue('An'); q.enqueue('Bình'); console.log(q.dequeue()); // An\n q.enqueue('Châu');\n console.log(q.dequeue(), q.dequeue()); // Bình Châu</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>RingQueue lưu head và size; vị trí ghi tiếp là (head+size)%capacity.</li><li>dequeue xóa tham chiếu trong ô vừa dùng, dịch head theo modulo và giảm size.</li><li>LinkedQueue nối tail; khi lấy hết nút cuối phải gán tail=null.</li><li>Ví dụ hai ô vẫn nhận Châu sau khi An rời hàng, minh họa tái sử dụng ô đầu.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Dùng head=tail cho cả rỗng và đầy mà không có quy ước bổ sung.</li><li>Xóa nút cuối danh sách nhưng giữ tail cũ.</li><li>Dùng Array.shift cho hàng lớn rồi giả định thao tác luôn O(1).</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Theo dõi head/size qua các lượt thêm/lấy của mảng vòng capacity=3.</p><h3>Mức 2 — Vận dụng</h3><p>Viết Deque có thêm/lấy hai đầu và thử rỗng, một phần tử, vòng chỉ số.</p><h3>Mức 3 — Nâng cao</h3><p>BT4.4: mô phỏng phòng NET với queue máy trống A, queue khách chờ Q và danh sách đang thuê H (tên, giờ bắt đầu, số máy). Đăng ký, trả máy và phục vụ phải cập nhật nhất quán A/Q/H, không cấp một máy cho hai khách.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>FIFO quyết định thứ tự phục vụ; mảng vòng và danh sách đầu/cuối cung cấp thao tác hiệu quả khi giữ đúng bất biến.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter19\">Mở quiz Queue &amp; Deque</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter19"
    },
    {
      "id": "cay",
      "title": "Cây",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Cấu trúc dữ liệu phân cấp — mỗi node có tối đa 2 con. Nền tảng cho BST, Heap, và nhiều cấu trúc nâng cao khác.",
      "time": 40,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter20",
      "title": "Binary Tree & Duyệt cây",
      "type": "chi-tiet",
      "side": "left",
      "parent": "cay",
      "chapter": "thuat-toan/chapter20.html",
      "summary": "Chốt quy ước chiều cao và thứ tự duyệt; toàn bộ phép duyệt luôn phải thăm từng nút.",
      "time": 10,
      "related": [
        "chapter18",
        "chapter19",
        "chapter21"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Chốt quy ước chiều cao và thứ tự duyệt; toàn bộ phép duyệt luôn phải thăm từng nút.",
        "code": "function duyet(root, order = 'LNR', out = []) {\n   if (!['NLR','NRL','LNR','RNL','LRN','RLN'].includes(order))\n     throw new RangeError('Thứ tự không hợp lệ');\n   if (!root) return out;\n   for (const step of order) {\n     if (step === 'N') out.push(root.key);\n     else duyet(step === 'L' ? root.left : root.right, order, out);\n   }\n   return out;\n }\n function chieuCao(root) {\n   return root ? 1 + Math.max(chieuCao(root.left), chieuCao(root.right)) : -1;\n }\n const tree = {key:2, left:{key:1,left:null,right:null}, right:{key:3,left:null,right:null}};\n for (const order of ['NLR','NRL','LNR','RNL','LRN','RLN'])\n   console.log(order, duyet(tree, order));\n // NLR [2,1,3]; NRL [2,3,1]; LNR [1,2,3]; RNL [3,2,1]\n // LRN [1,3,2]; RLN [3,1,2]\n console.log(chieuCao(tree)); // 1",
        "goals": [
          "Hiểu thuật ngữ cây và cách biểu diễn.",
          "Duyệt đủ sáu thứ tự và tính đúng chi phí."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 5.1, 5.2, BT5.a. <a href=\"tai-lieu-ctdlgt.html#cay\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Hiểu thuật ngữ cây và cách biểu diễn.</li><li>Duyệt đủ sáu thứ tự và tính đúng chi phí.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Thư mục và biểu thức toán có cấu trúc phân cấp; cần thăm từng nút theo thứ tự phục vụ in biểu thức hay xóa cây.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Tree (cây) có root (gốc), quan hệ parent/child (cha/con), leaf (lá, không con), subtree (cây con). Bậc nút là số con; bậc cây là bậc lớn nhất. Depth/level là số cạnh từ gốc, gốc mức 0. Quy ước ở bài này: height (chiều cao) tính theo cạnh, cây rỗng −1, lá 0.</p><p>Binary tree (cây nhị phân) có tối đa hai con phân biệt trái/phải. Mức i tối đa 2ⁱ nút; cây cao h ≥ 0 có từ h+1 đến 2^(h+1)−1 nút. Perfect (cây hoàn hảo) lấp đầy mọi mức; complete (cây hoàn chỉnh) lấp đầy các mức trước, mức cuối dồn trái. Cây complete n nút cao floor(log₂ n), còn công thức log₂(n+1)−1 chính xác với perfect.</p><p>Biểu diễn bằng nút left/right và tùy chọn parent; mảng theo chỉ số con 2i+1/2i+2 phù hợp cây hoàn chỉnh nhưng lãng phí với cây lệch; mảng parent lưu chỉ số cha cần quy ước riêng. Cây biểu thức có toán tử tại nút trong, toán hạng ở lá.</p><p>N là nút, L trái, R phải: NLR/NRL là tiền tự; LNR/RNL là trung tự; LRN/RLN là hậu tự. Thăm đủ n nút mất Θ(n), stack O(h+1), không phải O(log h). Trung tự chỉ tăng khi cây có thêm tính chất BST.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter20.cjs</code> rồi chạy <code>node chapter20.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter20.cjs · JavaScript</span><pre><code>function duyet(root, order = 'LNR', out = []) {\n   if (!['NLR','NRL','LNR','RNL','LRN','RLN'].includes(order))\n     throw new RangeError('Thứ tự không hợp lệ');\n   if (!root) return out;\n   for (const step of order) {\n     if (step === 'N') out.push(root.key);\n     else duyet(step === 'L' ? root.left : root.right, order, out);\n   }\n   return out;\n }\n function chieuCao(root) {\n   return root ? 1 + Math.max(chieuCao(root.left), chieuCao(root.right)) : -1;\n }\n const tree = {key:2, left:{key:1,left:null,right:null}, right:{key:3,left:null,right:null}};\n for (const order of ['NLR','NRL','LNR','RNL','LRN','RLN'])\n   console.log(order, duyet(tree, order));\n // NLR [2,1,3]; NRL [2,3,1]; LNR [1,2,3]; RNL [3,2,1]\n // LRN [1,3,2]; RLN [3,1,2]\n console.log(chieuCao(tree)); // 1</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>root=null là điểm dừng của mỗi cây con.</li><li>Vòng theo chuỗi order quyết định lúc thăm N và lúc đệ quy L/R; mỗi chữ xuất hiện đúng một lần.</li><li>out chung tích lũy kết quả, không tạo một danh sách mới ở từng nút.</li><li>chieuCao dùng −1 cho rỗng để lá có chiều cao 0; không trộn với quy ước tính theo số nút.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Nhầm 2i với 2ⁱ cho số nút tối đa ở mức i.</li><li>Gọi mọi cây nhị phân là BST.</li><li>Gán chi phí logarit cho thao tác phải in đủ n nút.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Gọi tên gốc/lá/mức/bậc/chiều cao trong cây ví dụ.</p><h3>Mức 2 — Vận dụng</h3><p>Biểu diễn cùng cây bằng left/right, mảng vị trí và mảng cha; nêu ô trống của cây lệch.</p><h3>Mức 3 — Nâng cao</h3><p>BT5.a: tạo BST từ 54,31,43,29,65,10,20,36,78,59 rồi ghi đủ sáu thứ tự duyệt; đối chiếu số nút bằng số khóa.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Chốt quy ước chiều cao và thứ tự duyệt; toàn bộ phép duyệt luôn phải thăm từng nút.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter20\">Mở quiz Binary Tree &amp; Duyệt cây</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter20"
    },
    {
      "id": "chapter21",
      "title": "Binary Search Tree (BST)",
      "type": "chi-tiet",
      "side": "right",
      "parent": "cay",
      "chapter": "thuat-toan/chapter21.html",
      "summary": "BST duy trì thứ tự trên toàn cây con; gốc có thể thay đổi sau cập nhật và độ cao không tự được đảm bảo.",
      "time": 10,
      "related": [
        "chapter22"
      ],
      "comingSoon": false,
      "source": {
        "summary": "BST duy trì thứ tự trên toàn cây con; gốc có thể thay đổi sau cập nhật và độ cao không tự được đảm bảo.",
        "code": "function node(key) { return {key, left:null, right:null}; }\n function insert(root, key) {\n   if (!Number.isFinite(key)) throw new TypeError('Khóa phải là số hữu hạn');\n   if (!root) return node(key);\n   if (key < root.key) root.left = insert(root.left, key);\n   else if (key > root.key) root.right = insert(root.right, key);\n   return root;\n }\n function search(root, key) {\n   while (root && root.key !== key) root = key < root.key ? root.left : root.right;\n   return root;\n }\n function minimum(root) { while (root.left) root = root.left; return root; }\n function remove(root, key) {\n   if (!root) return null;\n   if (key < root.key) root.left = remove(root.left, key);\n   else if (key > root.key) root.right = remove(root.right, key);\n   else {\n     if (!root.left) return root.right;\n     if (!root.right) return root.left;\n     root.key = minimum(root.right).key;\n     root.right = remove(root.right, root.key);\n   }\n   return root;\n }\n function inorder(root, out = []) {\n   if (root) { inorder(root.left, out); out.push(root.key); inorder(root.right, out); }\n   return out;\n }\n let root = null;\n for (const x of [54,31,43,29,65,10,20,36,78,59]) root = insert(root, x);\n root = remove(root, 31);\n console.log(inorder(root)); // [10,20,29,36,43,54,59,65,78]\n console.log(search(root, 31)); // null",
        "goals": [
          "Cài tìm/thêm/xóa BST.",
          "Xử lý ba trường hợp xóa và khóa trùng."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 5.3, BT5. <a href=\"tai-lieu-ctdlgt.html#cay\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Cài tìm/thêm/xóa BST.</li><li>Xử lý ba trường hợp xóa và khóa trùng.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Một tập khóa thay đổi cần duy trì thứ tự để tra cứu và liệt kê tăng dần mà không sắp lại toàn bộ sau mỗi lần thêm.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>BST (Binary Search Tree, cây nhị phân tìm kiếm): mọi khóa trong cây con trái nhỏ hơn khóa nút, mọi khóa bên phải lớn hơn. Đây là điều kiện trên toàn cây con, không chỉ hai nút con trực tiếp. Khóa phải so sánh nhất quán; bản này dùng khóa số hữu hạn và bỏ qua lần thêm khóa trùng.</p><p>Tìm/thêm đi theo một nhánh từ gốc, chi phí O(h+1). Cây cân bằng h=O(log n); thêm dãy tăng vào BST thường có thể làm h=n−1, chi phí O(n). Duyệt LNR cho tăng dần.</p><p>Xóa: lá thành null; một con trả con thay thế; hai con thay khóa bằng successor (nút nhỏ nhất của cây con phải) rồi xóa successor ở vị trí cũ. Có thể dùng predecessor lớn nhất bên trái thay thế nhưng phải thống nhất. Mỗi thao tác trả gốc mới để bên gọi cập nhật, kể cả khi xóa gốc.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter21.cjs</code> rồi chạy <code>node chapter21.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter21.cjs · JavaScript</span><pre><code>function node(key) { return {key, left:null, right:null}; }\n function insert(root, key) {\n   if (!Number.isFinite(key)) throw new TypeError('Khóa phải là số hữu hạn');\n   if (!root) return node(key);\n   if (key &lt; root.key) root.left = insert(root.left, key);\n   else if (key &gt; root.key) root.right = insert(root.right, key);\n   return root;\n }\n function search(root, key) {\n   while (root &amp;&amp; root.key !== key) root = key &lt; root.key ? root.left : root.right;\n   return root;\n }\n function minimum(root) { while (root.left) root = root.left; return root; }\n function remove(root, key) {\n   if (!root) return null;\n   if (key &lt; root.key) root.left = remove(root.left, key);\n   else if (key &gt; root.key) root.right = remove(root.right, key);\n   else {\n     if (!root.left) return root.right;\n     if (!root.right) return root.left;\n     root.key = minimum(root.right).key;\n     root.right = remove(root.right, root.key);\n   }\n   return root;\n }\n function inorder(root, out = []) {\n   if (root) { inorder(root.left, out); out.push(root.key); inorder(root.right, out); }\n   return out;\n }\n let root = null;\n for (const x of [54,31,43,29,65,10,20,36,78,59]) root = insert(root, x);\n root = remove(root, 31);\n console.log(inorder(root)); // [10,20,29,36,43,54,59,65,78]\n console.log(search(root, 31)); // null</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>node tạo lá. insert trả root ở mỗi mức và gán kết quả vào liên kết con phù hợp.</li><li>search chỉ đi một nhánh; null báo không tìm thấy.</li><li>remove trả ngay con thay thế ở trường hợp có tối đa một con.</li><li>Với hai con, minimum đi hết nhánh trái của cây con phải; xóa bản sao cũ sau khi thay khóa.</li><li>Lệnh root=remove(...) giữ được gốc mới; quy tắc tương tự cho thêm và cân bằng.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Chỉ kiểm cha với con trực tiếp khi xác minh BST.</li><li>Bỏ qua giá trị trả về sau khi xóa gốc.</li><li>Thay khóa successor nhưng không xóa nút successor cũ.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Tìm 36 và 100 trong cây ví dụ, ghi đường đi.</p><h3>Mức 2 — Vận dụng</h3><p>BT5.b: vẽ cây trước/sau khi xóa 31 bằng successor, kiểm LNR vẫn tăng.</p><h3>Mức 3 — Nâng cao</h3><p>BT5.d: viết chương trình tương tác thêm/tìm/xóa/in cây, kiểm đủ lá/một con/hai con/gốc/khóa không có và giải phóng khi kết thúc.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>BST duy trì thứ tự trên toàn cây con; gốc có thể thay đổi sau cập nhật và độ cao không tự được đảm bảo.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter21\">Mở quiz Binary Search Tree (BST)</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter21"
    },
    {
      "id": "chapter22",
      "title": "Cây cân bằng (AVL)",
      "type": "chi-tiet",
      "side": "left",
      "parent": "cay",
      "chapter": "thuat-toan/chapter22.html",
      "summary": "AVL giữ thứ tự BST và bất biến chiều cao; xóa cần phục hồi từ điểm xóa về tận gốc khi cần.",
      "time": 10,
      "related": [
        "chapter21"
      ],
      "comingSoon": false,
      "source": {
        "summary": "AVL giữ thứ tự BST và bất biến chiều cao; xóa cần phục hồi từ điểm xóa về tận gốc khi cần.",
        "code": "const height = n => n ? n.height : 0;\n const balance = n => n ? height(n.left) - height(n.right) : 0;\n function update(n) { n.height = 1 + Math.max(height(n.left), height(n.right)); return n; }\n function rotateRight(y) {\n   const x = y.left, middle = x.right;\n   x.right = y; y.left = middle;\n   update(y); return update(x);\n }\n function rotateLeft(x) {\n   const y = x.right, middle = y.left;\n   y.left = x; x.right = middle;\n   update(x); return update(y);\n }\n function rebalance(n) {\n   if (!n) return null; update(n);\n   if (balance(n) > 1) {\n     if (balance(n.left) < 0) n.left = rotateLeft(n.left);\n     return rotateRight(n);\n   }\n   if (balance(n) < -1) {\n     if (balance(n.right) > 0) n.right = rotateRight(n.right);\n     return rotateLeft(n);\n   }\n   return n;\n }\n function avlInsert(n, key) {\n   if (!Number.isFinite(key)) throw new TypeError('Khóa phải là số hữu hạn');\n   if (!n) return {key, left:null, right:null, height:1};\n   if (key < n.key) n.left = avlInsert(n.left, key);\n   else if (key > n.key) n.right = avlInsert(n.right, key);\n   else return n;\n   return rebalance(n);\n }\n function avlRemove(n, key) {\n   if (!n) return null;\n   if (key < n.key) n.left = avlRemove(n.left, key);\n   else if (key > n.key) n.right = avlRemove(n.right, key);\n   else {\n     if (!n.left) return n.right;\n     if (!n.right) return n.left;\n     let successor = n.right; while (successor.left) successor = successor.left;\n     n.key = successor.key; n.right = avlRemove(n.right, successor.key);\n   }\n   return rebalance(n);\n }\n function inorder(n, out = []) {\n   if (n) { inorder(n.left, out); out.push(n.key); inorder(n.right, out); }\n   return out;\n }\n let root = null;\n for (const x of [54,31,43,29,65,10,20,36,78,59]) root = avlInsert(root, x);\n root = avlRemove(root, 31);\n console.log(inorder(root)); // [10,20,29,36,43,54,59,65,78]",
        "goals": [
          "Nhận biết LL/LR/RR/RL.",
          "Cài thêm/xóa và cập nhật chiều cao AVL."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 5.4, BT5.c. <a href=\"tai-lieu-ctdlgt.html#cay\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Nhận biết LL/LR/RR/RL.</li><li>Cài thêm/xóa và cập nhật chiều cao AVL.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>BST thêm dãy đã tăng bị dài như danh sách; cần tự phục hồi chiều cao sau các lần thêm hoặc xóa.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>AVL là BST có chênh lệch chiều cao hai cây con tại mọi nút không quá 1. Quy ước trong code: height(null)=0, lá=1 (đếm theo số nút), balance=height(left)−height(right). Quy ước này khác bài chiều cao theo cạnh đúng 1 đơn vị, nhưng chênh lệch không đổi. Tài liệu gọi LH/EH/RH là lệch trái/cân bằng/lệch phải; không suy diễn dấu khi tài liệu dùng quy ước khác.</p><ul><li>LL: nút lệch trái và con trái không lệch phải → quay phải.</li><li>LR: lệch trái nhưng con trái lệch phải → quay trái con trái, rồi quay phải nút.</li><li>RR: lệch phải và con phải không lệch trái → quay trái.</li><li>RL: lệch phải nhưng con phải lệch trái → quay phải con phải, rồi quay trái nút.</li></ul><p>Phép quay giữ thứ tự LNR; phải cập nhật chiều cao nút cũ trước nút mới. Thêm như BST rồi cân bằng từ dưới lên. Xóa như BST rồi cân bằng mọi tổ tiên bị ảnh hưởng, có thể lan đến gốc; không chỉ xử lý một điểm. Tìm/thêm/xóa O(log n) vì AVL giữ chiều cao logarit. Code tự chứa, dùng khóa số hữu hạn, bỏ qua trùng.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter22.cjs</code> rồi chạy <code>node chapter22.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter22.cjs · JavaScript</span><pre><code>const height = n =&gt; n ? n.height : 0;\n const balance = n =&gt; n ? height(n.left) - height(n.right) : 0;\n function update(n) { n.height = 1 + Math.max(height(n.left), height(n.right)); return n; }\n function rotateRight(y) {\n   const x = y.left, middle = x.right;\n   x.right = y; y.left = middle;\n   update(y); return update(x);\n }\n function rotateLeft(x) {\n   const y = x.right, middle = y.left;\n   y.left = x; x.right = middle;\n   update(x); return update(y);\n }\n function rebalance(n) {\n   if (!n) return null; update(n);\n   if (balance(n) &gt; 1) {\n     if (balance(n.left) &lt; 0) n.left = rotateLeft(n.left);\n     return rotateRight(n);\n   }\n   if (balance(n) &lt; -1) {\n     if (balance(n.right) &gt; 0) n.right = rotateRight(n.right);\n     return rotateLeft(n);\n   }\n   return n;\n }\n function avlInsert(n, key) {\n   if (!Number.isFinite(key)) throw new TypeError('Khóa phải là số hữu hạn');\n   if (!n) return {key, left:null, right:null, height:1};\n   if (key &lt; n.key) n.left = avlInsert(n.left, key);\n   else if (key &gt; n.key) n.right = avlInsert(n.right, key);\n   else return n;\n   return rebalance(n);\n }\n function avlRemove(n, key) {\n   if (!n) return null;\n   if (key &lt; n.key) n.left = avlRemove(n.left, key);\n   else if (key &gt; n.key) n.right = avlRemove(n.right, key);\n   else {\n     if (!n.left) return n.right;\n     if (!n.right) return n.left;\n     let successor = n.right; while (successor.left) successor = successor.left;\n     n.key = successor.key; n.right = avlRemove(n.right, successor.key);\n   }\n   return rebalance(n);\n }\n function inorder(n, out = []) {\n   if (n) { inorder(n.left, out); out.push(n.key); inorder(n.right, out); }\n   return out;\n }\n let root = null;\n for (const x of [54,31,43,29,65,10,20,36,78,59]) root = avlInsert(root, x);\n root = avlRemove(root, 31);\n console.log(inorder(root)); // [10,20,29,36,43,54,59,65,78]</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>height/balance dùng số nút, update lấy chiều cao con rồi cộng 1.</li><li>rotateRight chuyển cây giữa từ x.right sang y.left trước khi nối x làm gốc mới; thứ tự khóa được giữ.</li><li>rebalance chọn phép quay từ dấu của nút và con, nên dùng được cả khi xóa (con có thể balance=0).</li><li>avlInsert/avlRemove cập nhật liên kết bằng gốc trả về; mỗi tầng quay về rebalance.</li><li>Xóa hai con dùng successor giống BST; chiều cao và cân bằng phải được kiểm lại dọc đường trở về.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Cập nhật chiều cao gốc mới trước khi cập nhật nút cũ sau quay.</li><li>Chọn phép quay chỉ dựa trên khóa vừa thêm khi đang xử lý xóa.</li><li>Dừng cân bằng ngay sau một phép quay trong quá trình xóa.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Dùng [30,20,10], [30,10,20], [10,20,30], [10,30,20] để tạo bốn kiểu lệch.</p><h3>Mức 2 — Vận dụng</h3><p>BT5.c: xây lại cây từ bộ khóa bài 5 bằng AVL insert; vẽ các phép quay và kiểm LNR.</p><h3>Mức 3 — Nâng cao</h3><p>Xóa nhiều khóa liên tiếp, sau mỗi bước kiểm thứ tự, height lưu và |balance|≤1 ở mọi nút; có ít nhất một ca lan cân bằng nhiều tầng.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>AVL giữ thứ tự BST và bất biến chiều cao; xóa cần phục hồi từ điểm xóa về tận gốc khi cần.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter22\">Mở quiz Cây cân bằng (AVL)</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter22"
    },
    {
      "id": "chapter23",
      "title": "Heap & Priority Queue",
      "type": "chi-tiet",
      "side": "right",
      "parent": "cay",
      "chapter": "thuat-toan/chapter23.html",
      "summary": "Heap phục vụ cực trị hiệu quả; không thay thế BST cho duyệt có thứ tự hoặc tìm khóa bất kỳ.",
      "time": 10,
      "related": [
        "chapter09"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Heap phục vụ cực trị hiệu quả; không thay thế BST cho duyệt có thứ tự hoặc tìm khóa bất kỳ.",
        "code": "class MinHeap {\n   constructor() { this.a = []; }\n   peek() { return this.a[0]; }\n   push(x) {\n     if (!Number.isFinite(x)) throw new TypeError('Ưu tiên phải là số hữu hạn');\n     this.a.push(x); let i = this.a.length - 1;\n     while (i > 0) {\n       const p = Math.floor((i - 1) / 2);\n       if (this.a[p] <= this.a[i]) break;\n       [this.a[p], this.a[i]] = [this.a[i], this.a[p]]; i = p;\n     }\n   }\n   pop() {\n     if (!this.a.length) return undefined;\n     const result = this.a[0], last = this.a.pop();\n     if (!this.a.length) return result;\n     this.a[0] = last; let i = 0;\n     while (2 * i + 1 < this.a.length) {\n       let c = 2 * i + 1;\n       if (c + 1 < this.a.length && this.a[c + 1] < this.a[c]) c++;\n       if (this.a[i] <= this.a[c]) break;\n       [this.a[i], this.a[c]] = [this.a[c], this.a[i]]; i = c;\n     }\n     return result;\n   }\n }\n const pq = new MinHeap();\n for (const x of [5,1,3,1]) pq.push(x);\n console.log(pq.pop(), pq.pop(), pq.pop(), pq.pop(), pq.pop());\n // 1 1 3 5 undefined",
        "goals": [
          "Phân biệt heap với BST.",
          "Cài min-heap và hàng ưu tiên."
        ],
        "content": "<p class=\"ap-meta\">Biên soạn theo tài liệu Cấu trúc dữ liệu và giải thuật — ThS. Bùi Văn Thượng, UTH. Đối chiếu mục 3.7. <a href=\"tai-lieu-ctdlgt.html#cay\">Nguồn và mục lục đối chiếu</a>.</p>\n<h2 id=\"muc-tieu\">Mục tiêu</h2><ul><li>Phân biệt heap với BST.</li><li>Cài min-heap và hàng ưu tiên.</li></ul>\n<h2 id=\"van-de-thuc-te\">Vấn đề thực tế</h2><p>Tác vụ có độ ưu tiên nhỏ hơn phải chạy trước; không cần sắp cả tập sau mỗi lần thêm một tác vụ.</p>\n<h2 id=\"ly-thuyet\">Lý thuyết nền</h2><p>Phần mở rộng của heap trong tài liệu: Priority Queue (hàng ưu tiên) hỗ trợ push, peek phần tử ưu tiên nhất, pop lấy phần tử đó. Min-heap lưu cha ≤ con; trái/phải không có quan hệ thứ tự BST. peek O(1), push/pop O(log n) xấu nhất theo thao tác heap; mảng động có chi phí cấp phát riêng.</p><p>push nối ở cuối rồi sift-up (vun lên) theo cha floor((i−1)/2). pop lấy gốc, chuyển phần tử cuối về đầu rồi sift-down. Trả undefined khi rỗng trong bản này, khác với Stack/Queue bài trước dùng ngoại lệ; phải ghi rõ hợp đồng API. Nếu cần FIFO khi bằng ưu tiên, comparator phải xét thêm số thứ tự đưa vào.</p>\n<h2 id=\"vi-du\">Ví dụ có thể chạy</h2><p>JavaScript, Node.js 22 trở lên; không dùng thư viện ngoài. Đây là bản chuyển thể cho website, không phải bản chép mã C/C++ bị dính dòng trong tài liệu Markdown. Lưu thành <code>chapter23.cjs</code> rồi chạy <code>node chapter23.cjs</code>. Các số trong ví dụ nằm trong miền nguyên an toàn, trừ phép chia biểu thức được giải thích riêng.</p>\n<div class=\"code-wrap\"><span class=\"code-label\">chapter23.cjs · JavaScript</span><pre><code>class MinHeap {\n   constructor() { this.a = []; }\n   peek() { return this.a[0]; }\n   push(x) {\n     if (!Number.isFinite(x)) throw new TypeError('Ưu tiên phải là số hữu hạn');\n     this.a.push(x); let i = this.a.length - 1;\n     while (i &gt; 0) {\n       const p = Math.floor((i - 1) / 2);\n       if (this.a[p] &lt;= this.a[i]) break;\n       [this.a[p], this.a[i]] = [this.a[i], this.a[p]]; i = p;\n     }\n   }\n   pop() {\n     if (!this.a.length) return undefined;\n     const result = this.a[0], last = this.a.pop();\n     if (!this.a.length) return result;\n     this.a[0] = last; let i = 0;\n     while (2 * i + 1 &lt; this.a.length) {\n       let c = 2 * i + 1;\n       if (c + 1 &lt; this.a.length &amp;&amp; this.a[c + 1] &lt; this.a[c]) c++;\n       if (this.a[i] &lt;= this.a[c]) break;\n       [this.a[i], this.a[c]] = [this.a[c], this.a[i]]; i = c;\n     }\n     return result;\n   }\n }\n const pq = new MinHeap();\n for (const x of [5,1,3,1]) pq.push(x);\n console.log(pq.pop(), pq.pop(), pq.pop(), pq.pop(), pq.pop());\n // 1 1 3 5 undefined</code></pre></div>\n<h3>Giải thích các đoạn quan trọng</h3><ol><li>push giữ chỉ số mới và đổi lên cha đến khi đúng heap hoặc tới gốc.</li><li>pop lưu gốc trước khi lấy cuối; ca một phần tử trả ngay, không gán lại ô 0.</li><li>Trong sift-down chọn con nhỏ hơn, ngược max-heap ở bài Heap Sort.</li><li>Ví dụ có hai ưu tiên bằng 1: đảm bảo giá trị đúng, chưa đảm bảo thứ tự tác vụ nếu dùng bản ghi.</li></ol>\n<h2 id=\"loi-thuong-gap\">Lỗi thường gặp</h2><ul><li>Tìm khóa tùy ý trong heap rồi cho rằng O(log n) như BST.</li><li>Trộn quy tắc min-heap và max-heap.</li><li>Giả định hàng ưu tiên mặc định giữ FIFO khi bằng khóa.</li></ul>\n<h2 id=\"bai-tap\">Bài tập ba mức</h2><h3>Mức 1 — Cơ bản</h3><p>Theo dõi mảng khi push 5,1,3 và pop hai lần.</p><h3>Mức 2 — Vận dụng</h3><p>Mở rộng heap nhận bản ghi {priority, sequence, task}, ưu tiên nhỏ trước và FIFO khi bằng.</p><h3>Mức 3 — Nâng cao</h3><p>Giữ k giá trị lớn nhất bằng min-heap kích thước k; nêu chi phí O(n log k) khi 1<k≤n. Bài tập này là phần mở rộng, không thuộc bài tập nguồn.</p>\n<div class=\"summary-box\"><h2 id=\"tom-tat\">Tóm tắt</h2><p>Heap phục vụ cực trị hiệu quả; không thay thế BST cho duyệt có thứ tự hoặc tìm khóa bất kỳ.</p></div>\n<h2 id=\"quiz\">Quiz</h2><p>Câu hỏi chỉ dựa trên lý thuyết và ví dụ của bài này. <a href=\"quiz.html?chapter=chapter23\">Mở quiz Heap &amp; Priority Queue</a>.</p>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter23"
    },
    {
      "id": "do-thi",
      "title": "Đồ thị",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Chưa có chương riêng về đồ thị trong khóa học hiện tại.",
      "time": 0,
      "related": [],
      "comingSoon": true
    },
    {
      "id": "bfs-dfs",
      "title": "BFS / DFS",
      "type": "chi-tiet",
      "side": "left",
      "parent": "do-thi",
      "chapter": null,
      "summary": "Chưa có chương riêng. Chương 18, 19 và 20 hiện giới thiệu Stack, Queue và các cách duyệt cây có liên quan.",
      "time": 0,
      "related": [
        "chapter18",
        "chapter19",
        "chapter20"
      ],
      "comingSoon": true
    },
    {
      "id": "dijkstra",
      "title": "Dijkstra",
      "type": "chi-tiet",
      "side": "right",
      "parent": "do-thi",
      "chapter": null,
      "summary": "Chưa có chương riêng. Tổng kết chương 23 nhắc tới Priority Queue là thành phần của thuật toán Dijkstra.",
      "time": 0,
      "related": [
        "chapter23"
      ],
      "comingSoon": true
    },
    {
      "id": "union-find",
      "title": "Union-Find",
      "type": "tuy-chon",
      "side": "left",
      "parent": "do-thi",
      "chapter": null,
      "summary": "Chưa có nội dung Union-Find trong 23 chương hiện tại.",
      "time": 0,
      "related": [],
      "comingSoon": true
    },
    {
      "id": "de-quy-dp",
      "title": "Đệ quy & Quy hoạch động",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Chưa có chương riêng về quy hoạch động. Đệ quy đã xuất hiện trong Merge Sort và duyệt cây.",
      "time": 0,
      "related": [
        "chapter07",
        "chapter20"
      ],
      "comingSoon": true
    },
    {
      "id": "chien-luoc",
      "title": "Tham lam, Chia để trị, Backtracking",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Chưa có chương riêng cho nhóm chiến lược này. Merge Sort hiện giới thiệu ý tưởng chia để trị.",
      "time": 0,
      "related": [
        "chapter07"
      ],
      "comingSoon": true
    },
    {
      "id": "luyen-tap",
      "title": "Luyện tập",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Ôn tập và thực hành với các tài nguyên đang có của Synaptrail.",
      "time": 0,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "bai-tap",
      "title": "Bài tập thực hành",
      "type": "tuy-chon",
      "side": "left",
      "parent": "luyen-tap",
      "chapter": "Quiz_and_other/exercises.html",
      "summary": "Mở trang bài tập thực hành của Synaptrail.",
      "time": 30,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "quiz-tong-hop",
      "title": "Quiz tổng hợp",
      "type": "tuy-chon",
      "side": "right",
      "parent": "luyen-tap",
      "chapter": "Quiz_and_other/quiz-tong-hop.html",
      "summary": "Mở bộ câu hỏi tổng hợp của Synaptrail.",
      "time": 20,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "cheatsheet",
      "title": "Cheatsheet tra cứu",
      "type": "tuy-chon",
      "side": "left",
      "parent": "luyen-tap",
      "chapter": "Quiz_and_other/cheatsheet.html",
      "summary": "Mở tài liệu tra cứu nhanh của Synaptrail.",
      "time": 10,
      "related": [],
      "comingSoon": false
    }
  ]
};
