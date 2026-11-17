# Georgina Mark Portfolio

A responsive personal portfolio built with React and Vite.

## Pages

- `/` — Home
- `/about` — About Georgina
- `/life-story` — Georgina's life story
- `/values` — What matters
- `/contact` — Contact

## Run locally

```sh
npm install
npm run dev
```

## Code structure

- `src/App.jsx` — shared layout and page routes
- `src/pages/` — one React component per page
- `src/components/` — shared navigation, footer, icons, and illustration
- `src/data/values.js` — content for the values page
- `src/App.css` — shared site styles

## Customize

Update page copy in the matching file under `src/pages/`. Add Georgina's preferred email or professional profile in `src/pages/ContactPage.jsx` before publishing.

## Deploy to GitHub Pages

The site is configured for the `markportfolio` repository. Push to `main` to
build and deploy with GitHub Actions, then set the repository's Pages source
to **GitHub Actions** in **Settings → Pages**.
