import { useEffect, useState } from "react";

export function Hero() {
  const roles = [
    "Backend Developer",
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
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      document.querySelectorAll(".glow").forEach((g) => {
        g.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero section container">

      {/* glow */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      {/* avatar */}
      <div className="hero-avatar">
        <img src="/avatar.jpg" alt="Tran Loi" />
        <div className="avatar-ring"></div>
      </div>

      {/* name */}
      <h1 className="hero-title">Tran Loi</h1>

      {/* typing */}
      <p className="hero-subtitle">
        {text}
        <span className="cursor">|</span>
      </p>

      {/* buttons */}
      <div className="hero-actions">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-outline">Contact Me</a>
      </div>

    </section>
  );
}
