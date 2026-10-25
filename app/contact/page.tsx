import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Oleksandr",
  description: "Get in touch with Oleksandr about useful software and AI products.",
};

export default function ContactPage() {
  return (
    <main className="page-wrap contact-page">
      <div className="contact-copy">
        <p className="eyebrow">OPEN TO GOOD PROBLEMS</p>
        <h1>Let’s connect.</h1>
        <p>Have an idea, a tricky workflow, or a new opportunity? I’d be glad to hear about it.</p>
      </div>
      <div className="contact-card">
        <p className="contact-card-label">START A CONVERSATION</p>
        <a className="contact-email" href="mailto:gordieievoleksandr17@gmail.com">gordieievoleksandr17@gmail.com</a>
        <div className="contact-divider" />
        <a className="social-link" href="https://www.linkedin.com/in/oleksandr-gordieiev-swe17/" target="_blank" rel="noreferrer"><span>LinkedIn</span><span aria-hidden="true">↗</span></a>
        <a className="social-link" href="https://github.com/x-FrizBy-x" target="_blank" rel="noreferrer"><span>GitHub</span><span aria-hidden="true">↗</span></a>
      </div>
    </main>
  );
}