export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,38,60,0.18),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-40">
        <div className="flex flex-col gap-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-perry">
            Digital studio
          </p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Websites, games, and digital work that feel alive.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
            Perry builds interfaces and interactive experiences with bold
            contrast, careful craft, and just enough personality to stick.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-full bg-perry px-7 text-sm font-medium text-white transition-colors hover:bg-perry-hover"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/10"
            >
              Say hello
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
          <div
            aria-hidden
            className="absolute h-64 w-64 rounded-full bg-perry/20 blur-3xl sm:h-80 sm:w-80"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Perry logo — red mark with slanted eye cutouts"
            width={420}
            height={420}
            className="relative h-auto w-full max-w-[320px] drop-shadow-[0_0_60px_rgba(255,38,60,0.35)] sm:max-w-[380px]"
          />
        </div>
      </div>
    </section>
  );
}
