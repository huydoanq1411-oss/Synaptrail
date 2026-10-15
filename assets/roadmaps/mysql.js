/* Generated from existing lessons. Source: mysql-source.json. */
globalThis.SynaptrailRoadmapData = {
  "course": "mysql",
  "title": "MySQL",
  "nodes": [
    {
      "id": "stage-1",
      "title": "MySQL",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "MySQL — Truy vấn cơ bản · MySQL — JOIN & Truy vấn nâng cao · Kết nối Node.js với MySQL",
      "time": 15,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter01",
      "title": "MySQL — Truy vấn cơ bản",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-1",
      "chapter": "mysql/chapter01.html",
      "summary": "Hệ quản trị cơ sở dữ liệu quan hệ phổ biến nhất — nền tảng lưu trữ dữ liệu có cấu trúc cho hầu hết ứng dụng web.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter02",
      "title": "MySQL — JOIN & Truy vấn nâng cao",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "mysql/chapter02.html",
      "summary": "Kết hợp dữ liệu từ nhiều bảng có quan hệ với nhau — kỹ năng SQL quan trọng nhất sau CRUD cơ bản.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "mysql/quiz.html?chapter=chapter02"
    },
    {
      "id": "chapter03",
      "title": "Kết nối Node.js với MySQL",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-1",
      "chapter": "mysql/chapter03.html",
      "summary": "Truy vấn database trực tiếp từ code Node.js/Express — bước đệm trước khi dùng ORM tiện lợi hơn ở chương sau.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
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
            "chapter02"
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
