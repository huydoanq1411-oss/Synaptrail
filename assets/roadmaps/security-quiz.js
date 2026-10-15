/* Loaded only on the separate quiz page. */
globalThis.SynaptrailAlgorithmQuizzes = {
  "course": "security",
  "title": "Bảo mật",
  "chapters": {
    "chapter02": {
      "title": "SQL Injection",
      "chapter": "chapter02.html",
      "questions": [
        {
          "question": "1. Cách phòng chống SQL Injection hiệu quả nhất là gì?",
          "code": "",
          "options": [
            "Giới hạn độ dài input người dùng",
            "Luôn dùng prepared statement (dấu ?), không nối chuỗi SQL trực tiếp",
            "Chỉ cho phép người dùng nhập số"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter04": {
      "title": "CSRF (Cross-Site Request Forgery)",
      "chapter": "chapter04.html",
      "questions": [
        {
          "question": "1. CSRF Token hoạt động hiệu quả vì lý do gì?",
          "code": "",
          "options": [
            "Kẻ tấn công không biết được giá trị token bí mật để giả mạo request hợp lệ",
            "Token làm request chạy nhanh hơn",
            "Token mã hóa toàn bộ nội dung trang web"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    },
    "chapter06": {
      "title": "JWT & Session Management",
      "chapter": "chapter06.html",
      "questions": [
        {
          "question": "1. Nhược điểm chính của JWT so với Session truyền thống là gì?",
          "code": "",
          "options": [
            "JWT không thể dùng cho mobile app",
            "Khó thu hồi token trước hạn vì server không lưu trạng thái",
            "JWT luôn chậm hơn Session"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter08": {
      "title": "Phân quyền (Authorization) & Least Privilege",
      "chapter": "chapter08.html",
      "questions": [
        {
          "question": "1. Lỗ hổng IDOR xảy ra khi nào?",
          "code": "",
          "options": [
            "Khi mật khẩu không được hash",
            "Khi hệ thống chỉ kiểm tra đăng nhập mà quên kiểm tra quyền sở hữu dữ liệu",
            "Khi không dùng HTTPS"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter10": {
      "title": "Checklist bảo mật trước khi triển khai",
      "chapter": "chapter10.html",
      "questions": [
        {
          "question": "1. Tại sao KHÔNG nên trả về lỗi database thô (raw error) trực tiếp cho client?",
          "code": "",
          "options": [
            "Vì làm chậm phản hồi",
            "Vì vô tình tiết lộ cấu trúc/công nghệ hệ thống cho kẻ tấn công",
            "Vì tốn thêm dung lượng response"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    }
  }
};
