BỘ GIAO THÔNG VẬN TẢI 

TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI THÀNH PHỐ HỒ CHÍ MINH 

------------------o0o----------------- 



<!-- Start of picture text -->
CAU TRUC DU LIU<br>VA GIAI THUAT<br><!-- End of picture text -->

_(Lưu hành nội bộ)_ 

**Ths. Bùi Văn Thượng** 

Chương 1. Tổng quan 

Cấu trúc dữ liệu và giải thuật 

# **Chương 1. TỔNG QUAN** 

## **1.1 Mô hình hóa bài toán thực tế** 

Mô hình hóa bài toán tức là nhận biết và giải quyết các bài toán thực tế theo hướng tin học hóa. Thông thường, khi khởi đầu, hầu hết các bài toán là không đơn giản, không rõ ràng. Để giảm bớt sự phức tạp của bài toán thực tế, ta phải hình thức hóa nó, nghĩa là phát biểu lại bài toán thực tế thành một bài toán hình thức (hay còn gọi là mô hình toán). Có thể có rất nhiều bài toán thực tế có cùng một mô hình toán. 

Để giải một bài toán trong thực tế bằng máy tính ta phải bắt đầu từ việc xác định bài toán: 

- _Phải làm gì ?_ 

- _Phải làm như thế nào?_ 

**Ví dụ 1** : Tô màu bản đồ thế giới. 

Ta cần phải tô màu cho các nước trên bản đồ thế giới. Trong đó mỗi nước đều được tô một màu và hai nước láng giềng (cùng biên giới) thì phải được tô bằng hai màu khác nhau. Hãy tìm một phương án tô màu sao cho số màu sử dụng là ít nhất. 

Ta có thể xem mỗi nước trên bản đồ thế giới là một đỉnh của đồ thị, hai nước láng giềng của nhau thì hai đỉnh ứng với nó được nối với nhau bằng một cạnh. Bài toán lúc này trở thành bài toán tô màu cho đồ thị như sau: Mỗi đỉnh đều phải được tô màu, hai đỉnh có cạnh nối thì phải tô bằng hai màu khác nhau và ta cần tìm một phương án tô màu sao cho số màu được sử dụng là ít nhất. 

## **1.2 Cấu trúc dữ liệu** 

### **1.2.1 Tổng quan** 

Kiểu dữ liệu là một tập hợp các giá trị và một tập hợp các phép toán trên các giá trị đó. 

**Ví dụ 2** : 

- _Kiểu Boolean là một tập hợp có 2 giá trị TRUE, FALSE và các phép toán trên nó như OR, AND, NOT …._ 

- _Kiểu Integer là tập hợp các số nguyên có giá trị từ -32768 đến 32767 cùng các phép toán cộng, trừ, nhân, chia, Div, Mod…_ 

Kiểu dữ liệu có hai loại là kiểu dữ liệu sơ cấp và **kiểu dữ liệu có cấu trúc** còn gọi là **cấu trúc dữ liệu** . 

   - _Kiểu dữ liệu sơ cấp là kiểu dữ liệu mà giá trị dữ liệu của nó là đơn nhất. Ví dụ: kiểu Boolean, Integer, character, float…._ 

   - _Kiểu dữ liệu có cấu trúc hay còn gọi là cấu trúc dữ liệu là kiểu dữ liệu mà giá trị dữ liệu của nó là sự kết hợp của các giá trị khác. Ví dụ: Kiểu mảng, kiểu cấu trúc, danh sách liên kết…._ 

- **1.2.2 Tiêu chuẩn lựa chọn cấu trúc dữ liệu** 

Cấu trúc dữ liệu đóng vai trò quan trọng trong việc kết hợp và đưa ra cách giải quyết cho bài toán. Nó hỗ trợ cho các thuật toán thao tác trên đối tượng được hiệu quả hơn. 

Việc lựa chọn cấu trúc dữ liệu cho bài toán có thể dựa vào các tiêu chuẩn sau: 

- _Phải biểu diễn được đầy đủ thông tin nhập và xuất của bài toán._ 

- _Phải phù hợp với các thao tác của thuật toán mà ta lựa chọn._ 

- _Phù hợp với điều kiện cho phép của ngôn ngữ lập trình đang sử dụng._ 

- _Tiết kiệm tài nguyên hệ thống._ 

_Trang 2_ 

Chương 1. Tổng quan 

Cấu trúc dữ liệu và giải thuật 

### **1.2.3 Các kiểu cấu trúc dữ liệu** 

Cấu trúc dữ liệu có thể chia thành các dạng phổ biến sau: 

- **_Cấu trúc dữ liệu tuyến tính_** _: Là cấu trúc dữ liệu trong đó các phần tử được liên kết tuần tự, nối tiếp với nhau (ví dụ: Mảng, danh sách liên kết,…)._ 

- **_Cấu trúc dữ liệu dạng cây_** _: Mỗi phần tử có thể liên kết với nhiều phần tử khác theo từng mức._ 

- **_Cấu trúc dữ liệu bảng băm_** _: Là một cấu trúc dữ liệu tương tự như mảng nhưng kèm theo một hàm băm để ánh xạ nhiều giá trị vào cùng một phần tử trong mảng._ 

- **_Cấu trúc dữ liệu dạng đồ thị_** _: Là dạng cấu trúc dữ liệu bao gồm một tập các đối tượng được gọi là các đỉnh (hoặc nút) nối với nhau bởi các cạnh (hoặc cung)._ 

## **1.3 Giải thuật** 

### **1.3.1 Khái niệm** 

Giải thuật hay thuật toán là một chuỗi hữu hạn các thao tác để giải một bài toán nào đó. 

Các tính chất quan trọng của giải thuật là: 

- **_Hữu hạn_** _: Giải thuật phải luôn luôn kết thúc sau một số hữu hạn bước._ 

- **_Xác định_** _: Mỗi bước của giải thuật phải được xác định rõ ràng và phải được thực hiện chính xác, nhất quán._ 

- **_Đúng_** _: Giải thuật phải đảm bảo tính đúng và chính xác;_ 

- **_Hiệu quả_** _: Các thao tác trong giải thuật phải được thực hiện trong một lượng thời gian hữu hạn._ 

- _…._ 

Ngoài ra một giải thuật còn phải có đầu vào (input) và đầu ra (output). 

### **1.3.2 Biểu diễn giải thuật** 

Có nhiều cách để biểu diễn thuật toán. Dưới đây là một số cách thường được sử dụng: 

- **_Sử dụng ngôn ngữ tự nhiên_** _: Liệt kê tuần tự các bước để giải quyết bài toán. Cách này đơn giản và không cần kiến thức về biểu diễn thuật toán, tuy nhiên nó thường dài dòng và đôi khi khó hiểu._ 

- **_Sử dụng lưu đồ_** _(sơ đồ khối): Sử dụng các hình khối khác nhau để biểu diễn thuật toán. Cách này trực quan và dễ hiểu , tuy nhiên hơi cồng kềnh._ 

- **_Sử dụng mã giả_** _: Sử dụng ngôn ngữ tựa ngôn ngữ lập trình để biểu diễn thuật toán. Cách làm này đỡ cồng kềnh hơn sơ đồ khối tuy nhiên không trực quan._ 

- **_Sử dụng ngôn ngữ lập trình_** _: Sử dụng các ngôn ngữ máy tính để biểu diễn (Pascal,  C,…). Cách này đòi hỏi phải có kiến thức và kỹ năng về ngôn ngữ lập trình được sử dụng._ 

### **1.3.3 Đánh giá độ phức tạp của thuật toán** 

Thời gian chạy một chương trình phụ thuộc vào các yếu tố sau: 

- _Khối lượng của dữ liệu đầu vào._ 

- _Chất lượng của mã máy được tạo ra bởi trình dịch._ 

- _Tốc độ thực thi lệnh của máy._ 

- _Độ phức tạp về thời gian của thuật toán_ 

Một thuật toán được gọi là hiệu quả nếu chi phí cần sử dụng tài nguyên của máy là thấp . 

Để mô tả việc đánh giá độ phức tạp của thuật toán người ta sử dụng một hàm f(N), trong đó N là khối lượng dữ liệu cần được xử lý. 

_Trang 3_ 

Chương 1. Tổng quan 

Cấu trúc dữ liệu và giải thuật 

Có hai phương pháp để đánh giá độ phức tạp của thuật toán gồm: 

- **Phương pháp thực nghiệm:** 

   - _Cách làm: Cài thuật toán rồi chọn các bộ dữ liệu thử nghiệm, sau đó thống kê các thông số nhận được khi chạy các bộ dữ liệu đó để đánh giá._ 

   - _Ưu điểm: Dễ thực hiện._ 

   - _Nhược điểm:_ 

      - _Chịu sự hạn chế của ngôn ngữ lập trình._ 

      - _Ảnh hưởng bởi trình độ của người lập trình._ 

      - _Chọn được các bộ dữ liệu thử đặc trưng cho tất cả tập các dữ liệu vào của thuật toán: Khó khăn và tốn nhiều chi phí._ 

      - _Phụ thuộc vào phần cứng._ 

- **Phương pháp xấp xỉ toán học:** 

   - _Đánh giá giá thuật toán theo hướng tiệm xấp xỉ tiệm cận qua các khái niệm O()._ 

   - _Ưu điểm: Ít phụ thuộc môi trường cũng như phần cứng hơn._ 

   - _Nhược điểm: Phức tạp._ 

   - _Các trường hợp độ phức tạp quan tâm:_ 

      - _Trường hợp tốt nhất (phân tích chính xác)_ 

      - _Trường hợp xấu nhất (phân tích chính xác)_ 

      - _Trường hợp trung bình (mang tích dự đoán)_ 

   - _Phân lớp độ phức tạp của giải thuật: Trong bảng dưới đây, độ phức tạp của thuật toán là tăng dần:_ 

|_Hằng số_|_O(c)_|
|---|---|
|_logN_|_O(logN)_|
|_N_|_O(N)_|
|_NlogN_|_O(NlogN)_|
|_N2_|_O(N2)_|
|_N3_|_O(N3)_|
|_2N_|_O(2N)_|
|_N!_|_O(N!)_|



## **1.4 Chương trình** 

### Theo **Niklaus Wirth** : 

Cấu trúc dữ liệu **+** Thuật toán **=** Chương trình 

### **1.4.1 Tiểu chuẩn của một chương trình** 

Một chương trình máy tính cần đảm bảo các tiêu chuẩn sau: 

- **_Tính tin cậy_** _: Chương trình phải chạy đúng như dự định, mô tả chính xác một giải thuật đúng._ 

- **_Tính uyển chuyển_** _: Chương trình dễ sửa đổi, giảm bớt công sức của lập trình viên khi phát triển chương trình, đáp ứng các quy trình làm phần mềm._ 

- **_Tính trong sáng_** _: Chương trình viết ra phải dễ đọc, dễ hiểu. Tính trong sáng phụ thuộc rất nhiều vào công cụ lập trình và phong cách lập trình._ 

- **_Tính hữu hiệu_** _: Chương trình phải đáp ứng được yêu cầu là chạy nhanh và ít tốn tài nguyên bộ nhớ, điều này phụ thuộc vào chất lượng của giải thuật cũng như tiểu xảo của lập trình viên._ 

Từ những phân tích trên ta thấy rằng việc tạo ra một chương trình đòi hỏi rất nhiều công đoạn và tiêu tốn rất nhiều công sức. Vì vậy đừng bao giờ viết chương trình mà chưa suy xét kỹ về giải thuật và những dữ liệu cần thao tác. 

_Trang 4_ 

Chương 1. Tổng quan 

Cấu trúc dữ liệu và giải thuật 

- **1.4.2 Quy trình làm phần mềm** 



<!-- Start of picture text -->
* Van hanh (Operation)<br>= Phan tich (Analysis). = Theo déi (Follow-up)<br>Thiét ké (Design). = Bao dudng (Maintenance).<br>> y_—_“<br>Buséc 1 Buoc 2 Buéc 3 Buoc 4<br>NA a<br>Y tuéng (Concept) = Cai dat (Implementation).<br>Xac dinh yéu cau = Thu nghiém (Testing).<br>(Requirements Specification)<br><!-- End of picture text -->

_Hình 1. Quy trình làm phần mềm._ 

**Xác định yêu cầu bài toán** : 

Dữ liệu vào -> Xử lý -> Dữ liệu ra 

Việc xác định bài toán tức là ta phải xác định xem cần giải quyết những vấn đề gì? Với giả thiết nào đã cho và lời giải cần phải đạt được những yêu cầu gì. 

**Phân tích, thiết kế** : Lựa chọn cấu trúc dữ liệu và thiết kế giải thuật phù hợp cho bài toán. 

**Cài đặt** : Sau khi đã có thuật toán ta cần lập trình để thể hiện thuật toán đó. Muốn lập trình đạt kết quả cao, cần phải có kỹ thuật lập trình tốt. Kỹ thuật lập trình tốt thể hiện ở kỹ năng viết chương trình, khả năng gỡ rối và thao tác nhanh. 

**Thử nghiệm** : Chạy thử, tìm và sửa lỗi, xây dựng các bộ test, … 

# **BÀI TẬP CHƯƠNG 1** 

Trình bày thuật toán để giải quyết các bài toán sau ( _dùng ngôn ngữ tự nhiên và sơ đồ khối_ ): 

1. Tìm bội chung nhỏ nhất của 2 số nguyên dương 

2. Giải phương trình bậc hai: ax<sup>2</sup> +bx+c = 0 

3. Tìm phần tử thứ n của dãy Fibonacci 



<!-- Start of picture text -->
4 : *:<br><!-- End of picture text -->

_Trang 5_ 

Chương 2. Các giải thuật tìm kiếm 

Cấu trúc dữ liệu và giải thuật 

# **Chương 2. CÁC GIẢI THUẬT TÌM KIẾM** 

## **2.1 Bài toán tìm kiếm** 

Tìm kiếm là một đòi hỏi rất thường xuyên trong các ứng dụng tin học. Tìm kiếm có thể định nghĩa là việc thu thập một số thông tin nào đó từ một khối thông tin lớn đã được lưu trữ trước đó. Bài toán tìm kiếm có thể được phát biểu như sau: 

Cho một dãy gồm n bản ghi r[1…n]. Mỗi bản ghi r[i] tương ứng với một khóa k[i]. Hãy tìm bản ghi có khóa X cho trước. X được gọi là khóa tìm kiếm hay đối trị tìm kiếm (argument). Công việc tìm kiếm sẽ hoàn thành nếu như có một trong hai tình huống sau sảy ra: 

- _Tìm được bản ghi có khóa tương ứng bằng X, lúc đó phép tìm kiếm thành công;_ 

- _Không tìm được bản ghi nào có khóa bằng X cả, phép tìm kiếm thất bại._ 

Để đơn giản cho việc trình bày giải thuật thì bài toán có thể phát biểu như sau: Cho mảng A[n], hãy tìm trong A phần tử có khóa bằng X. 

## **2.2 Giải thuật tìm kiếm tuyến tính** 

**Ý tưởng** của giải thuật tìm kiếm tuyến tính hay còn gọi là tìm kiếm tuần tự (Sequential search) như sau: So sánh X lần lượt với phần tử thứ 1, thứ 2,…của mảng A cho đến khi gặp được khóa cần tìm (tìm thấy), hoặc tìm hết mảng mà không thấy (không tìm thấy). 



<!-- Start of picture text -->
Begin<br>i = 0<br>0<br>i < n<br>0<br>a[i] == X<br>Thất bại<br>i++<br>Tìm thấy<br>End<br><!-- End of picture text -->

_Hình 2. Giải thuật tìm kiếm tuyến tính_ 

**Hàm minh họa giải thuật tìm kiếm tuyến tính** : Hàm trả về 1 nếu tìm thấy, ngược lại trả về 0: 

**_int_** _SequentialSearch(_ **_int_** _A[],_ **_int_** _n,_ **_int_** _x) {_ **_int_** _i=0;_ **_while_** _((i<n)&&(A[i]!=x)) i++;_ **_if_** _(i==n)_ **_return_** _0; //Tìm không thấy x_ **_else return_** _1; //Tìm thấy }_ 

_Trang 6_ 

Chương 2. Các giải thuật tìm kiếm 

Cấu trúc dữ liệu và giải thuật 

Nhận xét: Số phép so sánh của thuật toán trong trường hợp xấu nhất là 2*n. Để giảm thiểu số phép so sánh trong vòng lặp cho thuật toán, ta thêm phần tử “lính canh” vào cuối dãy. 

**_int_** _SequentialSearch(_ **_int_** _A[],_ **_int_** _n,_ **_int_** _x) {_ **_int_** _i=0, A[n]!=x ; //A[n] là phần tử lính canh_ **_while_** _(A[i]!=x) i++;_ **_if_** _(i==n)_ **_return_** _0; //Tìm không thấy x_ **_else return_** _1; //Tìm thấy }_ 

Thuật toán tìm kiếm tuyến tính cũng có thể cài đặt bằng for như sau: 

**_int_** _SequentialSearch(_ **_int_** _A[],_ **_int_** _n,_ **_int_** _x) {_ **_for(int_** _i=0; i<n; i++_ **_) if(_** _A[i]==x_ **_) return_** _1;_ **_return_** _0; }_ 

Tùy vào yêu cầu của bài toán mà ta có thể áp dụng giải thuật tìm kiếm tuyến tính một cách linh hoạt và phù hợp hơn. Chẳng hạn như các ví dụ sau: 

**Ví dụ 3** : Tìm trong mảng A[n] các phần tử là số dương và chia hết cho 3. 

_#include<iostream>_ **_using namespace_** _std;_ **_int_** _main() {_ **_int_** _A[100], i, n, x, dem=0; cout<< "Nhap so phan tu cua mang: "; cin>>n; cout<< "Nhap du lieu cho mang:\n";_ **_for_** _(i=0; i<n; i++) { cout<< "A["<<i<< "] = "; cin>>A[i]; } cout<< "Cac phan tu duong ma chia het cho 3 la:\n";_ **_for_** _(i=0;i<n;i++)_ **_if_** _(A[i]>0&&A[i]%3==0) { cout<<A[i]<< "\t"; dem++; }_ **_if_** _(dem==0) cout<< "Khong co phan tu nao duong va chia het cho 3!"; }_ 

_Trang 7_ 

Chương 2. Các giải thuật tìm kiếm 

Cấu trúc dữ liệu và giải thuật 

Kết quả chạy thử chương trình trên: 



<!-- Start of picture text -->
NhapNhap duso Meuphan tucho cuamang:mang: 8<br>ALO} =0<br>A[1] = 9<br>A[2] = 12<br>A[3] = -4<br>A[4] =5<br>A[5] = -1<br>AL6] = 22<br>A[7] = 4<br>Cac phan tu duong ma chia het cho 3 la:<br>9 12<br><!-- End of picture text -->

**Ví dụ 4** : Xóa khỏi mảng A[n] các phần tử dương có 2 chữ số. 

_#include<iostream>_ **_using namespace_** _std;_ **_int_** _main() {_ **_int_** _A[100], i, j, n, x; cout<< "Nhap so phan tu cua mang: "; cin>>n; cout<< "Nhap du lieu cho mang:\n";_ **_for_** _(i=0; i<n; i++) { cout<< "A["<<i<< "] = "; cin>>A[i]; } cout<< "Mang vua nhap la:\n";_ **_for_** _(i=0; i<n; i++) cout<<A[i]<< "\t";_ **_for_** _(i=0;i<n;i++)_ **_if_** _(A[i]>9&&A[i]<100) {_ **_for_** _(j=i; j<n-1; j++) A[j]=A[j+1]; //Phan tu dung truoc gan bang phan tu dung sau n--; //Giam kich thuoc cua mang di 1 i--; //Giam I de kiem tra lai phan tu moi thay the } cout<< " \nMang sau khi xoa cac phan tu duong co 2 chu so la:\n";_ **_for_** _(i=0; i<n; i++) cout<<A[i]<< "\t"; }_ 

Kết quả chạy thử chương trình: 



<!-- Start of picture text -->
NhapNhap duso phanlieu tucho cuamang:mang: 7<br>A[O] = 3<br>A{1] = 11<br>A[2] = 44<br>A[3] = 55<br>A[4] = 6<br>A[5] = 9<br>A[6] = 122<br>Mang vua nhap la:<br>3 11 44 55 6 9 122<br>Mang sau khi xoa cac phan tu duong co 2 chu so la:<br>3 6 9 122<br><!-- End of picture text -->

_Trang 8_ 

Chương 2. Các giải thuật tìm kiếm 

Cấu trúc dữ liệu và giải thuật 

## **2.3 Giải thuật tìm kiếm nhị phân** 

Giải thuật tìm kiếm nhị phân được áp dụng trên mảng đã sắp xếp thứ tự. Giả sử mảng A[n] được sắp xếp tăng dần, khi đó ta có: 

### A[i-1] **<** A[i] **<** A[i+1] 

Như vậy nếu X **>** A[i] thì X chỉ có thể nằm trong đoạn **[** A[i+1], A[n-1] **]** , còn nếu X **<** A[i] thì X chỉ có thể nằm trong đoạn **[** A[0], A[i-1] **]** . 

Ý tưởng của giải thuật là tại mỗi bước ta so sánh X với phần tử đứng giữa trong dãy tìm kiếm hiện hành, dựa vào kết quả so sánh này mà ta quyết định giới hạn dãy tìm kiếm ở nửa dưới hay nửa trên của dãy tìm kiếm hiện hành. 



<!-- Start of picture text -->
Begin<br>left = 0<br>right = n-1<br>0<br>left    right<br>mid = (left+right)/2<br>Không thấy<br>0<br>a[mid] == X<br>0<br>a[mid] > X<br>Tìm thấy<br>left = mid+1 right = mid-1<br>End<br><!-- End of picture text -->

_Hình 3. Sơ đồ khối của giải thuật tìm kiếm nhị phân_ 

**Hàm minh họa giải thuật tìm kiếm nhị phân** : Hàm trả về giá trị 1 nếu tìm thấy, ngược lại hàm trả về giá trị 0: 

**_int_** _BinarySearch(_ **_int_** _a[],_ **_int_** _n,_ **_int_** _x) {_ **_int_** _left, right, mid; left=0; right=n-1;_ **_do_** _{ mid=(left+right)/2;_ **_if_** _(a[mid]==x)_ **_return_** _1;_ **_else if_** _(a[mid]<x) left = mid+1;_ **_else_** _right = mid-1; }_ **_while_** _(left<=right);_ **_return_** _0;_ 

_}_ 

_Trang 9_ 

Chương 2. Các giải thuật tìm kiếm 

Cấu trúc dữ liệu và giải thuật 

**Ví dụ 5** : Minh họa sử dụng giải thuật tìm kiếm nhị phân. 

_#include<iostream>_ **_using namespace_** _std;_ **_int_** _BinarySearch(_ **_int_** _a[],_ **_int_** _n,_ **_int_** _x) {_ **_int_** _left, right, mid; left=0; right=n-1;_ **_do_** _{ mid=(left+right)/2;_ **_if_** _(a[mid]==x)_ **_return_** _1;_ **_else if_** _(a[mid]<x) left = mid+1;_ **_else_** _right = mid-1; }_ **_while_** _(left<=right);_ **_return_** _0; }_ **_int_** _main() {_ **_int_** _A[]={1, 2, 3, 4, 5, 6, 7, 8, 9}, i, x; cout<< "Nhap vao gia tri ma ban muon tim kiem: "; cin>>x; i=BinarySearch(A, 9, x);_ **_if_** _(i==1) cout<<x<< " co trong mang A";_ **_else_** _cout<<x<< " khong co trong mang A"; }_ 

