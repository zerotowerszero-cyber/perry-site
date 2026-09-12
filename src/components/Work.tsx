const projects = [
  {
    name: "eas.cx",
    href: "https://eas.cx",
    tag: "Live",
    featured: true,
    blurb:
      "A sharp, link-first destination on the short domain eas.cx — clean, fast, and built to be remembered.",
  },
  {
    name: "Arcade experiments",
    href: "#contact",
    tag: "Games",
    featured: false,
    blurb:
      "Small playable loops and interaction studies: tight controls, punchy feedback, room to grow into full titles.",
  },
  {
    name: "Brand & launch sites",
    href: "#contact",
    tag: "Web",
    featured: false,
    blurb:
      "High-contrast marketing pages for products that need presence — dark canvases, bold type, one clear story.",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.025em] text-white">
            Projects in the wild
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            A few pieces that show how Perry thinks about craft, pace, and
            personality online.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              {...(project.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`group flex flex-col rounded-2xl border p-6 transition-colors sm:p-7 ${
                project.featured
                  ? "border-perry/40 bg-card lg:col-span-1 ring-1 ring-perry/20"
                  : "border-border bg-card hover:border-white/15"
              }`}
            >
              <div className="mb-8 flex items-center justify-between">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                    project.featured
                      ? "bg-perry/15 text-perry"
                      : "bg-white/5 text-muted"
                  }`}
                >
                  {project.tag}
                </span>
                <span className="text-[13px] text-muted transition-colors group-hover:text-white">
                  {project.href.startsWith("http") ? "Visit →" : "Talk →"}
                </span>
              </div>
              <h3 className="text-xl font-medium tracking-tight text-white">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                {project.blurb}
              </p>
              {project.featured && (
                <div className="mt-6 flex items-center gap-2 border-t border-border-subtle pt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.svg" alt="" className="h-5 w-5" />
                  <span className="font-mono text-[12px] text-muted-soft">
                    eas.cx
                  </span>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
