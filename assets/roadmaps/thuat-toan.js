/* Single source for the algorithm roadmap; chapter excerpts are refreshed by the sync script. */
globalThis.SynaptrailRoadmapData = {
  course: 'thuat-toan', title: 'Thuật toán & Cấu trúc dữ liệu',
  continueWith: [
    {title:'C++',chapter:'cpp/index.html',summary:'Thực hành bằng C++'},
    {title:'Java',chapter:'java/index.html',summary:'Thực hành bằng Java'},
    {title:'Python',chapter:'python/index.html',summary:'Thực hành bằng Python'},
    {title:'System Design',chapter:'system-design/index.html',summary:'Tiếp nối với thiết kế hệ thống'}
  ],
  nodes: [
    {id:'nen-tang',title:'Nhập môn & độ phức tạp',type:'bat-buoc',side:'spine',parent:null,chapter:null,summary:'',time:0,related:[],comingSoon:false},
    {id:'sap-xep',title:'Sắp xếp',type:'bat-buoc',side:'spine',parent:null,chapter:null,summary:'',time:0,related:[],comingSoon:false},
    {id:'tim-kiem',title:'Tìm kiếm',type:'bat-buoc',side:'spine',parent:null,chapter:null,summary:'',time:0,related:[],comingSoon:false},
    {id:'tuyen-tinh',title:'Cấu trúc dữ liệu tuyến tính',type:'bat-buoc',side:'spine',parent:null,chapter:null,summary:'',time:0,related:[],comingSoon:false},
    {id:'cay',title:'Cây',type:'bat-buoc',side:'spine',parent:null,chapter:null,summary:'',time:0,related:[],comingSoon:false},
    {id:'do-thi',title:'Đồ thị',type:'bat-buoc',side:'spine',parent:null,chapter:null,summary:'Chưa có chương riêng về đồ thị trong khóa học hiện tại.',time:0,related:[],comingSoon:true},
    {id:'bfs-dfs',title:'BFS / DFS',type:'chi-tiet',side:'left',parent:'do-thi',chapter:null,summary:'Chưa có chương riêng. Chương 18, 19 và 20 hiện giới thiệu Stack, Queue và các cách duyệt cây có liên quan.',time:0,related:['chapter18','chapter19','chapter20'],comingSoon:true},
    {id:'dijkstra',title:'Dijkstra',type:'chi-tiet',side:'right',parent:'do-thi',chapter:null,summary:'Chưa có chương riêng. Tổng kết chương 23 nhắc tới Priority Queue là thành phần của thuật toán Dijkstra.',time:0,related:['chapter23'],comingSoon:true},
    {id:'union-find',title:'Union-Find',type:'tuy-chon',side:'left',parent:'do-thi',chapter:null,summary:'Chưa có nội dung Union-Find trong 23 chương hiện tại.',time:0,related:[],comingSoon:true},
    {id:'de-quy-dp',title:'Đệ quy & Quy hoạch động',type:'bat-buoc',side:'spine',parent:null,chapter:null,summary:'Chưa có chương riêng về quy hoạch động. Đệ quy đã xuất hiện trong Merge Sort và duyệt cây.',time:0,related:['chapter07','chapter20'],comingSoon:true},
    {id:'chien-luoc',title:'Tham lam, Chia để trị, Backtracking',type:'bat-buoc',side:'spine',parent:null,chapter:null,summary:'Chưa có chương riêng cho nhóm chiến lược này. Merge Sort hiện giới thiệu ý tưởng chia để trị.',time:0,related:['chapter07'],comingSoon:true},
    {id:'luyen-tap',title:'Luyện tập',type:'bat-buoc',side:'spine',parent:null,chapter:null,summary:'Ôn tập và thực hành với các tài nguyên đang có của Synaptrail.',time:0,related:[],comingSoon:false},
    {id:'bai-tap',title:'Bài tập thực hành',type:'tuy-chon',side:'left',parent:'luyen-tap',chapter:'Quiz_and_other/exercises.html',summary:'Mở trang bài tập thực hành của Synaptrail.',time:30,related:[],comingSoon:false},
    {id:'quiz-tong-hop',title:'Quiz tổng hợp',type:'tuy-chon',side:'right',parent:'luyen-tap',chapter:'Quiz_and_other/quiz-tong-hop.html',summary:'Mở bộ câu hỏi tổng hợp của Synaptrail.',time:20,related:[],comingSoon:false},
    {id:'cheatsheet',title:'Cheatsheet tra cứu',type:'tuy-chon',side:'left',parent:'luyen-tap',chapter:'Quiz_and_other/cheatsheet.html',summary:'Mở tài liệu tra cứu nhanh của Synaptrail.',time:10,related:[],comingSoon:false}
  ]
};
