# Quiz mẫu — 5 chương đầu Java, C++ và thuật toán

Giải thích trên website chỉ hiện sau khi chấm điểm; tài liệu này hiển thị đáp án để duyệt. Không có câu ngoài nội dung chương.

## java — Chương 1

### 1. javac chuyển mã nguồn Java thành gì? (Nhớ khái niệm)

Cơ sở: Lý thuyết nền: file .java và .class.

- **A. HTML** — Sai: HTML là tài liệu web, không phải đầu ra của javac.
- **B. Mã nguồn JavaScript** — Sai: Java và JavaScript là hai ngôn ngữ khác nhau.
- **C. Bytecode trong file .class** — Đúng: Đúng: bài mô tả javac tạo bytecode .class.
- **D. Thông báo nhận hàng** — Sai: Thông báo là đầu ra khi chương trình chạy.

### 2. Vai trò của JVM trong quy trình ở bài là gì? (Nhớ khái niệm)

Cơ sở: Mã nguồn → bytecode → JVM.

- **A. Thực thi bytecode** — Đúng: Đúng: JVM thực thi chương trình đã biên dịch.
- **B. Soạn thảo file .java** — Sai: Trình soạn thảo phục vụ bước viết mã.
- **C. Tự sửa mọi lỗi lập trình** — Sai: Biên dịch và thực thi không bảo đảm đúng yêu cầu.
- **D. Biến Java thành JavaScript** — Sai: Bài không có bước chuyển đổi này.

### 3. Hai lệnh in này tạo đầu ra nào? (Áp dụng / đọc code)

Cơ sở: Ví dụ WelcomeJava.java.

```
System.out.println("Welcome to Java");
System.out.println("Order received");
```

- **A. Hai thông báo trên cùng một dòng** — Sai: println xuống dòng sau mỗi thông báo.
- **B. Welcome to Java rồi Order received, trên hai dòng** — Đúng: Đúng: hai println chạy theo thứ tự.
- **C. Chỉ Order received** — Sai: Lệnh đầu cũng được thực thi.
- **D. Tên file WelcomeJava.java** — Sai: Chương trình không in tên file.

### 4. Muốn bàn giao bytecode cho máy khác, cần kiểm tra điều gì? (Áp dụng / đọc code)

Cơ sở: Giới hạn phiên bản và môi trường tương thích.

- **A. Chỉ cần cùng trình soạn thảo** — Sai: Trình soạn thảo không thực thi bytecode.
- **B. Chỉ cần có internet** — Sai: Ví dụ không cần mạng; runtime mới là điều cần kiểm tra.
- **C. Chỉ cần cùng tên người dùng** — Sai: Tên người dùng không bảo đảm môi trường tương thích.
- **D. Phiên bản runtime và các phụ thuộc phù hợp** — Đúng: Đúng: bài nêu phiên bản, phụ thuộc và hệ điều hành.

### 5. Đổi thông báo trong .java nhưng chạy vẫn thấy thông báo cũ. Thiếu bước nào? (Tìm lỗi)

Cơ sở: Thử nghiệm sửa mã nhưng chưa biên dịch lại.

- **A. Lưu rồi biên dịch lại file nguồn** — Đúng: Đúng: cần cập nhật file .class trước khi chạy.
- **B. Đổi tên JVM** — Sai: Tên JVM không cập nhật mã đã biên dịch.
- **C. Sửa trực tiếp file .class như văn bản** — Sai: Bài yêu cầu sửa mã nguồn, không sửa bytecode như văn bản.
- **D. Chuyển sang JavaScript** — Sai: Không cần đổi ngôn ngữ để sửa thông báo.

## java — Chương 2

### 1. Bộ công cụ nào cung cấp javac để phát triển Java? (Nhớ khái niệm)

Cơ sở: JVM, runtime và JDK.

- **A. Chỉ runtime** — Sai: Runtime đơn lẻ có thể không có javac.
- **B. JDK** — Đúng: Đúng: JDK cung cấp công cụ phát triển, gồm javac.
- **C. Chỉ Java extension** — Sai: Extension không tự bảo đảm compiler đã cài.
- **D. File .class** — Sai: File .class là kết quả biên dịch, không phải bộ công cụ.

### 2. PATH được dùng để làm gì khi gõ lệnh? (Nhớ khái niệm)

Cơ sở: Định nghĩa PATH trong lý thuyết nền.

- **A. Lưu mã nguồn của lớp** — Sai: Mã nguồn nằm trong file .java.
- **B. Lưu điểm quiz** — Sai: PATH không liên quan dữ liệu học tập.
- **C. Tìm executable theo tên lệnh** — Đúng: Đúng: hệ điều hành tìm trong các vị trí thuộc PATH.
- **D. Xác định nội dung chuỗi in** — Sai: Chuỗi in được khai báo trong chương trình.

### 3. java báo phiên bản 8 nhưng javac báo 21. Bước tiếp theo phù hợp là gì? (Áp dụng / đọc code)

Cơ sở: Ví dụ kiểm tra hai công cụ và lựa chọn đường dẫn.

- **A. Kiểm tra executable và PATH đang được chọn** — Đúng: Đúng: có thể hai lệnh trỏ đến hai bản cài đặt.
- **B. Kết luận hai lệnh chắc chắn dùng cùng JDK** — Sai: Hai phiên bản khác nhau không hỗ trợ kết luận này.
- **C. Xóa mọi file .java** — Sai: Xóa mã nguồn không sửa đường dẫn công cụ.
- **D. Bỏ qua phiên bản vì IDE vẫn chạy** — Sai: Bài yêu cầu kiểm tra môi trường terminal và IDE.

### 4. Dòng này cho biết phiên bản của thành phần nào? (Áp dụng / đọc code)

Cơ sở: EnvironmentCheck.java và giải thích getProperty.

```
System.out.println(System.getProperty("java.version"));
```

