import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Alex",
  description: "Alex’s work experience in AI model training, full-stack engineering, and frontend development.",
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
    period: "May 2026 – Present",
    location: "Vienna",
    bullets: [
      "Evaluated AI-generated responses for factual accuracy, relevance, clarity, and instruction compliance.",
      "Annotated and categorized text data according to project-specific guidelines to support model training and evaluation.",
      "Compared alternative AI-generated responses and ranked them based on quality, helpfulness, and correctness.",
      "Identified hallucinations, logical inconsistencies, biased language, and unsupported claims in model outputs.",
      "Created and refined prompts to test model behavior and improve response quality across different tasks.",
      "Reviewed annotation results for consistency and corrected labeling errors to maintain data quality.",
      "Followed confidentiality, data handling, and project-specific quality standards while working with AI training datasets.",
    ],
    skills: ["Prompt Engineering", "Data Annotation", "AI Model Evaluation", "Quality Assurance"],
  },
  {
    company: "Phobosys Team",
    role: "Full Stack Engineer (Part-time)",
    period: "May 2025 – May 2026",
    location: "Odessa",
    summary: "An international team developing products for US companies that specialize in web hosting.",
    bullets: [
      "Developed 15+ REST API endpoints using Node.js and Express.js for domain management, hosting plan configuration, and customer account operations.",
      "Designed and maintained 8 PostgreSQL tables for hosting accounts, domain records, service configurations, and customer-related data.",
      "Optimized 5 frequently executed SQL queries, reducing average execution time from 400 ms to 180 ms (a 60% improvement) through indexing and query optimization.",
      "Implemented backend validation, centralized error handling, and structured logging across 10+ API endpoints to improve service reliability and debugging.",
      "Automated 3 recurring server maintenance tasks using scripts, reducing manual execution time from 30 minutes to 10 minutes per run.",
      "Configured and troubleshot Nginx reverse proxy rules and SSL/TLS settings across 5+ test or hosted application environments.",
      "Containerized 3 application services using Docker, standardizing development environments and simplifying application setup.",
      "Investigated and resolved 25+ hosting and backend incidents involving HTTP errors, server configuration, application logs, and service connectivity.",
      "Created 30+ backend unit and integration tests using Jest and Supertest to verify API behavior, request validation, and error responses.",
      "Configured 3 CI/CD workflow stages using GitHub Actions for automated testing, build verification, and deployment checks.",
      "Conducted 7 deployment and troubleshooting procedures covering application configuration, environment variables, service restarts, and common hosting issues.",
    ],
    skills: ["Node.js", "Express.js", "PostgreSQL", "Docker", "Nginx", "Jest", "Supertest", "GitHub Actions"],
  },
  {
    company: "Odesa Polytechnic National University (OPNU)",
    role: "Frontend Developer (Internship)",
    period: "November 2023 – March 2025",
    location: "Odessa",
    bullets: [
      "Developed 20+ reusable React components using TypeScript, reducing duplicated UI code by 30% across 5 application modules.",
      "Built 15+ responsive pages using React, Next.js, and Tailwind CSS, supporting desktop, tablet, and mobile screen sizes.",
      "Implemented complex UI state management using React Hooks across major user workflows.",
      "Improved Largest Contentful Paint (LCP) from 3.2 to 2.1 seconds (a 34% improvement) through component rendering improvements, image optimization, and code splitting.",
      "Developed interactive data tables supporting 15,000+ records, including sorting, filtering, and search.",
      "Increased frontend test coverage from 45% to 80% by writing 100+ unit and component tests using Vitest and React Testing Library.",
      "Improved accessibility across 20+ UI components by implementing semantic HTML, keyboard navigation, and appropriate ARIA attributes.",
      "Translated 10+ Figma designs into responsive interfaces, collaborating with UI/UX designers to maintain visual consistency.",
      "Resolved 30+ frontend defects involving component behavior, responsive layouts, browser compatibility, and rendering issues.",
      "Participated in code reviews and Agile sprint planning, contributing an average of 10 pull requests per month.",
    ],
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vitest", "React Testing Library", "Accessibility", "Figma"],
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
