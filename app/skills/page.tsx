import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Oleksandr’s languages, frameworks, tools, and AI tooling.",
};

type SkillGroup = {
  label: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  { label: "Programming languages", items: ["CSS 3", "HTML 5", "JavaScript ES6+", "Python", "SQL", "TypeScript"] },
  { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Vue.js"] },
  { label: "Backend", items: ["Express.js", "FastAPI", "HTTP", "Node.js", "Nginx", "PostgreSQL", "Prisma", "REST APIs"] },
  { label: "AI tools", items: ["Claude", "GitHub Copilot", "LangChain", "Llama 3.1", "LLMs", "NLP", "Ollama", "Qwen3 8B"] },
  { label: "Tools", items: ["Agile Scrum", "Chrome DevTools", "Docker", "Git", "GitHub", "Neon", "npm", "Vercel"] },
  { label: "Testing", items: ["Jest", "React Testing Library", "Supertest", "Vitest"] },
];

const spokenLanguages = ["Ukrainian (Native)", "English (Work Proficiency)", "German (Work Proficiency)"];

const coreSkills = new Set(["TypeScript", "Python", "React", "Next.js", "Node.js", "PostgreSQL", "Claude", "GitHub Copilot", "Chrome DevTools", "Git", "Vitest"]);

export default function SkillsPage() {
  return (
    <main className="page-wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">SKILLS</p>
        <h1>The tools I build with.</h1>
        <p>From React interfaces to Node.js and Python backends, databases, and the AI tooling that ties them together.</p>
      </header>
      <p className="skills-legend"><span aria-hidden="true" /> Core stack: what I reach for first</p>
      <section className="skills-grid" aria-label="Skills">
        {skillGroups.map((group, index) => {
          const headingId = `skills-${index + 1}`;
          return (
            <article className="skill-card" key={group.label}>
              <p className="eyebrow">{index + 1}</p>
              <h2 id={headingId}>{group.label}</h2>
              <ul className="stack-list stack-list--lg" aria-labelledby={headingId}>
                {[...group.items].sort((a, b) => Number(coreSkills.has(b)) - Number(coreSkills.has(a))).map((item) => (
                  <li key={item} className={coreSkills.has(item) ? "is-core" : undefined}>{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>
      <section className="skills-spoken" aria-labelledby="skills-spoken">
        <h2 id="skills-spoken" className="eyebrow">Spoken languages</h2>
        <ul className="stack-list stack-list--lg">
          {spokenLanguages.map((language) => <li key={language}>{language}</li>)}
        </ul>
      </section>
    </main>
  );
}
