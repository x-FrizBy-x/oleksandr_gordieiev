import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "Oleksandr’s education in informatics at TU Wien.",
};

type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  bullets?: string[];
};

const educationEntries: EducationEntry[] = [
  {
    institution: "TU Wien",
    degree: "Bachelor in Informatics",
    period: "October 2025 – July 2028",
    location: "Vienna, Austria",
    // TODO: verify these against the actual TU Wien curriculum.
    bullets: [
      "Programming fundamentals and software design",
      "Algorithms and data structures",
      "Discrete mathematics and algebra",
      "Analysis and calculus",
      "Theoretical computer science and logic",
    ],
  },
  // TODO: fill in — template entry with placeholders; replace or delete before publishing.
  {
    institution: "Odesa Lyceum №117",
    degree: "Secondary education",
    period: "September 2014 – June 2023",
    location: "Odesa, Ukraine",
    bullets: [
      "Participated and placed in regional mathematics, physics and chemistry competitions",
      "Organized and led student projects and activities",
      "Graduated with honors. GPA: 11.2/12.0",
    ],
  },
];

export default function EducationPage() {
  return (
    <main className="page-wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">EDUCATION</p>
        <h1>I learn by making things work.</h1>
        <p>I’m currently studying informatics at TU Wien alongside my professional work.</p>
      </header>
      <section className="learning-list" aria-label="Education">
        {educationEntries.map((entry, index) => (
          <article className="learning-entry" key={entry.institution}>
            <span className="learning-number">{index + 1}</span>
            <div>
              <p className="eyebrow">{entry.period} · {entry.location}</p>
              <h2>{entry.institution} — {entry.degree}</h2>
              {entry.bullets && (
                <ul className="entry-bullets">
                  {entry.bullets.map((bullet, bulletIndex) => <li key={`${bullet}-${bulletIndex}`}>{bullet}</li>)}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
