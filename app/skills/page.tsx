import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Alex",
  description: "Alex’s languages, frameworks, tools, and AI tooling.",
};

const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["CSS 3", "HTML 5", "JavaScript ES6+", "Python", "SQL", "TailwindCSS", "TypeScript"] },
  { label: "Frontend", items: ["HTTP", "Node.js", "npm", "React", "Vue.js"] },
  { label: "Backend", items: ["Express.js", "FastAPI", "Neon", "Next.js", "Nginx", "PostgreSQL", "Prisma", "REST APIs"] },
  { label: "AI Tools", items: ["Claude", "GitHub Copilot", "LangChain", "LLMs", "NLP", "Ollama"] },
  { label: "Tools", items: ["Agile Scrum", "Chrome DevTools", "Docker", "Git", "GitHub", "Vercel"] },
  { label: "Testing", items: ["Jest", "React Testing Library", "Supertest", "Vitest"] },
  { label: "Communication", items: ["English (Work Proficiency)", "German (Work Proficiency)"] },
];

export default function SkillsPage() {
  return (
    <main className="page-wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">SKILLS</p>
        <h1>The tools I build with.</h1>
        <p>From React interfaces to Node.js and Python backends, databases, and the AI tooling that ties them together.</p>
      </header>
      <section className="learning-list" aria-label="Skills">
        {skillGroups.map((group, index) => (
          <article className="learning-entry" key={group.label}>
            <span className="learning-number">{index + 1}</span>
            <div>
              <h2>{group.label}</h2>
              <ul className="stack-list" aria-label={`${group.label} skills`}>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
