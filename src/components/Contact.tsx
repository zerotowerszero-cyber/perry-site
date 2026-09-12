export default function Contact() {
  return (
    <section id="contact" className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt=""
            aria-hidden
            width={64}
            height={64}
            className="mb-8 h-14 w-14 drop-shadow-[0_0_32px_rgba(255,38,60,0.4)]"
          />
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.025em] text-white">
            Ready when you are
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Tell us what you are building. We will reply with a clear next
            step — scope, timeline, and whether Perry is the right fit.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@perry.studio"
              className="inline-flex h-11 items-center justify-center rounded-full bg-perry px-6 text-[13px] font-medium text-white transition-colors hover:bg-perry-hover"
            >
              hello@perry.studio
            </a>
            <a
              href="https://eas.cx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-6 text-[13px] font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Visit eas.cx
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
