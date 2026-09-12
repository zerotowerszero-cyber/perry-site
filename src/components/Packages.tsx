const tiers = [
  {
    name: "Studio",
    price: "Project",
    blurb: "Focused builds — a launch page, a prototype, or a brand pass.",
    cta: "Start a project",
    ctaStyle: "primary" as const,
    features: [
      "Single-surface delivery",
      "Design + build in one lane",
      "2–4 week typical scope",
      "Async check-ins",
    ],
  },
  {
    name: "Launch",
    price: "Retainer",
    blurb: "Ongoing product and marketing work with a shared backlog.",
    cta: "Talk about Launch",
    ctaStyle: "primary" as const,
    features: [
      "Multi-surface roadmap",
      "Web + motion + systems",
      "Priority turnaround",
      "Weekly sync",
    ],
  },
  {
    name: "Partner",
    price: "Custom",
    blurb: "Embedded studio partnership for teams that need continuous craft.",
    cta: "Contact Perry",
    ctaStyle: "secondary" as const,
    features: [
      "Dedicated capacity",
      "Games + web + brand",
      "Shared design system",
      "On-call for launches",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,4.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
            Packages for every brief
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted sm:text-[17px]">
            Perry service packages — scoped to websites, games, and digital
            work. No fake SaaS pricing; just clear ways to start.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className="flex flex-col rounded-[28px] bg-card p-7 sm:p-8"
            >
              <h3 className="font-display text-[22px] font-semibold tracking-tight text-foreground">
                {tier.name}
              </h3>
              <p className="mt-2 text-[28px] font-semibold tracking-tight text-foreground">
                {tier.price}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                {tier.blurb}
              </p>
              <a
                href="#contact"
                className={`mt-7 inline-flex h-11 items-center justify-center rounded-full text-[13px] font-medium transition-opacity hover:opacity-90 ${
                  tier.ctaStyle === "primary"
                    ? "bg-foreground text-white"
                    : "bg-button-light text-foreground"
                }`}
              >
                {tier.cta}
              </a>
              <ul className="mt-8 space-y-3 border-t border-border-subtle pt-7">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[13px] text-muted"
                  >
                    <span className="mt-0.5 text-muted-soft" aria-hidden>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
