# rubenspessoa.dev

Source of [rubenspessoa.dev](https://rubenspessoa.dev/) — the personal site of Rubens Pessoa, independent founder in Graz, Austria, making apps for Apple platforms (Save My Cactus, Hustlrr, Giorni).

## Stack

- [Astro](https://astro.build/) 7, fully static output (`output: 'static'`)
- No frameworks, no client-side islands — just a little inline JS for the theme toggle and language picker
- [pnpm](https://pnpm.io/) as package manager
- Deployed to GitHub Pages via GitHub Actions on every push to `master`, served on the custom domain `rubenspessoa.dev` (`public/CNAME`)

## Localisation

The site ships in three languages: English (`/`, default), Brazilian Portuguese (`/pt-br`), and Austrian German (`/de`).

Every user-facing string lives in one file: [`src/i18n/ui.ts`](src/i18n/ui.ts). Components pull strings via `ui[locale]`; the locale pages under `src/pages/pt-br/` and `src/pages/de/` just render the shared components with their locale prop. Only the home and about pages are localised (`localizedPaths` in `ui.ts`); legal pages exist in English only.

When editing copy, change all three locales — the `as const` object keeps the shapes in sync at type-check time. Don't translate positioning terms literally; write what a native would say.

## Structure

```
src/
  i18n/ui.ts          all copy, three locales
  layouts/BaseLayout.astro   head, SEO/meta, JSON-LD, favicons
  components/         HomePage, AboutPage, LegalPage, Header, Footer, SvgSprite
  pages/              en at root, pt-br/ and de/ mirrors, legal pages, 404
  styles/site.css     the entire stylesheet
  assets/social-card.html    template used to produce public/images/seo/social-card.png
public/               favicons, robots.txt, app icons, portrait, CNAME
scripts/verify-dist.mjs   post-build checks on dist/
```

`astro.config.mjs` also defines redirects from retired pages (old consulting and case-study URLs) to the home page.

## Commands

```sh
pnpm install
pnpm dev        # local dev server
pnpm check      # type-check .astro and .ts files
pnpm build      # static build into dist/
pnpm verify     # check + build + scan dist/ for broken links, fused words, third-party resources
pnpm preview    # serve the built site
```

There is no test suite. `pnpm verify` is the check, and CI runs it on pull requests and before every deploy. `pnpm build` alone does not type-check: a missing locale key builds fine and ships an empty string. `pnpm check` catches it.

Notes for coding agents live in [`AGENTS.md`](AGENTS.md).
