# Nexylon Technologies — Corporate Website

Production-ready static corporate website for **Nexylon Technologies**, a multinational enterprise software company. Built with React 19, Vite 8, TypeScript, and Tailwind CSS.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Language | TypeScript 6 |
| Styling | Tailwind CSS 3 |
| Routing | React Router DOM 7 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Hosting target | Namecheap shared hosting (Apache) |

---

## Project Structure

```
Nexylon-Technologies/
├── public/
│   ├── .htaccess          # Apache rewrite rules + security headers
│   ├── favicon.ico        # Brand favicon
│   ├── robots.txt         # Search engine directives
│   └── sitemap.xml        # XML sitemap for all pages
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer, Layout (shell)
│   │   ├── sections/      # Home page section components
│   │   ├── seo/           # SEO component (React 19 native metadata)
│   │   └── ui/            # Button, Card, Badge, SectionHeader, AnimatedCounter
│   ├── data/              # All site content (services, industries, testimonials…)
│   ├── hooks/             # useCounter, useScrollAnimation
│   ├── pages/             # Home, About, Services, Solutions, Industries, Careers, Blog, Contact, NotFound
│   ├── types/             # TypeScript interfaces
│   ├── utils/             # cn() class utility
│   ├── App.tsx            # Router + route definitions
│   ├── index.css          # Tailwind + global styles
│   └── main.tsx           # React entry point
├── index.html             # Base HTML with default SEO meta tags + Schema.org JSON-LD
├── tailwind.config.ts     # Design system (colors, fonts, animations, shadows)
├── vite.config.ts         # Build config with code-splitting
└── tsconfig.app.json      # TypeScript config with path aliases
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Home (Hero, TrustedBy, Services, AI/Cloud, Stats, Case Studies, Testimonials, Why Us, Global, CTA) |
| `/about` | About Us (Mission, Values, Timeline, Leadership) |
| `/services` | Services (8 detailed service cards) |
| `/solutions` | Solutions (4 SaaS products + Case Studies) |
| `/industries` | Industries (8 verticals with focus areas) |
| `/careers` | Careers (Perks + 6 open roles) |
| `/blog` | Blog (Featured + 5 article cards) |
| `/contact` | Contact (Form + contact details) |
| `*` | 404 Not Found |

---

## Local Development

### Prerequisites
- Node.js 18+ (tested on Node 24)
- npm 9+

### Setup

```bash
# Clone or copy the project folder
cd Nexylon-Technologies

# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev
```

### Build for production

```bash
npm run build
```

Output is written to `dist/`. The folder is fully self-contained and ready to upload.

### Preview production build locally

```bash
npm run preview
```

---

## Namecheap Shared Hosting Deployment

### Step 1 — Build the project

```bash
npm run build
```

### Step 2 — Upload files

Upload the **entire contents** of the `dist/` folder to your Namecheap hosting root directory (typically `public_html/`).

Upload the `public/.htaccess` file to `public_html/.htaccess` as well (it is already included in the build output via `public/` → `dist/`).

### Step 3 — Verify .htaccess is active

Log in to cPanel → File Manager → confirm `.htaccess` is present in `public_html/`.

If the file is missing, enable "Show Hidden Files" in File Manager settings.

### Step 4 — Enable mod_rewrite (if needed)

Most Namecheap shared hosting plans have `mod_rewrite` enabled by default. If you get 500 errors:

- Contact Namecheap support to enable `mod_rewrite`
- Or switch to HashRouter (see note below)

### Step 5 — Point your domain

In Namecheap DNS settings, ensure your domain A record points to your hosting server IP.

### File upload checklist

```
public_html/
├── .htaccess          ← required for SPA routing
├── index.html
├── robots.txt
├── sitemap.xml
├── favicon.ico
└── assets/
    ├── index-[hash].css
    ├── vendor-[hash].js
    ├── motion-[hash].js
    └── index-[hash].js
```

### HashRouter fallback (if mod_rewrite is unavailable)

If your host does not support mod_rewrite, change [src/App.tsx](src/App.tsx) line 1:

```tsx
// Replace BrowserRouter with HashRouter
import { HashRouter, Routes, Route } from 'react-router-dom'

// In JSX:
<HashRouter> ... </HashRouter>
```

URLs will use `/#/about` format instead of `/about`. SEO is slightly reduced but the site works on any static host.

---

## SEO Architecture