Kết quả chạy thử chương trình: 



<!-- Start of picture text -->
Nhap vao gia tri ma ban muon tim kiem: 5<br>5 co trong mang A<br><!-- End of picture text -->

**2.4 Đánh giá độ phức tạp của các giải thuật tìm kiếm** 

|**Giải thuật tìm kiếm**|**Trường hợp tốt nhất**|**Trường hợp trung bình**|**Trường hợp xấu nhất**|
|---|---|---|---|
|**Tìm kiếm tuyến tính**|**_O(_**_1_**_)_**|**_O(_**_(N+1)/2_**_)_**|**_O(_**_N_**_)_**|
|**Tìm kiếm nhị phân**|**_O(_**_1_**_)_**|**_O_**_(log2N/2)_|**_O_**_(log2N)_|



_Trang 10_ 

Chương 2. Các giải thuật tìm kiếm 

Cấu trúc dữ liệu và giải thuật 

# **BÀI TẬP CHƯƠNG 2** 

**Bài 1** . Viết chương trình nhập dữ liệu cho mảng số nguyên A[n], với 0<n<100. Hãy tìm trong A các phần tử là số lẻ và lưu vào mảng B. 

**Bài 2** . Nhập dữ liệu và sắp xếp mảng A[n] tăng dần. Sử dụng giải thuật tìm kiếm nhị phân để tìm phần tử có giá trị bằng X ở trong mảng A sau đó xóa nó khỏi A nếu tìm thấy. 

**Bài 3** . Nhập vào một chuỗi S bất kì. Đếm xem trong chuỗi S có bao nhiêu kí tự khoảng trống, bao nhiêu kí tự số, bao nhiêu kí tự là chữ cái in hoa ? 



<!-- Start of picture text -->
.<br><!-- End of picture text -->

_Trang 11_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

# **Chương 3. CÁC GIẢI THUẬT SẮP XẾP** 

## **3.1 Bài toàn sắp xếp** 

Sắp xếp là quá trình bố trí lại các phần tử của một tập đối tượng nào đó theo một thứ tự nhất định. Chẳng hạn như thứ tự tăng dần hay giảm dần đối với một dãy số, thứ tự từ điển đối với các từ ….Yêu cầu sắp xếp thường xuyên xuất hiện trong các ứng dụng tin học với các mục đích khác nhau: sắp xếp dữ liệu trong máy tính để tìm kiếm cho thuận lời, sắp xếp các kết quả xử lý để in ra trên bảng biểu… 

Dưới đây là một số giải thuật sắp xếp thông dụng, trong đó ta sẽ minh họa bằng việc sắp xếp mảng **a[n]** theo thứ tự tăng dần. 

## **3.2 Đổi chỗ trực tiếp** 

**Ý tưởng** : Xuất phát từ đầu dãy, tìm tất các các nghịch thế chứa phần tử này (hai phần tử gọi là **ngịch thế** nếu khi sắp xếp tăng dần mà phần tử trước có giá trị lớn hơn phần tử đứng sau), triệt tiêu chúng bằng cách đổi chỗ 2 phần tử trong cặp nghịch thế. Lặp lại xử lý trên với phần tử kế trong dãy. 

### **Các bước thực hiện** : 

- _Bước 1: i = 0; // bắt đầu từ đầu dãy_ 

- _Bước 2: j = i+1; //tìm các nghịch thế với a[i]_ 

- _Bước 3: Trong khi j < N thực hiện: Nếu a[j]<a[i] thì đổi chỗ a[i], a[j]_ 

   - _j = j+1;_ 

- _Bước 4: i = i+1;_ 

      - _Nếu  i < N-1: Lặp lại Bước 2. Ngược lại:  Dừng._ 



<!-- Start of picture text -->
Begin<br>i = 0<br>0<br>i < n-1<br>j = i+1<br>0<br>j < n<br>i++<br>0<br>a[j] < a[i]<br>i = a[i]<br>a[i] = a[j]<br>End a[j] = t<br>j++<br><!-- End of picture text -->

_Hình 4. Giải thuật sắp xếp đổi chỗ trực tiếp_ 

_Trang 12_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

### **Hàm minh họa thuật toán đổi chỗ trực tiếp:** 

