export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-perry">
            About Perry
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Small studio. Big contrast.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted">
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
          <p>
            If you have a product to launch, a game to prototype, or a brand
            that needs a sharper home on the web, we would like to hear it.
          </p>
        </div>
      </div>
    </section>
  );
}
