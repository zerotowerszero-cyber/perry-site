function ProductMock() {
  return (
    <div className="relative mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-t-[20px] border border-b-0 border-border bg-card shadow-[0_-8px_40px_rgba(10,10,10,0.06)]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-white px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-3 flex-1">
          <div className="mx-auto flex h-7 max-w-xs items-center justify-center rounded-md bg-card text-[11px] text-muted">
            perry.studio
          </div>
        </div>
      </div>

      <div className="flex min-h-[320px] sm:min-h-[400px]">
        {/* Sidebar */}
        <aside className="hidden w-[240px] shrink-0 border-r border-border bg-card p-4 sm:block">
          <div className="mb-4 flex h-9 items-center gap-2 rounded-full border border-border bg-white px-3 text-[12px] text-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3-3" />
            </svg>
            Search
          </div>
          <p className="mb-2 px-2 text-[11px] font-medium uppercase tracking-wider text-muted-soft">
            Projects
          </p>
          <ul className="space-y-1">
            {[
              { name: "eas.cx", sub: "Live site", color: "#0093A3" },
              { name: "Arcade", sub: "Games prototype", color: "#F5A623" },
              { name: "Launch kit", sub: "Brand & web", color: "#FF263C" },
            ].map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2.5 rounded-xl px-2 py-2 hover:bg-white/80"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.name.slice(0, 1)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium text-foreground">
                    {item.name}
                  </p>
                  <p className="truncate text-[11px] text-muted">{item.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main pane */}
        <div className="flex flex-1 flex-col bg-white">
          <div className="flex items-center justify-between border-b border-border-subtle px-5 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.svg" alt="" className="h-4 w-4" />
              </span>
              <span className="text-[14px] font-semibold text-foreground">
                New project
              </span>
            </div>
            <span className="rounded-full bg-cyan-soft px-2.5 py-0.5 text-[11px] font-medium text-cyan">
              ● You&apos;re in control
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
            <div className="flex gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="" className="mt-0.5 h-7 w-7 shrink-0" />
              <div className="rounded-2xl rounded-tl-md bg-card px-4 py-3 text-[13px] leading-relaxed text-foreground">
                Homepage draft is ready — light canvas, bold type, and eas.cx
                linked in the projects strip. Want a games lane next?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-foreground px-4 py-3 text-[13px] leading-relaxed text-white">
                Ship the launch page, then prototype the arcade loop.
              </div>
            </div>
            <div className="mt-auto flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3">
              <span className="flex-1 text-[13px] text-muted">
                Message Perry…
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-6xl px-5 pb-0 pt-16 sm:px-8 sm:pt-24 lg:pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <a
            href="#work"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[12px] font-medium text-muted transition-colors hover:text-foreground"
          >
            Perry is open for projects
            <span className="text-muted-soft">·</span>
            See the work
            <span aria-hidden className="text-[11px]">
              ↗
            </span>
          </a>

          <h1 className="font-display flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[clamp(2.75rem,7.5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground">
            <span>Meet</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt=""
              aria-hidden
              width={64}
              height={64}
              className="inline-block h-[0.85em] w-[0.85em] align-middle"
            />
            <span>Perry</span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-[1.55] text-muted sm:text-[18px]">
            A digital studio for websites, games, and the work in between.
            Sharp craft, clear stories, and interfaces that feel intentional.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-full bg-button-light px-6 text-[14px] font-medium text-foreground transition-colors hover:bg-[#e0e0e0]"
            >
              See the work
            </a>
          </div>
        </div>

        <ProductMock />
      </div>
    </section>
  );
}
