export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center opacity-[0.06]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="" className="h-[420px] w-[420px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
            Meet your next build
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted sm:text-[17px]">
            Tell us what you are building. We will reply with a clear next
            step — scope, timeline, and whether Perry is the right fit.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@perry.studio"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
            >
              hello@perry.studio
            </a>
            <a
              href="https://eas.cx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-button-light px-6 text-[14px] font-medium text-foreground transition-colors hover:bg-[#e0e0e0]"
            >
              Visit eas.cx
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
