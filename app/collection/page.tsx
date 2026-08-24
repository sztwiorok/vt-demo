import SharedPanel from "@/components/SharedPanel";
import SizeGuidePopup from "@/components/SizeGuidePopup";

const products = [
  {
    name: "Merino Crew",
    price: "€145",
    detail: "Fine-gauge merino wool",
    swatch: "from-stone-300 to-stone-400",
  },
  {
    name: "Linen Overshirt",
    price: "€180",
    detail: "Washed European linen",
    swatch: "from-amber-100 to-stone-300",
  },
  {
    name: "Cotton Tee",
    price: "€65",
    detail: "Heavyweight organic cotton",
    swatch: "from-stone-200 to-stone-300",
  },
  {
    name: "Wide Trouser",
    price: "€210",
    detail: "Japanese cotton twill",
    swatch: "from-stone-400 to-stone-600",
  },
];

export default function CollectionPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-light tracking-tight">The Collection</h1>
          <p className="mt-2 text-sm text-stone-600">
            Four essentials, restocked continuously.
          </p>
        </div>
        <SizeGuidePopup />
      </div>

      <div
        data-testid="product-grid"
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {products.map((product) => (
          <SharedPanel key={product.name} testId="product-card">
            <div
              aria-hidden="true"
              className={`mb-5 aspect-[3/4] w-full bg-gradient-to-br ${product.swatch}`}
            />
            <h2 className="text-sm font-medium tracking-tight text-stone-900">
              {product.name}
            </h2>
            <p className="mt-1 text-xs text-stone-500">{product.detail}</p>
            <p className="mt-4 text-sm text-stone-900">{product.price}</p>
            <button
              type="button"
              className="mt-5 w-full border border-stone-900 py-2 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-stone-900 hover:text-white"
            >
              Add to bag
            </button>
          </SharedPanel>
        ))}
      </div>
    </section>
  );
}
