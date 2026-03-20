export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{float:"right"}}>✕</button>
        <img src={project.image} style={{width:"100%", borderRadius:"12px"}} />
        <h2 style={{marginTop:"12px"}}>{project.title}</h2>
        <p style={{color:"#94a3b8"}}>{project.detail}</p>
      </div>
    </div>
  );
}