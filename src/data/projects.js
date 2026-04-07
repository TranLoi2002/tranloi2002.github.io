export const projects = [
  {
    id: 1,
    title: "SinhVienJob",
    subtitle: "AI CV Builder & Smart Job Platform",

    description:
      "Nền tảng tìm việc cho sinh viên với AI tạo CV, chatbox thông minh, gợi ý ứng viên thông minh và hệ thống kết nối ứng viên - nhà tuyển dụng.",

    detail:
      "Nền tảng tuyển dụng cho sinh viên với 3 role: Candidate, Recruiter, Admin. " +
      "Tích hợp AI (Gemini) tạo CV, chatbot. Realtime chat + comment (WebSocket). " +
      "Thanh toán thật qua ngân hàng bằng Sepay. Gợi ý ứng viên bằng ElasticSearch. " +
      "Xây dựng bằng Microservices, deploy Docker + AWS.",

    image: [
      "1.png","2.png","3.png","4.png","5.png",
      "6.png","7.png","8.png","9.png","10.png",
      "11.png","12.png","13.png"
    ],

    tech: ["ReactJS","Spring Boot","Microservices","Docker","AWS"],

    backend: [
      "Spring Boot",
      "Microservices",
      "REST API",
      "JWT",
      "WebSocket",
      "ElasticSearch",
      "Gemini AI",
      "Sepay",
      "MariaDB",
      "Redis",
      "Postman",
    ],

    frontend: [
      "ReactJS",
      "TypeScript",
      "Tailwind CSS",
      "React Native"
    ],

    features: [
      "Tạo CV tự động bằng AI (Gemini API)",
      "AI Chatbot hỗ trợ người dùng (Gemini API)",
      "Chat realtime giữa ứng viên và nhà tuyển dụng",
      "Bình luận realtime giữa ứng viên và nhà tuyển dụng",
      "Thanh toán thật qua ngân hàng bằng sepay",
      "Hệ thống gói dịch vụ",
      "Admin Dashboard",
      "Frontend Web (ReactJS + TS)",
      "Mobile App (React Native)"
    ],

    highlight: true,
    github: "https://github.com/NTBao102803/Job_Exchange",
    demo: "https://drive.google.com/file/d/1bgYiopdJVFssHz9qpfaIA4Fi2QeLiZVl/view?usp=sharing"
  },

  {
  id: 2,
  title: "Karaoke Management",
  subtitle: "Full-Stack Karaoke Management System",

  description:
    "Hệ thống quản lý karaoke hỗ trợ đặt phòng, thanh toán, quản lý khách hàng và thống kê doanh thu.",

  detail:
    "Ứng dụng quản lý karaoke được xây dựng theo mô hình full-stack với Java + JDBC kết nối SQL Server. " +
    "Hỗ trợ các chức năng: đặt phòng, check-in, check-out, thanh toán, quản lý khách hàng và phòng. " +
    "Có phân quyền truy cập và mã hóa mật khẩu để bảo mật dữ liệu. " +
    "Tích hợp thống kê doanh thu, tình trạng phòng và báo cáo kinh doanh.",

  image: [
    "16.png","17.png","18.png","19.png","20.png",
    "21.png","22.png","14.png","15.png"
  ],

  tech: ["Java","JDBC","SQL Server"],

  backend: [
    "Java",
    "JDBC",
    "SQL Server",
    "Authentication",
    "Password Encryption",
    "Access Control",
    "Business Logic (Booking, Payment, Room Management)"
  ],

  frontend: [
    "Java Swing",
    "Eclipse IDE",
    "NetBeans IDE"
  ],

  features: [
    "Quản lý phòng và trạng thái phòng",
    "Đặt phòng, check-in, check-out",
    "Thanh toán và tính tiền dịch vụ",
    "Quản lý khách hàng",
    "Phân quyền và bảo mật dữ liệu",
    "Mã hóa mật khẩu người dùng",
    "Thống kê doanh thu",
    "Báo cáo tình trạng kinh doanh",
    "Giao diện desktop bằng Java Swing"
  ],

  highlight: false,
  github: "https://github.com/NTBao102803/PTUD_QuanLyKaraoke.git",
  demo: "#"
}

];
