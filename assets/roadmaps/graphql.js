/* Generated from existing lessons. Source: graphql-source.json. */
globalThis.SynaptrailRoadmapData = {
  "course": "graphql",
  "title": "GraphQL",
  "nodes": [
    {
      "id": "stage-1",
      "title": "Truy vấn & cập nhật dữ liệu",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "GraphQL — Query & Mutation",
      "time": 5,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter01",
      "title": "GraphQL — Query & Mutation",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "graphql/chapter01.html",
      "summary": "Ngôn ngữ truy vấn API thay thế REST — client tự quyết định CHÍNH XÁC dữ liệu nào cần lấy, không thừa không thiếu.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "stage-2",
      "title": "Xây dựng GraphQL Server",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "GraphQL Server với Apollo",
      "time": 5,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter02",
      "title": "GraphQL Server với Apollo",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-2",
      "chapter": "graphql/chapter02.html",
      "summary": "Xây dựng GraphQL API bằng Node.js — Apollo Server là thư viện phổ biến nhất cho việc này.",
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