- **A. Trình duyệt đang mở bài** — Sai: Mã đang chạy trong Java runtime, không phải trình duyệt.
- **B. Trình biên dịch chắc chắn** — Sai: Thuộc tính này không hỏi phiên bản javac.
- **C. Java extension chắc chắn** — Sai: Extension không phải giá trị java.version.
- **D. Runtime đang chạy chương trình** — Đúng: Đúng: EnvironmentCheck đọc phiên bản runtime.

### 5. Đặt JAVA_HOME vào thư mục bin rồi cho rằng lệnh java đã đổi là sai ở đâu? (Tìm lỗi)

Cơ sở: Lỗi thường gặp và phân biệt JAVA_HOME/PATH.

- **A. JAVA_HOME phải là tên file nguồn** — Sai: Nó không trỏ đến file .java.
- **B. JAVA_HOME thường là thư mục gốc JDK; vẫn phải kiểm tra PATH** — Đúng: Đúng: hai cấu hình liên quan nhưng không đồng nhất.
- **C. Không được dùng terminal mới** — Sai: Bài khuyên mở terminal mới sau thay đổi.
- **D. PATH chỉ có tác dụng trong IDE** — Sai: PATH được hệ điều hành dùng khi tìm lệnh.

## java — Chương 3

### 1. Trong mẫu truyền thống của bài, phương thức nào là điểm bắt đầu? (Nhớ khái niệm)

Cơ sở: Giải thích chữ ký main.

- **A. public static void main(String[] args)** — Đúng: Đúng: mẫu dùng chữ ký này làm điểm vào.
- **B. public static void Main(String[] args)** — Sai: Java phân biệt main và Main.
- **C. public static void start(String[] args)** — Sai: Mẫu trong bài không dùng start làm điểm vào.
- **D. System.out.println(String[] args)** — Sai: Đây không phải chữ ký main.

### 2. println khác print như thế nào? (Nhớ khái niệm)

Cơ sở: Ví dụ GreetingLines.java.

- **A. println không in được chuỗi** — Sai: Cả hai ví dụ đều in chuỗi.
- **B. print luôn thêm hai dòng trống** — Sai: print không tự thêm xuống dòng.
- **C. println thêm xuống dòng sau nội dung** — Đúng: Đúng: đó là khác biệt được bài minh họa.
- **D. println tự biên dịch chương trình** — Sai: Biên dịch do javac, không phải phương thức in.

### 3. Đầu ra của đoạn mã là gì? (Áp dụng / đọc code)

Cơ sở: Ví dụ print/println đã có trong chương.

```
System.out.print("Hello, ");
System.out.println("Synaptrail!");
```

- **A. Hello, và Synaptrail! trên hai dòng** — Sai: print đầu tiên chưa xuống dòng.
- **B. Hello, Synaptrail! trên một dòng** — Đúng: Đúng: println nối vào nội dung đã in, rồi xuống dòng.
- **C. Chỉ Synaptrail!** — Sai: print vẫn ghi nội dung đầu tiên.
- **D. Hello, Synaptrail! trên hai dòng giống nhau** — Sai: Không có lệnh lặp lại nội dung.

### 4. Đứng trong thư mục chứa HelloWorld.java, chọn thứ tự lệnh đúng. (Áp dụng / đọc code)

Cơ sở: Quy trình biên dịch rồi chạy.

- **A. java HelloWorld.java rồi javac HelloWorld.class** — Sai: Không phải quy trình hai bước trong bài.
- **B. javac HelloWorld.class rồi java HelloWorld.java** — Sai: javac cần mã nguồn; file class không phải đầu vào này.
- **C. java HelloWorld.class rồi java HelloWorld** — Sai: Tên lớp trong chế độ này không có đuôi .class.
- **D. javac HelloWorld.java rồi java HelloWorld** — Đúng: Đúng: biên dịch nguồn rồi chạy tên lớp.

### 5. File helloWorld.java chứa public class HelloWorld. Lỗi cần sửa là gì? (Tìm lỗi)

Cơ sở: Lỗi thường gặp: tên file và lớp public.

- **A. Đổi tên file thành HelloWorld.java** — Đúng: Đúng: tên phải khớp cả chữ hoa và chữ thường.
- **B. Đổi println thành print** — Sai: Phương thức in không sửa tên file.
- **C. Xóa mọi dấu ngoặc** — Sai: Ngoặc xác định cấu trúc lớp và main.
- **D. Thêm .class vào tên lớp** — Sai: Tên lớp không mang đuôi file.

## java — Chương 4

### 1. String trong Java thuộc nhóm nào theo bài? (Nhớ khái niệm)

Cơ sở: Kiểu nguyên thủy và tham chiếu.

- **A. Nguyên thủy** — Sai: Bài phân biệt String với int, char và boolean.
- **B. Tham chiếu** — Đúng: Đúng: String là kiểu tham chiếu.
- **C. Kiểu số nguyên** — Sai: String biểu diễn chuỗi, không phải int.
- **D. Toán tử logic** — Sai: String là kiểu dữ liệu, không phải toán tử.

### 2. Quy ước nào dùng cho tên biến trong bài? (Nhớ khái niệm)

Cơ sở: Quy ước camelCase/PascalCase.

- **A. PascalCase như DiemTb** — Sai: Bài dùng PascalCase cho lớp.
- **B. Chỉ dùng chữ hoa như DIEMTB** — Sai: Không phải quy ước biến nêu trong bài.
- **C. Bắt đầu bằng số như 1diem** — Sai: Đây không phải ví dụ camelCase hợp lệ.
- **D. camelCase như diemTb** — Đúng: Đúng: bài dùng diemTb cho tên biến.

### 3. Khai báo nào biểu diễn đúng một ký tự theo mẫu? (Áp dụng / đọc code)

Cơ sở: Ví dụ char kyTu.

- **A. char kyTu = 'A';** — Đúng: Đúng: ký tự dùng nháy đơn trong ví dụ.
- **B. String kyTu = "A";** — Sai: Đây là chuỗi, không phải biến char.
- **C. boolean kyTu = true;** — Sai: Đây là giá trị logic, không phải ký tự.
- **D. int kyTu = 20;** — Sai: Đây là số nguyên trong mẫu khai báo.

