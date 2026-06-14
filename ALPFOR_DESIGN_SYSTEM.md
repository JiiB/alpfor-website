# ALPFOR Design System — Build Guide

> **For Claude Code.** This is the authoritative design spec for the ALPFOR website redesign. ALPFOR is an alpine biodiversity research organisation. Treat this file as ground truth: reference these tokens and rules instead of inventing values, and prefer the more restrained, more scientific option whenever a decision isn't covered here.

**Stack:** React + TypeScript, Tailwind CSS. Backend (if any) is Node/TypeScript.

**Brand in one line:** A scientific gateway to the alpine world — credible, precise, alpine, evidence-based. It should read like a respected research institution, never like eco-marketing, a tech startup, tourism, or activism.

---

## Core Principles (apply to every component)

- **Photography and typography lead.** Colour is applied with restraint.
- **Most of any layout is white and blue.** Secondary/accent colours are seasoning, not decoration.
- **Accents are rare.** Yellow and orange get *one* moment per page, max.
- **Sharp, precise geometry.** Avoid highly rounded interfaces (max radius 12px).
- **Generous whitespace.** Don't crowd. Use the 8px spacing scale.
- **No flashy animation, trendy gradients, or startup aesthetics.**
- **Never hard-code hex values** in components — use the Tailwind tokens / CSS variables below.

---

## Colour Tokens

### Primary

| Token | Hex | RGB | Usage |
|---|---|---|---|
| ALPFOR Blue | `#003863` | `0, 56, 99` | Navigation, footer, headlines on light, buttons |
| Snow White | `#FFFFFF` | `255, 255, 255` | Backgrounds, text on dark surfaces |

### Secondary

| Token | Hex | RGB | Usage |
|---|---|---|---|
| Glacier Blue | `#ACD2DB` | `172, 210, 219` | Section backgrounds, infographics, hover states |
| Forest Ridge | `#354D4F` | `53, 77, 79` | Subheadings, icons, data visualisations |
| Alpine Rock | `#A8A28E` | `168, 162, 142` | Borders, cards, secondary UI elements |

### Accent — use sparingly

| Token | Hex | RGB | Usage |
|---|---|---|---|
| Alpine Flower Yellow | `#D6C84A` | `214, 200, 74` | Calls to action, highlights, key statistics |
| Moss Orange | `#D9822B` | `217, 130, 43` | Alerts, featured content, interactive maps |

### Semantic (functional — keep distinct from brand palette)

| Purpose | Hex |
|---|---|
| Success | `#2F6B4F` |
| Warning | `#C98A1A` |
| Error | `#A13C3C` |
| Information | `#2D6FA3` |

---

## Tailwind Config (v4)

Extend the theme — do not replace defaults:

```css
/* app.css (or your global stylesheet) */
@import "tailwindcss";

@theme {
  /* Colours — generate bg-alpfor-blue, text-alpfor-forest, etc. */
  --color-alpfor-blue: #003863;
  --color-alpfor-blue-hover: #002A4A;
  --color-alpfor-glacier: #ACD2DB;
  --color-alpfor-forest: #354D4F;
  --color-alpfor-rock: #A8A28E;
  --color-alpfor-yellow: #D6C84A;
  --color-alpfor-orange: #D9822B;
  --color-alpfor-white: #FFFFFF;

  --color-state-success: #2F6B4F;
  --color-state-warning: #C98A1A;
  --color-state-error: #A13C3C;
  --color-state-info: #2D6FA3;

  /* Fonts — font-sans, font-heading */
  --font-sans: "IBM Plex Sans", system-ui, sans-serif;
  --font-heading: "IBM Plex Sans Condensed", "IBM Plex Sans", sans-serif;

  /* Radius — rounded-sm / rounded-md / rounded-lg */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Content widths — max-w-reading / max-w-standard / max-w-wide */
  --container-reading: 760px;
  --container-standard: 1200px;
  --container-wide: 1440px;

  /* Named spacing on the 8px grid — p-xs, gap-md, etc. */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 40px;
  --spacing-xl: 64px;
  --spacing-xxl: 96px;
  --spacing-xxxl: 160px;
}
```

