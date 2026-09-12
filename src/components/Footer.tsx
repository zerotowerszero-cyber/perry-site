import Link from "next/link";

const columns = [
  {
    title: "Studio",
    links: [
      { href: "#work", label: "Work" },
      { href: "#services", label: "Services" },
      { href: "#packages", label: "Packages" },
      { href: "#studio", label: "How we work" },
    ],
  },
  {
    title: "Projects",
    links: [
      {
        href: "https://eas.cx",
        label: "eas.cx",
        external: true,
      },
      { href: "#contact", label: "Start a project" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "mailto:hello@perry.studio", label: "hello@perry.studio" },
      { href: "#contact", label: "Say hello" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="Perry"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                Perry
              </span>
            </Link>
            <p className="mt-4 max-w-[220px] text-[13px] leading-relaxed text-muted">
              Websites, games & digital work.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-muted-soft">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-[13px] text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-muted-soft">
            © {new Date().getFullYear()} Perry. All rights reserved.
          </p>
          <p className="text-[12px] text-muted-soft">
            Built with care · light canvas · red mark
          </p>
        </div>
      </div>
    </footer>
  );
}