### 4. Đoạn mã in nội dung nào? (Áp dụng / đọc code)

Cơ sở: Ví dụ nối chuỗi trong bien.java.

```
String ten = "Huy";
int tuoi = 20;
System.out.println(ten + " " + tuoi);
```

- **A. 20 Huy** — Sai: Thứ tự nối bắt đầu bằng ten.
- **B. Huy20** — Sai: Có chuỗi khoảng trắng ở giữa.
- **C. Huy 20** — Đúng: Đúng: nối ten, khoảng trắng rồi tuoi.
- **D. ten tuoi** — Sai: Tên biến được thay bằng giá trị của chúng.

### 5. Theo mẫu của bài, cần sửa dòng nào? (Tìm lỗi)

Cơ sở: Ví dụ float cần hậu tố f.

- **A. int tuoi = 20;** — Sai: Số nguyên này đúng mẫu int.
- **B. float chieuCao = 1.75;** — Đúng: Đúng: dùng 1.75f để có literal float như bài.
- **C. char kyTu = 'A';** — Sai: Một ký tự trong nháy đơn là đúng mẫu.
- **D. boolean dangHoc = true;** — Sai: Giá trị true phù hợp boolean.

## java — Chương 5

### 1. Toán tử % trong ví dụ dùng để làm gì? (Nhớ khái niệm)

Cơ sở: Ví dụ chia lấy dư.

- **A. Lấy phần dư** — Đúng: Đúng: 10 % 3 cho 1.
- **B. Lấy thương thực** — Sai: Phép chia thực cần / với toán hạng phù hợp.
- **C. Nối mọi chuỗi** — Sai: Ví dụ nối chuỗi dùng +.
- **D. So sánh nội dung String** — Sai: Bài dùng equals để so nội dung.

### 2. Muốn so sánh nội dung hai String theo bài, chọn cách nào? (Nhớ khái niệm)

Cơ sở: Mục so sánh String.

- **A. Chỉ dùng ==** — Sai: Ví dụ == so tham chiếu, không so nội dung.
- **B. Dùng %** — Sai: % phục vụ số học, không so chuỗi.
- **C. Dùng equals** — Đúng: Đúng: equals so nội dung String trong ví dụ.
- **D. Dùng ++** — Sai: ++ là tăng giá trị số.

### 3. Hai dòng in dưới đây cho kết quả nào? (Áp dụng / đọc code)

Cơ sở: toan_tu.java: a/b và a%b.

```
int a = 10, b = 3;
System.out.println(a / b);
System.out.println(a % b);
```

- **A. 3.333… rồi 1** — Sai: a/b với hai int cho thương nguyên.
- **B. 3 rồi 1** — Đúng: Đúng: 10/3 là 3 và dư 1.
- **C. 1 rồi 3** — Sai: Đã đảo thương và phần dư.
- **D. 3 rồi 0** — Sai: 10 không chia hết cho 3.

### 4. Biến ketQua có giá trị gì? (Áp dụng / đọc code)

Cơ sở: Biểu thức logic trong ví dụ.

```
int a = 10, b = 3;
boolean ketQua = (a > 5) && (b < 5);
```

- **A. false vì a lớn hơn b** — Sai: Biểu thức không kiểm tra a lớn hơn b.
- **B. 10** — Sai: Kết quả khai báo boolean, không phải a.
- **C. 3** — Sai: Không trả trực tiếp giá trị b.
- **D. true** — Đúng: Đúng: cả a>5 và b<5 đều đúng.

### 5. Hai new String("hello") có cùng nội dung. Vì sao kiểm tra s1 == s2 không đạt mục tiêu? (Tìm lỗi)

Cơ sở: Ví dụ so_sanh_string.java.

- **A. == so tham chiếu; cần s1.equals(s2) để so nội dung** — Đúng: Đúng: hai đối tượng mới không có cùng tham chiếu.
- **B. Chuỗi phải viết hoa mới so được** — Sai: Chữ hoa không sửa cách so tham chiếu.
- **C. Cần đổi String thành int** — Sai: Đổi kiểu không giải quyết so nội dung chuỗi.
- **D. == luôn đúng cho mọi String** — Sai: Ví dụ trong bài cho kết quả false.

## cpp — Chương 1

### 1. Theo chương này, C++ thuộc loại ngôn ngữ nào? (Nhớ khái niệm)

Cơ sở: Định nghĩa C++ là ngôn ngữ biên dịch.

- **A. Đánh dấu** — Sai: C++ không dùng vai trò của HTML.
- **B. Biên dịch** — Đúng: Đúng: mã được biên dịch trước khi chạy theo bài.
- **C. Chỉ truy vấn cơ sở dữ liệu** — Sai: Bài mô tả ngôn ngữ đa mục đích.
- **D. Chỉ cấu hình giao diện** — Sai: Bài liệt kê nhiều ứng dụng ngoài giao diện.

### 2. “Đa mô hình” của C++ trong bài có nghĩa gì? (Nhớ khái niệm)

Cơ sở: Mục multi-paradigm.

- **A. Chỉ dùng hướng đối tượng** — Sai: Bài còn nêu thủ tục và generic.
- **B. Chỉ dùng lập trình thủ tục** — Sai: Đây chỉ là một mô hình được hỗ trợ.
- **C. Hỗ trợ thủ tục, hướng đối tượng và generic** — Đúng: Đúng: ba mô hình được liệt kê.
- **D. Không cho tổ chức mã** — Sai: Đa mô hình không có nghĩa thiếu cấu trúc.

### 3. Trong các tình huống sau, đâu là ứng dụng C++ được bài nêu? (Áp dụng / đọc code)

Cơ sở: Bảng game/embedded/phần mềm hiệu năng cao.

- **A. Viết thành phần cho game engine** — Đúng: Đúng: bài nêu phát triển game và engine.
- **B. Viết thẻ HTML làm chương trình C++** — Sai: HTML không phải ví dụ chương trình C++.
- **C. Đổi mọi file .cpp thành bảng tính để chạy** — Sai: Bài không có quy trình này.
- **D. Chỉ dùng CSS để biên dịch mã C++** — Sai: CSS không phải công cụ biên dịch C++.

