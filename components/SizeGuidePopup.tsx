"use client";

import { useEffect, useState } from "react";
import SharedPanel from "@/components/SharedPanel";

const rows = [
  { size: "XS", chest: "84", waist: "68", length: "64" },
  { size: "S", chest: "90", waist: "74", length: "66" },
  { size: "M", chest: "96", waist: "80", length: "68" },
  { size: "L", chest: "102", waist: "86", length: "70" },
  { size: "XL", chest: "108", waist: "92", length: "72" },
];

export default function SizeGuidePopup() {
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
        data-testid="size-guide-open"
        className="text-xs uppercase tracking-[0.2em] text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900"
      >
        Size guide
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Size guide"
          data-testid="size-guide-popup"
          className="fixed inset-0 flex items-center justify-center p-4"
        >
          {/* Decorative scrim. Purely visual — never swallows clicks. */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-40 bg-stone-900/70"
          />

          <SharedPanel className="w-full max-w-lg" testId="size-guide-window">
            <div className="flex items-start justify-between gap-6">
              <h2 className="text-lg font-medium tracking-tight">Size guide</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                data-testid="size-guide-close"
                aria-label="Close size guide"
                className="text-xl leading-none text-stone-500 transition-colors hover:text-stone-900"
              >
                &times;
              </button>
            </div>
            <p className="mt-3 text-sm text-stone-600">
              All measurements in centimetres. Garments are cut for a relaxed
              fit.
            </p>
            <table className="mt-6 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-xs uppercase tracking-[0.15em] text-stone-500">
                  <th className="py-2 font-normal">Size</th>
                  <th className="py-2 font-normal">Chest</th>
                  <th className="py-2 font-normal">Waist</th>
                  <th className="py-2 font-normal">Length</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.size} className="border-b border-stone-100">
                    <td className="py-2 font-medium">{row.size}</td>
                    <td className="py-2 text-stone-600">{row.chest}</td>
                    <td className="py-2 text-stone-600">{row.waist}</td>
                    <td className="py-2 text-stone-600">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </SharedPanel>
        </div>
      )}
    </>
  );
}
