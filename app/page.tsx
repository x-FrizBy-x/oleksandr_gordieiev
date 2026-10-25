import Link from "next/link";
import ProjectCard from "./components/project-card";
import { projects } from "./projects";

export default function HomePage() {
  return (
    <main>
      <section className="home-hero page-wrap" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" /> AI & full-stack software developer</p>
          <h1 id="home-title">Thoughtful software, built all the way through.</h1>
          <p className="hero-description">
            I’m Alex. I turn useful ideas into clear, capable products, from the first product question to the details that make software feel right.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/projects">Explore my projects <span aria-hidden="true">↗</span></Link>
            <Link className="quiet-link" href="/about">A little about me <span aria-hidden="true">→</span></Link>
          </div>
        </div>

        <div className="hero-art" role="img" aria-label="A preview of an AI-assisted project workspace">
          <div className="art-orbit art-orbit-one" />
          <div className="art-orbit art-orbit-two" />
          <div className="workspace-window">
            <div className="workspace-bar"><span className="workspace-dots"><i /><i /><i /></span><span>jelaksy / overview</span><span className="workspace-menu">•••</span></div>
            <div className="workspace-content">
              <div className="workspace-heading"><span>MONDAY, OCTOBER 19</span><strong>Good morning, Alex</strong><small>Here’s what’s moving today.</small></div>
              <div className="workspace-task"><span className="task-icon task-done">✓</span><span><b>Finalize launch plan</b><small>Product launch · Today</small></span><span className="task-check">Done</span></div>
              <div className="workspace-task"><span className="task-icon">2</span><span><b>Review onboarding flow</b><small>Product launch · 2:30 PM</small></span><span className="task-more">···</span></div>
              <div className="workspace-insight"><span className="insight-mark">✳</span><span><small>JELAKSY AI</small><b>Two tasks are ready for your attention.</b></span><span aria-hidden="true">↗</span></div>
            </div>
          </div>
          <span className="art-caption">A clearer view of the work.</span>
        </div>
      </section>

      <section className="home-work page-wrap" aria-labelledby="featured-title">
        <div className="section-heading">
          <div><p className="eyebrow">SELECTED WORK</p><h2 id="featured-title">Built for real life.</h2></div>
          <Link className="quiet-link" href="/projects">All projects <span aria-hidden="true">→</span></Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
        </div>
      </section>

      <section className="home-note">
        <div className="page-wrap note-inner">
          <p>Good software makes the complicated feel clear.</p>
          <Link className="quiet-link" href="/contact">Have something in mind? <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}