/* Quiz questions are loaded only by thuat-toan/quiz.html. */
globalThis.SynaptrailAlgorithmQuizzes = {
  "course": "thuat-toan",
  "chapters": {
    "chapter01": {
      "title": "Thuật toán là gì?",
      "questions": [
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
      ]
    },
    "chapter02": {
      "title": "Big O Notation",
      "questions": [
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
      ]
    },
    "chapter03": {
      "title": "Phân tích độ phức tạp",
      "questions": [
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
      ]
    },
    "chapter04": {
      "title": "Độ phức tạp không gian (Space Complexity)",
      "questions": [
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
      ]
    },
    "chapter05": {
      "title": "Bubble Sort & Selection Sort",
      "questions": [
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
      ]
    },
    "chapter09": {
      "title": "Heap Sort",
      "questions": [
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
      ]
    },
    "chapter11": {
      "title": "So sánh & lựa chọn thuật toán sắp xếp",
      "questions": [
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
      ]
    },
    "chapter13": {
      "title": "Binary Search",
      "questions": [
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
      ]
    },
    "chapter15": {
      "title": "Hashing & Tra cứu O(1)",
      "questions": [
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
      ]
    },
    "chapter19": {
      "title": "Queue & Deque",
      "questions": [
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
      ]
    },
    "chapter21": {
      "title": "Binary Search Tree (BST)",
      "questions": [
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
      ]
    },
    "chapter23": {
      "title": "Heap & Priority Queue",
      "questions": [
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
      ]
    }
  }
};
