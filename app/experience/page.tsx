import type { Metadata } from "next";
import { projects } from "../projects";

export const metadata: Metadata = {
  title: "Experience | Alex",
  description: "Project-based AI product and full-stack software development experience.",
};

export default function ExperiencePage() {
  return (
    <main className="page-wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">EXPERIENCE</p>
        <h1>Building across the product stack.</h1>
        <p>My experience is rooted in taking software ideas from problem framing through implementation, with a focus on useful AI and clear product experiences.</p>
      </header>
      <section className="experience-list" aria-label="Project experience">
        {projects.map((project, index) => (
          <article className="experience-entry" key={project.name}>
            <span className="experience-index">0{index + 1}</span>
            <div className="experience-content">
              <p className="eyebrow">PROJECT EXPERIENCE</p>
              <h2>{project.name}</h2>
              <p className="experience-role">{project.type}</p>
              <p className="experience-description">{project.description}</p>
              <ul className="stack-list" aria-label={`Technology stack for ${project.name}`}>
                {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}