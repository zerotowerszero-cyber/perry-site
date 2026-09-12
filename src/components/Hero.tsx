export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:pb-36 lg:pt-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt=""
            aria-hidden
            width={120}
            height={120}
            className="mb-10 h-20 w-20 drop-shadow-[0_0_48px_rgba(255,38,60,0.45)] sm:mb-12 sm:h-28 sm:w-28"
          />

          <h1 className="text-[clamp(2.75rem,8vw,4.75rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white">
            Websites, games,
            <br />
            <span className="text-muted">and digital work</span>
            <br />
            that feel alive.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Perry designs and builds interfaces and interactive experiences —
            bold contrast, careful craft, and just enough personality to stick.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#work"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-[13px] font-medium text-[#101014] transition-opacity hover:opacity-90"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-transparent px-6 text-[13px] font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Say hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
