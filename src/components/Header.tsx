import Link from "next/link";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-6 sm:h-20 sm:gap-6 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Perry"
            width={36}
            height={36}
            className="h-9 w-9 transition-transform group-hover:scale-105"
          />
          <span className="text-lg font-semibold tracking-tight">Perry</span>
        </Link>

        <nav
          className="flex min-w-0 flex-1 items-center justify-end gap-5 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center md:gap-8 [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm text-muted transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="shrink-0 rounded-full bg-perry px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-perry-hover sm:px-5"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
