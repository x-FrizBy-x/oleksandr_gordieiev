import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Alex",
  description: "Alex’s education in informatics at TU Wien.",
};

type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  location: string;
};

const educationEntries: EducationEntry[] = [
  {
    institution: "TU Wien",
    degree: "Bachelor in Informatics",
    period: "October 2025 – July 2028",
    location: "Vienna, Austria",
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
              <p className="eyebrow">{entry.period} · {entry.location}</p>
              <h2>{entry.institution} — {entry.degree}</h2>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