**_void_** _InterchangeSort(_ **_int_** _a[],_ **_int_** _N) {_ **_int_** _i, j;_ **_for_** _(i=0; i<N-1; i++)_ **_for_** _(j=i+1; j<N; j++)_ **_if_** _(a[j]<a[i]) // Thỏa mãn là cặp nghịch thế { // Đổi chỗ a[i] và a[min] cho nhau_ **_int_** _t=a[i]; a[i]=a[j]; a[j]=t; } }_ 

**Ví dụ 6** : Minh họa sắp xếp dãy số: 1, 4, 8, 9, 0, 12, -5 tăng dần bằng giải thuật đổi chỗ trực tiếp. 











|_i=0_<br>**1**|_j=1_<br>**4**|**8**|**9**|**0**|**12**|**-5**|
|---|---|---|---|---|---|---|
|_i=0_||||_j=4_|||
|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|_i=0_|||||||
|**0**|**4**|**8**|**9**|**1**|**12**|**-5**|
|_i=0_||||||_j=6_|
|**0**|**4**|**8**|**9**|**1**|**12**|**-5**|
|_i=0_||||||_j=6_|
|**-5**|**4**|**8**|**9**|**1**|**12**|**0**|
||_i=1_|_j=2_|||||
|**-5**|**4**|**8**|**9**|**1**|**12**|**0**|
||_i=1_|||_j=4_|||
|**-5**|**4**|**8**|**9**|**1**|**12**|**0**|
||_i=1_|||_j=4_|||
|**-5**|**1**|**8**|**9**|**4**|**12**|**0**|
||_i=1_|||||_j=6_|
|**-5**|**1**|**8**|**9**|**4**|**12**|**0**|
||_i=1_|||||_j=6_|
|**-5**|**0**|**8**|**9**|**4**|**12**|**1**|



_Trang 13_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

















||_i=2_|_j=3_||||
|---|---|---|---|---|---|
|**-5**<br>**0**|**8**|**9**|**4**|**12**|**1**|
||_i=2_||_j=4_|||
|**-5**<br>**0**|**8**|**9**|**4**|**12**|**1**|
||_i=2_||_j=4_|||
|**-5**<br>**0**|**4**|**9**|**8**|**12**|**1**|
||_i=2_||||_j=6_|
|**-5**<br>**0**|**4**|**9**|**8**|**12**|**1**|
||_i=2_||||_j=6_|
|**-5**<br>**0**|**1**|**9**|**8**|**12**|**4**|
|||_i=3_|_j=4_|||
|**-5**<br>**0**|**1**|**9**|**8**|**12**|**4**|
|||_i=3_|_j=4_|||
|**-5**<br>**0**|**1**|**8**|**9**|**12**|**4**|
|||_i=3_|||_j=6_|
|**-5**<br>**0**|**1**|**8**|**9**|**12**|**4**|
|||_i=3_|||_j=6_|
|**-5**<br>**0**|**1**|**4**|**9**|**12**|**8**|
||||_i=4_|_j=5_||
|**-5**<br>**0**|**1**|**4**|**9**|**12**|**8**|
||||_i=4_||_j=6_|
|**-5**<br>**0**|**1**|**4**|**9**|**12**|**8**|
||||_i=4_||_j=6_|
|**-5**<br>**0**|**1**|**4**|**8**|**12**|**9**|
|||||_i=5_|_j=6_|
|**-5**<br>**0**|**1**|**4**|**8**|**12**|**9**|
|**-5**<br>**0**|**1**|**4**|**8**|**9**|**12**|



_Trang 14_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

## **3.3 Chọn trực tiếp** 

### **Ý tưởng của giải thuật:** 

- _Tại vị trí đầu tiên của dãy, chọn phần tử nhỏ nhất trong N phần tử trong dãy hiện hành ban đầu và đưa phần tử này về vị trí đầu dãy hiện hành._ 

- _Xem dãy hiện hành chỉ còn N-1 phần tử của dãy hiện hành ban đầu. Bắt đầu từ vị trí thứ 2, chọn phần tử nhỏ nhất trong số N-1 phần tử kể trên và đưa nó về vị trí đầu của dãy gồm N-1 phần tử đang xét._ 

- _Lặp lại quá trình trên cho dãy hiện hành... đến khi dãy hiện hành chỉ còn 1 phần tử._ 

### **Các bước thực hiện:** 

- _Bước 1:   i = 0;_ 

- _Bước 2:  Tìm phần tử a[min] nhỏ nhất trong dãy hiện hành từ a[i] đến a[N]_ 

- _Bước 3 :  Đổi chỗ a[min] và a[i]_ 

- _Bước 4 :  Nếu  i < N-1 thì:_ 

   - _i = i+1;_ 

_Lặp lại Bước 2;_ 

_Ngược lại: Dừng._ 



<!-- Start of picture text -->
Begin<br>i=0<br>0<br>i < n-1<br>min = i<br>j = i+1<br>0<br>j < n<br>t = a[i]<br>0<br>a[i] = a[min]<br>a[j] < a[min]<br>a[min] = t<br>End<br>min=j<br>i++<br>j++<br><!-- End of picture text -->

_Hình 5. Giải thuật sắp xếp chọn trực tiếp_ 

_Trang 15_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

### **Hàm minh họa thuật toán chọn trực tiếp:** 

**_void_** _SelectionSort(_ **_int_** _a[],_ **_int_** _n ) {_ **_int_** _min, i, j; // min dùng để lưu vị trí của phần tử nhỏ nhất_ **_for_** _(i=0; i<n -1 ; i++) { min = i;_ **_for_** _(j = i+1; j <n ; j++)_ **_if_** _(a[j] < a[min]) min = j; {_ **_int_** _t=a[i]; a[i]=a[min]; a[min]=t; } } }_ 

**Ví dụ 7** : Minh họa sắp xếp dãy số: 1, 4, 8, 9, 0, 12, -5 tăng dần bằng giải thuật chọn trực tiếp. 





|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|---|---|---|---|---|---|---|
|||||||_min_|
|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|**-5**|**4**|**8**|**9**|**0**<br>_min_|**12**|**1**|
|**-5**|**4**|**8**|**9**|**0**|**12**|**1**|
|**-5**|**0**|**8**|**9**|**4**|**12**|**1**|
|||||||_min_|
|**-5**|**0**|**8**|**9**|**4**|**12**|**1**|





|**-5**|**0**|**1**|**9**|**4**|**12**|**8**|
|---|---|---|---|---|---|---|
|||||_min_|||
|**-5**|**0**|**1**|**9**|**4**|**12**|**8**|
|**-5**|**0**|**1**|**4**|**9**|**12**|**8**|
|||||||_min_|
|**-5**|**0**|**1**|**4**|**9**|**12**|**8**|



_Trang 16_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 



<!-- Start of picture text -->
-5  0  1  4  8  12  9<br>min<br>-5  0  1  4  8  12  9<br>-5  0  1  4  8  9  12<br><!-- End of picture text -->

## **3.4 Chèn trực tiếp** 

### **Ý tưởng của giải thuật** : 

- _Ban đầu coi như phần tử đầu tiên đã sắp xếp._ 

- _So sánh phần tử thứ 2 với phần tử đầu tiên để đổi chỗ nếu cần để sao cho 2 phần tử này được sắp xếp theo thứ tự chỉ định._ 

- _Tìm vị trí để chèn phần tử thứ 3 của dãy hiện hành vào dãy 2 phần tử đầu đã được sắp xếp ở trên sao cho dãy vẫn được sắp xếp đúng thứ tự._ 

- _Lặp lại liên tục các quá trình trên cho tới khi hết dãy._ 

### **Các bước thực hiện:** 

- _Bước 1:  i = 1; //Giả sử có đoạn a[0] đã được sắp_ 

- _Bước 2: x = a[i]; //Tìm vị trí position thích hợp trong đoạn a[1] đến a[i-1] để chèn a[i] vào_ 

- _Bước 3: Dời chỗ các phần tử  từ a[position] đến a[i-1]sang phải 1 vị trí để dành chổ cho a[i]_ 

- _Bước 4: a[position] = x; //Chèn a[i] vào vị trí tìm được => có đoạn a[1]..a[i]  đã được sắp_ 

- _Bước 5: i = i+1;_ 

   - _Nếu  i < n => Lặp lại Bước 2 . Ngược lại => Dừng._ 



<!-- Start of picture text -->
Begin<br>i = 1<br>0<br>i < n<br>x = a[i];<br>pos = i-1<br>0<br>pos    0<br>0<br>a[pos] > x<br>a[pos+1] = x;<br>a[pos+1]= a[pos]; i++<br>End pos--<br><!-- End of picture text -->

_Hình 6. Giải thuật sắp xếp chèn trực tiếp_ 

_Trang 17_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

### **Hàm minh họa giải thuật sắp xếp chèn trực tiếp** : 

**_void_** _InsertionSort(_ **_int_** _a[],_ **_int_** _n )_ 

_{_ **_int_** _pos, i, x;_ **_for_** _(i=1;i<n;i++) { x = a[i]; pos = i-1;_ **_while_** _(pos >= 0 && a[pos] > x) { a[pos+1] = a[pos]; pos--; } a[pos+1] = x;_ 

_} }_ 

**Ví dụ 8** : Minh họa sắp xếp dãy số: 1, 4, 8, 9, 0, 12, -5 tăng dần bằng giải thuật chèn trực tiếp. 



|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|---|---|---|---|---|---|---|
||_X=4_||||||
|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|||_X=8_|||||
|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
||||_X=9_||||
|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|||||_X=0_|||
|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|||||_X=0_|||
|**1**|**1**|**4**|**8**|**9**|**12**|**-5**|
|**0**|**1**|**4**|**8**|**9**|**12**|**-5**|
||||||_X=12_||
|**0**|**1**|**4**|**8**|**9**|**12**|**-5**|
|**0**|**1**|**4**|**8**|**9**|**12**|**-5**|



_Trang 18_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 



|||||||_X=-5_|
|---|---|---|---|---|---|---|
|**0**|**1**|**4**|**8**|**9**|**12**|**-5**|
|||||||_X=-5_|
|**0**|**0**|**1**|**4**|**8**|**9**|**12**|
|**-5**|**0**|**1**|**4**|**8**|**9**|**12**|



## **3.5 Bubble Sort** 

### **Ý tưởng của giải thuật sắp xếp Bubble Sort (sắp xếp nổi bọt)** : 

- _Xuất phát từ cuối dãy, đổi chỗ các cặp phần tử kế cận để đưa phần tử nhỏ hơn trong cặp phần tử đó về vị trí đúng đầu dãy hiện hành, sau đó sẽ không xét đến nó ở bước tiếp theo, do vậy ở lần xử lý thứ i sẽ có vị trí đầu dãy là i._ 

- _Lặp lại xử lý trên cho đến khi không còn cặp phần tử nào để xét._ 

### **Các bước thực hiện giải thuật** : 

- _Bước 1 : i = 0; // Lần xử lý đầu tiên_ 

- _Bước 2 : j = N-1; //Duyệt từ cuối dãy ngược về vị trí i Trong khi (j > i) thực hiện: Nếu a[j]<a[j-1] => Doicho(a[j],a[j-1]); j = j-1;_ 

- _Bước 3 : i = i+1; // Lần xử lý kế tiếp Nếu  i =N-1 => Dừng Ngược lại: Lặp lại Bước 2._ 



<!-- Start of picture text -->
Begin<br>i = 1<br>0<br>i < n-1<br>j = n-1<br>0<br>j > i<br>0<br>a[j] < a[j-1]<br>i++<br>t = a[j]<br>End a[j] = a[j-1]<br>a[j-1] = t<br>j--<br><!-- End of picture text -->

_Hình 7. Giải thuật sắp xếp nổi bọt (bubble sort)_ 

_Trang 19_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

### **Hàm mình họa giải thuật sắp xếp nổi bọt** : 

**_void_** _BubbleSort(_ **_int_** _a[],_ **_int_** _n) {_ **_int_** _i, j;_ **_for_** _(i = 0 ; i<n-1 ; i++)_ **_for_** _(j =n-1; j >i ; j --)_ **_if_** _(a[j]< a[j-1]) {_ **_int_** _t=a[j]; a[j]=a[j-1]; a[j-1]=t; } }_ 

**Ví dụ 9** : Minh họa sắp xếp dãy số: 1, 4, 8, 9, 0, 12, -5 tăng dần bằng giải thuật sắp xếp nổi bọt. 



|_i_||||||_j_|
|---|---|---|---|---|---|---|
|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|_i_||||||_j_|
|**1**|**4**|**8**|**9**|**0**|**-5**|**12**|
|_i_|||||_j_||
|**1**|**4**|**8**|**9**|**0**|**-5**|**12**|
|_i_|||||_j_||
|**1**|**4**|**8**|**9**|**-5**|**0**|**12**|
|_i_||||_j_|||
|**1**|**4**|**8**|**9**|**-5**|**0**|**12**|
|_i_||||_j_|||
|**1**|**4**|**8**|**-5**|**9**|**0**|**12**|
|_i_|||_j_||||
|**1**|**4**|**8**|**-5**|**9**|**0**|**12**|
|_i_|||_j_||||
|**1**|**4**|**-5**|**8**|**9**|**0**|**12**|
|_i_||_j_|||||
|**1**|**4**|**-5**|**8**|**9**|**0**|**12**|
|_i_||_j_|||||
|**1**|**-5**|**4**|**8**|**9**|**0**|**12**|
|_i_|_j_||||||
|**1**|**-5**|**4**|**8**|**9**|**0**|**12**|
|**-5**|**1**|**4**|**8**|**9**|**0**|**12**|



_Trang 20_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 



|_i_|||||_j_|
|---|---|---|---|---|---|
|**-5**<br>**1**|**4**|**8**|**9**|**0**|**12**|
|_i_||||_j_||
|**-5**<br>**1**|**4**|**8**|**9**|**0**|**12**|
|_i_||||_j_||
|**-5**<br>**1**|**4**|**8**|**0**|**9**|**12**|
|_i_|||_j_|||
|**-5**<br>**1**|**4**|**8**|**0**|**9**|**12**|
|_i_|||_j_|||
|**-5**<br>**1**|**4**|**0**|**8**|**9**|**12**|
|_i_||_j_||||
|**-5**<br>**1**|**4**|**0**|**8**|**9**|**12**|
|_i_||_j_||||
|**-5**<br>**1**|**0**|**4**|**8**|**9**|**12**|
|_i_|_j_|||||
|**-5**<br>**1**|**0**|**4**|**8**|**9**|**12**|
|_i_|_j_|||||
|**-5**<br>**0**|**1**|**4**|**8**|**9**|**12**|
||_i_||||_j_|
|**-5**<br>**0**|**1**|**4**|**8**|**9**|**12**|
||_i_|||_j_||
|**-5**<br>**0**|**1**|**4**|**8**|**9**|**12**|
||_i_||_j_|||
|**-5**<br>**0**|**1**|**4**|**8**|**9**|**12**|
||_i_|_j_||||
|**-5**<br>**0**|**1**|**4**|**8**|**9**|**12**|
|||_i_|||_j_|
|**-5**<br>**0**|**1**|**4**|**8**|**9**|**12**|
|||_i_||_j_||
|**-5**<br>**0**|**1**|**4**|**8**|**9**|**12**|
|||_i_|_j_|||
|**-5**<br>**0**|**1**|**4**|**8**|**9**|**12**|
|**-5**<br>**0**|**1**|**4**|**8**|**9**|**12**|



_Trang 21_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

## **3.6 Quick Sort** 

### **Ý tưởng của giải thuật sắp xếp nhanh (Quick Sort)** : 

- _QuickSort chia mảng thành hai danh sách bằng cách so sánh từng phần tử của danh sách với một phần tử được chọn được gọi là phần tử chốt._ 

- _Những phần tử nhỏ hơn phần tử chốt được đưa về phía trước và nằm trong danh sách con thứ nhất, các phần tử lớn hơn hoặc bằng phần tử chốt được đưa về phía sau và thuộc danh sách con thứ hai._ 

- _Cứ tiếp tục chia các danh sách con như vậy tới khi các danh sách con đều có độ dài bằng 1._ 

### **Các bước thực hiện** : 

- _Bước 1: Lấy 1 phần tử bất kì của dãy làm phần tử chốt X (giả sử lấy phần tử đầu tiên hoặc phần tử giữa của dãy,…)._ 

- _Bước 2: Tiến hành duyệt từ bên trái dãy cho đến khi gặp phần tử lớn hơn hoặc bằng X thì dừng. Đồng thời duyệt từ bên phải dãy cho đến khi gặp phần tử nhỏ hơn hoặc bằng X thì dừng._ 

- _Bước 3: Đổi chỗ 2 phần tử tìm được ở bước 2._ 

- _Bước 4: Tiếp tục duyệt cho đến khi 2 biến duyệt từ 2 chiều gặp nhau. Khi đó dãy ban đầu đã phân thành 2 phần: phần trái gồm những phần tử nhỏ hơn X, phần phải gồm những phần tử lớn hơn hoặc bằng X._ 

- _Bước 5: Lặp lại quá trình phân hoạch đối với phần trái và phần phải mới được tạo ở trên cho đến khi nào dãy được sắp xếp hoàn toàn._ 

### **Hàm minh họa giải thuật Quick Sort:** 

**_void_** _QuickSort(_ **_int_** _a[],_ **_int_** _left,_ **_int_** _right) {_ **_int_** _i, j, x, t; x = a[(left+right)/2]; // x có thể chọn phần tử khác bất kì trong khoảng left - right i = left; j = right;_ **_do_** _{_ **_while_** _(a[i] < x) i++;_ **_while_** _(a[j] > x) j--;_ **_if_** _(i <= j) { t = a[i]; a[i] = a[j]; a[j] = t; i++ ; j--; } }_ **_while_** _(i < j);_ **_if_** _(left<j) QuickSort(a, left, j);_ **_if_** _(i<right) QuickSort(a, i, right); }_ 

_Trang 22_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 



<!-- Start of picture text -->
Begin<br>left, rigth<br>i = left<br>j = right<br>x = a[(i+j)/2]<br>1<br>a[i] < x<br>i++<br>1<br>a[j] > x<br>j--<br>0<br>i   j<br>t = a[i];<br>a[i] = a[j];<br>a[j] = t;<br>i++ ; j--;<br>1<br>i < j<br>1<br>j > left<br>right = j<br>1<br>i < right<br>left = i<br>End<br><!-- End of picture text -->

_Hình 8. Giải thuật sắp xếp Quick Sort_ 

_Trang 23_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

**Ví dụ 10** : Minh họa sắp xếp dãy số: 1, 4, 8, 9, 0, 12, -5 tăng dần bằng giải thuật sắp xếp Quick Sort. 

||_left _<br>||||||_right_<br>|
|---|---|---|---|---|---|---|---|
||**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
||_left _||||||_right_|
|**_X = 9_**|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
||**_i_**||||||**_j_**|
||_left _||||||_right_|
|**_X = 9_**|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|||||**_i_**|||**_j_**|



Đổi chỗ a[i], a[j] sau đó tăng i và giảm j đi 1 đơn vị. 

||_left _<br>||||||_right_<br>|
|---|---|---|---|---|---|---|---|
|**_X = 9_**|**1**|**4**|**8**|**-5**|**0**|**12**|**9**|
||||||**_i_**|**_j_**||
||_left _||||||_right_|
|**_X = 9_**|**1**|**4**|**8**|**-5**|**0**|**12**|**9**|
||||||**_j_**|**_i_**||



Phân hoạch đoạn left đến j. 

||_left _<br>||||_right_<br>|||
|---|---|---|---|---|---|---|---|
|**_X = 8_**|**1**|**4**|**8**|**-5**|**0**|**12**|**9**|
||**_i_**<br>_left _<br>||||**_j_**<br>_right_<br>|||
|**_X = 8_**|**1**|**4**|**8**|**-5**|**0**|**12**|**9**|
||_left _||**_i_**||**_j_**<br>_right_|||
|**_X = 8_**|**1**|**4**|**0**|**-5**|**8**|**12**|**9**|
||_left _<br>|||**_i, j_**<br>|_right_<br>|||
|**_X = 8_**|**1**|**4**|**0**|**-5**|**8**|**12**|**9**|
|||||**_j_**|**_i_**|||
|từ left đ|ến j.<br>_left _|||_right_||||
|**_X = 4_**|**1**|**4**|**0**|**-5**|**8**|**12**|**9**|
||**_i_**|||**_j_**||||
||_left _|||_right_||||
|**_X = 4_**|**1**|**4**|**0**|**-5**|**8**|**12**|**9**|
|||**_i_**||**_j_**||||



Phân hoạch đoạn từ left đến j. 

_Trang 24_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

||_left _|||_right_||||
|---|---|---|---|---|---|---|---|
|**_X = 4_**|**1**|**-5**|**0**|**4**|**8**|**12**|**9**|
||_left _||**_i, j_**|_right_||||
|**_X = 4_**|**1**|**-5**|**0**|**4**|**8**|**12**|**9**|
||||**_j_**|**_i_**||||
||_left _||_right_|||||
|**_X = -5_**|**1**|**-5**|**0**|**4**|**8**|**12**|**9**|
||**_i_**||**_j_**|||||
||_left _||_right_|||||
|**_X = -5_**|**1**|**-5**|**0**|**4**|**8**|**12**|**9**|
||**_i_**|**_j_**||||||
||_left _||_right_|||||
|**_X = -5_**|**-5**|**1**|**0**|**4**|**8**|**12**|**9**|
||**_j_**|**_i_**||||||
|||_left _|_right_|||||
|**_X = 1_**|**-5**|**1**|**0**|**4**|**8**|**12**|**9**|
|||**_i_**|**_j_**|||||
|||_left _|_right_|||||
|**_X = 1_**|**-5**|**0**|**1**|**4**|**8**|**12**|**9**|
|||**_j_**|**_i_**|||||
||||_left _|_right_||||
|**_X = 1_**|**-5**|**0**|**1**|**4**|**8**|**12**|**9**|
||||**_i_**|**_j_**||||
|||||_left _|_right_|||
|**_X = 4_**|**-5**|**0**|**1**|**4**|**8**|**12**|**9**|
|||||**_i_**|**_j_**|||
|||||||_left _|_right_|
|**_X = 12_**|**-5**|**0**|**1**|**4**|**8**|**12**|**9**|
|||||||**_i_**|**_j_**|
|||||||_left _|_right_|
|**_X = 12_**|**-5**|**0**|**1**|**4**|**8**|**9**|**12**|
||**-5**|**0**|**1**|**4**|**8**|**_j_**<br>**9**|**_i_**<br>**12**|



_Trang 25_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

## **3.7 Heap Sort** 

**Ý tưởng của giải thuật Heap Sort** : Sắp xếp thông qua việc tạo các heap (đống) từ dãy ban đầu, trong đó heap là 1 cây nhị phân hoàn chỉnh có tính chất là khóa ở nút cha bao giờ cũng lớn hơn khóa ở các nút con. 

**Các bước thực hiện** : Việc thực hiện giải thuật được chia thành 2 giai đoạn: 

- _Giai đoạn 1: Tạo heap từ dãy ban đầu, khi đó nút gốc của heap là phần tử lớn nhất._ 

- _Giai đoạn 2: Sắp xếp dãy dựa trên heap được tạo._ 

   - _Nút gốc là nút có giá trị lớn nhất, ta chuyển về vị trí cuối cùng của heap._ 

   - _Loại phẩn tử lớn nhất khỏi heap._ 

   - _Hiệu chỉnh phần còn lại thành heap._ 

   - _Lặp lại quá trình cho tới khi heap chỉ còn 1 nút._ 

### **Hàm hiệu chỉnh heap** : 

**_void_** _Shift(_ **_int_** _a[],_ **_int_** _l,_ **_int_** _r) {_ **_int_** _x, i, j; i=l; j=2*i+1; x=a[i];_ **_while_** _(j<=r) {_ **_if_** _(j<r)_ **_if_** _(a[j]<a[j+1]) //Tim phan tu lon nhat giua a[j] va a[j+1] j++; //Luu chi so cua phan tu lon nhat trong hai phan tu_ **_if_** _(a[j]<=x)_ **_return_** _;_ **_else_** _{ a[i]=a[j]; a[j]=x; i=j; j=2*i+1; x=a[i]; } } }_ 

### **Hàm tạo heap từ dãy ban đầu** : 

**_void_** _CreateHeap(_ **_int_** _a[],_ **_int_** _n) {_ **_int_** _l=n/2-1;_ **_while_** _(l>=0) { Shift(a, l, n-1); l=l-1; } }_ 

_Trang 26_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

### **Hàm sắp xếp Heap Sort** : 

**_void_** _HeapSort(_ **_int_** _a[],_ **_int_** _n) {_ **_int_** _r; CreateHeap(a, n); r=n-1;_ **_while_** _(r>0) {_ **_int_** _t=a[0]; a[0]=a[r]; a[r]=t; r--;_ **_if_** _(r>0) Shift(a, 0, r); } }_ 

**Ví dụ 11** : Minh họa sắp xếp dãy số: 1, 4, 8, 9, 0, 12, -5 tăng dần bằng giải thuật sắp xếp Heap Sort. 



<!-- Start of picture text -->
1  4  8  9  0  12  -5<br>Tạo heap từ dãy ban đầu, để đơn giản ta biểu diễn lại dãy dưới dạng cây nhị phân như sau:<br>a[0] 1<br>a[1] 4 a[2] 8<br>a[5]<br>a[3] 9 a[4] 0 12 a[6] -5<br><!-- End of picture text -->

Tạo heap từ dãy ban đầu, để đơn giản ta biểu diễn lại dãy dưới dạng cây nhị phân như sau: 

Các bước hiệu chỉnh dãy trên thành heap như sau: **_l=2, i=2, j=5, x=8_** : 



<!-- Start of picture text -->
1 1<br>4 a[2] 8 4 a[2] 12<br>a[5] a[5]<br>9 0 12 a[6] -5 9 0 8 a[6] -5<br>l=1, i=1, j=3, x=4 :<br>1 1<br>a[1] a[1]<br>4 12 9 12<br>a[3] a[4] a[3] a[4]<br>9 0 8 -5 4 0 8 -5<br><!-- End of picture text -->

_Trang 27_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

### **_l=0, i=0, j=1, x=1_** . _Vì 9<12 nên j=j+1=2_ 



<!-- Start of picture text -->
a[0] a[0]<br>1 12<br>a[2] a[2]<br>a[1] a[1]<br>9 12 9 1<br>4 0 8 -5 4 0 8 -5<br>i=j=2, j=5, x=1 :<br>12 12<br>a[2] a[2]<br>9 1 9 8<br>a[5] a[6] a[5] a[6]<br>4 0 8 -5 4 0 1 -5<br><!-- End of picture text -->

Kết quả ta có dãy ban đầu đã được tạo thành heap: 



<!-- Start of picture text -->
a[0]<br>12<br>a[2]<br>a[1]<br>9 8<br>a[3] a[4] a[5] a[6]<br>4 0 1 -5<br><!-- End of picture text -->

Lấy phần tử lớn nhất ra khỏi heap đưa về cuối dãy và hiệu chỉnh phần còn lại thành heap: 



<!-- Start of picture text -->
a[0] a[0]<br>-5 9<br>a[1] a[2] a[1] a[2]<br>9 8 -5 8<br>a[3] a[4] a[5] a[6] a[3] a[4] a[5] a[6]<br>4 0 1 12 4 0 1 12<br>a[0] a[0]<br>9 1<br>a[1] a[2] a[1] a[2]<br>4 8 4 8<br>a[3] a[4] a[5] a[6] a[3] a[4] a[5] a[6]<br>-5 0 1 12 -5 0 9 12<br><!-- End of picture text -->

_Trang 28_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 



<!-- Start of picture text -->
a[0] a[0]<br>8 0<br>a[1] a[2] a[1] a[2]<br>4 1 4 1<br>a[3] a[4] a[5] a[6] a[3] a[4] a[5] a[6]<br>-5 0 9 12 -5 8 9 12<br>a[0] a[0]<br>4 -5<br>a[1] a[2] a[1] a[2]<br>0 1 0 1<br>a[3] a[4] a[5] a[6] a[3] a[4] a[5] a[6]<br>-5 8 9 12 4 8 9 12<br>a[0] a[0]<br>1 -5<br>a[1] a[2] a[1] a[2]<br>0 -5 0 1<br>a[3] a[4] a[5] a[6] a[3] a[4] a[5] a[6]<br>4 8 9 12 4 8 9 12<br>a[0] a[0]<br>0 -5<br>a[1] a[2] a[1] a[2]<br>-5 1 0 1<br>a[3] a[4] a[5] a[6] a[3] a[4] a[5] a[6]<br>4 8 9 12 4 8 9 12<br>a[0]<br>-5<br>a[1] a[2]<br>0 1<br>a[3] a[4] a[5] a[6]<br>4 8 9 12<br><!-- End of picture text -->

Dãy kết quả sau khi sắp xếp: 



<!-- Start of picture text -->
-5  0  1  4  8  9  12<br><!-- End of picture text -->

_Trang 29_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

## **3.8 Shell Sort** 

### **Ý tưởng của giải thuật sắp xếp Shell Sort** : 

- _Phân hoạch dãy thành các dãy con._ 

- _Sắp xếp các dãy con theo phương pháp chèn trực tiếp._ 

- _Dùng phương pháp chèn trực tiếp sắp xếp lại cả dãy._ 

### **Cách thực hiện giải thuật** : 

- _Phân chia dãy ban đầu thành những dãy con gồm các phần tử  ở cách nhau h vị trí;_ 

- _Dãy ban đầu :_ **_a1_** _,_ **_a2_** _, ...,_ **_an_** _được xem như sự xen kẽ của các dãy con sau :_ 

   - _Dãy con thứ nhất:_ **_a1_** _,_ **_ah+1, a2h+1_** _, ..._ 

   - _Dãy con thứ  hai:_ **_a2_** _,_ **_ah+2_** _,_ **_a2h+2_** _..._ 

   - _...._ 

   - _Dãy con thứ  h:_ **_ah_** _,_ **_a2h_** _,_ **_a3h_** _, ..._ 

- _Tiến hành sắp xếp các phần tử trong cùng dãy con sẽ làm cho các phần tử  được đưa về vị trí đúng tương đối ;_ 

- _Giảm khoảng cách h để tạo thành các dãy con mới ;_ 

- _Dừng khi h=1_ 

### **Các bước thực hiện giải thuật** : 

- **_Bước 1_** _: Chọn k khoảng cách h[1], h[2], ..., h[k];_ 

_i = 1;_ 

- **_Bước 2_** _: Phân chia dãy ban đầu thành các dãy con cách nhau h[i] khoảng cách. Sắp xếp từng dãy con bằng phương pháp chèn trực tiếp;_ 

- **_Bước 3_** _: i = i+1; Nếu  i > k : Dừng_ 

_Ngược lại : Lặp lại Bước 2._ 

### **Hàm minh họa giải thuật Shell Sort:** 

**_void_** _ShellSort(_ **_int_** _a[],_ **_int_** _n,_ **_int_** _h[],_ **_int_** _k) {_ **_int_** _step, i, j, x, len;_ **_for_** _(step = 0 ; step <k; step++) { len = h[step];_ **_for_** _(i = len; i<n; i++) { x = a[i]; j = i-len;_ **_while_** _((x<a[j])&&(j>=0)) { a[j+len]  = a[j]; j = j - len; } a[j+len] = x; } } }_ 

_Trang 30_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

**Ví dụ 12** : Minh họa sắp xếp dãy số: 1, 4, 8, 9, 0, 12, -5 tăng dần bằng giải thuật sắp xếp Shell Sort. 

||**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|---|---|---|---|---|---|---|---|
|Ta chọn_h[]= {3, 1}_,_k=2;_<br>**_step = 0_**_,_**_len = h[0] = 3_**_:_<br> <br>|_j_<br>|||||||
|i=3<br>**_X=9_**|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|||_j_<br>||||||
|i=4<br>**_X=0_**|**1**|**4**|**8**|**9**|**0**|**12**|**-5**|
|||_j_||||||
|**_X=0_**|**1**|**0**|**8**|**9**|**4**|**12**|**-5**|
||||_j_|||||
|i=5<br>**_X=12_**|**1**|**0**|**8**|**9**|**4**|**12**|**-5**|
|||||_j_||||
|i=6<br>**_X=-5_**|**1**|**0**|**8**|**9**|**4**|**12**|**-5**|
||_j_|||||||
|**_X=-5_**|**1**|**0**|**8**|**9**|**4**|**12**|**9**|
||_j_|||||||
|**_X=-5_**|**1**|**0**|**8**|**1**|**4**|**12**|**9**|
||_j_|||||||
|**_X=-5_**|**-5**|**0**|**8**|**1**|**4**|**12**|**9**|



**_step = 1_** _,_ **_len = h[1] =1_** _:_ 

|i=1|**_X=0_**|_j_<br>**-5**|**0**|**8**|**1**|**4**|**12**|**9**|
|---|---|---|---|---|---|---|---|---|
||||_j_||||||
|i=2|**_X=8_**|**-5**|**0**|**8**|**1**|**4**|**12**|**9**|
|i=3|**_X=1_**|**-5**|**0**|_j_<br>**8**|**1**|**4**|**12**|**9**|
||**_X=1_**|**-5**|**0**|_j_<br>**1**|**8**|**4**|**12**|**9**|



_Trang 31_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 



<!-- Start of picture text -->
j<br>i=4  X=4  -5  0  1  8  4  12  9<br>j<br>X=4  -5  0  1  4  8  12  9<br>j<br>i=5  X=12  -5  0  1  4  8  12  9<br>j<br>i=6  X=9  -5  0  1  4  8  12  9<br>j<br>X=9  -5  0  1  4  8  9  12<br>-5  0  1  4  8  9  12<br><!-- End of picture text -->

## **3.9 Merge Sort** 

### **Ý tưởng của giải thuật sắp xếp trộn (Merge Sort)** : 

Ý tưởng của giải thuật là trộn 2 dãy đã được sắp xếp thành 1 dãy mới cũng được sắp xếp. 

Đầu tiên ta coi mỗi phần tử của dãy là 1 danh sách con gồm 1 phần tử đã được sắp. Tiếp theo tiến hành trộn từng cặp 2 dãy con 1 phần tử kề nhau để tạo thành các dãy con 2 phần tử được sắp. Các dãy con 2 phần tử được sắp này lại được trộn với nhau tạo thành dãy con 4 phần tử được sắp. Quá trình tiếp tục đến khi chỉ còn 1 dãy con duy nhất được sắp, đó chính là dãy ban đầu. 

### **Các bước thực hiện** : 

- **_Bước 1_** _: Chuẩn bị_ 

   - _k = 1; // k là chiều dài của dãy con trong bước hiện hành_ 

- **_Bước 2_** _:_ 

_Tách dãy a0, a1, ..., an-1 thành 2 dãy b, c theo nguyên tắc luân phiên từng nhóm k phần tử: b = a0, ak, a2k, a3k, …_ 

   - _c = ak+1, a2k+1, a3k+1, …_ 

- **_Bước 3_** _:_ 

_Trộn từng cặp dãy con gồm k phần tử của 2 dãy b, c vào a._ 

- **_Bước 4_** _:_ 

   - _k = k*2;_ 

   - _Nếu k < n thì trở lại bước 2. Ngược lại: Dừng._ 

**Ví dụ 13** : Minh họa sắp xếp dãy số: 1, 4, 8, 9, 0, 12, -5 tăng dần bằng giải thuật sắp xếp Merge Sort. 

|**1**<br>**4**<br>**8**<br>**9**<br>**0**<br>**12**<br>**-5**|
|---|



Phân phối luôn phiên thành 2 mảng b,c 1 phần tử rồi trộn thành dãy 2 phần tử sắp xếp tăng dần: 

_Trang 32_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

**<mark>1 4 8 9 0 12 -5</mark>** 

Phân phối luôn phiên thành 2 mảng b,c 2 phần tử rồi trộn thành dãy 4 phần tử sắp xếp tăng dần: 

**<mark>1 4 8 9 -5 0 12 -5 0 1 4 8 9 12</mark>** 

Trộn thành dãy sắp xếp tăng dần: 



**Hàm phân phối đều luân phiên các dãy con độ dài k từ mảng a vào hai mảng con b và c:** 

**_void_** _Distribute(_ **_int_** _a[],_ **_int_** _N,_ **_int_** _&nb,_ **_int_** _&nc,_ **_int_** _k) {_ **_int_** _i, pa, pb, pc; pa = pb = pc = 0;_ **_while_** _(pa < N) {_ **_for_** _(i=0; pa<N && i<k; i++, pa++, pb++) b[pb] = a[pa];_ **_for_** _(i=0; pa<N && i<k; i++, pa++, pc++) c[pc] = a[pa]; } nb = pb; nc = pc; }_ 

_Trang 33_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

### **Hàm trộn mảng b và c vào mảng a** : 

**_void_** _Merge(_ **_int_** _a[],_ **_int_** _nb,_ **_int_** _nc,_ **_int_** _k) {_ **_int_** _p, pb, pc, ib, ic, kb, kc; p=pb=pc=ib=ic=0;_ **_while_** _(nb>0&&nc>0) { kb = k<nb?k:nb; //min(k,nb) kc = k<nb?k:nc; //min(k,nc)_ **_if_** _(b[pb+ib]<=c[pc+ic]) { a[p++]=b[pb+ib]; ib++;_ **_if_** _(ib==kb) { for(;ic<kc;ic++) a[p++]=c[pc+ic]; pb+=kb; pc+=kc; ib = ic=0; nb-=kb; nc-=kc; }_ **_else_** _{ a[p++]=c[pc+ic]; ic++;_ **_if_** _(ic==kc) {_ **_for_** _(;ib<kb;ib++) a[p++]=b[pb+ib]; pb+=kb; pc+=kc; ib = ic=0; nb-=kb; nc-=kc; } } } } }_ 

### **Hàm sắp xếp trộn Merge Sort** : 

**_void_** _MergeSort(_ **_int_** _a[],_ **_int_** _N) {_ **_int_** _k;_ **_for_** _(k = 1; k < N; k *= 2) { Distribute(a, N, nb, nc, k); Merge(a, nb, nc, k); } }_ 

_Trang 34_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

## **3.10 Radix Sort** 

**Ý tưởng của thuật toán sắp xếp theo cơ số Radix Sort** : Radix Sort sắp xếp dựa trên nguyên tắc phân loại thư của bưu điện. Vì lý do đó Radix Sort còn có tên là Postman’s Sort. 

- _Trước tiên, ta có thể giả sử mỗi phần tử ai trong dãy a1, a2, ..., an là một số nguyên có tối đa m chữ số._ 

- _Ta phân loại các phần tử lần lượt theo các chữ số hàng đơn vị, hàng chục, hàng trăm, … tương tự việc phân loại thư theo tỉnh thành, quận huyện, phường xã, …._ 

**Các bước tiến hành:** 

- **_Bước 1_** _:// k cho biết chữ số dùng để phân loại hiện hành_ 

   - _k = 0; // k = 0: hàng đơn vị; k = 1: hàng chục; …_ 

- **_Bước 2_** _: //Tạo các lô chứa các loại phần tử khác nhau Khởi tạo 10 lô B0, B1, …, B9 rỗng;_ 

- **_Bước 3_** _:_ 

_For i = 1 .. n do_ 

_Đặt ai vào lô Bt với t: chữ số thứ k của ai;_ 

- **_Bước 4_** _: Nối B0, B1, …, B9 lại (theo đúng trình tự) thành a._ 

 **_Bước 5_** _: k = k+1; Nếu k < m thì trở lại bước 2. Ngược lại: Dừng_ 

**Ví dụ 14:** Sắp xếp dãy sau tăng dần theo giải thuật sắp xếp cơ số Radix Sort: 

**_7013, 8425, 1239, 428, 1424, 7009, 4518, 3252, 9170, 999, 1725, 701._** 



<!-- Start of picture text -->
| 2 lows] | | | | | | | | ff<br>Lu fist | | | | | | J ft ft<br>| 10 foo? | | | | | | | ft ff<br>9 jevof | | | | | | ff ft<br>[6 |szez| | | | | | | | f ff<br>[7 jase] | | | | | | J | ff<br>| 6 |voos{ | | {| | | | | J ff<br>[5 |r| | | | | | | | f ff<br>[4 joe] | | | | | | J | ff<br>[3 jsf | | | | | | J | ff<br>[2 leas] | | | | | | | f ff<br>ptt<br><!-- End of picture text -->

K=0: Phân loại hàng đơn vị 

_Trang 35_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 



<!-- Start of picture text -->
pt] of | | | | tf | ft ff<br>put | | | | | | | fF ff<br>po] | | | | | | | fF fT ff<br>pet of fo fo to ft ft ft<br>ee<br>2aa<br>a<br>ee<br>a<br>ee a<br>p2 tof fT TT fires} fate | 7008 |<br>Lt || 970 0701 |3252 |7ora 1424] 2425] | [0428 | 1239 |<br><!-- End of picture text -->



<!-- Start of picture text -->
| 2 foo] | | | | | | | | fT<br>| 1 |rooo] | | | | [| | | | J<br>| 10 frase? | | | | | | | | ft<br>Lo jas} | | | | | ft | ft ft<br>Le jos} | | | | | f f ft fy<br>[7 || | | | | | ft fT ft fy<br>[6 jes} | | | | | f | ft fy<br>Ls frat | | | | | tf ft ft fy<br>[4 |vas} | | | | | tf ft ft fy<br>[3 |e} | | | | | {| | ft ft<br>[2 jovort | | | | | f f ft fy<br>Lt joo | |<br><!-- End of picture text -->

K=1: Phân loại hàng chục 

_Trang 36_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 



<!-- Start of picture text -->
p2t of | | | | | | | f ff<br>put | | | | | tf tf ft ft ft<br>pot | {| | | | | ft f ff<br>Lo} | | | [| f f fT fT ft fy<br>Le| | | | | [| | [| | fT fT<br>[7 { | | | [| [ f fT fT fT fy<br>Le| | | | | f fT fT fT fT ft<br>Ls{| | | | | | | fT fT fT fT |<br>[4 | | | fous? | | | | ft ft<br>Ls | | | |v} | | | | ft ft<br>[2Lt || _jo7ot|7o1s|1424 |roos|asis|eazs]1239]| 3252]| | 970]| | [0999[| |<br><!-- End of picture text -->



<!-- Start of picture text -->
| 2 foo] | | | | | | | | Ty<br>[1 feof | | | | | | | | ft<br>| 10 faze? | | | | | | | | ff<br>Lo fst | | | | | | | ft fy<br>[2 fos} | | | | | | | ft ft<br>[7 || | | | | | | ft ft fy<br>|e jews} | | | | | | | | ft<br>0ED eeee<br>L3 jms} | | | | | | | ft ft<br>[2 |voof | | | | | ft f ff |<br>eee<br><!-- End of picture text -->

K=2: Phân loại hàng trăm 

_Trang 37_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 



<!-- Start of picture text -->
pt | | | | | | ft ft ft |<br>put | | | | | | ft f ft |}<br>pot | | | | | | | f ft |<br>pet | | | fF | tf tf ff fy<br>pe} | | | | | tf f ft ft<br>p7} | | | | | tf tf f tf |<br>pet FT fF fT | | | ft ff ft<br>ps} | | | | | tf tf ft tf<br>pat | | | fT | tf tf fff |<br>pa] | [| | | fos} | | fT |<br>}2 | [rors| [azsz| [esas] | [tas] |<br>Lt | | 7o09si70 lize | (| 1424 asia | [0701 |_| ogea<br><!-- End of picture text -->



<!-- Start of picture text -->
| 12 joo] | | | | | | | [| ff<br>| 1 |avst | | | | | | | | ff<br>| 10 foot] | | | | | | | | ff<br>ee<br>|e jos} | | | | {| | fF | ff<br>| 7 jes] | | | | | | | | ft<br>9<br>| 5 jszcz] | | | | {| J fF f ft<br>[4 |ro] | | | | | | | | ff<br>| 3 feof | | | | | | fF ft ft<br>| 2 |r} | | | | {| [| | | ]<br>Lt jz<br><!-- End of picture text -->

K=3: Phân loại hàng nghìn 

_Trang 38_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 



<!-- Start of picture text -->
pt 7 | | | | ft f ft fy<br>put | | | | | ft | ft ft fy<br>po; {| | | | | | | | fF<br>pet | | | | | | ft ft ft fy<br>pet | | | | ft ff ft ft fy<br>ee a ee ee ee<br>pet | [ [| ft ft ff yy yy<br>pst | | | | | | ft ft ft fy<br>pat | | | | | ft ft ft ft fy<br>[3 | fossa] aras} | | | | | | |<br>[2 | fororfrza] | | || fons |<br>Lt | lose |izso| |azsz jase) |_| 7009 | 8426 |2170 |<br><!-- End of picture text -->



<!-- Start of picture text -->
[2 feof | | | | | | | | fy<br>[1 jews? | | | | | | | | fT<br>| 10 [rosf | | | | | | | | fT<br>| 2 |voosf | | | | | | | Jf | |<br>[2 fal | | | | | | | | ft<br>[7 {azsat | | | | | ft ft ft ff<br>Le |azs} | | | | | | | ft fy<br>aa eeee<br>| 3 fos | | | | | | | ft ft |<br>| 2 foror| | | | | | {| | ft ft |<br>Lt jos Te<br><!-- End of picture text -->

Kết quả cuỗi cùng dãy đã được sắp xếp tăng dần: 

**_428, 701, 999, 1239, 1424, 1725, 3252, 4518, 7009, 7013, 8425, 9170_** 

_Trang 39_ 

Chương 3. Các giải thuật sắp xếp 

Cấu trúc dữ liệu và giải thuật 

## **3.11 Đánh giá độ phức tạp của các giải thuật sắp xếp** 

|**Giải thuật**|**Trường hợp tốt nhất**|**Trường hợp trung bình**|**Trường hợp xấu nhất**|
|---|---|---|---|
|**Đổi chỗ trực tiếp**|O(n<sup>2</sup>)|O(n<sup>2</sup>)|O(n<sup>2</sup>)|
|**Chọn trực tiếp**|O(n<sup>2</sup>)|O(n<sup>2</sup>)|O(n<sup>2</sup>)|
|**Chèn trực tiếp**|O(n<sup>2</sup>)|O(n<sup>2</sup>)|O(n<sup>2</sup>)|
|**Bubble Sort**|O(n<sup>2</sup>)|O(n<sup>2</sup>)|O(n<sup>2</sup>)|
|**Quick Sort**|O(nlog2n)|O(nlog2n)|O(n<sup>2</sup>)|
|**Heap Sort**|O(nlogn)|O(nlogn)|O(nlogn)|
|**Merge Sort**|O(nlogn)|O(nlogn)|O(nlogn)|
|**Radix Sort**|O(nlogn)|O(nlogn)|O(nlogn)|



# **BÀI TẬP CHƯƠNG 3** 

**Bài 1** . Cài đặt tất cả các thuật toán sắp xếp đã học để sắp xếp tăng dần 1 mảng a gồm n phần tử nhập từ bàn phím. 

**Bài 2** . Sắp xếp mảng A gồm n phần tử nhập từ bàn phím như sau: Nửa đầu của A tăng dần, nửa sau giảm dần, phần tử ở giữa mảng nếu có sẽ giữ nguyên (trường hợp này xảy ra khi n là số lẻ). Yêu cầu là sử dụng 2 thuật toán sắp xếp khác nhau cho 2 nửa mảng A. 

**Bài 3** . Nhập dữ liệu cho mảng cấu trúc gồm n sinh viên, mỗi sinh viên gồm các thông tin: Họ tên, mã số sinh viên, điểm tổng kết. 

- a) Sắp xếp mảng theo mã số sinh viên tăng dần. 

- b) Sắp xếp mảng theo điểm tổng kết giảm dần. 

- c) Sắp xếp mảng theo tên sinh viên (thứ tự A, B, C…). 



<!-- Start of picture text -->
*<br><!-- End of picture text -->

_Trang 40_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

# **Chương 4. DANH SÁCH LIÊN KẾT** 

## **4.1 Giới thiệu tổng quan** 

### **4.1.1 Biến tĩnh và biến động** 

**Biến tĩnh** : 

- _Là biến được khai báo tường minh, có tên gọi, tồn tại trong phạm vi khai báo._ 

- _Biến tĩnh có kích thước không đổi => không tận dụng hiệu quả bộ nhớ._ 

### **Biến động** : 

- _Là biến không được khai báo tường minh, không có tên gọi._ 

- _Biến động có thể xin khi cần, giải phóng khi sử dụng xong._ 

- _Biến động linh động về kích thước => tận dụng hiệu quả bộ nhớ._ 

- _Để thao tác với biến động, ta lưu địa chỉ của nó bằng biến con trỏ => truy xuất biến động thông qua biến con trỏ_ . 

### **4.1.2 Cấu trúc tự trỏ** 

Thông thường khi thiết kế chương trình chúng ta chưa biết được số lượng dữ liệu cần dùng là bao nhiêu để khai báo số biến cho phù hợp. Đặc biệt là biến dữ liệu kiểu mảng. Số lượng các thành phần của biến mảng cần phải khai báo trước và chương trình dịch sẽ bố trí vùng nhớ cố định cho các biến này. Do buộc phải khai báo trước số lượng thành phần nên kiểu mảng thường dẫn đến hoặc là lãng phí bộ nhớ (khi chương trình không dùng hết) hoặc là không đủ để chứa dữ liệu (khi chương trình cần chứa dữ liệu với số lượng thành phần lớn hơn). 

Để khắc phục tình trạng này C++ cho phép cấp phát bộ nhớ động, nghĩa là số lượng các thành phần không cần phải khai báo trước. Bằng toán tử new chúng ta có thể xin cấp phát vùng nhớ theo nhu cầu mỗi khi chạy chương trình. Tuy nhiên, cách làm này dẫn đến việc dữ liệu của một danh sách sẽ không còn nằm liên tục trong bộ nhớ như đối với biến mảng. Mỗi lần xin cấp phát bởi toán tử new, chương trình sẽ tìm một vùng nhớ đang rỗi bất kỳ để cấp phát cho biến và như vậy dữ liệu sẽ nằm rải rác trong bộ nhớ. Từ đó, để dễ dàng quản lý trật tự của một danh sách các dữ liệu, mỗi thành phần của danh sách cần phải chứa địa chỉ của thành phần tiếp theo hoặc trước nó (điều này là không cần thiết đối với biến mảng vì các thành phần của chúng sắp xếp liên tục, kề nhau). Từ đó, mỗi thành phần của danh sách sẽ là một cấu trúc, ngoài các thành phần chứa thông tin của bản thân, chúng còn phải có thêm một hoặc nhiều con trỏ để trỏ đến các thành phần tiếp theo hay đứng trước. Các cấu trúc như vậy được gọi là cấu trúc tự trỏ vì các thành phần con trỏ trong cấu trúc này sẽ trỏ đến các vùng dữ liệu có kiểu chính là kiểu của chúng. 

### **Ví dụ 15** : 

**_struct_** _sinhvien_ **_{ char_** _Hoten_ **_[_** _33_ **_]; int_** _MSSV_ **_;_** _sinhvien_ **_*_** _tiep_ **_; }_** 

### **4.1.3 Cấu trúc dữ liệu dạng danh sách** 

Danh sách là một kiểu dữ liệu dạng tuyến tính, nó bao gồm tập hợp các phần tử có cùng kiểu dữ liệu. Mỗi phần tử trong danh sách có nhiều nhất 1 phần tử đứng trước và nhiều nhất 1 phần tử đứng sau. 

_Trang 41_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

Hai hình thức tổ chức cơ bản của danh sách là mảng (liên kết ngầm) và danh sách liên kết (liên kết tường minh). 

### **Mảng** : 

- _Mối liên hệ giữa các phần tử được thể hiện ngầm:_ 

   - _A[i] : phần tử thứ i+1 trong danh sách._ 

`o` _A[i] và A[i+1] là các phần tử kế cận trong danh sách ._ 

- _Phải lưu trữ liên tiếp các phần tử trong bộ nhớ_ 

- _Ưu điểm : Truy xuất trực tiếp, nhanh chóng_ 

- _Nhược điểm:_ 

   - _Sử dụng bộ nhớ kém hiệu quả_ 

   - _Kích thước cố định_ 

   - _Các thao tác thêm vào , loại bỏ không hiệu quả_ 

### **Danh sách liên kết:** 

   - _Cấu trúc dữ liệu cho mỗi phần tử trong danh sách liên kết là 1 cấu trúc tự trỏ bao gồm:_ `o` _Thông tin bản thân phần tử;_ 

      - _Địa chỉ của phần tử kế trong danh sách._ 

   - _Mỗi phần tử của danh sách liên kết là một biến động;_ 

   - _Ưu điểm:_ 

      - _Sử dụng hiệu quả bộ nhớ_ 

      - _Linh động về số lượng phần tử_ 

   - _Các dạng của danh sách liên kết bao gồm:_ 

      - _Danh sách liên kết đơn_ 

      - _Danh sách liên kết kép_ 

      - _Danh sách liên kết vòng_ 

- **4.2 Danh sách liên kết đơn** 

**4.2.1 Cấu trúc dữ liệu của danh sách liên kết đơn** 



<!-- Start of picture text -->
= => —, | = = NULL<br>i" t<br>Đầu Cuối<br><!-- End of picture text -->

_Hình 9. Minh họa danh sách liên kết đơn._ 

Danh sách liên kết đơn là DSLK mà mỗi phần tử trong danh sách sẽ liên kết với phần tử liền sau nó. Mỗi phần tử trong danh sách liên kết đơn là một cấu trúc có hai thành phần: 

- **_Thành phần dữ liệu_** _: Lưu trữ thông tin về bản thân phần tử;_ 

- **_Thành phần liên kết_** _: Lưu địa chỉ phần tử đứng sau trong danh sách hoặc bằng NULL nếu là phần tử cuối danh sách._ 



<!-- Start of picture text -->
Thành phần dữ liệu Thánh phần liên kết<br><!-- End of picture text -->

_Hình 10. Cấu trúc dữ liệu của mỗi phần tử (nút) của DSLK đơn_ 

Cấu trúc dữ liệu của danh sách liên kết đơn bao gồm 2 con trỏ lần lượt lưu địa chỉ của phần tử (hoặc nút) đầu tiên và phần tử cuối cùng trong danh sách. 

_Trang 42_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**Cấu trúc dữ liệu của một nút trong dách sách** : 

**_struct_** _SinhVien_ **_{ char_** _Hoten_ **_[_** _33_ **_]; int_** _MSSV_ **_;_** _SinhVien_ **_*_** _tiep_ **_; };_** 

**Cấu trúc dữ liệu của danh sách liên kết đơn cho danh sách sinh viên ở trên** : 

**_struct_** _DanhSach_ **_{_** _SinhVien_ **_*_** _dau_ **_;_** _SinhVien_ **_*_** _cuoi_ **_; };_** 

**4.2.2 Các giải thuật trên danh sách liên kết đơn** 

**Khởi tạo danh sách liên kết đơn rỗng** : Địa chỉ của nút đầu tiên và nút cuối cùng không có. 

**_void_** _CreateList(DanhSach  &DSSV) { DSSV.dau = DSSV.cuoi = NULL; }_ 

**Tạo một phần tử mới** : Để tạo phần tử mới ta thực hiện theo các bước sau đây: 

- _Dùng toán tử_ **_new_** _xin cấp phát một vùng nhớ đủ chứa một phần tử của danh sách._ 

- _Nhập thông tin cần lưu trữ vào phần tử mới. Con trỏ tiếp được đặt bằng NULL._ 

- _Gắn phần tử vừa tạo được vào danh sách._ 

**Hàm tạo 1 nút trong danh sách liên kết đơn** . 

_SinhVien* CreateNode() { SinhVien *x=_ **_new_** _SinhVien[1]; cout<< "Nhap vao ma so sinh vien: "; cin>>x->MSSV; cout<< "Nhap vao ho va ten sinh vien: "; cin.ignore(1); cin.getline(x->Hoten, 33); x->tiep = NULL;_ **_return_** _x; }_ 

**Để gắn phần tử mới tạo vào danh sách liên kết ta có 3 cách thêm như sau** : 

- _Thêm phần tử vào đầu DSLK_ 

- _Thêm phần tử vào cuối DSLK_ 

- _Thêm phần tử vào sau một phần tử của DSLK_ 

_Trang 43_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**Thêm phần tử vào đầu danh sách** : Các bước tiến hành như sau: 

- _Tạo và cấp phát bộ nhớ cho 1 nút mới._ 

- _Nếu DSLK rỗng thì gán phần tử đầu và cuối của DSLK bằng chính nút mới tạo._ 

- _Nếu DSLK khác rỗng thì cho con trỏ tiếp của nút mới trỏ đến phần tử đầu tiên của DSLK sau đó cho con trỏ đầu của DSLK trỏ vào nút mới tạo._ 

**_void_** _chendau(DanhSach &DSSV, SinhVien *x) {_ **_if(_** _DSSV_ **_._** _dau_ **_==_** _NULL_ **_) {_** _DSSV_ **_._** _dau_ **_=_** _x_ **_;_** _DSSV_ **_._** _cuoi_ **_=_** _x_ **_; } else {_** _x_ **_->_** _tiep_ **_=_** _DSSV_ **_._** _dau_ **_;_** _DSSV_ **_._** _dau_ **_=_** _x_ **_; } }_** 

**Thêm phần tử vào cuối danh sách liên kết** : Các bước tiến hành như sau: 

- _Tạo và cấp phát bộ nhớ cho 1 nút mới._ 

- _Nếu DSLK rỗng thì gán phần tử đầu và cuối của DSLK bằng nút mới tạo._ 

- _Nếu DSLK khác rỗng:_ 

   - _Cho con trỏ tiếp của phần tử cuối của DSLK trỏ đến nút mới tạo._ 

   - _Gán phần tử cuối của DSLK bằng nút mới tạo hoặc cho con trỏ tiếp của nút mới bằng NULL._ 

**_void_** _chencuoi(DanhSach &DSSV, SinhVien *x) {_ **_if_** _(DSSV.dau==NULL) { DSSV.dau=x; DSSV.cuoi=x; }_ **_else_** _{ DSSV.cuoi->tiep=x; DSSV.cuoi=x; } }_ 

_Trang 44_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**Thêm phần tử data vào sau nút q** : Các bước thực hiện như sau: 

- _Tạo và cấp phát bộ nhớ cho 1 nút mới cần thêm._ 

- _Nếu tìm thấy nút q:_ 

   - _Cho con trỏ tiếp của nút mới trỏ đến nút kế của q._ 

   - _Cho con trỏ tiếp của q trỏ vào nút mới._ 

`o` _Trường hợp q là nút cuối thì gán phần tử cuối của DSLK bằng nút mới thêm_ 

- _Nếu không tìm thấy nút q._ 



<!-- Start of picture text -->
void  InsertAfterQ(DanhSach &DSSV, SinhVien *Data, SinhVien *q)<br>{<br>  if (q!=NULL)<br>{<br>Data->tiep=q->tiep;<br>q->tiep=Data;<br>if(DSSV.cuoi==q)<br>DSSV.cuoi=Data;<br>}<br> else<br>chendau(DSSV, Data); //Them Data vao dau danh sach<br>}<br><!-- End of picture text -->

**Ví dụ 16** : Minh họa thêm phần tử vào danh sách liên kết: 



<!-- Start of picture text -->
X<br>NULL<br>NULL<br>Đầu Cuối<br>Thêm X vào đầu DSLK :<br>X<br>NULL<br>Đầu Cuối<br>X<br>NULL<br>Đầu Cuối<br><!-- End of picture text -->

### **Thêm X vào đầu DSLK** : 

_Trang 45_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

### **Thêm X vào cuối DSLK** : 



<!-- Start of picture text -->
X<br>NULL<br>Đầu Cuối<br>X<br>NULL<br>Đầu Cuối<br><!-- End of picture text -->

### **Thêm X vào sau phần tử q** : 



<!-- Start of picture text -->
X<br>NULL<br>Q Q->tiep<br>NULL<br>Đầu Cuối<br>Q Q->tiep<br>NULL<br>X<br>Đầu Cuối<br>Q X Q->tiep<br>NULL<br>Đầu Cuối<br><!-- End of picture text -->

_Trang 46_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**Duyệt danh sách liên kết đơn** : 

- _Ta sử dụng 1 biến con trỏ tạm dạng nút của DSLK rồi trỏ vào phần tử đầu của DSLK. Từ vị trí này, theo liên kết giữa các nút ta sẽ thực hiện việc duyệt qua từng phần tử trong DSLK._ 

- _Trong quá trình duyệt, tại mỗi nút ta có thể thực hiện các thao tác như:_ 

   - _Lấy thông tin phần tử_ 

   - _Sửa thông tin phần tử_ 

   - _So sánh phần tử_ 

   - _Xóa phần tử…_ 



<!-- Start of picture text -->
data<br>NULL<br>Đầu Cuối<br><!-- End of picture text -->

_Hình 11. Duyệt danh sách liên kết đơn_ 

### **Hàm minh họa duyệt qua DSLK** : 

**_void_** _output_ **_(_** _DanhSach_ **_&_** _DSSV_ **_)_** _//Hàm in ra DSLK_ 

**_{_** _SinhVien_ **_*_** _data_ **_;_** _data_ **_=_** _DSSV_ **_._** _dau_ **_;_** _cout_ **_<<_** _"Danh Sach cac phan tu cua DSLK:\n"_ **_;_** _cout_ **_<<_** _"Ma So\tHo Va Ten"_ **_; while(_** _data_ **_!=_** _NULL_ **_) {_** _cout_ **_<<_** _endl_ **_<<_** _data_ **_->_** _MSSV_ **_<<_** _"\t"_ **_<<_** _data_ **_->_** _Hoten_ **_;_** _data_ **_=_** _data_ **_->_** _tiep_ **_; } }_** 

**Xóa phần tử khỏi danh sách liên kết đơn** : 

Để xóa một nút p ra khỏi DSLK đơn ta làm như sau: 

- _Tìm nút q liền trước nút p._ 

- _Nếu tìm thấy q, cho q liên kết với nút liền sau của p rồi giải phóng bộ nhớ đã cấp cho p._ 

- _Nếu không tìm thấy q, tức p là nút đầu tiên, khi đó ta chỉ việc thay đổi nút đầu tiên của DSLK thành nút đứng liền sau p rồi thu hồi bộ nhớ của p._ 

**Ví dụ 17** : Minh họa xóa nút P khỏi danh sách liên kết đơn: 

- Trường hợp P ở đầu danh sách: 

**_P NULL_** Đầu Cuối 

_Trang 47_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 



<!-- Start of picture text -->
P NULL<br>Đầu Cuối<br>NULL<br>Đầu Cuối<br><!-- End of picture text -->



<!-- Start of picture text -->
-<br>Trường hợp P đứng sau 1 nút Q:<br>Q P<br>NULL<br>Đầu Cuối<br>Q P<br>NULL<br>Đầu Cuối<br>Q<br>NULL<br>Đầu Cuối<br><!-- End of picture text -->

**Hàm xóa 1 phần tử khỏi danh sách liên kết đơn** : 

**_int_** _RemoveX_ **_(_** _DanhSach_ **_&_** _DSSV_ **_,_** _SinhVien_ **_*_** _x_ **_) {_** _SinhVien_ **_*_** _p_ **_;_** _p_ **_=_** _DSSV_ **_._** _dau_ **_; if(_** _DSSV_ **_._** _dau_ **_==_** _x_ **_){_** _DSSV_ **_._** _dau_ **_=_** _x_ **_->_** _tiep_ **_; delete_** _x_ **_; return_** _1_ **_;_** _//Xoa thanh cong_ 

**_} while((_** _p_ **_!=_** _NULL_ **_)&&(_** _p_ **_->_** _tiep_ **_!=_** _x_ **_))_** _//Tim p lien truoc x p_ **_=_** _p_ **_->_** _tiep_ **_; if(_** _p_ **_==_** _NULL_ **_) return_** _0_ **_;_** _//khong tim thay phan tu co khoa bang x_ **_else {_** _p_ **_->_** _tiep_ **_=_** _x_ **_->_** _tiep_ **_; delete_** _x_ **_; return_** _1_ **_;_** _//Xoa thanh cong_ **_} }_** 

_Trang 48_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**Ví dụ 18** : Chương trình minh họa về danh sách liên kết đơn sử dụng các hàm ở trên: 

_#include<iostream>_ **_using namespace_** _std; //CTDL cua Node_ **_struct_** _SinhVien{_ **_char_** _Hoten[33];_ **_int_** _MSSV; SinhVien *tiep; }; //CTDL cua danh sach lien ket_ **_struct_** _DanhSach{ SinhVien *dau; SinhVien *cuoi; }; //Ham tao danh sach lien ket don rong_ **_void_** _CreateList(DanhSach  &DSSV) { DSSV.dau = DSSV.cuoi = NULL; } //Ham tao 1 Node moi SinhVien* CreateNode() { SinhVien *x=_ **_new_** _SinhVien[1]; cout<< "Nhap vao ma so sinh vien: "; cin>>x->MSSV; cout<< "Nhap vao ho va ten sinh vien: "; cin.ignore(1); cin.getline(x->Hoten,33); x->tiep = NULL;_ **_return_** _x; } //Ham them phan tu vao dau danh sach_ **_void_** _chendau(DanhSach &DSSV, SinhVien *x) {_ **_if_** _(DSSV.dau==NULL) { DSSV.dau=x; DSSV.cuoi=x; }_ 

_Trang 49_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**_else_** _{ x->tiep=DSSV.dau; DSSV.dau=x; } } //Ham them phan tu vao cuoi danh sach_ **_void_** _chencuoi(DanhSach &DSSV, SinhVien *x) {_ **_if_** _(DSSV.dau==NULL) { DSSV.dau=x; DSSV.cuoi=x; }_ **_else_** _{ DSSV.cuoi->tiep=x; DSSV.cuoi=x; } } //Them phan tu data vao sau nut q_ **_void_** _InsertAfterQ(DanhSach &DSSV, SinhVien *Data, SinhVien *q) {_ **_if_** _(q!=NULL) { Data->tiep=q->tiep; q->tiep=Data;_ **_if_** _(DSSV.cuoi==q) DSSV.cuoi=Data; }_ **_else_** _chendau(DSSV, Data); } //Ham duyet qua danh sach_ **_void_** _Output(DanhSach &DSSV) { SinhVien *data; data=DSSV.dau; cout<< "Danh Sach cac phan tu cua DSLK:\n";_ 

_Trang 50_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

_cout<< "Ma So\tHo Va Ten";_ **_while_** _(data!=NULL) { cout<<endl<<data->MSSV<< "\t"<<data->Hoten; data=data->tiep; } } //Ham xoa phan tu khoi DSLK_ **_int_** _RemoveX(DanhSach &DSSV, SinhVien *x) { SinhVien *p; p=DSSV.dau;_ **_if_** _(DSSV.dau==x) { DSSV.dau = x->tiep;_ **_delete_** _x;_ **_return_** _1; //Xoa thanh cong }_ **_while_** _((p!=NULL)&&(p ->tiep!=x)) //Tim p lien truoc x p=p->tiep;_ **_if_** _(p==NULL)_ **_return_** _0; //khong tim thay phan tu co khoa bang x_ **_else_** _{ p->tiep=x->tiep;_ **_delete_** _x;_ **_return_** _1; //Xoa thanh cong } }_ **_int_** _main() { DanhSach CN14B; CreateList(CN14B);_ **_int_** _i, n; cout<< "Nhap so luong sinh vien: "; cin>>n; SinhVien *t;_ **_for_** _(i=0; i<n; i++) { cout<< "Nhap du lieu cho sinh vien thu "<<i+1<< ":\n"; t=CreateNode(); chendau(CN14B, t); }_ 

_Trang 51_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

_cout<<_ **_"\n==========================================\n";_** _Output(CN14B); cout<<endl<< "Chen them 1 sinh vien vao cuoi danh sach:\n"; t=CreateNode(); chencuoi(CN14B,t); cout<<_ **_"\n==========================================\n";_** _Output(CN14B); cout<<endl<< "Chen them 1 sinh vien vao sau phan tu thu nhat:\n"; t=CreateNode(); InsertAfterQ(CN14B, t, CN14B.dau); cout<<_ **_"\n==========================================\n";_** _Output(CN14B); cout<<_ **_"\n==========================================\n";_** _cout<< "Xoa sinh vien dau tien khoi danh sach:\n"; RemoveX(CN14B, CN14B.dau); Output(CN14B); }_ 

Kết quả chạy chương trình: 



<!-- Start of picture text -->
Nhap so luong sinh vien: 3<br>Nhap du lieu cho sinh vien thu 1:<br>Nhap vao ma so sinh vien: 123<br>Nhap vao_ho va ten sinh vien: Cao Tien Dung<br>Nhap du lieu cho sinh vien thu 2:<br>Nhap vao ma so sinh vien: 453<br>Nhap vao_ho va ten sinh vien: Nhat Tam Tinh<br>Nhap du lieu cho sinh vien thu 3:<br>Nhap vao ma so sinh vien: 767<br>Nhap vao ho va ten sinh vien: Tran Can Nam<br>Danh Sach cac phan tu cua DSLK:<br>Ma So Ho Va Ten<br>767 Tran Can Nam<br>453 Nhat_Tam Tinh<br>123 Cao Tien Dung<br>Chen them 1 sinh vien vao cuoi danh sach:<br>Nhap vao ma so sinh vien: 126<br>Nhap vao ho va ten sinh vien: Bo Kinh Van<br>Danh Sach cac phan tu cua DSLK:<br>Ma So Ho Va Ten<br>767 Tran Can Nam<br>453 Nhat Tam Tinh<br>123 Cao Tien Dung<br>126 Bo Kinh Van<br>Chen them 1 sinh vien vao sau phan tu thu nhat:<br>Nhap vao ma so sinh vien: 876<br>Nhap vao ho va ten sinh vien: Tran Duc Khai<br><!-- End of picture text -->



<!-- Start of picture text -->
Danh Sach cac phan tu cua DSLK:<br>Ma_So Ho Va Ten<br>767 Tran Can Nam<br>876 Tran Duc Khai<br>453 Nhat_Tam Tinh<br>123 Cao Tien Dung<br>126 Bo Kinh van<br>Xoa sinh vien dau tien khoi danh sach:<br>Danh Sach cac phan tu cua DSLK:<br>Ma So Ho Va Ten<br>876 Tran Duc Khai<br>453 Nhat Tam Tinh<br>123 Cao Tien Dung<br>126 Bo Kinh van<br><!-- End of picture text -->

_Trang 52_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**Sắp xếp danh sách liên kết đơn** : 

Có 2 cách tiếp cận: 

- **_Cách 1_** _: Thay đổi thành phần dữ liệu của các nút._ 

   - _Ưu điểm: Cài đặt đơn giản, tương tự như sắp xếp mảng._ 

`o` _Nhược điểm:_ 

      - _Đòi hỏi thêm vùng nhớ khi hoán vị nội dung của 2 phần tử -> chỉ phù hợp với những DSLK có kích thước dữ liệu nhỏ._ 

      - _Khi kích thước dữ liệu lớn thì chi phí cho việc hoán vị thành phần dữ liệu cũng lớn._ 

      - _Làm cho thao tác sắp xếp chậm._ 

- **_Cách 2_** _: Thay đổi thành phần con trỏ tiếp theo trong nút (thay đổi trình tự móc nối của các phần tử sao cho tạo lập nên được thứ tự mong muốn)._ 

   - _Ưu điểm:_ 

      - _Kích thước của trường này không thay đổi, do đó không phụ thuộc vào kích thước bản chất dữ liệu lưu tại mỗi nút._ 

      - _Thao tác sắp xếp nhanh._ 

   - _Nhược điểm: Cài đặt phức tạp._ 

Các thuật toán sắp xếp DSLK bằng cách thay đổi thành phần liên kết có hiệu quả cao như: Quick Sort, Merge Sort, radix Sort,… 

## **4.3 Ngăn xếp - Stack** 

### **4.3.1 Tổng quan** 

Stack (ngăn xếp): Là một danh sách mà ta giới hạn việc thêm vào hoặc loại bỏ một phần tử chỉ thực hiện tại một đầu của danh sách, đầu này gọi là đỉnh (TOP) của ngăn xếp. Chính vì nguyên tắc này mà ngăn xếp còn được gọi là kiểu dữ liệu có nguyên tắc LIFO (Last In First Out – Vào sau ra trước). 

Ví dụ lưu trữ dữ liệu kiểu LIFO chẳng hạn như: Chồng sách trên mặt bàn, chồng đĩa trong hộp… 

Các thao tác trên ngăn xếp: 

   - _Thêm đối tượng vào stack._ 

   - _Lấy đối tượng từ stack._ 

   - _Kiểm tra stack rỗng hay không?_ 

   - _Lấy giá trị phần tử đỉnh của stack mà không hủy nó._ 

- **4.3.2 Cài đặt ngăn xếp bằng mảng một chiều** 

   - _Để cài đặt ngăn xếp bằng mảng, ta sử dụng mảng một chiều S để biểu biễn ngăn xếp._ 

   - _Thiết lập phần tử đầu tiên của mảng S[0] làm đáy ngăn xếp.Các phần tử tiếp theo được đưa vào ngăn xếp sẽ lần lượt được lưu tại các vị trí S[1], S[2],…_ 

   - _Nếu hiện tại ngăn xếp có n phần tử thì S]n-1] sẽ là đỉnh của ngăn xếp._ 

   - _Để lưu trữ đỉnh hiên tại của ngăn xếp, ta sử dụng một biến top lưu chỉ số của đỉnh (ở đây top=n-1)._ 

   - _Khi ngăn xếp chưa có phần tử nào ta quy ước top = -1._ 

|**Chỉ số**|**_0_**|**_1_**|**_2_**|**_3_**|**_4_**|**_5_**|**_…_**|**_n-1_**|**_n_**|
|---|---|---|---|---|---|---|---|---|---|
|**Mảng**|**7**|**9**|**6**|**4**|**3**|**12**|**…**|**20**<br>**top**||



_Hình 12. Minh họa ngăn xếp bằng mảng_ 

_Trang 53_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**Cấu trúc của Stack** : 

**_const int_** _max=1000_ **_; typedef struct_** _tagStack{_ **_int_** _S[max];_ **_int_** _top; }Stack;_ 

**Khởi tạo Stack** : 

**_void_** _CreateStack_ **_(_** _Stack_ **_&_** _st_ **_) {_** _st_ **_._** _top_ **_= -_** _1_ **_; }_** 

**Kiểm tra ngăn xếp rỗng** : 

**_int_** _IsEmpty(Stack st) {_ **_if_** _(st.top==-1)_ **_return_** _1;_ **_else return_** _0; }_ 

**Kiểm tra ngăn xếp đầy** : 

**_int_** _IsFull(Stack st) {_ **_if_** _(st.top>=max-1)_ **_return_** _1;_ **_else return_** _0; }_ 

**Thêm một phần tử x vào Stack** : 

**_int_** _Push(Stack &st,_ **_int_** _x) {_ **_if_** _(IsFull(st)==0) //Nếu Stack chưa Full { st.top++; //Tăng đỉnh lên 1 st.S[st.top]=x;//Gán giá trị x cho đỉnh_ **_return_** _1; //Thêm thành công }_ **_else return_** _0; //Thêm thất bại }_ 

_Trang 54_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**Lấy một phần tử ra khỏi Stack** : 

**_int_** _Pop(Stack &st,_ **_int_** _&x) {_ **_if_** _(IsEmpty(st)==0) //Nếu Stack khác rỗng { x=st.S[st.top]; //Lấy giá trị đỉnh cho vào x st.top--; // Đỉnh giảm đi 1_ **_return_** _1; //Lấy ra thành công }_ **_else return_** _0; //Lấy ra thất bại }_ 

**Ví dụ 19** : Ví dụ minh họa về cách sử dụng các hàm trên. 

_#include<stdio.h>_ **_const int_** _max=1000;_ **_typedef struct_** _tagStack {_ **_int_** _S[max], top; }Stack;_ **_void_** _CreateStack(Stack &st) { st.top=-1; }_ **_int_** _IsEmpty(Stack st) {_ **_if_** _(st.top==-1)_ **_return_** _1;_ **_else return_** _0; }_ **_int_** _IsFull(Stack st) {_ **_if_** _(st.top>=max)_ **_return_** _1;_ **_else return_** _0; }_ **_int_** _Push(Stack &st,_ **_int_** _x) {_ **_if_** _(IsFull(st)==0) { st.top++; st.S[st.top]=x;_ **_return_** _1; }_ **_else return_** _0; }_ **_int_** _Pop(Stack &st_ **_, int_** _&x) {_ **_if_** _(IsEmpty(st)==0) { x=st.S[st.top]; st.top--;_ **_return_** _1;_ 

_Trang 55_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

_}_ **_else return_** _0; }_ **_int_** _main() { Stack st;_ **_int_** _x, result, i; CreateStack(st);_ **_for_** _(i=2; i<=5; i++) Push(st, i); result = Pop(st, x);_ **_if_** _(result==1) printf( "gia tri lay duoc tu Stack la: %d", x); }_ 

**Ví dụ 20** : Sử dụng stack để hiển thị một số nguyên dương ở dạng số hệ nhị phân. 

_#include<iostream>_ **_using namespace_** _std;_ **_struct_** _Stack{_ **_int_** _a[100];_ **_int_** _top; };_ **_int_** _main() { Stack NhiPhan; NhiPhan.top=-1;_ **_int_** _i=0, x; Lap: cout<< "Nhap vao so nguyen duong: "; cin>>x; cout<< "So "<<x<< " o dang nhi phan la: ";_ **_if_** _(x<=0) goto Lap;_ **_while_** _(x>0) { NhiPhan.a[i]=x%2; x/=2; i++; NhiPhan.top++; }_ **_for_** _(i=NhiPhan.top; i>=0;i--) cout<<NhiPhan.a[i]; }_ 

**Kết quả chạy thử chương trình** : 



<!-- Start of picture text -->
Nhap vao so nguyen duong: 21<br>So 21 0 dang nhi phan Ja: 10101<br><!-- End of picture text -->

_Trang 56_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

### **4.3.3 Cài đặt ngăn xếp bằng danh sách liên kết đơn** 

Theo tính chất của DSLK đơn, việc bổ sung và loại bỏ 1 phần tử thực hiện đơn giản và nhanh nhất khi phần tử đó nằm đầu danh sách. Do vậy, ta sẽ chọn cách lưu trữ của ngăn xếp theo thứ tự: 

- _Phần tử đầu danh sách là đỉnh của stack._ 

- _Phần tử cuối danh sách là đáy của ngăn xếp._ 

- _Để bổ sung 1 phần tử mới vào stack ta thêm nó vào đầu danh sách._ 

- _Để lấy 1 phần tử ra khỏi ngăn xếp ta lấy giá trị nút đầu tiên và loại nó ra khỏi danh sách._ 

**_NULL Đỉnh ngăn xếp Đáy ngăn xếp_** 

_Hình 13. Minh họa Stack bằng DSLK đơn._ 

**Khai báo stack** : 

**_typedef struct_** _node_ **_{ int_** _item_ **_; struct_** _node_ **_*_** _next_ **_; } *_** _stacknode_ **_; typedef struct_** _Stack_ **_{_** _stacknode top_ **_; }_** _stack_ **_;_** 

**Khởi tạo stack** : 

**_void_** _CreateStack(stack &s) { s.top=NULL; }_ 

**Kiểm tra stack rỗng:** 

**_int_** _CheckEmpty(stack &s) {_ **_return_** _s.top==NULL; }_ 

**Thêm phần tử vào satck:** 

**_void_** _Push_ **_(_** _stack &s_ **_, int_** _x_ **_) {_** _stacknode p_ **_;_** _p_ **_= new_** _node_ **_[_** _1_ **_];_** _p_ **_->_** _item_ **_=_** _x; p_ **_->_** _next_ **_=_** _s_ **_._** _top_ **_;_** _s_ **_._** _top_ **_=_** _p_ **_; }_** 

_Trang 57_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**Lấy phần tử ra khỏi stack:** 

**_int_** _Pop(stack &s) { stacknode p;_ **_int_** _x;_ **_if_** _(CheckEmpty(s)) cout<<"\nDanh sach rong";_ **_else_** _{ p = s.top; x = p->item; s.top = s.top->next;_ **_delete_** _p;_ **_return_** _x; } }_ 

**Ví dụ 21** : Chương trình minh họa cho các hàm trên 

_#include<iostream>_ **_using namespace_** _std;_ **_typedef struct_** _node{_ **_int_** _item; node *next; }*stacknode;_ **_typedef struct_** _Stack{ stacknode top; }stack;_ **_int_** _CheckEmpty(stack &s){_ **_return_** _s.top==NULL; }_ **_void_** _Push(stack &s, int x){ stacknode p =_ **_new_** _node[1]; p->item=x; p->next=s.top; s.top=p; }_ **_int_** _Pop(stack &s) { stacknode p;_ **_int_** _x;_ **_if_** _(CheckEmpty(s)) cout<< "\nDanh sach rong";_ **_else_** _{ p = s.top; x = p->item; s.top = s.top->next;_ **_delete_** _p;_ **_return_** _x; } }_ **_int_** _main() { stack s; s.top = NULL; CheckEmpty(s);_ **_for_** _(_ **_int_** _x=1; x<22; x+=2) Push(s, x);_ **_int_** _t=Pop(s); cout<< "Phan tu lay ra duoc: "<< t; }_ 

**Kết quả chạy chương trình:** 



_Trang 58_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

### **4.3.4 Một số ứng dụng của ngăn xếp** 

Một số ứng dụng của ngăn xếp: 

- _Đảo ngược xâu kí tự._ 

- _Tính giá trị biểu thức dạng hậu tố (postfix)._ 

- _Chuyển một biểu thức dạng trung tố sang hậu tố (infix to postfix)._ 

- _Khử đệ quy lui._ 

- _…._ 

### **Đảo ngược xâu kí tự** : 

Bài toán đảo ngược xâu kí tự yêu cầu hiển thị các kí tự của xâu theo chiều ngược lại (ví dụ: Xâu ngược của xâu “lap trinh” là “hnirt pal”). 

Để giải quyết bài toán ta chỉ việc duyệt từ đầu đến cuối xâu và đưa vào ngăn xếp. Sau đó ta chỉ việc lấy các kí tự ra khỏi ngăn xếp và hiển thị chúng lên màn hình. 

**Biểu thực dạng hậu tố (postfix)** : 

Biểu thức toán học mà con người vẫn hay dùng gọi là biểu thức dạng trung tố (infix). Ví dụ biểu thức: 

**<u><mark>(</mark></u>** **<mark>4 *</mark>** **<u><mark>( ( (</mark></u>** **<mark>6 - 3</mark>** **<u><mark>)</mark></u>** **<mark>*</mark>** **<u><mark>(</mark></u>** **<mark>8 - 3</mark>** **<u><mark>) )</mark></u>** **<mark>+ 1</mark>** **<u><mark>) )</mark></u>** 

Tuy nhiên đối với biểu thức dạng này thì việc tính toán đối với máy tính rất khó khăn do vậy để dễ dàng hơn cho máy tính trong việc tính toán người ta đưa ra dạng trình bày biểu thức toán học khác gọi là biểu thức dạng hậu tố (postfix). Theo cách trình bày này toán tử không nằm giữa 2 toán hạng mà nằm ngay sau 2 toán hạng. Chẳng hạn biểu thức trên có thể viết dưới dạng hậu tố như sau: 

**<mark>4 6 3 - 8 3 - * 1 + *</mark>** 

Thuật toán tính giá trị của biểu thức dạng hậu tố như sau: Duyệt biểu thức từ trái qua phải: 

- _Nếu gặp toán hạng, đưa vào ngăn xếp._ 

- _Nếu gặp toán tử, lấy ra 2 toán hạng từ ngăn xếp và sử dụng toán tử trên để tính, đưa kết quả vào ngăn xếp._ 

Minh họa tính giá trị biểu thức hậu tố trên như sau: 

Duyệt qua biểu thức, đưa 4, 6, 3 vào ngăn xếp: 



Duyệt tiếp gặp toán tử dấu – lấy 2 toán hạng 3 và 6 ra khỏi ngăn xếp và thực hiện phép tính 6-3 và đưa kết quả 3 vào ngăn xếp: 

Duyệt tiếp biểu thức, đưa 8 và 3 vào ngăn xếp: 



Duyệt tiếp gặp toán tử dấu – lấy 2 toán hạng 3 và 8 ra khỏi ngăn xếp và thực hiện phép tính 8-3 rồi đưa kết quả 5 vào ngăn xếp: 

_Trang 59_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

|5<br>3<br>4|
|---|



Duyệt tiếp biểu thức gặp dấu * ta lấy ra khỏi stack 2 phần tử là 5 và 3 rồi thực hiện phép toán 3*5 rồi đưa kết quả 15 vào ngăn xếp: 

Duyệt tiếp biểu thức, đưa 1 vào stack: 

|15<br>4<br>1<br>15<br>4|
|---|



Duyệt tiếp biểu thức, gặp toán tử + ta lấy 2 phần tử 1 và 15 ra khỏi stack và thực hiện phép tính 15+1 và đưa kết quả 16 vào ngăn xếp: 

|16<br>4|
|---|



Duyệt tiếp gặp toán tử dấu * ta lấy 2 toán tử 16 và 4 ra khỏi stack và thực hiện phép tính 4*16, kết quả thu được sẽ là 64. Do đã duyệt hết biểu thức nên kết quả cuối cùng của biểu thức là 64. 

**Chuyển một biểu thức dạng trung tố sang hậu tố (infix to postfix):** 

Thuật toán chuyển đổi 1 biểu thức từ dạng trung tố sang dạng hậu tố như sau: Duyệt biểu thức từ trái qua phải: 

- _Nếu gặp dấu mở ngoặc “(“ thì bỏ qua._ 

- _Nếu gặp toán hạng, đưa vào biểu thức mới._ 

- _Nếu gặp toán tử, đưa vào ngăn xếp._ 

- _Nếu gặp dấu đóng ngoặc “)”, lấy toán tử ra khỏi ngăn xếp và đưa vào biểu thức mới._ 

**Ta sẽ minh họa giải thuật bằng việc chuyển dổi biểu thức sau từ dạng trung tố sang dạng hậu tố** _(cần lưu ý điền đầy đủ các dấu ngoặc):_ 

**<u><mark>(</mark></u>** **<mark>4 *</mark>** **<u><mark>( ( (</mark></u>** **<mark>6 - 3</mark>** **<u><mark>)</mark></u>** **<mark>*</mark>** **<u><mark>(</mark></u>** **<mark>8 - 3</mark>** **<u><mark>) )</mark></u>** **<mark>+ 1</mark>** **<u><mark>) )</mark></u>** 

Duyệt từ trái qua phải, gặp dấu ngoặc ( bỏ qua, số 4 ghi vào biểu thức mới và đưa dấu * vào stack: 

<mark>*</mark> 

Duyệt tiếp biểu thức, bỏ qua các dấu mở ngoặc, gặp toán hạng số 6 thêm vào biểu thức mới, gặp toán tử dấu – ta bỏ thêm vào stack. 

**<mark>4 6</mark>** <mark>*</mark> 

Duyệt tiếp biểu thức, gặp toáng hạng 3 thêm vào biểu thức mới, gặp đóng ngoặc lấy toán tử dấu – ra khỏi stack và thêm vào biểu thức mới. 

**<mark>4 6 3 -</mark>** 

_Trang 60_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

### <mark>*</mark> 

Duyệt tiếp biểu thức, gặp toán tử dấu * ta đưa vào stack, gặp dấu ( bỏ qua, gặp toán hạng 8 đưa vào biểu thức mới, gặp toán tử dấu – đưa vào stack, gặp toán hạng 3 đưa vào biểu thức mới: 



<!-- Start of picture text -->
4  6  3  -  8  3<br>-<br>*<br>*<br><!-- End of picture text -->

Duyệt tiếp biểu thức, gặp 2 dấu ) ta lấy toán tử dấu – và dấu * ra khỏi stack và đưa vào biểu thức mới: 



<!-- Start of picture text -->
4  6  3  -  8  3  -  *<br>*<br><!-- End of picture text -->

Duyệt tiếp biểu thức, gặp toán tử dấu + đưa vào stack, gặp toán hạng 1 thêm vào biểu thức mới: 



<!-- Start of picture text -->
4  6  3  -  8  3  -  *  1<br>+<br>*<br><!-- End of picture text -->

Duyệt tiếp biểu thức gặp 3 dấu đóng ngoặc ta lấy 3 toán tử còn lại trong stack đưa vào biểu thức mới. Vì ta đã duyệt hết biểu thức nên biểu thức hậu tố cuối cùng thu được là: 

**<mark>4 6 3 - 8 3 - * 1 + *</mark>** 

### **Khử đệ quy** : 

Khử đệ quy ở đây là biến một thủ tục đệ quy thành một thủ tục chỉ chứa vòng lặp mà không ảnh hưởng gì đến các yếu tố khác, chứ không phải là thay đổi thuật toán. 

Khử đệ quy thực chất là chúng ta phải làm công việc của một trình biên dịch đối với một thủ tục, đó là: Đặt tất cả các giá trị của các biến cục bộ và địa chỉ của chỉ thị kế tiếp vào ngăn xếp (Stack), quy định các giá trị tham số cho thủ tục và chuyển tới vị trí bắt đầu thủ tục, thực hiện lần lượt từng câu lệnh. Sau khi thủ tục hoàn tất thì nó phải lấy ra khỏi ngăn xếp địa chỉ trả về và các giá trị của các biến cục bộ, khôi phục các biến và chuyển tới địa chỉ trả về. Các bước khử đệ quy dùng stack gồm: 

- _Bước 1: Lưu các biến cục bộ và địa chỉ trở về._ 

- _Bước 2: Nếu thoả điều kiện ngừng đệ qui thì chuyển sang bước 3. Nếu không thì tính toán từng phần và quay lại bước 1 (đệ qui tiếp)._ 

- _Bước 3: Khôi phục lại các biến cục bộ và địa chỉ trở về._ 

Ví dụ sau đây minh hoạ việc dùng ngăn xếp để loại bỏ chương trình đệ qui của bài toán "tháp Hà Nội" (tower of Hanoi). 

**Ví dụ 22** : Bài toán "tháp Hà Nội" được phát biểu như sau: 

Có ba cọc A, B, C. Khởi đầu cọc A có một số đĩa xếp theo thứ tự nhỏ dần lên trên đỉnh. Bài toán đặt ra là phải chuyển toàn bộ chồng đĩa từ A sang B. Mỗi lần thực hiện chuyển một đĩa từ một cọc sang một cọc khác và không được đặt đĩa lớn nằm trên đĩa nhỏ. 

_Trang 61_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**A B C** 



<!-- Start of picture text -->
i<br>——=4.<br>S33,__—~<br>—<br><!-- End of picture text -->

_Hình 14. Bài toán tháp Hà Nội_ 

Giải bài toán tháp Hà Nội sử dụng giải thuật đệ quy như sau: 

_#include<iostream>_ **_using namespace_** _std;_ **_void_** _Move(_ **_int_** _N,_ **_char_** _A,_ **_char_** _B,_ **_char_** _C) //N: so dia -  A,B,C coc nguon, dich, trung gian {_ **_if_** _(N==1) cout<<"Chuyen 1 dia tu cot "<<A<<" sang cot "<<B<<endl;_ **_else_** _{ Move(N-1, A, C, B); //chuyen n-1 dia tu coc nguon sang coc trung gian Move(1, A, B, C); //chuyen 1 dia tu coc nguon sang coc dich Move(N-1,C, B, A); //chuyen n-1 dia tu coc trung gian sang coc dich } }_ **_int_** _main() {_ **_int_** _n; cout<<"Nhap so luong dia ban dau: "; cin>>n; cout<<"Cach chuyen nhu sau:\n"; Move(n, 'A', 'B', 'C'); }_ 

**Kết quả chạy chương trình** : 



<!-- Start of picture text -->
CachNhap chuyenso luongnhudiasau:ban dau: 4<br>Chuyen 1 dia tu cot A sang cot C<br>Chuyen 1 dia tu cot A sang cot B<br>Chuyen 1 dia tu cot C sang cot B<br>Chuyen 1 dia tu cot A sang cot C<br>Chuyen 1 dia tu cot B sang cot A<br>Chuyen 1 dia tu cot B sang cot C<br>Chuyen 1 dia tu cot A sang cot C<br>Chuyen 1 dia tu cot A sang cot B<br>Chuyen 1 dia tu cot C sang cot B<br>Chuyen 1 dia tu cot C sang cot A<br>Chuyen 1 dia tu cot B sang cot A<br>Chuyen 1 dia tu cot C sang cot B<br>Chuyen 1 dia tu cot A sang cot C<br>Chuyen 1 dia tu cot A sang cot B<br>Chuyen 1 dia tu cot C sang cot B<br><!-- End of picture text -->

_Trang 62_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

Giải bải toán tháp Hà Nội bằng khử đệ quy sử dụng stack: 

_#include<iostream>_ **_using namespace_** _std; //Khai bao cau truc cho thap Ha Noi_ **_struct_** _HaNoi{_ **_int_** _n;//So dia can di chuyen_ **_char_** _Nguon, Dich, Tam; }; //Khai bao cau truc cho node_ **_typedef struct_** _node{ HaNoi info; node *Next; }Node; //Dinh nghia lai node dang con tro_ **_typedef_** _Node *NodePtr; //Khoi tao Stack rong_ **_void_** _CreateStack(NodePtr &pTop) { pTop=NULL ; } NodePtr CreateNode(HaNoi x) { NodePtr p=_ **_new_** _Node[1]; p->info=x; p->Next=NULL;_ **_return_** _p; } //Kien tra stack rong?_ **_int_** _isEmpty(NodePtr pTop) {_ **_return_** _pTop==NULL; } //Lay phan tu dau stack HaNoi Pop(NodePtr &pTop) { NodePtr p;   HaNoi value; p=pTop;//Luu phan tu dau stack vao p pTop=pTop->Next;//Cap nhat lai pTop value=p->info;_ **_delete_** _p;_ **_return_** _value; } //Dua phan tu vao stack_ **_void_** _Push(NodePtr &pTop,HaNoi x) { NodePtr data; data=new Node[1]; data->info=x; data->Next=pTop; pTop=data; }_ 

_Trang 63_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

_//Ham giai bai toan thap Ha Noi_ **_void_** _ThapHaNoi(_ **_int_** _&n) { NodePtr pTop;//Stack chua thong tin di chuyen CreateStack(pTop); //Dua bai toan ban dau vao stack HaNoi hn; hn.n=n; hn.Nguon='A'; hn.Dich='B'; hn.Tam='C'; Push(pTop, hn);_ **_while_** _(!isEmpty(pTop)) { hn=Pop(pTop); //Truong hop chi co 1 dia,thi di chuyen dia nguon->dich_ **_if_** _(hn.n==1) cout<<"\nDi chuyen dia tu cot "<<hn.Nguon<<" sang cot "<<hn.Dich; //Truong hop co nhieu hon 1 dia_ **_else_** _{ HaNoi hn1; //Dua thong tin di chuyen n-1 dia tu tam(cot trung gian) -> dich hn1.n=hn.n-1; hn1.Nguon=hn.Tam; hn1.Dich=hn.Dich; hn1.Tam=hn.Nguon; Push(pTop, hn1); //Dua thong tin di chuyen 1 dia tu nguon -> dich hn1.n=1; hn1.Nguon=hn.Nguon; hn1.Dich=hn.Dich; hn1.Tam=hn.Tam; Push(pTop, hn1); //Dua thong tin di chuyen n-1 dia tu nguon -> tam(trung gian) hn1.n=hn.n-1; hn1.Nguon=hn.Nguon; hn1.Dich=hn.Tam; hn1.Tam=hn.Dich; Push(pTop, hn1); } } }_ **_int_** _main() {_ **_int_** _n; cout<<"Nhap vao so dia ban dau: "; cin>>n; cout<<"Cach di chuyen nhu sau:"; cout<<"\n==================================:"; ThapHaNoi(n); }_ 

_Trang 64_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

## **4.4 Hàng đợi – Queue** 

### **4.4.1 Tổng quan** 

Queue (hàng đợi): Là danh sách làm việc theo cơ chế FIFO (First In First Out), tức việc thêm 1 đối tượng vào hàng đợi hay lấy 1 đối tượng ra khỏi hàng đợi thực hiện theo cơ chế “vào trước ra trước”. 

Ví dụ tương tự hàng đợi là việc xếp hàng lên máy bay: Người nào xếp hàng trước thì lên máy bay trước tức là ra khỏi hảng đợi trước tiên. 

Các thao tác trên hàng đợi bao gồm: 

- _Thêm đối tượng vào cuối hàng đợi._ 

- _Lấy đối tượng từ đầu hàng đợi._ 

- _Kiểm tra hàm đợi có rỗng hay không?_ 

- _Lấy giá trị của phần tử đầu của hàng đợi mà không hủy nó._ 



_Hình 15. Minh họa Queue_ 

### **4.4.2 Cài đặt hàng đợi bằng mảng** 

**Ví dụ 23** : Cài đặt hàng đợi bằng mảng. 

_#include<stdio.h>_ **_const int_** _max=100; //Cau truc du lieu cua Queue_ **_typedef struct_** _tagQueue {_ **_int_** _a[max];_ **_int_** _Front; //chi so cua phan tu dau trong Queue_ **_int_** _Rear; //chi so cua phan tu cuoi trong Queue }Queue; //Khoi tao Queue rong_ **_void_** _CreateQueue(Queue &q) { q.Front=-1; q.Rear=-1; } //Lay 1 phan tu tu Queue_ **_int_** _DeQueue(Queue &q, int &x) {_ **_if_** _(q.Front!=-1) //Queue khong rong { x=q.a[q.Front]; //Lay ra phan tu dau tien cua mang q.Front++; //Thay doi phan tu dau tien cua Queue_ **_if_** _(q.Front>q.Rear) //Xay ra khi Queue ban dau chi co 1 phan tu { q.Front=-1; q.Rear=-1; }_ 

_Trang 65_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**_return_** _1; }_ **_else_** _//queue trong { printf( "Queue rong");_ **_return_** _0; } } //Them 1 phan tu vao Queue_ **_int_** _EnQueue(Queue &q,_ **_int_** _x) {_ **_int_** _i, f, r;_ **_if_** _(q.Rear - q.Front+1==max) //queue bi day khong the them vao duoc nua_ **_return_** _0;_ **_else_** _{_ **_if_** _(q.Front==-1) //Queue rong { q.Front=0; q.Rear=-1; }_ **_if_** _(q.Rear==max-1) //Queue day { f=q.Front; r=q.Rear;_ **_for_** _(i=f; i<=r; i++) q.a[i-f]=q.a[i]; //Reset lai cac chi so cho mang a q.Front=0; //Thay doi lai chi so dau va cuoi cua Queue q.Rear=r-f; } q.Rear++; q.a[q.Rear] = x; //Them phan tu moi vao cuoi_ **_return_** _1; } }_ **_int_** _main() { Queue q;_ **_int_** _i, x, t; CreateQueue(q);_ **_for_** _(i=6; i<=20; i+=1) EnQueue(q, i); t=DeQueue(q, x);_ **_if_** _(t==1) printf( "Gia tri lay ra khoi hang doi la: %d", x); }_ 

Kết quả chạy chương trình: 



_Trang 66_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**Minh họa hàng đợi ở ví dụ trên bằng mảng** : 

|**Chỉ số**|**_0_**|**_1_**|**_2_**|**_…_**|**_14_**|**_…_**|**_max-2_**|**_max-1_**|
|---|---|---|---|---|---|---|---|---|
|**Mảng a**|**6**|**7**|**8**|**…**|**20**|**…**|||
||Front||||Rear||||



**Sau khi lấy 1 phần tử ra khỏi hàng đợi** : 

|**Chỉ số**|**_0_**|**_1_**|**_2_**|**_…_**|**_14_**|**_…_**|**_max-2_**|**_max-1_**|
|---|---|---|---|---|---|---|---|---|
|**Mảng a**|**6**|**7**|**8**|**…**|**20**|**…**|||
|||Front|||Rear||||



### **4.4.3 Cài đặt hàng đợi bằng danh sách liên kết đơn** 

Để cài đặt hàng đợi bằng DSLK, ta cũng sử dụng 1 DSLK đơn với 2 con trỏ ***dau** và ***cuoi** để lưu trữ nút đầu và cuối của danh sách. 

Các thao tác thêm vào và lấy ra ta sẽ thực hiện theo thứ tự ở cuối (thêm vào) và đầu (lấy ra) của danh sách liên kết đơn. 

**_NULL Dau Cuoi_** 

_Hình 16. Minh họa hàng đợi bằng DSLK đơn_ 

**Khai báo CTDL của hàng đợi bằng DSLK đơn** : 

_//Khai báo cấu trúc của nút_ **_struct_** _Node{_ **_int_** _item; Node *tiep; }; //Khai báo hàng đợi_ **_struct_** _Queue{ Node *dau; Node *cuoi; };_ 

**Khởi tạo hàng đợi rỗng** : 

_//Khởi tạo hàng đợi rỗng_ **_void_** _CreateQueue(Queue &q) { q.dau = q.cuoi = NULL; }_ 

_Trang 67_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**Hàm thêm phần tử vào hàng đợi** : 

**_void_** _PutQueue(Queue &q, int x) { Node *data =_ **_new_** _Node[1]; data->item = x; data->tiep = NULL; //Tạo nút mới_ **_if_** _(q.dau==NULL) //Hàng đợi rỗng q.dau=q.cuoi=data;_ **_else_** _//Thêm nút vừa tạo vào cuối hàng đợi { q.cuoi->tiep = data; q.cuoi =data; } }_ 

**Lấy phần tử ra khỏi hàng đợi** : 

**_int_** _GetQueue(Queue &q,_ **_int_** _&Gia_Tri_Lay) { Node *data=_ **_new_** _Node[1];_ **_if_** _(q.dau==NULL)_ **_return_** _0;//Lấy thất bại_ **_else_** _{ data = q.dau; Gia_Tri_Lay = data->item; q.dau = q.dau->tiep;_ **_delete_** _data;//Thu hoi bo nho cua nut moi lay_ **_return_** _1;//Lấy thành công } }_ 

**Cài đặt hàm main() cho chương trình** : 

**_int_** _main() { Queue q;_ **_int_** _i, x; CreateQueue(q);_ **_for_** _(i=1; i<=10; i++) PutQueue(q, i);_ **_if_** _(GetQueue(q, x)) cout<<"Gia tri lay ra khoi hang doi: "<< x; }_ 

**Ví dụ 24** : Bài toán di chuyển toa tàu (hình dưới): Các toa được đánh số từ 1 đến n, đường di chuyển có thể là các vạch mũi tên màu đỏ. Ta cần di chuyển các toa từ A -> C sao cho tại C các toa tàu được sắp xếp các thứ tự mới nào đó. Hãy nhập vào thứ tự tại C cần có, cho biết có cách chuyển không ? Nếu có, hãy trình bày cách chuyển. Ta áp dụng hàng đợi tại B để giải quyết bài toán này như sau: 



<!-- Start of picture text -->
————Yo LHF<br>C WZ A<br>B<br><!-- End of picture text -->

_Hình 17. Bài toán di chuyển toa tàu._ 

_Trang 68_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

_#include<iostream>_ **_using namespace_** _std;_ **_struct_** _Node{_ **_int_** _So_toa; Node *tiep; };_ **_struct_** _QueueB{ Node *dau; Node *cuoi; }; //Ham them Node_ **_void_** _PutQueueB(QueueB &q,_ **_int_** _x) { Node *data =_ **_new_** _Node[1]; data->So_toa = x; data->tiep = NULL;_ **_if_** _(q.dau==NULL) q.dau=q.cuoi=data;_ **_else_** _{ q.cuoi->tiep = data; q.cuoi =data; } } //Ham lay Node_ **_int_** _GetQueueB(QueueB &q,_ **_int_** _&Gia_Tri_Lay) { Node *data=_ **_new_** _Node[1];_ **_if_** _(q.dau==NULL)_ **_return_** _0;_ **_else_** _{ data = q.dau; Gia_Tri_Lay = data->So_toa; q.dau = q.dau->tiep;_ **_delete_** _data;_ **_return_** _1; } }_ **_int_** _main() {_ **_int_** _n, i, j, t; QueueB B; B.dau = B.cuoi = NULL; cout<< "Nhap so luong toa tau o vi tri A: "; cin>>n;_ **_int_** _C[n];//Luu tru thu tu cac toa tau can sap xep o C cout<< "Nhap thu tu cac toa tau can xep vao vi tri C:\n";_ **_for_** _(i=0;i<n;i++) cin>>C[i];_ 

_Trang 69_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

_//Kiểm tra điều kiện sắp xếp_ **_for_** _(j=0, i=1; i<=n; i++)//i là số các toa ở A, j là chỉ số mảng C {_ **_if_** _(C[j]==i) j++;_ **_else_** _PutQueueB(B, i);_ **_while_** _(B.dau!=NULL && B.dau->So_toa==C[j]) { GetQueueB(B, t); j++; } }_ **_if_** _(j<n-1) cout<< "Khong the sap xep!";_ **_else_** _//In ra kết quả { cout<< "Cac buoc thuc hien di chuyen cac toa nhu sau:\n";_ **_for_** _(j=0, i=1; i<=n; i++) {_ **_if_** _(C[j]==i) { cout<< "Chuyen toa so "<<i<< " tu A - > C\n"; j++; }_ **_else_** _{ PutQueueB(B, i); cout<< "Chuyen toa so "<<i<< " tu A - > B\n"; }_ **_while_** _(B.dau!=NULL && B.dau->So_toa==C[j]) { GetQueueB(B, t); cout<< "Chuyen toa so "<<t<< " tu B - > C\n"; j++; } } } }_ 

### **Chạy thử chương trình** : 

- Trường hợp không sắp xếp được: 



<!-- Start of picture text -->
Nhap so luong toa tau o vi tri A: 6<br>Nhap thu tu cac toa tau can xep vao vi tri C:<br>1 3 6 5 2 4<br>Khong the sap xep!<br><!-- End of picture text -->

- Trường hợp sắp xếp được: 

_Trang 70_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 



<!-- Start of picture text -->
Nhap so luong toa tau o vi tri A: 6<br>Nhap thu tu cac toa tau can xep vao vi tri C:<br>1 2 5 6 3 4<br>Cac buoc thuc hien di chuyen cac toa nhu sau:<br>Chuyen toa sol tuA->C<br>Chuyen toa so 2 tuA->C<br>Chuyen toa so 3 tuA->B<br>Chuyen toa so 4 tuA->B<br>Chuyen toa so 5 tuA->C<br>Chuyen toa so 6 tuA->C<br>Chuyen toa so 3 tuB->C<br>Chuyen toa so 4 tuB->C<br><!-- End of picture text -->

## **4.5 Một số dạng danh sách liên kết khác** 

### **4.5.1 Danh sách liên kết kép** 

Danh sách liên kết kép là danh sách liên kết mà mỗi nút trong đó sẽ liên kết với cả nút đằng sau ( **_next_** ) và nút đằng trước nó ( **_preview_** ). 

**NULL** 



<!-- Start of picture text -->
Prev Prev Prev Prev<br>Next Next Next Next NULL<br><!-- End of picture text -->

_Hình 18. Minh họa danh sách liên kết kép._ 

Cấu trúc dữ liệu của 1 nút trong DSLK kép: 

**_struct_** _Node{_ **_int_** _item; Node *truoc; Node *sau; };_ 

Dựa vào cấu trúc nút ở trên ta cũng có thể dễ dàng thực hiện các thao tác đối với danh sách liên kết kép tương tự như là với danh sách liên kết đơn. 

### **4.5.2 Danh sách liên kết vòng** 

Danh sách liên kết vòng là danh sách liên kết trong đó nút cuối cùng sẽ liên kết với nút đầu tiên. 



<!-- Start of picture text -->
Prev Prev Prev Prev<br>Next Next Next Next<br><!-- End of picture text -->

_Hình 19. Danh sách liên kết vòng kép_ 



<!-- Start of picture text -->
| lan~ \ CY \ - \ / a n > [ \ — \<br>- _- \ J > W Y > W W w<br><!-- End of picture text -->

_Hình 20. Danh sách liên kết vòng đơn_ 

_Trang 71_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

# **BÀI TẬP CHƯƠNG 4** 

**Bài 1** . Sử dụng kiểu dữ liệu danh sách liên kết đơn, viết chương trình quản lý danh sách sinh viên, thông tin mỗi sinh viên bao gồm: mã số, họ tên, năm sinh, điểm trung bình. Thực hiện các yêu cầu sau: 

- _a) Khai báo, khởi tạo, và nhập danh sách._ 

- _b) Duyệt và in danh sách._ 

- _c) Tìm kiếm một sinh viên theo họ tên._ 

- _d) Chèn thêm một sinh viên mới vào sau một sinh viên có mã số chỉ định._ 

- _e) Xóa một sinh viên có mã sinh viên chỉ định._ 

- _f) Sắp xếp danh sách theo mã số sinh viên tăng dần._ 

- _g) Sắp xếp danh sách theo tên sinh viên theo thứ tự bảng chữ cái A, B, C,…._ 

- _h) Hủy danh sách khi kết thúc chương trình._ 

**Bài 2** . Xây dựng cấu trúc dữ liệu stack cài đặt bằng danh sách liên kết để đổi số hệ 10 sang các hệ cơ số khác, hãy xây dựng chuỗi kết quả là số n ở hệ cơ số a. 

**Bài 3** . Bài toán di chuyển toa tàu (hình dưới): Các toa được đánh số từ 1 đến n, đường di chuyển có thể là các vạch mũi tên màu đỏ. Ta cần di chuyển các toa từ A -> C sao cho tại C các toa tàu được sắp xếp các thứ tự mới nào đó. Hãy nhập vào thứ tự tại C cần có, cho biết có cách chuyển không ? Nếu có, hãy trình bày cách chuyển. 



_Hình 21. Minh họa bài toán di chuyển toa tàu_ 

**Bài 4** . Xây dựng CTDL queue cài đặt bằng DSLK đơn để mô phỏng qui trình cho thuê máy ở  một phòng NET với các yêu cầu: 

   - _Danh sách các máy trống A – Dùng kiểu queue, mỗi nút chứa số máy;_ 

- _Danh sách khách đang chờ nhận máy Q – Dùng kiểu queue, mỗi nút chứa họ tên người thuê._ 

- - _Danh sách khách đang thuê máy H - Dùng kiểu DSLK đơn, mỗi nút có họ tên khách, giờ bắt đầu thuê máy, số máy._ 

- _Các chức năng cần phải có:_ 

      - **_Đăng ký thuê máy_** _: Còn máy trong A thì thêm khách vào H và lấy máy vừa cho thuê ra khỏi queue A. Nếu A trống thì thêm khách vào queue Q._ 

      - **_Trả máy_** _: Thêm máy trả vào queue A, bỏ người đó khỏi danh sách thuê H._ 

      - **_Phục vụ_** _: Kiểm tra A và Q để phục vụ và cập nhật lại A, Q, H._ 

**Bài 5** . Cài đặt 1 DSLK đơn biểu diễn thông tin cho n thành phố. Thông tin các thành phố gồm: Tên, diện tích, dân số. 

- _a) Nhập/xuất dữ liệu cho DSLK._ 

- _b) Tìm thông tin thành phố có diện tích lớn nhất và thêm vào sau nó 1 thành phố._ 

- _c) Xóa khỏi DSLK thành phố “Ha Noi” nếu có._ 

- _d) Sắp xếp DSLK theo chiều tăng dần của dân số._ 

_Trang 72_ 

Chương 4. Danh sách liên kết 

Cấu trúc dữ liệu và giải thuật 

**Bài 6** . Sử dụng kiểu dữ liệu danh sách liên kết đôi vòng, viết chương trình quản lý các chuyến bay của một công ty hàng không, mỗi chuyến bay gồm: Mã chuyến, ngày, giờ khởi hành, điểm đến. Thực hiện các yêu cầu sau: 

- _Khai báo và khởi tạo danh sách list._ 

- _Nhập danh sách bằng cách thêm vào list ở vị trí phù hợp để danh sách có thứ tự tăng của mã chuyến._ 

   - _Hãy in tất cả các chuyến bay khởi hành trong ngày chỉ định._ 

- _Hủy danh sách khi kết thúc chương trình._ 



<!-- Start of picture text -->
.<br><!-- End of picture text -->

_Trang 73_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

# **Chương 5. CÂY** 

## **5.1 Tổng quan về cấu trúc cây** 

**Định nghĩa cây** - Cây là một tập hợp T các phần tử (gọi là nút của cây), trong đó có một nút đặc biệt gọi là nút gốc, các nút còn lại được chia thành những tập rời nhau T1, T2, …,Tn theo quan hệ phân cấp, trong đó Ti cũng là 1 cây. Mỗi nút ở cấp i sẽ quản lý một số nút ở cấp i+1. Quan hệ này người ta gọi là quan hệ cha – con. 

### **Một số khái niệm cơ bản** : 

- _Bậc của một nút: Là số cây con của nút đó ._ 

- _Bậc của một cây: Là bậc lớn nhất của các nút trong cây_ 

- _Nút gốc: Là nút không có nút cha._ 

- _Nút lá: Là nút có bậc bằng 0 ._ 

- _Mức của một nút:_ 

   - _Mức của nút gốc bằng 0._ 

   - _Mức của các nút con bằng mức của nút cha cộng thêm 1._ 

- _Độ dài đường đi từ gốc đến nút x: Là số nhánh cần đi qua kể từ gốc đến x._ 

- _Chiều cao của cây: Là mức lớn nhất trong cây._ 



<!-- Start of picture text -->
Nút gốc<br>Mức 0 Bậc 3 Nút lá<br>Bậc 1 Nút cha<br>Mức 1 Bậc 2<br>Mức 2 Bậc 0<br>Chiều cao cây = Mức 3<br><!-- End of picture text -->

_Hình 22. Minh họa cây và một số khái niệm cơ bản._ 

### **Một số ví dụ về cây** : 

- _Sơ đồ tổ chức của 1 công ty_ 

- _Mục lục của một cuốn sách_ 

- _Gia phả của một họ tộc_ 

- _Cấu trúc của thư mục trên ổ đĩa_ 

- _Biểu thức toán học cũng có thể biểu diễn bằng cây_ 



<!-- Start of picture text -->
*<br>+ -<br>/ C D E<br>A B Cây biểu thức: (A/B + C)*(D-E)<br><!-- End of picture text -->

_Hình 23. Cây biểu thức toán học_ 

_Trang 74_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

## **5.2 Cây nhị phân** 

### **5.2.1 Tổng quan về cây nhị phân** 

**Khái niệm** : Cây nhị phân là một dạng quan trọng của cấu trúc cây. Nó có đặc điểm là mọi nút trên cây chỉ có tối đa hai nhánh con. 









_Hình 24. Minh họa một số dạng cây nhị phân._ 

**Một số tính chất của cây nhị phân** : 

   - _Số lượng tối đa các nút ở mức i của cây nhị phân là 2*i, tối thiểu là 1 (i ≥ 1)._ 

   - _Số lượng tối đa các nút trên một cây nhị phân có chiều cao h là: 2_<sup>h</sup><sup>_+1_</sup> _−1 và số lượng nút tối thiểu là: h+1 (h ≥ 1)._ 

   - _Cây nhị phân hoàn chỉnh có n nút thì chiều cao của nó là: h = log2(n+1) -1._ 

- **5.2.2 Biểu diễn cây nhị phân bằng danh sách liên kết** 

   - _Mỗi nút của cây nhị phân có tối đa 2 nút con, do vậy sử dụng DSLK để biểu diễn cây nhị phân sẽ hữu hiệu nhất. Mỗi nút của cây nhị phân khi đó sẽ có 3 thành phần:_ 

      - _Thành phần item chứa thông tin về nút._ 

      - _Con trỏ left trỏ đến nút con bên trái._ 

      - _Con trỏ right trỏ đến nút con bên phải._ 

   - _Nếu nút có ít hơn 2 nút con thì các thành phần left hoặc right sẽ trỏ tới NULL._ 

   - _Để tăng tính di chuyển trong cây ta có thể thêm con trỏ parent trỏ đến nút cha._ 

**Cấu trúc dữ liệu của nút và khai báo cây** : 

**_struct_** _Node{_ **_int_** _item; Node *left, *right; };_ **_typedef struct_** _Node *TREE; TREE test;_ 

_Trang 75_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

**Duyệt cây nhị phân** : Phép duyệt cây nhị phân được chia thành 3 loại: 

- _Duyệt thứ tự trước – Duyệt nút trước tiên (_ **_NLR_** _hoặc_ **_NRL_** _)_ 

- _Duyệt thứ tự giữa – Duyệt nút ở giữa (_ **_LNR_** _hoặc_ **_RNL_** _)_ 

- _Duyệt thứ tự sau – Duyệt nút sau cùng (_ **_LRN_** _hoặc_ **_RLN_** _)_ 

Độ phức tạp của giải thuật là **_O(log2h)._** Trong đó h là chiều cao của cây. 

_// Hàm duyệt trước từ trái qua phải_ **_void_** _DuyetTruoc(TREE test)//NLR (Node – Left – Right) {_ **_if_** _(test != NULL) { cout<<test->key; DuyetTruoc(test->left); DuyetTruoc(test->right); } } // Hàm duyệt giữa từ trái qua phải_ **_void_** _DuyetGiua(TREE test)//LNR (Left – Node – Right) {_ **_if_** _(test != NULL) { DuyetGiua (test->left); cout<<test->key; DuyetGiua (test->right); } } // Hàm duyệt sau từ trái qua phải_ **_void_** _DuyetSau(TREE test)//LRN (Left – Right – Node) {_ **_if_** _(test != NULL) { DuyetSau (test->left); DuyetSau (test->right); cout<<test->key; } }_ 

**5.2.3 Một số cách biểu diễn cây nhị phân khác** 

|<br>iểu di<br>A[0]|<br>ễn cây<br>A[1]|<br>nhị phân<br>A[2]|<br>bằng m<br>A[3]|<br>ảng:<br>A[4]|<br>A[5]|<br>A[6]|4|5|7|
|---|---|---|---|---|---|---|---|---|---|
|**5**|**4**|**7**|**1**|**8**|**9**|**3**|1|9<br>8|3|



Biểu diễn cây nhị phân bằng mảng: 

Biểu diễn bằng mảng các nút cha: 

|**5**|**4**|**7**|**1**|**8**|**9**|**3**|
|---|---|---|---|---|---|---|
|**0**|**5**|**5**|**4**|**4**|**7**|**7**|



_Trang 76_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

Thêm con trỏ parent vào các nút: 

**_struct_** _Node{_ **_int_** _item; Node *left, *right, *parent ; };_ **_typedef struct_** _Node *TREE; TREE test;_ 

## **5.3 Cây nhị phân tìm kiếm** 

### **5.3.1 Tổng quan về cây nhị phân tìm kiếm** 

**Định nghĩa** : Cây nhị phân tìm kiếm là cây nhị phân mà khoá tại mỗi nút cây lớn hơn khoá của tất cả các nút thuộc cây con bên trái và nhỏ hơn khoá của tất cả các nút thuộc cây con bên phải. 

**Lưu ý** : Dữ liệu lưu trữ tại mỗi nút có thể rất phức tạp như là một record chẳng hạn, trong trường hợp này khoá của nút được tính dựa trên một trường nào đó, ta gọi là trường khoá. Trường khoá phải chứa các giá trị có thể so sánh được, tức là nó phải lấy giá trị từ một tập hợp có thứ tự. 



<!-- Start of picture text -->
10<br>6 15<br>3 8 12 20<br>23<br><!-- End of picture text -->

_Hình 25. Cây nhị phân tìm kiếm_ 

### **Khai báo và khởi tạo cây nhị phân tìm kiếm** : 

_//Cấu trúc của nút_ **_struct_** _Node{_ **_int_** _key; //Trường dữ liệu ở ví dụ này là số nguyên Node *left; Node *right; }; //Khai báo cấu trúc cây_ **_typedef struct_** _Node *TREE;_ **_void_** _Create(TREE &test) //Khởi tạo cây rỗng { test=NULL; }_ 

### **5.3.2 Các giải thuật trên cây nhị phân tìm kiếm** 

**Các thao tác chính trên cây nhị phân tìm kiếm** : 

- _Tạo 1 nút có trường Key bằng x._ 

- _Thêm 1 nút vào cây nhị phân tìm kiếm._ 

- _Xoá 1 nút có Key bằng x trên cây._ 

- _Tìm 1 nút có khoá bằng x trên cây._ 

_Trang 77_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

**Tạo một nút có khóa bằng x** : 

_Node* CreateNode(_ **_int_** _x) { Node *data=_ **_new_** _Node[1];_ **_if_** _(data==NULL)_ **_return_** _NULL; //Bộ nhớ full data->key = x; data->left = data->right =NULL;_ **_return_** _data; }_ 

**Thêm một nút có khóa x** : 

**_int_** _Put(TREE &test,_ **_int_** _x) {_ **_if_** _(test!=NULL) {_ **_if_** _(test->key == x)_ **_return_** _0;_ **_if_** _(test->key>x)_ **_return_** _Put(test->left, x);_ **_else return_** _Put(test->right, x); } test = CreateNode(x);_ **_return_** _1; }_ 



<!-- Start of picture text -->
X>10<br>X=17<br>10<br>X>15<br>6 15<br>X<20<br>3 8 12 20<br>Vị trí chèn 17 23<br>Hình 26. Minh họa thêm nút vào cây nhị phân tìm kiếm<br>12<br>8 23<br>2 9 15 25<br>7<br>3<br><!-- End of picture text -->

_Hình 26. Minh họa thêm nút vào cây nhị phân tìm kiếm_ 

_Hình 27. Tạo cây nhị phân tìm kiếm từ dãy: 12, 8, 23, 15, 2, 7, 9, 3, 25._ 

_Trang 78_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

**Tìm nút có khóa x** : Không dùng đệ quy. 

_Node* Search1(TREE t,_ **_int_** _x) { Node *p = t;_ **_while_** _(p!=NULL) {_ **_if_** _(x==p->key)_ **_return_** _p; //Tim dc nut p co khoa x_ **_if_** _(x<p->key) p=p->left; //Tim tiep o ben trai_ **_if_** _(x>p->key) p=p->right; //Tim tiep o ben phai }_ **_return_** _NULL; //Khong tim dc nut nao co khoa x }_ 

**Tìm nút có khóa x** : Dùng đệ quy. 

_Node* Search2(TREE t,_ **_int_** _x) {_ **_if_** _(t!=NULL) {_ **_if_** _(x==t->key)_ **_return_** _t;_ **_if_** _(x<t->key)_ **_return_** _Search2(t->left, x);_ **_if_** _(x>t->key)_ **_return_** _Search2(t->right, x); }_ **_return_** _NULL; //Khong tim dc nut nao co khoa x }_ 

**Hủy nút có khóa x trên cây** : 

Có 3 trường hợp khi hủy 1 nút X trên cây: 

- _X là nút lá – Hủy bình thường mà không ảnh hưởng đến các nút khác trên cây._ 

- _X chỉ có 1 cây con - Trước khi xoá x ta móc nối cha của X với con duy nhất cùa X._ 

- _X có đầy đủ 2 cây con - Ta dùng cách xoá gián tiếp._ 

Cách xóa gián tiếp như sau: 

- _Thay vì hủy X ta tìm phần tử thế mạng Y. Nút Y có tối đa 1 cây con._ 

- _Thông tin lưu tại nút Y sẽ được chuyển lên lưu tại X._ 

- _Ta tiến hành xoá hủy nút Y (xoá Y giống 2 trường hợp đầu)._ 

- _Cách tìm nút thế mạng Y cho X: Có 2 cách_ `o` _Cách 1: Nút Y là nút có khoá nhỏ nhất (trái nhất) bên cây con phải X._ `o` _Cách 2: Nút Y là nút có khoá lớn nhất (phải nhất) bên cây con trái của X._ 



<!-- Start of picture text -->
12 12<br>8 23 8 23<br>2 9 15 25 2 9 15 25<br>7 3<br>3<br><!-- End of picture text -->

_Hình 28. Hủy nút có 1 cây con (X=7, phần tử thế mạng Y=3)._ 

_Trang 79_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 



<!-- Start of picture text -->
12<br>12<br>7 23<br>4 23<br>2 9 15 25 2 9 15 25<br>1 3 7 11 1 3 8 11<br>8<br><!-- End of picture text -->

_Hình 29. Hủy nút có 2 cây con, phần tử thế mạng ở câu con bên phải (X=4, Y =7)._ 



<!-- Start of picture text -->
12<br>12<br>3 23<br>4 23<br>2 9 15 25 2 9 15 25<br>1 3 7 11 1 7 11<br>8 8<br><!-- End of picture text -->

_Hình 30. Hủy nút có 2 cây con, phần tử thế mạng ở câu con bên trái (X=4, Y =3)._ 

### **Hàm tìm phần tử thay thế** : 

_//Ham thay the trong truong hop phan tu the mang o cay con ben phai_ **_void_** _thaythe(TREE &nut, TREE &t) //'t' la nut con ben phai cua 'nut', 'nut' la nut can thay the { if(t->left!=NULL) //'t' van con co nut con ben trai thaythe(nut, t->left);_ **_else_** _{ //Thay key cho 'nut' bang key cua nut nho nhat cua cay con ben phai nut->key = t->key; nut=t; t=t->right; } }_ 

_Trang 80_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

**Cài đặt hàm xóa nút có key là x** : 

**_void_** _DelNode(TREE &test,_ **_int_** _x) {_ **_if_** _(test==NULL) cout<<"Khong tim thay nut can xoa\n";_ **_else_** _{_ **_if_** _(test->key<x) DelNode(test->right, x);_ **_else_** _{_ **_if_** _(test->key>x) DelNode(test->left, x);_ **_else_** _{ Node *p; p=test;_ **_if_** _(test->left==NULL)test=test->right;_ **_else_** _{_ **_if_** _(test->right==NULL)test=test->left;_ **_else_** _thaythe(p,test->right); }_ **_delete_** _p; } } } }_ 

**Ví dụ 25** : Minh họa cây nhị phân tìm kiếm: 

_#include<iostream>_ **_using namespace_** _std; //Cau truc cua nut_ **_struct_** _Node{_ **_int_** _key; Node *left; Node *right; }; //Khai bao cay_ **_typedef struct_** _Node *TREE; //Khoi tao cay rong_ **_void_** _Create(TREE &test) { test=NULL; } //Tao nut Node* CreateNode(_ **_int_** _x) { Node *data=_ **_new_** _Node[1];_ **_if_** _(data==NULL)_ **_return_** _NULL;//Bo nho full data->key = x;_ 

_Trang 81_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

_data->left = data->right =NULL;_ **_return_** _data; } //Them nut vao cay_ **_int_** _Put(TREE &test,_ **_int_** _x) {_ **_if_** _(test!=NULL)//Chua co cho de them nut {_ **_if_** _(test->key == x)_ **_return_** _0;//Cac nut khong dc co key giong nhau_ **_if_** _(test->key>x)_ **_return_** _Put(test->left, x);//Them x vao nut con ben trai_ **_else return_** _Put(test->right, x);//Them x vao nut con ben phai } //da co cho de them nut test = CreateNode(x);_ **_return_** _1; } //Tim nut co khoa x khong dung de quy Node* Search(TREE t,_ **_int_** _x) { Node *p = t;_ **_while_** _(p!=NULL) {_ **_if_** _(x==p->key)_ **_return_** _p;//Tim dc nut p co khoa x_ **_if_** _(x<p->key) p=p->left;//Tim tiep o nut ben trai_ **_if_** _(x>p->key) p=p->right; //Tim tiep o nut ben phai }_ **_return_** _NULL;//Khong tim dc nut nao co khoa x } //Tim phan tu thay the (dung cho truong hop xoa nut co day du 2 cay con)_ **_void_** _thaythe(TREE &nut, TREE &t) //'t' la nut con ben phai cua 'nut' can thay the {_ **_if_** _(t->left!=NULL) //'t' van con co nut con ben trai thaythe(nut,t->left);_ **_else_** _//'t'khong con nut con nao ben trai { nut->key = t->key; //Thay key cho 'nut' bang key cua nut nho nhat ben phai nut=t; t=t->right; } } //Xoa nut co khoa x khoi cay_ **_void_** _DelNode(TREE &test,_ **_int_** _x) {_ **_if_** _(test==NULL) cout<<"Khong tim thay nut can xoa\n";_ **_else_** _{_ **_if_** _(test->key<x) DelNode(test->right, x);_ **_else_** _{_ 

_Trang 82_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

**_if_** _(test->key>x) DelNode(test->left, x);_ **_else_** _{ Node *p; p=test;_ **_if_** _(test->left==NULL) test=test->right;_ **_else_** _{_ **_if_** _(test->right==NULL) test=test->left;_ **_else_** _thaythe(p, test->right); }_ **_delete_** _p; } } } } //Duyet cay NLR_ **_void_** _DuyetTruoc(TREE test) {_ **_if_** _(test != NULL) { cout<<test->key<<"  "; DuyetTruoc(test->left); DuyetTruoc(test->right); } } //Duyet cay LNR_ **_void_** _DuyetGiua(TREE test) {_ **_if_** _(test != NULL) { DuyetGiua(test->left); cout<<test->key<<"  "; DuyetGiua(test->right); } } //Duyet cay LRN_ **_void_** _DuyetSau(TREE test) {_ **_if_** _(test != NULL) { DuyetSau(test->left); DuyetSau(test->right); cout<<test->key<<"  "; } }_ **_int_** _main() { TREE test, t;_ 

_Trang 83_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

**_int_** _i, n, x; Create(test); cout<<"Nhap so luong nut trong cay: "; cin>>n; cout<<"Nhap vao cac nut cho cay:\n";_ **_for_** _(i=1; i<=n; i++) { cin>>x; Put(test, x); } cout<<"\nKet qua duyet truoc tu trai qua phai:\n"; DuyetTruoc(test); cout<<"\nKet qua duyet giua tu trai qua phai:\n"; DuyetGiua(test); cout<<"\nKet qua duyet sau tu trai qua phai:\n"; DuyetSau(test); cout<<"\nNhap mot gia tri ma ban muon tim kiem: "; cin>>x; t=Search(test, x);_ **_if_** _(t!=NULL) cout<<"Tim thay "<<x<<" co trong cay";_ **_else_** _cout<<"khong tim thay "<<x<<" trong cay"; cout<<"\nNhap mot gia tri ma ban muon xoa: "; cin>>x; DelNode(test, x); cout<<"Ket qua duyet truoc tu trai qua phai sau khi xoa nut "<<x<<endl; DuyetTruoc(test); }_ 

**Kết quả chạy thử chương trình khi nhập thử dãy số** : _12, 4, 23, 2, 9, 15, 25, 1, 3, 7, 11, 8._ 



<!-- Start of picture text -->
Nhap so luong nut trong cay: 12<br>Nhap vao cac nut cho cay:<br>12 4 23 2 9 15<br>25 1 3 7 11 8<br>Ket qua duyet truoc tu trai qua phai:<br>12 4 2 13 9 7 8 11 23 15 25<br>Ket qua duyet giua tu trai qua phai:<br>12 3 4 7 8 9 11 12 15 23 25<br>Ket qua duyet sau tu trai qua phai:<br>1 3 2 8 7 11 9 4 15 25 23 12<br>Nhap mot gia tri ma ban muon tim kiem: 9<br>Tim thay 9 co trong cay<br>Nhap mot gia tri ma ban muon xoa: 4<br>Ket qua duyet truoc tu trai qua phai sau khi xoa nut 4<br>12 7 2 1 3 9 8 11 23 15 25<br><!-- End of picture text -->



<!-- Start of picture text -->
>)<br>12 ~—<br>4 23<br>2 9 15 25<br>C 1 3 >) 7 11 >)<br>VW UL ©)<br>8<br><!-- End of picture text -->

