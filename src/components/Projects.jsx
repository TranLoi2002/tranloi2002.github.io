import { useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">

        <h2 className="section-title">🚀 Projects</h2>

        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={setSelected} />
          ))}
        </div>

        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />

      </div>
    </section>
  );
}
