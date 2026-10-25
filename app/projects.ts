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
    stack: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Qwen3 8B", "LangChain", "Docker", "Vercel"],
    previewLabel: "MONDAY · PROJECT OVERVIEW",
    previewTitle: "Product launch",
    previewRows: [["Finalize launch plan", "Today"], ["Review onboarding flow", "2:30 PM"]],
    previewInsight: "Two tasks need your attention today.",
  },
  {
    name: "Lurkk",
    type: "AI calendar assistant",
    description:
      "An AI calendar assistant that converts natural-language requests into calendar actions: creating, deleting, and rescheduling events.",
    stack: ["Python", "FastAPI", "Llama 3.1", "Google Calendar API", "OAuth 2.0"],
    previewLabel: "YOUR WEEK · CALENDAR ASSISTANT",
    previewTitle: "Just say what to change.",
    previewRows: [["Move my dentist appointment to Friday", ""], ["Event rescheduled", "Fri 10:00 AM"]],
    previewInsight: "Your calendar, updated from a single sentence.",
  },
];