_Hình 31. Cây minh họa cho ví dụ 25._ 

_Trang 84_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

## **5.4 Cây nhị phân tìm kiếm cân bằng** 

- **5.4.1 Tổng quan về cây nhị phân tìm kiếm cân bằng** 



<!-- Start of picture text -->
12<br>3 23<br>2 9 15 25<br>1 7 11<br><!-- End of picture text -->

_Hình 32. Cây nhị phân tìm kiếm cân bằng._ 

### **Định nghĩa** : 

- _Cây nhị phân tìm  kiếm cân bằng là cây mà tại mỗi nút của nó, độ cao của cây con trái và của cây con phải chênh lệch nhau không quá một._ 

- _Độ lệch giữa cây trái và cây phải của một nút được gọi là chỉ số cân bằng._ 

- _Các trường hợp hợp lệ của chỉ số cân bằng (CSCB):_ 

   - _CSCB = 1: Độ cao cây trái nhỏ hơn độ cao cây phải._ 

   - _CSCB = 0: Độ cao cây trái bằng độ cao cây phải._ 

   - _CSCB = -1: Độ cao cây trái lớn hơn độ cao cây phải._ 

### **Cấu trúc dữ liệu của cây nhị phân tìm kiếm cân bằng** : 

_#define LH -1 //Cây con trái cao hơn #define EH 0 //Cây con trái bằng cây con phải #define RH 1 //Cây con phải cao hơn_ **_struct_** _Node {_ **_int_** _BalanceFactor; //chỉ số cân bằng_ **_int_** _key; Node *Left; Node *Right; };_ **_typedef_** _Node *Tree;_ 

