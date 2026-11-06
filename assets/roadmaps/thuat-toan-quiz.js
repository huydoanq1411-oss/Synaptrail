/* Quiz questions are loaded only by thuat-toan/quiz.html. */
globalThis.SynaptrailAlgorithmQuizzes = {
  "course": "thuat-toan",
  "title": "Thuật toán & Cấu trúc dữ liệu",
  "chapters": {
    "chapter01": {
      "title": "Thuật toán là gì?",
      "questions": [
        {
          "question": "1. Mô hình tô màu bản đồ dùng cạnh biểu diễn điều gì?",
          "options": [
            "Hai vùng có cùng diện tích",
            "Hai vùng có chung biên giới",
            "Hai vùng cùng màu"
          ],
          "answer": 1,
          "explanation": "Đỉnh là vùng; cạnh thể hiện ràng buộc hai vùng kề nhau."
        },
        {
          "question": "2. Hàm ví dụ trả về gì khi không có mã cần tìm?",
          "options": [
            "0",
            "Bản ghi cuối",
            "null"
          ],
          "answer": 2,
          "explanation": "return null nằm sau vòng lặp."
        },
        {
          "question": "3. Thuật toán kết thúc có đồng nghĩa kết quả đúng không?",
          "options": [
            "Không",
            "Có",
            "Chỉ khi dùng JavaScript"
          ],
          "answer": 0,
          "explanation": "Hữu hạn và tính đúng là hai yêu cầu riêng."
        },
        {
          "question": "4. Chọn cấu trúc dữ liệu cần dựa vào đâu?",
          "options": [
            "Chỉ độ dài tên biến",
            "Thao tác, dữ liệu và tài nguyên",
            "Chỉ màu giao diện"
          ],
          "answer": 1,
          "explanation": "Phải phù hợp thông tin cần biểu diễn và cách xử lý."
        },
        {
          "question": "5. Bước nào nên làm trước cài đặt?",
          "options": [
            "Đổi đuôi tệp",
            "Chọn màu nút",
            "Xác định đầu vào, đầu ra và ràng buộc"
          ],
          "answer": 2,
          "explanation": "Hợp đồng bài toán quyết định cách thiết kế."
        }
      ]
    },
    "chapter02": {
      "title": "Big O Notation",
      "questions": [
        {
          "question": "1. Big O có tự quy định trường hợp xấu nhất không?",
          "options": [
            "Có",
            "Chỉ với mảng",
            "Không"
          ],
          "answer": 2,
          "explanation": "Phải nêu trường hợp riêng với ký hiệu cận."
        },
        {
          "question": "2. Cận chặt của 3n + 7 là gì?",
          "options": [
            "Θ(n)",
            "Θ(n²)",
            "Θ(1)"
          ],
          "answer": 0,
          "explanation": "Hệ số và hằng số không đổi bậc tăng trưởng."
        },
        {
          "question": "3. Θ diễn tả gì?",
          "options": [
            "Số giây chính xác",
            "Cận chặt hai phía",
            "Chỉ bộ nhớ"
          ],
          "answer": 1,
          "explanation": "Θ khác Big O chỉ là cận trên."
        },
        {
          "question": "4. Tìm tuyến tính thất bại trong n phần tử cần mấy so sánh khóa?",
          "options": [
            "log n",
            "1",
            "n"
          ],
          "answer": 2,
          "explanation": "Phải kiểm tra hết dãy."
        },
        {
          "question": "5. Phân tích trung bình cần thêm gì?",
          "options": [
            "Giả thiết phân bố đầu vào",
            "Tên máy tính",
            "Một ảnh chụp"
          ],
          "answer": 0,
          "explanation": "Không thể suy ra kỳ vọng nếu chưa biết cách chọn đầu vào."
        }
      ]
    },
    "chapter03": {
      "title": "Phân tích độ phức tạp",
      "questions": [
        {
          "question": "1. Vòng j < i cho tổng bao nhiêu lượt?",
          "options": [
            "n(n−1)/2",
            "n",
            "2ⁿ"
          ],
          "answer": 0,
          "explanation": "Tổng 0 + 1 + … + (n−1)."
        },
        {
          "question": "2. Chia đôi số dương mỗi bước có bao nhiêu bước theo bậc?",
          "options": [
            "Θ(n²)",
            "Θ(log n)",
            "Θ(n)"
          ],
          "answer": 1,
          "explanation": "Sau k bước miền giảm theo 2ᵏ."
        },
        {
          "question": "3. Hai vòng liên tiếp n và n² lượt có tổng bậc nào?",
          "options": [
            "Θ(log n)",
            "Θ(n³)",
            "Θ(n²)"
          ],
          "answer": 2,
          "explanation": "Cộng n+n² rồi giữ số hạng trội."
        },
        {
          "question": "4. Đo thời gian một lần có chứng minh cận cho mọi đầu vào không?",
          "options": [
            "Không",
            "Có",
            "Có nếu máy nhanh"
          ],
          "answer": 0,
          "explanation": "Thực nghiệm chỉ cho bằng chứng trên điều kiện đã thử."
        },
        {
          "question": "5. Tìm thành công đều xác suất ở mọi vị trí có số so sánh trung bình nào?",
          "options": [
            "n²",
            "(n+1)/2",
            "1"
          ],
          "answer": 1,
          "explanation": "Lấy trung bình các số 1 đến n."
        }
      ]
    },
    "chapter04": {
      "title": "Độ phức tạp không gian (Space Complexity)",
      "questions": [
        {
          "question": "1. Hàm daoTaiCho cần bộ nhớ phụ theo bậc nào?",
          "options": [
            "O(n)",
            "O(1)",
            "O(n²)"
          ],
          "answer": 1,
          "explanation": "Chỉ có hai chỉ số và lượng tạm cố định."
        },
        {
          "question": "2. b = a có tạo bản sao mảng không?",
          "options": [
            "Chỉ với mảng rỗng",
            "Có",
            "Không"
          ],
          "answer": 2,
          "explanation": "Hai biến cùng tham chiếu một mảng."
        },
        {
          "question": "3. Tạo bản sao n phần tử cần bộ nhớ nào?",
          "options": [
            "O(n)",
            "O(1)",
            "O(log n)"
          ],
          "answer": 0,
          "explanation": "Số ô bản sao tăng theo n."
        },
        {
          "question": "4. Đệ quy sâu n cần tính thêm bộ nhớ gì?",
          "options": [
            "Chỉ một biến",
            "Stack lời gọi O(n)",
            "Không cần bộ nhớ"
          ],
          "answer": 1,
          "explanation": "Mỗi lời gọi đang chờ giữ trạng thái riêng."
        },
        {
          "question": "5. Array đảo tại chỗ trả về gì trong ví dụ?",
          "options": [
            "Một chỉ số",
            "Luôn mảng mới",
            "Cùng mảng đã đổi"
          ],
          "answer": 2,
          "explanation": "return a không tạo bản sao."
        }
      ]
    },
    "chapter05": {
      "title": "Interchange, Selection & Bubble Sort",
      "questions": [
        {
          "question": "1. Thuật toán nào chọn min xong mới đổi?",
          "options": [
            "Bubble Sort",
            "Interchange Sort",
            "Selection Sort"
          ],
          "answer": 2,
          "explanation": "Selection lưu chỉ số min và đổi sau vòng quét."
        },
        {
          "question": "2. Bubble có cờ dừng chạy trên dãy đã sắp có cận chặt nào?",
          "options": [
            "Θ(n)",
            "Θ(n²)",
            "Θ(1)"
          ],
          "answer": 0,
          "explanation": "Vẫn cần một lượt so sánh để biết không phải đổi."
        },
        {
          "question": "3. Interchange đổi khi nào?",
          "options": [
            "Chỉ sau khi tìm hết min",
            "Ngay khi gặp a[j] nhỏ hơn a[i]",
            "Chỉ đổi cặp kề"
          ],
          "answer": 1,
          "explanation": "Đó là khác biệt với Selection và Bubble."
        },
        {
          "question": "4. Selection so sánh bao nhiêu lần theo công thức?",
          "options": [
            "2ⁿ",
            "n",
            "n(n−1)/2"
          ],
          "answer": 2,
          "explanation": "Các đoạn quét dài n−1,n−2,…,1."
        },
        {
          "question": "5. Vì sao Bubble dùng < thay vì <= khi so cặp ngược?",
          "options": [
            "Giữ thứ tự khóa bằng nhau",
            "Để đổi mọi khóa trùng",
            "Để tránh quét dãy"
          ],
          "answer": 0,
          "explanation": "Không đổi các phần tử bằng khóa giúp ổn định."
        }
      ]
    },
    "chapter06": {
      "title": "Insertion Sort & Shell Sort",
      "questions": [
        {
          "question": "1. Vì sao phải giữ key trước khi dịch?",
          "options": [
            "Để không mất giá trị cần chèn",
            "Để tăng kích thước mảng",
            "Để tạo đệ quy"
          ],
          "answer": 0,
          "explanation": "Các phép gán dịch có thể ghi đè vị trí ban đầu."
        },
        {
          "question": "2. Shell phải có lượt gap nào cuối cùng?",
          "options": [
            "0",
            "1",
            "n"
          ],
          "answer": 1,
          "explanation": "gap=1 đảm bảo toàn dãy được chèn trực tiếp."
        },
        {
          "question": "3. Insertion dãy đã sắp có thời gian nào?",
          "options": [
            "Θ(1)",
            "Θ(n²)",
            "Θ(n)"
          ],
          "answer": 2,
          "explanation": "Mỗi lượt chèn dừng gần như ngay, vẫn phải duyệt n phần tử."
        },
        {
          "question": "4. Điều kiện nào phải kiểm trước khi đọc a[j-gap]?",
          "options": [
            "j >= gap",
            "j < 0",
            "gap = 0"
          ],
          "answer": 0,
          "explanation": "Ngăn truy cập chỉ số âm."
        },
        {
          "question": "5. Độ phức tạp Shell phụ thuộc gì?",
          "options": [
            "Tên hàm",
            "Dãy gap",
            "Chỉ phần tử đầu"
          ],
          "answer": 1,
          "explanation": "Không thể gán cùng một cận chặt cho mọi lựa chọn gap."
        }
      ]
    },
    "chapter07": {
      "title": "Merge Sort",
      "questions": [
        {
          "question": "1. Muốn Merge Sort ổn định, khi khóa bằng nhau lấy bên nào trước?",
          "options": [
            "Bên phải",
            "Bên trái",
            "Bất kỳ"
          ],
          "answer": 1,
          "explanation": "Giữ phần tử xuất hiện trước trong dãy gốc."
        },
        {
          "question": "2. Độ dài run trong bottom-up tăng thế nào?",
          "options": [
            "Luôn bằng n",
            "1, 3, 5…",
            "1, 2, 4, 8…"
          ],
          "answer": 2,
          "explanation": "Mỗi lượt trộn hai run thành một run dài gấp đôi."
        },
        {
          "question": "3. Khi một nửa hết, bước merge cần làm gì?",
          "options": [
            "Nối phần dư của nửa còn lại",
            "Bỏ phần dư",
            "Bắt đầu lại"
          ],
          "answer": 0,
          "explanation": "Mọi phần tử đầu vào phải còn trong đầu ra."
        },
        {
          "question": "4. Merge Sort mảng cần bộ nhớ phụ nào?",
          "options": [
            "Luôn O(1)",
            "O(n)",
            "O(n²)"
          ],
          "answer": 1,
          "explanation": "Cần vùng chứa các phần tử được trộn."
        },
        {
          "question": "5. Run cuối thiếu phần tử cần xử lý thế nào?",
          "options": [
            "Đọc tới đủ độ dài dù vượt mảng",
            "Bỏ qua run",
            "Chặn biên theo độ dài thực"
          ],
          "answer": 2,
          "explanation": "Dãy có độ dài lẻ vẫn phải được giữ đủ."
        }
      ]
    },
    "chapter08": {
      "title": "Quick Sort",
      "questions": [
        {
          "question": "1. Sau đổi hai phần tử bằng pivot cần làm gì?",
          "options": [
            "Giữ nguyên i và j",
            "Xóa pivot",
            "Tăng i, giảm j"
          ],
          "answer": 2,
          "explanation": "Đảm bảo vòng lặp tiến triển."
        },
        {
          "question": "2. Quick Sort xấu nhất có thời gian nào?",
          "options": [
            "Θ(n²)",
            "Θ(log n)",
            "Θ(1)"
          ],
          "answer": 0,
          "explanation": "Phân hoạch lệch lặp lại có tổng chi phí bậc hai."
        },
        {
          "question": "3. Kiểm left >= right phải đặt ở đâu?",
          "options": [
            "Sau mọi đệ quy",
            "Trước khi đọc pivot",
            "Không cần"
          ],
          "answer": 1,
          "explanation": "Bảo vệ đoạn rỗng và đoạn một phần tử."
        },
        {
          "question": "4. Sau phân hoạch hai đầu, pivot có chắc nằm tại vị trí cuối không?",
          "options": [
            "Chỉ khi dãy rỗng",
            "Luôn có",
            "Không với biến thể này"
          ],
          "answer": 2,
          "explanation": "Đây không phải biến thể đặt pivot vào một vị trí duy nhất."
        },
        {
          "question": "5. Stack Quick Sort khi phân hoạch lệch có thể là bao nhiêu?",
          "options": [
            "O(n)",
            "Luôn O(1)",
            "Luôn O(log n)"
          ],
          "answer": 0,
          "explanation": "Đệ quy có thể sâu tuyến tính."
        }
      ]
    },
    "chapter09": {
      "title": "Heap Sort",
      "questions": [
        {
          "question": "1. Con trái của i trong mảng chỉ số 0 là gì?",
          "options": [
            "2i+1",
            "2i",
            "i+1"
          ],
          "answer": 0,
          "explanation": "Gốc 0 có hai con 1 và 2."
        },
        {
          "question": "2. Vì sao gọi siftDown với size=end?",
          "options": [
            "Tăng heap",
            "Loại vị trí đã sắp khỏi heap",
            "Đảo thứ tự"
          ],
          "answer": 1,
          "explanation": "Phần tử tại end đã ở đúng vị trí cuối."
        },
        {
          "question": "3. Xây heap từ dưới lên có chi phí nào?",
          "options": [
            "Θ(2ⁿ)",
            "Θ(n²)",
            "O(n)"
          ],
          "answer": 2,
          "explanation": "Đa số nút nằm gần lá, số lượt vun tổng là tuyến tính."
        },
        {
          "question": "4. Sift-down max-heap chọn con nào?",
          "options": [
            "Con lớn hơn",
            "Luôn con trái",
            "Luôn con phải"
          ],
          "answer": 0,
          "explanation": "Đổi với con lớn hơn để cha mới không nhỏ hơn con còn lại."
        },
        {
          "question": "5. Một max-heap có phải mảng đã sắp tăng không?",
          "options": [
            "Có",
            "Không",
            "Chỉ nếu có bảy nút"
          ],
          "answer": 1,
          "explanation": "Heap chỉ ràng buộc cha với con."
        }
      ]
    },
    "chapter10": {
      "title": "Counting Sort & Radix Sort",
      "questions": [
        {
          "question": "1. Một lượt Radix LSD phải có tính chất nào?",
          "options": [
            "Đảo ngẫu nhiên bucket",
            "Ổn định",
            "Chỉ nhận số nguyên tố"
          ],
          "answer": 1,
          "explanation": "Phải giữ thứ tự chữ số đã xử lý ở lượt trước."
        },
        {
          "question": "2. Chi phí Radix với d chữ số, cơ số b là gì?",
          "options": [
            "O(1)",
            "Luôn O(n log n)",
            "O(d(n+b))"
          ],
          "answer": 2,
          "explanation": "Mỗi lượt duyệt n phần tử và b bucket, lặp d lượt."
        },
        {
          "question": "3. Counting phụ thuộc kích thước miền nào?",
          "options": [
            "K",
            "Chỉ số chữ số d",
            "Tên biến"
          ],
          "answer": 0,
          "explanation": "Cần bảng tần suất cho các giá trị có thể xuất hiện."
        },
        {
          "question": "4. Vì sao không dùng fill([]) tạo bucket?",
          "options": [
            "Vì không cho phần tử 0",
            "Các ô cùng tham chiếu một mảng",
            "Vì chỉ tạo một số"
          ],
          "answer": 1,
          "explanation": "Array.from tạo từng bucket riêng."
        },
        {
          "question": "5. Ví dụ Radix nhận miền nào?",
          "options": [
            "Mọi đối tượng",
            "Mọi số thực âm",
            "Số nguyên không âm an toàn"
          ],
          "answer": 2,
          "explanation": "Kiểm tra đầu vào được nêu rõ trong kiemTra."
        }
      ]
    },
    "chapter11": {
      "title": "So sánh & lựa chọn thuật toán sắp xếp",
      "questions": [
        {
          "question": "1. Sắp theo điểm giảm dùng hiệu nào?",
          "options": [
            "a.ma + b.ma",
            "a.diem − b.diem",
            "b.diem − a.diem"
          ],
          "answer": 2,
          "explanation": "Điểm lớn phải đứng trước."
        },
        {
          "question": "2. Merge mảng đánh đổi điều gì để có cận O(n log n) ổn định?",
          "options": [
            "Bộ đệm phụ O(n)",
            "Không cần so sánh",
            "Luôn O(1) bộ nhớ"
          ],
          "answer": 0,
          "explanation": "Trộn mảng thường cần vùng chứa kết quả trung gian."
        },
        {
          "question": "3. Vì sao sao chép trước Array.sort?",
          "options": [
            "Để làm thuật toán luôn O(1)",
            "Giữ thứ tự mảng gốc",
            "Để bỏ bản ghi trùng"
          ],
          "answer": 1,
          "explanation": "sort sắp trực tiếp mảng được gọi."
        },
        {
          "question": "4. Sắp số bằng sort() không comparator có rủi ro gì?",
          "options": [
            "Tự xóa số âm",
            "Luôn sắp giảm",
            "So theo chuỗi"
          ],
          "answer": 2,
          "explanation": "Thứ tự chuỗi không giống thứ tự số."
        },
        {
          "question": "5. Tên tiếng Việt cần thống nhất gì?",
          "options": [
            "Quy tắc đối chiếu và trường tên",
            "Chỉ mã sinh viên",
            "Chỉ số lượng bản ghi"
          ],
          "answer": 0,
          "explanation": "Toàn họ tên và tên gọi là hai khóa khác nhau."
        }
      ]
    },
    "chapter12": {
      "title": "Linear Search",
      "questions": [
        {
          "question": "1. sentinelSearch trả gì nếu chỉ gặp khóa ở ô thêm?",
          "options": [
            "−1",
            "n",
            "0"
          ],
          "answer": 0,
          "explanation": "Ô n không thuộc dữ liệu gốc."
        },
        {
          "question": "2. Nén mảng dùng điều gì để không bỏ sót?",
          "options": [
            "Tăng hai lần sau khi xóa",
            "Chỉ số đọc xét từng ô ban đầu",
            "Dừng ở phần tử đầu"
          ],
          "answer": 1,
          "explanation": "Chỉ số ghi chỉ tăng khi giữ phần tử."
        },
        {
          "question": "3. Trả chỉ số 0 nghĩa là gì?",
          "options": [
            "Mảng rỗng",
            "Không tìm thấy",
            "Tìm thấy ở đầu"
          ],
          "answer": 2,
          "explanation": "Không được dùng truthiness để kiểm kết quả tìm."
        },
        {
          "question": "4. Sentinel bản sao dùng thêm bộ nhớ bao nhiêu?",
          "options": [
            "O(n)",
            "O(1)",
            "O(log n)"
          ],
          "answer": 0,
          "explanation": "Ví dụ tạo b=[...a,x]."
        },
        {
          "question": "5. Xóa bằng dịch trái liên tiếp cần chú ý gì?",
          "options": [
            "Luôn tăng thêm hai chỉ số",
            "Kiểm lại phần tử vừa dịch về",
            "Dừng sau xóa đầu tiên"
          ],
          "answer": 1,
          "explanation": "Nếu tăng luôn có thể bỏ sót phần tử cần xóa kế tiếp."
        }
      ]
    },
    "chapter13": {
      "title": "Binary Search",
      "questions": [
        {
          "question": "1. Mảng chứa khóa trùng có dùng Binary Search được không?",
          "options": [
            "Không bao giờ",
            "Có, nếu vẫn tăng không giảm",
            "Chỉ khi dài chẵn"
          ],
          "answer": 1,
          "explanation": "Khóa trùng không phá thứ tự cần thiết."
        },
        {
          "question": "2. Đoạn đóng cập nhật thế nào nếu a[mid] < x?",
          "options": [
            "right = mid − 1",
            "left = mid",
            "left = mid + 1"
          ],
          "answer": 2,
          "explanation": "Loại cả phần tử giữa vì đã biết nó nhỏ hơn khóa."
        },
        {
          "question": "3. Xóa giữa mảng sau Binary Search có tổng xấu nhất nào?",
          "options": [
            "O(n)",
            "O(log n)",
            "O(1)"
          ],
          "answer": 0,
          "explanation": "Dịch các phần tử sau vị trí xóa vẫn tuyến tính."
        },
        {
          "question": "4. Tìm trên mảng rỗng với ví dụ có an toàn không?",
          "options": [
            "Không, luôn đọc a[0]",
            "Có, vòng while không chạy",
            "Chỉ khi x=0"
          ],
          "answer": 1,
          "explanation": "left=0, right=−1 làm điều kiện sai ngay."
        },
        {
          "question": "5. Có phải luôn nên sắp trước một lần tìm không?",
          "options": [
            "Chỉ theo tên hàm",
            "Có",
            "Không, phải tính chi phí sắp"
          ],
          "answer": 2,
          "explanation": "Một lần tìm tuyến tính có thể tiết kiệm hơn sắp rồi tìm."
        }
      ]
    },
    "chapter14": {
      "title": "Biến thể Binary Search",
      "questions": [
        {
          "question": "1. upper_bound trả vị trí đầu thỏa điều kiện nào?",
          "options": [
            "a[i] < x",
            "a[i] >= x",
            "a[i] > x"
          ],
          "answer": 2,
          "explanation": "upper loại cả các phần tử bằng x."
        },
        {
          "question": "2. Số lần xuất hiện của x là gì?",
          "options": [
            "upper − lower",
            "upper + lower",
            "lower − 1"
          ],
          "answer": 0,
          "explanation": "Hai biên xác định đoạn nửa mở chứa các khóa bằng x."
        },
        {
          "question": "3. Không có phần tử >=x thì lower_bound trả gì?",
          "options": [
            "Luôn −1",
            "n",
            "0"
          ],
          "answer": 1,
          "explanation": "n là vị trí chèn sau cuối."
        },
        {
          "question": "4. Đoạn ban đầu của biến thể là gì?",
          "options": [
            "[1,n−1]",
            "[0,n]",
            "[0,n)"
          ],
          "answer": 2,
          "explanation": "Biên phải không thuộc đoạn đang xét."
        },
        {
          "question": "5. Tìm lần xuất hiện đầu tiên phải kiểm thêm gì?",
          "options": [
            "lower<n và a[lower]===x",
            "Chỉ lower>=0",
            "Không cần kiểm"
          ],
          "answer": 0,
          "explanation": "Vị trí chèn chưa chứng minh khóa có trong mảng."
        }
      ]
    },
    "chapter15": {
      "title": "Hashing & Bảng băm",
      "questions": [
        {
          "question": "1. Khi xóa trong dò tuần tự nên làm gì?",
          "options": [
            "Đặt tombstone",
            "Luôn đặt EMPTY",
            "Dừng mọi tìm kiếm"
          ],
          "answer": 0,
          "explanation": "Tombstone giữ đường dò cho khóa bị đẩy phía sau."
        },
        {
          "question": "2. Để băm kép ghé đủ m ô, bước cần gì?",
          "options": [
            "Luôn bằng 0",
            "Khác 0 và nguyên tố cùng nhau với m",
            "Luôn bằng m"
          ],
          "answer": 1,
          "explanation": "Nếu có ước chung, đường dò chỉ thăm một phần bảng."
        },
        {
          "question": "3. Băm phổ quát lấy xác suất theo đâu?",
          "options": [
            "Số màu của bảng",
            "Mỗi lần đọc cùng một khóa cố định",
            "Lựa chọn hàm trong họ H"
          ],
          "answer": 2,
          "explanation": "Định nghĩa áp dụng qua lựa chọn ngẫu nhiên hàm."
        },
        {
          "question": "4. Dò bậc hai có luôn thăm đủ m ô không?",
          "options": [
            "Không",
            "Có",
            "Chỉ vì dùng modulo"
          ],
          "answer": 0,
          "explanation": "Ví dụ m=8 chỉ có vài số dư bình phương."
        },
        {
          "question": "5. Khi đổi kích thước bảng cần làm gì?",
          "options": [
            "Chỉ nối thêm ô trống",
            "Băm và chèn lại từng khóa",
            "Giữ nguyên mọi địa chỉ cũ"
          ],
          "answer": 1,
          "explanation": "Hàm phụ thuộc m nên địa chỉ có thể thay đổi."
        }
      ]
    },
    "chapter16": {
      "title": "Array vs Linked List",
      "questions": [
        {
          "question": "1. Chèn sau nút đã biết có chi phí sửa liên kết nào?",
          "options": [
            "O(n²)",
            "O(1)",
            "O(log n)"
          ],
          "answer": 1,
          "explanation": "Không tính bước tìm nút vì nút đã biết."
        },
        {
          "question": "2. Danh sách vòng phải dừng duyệt khi nào?",
          "options": [
            "Sau một nút",
            "Luôn gặp null",
            "Quay về nút đầu"
          ],
          "answer": 2,
          "explanation": "Vòng hợp lệ không có liên kết cuối bằng null."
        },
        {
          "question": "3. Danh sách kép bổ sung trường gì?",
          "options": [
            "prev",
            "Chỉ size",
            "Chỉ một mảng"
          ],
          "answer": 0,
          "explanation": "prev trỏ về nút đứng trước."
        },
        {
          "question": "4. Truy cập nút thứ i của danh sách đơn cần gì?",
          "options": [
            "Đọc trực tiếp như a[i]",
            "Đi theo liên kết từ đầu",
            "Tìm theo heap"
          ],
          "answer": 1,
          "explanation": "Chi phí vị trí có thể tuyến tính."
        },
        {
          "question": "5. Danh sách có luôn ít tốn bộ nhớ hơn mảng không?",
          "options": [
            "Có nếu tên ngắn",
            "Có",
            "Không"
          ],
          "answer": 2,
          "explanation": "Mỗi nút còn chứa liên kết và chi phí cấp phát."
        }
      ]
    },
    "chapter17": {
      "title": "Cài đặt Linked List",
      "questions": [
        {
          "question": "1. Xóa nút duy nhất phải cập nhật gì?",
          "options": [
            "Chỉ tail",
            "Chỉ head",
            "Cả head và tail thành null"
          ],
          "answer": 2,
          "explanation": "Nếu giữ tail cũ thì trạng thái rỗng không nhất quán."
        },
        {
          "question": "2. Thứ tự chèn sau q là gì?",
          "options": [
            "node.next = q.next rồi q.next = node",
            "q.next = node rồi node.next = q.next",
            "Xóa q trước"
          ],
          "answer": 0,
          "explanation": "Phải giữ đường tới phần đuôi trước khi thay liên kết."
        },
        {
          "question": "3. Khi thêm sau tail cần cập nhật gì?",
          "options": [
            "Chỉ head",
            "tail thành nút mới",
            "Xóa danh sách"
          ],
          "answer": 1,
          "explanation": "Nếu không, các lần append sau sẽ nối sai."
        },
        {
          "question": "4. Không tìm thấy khóa để xóa thì ví dụ trả gì?",
          "options": [
            "Nút cuối",
            "true",
            "false"
          ],
          "answer": 2,
          "explanation": "Danh sách không thay đổi."
        },
        {
          "question": "5. clear trong JavaScript có xóa ngay mọi đối tượng còn tham chiếu ngoài không?",
          "options": [
            "Không",
            "Có",
            "Chỉ khi chứa số"
          ],
          "answer": 0,
          "explanation": "Bộ thu gom rác chỉ thu hồi đối tượng không còn truy cập được."
        }
      ]
    },
    "chapter18": {
      "title": "Stack — Ứng dụng thực tế",
      "questions": [
        {
          "question": "1. Trong hậu tố, toán hạng pop đầu tiên là bên nào?",
          "options": [
            "Bên phải",
            "Bên trái",
            "Luôn số nhỏ hơn"
          ],
          "answer": 0,
          "explanation": "LIFO làm toán hạng xuất hiện sau được lấy trước."
        },
        {
          "question": "2. Khử đệ quy Hà Nội có giảm số bước 2ⁿ−1 không?",
          "options": [
            "Có, còn n",
            "Không",
            "Có, còn log n"
          ],
          "answer": 1,
          "explanation": "Chỉ thay cách lưu khung công việc, không thay bài toán."
        },
        {
          "question": "3. Đổi số 0 sang cơ số khác cần kết quả gì?",
          "options": [
            "Lỗi luôn luôn",
            "Chuỗi rỗng",
            "Chuỗi 0"
          ],
          "answer": 2,
          "explanation": "Vòng chia không chạy nên phải xử lý riêng."
        },
        {
          "question": "4. ArrayStack rỗng có top bằng gì?",
          "options": [
            "−1",
            "0",
            "capacity"
          ],
          "answer": 0,
          "explanation": "Phần tử đầu được thêm ở chỉ số 0."
        },
        {
          "question": "5. Phép toán nào ưu tiên hơn trong bộ chuyển hậu tố?",
          "options": [
            "+ và −",
            "* và /",
            "Tất cả ngang nhau"
          ],
          "answer": 1,
          "explanation": "rank của nhân/chia là 2, cộng/trừ là 1."
        }
      ]
    },
    "chapter19": {
      "title": "Queue & Deque",
      "questions": [
        {
          "question": "1. Vị trí ghi tiếp của mảng vòng là gì?",
          "options": [
            "head + 1 luôn luôn",
            "(head + size) % capacity",
            "size − 1"
          ],
          "answer": 1,
          "explanation": "Công thức tái sử dụng phần đầu mảng sau khi vòng."
        },
        {
          "question": "2. Khi LinkedQueue lấy hết nút cuối cần làm gì?",
          "options": [
            "Tạo nút giả chứa khách",
            "Giữ tail cũ",
            "Đặt tail=null"
          ],
          "answer": 2,
          "explanation": "Hàng rỗng phải có cả head và tail bằng null."
        },
        {
          "question": "3. FIFO nghĩa là gì?",
          "options": [
            "Vào trước ra trước",
            "Vào sau ra trước",
            "Ưu tiên nhỏ ra trước"
          ],
          "answer": 0,
          "explanation": "Đó là hợp đồng Queue."
        },
        {
          "question": "4. Đầy giả của mảng tuyến tính được giải quyết ra sao?",
          "options": [
            "Chỉ tăng tail mãi",
            "Dùng chỉ số vòng và size",
            "Không dequeue nữa"
          ],
          "answer": 1,
          "explanation": "Ô đầu được tái sử dụng bằng modulo."
        },
        {
          "question": "5. Deque khác Queue ở đâu?",
          "options": [
            "Luôn là BST",
            "Chỉ chứa số",
            "Cho thêm/lấy cả hai đầu"
          ],
          "answer": 2,
          "explanation": "Đó là ý nghĩa double-ended queue."
        }
      ]
    },
    "chapter20": {
      "title": "Binary Tree & Duyệt cây",
      "questions": [
        {
          "question": "1. Duyệt đủ n nút có thời gian nào?",
          "options": [
            "O(1)",
            "O(log h)",
            "Θ(n)"
          ],
          "answer": 2,
          "explanation": "Mỗi nút phải được xử lý ít nhất một lần."
        },
        {
          "question": "2. Mức i có tối đa bao nhiêu nút nhị phân?",
          "options": [
            "2ⁱ",
            "2i",
            "i²"
          ],
          "answer": 0,
          "explanation": "Mỗi mức có thể gấp đôi mức trước."
        },
        {
          "question": "3. Cây lá có chiều cao theo cạnh bao nhiêu?",
          "options": [
            "1",
            "0",
            "−1"
          ],
          "answer": 1,
          "explanation": "Gốc cũng là lá và có đường dài nhất 0 cạnh."
        },
        {
          "question": "4. LNR của mọi cây nhị phân có luôn tăng không?",
          "options": [
            "Chỉ cần ba nút",
            "Có",
            "Không, cần tính chất BST"
          ],
          "answer": 2,
          "explanation": "Cấu trúc nhị phân đơn thuần không ràng buộc khóa."
        },
        {
          "question": "5. Cây perfect khác complete thế nào?",
          "options": [
            "Perfect lấp đầy mọi mức",
            "Perfect chỉ có một con",
            "Complete không có gốc"
          ],
          "answer": 0,
          "explanation": "Complete cho phép mức cuối chưa đầy nhưng dồn trái."
        }
      ]
    },
    "chapter21": {
      "title": "Binary Search Tree (BST)",
      "questions": [
        {
          "question": "1. Xóa nút hai con có thể lấy khóa nào thay thế?",
          "options": [
            "Nhỏ nhất cây con phải",
            "Bất kỳ lá nào",
            "Lớn nhất toàn cây"
          ],
          "answer": 0,
          "explanation": "Successor giữ quan hệ thứ tự của hai cây con."
        },
        {
          "question": "2. BST thêm khóa tăng liên tiếp có thể tìm mất thời gian nào?",
          "options": [
            "Luôn O(log n)",
            "O(n)",
            "O(1)"
          ],
          "answer": 1,
          "explanation": "Cây có thể suy biến thành một đường."
        },
        {
          "question": "3. Thêm khóa trùng trong ví dụ BST xử lý ra sao?",
          "options": [
            "Xóa gốc",
            "Tạo hai bản sao luôn luôn",
            "Giữ nguyên cây"
          ],
          "answer": 2,
          "explanation": "Không đi vào nhánh < hoặc > nên trả root cũ."
        },
        {
          "question": "4. Khi xóa gốc cần dùng giá trị trả về thế nào?",
          "options": [
            "Gán lại root",
            "Bỏ qua",
            "Chỉ in ra"
          ],
          "answer": 0,
          "explanation": "Gốc mới có thể là con thay thế hoặc null."
        },
        {
          "question": "5. Bất biến BST phải áp dụng ở đâu?",
          "options": [
            "Chỉ hai nút con trực tiếp",
            "Trên mọi khóa của từng cây con",
            "Chỉ nút gốc"
          ],
          "answer": 1,
          "explanation": "Mọi khóa trái nhỏ hơn nút và mọi khóa phải lớn hơn nút."
        }
      ]
    },
    "chapter22": {
      "title": "Cây cân bằng (AVL)",
      "questions": [
        {
          "question": "1. LR cần chuỗi quay nào?",
          "options": [
            "Phải ở con phải, trái ở nút",
            "Trái ở con trái, phải ở nút",
            "Chỉ quay trái nút"
          ],
          "answer": 1,
          "explanation": "Đưa trường hợp lệch trong thành lệch ngoài rồi cân bằng."
        },
        {
          "question": "2. Xóa AVL có thể cần cân bằng đến đâu?",
          "options": [
            "Không bao giờ cần quay",
            "Chỉ nút lá",
            "Đến gốc"
          ],
          "answer": 2,
          "explanation": "Chiều cao giảm có thể ảnh hưởng nhiều tổ tiên."
        },
        {
          "question": "3. height(null) trong code AVL bằng bao nhiêu?",
          "options": [
            "0",
            "−1",
            "1"
          ],
          "answer": 0,
          "explanation": "Code AVL đếm chiều cao theo số nút, khác bài 20 đếm cạnh."
        },
        {
          "question": "4. Sau quay, cập nhật chiều cao nút nào trước?",
          "options": [
            "Gốc mới",
            "Nút gốc cũ",
            "Không cần cập nhật"
          ],
          "answer": 1,
          "explanation": "Chiều cao gốc mới phụ thuộc chiều cao mới của nút cũ."
        },
        {
          "question": "5. Tính chất cân bằng AVL là gì?",
          "options": [
            "Mọi mức phải đầy",
            "Hai con luôn bằng số nút",
            "Chênh chiều cao hai con tối đa 1"
          ],
          "answer": 2,
          "explanation": "AVL cho phép độ lệch chiều cao −1,0,1."
        }
      ]
    },
    "chapter23": {
      "title": "Heap & Priority Queue",
      "questions": [
        {
          "question": "1. Min-heap có quan hệ nào?",
          "options": [
            "Toàn mảng đã tăng",
            "Mọi nút trái < gốc < mọi nút phải",
            "Cha ≤ con"
          ],
          "answer": 2,
          "explanation": "Heap chỉ ràng buộc cha-con."
        },
        {
          "question": "2. peek min-heap có chi phí nào?",
          "options": [
            "O(1)",
            "O(n)",
            "O(n log n)"
          ],
          "answer": 0,
          "explanation": "Phần tử nhỏ nhất luôn ở gốc a[0]."
        },
        {
          "question": "3. Tìm khóa tùy ý trong heap có được bảo đảm O(log n) không?",
          "options": [
            "Có",
            "Không",
            "Có nếu dùng mảng"
          ],
          "answer": 1,
          "explanation": "Heap không có thứ tự trái/phải như BST để loại nửa cây."
        },
        {
          "question": "4. Muốn FIFO khi cùng ưu tiên cần thêm gì?",
          "options": [
            "Luôn đảo dữ liệu",
            "Chỉ đổi tên heap",
            "sequence vào comparator"
          ],
          "answer": 2,
          "explanation": "Sequence tăng theo thứ tự đến để phá hòa."
        },
        {
          "question": "5. pop heap một phần tử phải làm gì?",
          "options": [
            "Trả gốc và để mảng rỗng",
            "Gán last lại a[0]",
            "Tạo thêm bản sao"
          ],
          "answer": 0,
          "explanation": "Gán lại a[0] sẽ vô tình giữ phần tử đã lấy."
        }
      ]
    }
  }
};
