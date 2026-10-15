/* Generated from existing lessons. Source: docker-source.json. */
globalThis.SynaptrailRoadmapData = {
  "course": "docker",
  "title": "Docker",
  "nodes": [
    {
      "id": "stage-1",
      "title": "Image & Container",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Docker — Đóng gói ứng dụng",
      "time": 5,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter01",
      "title": "Docker — Đóng gói ứng dụng",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "docker/chapter01.html",
      "summary": "Giải quyết vĩnh viễn câu nói kinh điển \"chạy được trên máy tôi mà\" — đóng gói ứng dụng cùng toàn bộ môi trường cần thiết.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "stage-2",
      "title": "Ứng dụng nhiều container",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Docker Compose — Multi-container",
      "time": 5,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter02",
      "title": "Docker Compose — Multi-container",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-2",
      "chapter": "docker/chapter02.html",
      "summary": "Ứng dụng thực tế cần nhiều container phối hợp (app + database + cache) — Docker Compose quản lý tất cả bằng một file cấu hình.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "docker/quiz.html?chapter=chapter02"
    },
    {
      "id": "stage-3",
      "title": "Triển khai ứng dụng",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Triển khai VPS DigitalOcean",
      "time": 5,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter03",
      "title": "Triển khai VPS DigitalOcean",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-3",
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
      "left": [],
      "right": [
        {
          "nodes": [
            "chapter01"
          ]
        }
      ]
    },
    "stage-2": {
      "left": [
        {
          "nodes": [
            "chapter02"
          ]
        }
      ],
      "right": []
    },
    "stage-3": {
      "left": [],
      "right": [
        {
          "nodes": [
            "chapter03"
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
