import type { Product } from "@/lib/products";

export default function ProductCard({
  name,
  price,
  detail,
  swatch,
}: Product) {
  return (
    <div className="product-card" data-testid="product-card">
      <div
        className={`relative mb-5 aspect-[3/4] w-full bg-gradient-to-br ${swatch}`}
      >
        <button type="button" className="micro absolute inset-x-4 bottom-4 py-3">
          Add to bag
        </button>
      </div>
      <h2 className="text-sm font-medium tracking-tight text-stone-900">
        {name}
      </h2>
      <p className="mt-1 text-xs text-stone-500">{detail}</p>
      <p className="mt-4 text-sm text-stone-900">{price}</p>
    </div>
  );
}