### Approach
- **React 19 native document metadata** — `<title>`, `<meta>`, `<link>` elements rendered inside components are automatically hoisted to `<head>` by React 19's built-in document hoisting. No external library needed.
- Every page has unique `<title>` and `<meta name="description">`.
- Open Graph and Twitter Card tags on every page.
- **Schema.org JSON-LD** for Organization (in `index.html`) and per-page structured data.
- `sitemap.xml` lists all 14 URLs with `lastmod`, `changefreq`, and `priority`.
- `robots.txt` allows all crawlers and references the sitemap.

### Keyword strategy
Each page is optimized for:
- **Home**: enterprise software, AI solutions, cloud transformation, digital transformation
- **Services**: enterprise software services, AI machine learning services, cloud architecture
- **Solutions**: enterprise SaaS, cloud management software, AI platform
- **Industries**: sector-specific terms (financial services software, healthcare technology, etc.)
- **Blog**: long-tail informational queries around AI, cloud, security, transformation

### Heading hierarchy
- `<h1>` — one per page, in the hero section
- `<h2>` — section headings (SectionHeader component, services, team members, etc.)
- `<h3>` — card/item titles within sections

---

## Accessibility

- **Skip link** — "Skip to main content" visible on keyboard focus (Layout.tsx)
- **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`, `<figure>`, `<aside>` used throughout
- **ARIA attributes** — `aria-label`, `aria-labelledby`, `aria-expanded`, `aria-haspopup`, `aria-required`, `aria-live`, `aria-hidden` on decorative elements
- **Keyboard navigation** — all interactive elements (links, buttons, form fields) are keyboard accessible with visible `focus-visible` ring
- **No `div` for clickable elements** — buttons use `<button>`, navigation uses `<a>`/`<Link>`, cards only use `<button>` when interactive
- **Form labels** — all form inputs have explicit `<label for="...">` associations
- **Contrast ratios** — dark navy background with white/slate text meets WCAG AA (4.5:1 minimum)
- **`alt` text** — all meaningful images have descriptive `alt` text; decorative elements use `aria-hidden`
- **Reduced motion** — Framer Motion respects `prefers-reduced-motion` by default

---

## Performance Optimization

### Build
- **Code splitting** — React/Router/DOM in `vendor` chunk; Framer Motion in `motion` chunk; app code in `index` chunk. Enables parallel loading and long-term caching.
- **CSS code splitting** — Tailwind purges all unused classes at build time (37 kB → 6.9 kB gzipped)
- **Asset hashing** — all JS/CSS filenames include content hashes for safe long-term caching

### Runtime
- **Lazy rendering** — Framer Motion `whileInView` + `viewport={{ once: true }}` — animations only trigger once per element, not repeatedly
- **Optimized counters** — `useCounter` hook uses `requestAnimationFrame` with an easing function; fires only when the element enters the viewport
- **Passive scroll listener** — Header scroll handler uses `{ passive: true }` to avoid jank
- **Font preconnect** — Google Fonts preconnected in `<head>` to eliminate DNS lookup latency
- **`display=swap`** — Font loading uses `display=swap` to prevent invisible text during load

### Caching (via .htaccess)
| Asset type | Cache duration |
|---|---|
| `index.html` | No cache (always fresh) |
| `*.js`, `*.css` (hashed) | 1 year (`immutable`) |
| Images, fonts | 6 months |

### Bundle sizes (production)
| Chunk | Raw | Gzipped |
|---|---|---|
| CSS | 37 kB | 6.9 kB |
| App JS | 112 kB | 27 kB |
| Framer Motion | 121 kB | 40 kB |
| Vendor (React + Router) | 257 kB | 83 kB |

---

## Customization Guide

### Update brand content
All site copy, statistics, team members, services, industries, testimonials, and blog posts live in:

```
src/data/index.ts
```

Edit this single file to update all content across the site.

### Update colors / design system
```
tailwind.config.ts  ← brand colors, gradients, shadows, animations
src/index.css       ← global utilities, glass effects, scrollbar
```

### Add a new page
1. Create `src/pages/NewPage.tsx`
2. Add a `<Route>` in `src/App.tsx`
3. Add the URL to `public/sitemap.xml`
4. Add a nav link in `src/data/index.ts` (NAV_ITEMS)

### Update sitemap domain
Search and replace `https://www.nexylontechnologies.com` in:
- `public/sitemap.xml`
- `public/robots.txt`
- `src/components/seo/SEO.tsx`
- `index.html` (Schema.org JSON-LD)

---

## License

Proprietary — Nexylon Technologies, Inc. All rights reserved.
