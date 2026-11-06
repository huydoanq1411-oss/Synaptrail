/* Full Stack tree plus preserved legacy topic nodes. */
globalThis.SynaptrailRoadmapData = {
  "course": "fullstack-js",
  "title": "Full Stack Developer",
  "nodes": [
    {
      "id": "fs-frontend",
      "title": "Frontend",
      "summary": "Từ trang tĩnh đến ứng dụng giao diện có tương tác.",
      "side": "spine",
      "parent": null,
      "type": "bat-buoc",
      "chapter": "fullstack-js/tai-nguyen.html#frontend",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-html",
      "title": "HTML",
      "chapter": "html-css-nnlt/chapter01.html",
      "summary": "Học cấu trúc nội dung và các phần tử HTML.",
      "kind": "lesson",
      "parent": "fs-frontend",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-css",
      "title": "CSS",
      "chapter": "html-css-nnlt/chapter08.html",
      "summary": "Học selector và cách định dạng trang web.",
      "kind": "lesson",
      "parent": "fs-frontend",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-static-webpages",
      "title": "Checkpoint — Static Webpages",
      "chapter": "fullstack-js/tai-nguyen.html#static-webpages",
      "summary": "Tạo landing page có bố cục responsive.",
      "kind": "checkpoint",
      "practice": "html-css-nnlt/chapter16.html",
      "criteria": [
        "Có cấu trúc HTML ngữ nghĩa.",
        "Bố cục dùng được trên điện thoại và máy tính.",
        "Liên kết và hình ảnh có nội dung phù hợp."
      ],
      "parent": "fs-frontend",
      "side": "left",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-javascript",
      "title": "JavaScript",
      "chapter": "javascript-nnlt/chapter01.html",
      "summary": "Học nền tảng ngôn ngữ trước khi thao tác DOM.",
      "kind": "lesson",
      "parent": "fs-frontend",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-interactivity",
      "title": "Checkpoint — Interactivity",
      "chapter": "fullstack-js/tai-nguyen.html#interactivity",
      "summary": "Tạo Todo App có thêm, sửa và xóa công việc.",
      "kind": "checkpoint",
      "practice": "javascript-nnlt/chapter25.html",
      "criteria": [
        "Nhập và hiển thị công việc.",
        "Xử lý trạng thái danh sách rỗng.",
        "Thao tác được bằng bàn phím."
      ],
      "parent": "fs-frontend",
      "side": "left",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-npm",
      "title": "npm",
      "chapter": "javascript-nnlt/chapter21.html",
      "summary": "Tìm hiểu package.json và quản lý package.",
      "kind": "lesson",
      "parent": "fs-frontend",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-external-packages",
      "title": "Checkpoint — External Packages",
      "chapter": "fullstack-js/tai-nguyen.html#external-packages",
      "summary": "Thực hành đọc và quản lý dependency của dự án.",
      "kind": "checkpoint",
      "practice": "javascript-nnlt/chapter21.html",
      "criteria": [
        "Giải thích dependency và devDependency.",
        "Đọc được scripts trong package.json.",
        "Ghi lại package và mục đích sử dụng."
      ],
      "parent": "fs-frontend",
      "side": "left",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-git",
      "title": "Git",
      "chapter": "git/chapter01.html",
      "summary": "Theo dõi lịch sử thay đổi mã nguồn.",
      "kind": "lesson",
      "parent": "fs-frontend",
      "side": "right",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-github",
      "title": "GitHub",
      "chapter": "git/chapter02.html",
      "summary": "Repository, Pull Request và quy trình cộng tác.",
      "kind": "lesson",
      "parent": "fs-frontend",
      "side": "right",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-collaborative-work",
      "title": "Checkpoint — Collaborative Work",
      "chapter": "fullstack-js/tai-nguyen.html#collaborative-work",
      "summary": "Thực hành nhánh và Pull Request trên repository thử.",
      "kind": "checkpoint",
      "practice": "git/chapter02.html",
      "criteria": [
        "Tạo nhánh riêng cho một thay đổi.",
        "Viết mô tả Pull Request rõ ràng.",
        "Đọc diff trước khi hợp nhất."
      ],
      "parent": "fs-frontend",
      "side": "right",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-react",
      "title": "React",
      "chapter": "react/chapter01.html",
      "summary": "Xây giao diện từ component và JSX.",
      "kind": "lesson",
      "parent": "fs-frontend",
      "side": "right",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-tailwind",
      "title": "Tailwind CSS",
      "chapter": "fullstack-js/tai-nguyen.html#tailwind",
      "summary": "Học cài đặt và cách sử dụng utility classes từ tài liệu chính thức.",
      "kind": "official",
      "url": "https://tailwindcss.com/docs/installation",
      "parent": "fs-frontend",
      "side": "right",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-frontend-apps",
      "title": "Checkpoint — Frontend Apps",
      "chapter": "fullstack-js/tai-nguyen.html#frontend-apps",
      "summary": "Xây ứng dụng React hoàn chỉnh theo bài dự án.",
      "kind": "checkpoint",
      "practice": "react/chapter26.html",
      "criteria": [
        "Chia giao diện thành component.",
        "Có xử lý dữ liệu và tương tác.",
        "Kiểm tra loading, lỗi và danh sách rỗng."
      ],
      "parent": "fs-frontend",
      "side": "right",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-backend",
      "title": "Backend",
      "summary": "Học Node.js, dữ liệu, API và xác thực. Node.js là lựa chọn theo tài liệu nguồn; có thể chọn ngôn ngữ backend khác.",
      "side": "spine",
      "parent": null,
      "type": "bat-buoc",
      "chapter": "fullstack-js/tai-nguyen.html#backend",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-nodejs",
      "title": "Node.js",
      "chapter": "javascript-nnlt/chapter20.html",
      "summary": "Bắt đầu môi trường JavaScript phía server.",
      "kind": "lesson",
      "parent": "fs-backend",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-cli-apps",
      "title": "Checkpoint — CLI Apps",
      "chapter": "fullstack-js/tai-nguyen.html#cli-apps",
      "summary": "Viết chương trình dòng lệnh đọc và ghi JSON.",
      "kind": "checkpoint",
      "practice": "javascript-nnlt/chapter22.html",
      "criteria": [
        "Chạy được bằng terminal.",
        "Kiểm tra đầu vào và lỗi file.",
        "Đọc lại dữ liệu đã ghi."
      ],
      "parent": "fs-backend",
      "side": "left",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-postgresql",
      "title": "PostgreSQL",
      "chapter": "fullstack-js/tai-nguyen.html#postgresql",
      "summary": "Học SQL và cơ sở dữ liệu quan hệ qua PostgreSQL Tutorial; không thay bằng bài MySQL.",
      "kind": "official",
      "url": "https://www.postgresql.org/docs/current/tutorial.html",
      "parent": "fs-backend",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-simple-crud",
      "title": "Checkpoint — Simple CRUD Apps",
      "chapter": "fullstack-js/tai-nguyen.html#simple-crud",
      "summary": "Xây API thêm, đọc, sửa, xóa theo bài Express. Bài hiện có lưu RAM; phần PostgreSQL học riêng ở nút tương ứng.",
      "kind": "checkpoint",
      "practice": "javascript-nnlt/chapter24.html",
      "criteria": [
        "Có đủ bốn thao tác CRUD.",
        "Kiểm tra dữ liệu không hợp lệ.",
        "Phân biệt 201, 204, 400 và 404."
      ],
      "parent": "fs-backend",
      "side": "left",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-restful-apis",
      "title": "RESTful APIs",
      "chapter": "javascript-nnlt/chapter24.html",
      "summary": "HTTP, endpoint và middleware qua Express REST API.",
      "kind": "lesson",
      "parent": "fs-backend",
      "side": "right",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-jwt-auth",
      "title": "JWT Auth",
      "chapter": "security/chapter06.html",
      "summary": "Tìm hiểu JWT và session; xác thực không đồng nghĩa với phân quyền.",
      "kind": "lesson",
      "parent": "fs-backend",
      "side": "right",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-redis",
      "title": "Redis",
      "chapter": "fullstack-js/tai-nguyen.html#redis",
      "summary": "Đọc hướng dẫn bắt đầu và kiểu dữ liệu Redis.",
      "kind": "official",
      "url": "https://redis.io/docs/latest/develop/get-started/",
      "parent": "fs-backend",
      "side": "right",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-complete-app",
      "title": "Checkpoint — Complete App",
      "chapter": "fullstack-js/tai-nguyen.html#complete-app",
      "summary": "Kết hợp giao diện, API và cơ sở dữ liệu trong một dự án.",
      "kind": "checkpoint",
      "practice": "projects/fullstack-js.html",
      "criteria": [
        "Mô tả đường đi của dữ liệu giữa các tầng.",
        "Có kiểm tra đầu vào và quyền truy cập.",
        "Có hướng dẫn chạy và dữ liệu thử."
      ],
      "parent": "fs-backend",
      "side": "right",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-devops",
      "title": "DevOps",
      "summary": "Từ Linux và dịch vụ AWS đến triển khai, giám sát, tự động hóa và hạ tầng.",
      "side": "spine",
      "parent": null,
      "type": "bat-buoc",
      "chapter": "fullstack-js/tai-nguyen.html#devops",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-linux",
      "title": "Linux Basics",
      "chapter": "fullstack-js/tai-nguyen.html#linux",
      "summary": "Đọc tài liệu Ubuntu Server về terminal, file và quản trị hệ thống.",
      "kind": "official",
      "url": "https://documentation.ubuntu.com/server/",
      "parent": "fs-devops",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-aws",
      "title": "Basic AWS Services",
      "chapter": "fullstack-js/tai-nguyen.html#aws",
      "summary": "Tra cứu các dịch vụ AWS trong nhóm này.",
      "kind": "official",
      "url": "https://docs.aws.amazon.com/",
      "parent": "fs-devops",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-ec2",
      "title": "EC2",
      "chapter": "fullstack-js/tai-nguyen.html#ec2",
      "summary": "Tìm hiểu máy chủ ảo EC2.",
      "kind": "official",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html",
      "parent": "fs-devops",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-vpc",
      "title": "VPC",
      "chapter": "fullstack-js/tai-nguyen.html#vpc",
      "summary": "Tìm hiểu mạng riêng ảo VPC.",
      "kind": "official",
      "url": "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
      "parent": "fs-devops",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-s3",
      "title": "S3",
      "chapter": "fullstack-js/tai-nguyen.html#s3",
      "summary": "Tìm hiểu lưu trữ object với S3.",
      "kind": "official",
      "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
      "parent": "fs-devops",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-route53",
      "title": "Route53",
      "chapter": "fullstack-js/tai-nguyen.html#route53",
      "summary": "Tìm hiểu DNS và Route 53.",
      "kind": "official",
      "url": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html",
      "parent": "fs-devops",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-ses",
      "title": "SES",
      "chapter": "fullstack-js/tai-nguyen.html#ses",
      "summary": "Tìm hiểu dịch vụ email Amazon SES.",
      "kind": "official",
      "url": "https://docs.aws.amazon.com/ses/latest/dg/Welcome.html",
      "parent": "fs-devops",
      "side": "left",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-deployment",
      "title": "Checkpoint — Deployment",
      "chapter": "fullstack-js/tai-nguyen.html#deployment",
      "summary": "Đọc bài triển khai VPS có sẵn; đây là ví dụ DigitalOcean, không phải bài triển khai AWS.",
      "kind": "checkpoint",
      "practice": "docker/chapter03.html",
      "criteria": [
        "Có hướng dẫn cấu hình môi trường.",
        "Giải thích domain và HTTPS.",
        "Có cách kiểm tra và phục hồi khi triển khai lỗi."
      ],
      "parent": "fs-devops",
      "side": "left",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-github-actions",
      "title": "GitHub Actions",
      "chapter": "fullstack-js/tai-nguyen.html#github-actions",
      "summary": "Học workflow và CI/CD từ GitHub Docs.",
      "kind": "official",
      "url": "https://docs.github.com/en/actions",
      "parent": "fs-devops",
      "side": "right",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-ci-cd",
      "title": "Checkpoint — CI / CD",
      "chapter": "fullstack-js/tai-nguyen.html#ci-cd",
      "summary": "Lập workflow kiểm tra dự án trước khi triển khai.",
      "kind": "checkpoint",
      "practice": "fullstack-js/tai-nguyen.html#github-actions",
      "criteria": [
        "Chạy kiểm tra khi có thay đổi.",
        "Phân biệt CI với bước triển khai.",
        "Giữ thông tin bí mật ngoài mã nguồn."
      ],
      "parent": "fs-devops",
      "side": "right",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-monit",
      "title": "Monit",
      "chapter": "fullstack-js/tai-nguyen.html#monit",
      "summary": "Đọc hướng dẫn giám sát hệ thống bằng Monit.",
      "kind": "official",
      "url": "https://mmonit.com/monit/documentation/monit.html",
      "parent": "fs-devops",
      "side": "right",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-monitoring",
      "title": "Checkpoint — Monitoring",
      "chapter": "fullstack-js/tai-nguyen.html#monitoring",
      "summary": "Xác định dịch vụ cần theo dõi và điều kiện cảnh báo.",
      "kind": "checkpoint",
      "practice": "fullstack-js/tai-nguyen.html#monit",
      "criteria": [
        "Có danh sách dịch vụ cần theo dõi.",
        "Xác định trạng thái lỗi và cảnh báo.",
        "Ghi cách kiểm chứng cảnh báo."
      ],
      "parent": "fs-devops",
      "side": "right",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-ansible",
      "title": "Ansible",
      "chapter": "fullstack-js/tai-nguyen.html#ansible",
      "summary": "Bắt đầu inventory và playbook để tự động hóa cấu hình.",
      "kind": "official",
      "url": "https://docs.ansible.com/ansible/latest/getting_started/index.html",
      "parent": "fs-devops",
      "side": "right",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-automation",
      "title": "Checkpoint — Automation",
      "chapter": "fullstack-js/tai-nguyen.html#automation",
      "summary": "Mô tả một cấu hình hệ thống có thể thực hiện lại bằng playbook.",
      "kind": "checkpoint",
      "practice": "fullstack-js/tai-nguyen.html#ansible",
      "criteria": [
        "Có inventory thử nghiệm.",
        "Tách biến cấu hình khỏi tác vụ.",
        "Giải thích kết quả khi chạy lại."
      ],
      "parent": "fs-devops",
      "side": "right",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-terraform",
      "title": "Terraform",
      "chapter": "fullstack-js/tai-nguyen.html#terraform",
      "summary": "Học Infrastructure as Code qua Terraform Tutorials.",
      "kind": "official",
      "url": "https://developer.hashicorp.com/terraform/tutorials",
      "parent": "fs-devops",
      "side": "right",
      "type": "chi-tiet",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "fs-infrastructure",
      "title": "Checkpoint — Infrastructure",
      "chapter": "fullstack-js/tai-nguyen.html#infrastructure",
      "summary": "Lập mô hình hạ tầng và đọc kế hoạch thay đổi trước khi thực hiện.",
      "kind": "checkpoint",
      "practice": "fullstack-js/tai-nguyen.html#terraform",
      "criteria": [
        "Xác định các tài nguyên và quan hệ.",
        "Đọc được kế hoạch thay đổi.",
        "Giải thích cách quản lý state."
      ],
      "parent": "fs-devops",
      "side": "right",
      "type": "tuy-chon",
      "related": [],
      "comingSoon": false,
      "time": 0
    },
    {
      "id": "stage-1",
      "title": "Quản lý phiên bản",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Git — Kiểm soát phiên bản · GitHub & Quy trình làm việc nhóm",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "legacy": true
    },
    {
      "id": "chapter01",
      "title": "Git — Kiểm soát phiên bản",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "git/chapter01.html",
      "summary": "Công cụ bắt buộc với mọi lập trình viên — theo dõi lịch sử thay đổi code và cho phép làm việc nhóm an toàn.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "git",
      "progressNode": "chapter01",
      "legacy": true
    },
    {
      "id": "chapter02",
      "title": "GitHub & Quy trình làm việc nhóm",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-1",
      "chapter": "git/chapter02.html",
      "summary": "GitHub lưu trữ repository trên đám mây và là nền tảng cộng tác phổ biến nhất — Pull Request là trái tim của làm việc nhóm chuyên nghiệp.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "git",
      "progressNode": "chapter02",
      "legacy": true
    },
    {
      "id": "stage-2",
      "title": "TypeScript",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "TypeScript — Kiểu dữ liệu cơ bản · TypeScript — Interface, Type & Generics",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "legacy": true
    },
    {
      "id": "chapter03",
      "title": "TypeScript — Kiểu dữ liệu cơ bản",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-2",
      "chapter": "typescript/chapter01.html",
      "summary": "JavaScript được bổ sung hệ thống kiểu tĩnh — phát hiện lỗi ngay lúc viết code thay vì đợi tới khi chạy.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "typescript",
      "progressNode": "chapter01",
      "legacy": true
    },
    {
      "id": "chapter04",
      "title": "TypeScript — Interface, Type & Generics",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-2",
      "chapter": "typescript/chapter02.html",
      "summary": "Định nghĩa \"hình dạng\" của object và viết code tổng quát hoạt động với nhiều kiểu dữ liệu.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "typescript",
      "progressNode": "chapter02",
      "legacy": true
    },
    {
      "id": "stage-3",
      "title": "Giao diện & CSS",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Bootstrap — Grid System · Bootstrap — Components & Utilities · SASS/SCSS — Biến & Nesting · SASS/SCSS — Mixin & Tổ chức Folder",
      "time": 20,
      "related": [],
      "comingSoon": false,
      "legacy": true
    },
    {
      "id": "chapter05",
      "title": "Bootstrap — Grid System",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-3",
      "chapter": "bootstrap/chapter01.html",
      "summary": "Framework CSS phổ biến nhất thế giới — xây giao diện responsive nhanh chóng nhờ hệ lưới 12 cột có sẵn.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "bootstrap",
      "progressNode": "chapter01",
      "legacy": true
    },
    {
      "id": "chapter06",
      "title": "Bootstrap — Components & Utilities",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-3",
      "chapter": "bootstrap/chapter02.html",
      "summary": "Thư viện component dựng sẵn (nút, form, modal, navbar...) và các class tiện ích giúp code HTML thuần gần như không cần viết CSS riêng.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "bootstrap",
      "progressNode": "chapter02",
      "legacy": true
    },
    {
      "id": "chapter07",
      "title": "SASS/SCSS — Biến & Nesting",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-3",
      "chapter": "sass/chapter01.html",
      "summary": "CSS Preprocessor — viết CSS với cú pháp mạnh mẽ hơn (biến, lồng nhau, hàm...), rồi biên dịch ra CSS thuần.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "sass",
      "progressNode": "chapter01",
      "legacy": true
    },
    {
      "id": "chapter08",
      "title": "SASS/SCSS — Mixin & Tổ chức Folder",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-3",
      "chapter": "sass/chapter02.html",
      "summary": "Tái sử dụng khối CSS bằng Mixin, và cách tổ chức nhiều file .scss cho dự án lớn theo chuẩn thực tế.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "sass",
      "progressNode": "chapter02",
      "legacy": true
    },
    {
      "id": "stage-4",
      "title": "Dữ liệu & ORM",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "MySQL — Truy vấn cơ bản · MySQL — JOIN & Truy vấn nâng cao · Kết nối Node.js với MySQL · ORM Sequelize · ORM Prisma",
      "time": 25,
      "related": [],
      "comingSoon": false,
      "legacy": true
    },
    {
      "id": "chapter09",
      "title": "MySQL — Truy vấn cơ bản",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-4",
      "chapter": "mysql/chapter01.html",
      "summary": "Hệ quản trị cơ sở dữ liệu quan hệ phổ biến nhất — nền tảng lưu trữ dữ liệu có cấu trúc cho hầu hết ứng dụng web.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "mysql",
      "progressNode": "chapter01",
      "legacy": true
    },
    {
      "id": "chapter10",
      "title": "MySQL — JOIN & Truy vấn nâng cao",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-4",
      "chapter": "mysql/chapter02.html",
      "summary": "Kết hợp dữ liệu từ nhiều bảng có quan hệ với nhau — kỹ năng SQL quan trọng nhất sau CRUD cơ bản.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "mysql",
      "progressNode": "chapter02",
      "legacy": true
    },
    {
      "id": "chapter11",
      "title": "Kết nối Node.js với MySQL",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-4",
      "chapter": "mysql/chapter03.html",
      "summary": "Truy vấn database trực tiếp từ code Node.js/Express — bước đệm trước khi dùng ORM tiện lợi hơn ở chương sau.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "mysql",
      "progressNode": "chapter03",
      "legacy": true
    },
    {
      "id": "chapter12",
      "title": "ORM Sequelize",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-4",
      "chapter": "orm/chapter01.html",
      "summary": "Object-Relational Mapping — thao tác database bằng object/class JavaScript thay vì viết SQL thuần tay.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "orm",
      "progressNode": "chapter01",
      "legacy": true
    },
    {
      "id": "chapter13",
      "title": "ORM Prisma",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-4",
      "chapter": "orm/chapter02.html",
      "summary": "ORM hiện đại, được ưa chuộng gần đây nhờ type-safety mạnh mẽ khi kết hợp với TypeScript.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "orm",
      "progressNode": "chapter02",
      "legacy": true
    },
    {
      "id": "stage-5",
      "title": "GraphQL & Real-time",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "GraphQL — Query & Mutation · GraphQL Server với Apollo · Socket.IO — Giao tiếp Real-time",
      "time": 15,
      "related": [],
      "comingSoon": false,
      "legacy": true
    },
    {
      "id": "chapter14",
      "title": "GraphQL — Query & Mutation",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-5",
      "chapter": "graphql/chapter01.html",
      "summary": "Ngôn ngữ truy vấn API thay thế REST — client tự quyết định CHÍNH XÁC dữ liệu nào cần lấy, không thừa không thiếu.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "graphql",
      "progressNode": "chapter01",
      "legacy": true
    },
    {
      "id": "chapter15",
      "title": "GraphQL Server với Apollo",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-5",
      "chapter": "graphql/chapter02.html",
      "summary": "Xây dựng GraphQL API bằng Node.js — Apollo Server là thư viện phổ biến nhất cho việc này.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "graphql",
      "progressNode": "chapter02",
      "legacy": true
    },
    {
      "id": "chapter16",
      "title": "Socket.IO — Giao tiếp Real-time",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-5",
      "chapter": "socketio/chapter01.html",
      "summary": "HTTP request-response truyền thống không phù hợp cho chat, thông báo tức thời — Socket.IO cho phép server \"chủ động\" gửi dữ liệu về client.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "socketio",
      "progressNode": "chapter01",
      "legacy": true
    },
    {
      "id": "stage-6",
      "title": "Backend với NestJS",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "NestJS — Kiến trúc Module/Controller/Service · NestJS — Dependency Injection & DTO",
      "time": 10,
      "related": [],
      "comingSoon": false,
      "legacy": true
    },
    {
      "id": "chapter17",
      "title": "NestJS — Kiến trúc Module/Controller/Service",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-6",
      "chapter": "nestjs/chapter01.html",
      "summary": "Framework Node.js theo kiến trúc có cấu trúc rõ ràng, lấy cảm hứng từ Angular — phổ biến cho backend quy mô doanh nghiệp.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "nestjs",
      "progressNode": "chapter01",
      "legacy": true
    },
    {
      "id": "chapter18",
      "title": "NestJS — Dependency Injection & DTO",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-6",
      "chapter": "nestjs/chapter02.html",
      "summary": "Hai khái niệm cốt lõi giúp code NestJS an toàn, dễ test và dễ bảo trì hơn hẳn cách viết Express thông thường.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "nestjs",
      "progressNode": "chapter02",
      "legacy": true
    },
    {
      "id": "stage-7",
      "title": "Đóng gói & triển khai",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Docker — Đóng gói ứng dụng · Docker Compose — Multi-container · Triển khai VPS DigitalOcean",
      "time": 15,
      "related": [],
      "comingSoon": false,
      "legacy": true
    },
    {
      "id": "chapter19",
      "title": "Docker — Đóng gói ứng dụng",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-7",
      "chapter": "docker/chapter01.html",
      "summary": "Giải quyết vĩnh viễn câu nói kinh điển \"chạy được trên máy tôi mà\" — đóng gói ứng dụng cùng toàn bộ môi trường cần thiết.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "docker",
      "progressNode": "chapter01",
      "legacy": true
    },
    {
      "id": "chapter20",
      "title": "Docker Compose — Multi-container",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-7",
      "chapter": "docker/chapter02.html",
      "summary": "Ứng dụng thực tế cần nhiều container phối hợp (app + database + cache) — Docker Compose quản lý tất cả bằng một file cấu hình.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "docker",
      "progressNode": "chapter02",
      "legacy": true
    },
    {
      "id": "chapter21",
      "title": "Triển khai VPS DigitalOcean",
      "type": "chi-tiet",
      "side": "right",
      "parent": "stage-7",
      "chapter": "docker/chapter03.html",
      "summary": "Đưa ứng dụng lên internet thật — từ máy tính cá nhân tới một server có thể truy cập toàn cầu.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "docker",
      "progressNode": "chapter03",
      "legacy": true
    },
    {
      "id": "stage-8",
      "title": "Dự án Full Stack",
      "type": "bat-buoc",
      "side": "spine",
      "parent": null,
      "chapter": null,
      "summary": "Dự án Full Stack",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "legacy": true
    },
    {
      "id": "chapter22",
      "title": "Dự án Full Stack",
      "type": "chi-tiet",
      "side": "left",
      "parent": "stage-8",
      "chapter": "projects/fullstack-js.html",
      "summary": "Nội dung thuộc khóa Fullstack JavaScript.",
      "time": 5,
      "related": [],
      "comingSoon": false,
      "quiz": null,
      "progressCourse": "projects",
      "progressNode": "fullstack-js",
      "legacy": true
    }
  ],
  "layout": {
    "stage-1": {
      "left": [],
      "right": [
        {
          "nodes": [
            "chapter01",
            "chapter02"
          ]
        }
      ]
    },
    "stage-2": {
      "left": [
        {
          "nodes": [
            "chapter03",
            "chapter04"
          ]
        }
      ],
      "right": []
    },
    "stage-3": {
      "left": [
        {
          "title": "Bootstrap",
          "tiles": true,
          "nodes": [
            "chapter05",
            "chapter06"
          ]
        }
      ],
      "right": [
        {
          "title": "Sass / SCSS",
          "hub": false,
          "tiles": true,
          "nodes": [
            "chapter07",
            "chapter08"
          ]
        }
      ]
    },
    "stage-4": {
      "left": [
        {
          "title": "MySQL & kết nối Node.js",
          "tiles": false,
          "nodes": [
            "chapter09",
            "chapter10",
            "chapter11"
          ]
        }
      ],
      "right": [
        {
          "title": "Sequelize & Prisma",
          "hub": true,
          "tiles": false,
          "nodes": [
            "chapter12",
            "chapter13"
          ]
        }
      ]
    },
    "stage-5": {
      "left": [
        {
          "nodes": [
            "chapter14",
            "chapter15"
          ]
        }
      ],
      "right": [
        {
          "nodes": [
            "chapter16"
          ]
        }
      ]
    },
    "stage-6": {
      "left": [
        {
          "nodes": [
            "chapter17",
            "chapter18"
          ]
        }
      ],
      "right": []
    },
    "stage-7": {
      "left": [
        {
          "nodes": [
            "chapter19",
            "chapter20"
          ]
        }
      ],
      "right": [
        {
          "nodes": [
            "chapter21"
          ]
        }
      ]
    },
    "stage-8": {
      "left": [
        {
          "nodes": [
            "chapter22"
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
  ],
  "fullstackGroups": [
    "fs-frontend",
    "fs-backend",
    "fs-devops"
  ]
};
