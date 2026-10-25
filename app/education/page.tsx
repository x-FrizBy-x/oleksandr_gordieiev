import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Alex",
  description: "Alex’s education in informatics, computer science, and software engineering.",
};

type EducationEntry = {
  institution: string;
  period: string;
  bullets: string[];
  topics: string[];
};

const educationEntries: EducationEntry[] = [
  {
    institution: "TU Wien (Vienna University of Technology)",
    period: "2026 – 2029",
    bullets: [
      "Bachelor’s degree in Informatics, in progress.",
      "Building foundations in algorithms and data structures.",
      "Studying software engineering and database systems.",
    ],
    topics: ["Algorithms", "Data Structures", "Software Engineering", "Databases"],
  },
  {
    institution: "Odessa National Polytechnic University (ONPU)",
    period: "2024 – 2025",
    bullets: [
      "Studied Computer Science and Software Engineering.",
      "Focused on web development and backend systems.",
      "Built practical foundations in Python, HTML, CSS, JavaScript, and PostgreSQL.",
    ],
    topics: ["Python", "HTML", "CSS", "JavaScript", "PostgreSQL"],
  },
  {
    institution: "Odessa Lyceum № 117",
    period: "2014 – 2024",
    bullets: [
      "Completed secondary education, graduating with honors.",
      "Studied mathematics, physics, English, and chemistry.",
    ],
    topics: ["Mathematics", "Physics", "English", "Chemistry"],
  },
];

export default function EducationPage() {
  return (
    <main className="page-wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">EDUCATION & CONTINUED LEARNING</p>
        <h1>I learn by making things work.</h1>
        <p>I keep developing my skills through building, experimenting, and studying the systems behind useful software.</p>
      </header>
      <section className="learning-list" aria-label="Education">
        {educationEntries.map((entry, index) => (
          <article className="learning-entry" key={entry.institution}>
            <span className="learning-number">{index + 1}</span>
            <div>
              <p className="eyebrow">{entry.period}</p>
              <h2>{entry.institution}</h2>
              <ul className="entry-bullets">
                {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <span className="learning-topics">{entry.topics.join(" · ")}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
