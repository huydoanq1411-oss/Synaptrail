/* Loaded only on the separate quiz page. */
globalThis.SynaptrailAlgorithmQuizzes = {
  "course": "javascript-nnlt",
  "title": "JavaScript",
  "chapters": {
    "chapter01": {
      "title": "Giới thiệu JavaScript",
      "chapter": "chapter01.html",
      "questions": [
        {
          "question": "1. JavaScript và Java có mối quan hệ gì với nhau?",
          "code": "",
          "options": [
            "JavaScript là phiên bản rút gọn của Java",
            "Hai ngôn ngữ hoàn toàn khác nhau, chỉ trùng tên",
            "JavaScript chạy trên JVM giống Java"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter04": {
      "title": "Biến (var/let/const)",
      "chapter": "chapter04.html",
      "questions": [
        {
          "question": "1. Từ khóa nào NÊN TRÁNH dùng trong code JavaScript hiện đại?",
          "code": "",
          "options": [
            "let",
            "const",
            "var"
          ],
          "answer": 2,
          "explanation": ""
        }
      ]
    },
    "chapter08": {
      "title": "Vòng lặp",
      "chapter": "chapter08.html",
      "questions": [
        {
          "question": "1. Vòng lặp nào phù hợp để duyệt các GIÁ TRỊ của một mảng?",
          "code": "",
          "options": [
            "for...of",
            "for...in",
            "for...key"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    },
    "chapter10": {
      "title": "Mảng (Array)",
      "chapter": "chapter10.html",
      "questions": [
        {
          "question": "1. Phương thức nào dùng để LỌC các phần tử thỏa điều kiện trong mảng?",
          "code": "",
          "options": [
            "map()",
            "filter()",
            "reduce()"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter12": {
      "title": "DOM cơ bản",
      "chapter": "chapter12.html",
      "questions": [
        {
          "question": "1. Phương thức nào dùng để lắng nghe sự kiện (VD: click) trên một phần tử HTML?",
          "code": "",
          "options": [
            "onClick()",
            "addEventListener()",
            "listenEvent()"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter15": {
      "title": "async/await",
      "chapter": "chapter15.html",
      "questions": [
        {
          "question": "1. Từ khóa nào tạm dừng thực thi cho tới khi Promise hoàn thành?",
          "code": "",
          "options": [
            "async",
            "await",
            "then"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter19": {
      "title": "Module (import/export)",
      "chapter": "chapter19.html",
      "questions": [
        {
          "question": "1. Mỗi file JS Module có thể có tối đa bao nhiêu default export?",
          "code": "",
          "options": [
            "1",
            "Không giới hạn",
            "2"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    },
    "chapter24": {
      "title": "Express — REST API & Middleware",
      "chapter": "chapter24.html",
      "questions": [
        {
          "question": "1. Middleware cần làm gì nếu đã trả response ở một nhánh lỗi?",
          "code": "",
          "options": [
            "Luôn gọi next để Express gửi thêm body",
            "Kết thúc nhánh đó, không chuyển tiếp như thể request vẫn cần xử lý",
            "Không bao giờ được trả response trong middleware",
            "Tự động tạo kết nối MySQL"
          ],
          "answer": 1,
          "explanation": "Middleware có thể kết thúc response hoặc gọi next để tiếp tục. Nhánh đã phản hồi phải dừng; gọi tiếp có thể dẫn tới gửi hai lần. Middleware không tự tạo database, và không bị cấm trả response."
        },
        {
          "question": "2. Đang có sinh viên ID 1 và 2; xóa ID 1 rồi tạo mới trong cùng tiến trình. Bộ đếm của bài cấp ID nào?",
          "code": "",
          "options": [
            "1 để tái sử dụng ngay ID đã xóa",
            "2 vì mảng còn một phần tử",
            "3 vì nextId tăng độc lập với số bản ghi",
            "ID của người đang đăng nhập"
          ],
          "answer": 2,
          "explanation": "nextId đã tăng tới 3 sau hai lần tạo, và remove không giảm nó. length + 1 có thể trùng ID 2. Mẫu không có người dùng đăng nhập và không bảo đảm ID giữa nhiều server."
        },
        {
          "question": "3. Sau DELETE thành công với status 204, client nên đọc kết quả như thế nào?",
          "code": "",
          "options": [
            "Không trông chờ JSON body; mẫu dùng response.text để quan sát chuỗi rỗng",
            "Luôn gọi response.json vì mọi API đều có JSON",
            "Bắt server gửi đối tượng đã xóa kèm 204",
            "Gửi lại POST trước khi đọc status"
          ],
          "answer": 0,
          "explanation": "204 không có body. Đọc JSON từ body rỗng có thể lỗi; nếu muốn trả đối tượng thì cần hợp đồng/status khác, không nhét JSON vào 204. Không cần POST lại để đọc status."
        },
        {
          "question": "4. Request có Authorization: chuoi-bat-ky chứng minh điều gì về quyền admin?",
          "code": "",
          "options": [
            "Chắc chắn đã đăng nhập",
            "Chắc chắn có quyền sửa mọi sinh viên",
            "Express tự xác minh chữ ký token",
            "Chưa chứng minh gì; cần cơ chế xác thực và kiểm quyền thực sự"
          ],
          "answer": 3,
          "explanation": "Sự hiện diện của header không chứng minh danh tính hay quyền. Express không tự xác minh token chỉ vì có header. Mẫu không triển khai auth, nên không giả vờ bảo vệ admin bằng kiểm tra chuỗi tồn tại."
        },
        {
          "question": "5. Vì sao danh sách trở lại rỗng khi dừng và mở lại mẫu API?",
          "code": "",
          "options": [
            "Do HTTP 201 luôn xóa dữ liệu khi kết thúc request",
            "Map nằm trong RAM và được tạo mới khi ứng dụng khởi động",
            "Vì PATCH luôn xóa cả database",
            "Do Node không thể kết nối MySQL"
          ],
          "answer": 1,
          "explanation": "Map và counter thuộc app instance trong RAM, không phải database. Status 201 không điều khiển vòng đời lưu trữ, PATCH trong bài chỉ sửa tên, và Node có thể kết nối MySQL như bài liên kết."
        }
      ]
    },
    "chapter26": {
      "title": "Dự án: Todo App (React)",
      "chapter": "chapter26.html",
      "questions": [
        {
          "question": "1. Trong React, khi muốn cập nhật một mảng trong state, cách làm đúng là gì?",
          "code": "",
          "options": [
            "Tạo mảng mới bằng spread/filter/map rồi gọi setState",
            "Gọi trực tiếp .push() lên mảng state cũ",
            "Sửa trực tiếp phần tử trong mảng state"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    },
    "chapter28": {
      "title": "Bài tập Mảng, Object & Bất đồng bộ",
      "chapter": "chapter28.html",
      "questions": [
        {
          "question": "1. Phương thức nào chạy nhiều Promise song song mà KHÔNG bị dừng khi một Promise reject?",
          "code": "",
          "options": [
            "Promise.all()",
            "Promise.allSettled()",
            "Promise.race()"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter34": {
      "title": "Design Patterns thường gặp trong JS",
      "chapter": "chapter34.html",
      "questions": [
        {
          "question": "1. Observer Pattern là nền tảng của API quen thuộc nào trong JavaScript?",
          "code": "",
          "options": [
            "JSON.stringify()",
            "addEventListener() và EventEmitter",
            "Array.prototype.map()"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter22": {
      "title": "File System (fs module)",
      "chapter": "chapter22.html",
      "questions": [
        {
          "question": "1. readFile không chỉ định encoding thường trả gì?",
          "code": "",
          "options": [
            "Object đã kiểm schema",
            "Buffer chứa byte",
            "Một Promise không thể await",
            "HTML đã render"
          ],
          "answer": 1,
          "explanation": "readFile trả Promise; giá trị hoàn tất là Buffer nếu không chỉ định encoding. utf8 cho chuỗi; JSON.parse và kiểm schema là các bước riêng."
        },
        {
          "question": "2. readProgress gặp JSON hỏng phải làm gì theo mẫu?",
          "code": "",
          "options": [
            "Tự xóa file",
            "Trả danh sách rỗng như ENOENT",
            "Báo lỗi và giữ file",
            "Ghi đè version 1"
          ],
          "answer": 2,
          "explanation": "Chỉ lỗi đọc ENOENT được ánh xạ sang dữ liệu ban đầu. JSON hỏng là lỗi parse, không phải thiếu file; mẫu không ghi hay reset file trong đường đọc."
        },
        {
          "question": "3. Cờ wx trong createProgress có tác dụng gì?",
          "code": "",
          "options": [
            "Tạo mới; báo EEXIST nếu tên đã có",
            "Luôn nối cuối file",
            "Tự khóa mọi cập nhật đồng thời",
            "Bảo đảm không mất dữ liệu khi mất điện"
          ],
          "answer": 0,
          "explanation": "wx yêu cầu tạo mới độc quyền và từ chối file đã tồn tại. Nó không phải transaction, không tự thêm chức năng cập nhật hoặc bảo đảm phục hồi sau mất điện."
        },
        {
          "question": "4. path.join có tự bảo vệ khỏi đường dẫn người dùng vượt thư mục cho phép không?",
          "code": "",
          "options": [
            "Có, trên mọi hệ điều hành",
            "Có, khi dùng UTF-8",
            "Có, nếu gọi trong Promise",
            "Không; ghép đường dẫn khác kiểm quyền và phạm vi"
          ],
          "answer": 3,
          "explanation": "path.join ghép và chuẩn hóa các đoạn theo hệ điều hành. Nó không phải cơ chế phân quyền hoặc kiểm soát truy cập; mẫu dùng tên cố định trong thư mục thử riêng."
        },
        {
          "question": "5. Vì sao await writeFile trước khi đọc lại?",
          "code": "",
          "options": [
            "Để biến JSON thành SQL",
            "Để lần đọc trong luồng này diễn ra sau khi ghi hoàn tất",
            "Để khóa mọi tiến trình khác",
            "Để tự ghi vào localStorage"
          ],
          "answer": 1,
          "explanation": "await chờ Promise ghi hoàn tất trước câu lệnh kế tiếp trong luồng này. Nó không khóa tiến trình khác, không thay database và không truy cập localStorage của website."
        }
      ]
    },
    "chapter23": {
      "title": "Express — Server cơ bản",
      "chapter": "chapter23.html",
      "questions": [
        {
          "question": "1. Trong mẫu, /sinh-vien/2 và /sinh-vien?trang=2 khác nhau thế nào?",
          "code": "",
          "options": [
            "Cả hai luôn trả một object sinh viên giống nhau",
            "Đường đầu dùng params.id; đường sau dùng query.trang để phân trang",
            "Query tự biến GET thành POST",
            "Params chỉ dùng để cấu hình cổng"
          ],
          "answer": 1,
          "explanation": "Đường /sinh-vien/:id lấy một bản ghi bằng req.params.id. Route danh sách dùng req.query.trang và trả metadata cùng items; hình dạng phản hồi khác nhau."
        },
        {
          "question": "2. GET /sinh-vien/99 phải trả gì trong dữ liệu mẫu?",
          "code": "",
          "options": [
            "200 với tên Huy tự tạo",
            "400 vì mọi ID không có đều sai cú pháp",
            "404 NOT_FOUND",
            "500 vì bắt buộc có MySQL"
          ],
          "answer": 2,
          "explanation": "99 là số nguyên dương hợp lệ nhưng không có trong danh sách ID 1/2 nên trả 404. abc mới sai định dạng và nhận 400; không tạo sinh viên giả để trả thành công."
        },
        {
          "question": "3. Khi listen báo lỗi cổng bận, start làm gì?",
          "code": "",
          "options": [
            "Báo lỗi, đánh dấu thất bại và không in URL thành công",
            "Vẫn in URL vì đã gọi express()",
            "Xóa app đang dùng cổng",
            "Tự cài lại Express"
          ],
          "answer": 0,
          "explanation": "express() tạo app chưa bảo đảm mở được cổng. Callback listen của Express 5 nhận lỗi; start kiểm error trước, báo lỗi và đánh dấu thất bại thay vì in thành công giả."
        },
        {
          "question": "4. Vì sao nhánh res.status(400).json(...) có return?",
          "code": "",
          "options": [
            "Để tự tạo database",
            "Để JSON trở thành HTML",
            "Để chạy tiếp middleware bất kể response",
            "Để dừng handler, tránh gửi tiếp lần hai"
          ],
          "answer": 3,
          "explanation": "res.json đã gửi phản hồi. return dừng luồng JavaScript của handler trong nhánh đó, giúp không chạy tiếp tới lần gửi khác; return không tự tạo phản hồi."
        },
        {
          "question": "5. GET danh sách trang 3 hợp lệ nhưng hết dữ liệu trả gì?",
          "code": "",
          "options": [
            "404 NOT_FOUND giống ID sinh viên thiếu",
            "200 với items rỗng và metadata trang",
            "400 vì trang nào cũng phải có dữ liệu",
            "Tự quay lại trang 1 mà không báo"
          ],
          "answer": 1,
          "explanation": "Mẫu chấp nhận trang số dương tới 1000; trang 3 không có hàng nhưng request danh sách vẫn hợp lệ nên trả 200 với items rỗng. ID không tồn tại là hợp đồng khác."
        }
      ]
    }
  }
};
