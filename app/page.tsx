import Link from "next/link";
import SharedPanel from "@/components/SharedPanel";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        data-testid="hero"
        className="relative isolate overflow-hidden bg-gradient-to-br from-stone-700 via-stone-500 to-stone-800"
      >
        {/* Stand-in for the hero photography */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_55%)]"
        />

        <div className="mx-auto flex max-w-5xl items-center px-6 py-28">
          <SharedPanel className="max-w-xl" testId="hero-panel">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Autumn / Winter
            </p>
            <h1 className="mt-4 text-4xl font-light leading-tight tracking-tight text-stone-900">
              Fewer pieces. Chosen carefully.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Lumina Apparel makes quiet essentials in natural fibres — cut once,
              worn for years. No seasons to chase, no logos to outgrow.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/collection"
                data-testid="hero-cta"
                className="bg-stone-900 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-stone-700"
              >
                Shop the collection
              </Link>
              <NewsletterPopup />
            </div>
          </SharedPanel>
        </div>
      </section>

      {/* Editorial */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Natural fibres",
              body: "Organic cotton, European linen and responsibly sourced merino. Nothing blended for cost.",
            },
            {
              title: "Made in small runs",
              body: "Each style is produced in limited batches by a family-run atelier in Porto.",
            },
            {
              title: "Repaired, not replaced",
              body: "Free mending for the lifetime of the garment. Send it back and we will fix it.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="text-sm uppercase tracking-[0.2em] text-stone-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
