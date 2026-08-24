import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-stone-300">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5"
      >
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-stone-900"
        >
          Lumina
        </Link>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
