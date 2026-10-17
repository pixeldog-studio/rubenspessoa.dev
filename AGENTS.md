# AGENTS.md

Guide for coding agents working on rubenspessoa.dev, the static Astro site for Pixeldog, the one-person app studio of Rubens Pessoa in Graz. Read `README.md` for the human overview; this file holds what an agent needs to change things safely.

## Commands

```sh
pnpm install --frozen-lockfile
pnpm dev        # dev server on http://localhost:4321
pnpm check      # astro check: TypeScript across .astro and .ts files
pnpm build      # static build into dist/ (does NOT type-check)
pnpm verify     # check + build + scripts/verify-dist.mjs. Run before calling work done.
pnpm preview    # serve dist/
```

`pnpm verify` is the definition of done. CI runs it on every PR (`.github/workflows/ci.yml`), and the deploy workflow runs it before publishing `master` to GitHub Pages, so a failing verify never ships.

Node 22+ (CI uses 22), pnpm version pinned via `packageManager`. TypeScript is held at 6.x because `@astrojs/check` doesn't support 7 yet.

## Layout

- `src/i18n/ui.ts`: every user-facing string, in `en`, `pt-br`, `de`. Plus locale names, lang tags, and URL prefixes.
- `src/components/`: `HomePage`, `AboutPage`, `LegalPage`, `Header`, `Footer`, `SvgSprite`, `PixeldogLogo`/`PixeldogMark`. Pages are thin wrappers that pass a `locale` prop.
- `src/pages/`: English at root, `pt-br/` and `de/` mirror only `/` and `/about/` (`localizedPaths`). Legal pages (`privacy`, `terms`, `imprint`) and `404` are English-only.
- `src/layouts/BaseLayout.astro`: `<head>`, SEO/OG meta, hreflang, JSON-LD, favicons, theme bootstrap script.
- `src/styles/site.css`: the whole stylesheet. No CSS framework.
- `astro.config.mjs`: redirects for retired URLs. Keep them when restructuring.
- `public/`: served as-is. `CNAME` must stay.

## Rules

**Copy changes touch all three locales.** Missing keys are caught by `pnpm check` (not `pnpm build`). Write natural pt-BR and Austrian German (`de-AT`), not literal translations.

**Keep inline elements on the same line as their neighbouring words.** Astro's HTML compressor drops newline-only whitespace next to inline tags and `{expressions}`, so this ships as "See the<a>imprint</a>for":

```astro
<!-- wrong -->
See the
<a href="/imprint/">imprint</a>
for details.
<!-- right -->
See the <a href="/imprint/">imprint</a> for details.
```

`verify-dist.mjs` flags these junctions in the built HTML.

**No third-party requests.** The site promises visitors no tracking: no analytics, embeds, external fonts, CDNs or remote images. Everything is self-hosted. Outbound `<a>` links are fine. `verify-dist.mjs` fails on external `script`/`link`/`img`/`iframe` sources.

**No client framework.** The only JS is the inline theme bootstrap in `BaseLayout` and the theme/language controls in `Footer`. Don't add islands or dependencies for small things.

**Theming** uses CSS `light-dark()` with `data-theme` on `<html>`, persisted in `localStorage`. Icons in `SvgSprite` use `fill="currentColor"` only, so they follow the theme.

**Legal identity.** "Pixeldog" is a trade name (Geschäftsbezeichnung) only. Never add a company suffix like "e.U." or "GmbH". The full legal name "Rubens Pessoa de Barros Filho" must stay on the imprint, privacy, and terms pages. Changes to legal pages need the owner's sign-off.

**SEO.** Every page passes `title`, `description`, and an absolute `canonicalUrl` to `BaseLayout`. Localised pages also pass hreflang alternates. Add new pages to the sitemap-friendly directory layout (`page/index.astro`).

## Verifying visual changes

Type checks and `verify-dist` don't cover layout. For CSS or markup changes, run `pnpm dev` and look at the page in a browser (Playwright or Chrome DevTools MCP) in light and dark themes, at mobile (390px) and desktop widths, and in each locale you touched.

## Regenerating images

No SVG rasteriser (rsvg, ImageMagick) is installed. To regenerate:

- **Social card** (`public/images/seo/social-card.png`): edit `src/assets/social-card.html`, then screenshot it at 1200×630 with Playwright.
- **Favicons / app icons** in `public/`: render through a browser canvas with Playwright and save via a download. `favicon.ico` embeds PNGs.

## Git

The owner usually commits straight to `master`, and every push deploys. Don't commit or push unless asked. Use `gh` for remote state, since local clones can lag `origin`.
