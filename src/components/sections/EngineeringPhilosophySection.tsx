"use client";

import { motion } from "framer-motion";
import {
  coreTenets,
  designCompass,
  philosophyThemes,
  site,
} from "@/lib/content";
import {
  GoldRule,
  SectionLabel,
  SectionShell,
} from "@/components/SectionPrimitives";

export function EngineeringPhilosophySection() {
  return (
    <SectionShell
      id="engineering-philosophy"
      className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="09" label="Engineering Philosophy" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:items-start">
          <div>
            <p
              className="mb-4 font-display text-6xl leading-none text-gold/70 sm:text-7xl"
              aria-hidden="true"
            >
              “
            </p>
            <h2
              id="engineering-philosophy-heading"
              className="max-w-xl font-display text-4xl italic leading-[1.12] text-navy sm:text-5xl"
            >
              I design software that reduces operational burden.
            </h2>
            <GoldRule className="mt-7 mb-5" />
            <p className="text-sm text-ink-muted">
              {site.name} · Founder, Pulseforge
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {philosophyThemes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full border border-navy/10 bg-white px-3 py-1.5 text-xs tracking-wide text-ink-muted"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl bg-navy p-6 text-white">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">
              Design Compass
            </p>
            <ol className="mt-6 space-y-5">
              {designCompass.map((question, index) => (
                <li key={question} className="flex gap-3">
                  <span className="font-display text-lg italic text-gold">
                    {index + 1}.
                  </span>
                  <p className="text-sm leading-relaxed text-white/85">
                    {question}
                  </p>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <p className="mt-14 text-xs uppercase tracking-[0.22em] text-ink-faint">
          Core Tenets
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {coreTenets.map((tenet, index) => (
            <motion.article
              key={tenet.numeral}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl border border-navy/8 bg-white p-6 card-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-4xl italic text-navy/20">
                  {tenet.numeral}
                </span>
                <div>
                  <h3 className="font-display text-xl text-navy">
                    {tenet.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {tenet.detail}
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
