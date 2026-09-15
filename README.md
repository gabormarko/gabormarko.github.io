# gabormarko.github.io

Personal portfolio site — React + Vite + Tailwind CSS, deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content

All content is placeholder — replace it in `src/components/`:

- `Hero.jsx` — name, title, tagline, social links
- `About.jsx` — bio and skills
- `Experience.jsx` — work/education timeline (`ROLES` array)
- `Publications.jsx` — papers/writing list (`PUBLICATIONS` array)
- `Projects.jsx` — project cards (`PROJECTS` array)
- `Contact.jsx` — contact blurb and social links

Also update the meta tags and `<title>` in `index.html`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. In the repo's **Settings → Pages**, set **Source** to "GitHub Actions" (one-time setup).
