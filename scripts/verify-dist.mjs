// Post-build checks on dist/ for the failure modes `astro check` can't see.
// Run after `astro build`; exits non-zero with one line per problem.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const SITE_ORIGIN = 'https://rubenspessoa.dev';
const LOCALE_PREFIXES = ['', '/pt-br', '/de'];
const LOCALIZED_PATHS = ['/', '/about/'];
// Text-level tags that sit mid-sentence. <span> is left out: it's mostly used
// for icons whose spacing comes from CSS margins.
const INLINE_TAGS = 'a|strong|em|b|i|code|time|abbr';

if (!existsSync(DIST)) {
  console.error('dist/ not found. Run `pnpm build` first.');
  process.exit(1);
}

const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));
if (!htmlFiles.length) {
  console.error('dist/ has no HTML files. Did `pnpm build` fail?');
  process.exit(1);
}
const problems = [];
const report = (file, msg) => problems.push(`${relative(DIST, file) || 'site'}: ${msg}`);

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (isRedirectStub(html)) continue;

  // Visible text only: the checks below must not trip on JSON-LD or inline JS.
  const body = html
    .replace(/<script\b[\s\S]*?<\/script>/g, '')
    .replace(/<style\b[\s\S]*?<\/style>/g, '');

  // 1. Astro's compressor drops newline-only whitespace next to inline elements,
  //    fusing words ("built by<a>Rubens</a>and"). Flag letter/punct touching a tag.
  for (const m of body.matchAll(new RegExp(`[\\p{L}\\p{N},;:]<(${INLINE_TAGS})[\\s>]`, 'gu'))) {
    report(file, `missing space before <${m[1]}>: …${context(body, m.index)}…`);
  }
  for (const m of body.matchAll(new RegExp(`</(${INLINE_TAGS})>[\\p{L}\\p{N}]`, 'gu'))) {
    report(file, `missing space after </${m[1]}>: …${context(body, m.index)}…`);
  }

  // 2. A missing translation renders as nothing or as the literal "undefined".
  if (/>\s*undefined\s*</.test(body) || /="undefined"/.test(body)) {
    report(file, 'literal "undefined" in output (missing i18n string?)');
  }
  for (const m of body.matchAll(/<a\b([^>]*)>\s*<\/a>/g)) {
    if (!/aria-label=|title=/.test(m[1])) report(file, `empty link: <a${m[1]}></a>`);
  }
  if (/<title>\s*<\/title>/.test(html)) report(file, 'empty <title>');

  // 3. Zero third-party requests by design: no external scripts, styles, frames,
  //    images or fonts. Plain outbound <a href> links are fine.
  for (const m of html.matchAll(/<(script|link|iframe|img|source|video|audio|embed|object)\b[^>]*\b(?:src|href|srcset)="([^"]+)"/g)) {
    const [, tag, url] = m;
    if (tag === 'link' && /rel="(canonical|alternate)"/.test(m[0])) continue;
    if (isExternal(url)) report(file, `third-party resource in <${tag}>: ${url}`);
  }

  // 4. Internal links and assets must resolve to a file in dist/. Meta `content`
  //    covers og:image / og:url; only absolute site URLs count there.
  for (const m of html.matchAll(/\b(?:href|src)="([^"]+)"|\bcontent="(https:\/\/rubenspessoa\.dev[^"]*)"/g)) {
    const url = m[1] ?? m[2];
    const target = toLocalPath(url);
    if (target && !resolves(target)) report(file, `broken internal link: ${url}`);
  }
}

// 3b. Same rule for bundled CSS: no remote @import or url().
for (const file of walk(DIST).filter((f) => f.endsWith('.css'))) {
  const css = readFileSync(file, 'utf8');
  for (const m of css.matchAll(/(?:@import\s+|url\()\s*["']?((?:https?:)?\/\/[^"')\s]+)/g)) {
    if (isExternal(m[1])) report(file, `third-party resource in CSS: ${m[1]}`);
  }
}

// 5. Every localised page exists in every locale.
for (const prefix of LOCALE_PREFIXES) {
  for (const path of LOCALIZED_PATHS) {
    if (!resolves(prefix + path)) report(DIST, `missing localised page ${prefix + path}`);
  }
}

if (problems.length) {
  console.error(`verify-dist: ${problems.length} problem(s)\n`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log(`verify-dist: ${htmlFiles.length} HTML files OK`);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function isRedirectStub(html) {
  return /<meta http-equiv="refresh"/.test(html);
}

function context(text, index) {
  return text.slice(Math.max(0, index - 30), index + 30).replace(/\s+/g, ' ');
}

function isExternal(url) {
  return /^(https?:)?\/\//.test(url) && !(url === SITE_ORIGIN || url.startsWith(SITE_ORIGIN + '/'));
}

function toLocalPath(url) {
  if (url.startsWith(SITE_ORIGIN)) url = url.slice(SITE_ORIGIN.length) || '/';
  if (!url.startsWith('/') || url.startsWith('//')) return null;
  return decodeURI(url.split(/[?#]/)[0]);
}

function resolves(path) {
  const full = join(DIST, path);
  if (existsSync(full) && statSync(full).isFile()) return true;
  // GitHub Pages serves /x/ from x/index.html, or from x.html (e.g. 404.html).
  return existsSync(join(full, 'index.html')) || existsSync(full.replace(/\/$/, '') + '.html');
}
