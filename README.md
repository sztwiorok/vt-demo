# Lumina Apparel

Marketing site for a minimalist clothing brand. Static Next.js (App Router) +
Tailwind CSS.

## Pages

| Route         | Contents                                                     |
| ------------- | ------------------------------------------------------------ |
| `/`           | Hero, editorial grid, newsletter popup                       |
| `/collection` | Product grid (4 items), size-guide popup                     |
| `/contact`    | Contact form + studio details                                |

## Build output

`next build` is configured with `output: "export"` + `trailingSlash: true`
(`next.config.mjs`), so the build writes a self-contained static tree to
**`out/`** — every route as its own `index.html`:

```
out/
  index.html              /
  collection/index.html   /collection
  contact/index.html      /contact
  404.html
  404/index.html
  _next/static/...        CSS + JS chunks
```

Point any file server at `out/` and it works with no rewrite rules.
`trailingSlash: true` is what produces `collection/index.html` instead of a bare
`collection.html`, which a plain file server could not resolve from
`/collection` without clean-URL support.

Note that `.next/server/app/*.html` is **not** the deliverable — those are
internal build artifacts with no assets alongside them. Ship `out/`.

## Running it

```bash
npm ci
npx playwright install chromium   # required once — see CI below

npm run build          # → out/
npm run start          # serves out/ on http://localhost:3000

npm run tests          # alias for test:e2e — starts the server itself if one isn't running
npm run test:e2e       # same thing
```

`npm run start` is a plain static file server (`serve out`), not `next start` —
`next start` is incompatible with `output: "export"`. Any equivalent works:

```bash
npx serve out
python3 -m http.server -d out 3000
caddy file-server --root out --listen :3000
```

## Tests

`e2e/` holds the Playwright suite: routing, the product grid, the contact form,
and both popups (open, interact, close via button and via Escape).

```bash
npm run tests
```

## CI

**`npm install` does not download browsers.** It installs the Playwright
library only; the Chromium binary is a separate ~350 MB download into
`~/.cache/ms-playwright`. On a developer machine it is usually already there
from another project, so the step is easy to forget — a fresh CI container has
an empty cache and every test fails at `browserType.launch` with
*"Executable doesn't exist at .../chromium_headless_shell-<rev>/..."*.

So CI needs three steps, in order:

```bash
npm ci
npx playwright install --with-deps chromium   # --with-deps adds the Linux system libs
npm run build                                 # emits out/
npx playwright test
```

Or the single wrapper script:

```bash
npm ci && npm run test:e2e:ci
```

`@playwright/test` is pinned to an **exact** version, not a caret range: each
Playwright release demands one specific browser revision, so an unpinned range
can resolve to a version whose browser is not in the CI cache (or in a prebuilt
Docker image) and reintroduce the same failure.

Two ways to provision the browser:

- run `npx playwright install --with-deps chromium` in the job (as above), or
- run the job in `mcr.microsoft.com/playwright:v1.62.1-noble`, which ships the
  browsers preinstalled. The image tag **must** match the pinned Playwright
  version, otherwise the revision in the image will not be the one requested.

A ready-to-use GitHub Actions job lives in `.github/workflows/e2e.yml`.
