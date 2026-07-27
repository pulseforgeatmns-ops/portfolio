"use client";

import { motion } from "framer-motion";
import { kpis } from "@/lib/content";
import {
  GoldRule,
  SectionLabel,
  SectionShell,
} from "@/components/SectionPrimitives";

export function ExecutiveSummarySection() {
  return (
    <SectionShell
      id="executive-summary"
      className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:gap-16">
        <div>
          <SectionLabel number="02" label="Executive Summary" />
          <h2
            id="executive-summary-heading"
            className="max-w-xl font-display text-4xl leading-[1.08] text-navy sm:text-5xl"
          >
            Founder. Operator.
            <br />
            AI Systems Architect.
          </h2>
          <GoldRule className="mt-7 mb-8" />
          <div className="max-w-2xl space-y-5 text-[1.02rem] leading-relaxed text-ink-muted">
            <p>
              Jacob Maynard is a founder and AI systems architect with 10+ years
              of operations leadership. He translates operational complexity
              into software architecture — designing modular, deterministic
              systems that reduce manual overhead and preserve human control
              over high-stakes decisions.
            </p>
            <p>
              Pulseforge is the expression of that work: an AI-native platform
              for workflow orchestration, operational intelligence, CRM
              automation, knowledge management, communications, reporting, and
              human-governed decision support.
            </p>
            <p>
              The architecture is in production with Anchor Cleaning Company,
              validated against real operational demands — live data, real
              workflows, no controlled environment.
            </p>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.22em] text-ink-faint">
            Key Achievements
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {kpis.map((kpi, index) => {
            const tones = {
              navy: "bg-navy text-white",
              light: "bg-white text-navy card-shadow border border-navy/5",
              cream: "bg-bg-warm text-navy border border-navy/5",
            };
            return (
              <motion.article
                key={kpi.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`rounded-2xl p-5 ${tones[kpi.tone]}`}
              >
                <p
                  className={`font-display text-4xl ${
                    kpi.tone === "navy" ? "text-gold" : "text-navy"
                  }`}
                >
                  {kpi.value}
                </p>
                <h3 className="mt-2 text-sm font-semibold tracking-wide">
                  {kpi.label}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    kpi.tone === "navy" ? "text-white/70" : "text-ink-muted"
                  }`}
                >
                  {kpi.detail}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
