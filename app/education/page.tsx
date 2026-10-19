import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Alex",
  description: "Areas of study and continued learning in AI and full-stack development.",
};

const learningAreas = [
  {
    number: "1",
    title: "Odessa Lyceum № 117",
    description: "Finished the secondary education with honors.",
    topics: "Mathematics · Physics · English · Chemistry",
  },
  {
    number: "2",
    title: "Odessa National Polytechnic University (ONPU)",
    description: "Studied Computer Science and Software Engineering, focusing on web development and backend systems.",
    topics: "Python · HTML · CSS · JavaScript · PostgreSQL",
  },
  {
    number: "3",
    title: "Wien University of Technology (TU Wien)",
    description: "Entered the Bachelor's program in Informatics",
    topics: "Algorithms · Data Structures · Software Engineering · Databases",
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
              <p>{area.description}</p>
              <span className="learning-topics">{area.topics}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}