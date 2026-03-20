export function ProjectCard({ project, onClick }) {
  return (
    <div className="card" onClick={() => onClick(project)}>
      <div style={{overflow:"hidden"}}>
        <img
          src={project.image}
          style={{ width: "100%", height: "200px", objectFit: "cover", transition:"0.4s" }}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
        />
      </div>

      <div style={{ padding: "18px" }}>
        <h3 style={{ marginBottom: "8px" }}>{project.title}</h3>
        <p style={{ color: "#94a3b8" }}>{project.description}</p>
      </div>
    </div>
  );
}