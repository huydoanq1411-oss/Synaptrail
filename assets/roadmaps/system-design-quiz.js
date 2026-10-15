/* Loaded only on the separate quiz page. */
globalThis.SynaptrailAlgorithmQuizzes = {
  "course": "system-design",
  "title": "System Design",
  "chapters": {
    "chapter02": {
      "title": "Vertical vs Horizontal Scaling",
      "chapter": "chapter02.html",
      "questions": [
        {
          "question": "1. Yêu cầu quan trọng để một ứng dụng có thể Horizontal Scaling hiệu quả là gì?",
          "options": [
            "Phải viết bằng ngôn ngữ biên dịch (C++/Java)",
            "Ứng dụng phải \"stateless\", không lưu trạng thái phiên trực tiếp trên từng server",
            "Phải dùng cùng một hệ điều hành trên mọi máy"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter04": {
      "title": "Caching Strategies",
      "chapter": "chapter04.html",
      "questions": [
        {
          "question": "1. Vấn đề nào được xem là một trong những thách thức khó nhất khi dùng cache?",
          "options": [
            "Cache Invalidation - biết khi nào cần cập nhật/xóa dữ liệu cache cũ",
            "Cache luôn làm chậm hệ thống",
            "Cache chỉ hoạt động trên trình duyệt Chrome"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    },
    "chapter06": {
      "title": "CAP Theorem",
      "chapter": "chapter06.html",
      "questions": [
        {
          "question": "1. Một hệ thống ngân hàng nên ưu tiên yếu tố nào trong CAP khi có sự cố mạng?",
          "options": [
            "Availability - luôn phải phản hồi bằng mọi giá",
            "Consistency - thà từ chối còn hơn hiển thị số dư sai",
            "Không yếu tố nào quan trọng cả"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter08": {
      "title": "Microservices vs Monolith",
      "chapter": "chapter08.html",
      "questions": [
        {
          "question": "1. Lý do chính khiến nhiều công ty áp dụng Microservices là gì?",
          "options": [
            "Microservices luôn chạy nhanh hơn Monolith",
            "Cho phép nhiều team phát triển và triển khai độc lập, scale riêng từng phần",
            "Microservices dễ code hơn Monolith"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter10": {
      "title": "Case Study: Thiết kế URL Shortener",
      "chapter": "chapter10.html",
      "questions": [
        {
          "question": "1. Với tỉ lệ đọc:ghi 100:1 của URL Shortener, kỹ thuật nào mang lại lợi ích lớn nhất?",
          "options": [
            "Sharding dữ liệu theo alphabet",
            "Caching các URL phổ biến + Database Replication để phục vụ đọc",
            "Chỉ dùng một server duy nhất cho đơn giản"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    }
  }
};
