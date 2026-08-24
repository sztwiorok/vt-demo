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

## Running it

```bash
npm install
npx playwright install chromium

npm run build
npm run start          # http://localhost:3000

npm run test:e2e       # starts the server itself if one isn't running
```

## Suggested visual-test coverage

Baseline these four states, then re-shoot them after any styling change:

- `/` — full page (Hero panel)
- `/collection` — full page (product grid)
- `/` with the newsletter popup open
- `/collection` with the size-guide popup open
