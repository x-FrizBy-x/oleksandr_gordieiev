import type { Metadata } from "next";
import ProjectCard from "../components/project-card";
import { projects } from "../projects";

export const metadata: Metadata = {
  title: "Projects | Alex",
  description: "Browse Alex’s AI and full-stack software projects.",
};

export default function ProjectsPage() {
  return (
    <main className="page-wrap page-content work-page">
      <header className="page-intro">
        <p className="eyebrow">SELECTED PROJECTS</p>
        <h1>Ideas, shaped into software.</h1>
        <p>Products exploring how thoughtful AI and careful engineering can make the everyday work of planning and scheduling a little easier.</p>
      </header>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
    </main>
  );
}