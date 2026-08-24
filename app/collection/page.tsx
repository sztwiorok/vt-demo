import SizeGuidePopup from "@/components/SizeGuidePopup";
import SpecColumns from "@/components/SpecColumns";

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
          <div
            key={product.name}
            className="product-card"
            data-testid="product-card"
          >
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
              className="btn-block"
            >
              Add to bag
            </button>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-stone-700 px-10 py-14 text-stone-300">
        <SpecColumns />
      </div>

      <div className="mt-24 border-t border-stone-300 pt-16">
        <h2 className="text-lg font-light tracking-tight">Questions</h2>
        <dl className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <dt className="text-sm font-medium">How does the fit run?</dt>
            <dd className="mt-2 text-sm leading-relaxed text-stone-600">
              True to size with room through the body. If you are between sizes
              and prefer a closer cut, size down.
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium">When do items restock?</dt>
            <dd className="mt-2 text-sm leading-relaxed text-stone-600">
              Continuously, in batches of roughly two hundred. Sold-out sizes
              return within six weeks.
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium">Where do you ship?</dt>
            <dd className="mt-2 text-sm leading-relaxed text-stone-600">
              Worldwide. European orders arrive in two to four working days, the
              rest within a fortnight.
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium">Can I return a garment?</dt>
            <dd className="mt-2 text-sm leading-relaxed text-stone-600">
              Within thirty days, unworn, in its original packaging. Return
              postage is on us.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
