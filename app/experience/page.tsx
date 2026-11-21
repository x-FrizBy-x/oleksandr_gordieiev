import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Oleksandr’s work experience in AI model training, full-stack engineering, and frontend development.",
};

type WorkEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  bullets: string[];
  skills: string[];
};

const workEntries: WorkEntry[] = [
  {
    company: "Data Annotation",
    role: "AI Trainer (Freelancer)",
    period: "May 2026 – November 2026",
    location: "Remote",
    bullets: [
      "Evaluate LLM outputs for accuracy, relevance, clarity, and instruction compliance.",
      "Compare and rank alternative model responses on quality, helpfulness, and relevance to produce preference data.",
      "Identify hallucinations, reasoning errors, biased language, and unsupported claims in AI-generated content.",
      "Annotate and review NLP text datasets to project guidelines, correcting labeling errors to keep data consistent.",
      "Write test prompts to probe model behavior and capabilities; run and evaluate locally hosted models with Ollama.",
      "Follow strict confidentiality and data-handling standards across all assigned projects.",
    ],
    skills: ["LLM Evaluation", "Prompt Engineering", "NLP Datasets", "Ollama"],
  },
  {
    company: "Phobosys Team",
    role: "Full Stack Engineer (Part-time)",
    period: "May 2025 – May 2026",
    location: "Remote",
    summary: "An international team developing products for US companies that specialize in web hosting.",
    bullets: [
      "Built REST API endpoints in Node.js and Express.js for domain management, hosting plans, and customer accounts.",
      "Designed and maintained the PostgreSQL schema with Prisma ORM for hosting accounts, domains, service configurations, and customer data.",
      "Cut average execution time of frequently run SQL queries from 400 ms to 180 ms (55%) through indexing and query optimization.",
      "Added backend validation, centralized error handling, and structured logging across the API.",
      "Wrote unit and integration tests with Jest and Supertest covering API functionality, request validation, and error handling.",
      "Configured GitHub Actions CI/CD pipelines for automated testing, build verification, and deployment checks.",
      "Containerized services with Docker and configured an Nginx reverse proxy and SSL/TLS across multiple environments.",
      "Automated recurring server maintenance with Bash scripts, reducing run time from 30 to 10 minutes.",
      "Resolved hosting and backend incidents (HTTP errors, server configuration, logs, connectivity) and handled production deployments.",
      "Worked in an Agile team via Git and GitHub with code reviews and issue tracking.",
    ],
    skills: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Docker", "Nginx", "Bash", "GitHub Actions", "Jest", "Supertest"],
  },
  {
    company: "Odesa Polytechnic National University (OPNU)",
    role: "Frontend Developer (Internship)",
    period: "November 2023 – March 2025",
    location: "Odesa, Ukraine",
    bullets: [
      "Built reusable React and TypeScript components, reducing duplicated UI code by 30%.",
      "Delivered responsive pages with Next.js and Tailwind CSS for desktop, tablet, and mobile.",
      "Translated Figma designs into responsive interfaces, working with UI/UX designers to keep visual consistency.",
      "Implemented complex UI state management with React Hooks across data-heavy views.",
      "Improved Largest Contentful Paint from 3.2 s to 2.1 s through rendering optimizations, image optimization, and code splitting.",
      "Developed interactive data tables for 11,800 records with sorting, filtering, and search, integrated with backend REST APIs.",
      "Raised frontend test coverage from 45% to 80% with Vitest and React Testing Library.",
      "Improved component accessibility through semantic HTML, keyboard navigation, and ARIA attributes.",
      "Debugged and fixed frontend defects (layout, browser compatibility, rendering) using Chrome DevTools.",
      "Participated in Scrum ceremonies, sprint planning, JIRA tracking, and Git-based code reviews.",
    ],
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vitest", "React Testing Library", "Accessibility", "Figma", "JIRA"],
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
              <p className="eyebrow">{entry.period} · {entry.location}</p>
              <h2>{entry.company} — {entry.role}</h2>
              {entry.summary && <p className="entry-summary">{entry.summary}</p>}
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
