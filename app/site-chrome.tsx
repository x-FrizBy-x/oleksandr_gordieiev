import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Alex, home">alex<span>.dev</span></Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/education">Education</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact <span className="nav-arrow" aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="wordmark footer-mark" href="/">alex<span>.dev</span></Link>
      <span>AI & full-stack software developer</span>
      <Link href="/contact">Let’s talk <span className="nav-arrow" aria-hidden="true">↗</span></Link>
      <span className="footer-year">© 2026</span>
    </footer>
  );
}