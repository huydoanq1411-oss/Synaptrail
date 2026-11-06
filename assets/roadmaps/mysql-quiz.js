/* Loaded only on the separate quiz page. */
globalThis.SynaptrailAlgorithmQuizzes = {
  "course": "mysql",
  "title": "MySQL",
  "chapters": {
    "chapter02": {
      "title": "MySQL — JOIN & Truy vấn nâng cao",
      "chapter": "chapter02.html",
      "questions": [
        {
          "question": "1. LEFT JOIN khác INNER JOIN ở điểm nào?",
          "code": "",
          "options": [
            "Không có gì khác biệt",
            "LEFT JOIN giữ TẤT CẢ dòng bảng trái kể cả không khớp, INNER JOIN chỉ giữ dòng khớp cả 2 bảng",
            "LEFT JOIN chạy nhanh hơn luôn luôn"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter03": {
      "title": "Kết nối Node.js với MySQL",
      "chapter": "chapter03.html",
      "questions": [
        {
          "question": "1. Vì sao ví dụ tạo connection pool một lần khi khởi động?",
          "code": "",
          "options": [
            "Để bỏ mọi kiểm tra dữ liệu đầu vào",
            "Để tái sử dụng nhóm kết nối thay vì tạo kết nối mới cho từng request",
            "Để biến MySQL thành bộ nhớ của trình duyệt",
            "Để mọi truy vấn luôn trả kết quả tức thì"
          ],
          "answer": 1,
          "explanation": "Pool tái sử dụng kết nối và quản lý tài nguyên. Pool không thay validation, không lưu dữ liệu trong trình duyệt và không bảo đảm mọi truy vấn tức thì."
        },
        {
          "question": "2. Phát biểu nào phân biệt đúng query và execute trong MySQL2?",
          "code": "",
          "options": [
            "Có dấu ? thì query luôn prepare trên server giống execute",
            "execute tự xác nhận mọi dữ liệu nghiệp vụ đều hợp lệ",
            "execute dùng cơ chế prepared statement; tham số hóa SQL vẫn không thay validation",
            "Placeholder có thể thay tên bảng do người dùng gửi lên"
          ],
          "answer": 2,
          "explanation": "MySQL2 cung cấp execute để prepare và execute; query có nhận values không đồng nghĩa cùng cơ chế. Validation vẫn cần để kiểm tên/giá; placeholder dùng cho giá trị, không phải tên bảng."
        },
        {
          "question": "3. POST application/json với body sau sẽ được xử lý thế nào trong ví dụ?",
          "code": "{\"ten\": \"Ban phim\", \"gia\": \"250000\"}",
          "options": [
            "Trả 400 INVALID_PRODUCT và không gọi INSERT",
            "Tự chuyển giá thành số rồi trả 201",
            "Trả 404 vì tên sản phẩm chưa có",
            "Trả 503 vì body dùng JSON"
          ],
          "answer": 0,
          "explanation": "gia là chuỗi, không thỏa Number.isSafeInteger nên bị từ chối trước INSERT. Ví dụ không tự ép kiểu; 404 dành cho tài nguyên không tìm thấy, 503 dành cho một số lỗi kết nối database."
        },
        {
          "question": "4. GET /api/san-pham/42 có ID hợp lệ nhưng SELECT trả mảng rỗng. Kết quả nào đúng?",
          "code": "",
          "options": [
            "400 INVALID_ID",
            "201 cùng Location mới",
            "503 DATABASE_UNAVAILABLE",
            "404 NOT_FOUND"
          ],
          "answer": 3,
          "explanation": "ID hợp lệ nhưng không có hàng là 404 NOT_FOUND. 400 dành cho ID sai định dạng, 201 dành cho tạo mới, và mảng rỗng không chứng minh lỗi kết nối để trả 503."
        },
        {
          "question": "5. Vì sao error middleware không gửi err.message và stack trace trực tiếp cho client?",
          "code": "",
          "options": [
            "Vì Express không cho phép response JSON",
            "Để tránh lộ chi tiết nội bộ; client nhận mã lỗi có chủ đích",
            "Để mọi lỗi đều trở thành HTTP 200",
            "Vì pool đã thay thế toàn bộ xử lý lỗi"
          ],
          "answer": 1,
          "explanation": "Thông tin lỗi thô có thể lộ SQL/cấu trúc nội bộ; bài trả mã lỗi JSON và chỉ log code/name. Express vẫn hỗ trợ JSON, lỗi vẫn dùng status phù hợp, pool không thay error middleware."
        }
      ]
    }
  }
};