### 4. Nhóm cần làm firmware cho robot. Vì sao C++ là lựa chọn liên quan nội dung bài? (Áp dụng / đọc code)

Cơ sở: Ứng dụng embedded: firmware, IoT, robot.

- **A. Vì C++ là định dạng ảnh** — Sai: Bài mô tả ngôn ngữ lập trình.
- **B. Vì không cần quan tâm công cụ chạy** — Sai: Quy trình biên dịch vẫn cần công cụ.
- **C. Vì robot chỉ đọc HTML** — Sai: Không phải nội dung được bài nêu.
- **D. Bài liệt kê C++ cho hệ thống nhúng và robot** — Đúng: Đúng: tình huống khớp nhóm ứng dụng đó.

### 5. Bạn sửa mã nguồn nhưng chạy lại bản thực thi cũ. Bước còn thiếu theo bài là gì? (Tìm lỗi)

Cơ sở: Ghi chú biên dịch lại sau khi sửa.

- **A. Chỉ đổi màu trình soạn thảo** — Sai: Không tạo bản thực thi mới.
- **B. Biên dịch lại mã nguồn** — Đúng: Đúng: sửa nguồn cần cập nhật chương trình biên dịch.
- **C. Đổi tên ngôn ngữ sang Python** — Sai: Không cần đổi ngôn ngữ để cập nhật mã.
- **D. Xóa mọi đoạn nguồn** — Sai: Xóa nguồn không tạo phiên bản chương trình mới.

## cpp — Chương 2

### 1. Để biên dịch mã C++, cần thành phần nào? (Nhớ khái niệm)

Cơ sở: Bước 1: cài compiler.

- **A. Trình biên dịch như GCC, Clang hoặc MSVC** — Đúng: Đúng: các compiler này được bài liệt kê.
- **B. Chỉ theme của VS Code** — Sai: Theme không biên dịch mã.
- **C. Chỉ trình duyệt** — Sai: Trình duyệt không thay compiler trong bài.
- **D. Chỉ file ảnh** — Sai: File ảnh không phải công cụ phát triển.

### 2. Lệnh nào kiểm tra bản cài g++? (Nhớ khái niệm)

Cơ sở: Bước 2: kiểm tra cài đặt.

- **A. g++ hello.exe** — Sai: Đây không phải lệnh kiểm tra phiên bản trong bài.
- **B. java -version** — Sai: Lệnh này kiểm tra Java, không phải g++.
- **C. g++ --version** — Đúng: Đúng: bài dùng lệnh này để kiểm tra.
- **D. g++ --theme** — Sai: Không phải tùy chọn kiểm tra phiên bản.

### 3. Theo bảng trong bài, môi trường nào đi với Clang qua Xcode Command Line Tools? (Áp dụng / đọc code)

Cơ sở: Bảng compiler theo hệ điều hành.

- **A. Chỉ Windows với MinGW** — Sai: Bảng gắn Windows với MinGW/MSVC.
- **B. macOS** — Đúng: Đúng: bảng gắn macOS với Clang/Xcode tools.
- **C. Mọi trang web không cần cài gì** — Sai: Bảng đang nói về công cụ trên máy.
- **D. Chỉ Java runtime** — Sai: Java runtime không phải môi trường này.

### 4. Muốn chọn chuẩn C++23 theo cú pháp đã nêu, chọn lệnh nào? (Áp dụng / đọc code)

Cơ sở: Ví dụ cờ -std=c++23.

- **A. g++ --version=c++23 chuong_trinh.cpp** — Sai: --version không phải cách chọn chuẩn ở bài.
- **B. g++ chuong_trinh.cpp -theme=c++23** — Sai: Theme không chọn chuẩn biên dịch.
- **C. java -std=c++23 chuong_trinh.cpp** — Sai: Bài dùng compiler C++, không dùng java.
- **D. g++ -std=c++23 chuong_trinh.cpp** — Đúng: Đúng: cờ chọn chuẩn được bài minh họa.

### 5. Trên Windows, g++ báo “not recognized” dù MinGW đã có. Cần kiểm tra gì? (Tìm lỗi)

Cơ sở: Cảnh báo về PATH.

- **A. Thư mục bin của MinGW trong PATH** — Đúng: Đúng: bài nêu bổ sung/kiểm tra đường dẫn này.
- **B. Mọi dấu chấm phẩy trong chương trình** — Sai: Lệnh chưa được tìm thấy, chưa đến bước biên dịch nguồn.
- **C. Màu biểu tượng IDE** — Sai: Màu không ảnh hưởng việc tìm lệnh.
- **D. Tên biến trong Java** — Sai: Không liên quan công cụ C++.

## cpp — Chương 3

### 1. Trong ví dụ hello.cpp, main đóng vai trò gì? (Nhớ khái niệm)

Cơ sở: Bảng giải thích main.

- **A. Lưu chuỗi đầu ra** — Sai: Chuỗi nằm trong lệnh cout.
- **B. Chọn màu terminal** — Sai: Ví dụ không có chức năng này.
- **C. Điểm bắt đầu của chương trình** — Đúng: Đúng: bài giải thích main như điểm vào.
- **D. Thay thế file mã nguồn** — Sai: main là hàm trong nguồn, không thay file.

### 2. Trong ví dụ, return 0 biểu thị điều gì? (Nhớ khái niệm)

Cơ sở: Chú thích return 0.

- **A. Chắc chắn in số 0** — Sai: return không phải lệnh cout.
- **B. Kết thúc main với mã thành công** — Đúng: Đúng: đây là ý nghĩa trong bài.
- **C. Lặp main vô hạn** — Sai: Lệnh kết thúc hàm, không tạo vòng lặp.
- **D. Bắt đầu biên dịch** — Sai: Biên dịch diễn ra trước khi chạy.

### 3. Đoạn xuất dưới đây in gì? (Áp dụng / đọc code)

