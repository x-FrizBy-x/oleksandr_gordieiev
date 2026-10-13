"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const projects = [
  {
    name: "Jelaksy",
    type: "AI project manager",
    description:
      "Turns project context into clear priorities and practical next steps, so teams can spend less time organizing work and more time moving it forward.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Ollama API",
    ],
  },
  {
    name: "Lurkk",
    type: "AI scheduling agent with NLP",
    description:
      "Understands scheduling requests in natural language and helps turn the back-and-forth of finding time into a simple conversation.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Google Calendar API",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Page() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Alex, home">
          alex<span>.dev</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <motion.p
              className="eyebrow hero-eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="status-dot" /> AI & Full-Stack Software Developer
            </motion.p>
            <motion.h1
              id="hero-title"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.18 } },
              }}
            >
              <motion.span variants={fadeUp}>I build AI</motion.span>
              <motion.span variants={fadeUp} className="headline-accent">
                <em>that works.</em>
              </motion.span>
              <motion.span variants={fadeUp}>End to end.</motion.span>
            </motion.h1>
            <motion.div
              className="hero-bottom"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <p>
                I’m Alex. I take useful ideas from AI prototype to polished,
                full-stack software people can actually use.
              </p>
              <a className="text-link" href="#work">
                Explore my projects <span aria-hidden="true">↓</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96, rotate: 1.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-console" aria-label="An illustration of an AI-assisted project workflow">
              <div className="console-topbar">
                <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
                <span>jelaksy / agent-flow.ts</span>
                <span className="console-live"><span /> LIVE</span>
              </div>
              <div className="console-body">
                <div className="console-context">
                  <span className="console-label">PROJECT CONTEXT</span>
                  <strong>Product launch</strong>
                  <span className="context-meta">12 tasks <i /> 4 collaborators</span>
                </div>
                <div className="console-connector" aria-hidden="true"><span>↓</span></div>
                <div className="console-agent">
                  <span className="agent-glyph" aria-hidden="true">✳</span>
                  <span className="agent-copy"><strong>Jelaksy AI</strong><small>Finding the next best steps</small></span>
                  <span className="agent-signal" aria-label="Working"><i /><i /><i /></span>
                </div>
                <div className="console-output">
                  <span className="console-label">A CLEARER NEXT STEP</span>
                  <strong>Review the launch checklist</strong>
                  <div className="output-meta"><span>AI PRIORITIZED</span><span>JUST NOW</span></div>
                </div>
              </div>
            </div>
            <span className="demo-disclaimer hero-demo-disclaimer">Not an actual Demo</span>
          </motion.div>
          <a className="hero-side-note" href="#about">HOW I BUILD <span aria-hidden="true">↓</span></a>
        </section>

        <div className="ticker" aria-label="AI ideas, full-stack engineering, useful products">
          <div className="ticker-track" aria-hidden="true">
            {Array.from({ length: 4 }, (_, index) => (
              <span className="ticker-group" key={index}>
                AI ideas <span className="ticker-star">●</span> Full-stack engineering <span className="ticker-star">●</span> Useful products <span className="ticker-star">●</span>
              </span>
            ))}
          </div>
        </div>

        <section className="work section-wrap" id="work" aria-labelledby="work-title">
          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <div>
              <p className="eyebrow">AI PRODUCTS, BUILT END TO END</p>
              <h2 id="work-title">Things I’m <em>building.</em></h2>
            </div>
            <p className="section-aside">Practical AI for the everyday work<br />that could be a little easier.</p>
          </motion.div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={fadeUp}
                transition={{ duration: 0.65, delay: index * 0.12 }}
              >
                <motion.div
                  className={`product-preview ${index === 0 ? "jelaksy-preview" : "lurkk-preview"}`}
                  aria-hidden="true"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.35 }}
                >
                  {index === 0 ? (
                    <div className="preview-window jelaksy-window">
                      <div className="preview-topbar"><span className="preview-brand"><b>j</b> jelaksy</span><span>MY WORKSPACE</span><span className="preview-avatar">A</span></div>
                      <div className="jelaksy-dashboard">
                        <aside className="preview-sidebar"><span>OVERVIEW</span><i /><i /><i /><i /></aside>
                        <div className="preview-main">
                          <span className="preview-kicker">MONDAY · PROJECT OVERVIEW</span>
                          <strong className="preview-heading">Product launch</strong>
                          <div className="preview-progress"><span /><span /></div>
                          <div className="preview-task"><i className="task-check">✓</i><span>Finalize launch plan</span><small>TODAY</small></div>
                          <div className="preview-task"><i /><span>Review onboarding flow</span><small>2:30 PM</small></div>
                          <div className="preview-insight"><span>✳ JELAKSY AI</span><b>Two tasks need your attention today.</b></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="preview-window lurkk-window">
                      <div className="preview-topbar"><span className="preview-brand"><b>l</b> lurkk</span><span>SMART SCHEDULING</span><span className="preview-avatar">A</span></div>
                      <div className="lurkk-dashboard">
                        <span className="preview-kicker">YOUR WEEK · OCT 20–24</span>
                        <strong className="preview-heading">Find time to focus.</strong>
                        <div className="calendar-row"><span>MON <b>20</b></span><span>TUE <b>21</b></span><span className="calendar-active">WED <b>22</b></span><span>THU <b>23</b></span><span>FRI <b>24</b></span></div>
                        <div className="schedule-request"><span className="request-icon">●</span><span><small>YOU SAID</small><b>“Find 30 min with Sam tomorrow”</b></span></div>
                        <div className="schedule-result"><span><i /> BEST MATCH · TOMORROW</span><b>10:30 – 11:00 AM</b><span className="result-action">Confirm time <i>↗</i></span></div>
                      </div>
                    </div>
                  )}
                </motion.div>
                <p className="demo-disclaimer project-demo-disclaimer">Not an actual Demo</p>
                <div className="project-meta">
                  <div>
                    <div className="project-title-row"><h3>{project.name}</h3></div>
                    <p className="project-type">{project.type}</p>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="stack-list" aria-label={`Suggested technology stack for ${project.name}`}>
                  {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="about-inner section-wrap">
            <motion.div
              className="about-label"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
            >
              <span className="eyebrow">HOW I APPROACH A BUILD</span>
              <span className="about-doodle" aria-hidden="true">&lt;/&gt;</span>
            </motion.div>
            <motion.div
              className="about-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <h2 id="about-title">I work across the whole <em>stack.</em></h2>
              <p>
                I’m Alex, an AI and full-stack software developer. I like
                taking a problem from the first product question through the
                data model, AI integrations, backend, and the interface people
                actually use.
              </p>
              <p>
                My focus is practical: use AI where it makes a workflow better,
                build the supporting software carefully, and keep the result
                useful, understandable, and ready to grow.
              </p>
              <div className="build-principles"><span><b>1</b> Find the real problem</span><span><b>2</b> Build the whole system</span><span><b>3</b> Ship something useful</span></div>
            </motion.div>
            <div className="about-stamp" aria-label="Problem, system, product">PROBLEM <span>→</span> SYSTEM <span>→</span> PRODUCT</div>
          </div>
        </section>

        <section className="contact-band" id="contact" aria-labelledby="contact-title">
          <div className="contact section-wrap">
          <motion.p
            className="eyebrow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            HAVE A PROBLEM WORTH SOLVING?
          </motion.p>
          <motion.h2
            id="contact-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
          >
            Let’s build<br /><em>something useful.</em>
          </motion.h2>
          <a className="contact-button" href="mailto:alexander.zgames@gmail.com">
            <span>Start a conversation</span><span aria-hidden="true">↗</span>
          </a>
          <p className="contact-note">alexander.zgames@gmail.com</p>
          <div className="contact-socials" aria-label="Social profiles">
            <a href="https://www.linkedin.com/in/oleksandr-gordieiev-swe17/" target="_blank" rel="noreferrer" aria-label="Alex on LinkedIn">
              <FaLinkedinIn aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/x-FrizBy-x" target="_blank" rel="noreferrer" aria-label="Alex on GitHub">
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top">alex<span>.dev</span></a>
        <span>AI & full-stack software developer</span>
        <a href="#top">Back to the top ↑</a>
        <span className="footer-year">© 2026</span>
      </footer>
    </main>
  );
}