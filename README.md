# Favour Kelvin — Portfolio Site

Personal portfolio site built with [Astro](https://astro.build) and deployed to Vercel.

## Prerequisites

- [Node.js](https://nodejs.org) 18 or later
- npm

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

## Build

```bash
npm run build
```

This generates a static site in the `dist/` directory.

## Project Structure

```
src/
  components/          → Astro and React components (WritingSamples, PortfolioFeed, etc.)
  content/
    portfolio/         → Case study posts (.mdx)
    posts/             → Blog posts (.mdx)
  layouts/             → Base layout
  pages/
    ├── index.astro    → Home page
    ├── about.astro    → About page
    ├── resume.astro   → Resume/CV
    ├── portfolio/     → Portfolio listing + dynamic routes
    ├── writing-samples.astro → Filterable writing samples grid
    └── posts/         → Blog listing + dynamic routes
  styles/              → Global CSS
public/
  ├── images/          → Screenshots and thumbnails
  └── downloads/       → PDF writing samples and resume
```

## Adding Content

**Portfolio posts:** Add an `.mdx` file in `src/content/portfolio/`.

**Writing samples:** Add entries to the `samples` array in `src/components/WritingSamples.jsx`. Place PDFs in `public/downloads/` and thumbnails in `public/images/samples/`.

**Blog posts:** Add `.mdx` files in `src/content/posts/`.

## Deployment

Pushing to `main` triggers automatic deployment on Vercel. Astro is auto-detected — no extra config needed.

## Placeholders

The following files need to be added manually:

- Screenshot images in `public/images/portfolio/` and `public/images/samples/` (see `public/images/README.md`)
- PDF writing samples in `public/downloads/` (see `public/downloads/README.md`)
- Resume PDF at `public/downloads/favour-kelvin-cv.pdf`
