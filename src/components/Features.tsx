function TrafficLights() {
  return (
    <div className="flex gap-1.5" aria-hidden>
      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
      <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
    </div>
  );
}

function SiteMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, #F2FEFF 0%, transparent 55%), radial-gradient(ellipse at 90% 80%, #fff0e8 0%, transparent 50%)",
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-border-subtle px-3 py-2.5">
          <TrafficLights />
          <span className="text-[10px] font-medium text-muted">Computer</span>
          <span className="rounded-full bg-[#fff4e5] px-2 py-0.5 text-[10px] font-medium text-[#c47a10]">
            ● You&apos;re in control
          </span>
        </div>
        <div className="space-y-3 p-4">
          <p className="text-[12px] leading-relaxed text-foreground">
            Sign in so Perry can ship the support-ready launch page.
          </p>
          <div className="rounded-xl border border-border bg-card p-3">
            <div className="mb-2 h-2 w-16 rounded bg-border" />
            <div className="mb-2 h-8 rounded-lg border border-border bg-white" />
            <div className="h-8 rounded-lg bg-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TeachMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "linear-gradient(135deg, #fff5eb 0%, #eef8ff 50%, #f9f8f6 100%)",
        }}
      />
      <div className="relative">
        <div className="flex items-center gap-2 border-b border-border-subtle bg-white/70 px-3 py-2.5 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-orange" />
          <span className="text-[11px] font-medium text-foreground">
            Weekly Reporting is watching and learning
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-4">
          {[40, 70, 55, 85, 45, 60].map((h, i) => (
            <div
              key={i}
              className="flex aspect-square items-end rounded-lg bg-white/80 p-2"
            >
              <div
                className="w-full rounded-md bg-cyan/70"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SmartMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="space-y-2.5 p-4">
        {["Type scale locked", "Motion tokens synced", "eas.cx live"].map(
          (label, i) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-xl bg-card px-3 py-2.5"
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white ${
                  i === 2 ? "bg-perry" : "bg-cyan"
                }`}
              >
                ✓
              </span>
              <span className="text-[12px] font-medium text-foreground">
                {label}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function ConnectMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="flex flex-wrap gap-2 p-4">
        {["Web", "Games", "Brand", "Product", "Motion"].map((tag, i) => (
          <span
            key={tag}
            className={`rounded-full px-3 py-1.5 text-[11px] font-medium ${
              i === 0
                ? "bg-foreground text-white"
                : "border border-border bg-card text-muted"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mx-4 mb-4 rounded-xl border border-border bg-cyan-soft p-3">
        <p className="text-[12px] leading-relaxed text-foreground">
          One brief. Multiple lanes. Same standard of craft.
        </p>
      </div>
    </div>
  );
}

const cards = [
  {
    title: "Perry works where you work",
    body: "Share a brief once. Perry uses your tools and workflows the way you would — including the ones that are harder to navigate.",
    mock: <SiteMock />,
  },
  {
    title: "Show how it’s done",
    body: "Walk through a launch or a game loop once. Perry captures the pattern and ships the next version with the same grammar.",
    mock: <TeachMock />,
  },
  {
    title: "Projects get sharper over time",
    body: "Tokens, type, and interaction language compound. Each build leaves the next one easier — and more distinctive.",
    mock: <SmartMock />,
  },
  {
    title: "Connect the lanes",
    body: "Websites, games, and brand systems share one studio. Parallel work without losing the plot.",
    mock: <ConnectMock />,
  },
];

export default function Features() {
  return (
    <section id="studio" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="mx-auto mb-14 max-w-2xl text-center text-[16px] leading-relaxed text-muted sm:text-[17px]">
          …collaborate where it makes sense, and keep shipping around the clock.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-[28px] bg-card p-6 sm:p-8"
            >
              <h3 className="font-display text-[22px] font-semibold tracking-[-0.02em] text-foreground sm:text-[24px]">
                {card.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                {card.body}
              </p>
              <div className="mt-8 flex-1">{card.mock}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
