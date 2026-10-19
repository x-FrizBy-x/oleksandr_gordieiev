import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Alex",
  description: "Areas of study and continued learning in AI and full-stack development.",
};

const learningAreas = [
  {
    number: "01",
    title: "AI product development",
    description: "Integrating language models into practical workflows, with attention to the experience around the model as well as the model itself.",
    topics: "LLM integration · Ollama · AI-assisted workflows",
  },
  {
    number: "02",
    title: "Full-stack systems",
    description: "Building web products across the client, server, data layer, and the APIs that connect them.",
    topics: "Next.js · TypeScript · Node.js · PostgreSQL · Prisma",
  },
  {
    number: "03",
    title: "Product design and usability",
    description: "Turning complex tasks into understandable interfaces that help people make progress with less friction.",
    topics: "Product thinking · Interaction design · Workflow clarity",
  },
];

export default function EducationPage() {
  return (
    <main className="page-wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">EDUCATION & CONTINUED LEARNING</p>
        <h1>Learning by making things work.</h1>
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