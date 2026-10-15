/* Loaded only on the separate quiz page. */
globalThis.SynaptrailAlgorithmQuizzes = {
  "course": "java",
  "title": "Java",
  "chapters": {
    "chapter01": {
      "title": "Giới thiệu Java",
      "chapter": "chapter01.html",
      "questions": [
        {
          "question": "1. javac chuyển mã nguồn Java thành gì?",
          "options": [
            "HTML",
            "Mã nguồn JavaScript",
            "Bytecode trong file .class",
            "Thông báo nhận hàng"
          ],
          "answer": 2,
          "explanation": "Giải thích đáp ánA. Sai: HTML là tài liệu web, không phải đầu ra của javac.B. Sai: Java và JavaScript là hai ngôn ngữ khác nhau.C. Đúng: bài mô tả javac tạo bytecode .class.D. Sai: Thông báo là đầu ra khi chương trình chạy."
        },
        {
          "question": "2. Vai trò của JVM trong quy trình ở bài là gì?",
          "options": [
            "Thực thi bytecode",
            "Soạn thảo file .java",
            "Tự sửa mọi lỗi lập trình",
            "Biến Java thành JavaScript"
          ],
          "answer": 0,
          "explanation": "Giải thích đáp ánA. Đúng: JVM thực thi chương trình đã biên dịch.B. Sai: Trình soạn thảo phục vụ bước viết mã.C. Sai: Biên dịch và thực thi không bảo đảm đúng yêu cầu.D. Sai: Bài không có bước chuyển đổi này."
        },
        {
          "question": "3. Hai lệnh in này tạo đầu ra nào?",
          "options": [
            "Hai thông báo trên cùng một dòng",
            "Welcome to Java rồi Order received, trên hai dòng",
            "Chỉ Order received",
            "Tên file WelcomeJava.java"
          ],
          "answer": 1,
          "explanation": "Giải thích đáp ánA. Sai: println xuống dòng sau mỗi thông báo.B. Đúng: hai println chạy theo thứ tự.C. Sai: Lệnh đầu cũng được thực thi.D. Sai: Chương trình không in tên file."
        },
        {
          "question": "4. Muốn bàn giao bytecode cho máy khác, cần kiểm tra điều gì?",
          "options": [
            "Chỉ cần cùng trình soạn thảo",
            "Chỉ cần có internet",
            "Chỉ cần cùng tên người dùng",
            "Phiên bản runtime và các phụ thuộc phù hợp"
          ],
          "answer": 3,
          "explanation": "Giải thích đáp ánA. Sai: Trình soạn thảo không thực thi bytecode.B. Sai: Ví dụ không cần mạng; runtime mới là điều cần kiểm tra.C. Sai: Tên người dùng không bảo đảm môi trường tương thích.D. Đúng: bài nêu phiên bản, phụ thuộc và hệ điều hành."
        },
        {
          "question": "5. Đổi thông báo trong .java nhưng chạy vẫn thấy thông báo cũ. Thiếu bước nào?",
          "options": [
            "Lưu rồi biên dịch lại file nguồn",
            "Đổi tên JVM",
            "Sửa trực tiếp file .class như văn bản",
            "Chuyển sang JavaScript"
          ],
          "answer": 0,
          "explanation": "Giải thích đáp ánA. Đúng: cần cập nhật file .class trước khi chạy.B. Sai: Tên JVM không cập nhật mã đã biên dịch.C. Sai: Bài yêu cầu sửa mã nguồn, không sửa bytecode như văn bản.D. Sai: Không cần đổi ngôn ngữ để sửa thông báo."
        }
      ]
    },
    "chapter02": {
      "title": "Cài đặt JDK & IDE",
      "chapter": "chapter02.html",
      "questions": [
        {
          "question": "1. Bộ công cụ nào cung cấp javac để phát triển Java?",
          "options": [
            "Chỉ runtime",
            "JDK",
            "Chỉ Java extension",
            "File .class"
          ],
          "answer": 1,
          "explanation": "Giải thích đáp ánA. Sai: Runtime đơn lẻ có thể không có javac.B. Đúng: JDK cung cấp công cụ phát triển, gồm javac.C. Sai: Extension không tự bảo đảm compiler đã cài.D. Sai: File .class là kết quả biên dịch, không phải bộ công cụ."
        },
        {
          "question": "2. PATH được dùng để làm gì khi gõ lệnh?",
          "options": [
            "Lưu mã nguồn của lớp",
            "Lưu điểm quiz",
            "Tìm executable theo tên lệnh",
            "Xác định nội dung chuỗi in"
          ],
          "answer": 2,
          "explanation": "Giải thích đáp ánA. Sai: Mã nguồn nằm trong file .java.B. Sai: PATH không liên quan dữ liệu học tập.C. Đúng: hệ điều hành tìm trong các vị trí thuộc PATH.D. Sai: Chuỗi in được khai báo trong chương trình."
        },
        {
          "question": "3. java báo phiên bản 8 nhưng javac báo 21. Bước tiếp theo phù hợp là gì?",
          "options": [
            "Kiểm tra executable và PATH đang được chọn",
            "Kết luận hai lệnh chắc chắn dùng cùng JDK",
            "Xóa mọi file .java",
            "Bỏ qua phiên bản vì IDE vẫn chạy"
          ],
          "answer": 0,
          "explanation": "Giải thích đáp ánA. Đúng: có thể hai lệnh trỏ đến hai bản cài đặt.B. Sai: Hai phiên bản khác nhau không hỗ trợ kết luận này.C. Sai: Xóa mã nguồn không sửa đường dẫn công cụ.D. Sai: Bài yêu cầu kiểm tra môi trường terminal và IDE."
        },
        {
          "question": "4. Dòng này cho biết phiên bản của thành phần nào?",
          "options": [
            "Trình duyệt đang mở bài",
            "Trình biên dịch chắc chắn",
            "Java extension chắc chắn",
            "Runtime đang chạy chương trình"
          ],
          "answer": 3,
          "explanation": "Giải thích đáp ánA. Sai: Mã đang chạy trong Java runtime, không phải trình duyệt.B. Sai: Thuộc tính này không hỏi phiên bản javac.C. Sai: Extension không phải giá trị java.version.D. Đúng: EnvironmentCheck đọc phiên bản runtime."
        },
        {
          "question": "5. Đặt JAVA_HOME vào thư mục bin rồi cho rằng lệnh java đã đổi là sai ở đâu?",
          "options": [
            "JAVA_HOME phải là tên file nguồn",
            "JAVA_HOME thường là thư mục gốc JDK; vẫn phải kiểm tra PATH",
            "Không được dùng terminal mới",
            "PATH chỉ có tác dụng trong IDE"
          ],
          "answer": 1,
          "explanation": "Giải thích đáp ánA. Sai: Nó không trỏ đến file .java.B. Đúng: hai cấu hình liên quan nhưng không đồng nhất.C. Sai: Bài khuyên mở terminal mới sau thay đổi.D. Sai: PATH được hệ điều hành dùng khi tìm lệnh."
        }
      ]
    },
    "chapter03": {
      "title": "Chương trình đầu tiên",
      "chapter": "chapter03.html",
      "questions": [
        {
          "question": "1. Trong mẫu truyền thống của bài, phương thức nào là điểm bắt đầu?",
          "options": [
            "public static void main(String[] args)",
            "public static void Main(String[] args)",
            "public static void start(String[] args)",
            "System.out.println(String[] args)"
          ],
          "answer": 0,
          "explanation": "Giải thích đáp ánA. Đúng: mẫu dùng chữ ký này làm điểm vào.B. Sai: Java phân biệt main và Main.C. Sai: Mẫu trong bài không dùng start làm điểm vào.D. Sai: Đây không phải chữ ký main."
        },
        {
          "question": "2. println khác print như thế nào?",
          "options": [
            "println không in được chuỗi",
            "print luôn thêm hai dòng trống",
            "println thêm xuống dòng sau nội dung",
            "println tự biên dịch chương trình"
          ],
          "answer": 2,
          "explanation": "Giải thích đáp ánA. Sai: Cả hai ví dụ đều in chuỗi.B. Sai: print không tự thêm xuống dòng.C. Đúng: đó là khác biệt được bài minh họa.D. Sai: Biên dịch do javac, không phải phương thức in."
        },
        {
          "question": "3. Đầu ra của đoạn mã là gì?",
          "options": [
            "Hello, và Synaptrail! trên hai dòng",
            "Hello, Synaptrail! trên một dòng",
            "Chỉ Synaptrail!",
            "Hello, Synaptrail! trên hai dòng giống nhau"
          ],
          "answer": 1,
          "explanation": "Giải thích đáp ánA. Sai: print đầu tiên chưa xuống dòng.B. Đúng: println nối vào nội dung đã in, rồi xuống dòng.C. Sai: print vẫn ghi nội dung đầu tiên.D. Sai: Không có lệnh lặp lại nội dung."
        },
        {
          "question": "4. Đứng trong thư mục chứa HelloWorld.java, chọn thứ tự lệnh đúng.",
          "options": [
            "java HelloWorld.java rồi javac HelloWorld.class",
            "javac HelloWorld.class rồi java HelloWorld.java",
            "java HelloWorld.class rồi java HelloWorld",
            "javac HelloWorld.java rồi java HelloWorld"
          ],
          "answer": 3,
          "explanation": "Giải thích đáp ánA. Sai: Không phải quy trình hai bước trong bài.B. Sai: javac cần mã nguồn; file class không phải đầu vào này.C. Sai: Tên lớp trong chế độ này không có đuôi .class.D. Đúng: biên dịch nguồn rồi chạy tên lớp."
        },
        {
          "question": "5. File helloWorld.java chứa public class HelloWorld. Lỗi cần sửa là gì?",
          "options": [
            "Đổi tên file thành HelloWorld.java",
            "Đổi println thành print",
            "Xóa mọi dấu ngoặc",
            "Thêm .class vào tên lớp"
          ],
          "answer": 0,
          "explanation": "Giải thích đáp ánA. Đúng: tên phải khớp cả chữ hoa và chữ thường.B. Sai: Phương thức in không sửa tên file.C. Sai: Ngoặc xác định cấu trúc lớp và main.D. Sai: Tên lớp không mang đuôi file."
        }
      ]
    },
    "chapter04": {
      "title": "Biến & Kiểu dữ liệu",
      "chapter": "chapter04.html",
      "questions": [
        {
          "question": "1. String trong Java thuộc nhóm nào theo bài?",
          "options": [
            "Nguyên thủy",
            "Tham chiếu",
            "Kiểu số nguyên",
            "Toán tử logic"
          ],
          "answer": 1,
          "explanation": "Giải thích đáp ánA. Sai: Bài phân biệt String với int, char và boolean.B. Đúng: String là kiểu tham chiếu.C. Sai: String biểu diễn chuỗi, không phải int.D. Sai: String là kiểu dữ liệu, không phải toán tử."
        },
        {
          "question": "2. Quy ước nào dùng cho tên biến trong bài?",
          "options": [
            "PascalCase như DiemTb",
            "Chỉ dùng chữ hoa như DIEMTB",
            "Bắt đầu bằng số như 1diem",
            "camelCase như diemTb"
          ],
          "answer": 3,
          "explanation": "Giải thích đáp ánA. Sai: Bài dùng PascalCase cho lớp.B. Sai: Không phải quy ước biến nêu trong bài.C. Sai: Đây không phải ví dụ camelCase hợp lệ.D. Đúng: bài dùng diemTb cho tên biến."
        },
        {
          "question": "3. Khai báo nào biểu diễn đúng một ký tự theo mẫu?",
          "options": [
            "char kyTu = 'A';",
            "String kyTu = \"A\";",
            "boolean kyTu = true;",
            "int kyTu = 20;"
          ],
          "answer": 0,
          "explanation": "Giải thích đáp ánA. Đúng: ký tự dùng nháy đơn trong ví dụ.B. Sai: Đây là chuỗi, không phải biến char.C. Sai: Đây là giá trị logic, không phải ký tự.D. Sai: Đây là số nguyên trong mẫu khai báo."
        },
        {
          "question": "4. Đoạn mã in nội dung nào?",
          "options": [
            "20 Huy",
            "Huy20",
            "Huy 20",
            "ten tuoi"
          ],
          "answer": 2,
          "explanation": "Giải thích đáp ánA. Sai: Thứ tự nối bắt đầu bằng ten.B. Sai: Có chuỗi khoảng trắng ở giữa.C. Đúng: nối ten, khoảng trắng rồi tuoi.D. Sai: Tên biến được thay bằng giá trị của chúng."
        },
        {
          "question": "5. Theo mẫu của bài, cần sửa dòng nào?",
          "options": [
            "int tuoi = 20;",
            "float chieuCao = 1.75;",
            "char kyTu = 'A';",
            "boolean dangHoc = true;"
          ],
          "answer": 1,
          "explanation": "Giải thích đáp ánA. Sai: Số nguyên này đúng mẫu int.B. Đúng: dùng 1.75f để có literal float như bài.C. Sai: Một ký tự trong nháy đơn là đúng mẫu.D. Sai: Giá trị true phù hợp boolean."
        }
      ]
    },
    "chapter05": {
      "title": "Toán tử",
      "chapter": "chapter05.html",
      "questions": [
        {
          "question": "1. Toán tử % trong ví dụ dùng để làm gì?",
          "options": [
            "Lấy phần dư",
            "Lấy thương thực",
            "Nối mọi chuỗi",
            "So sánh nội dung String"
          ],
          "answer": 0,
          "explanation": "Giải thích đáp ánA. Đúng: 10 % 3 cho 1.B. Sai: Phép chia thực cần / với toán hạng phù hợp.C. Sai: Ví dụ nối chuỗi dùng +.D. Sai: Bài dùng equals để so nội dung."
        },
        {
          "question": "2. Muốn so sánh nội dung hai String theo bài, chọn cách nào?",
          "options": [
            "Chỉ dùng ==",
            "Dùng %",
            "Dùng equals",
            "Dùng ++"
          ],
          "answer": 2,
          "explanation": "Giải thích đáp ánA. Sai: Ví dụ == so tham chiếu, không so nội dung.B. Sai: % phục vụ số học, không so chuỗi.C. Đúng: equals so nội dung String trong ví dụ.D. Sai: ++ là tăng giá trị số."
        },
        {
          "question": "3. Hai dòng in dưới đây cho kết quả nào?",
          "options": [
            "3.333… rồi 1",
            "3 rồi 1",
            "1 rồi 3",
            "3 rồi 0"
          ],
          "answer": 1,
          "explanation": "Giải thích đáp ánA. Sai: a/b với hai int cho thương nguyên.B. Đúng: 10/3 là 3 và dư 1.C. Sai: Đã đảo thương và phần dư.D. Sai: 10 không chia hết cho 3."
        },
        {
          "question": "4. Biến ketQua có giá trị gì?",
          "options": [
            "false vì a lớn hơn b",
            "10",
            "3",
            "true"
          ],
          "answer": 3,
          "explanation": "Giải thích đáp ánA. Sai: Biểu thức không kiểm tra a lớn hơn b.B. Sai: Kết quả khai báo boolean, không phải a.C. Sai: Không trả trực tiếp giá trị b.D. Đúng: cả a>5 và b<5 đều đúng."
        },
        {
          "question": "5. Hai new String(\"hello\") có cùng nội dung. Vì sao kiểm tra s1 == s2 không đạt mục tiêu?",
          "options": [
            "== so tham chiếu; cần s1.equals(s2) để so nội dung",
            "Chuỗi phải viết hoa mới so được",
            "Cần đổi String thành int",
            "== luôn đúng cho mọi String"
          ],
          "answer": 0,
          "explanation": "Giải thích đáp ánA. Đúng: hai đối tượng mới không có cùng tham chiếu.B. Sai: Chữ hoa không sửa cách so tham chiếu.C. Sai: Đổi kiểu không giải quyết so nội dung chuỗi.D. Sai: Ví dụ trong bài cho kết quả false."
        }
      ]
    },
    "chapter08": {
      "title": "Vòng lặp",
      "chapter": "chapter08.html",
      "questions": [
        {
          "question": "1. Cú pháp switch expression hiện đại (Java 14+) dùng ký hiệu gì thay cho break?",
          "options": [
            "-> (mũi tên)",
            ":: (hai dấu hai chấm)",
            "=> (mũi tên kép)"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    },
    "chapter11": {
      "title": "OOP cơ bản (Class & Object)",
      "chapter": "chapter11.html",
      "questions": [
        {
          "question": "1. Từ khóa nào dùng để tạo một object mới từ class trong Java?",
          "options": [
            "create",
            "new",
            "make"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter12": {
      "title": "Exception cơ bản",
      "chapter": "chapter12.html",
      "questions": [
        {
          "question": "1. Exception nào phổ biến nhất khi gọi method trên biến đang là null?",
          "options": [
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "ClassNotFoundException"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    },
    "chapter15": {
      "title": "Abstract Class",
      "chapter": "chapter15.html",
      "questions": [
        {
          "question": "1. Điều gì KHÔNG thể làm với abstract class?",
          "options": [
            "Kế thừa nó bằng extends",
            "Tạo object trực tiếp bằng new",
            "Có phương thức đã triển khai sẵn"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter17": {
      "title": "HashMap & HashSet",
      "chapter": "chapter17.html",
      "questions": [
        {
          "question": "1. Cấu trúc nào phù hợp để tra cứu tên hàng → số lượng?",
          "options": [
            "HashMap",
            "HashSet",
            "ArrayList không cần tìm kiếm"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "2. put cùng khóa lần thứ hai làm gì?",
          "options": [
            "Tạo khóa trùng",
            "Cập nhật giá trị",
            "Luôn báo lỗi"
          ],
          "answer": 1,
          "explanation": ""
        },
        {
          "question": "3. add cùng phần tử vào HashSet lần thứ hai trả về gì?",
          "options": [
            "true",
            "null",
            "false"
          ],
          "answer": 2,
          "explanation": ""
        },
        {
          "question": "4. Khóa chưa tồn tại: getOrDefault(key, 0) trả gì?",
          "options": [
            "0",
            "Tự thêm khóa vào map",
            "Luôn trả null"
          ],
          "answer": 0,
          "explanation": ""
        },
        {
          "question": "5. Muốn giữ thứ tự thêm các phần tử duy nhất, chọn gì?",
          "options": [
            "HashSet",
            "LinkedHashSet",
            "HashMap tự sắp xếp"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter19": {
      "title": "Stream API & Lambda",
      "chapter": "chapter19.html",
      "questions": [
        {
          "question": "1. Phương thức Stream nào dùng để LỌC phần tử theo điều kiện?",
          "options": [
            "filter()",
            "map()",
            "collect()"
          ],
          "answer": 0,
          "explanation": ""
        }
      ]
    },
    "chapter24": {
      "title": "Record & Optional",
      "chapter": "chapter24.html",
      "questions": [
        {
          "question": "1. record trong Java tự động sinh những gì?",
          "options": [
            "Chỉ có constructor",
            "Constructor, getter, equals(), toString()",
            "Chỉ có getter"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter27": {
      "title": "Service & Repository (JPA)",
      "chapter": "chapter27.html",
      "questions": [
        {
          "question": "1. Lớp nào trong kiến trúc Spring Boot chịu trách nhiệm chứa logic nghiệp vụ?",
          "options": [
            "Controller",
            "Service",
            "Repository"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter29": {
      "title": "Dự án: REST API Quản lý công việc",
      "chapter": "chapter29.html",
      "questions": [
        {
          "question": "1. Annotation nào đánh dấu một class là Entity ánh xạ với bảng database?",
          "options": [
            "@Service",
            "@Entity",
            "@RestController"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    },
    "chapter31": {
      "title": "Bài tập OOP & Collections",
      "chapter": "chapter31.html",
      "questions": [
        {
          "question": "1. Design pattern nào đảm bảo một class chỉ có duy nhất một instance?",
          "options": [
            "Factory",
            "Singleton",
            "Observer"
          ],
          "answer": 1,
          "explanation": ""
        }
      ]
    }
  }
};
