# Marta Debrina – Portfolio (React + Vite)

A simple personal website built with React and Vite with CSS.

## What's inside

* Retro heading font + handwritten paragraph style
* Two‑column **Experience** timeline with scroll animation
* **Projects** carousel (react‑slick)
* Floating **Back to Top** button

## Requirements

* Node.js 18+ and npm (or yarn/pnpm)

## Quick start

```bash
# install
npm install

# run locally (http://localhost:5173)
npm run dev

# build for production
npm run build
npm run preview
```

## Edit content

* **Projects** → `src/Components/Portfolio/Portfolio.jsx` → edit the `projects` array.
* **Experience** → `src/Components/Experience/Experience.jsx` → edit the cards.
* **About** text/photo → `src/Components/About/*` and images in `/public`.
* **Styles** → each section has its own `*.css` file.

> Image tip: put files in `/public` and reference as `/image-name.jpg`. Use landscape images; CSS uses `object-fit: cover`.

## Deploy

**Vercel** (easiest):

1. Push to GitHub.
2. Import the repo in Vercel → Framework: *Vite*.
3. Build command: `npm run build` · Output: `dist`.

**Netlify**:

1. New site from Git → pick the repo.
2. Build: `npm run build` · Publish: `dist`.

## Tech

React + Vite · CSS · react‑slick · react‑icons

