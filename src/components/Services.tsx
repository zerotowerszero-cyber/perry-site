"use client";

import { useState } from "react";

const jobs = [
  {
    id: "websites",
    title: "Websites",
    description:
      "Marketing sites, product pages, and web apps with crisp typography, fast loads, and a clear point of view.",
    points: [
      "Launch & product pages",
      "App shells & dashboards",
      "Performance-first delivery",
    ],
  },
  {
    id: "games",
    title: "Games",
    description:
      "Playable prototypes and polished interactive pieces — from arcade energy to quiet experimental toys.",
    points: [
      "Tight control feel",
      "Punchy feedback loops",
      "Web-first playable builds",
    ],
  },
  {
    id: "product",
    title: "Product",
    description:
      "Interfaces that explain themselves: flows, empty states, and systems that stay coherent as the product grows.",
    points: [
      "UX systems & flows",
      "Component libraries",
      "Interaction design",
    ],
  },
  {
    id: "brand",
    title: "Brand systems",
    description:
      "Marks, type, motion, and tokens that hold together across site, product, and campaign surfaces.",
    points: [
      "Identity & wordmark",
      "Type and color tokens",
      "Motion guidelines",
    ],
  },
  {
    id: "digital",
    title: "Digital work",
    description:
      "The briefs that don’t fit a neat box — tooling, experiments, and odd jobs that still need taste.",
    points: [
      "Custom tooling",
      "Prototypes & spikes",
      "Campaign microsites",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(jobs[0].id);
  const current = jobs.find((j) => j.id === active) ?? jobs[0];

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
              Give each job a home
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">
              Pick a lane — or bring a brief that spans a few. Same standard
              either way: clear, memorable, built to last.
            </p>

            <ul className="mt-10 space-y-1">
              {jobs.map((job) => {
                const isActive = job.id === active;
                return (
                  <li key={job.id}>
                    <button
                      type="button"
                      onClick={() => setActive(job.id)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[15px] font-medium transition-colors ${
                        isActive
                          ? "bg-card text-foreground"
                          : "text-muted hover:bg-card/60 hover:text-foreground"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 shrink-0 rounded-full ${
                          isActive ? "bg-cyan" : "bg-border"
                        }`}
                      />
                      {job.title}
                    </button>
                  </li>
                );
              })}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-medium text-cyan transition-opacity hover:opacity-80"
            >
              Talk about a brief
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Detail / phone-style panel */}
          <div className="overflow-hidden rounded-[28px] border border-border bg-card p-2 sm:p-3">
            <div className="overflow-hidden rounded-[22px] bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-border-subtle px-5 py-4">
                <div className="flex items-center gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.svg" alt="" className="h-7 w-7" />
                  <div>
                    <p className="text-[14px] font-semibold text-foreground">
                      {current.title}
                    </p>
                    <p className="text-[11px] text-muted">Perry · studio</p>
                  </div>
                </div>
                <span className="rounded-full bg-cyan-soft px-2.5 py-0.5 text-[11px] font-medium text-cyan">
                  Active
                </span>
              </div>

              <div className="space-y-4 px-5 py-6">
                <p className="text-[15px] leading-relaxed text-muted">
                  {current.description}
                </p>
                <ul className="space-y-3">
                  {current.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-2xl bg-card px-4 py-3 text-[13px] font-medium text-foreground"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan text-[10px] text-white">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border-subtle px-5 py-4">
                <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3">
                  <span className="flex-1 text-[13px] text-muted">
                    Ask about {current.title.toLowerCase()}…
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
      </div>
    </section>
  );
}
