import SizeGuidePopup from "@/components/SizeGuidePopup";
import SpecColumns from "@/components/SpecColumns";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

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
          <ProductCard key={product.name} {...product} />
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
