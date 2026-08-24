import type { ReactNode } from "react";

type SharedPanelProps = {
  children: ReactNode;
  /** Extra utility classes appended after the shared base styles. */
  className?: string;
  /** Optional test id, forwarded to the rendered element. */
  testId?: string;
};

/**
 * SharedPanel — the single reusable surface primitive for Lumina Apparel.
 *
 * Used by:
 *   - the Hero copy block on /            (app/page.tsx)
 *   - every product card on /collection   (app/collection/page.tsx)
 *   - the window of both popups           (components/NewsletterPopup.tsx,
 *                                          components/SizeGuidePopup.tsx)
 */
export default function SharedPanel({
  children,
  className = "",
  testId,
}: SharedPanelProps) {
  return (
    <div className={`shared-panel ${className}`.trim()} data-testid={testId}>
      {children}
    </div>
  );
}
