/* Generated from existing lessons. Source: machine-learning-source.json. */
globalThis.SynaptrailRoadmapData = {
  "course": "machine-learning",
  "title": "Machine Learning",
  "nodes": [
    {
      "id": "stage-1",
      "title": "Chặng 1 · 1–4",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Nền tảng AI · ML · DL · Data Science · Toán cho Machine Learning · Trực quan hóa dữ liệu · Data Preprocessing, Cleaning & EDA",
      "time": 97,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "phan-1-nen-tang-ml",
      "title": "Nền tảng AI · ML · DL · Data Science",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-1",
      "chapter": "machine-learning/phan-1-nen-tang-ml.html",
      "summary": "Đây là điểm khởi đầu của toàn bộ giáo trình. Hãy hình dung quá trình học như một tuyến tàu điện: mỗi \"ga\" là một chủ đề, bạn đi qua từng ga theo thứ tự, không bỏ ga nào. Phần 1 này đưa bạn qua 5 ga đầu tiên — từ việc hiểu AI/ML/DL là gì, quy trình xây một mô hình thực tế, cho tới việc dựng môi trường Python và làm quen hai thư viện xương sống: NumPy và Pandas.",
      "time": 32,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "phan-2-toan-cho-ml",
      "title": "Toán cho Machine Learning",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "machine-learning/phan-2-toan-cho-ml.html",
      "summary": "Bạn không cần là nhà toán học để làm ML, nhưng hiểu 4 trụ cột toán học dưới đây sẽ giúp bạn không còn \"học vẹt\" công thức mà thực sự hiểu vì sao một thuật toán hoạt động. Phần 2 đi qua 4 ga tiếp theo: Đại số tuyến tính, Giải tích, Xác suất thống kê và Tối ưu hóa — nền tảng để hiểu mọi mô hình từ Linear Regression đến Deep Learning.",
      "time": 28,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "phan-3-truc-quan-hoa-du-lieu",
      "title": "Trực quan hóa dữ liệu",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-1",
      "chapter": "machine-learning/phan-3-truc-quan-hoa-du-lieu.html",
      "summary": "Một bảng số 10.000 dòng gần như vô nghĩa với mắt người — nhưng một biểu đồ đúng có thể cho bạn insight trong vài giây. Phần 3 trang bị bộ công cụ trực quan hóa dữ liệu quan trọng nhất của Python: Matplotlib (nền tảng), Seaborn (thống kê, đẹp mặc định), và các nguyên tắc Data Visualization để chọn đúng loại biểu đồ cho đúng câu hỏi.",
      "time": 16,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "phan-4-tien-xu-ly-du-lieu",
      "title": "Data Preprocessing, Cleaning & EDA",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "machine-learning/phan-4-tien-xu-ly-du-lieu.html",
      "summary": "Nhớ lại nguyên lý ở Chương 2: 60–80% thời gian dự án ML nằm ở khâu dữ liệu. Phần 4 đi sâu vào chính khâu đó: Data Preprocessing (biến dữ liệu về dạng máy hiểu được), Data Cleaning (xử lý dữ liệu thiếu/sai/trùng) và EDA — quy trình khám phá dữ liệu bài bản trước khi chạm vào bất kỳ thuật toán nào.",
      "time": 21,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "stage-2",
      "title": "Chặng 2 · 5–8",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Feature Engineering, Selection & ML Pipeline · Supervised Learning: Linear & Logistic Regression · KNN, Naive Bayes, Decision Tree & SVM · Ensemble Learning, Random Forest & Gradient Boosting",
      "time": 77,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "phan-5-feature-engineering-pipeline",
      "title": "Feature Engineering, Selection & ML Pipeline",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-2",
      "chapter": "machine-learning/phan-5-feature-engineering-pipeline.html",
      "summary": "Có dữ liệu sạch (Phần 4) là chưa đủ — Feature Engineering giúp bạn tạo ra những đặc trưng mới giàu thông tin hơn, Feature Selection giúp loại bỏ đặc trưng thừa/nhiễu, và ML Pipeline gói toàn bộ quy trình lại thành một khối duy nhất, gọn gàng và không còn rủi ro data leakage. Đây là \"ga\" cuối cùng trước khi chính thức bước vào các thuật toán Supervised Learning.",
      "time": 16,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "phan-6-supervised-learning",
      "title": "Supervised Learning: Linear & Logistic Regression",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-2",
      "chapter": "machine-learning/phan-6-supervised-learning.html",
      "summary": "Sau 5 phần chuẩn bị nền tảng, đây là lúc bạn chính thức xây dựng mô hình dự đoán đầu tiên. Phần 6 giới thiệu tổng quan Supervised Learning, rồi đi sâu vào 2 thuật toán \"phải biết\" trước tiên: Linear Regression (dự đoán số) và Logistic Regression (phân loại) — nền tảng để hiểu mọi mô hình phức tạp hơn sau này, kể cả neural network.",
      "time": 19,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "phan-7-knn-bayes-tree-svm",
      "title": "KNN, Naive Bayes, Decision Tree & SVM",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-2",
      "chapter": "machine-learning/phan-7-knn-bayes-tree-svm.html",
      "summary": "Linear/Logistic Regression tìm một đường/ranh giới toàn cục. Phần 7 giới thiệu 4 thuật toán với triết lý hoàn toàn khác: KNN (\"hỏi hàng xóm gần nhất\"), Naive Bayes (dựa trên xác suất — nhớ lại định lý Bayes ở Chương 8), Decision Tree (chuỗi câu hỏi if-else), và SVM (tìm ranh giới có \"lề\" rộng nhất). Mỗi thuật toán phù hợp với một kiểu bài toán khác nhau.",
      "time": 24,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "phan-8-ensemble-random-forest",
      "title": "Ensemble Learning, Random Forest & Gradient Boosting",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-2",
      "chapter": "machine-learning/phan-8-ensemble-random-forest.html",
      "summary": "Nhớ lại nhược điểm của Decision Tree ở Chương 24: dễ overfitting, không ổn định. Ensemble Learning biến chính nhược điểm đó thành sức mạnh — bằng cách kết hợp hàng trăm cây quyết định theo những cách thông minh khác nhau. Phần 8 giới thiệu Random Forest (kết hợp song song) và họ Gradient Boosting — XGBoost, LightGBM, CatBoost (kết hợp tuần tự) — nhóm thuật toán thống trị hầu hết các cuộc thi Kaggle với dữ liệu dạng bảng.",
      "time": 18,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "stage-3",
      "title": "Chặng 3 · 9–12",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Unsupervised Learning: Clustering & PCA · Model Evaluation, Cross Validation & Hyperparameter Tuning · Explainable AI & Model Deployment · SQL cho ML, MLOps, MLflow, DVC & Kubernetes",
      "time": 80,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "phan-9-unsupervised-clustering-pca",
      "title": "Unsupervised Learning: Clustering & PCA",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-3",
      "chapter": "machine-learning/phan-9-unsupervised-clustering-pca.html",
      "summary": "Từ Phần 6 đến Phần 8, mọi thuật toán đều cần y — nhãn đúng để học theo. Phần 9 quay lại nhánh thứ hai đã nhắc ở Chương 1: Unsupervised Learning — học từ dữ liệu không có nhãn. Bạn sẽ học Clustering (nhóm các điểm dữ liệu tương tự lại với nhau, với K-Means là đại diện tiêu biểu) và Dimensionality Reduction (PCA — giảm số chiều dữ liệu, dùng lại chính kiến thức eigenvector/eigenvalue ở Chương 6).",
      "time": 22,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "phan-10-model-evaluation-tuning",
      "title": "Model Evaluation, Cross Validation & Hyperparameter Tuning",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-3",
      "chapter": "machine-learning/phan-10-model-evaluation-tuning.html",
      "summary": "Từ Phần 6 đến Phần 9, các ví dụ thường chỉ in ra 1 con số accuracy đơn giản để giữ mọi thứ ngắn gọn. Phần 10 lấp đầy khoảng trống đó: cách đánh giá mô hình đúng chuẩn chuyên nghiệp (Model Evaluation), cách đảm bảo con số đánh giá đó đáng tin cậy (Cross Validation), và cách tự động tìm ra bộ siêu tham số tốt nhất (Hyperparameter Tuning) thay vì đoán mò như các phần trước.",
      "time": 18,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "phan-11-explainable-ai-deployment",
      "title": "Explainable AI & Model Deployment",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-3",
      "chapter": "machine-learning/phan-11-explainable-ai-deployment.html",
      "summary": "Một mô hình chính xác nhưng không ai hiểu vì sao nó quyết định vậy, hoặc chỉ chạy được trong notebook của riêng bạn, thì giá trị thực tế rất hạn chế. Phần 11 giải quyết 2 vấn đề đó: Explainable AI (SHAP, LIME) giúp \"mở hộp đen\" giải thích từng dự đoán cụ thể, và Model Deployment (Flask, FastAPI, Docker, Git/GitHub) đưa mô hình từ notebook thành một dịch vụ thực sự có thể gọi qua API.",
      "time": 22,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "phan-12-sql-mlops",
      "title": "SQL cho ML, MLOps, MLflow, DVC & Kubernetes",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-3",
      "chapter": "machine-learning/phan-12-sql-mlops.html",
      "summary": "Trước khi dữ liệu tới được Pandas DataFrame (Chương 5), nó thường nằm trong cơ sở dữ liệu SQL. Và sau khi mô hình được deploy (Chương 36), cần một quy trình MLOps bài bản để theo dõi thí nghiệm, quản lý phiên bản dữ liệu/mô hình, và vận hành ổn định lâu dài. Phần 12 trang bị đủ 3 mảnh ghép đó: SQL, MLflow (tracking thí nghiệm), và DVC + Kubernetes (giới thiệu quản lý dữ liệu và mở rộng hệ thống).",
      "time": 18,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "stage-4",
      "title": "Chặng 4 · 13–16",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Thực hành Kaggle & Portfolio · Deep Learning: Mạng nơ-ron, CNN & RNN · Reinforcement Learning & RLHF · 📋 Tổng hợp công thức & khái niệm cốt lõi — 46 chương",
      "time": 92,
      "related": [],
      "comingSoon": false
    },
    {
      "id": "phan-13-kaggle-portfolio",
      "title": "Thực hành Kaggle & Portfolio",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-4",
      "chapter": "machine-learning/phan-13-kaggle-portfolio.html",
      "summary": "Bạn đã có đầy đủ kiến thức nền tảng (toán, thuật toán, đánh giá mô hình) lẫn kỹ năng hiện đại (MLOps, GenAI, RAG, Agent). Phần 13 là bước cuối cùng để biến kiến thức đó thành thứ nhà tuyển dụng nhìn thấy được: thực hành trên Kaggle — nơi rèn luyện kỹ năng qua các bài toán thật với dữ liệu thật; và xây dựng Portfolio — tập hợp dự án chứng minh bạn thực sự làm được, không chỉ \"đã học qua\".",
      "time": 17,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "phan-14-deep-learning",
      "title": "Deep Learning: Mạng nơ-ron, CNN & RNN",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-4",
      "chapter": "machine-learning/phan-14-deep-learning.html",
      "summary": "Từ Chương 1, bạn đã biết Deep Learning là một nhánh con của ML dùng mạng nơ-ron nhiều lớp. Phần 14 mở \"hộp đen\" đó ra: xây dựng mạng nơ-ron cơ bản từ chính nền tảng Logistic Regression (Chương 21) đã học, rồi tìm hiểu hai kiến trúc chuyên biệt quan trọng nhất — CNN (Convolutional Neural Network) cho dữ liệu ảnh, và RNN (Recurrent Neural Network) cho dữ liệu chuỗi — nền tảng lịch sử dẫn tới kiến trúc Transformer đứng sau LLM (khóa AI Engineer).",
      "time": 45,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "phan-15-reinforcement-learning",
      "title": "Reinforcement Learning & RLHF",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-4",
      "chapter": "machine-learning/phan-15-reinforcement-learning.html",
      "summary": "Chương 1 đã giới thiệu 3 loại học chính: Supervised (Phần 6-8), Unsupervised (Phần 9), và Reinforcement Learning — loại duy nhất chưa có chương riêng, cho tới bây giờ. Phần 15 xây dựng nền tảng RL từ đầu, rồi khép lại toàn bộ giáo trình bằng một sự thật thú vị: chính RL là công nghệ đứng sau việc \"dạy\" các LLM hiện đại (khóa AI Engineer) trở nên hữu ích và an toàn hơn, qua kỹ thuật gọi là RLHF.",
      "time": 20,
      "related": [],
      "comingSoon": false,
      "quiz": null
    },
    {
      "id": "tong-hop-cheat-sheet",
      "title": "📋 Tổng hợp công thức & khái niệm cốt lõi — 46 chương",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-4",
      "chapter": "machine-learning/tong-hop-cheat-sheet.html",
      "summary": "Trang tra cứu nhanh 1 dòng/chương. Gõ từ khóa để lọc, hoặc in ra PDF để ôn tập.",
      "time": 10,
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
            "phan-1-nen-tang-ml",
            "phan-3-truc-quan-hoa-du-lieu"
          ]
        }
      ],
      "right": [
        {
          "nodes": [
            "phan-2-toan-cho-ml",
            "phan-4-tien-xu-ly-du-lieu"
          ]
        }
      ]
    },
    "stage-2": {
      "left": [
        {
          "nodes": [
            "phan-6-supervised-learning",
            "phan-8-ensemble-random-forest"
          ]
        }
      ],
      "right": [
        {
          "nodes": [
            "phan-5-feature-engineering-pipeline",
            "phan-7-knn-bayes-tree-svm"
          ]
        }
      ]
    },
    "stage-3": {
      "left": [
        {
          "nodes": [
            "phan-9-unsupervised-clustering-pca",
            "phan-11-explainable-ai-deployment"
          ]
        }
      ],
      "right": [
        {
          "nodes": [
            "phan-10-model-evaluation-tuning",
            "phan-12-sql-mlops"
          ]
        }
      ]
    },
    "stage-4": {
      "left": [
        {
          "nodes": [
            "phan-14-deep-learning",
            "tong-hop-cheat-sheet"
          ]
        }
      ],
      "right": [
        {
          "nodes": [
            "phan-13-kaggle-portfolio",
            "phan-15-reinforcement-learning"
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
