export type Product = {
  name: string;
  price: string;
  detail: string;
  tag: string;
  sizes: string[];
  swatch: string;
};

export const products: Product[] = [
  {
    name: "Merino Crew",
    price: "€145",
    detail: "Fine-gauge merino wool",
    tag: "AW 25",
    sizes: ["XS", "S", "M", "L", "XL"],
    swatch: "from-stone-700 to-stone-900 text-stone-300",
  },
  {
    name: "Linen Overshirt",
    price: "€180",
    detail: "Washed European linen",
    tag: "Restocked",
    sizes: ["S", "M", "L", "XL"],
    swatch: "from-stone-600 via-stone-700 to-stone-900 text-stone-300",
  },
  {
    name: "Cotton Tee",
    price: "€65",
    detail: "Heavyweight organic cotton",
    tag: "New",
    sizes: ["XS", "S", "M", "L", "XL"],
    swatch: "from-stone-600 to-stone-900 text-stone-300",
  },
  {
    name: "Wide Trouser",
    price: "€210",
    detail: "Japanese cotton twill",
    tag: "Last pieces",
    sizes: ["30", "32", "34", "36"],
    swatch: "from-stone-800 via-stone-600 to-stone-900 text-stone-300",
  },
];
