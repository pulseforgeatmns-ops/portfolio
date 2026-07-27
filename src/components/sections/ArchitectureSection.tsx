"use client";

import {
  architectureLayers,
  architecturePrinciples,
} from "@/lib/content";
import {
  GoldRule,
  SectionLabel,
  SectionShell,
} from "@/components/SectionPrimitives";

export function ArchitectureSection() {
  return (
    <SectionShell
      id="architecture"
      className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="04" label="System Architecture" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div>
            <h2
              id="architecture-heading"
              className="max-w-2xl font-display text-4xl leading-[1.1] text-navy sm:text-5xl"
            >
              Layered architecture. Governed at every boundary.
            </h2>
            <GoldRule className="mt-7 mb-8" />
            <p className="max-w-2xl text-[1.02rem] leading-relaxed text-ink-muted">
              Pulseforge is organized as a stack of discrete layers, each with a
              clearly defined responsibility. Operators interact at the surface;
              AI processes at depth; humans govern at the boundaries that
              matter.
            </p>
          </div>

          <aside className="rounded-2xl bg-navy p-6 text-white">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">
              Architecture Principles
            </p>
            <ul className="mt-5 space-y-5">
              {architecturePrinciples.map((item) => (
                <li key={item.tag}>
                  <p className="text-sm leading-relaxed text-white/80">
                    {item.statement}
                  </p>
                  <span className="mt-2 inline-block rounded-md bg-white/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-gold">
                    {item.tag}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-14" aria-label="Platform architecture diagram">
          <ol className="mx-auto flex max-w-2xl flex-col items-stretch">
            {architectureLayers.map((layer, index) => (
              <li key={layer.title} className="flex flex-col items-center">
                <article
                  className={`w-full rounded-2xl px-5 py-4 ${
                    layer.tone === "navy"
                      ? "bg-navy text-white"
                      : "border border-navy/10 bg-white text-navy card-shadow"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        layer.tone === "navy"
                          ? "bg-gold/20 text-gold"
                          : "bg-navy/5 text-navy"
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        {index === 0 || index === 1 ? (
                          <path d="M4 6h16v10H4zM8 20h8M12 16v4" />
                        ) : index === 2 ? (
                          <path d="M4 7h16M4 12h16M4 17h10" />
                        ) : index === 3 ? (
                          <path d="M5 7h4v4H5zM15 7h4v4h-4zM5 15h4v4H5zM15 15h4v4h-4z" />
                        ) : index === 4 ? (
                          <path d="M12 4a4 4 0 014 4v1h1a3 3 0 010 6h-1v1a4 4 0 01-8 0v-1H7a3 3 0 010-6h1V8a4 4 0 014-4z" />
                        ) : (
                          <path d="M5 8l7-4 7 4v8l-7 4-7-4V8z" />
                        )}
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-xl">{layer.title}</h3>
                      <p
                        className={`mt-1 text-sm ${
                          layer.tone === "navy"
                            ? "text-white/65"
                            : "text-ink-muted"
                        }`}
                      >
                        {layer.detail}
                      </p>
                    </div>
                  </div>
                </article>
                {index < architectureLayers.length - 1 ? (
                  <div
                    className="my-1 flex h-8 w-px flex-col items-center border-l border-dashed border-navy/25"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SectionShell>
  );
}
