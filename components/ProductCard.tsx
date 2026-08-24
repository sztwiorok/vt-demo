type ProductCardProps = {
  name: string;
  price: string;
  detail: string;
  swatch: string;
};

export default function ProductCard({
  name,
  price,
  detail,
  swatch,
}: ProductCardProps) {
  return (
    <div className="product-card" data-testid="product-card">
      <div
        aria-hidden="true"
        className={`mb-5 aspect-[3/4] w-full bg-gradient-to-br ${swatch}`}
      />
      <h2 className="text-sm font-medium tracking-tight text-stone-900">
        {name}
      </h2>
      <p className="mt-1 text-xs text-stone-500">{detail}</p>
      <p className="mt-4 text-sm text-stone-900">{price}</p>
      <button type="button" className="btn mt-5 w-full">
        Add to bag
      </button>
    </div>
  );
}
