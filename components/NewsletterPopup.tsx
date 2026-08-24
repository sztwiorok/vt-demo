"use client";

import { useEffect, useState } from "react";

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-testid="newsletter-open"
        className="btn-outline"
      >
        Join the newsletter
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Newsletter signup"
          data-testid="newsletter-popup"
          className="fixed inset-0 flex items-center justify-center p-4"
        >
          {/* Decorative scrim. */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-40 bg-stone-900/70"
          />

          <div
            className="modal-window w-full max-w-md"
            data-testid="newsletter-window"
          >
            <div className="flex items-start justify-between gap-6">
              <h2 className="text-lg font-medium tracking-tight">
                Ten percent off your first order
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                data-testid="newsletter-close"
                aria-label="Close newsletter popup"
                className="modal-close"
              >
                &times;
              </button>
            </div>
            <p className="mt-3 text-sm text-stone-600">
              New arrivals, restocks and studio notes. One email a month, never
              more.
            </p>
            <form
              className="mt-6 flex gap-3"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 border border-stone-300 px-4 py-2 text-sm outline-none focus:border-stone-900"
              />
              <button
                type="submit"
                className="bg-stone-900 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
