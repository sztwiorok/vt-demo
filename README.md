# Lumina Apparel — Visual Regression Testing Demo

A three-page static Next.js site (App Router + Tailwind) built to demonstrate a
class of bug that **functional E2E tests cannot catch**: a CSS-only regression
that leaves the DOM, the accessibility tree and every click target intact.

## Pages

| Route         | Contents                                                |
| ------------- | ------------------------------------------------------- |
| `/`           | Hero with copy panel + CTA, editorial grid, newsletter popup |
| `/collection` | 4-item product grid, size-guide popup                    |
| `/contact`    | Contact form + studio details                            |

Popups are click-triggered (`Join the newsletter`, `Size guide`) and close via
their `×` button or the Escape key.

## The shared dependency

`components/SharedPanel.tsx` renders a single global class, `.shared-panel`,
declared once in `app/globals.css`:

```css
.shared-panel {
  @apply bg-white p-6 relative z-50 rounded-sm shadow-sm;
}
```

That one declaration is the visual foundation of **three unrelated features**:

1. the Hero copy block — `app/page.tsx`
2. every product card — `app/collection/page.tsx`
3. the window of both popups — `components/NewsletterPopup.tsx`,
   `components/SizeGuidePopup.tsx`

`bg-white` is what makes the popup readable over its dark scrim, `z-50` is what
lifts the popup above that scrim, and `p-6` is what keeps every product card
from collapsing onto its own text. Nothing in the Hero's source file says so.

## Why the E2E suite is blind to it

`e2e/` asserts behaviour: routes resolve, headings render, popups open, close
buttons close them, the form accepts input, the grid holds four cards. Change
`.shared-panel` to `bg-transparent p-0 z-0` and every one of those assertions
still passes — the elements are present, visible per the DOM, and hit-testable.
The popup scrim is deliberately `pointer-events-none`, so it never intercepts a
click even when it paints over the panel. Only a **pixel** comparison of `/`,
`/collection`, and both open popups reveals the damage.

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

Point any file server at `out/` and it works with no rewrite rules — `/` and
`/collection/` resolve to their `index.html` directly. `trailingSlash: true` is
what produces `collection/index.html` instead of a bare `collection.html`,
which a dumb file server could not resolve from `/collection` without
clean-URL support.

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

## Suggested visual-test coverage

Baseline these four states, then re-shoot them after any styling change:

- `/` — full page (Hero panel)
- `/collection` — full page (product grid)
- `/` with the newsletter popup open
- `/collection` with the size-guide popup open
