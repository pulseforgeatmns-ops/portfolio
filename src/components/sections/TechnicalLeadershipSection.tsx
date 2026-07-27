"use client";

import { motion } from "framer-motion";
import { leadershipTimeline } from "@/lib/content";
import {
  GoldRule,
  SectionLabel,
  SectionShell,
} from "@/components/SectionPrimitives";

export function TechnicalLeadershipSection() {
  return (
    <SectionShell
      id="technical-leadership"
      className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="07" label="Technical Leadership" />
        <h2
          id="technical-leadership-heading"
          className="max-w-3xl font-display text-4xl leading-[1.1] text-navy sm:text-5xl"
        >
          From operator to architect — a decade in the making.
        </h2>
        <GoldRule className="mt-7 mb-8" />
        <p className="max-w-2xl text-[1.02rem] leading-relaxed text-ink-muted">
          The systems Jacob builds are grounded in real operational experience.
          Every design decision is informed by years of managing service
          operations before a line of Pulseforge was written. Leadership spans
          product strategy, architecture, workflow design, implementation,
          cross-functional communication, and operational systems thinking.
        </p>

        <ol className="relative mt-14 space-y-0">
          <div
            className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-gold/35 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />
          {leadershipTimeline.map((item, index) => {
            const left = index % 2 === 0;
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative grid gap-4 py-4 md:grid-cols-2 md:gap-10"
              >
                <div
                  className={`pl-12 md:pl-0 ${left ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}`}
                >
                  <article className="rounded-2xl border border-navy/8 bg-white p-5 card-shadow">
                    <p className="text-[0.65rem] uppercase tracking-[0.18em] text-gold">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {item.detail}
                    </p>
                  </article>
                </div>
                <span
                  className="absolute left-3 top-8 h-4 w-4 rounded-full border-2 border-gold bg-bg md:left-1/2 md:-translate-x-1/2"
                  aria-hidden="true"
                />
              </motion.li>
            );
          })}
        </ol>
      </div>
    </SectionShell>
  );
}
