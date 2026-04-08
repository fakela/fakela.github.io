# Favour Kelvin — Portfolio Site

Personal portfolio site built with [Nextra v4](https://nextra.site) (Next.js 14) and deployed to Vercel.

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

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

This generates a static export in the `out/` directory, ready for GitHub Pages deployment.

## Project Structure

```
app/                  → Next.js App Router (layout + catch-all route)
content/              → MDX pages and navigation config (_meta.js)
  ├── index.mdx       → Home page
  ├── about.mdx       → About page
  ├── resume.mdx      → Resume/CV
  ├── portfolio/       → Case study posts
  ├── writing-samples/ → Filterable writing samples grid
  └── posts/           → Blog posts
components/           → React components (WritingSamples, PortfolioFeed, etc.)
public/
  ├── images/          → Screenshots and thumbnails
  └── downloads/       → PDF writing samples and resume
```

## Adding Content

**Portfolio posts:** Add an `.mdx` file in `content/portfolio/` and register it in `content/portfolio/_meta.js`.

**Writing samples:** Add entries to the `samples` array in `components/WritingSamples.jsx`. Place PDFs in `public/downloads/` and thumbnails in `public/images/samples/`.

**Blog posts:** Add `.mdx` files in `content/posts/` and register them in `content/posts/_meta.js`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages automatically. Make sure GitHub Pages is configured to use "GitHub Actions" as the source in your repo settings.

## Placeholders

The following files need to be added manually:

- Screenshot images in `public/images/portfolio/` and `public/images/samples/` (see `public/images/README.md`)
- PDF writing samples in `public/downloads/` (see `public/downloads/README.md`)
- Resume PDF at `public/downloads/favour-kelvin-cv.pdf`
