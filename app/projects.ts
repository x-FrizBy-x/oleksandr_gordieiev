export type Project = {
  name: string;
  type: string;
  description: string;
  stack: string[];
  previewLabel: string;
  previewTitle: string;
  previewRows: [string, string][];
  previewInsight: string;
};

export const projects: Project[] = [
  {
    name: "Jelaksy",
    type: "AI project manager",
    description:
      "An AI-powered SaaS platform that transforms project ideas into a structured workflow, with clear priorities and practical next steps.",
    stack: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Neon", "Prisma", "Qwen3 8B", "LangChain", "Ollama", "Unsloth", "AWS", "Docker", "Vercel"],
    previewLabel: "MONDAY · PROJECT OVERVIEW",
    previewTitle: "Product launch",
    previewRows: [["Finalize launch plan", "Today"], ["Review onboarding flow", "2:30 PM"]],
    previewInsight: "Two tasks need your attention today.",
  },
  {
    name: "Lurkk",
    type: "AI calendar assistant",
    description:
      "An AI calendar assistant that converts natural-language requests into calendar actions: creating, deleting, and rescheduling events. Reached ~70% intent accuracy on 50 test requests.",
    stack: ["Python", "FastAPI", "Llama 3.1", "Ollama", "Google Calendar API", "OAuth 2.0"],
    previewLabel: "YOUR WEEK · CALENDAR ASSISTANT",
    previewTitle: "Just say what to change.",
    previewRows: [["Move my dentist appointment to Friday", ""], ["Event rescheduled", "Fri 10:00 AM"]],
    previewInsight: "Your calendar, updated from a single sentence.",
  },
  {
    name: "UniManage",
    type: "Unified package manager",
    description:
      "A safety-first desktop app that unifies inventory and updates for 8 package managers (APT, Flatpak, Snap, mise, npm, pnpm, pipx, uv), with previews, explicit confirmation, and SQLite-backed operation history.",
    stack: ["Rust", "Tauri 2", "React", "TypeScript", "Tailwind CSS", "SQLite"],
    previewLabel: "INVENTORY · 8 PACKAGE MANAGERS",
    previewTitle: "Every update, reviewed first.",
    previewRows: [["Scan all package managers", "Done"], ["Review batch update", "Preview"]],
    previewInsight: "Nothing runs until you confirm it.",
  },
];