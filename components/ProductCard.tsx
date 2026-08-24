import type { Product } from "@/lib/products";

export default function ProductCard({
  name,
  price,
  detail,
  tag,
  sizes,
  swatch,
}: Product) {
  return (
    <div className="product-card" data-testid="product-card">
      <div
        className={`relative mb-5 aspect-[3/4] w-full bg-gradient-to-br ${swatch}`}
      >
        <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.2em] opacity-70">
          {tag}
        </span>

        <div className="absolute inset-x-4 bottom-16 flex justify-between text-[10px] uppercase tracking-[0.15em] opacity-80">
          {sizes.map((size) => (
            <span key={size}>{size}</span>
          ))}
        </div>

        <button
          type="button"
          className="micro absolute inset-x-4 bottom-4 border border-current py-2"
        >
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