---

## Typography

**Two typefaces only:** IBM Plex Sans (body/UI) and IBM Plex Sans Condensed (display/headings).

Install via Fontsource (preferred for self-hosting):

```bash
npm i @fontsource/ibm-plex-sans @fontsource/ibm-plex-sans-condensed
```

```ts
// import the weights you actually use
import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans-condensed/500.css";
import "@fontsource/ibm-plex-sans-condensed/600.css";
import "@fontsource/ibm-plex-sans-condensed/700.css";
```

**Weights:** Plex Sans → 300 / 400 / 500 / 600. Plex Sans Condensed → 500 / 600 / 700.

### Type scale

| Element | Desktop | Mobile | Font / weight |
|---|---|---|---|
| H1 | 64px | 40px | Condensed **Bold (700)** |
| H2 | 48px | 32px | Condensed SemiBold (600) |
| H3 | 36px | 28px | Condensed SemiBold (600) |
| H4 | 28px | 24px | Plex Sans Medium (500) |
| H5 | 22px | — | Plex Sans Medium (500) |
| Body Large | 20px | — | Plex Sans Regular (400) |
| Body | 18px | 18px | Plex Sans Regular (400) |
| Small | 16px | 16px | Plex Sans Regular (400) |
| Caption | 14px | — | Plex Sans Light (300) |

Rules: H1–H3 use **Condensed**; H4 and below use **Plex Sans**. Intro paragraphs use Medium (500). Captions/metadata use Light (300). The core pairing is a Condensed Bold headline over Regular body text.

---

## Layout & Spacing

**Content widths:** `reading` 760px (articles, publications, long-form) · `standard` 1200px (most pages) · `wide` 1440px (hero, photography-driven layouts).

**Spacing:** 8px grid. `xs 8 · sm 16 · md 24 · lg 40 · xl 64 · xxl 96 · xxxl 160`.

**Border radius:** `sm 4px · md 8px · lg 12px`. Never go beyond 12px.

---

## Components

### Primary Button

```tsx
<button className="rounded-sm bg-alpfor-blue px-6 py-3 font-sans
  font-medium text-white transition-colors hover:bg-alpfor-blue-hover">
  View publication
</button>
```

- Background `#003863`, text `#FFFFFF`, hover `#002A4A`
- Padding `12px 24px` (`py-3 px-6`), radius `4px`

### Secondary Button

```tsx
<button className="rounded-sm border border-alpfor-blue bg-transparent
  px-6 py-3 font-sans font-medium text-alpfor-blue transition-colors
  hover:bg-[rgba(0,56,99,0.05)]">
  Learn more
</button>
```

- Transparent background, `1px solid #003863` border, text `#003863`
- Hover background `rgba(0,56,99,0.05)`

> A single high-priority CTA per page *may* use the yellow accent as a background. Reserve it for one moment.

### Research Card

White background, thin border, subtle shadow, large featured image, strong Condensed headline, publication metadata.

```tsx
<article className="overflow-hidden rounded-lg border border-alpfor-rock/40
  bg-white shadow-[0_4px_14px_rgba(0,56,99,0.07)]">
  <img src={cover} alt="" className="h-48 w-full object-cover" />
  <div className="p-5">
    <p className="font-sans text-sm font-semibold uppercase tracking-wide text-alpfor-orange">
      Publication · {year}
    </p>
    <h3 className="mt-1 font-heading text-2xl font-semibold leading-tight text-alpfor-blue">
      {title}
    </h3>
    <p className="mt-2 font-sans text-base text-alpfor-forest">{summary}</p>
    <p className="mt-3 font-sans text-sm text-alpfor-rock">{unit} · {pages} pp.</p>
  </div>
</article>
```

### Biodiversity Card