### **5.4.2 Các thao tác trên cây cân bằng** 

Khi thêm hay xoá 1 nút trên cây, có thể làm cho cây mất tính cân bằng, khi ấy ta phải tiến hành cân bằng lại. Cây có khả năng mất cân bằng khi thay đổi chiều cao: 

- _Thêm bên trái -> lệch nhánh trái_ 

- _Thêm bên phải -> lệch nhánh phải_ 

- _Hủy bên phải -> lệch nhánh trái_ 

- _Hủy bên trái -> lệch nhánh phải_ 

Để cân bằng lại cây ta tìm cách bố trí lại cây sao cho chiều cao 2 cây con cân đối bằng cách kéo nhánh cao bù cho nhánh thấp sao cho bảo đảm cây sau đó vẫn là cây nhị phân tìm kiếm. 

_Trang 85_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

**Cân bằng cho cây trong trường hợp 1 (Left – Left: Cây mất cân bằng trái – trái tại nút T)** : 



<!-- Start of picture text -->
T<br>T1<br>T1 R<br>L1 T<br>L1 R1<br>R1 R<br><!-- End of picture text -->

_Hình 33. Cân bằng cây trường hợp Left – Left._ 

**Hàm cân bằng cho trường hợp Left - Left** : 

**_void_** _Lech_trai_trai(Tree &T) { Node *T1 = T->Left; T->Left = T1->Right; T1->Right=T;_ **_switch_** _(T1->BalanceFactor) {_ **_case_** _LH: T->BalanceFactor =EH; T1->BalanceFactor=EH;_ **_break_** _;_ **_case_** _EH: T->BalanceFactor =EH; T1->BalanceFactor=RH;_ **_break_** _; } T=T1; }_ 

