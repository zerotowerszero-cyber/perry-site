import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border-subtle">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Perry"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="text-[14px] font-medium tracking-tight text-white">
            Perry
          </span>
        </Link>
        <p className="text-[13px] text-muted">
          © {new Date().getFullYear()} Perry. Websites, games & digital work.
        </p>
        <div className="flex gap-6 text-[13px] text-muted">
          <a href="#work" className="transition-colors hover:text-white">
            Work
          </a>
          <a href="#services" className="transition-colors hover:text-white">
            Services
          </a>
          <a
            href="https://eas.cx"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            eas.cx
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
