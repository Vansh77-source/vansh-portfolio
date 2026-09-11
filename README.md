# Vansh Bijwe — Portfolio

A personal portfolio built with React + Bootstrap, inspired by the layout of tajmirul.site but with original content and a custom dark "code editor" design.

## Run locally

npm install
npm run dev

Then open the printed local URL (usually http://localhost:5173).

## Build for production

npm run build

This outputs static files to dist/ which you can deploy to Vercel, Netlify, GitHub Pages, etc.

## Structure

- src/components/ — one component + one CSS file per section (Navbar, Hero, Stats, About, Skills, Experience, Projects, Contact)
- src/index.css — design tokens (colors, fonts, spacing) and shared base styles
- src/App.jsx — assembles all sections

## Editing content

Each component holds its own content near the top of the file as a small array/object (e.g. SKILLS, TIMELINE, PROJECTS in their respective files) — edit those directly to update text without touching layout code.
