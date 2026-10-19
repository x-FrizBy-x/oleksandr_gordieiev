import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Alex",
  description: "Project-based AI product and full-stack software development experience.",
};

const workAreas = [
  {
    title: "Data Annotation — AI Trainer",
    description: "Evaluate AI-generated responses for accuracy, relevance and quality. Write, edit and review text used in AI model training while provide structured feedback to improve model outputs and performance. (May 2026 - Present)",
    topics: "Prompt Engineering · Data Annotation · AI Model Evaluation · Quality Assurance",
  },
  {
    title: "Österreichische Staatsdruckerei — Software Developer",
    description: " Contributed to the development and maintenance of backend services, REST APIs, and frontend components for web applications. Implemented and tested software features improving UX following established coding standards and project requirements while collaborating with the development team in an Agile SCRUM environment, participating in sprint planning and stand-ups.",
    topics: "Backend Development · Frontend Development · REST APIs · Agile SCRUM",
  },
  {
    title: "Odessa National Polytechnic University — Frontend Intern",
    description: "Improved university website performance by optimizing frontend assets and page-loading behavior, reducing initial load time by 20% using Javascript. Developed and tested software features for an academic database with Python and PostgreSQL. Contributed to the design and implementation of application components based on unversity's needs while collaborating with a supervisor and team members to deliver the best possible solution.",
    topics: "Frontend Optimization · Python Development · PostgreSQL Database Management · Software Testing · Git Version Control",
  },
];

export default function ExperiencePage() {
  return (
    <main className="page-wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">EXPERIENCE</p>
        <h1>Building across the product stack.</h1>
        <p>My experience is rooted in taking software ideas from problem framing through implementation, with a focus on useful AI and clear product experiences.</p>
      </header>
      <section className="experience-list" aria-label="Project experience">
        {workAreas.map((area, index) => (
          <article className="experience-entry" key={index}>
            <span className="experience-index">{index + 1}</span>
            <div className="experience-content">
              <p className="eyebrow">WORK EXPERIENCE</p>
              <h2>{area.title}</h2>
              <p className="experience-role">{area.description}</p>
              <ul className="stack-list" aria-label={`Technology stack for ${area.title}`}>
                {area.topics.split(" · ").map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}