Cơ sở: Ví dụ hello.cpp.

```
std::cout << "Hello, World!" << std::endl;
```

- **A. Hello, World! rồi xuống dòng** — Đúng: Đúng: cout in chuỗi và endl xuống dòng.
- **B. std::cout** — Sai: Tên đối tượng không phải chuỗi được in.
- **C. Hello, World!0** — Sai: return 0 không thêm vào đầu ra.
- **D. Không có nội dung nào** — Sai: Lệnh cout thực hiện xuất.

### 4. Lệnh g++ hello.cpp -o hello tạo đầu ra nào theo bài? (Áp dụng / đọc code)

Cơ sở: Phần biên dịch và chạy.

- **A. Chỉ file HTML** — Sai: Đó không phải đầu ra của quy trình này.
- **B. Mã Java trong hello.java** — Sai: Bài không chuyển C++ sang Java.
- **C. Chỉ thay tên nguồn thành hello** — Sai: Compiler không đơn thuần đổi tên nguồn.
- **D. File thực thi mang tên hello theo môi trường** — Đúng: Đúng: -o đặt tên đầu ra biên dịch.

### 5. Đã dùng cout/endl trong mẫu nhưng quên include thư viện được bài yêu cầu. Cần thêm gì? (Tìm lỗi)

Cơ sở: Giải thích #include iostream.

- **A. #include <string> thay mọi thư viện** — Sai: string không phải header được mẫu này chỉ định.
- **B. #include <iostream>** — Đúng: Đúng: header nhập/xuất chuẩn trong hello.cpp.
- **C. Xóa hàm main** — Sai: Xóa điểm vào không bổ sung thư viện.
- **D. Đổi return 0 thành cout** — Sai: Không sửa việc thiếu include.

## cpp — Chương 4

### 1. Static typing được chương mô tả như thế nào? (Nhớ khái niệm)

Cơ sở: Box Static Typing.

- **A. Kiểu của biến được xác định khi khai báo** — Đúng: Đúng: ví dụ int x giữ kiểu int.
- **B. Biến luôn tự đổi kiểu theo mọi giá trị mới** — Sai: Đây không phải cách bài giải thích.
- **C. Không được khai báo biến** — Sai: Bài có nhiều khai báo biến.
- **D. Mọi biến đều là string** — Sai: Bài liệt kê int, double, bool và các kiểu khác.

### 2. const trong ví dụ có ý nghĩa gì? (Nhớ khái niệm)

Cơ sở: Ví dụ const PI.

- **A. Biến luôn tăng một** — Sai: Đây là hành vi của ++, không phải const.
- **B. Chỉ cho phép chuỗi** — Sai: PI trong bài là double.
- **C. Không được thay đổi giá trị sau khởi tạo** — Đúng: Đúng: phép gán lại PI được đánh dấu lỗi.
- **D. Luôn làm giá trị bằng 0** — Sai: Ví dụ PI khởi tạo 3.14159.

### 3. Dòng xuất tương ứng ví dụ bien.cpp cho nội dung nào? (Áp dụng / đọc code)

Cơ sở: Ví dụ ten, tuoi, diem_tb.

```
string ten = "Huy";
int tuoi = 20;
double diem_tb = 8.5;
cout << ten << " " << tuoi << " " << diem_tb;
```

- **A. 20 Huy 8.5** — Sai: Thứ tự trong biểu thức bắt đầu bằng ten.
- **B. Huy 20 8.5** — Đúng: Đúng: các giá trị được xuất theo thứ tự với khoảng trắng.
- **C. Huy208.5** — Sai: Có khoảng trắng được xuất giữa các giá trị.
- **D. ten tuoi diem_tb** — Sai: cout dùng giá trị biến, không in tên biến.

### 4. Cần lưu đúng/sai như dang_hoc trong ví dụ. Chọn khai báo nào? (Áp dụng / đọc code)

Cơ sở: Ví dụ bool dang_hoc.

- **A. char dang_hoc = 'A';** — Sai: char ở đây lưu ký tự.
- **B. string dang_hoc = "true";** — Sai: Đây là chuỗi chữ, không phải bool.
- **C. double dang_hoc = 8.5;** — Sai: Đây là số thực.
- **D. bool dang_hoc = true;** — Đúng: Đúng: bool biểu diễn giá trị logic trong mẫu.

### 5. Nếu bỏ comment ở dòng thứ hai, lỗi nào xảy ra? (Tìm lỗi)

Cơ sở: Ví dụ const.cpp.

```
const double PI = 3.14159;
PI = 3.14;
```

- **A. Gán lại một hằng const** — Đúng: Đúng: PI không được thay đổi sau khởi tạo.
- **B. PI chưa được khai báo** — Sai: PI đã khai báo ở dòng đầu.
- **C. double không nhận số thực** — Sai: double được dùng chính cho số thực.
- **D. Hai giá trị giống nhau nên lỗi** — Sai: Lỗi do const, không do việc so sánh hai giá trị.

## cpp — Chương 5

### 1. Phép % trong chương là phép gì? (Nhớ khái niệm)

Cơ sở: Bảng toán tử số học.

- **A. Thương thực** — Sai: Phép chia thực dùng /.
- **B. Chia lấy dư** — Đúng: Đúng: 7 % 2 được minh họa bằng 1.
- **C. So sánh bằng** — Sai: So sánh bằng là ==.
- **D. Gán kết hợp** — Sai: Gán kết hợp gồm +=, -=...

### 2. Theo bài, ++i và i++ khác nhau ở đâu? (Nhớ khái niệm)

Cơ sở: Ví dụ pre/post increment.

- **A. Cả hai đều giảm i** — Sai: Cả hai đều tăng.
- **B. i++ luôn tăng hai lần** — Sai: i++ chỉ tăng một.
- **C. ++i không đổi i** — Sai: ++i thay đổi i.
- **D. ++i tăng trước khi dùng; i++ dùng giá trị cũ rồi tăng** — Đúng: Đúng: ví dụ in 5 rồi 7 thể hiện hai cách.

