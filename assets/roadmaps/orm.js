/* Generated from existing lessons. Source: orm-source.json. */
globalThis.SynaptrailRoadmapData = {
  "course": "orm",
  "title": "ORM",
  "nodes": [
    {
      "id": "stage-1",
      "title": "ORM",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "ORM Sequelize · ORM Prisma",
      "time": 10,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "chapter01",
      "title": "ORM Sequelize",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-1",
      "chapter": "orm/chapter01.html",
      "summary": "Object-Relational Mapping — thao tác database bằng object/class JavaScript thay vì viết SQL thuần tay.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "chapter02",
      "title": "ORM Prisma",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "orm/chapter02.html",
      "summary": "ORM hiện đại, được ưa chuộng gần đây nhờ type-safety mạnh mẽ khi kết hợp với TypeScript.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": "orm/quiz.html?chapter=chapter02"
    }
  ],
  "layout": {
    "stage-1": {
      "left": [
        {
          "nodes": [
            "chapter01"
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
