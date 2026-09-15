# Association of ARCs in India — Website

A modernized rebuild of the Association of ARCs in India website: Next.js (App
Router) + TypeScript + Tailwind CSS, built for a one-click deploy on Vercel.

## Tech stack

- **Next.js 16** (App Router, static generation) — every page pre-renders to
  static HTML at build time, so hosting is fast and cheap.
- **TypeScript** for type safety.
- **Tailwind CSS v4** for styling, with the brand palette (navy + red, in the
  spirit of the association's "A" logo) defined once in `src/app/globals.css`.

## Project structure

```
src/
  app/                  Route folders — one per page (about, members, events, …)
  components/           Reusable UI: Header, Footer, HeroCarousel, PageBanner,
                         PromoBanner, StatsBand, QuickLinksGrid, MemberMarquee,
                         ContactForm, ContentNotice
  lib/data.ts           All site content lives here — nav, hero banners,
                         members, updates/newsletters, news, events, gallery
```

**To update content — text, links, member names, newsletter entries — edit
`src/lib/data.ts`.** No design or layout files need to change for routine
content updates.

## Content still to finalize

This rebuild keeps the same information architecture and copy as the current
site, but a few sections were reconstructed from a summary of the live page
rather than the full underlying dataset. These are marked with an on-page
notice (and a `PLACEHOLDER` comment in `data.ts`) and should be replaced with
authoritative content before launch:

- **Members** — currently seeded with ~20 known ARC names; the site states
  27 registered members, so the confirmed full list + logos are needed.
- **Office Bearers** and **Committees** — structure is in place; names and
  mandates need to be supplied.
- **Events**, **Gallery**, **ARC in News** — sample/representative entries;
  swap in real events, photography and verified press links.
- **Newsletter/report PDF links** (`updates` in `data.ts`) point to
  `/documents/...` placeholders — drop the actual PDFs into `public/documents/`
  (or link to wherever they're hosted) and update the `href` values.
- **Contact form** (`src/components/ContactForm.tsx`) is UI-only. Wire it to
  an email service (e.g. Resend, Formspree) or a Next.js API route before
  go-live.
- **Email / phone** in `data.ts` (`org.email`, `org.phone`) are placeholders —
  confirm the association's official contact details.
- Hero and gallery images currently use royalty-free stock photography from
  Unsplash — swap in the association's own photography if preferred.

## Getting started locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

All routes pre-render as static pages — verified working with no build or
lint errors.

## Deploying to Vercel

**Option A — via GitHub (recommended for ongoing updates):**
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click Deploy.
4. Every future push to the main branch redeploys automatically.

**Option B — directly from this folder:**
```bash
npm install -g vercel
vercel
```
Follow the prompts; Vercel builds and deploys straight from the local
project.