### 3. Với a=10, b=3, a/b và a%b lần lượt là gì? (Áp dụng / đọc code)

Cơ sở: Ví dụ chia số nguyên dương.

- **A. 3 và 1** — Đúng: Đúng: thương nguyên 3, dư 1.
- **B. 3.333… và 1** — Sai: Không ép kiểu nên a/b vẫn là phép chia nguyên.
- **C. 1 và 3** — Sai: Thương và dư đã bị đảo.
- **D. 3 và 0** — Sai: 10 không chia hết cho 3.

### 4. Hai lệnh xuất sau in lần lượt gì? (Áp dụng / đọc code)

Cơ sở: Ví dụ i++ và ++i.

```
int i = 5;
cout << i++ << endl;
cout << ++i << endl;
```

- **A. 6 rồi 7** — Sai: i++ dùng giá trị cũ là 5 ở lần đầu.
- **B. 5 rồi 6** — Sai: ++i tăng trước lần in thứ hai.
- **C. 5 rồi 7** — Đúng: Đúng: sau i++, i=6; ++i làm i=7.
- **D. 7 rồi 5** — Sai: Thứ tự tăng và sử dụng không bị đảo.

### 5. Muốn thương thực từ hai int dương nhưng viết a/b. Sửa theo bài thế nào? (Tìm lỗi)

Cơ sở: Mục lỗi thường gặp: ép ít nhất một toán hạng.

- **A. Chỉ thay / bằng %** — Sai: % cho phần dư, không cho thương thực.
- **B. Ép một toán hạng sang double trước chia** — Đúng: Đúng: mẫu dùng (double)a / b.
- **C. Đổi tên biến thành doubleA** — Sai: Tên không thay đổi kiểu.
- **D. Chỉ thêm endl** — Sai: endl ảnh hưởng xuất, không đổi phép chia.

## thuat-toan — Chương 1

### 1. Định nghĩa thuật toán trong bài là gì? (Nhớ khái niệm)

Cơ sở: Định nghĩa đầu chương.

- **A. Mọi câu mô tả bất kỳ** — Sai: Một mô tả mơ hồ chưa đáp ứng các tính chất.
- **B. Chỉ chương trình viết bằng Python** — Sai: Thuật toán độc lập với ngôn ngữ.
- **C. Chuỗi bước hữu hạn, rõ ràng, có thứ tự để giải quyết vấn đề** — Đúng: Đúng: đây là định nghĩa nêu trong bài.
- **D. Một thiết bị phần cứng** — Sai: Bài mô tả cách giải quyết, không phải thiết bị.

### 2. Tính hữu hạn yêu cầu điều gì? (Nhớ khái niệm)

Cơ sở: Bảng năm tính chất.

- **A. Kết thúc sau số bước hữu hạn** — Đúng: Đúng: đó là finiteness.
- **B. Luôn dùng đúng một dòng code** — Sai: Không có yêu cầu một dòng.
- **C. Chỉ nhận một đầu vào** — Sai: Bài cho phép không hoặc nhiều đầu vào.
- **D. Phải viết bằng C++** — Sai: Ngôn ngữ không quyết định tính hữu hạn.

### 3. Hướng dẫn lắp ráp đánh số rõ từng bước và có bước kết thúc minh họa điều gì? (Áp dụng / đọc code)

Cơ sở: Ví dụ đời thường và tính chất thuật toán.

- **A. Chỉ thuật toán mới phải là Python** — Sai: Ví dụ đời thường không cần ngôn ngữ lập trình.
- **B. Một quy trình có thứ tự, rõ ràng và hữu hạn** — Đúng: Đúng: các đặc điểm phù hợp định nghĩa.
- **C. Quy trình không cần đầu ra** — Sai: Mục tiêu lắp ráp vẫn là kết quả cần đạt.
- **D. Thiếu khả thi vì không có compiler** — Sai: Tính khả thi không phụ thuộc việc có compiler.

### 4. Bạn đã hiểu cách giải một bài toán và muốn viết bằng Java thay Python. Điều gì giữ nguyên? (Áp dụng / đọc code)

Cơ sở: Mục độc lập ngôn ngữ.

- **A. Mọi ký hiệu cú pháp Python** — Sai: Cú pháp giữa hai ngôn ngữ khác nhau.
- **B. Tên executable trên máy** — Sai: Công cụ chạy không phải bản chất cách giải.
- **C. Đuôi file bắt buộc** — Sai: Đuôi file thay theo ngôn ngữ.
- **D. Ý tưởng và các bước của thuật toán** — Đúng: Đúng: cách giải có thể triển khai bằng ngôn ngữ khác.

### 5. Bước “xử lý cho tốt rồi làm tiếp” vi phạm tính chất nào rõ nhất? (Tìm lỗi)

Cơ sở: Bảng tính rõ ràng.

- **A. Rõ ràng** — Đúng: Đúng: chưa xác định cụ thể thao tác cần làm.
- **B. Bắt buộc dùng nhiều ngôn ngữ** — Sai: Bài không nêu tính chất này.
- **C. Bắt buộc có giao diện** — Sai: Giao diện không thuộc năm tính chất.
- **D. Bắt buộc có mạng** — Sai: Bài không yêu cầu mạng.

## thuat-toan — Chương 2

### 1. Big O trong chương dùng để mô tả điều gì? (Nhớ khái niệm)

Cơ sở: Mục vì sao không đo bằng giây.

- **A. Số giây chính xác trên mọi máy** — Sai: Thời gian thực tế còn phụ thuộc môi trường.
- **B. Tốc độ tăng trưởng theo kích thước đầu vào** — Đúng: Đúng: Big O mô tả sự tăng trưởng theo n.
- **C. Tên ngôn ngữ lập trình** — Sai: Không phải thước đo ngôn ngữ.
- **D. Màu của đoạn code** — Sai: Không liên quan phân tích hiệu năng.

### 2. Lấy phần tử đầu của danh sách không rỗng được bài xếp vào lớp nào? (Nhớ khái niệm)

