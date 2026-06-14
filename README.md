# ALPFOR Website

Static website for the [Alpine Research and Education Station Furka (ALPFOR)](https://alpfor.ch), located at 2440 m above sea level near the Furka Pass in the Swiss Central Alps.

## Stack

- **React 19** + **TypeScript**
- **Vite** + **vite-react-ssg** — builds a fully static site (no server required)
- **Tailwind CSS v4** — design tokens defined via `@theme` in `src/index.css`
- **react-i18next** — bilingual content (DE / EN) with URL-based language prefix (`/de/...`, `/en/...`)
- **IBM Plex Sans** / **IBM Plex Sans Condensed** — typefaces via `@fontsource`

## Development

```bash
bun install
bun run dev      # dev server
bun run build    # static output → dist/
bun run preview  # preview the built output
```

## Project structure

```
src/
  assets/          # images and PDFs (buildings, flora, forschung, misc, pdf)
  components/      # Footer, Nav, LanguageSwitch, PageBanner
  pages/           # one file per route (index, verein, infrastruktur, forschung, …)
  i18n.tsx         # all DE/EN translation strings
  Layout.tsx       # fixed header, main, footer shell
  index.css        # Tailwind @theme tokens + global styles
public/
  favicon.svg
```

## Content

Pages with long bilingual text and images (forschung, infrastruktur, flora-fauna, lehre) use a per-page `content = { de: {…}, en: {…} }` object rather than i18n strings. Simpler pages (verein, geologie, kontakt, impressum) pull text from `i18n.tsx`.
