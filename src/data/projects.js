export const projects = [
  {
    id: 1,
    title: "Job Marketplace for Students",
    subtitle: "AI CV Builder & Smart Job Recommendation",

    description:
      "Nền tảng tìm việc cho sinh viên tích hợp AI tạo CV & gợi ý việc làm.",

    detail:
      "Hệ thống microservices sử dụng Spring Boot, API Gateway và JWT để bảo mật. Tích hợp Gemini API để tạo CV tự động, ElasticSearch để tìm kiếm thông minh. Triển khai bằng Docker và AWS.",

    image: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png"],

    tech: ["ReactJS", "Spring Boot", "Microservices", "Docker", "AWS"],

    fullTech: [
      "ReactJS",
      "Tailwind CSS",
      "Spring Boot",
      "Gemini API",
      "ElasticSearch",
      "Kibana",
      "MariaDB",
      "MinIO",
      "Docker",
      "Docker Compose",
      "API Gateway",
      "JWT",
      "React Native"
    ],

    highlight: true,

    github: "#",
    demo: "#"
  },

  {
    id: 2,
    title: "Payment Service",
    subtitle: "Scalable Payment Microservice",

    description: "Microservice xử lý thanh toán với khả năng mở rộng cao.",

    detail:
      "Hệ thống xử lý thanh toán đảm bảo tính nhất quán dữ liệu, hỗ trợ retry, transaction và tích hợp Redis cache. Thiết kế theo kiến trúc microservice.",

    image: "/projects/payment.png",

    tech: ["Spring Boot", "MySQL", "Redis"],

    fullTech: [
      "Spring Boot",
      "MySQL",
      "Redis",
      "Docker",
      "REST API"
    ],

    github: "#",
    demo: "#"
  }
];
