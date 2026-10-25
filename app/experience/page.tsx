import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Alex",
  description: "Alex’s work experience in AI model training, backend, and frontend software development.",
};

type WorkEntry = {
  company: string;
  role: string;
  period?: string;
  bullets: string[];
  skills: string[];
};

const workEntries: WorkEntry[] = [
  {
    company: "Data Annotation",
    role: "AI Trainer",
    period: "May 2026 – Present",
    bullets: [
      "Evaluate AI-generated responses for accuracy, relevance, and quality.",
      "Write, edit, and review text used in AI model training.",
      "Provide structured feedback to improve model outputs and performance.",
    ],
    skills: ["Prompt Engineering", "Data Annotation", "AI Model Evaluation", "Quality Assurance"],
  },
  {
    company: "Österreichische Staatsdruckerei",
    role: "Software Developer",
    bullets: [
      "Contributed to the development and maintenance of backend services, REST APIs, and frontend components for web applications.",
      "Implemented and tested software features that improved UX, following established coding standards and project requirements.",
      "Collaborated with the development team in an Agile Scrum environment, participating in sprint planning and stand-ups.",
    ],
    skills: ["Backend Development", "Frontend Development", "REST APIs", "Agile Scrum"],
  },
  {
    company: "Odessa National Polytechnic University",
    role: "Frontend Intern",
    bullets: [
      "Improved university website performance by optimizing frontend assets and page-loading behavior with JavaScript, reducing initial load time by 20%.",
      "Developed and tested software features for an academic database with Python and PostgreSQL.",
      "Contributed to the design and implementation of application components based on the university’s needs, collaborating with a supervisor and team members.",
    ],
    skills: ["Frontend Optimization", "Python Development", "PostgreSQL Database Management", "Software Testing", "Git Version Control"],
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
      <section className="experience-list" aria-label="Work experience">
        {workEntries.map((entry, index) => (
          <article className="experience-entry" key={`${entry.company}-${entry.role}`}>
            <span className="experience-index">{index + 1}</span>
            <div className="experience-content">
              {entry.period && <p className="eyebrow">{entry.period}</p>}
              <h2>{entry.company} — {entry.role}</h2>
              <ul className="entry-bullets">
                {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <ul className="stack-list" aria-label={`Skills used at ${entry.company}`}>
                {entry.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
