/* Generated from existing lessons. Source: docker-source.json. */
globalThis.SynaptrailRoadmapData = {
  "course": "docker",
  "title": "Docker",
  "nodes": [
    {
      "id": "stage-1",
      "title": "Docker",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Docker — Đóng gói ứng dụng · Docker Compose — Multi-container · Triển khai VPS DigitalOcean",
      "time": 15,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter01",
      "title": "Docker — Đóng gói ứng dụng",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-1",
      "chapter": "docker/chapter01.html",
      "summary": "Giải quyết vĩnh viễn câu nói kinh điển \"chạy được trên máy tôi mà\" — đóng gói ứng dụng cùng toàn bộ môi trường cần thiết.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter02",
      "title": "Docker Compose — Multi-container",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "docker/chapter02.html",
      "summary": "Ứng dụng thực tế cần nhiều container phối hợp (app + database + cache) — Docker Compose quản lý tất cả bằng một file cấu hình.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "docker/quiz.html?chapter=chapter02"
    },
    {
      "id": "chapter03",
      "title": "Triển khai VPS DigitalOcean",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-1",
      "chapter": "docker/chapter03.html",
      "summary": "Đưa ứng dụng lên internet thật — từ máy tính cá nhân tới một server có thể truy cập toàn cầu.",
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
