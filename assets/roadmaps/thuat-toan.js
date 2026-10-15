/* Canonical algorithm roadmap and lesson content. Generate pages: node scripts/sync-algorithm-roadmap.cjs */
globalThis.SynaptrailRoadmapData = {
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
      "summary": "Định nghĩa, tính chất, và tại sao việc học thuật toán quan trọng hơn việc học riêng một ngôn ngữ lập trình.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Thuật toán là chuỗi bước hữu hạn, rõ ràng để giải quyết vấn đề. Học thuật toán là học tư duy giải quyết vấn đề, độc lập với bất kỳ ngôn ngữ lập trình cụ thể nào.",
        "code": null,
        "goals": [
          "Định nghĩa",
          "5 tính chất của một thuật toán đúng",
          "Tại sao học thuật toán quan trọng?"
        ],
        "content": "<h3>Định nghĩa</h3>\r\n      <p>Thuật toán (algorithm) là một chuỗi các bước hữu hạn, rõ ràng, có thứ tự để giải quyết một vấn đề hoặc thực hiện một tác vụ cụ thể. Một công thức nấu ăn, hướng dẫn lắp ráp đồ nội thất — về bản chất đều là \"thuật toán\" theo nghĩa đời thường.</p>\r\n\r\n      <h3>5 tính chất của một thuật toán đúng</h3>\r\n      <table>\r\n        <tr><th>Tính chất</th><th>Ý nghĩa</th></tr>\r\n        <tr><td><strong>Đầu vào (Input)</strong></td><td>Có 0 hoặc nhiều giá trị đầu vào xác định</td></tr>\r\n        <tr><td><strong>Đầu ra (Output)</strong></td><td>Cho ra ít nhất một kết quả</td></tr>\r\n        <tr><td><strong>Rõ ràng (Definiteness)</strong></td><td>Mỗi bước phải rõ ràng, không mập mờ</td></tr>\r\n        <tr><td><strong>Hữu hạn (Finiteness)</strong></td><td>Phải kết thúc sau một số bước hữu hạn</td></tr>\r\n        <tr><td><strong>Khả thi (Effectiveness)</strong></td><td>Mỗi bước phải thực hiện được trong thời gian hữu hạn</td></tr>\r\n      </table>\r\n\r\n      <h3>Tại sao học thuật toán quan trọng?</h3>\r\n      <ul>\r\n        <li><strong>Độc lập ngôn ngữ</strong> — hiểu Quick Sort thì viết được bằng Python, Java, C++ hay bất kỳ ngôn ngữ nào.</li>\r\n        <li><strong>Giải quyết vấn đề hiệu quả</strong> — cùng một bài toán, thuật toán tốt có thể nhanh hơn hàng triệu lần so với cách giải \"ngây thơ\".</li>\r\n        <li><strong>Nền tảng phỏng vấn kỹ thuật</strong> — hầu hết phỏng vấn lập trình viên đều kiểm tra tư duy thuật toán.</li>\r\n        <li><strong>Tư duy giải quyết vấn đề</strong> — rèn khả năng chia nhỏ vấn đề phức tạp thành các bước đơn giản hơn.</li>\r\n      </ul>\r\n\r\n      <div class=\"box note\">\r\n        <div class=\"box-title\">Ghi chú về mã giả (Pseudocode)</div>\r\n        Trong giáo trình này, phần lớn ví dụ dùng Python vì cú pháp gần với ngôn ngữ tự nhiên nhất — nhưng ý tưởng thuật toán hoàn toàn có thể \"dịch\" sang bất kỳ ngôn ngữ nào khác trong bộ giáo trình (C++, Java, JavaScript).\r\n      </div>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 1</h4>\r\n        <p>Thuật toán là chuỗi bước hữu hạn, rõ ràng để giải quyết vấn đề. Học thuật toán là học tư duy giải quyết vấn đề, độc lập với bất kỳ ngôn ngữ lập trình cụ thể nào.</p>\r\n      </div>"
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
      "summary": "Ngôn ngữ chung để mô tả và so sánh hiệu năng thuật toán, độc lập với phần cứng chạy nó.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Big O đo tốc độ tăng trưởng thời gian chạy theo kích thước đầu vào, độc lập phần cứng. Luôn mô tả trường hợp xấu nhất, giúp so sánh thuật toán công bằng.",
        "code": "def tim_kiem_tuyen_tinh(ds, target):   # O(n) - trong TRƯỜNG HỢP XẤU NHẤT phải duyệt hết\r\n    for i, x in enumerate(ds):\r\n        if x == target:\r\n            return i\r\n    return -1\r\n\r\ndef lay_phan_tu_dau(ds):                # O(1) - luôn chỉ 1 thao tác, bất kể ds lớn cỡ nào\r\n    return ds[0]\r\n\r\ndef in_tat_ca_cap(ds):                  # O(n²) - vòng lặp lồng nhau\r\n    for i in ds:\r\n        for j in ds:\r\n            print(i, j)",
        "goals": [
          "Tại sao không đo bằng giây?",
          "Các lớp độ phức tạp phổ biến (từ nhanh đến chậm)"
        ],
        "content": "<h3>Tại sao không đo bằng giây?</h3>\r\n      <p>Thời gian chạy thực tế (giây) phụ thuộc vào phần cứng, ngôn ngữ, trình biên dịch... Big O đo <strong>tốc độ tăng trưởng</strong> của thời gian chạy theo kích thước đầu vào <code>n</code>, bỏ qua hằng số và các yếu tố phần cứng — cho phép so sánh thuật toán một cách công bằng.</p>\r\n\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">vi_du_do_phuc_tap.py</span>\r\n        \r\n        <pre><code>def tim_kiem_tuyen_tinh(ds, target):   # O(n) - trong TRƯỜNG HỢP XẤU NHẤT phải duyệt hết\r\n    for i, x in enumerate(ds):\r\n        if x == target:\r\n            return i\r\n    return -1\r\n\r\ndef lay_phan_tu_dau(ds):                # O(1) - luôn chỉ 1 thao tác, bất kể ds lớn cỡ nào\r\n    return ds[0]\r\n\r\ndef in_tat_ca_cap(ds):                  # O(n²) - vòng lặp lồng nhau\r\n    for i in ds:\r\n        for j in ds:\r\n            print(i, j)</code></pre>\r\n      </div>\r\n\r\n      <h3>Các lớp độ phức tạp phổ biến (từ nhanh đến chậm)</h3>\r\n      <table>\r\n        <tr><th>Ký hiệu</th><th>Tên gọi</th><th>Ví dụ</th><th>n=1.000.000 mất khoảng</th></tr>\r\n        <tr><td><code>O(1)</code></td><td>Hằng số</td><td>Truy cập mảng theo index</td><td>Tức thì</td></tr>\r\n        <tr><td><code>O(log n)</code></td><td>Logarit</td><td>Binary Search</td><td>~20 bước</td></tr>\r\n        <tr><td><code>O(n)</code></td><td>Tuyến tính</td><td>Duyệt mảng 1 lần</td><td>1 triệu bước</td></tr>\r\n        <tr><td><code>O(n log n)</code></td><td>Tuyến tính-log</td><td>Merge Sort, Quick Sort</td><td>~20 triệu bước</td></tr>\r\n        <tr><td><code>O(n²)</code></td><td>Bậc hai</td><td>Bubble Sort, vòng lặp lồng nhau</td><td>1.000 tỷ bước</td></tr>\r\n        <tr><td><code>O(2ⁿ)</code></td><td>Mũ</td><td>Đệ quy Fibonacci không tối ưu</td><td>Không thể tính xong</td></tr>\r\n      </table>\r\n\r\n      <div class=\"box important\">\r\n        <div class=\"box-title\">Quan trọng</div>\r\n        Big O luôn mô tả <strong>trường hợp xấu nhất (worst case)</strong> trừ khi nói rõ khác — đây là cách an toàn nhất để đảm bảo thuật toán hoạt động tốt trong mọi tình huống, kể cả tình huống bất lợi nhất.\r\n      </div>\r\n\r\n      \r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 2</h4>\r\n        <p>Big O đo tốc độ tăng trưởng thời gian chạy theo kích thước đầu vào, độc lập phần cứng. Luôn mô tả trường hợp xấu nhất, giúp so sánh thuật toán công bằng.</p>\r\n      </div>"
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
      "summary": "Cách tự tính Big O cho một đoạn code bất kỳ — kỹ năng thực hành quan trọng nhất của chương này.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Vòng lặp lồng nhau nhân độ phức tạp, vòng lặp liên tiếp cộng rồi lấy số hạng lớn nhất. Big O luôn bỏ qua hằng số nhân và số hạng bậc thấp hơn.",
        "code": "def vi_du_cong(ds):        # O(n) + O(n) = O(2n) -> RÚT GỌN thành O(n)\r\n    for x in ds: print(x)      # O(n)\r\n    for x in ds: print(x)      # O(n) - hai vòng lặp KHÔNG lồng nhau -> CỘNG\r\n\r\ndef vi_du_nhan(ds):        # O(n) * O(n) = O(n²)\r\n    for i in ds:                # O(n)\r\n        for j in ds:               # O(n) - LỒNG NHAU -> NHÂN\r\n            print(i, j)\r\n\r\ndef vi_du_giam_bien(ds):   # O(n + m), giữ riêng biến cho từng input khác nhau\r\n    for x in ds: print(x)       # n phần tử\r\n    # for y in ds2: print(y)    # m phần tử (danh sách khác) -> KHÔNG được gộp thành O(n) nếu n≠m",
        "goals": [
          "Quy tắc cộng và nhân",
          "Quy tắc bỏ qua hằng số và số hạng bậc thấp"
        ],
        "content": "<h3>Quy tắc cộng và nhân</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">quy_tac_phan_tich.py</span>\r\n        \r\n        <pre><code>def vi_du_cong(ds):        # O(n) + O(n) = O(2n) -> RÚT GỌN thành O(n)\r\n    for x in ds: print(x)      # O(n)\r\n    for x in ds: print(x)      # O(n) - hai vòng lặp KHÔNG lồng nhau -> CỘNG\r\n\r\ndef vi_du_nhan(ds):        # O(n) * O(n) = O(n²)\r\n    for i in ds:                # O(n)\r\n        for j in ds:               # O(n) - LỒNG NHAU -> NHÂN\r\n            print(i, j)\r\n\r\ndef vi_du_giam_bien(ds):   # O(n + m), giữ riêng biến cho từng input khác nhau\r\n    for x in ds: print(x)       # n phần tử\r\n    # for y in ds2: print(y)    # m phần tử (danh sách khác) -> KHÔNG được gộp thành O(n) nếu n≠m</code></pre>\r\n      </div>\r\n\r\n      <h3>Quy tắc bỏ qua hằng số và số hạng bậc thấp</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">quy_tac_rut_gon.py</span>\r\n        \r\n        <pre><code># Độ phức tạp thực tế: 3n² + 5n + 100\r\n# Big O chỉ giữ lại số hạng TĂNG NHANH NHẤT khi n rất lớn, bỏ hằng số nhân:\r\n# -> O(n²)  (bỏ 3, bỏ 5n, bỏ 100 vì khi n cực lớn, n² áp đảo hoàn toàn các số hạng còn lại)</code></pre>\r\n      </div>\r\n\r\n      <table>\r\n        <tr><th>Cấu trúc code</th><th>Độ phức tạp</th></tr>\r\n        <tr><td>Vòng lặp đơn duyệt hết n phần tử</td><td>O(n)</td></tr>\r\n        <tr><td>Hai vòng lặp liên tiếp (không lồng)</td><td>O(n) + O(n) = O(n)</td></tr>\r\n        <tr><td>Hai vòng lặp lồng nhau</td><td>O(n) × O(n) = O(n²)</td></tr>\r\n        <tr><td>Vòng lặp chia đôi mỗi bước (VD: i *= 2)</td><td>O(log n)</td></tr>\r\n        <tr><td>Đệ quy chia đôi + xử lý tuyến tính mỗi bước (Merge Sort)</td><td>O(n log n)</td></tr>\r\n      </table>\r\n\r\n      <div class=\"box tip\">\r\n        <div class=\"box-title\">Mẹo thực hành</div>\r\n        Khi phân tích code, hãy tự hỏi: \"Vòng lặp này chạy bao nhiêu lần theo n?\" và \"Các vòng lặp có LỒNG NHAU hay chỉ ĐỨNG CẠNH NHAU?\" — lồng nhau thì nhân, đứng cạnh nhau thì cộng (rồi lấy số hạng lớn nhất).\r\n      </div>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 3</h4>\r\n        <p>Vòng lặp lồng nhau nhân độ phức tạp, vòng lặp liên tiếp cộng rồi lấy số hạng lớn nhất. Big O luôn bỏ qua hằng số nhân và số hạng bậc thấp hơn.</p>\r\n      </div>"
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
      "summary": "Đo lượng bộ nhớ bổ sung mà thuật toán cần — cũng quan trọng không kém độ phức tạp thời gian.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Space complexity đo bộ nhớ bổ sung cần thiết, bao gồm cả call stack của đệ quy. Time và space thường đánh đổi lẫn nhau — tối ưu cái này có thể phải hy sinh cái kia.",
        "code": "def tong_O1_space(ds):          # O(1) space - chỉ dùng thêm 1 biến \"tong\", KHÔNG phụ thuộc n\r\n    tong = 0\r\n    for x in ds:\r\n        tong += x\r\n    return tong\r\n\r\ndef nhan_doi_On_space(ds):       # O(n) space - tạo MẢNG MỚI có kích thước tỉ lệ với n\r\n    ket_qua = []\r\n    for x in ds:\r\n        ket_qua.append(x * 2)\r\n    return ket_qua\r\n\r\ndef giai_thua_de_quy(n):           # O(n) space - MỖI lần gọi đệ quy tốn thêm 1 khung trên call stack\r\n    if n <= 1:\r\n        return 1\r\n    return n * giai_thua_de_quy(n - 1)   # n lời gọi lồng nhau -> n khung stack",
        "goals": [],
        "content": "<div class=\"code-wrap\">\r\n        <span class=\"code-label\">space_complexity.py</span>\r\n        \r\n        <pre><code>def tong_O1_space(ds):          # O(1) space - chỉ dùng thêm 1 biến \"tong\", KHÔNG phụ thuộc n\r\n    tong = 0\r\n    for x in ds:\r\n        tong += x\r\n    return tong\r\n\r\ndef nhan_doi_On_space(ds):       # O(n) space - tạo MẢNG MỚI có kích thước tỉ lệ với n\r\n    ket_qua = []\r\n    for x in ds:\r\n        ket_qua.append(x * 2)\r\n    return ket_qua\r\n\r\ndef giai_thua_de_quy(n):           # O(n) space - MỖI lần gọi đệ quy tốn thêm 1 khung trên call stack\r\n    if n <= 1:\r\n        return 1\r\n    return n * giai_thua_de_quy(n - 1)   # n lời gọi lồng nhau -> n khung stack</code></pre>\r\n      </div>\r\n\r\n      <div class=\"box important\">\r\n        <div class=\"box-title\">Quan trọng — Đánh đổi Time vs Space</div>\r\n        Rất nhiều kỹ thuật tối ưu (như memoization ở chương Quy hoạch động) đánh đổi <strong>tốn thêm bộ nhớ để đổi lấy tốc độ nhanh hơn</strong> — đây là sự đánh đổi (trade-off) kinh điển mà người viết thuật toán phải cân nhắc tùy theo bài toán và giới hạn tài nguyên thực tế.\r\n      </div>\r\n\r\n      <div class=\"box note\">\r\n        <div class=\"box-title\">Ghi chú</div>\r\n        Độ phức tạp không gian thường KHÔNG tính bộ nhớ của chính input đầu vào — chỉ tính bộ nhớ <strong>bổ sung (auxiliary space)</strong> mà thuật toán cần thêm để chạy.\r\n      </div>\r\n\r\n      \r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 4</h4>\r\n        <p>Space complexity đo bộ nhớ bổ sung cần thiết, bao gồm cả call stack của đệ quy. Time và space thường đánh đổi lẫn nhau — tối ưu cái này có thể phải hy sinh cái kia.</p>\r\n      </div>"
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
      "title": "Bubble Sort & Selection Sort",
      "type": "chi-tiet",
      "side": "left",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter05.html",
      "summary": "Hai thuật toán sắp xếp đơn giản nhất — dễ hiểu nhưng kém hiệu quả, chủ yếu mang tính giáo dục.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Bubble Sort và Selection Sort đều O(n²), đơn giản để học nhưng không dùng trong thực tế với dữ liệu lớn. Bubble Sort ổn định và có thể tối ưu dừng sớm; Selection Sort ít swap hơn nhưng không ổn định.",
        "code": "def bubble_sort(ds):\r\n    n = len(ds)\r\n    for i in range(n):\r\n        da_doi_cho = False\r\n        for j in range(0, n - i - 1):\r\n            if ds[j] > ds[j + 1]:\r\n                ds[j], ds[j + 1] = ds[j + 1], ds[j]\r\n                da_doi_cho = True\r\n        if not da_doi_cho:          # tối ưu: nếu không có đổi chỗ nào -> đã sắp xếp xong, dừng sớm\r\n            break\r\n    return ds",
        "goals": [
          "Bubble Sort — \"nổi bọt\"",
          "Selection Sort — \"chọn lựa\""
        ],
        "content": "<h3>Bubble Sort — \"nổi bọt\"</h3>\r\n      <p>Liên tục so sánh và đổi chỗ hai phần tử liền kề nếu sai thứ tự — phần tử lớn \"nổi\" dần lên cuối mảng sau mỗi lượt.</p>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">bubble_sort.py</span>\r\n        \r\n        <pre><code>def bubble_sort(ds):\r\n    n = len(ds)\r\n    for i in range(n):\r\n        da_doi_cho = False\r\n        for j in range(0, n - i - 1):\r\n            if ds[j] > ds[j + 1]:\r\n                ds[j], ds[j + 1] = ds[j + 1], ds[j]\r\n                da_doi_cho = True\r\n        if not da_doi_cho:          # tối ưu: nếu không có đổi chỗ nào -> đã sắp xếp xong, dừng sớm\r\n            break\r\n    return ds</code></pre>\r\n      </div>\r\n\r\n      <h3>Selection Sort — \"chọn lựa\"</h3>\r\n      <p>Mỗi lượt tìm phần tử nhỏ nhất trong phần chưa sắp xếp, đưa nó về đúng vị trí.</p>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">selection_sort.py</span>\r\n        \r\n        <pre><code>def selection_sort(ds):\r\n    n = len(ds)\r\n    for i in range(n):\r\n        idx_min = i\r\n        for j in range(i + 1, n):\r\n            if ds[j] < ds[idx_min]:\r\n                idx_min = j\r\n        ds[i], ds[idx_min] = ds[idx_min], ds[i]   # chỉ đổi chỗ MỘT LẦN mỗi lượt\r\n    return ds</code></pre>\r\n      </div>\r\n\r\n      <table>\r\n        <tr><th>Tiêu chí</th><th>Bubble Sort</th><th>Selection Sort</th></tr>\r\n        <tr><td>Độ phức tạp thời gian</td><td>O(n²), tốt nhất O(n) nếu đã sắp xếp</td><td>O(n²) luôn luôn</td></tr>\r\n        <tr><td>Số lần đổi chỗ (swap)</td><td>Nhiều</td><td>Ít hơn (tối đa n lần)</td></tr>\r\n        <tr><td>Ổn định (stable)</td><td>Có</td><td>Không</td></tr>\r\n      </table>\r\n\r\n      <div class=\"box note\">\r\n        <div class=\"box-title\">Ghi chú — Thuật toán ổn định (Stable)</div>\r\n        Thuật toán sắp xếp \"ổn định\" giữ nguyên thứ tự tương đối của các phần tử bằng nhau. Điều này quan trọng khi sắp xếp dữ liệu theo nhiều tiêu chí (VD: sắp theo điểm, nếu bằng điểm giữ nguyên thứ tự alphabet đã có).\r\n      </div>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 5</h4>\r\n        <p>Bubble Sort và Selection Sort đều O(n²), đơn giản để học nhưng không dùng trong thực tế với dữ liệu lớn. Bubble Sort ổn định và có thể tối ưu dừng sớm; Selection Sort ít swap hơn nhưng không ổn định.</p>\r\n      </div>"
      },
      "quiz": "thuat-toan/quiz.html?chapter=chapter05"
    },
    {
      "id": "chapter06",
      "title": "Insertion Sort",
      "type": "chi-tiet",
      "side": "right",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter06.html",
      "summary": "Xây dựng mảng đã sắp xếp từng phần tử một — giống cách con người sắp xếp bài trên tay khi chơi bài.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Insertion Sort xây dựng phần đã sắp xếp dần dần, hiệu quả đặc biệt với dữ liệu gần như đã sắp xếp (O(n)) — được dùng thực tế trong các thuật toán lai hiện đại cho đoạn dữ liệu nhỏ.",
        "code": "def insertion_sort(ds):\r\n    for i in range(1, len(ds)):\r\n        gia_tri = ds[i]\r\n        j = i - 1\r\n        while j >= 0 and ds[j] > gia_tri:     # dịch các phần tử lớn hơn sang phải\r\n            ds[j + 1] = ds[j]\r\n            j -= 1\r\n        ds[j + 1] = gia_tri                     # chèn gia_tri vào đúng vị trí\r\n\r\nd = [5, 2, 8, 1, 9]\r\nprint(insertion_sort(d))   # [1, 2, 5, 8, 9]",
        "goals": [],
        "content": "<div class=\"code-wrap\">\r\n        <span class=\"code-label\">insertion_sort.py</span>\r\n        \r\n        <pre><code>def insertion_sort(ds):\r\n    for i in range(1, len(ds)):\r\n        gia_tri = ds[i]\r\n        j = i - 1\r\n        while j >= 0 and ds[j] > gia_tri:     # dịch các phần tử lớn hơn sang phải\r\n            ds[j + 1] = ds[j]\r\n            j -= 1\r\n        ds[j + 1] = gia_tri                     # chèn gia_tri vào đúng vị trí\r\n\r\nd = [5, 2, 8, 1, 9]\r\nprint(insertion_sort(d))   # [1, 2, 5, 8, 9]</code></pre>\r\n      </div>\r\n\r\n      <div class=\"box tip\">\r\n        <div class=\"box-title\">Mẹo — Ứng dụng thực tế</div>\r\n        Insertion Sort có độ phức tạp trung bình O(n²) nhưng đạt <strong>O(n)</strong> khi dữ liệu gần như đã sắp xếp sẵn — đây là lý do các thuật toán lai (như Timsort mà Python's <code>sorted()</code> sử dụng) dùng Insertion Sort cho các đoạn dữ liệu nhỏ.\r\n      </div>\r\n\r\n      <table>\r\n        <tr><th>Trường hợp</th><th>Độ phức tạp</th></tr>\r\n        <tr><td>Tốt nhất (đã sắp xếp sẵn)</td><td>O(n)</td></tr>\r\n        <tr><td>Trung bình / Xấu nhất</td><td>O(n²)</td></tr>\r\n        <tr><td>Không gian</td><td>O(1) - sắp xếp tại chỗ (in-place)</td></tr>\r\n      </table>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 6</h4>\r\n        <p>Insertion Sort xây dựng phần đã sắp xếp dần dần, hiệu quả đặc biệt với dữ liệu gần như đã sắp xếp (O(n)) — được dùng thực tế trong các thuật toán lai hiện đại cho đoạn dữ liệu nhỏ.</p>\r\n      </div>"
      },
      "quiz": null
    },
    {
      "id": "chapter07",
      "title": "Merge Sort",
      "type": "chi-tiet",
      "side": "left",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter07.html",
      "summary": "Thuật toán \"chia để trị\" kinh điển — hiệu năng ổn định O(n log n) trong MỌI trường hợp.",
      "time": 10,
      "related": [
        "chapter08",
        "chapter04"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Merge Sort chia mảng thành nửa, sắp xếp đệ quy rồi trộn lại — đạt O(n log n) ổn định trong mọi trường hợp, đánh đổi bằng O(n) bộ nhớ phụ.",
        "code": "def merge_sort(ds):\r\n    if len(ds) <= 1:\r\n        return ds\r\n    giua = len(ds) // 2\r\n    trai = merge_sort(ds[:giua])        # chia (divide)\r\n    phai = merge_sort(ds[giua:])\r\n    return tron(trai, phai)                # trị (conquer) - trộn 2 mảng đã sắp xếp\r\n\r\ndef tron(trai, phai):\r\n    ket_qua = []\r\n    i = j = 0\r\n    while i < len(trai) and j < len(phai):\r\n        if trai[i] <= phai[j]:\r\n            ket_qua.append(trai[i]); i += 1\r\n        else:\r\n            ket_qua.append(phai[j]); j += 1\r\n    ket_qua.extend(trai[i:])                # thêm phần còn lại (nếu có)\r\n    ket_qua.extend(phai[j:])\r\n    return ket_qua",
        "goals": [
          "Trực quan hóa quá trình chia và trộn"
        ],
        "content": "<div class=\"code-wrap\">\r\n        <span class=\"code-label\">merge_sort.py</span>\r\n        \r\n        <pre><code>def merge_sort(ds):\r\n    if len(ds) <= 1:\r\n        return ds\r\n    giua = len(ds) // 2\r\n    trai = merge_sort(ds[:giua])        # chia (divide)\r\n    phai = merge_sort(ds[giua:])\r\n    return tron(trai, phai)                # trị (conquer) - trộn 2 mảng đã sắp xếp\r\n\r\ndef tron(trai, phai):\r\n    ket_qua = []\r\n    i = j = 0\r\n    while i < len(trai) and j < len(phai):\r\n        if trai[i] <= phai[j]:\r\n            ket_qua.append(trai[i]); i += 1\r\n        else:\r\n            ket_qua.append(phai[j]); j += 1\r\n    ket_qua.extend(trai[i:])                # thêm phần còn lại (nếu có)\r\n    ket_qua.extend(phai[j:])\r\n    return ket_qua</code></pre>\r\n      </div>\r\n\r\n      <h3>Trực quan hóa quá trình chia và trộn</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">minh_hoa</span>\r\n        <pre><code>[5, 2, 8, 1]\r\n   /        \\\r\n[5, 2]      [8, 1]\r\n /  \\        /  \\\r\n[5] [2]    [8]  [1]\r\n \\  /        \\  /\r\n[2, 5]      [1, 8]      <- TRỘN từng cặp đã sắp xếp\r\n      \\    /\r\n    [1, 2, 5, 8]         <- TRỘN kết quả cuối cùng</code></pre>\r\n      </div>\r\n\r\n      <div class=\"box important\">\r\n        <div class=\"box-title\">Quan trọng</div>\r\n        Merge Sort đảm bảo <strong>O(n log n) trong MỌI trường hợp</strong> (tốt nhất, trung bình, xấu nhất đều như nhau) — khác với Quick Sort có thể suy biến thành O(n²) trong trường hợp xấu nhất. Đánh đổi: Merge Sort cần O(n) bộ nhớ phụ, không sắp xếp tại chỗ.\r\n      </div>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 7</h4>\r\n        <p>Merge Sort chia mảng thành nửa, sắp xếp đệ quy rồi trộn lại — đạt O(n log n) ổn định trong mọi trường hợp, đánh đổi bằng O(n) bộ nhớ phụ.</p>\r\n      </div>"
      },
      "quiz": null
    },
    {
      "id": "chapter08",
      "title": "Quick Sort",
      "type": "chi-tiet",
      "side": "right",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter08.html",
      "summary": "Thuật toán sắp xếp nhanh nhất trong thực tế trung bình — được dùng làm mặc định trong nhiều ngôn ngữ.",
      "time": 10,
      "related": [
        "chapter07"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Quick Sort chọn pivot, phân hoạch rồi đệ quy — nhanh nhất trong thực tế trung bình (O(n log n)) nhưng có thể suy biến O(n²) nếu chọn pivot tệ liên tục.",
        "code": "def quick_sort(ds):\r\n    if len(ds) <= 1:\r\n        return ds\r\n    diem_chot = ds[len(ds) // 2]          # chọn pivot (điểm chốt) - ở đây chọn phần tử giữa\r\n    nho_hon = [x for x in ds if x < diem_chot]\r\n    bang = [x for x in ds if x == diem_chot]\r\n    lon_hon = [x for x in ds if x > diem_chot]\r\n    return quick_sort(nho_hon) + bang + quick_sort(lon_hon)   # đệ quy 2 nửa rồi ghép lại\r\n\r\nprint(quick_sort([5, 2, 8, 1, 9, 3]))   # [1, 2, 3, 5, 8, 9]",
        "goals": [
          "Cách hoạt động"
        ],
        "content": "<div class=\"code-wrap\">\r\n        <span class=\"code-label\">quick_sort.py</span>\r\n        \r\n        <pre><code>def quick_sort(ds):\r\n    if len(ds) <= 1:\r\n        return ds\r\n    diem_chot = ds[len(ds) // 2]          # chọn pivot (điểm chốt) - ở đây chọn phần tử giữa\r\n    nho_hon = [x for x in ds if x < diem_chot]\r\n    bang = [x for x in ds if x == diem_chot]\r\n    lon_hon = [x for x in ds if x > diem_chot]\r\n    return quick_sort(nho_hon) + bang + quick_sort(lon_hon)   # đệ quy 2 nửa rồi ghép lại\r\n\r\nprint(quick_sort([5, 2, 8, 1, 9, 3]))   # [1, 2, 3, 5, 8, 9]</code></pre>\r\n      </div>\r\n\r\n      <h3>Cách hoạt động</h3>\r\n      <ol>\r\n        <li>Chọn một phần tử làm <strong>pivot</strong> (điểm chốt).</li>\r\n        <li>Phân hoạch (partition): đưa phần tử nhỏ hơn pivot sang trái, lớn hơn sang phải.</li>\r\n        <li>Đệ quy sắp xếp hai nửa trái/phải độc lập.</li>\r\n      </ol>\r\n\r\n      <div class=\"box warning\">\r\n        <div class=\"box-title\">Cảnh báo — Trường hợp xấu nhất O(n²)</div>\r\n        Nếu luôn chọn pivot là phần tử nhỏ nhất/lớn nhất (VD: mảng đã sắp xếp sẵn, chọn pivot là phần tử đầu), Quick Sort suy biến thành O(n²). Cách khắc phục: chọn pivot ngẫu nhiên, hoặc dùng kỹ thuật \"median-of-three\".\r\n      </div>\r\n\r\n      <table>\r\n        <tr><th>Trường hợp</th><th>Độ phức tạp</th></tr>\r\n        <tr><td>Trung bình</td><td>O(n log n)</td></tr>\r\n        <tr><td>Xấu nhất (pivot chọn tệ liên tục)</td><td>O(n²)</td></tr>\r\n        <tr><td>Không gian</td><td>O(log n) - đệ quy, sắp xếp gần tại chỗ</td></tr>\r\n      </table>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 8</h4>\r\n        <p>Quick Sort chọn pivot, phân hoạch rồi đệ quy — nhanh nhất trong thực tế trung bình (O(n log n)) nhưng có thể suy biến O(n²) nếu chọn pivot tệ liên tục.</p>\r\n      </div>"
      },
      "quiz": null
    },
    {
      "id": "chapter09",
      "title": "Heap Sort",
      "type": "chi-tiet",
      "side": "left",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter09.html",
      "summary": "Sắp xếp dựa trên cấu trúc dữ liệu Heap — đảm bảo O(n log n) mọi trường hợp, sắp xếp tại chỗ (in-place).",
      "time": 10,
      "related": [
        "chapter23"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Heap Sort dùng cấu trúc heap để đạt O(n log n) mọi trường hợp với O(1) bộ nhớ phụ — đánh đổi bằng việc không ổn định (stable) như Merge Sort.",
        "code": "def heapify(ds, n, i):\r\n    lon_nhat = i\r\n    trai, phai = 2 * i + 1, 2 * i + 2\r\n\r\n    if trai < n and ds[trai] > ds[lon_nhat]:\r\n        lon_nhat = trai\r\n    if phai < n and ds[phai] > ds[lon_nhat]:\r\n        lon_nhat = phai\r\n\r\n    if lon_nhat != i:\r\n        ds[i], ds[lon_nhat] = ds[lon_nhat], ds[i]\r\n        heapify(ds, n, lon_nhat)          # tiếp tục \"vun đống\" xuống dưới\r\n\r\ndef heap_sort(ds):\r\n    n = len(ds)\r\n    for i in range(n // 2 - 1, -1, -1):        # xây max-heap từ dưới lên\r\n        heapify(ds, n, i)\r\n\r\n    for i in range(n - 1, 0, -1):\r\n        ds[0], ds[i] = ds[i], ds[0]               # đưa phần tử lớn nhất (gốc heap) ra cuối\r\n        heapify(ds, i, 0)                            # \"vun đống\" lại phần còn lại\r\n    return ds",
        "goals": [],
        "content": "<div class=\"code-wrap\">\r\n        <span class=\"code-label\">heap_sort.py</span>\r\n        \r\n        <pre><code>def heapify(ds, n, i):\r\n    lon_nhat = i\r\n    trai, phai = 2 * i + 1, 2 * i + 2\r\n\r\n    if trai < n and ds[trai] > ds[lon_nhat]:\r\n        lon_nhat = trai\r\n    if phai < n and ds[phai] > ds[lon_nhat]:\r\n        lon_nhat = phai\r\n\r\n    if lon_nhat != i:\r\n        ds[i], ds[lon_nhat] = ds[lon_nhat], ds[i]\r\n        heapify(ds, n, lon_nhat)          # tiếp tục \"vun đống\" xuống dưới\r\n\r\ndef heap_sort(ds):\r\n    n = len(ds)\r\n    for i in range(n // 2 - 1, -1, -1):        # xây max-heap từ dưới lên\r\n        heapify(ds, n, i)\r\n\r\n    for i in range(n - 1, 0, -1):\r\n        ds[0], ds[i] = ds[i], ds[0]               # đưa phần tử lớn nhất (gốc heap) ra cuối\r\n        heapify(ds, i, 0)                            # \"vun đống\" lại phần còn lại\r\n    return ds</code></pre>\r\n      </div>\r\n\r\n      <div class=\"box tip\">\r\n        <div class=\"box-title\">Mẹo</div>\r\n        Nhắc lại từ giáo trình Python (chương 62): module <code>heapq</code> cài đặt sẵn min-heap. Heap Sort tận dụng tính chất \"gốc heap luôn là phần tử lớn nhất/nhỏ nhất\" để liên tục trích xuất và sắp xếp.\r\n      </div>\r\n\r\n      <table>\r\n        <tr><th>Tiêu chí</th><th>Merge Sort</th><th>Quick Sort</th><th>Heap Sort</th></tr>\r\n        <tr><td>Xấu nhất</td><td>O(n log n)</td><td>O(n²)</td><td>O(n log n)</td></tr>\r\n        <tr><td>Không gian</td><td>O(n)</td><td>O(log n)</td><td>O(1)</td></tr>\r\n        <tr><td>Ổn định</td><td>Có</td><td>Không</td><td>Không</td></tr>\r\n      </table>\r\n\r\n      \r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 9</h4>\r\n        <p>Heap Sort dùng cấu trúc heap để đạt O(n log n) mọi trường hợp với O(1) bộ nhớ phụ — đánh đổi bằng việc không ổn định (stable) như Merge Sort.</p>\r\n      </div>"
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
      "summary": "Các thuật toán sắp xếp \"phi so sánh\" (non-comparison) — có thể nhanh hơn O(n log n) trong điều kiện đặc biệt.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Counting Sort và Radix Sort là thuật toán phi so sánh, có thể nhanh hơn O(n log n) trong điều kiện đặc biệt (giá trị giới hạn, số nguyên) — nhưng không tổng quát cho mọi loại dữ liệu.",
        "code": "def counting_sort(ds):\r\n    if not ds: return ds\r\n    max_val = max(ds)\r\n    dem = [0] * (max_val + 1)\r\n    for x in ds:\r\n        dem[x] += 1                  # đếm số lần xuất hiện của mỗi giá trị\r\n\r\n    ket_qua = []\r\n    for gia_tri, so_lan in enumerate(dem):\r\n        ket_qua.extend([gia_tri] * so_lan)   # ghi lại theo đúng tần suất, tự động có thứ tự\r\n    return ket_qua\r\n\r\nprint(counting_sort([4, 2, 2, 8, 3, 3, 1]))   # [1, 2, 2, 3, 3, 4, 8]",
        "goals": [
          "Counting Sort — đếm tần suất",
          "Radix Sort — sắp xếp theo từng chữ số"
        ],
        "content": "<h3>Counting Sort — đếm tần suất</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">counting_sort.py</span>\r\n        \r\n        <pre><code>def counting_sort(ds):\r\n    if not ds: return ds\r\n    max_val = max(ds)\r\n    dem = [0] * (max_val + 1)\r\n    for x in ds:\r\n        dem[x] += 1                  # đếm số lần xuất hiện của mỗi giá trị\r\n\r\n    ket_qua = []\r\n    for gia_tri, so_lan in enumerate(dem):\r\n        ket_qua.extend([gia_tri] * so_lan)   # ghi lại theo đúng tần suất, tự động có thứ tự\r\n    return ket_qua\r\n\r\nprint(counting_sort([4, 2, 2, 8, 3, 3, 1]))   # [1, 2, 2, 3, 3, 4, 8]</code></pre>\r\n      </div>\r\n\r\n      <div class=\"box important\">\r\n        <div class=\"box-title\">Quan trọng — Điều kiện áp dụng</div>\r\n        Counting Sort đạt <strong>O(n + k)</strong> (k = giá trị lớn nhất) — nhanh hơn O(n log n) khi k không quá lớn so với n. Nhưng nếu dữ liệu có giá trị rất lớn (VD: k = 10 tỷ), thuật toán này sẽ tốn RẤT nhiều bộ nhớ và trở nên vô dụng.\r\n      </div>\r\n\r\n      <h3>Radix Sort — sắp xếp theo từng chữ số</h3>\r\n      <p>Sắp xếp số nguyên bằng cách xử lý từng chữ số một, từ hàng đơn vị tới hàng cao nhất, dùng Counting Sort ổn định (stable) làm bước phụ trợ cho mỗi chữ số.</p>\r\n      <div class=\"box note\">\r\n        <div class=\"box-title\">Ghi chú</div>\r\n        Radix Sort đạt độ phức tạp <strong>O(d × (n + k))</strong> với d là số chữ số — rất hiệu quả để sắp xếp số nguyên hoặc chuỗi có độ dài cố định, thường dùng trong các hệ thống xử lý dữ liệu lớn.\r\n      </div>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 10</h4>\r\n        <p>Counting Sort và Radix Sort là thuật toán phi so sánh, có thể nhanh hơn O(n log n) trong điều kiện đặc biệt (giá trị giới hạn, số nguyên) — nhưng không tổng quát cho mọi loại dữ liệu.</p>\r\n      </div>"
      },
      "quiz": null
    },
    {
      "id": "chapter11",
      "title": "So sánh & lựa chọn thuật toán sắp xếp",
      "type": "chi-tiet",
      "side": "left",
      "parent": "sap-xep",
      "chapter": "thuat-toan/chapter11.html",
      "summary": "Tổng hợp toàn bộ các thuật toán đã học và hướng dẫn chọn đúng thuật toán cho từng tình huống.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Không có thuật toán sắp xếp nào \"tốt nhất tuyệt đối\" — lựa chọn phụ thuộc vào yêu cầu cụ thể: tốc độ trung bình, đảm bảo xấu nhất, bộ nhớ, tính ổn định. Trong thực tế, luôn ưu tiên hàm sắp xếp có sẵn của ngôn ngữ trừ khi có lý do đặc biệt để tự cài đặt.",
        "code": null,
        "goals": [
          "Hướng dẫn lựa chọn thực tế"
        ],
        "content": "<table>\r\n        <tr><th>Thuật toán</th><th>Tốt nhất</th><th>Trung bình</th><th>Xấu nhất</th><th>Không gian</th><th>Ổn định</th></tr>\r\n        <tr><td>Bubble Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>Có</td></tr>\r\n        <tr><td>Selection Sort</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>Không</td></tr>\r\n        <tr><td>Insertion Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>Có</td></tr>\r\n        <tr><td>Merge Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n)</td><td>Có</td></tr>\r\n        <tr><td>Quick Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n²)</td><td>O(log n)</td><td>Không</td></tr>\r\n        <tr><td>Heap Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(1)</td><td>Không</td></tr>\r\n        <tr><td>Counting Sort</td><td>O(n+k)</td><td>O(n+k)</td><td>O(n+k)</td><td>O(k)</td><td>Có</td></tr>\r\n      </table>\r\n\r\n      <h3>Hướng dẫn lựa chọn thực tế</h3>\r\n      <div class=\"box tip\">\r\n        <div class=\"box-title\">Mẹo lựa chọn</div>\r\n        <ul style=\"margin-bottom:0\">\r\n          <li><strong>Dữ liệu nhỏ (&lt; 50 phần tử):</strong> Insertion Sort đủ nhanh, code đơn giản.</li>\r\n          <li><strong>Cần ổn định (stable) + không giới hạn bộ nhớ:</strong> Merge Sort.</li>\r\n          <li><strong>Cần nhanh trung bình, có thể chấp nhận rủi ro xấu nhất:</strong> Quick Sort (với pivot ngẫu nhiên).</li>\r\n          <li><strong>Cần đảm bảo O(n log n) VÀ tiết kiệm bộ nhớ:</strong> Heap Sort.</li>\r\n          <li><strong>Dữ liệu là số nguyên trong phạm vi nhỏ:</strong> Counting Sort/Radix Sort.</li>\r\n          <li><strong>Không muốn tự cài đặt gì cả:</strong> Dùng hàm <code>sorted()</code>/<code>.sort()</code> có sẵn của ngôn ngữ — hầu hết đã tối ưu bằng thuật toán lai (Timsort, Introsort...).</li>\r\n        </ul>\r\n      </div>\r\n\r\n      \r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 11</h4>\r\n        <p>Không có thuật toán sắp xếp nào \"tốt nhất tuyệt đối\" — lựa chọn phụ thuộc vào yêu cầu cụ thể: tốc độ trung bình, đảm bảo xấu nhất, bộ nhớ, tính ổn định. Trong thực tế, luôn ưu tiên hàm sắp xếp có sẵn của ngôn ngữ trừ khi có lý do đặc biệt để tự cài đặt.</p>\r\n      </div>"
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
      "summary": "Thuật toán tìm kiếm đơn giản nhất — duyệt tuần tự từng phần tử cho tới khi tìm thấy.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Linear Search duyệt tuần tự, O(n), hoạt động với mọi loại dữ liệu kể cả chưa sắp xếp — nhưng chậm hơn nhiều so với Binary Search khi dữ liệu đã sắp xếp.",
        "code": "def linear_search(ds, target):\r\n    for i, x in enumerate(ds):\r\n        if x == target:\r\n            return i          # trả về chỉ số ngay khi tìm thấy\r\n    return -1                    # không tìm thấy\r\n\r\nprint(linear_search([4, 2, 7, 1, 9], 7))   # 2\r\nprint(linear_search([4, 2, 7, 1, 9], 100)) # -1",
        "goals": [],
        "content": "<div class=\"code-wrap\">\r\n        <span class=\"code-label\">linear_search.py</span>\r\n        \r\n        <pre><code>def linear_search(ds, target):\r\n    for i, x in enumerate(ds):\r\n        if x == target:\r\n            return i          # trả về chỉ số ngay khi tìm thấy\r\n    return -1                    # không tìm thấy\r\n\r\nprint(linear_search([4, 2, 7, 1, 9], 7))   # 2\r\nprint(linear_search([4, 2, 7, 1, 9], 100)) # -1</code></pre>\r\n      </div>\r\n\r\n      <table>\r\n        <tr><th>Trường hợp</th><th>Độ phức tạp</th></tr>\r\n        <tr><td>Tốt nhất (phần tử đầu tiên)</td><td>O(1)</td></tr>\r\n        <tr><td>Xấu nhất (phần tử cuối/không có)</td><td>O(n)</td></tr>\r\n      </table>\r\n\r\n      <div class=\"box tip\">\r\n        <div class=\"box-title\">Mẹo</div>\r\n        Linear Search là lựa chọn DUY NHẤT khi dữ liệu <strong>chưa được sắp xếp</strong> — không có cách nào tìm nhanh hơn O(n) nếu không biết trước thứ tự của dữ liệu.\r\n      </div>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 12</h4>\r\n        <p>Linear Search duyệt tuần tự, O(n), hoạt động với mọi loại dữ liệu kể cả chưa sắp xếp — nhưng chậm hơn nhiều so với Binary Search khi dữ liệu đã sắp xếp.</p>\r\n      </div>"
      },
      "quiz": null
    },
    {
      "id": "chapter13",
      "title": "Binary Search",
      "type": "chi-tiet",
      "side": "right",
      "parent": "tim-kiem",
      "chapter": "thuat-toan/chapter13.html",
      "summary": "Tìm kiếm nhị phân — O(log n), nhanh vượt trội so với Linear Search, nhưng YÊU CẦU dữ liệu đã sắp xếp.",
      "time": 10,
      "related": [
        "chapter14",
        "chapter12"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Binary Search liên tục chia đôi phạm vi tìm kiếm, đạt O(log n) — nhưng yêu cầu bắt buộc dữ liệu đã sắp xếp. Có thể cài đặt bằng vòng lặp hoặc đệ quy.",
        "code": "def binary_search(ds, target):\r\n    trai, phai = 0, len(ds) - 1\r\n    while trai <= phai:\r\n        giua = trai + (phai - trai) // 2       # tránh tràn số so với (trai+phai)//2 ở ngôn ngữ khác\r\n        if ds[giua] == target:\r\n            return giua\r\n        elif ds[giua] < target:\r\n            trai = giua + 1                        # target ở nửa PHẢI\r\n        else:\r\n            phai = giua - 1                          # target ở nửa TRÁI\r\n    return -1\r\n\r\nds = [1, 3, 5, 7, 9, 11, 13, 15]\r\nprint(binary_search(ds, 11))   # 5",
        "goals": [
          "Trực quan hóa quá trình tìm kiếm"
        ],
        "content": "<div class=\"code-wrap\">\r\n        <span class=\"code-label\">binary_search.py</span>\r\n        \r\n        <pre><code>def binary_search(ds, target):\r\n    trai, phai = 0, len(ds) - 1\r\n    while trai <= phai:\r\n        giua = trai + (phai - trai) // 2       # tránh tràn số so với (trai+phai)//2 ở ngôn ngữ khác\r\n        if ds[giua] == target:\r\n            return giua\r\n        elif ds[giua] < target:\r\n            trai = giua + 1                        # target ở nửa PHẢI\r\n        else:\r\n            phai = giua - 1                          # target ở nửa TRÁI\r\n    return -1\r\n\r\nds = [1, 3, 5, 7, 9, 11, 13, 15]\r\nprint(binary_search(ds, 11))   # 5</code></pre>\r\n      </div>\r\n\r\n      <h3>Trực quan hóa quá trình tìm kiếm</h3>\r\n      <pre><code>Tìm 11 trong [1, 3, 5, 7, 9, 11, 13, 15]\r\n\r\nBước 1: trai=0, phai=7, giua=3 -> ds[3]=7 < 11  -> tìm nửa PHẢI\r\nBước 2: trai=4, phai=7, giua=5 -> ds[5]=11 == 11 -> TÌM THẤY tại chỉ số 5\r\n\r\nChỉ mất 2 bước thay vì phải duyệt 6 phần tử như Linear Search!</code></pre>\r\n\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">binary_search_de_quy.py</span>\r\n        \r\n        <pre><code>def binary_search_de_quy(ds, target, trai=0, phai=None):\r\n    if phai is None:\r\n        phai = len(ds) - 1\r\n    if trai > phai:\r\n        return -1\r\n    giua = trai + (phai - trai) // 2\r\n    if ds[giua] == target:\r\n        return giua\r\n    elif ds[giua] < target:\r\n        return binary_search_de_quy(ds, target, giua + 1, phai)\r\n    else:\r\n        return binary_search_de_quy(ds, target, trai, giua - 1)</code></pre>\r\n      </div>\r\n\r\n      <div class=\"box important\">\r\n        <div class=\"box-title\">Quan trọng</div>\r\n        Binary Search <strong>BẮT BUỘC</strong> dữ liệu phải đã được sắp xếp trước. Áp dụng lên dữ liệu chưa sắp xếp sẽ cho kết quả sai (hoặc không tìm thấy dù phần tử tồn tại) mà không hề báo lỗi — đây là bug rất khó phát hiện.\r\n      </div>\r\n\r\n      \r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 13</h4>\r\n        <p>Binary Search liên tục chia đôi phạm vi tìm kiếm, đạt O(log n) — nhưng yêu cầu bắt buộc dữ liệu đã sắp xếp. Có thể cài đặt bằng vòng lặp hoặc đệ quy.</p>\r\n      </div>"
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
      "summary": "Các bài toán mở rộng từ ý tưởng chia đôi — rất hay gặp trong phỏng vấn kỹ thuật.",
      "time": 10,
      "related": [
        "chapter13"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Ý tưởng chia đôi của Binary Search mở rộng ra nhiều bài toán: tìm vị trí chèn, tìm kiếm trong mảng xoay, và \"binary search on answer\" — kỹ thuật rất mạnh trong các bài toán tối ưu hóa.",
        "code": "def tim_vi_tri_chen(ds, target):\r\n    trai, phai = 0, len(ds)\r\n    while trai < phai:\r\n        giua = (trai + phai) // 2\r\n        if ds[giua] < target:\r\n            trai = giua + 1\r\n        else:\r\n            phai = giua\r\n    return trai      # vị trí ĐẦU TIÊN có thể chèn target mà vẫn giữ thứ tự sắp xếp\r\n\r\nprint(tim_vi_tri_chen([1, 3, 3, 5, 7], 3))   # 1 - vị trí đầu tiên của giá trị 3\r\nprint(tim_vi_tri_chen([1, 3, 3, 5, 7], 4))   # 3 - chèn giữa 3 và 5",
        "goals": [
          "Tìm vị trí chèn (Lower Bound)",
          "Tìm kiếm trong mảng xoay (Rotated Sorted Array)",
          "Binary Search trên đáp số (Binary Search on Answer)"
        ],
        "content": "<h3>Tìm vị trí chèn (Lower Bound)</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">lower_bound.py</span>\r\n        \r\n        <pre><code>def tim_vi_tri_chen(ds, target):\r\n    trai, phai = 0, len(ds)\r\n    while trai < phai:\r\n        giua = (trai + phai) // 2\r\n        if ds[giua] < target:\r\n            trai = giua + 1\r\n        else:\r\n            phai = giua\r\n    return trai      # vị trí ĐẦU TIÊN có thể chèn target mà vẫn giữ thứ tự sắp xếp\r\n\r\nprint(tim_vi_tri_chen([1, 3, 3, 5, 7], 3))   # 1 - vị trí đầu tiên của giá trị 3\r\nprint(tim_vi_tri_chen([1, 3, 3, 5, 7], 4))   # 3 - chèn giữa 3 và 5</code></pre>\r\n      </div>\r\n\r\n      <h3>Tìm kiếm trong mảng xoay (Rotated Sorted Array)</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">search_rotated_array.py</span>\r\n        \r\n        <pre><code># Mảng đã sắp xếp nhưng bị \"xoay\" tại một điểm nào đó, VD: [4,5,6,7,0,1,2]\r\ndef search_rotated(ds, target):\r\n    trai, phai = 0, len(ds) - 1\r\n    while trai <= phai:\r\n        giua = (trai + phai) // 2\r\n        if ds[giua] == target:\r\n            return giua\r\n        if ds[trai] <= ds[giua]:              # nửa TRÁI đang có thứ tự (không bị xoay)\r\n            if ds[trai] <= target < ds[giua]:\r\n                phai = giua - 1\r\n            else:\r\n                trai = giua + 1\r\n        else:                                    # nửa PHẢI đang có thứ tự\r\n            if ds[giua] < target <= ds[phai]:\r\n                trai = giua + 1\r\n            else:\r\n                phai = giua - 1\r\n    return -1\r\n\r\nprint(search_rotated([4,5,6,7,0,1,2], 0))   # 4</code></pre>\r\n      </div>\r\n\r\n      <h3>Binary Search trên đáp số (Binary Search on Answer)</h3>\r\n      <p>Kỹ thuật nâng cao: áp dụng ý tưởng chia đôi không phải trên mảng, mà trên <strong>không gian đáp số có thể có</strong> của bài toán — miễn là đáp số có tính chất \"đơn điệu\" (monotonic).</p>\r\n      <div class=\"box tip\">\r\n        <div class=\"box-title\">Mẹo</div>\r\n        Dấu hiệu nhận biết bài toán phù hợp với \"Binary Search on Answer\": câu hỏi dạng \"giá trị nhỏ nhất/lớn nhất thỏa mãn điều kiện X là bao nhiêu?\" và việc kiểm tra \"X có thỏa mãn không\" có thể làm nhanh (thường O(n)).\r\n      </div>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 14</h4>\r\n        <p>Ý tưởng chia đôi của Binary Search mở rộng ra nhiều bài toán: tìm vị trí chèn, tìm kiếm trong mảng xoay, và \"binary search on answer\" — kỹ thuật rất mạnh trong các bài toán tối ưu hóa.</p>\r\n      </div>"
      },
      "quiz": null
    },
    {
      "id": "chapter15",
      "title": "Hashing & Tra cứu O(1)",
      "type": "chi-tiet",
      "side": "right",
      "parent": "tim-kiem",
      "chapter": "thuat-toan/chapter15.html",
      "summary": "Kỹ thuật cho phép tra cứu gần như tức thì — nền tảng của dictionary/HashMap trong mọi ngôn ngữ.",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "source": {
        "summary": "Hashing chuyển key thành chỉ số để tra cứu O(1) trung bình, xử lý va chạm bằng chaining hoặc open addressing — kỹ thuật cực kỳ quan trọng để tối ưu độ phức tạp từ O(n²) xuống O(n) trong nhiều bài toán.",
        "code": "# Minh họa ý tưởng (không phải cài đặt thực tế của Python dict)\r\ndef hash_don_gian(key, kich_thuoc_bang):\r\n    return sum(ord(c) for c in key) % kich_thuoc_bang    # cộng mã ASCII rồi lấy phần dư\r\n\r\nprint(hash_don_gian(\"Huy\", 10))     # luôn cho cùng 1 kết quả với cùng input\r\nprint(hash_don_gian(\"Lan\", 10))\r\n\r\n# Trong thực tế, chỉ cần dùng dict/set có sẵn - đã cài đặt hashing tối ưu bên dưới\r\ndemo = {}\r\ndemo[\"Huy\"] = 85          # O(1) trung bình để THÊM\r\nprint(demo[\"Huy\"])          # O(1) trung bình để TRA CỨU",
        "goals": [
          "Hash Function là gì?",
          "Xung đột hash (Collision) và cách xử lý",
          "Ứng dụng: Two Sum tối ưu bằng Hashing"
        ],
        "content": "<h3>Hash Function là gì?</h3>\r\n      <p>Hàm băm (hash function) chuyển đổi một giá trị bất kỳ (chuỗi, số, object...) thành một chỉ số nguyên trong một phạm vi cố định — dùng chỉ số đó để lưu/tra cứu trực tiếp trong mảng, tránh phải tìm kiếm tuần tự.</p>\r\n\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">hashing_concept.py</span>\r\n        \r\n        <pre><code># Minh họa ý tưởng (không phải cài đặt thực tế của Python dict)\r\ndef hash_don_gian(key, kich_thuoc_bang):\r\n    return sum(ord(c) for c in key) % kich_thuoc_bang    # cộng mã ASCII rồi lấy phần dư\r\n\r\nprint(hash_don_gian(\"Huy\", 10))     # luôn cho cùng 1 kết quả với cùng input\r\nprint(hash_don_gian(\"Lan\", 10))\r\n\r\n# Trong thực tế, chỉ cần dùng dict/set có sẵn - đã cài đặt hashing tối ưu bên dưới\r\ndemo = {}\r\ndemo[\"Huy\"] = 85          # O(1) trung bình để THÊM\r\nprint(demo[\"Huy\"])          # O(1) trung bình để TRA CỨU</code></pre>\r\n      </div>\r\n\r\n      <h3>Xung đột hash (Collision) và cách xử lý</h3>\r\n      <p>Hai key khác nhau có thể cho ra cùng một chỉ số hash (gọi là \"va chạm\"/collision). Hai kỹ thuật xử lý phổ biến:</p>\r\n      <table>\r\n        <tr><th>Kỹ thuật</th><th>Cách hoạt động</th></tr>\r\n        <tr><td><strong>Chaining</strong></td><td>Mỗi ô của bảng hash chứa một danh sách liên kết các phần tử va chạm</td></tr>\r\n        <tr><td><strong>Open Addressing</strong></td><td>Khi va chạm, tìm ô trống tiếp theo theo một quy tắc dò tuyến tính/bậc hai</td></tr>\r\n      </table>\r\n\r\n      <div class=\"box important\">\r\n        <div class=\"box-title\">Quan trọng</div>\r\n        Độ phức tạp O(1) của hash table là <strong>trung bình (average case)</strong>, không phải đảm bảo tuyệt đối — trường hợp xấu nhất (rất nhiều va chạm) có thể suy biến thành O(n). Trong thực tế, các cài đặt hash table tốt (như Python dict) hiếm khi rơi vào trường hợp này.\r\n      </div>\r\n\r\n      <h3>Ứng dụng: Two Sum tối ưu bằng Hashing</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">two_sum_hashing.py</span>\r\n        \r\n        <pre><code>def two_sum(ds, target):              # O(n) nhờ hashing, thay vì O(n²) duyệt lồng nhau\r\n    da_thay = {}\r\n    for i, x in enumerate(ds):\r\n        con_lai = target - x\r\n        if con_lai in da_thay:            # tra cứu O(1) trong dict\r\n            return [da_thay[con_lai], i]\r\n        da_thay[x] = i\r\n    return []\r\n\r\nprint(two_sum([2, 7, 11, 15], 9))   # [0, 1]</code></pre>\r\n      </div>\r\n\r\n      \r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 15</h4>\r\n        <p>Hashing chuyển key thành chỉ số để tra cứu O(1) trung bình, xử lý va chạm bằng chaining hoặc open addressing — kỹ thuật cực kỳ quan trọng để tối ưu độ phức tạp từ O(n²) xuống O(n) trong nhiều bài toán.</p>\r\n      </div>"
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
      "summary": "Hai cách cơ bản nhất để lưu trữ một dãy phần tử — mỗi cách có đánh đổi (trade-off) riêng.",
      "time": 10,
      "related": [
        "chapter17"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Array truy cập nhanh O(1) nhưng chèn/xóa đầu chậm O(n). Linked List chèn/xóa đầu nhanh O(1) nhưng truy cập chậm O(n) — lựa chọn phụ thuộc vào thao tác nào được thực hiện thường xuyên hơn.",
        "code": null,
        "goals": [
          "Array (Mảng) — lưu liên tục trong bộ nhớ",
          "Linked List (Danh sách liên kết) — lưu rải rác, nối bằng con trỏ"
        ],
        "content": "<h3>Array (Mảng) — lưu liên tục trong bộ nhớ</h3>\r\n      <p>Mảng lưu các phần tử ở các ô nhớ LIÊN TỤC, liền kề nhau — nhờ đó có thể tính trực tiếp địa chỉ của phần tử thứ i bằng công thức, cho phép truy cập O(1).</p>\r\n\r\n      <h3>Linked List (Danh sách liên kết) — lưu rải rác, nối bằng con trỏ</h3>\r\n      <p>Mỗi phần tử (node) nằm ở một vị trí bộ nhớ bất kỳ, chỉ được \"nối\" với nhau qua con trỏ trỏ tới node kế tiếp.</p>\r\n\r\n      <table>\r\n        <tr><th>Thao tác</th><th>Array</th><th>Linked List</th></tr>\r\n        <tr><td>Truy cập theo chỉ số</td><td>O(1)</td><td>O(n)</td></tr>\r\n        <tr><td>Tìm kiếm giá trị</td><td>O(n)</td><td>O(n)</td></tr>\r\n        <tr><td>Chèn/xóa ở ĐẦU</td><td>O(n) - phải dịch chuyển</td><td>O(1)</td></tr>\r\n        <tr><td>Chèn/xóa ở CUỐI</td><td>O(1) amortized</td><td>O(1) nếu có con trỏ đuôi, O(n) nếu không</td></tr>\r\n        <tr><td>Bộ nhớ</td><td>Liên tục, tiết kiệm hơn</td><td>Rải rác, tốn thêm bộ nhớ cho con trỏ</td></tr>\r\n      </table>\r\n\r\n      <div class=\"box tip\">\r\n        <div class=\"box-title\">Mẹo ghi nhớ</div>\r\n        Array mạnh khi cần <strong>truy cập ngẫu nhiên nhiều</strong> (VD: tra bảng). Linked List mạnh khi cần <strong>chèn/xóa thường xuyên ở đầu danh sách</strong> mà không muốn tốn chi phí dịch chuyển toàn bộ phần tử còn lại.\r\n      </div>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 16</h4>\r\n        <p>Array truy cập nhanh O(1) nhưng chèn/xóa đầu chậm O(n). Linked List chèn/xóa đầu nhanh O(1) nhưng truy cập chậm O(n) — lựa chọn phụ thuộc vào thao tác nào được thực hiện thường xuyên hơn.</p>\r\n      </div>"
      },
      "quiz": null
    },
    {
      "id": "chapter17",
      "title": "Cài đặt Linked List",
      "type": "chi-tiet",
      "side": "right",
      "parent": "tuyen-tinh",
      "chapter": "thuat-toan/chapter17.html",
      "summary": "Tự xây dựng Singly và Doubly Linked List từ đầu — hiểu rõ cách con trỏ hoạt động bên dưới.",
      "time": 10,
      "related": [
        "chapter16"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Singly Linked List chỉ có con trỏ tiến, đơn giản và tiết kiệm bộ nhớ hơn. Doubly Linked List có thêm con trỏ lùi, cho phép duyệt hai chiều và xóa node hiệu quả hơn, đánh đổi bằng bộ nhớ.",
        "code": "class Node:\r\n    def __init__(self, gia_tri):\r\n        self.gia_tri = gia_tri\r\n        self.tiep_theo = None\r\n\r\nclass SinglyLinkedList:\r\n    def __init__(self):\r\n        self.dau = None\r\n\r\n    def them_dau(self, gia_tri):          # O(1) - điểm mạnh của linked list\r\n        node_moi = Node(gia_tri)\r\n        node_moi.tiep_theo = self.dau\r\n        self.dau = node_moi\r\n\r\n    def them_cuoi(self, gia_tri):          # O(n) - phải duyệt tới cuối\r\n        node_moi = Node(gia_tri)\r\n        if not self.dau:\r\n            self.dau = node_moi\r\n            return\r\n        hien_tai = self.dau\r\n        while hien_tai.tiep_theo:\r\n            hien_tai = hien_tai.tiep_theo\r\n        hien_tai.tiep_theo = node_moi\r\n\r\n    def xoa(self, gia_tri):                  # O(n) - phải tìm trước khi xóa\r\n        if not self.dau:\r\n            return\r\n        if self.dau.gia_tri == gia_tri:\r\n            self.dau = self.dau.tiep_theo\r\n            return\r\n        hien_tai = self.dau\r\n        while hien_tai.tiep_theo:\r\n            if hien_tai.tiep_theo.gia_tri == gia_tri:\r\n                hien_tai.tiep_theo = hien_tai.tiep_theo.tiep_theo\r\n                return\r\n            hien_tai = hien_tai.tiep_theo\r\n\r\n    def hien_thi(self):\r\n        ket_qua = []\r\n        hien_tai = self.dau\r\n        while hien_tai:\r\n            ket_qua.append(hien_tai.gia_tri)\r\n            hien_tai = hien_tai.tiep_theo\r\n        return ket_qua\r\n\r\nll = SinglyLinkedList()\r\nll.them_dau(3); ll.them_dau(2); ll.them_dau(1)\r\nprint(ll.hien_thi())   # [1, 2, 3]",
        "goals": [
          "Singly Linked List — liên kết một chiều",
          "Doubly Linked List — liên kết hai chiều"
        ],
        "content": "<h3>Singly Linked List — liên kết một chiều</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">singly_linked_list.py</span>\r\n        \r\n        <pre><code>class Node:\r\n    def __init__(self, gia_tri):\r\n        self.gia_tri = gia_tri\r\n        self.tiep_theo = None\r\n\r\nclass SinglyLinkedList:\r\n    def __init__(self):\r\n        self.dau = None\r\n\r\n    def them_dau(self, gia_tri):          # O(1) - điểm mạnh của linked list\r\n        node_moi = Node(gia_tri)\r\n        node_moi.tiep_theo = self.dau\r\n        self.dau = node_moi\r\n\r\n    def them_cuoi(self, gia_tri):          # O(n) - phải duyệt tới cuối\r\n        node_moi = Node(gia_tri)\r\n        if not self.dau:\r\n            self.dau = node_moi\r\n            return\r\n        hien_tai = self.dau\r\n        while hien_tai.tiep_theo:\r\n            hien_tai = hien_tai.tiep_theo\r\n        hien_tai.tiep_theo = node_moi\r\n\r\n    def xoa(self, gia_tri):                  # O(n) - phải tìm trước khi xóa\r\n        if not self.dau:\r\n            return\r\n        if self.dau.gia_tri == gia_tri:\r\n            self.dau = self.dau.tiep_theo\r\n            return\r\n        hien_tai = self.dau\r\n        while hien_tai.tiep_theo:\r\n            if hien_tai.tiep_theo.gia_tri == gia_tri:\r\n                hien_tai.tiep_theo = hien_tai.tiep_theo.tiep_theo\r\n                return\r\n            hien_tai = hien_tai.tiep_theo\r\n\r\n    def hien_thi(self):\r\n        ket_qua = []\r\n        hien_tai = self.dau\r\n        while hien_tai:\r\n            ket_qua.append(hien_tai.gia_tri)\r\n            hien_tai = hien_tai.tiep_theo\r\n        return ket_qua\r\n\r\nll = SinglyLinkedList()\r\nll.them_dau(3); ll.them_dau(2); ll.them_dau(1)\r\nprint(ll.hien_thi())   # [1, 2, 3]</code></pre>\r\n      </div>\r\n\r\n      <h3>Doubly Linked List — liên kết hai chiều</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">doubly_linked_list.py</span>\r\n        \r\n        <pre><code>class DoublyNode:\r\n    def __init__(self, gia_tri):\r\n        self.gia_tri = gia_tri\r\n        self.tiep_theo = None\r\n        self.truoc = None      # con trỏ THÊM trỏ về node TRƯỚC - điểm khác biệt so với singly\r\n\r\n# Ưu điểm: có thể duyệt CẢ HAI CHIỀU, xóa node hiện tại KHÔNG CẦN biết node trước nó\r\n# Đánh đổi: tốn thêm bộ nhớ cho con trỏ \"truoc\" ở mỗi node</code></pre>\r\n      </div>\r\n\r\n      <div class=\"box note\">\r\n        <div class=\"box-title\">Ghi chú</div>\r\n        Python's <code>collections.deque</code> (đã dùng ở giáo trình Python chương 31) thực chất được cài đặt dựa trên ý tưởng tương tự doubly linked list — cho phép thêm/xóa O(1) ở CẢ HAI đầu.\r\n      </div>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 17</h4>\r\n        <p>Singly Linked List chỉ có con trỏ tiến, đơn giản và tiết kiệm bộ nhớ hơn. Doubly Linked List có thêm con trỏ lùi, cho phép duyệt hai chiều và xóa node hiệu quả hơn, đánh đổi bằng bộ nhớ.</p>\r\n      </div>"
      },
      "quiz": null
    },
    {
      "id": "chapter18",
      "title": "Stack — Ứng dụng thực tế",
      "type": "chi-tiet",
      "side": "left",
      "parent": "tuyen-tinh",
      "chapter": "thuat-toan/chapter18.html",
      "summary": "Cấu trúc LIFO (Last In First Out) — không chỉ là lý thuyết, mà là nền tảng của rất nhiều tính năng bạn dùng hàng ngày.",
      "time": 10,
      "related": [
        "chapter20"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Stack (LIFO) ứng dụng trong kiểm tra ngoặc hợp lệ, tính năng Undo, và là nền tảng ngầm định của đệ quy/DFS — một trong những cấu trúc dữ liệu được dùng nhiều nhất trong thực tế.",
        "code": "stack = []\r\nstack.append(1)     # push\r\nstack.append(2)\r\nstack.append(3)\r\nprint(stack.pop())    # 3 - lấy ra phần tử THÊM SAU CÙNG",
        "goals": [
          "Ứng dụng 1: Kiểm tra ngoặc hợp lệ",
          "Ứng dụng 2: Chức năng Undo (hoàn tác)",
          "Ứng dụng 3: Duyệt DFS trên đồ thị (xem lại ở phần Đồ thị)"
        ],
        "content": "<div class=\"code-wrap\">\r\n        <span class=\"code-label\">stack_basic.py</span>\r\n        \r\n        <pre><code>stack = []\r\nstack.append(1)     # push\r\nstack.append(2)\r\nstack.append(3)\r\nprint(stack.pop())    # 3 - lấy ra phần tử THÊM SAU CÙNG</code></pre>\r\n      </div>\r\n\r\n      <h3>Ứng dụng 1: Kiểm tra ngoặc hợp lệ</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">valid_parentheses.py</span>\r\n        \r\n        <pre><code>def ngoac_hop_le(s):\r\n    stack = []\r\n    cap = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\r\n    for ky_tu in s:\r\n        if ky_tu in \"([{\":\r\n            stack.append(ky_tu)\r\n        elif ky_tu in cap:\r\n            if not stack or stack.pop() != cap[ky_tu]:\r\n                return False\r\n    return len(stack) == 0</code></pre>\r\n      </div>\r\n\r\n      <h3>Ứng dụng 2: Chức năng Undo (hoàn tác)</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">undo_feature.py</span>\r\n        \r\n        <pre><code>class TrinhSoanThao:\r\n    def __init__(self):\r\n        self.noi_dung = \"\"\r\n        self.lich_su = []           # stack lưu lịch sử các trạng thái\r\n\r\n    def go_chu(self, chu):\r\n        self.lich_su.append(self.noi_dung)    # lưu trạng thái TRƯỚC khi thay đổi\r\n        self.noi_dung += chu\r\n\r\n    def hoan_tac(self):                          # Ctrl+Z\r\n        if self.lich_su:\r\n            self.noi_dung = self.lich_su.pop()      # quay về trạng thái gần nhất\r\n\r\nsoan_thao = TrinhSoanThao()\r\nsoan_thao.go_chu(\"Xin\"); soan_thao.go_chu(\" chào\")\r\nprint(soan_thao.noi_dung)   # \"Xin chào\"\r\nsoan_thao.hoan_tac()\r\nprint(soan_thao.noi_dung)   # \"Xin\"</code></pre>\r\n      </div>\r\n\r\n      <h3>Ứng dụng 3: Duyệt DFS trên đồ thị (xem lại ở phần Đồ thị)</h3>\r\n      <p>Cả đệ quy VÀ Depth-First Search (DFS) đều dựa trên nguyên lý stack — thực tế, đệ quy chính là dùng \"call stack\" của chương trình một cách ngầm định.</p>\r\n\r\n      <div class=\"box tip\">\r\n        <div class=\"box-title\">Mẹo ghi nhớ</div>\r\n        Dấu hiệu nhận biết bài toán cần Stack: cần xử lý theo thứ tự <strong>\"cái vào sau cùng, xử lý trước\"</strong> — undo/redo, kiểm tra cân bằng ngoặc, đánh giá biểu thức toán học, duyệt DFS.\r\n      </div>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 18</h4>\r\n        <p>Stack (LIFO) ứng dụng trong kiểm tra ngoặc hợp lệ, tính năng Undo, và là nền tảng ngầm định của đệ quy/DFS — một trong những cấu trúc dữ liệu được dùng nhiều nhất trong thực tế.</p>\r\n      </div>"
      },
      "quiz": null
    },
    {
      "id": "chapter19",
      "title": "Queue & Deque",
      "type": "chi-tiet",
      "side": "right",
      "parent": "tuyen-tinh",
      "chapter": "thuat-toan/chapter19.html",
      "summary": "Cấu trúc FIFO (First In First Out) và biến thể hai đầu — nền tảng xử lý theo thứ tự và duyệt BFS.",
      "time": 10,
      "related": [
        "chapter20"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Queue (FIFO) xử lý theo thứ tự đến trước, dùng collections.deque để đạt O(1) ở cả hai đầu. Deque tổng quát hóa cả Stack lẫn Queue trong một cấu trúc duy nhất, và là nền tảng bắt buộc của thuật toán BFS.",
        "code": "from collections import deque      # dùng deque, KHÔNG dùng list.pop(0) vì list chậm O(n)\r\n\r\nhang_doi = deque()\r\nhang_doi.append(1)       # enqueue - thêm vào CUỐI\r\nhang_doi.append(2)\r\nhang_doi.append(3)\r\nprint(hang_doi.popleft())  # 1 - dequeue - lấy ra từ ĐẦU",
        "goals": [
          "Ứng dụng: Hệ thống xếp hàng in tài liệu",
          "Deque (Double-Ended Queue) — hàng đợi hai đầu"
        ],
        "content": "<div class=\"code-wrap\">\r\n        <span class=\"code-label\">queue_basic.py</span>\r\n        \r\n        <pre><code>from collections import deque      # dùng deque, KHÔNG dùng list.pop(0) vì list chậm O(n)\r\n\r\nhang_doi = deque()\r\nhang_doi.append(1)       # enqueue - thêm vào CUỐI\r\nhang_doi.append(2)\r\nhang_doi.append(3)\r\nprint(hang_doi.popleft())  # 1 - dequeue - lấy ra từ ĐẦU</code></pre>\r\n      </div>\r\n\r\n      <h3>Ứng dụng: Hệ thống xếp hàng in tài liệu</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">print_queue.py</span>\r\n        \r\n        <pre><code>class HangDoiIn:\r\n    def __init__(self):\r\n        self.hang_doi = deque()\r\n\r\n    def them_yeu_cau(self, ten_file):\r\n        self.hang_doi.append(ten_file)\r\n        print(f\"Đã thêm '{ten_file}' vào hàng đợi in\")\r\n\r\n    def in_tiep_theo(self):\r\n        if self.hang_doi:\r\n            file_dang_in = self.hang_doi.popleft()   # in file được YÊU CẦU SỚM NHẤT trước\r\n            print(f\"Đang in: {file_dang_in}\")\r\n            return file_dang_in\r\n\r\nhd = HangDoiIn()\r\nhd.them_yeu_cau(\"bao_cao.pdf\")\r\nhd.them_yeu_cau(\"hop_dong.docx\")\r\nhd.in_tiep_theo()   # in bao_cao.pdf TRƯỚC vì được yêu cầu sớm hơn</code></pre>\r\n      </div>\r\n\r\n      <h3>Deque (Double-Ended Queue) — hàng đợi hai đầu</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">deque_both_ends.py</span>\r\n        \r\n        <pre><code>d = deque([2, 3, 4])\r\nd.appendleft(1)     # thêm vào ĐẦU - O(1)\r\nd.append(5)             # thêm vào CUỐI - O(1)\r\nprint(d)                   # deque([1, 2, 3, 4, 5])\r\nprint(d.popleft())          # 1\r\nprint(d.pop())                # 5</code></pre>\r\n      </div>\r\n\r\n      <div class=\"box important\">\r\n        <div class=\"box-title\">Quan trọng</div>\r\n        Queue là cấu trúc dữ liệu <strong>bắt buộc</strong> để cài đặt BFS (Breadth-First Search) — sẽ học chi tiết ở phần Đồ thị. Việc chọn đúng Queue thay vì Stack là điểm khác biệt cốt lõi giữa BFS và DFS.\r\n      </div>\r\n\r\n      \r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 19</h4>\r\n        <p>Queue (FIFO) xử lý theo thứ tự đến trước, dùng <code>collections.deque</code> để đạt O(1) ở cả hai đầu. Deque tổng quát hóa cả Stack lẫn Queue trong một cấu trúc duy nhất, và là nền tảng bắt buộc của thuật toán BFS.</p>\r\n      </div>"
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
      "summary": "Cấu trúc dữ liệu phân cấp — mỗi node có tối đa 2 con. Nền tảng cho BST, Heap, và nhiều cấu trúc nâng cao khác.",
      "time": 10,
      "related": [
        "chapter18",
        "chapter19",
        "chapter21"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Binary Tree có 3 kiểu duyệt DFS (pre/in/post-order, dùng đệ quy) và duyệt BFS theo tầng (dùng Queue) — mỗi kiểu phù hợp cho mục đích xử lý khác nhau.",
        "code": "class Node:\r\n    def __init__(self, gia_tri):\r\n        self.gia_tri = gia_tri\r\n        self.trai = None\r\n        self.phai = None\r\n\r\n#         1\r\n#       /   \\\\\r\n#      2     3\r\n#     / \\\\\r\n#    4   5\r\ngoc = Node(1)\r\ngoc.trai = Node(2)\r\ngoc.phai = Node(3)\r\ngoc.trai.trai = Node(4)\r\ngoc.trai.phai = Node(5)",
        "goals": [
          "Cài đặt cơ bản",
          "3 kiểu duyệt DFS (Depth-First)",
          "Duyệt BFS (theo chiều rộng, từng tầng)"
        ],
        "content": "<h3>Cài đặt cơ bản</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">binary_tree.py</span>\r\n        \r\n        <pre><code>class Node:\r\n    def __init__(self, gia_tri):\r\n        self.gia_tri = gia_tri\r\n        self.trai = None\r\n        self.phai = None\r\n\r\n#         1\r\n#       /   \\\\\r\n#      2     3\r\n#     / \\\\\r\n#    4   5\r\ngoc = Node(1)\r\ngoc.trai = Node(2)\r\ngoc.phai = Node(3)\r\ngoc.trai.trai = Node(4)\r\ngoc.trai.phai = Node(5)</code></pre>\r\n      </div>\r\n\r\n      <h3>3 kiểu duyệt DFS (Depth-First)</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">duyet_cay.py</span>\r\n        \r\n        <pre><code>def preorder(node, ket_qua=None):    # Gốc -> Trái -> Phải\r\n    if ket_qua is None: ket_qua = []\r\n    if node:\r\n        ket_qua.append(node.gia_tri)\r\n        preorder(node.trai, ket_qua)\r\n        preorder(node.phai, ket_qua)\r\n    return ket_qua\r\n\r\ndef inorder(node, ket_qua=None):     # Trái -> Gốc -> Phải\r\n    if ket_qua is None: ket_qua = []\r\n    if node:\r\n        inorder(node.trai, ket_qua)\r\n        ket_qua.append(node.gia_tri)\r\n        inorder(node.phai, ket_qua)\r\n    return ket_qua\r\n\r\ndef postorder(node, ket_qua=None):   # Trái -> Phải -> Gốc\r\n    if ket_qua is None: ket_qua = []\r\n    if node:\r\n        postorder(node.trai, ket_qua)\r\n        postorder(node.phai, ket_qua)\r\n        ket_qua.append(node.gia_tri)\r\n    return ket_qua\r\n\r\nprint(preorder(goc))    # [1, 2, 4, 5, 3]\r\nprint(inorder(goc))     # [4, 2, 5, 1, 3]\r\nprint(postorder(goc))   # [4, 5, 2, 3, 1]</code></pre>\r\n      </div>\r\n\r\n      <h3>Duyệt BFS (theo chiều rộng, từng tầng)</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">bfs_tree.py</span>\r\n        \r\n        <pre><code>from collections import deque\r\n\r\ndef level_order(goc):          # duyệt theo TỪNG TẦNG, dùng Queue (chương 19)\r\n    if not goc: return []\r\n    ket_qua, hang_doi = [], deque([goc])\r\n    while hang_doi:\r\n        node = hang_doi.popleft()\r\n        ket_qua.append(node.gia_tri)\r\n        if node.trai: hang_doi.append(node.trai)\r\n        if node.phai: hang_doi.append(node.phai)\r\n    return ket_qua\r\n\r\nprint(level_order(goc))   # [1, 2, 3, 4, 5]</code></pre>\r\n      </div>\r\n\r\n      <div class=\"box tip\">\r\n        <div class=\"box-title\">Mẹo ghi nhớ</div>\r\n        <strong>Inorder</strong> có tính chất đặc biệt trên BST (chương 21): luôn cho kết quả đã sắp xếp. <strong>Postorder</strong> thường dùng khi cần xử lý node con trước khi xử lý node cha (VD: tính kích thước thư mục, giải phóng bộ nhớ cây).\r\n      </div>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 20</h4>\r\n        <p>Binary Tree có 3 kiểu duyệt DFS (pre/in/post-order, dùng đệ quy) và duyệt BFS theo tầng (dùng Queue) — mỗi kiểu phù hợp cho mục đích xử lý khác nhau.</p>\r\n      </div>"
      },
      "quiz": null
    },
    {
      "id": "chapter21",
      "title": "Binary Search Tree (BST)",
      "type": "chi-tiet",
      "side": "right",
      "parent": "cay",
      "chapter": "thuat-toan/chapter21.html",
      "summary": "Cây nhị phân với ràng buộc đặc biệt: trái luôn nhỏ hơn gốc, phải luôn lớn hơn gốc — cho phép tìm kiếm O(log n).",
      "time": 10,
      "related": [
        "chapter22"
      ],
      "comingSoon": false,
      "source": {
        "summary": "BST giữ ràng buộc trái-nhỏ/phải-lớn, cho phép tìm kiếm O(log n) khi cân bằng. Xóa node có đủ 2 con là trường hợp phức tạp nhất, cần tìm giá trị kế thừa (successor) để thay thế.",
        "code": "class BSTNode:\r\n    def __init__(self, gia_tri):\r\n        self.gia_tri = gia_tri\r\n        self.trai = None\r\n        self.phai = None\r\n\r\ndef them(node, gia_tri):\r\n    if node is None:\r\n        return BSTNode(gia_tri)\r\n    if gia_tri < node.gia_tri:\r\n        node.trai = them(node.trai, gia_tri)\r\n    else:\r\n        node.phai = them(node.phai, gia_tri)\r\n    return node\r\n\r\ndef tim_kiem(node, gia_tri):\r\n    if node is None or node.gia_tri == gia_tri:\r\n        return node\r\n    if gia_tri < node.gia_tri:\r\n        return tim_kiem(node.trai, gia_tri)      # chỉ cần đi MỘT NHÁNH, không cần xét nhánh kia\r\n    return tim_kiem(node.phai, gia_tri)\r\n\r\ngoc = None\r\nfor x in [5, 3, 8, 1, 4, 7, 9]:\r\n    goc = them(goc, x)\r\n\r\nprint(tim_kiem(goc, 7) is not None)   # True",
        "goals": [
          "Xóa node trong BST — trường hợp phức tạp nhất"
        ],
        "content": "<div class=\"code-wrap\">\r\n        <span class=\"code-label\">bst.py</span>\r\n        \r\n        <pre><code>class BSTNode:\r\n    def __init__(self, gia_tri):\r\n        self.gia_tri = gia_tri\r\n        self.trai = None\r\n        self.phai = None\r\n\r\ndef them(node, gia_tri):\r\n    if node is None:\r\n        return BSTNode(gia_tri)\r\n    if gia_tri < node.gia_tri:\r\n        node.trai = them(node.trai, gia_tri)\r\n    else:\r\n        node.phai = them(node.phai, gia_tri)\r\n    return node\r\n\r\ndef tim_kiem(node, gia_tri):\r\n    if node is None or node.gia_tri == gia_tri:\r\n        return node\r\n    if gia_tri < node.gia_tri:\r\n        return tim_kiem(node.trai, gia_tri)      # chỉ cần đi MỘT NHÁNH, không cần xét nhánh kia\r\n    return tim_kiem(node.phai, gia_tri)\r\n\r\ngoc = None\r\nfor x in [5, 3, 8, 1, 4, 7, 9]:\r\n    goc = them(goc, x)\r\n\r\nprint(tim_kiem(goc, 7) is not None)   # True</code></pre>\r\n      </div>\r\n\r\n      <h3>Xóa node trong BST — trường hợp phức tạp nhất</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">bst_xoa.py</span>\r\n        \r\n        <pre><code>def tim_min(node):                   # tìm giá trị nhỏ nhất - luôn ở TẬN CÙNG BÊN TRÁI\r\n    while node.trai:\r\n        node = node.trai\r\n    return node\r\n\r\ndef xoa(node, gia_tri):\r\n    if node is None:\r\n        return None\r\n    if gia_tri < node.gia_tri:\r\n        node.trai = xoa(node.trai, gia_tri)\r\n    elif gia_tri > node.gia_tri:\r\n        node.phai = xoa(node.phai, gia_tri)\r\n    else:                                  # đã tìm thấy node cần xóa - 3 trường hợp:\r\n        if node.trai is None:                # TH1: không có con trái -> thay bằng con phải\r\n            return node.phai\r\n        elif node.phai is None:                # TH2: không có con phải -> thay bằng con trái\r\n            return node.trai\r\n        else:                                    # TH3: có ĐỦ 2 con -> phức tạp nhất\r\n            ke_thua = tim_min(node.phai)             # tìm giá trị nhỏ nhất bên nhánh phải\r\n            node.gia_tri = ke_thua.gia_tri              # thay giá trị node bằng giá trị đó\r\n            node.phai = xoa(node.phai, ke_thua.gia_tri)   # rồi xóa node kế thừa (giờ đã trùng)\r\n    return node</code></pre>\r\n      </div>\r\n\r\n      <div class=\"box important\">\r\n        <div class=\"box-title\">Quan trọng</div>\r\n        Độ phức tạp của BST (tìm kiếm/thêm/xóa) là <strong>O(log n) chỉ khi cây cân bằng</strong>. Nếu thêm dữ liệu đã sắp xếp sẵn vào BST thông thường, cây sẽ suy biến thành một danh sách liên kết — độ phức tạp tệ đi thành O(n). Đây là lý do cần AVL Tree (chương 22).\r\n      </div>\r\n\r\n      \r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 21</h4>\r\n        <p>BST giữ ràng buộc trái-nhỏ/phải-lớn, cho phép tìm kiếm O(log n) khi cân bằng. Xóa node có đủ 2 con là trường hợp phức tạp nhất, cần tìm giá trị kế thừa (successor) để thay thế.</p>\r\n      </div>"
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
      "summary": "BST tự động \"cân bằng lại\" sau mỗi lần thêm/xóa — đảm bảo O(log n) LUÔN ĐÚNG, không suy biến như BST thường.",
      "time": 10,
      "related": [
        "chapter21"
      ],
      "comingSoon": false,
      "source": {
        "summary": "AVL Tree tự cân bằng bằng các phép xoay (rotation) sau mỗi lần thêm/xóa, đảm bảo hệ số cân bằng luôn trong [-1,1] — giữ O(log n) trong MỌI trường hợp, khắc phục nhược điểm suy biến của BST thường.",
        "code": "def chieu_cao(node):\r\n    return node.chieu_cao if node else 0\r\n\r\ndef he_so_can_bang(node):\r\n    return chieu_cao(node.trai) - chieu_cao(node.phai)\r\n\r\ndef xoay_phai(y):                        # xoay để cân bằng lại khi lệch trái quá nhiều\r\n    x = y.trai\r\n    T2 = x.phai\r\n    x.phai = y\r\n    y.trai = T2\r\n    y.chieu_cao = 1 + max(chieu_cao(y.trai), chieu_cao(y.phai))\r\n    x.chieu_cao = 1 + max(chieu_cao(x.trai), chieu_cao(x.phai))\r\n    return x                                # x trở thành gốc mới của nhánh con này\r\n\r\ndef xoay_trai(x):                        # xoay để cân bằng lại khi lệch phải quá nhiều\r\n    y = x.phai\r\n    T2 = y.trai\r\n    y.trai = x\r\n    x.phai = T2\r\n    x.chieu_cao = 1 + max(chieu_cao(x.trai), chieu_cao(x.phai))\r\n    y.chieu_cao = 1 + max(chieu_cao(y.trai), chieu_cao(y.phai))\r\n    return y",
        "goals": [
          "Hệ số cân bằng (Balance Factor)",
          "4 trường hợp mất cân bằng cần xử lý"
        ],
        "content": "<h3>Hệ số cân bằng (Balance Factor)</h3>\r\n      <p>Với mỗi node, <code>hệ số cân bằng = chiều cao(nhánh trái) - chiều cao(nhánh phải)</code>. Cây AVL yêu cầu hệ số này luôn nằm trong khoảng <strong>[-1, 0, 1]</strong> ở MỌI node.</p>\r\n\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">avl_rotation.py</span>\r\n        \r\n        <pre><code>def chieu_cao(node):\r\n    return node.chieu_cao if node else 0\r\n\r\ndef he_so_can_bang(node):\r\n    return chieu_cao(node.trai) - chieu_cao(node.phai)\r\n\r\ndef xoay_phai(y):                        # xoay để cân bằng lại khi lệch trái quá nhiều\r\n    x = y.trai\r\n    T2 = x.phai\r\n    x.phai = y\r\n    y.trai = T2\r\n    y.chieu_cao = 1 + max(chieu_cao(y.trai), chieu_cao(y.phai))\r\n    x.chieu_cao = 1 + max(chieu_cao(x.trai), chieu_cao(x.phai))\r\n    return x                                # x trở thành gốc mới của nhánh con này\r\n\r\ndef xoay_trai(x):                        # xoay để cân bằng lại khi lệch phải quá nhiều\r\n    y = x.phai\r\n    T2 = y.trai\r\n    y.trai = x\r\n    x.phai = T2\r\n    x.chieu_cao = 1 + max(chieu_cao(x.trai), chieu_cao(x.phai))\r\n    y.chieu_cao = 1 + max(chieu_cao(y.trai), chieu_cao(y.phai))\r\n    return y</code></pre>\r\n      </div>\r\n\r\n      <h3>4 trường hợp mất cân bằng cần xử lý</h3>\r\n      <table>\r\n        <tr><th>Trường hợp</th><th>Cách xử lý</th></tr>\r\n        <tr><td>Left-Left (lệch trái của trái)</td><td>Xoay phải MỘT LẦN</td></tr>\r\n        <tr><td>Right-Right (lệch phải của phải)</td><td>Xoay trái MỘT LẦN</td></tr>\r\n        <tr><td>Left-Right (lệch trái rồi phải)</td><td>Xoay trái nhánh con, rồi xoay phải</td></tr>\r\n        <tr><td>Right-Left (lệch phải rồi trái)</td><td>Xoay phải nhánh con, rồi xoay trái</td></tr>\r\n      </table>\r\n\r\n      <div class=\"box note\">\r\n        <div class=\"box-title\">Ghi chú thực tế</div>\r\n        Trong công việc hàng ngày, bạn hầu như <strong>không bao giờ tự cài đặt AVL Tree từ đầu</strong> — hiểu nguyên lý là đủ. Các ngôn ngữ/thư viện đã có cấu trúc cân bằng sẵn (VD: <code>TreeMap</code> trong Java dùng Red-Black Tree, một biến thể cây cân bằng khác).\r\n      </div>\r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 22</h4>\r\n        <p>AVL Tree tự cân bằng bằng các phép xoay (rotation) sau mỗi lần thêm/xóa, đảm bảo hệ số cân bằng luôn trong [-1,1] — giữ O(log n) trong MỌI trường hợp, khắc phục nhược điểm suy biến của BST thường.</p>\r\n      </div>"
      },
      "quiz": null
    },
    {
      "id": "chapter23",
      "title": "Heap & Priority Queue",
      "type": "chi-tiet",
      "side": "right",
      "parent": "cay",
      "chapter": "thuat-toan/chapter23.html",
      "summary": "Cây nhị phân đặc biệt luôn giữ phần tử ưu tiên nhất ở gốc — nền tảng của hàng đợi ưu tiên và Heap Sort (đã học ở chương 9).",
      "time": 10,
      "related": [
        "chapter09"
      ],
      "comingSoon": false,
      "source": {
        "summary": "Heap giữ phần tử ưu tiên nhất ở gốc, thao tác thêm/lấy đạt O(log n). Priority Queue (cài bằng heap) dùng cho lập lịch theo độ ưu tiên, tìm Top-K, và là thành phần cốt lõi của thuật toán Dijkstra sắp học.",
        "code": "import heapq\r\n\r\nmin_heap = [5, 2, 8, 1, 9]\r\nheapq.heapify(min_heap)              # biến list thành min-heap tại chỗ, O(n)\r\nprint(min_heap[0])                      # phần tử NHỎ NHẤT luôn ở gốc -> 1\r\n\r\nheapq.heappush(min_heap, 0)              # thêm - O(log n)\r\nprint(heapq.heappop(min_heap))             # lấy + xóa phần tử nhỏ nhất - O(log n) -> 0\r\n\r\nprint(heapq.nsmallest(3, [9,3,7,1,8,2]))    # 3 phần tử nhỏ nhất -> [1, 2, 3]",
        "goals": [
          "Ứng dụng thực tế: Hệ thống ưu tiên xử lý ticket hỗ trợ",
          "Ứng dụng: Tìm K phần tử lớn nhất (Top-K)"
        ],
        "content": "<div class=\"code-wrap\">\r\n        <span class=\"code-label\">heap_module.py</span>\r\n        \r\n        <pre><code>import heapq\r\n\r\nmin_heap = [5, 2, 8, 1, 9]\r\nheapq.heapify(min_heap)              # biến list thành min-heap tại chỗ, O(n)\r\nprint(min_heap[0])                      # phần tử NHỎ NHẤT luôn ở gốc -> 1\r\n\r\nheapq.heappush(min_heap, 0)              # thêm - O(log n)\r\nprint(heapq.heappop(min_heap))             # lấy + xóa phần tử nhỏ nhất - O(log n) -> 0\r\n\r\nprint(heapq.nsmallest(3, [9,3,7,1,8,2]))    # 3 phần tử nhỏ nhất -> [1, 2, 3]</code></pre>\r\n      </div>\r\n\r\n      <h3>Ứng dụng thực tế: Hệ thống ưu tiên xử lý ticket hỗ trợ</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">priority_queue_demo.py</span>\r\n        \r\n        <pre><code>import heapq\r\n\r\nhang_doi = []\r\nheapq.heappush(hang_doi, (1, \"Server sập - khẩn cấp\"))      # (độ ưu tiên, mô tả)\r\nheapq.heappush(hang_doi, (3, \"Yêu cầu thêm tính năng\"))\r\nheapq.heappush(hang_doi, (2, \"Lỗi hiển thị giao diện\"))\r\n\r\nwhile hang_doi:\r\n    uu_tien, mo_ta = heapq.heappop(hang_doi)\r\n    print(f\"[Ưu tiên {uu_tien}] {mo_ta}\")\r\n# Xử lý ĐÚNG THỨ TỰ ưu tiên, không phải thứ tự đưa vào</code></pre>\r\n      </div>\r\n\r\n      <h3>Ứng dụng: Tìm K phần tử lớn nhất (Top-K)</h3>\r\n      <div class=\"code-wrap\">\r\n        <span class=\"code-label\">top_k.py</span>\r\n        \r\n        <pre><code>import heapq\r\n\r\ndef top_k_lon_nhat(ds, k):\r\n    return heapq.nlargest(k, ds)           # hiệu quả hơn sort() toàn bộ rồi lấy k phần tử\r\n\r\nprint(top_k_lon_nhat([5, 2, 8, 1, 9, 3], 3))   # [9, 8, 5]</code></pre>\r\n      </div>\r\n\r\n      <div class=\"box tip\">\r\n        <div class=\"box-title\">Mẹo ghi nhớ</div>\r\n        Dấu hiệu nhận biết bài toán cần Heap/Priority Queue: cần liên tục lấy ra phần tử <strong>\"tốt nhất/ưu tiên nhất\"</strong> trong một tập hợp đang thay đổi động — lập lịch, thuật toán Dijkstra (chương Đồ thị), tìm K phần tử lớn/nhỏ nhất.\r\n      </div>\r\n\r\n      \r\n\r\n      <div class=\"summary-box\">\r\n        <h4>📌 Tổng kết chương 23</h4>\r\n        <p>Heap giữ phần tử ưu tiên nhất ở gốc, thao tác thêm/lấy đạt O(log n). Priority Queue (cài bằng heap) dùng cho lập lịch theo độ ưu tiên, tìm Top-K, và là thành phần cốt lõi của thuật toán Dijkstra sắp học.</p>\r\n      </div>\r\n\r\n      <div class=\"next-hint\">\r\n        ✅ Đã hoàn thành 23 chương (Nền tảng + Sắp xếp + Tìm kiếm + Cấu trúc tuyến tính + Cây). Đang tiếp tục ngay với <strong>Phần 6 — Đồ thị (BFS, DFS, Dijkstra, MST)</strong>, không dừng lại.\r\n      </div>"
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
