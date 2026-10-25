import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Alex",
  description: "How Alex approaches AI product development and full-stack software.",
};

const principles = ["Start with the problem, not the technology.", "Build the product and the system behind it.", "Make the result clear, useful, and ready to grow."];

export default function AboutPage() {
  return (
    <main className="page-wrap page-content">
      <header className="page-intro">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h1>I like making complex things feel simple.</h1>
        <p>I’m Alex, a full-stack engineer with AI expertise and three years of combined experience across React frontends, Node.js backends, and web hosting infrastructure.</p>
      </header>
      <div className="about-grid">
        <aside className="about-aside">
          <figure className="about-portrait">
            <div className="about-portrait-frame">
              <Image
                src="/photo.jpg"
                alt="Portrait of Alex"
                width={709}
                height={1000}
                sizes="(max-width: 600px) 260px, 260px"
                loading="eager"
              />
            </div>
            <figcaption>Alex · AI & full-stack software developer</figcaption>
          </figure>
        </aside>
        <div className="about-copy">
          <h2>One person, from the first sketch to the working product.</h2>
          <p>I build reusable UI components, design REST APIs, and optimize PostgreSQL queries, working with TypeScript, Next.js, Express.js, Docker, and Git-based and AI-assisted workflows.</p>
          <p>My approach is practical: use AI where it genuinely improves a workflow, build the supporting software carefully, and keep the result understandable and ready to grow.</p>
          <div className="principles" aria-label="Development principles">
            {principles.map((principle, index) => <div className="principle" key={principle}><span>{index + 1}</span>{principle}</div>)}
          </div>
        </div>
      </div>
    </main>
  );
}