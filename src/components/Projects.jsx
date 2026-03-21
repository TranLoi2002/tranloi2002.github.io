import { useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section container">
      <h2 style={{textAlign:"center", fontSize:"32px"}}>Projects</h2>

      <div className="grid">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} onClick={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}