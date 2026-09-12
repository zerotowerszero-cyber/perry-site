export default function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface px-8 py-16 sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-perry/15 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-perry">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready when you are.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tell us what you are building. We will reply with a clear next
              step — scope, timeline, and whether Perry is the right fit.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:hello@perry.studio"
                className="inline-flex h-12 items-center justify-center rounded-full bg-perry px-7 text-sm font-medium text-white transition-colors hover:bg-perry-hover"
              >
                hello@perry.studio
              </a>
              <a
                href="https://eas.cx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
              >
                Visit eas.cx
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
