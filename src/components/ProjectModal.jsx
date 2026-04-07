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

        {/* ===== SLIDER (FIXED) ===== */}
        <div
          className="slider"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img src={project.image[index]} className="modal-img" />

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

        {/* ===== SCROLL CONTENT ===== */}
        <div className="modal-content-scroll">

          <h2>{project.title}</h2>
          <p className="subtitle">{project.subtitle}</p>
          <p className="detail">{project.detail}</p>

          {/* ===== TECH ===== */}
          <div className="tech-section">

            {project.backend && (
              <div className="tech-group">
                <h4>⚙️ Backend</h4>
                <div className="modal-tech scroll">
                  {project.backend.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            )}

            {project.frontend && project.frontend.length > 0 && (
              <div className="tech-group">
                <h4>🎨 Frontend</h4>
                <div className="modal-tech scroll">
                  {project.frontend.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* ===== FEATURES ===== */}
          {project.features && (
            <div className="features">
              <h4>🚀 Features</h4>
              <ul>
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="modal-actions">
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noreferrer">
                💻 GitHub
              </a>
            )}

            {project.demo && project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                🚀 Demo
              </a>
            )}
          </div>


        </div>
      </div>
    </div>
  );
}
