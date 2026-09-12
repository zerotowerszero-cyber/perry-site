const services = [
  {
    title: "Websites",
    description:
      "Marketing sites, product pages, and web apps with crisp typography, fast loads, and a point of view.",
  },
  {
    title: "Games",
    description:
      "Playable prototypes and polished interactive pieces — from arcade energy to quiet experimental toys.",
  },
  {
    title: "Digital work",
    description:
      "Brand systems, motion, tooling, and the odd brief that does not fit a neat box. If it lives on a screen, we can shape it.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-perry">
            What we make
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Three lanes. One standard.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Whether it is a launch site, a game loop, or something in between,
            the bar is the same: clear, memorable, and built to last.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-border bg-surface p-8 transition-colors hover:border-perry/40"
            >
              <div className="mb-6 h-1.5 w-10 rounded-full bg-perry transition-all group-hover:w-14" />
              <h3 className="mb-3 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
