export type Product = {
  name: string;
  price: string;
  detail: string;
  swatch: string;
};

export const products: Product[] = [
  {
    name: "Merino Crew",
    price: "€145",
    detail: "Fine-gauge merino wool",
    swatch: "from-stone-700 to-stone-900",
  },
  {
    name: "Linen Overshirt",
    price: "€180",
    detail: "Washed European linen",
    swatch: "from-stone-600 via-stone-700 to-stone-900",
  },
  {
    name: "Cotton Tee",
    price: "€65",
    detail: "Heavyweight organic cotton",
    swatch: "from-stone-800 to-stone-600",
  },
  {
    name: "Wide Trouser",
    price: "€210",
    detail: "Japanese cotton twill",
    swatch: "from-stone-900 to-stone-700",
  },
];
