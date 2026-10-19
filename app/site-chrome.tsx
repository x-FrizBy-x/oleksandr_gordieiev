import Link from "next/link";
import { MainNav } from "./main-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Alex, home">alex<span>.dev</span></Link>
      <MainNav />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="wordmark footer-mark" href="/">alex<span>.dev</span></Link>
      <span>AI & Full-stack software developer</span>
      <Link href="/contact">Let’s connect <span className="nav-arrow" aria-hidden="true">↗</span></Link>
      <span className="footer-year">© 2026</span>
    </footer>
  );
}