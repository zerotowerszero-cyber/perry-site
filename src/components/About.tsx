export default function About() {
  return (
    <section className="border-t border-border-subtle">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.025em] text-white">
            Small studio.
            <br />
            <span className="text-muted">Big contrast.</span>
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            Perry is a digital practice focused on websites, games, and the
            work that sits between them. We like black canvases, one loud
            accent, and interfaces that feel intentional rather than busy.
          </p>
          <p>
            The red mark is simple on purpose: a face you recognize at a
            glance. That same idea guides the work — reduce until the story
            is obvious, then polish until it feels inevitable.
          </p>
        </div>
      </div>
    </section>
  );
}
