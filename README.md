# Thakur Consultancy

Corporate website for [Thakur Consultancy](https://www.thakurconsultancy.com) — a New Delhi–based firm offering HR compliance, payroll, accounting, tax, and statutory audit services for Indian businesses.

**Live site:** https://www.thakurconsultancy.com

## Features

- **Multi-page marketing site** with client-side routing (React Router)
- **Service pages** for HR & Compliance, Accounting & Tax, and Audit & Certifications
- **Responsive layout** with Tailwind CSS and a custom design system (Manrope / Work Sans)
- **SEO-ready** — meta tags, Open Graph, Twitter Cards, JSON-LD structured data, `sitemap.xml`, and `robots.txt`
- **GitHub Pages deployment** with SPA fallback for deep links (e.g. `/services/hr-compliance`)
- **Scroll animations** and interactive FAQ accordion

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/services/hr-compliance` | HR & Compliance Services |
| `/services/accounting-tax` | Accounting & Tax Services |
| `/services/audit-certifications` | Audit & Certifications |
| `/industries` | Industries We Serve |
| `/process` | Working Process |
| `/blog` | Insights & Compliance Blog |
| `/faq` | Frequently Asked Questions |
| `/contact` | Contact Us |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 |
| Language | TypeScript |
| Build tool | Vite 8 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 3 |
| Linting | Oxlint |
| Hosting | GitHub Pages (custom domain via `public/CNAME`) |

## Project Structure

```
├── public/
│   ├── CNAME              # Custom domain (www.thakurconsultancy.com)
│   ├── _redirects         # Netlify-style SPA fallback (if used elsewhere)
│   ├── sitemap.xml
│   ├── robots.txt
│   └── favicon.png, logo.png, icons.svg
├── src/
│   ├── App.tsx            # Route definitions
│   ├── main.tsx           # App entry
│   ├── index.css          # Global styles & Tailwind imports
│   ├── components/
│   │   ├── layout/        # Navbar, Footer, Layout wrapper
│   │   └── ui/            # Logo, MaterialIcon
│   ├── pages/             # Page components (one per route)
│   ├── hooks/             # useNavbarScroll, useScrollReveal, useFaqInteractions
│   ├── data/              # Static content (e.g. faqContent.ts)
│   └── types/             # Shared TypeScript types
├── scripts/
│   └── convert-pages.mjs  # Utility to convert Stitch HTML exports to React pages
├── .github/workflows/
│   └── static.yml         # CI: build & deploy to GitHub Pages
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the Vite dev server (default: http://localhost:5173). Hot Module Replacement is enabled.

### Build

```bash
npm run build
```

Runs TypeScript project references (`tsc -b`) then Vite production build. Output is written to `dist/`.

### Preview production build locally

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

Uses [Oxlint](https://oxc.rs/docs/guide/usage/linter) with React and TypeScript plugins (see `.oxlintrc.json`).

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_BASE_PATH` | `/` | Base URL path for Vite assets and React Router `basename`. Set to `/` for the custom domain; use repo name (e.g. `/ThakurConsultancy/`) for GitHub Pages project sites without a custom domain. |

Example for a project-site deployment:

```bash
VITE_BASE_PATH=/ThakurConsultancy/ npm run build
```

## Deployment

The site is deployed automatically to GitHub Pages when changes are pushed to the `main` branch (see `.github/workflows/static.yml`).

**Build pipeline:**

1. `npm ci` and `npm run build` with `VITE_BASE_PATH=/`
2. Copy `dist/index.html` to `dist/404.html` so GitHub Pages serves the SPA for unknown paths
3. Upload `dist/` and deploy via GitHub Pages

**Custom domain:** `public/CNAME` points to `www.thakurconsultancy.com`. Configure DNS and GitHub Pages custom domain settings accordingly.

### SPA routing on GitHub Pages

GitHub Pages does not natively support SPA fallbacks. The workflow copies `index.html` to `404.html` so direct visits to routes like `/services/hr-compliance` load the React app instead of a static 404 page.

## Converting Stitch HTML to React Pages

`scripts/convert-pages.mjs` is a one-off utility that reads HTML exports from a `stitch_thakur_consultancy_corporate_portal/` directory and generates React page components in `src/pages/`. Run manually when updating content from Stitch exports:

```bash
node scripts/convert-pages.mjs
```

## SEO & Static Assets

- **Canonical URL and meta tags** are defined in `index.html`
- **Structured data** (JSON-LD `ProfessionalService`) is embedded in `index.html`
- **Sitemap** at `public/sitemap.xml` — update `lastmod` when pages change
- **Robots** at `public/robots.txt`

## Contact

**Thakur Consultancy**

- Address: 16B, Ground Floor, Studio Apartment, Sector-68B, Dwarka, New Delhi – 110078
- Email: contact@thakurconsultancy.com
- Hours: Mon – Sat, 10:00 – 18:00

## License

Private — © Thakur Consultancy. All rights reserved.
