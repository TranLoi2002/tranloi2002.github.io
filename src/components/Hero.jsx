import { useEffect, useState } from "react";

export function Hero() {
  const roles = [
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "Microservices Engineer",
    "System Designer"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  // typing effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (char < roles[index].length) {
        setText(prev => prev + roles[index][char]);
        setChar(char + 1);
      } else {
        setTimeout(() => {
          setText("");
          setChar(0);
          setIndex((index + 1) % roles.length);
        }, 1500);
      }
    }, 80);
    return () => clearTimeout(timeout);
  }, [char, index]);

  // parallax glow
  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.querySelectorAll(".glow").forEach((g) => {
        g.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Glow */}
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <div className="hero-inner">
        <div className="hero-avatar">
          <img src="/avatar.png" alt="Tran Loi" />
          <div className="avatar-ring"></div>
        </div>

        <div className="hero-details">
          <h1 className="hero-title">Tran Van Loi</h1>
          <p className="hero-subtitle">{text}<span className="cursor">|</span></p>

          <div className="hero-info">
            <div><strong>DOB:</strong> 09/01/2002</div>
            <div><strong>Phone:</strong> 0899626775</div>
            <div><strong>Address:</strong> 162/36 Nguyen Van Luong, Phuong 17, Go Vap, HCM</div>
            <div><strong>Email:</strong> tranloi09012002@gmail.com</div>
            <div><strong>Github:</strong> <a href="https://github.com/TranLoi2002" target="_blank">TranLoi2002</a></div>
            <div><strong>Linkedin:</strong> <a href="https://linkedin.com/in/lợi-trần-247a012" target="_blank">Lợi Trần</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
