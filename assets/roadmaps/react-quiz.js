/* Loaded only on the separate quiz page. */
globalThis.SynaptrailAlgorithmQuizzes = {
  "course": "react",
  "title": "React",
  "chapters": {
    "chapter01": {
      "title": "Nhập Môn React & JSX",
      "chapter": "chapter01.html",
      "questions": [
        {
          "question": "1. JSX thực chất là cú pháp đường tắt cho lời gọi hàm nào?",
          "options": [
            "document.createElement()",
            "React.createElement()",
            "JSON.parse()",
            "ReactDOM.render()"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "2. Trong JSX, thuộc tính nào thay thế cho class của HTML?",
          "options": [
            "cssClass",
            "styleName",
            "className",
            "Vẫn dùng class bình thường"
          ],
          "answer": 2,
          "explanation": ""
        },
        {
          "question": "3. Tên component React phải tuân theo quy tắc nào?",
          "options": [
            "Viết hoa chữ cái đầu (PascalCase)",
            "Toàn bộ chữ hoa",
            "Bắt đầu bằng dấu gạch dưới",
            "Không có quy tắc nào"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "4. Một component JSX được phép trả về bao nhiêu phần tử gốc?",
          "options": [
            "Không giới hạn",
            "Đúng 2",
            "Đúng 3",
            "Đúng 1 (hoặc dùng Fragment để bọc nhiều phần tử)"
          ],
          "answer": 3,
          "explanation": ""
        }
      ]
    },
    "chapter02": {
      "title": "Props — Truyền Dữ Liệu Giữa Component",
      "chapter": "chapter02.html",
      "questions": [
        {
          "question": "1. Props chảy theo hướng nào giữa các component?",
          "options": [
            "Từ con lên cha",
            "Hai chiều tự do",
            "Từ cha xuống con",
            "Không có hướng cố định"
          ],
          "answer": 2,
          "explanation": ""
        },
        {
          "question": "2. Prop nào bắt buộc phải có khi render danh sách bằng .map()?",
          "options": [
            "id",
            "key",
            "name",
            "Không cần prop nào đặc biệt"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. Component con có được phép sửa trực tiếp props nhận vào không?",
          "options": [
            "Không, props chỉ đọc",
            "Có, thoải mái sửa",
            "Chỉ sửa được số, không sửa được chuỗi",
            "Tùy trình duyệt"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "4. Khi truyền một giá trị số làm prop, cần dùng ký hiệu nào?",
          "options": [
            "Dấu nháy đơn ' '",
            "Dấu nháy kép \" \"",
            "Không cần ký hiệu gì",
            "Dấu ngoặc nhọn { }"
          ],
          "answer": 3,
          "explanation": ""
        }
      ]
    },
    "chapter03": {
      "title": "State & useState Hook",
      "chapter": "chapter03.html",
      "questions": [
        {
          "question": "1. useState(0) trả về gì?",
          "options": [
            "Một object",
            "Một mảng gồm 2 phần tử: giá trị và hàm setter",
            "Chỉ một số duy nhất",
            "Một component mới"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "2. Cách nào ĐÚNG để cập nhật state?",
          "options": [
            "soLan = soLan + 1;",
            "soLan++;",
            "setSoLan(soLan + 1);",
            "Cả ba đều đúng như nhau"
          ],
          "answer": 2,
          "explanation": ""
        },
        {
          "question": "3. Hook nên được gọi ở đâu trong component?",
          "options": [
            "Cấp cao nhất, không trong if/vòng lặp",
            "Chỉ bên trong sự kiện onClick",
            "Bên trong vòng lặp for",
            "Vị trí nào cũng được"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "4. Khác biệt cốt lõi giữa Props và State là gì?",
          "options": [
            "Không có khác biệt nào",
            "Props chỉ dùng cho số, State chỉ dùng cho chuỗi",
            "State không thể thay đổi",
            "Props đến từ component cha, State tự phát sinh và quản lý bên trong chính component"
          ],
          "answer": 3,
          "explanation": ""
        }
      ]
    },
    "chapter04": {
      "title": "Xử Lý Sự Kiện & Form Trong React",
      "chapter": "chapter04.html",
      "questions": [
        {
          "question": "1. Vì sao cần gọi e.preventDefault() trong onSubmit?",
          "options": [
            "Để form chạy nhanh hơn",
            "Để xóa dữ liệu trong form",
            "Để chặn hành vi mặc định là tải lại trang",
            "Không có tác dụng gì trong React"
          ],
          "answer": 2,
          "explanation": ""
        },
        {
          "question": "2. Với checkbox, cần đọc thuộc tính nào để biết trạng thái hiện tại?",
          "options": [
            "value",
            "checked",
            "selected",
            "active"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. Computed property name [name]: value dùng để làm gì trong handler dùng chung?",
          "options": [
            "Cập nhật đúng field trong object state dựa trên tên input",
            "Tạo một input mới",
            "Xóa field khỏi object",
            "Không có tác dụng gì"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "4. Vì sao nên tạo object state MỚI bằng spread thay vì sửa trực tiếp?",
          "options": [
            "Để code ngắn hơn",
            "Vì spread nhanh hơn vòng lặp",
            "Không có lý do gì đặc biệt",
            "Để React nhận ra thay đổi qua tham chiếu và render lại đúng"
          ],
          "answer": 3,
          "explanation": ""
        }
      ]
    },
    "chapter05": {
      "title": "Conditional Rendering — Hiển thị có điều kiện",
      "chapter": "chapter05.html",
      "questions": [
        {
          "question": "1. Component trả về null thì React làm gì?",
          "options": [
            "Báo lỗi",
            "Không render gì cả",
            "Render chữ null",
            "Render component cha"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "2. Với {n && <A />}, khi n = 0 kết quả là gì?",
          "options": [
            "Không hiển thị gì",
            "Hiển thị số 0",
            "Lỗi cú pháp",
            "Hiển thị <A />"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. Cách nào chọn giữa hai giao diện ngay trong JSX?",
          "options": [
            "câu lệnh if",
            "toán tử ba ngôi",
            "vòng lặp for",
            "switch"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter06": {
      "title": "Lists & Keys — Danh sách trong React",
      "chapter": "chapter06.html",
      "questions": [
        {
          "question": "1. key nên đặt ở đâu?",
          "options": [
            "Trên phần tử ngoài cùng trong map",
            "Trong thẻ ul",
            "Trong CSS",
            "Không cần đặt"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Loại key nào tốt nhất?",
          "options": [
            "Math.random()",
            "index",
            "id duy nhất từ dữ liệu",
            "Tên ngẫu nhiên"
          ],
          "answer": 2,
          "explanation": ""
        },
        {
          "question": "3. Phương thức nào biến mảng dữ liệu thành mảng JSX?",
          "options": [
            "forEach",
            "map",
            "reduce",
            "push"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter07": {
      "title": "useEffect — Side Effects & Vòng đời Component",
      "chapter": "chapter07.html",
      "questions": [
        {
          "question": "1. useEffect(fn, []) chạy khi nào?",
          "options": [
            "Mỗi lần render",
            "Một lần sau lần render đầu",
            "Không bao giờ",
            "Khi state đổi"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "2. Hàm trả về từ effect dùng để làm gì?",
          "options": [
            "Cập nhật state",
            "Dọn dẹp tài nguyên",
            "Render lại",
            "Gọi API"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. Thiếu mảng phụ thuộc thì effect chạy khi nào?",
          "options": [
            "Một lần",
            "Sau mỗi lần render",
            "Không chạy",
            "Khi unmount"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter08": {
      "title": "Fetch dữ liệu từ API trong React",
      "chapter": "chapter08.html",
      "questions": [
        {
          "question": "1. Ba trạng thái cần quản lý khi fetch là gì?",
          "options": [
            "Tên, tuổi, email",
            "Đang tải, lỗi, dữ liệu",
            "Start, stop, pause",
            "get, set, delete"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "2. fetch có ném lỗi khi server trả 404 không?",
          "options": [
            "Có",
            "Không, phải kiểm tra res.ok",
            "Chỉ khi 500",
            "Luôn luôn"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. AbortController dùng để làm gì?",
          "options": [
            "Hủy request đang chạy",
            "Tăng tốc request",
            "Mã hóa dữ liệu",
            "Lưu cache"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    },
    "chapter09": {
      "title": "Custom Hooks — Tái sử dụng logic",
      "chapter": "chapter09.html",
      "questions": [
        {
          "question": "1. Custom hook phải đặt tên thế nào?",
          "options": [
            "Bắt đầu bằng use",
            "Kết thúc bằng Hook",
            "Viết hoa toàn bộ",
            "Tùy ý"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Hai component cùng gọi một custom hook thì state?",
          "options": [
            "Dùng chung",
            "Riêng biệt cho mỗi lần gọi",
            "Bị lỗi",
            "Tự đồng bộ"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. Mục đích chính của custom hook?",
          "options": [
            "Tăng tốc render",
            "Tái sử dụng logic có state",
            "Thay thế component",
            "Thay thế CSS"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter10": {
      "title": "useRef & Thao tác DOM trực tiếp",
      "chapter": "chapter10.html",
      "questions": [
        {
          "question": "1. Thay đổi ref.current có render lại component không?",
          "options": [
            "Có",
            "Không",
            "Chỉ khi là DOM",
            "Tùy trình duyệt"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "2. Muốn focus một input bằng code, dùng gì?",
          "options": [
            "useState",
            "useRef",
            "useEffect rỗng",
            "useMemo"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. Giá trị ban đầu của ref DOM thường là?",
          "options": [
            "0",
            "undefined",
            "null",
            "\"\""
          ],
          "answer": 2,
          "explanation": ""
        }
      ]
    },
    "chapter11": {
      "title": "Context API — Chia sẻ state toàn cục",
      "chapter": "chapter11.html",
      "questions": [
        {
          "question": "1. Context giải quyết vấn đề gì?",
          "options": [
            "Prop drilling",
            "Chậm mạng",
            "Lỗi cú pháp",
            "Bảo mật"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Hook nào đọc giá trị context?",
          "options": [
            "useState",
            "useContext",
            "useRef",
            "useMemo"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. Component bọc quanh cây để cung cấp giá trị là?",
          "options": [
            "Consumer",
            "Provider",
            "Portal",
            "Fragment"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter12": {
      "title": "useReducer — Quản lý state phức tạp",
      "chapter": "chapter12.html",
      "questions": [
        {
          "question": "1. Hàm reducer nhận vào gì?",
          "options": [
            "state và action",
            "props và state",
            "event",
            "chỉ action"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Reducer có được sửa trực tiếp state cũ không?",
          "options": [
            "Có",
            "Không, phải trả về state mới",
            "Tùy trường hợp",
            "Chỉ với object"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. Hàm dùng để gửi action là?",
          "options": [
            "setState",
            "dispatch",
            "emit",
            "send"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter13": {
      "title": "React Router — Điều hướng SPA cơ bản",
      "chapter": "chapter13.html",
      "questions": [
        {
          "question": "1. Component nào thay thẻ a để không tải lại trang?",
          "options": [
            "Link",
            "Anchor",
            "Href",
            "Route"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Route khớp mọi đường dẫn không tồn tại dùng path nào?",
          "options": [
            "/",
            "*",
            "/404",
            "/all"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. Hook điều hướng bằng code là?",
          "options": [
            "useRoute",
            "useNavigate",
            "useHistoryPush",
            "useLink"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter14": {
      "title": "React Router nâng cao — Nested Routes & Params",
      "chapter": "chapter14.html",
      "questions": [
        {
          "question": "1. Component hiển thị route con trong layout là?",
          "options": [
            "Outlet",
            "Child",
            "Slot",
            "Content"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Lấy tham số :id từ URL bằng hook nào?",
          "options": [
            "useParams",
            "useId",
            "useQuery",
            "useRoute"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "3. Tham số lấy từ useParams có kiểu gì?",
          "options": [
            "number",
            "string",
            "boolean",
            "tùy giá trị"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter15": {
      "title": "Styling trong React — CSS Modules & styled-components",
      "chapter": "chapter15.html",
      "questions": [
        {
          "question": "1. CSS Modules giải quyết vấn đề gì?",
          "options": [
            "Đụng tên class",
            "Chậm mạng",
            "Lỗi JS",
            "Bảo mật"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Trong styled-components, style động dựa vào đâu?",
          "options": [
            "props",
            "id",
            "tên file",
            "localStorage"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "3. Tên file CSS Modules thường kết thúc bằng?",
          "options": [
            ".module.css",
            ".style.js",
            ".css.js",
            ".min.css"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    },
    "chapter16": {
      "title": "Performance — useMemo & useCallback",
      "chapter": "chapter16.html",
      "questions": [
        {
          "question": "1. useMemo trả về gì?",
          "options": [
            "Một hàm",
            "Giá trị đã tính, được nhớ",
            "Một component",
            "Một ref"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "2. useCallback giúp giữ nguyên điều gì?",
          "options": [
            "Tham chiếu hàm",
            "Giá trị state",
            "Tên biến",
            "Thứ tự render"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "3. Nên dùng useMemo ở đâu?",
          "options": [
            "Mọi biến",
            "Phép tính nặng hoặc tham chiếu cần ổn định",
            "Chỉ trong class",
            "Trước mọi return"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter17": {
      "title": "React.memo & Tối ưu re-render",
      "chapter": "chapter17.html",
      "questions": [
        {
          "question": "1. React.memo so sánh props theo kiểu nào?",
          "options": [
            "Sâu",
            "Nông (shallow)",
            "Không so sánh",
            "Theo tên"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "2. Vì sao memo thất bại khi truyền hàm inline?",
          "options": [
            "Hàm mới mỗi lần render",
            "Hàm quá dài",
            "Hàm async",
            "Hàm không có tên"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "3. Cha render lại thì con mặc định?",
          "options": [
            "Không render",
            "Render lại",
            "Bị hủy",
            "Chỉ render lần đầu"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter18": {
      "title": "Error Boundaries & Xử lý lỗi",
      "chapter": "chapter18.html",
      "questions": [
        {
          "question": "1. Error Boundary bắt được lỗi nào?",
          "options": [
            "Lỗi trong event handler",
            "Lỗi khi render cây con",
            "Lỗi fetch",
            "Lỗi setTimeout"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "2. Error Boundary hiện được viết bằng?",
          "options": [
            "Function component",
            "Class component",
            "Hook useError",
            "Context"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. Lỗi trong onClick xử lý bằng?",
          "options": [
            "Error Boundary",
            "try/catch",
            "Không cần",
            "Context"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter19": {
      "title": "Portals — Modal & Tooltip",
      "chapter": "chapter19.html",
      "questions": [
        {
          "question": "1. Portal dùng hàm nào?",
          "options": [
            "createPortal",
            "openPortal",
            "usePortal",
            "renderOutside"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Modal render qua Portal thường được gắn vào?",
          "options": [
            "document.body",
            "Component cha",
            "window",
            "localStorage"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "3. Sự kiện từ portal nổi bọt theo cây nào?",
          "options": [
            "Cây DOM",
            "Cây React",
            "Không nổi bọt",
            "Cây CSS"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter20": {
      "title": "Redux Toolkit — Giới thiệu & Store",
      "chapter": "chapter20.html",
      "questions": [
        {
          "question": "1. Hàm tạo store trong RTK?",
          "options": [
            "createStore",
            "configureStore",
            "makeStore",
            "newStore"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "2. Component Provider dùng để làm gì?",
          "options": [
            "Cung cấp store cho cây component",
            "Tạo action",
            "Gọi API",
            "Định tuyến"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "3. Dữ liệu trong Redux chảy theo hướng nào?",
          "options": [
            "Hai chiều",
            "Một chiều",
            "Ngẫu nhiên",
            "Từ con lên cha"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter21": {
      "title": "Redux Toolkit — Slice, Thunk & kết nối API",
      "chapter": "chapter21.html",
      "questions": [
        {
          "question": "1. createSlice trả về gì?",
          "options": [
            "Reducer và action creators",
            "Chỉ component",
            "Chỉ store",
            "Route"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Thunk có ba trạng thái nào?",
          "options": [
            "pending, fulfilled, rejected",
            "start, run, end",
            "open, close, wait",
            "get, post, put"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "3. Hook đọc state từ store là?",
          "options": [
            "useStore",
            "useSelector",
            "useGet",
            "useState"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter22": {
      "title": "Form nâng cao — react-hook-form & Validation",
      "chapter": "chapter22.html",
      "questions": [
        {
          "question": "1. Hàm nào gắn ô nhập vào form?",
          "options": [
            "register",
            "attach",
            "bind",
            "connect"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Zod dùng để làm gì trong ví dụ?",
          "options": [
            "Định nghĩa luật kiểm tra dữ liệu",
            "Gọi API",
            "Định tuyến",
            "Tạo style"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "3. Validation ở client có thay thế được validation ở server?",
          "options": [
            "Có",
            "Không",
            "Tùy form",
            "Chỉ khi có Zod"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter23": {
      "title": "Testing React Components — Jest & Testing Library",
      "chapter": "chapter23.html",
      "questions": [
        {
          "question": "1. Testing Library khuyến khích test điều gì?",
          "options": [
            "Hành vi người dùng nhìn thấy",
            "State nội bộ",
            "Tên biến",
            "Số dòng code"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Kiểm tra phần tử KHÔNG tồn tại dùng?",
          "options": [
            "getBy",
            "queryBy",
            "findBy",
            "allBy"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. Phần tử xuất hiện sau khi gọi API nên dùng?",
          "options": [
            "getBy",
            "queryBy",
            "findBy",
            "không test"
          ],
          "answer": 2,
          "explanation": ""
        }
      ]
    },
    "chapter24": {
      "title": "Giới thiệu Next.js — SSR & File-based Routing",
      "chapter": "chapter24.html",
      "questions": [
        {
          "question": "1. Trong Next.js App Router, URL được tạo từ?",
          "options": [
            "Cấu trúc thư mục trong app/",
            "File routes.js",
            "Thẻ Link",
            "Biến môi trường"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Component mặc định trong app/ là?",
          "options": [
            "Client Component",
            "Server Component",
            "Class Component",
            "Web Component"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. Muốn dùng useState trong file cần thêm gì?",
          "options": [
            "\"use client\"",
            "\"use server\"",
            "import React",
            "Không cần"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    },
    "chapter25": {
      "title": "Triển khai ứng dụng React lên Production",
      "chapter": "chapter25.html",
      "questions": [
        {
          "question": "1. Lệnh tạo bản production với Vite?",
          "options": [
            "npm run build",
            "npm start dev",
            "npm clean",
            "npm lint"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Có nên để secret key trong mã React?",
          "options": [
            "Có",
            "Không, vì bundle lộ công khai",
            "Chỉ khi có .env",
            "Chỉ ở production"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. SPA dùng Router cần server làm gì?",
          "options": [
            "Rewrite mọi đường dẫn về index.html",
            "Tắt cache",
            "Dùng HTTP/1.0",
            "Không cần gì"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    },
    "chapter26": {
      "title": "Dự án cuối khóa: Ứng dụng React hoàn chỉnh",
      "chapter": "chapter26.html",
      "questions": [
        {
          "question": "1. Trạng thái danh sách việc ở dự án này được quản lý bằng?",
          "options": [
            "useReducer trong hook useTodos",
            "Biến toàn cục",
            "DOM trực tiếp",
            "CSS"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. Dữ liệu được lưu qua các lần tải lại trang bằng?",
          "options": [
            "localStorage",
            "Cookie của server",
            "Biến window",
            "Không lưu"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "3. Thành phần nào bảo vệ giao diện khi có lỗi render?",
          "options": [
            "Error Boundary",
            "Portal",
            "Context",
            "memo"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    }
  }
};