Cơ sở: Ví dụ lay_phan_tu_dau.

- **A. O(n²)** — Sai: Không có hai vòng lặp.
- **B. O(n)** — Sai: Không duyệt hết danh sách.
- **C. O(2ⁿ)** — Sai: Không có cấu trúc tăng mũ.
- **D. O(1)** — Đúng: Đúng: ví dụ dùng một truy cập ds[0].

### 3. Tìm kiếm tuyến tính khi target không có cần xét bao nhiêu phần tử? (Áp dụng / đọc code)

Cơ sở: tim_kiem_tuyen_tinh trong trường hợp xấu nhất.

- **A. Tối đa n, nên O(n)** — Đúng: Đúng: phải duyệt hết để kết luận không có.
- **B. Luôn một phần tử, nên O(1)** — Sai: Target vắng mặt không cho dừng ở phần tử đầu.
- **C. n² phần tử** — Sai: Ví dụ chỉ có một vòng lặp.
- **D. 2ⁿ phần tử** — Sai: Không có cây nhánh tăng mũ.

### 4. Hàm in_tat_ca_cap trong bài có hai vòng lặp qua cùng ds. Độ phức tạp là gì? (Áp dụng / đọc code)

Cơ sở: Ví dụ in_tat_ca_cap.

- **A. O(1)** — Sai: Số lần in tăng theo dữ liệu.
- **B. O(n)** — Sai: Mỗi phần tử ngoài còn duyệt toàn danh sách bên trong.
- **C. O(n²)** — Đúng: Đúng: có n lần nhân n lần.
- **D. O(log n)** — Sai: Không có bước chia đôi kích thước.

### 5. Kết luận “O(n) nghĩa là luôn chạy đúng n giây” sai ở đâu? (Tìm lỗi)

Cơ sở: Phân biệt thời gian giây và tăng trưởng.

- **A. Big O không có quan hệ với kích thước** — Sai: Nó có quan hệ với kích thước n.
- **B. Big O không ấn định thời gian bằng giây** — Đúng: Đúng: máy và môi trường ảnh hưởng thời gian thực tế.
- **C. O(n) luôn là O(2ⁿ)** — Sai: Đây là hai lớp tăng trưởng khác nhau.
- **D. Mọi máy đều có cùng tốc độ** — Sai: Bài nêu rõ phụ thuộc phần cứng.

## thuat-toan — Chương 3

### 1. Hai vòng lặp liên tiếp được kết hợp theo quy tắc nào? (Nhớ khái niệm)

Cơ sở: Quy tắc cộng.

- **A. Cộng chi phí rồi rút gọn** — Đúng: Đúng: O(n)+O(n) rút gọn thành O(n).
- **B. Luôn nhân thành O(n²)** — Sai: Nhân trong ví dụ áp dụng cho vòng lồng nhau.
- **C. Bỏ qua cả hai vòng** — Sai: Vẫn phải tính công việc được thực hiện.
- **D. Luôn thành O(1)** — Sai: Hai vòng duyệt n vẫn phụ thuộc n.

### 2. Khi hai đầu vào có kích thước n và m độc lập, nên biểu diễn ra sao? (Nhớ khái niệm)

Cơ sở: Ví dụ giữ riêng biến từng input.

- **A. Luôn thay m bằng n** — Sai: Không biết hai đầu vào có cùng kích thước.
- **B. Bỏ m vì viết sau** — Sai: Thứ tự viết không loại bỏ chi phí.
- **C. Giữ cả n và m khi phân tích** — Đúng: Đúng: bài minh họa O(n+m).
- **D. Dùng n×m cho mọi trường hợp** — Sai: Chỉ nhân khi công việc thực sự lồng nhau như ví dụ.

### 3. Hai vòng dưới đây duyệt cùng ds có độ phức tạp nào? (Áp dụng / đọc code)

Cơ sở: vi_du_cong.

```
for x in ds: print(x)
for x in ds: print(x)
```

- **A. O(n²)** — Sai: Các vòng không lồng nhau.
- **B. O(n)** — Đúng: Đúng: 2n rút gọn thành n.
- **C. O(1)** — Sai: Có công việc cho từng phần tử.
- **D. O(2ⁿ)** — Sai: Không có tăng trưởng mũ.

### 4. Rút gọn 3n² + 5n + 100 theo quy tắc bài được gì? (Áp dụng / đọc code)

Cơ sở: Ví dụ quy_tac_rut_gon.

- **A. O(100)** — Sai: Hằng số không áp đảo n² khi n tăng.
- **B. O(n)** — Sai: Số hạng n² tăng nhanh hơn n.
- **C. O(3)** — Sai: Không thể giữ hệ số mà bỏ biến n².
- **D. O(n²)** — Đúng: Đúng: bỏ hệ số và số hạng bậc thấp hơn.

### 5. Bạn cho hai vòng lặp lồng nhau, mỗi vòng n lần, là O(n+n). Sai ở đâu? (Tìm lỗi)

Cơ sở: Quy tắc nhân và bảng cấu trúc code.

- **A. Vòng trong chạy n lần cho mỗi lần vòng ngoài** — Đúng: Đúng: n×n tạo O(n²).
- **B. Hai vòng lồng luôn chạy một lần** — Sai: Mỗi vòng có n lần như đề bài.
- **C. Chỉ cần đổi tên biến** — Sai: Tên biến không đổi số lần chạy.
- **D. Không được dùng vòng lặp trong thuật toán** — Sai: Bài dùng vòng lặp để minh họa.

## thuat-toan — Chương 4

### 1. Auxiliary space trong bài tính phần bộ nhớ nào? (Nhớ khái niệm)

Cơ sở: Ghi chú không tính input.

- **A. Chỉ số giây chạy** — Sai: Đó là thời gian, không phải bộ nhớ.
- **B. Chỉ bộ nhớ của input** — Sai: Bài tập trung vào bộ nhớ bổ sung.
- **C. Chỉ chiều dài tên biến** — Sai: Tên biến không phải phép đo này.
- **D. Bộ nhớ bổ sung thuật toán cần** — Đúng: Đúng: bao gồm cả stack khi phù hợp.

