function TrafficLights() {
  return (
    <div className="flex gap-1.5" aria-hidden>
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    </div>
  );
}

function ChatMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
        <TrafficLights />
        <span className="font-mono text-[11px] tracking-wide text-muted">
          studio · live
        </span>
        <span className="h-2 w-2 rounded-full bg-perry" aria-hidden />
      </div>
      <div className="space-y-4 p-5 sm:p-6">
        <div className="flex gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="" className="mt-0.5 h-6 w-6 shrink-0" />
          <div className="rounded-2xl rounded-tl-md bg-card-elevated px-4 py-3 text-[13px] leading-relaxed text-muted-soft">
            Launch site is live. Hero type scaled, eas.cx linked in the
            projects strip, and the brand mark is locked red.
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-white/8 px-4 py-3 text-[13px] leading-relaxed text-white">
            Ship the games prototype next — keep the same dark canvas.
          </div>
        </div>
        <div className="flex gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="" className="mt-0.5 h-6 w-6 shrink-0" />
          <div className="rounded-2xl rounded-tl-md bg-card-elevated px-4 py-3 text-[13px] leading-relaxed text-muted-soft">
            On it. Arcade loop first, then polish feedback and motion.
          </div>
        </div>
      </div>
    </div>
  );
}

function StudioMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
        <TrafficLights />
        <span className="font-mono text-[11px] tracking-wide text-muted">
          board · websites
        </span>
        <span
          className="rounded-full bg-violet/20 px-2 py-0.5 font-mono text-[10px] text-violet"
        >
          active
        </span>
      </div>
      <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6">
        {[
          { label: "Homepage", status: "Shipped", tone: "text-perry" },
          { label: "Product page", status: "In review", tone: "text-violet" },
          { label: "Motion kit", status: "Draft", tone: "text-muted" },
          { label: "Brand tokens", status: "Locked", tone: "text-perry" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-border-subtle bg-card-elevated p-4"
          >
            <p className="text-[13px] font-medium text-white">{item.label}</p>
            <p className={`mt-1 text-[12px] ${item.tone}`}>{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
        <TrafficLights />
        <span className="font-mono text-[11px] tracking-wide text-muted">
          play · prototype
        </span>
        <span className="text-[11px] text-muted">0:12</span>
      </div>
      <div className="relative flex aspect-[16/10] items-center justify-center bg-[#0c0c10]">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,38,60,0.12),transparent_65%)]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt=""
          className="relative h-16 w-16 opacity-90 sm:h-20 sm:w-20"
        />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-md">
          <span className="text-[12px] text-muted-soft">
            Recording control feel…
          </span>
          <span className="rounded-full bg-perry px-2.5 py-0.5 text-[11px] font-medium text-white">
            Capture
          </span>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Brief like a teammate",
    body: "Hand Perry a launch, a game loop, or a brand system. We keep context on how you work and come back when a decision is needed.",
    mock: <ChatMock />,
  },
  {
    title: "Run many lanes at once",
    body: "One thread on the marketing site, one on the prototype, one on the identity system — parallel work without losing the plot.",
    mock: <StudioMock />,
  },
  {
    title: "Show once. Ship again.",
    body: "Walk through a workflow once. We capture the pattern — type scale, motion, interaction grammar — and reuse it across the next build.",
    mock: <TeachMock />,
  },
];

export default function Features() {
  return (
    <section id="studio" className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.025em] text-white">
            Craft that finishes the job
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            From first sketch to live URL — websites, games, and digital
            products with an editorial eye and a builder&apos;s pace.
          </p>
        </div>

        <div className="flex flex-col gap-28 sm:gap-36">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.02em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                  {feature.body}
                </p>
              </div>
              <div>{feature.mock}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