**Cân bằng cho cây trong trường hợp 2 (Left – Right: Cây mất cân bằng trái – phải tại nút T)** : 



<!-- Start of picture text -->
T<br>T2<br>T1 R<br>T1 T<br>L1 T2<br>L1 L21 R21 R<br>L21 R21<br><!-- End of picture text -->

_Hình 34. Cân bằng cây trường hợp Left – Right._ 

_Trang 86_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

**Hàm cân bằng cho trường hợp Left - Right** : 

**_void_** _Lech_trai_phai(Tree &T) { Node *T1=T->Left, *T2=T1->Right; T->Left=T2->Right; T2->Right=T; T1->Right= T2->Left; T2->Left = T1;_ **_switch_** _(T2->BalanceFactor) {_ **_case_** _LH: T->BalanceFactor = EH; T1->BalanceFactor= RH;_ **_break_** _;_ **_case_** _EH: T->BalanceFactor = EH; T1->BalanceFactor= EH;_ **_break_** _;_ **_case_** _RH: T->BalanceFactor = LH; T1->BalanceFactor= EH;_ **_break_** _; } T2->BalanceFactor = EH; T=T2; }_ 

**Cân bằng cho cây trong trường hợp 3 (Right – Right: Cây mất cân bằng phải – phải tại nút T)** : 