### 2. Mỗi lời gọi đệ quy đang chờ góp gì vào bộ nhớ? (Nhớ khái niệm)

Cơ sở: Ví dụ giai_thua_de_quy.

- **A. Một bản IDE mới** — Sai: Lời gọi không khởi động IDE.
- **B. Một khung trên call stack** — Đúng: Đúng: các khung chờ tạo chi phí bộ nhớ.
- **C. Luôn một danh sách kích thước n²** — Sai: Ví dụ không tạo danh sách này.
- **D. Không tốn bộ nhớ nào** — Sai: Bài nhấn mạnh chi phí stack.

### 3. Hàm tong_O1_space chỉ dùng biến tong để cộng dồn. Bộ nhớ bổ sung là gì? (Áp dụng / đọc code)

Cơ sở: Ví dụ tong_O1_space.

- **A. O(1)** — Đúng: Đúng: số biến bổ sung không tăng theo n trong mô hình của bài.
- **B. O(n)** — Sai: Hàm không tạo mảng mới n phần tử.
- **C. O(n²)** — Sai: Không có cấu trúc phụ kích thước n².
- **D. O(2ⁿ)** — Sai: Không có bộ nhớ tăng mũ trong ví dụ.

### 4. Hàm nhan_doi_On_space thêm một kết quả cho mỗi phần tử input. Bộ nhớ bổ sung là gì? (Áp dụng / đọc code)

Cơ sở: Ví dụ ket_qua mới.

- **A. O(1)** — Sai: Danh sách kết quả tăng cùng số phần tử.
- **B. O(log n)** — Sai: Ví dụ không chia đôi bộ nhớ.
- **C. O(n)** — Đúng: Đúng: tạo danh sách mới n kết quả.
- **D. Không thể có đầu ra** — Sai: Hàm trả danh sách kết quả.

### 5. Kết luận giai thừa đệ quy dùng O(1) space vì “không tạo mảng” bỏ sót gì? (Tìm lỗi)

Cơ sở: Ví dụ factorial và stack.

- **A. Bỏ sót màu code** — Sai: Màu không ảnh hưởng bộ nhớ thuật toán.
- **B. Bỏ sót các khung đệ quy trên stack** — Đúng: Đúng: độ sâu theo n làm bộ nhớ O(n).
- **C. Bỏ sót yêu cầu phải có GUI** — Sai: Ví dụ không cần giao diện.
- **D. Bỏ sót vì mọi thuật toán đều O(n²)** — Sai: Bài có ví dụ O(1) và O(n).

## thuat-toan — Chương 5

### 1. Bubble Sort trong bài so sánh những phần tử nào? (Nhớ khái niệm)

Cơ sở: Mô tả Bubble Sort.

- **A. Hai phần tử liền kề** — Đúng: Đúng: đổi chỗ hàng xóm khi sai thứ tự.
- **B. Chỉ phần tử đầu và cuối** — Sai: Đó không phải quy trình trong mẫu.
- **C. Chỉ các phần tử bằng nhau** — Sai: Mẫu so sánh lớn hơn để sửa thứ tự.
- **D. Mọi phần tử với pivot** — Sai: Chương không mô tả pivot cho Bubble Sort.

### 2. Thuật toán sắp xếp ổn định nghĩa là gì? (Nhớ khái niệm)

Cơ sở: Ghi chú Stable.

- **A. Mọi phần tử phải giống nhau** — Sai: Ổn định không yêu cầu dữ liệu bằng nhau.
- **B. Không bao giờ có phép đổi chỗ** — Sai: Bubble Sort vẫn đổi chỗ.
- **C. Luôn chạy O(1)** — Sai: Ổn định nói về thứ tự, không phải độ phức tạp.
- **D. Giữ thứ tự tương đối của phần tử bằng nhau** — Đúng: Đúng: đó là định nghĩa trong chương.

### 3. Sau lượt ngoài đầu tiên của bubble_sort với [3, 1, 2], danh sách là gì? (Áp dụng / đọc code)

Cơ sở: Mẫu so sánh và đổi chỗ liền kề.

- **A. [1, 3, 2]** — Sai: Đây mới là trạng thái sau lần so sánh đầu.
- **B. [1, 2, 3]** — Đúng: Đúng: 3 đổi với 1 rồi với 2 trong cùng lượt.
- **C. [3, 2, 1]** — Sai: Mẫu sắp tăng, không sắp giảm.
- **D. [3, 1, 2]** — Sai: Có hai cặp sai thứ tự nên mẫu có đổi chỗ.

### 4. Lượt đầu Selection Sort với [3, 1, 2] sẽ chọn và đưa phần tử nào lên đầu? (Áp dụng / đọc code)

Cơ sở: Mẫu idx_min và đổi một lần mỗi lượt.

- **A. 3** — Sai: 3 không nhỏ nhất trong phần chưa sắp.
- **B. 2** — Sai: 1 còn nhỏ hơn 2.
- **C. 1** — Đúng: Đúng: tìm nhỏ nhất rồi đổi với phần tử đầu.
- **D. Không chọn phần tử nào** — Sai: Mẫu thực hiện chọn min ở lượt đầu.

### 5. Tại sao break vô điều kiện sau lượt đầu Bubble Sort là sai với dữ liệu chưa biết? (Tìm lỗi)

Cơ sở: Tối ưu da_doi_cho trong code.

- **A. Chỉ được dừng sớm khi lượt đó không có đổi chỗ** — Đúng: Đúng: lượt có đổi chỗ chưa bảo đảm toàn bộ mảng đã xong.
- **B. Bubble Sort không được có break ở đâu cả** — Sai: Mẫu có break với điều kiện thích hợp.
- **C. Vì phải đổi sang Selection Sort luôn** — Sai: Không cần đổi thuật toán để sửa điều kiện.
- **D. Vì tất cả input đều đã sắp** — Sai: Input chưa biết không bảo đảm đã sắp.