Contains: species image, scientific name (italic), common name, habitat info, observation metadata.

```tsx
<article className="overflow-hidden rounded-lg border border-alpfor-rock/40
  bg-white shadow-[0_4px_14px_rgba(0,56,99,0.07)]">
  <img src={speciesImg} alt={scientificName} className="h-48 w-full object-cover" />
  <div className="p-5">
    <h3 className="font-heading text-2xl font-semibold italic text-alpfor-blue">
      {scientificName}
    </h3>
    <p className="mt-0.5 font-sans font-medium text-alpfor-forest">{commonName}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      <span className="rounded border border-alpfor-rock/40 bg-[#faf9f4] px-2 py-1 text-xs text-alpfor-forest">
        {habitat}
      </span>
      <span className="rounded border border-alpfor-rock/40 bg-[#faf9f4] px-2 py-1 text-xs text-alpfor-forest">
        {elevation}
      </span>
    </div>
    <p className="mt-3 font-sans text-sm text-alpfor-rock">Observed · {location} · {date}</p>
  </div>
</article>
```

---

## Logo Usage

- **Deep blue logo on white** backgrounds; **white logo on alpine blue** (or dark photographic areas with sufficient contrast).
- **Minimum clear space:** equal to the height of the "A" in ALPFOR on all sides.
- **Minimum sizes:** website header `140px`, mobile `110px`, print `30mm`.
- Never recolour, rotate, stretch, add effects, or place the logo on a busy background.

> Note: the existing logo asset uses a brighter blue (`#007dc1`) than ALPFOR Blue (`#003863`). Flag this if asked to reconcile the mark; otherwise use the supplied asset as-is.

---

## Data Visualisation

Charts communicate scientific rigour and clarity. Use this fixed, ordered series palette:

| Series | Hex |
|---|---|
| Primary | `#003863` |
| Secondary | `#354D4F` |
| Accent | `#D6C84A` |
| Highlight | `#D9822B` |
| Neutral | `#A8A28E` |

**Avoid:** rainbow palettes, excessive gradients, decorative effects, 3D charts.

---

## Imagery & Illustration

**Photography** is the strongest asset. Use natural lighting, documentary style, minimal editing, authentic field conditions, wide alpine landscapes. Subjects: high alpine ecosystems, fieldwork, biodiversity monitoring, flora/fauna, research stations, geological formations, snow/glacial environments.
**Avoid:** generic stock, artificial saturation, lifestyle imagery, corporate office photos, trendy social-media aesthetics.

**Illustration** signature motif is **topographic contour lines**. Also: scientific diagrams, habitat maps, field sketches, technical illustrations, species ID graphics.
**Avoid:** cartoons, corporate character illustrations, decorative abstract artwork, startup-style flat illustrations.

---

## Accessibility

| Usage | Minimum contrast |
|---|---|
| Body text | 4.5:1 |
| Headlines | 3:1 |
| UI components | 4.5:1 |

Always verify: blue on white, white on blue, Forest Ridge on white, yellow on blue. Accent colours rarely carry text — if they must, meet the 4.5:1 body ratio first.

---

## CSS Variables (if not using Tailwind tokens directly)

```css
:root {
  --alpfor-blue: #003863;
  --alpfor-blue-hover: #002A4A;
  --glacier-blue: #ACD2DB;
  --forest-ridge: #354D4F;
  --alpine-rock: #A8A28E;
  --flower-yellow: #D6C84A;
  --moss-orange: #D9822B;
  --white: #FFFFFF;
  --state-success: #2F6B4F;
  --state-warning: #C98A1A;
  --state-error: #A13C3C;
  --state-info: #2D6FA3;
}
```

---

## Quick Do / Don't

**Do:** let photography lead · strong Condensed headlines · prioritise readability · restrained colour · generous whitespace · use tokens.
**Don't:** over-brand every element · flashy animation · trendy gradients · mimic startups · overuse accents · hard-code hex values · round corners past 12px.
