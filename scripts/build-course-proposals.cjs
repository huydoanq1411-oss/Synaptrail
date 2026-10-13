const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),catalog=path.join(root,'courses.html'),catalogHash=crypto.createHash('sha256').update(fs.readFileSync(catalog)).digest('hex');
const escape=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const definitions={
mysql:{name:'MySQL',desc:'Bản đề xuất khóa MySQL: từ mô hình quan hệ đến schema, chuẩn hóa, index, transaction và đọc kế hoạch truy vấn. Chỉ chương 1 đã có bản mẫu.',chapters:[
['MySQL và mô hình dữ liệu quan hệ','Client/server, bảng/hàng/cột, khóa chính; tạo bảng và SELECT đầu tiên.'],
['Thiết kế schema và ràng buộc','Kiểu dữ liệu, NULL, UNIQUE, PK/FK; thiết kế sản phẩm, khách hàng, đơn hàng.'],
['Chuẩn hóa và quan hệ dữ liệu','1NF/2NF/3NF, quan hệ 1–n/n–n; nhận diện dư thừa và đánh đổi phi chuẩn hóa.'],
['CRUD và truy vấn có điều kiện','INSERT/UPDATE/DELETE, WHERE, ORDER BY, LIMIT; phạm vi cập nhật và tham số hóa.'],
['JOIN và phân tích dữ liệu','INNER/LEFT JOIN, GROUP BY/HAVING, truy vấn con; CTE/window function theo phiên bản hỗ trợ.'],
['Index và chi phí truy vấn','Index đơn/ghép, leftmost prefix, selectivity; ảnh hưởng đến ghi dữ liệu.'],
['Transaction và truy cập đồng thời','InnoDB, ACID, COMMIT/ROLLBACK, isolation, locks, deadlock và retry có giới hạn.'],
['View và stored procedure','View, tham số procedure, quyền thực thi; khi dùng và khi giữ logic ở ứng dụng.'],
['EXPLAIN và tối ưu truy vấn','Đọc access path/rows/index; đo trước–sau; EXPLAIN ANALYZE thực sự chạy truy vấn.'],
['Dự án và vận hành nền tảng','Thiết kế kho hàng, kiểm thử transaction, backup/restore thử nghiệm, quyền tối thiểu; tích hợp Node/ORM sau khi hiểu SQL.']
],quiz:[
['MySQL, SQL và client khác nhau thế nào?',1,['Cả ba chỉ là tên một file','MySQL quản lý dữ liệu; SQL là ngôn ngữ; client gửi lệnh','SQL là tên riêng của một sản phẩm','Client chính là mọi bảng dữ liệu']],
['Khóa chính trong bảng mẫu có vai trò gì?',0,['Nhận diện hàng duy nhất','Bảo đảm tên sản phẩm không bao giờ trùng','Tự sắp mọi kết quả SELECT','Thay thế tất cả kiểu dữ liệu']],
['WHERE price < 30.00 giữ sản phẩm nào trong ba hàng mẫu?',2,['Chỉ Bag','Cả ba sản phẩm','Notebook và Pen','Không giữ hàng nào']],
['Muốn kết quả mẫu theo id, dùng mệnh đề nào?',3,['FROM VERSION()','NOT NULL','INSERT ORDER','ORDER BY id']],
['Chạy INSERT với id đã có gây lỗi. Cách hiểu phù hợp là gì?',0,['Ràng buộc khóa chính đang ngăn bản ghi trùng mã','MySQL không cho lưu bất kỳ chuỗi nào','SELECT đã xóa bảng','Phải luôn bỏ khóa chính']]
],sources:'<a href="https://dev.mysql.com/doc/refman/8.4/en/creating-tables.html">MySQL — tạo bảng</a> · <a href="https://dev.mysql.com/doc/refman/8.4/en/">Reference Manual</a>'},
docker:{name:'Docker',desc:'Bản đề xuất khóa Docker: image, container, layers, volumes, networks, Compose, multi-stage và bảo mật. Chỉ chương 1 có nội dung để duyệt.',chapters:[
['Image, container và vòng đời cơ bản','CLI/Engine, pull/run, ps/logs, dừng và xóa đúng phạm vi.'],
['Image layers, Dockerfile và build cache','FROM/RUN/COPY/CMD, context, .dockerignore, thứ tự layer; tag và digest.'],
['Dữ liệu: volumes và bind mounts','Dữ liệu khi container bị thay, quyền thư mục, backup/restore volume thử nghiệm.'],
['Networks và kết nối dịch vụ','User-defined network, DNS dịch vụ, publish port, localhost bên trong container.'],
['Compose cho ứng dụng nhiều dịch vụ','compose.yaml, config/env, healthcheck, readiness; lifecycle và dữ liệu.'],
['Multi-stage build và tối ưu image','Tách builder/runtime, COPY --from, giữ artifact cần thiết; đo kích thước và cache.'],
['Vận hành và debug','Logs, inspect, exit code, restart policy, giới hạn tài nguyên; checklist triển khai.'],
['Bảo mật và dự án tích hợp','Non-root, secrets, giảm capability, nguồn image, cập nhật/quét image; ứng dụng + DB, không mount Docker socket tùy tiện.']
],quiz:[
['Image và container có quan hệ nào?',2,['Container là tên mới của file Dockerfile','Xóa container luôn xóa image','Image dùng tạo container với trạng thái riêng','Mỗi image chỉ tạo được một container']],
['Có lệnh docker trong PATH đã bảo đảm điều gì?',0,['Chỉ bảo đảm client được tìm thấy; vẫn kiểm tra Engine','Mọi container đều đang chạy','Không cần server để chạy container','Mọi image tương thích mọi nền tảng']],
['hello-world chạy xong và Exited (0). Cách hiểu nào đúng?',1,['Chắc chắn image hỏng','Chương trình kiểm tra đã hoàn tất thành công','Phải luôn giữ container Running','Docker đã tự xóa tất cả image']],
['Muốn thấy container kiểm tra đã thoát, chọn gì?',3,['Chỉ docker image ls','Chỉ docker ps không -a','docker build --logs','docker ps -a']],
['run lại cùng tên bị báo tồn tại. Nên làm gì?',0,['Kiểm tra đúng container bài tập trước khi dọn hoặc dùng tên mới','Xóa mọi container trên máy','Xóa Dockerfile của dự án khác','Thêm quyền đặc biệt cho mọi container']]
],sources:'<a href="https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/">Docker — container</a> · <a href="https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/">Docker — image</a>'}
};
function page(course,title,body,lesson){const item=definitions[course];return `<!DOCTYPE html>\n<html lang="vi" data-theme="light"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)} | Synaptrail — Bản đề xuất</title><meta name="description" content="${escape(item.desc)}"><meta name="robots" content="noindex,follow"><link rel="icon" type="image/svg+xml" href="../../../assets/favicon.svg"><link rel="stylesheet" href="../../../assets/lesson.css"><link rel="stylesheet" href="../../../assets/ui.css"><link rel="stylesheet" href="../../../assets/seo.css"><link rel="stylesheet" href="../../../assets/quiz-feedback.css"></head><body><div id="progress-bar"></div><div id="topbar"><a class="brand" href="index.html">${item.name} · Bản đề xuất</a><div class="topbar-right"><a class="home-btn" href="../README.md">Bảng phương án</a><a class="home-btn" href="../../../index.html">Trang chủ</a>${lesson?'<button id="menu-toggle" aria-label="Mở mục lục" onclick="document.getElementById(\'sidebar\').classList.toggle(\'open\')">☰</button>':''}</div></div>${lesson?'<div class="layout"><aside id="sidebar"><div class="brand">'+item.name+'</div><p class="sub">Chỉ chương 1 có bản mẫu</p><a class="nav-link" data-target="'+course+'-s1" href="#'+course+'-s1">Chương 1</a><a class="nav-link" href="index.html">Mục lục đề xuất</a><button id="theme-toggle" onclick="toggleTheme()"><span id="theme-icon"></span><span id="theme-label"></span></button></aside><div class="main-col">':''}<main style="margin:0 auto"><div class="box note"><div class="box-title">Bản để duyệt</div><p>Chưa đưa vào catalog. Chỉ có mục lục và chương 1 mẫu; chưa triển khai khóa đầy đủ.</p></div>${body}</main>${lesson?'</div></div><button id="back-to-top" aria-label="Về đầu trang" onclick="window.scrollTo({top:0,behavior:\'smooth\'})">↑</button><script src="../../../assets/lesson.js" data-lesson-phase="setup" data-lesson-theme="0"></script><script src="../../../assets/lesson.js" data-lesson-phase="finish"></script><script src="../../../assets/quiz-feedback.js"></script>':''}</body></html>\n`;}
for(const [course,item]of Object.entries(definitions)){
 const dir=path.join(root,'reports/course-proposals',course);fs.mkdirSync(dir,{recursive:true});
 const outline='<h1>'+item.name+' — Mục lục đề xuất</h1><p>'+escape(item.desc)+'</p><ol>'+item.chapters.map(([title,desc],i)=>'<li style="margin:18px 0"><h3>'+(i===0?'<a href="chapter01.html">':'')+'Chương '+(i+1)+' — '+escape(title)+(i===0?'</a>':'')+'</h3><p>'+escape(desc)+'</p>'+(i>0?'<small>Đề cương — chưa viết chương này</small>':'')+'</li>').join('')+'</ol>';
 fs.writeFileSync(path.join(dir,'index.html'),page(course,item.name+' — Mục lục',outline,false));
 let body=fs.readFileSync(path.join(dir,'chapter-body.txt'),'utf8');
 const quiz='<div class="quiz" data-quiz="q1" data-quiz-feedback><h4>8. Quiz — Chương 1</h4>'+item.quiz.map(([stem,answer,options],i)=>'<div class="quiz-q" data-answer="'+answer+'"><p>'+(i+1)+'. '+escape(stem)+'</p>'+options.map((text,j)=>'<span class="quiz-opt" data-idx="'+j+'" tabindex="0" role="button" aria-pressed="false" aria-label="'+escape(String.fromCharCode(65+j)+'. '+text)+'">'+String.fromCharCode(65+j)+'. '+escape(text)+'</span>').join('')+'<div class="quiz-explanation" hidden>Đáp án: '+String.fromCharCode(65+answer)+'. '+escape(options[answer])+'. Xem phần lý thuyết và ví dụ trong bài để đối chiếu.</div></div>').join('')+'<button class="quiz-btn" onclick="gradeQuiz(\'q1\')" aria-label="Chấm năm câu quiz">Chấm điểm</button><div class="quiz-result" id="result-q1"></div><p class="quiz-feedback-status" role="status" aria-live="polite"></p></div><p>Tài liệu đối chiếu: '+item.sources+'.</p>';
 body=body.replace('</section>',quiz+'</section>');fs.writeFileSync(path.join(dir,'chapter01.html'),page(course,'Chương 1 — '+item.chapters[0][0],body,true));
}
if(crypto.createHash('sha256').update(fs.readFileSync(catalog)).digest('hex')!==catalogHash)throw Error('Catalog unexpectedly changed');
console.log('Prepared two outlines and two sample chapters; courses.html unchanged.');
