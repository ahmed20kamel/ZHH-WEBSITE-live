# ZHH Group Holding — Corporate Website

Corporate website for ZHH Group Holding, built with Next.js 16 (App Router) and React 19.
Presents the group's divisions, projects, impact and investor information, with an interactive
map of global presence and a working contact form.

**Live:** https://zhh-website-live.vercel.app

## Pages

- **Home** — group overview with animated statistics
- **About** — company and group profile
- **Divisions** — construction, real estate, trading and Jewelust, each with its own page
- **Projects** — project portfolio
- **Impact** — sustainability and community
- **Investors** — investor relations
- **Contact** — validated contact form delivered via EmailJS

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Animation | Framer Motion |
| Maps | Leaflet / react-leaflet, react-simple-maps, d3-geo, topojson |
| Forms | react-hook-form + EmailJS |
| Icons | lucide-react |
| SEO | generated sitemap.ts and robots.ts, per-page metadata |

## Structure

    app/            App Router pages and route-level client components
    components/     Shared UI - header, footer, sections, contact form, counters
    data/           Static content for divisions, projects and stats
    lib/            Helpers and utilities
    public/         Images and static assets
    scripts/        Build and maintenance scripts

## Running locally

    npm install
    npm run dev

Then open http://localhost:3000.

    npm run build      # production build
    npm run start      # serve the production build
    npm run lint       # eslint

---

Built by [Norka Solution](https://github.com/Norka-Solution) — norkasolution.com
