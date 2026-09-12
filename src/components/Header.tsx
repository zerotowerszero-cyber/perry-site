import Link from "next/link";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#studio", label: "Studio" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-[60px] sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Perry"
            width={28}
            height={28}
            className="h-7 w-7 transition-transform group-hover:scale-105"
          />
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            Perry
          </span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full border border-border bg-white px-4 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:bg-card sm:inline-flex"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}
