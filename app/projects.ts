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
      "Turns project context into clear priorities and practical next steps, so teams can spend less time organizing work and more time moving it forward.",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "Ollama API"],
    previewLabel: "MONDAY · PROJECT OVERVIEW",
    previewTitle: "Product launch",
    previewRows: [["Finalize launch plan", "Today"], ["Review onboarding flow", "2:30 PM"]],
    previewInsight: "Two tasks need your attention today.",
  },
  {
    name: "Lurkk",
    type: "AI scheduling agent with NLP",
    description:
      "Understands scheduling requests in natural language and helps turn the back-and-forth of finding time into a simple conversation.",
    stack: ["HTML", "CSS", "JavaScript", "Python", "Google Calendar API"],
    previewLabel: "YOUR WEEK · SMART SCHEDULING",
    previewTitle: "Find a little focus time.",
    previewRows: [["Find 30 min with Sam", "Tomorrow"], ["Best match", "10:30 AM"]],
    previewInsight: "A time that works for everyone, found.",
  },
];