"use client";

import { useState } from "react";

const jobs = [
  {
    id: "websites",
    title: "Websites",
    description:
      "Marketing sites, product pages, and web apps with crisp typography, fast loads, and a clear point of view.",
    points: [
      "Launch and product pages",
      "App shells and dashboards",
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
    <section id="services" className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] tracking-[-0.025em] text-white">
            Give each job a home
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Pick a lane — or bring a brief that spans a few. Same standard
            either way: clear, memorable, built to last.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {jobs.map((job) => {
            const isActive = job.id === active;
            return (
              <button
                key={job.id}
                type="button"
                onClick={() => setActive(job.id)}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "bg-white text-[#101014]"
                    : "border border-border bg-transparent text-muted-soft hover:border-white/20 hover:text-white"
                }`}
              >
                {job.title}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card">
          <div className="border-b border-border-subtle px-6 py-5 sm:px-8">
            <h3 className="text-xl font-medium tracking-tight text-white">
              {current.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {current.description}
            </p>
          </div>
          <ul className="grid gap-0 sm:grid-cols-3">
            {current.points.map((point, i) => (
              <li
                key={point}
                className={`px-6 py-5 text-[13px] text-muted-soft sm:px-8 ${
                  i < current.points.length - 1
                    ? "border-b border-border-subtle sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <span className="mb-2 block h-1 w-6 rounded-full bg-perry" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
