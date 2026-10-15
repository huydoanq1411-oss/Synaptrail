/* Generated from existing lessons. Source: system-design-source.json. */
globalThis.SynaptrailRoadmapData = {
  "course": "system-design",
  "title": "System Design",
  "nodes": [
    {
      "id": "stage-1",
      "title": "Chặng 1 · 1–4",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "System Design là gì? · Vertical vs Horizontal Scaling · Load Balancing · Caching Strategies",
      "time": 20,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter01",
      "title": "System Design là gì?",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-1",
      "chapter": "system-design/chapter01.html",
      "summary": "Không phải viết code — mà là thiết kế cách các thành phần hệ thống phối hợp để phục vụ hàng triệu người dùng đáng tin cậy.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter02",
      "title": "Vertical vs Horizontal Scaling",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "system-design/chapter02.html",
      "summary": "Hai chiến lược cơ bản để hệ thống xử lý được nhiều tải hơn — nền tảng của mọi quyết định mở rộng hệ thống.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "system-design/quiz.html?chapter=chapter02"
    },
    {
      "id": "chapter03",
      "title": "Load Balancing",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-1",
      "chapter": "system-design/chapter03.html",
      "summary": "Khi đã có nhiều server (Horizontal Scaling), cần một cơ chế phân phối request đều đặn giữa chúng.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter04",
      "title": "Caching Strategies",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "system-design/chapter04.html",
      "summary": "Lưu tạm kết quả đã tính toán/truy vấn để trả lời nhanh hơn nhiều lần — kỹ thuật tối ưu hiệu năng quan trọng bậc nhất.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "system-design/quiz.html?chapter=chapter04"
    },
    {
      "id": "stage-2",
      "title": "Chặng 2 · 5–8",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Database Scaling (Replication & Sharding) · CAP Theorem · Message Queue & Xử lý bất đồng bộ · Microservices vs Monolith",
      "time": 20,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter05",
      "title": "Database Scaling (Replication & Sharding)",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-2",
      "chapter": "system-design/chapter05.html",
      "summary": "Khi một database không đủ sức xử lý toàn bộ tải — hai kỹ thuật chính để mở rộng tầng lưu trữ dữ liệu.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter06",
      "title": "CAP Theorem",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-2",
      "chapter": "system-design/chapter06.html",
      "summary": "Định lý nền tảng nhất của hệ thống phân tán — giải thích tại sao KHÔNG có database nào \"hoàn hảo mọi mặt\".",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "system-design/quiz.html?chapter=chapter06"
    },
    {
      "id": "chapter07",
      "title": "Message Queue & Xử lý bất đồng bộ",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-2",
      "chapter": "system-design/chapter07.html",
      "summary": "Tách rời các thành phần hệ thống bằng hàng đợi tin nhắn — xử lý tác vụ nặng mà không làm chậm phản hồi cho người dùng.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter08",
      "title": "Microservices vs Monolith",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-2",
      "chapter": "system-design/chapter08.html",
      "summary": "Hai triết lý tổ chức code ở tầm kiến trúc — một trong những quyết định ảnh hưởng lớn nhất tới cách đội ngũ phát triển vận hành.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "system-design/quiz.html?chapter=chapter08"
    },
    {
      "id": "stage-3",
      "title": "Chặng 3 · 9–10",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "API Gateway & Rate Limiting · Case Study: Thiết kế URL Shortener",
      "time": 10,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter09",
      "title": "API Gateway & Rate Limiting",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-3",
      "chapter": "system-design/chapter09.html",
      "summary": "Điểm vào duy nhất cho toàn bộ hệ thống microservices, và cơ chế bảo vệ hệ thống khỏi bị quá tải/lạm dụng.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter10",
      "title": "Case Study: Thiết kế URL Shortener",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-3",
      "chapter": "system-design/chapter10.html",
      "summary": "Áp dụng toàn bộ kiến thức đã học vào một bài toán System Design kinh điển — dạng câu hỏi phổ biến nhất trong phỏng vấn.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "system-design/quiz.html?chapter=chapter10"
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
