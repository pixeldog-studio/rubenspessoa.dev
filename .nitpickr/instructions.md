# Review instructions for rubenspessoa.dev

Static Astro site for Pixeldog, published to GitHub Pages from `master`. There is no backend and no runtime logging, so a bad build ships straight to visitors. Flag these, in priority order:

1. **Third-party requests.** The site promises no tracking. Flag any external `script`, `link`, `img`, `iframe`, font, CDN, remote CSS `@import`/`url()`, analytics or embed. Outbound `<a>` links are fine.
2. **Locale parity.** Copy lives in `src/i18n/ui.ts` for `en`, `pt-br` and `de`. Flag a key added or changed in one locale but not the others, a hard-coded user-facing string in a component, or a new page under `src/pages/pt-br/` or `src/pages/de/` without matching entries in `localizedPaths` (`src/i18n/ui.ts`) and `LOCALIZED_PATHS` (`scripts/verify-dist.mjs`). Those two lists must stay in sync.
3. **SEO correctness.** Every page passes `title`, `description` and an absolute `https://rubenspessoa.dev/...` `canonicalUrl` to `src/layouts/BaseLayout.astro`. Localised pages pass hreflang `alternates` covering `en-GB`, `pt-BR`, `de-AT` and `x-default`, each pointing at the right locale URL. Flag a canonical pointing at another locale, a relative canonical, or JSON-LD fields (in `HomePage.astro`, `AboutPage.astro`) that contradict the visible page. JSON-LD is emitted with `set:html={JSON.stringify(jsonLd)}`, which does not escape `<`; flag a value fed into it that doesn't come from a literal or `src/i18n/ui.ts`.
4. **Broken URLs.** Removing an entry from `redirects` in `astro.config.mjs`, deleting `public/CNAME`, or moving a page without a redirect breaks live links or the custom domain.
5. **Fused words.** An inline tag (`a`, `strong`, `em`, `code`, `time`) or `{expression}` on its own line next to text. Astro's compressor drops that whitespace, so the built HTML reads "See the<a>imprint</a>for".
6. **Legal pages.** `src/pages/imprint/`, `src/pages/privacy/` and `src/pages/terms/` must keep the full name "Rubens Pessoa de Barros Filho". Flag a company suffix such as "e.U." or "GmbH" after "Pixeldog", which is a trade name only, and any legal-page edit without a note of owner sign-off.
7. **Client JS.** The only scripts are the theme bootstrap in `BaseLayout.astro` and the controls in `src/components/Footer.astro`. Flag a new island, client framework or dependency for a small feature, and `localStorage` access without the existing try/catch.
8. **Check integrity.** Loosening a check in `scripts/verify-dist.mjs`, or dropping a step from `pnpm verify`, to make a build pass.
9. **Acceptance criteria.** If the PR description lists acceptance criteria, flag a changed line that contradicts one. Don't flag a missing description.

Don't comment on formatting, CSS taste, naming, copy tone or anything `astro check` already catches.
