import Link from "next/link";
import { MainNav } from "./main-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Oleksandr, home">oleksandr<span>.dev</span></Link>
      <MainNav />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="wordmark footer-mark" href="/">oleksandr<span>.dev</span></Link>
      <span>Full-Stack Engineer with AI expertise</span>
      <nav className="footer-links" aria-label="Social links">
        <a href="https://github.com/x-FrizBy-x" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/oleksandr-gordieiev-swe17/" target="_blank" rel="noreferrer">LinkedIn</a>
        <Link href="/contact">Let’s connect <span className="nav-arrow" aria-hidden="true">↗</span></Link>
      </nav>
      <span className="footer-year">© 2026</span>
    </footer>
  );
}