import { useEffect } from "react";
import {
  Radar, RadarChart, PolarGrid,
  PolarAngleAxis, ResponsiveContainer
} from "recharts";

export function Skills() {

  const skills = [
    {
      title: "Programming",
      items: ["☕ Java", "⚡ JavaScript", "🐍 Python", "💻 C++", "🌐 HTML", "🎨 CSS"],
      level: 85
    },
    {
      title: "Database",
      items: ["🗄️ MySQL", "📊 SQL Server", "🍃 MongoDB"],
      level: 80
    },
    {
      title: "Frameworks",
      items: ["🌱 Spring Boot", "⚛️ ReactJS", "📱 React Native", "🔗 Hibernate"],
      level: 85
    },
    {
      title: "Cloud & DevOps",
      items: ["☁️ AWS", "🐳 Docker", "🔄 CI/CD"],
      level: 70
    },
    {
      title: "Tools",
      items: ["🔧 Git", "💡 IntelliJ", "📝 VS Code","🌘 Eclipse",
    "📬 Postman"],
      level: 90
    },
    {
      title: "Soft Skills",
      items: ["🧠 Problem Solving", "🤝 Communication", "⏱️ Time Management"],
      level: 85
    }
  ];


  // animation scroll
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills">
      <div className="container">

        <h2 className="skills-title fade-up">Skills</h2>

        {/* GRID */}
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card fade-up">

              <h3>{skill.title}</h3>

              {/* TAG */}
              <div className="skill-tags">
                {skill.items.map((item, idx) => (
                  <span key={idx}>{item}</span>
                ))}
              </div>

              {/* PROGRESS */}
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>

            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
