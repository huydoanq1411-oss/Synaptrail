/* Single runtime source. Chapter excerpts: node scripts/sync-algorithm-roadmap.cjs */
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
        "quiz": [
          {
            "answer": 2,
            "question": "1. Định nghĩa thuật toán trong bài là gì?",
            "options": [
              "A. Mọi câu mô tả bất kỳ",
              "B. Chỉ chương trình viết bằng Python",
              "C. Chuỗi bước hữu hạn, rõ ràng, có thứ tự để giải quyết vấn đề",
              "D. Một thiết bị phần cứng"
            ],
            "explanation": "Giải thích đáp án A. Sai: Một mô tả mơ hồ chưa đáp ứng các tính chất. B. Sai: Thuật toán độc lập với ngôn ngữ. C. Đúng: đây là định nghĩa nêu trong bài. D. Sai: Bài mô tả cách giải quyết, không phải thiết bị."
          },
          {
            "answer": 0,
            "question": "2. Tính hữu hạn yêu cầu điều gì?",
            "options": [
              "A. Kết thúc sau số bước hữu hạn",
              "B. Luôn dùng đúng một dòng code",
              "C. Chỉ nhận một đầu vào",
              "D. Phải viết bằng C++"
            ],
            "explanation": "Giải thích đáp án A. Đúng: đó là finiteness. B. Sai: Không có yêu cầu một dòng. C. Sai: Bài cho phép không hoặc nhiều đầu vào. D. Sai: Ngôn ngữ không quyết định tính hữu hạn."
          },
          {
            "answer": 1,
            "question": "3. Hướng dẫn lắp ráp đánh số rõ từng bước và có bước kết thúc minh họa điều gì?",
            "options": [
              "A. Chỉ thuật toán mới phải là Python",
              "B. Một quy trình có thứ tự, rõ ràng và hữu hạn",
              "C. Quy trình không cần đầu ra",
              "D. Thiếu khả thi vì không có compiler"
            ],
            "explanation": "Giải thích đáp án A. Sai: Ví dụ đời thường không cần ngôn ngữ lập trình. B. Đúng: các đặc điểm phù hợp định nghĩa. C. Sai: Mục tiêu lắp ráp vẫn là kết quả cần đạt. D. Sai: Tính khả thi không phụ thuộc việc có compiler."
          },
          {
            "answer": 3,
            "question": "4. Bạn đã hiểu cách giải một bài toán và muốn viết bằng Java thay Python. Điều gì giữ nguyên?",
            "options": [
              "A. Mọi ký hiệu cú pháp Python",
              "B. Tên executable trên máy",
              "C. Đuôi file bắt buộc",
              "D. Ý tưởng và các bước của thuật toán"
            ],
            "explanation": "Giải thích đáp án A. Sai: Cú pháp giữa hai ngôn ngữ khác nhau. B. Sai: Công cụ chạy không phải bản chất cách giải. C. Sai: Đuôi file thay theo ngôn ngữ. D. Đúng: cách giải có thể triển khai bằng ngôn ngữ khác."
          },
          {
            "answer": 0,
            "question": "5. Bước “xử lý cho tốt rồi làm tiếp” vi phạm tính chất nào rõ nhất?",
            "options": [
              "A. Rõ ràng",
              "B. Bắt buộc dùng nhiều ngôn ngữ",
              "C. Bắt buộc có giao diện",
              "D. Bắt buộc có mạng"
            ],
            "explanation": "Giải thích đáp án A. Đúng: chưa xác định cụ thể thao tác cần làm. B. Sai: Bài không nêu tính chất này. C. Sai: Giao diện không thuộc năm tính chất. D. Sai: Bài không yêu cầu mạng."
          }
        ],
        "goals": [
          "Định nghĩa",
          "5 tính chất của một thuật toán đúng",
          "Tại sao học thuật toán quan trọng?"
        ]
      }
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
        "quiz": [
          {
            "answer": 1,
            "question": "1. Big O trong chương dùng để mô tả điều gì?",
            "options": [
              "A. Số giây chính xác trên mọi máy",
              "B. Tốc độ tăng trưởng theo kích thước đầu vào",
              "C. Tên ngôn ngữ lập trình",
              "D. Màu của đoạn code"
            ],
            "explanation": "Giải thích đáp án A. Sai: Thời gian thực tế còn phụ thuộc môi trường. B. Đúng: Big O mô tả sự tăng trưởng theo n. C. Sai: Không phải thước đo ngôn ngữ. D. Sai: Không liên quan phân tích hiệu năng."
          },
          {
            "answer": 3,
            "question": "2. Lấy phần tử đầu của danh sách không rỗng được bài xếp vào lớp nào?",
            "options": [
              "A. O(n²)",
              "B. O(n)",
              "C. O(2ⁿ)",
              "D. O(1)"
            ],
            "explanation": "Giải thích đáp án A. Sai: Không có hai vòng lặp. B. Sai: Không duyệt hết danh sách. C. Sai: Không có cấu trúc tăng mũ. D. Đúng: ví dụ dùng một truy cập ds[0]."
          },
          {
            "answer": 0,
            "question": "3. Tìm kiếm tuyến tính khi target không có cần xét bao nhiêu phần tử?",
            "options": [
              "A. Tối đa n, nên O(n)",
              "B. Luôn một phần tử, nên O(1)",
              "C. n² phần tử",
              "D. 2ⁿ phần tử"
            ],
            "explanation": "Giải thích đáp án A. Đúng: phải duyệt hết để kết luận không có. B. Sai: Target vắng mặt không cho dừng ở phần tử đầu. C. Sai: Ví dụ chỉ có một vòng lặp. D. Sai: Không có cây nhánh tăng mũ."
          },
          {
            "answer": 2,
            "question": "4. Hàm in_tat_ca_cap trong bài có hai vòng lặp qua cùng ds. Độ phức tạp là gì?",
            "options": [
              "A. O(1)",
              "B. O(n)",
              "C. O(n²)",
              "D. O(log n)"
            ],
            "explanation": "Giải thích đáp án A. Sai: Số lần in tăng theo dữ liệu. B. Sai: Mỗi phần tử ngoài còn duyệt toàn danh sách bên trong. C. Đúng: có n lần nhân n lần. D. Sai: Không có bước chia đôi kích thước."
          },
          {
            "answer": 1,
            "question": "5. Kết luận “O(n) nghĩa là luôn chạy đúng n giây” sai ở đâu?",
            "options": [
              "A. Big O không có quan hệ với kích thước",
              "B. Big O không ấn định thời gian bằng giây",
              "C. O(n) luôn là O(2ⁿ)",
              "D. Mọi máy đều có cùng tốc độ"
            ],
            "explanation": "Giải thích đáp án A. Sai: Nó có quan hệ với kích thước n. B. Đúng: máy và môi trường ảnh hưởng thời gian thực tế. C. Sai: Đây là hai lớp tăng trưởng khác nhau. D. Sai: Bài nêu rõ phụ thuộc phần cứng."
          }
        ],
        "goals": [
          "Tại sao không đo bằng giây?",
          "Các lớp độ phức tạp phổ biến (từ nhanh đến chậm)"
        ]
      }
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
        "quiz": [
          {
            "answer": 0,
            "question": "1. Hai vòng lặp liên tiếp được kết hợp theo quy tắc nào?",
            "options": [
              "A. Cộng chi phí rồi rút gọn",
              "B. Luôn nhân thành O(n²)",
              "C. Bỏ qua cả hai vòng",
              "D. Luôn thành O(1)"
            ],
            "explanation": "Giải thích đáp án A. Đúng: O(n)+O(n) rút gọn thành O(n). B. Sai: Nhân trong ví dụ áp dụng cho vòng lồng nhau. C. Sai: Vẫn phải tính công việc được thực hiện. D. Sai: Hai vòng duyệt n vẫn phụ thuộc n."
          },
          {
            "answer": 2,
            "question": "2. Khi hai đầu vào có kích thước n và m độc lập, nên biểu diễn ra sao?",
            "options": [
              "A. Luôn thay m bằng n",
              "B. Bỏ m vì viết sau",
              "C. Giữ cả n và m khi phân tích",
              "D. Dùng n×m cho mọi trường hợp"
            ],
            "explanation": "Giải thích đáp án A. Sai: Không biết hai đầu vào có cùng kích thước. B. Sai: Thứ tự viết không loại bỏ chi phí. C. Đúng: bài minh họa O(n+m). D. Sai: Chỉ nhân khi công việc thực sự lồng nhau như ví dụ."
          },
          {
            "answer": 1,
            "question": "3. Hai vòng dưới đây duyệt cùng ds có độ phức tạp nào?",
            "options": [
              "A. O(n²)",
              "B. O(n)",
              "C. O(1)",
              "D. O(2ⁿ)"
            ],
            "explanation": "Giải thích đáp án A. Sai: Các vòng không lồng nhau. B. Đúng: 2n rút gọn thành n. C. Sai: Có công việc cho từng phần tử. D. Sai: Không có tăng trưởng mũ."
          },
          {
            "answer": 3,
            "question": "4. Rút gọn 3n² + 5n + 100 theo quy tắc bài được gì?",
            "options": [
              "A. O(100)",
              "B. O(n)",
              "C. O(3)",
              "D. O(n²)"
            ],
            "explanation": "Giải thích đáp án A. Sai: Hằng số không áp đảo n² khi n tăng. B. Sai: Số hạng n² tăng nhanh hơn n. C. Sai: Không thể giữ hệ số mà bỏ biến n². D. Đúng: bỏ hệ số và số hạng bậc thấp hơn."
          },
          {
            "answer": 0,
            "question": "5. Bạn cho hai vòng lặp lồng nhau, mỗi vòng n lần, là O(n+n). Sai ở đâu?",
            "options": [
              "A. Vòng trong chạy n lần cho mỗi lần vòng ngoài",
              "B. Hai vòng lồng luôn chạy một lần",
              "C. Chỉ cần đổi tên biến",
              "D. Không được dùng vòng lặp trong thuật toán"
            ],
            "explanation": "Giải thích đáp án A. Đúng: n×n tạo O(n²). B. Sai: Mỗi vòng có n lần như đề bài. C. Sai: Tên biến không đổi số lần chạy. D. Sai: Bài dùng vòng lặp để minh họa."
          }
        ],
        "goals": [
          "Quy tắc cộng và nhân",
          "Quy tắc bỏ qua hằng số và số hạng bậc thấp"
        ]
      }
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
        "quiz": [
          {
            "answer": 3,
            "question": "1. Auxiliary space trong bài tính phần bộ nhớ nào?",
            "options": [
              "A. Chỉ số giây chạy",
              "B. Chỉ bộ nhớ của input",
              "C. Chỉ chiều dài tên biến",
              "D. Bộ nhớ bổ sung thuật toán cần"
            ],
            "explanation": "Giải thích đáp án A. Sai: Đó là thời gian, không phải bộ nhớ. B. Sai: Bài tập trung vào bộ nhớ bổ sung. C. Sai: Tên biến không phải phép đo này. D. Đúng: bao gồm cả stack khi phù hợp."
          },
          {
            "answer": 1,
            "question": "2. Mỗi lời gọi đệ quy đang chờ góp gì vào bộ nhớ?",
            "options": [
              "A. Một bản IDE mới",
              "B. Một khung trên call stack",
              "C. Luôn một danh sách kích thước n²",
              "D. Không tốn bộ nhớ nào"
            ],
            "explanation": "Giải thích đáp án A. Sai: Lời gọi không khởi động IDE. B. Đúng: các khung chờ tạo chi phí bộ nhớ. C. Sai: Ví dụ không tạo danh sách này. D. Sai: Bài nhấn mạnh chi phí stack."
          },
          {
            "answer": 0,
            "question": "3. Hàm tong_O1_space chỉ dùng biến tong để cộng dồn. Bộ nhớ bổ sung là gì?",
            "options": [
              "A. O(1)",
              "B. O(n)",
              "C. O(n²)",
              "D. O(2ⁿ)"
            ],
            "explanation": "Giải thích đáp án A. Đúng: số biến bổ sung không tăng theo n trong mô hình của bài. B. Sai: Hàm không tạo mảng mới n phần tử. C. Sai: Không có cấu trúc phụ kích thước n². D. Sai: Không có bộ nhớ tăng mũ trong ví dụ."
          },
          {
            "answer": 2,
            "question": "4. Hàm nhan_doi_On_space thêm một kết quả cho mỗi phần tử input. Bộ nhớ bổ sung là gì?",
            "options": [
              "A. O(1)",
              "B. O(log n)",
              "C. O(n)",
              "D. Không thể có đầu ra"
            ],
            "explanation": "Giải thích đáp án A. Sai: Danh sách kết quả tăng cùng số phần tử. B. Sai: Ví dụ không chia đôi bộ nhớ. C. Đúng: tạo danh sách mới n kết quả. D. Sai: Hàm trả danh sách kết quả."
          },
          {
            "answer": 1,
            "question": "5. Kết luận giai thừa đệ quy dùng O(1) space vì “không tạo mảng” bỏ sót gì?",
            "options": [
              "A. Bỏ sót màu code",
              "B. Bỏ sót các khung đệ quy trên stack",
              "C. Bỏ sót yêu cầu phải có GUI",
              "D. Bỏ sót vì mọi thuật toán đều O(n²)"
            ],
            "explanation": "Giải thích đáp án A. Sai: Màu không ảnh hưởng bộ nhớ thuật toán. B. Đúng: độ sâu theo n làm bộ nhớ O(n). C. Sai: Ví dụ không cần giao diện. D. Sai: Bài có ví dụ O(1) và O(n)."
          }
        ],
        "goals": []
      }
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
        "quiz": [
          {
            "answer": 0,
            "question": "1. Bubble Sort trong bài so sánh những phần tử nào?",
            "options": [
              "A. Hai phần tử liền kề",
              "B. Chỉ phần tử đầu và cuối",
              "C. Chỉ các phần tử bằng nhau",
              "D. Mọi phần tử với pivot"
            ],
            "explanation": "Giải thích đáp án A. Đúng: đổi chỗ hàng xóm khi sai thứ tự. B. Sai: Đó không phải quy trình trong mẫu. C. Sai: Mẫu so sánh lớn hơn để sửa thứ tự. D. Sai: Chương không mô tả pivot cho Bubble Sort."
          },
          {
            "answer": 3,
            "question": "2. Thuật toán sắp xếp ổn định nghĩa là gì?",
            "options": [
              "A. Mọi phần tử phải giống nhau",
              "B. Không bao giờ có phép đổi chỗ",
              "C. Luôn chạy O(1)",
              "D. Giữ thứ tự tương đối của phần tử bằng nhau"
            ],
            "explanation": "Giải thích đáp án A. Sai: Ổn định không yêu cầu dữ liệu bằng nhau. B. Sai: Bubble Sort vẫn đổi chỗ. C. Sai: Ổn định nói về thứ tự, không phải độ phức tạp. D. Đúng: đó là định nghĩa trong chương."
          },
          {
            "answer": 1,
            "question": "3. Sau lượt ngoài đầu tiên của bubble_sort với [3, 1, 2], danh sách là gì?",
            "options": [
              "A. [1, 3, 2]",
              "B. [1, 2, 3]",
              "C. [3, 2, 1]",
              "D. [3, 1, 2]"
            ],
            "explanation": "Giải thích đáp án A. Sai: Đây mới là trạng thái sau lần so sánh đầu. B. Đúng: 3 đổi với 1 rồi với 2 trong cùng lượt. C. Sai: Mẫu sắp tăng, không sắp giảm. D. Sai: Có hai cặp sai thứ tự nên mẫu có đổi chỗ."
          },
          {
            "answer": 2,
            "question": "4. Lượt đầu Selection Sort với [3, 1, 2] sẽ chọn và đưa phần tử nào lên đầu?",
            "options": [
              "A. 3",
              "B. 2",
              "C. 1",
              "D. Không chọn phần tử nào"
            ],
            "explanation": "Giải thích đáp án A. Sai: 3 không nhỏ nhất trong phần chưa sắp. B. Sai: 1 còn nhỏ hơn 2. C. Đúng: tìm nhỏ nhất rồi đổi với phần tử đầu. D. Sai: Mẫu thực hiện chọn min ở lượt đầu."
          },
          {
            "answer": 0,
            "question": "5. Tại sao break vô điều kiện sau lượt đầu Bubble Sort là sai với dữ liệu chưa biết?",
            "options": [
              "A. Chỉ được dừng sớm khi lượt đó không có đổi chỗ",
              "B. Bubble Sort không được có break ở đâu cả",
              "C. Vì phải đổi sang Selection Sort luôn",
              "D. Vì tất cả input đều đã sắp"
            ],
            "explanation": "Giải thích đáp án A. Đúng: lượt có đổi chỗ chưa bảo đảm toàn bộ mảng đã xong. B. Sai: Mẫu có break với điều kiện thích hợp. C. Sai: Không cần đổi thuật toán để sửa điều kiện. D. Sai: Input chưa biết không bảo đảm đã sắp."
          }
        ],
        "goals": [
          "Bubble Sort — \"nổi bọt\"",
          "Selection Sort — \"chọn lựa\""
        ]
      }
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
        "quiz": [],
        "goals": []
      }
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
        "quiz": [],
        "goals": [
          "Trực quan hóa quá trình chia và trộn"
        ]
      }
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
        "quiz": [],
        "goals": [
          "Cách hoạt động"
        ]
      }
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
        "quiz": [
          {
            "answer": 2,
            "question": "1. Thuật toán nào đảm bảo sắp xếp tại chỗ (O(1) không gian phụ) VÀ O(n log n) mọi trường hợp?",
            "options": [
              "Merge Sort",
              "Quick Sort",
              "Heap Sort"
            ],
            "explanation": ""
          }
        ],
        "goals": []
      }
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
        "quiz": [],
        "goals": [
          "Counting Sort — đếm tần suất",
          "Radix Sort — sắp xếp theo từng chữ số"
        ]
      }
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
        "quiz": [
          {
            "answer": 1,
            "question": "1. Thuật toán nào phù hợp nhất khi cần sắp xếp ỔN ĐỊNH và không lo về bộ nhớ?",
            "options": [
              "Quick Sort",
              "Merge Sort",
              "Heap Sort"
            ],
            "explanation": ""
          }
        ],
        "goals": [
          "Hướng dẫn lựa chọn thực tế"
        ]
      }
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
        "quiz": [],
        "goals": []
      }
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
        "quiz": [
          {
            "answer": 1,
            "question": "1. Điều kiện bắt buộc để Binary Search hoạt động đúng là gì?",
            "options": [
              "Dữ liệu phải là số nguyên",
              "Dữ liệu phải đã được sắp xếp",
              "Dữ liệu phải không có phần tử trùng lặp"
            ],
            "explanation": ""
          }
        ],
        "goals": [
          "Trực quan hóa quá trình tìm kiếm"
        ]
      }
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
        "quiz": [],
        "goals": [
          "Tìm vị trí chèn (Lower Bound)",
          "Tìm kiếm trong mảng xoay (Rotated Sorted Array)",
          "Binary Search trên đáp số (Binary Search on Answer)"
        ]
      }
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
        "quiz": [
          {
            "answer": 0,
            "question": "1. Độ phức tạp tra cứu TRUNG BÌNH của hash table (dict/HashMap) là gì?",
            "options": [
              "O(1)",
              "O(log n)",
              "O(n)"
            ],
            "explanation": ""
          }
        ],
        "goals": [
          "Hash Function là gì?",
          "Xung đột hash (Collision) và cách xử lý",
          "Ứng dụng: Two Sum tối ưu bằng Hashing"
        ]
      }
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
        "quiz": [],
        "goals": [
          "Array (Mảng) — lưu liên tục trong bộ nhớ",
          "Linked List (Danh sách liên kết) — lưu rải rác, nối bằng con trỏ"
        ]
      }
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
        "quiz": [],
        "goals": [
          "Singly Linked List — liên kết một chiều",
          "Doubly Linked List — liên kết hai chiều"
        ]
      }
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
        "quiz": [],
        "goals": [
          "Ứng dụng 1: Kiểm tra ngoặc hợp lệ",
          "Ứng dụng 2: Chức năng Undo (hoàn tác)",
          "Ứng dụng 3: Duyệt DFS trên đồ thị (xem lại ở phần Đồ thị)"
        ]
      }
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
        "quiz": [
          {
            "answer": 1,
            "question": "1. Cấu trúc dữ liệu nào phù hợp để mô phỏng hàng đợi mua vé (ai xếp hàng trước được phục vụ trước)?",
            "options": [
              "Stack (LIFO)",
              "Queue (FIFO)",
              "Cả hai đều như nhau"
            ],
            "explanation": ""
          }
        ],
        "goals": [
          "Ứng dụng: Hệ thống xếp hàng in tài liệu",
          "Deque (Double-Ended Queue) — hàng đợi hai đầu"
        ]
      }
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
        "quiz": [],
        "goals": [
          "Cài đặt cơ bản",
          "3 kiểu duyệt DFS (Depth-First)",
          "Duyệt BFS (theo chiều rộng, từng tầng)"
        ]
      }
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
        "quiz": [
          {
            "answer": 1,
            "question": "1. Duyệt inorder trên một BST cho kết quả gì?",
            "options": [
              "Ngẫu nhiên, không có quy luật",
              "Danh sách đã sắp xếp tăng dần",
              "Danh sách đã sắp xếp giảm dần"
            ],
            "explanation": ""
          }
        ],
        "goals": [
          "Xóa node trong BST — trường hợp phức tạp nhất"
        ]
      }
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
        "quiz": [],
        "goals": [
          "Hệ số cân bằng (Balance Factor)",
          "4 trường hợp mất cân bằng cần xử lý"
        ]
      }
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
        "quiz": [
          {
            "answer": 0,
            "question": "1. Độ phức tạp thêm một phần tử vào Heap là gì?",
            "options": [
              "O(log n)",
              "O(1)",
              "O(n)"
            ],
            "explanation": ""
          }
        ],
        "goals": [
          "Ứng dụng thực tế: Hệ thống ưu tiên xử lý ticket hỗ trợ",
          "Ứng dụng: Tìm K phần tử lớn nhất (Top-K)"
        ]
      }
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
