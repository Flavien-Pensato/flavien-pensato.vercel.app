# CLAUDE.md — Portfolio App

Flavien Pensato's personal portfolio site. A Next.js 12 app with MDX blog support, deployed via Coolify as part of the Sheik infrastructure.

## Tech Stack

- **Next.js 12.1.0** with `output: 'standalone'` for Docker deployment
- **React 17.0.2**, **TypeScript 4.3.5**
- **MDX** via `@next/mdx` for blog posts
- **Luxon** for date formatting (French locale)
- **CSS Modules** for component styling, global CSS with custom properties in `styles/global.css`
- **Umami** analytics (self-hosted)

## Project Structure

```
atoms/           # Small UI components (Tag, ChronologyDate, Separator)
molecules/       # Composed components (Menu, SectionExperience, Footer)
organims/        # Organisms (Chronology, Meta)
templates/       # Page templates (landing, blog, cv, notFound)
pages/           # Next.js routes
  blog/*.mdx     # Blog posts (MDX files with meta export)
  api/health.ts  # Health check endpoint
data/            # Static data (experiences, meta, presentation text)
utils/           # Helpers (blog discovery, types, debounce)
styles/          # Global CSS with custom fonts (Martel)
public/          # Static assets
Dockerfile       # Multi-stage build, Node 20 Alpine, non-root user
```

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Start production server
pnpm test         # Run Jest tests
```

## Conventions

- **Atomic Design**: components organized as atoms → molecules → organisms → templates
- **Blog posts**: MDX files in `pages/blog/`, each exports `meta` object and wraps content in `BlogTemplate`
- **French language**: dates use French locale, blog content is in French
- **Styling**: CSS Modules per component, global variables in `styles/global.css`
- **SEO**: `Meta` organism handles `<head>` metadata, `next-sitemap` generates sitemap post-build

## Deployment

- Deployed via Coolify with Dockerfile build
- Base directory: `apps/portfolio`
- Health check: `GET /api/health` returns `{ status: 'ok' }`
- Runs as non-root `nextjs` user on port 3000
