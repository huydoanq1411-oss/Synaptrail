/* Independent expectations reviewed against chapter01–05 on 2026-11-09.
   Do not derive these values from the quiz module under test. basis is a literal
   excerpt from the corresponding lesson; explanation is the reviewed quiz copy. */
const Q=(stem,answer,options,explanation,basis)=>({stem,answer,options,explanation,basis,code:'',outsideChapter:false});
module.exports=[
 {n:1,questions:[
  Q('Mô hình tô màu bản đồ dùng cạnh biểu diễn điều gì?',1,['Hai vùng có cùng diện tích','Hai vùng có chung biên giới','Hai vùng cùng màu'],'Đỉnh là vùng; cạnh thể hiện ràng buộc hai vùng kề nhau.','biên giới chung bằng một cạnh'),
  Q('Hàm ví dụ trả về gì khi không có mã cần tìm?',2,['0','Bản ghi cuối','null'],'return null nằm sau vòng lặp.','return null'),
  Q('Thuật toán kết thúc có đồng nghĩa kết quả đúng không?',0,['Không','Có','Chỉ khi dùng JavaScript'],'Hữu hạn và tính đúng là hai yêu cầu riêng.','Kết thúc không đồng nghĩa kết quả đúng'),
  Q('Chọn cấu trúc dữ liệu cần dựa vào đâu?',1,['Chỉ độ dài tên biến','Thao tác, dữ liệu và tài nguyên','Chỉ màu giao diện'],'Phải phù hợp thông tin cần biểu diễn và cách xử lý.','phù hợp thao tác'),
  Q('Bước nào nên làm trước cài đặt?',2,['Đổi đuôi tệp','Chọn màu nút','Xác định đầu vào, đầu ra và ràng buộc'],'Hợp đồng bài toán quyết định cách thiết kế.','Cần đầu vào/đầu ra rõ')
 ]},
 {n:2,questions:[
  Q('Big O có tự quy định trường hợp xấu nhất không?',2,['Có','Chỉ với mảng','Không'],'Phải nêu trường hợp riêng với ký hiệu cận.','Big O không tự mang nghĩa trường hợp xấu nhất'),
  Q('Cận chặt của 3n + 7 là gì?',0,['Θ(n)','Θ(n²)','Θ(1)'],'Hệ số và hằng số không đổi bậc tăng trưởng.','3n + 7'),
  Q('Θ diễn tả gì?',1,['Số giây chính xác','Cận chặt hai phía','Chỉ bộ nhớ'],'Θ khác Big O chỉ là cận trên.','Θ mô tả cận chặt hai phía'),
  Q('Tìm tuyến tính thất bại trong n phần tử cần mấy so sánh khóa?',2,['log n','1','n'],'Phải kiểm tra hết dãy.','không tìm thấy cho n phép'),
  Q('Phân tích trung bình cần thêm gì?',0,['Giả thiết phân bố đầu vào','Tên máy tính','Một ảnh chụp'],'Không thể suy ra kỳ vọng nếu chưa biết cách chọn đầu vào.','Trung bình cần giả thiết phân bố đầu vào')
 ]},
 {n:3,questions:[
  Q('Vòng j < i cho tổng bao nhiêu lượt?',0,['n(n−1)/2','n','2ⁿ'],'Tổng 0 + 1 + … + (n−1).','n(n−1)/2'),
  Q('Chia đôi số dương mỗi bước có bao nhiêu bước theo bậc?',1,['Θ(n²)','Θ(log n)','Θ(n)'],'Sau k bước miền giảm theo 2ᵏ.','số bước Θ(log n)'),
  Q('Hai vòng liên tiếp n và n² lượt có tổng bậc nào?',2,['Θ(log n)','Θ(n³)','Θ(n²)'],'Cộng n+n² rồi giữ số hạng trội.','Vòng lặp liên tiếp cộng chi phí'),
  Q('Đo thời gian một lần có chứng minh cận cho mọi đầu vào không?',0,['Không','Có','Có nếu máy nhanh'],'Thực nghiệm chỉ cho bằng chứng trên điều kiện đã thử.','không chứng minh cận cho mọi n'),
  Q('Tìm thành công đều xác suất ở mọi vị trí có số so sánh trung bình nào?',1,['n²','(n+1)/2','1'],'Lấy trung bình các số 1 đến n.','trung bình (n+1)/2')
 ]},
 {n:4,questions:[
  Q('Hàm daoTaiCho cần bộ nhớ phụ theo bậc nào?',1,['O(n)','O(1)','O(n²)'],'Chỉ có hai chỉ số và lượng tạm cố định.','lượng biến tạm không tăng theo n'),
  Q('b = a có tạo bản sao mảng không?',2,['Chỉ với mảng rỗng','Có','Không'],'Hai biến cùng tham chiếu một mảng.','Nhầm gán b = a là sao chép các phần tử'),
  Q('Tạo bản sao n phần tử cần bộ nhớ nào?',0,['O(n)','O(1)','O(log n)'],'Số ô bản sao tăng theo n.','bản sao n phần tử là O(n)'),
  Q('Đệ quy sâu n cần tính thêm bộ nhớ gì?',1,['Chỉ một biến','Stack lời gọi O(n)','Không cần bộ nhớ'],'Mỗi lời gọi đang chờ giữ trạng thái riêng.','ngăn xếp lời gọi đệ quy'),
  Q('Array đảo tại chỗ trả về gì trong ví dụ?',2,['Một chỉ số','Luôn mảng mới','Cùng mảng đã đổi'],'return a không tạo bản sao.','trả cùng mảng, không tạo bản sao')
 ]},
 {n:5,questions:[
  Q('Thuật toán nào chọn min xong mới đổi?',2,['Bubble Sort','Interchange Sort','Selection Sort'],'Selection lưu chỉ số min và đổi sau vòng quét.','tìm vị trí nhỏ nhất rồi mới đổi một lần'),
  Q('Bubble có cờ dừng chạy trên dãy đã sắp có cận chặt nào?',0,['Θ(n)','Θ(n²)','Θ(1)'],'Vẫn cần một lượt so sánh để biết không phải đổi.','Bubble có cờ dừng: tốt nhất Θ(n)'),
  Q('Interchange đổi khi nào?',1,['Chỉ sau khi tìm hết min','Ngay khi gặp a[j] nhỏ hơn a[i]','Chỉ đổi cặp kề'],'Đó là khác biệt với Selection và Bubble.','đổi ngay nếu nhỏ hơn'),
  Q('Selection so sánh bao nhiêu lần theo công thức?',2,['2ⁿ','n','n(n−1)/2'],'Các đoạn quét dài n−1,n−2,…,1.','so sánh n(n−1)/2 lần'),
  Q('Vì sao Bubble dùng < thay vì <= khi so cặp ngược?',0,['Giữ thứ tự khóa bằng nhau','Để đổi mọi khóa trùng','Để tránh quét dãy'],'Không đổi các phần tử bằng khóa giúp ổn định.','Bubble chỉ đổi khi lớn hơn nên ổn định')
 ]}
];