<!-- Start of picture text -->
T T1<br>L T1 T R1<br>L1 R1 L L1<br><!-- End of picture text -->

_Hình 35. Cân bằng cây trường hợp Right – Right._ 

**Hàm cân bằng cho trường hợp Right - Right** : 

**_void_** _Lech_phai_phai(Tree &T) { Node  *T1= T->Right; T->Right=T1->Left; T1->Left=T;_ 

_Trang 87_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

**_switch_** _(T1-> BalanceFactor) {_ **_case_** _RH: T-> BalanceFactor = EH; T-> BalanceFactor = EH;_ **_break_** _;_ **_case_** _EH: T-> BalanceFactor = EH; T1->BalanceFactor= LH;_ **_break_** _; } T=T1; }_ 

**Cân bằng cho cây trong trường hợp 4 (Right – Left: Cây mất cân bằng phải – trái tại nút T)** : 



<!-- Start of picture text -->
T T2<br>L T1 T T1<br>T2 R1 L L21 R21 R1<br>L21 R21<br><!-- End of picture text -->

_Hình 36. Cân bằng cây trường hợp Right – Left._ 

**Hàm cân bằng cho trường hợp Right - Left** : 

**_void_** _Lech_phai_trai(Tree &T) { Node *T1= T->Right, *T2=T1->Left; T->Right = T2->Left; T2->Left = T; T1->Left = T2->Right; T2->Right = T1;_ **_switch_** _(T2-> BalanceFactor) {_ **_case_** _RH: T-> BalanceFactor = EH; T1-> BalanceFactor = LH;_ **_break_** _;_ **_case_** _EH: T-> BalanceFactor = EH; T1-> BalanceFactor = EH;_ **_break_** _;_ **_case_** _LH: T-> BalanceFactor = RH; T1-> BalanceFactor = EH;_ **_break_** _; } T2-> BalanceFactor =EH; T=T2;_ 

_}_ 

