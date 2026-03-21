import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(true);
  const [hide, setHide] = useState(false);

  let lastScroll = 0;

  // detect section active + hide header
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // hide header
      if (currentScroll > lastScroll && currentScroll > 100) {
        setHide(true);
      } else {
        setHide(false);
      }
      lastScroll = currentScroll;

      // active section
      let current = "";
      sections.forEach((sec) => {
        const offset = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (currentScroll >= offset && currentScroll < offset + height) {
          current = sec.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // theme
  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  return (
    <>
      {/* PROGRESS BAR */}
      <div className="progress-bar"></div>

      <header className={`header ${hide ? "hide" : ""}`}>
        <div className="container header-inner">

          <div className="logo">Tran Van Loi</div>

          <nav className="nav">
            <a href="#about" className={active === "about" ? "active" : ""}>About</a>
            <a href="#education" className={active === "education" ? "active" : ""}>Education</a>
            <a href="#skills" className={active === "skills" ? "active" : ""}>Skills</a>
            <a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a>
            <a href="#languages" className={active === "languages" ? "active" : ""}>Languages</a>
            <a href="#achievements" className={active === "achievements" ? "active" : ""}>Achievements</a>
            <a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a>
          </nav>

          <div className="right">
            <div
              className={`menu-btn ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${open ? "active" : ""}`}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#education" onClick={() => setOpen(false)}>Education</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#languages" onClick={() => setOpen(false)}>Languages</a>
          <a href="#achievements" onClick={() => setOpen(false)}>Achievements</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </header>
    </>
  );
}
