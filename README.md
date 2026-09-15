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
                         PromoBanner, StatsBand, QuickLinksGrid, MembersShowcase,
                         MemberDirectory, MemberCard, MemberLogo, ContactForm,
                         ContentNotice
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

- **Members** — currently seeded with 20 known ARC names; the site states
  27 registered members, so the confirmed full list is needed. Logos drop
  into `public/images/members/` — see that folder's `README.md` for exact
  filenames. Until a logo file exists for a member, its card automatically
  shows a lettermark badge instead, so nothing looks broken in the meantime.
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

## Replacing the placeholder images

The site currently uses stock photography for banners and gallery shots. To
swap in real photos, drop files into `public/images/` using these exact
filenames — the code already points at these paths, so no further edits are
needed once the files are in place:

| Filename                  | Used for                          | Suggested size          |
|----------------------------|------------------------------------|--------------------------|
| `public/images/hero-1.jpg` | Homepage hero slide 1 ("Welcome")  | 1920×1080px or larger, landscape |
| `public/images/hero-2.jpg` | Homepage hero slide 2 ("RBI")      | 1920×1080px or larger, landscape |
| `public/images/hero-3.jpg` | Homepage hero slide 3 ("Members")  | 1920×1080px or larger, landscape |
| `public/images/hero-4.jpg` | Homepage hero slide 4 ("Updates")  | 1920×1080px or larger, landscape |
| `public/images/about.jpg`  | About Us page feature image        | 1200×900px or larger    |
| `public/images/gallery-1.jpg` through `gallery-6.jpg` | Gallery page photos | 1200px wide or larger, any orientation |

Notes:
- `.jpg`, `.jpeg`, `.png`, or `.webp` all work — just keep the filename
  (before the extension) the same, or update the extension in the `src`
  paths in `src/lib/data.ts` and `src/app/about/page.tsx` to match.
- Next.js optimizes these automatically (resizing, compression, lazy
  loading), so there's no need to pre-shrink them — just avoid uploading
  anything over ~5MB per image.
- The hero images are darkened with an overlay for text readability, so
  photos with visual interest on the right/center of the frame work best.

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
