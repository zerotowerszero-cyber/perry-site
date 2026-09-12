const projects = [
  {
    name: "eas.cx",
    href: "https://eas.cx",
    tag: "Live project",
    blurb:
      "A sharp, link-first destination on the short domain eas.cx — clean, fast, and built to be remembered.",
  },
  {
    name: "Arcade experiments",
    href: "#contact",
    tag: "Games",
    blurb:
      "Small playable loops and interaction studies: tight controls, punchy feedback, and room to grow into full titles.",
  },
  {
    name: "Brand & launch sites",
    href: "#contact",
    tag: "Web",
    blurb:
      "High-contrast marketing pages for products that need presence — dark canvases, bold type, and a single clear story.",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-perry">
              Selected work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Projects in the wild
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            A few pieces that show how Perry thinks about craft, pace, and
            personality online.
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                {...(project.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-perry/50 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-perry">
                      {project.name}
                    </h3>
                    <span className="rounded-full border border-white/10 px-3 py-0.5 text-xs text-muted">
                      {project.tag}
                    </span>
                  </div>
                  <p className="max-w-2xl text-muted">{project.blurb}</p>
                </div>
                <span className="shrink-0 text-sm font-medium text-perry opacity-80 transition-opacity group-hover:opacity-100">
                  {project.href.startsWith("http") ? "Visit site" : "Get in touch"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
