# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site (Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion, React Icons). Pages: `/`, `/projects`, `/experience`, `/education`, `/skills`, `/about`, `/contact`. Product visuals are illustrative mockups, not real screenshots. Content should stay in sync with `Gordieiev_CV_English.tex` (the CV source in the repo root).

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — ESLint (flat config, `eslint-config-next`)

There is no test suite.

## Next.js version warning

Per `AGENTS.md`, this Next.js version has breaking changes versus common training data. Before writing Next-specific code, read the relevant guide in `node_modules/next/dist/docs/` (`01-app/` for App Router). `next.config.ts` enables `cacheComponents` and `partialPrefetching`, so caching/prefetch behavior differs from older Next versions.

## Architecture

- All code lives in `app/` (no `src/`). Each route is a folder with a `page.tsx`.
- `app/layout.tsx` is the root layout: loads Geist fonts, sets the title template (`%s | Oleksandr`), and wraps every page with `SiteHeader`/`SiteFooter` from `app/site-chrome.tsx` (`MainNav` in `app/main-nav.tsx` is the nav). It uses the globally generated `LayoutProps<"/">` type.
- `app/projects.ts` is the single data source for projects (`Project` type: name, stack, and mockup preview fields). It is consumed by the home and projects pages via `app/components/project-card.tsx`; add or edit projects there rather than in the pages.
- Styling is mostly custom class names (`site-header`, `site-main`, `wordmark`, …) defined in `app/globals.css`, with Tailwind utilities alongside. Tailwind is wired through Turbopack in `next.config.ts` (`@tailwindcss/turbopack` loader rule for `*.css`) rather than PostCSS.
- Static assets (photo, favicon) are in `public/`.
