import { useState } from "react";

export function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);

  if (!project) return null;

  const next = () => {
    setIndex((index + 1) % project.image.length);
  };

  const prev = () => {
    setIndex((index - 1 + project.image.length) % project.image.length);
  };

  // swipe mobile
  let startX = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) next();
    if (endX - startX > 50) prev();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-box project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>✕</button>

        {/* ===== SLIDER ===== */}
        <div
          className="slider"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img src={project.image[index]} className="modal-img" />

          {/* arrows */}
          <button className="slider-btn prev" onClick={prev}>‹</button>
          <button className="slider-btn next" onClick={next}>›</button>
        </div>

        {/* dots */}
        <div className="dots">
          {project.image.map((_, i) => (
            <span
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>

        {/* CONTENT */}
        <h2>{project.title}</h2>
        <p className="subtitle">{project.subtitle}</p>
        <p className="detail">{project.detail}</p>

        <div className="modal-tech">
          {project.fullTech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
