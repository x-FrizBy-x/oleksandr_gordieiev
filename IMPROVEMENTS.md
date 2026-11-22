# Website improvement notes

Suggested order: 1, 2, 4, 3, then 6-7. Tick items off as they land.

## High impact

- [x] **1. Bigger text.** Floor of ~14px for reading text and ~12px for tags/labels. Offenders: `.project-description` (12px), `.stack-list li` (8px), nav (13px), footer (11px), eyebrows (10px). The 6-9px text inside the mockups is decorative and left alone.
- [x] **2. Stale mockup content.** The hero says "MONDAY, OCTOBER 19" and "Good morning, Oleksandr"; `app/projects.ts` previews say "MONDAY · PROJECT OVERVIEW". Use a neutral label ("Today") or compute the date.
- [~] **3. Real visuals and links.** Done: "View on GitHub" link per project (`repoUrl` in `app/projects.ts`). Still open: live demos, screenshots, outcome lines (screenshots or a short demo clip, one-line metric per project).
- [~] **4. Credibility basics.** Done: footer GitHub/LinkedIn links, Open Graph/Twitter metadata + generated OG image, `sitemap.ts`, `robots.ts` (base URL from `VERCEL_PROJECT_PRODUCTION_URL`, override with `SITE_URL`). Still open: CV PDF button (compile `Gordieiev_CV_English.tex` and save the PDF in `public/`).

## Medium impact

- [x] **5. Soften the hero headline.** 76px with -3.5px tracking is tight. Ease the tracking to about -2px and cap the size a little lower.
- [x] **6. Consistent shapes.** Cards mix square corners (`.project-card`, `.contact-card`) with rounded ones (`.skill-card` 14px, pill tags). Pick one.
- [ ] **7. Contrast and states.** `--muted` (#77756f) and grays like #8a877f / #99968f fail WCAG AA 4.5:1 for small text. Active nav link changes weight (layout shift). Add focus styles beyond `a:focus-visible` (buttons, `.skill-card`).
- [ ] **8. Hero art.** Dots and orbit circles feel generic. Consider a real photo or project screenshot.

## Smaller polish

- [ ] **9. Dark mode** via `prefers-color-scheme` (palette is already CSS variables).
- [ ] **10. Experience/education.** Italic gray `.entry-summary` is hard to read; use regular weight. Consistent mono metadata line for dates/roles.
- [ ] **11. Motion.** Same `rise-in` everywhere. Stagger on the hero only, scroll-trigger the rest.
- [ ] **12. Copy.** Replace generic slogans with concrete claims (e.g. local AI with Ollama shipped on AWS).
- [ ] **13. Footer year.** `© 2026` is hardcoded. Use the current year, but check the `cacheComponents` docs in `node_modules/next/dist/docs/` first.
