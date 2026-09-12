import Link from "next/link";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#studio", label: "Studio" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-[#101014]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:h-16 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Perry"
            width={28}
            height={28}
            className="h-7 w-7 transition-transform group-hover:scale-105"
          />
          <span className="text-[15px] font-medium tracking-tight text-white">
            Perry
          </span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] text-muted-soft transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-[#101014] transition-opacity hover:opacity-90"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
