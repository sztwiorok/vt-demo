const items = [
  {
    title: "Fabric",
    body: "Single-origin fibres only. The merino is spun in Biella, the linen grown in Normandy and woven in Portugal. We publish the mill for every garment.",
  },
  {
    title: "Care",
    body: "Wash cold, dry flat, skip the iron on linen. Merino wants air more than water — hang it overnight between wears.",
  },
  {
    title: "Repairs",
    body: "Every garment carries a lifetime mending guarantee. Send it back with a note and we will repair it and post it to you.",
  },
];

export default function SpecColumns() {
  return (
    <div className="grid gap-12 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.title}>
          <p className="text-xs uppercase tracking-[0.2em]">{item.title}</p>
          <p className="mt-4 text-sm leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
