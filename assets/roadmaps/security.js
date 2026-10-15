/* Generated from existing lessons. Source: security-source.json. */
globalThis.SynaptrailRoadmapData = {
  "course": "security",
  "title": "Bảo mật",
  "nodes": [
    {
      "id": "stage-1",
      "title": "Chặng 1 · 1–4",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Tư duy Bảo mật & OWASP Top 10 · SQL Injection · XSS (Cross-Site Scripting) · CSRF (Cross-Site Request Forgery)",
      "time": 20,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter01",
      "title": "Tư duy Bảo mật & OWASP Top 10",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-1",
      "chapter": "security/chapter01.html",
      "summary": "Bảo mật không phải \"tính năng thêm vào sau\" — mà là cách suy nghĩ xuyên suốt quá trình viết code.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter02",
      "title": "SQL Injection",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "security/chapter02.html",
      "summary": "Lỗ hổng kinh điển nhất — đã nhắc tới ở giáo trình Full-Stack JS, giờ đào sâu cách khai thác và phòng chống toàn diện.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "security/quiz.html?chapter=chapter02"
    },
    {
      "id": "chapter03",
      "title": "XSS (Cross-Site Scripting)",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-1",
      "chapter": "security/chapter03.html",
      "summary": "Chèn mã JavaScript độc hại vào trang web mà nạn nhân khác sẽ vô tình chạy khi truy cập.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter04",
      "title": "CSRF (Cross-Site Request Forgery)",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "security/chapter04.html",
      "summary": "Lừa trình duyệt của nạn nhân (đã đăng nhập) tự động gửi request thực hiện hành động mà họ không hề biết.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "security/quiz.html?chapter=chapter04"
    },
    {
      "id": "stage-2",
      "title": "Chặng 2 · 5–8",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Xác thực & Quản lý mật khẩu an toàn · JWT & Session Management · HTTPS/TLS & Mã hóa dữ liệu · Phân quyền (Authorization) & Least Privilege",
      "time": 20,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter05",
      "title": "Xác thực & Quản lý mật khẩu an toàn",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-2",
      "chapter": "security/chapter05.html",
      "summary": "Không bao giờ lưu mật khẩu dạng gốc (plain text) — nguyên tắc bất di bất dịch của mọi hệ thống.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter06",
      "title": "JWT & Session Management",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-2",
      "chapter": "security/chapter06.html",
      "summary": "Hai cách phổ biến nhất để \"nhớ\" người dùng đã đăng nhập giữa các request — mỗi cách có đánh đổi bảo mật riêng.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "security/quiz.html?chapter=chapter06"
    },
    {
      "id": "chapter07",
      "title": "HTTPS/TLS & Mã hóa dữ liệu",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-2",
      "chapter": "security/chapter07.html",
      "summary": "Bảo vệ dữ liệu khi đang di chuyển trên mạng — ngăn kẻ tấn công \"nghe lén\" giữa client và server.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter08",
      "title": "Phân quyền (Authorization) & Least Privilege",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-2",
      "chapter": "security/chapter08.html",
      "summary": "Xác thực (Authentication) trả lời \"bạn là ai?\" — Phân quyền (Authorization) trả lời \"bạn ĐƯỢC PHÉP làm gì?\". Hai khái niệm hay bị nhầm lẫn nhưng hoàn toàn khác nhau.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "security/quiz.html?chapter=chapter08"
    },
    {
      "id": "stage-3",
      "title": "Chặng 3 · 9–10",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Bảo mật API & Secrets Management · Checklist bảo mật trước khi triển khai",
      "time": 10,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter09",
      "title": "Bảo mật API & Secrets Management",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-3",
      "chapter": "security/chapter09.html",
      "summary": "API là \"cửa ngõ\" phổ biến nhất bị tấn công trong kiến trúc hiện đại — và quản lý bí mật (secrets) sai cách là nguyên nhân rò rỉ dữ liệu hàng đầu.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter10",
      "title": "Checklist bảo mật trước khi triển khai",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-3",
      "chapter": "security/chapter10.html",
      "summary": "Tổng hợp toàn bộ kiến thức thành danh sách kiểm tra thực tế — áp dụng trước khi đưa bất kỳ ứng dụng nào lên production.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "security/quiz.html?chapter=chapter10"
    }
  ],
  "layout": {
    "stage-1": {
      "left": [
        {
          "nodes": [
            "chapter01",
            "chapter03"
          ]
        }
      ],
      "right": [
        {
          "nodes": [
            "chapter02",
            "chapter04"
          ]
        }
      ]
    },
    "stage-2": {
      "left": [
        {
          "nodes": [
            "chapter06",
            "chapter08"
          ]
        }
      ],
      "right": [
        {
          "nodes": [
            "chapter05",
            "chapter07"
          ]
        }
      ]
    },
    "stage-3": {
      "left": [
        {
          "nodes": [
            "chapter09"
          ]
        }
      ],
      "right": [
        {
          "nodes": [
            "chapter10"
          ]
        }
      ]
    }
  },
  "continueWith": [
    {
      "title": "Danh mục khóa học",
      "chapter": "courses.html"
    },
    {
      "title": "Bài tập thực hành",
      "chapter": "Quiz_and_other/exercises.html"
    },
    {
      "title": "Quiz tổng hợp",
      "chapter": "Quiz_and_other/quiz-tong-hop.html"
    }
  ]
};
