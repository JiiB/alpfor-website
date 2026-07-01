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

## Deploy

The site deploys via FTP using [`lftp`](https://lftp.yar.ru). One command builds and uploads:

```bash
bash deploy.sh
```

First-time setup:

```bash
brew install lftp          # macOS — install lftp if not already present
cp .env.deploy.example .env.deploy
# fill in FTP_HOST, FTP_USER, FTP_PASS, FTP_REMOTE_DIR
```

`deploy.sh` runs `bun run build` then mirrors `dist/` to the FTP server, deleting any remote files that no longer exist locally. Credentials live in `.env.deploy` (gitignored).

## Content

Pages with long bilingual text and images (forschung, infrastruktur, flora-fauna, lehre) use a per-page `content = { de: {…}, en: {…} }` object rather than i18n strings. Simpler pages (verein, geologie, kontakt, impressum) pull text from `i18n.tsx`.
