import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Alex",
  description: "Areas of study and continued learning in AI and full-stack development.",
};

const learningAreas = [
  {
    number: "1",
    title: "Wien University of Technology (TU Wien)",
    description: "Started a Bachelor's degree in Informatics at TU Wien (2026–2029).\nBuilding foundations in algorithms and data structures.\nStudying software engineering and database systems.",
    topics: "Algorithms · Data Structures · Software Engineering · Databases",
  },
  {
    number: "2",
    title: "Odessa National Polytechnic University (ONPU)",
    description: "Studied Computer Science and Software Engineering (2024–2025).\nFocused on web development and backend systems.\nBuilt practical foundations in Python, HTML, CSS, JavaScript, and PostgreSQL.",
    topics: "Python · HTML · CSS · JavaScript · PostgreSQL",
  },
  {
    number: "3",
    title: "Odessa Lyceum № 117",
    description: "Completed secondary education at Odessa Lyceum № 117 (2014–2024).\nGraduated with honors.\nStudied mathematics, physics, English, and chemistry.",
    topics: "Mathematics · Physics · English · Chemistry",
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
      <section className="learning-list" aria-label="Learning areas">
        {learningAreas.map((area) => (
          <article className="learning-entry" key={area.number}>
            <span className="learning-number">{area.number}</span>
            <div>
              <h2>{area.title}</h2>
              <p>
                {area.description.split("\n").map((line, lineIndex, lines) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
              <span className="learning-topics">{area.topics}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}