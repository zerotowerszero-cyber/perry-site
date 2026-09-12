import Image from "next/image";
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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-20 sm:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Perry"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full transition-transform group-hover:scale-105"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">Perry</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-perry px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-perry-hover sm:px-5"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
