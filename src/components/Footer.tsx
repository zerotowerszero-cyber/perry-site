import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Perry"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="font-semibold tracking-tight">Perry</span>
        </Link>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Perry. Websites, games & digital work.
        </p>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#work" className="hover:text-white">
            Work
          </a>
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
