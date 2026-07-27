"use client";

import { motion } from "framer-motion";
import { anchorFlow, anchorMetrics } from "@/lib/content";
import {
  GoldRule,
  SectionLabel,
  SectionShell,
} from "@/components/SectionPrimitives";

export function AnchorCleaningSection() {
  return (
    <SectionShell
      id="anchor-cleaning"
      className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="06" label="Case Study" />
        <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-faint">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
          Production Validation
        </p>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] lg:items-start">
          <div>
            <h2
              id="anchor-cleaning-heading"
              className="max-w-xl font-display text-4xl leading-[1.08] text-navy sm:text-5xl"
            >
              Anchor Cleaning Company
            </h2>
            <GoldRule className="mt-7 mb-8" />
            <p className="max-w-2xl text-[1.02rem] leading-relaxed text-ink-muted">
              Anchor Cleaning is the first production deployment of the
              Pulseforge platform — a live operational environment used to
              validate AI-assisted workflows against real customer interactions
              and business operations. The full capability stack was exercised
              from prospect intelligence through communications and reporting.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {anchorMetrics.map((metric, index) => (
              <motion.article
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-2xl border border-navy/8 bg-white p-5 card-shadow"
              >
                <p className="font-display text-3xl text-navy sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-ink-muted">{metric.label}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {anchorFlow.map((step, index) => (
            <li key={step.title} className="relative">
              <article className="h-full rounded-2xl border border-navy/8 bg-white p-5 card-shadow">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-gold">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-xl text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {step.detail}
                </p>
              </article>
              {index < anchorFlow.length - 1 ? (
                <div
                  className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gold/50 xl:block"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