_Trang 88_ 

Cấu trúc dữ liệu và giải thuật 

Chương 5. Cây 

### **Thêm nút vào cây nhị phân tìm kiếm cân bằng** : 

- _Thêm bình thường như trường hợp cây NPTK._ 

- _Nếu cây tăng trưởng chiều cao:_ 

   - _Lần ngược về gốc để phát hiện nút bị mất cân bằng._ 

   - _Tiến hành cân bằng lại nút đó bằng thao tác cân bằng thích hợp._ 

- _Việc cân bằng lại chỉ cần thực hiện 1 lần nơi mất cân bằng._ 

### **Hủy nút trên cây nhị phân tìm kiếm cân bằng** : 

- _Hủy bình thường như trường hợp cây NPTK._ 

- _Nếu cây giảm chiều cao:_ 

   - _Lần ngược về gốc để phát hiện nút bị mất cân bằng._ 

   - _Tiến hành cân bằng lại nút đó bằng thao tác cân bằng thích hợp._ 

   - _Tiếp tục lần ngược lên nút cha…._ 

- _Việc cân bằng lại có thể lan truyền lên tận gốc._ 

# **BÀI TẬP CHƯƠNG 5** 

**Bài 1** . Vẽ hình cây nhị phân tìm kiếm tạo ra từ cây rỗng bằng cách lần lượt thêm vào các khoá là các số nguyên: 54, 31, 43, 29, 65, 10, 20, 36, 78, 59. 

- a) Cho biết dãy kết quả khi duyệt qua cây trên theo các cách LNR, RNL, LRN, RLN, NLR, NRL. b) Vẽ lại cây trên khi xóa nút có khóa bằng 31. 

- c) Cân bằng lại cây trên để được cây NPTK cân bằng. 

- d) Viết chương trình minh họa cho bài tập. 



<!-- Start of picture text -->
,<br><!-- End of picture text -->

_Trang 89_ 

Cấu trúc dữ liệu và giải thuật 

Chương 6. Bảng băm – Hash table 

# **Chương 6. BẢNG BĂM** 

## **6.1 Tổng quan về bảng băm** 

### **6.1.1 Một số khái niệm** 

**Bảng băm** là 1 CTDL tương tự như mảng nhưng kèm theo một hàm băm để ánh xạ nhiều giá trị vào cùng một phần tử trong mảng. 

**Hàm băm** hay phép băm (hash function) là hàm được dùng để ánh xạ (hoặc biến đổi) giá trị của khóa vào một dãy các địa chỉ của bảng băm. 

- _Tư tưởng của phép băm là dựa vào giá trị các khóa k[1..n], chia các khóa đó thành các nhóm._ 

- _Những khóa cùng một nhóm sẽ có cùng một đặc điểm chung và đặc điểm này không có trong nhóm khác._ 

- _Khi có một khóa tìm kiếm X, ta xác định xem nếu X có trong dãy khóa thì nó thuộc nhóm nào và ta tiến hành tìm trên nhóm đó._ 

**Khóa** có thể là dạng số hay số dạng chuỗi. Giả sử có 2 khóa phân biệt ki và kj nếu h(ki) = h(kj) thì ta nói hàm băm bị đụng độ (với h(x) là hàm băm). 



**Tập khóa K Hàm băm Tập địa chỉ M** 

_Hình 37. Minh họa bảng băm_ 

### **6.1.2 Ưu điểm của bảng băm** 

   - _Bảng băm là một cấu trúc dung hòa giữa thời gian truy xuất và dung lượng bộ nhớ:_ `o` _Nếu không có sự giới hạn về bộ nhớ thì chúng ta có thể xây dựng bảng băm với mỗi khóa ứng với một địa chỉ với mong muốn thời gian truy xuất tức thời._ 

      - _Nếu dung lượng bộ nhớ có giới hạn thì tổ chức một số khóa có cùng địa chỉ, khi đó tốc độ truy xuất sẽ giảm._ 

   - _Bảng băm được ứng dụng nhiều trong thực tế, rất thích hợp khi tổ chức dữ liệu có kích thước lớn và được lưu trữ ở bộ nhớ ngoài._ 

- **6.1.3 Các phép toán trên bảng băm** 

   - _Khởi tạo bảng băm._ 

   - _Kiểm tra bảng băm rỗng._ 

   - _Lấy kích thước (số phần tử) của bảng băm._ 

   - _Tìm kiếm một phần tử trong bảng băm theo khoá k chỉ định trước._ 

   - _Thêm một phần tử vào bảng băm._ 

   - _Loại bỏ một phần tử ra khỏi bảng băm._ 

   - _Tạo một bảng băm mới tử một bảng băm cũ đã có._ 

   - _Xử lý các khóa trong bảng băm: xử lý toàn bộ khóa trong bảng băm theo thứ tự địa chỉ từ nhỏ đến lớn_ . 

_Trang 90_ 

Cấu trúc dữ liệu và giải thuật 

Chương 6. Bảng băm – Hash table 

## **6.2 Phương pháp xây dựng hàm băm** 

### **Một hàm băm tốt phải thỏa mãn các điều kiện sau** : 

- _Tính toán nhanh._ 

- _Các khoá được phân bố đều trong bảng._ 

- _Ít xảy ra đụng độ._ 

- _Xử lý được các loại khóa có kiểu dữ liệu khác nhau_ 

**Một số phương pháp xây hựng hàm băm** : 

- _Hàm băm dạng bảng tra_ 

- _Phương pháp chia._ 

- _Phương pháp nhân._ 

- _Phép băm phổ quát (universal hashing)._ 

### **6.2.1 Hàm băm dạng bảng tra** 

Hàm băm có thể tổ chức ở dạng bảng tra (còn gọi là bảng truy xuất) hoặc thông dụng nhất là ở dạng công thức. 

Ví dụ: Bảng tra với khóa là bộ chữ cái, bảng băm có 26 địa chỉ từ 0 đến 25. Khóa a ứng với địa chỉ 0, khoá b ứng với địa chỉ 1,… , z ứng với địa chỉ 25. 

### **6.2.2 Hàm băm theo phương pháp chia** 

Hàm băm được xác định như sau: 

### **_h(k) = k mod m_** 

Trong đó: 

   - _m là kích thước của bảng – thông thường ta chọn m là số nguyên tố._ 

   - _k là khóa_ 

   - _Giá trị của h(k) sẽ là: 0, 1, 2, 3,…, m-1._ 

- **6.2.3 Hàm băm theo phương pháp nhân** 

Hàm băm được xác định như sau: 

### **_h(k) = | m*(k*A mod 1) |_** 

Trong đó: 

- _m là kích thước của bảng – thông thường ta chọn m = 2_<sup>_n_</sup> 

- _k là khóa_ 

- _A là hằng số và 0<A<1._ 

- _Theo Knuth thì chọn A bằng giá trị sau:_ 

   - A = (√5 -1)/2 = 0.6180339887… 

### **6.2.4 Phép băm phổ quát** 

Cho H là một tập hợp hữu hạn các hàm băm: ánh xạ các khóa k từ tập khóa U vào miền giá trị {0, 1, 2, …, m-1}. 

Tập H là phổ quát (universal) nếu với mọi f  thuộc H và 2 khoá phân biệt k1, k2 ta có xác suất: 

### **_Pr{f(k1) = f(k2)} <= 1/m._** 

### Trong đó:  m là kích thước bảng. 

_Trang 91_ 

Cấu trúc dữ liệu và giải thuật 

Chương 6. Bảng băm – Hash table 

## **6.3 Các phương pháp giải quyết đụng độ** 

### **6.3.1 Phương pháp kết nối trực tiếp** 

Bảng băm được cài đặt bằng các danh sách liên kết, các phần tử trên bảng băm được “băm” thành M danh sách liên kết (từ danh sách 0 đến danh sách M–1). 

Các phần tử bị xung đột tại địa chỉ i được kết nối trực tiếp với nhau qua danh sách liên kết i. 



<!-- Start of picture text -->
Lol lz fs 4 is fleIz fils| |<br>@ 9090000<br>> © 00 00<br>© 0°00 ©<br>°o °o<br>K: tap cac sé tw nhién<br>M={0,1, 2, ..5 9}<br>F(h)=k MODM<br><!-- End of picture text -->

_Hình 38. Bảng băm theo phương pháp kết nối trực tiếp_ 

### **6.3.2 Phương pháp kết nối hợp nhất** 

Bảng băm trong trường hợp này được cài đặt bằng danh sách liên kết dùng mảng, có M phần tử. Các phần tử bị xung đột tại một địa chỉ được kết nối với nhau qua một danh sách liên kết. 

### **6.3.3 Phương pháp dò tuần tự** 

Bảng băm trong trường hợp này được cài đặt bằng danh sách kề có M phần tử, mỗi phần tử của bảng băm là một mẫu tin có một trường key để chứa khoá của phần tử (ban đầu khởi tạo bằng -1): 

- Khi thêm phần tử có khoá key vào bảng băm, hàm băm h(key) sẽ xác định địa chỉ i trong khoảng từ 0 đến M-1: 

   - _Nếu chưa bị xung đột thì thêm phần tử mới vào địa chỉ này._ 

   - _Nếu bị xung đột thì hàm băm lại lần 1, hàm h1 sẽ xét địa chỉ kế tiếp, nếu lại bị xung đột thì hàm băm lại lần 2, hàm h2 sẽ xét địa chỉ kế tiếp nữa, …, và quá trình cứ thế cho đến khi nào tìm được địa chỉ trống và thêm phần tử mới vào địa chỉ này._ 

- Khi tìm một phần tử có khoá key trong bảng băm, hàm băm h(key) sẽ xác định địa chỉ i trong khoảng từ 0 đến M-1, tìm phần tử khoá key trong bảng băm  xuất phát từ địa chỉ i. 

- Hàm băm lại lần i được biểu diễn bằng công thức sau: 

**_f(key) = (f(key)+i) %M_** 

`o` Trong đó f(key) là hàm băm chính của bảng băm. 

- **Lưu ý** : địa chỉ dò tìm kế tiếp là địa chỉ 0 nếu đã dò đến cuối bảng. 

**Ví dụ 26** : Giả sử, khảo sát bảng băm có cấu trúc như sau: 

- _Tập khóa K: tập số tự nhiên_ 

- _Tập địa chỉ M: gồm 10 địa chỉ (M={0, 1, …, 9}_ 

- _Hàm băm h(key) = key % 10._ 

Hình sau thể hiện các bước thêm các nút 32, 53, 22, 92, 17, 34, 24, 37, 56 vào bảng băm. 

_Trang 92_ 

Cấu trúc dữ liệu và giải thuật 

Chương 6. Bảng băm – Hash table 



<!-- Start of picture text -->
fo4 [nat]rut] fafo [Nur][run ftfo [rut]fat[ft{o [ut[nut]| fa[o [wun [nut|| fo fa[no [Nu n ]| [4fo [Nut][en| [4fo [a][Nut] Ut [a|<br>[2[3 [Nat_|<br>[4[5(6 [Nutl_| [ [Nut]Nuut ] {6 [ 45 [N [Nut]ut]ut ]s[6[Nut][Nut|] [Nut<br>[7[@ [Nan][Nun ]{@ 7 [Nun [Nun ]]7fe [Nut[run]||fe7 [ru [Nut||| |e[6 [Nun |nut]<br>[9 [nut_} [9 [nun_][9 [nut ][o|nut_} fe [Nut||e[9 [N un]ut [9 [nun]<br><!-- End of picture text -->

_Hình 39. Thêm nút vào bảng băm theo phương pháp dò tuần tự_ 

### **6.3.4 Phương pháp dò bậc hai** 

Tương tự dò tuần tự nhưng hàm băm lại lần thứ i được biểu diễn bằng công thức sau: 

### **_fi(key) = (f(key)+i_**<sup>**_2_**</sup> **_) %M_** 

Trong đó: f(key) là hàm băm chính của bảng băm. 

Nếu đã dò đến cuối bảng thì trở về dò lại từ đầu bảng. 

### **6.3.5 Phương pháp băm kép** 

Phương pháp băm kép dùng hai hàm băm bất kì, ví dụ chọn hai hàm băm như sau: 

### **_h1(key)= key %M._** 

### **_h2(key) =(M-2)-key %(M-2)._** 

- Khi thêm phần tử có khoá key vào bảng băm, thì i=h1(key) và j=h2(key) sẽ xác định địa chỉ i và j trong khoảng từ 0 đến M-1: 

   - _Nếu chưa bị xung đột thì thêm phần tử mới tại địa chỉ i này._ 

   - _Nếu bị xung đột thì hàm băm lại lần 1 h1 sẽ xét địa chỉ mới i+j, nếu lại bị xung đột thì hàm băm lại lần 2 h2 sẽ xét địa chỉ i+2j, …, quá trình cứ thế cho đến khi nào tìm được địa chỉ trống và thêm phần tử vào địa chi này._ 

- Khi tìm kiếm một phần tử có khoá key trong bảng băm, hàm băm i=h1(key) và j=h2(key) sẽ xác định địa chỉ i và j trong khoảng từ 0 đến M-1. Xét phần tử tại địa chỉ i, nếu chưa tìm thấy thì xét tiếp phần tử i+j, i+2j, …, quá trình cứ thế cho đến khi nào tìm được khoá (trường hợp tìm thấy) hoặc bị rơi vào địa chỉ trống (trường hợp không tìm thấy). 

- Bảng băm dùng hai hàm băm khác nhau, hàm băm lại của phương pháp băm kép được tính theo hai giá trị: i (kết quả hàm băm thứ nhất) và j (kết qủa hàm băm thứ hai) theo một công thức bất kì. Nếu đã dò đến cuối bảng thì trở về dò lại từ đầu bảng. 

_Trang 93_ 

Cấu trúc dữ liệu và giải thuật 

Tài liệu tham khảo 

# **TÀI LIỆU THAM KHẢO** 

[1]. Nguyễn Văn Linh, Trần Cao Đệ, Trương Thị Thanh Tuyền, Lâm Hoài Bảo, Phan Huy Cường, Trần Ngân Bình - “ **Cấu trúc dữ liệu** ” – Đại Học Cần Thơ 2003. 

[2]. Dương Trần Đức – “Cấu trúc dữ liệu và giải thuật” – Học viên công nghệ bưu chính viễn thông – Hà Nội 2007. 

[3]. Lê Minh Hoàng – “Giải thuật và lập trình” – Đại học sư phạm Hà Nội 1999-2004. 

_Trang 94_ 

Cấu trúc dữ liệu và giải thuật 

Mục lục 

# **MỤC LỤC** 

|Chương 1. TỔNG QUAN ...................................................................................................................... 2|
|---|
|1.1 Mô hình hóa bài toán thực tế ........................................................................................................ 2|
|1.2 Cấu trúc dữ liệu ............................................................................................................................. 2|
|1.2.1 Tổng quan .............................................................................................................................. 2|
|1.2.2 Tiêu chuẩn lựa chọn cấu trúc dữ liệu .................................................................................... 2|
|1.2.3 Các kiểu cấu trúc dữ liệu ....................................................................................................... 3|
|1.3 Giải thuật ....................................................................................................................................... 3|
|1.3.1 Khái niệm .............................................................................................................................. 3|
|1.3.2 Biểu diễn giải thuật ................................................................................................................ 3|
|1.3.3 Đánh giá độ phức tạp của thuật toán ..................................................................................... 3|
|1.4 Chương trình ................................................................................................................................. 4|
|1.4.1 Tiểu chuẩn của một chương trình .......................................................................................... 4|
|1.4.2 Quy trình làm phần mềm ....................................................................................................... 5|
|BÀI TẬP CHƯƠNG 1 ........................................................................................................................... 5|
|Chương 2. CÁC GIẢI THUẬT TÌM KIẾM .......................................................................................... 6|
|2.1 Bài toán tìm kiếm .......................................................................................................................... 6|
|2.2 Giải thuật tìm kiếm tuyến tính ...................................................................................................... 6|
|2.3 Giải thuật tìm kiếm nhị phân ........................................................................................................ 9|
|2.4 Đánh giá độ phức tạp của các giải thuật tìm kiếm ...................................................................... 10|
|BÀI TẬP CHƯƠNG 2 ......................................................................................................................... 11|
|Chương 3. CÁC GIẢI THUẬT SẮP XẾP .......................................................................................... 12|
|3.1 Bài toàn sắp xếp .......................................................................................................................... 12|
|3.2 Đổi chỗ trực tiếp ......................................................................................................................... 12|
|3.3 Chọn trực tiếp ............................................................................................................................. 15|
|3.4 Chèn trực tiếp .............................................................................................................................. 17|
|3.5 Bubble Sort ................................................................................................................................. 19|
|3.6 Quick Sort ................................................................................................................................... 22|
|3.7 Heap Sort .................................................................................................................................... 26|
|3.8 Shell Sort ..................................................................................................................................... 30|
|3.9 Merge Sort .................................................................................................................................. 32|
|3.10 Radix Sort ................................................................................................................................ 35|
|3.11 Đánh giá độ phức tạp của các giải thuật sắp xếp ..................................................................... 40|
|BÀI TẬP CHƯƠNG 3 ......................................................................................................................... 40|
|Chương 4. DANH SÁCH LIÊN KẾT ................................................................................................. 41|



_Trang 95_ 

Cấu trúc dữ liệu và giải thuật 

Mục lục 

|4.1 Giới thiệu tổng quan ................................................................................................................... 41|
|---|
|4.1.1 Biến tĩnh và biến động ......................................................................................................... 41|
|4.1.2 Cấu trúc tự trỏ ...................................................................................................................... 41|
|4.1.3 Cấu trúc dữ liệu dạng danh sách ......................................................................................... 41|
|4.2 Danh sách liên kết đơn ................................................................................................................ 42<br>|
|4.2.1 Cấu trúc dữ liệu của danh sách liên kết đơn ........................................................................ 42|
|4.2.2 Các giải thuật trên danh sách liên kết đơn ........................................................................... 43|
|4.3 Ngăn xếp - Stack ......................................................................................................................... 53<br>|
|4.3.1 Tổng quan ............................................................................................................................ 53|
|4.3.2 Cài đặt ngăn xếp bằng mảng một chiều .............................................................................. 53|
|4.3.3 Cài đặt ngăn xếp bằng danh sách liên kết đơn .................................................................... 57|
|4.3.4 Một số ứng dụng của ngăn xếp............................................................................................ 59|
|4.4 Hàng đợi – Queue ....................................................................................................................... 65|
|4.4.1 Tổng quan ............................................................................................................................ 65|
|4.4.2 Cài đặt hàng đợi bằng mảng ................................................................................................ 65|
|4.4.3 Cài đặt hàng đợi bằng danh sách liên kết đơn ..................................................................... 67|
|4.5 Một số dạng danh sách liên kết khác .......................................................................................... 71|
|4.5.1 Danh sách liên kết kép ......................................................................................................... 71<br>|
|4.5.2 Danh sách liên kết vòng ...................................................................................................... 71|
|BÀI TẬP CHƯƠNG 4 ......................................................................................................................... 72|
|Chương 5. CÂY ................................................................................................................................... 74|
|5.1 Tổng quan về cấu trúc cây .......................................................................................................... 74|
|5.2 Cây nhị phân ............................................................................................................................... 75|
|5.2.1 Tổng quan về cây nhị phân .................................................................................................. 75|
|5.2.2 Biểu diễn cây nhị phân bằng danh sách liên kết .................................................................. 75|
|5.2.3 Một số cách biểu diễn cây nhị phân khác ............................................................................ 76|
|5.3 Cây nhị phân tìm kiếm ................................................................................................................ 77|
|5.3.1 Tổng quan về cây nhị phân tìm kiếm .................................................................................. 77<br>|
|5.3.2 Các giải thuật trên cây nhị phân tìm kiếm ........................................................................... 77|
|5.4 Cây nhị phân tìm kiếm cân bằng................................................................................................. 85|
|5.4.1 Tổng quan về cây nhị phân tìm kiếm cân bằng ................................................................... 85|
|5.4.2 Các thao tác trên cây cân bằng ............................................................................................ 85|
|BÀI TẬP CHƯƠNG 5 ......................................................................................................................... 89|
|Chương 6. BẢNG BĂM ...................................................................................................................... 90|
|6.1 Tổng quan về bảng băm .............................................................................................................. 90|
|6.1.1 Một số khái niệm ................................................................................................................. 90|
|6.1.2 Ưu điểm của bảng băm ........................................................................................................ 90|



_Trang 96_ 

Cấu trúc dữ liệu và giải thuật 

Mục lục 

|6.1.3 Các phép toán trên bảng băm .............................................................................................. 90|
|---|
|6.2 Phương pháp xây dựng hàm băm................................................................................................ 91|
|6.2.1 Hàm băm dạng bảng tra ....................................................................................................... 91|
|6.2.2 Hàm băm theo phương pháp chia ........................................................................................ 91|
|6.2.3 Hàm băm theo phương pháp nhân ....................................................................................... 91|
|6.2.4 Phép băm phổ quát .............................................................................................................. 91|
|6.3 Các phương pháp giải quyết đụng độ ......................................................................................... 92|
|6.3.1 Phương pháp kết nối trực tiếp ............................................................................................. 92|
|6.3.2 Phương pháp kết nối hợp nhất ............................................................................................. 92|
|6.3.3 Phương pháp dò tuần tự ....................................................................................................... 92|
|6.3.4 Phương pháp dò bậc hai ...................................................................................................... 93|
|6.3.5 Phương pháp băm kép ......................................................................................................... 93|
|TÀI LIỆU THAM KHẢO ................................................................................................................... 94|
|MỤC LỤC ........................................................................................................................................... 95|



_Trang 97_ 

