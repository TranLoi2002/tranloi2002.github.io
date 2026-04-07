export function ProjectCard({ project, onClick }) {
  return (
    <div
      className={`project-card ${project.highlight ? "highlight" : ""}`}
      onClick={() => onClick(project)}
    >
      <div className="project-image">
        <img src={project.image[0]} alt={project.title} />
        <div className="overlay">View Details →</div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="subtitle">{project.subtitle}</p>
        <p className="desc">{project.description}</p>

        <div className="tech-list">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
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
  );
}
