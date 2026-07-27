"use client";

import { motion } from "framer-motion";
import { architectureDecisions } from "@/lib/content";
import {
  GoldRule,
  SectionLabel,
  SectionShell,
} from "@/components/SectionPrimitives";

export function ArchitectureDecisionsSection() {
  return (
    <SectionShell
      id="architecture-decisions"
      className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="08" label="Architecture Decisions" />
        <h2
          id="architecture-decisions-heading"
          className="max-w-2xl font-display text-4xl leading-[1.1] text-navy sm:text-5xl"
        >
          Six decisions that define the Pulseforge architecture.
        </h2>
        <GoldRule className="mt-7 mb-8" />
        <p className="max-w-2xl text-[1.02rem] leading-relaxed text-ink-muted">
          Each decision below was made deliberately, tested against real
          operational requirements, and validated in production. These are not
          defaults — they are commitments.
        </p>

        <div className="mt-12 grid gap-4">
          {architectureDecisions.map((decision, index) => (
            <motion.article
              key={decision.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="grid gap-6 rounded-2xl bg-navy p-6 text-white md:grid-cols-[minmax(12rem,0.9fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-8 md:p-7"
            >
              <div>
                <span
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 12a3 3 0 100-6 3 3 0 000 6zM5 19a7 7 0 0114 0" />
                  </svg>
                </span>
                <h3 className="font-display text-2xl leading-tight">
                  {decision.title}
                </h3>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/45">
                  Rationale
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {decision.rationale}
                </p>
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/45">
                  Impact
                </p>
                <div className="mt-3 rounded-xl bg-black/20 p-4">
                  <p className="font-display text-sm italic leading-relaxed text-white/90">
                    “{decision.impact}”
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
