"use client";

import { motion } from "framer-motion";
import { designPrinciples } from "@/lib/content";
import {
  GoldRule,
  SectionLabel,
  SectionShell,
} from "@/components/SectionPrimitives";

export function DesignPrinciplesSection() {
  return (
    <SectionShell
      id="design-principles"
      className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="05" label="Design Principles" />
        <h2
          id="design-principles-heading"
          className="max-w-2xl font-display text-4xl leading-[1.1] text-navy sm:text-5xl"
        >
          Six principles that govern every design decision.
        </h2>
        <GoldRule className="mt-7 mb-8" />
        <p className="max-w-2xl text-[1.02rem] leading-relaxed text-ink-muted">
          These are not aspirations — they are constraints. Every component,
          workflow, and integration is measured against them before it ships.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {designPrinciples.map((principle, index) => {
            const featured = index === 2;
            return (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl p-6 ${
                  featured
                    ? "bg-navy text-white"
                    : "border border-navy/8 bg-white card-shadow"
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      featured ? "bg-gold/20 text-gold" : "bg-navy/5 text-navy"
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
                      {index === 0 ? (
                        <path d="M4 8h16M4 12h16M4 16h10" />
                      ) : index === 1 ? (
                        <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
                      ) : index === 2 ? (
                        <path d="M5 7h14v10H5zM8 11h8M8 14h5" />
                      ) : index === 3 ? (
                        <path d="M12 12a3 3 0 100-6 3 3 0 000 6zM5 19a7 7 0 0114 0" />
                      ) : index === 4 ? (
                        <path d="M4 18V6M8 18V10M12 18V8M16 18V12M20 18V9" />
                      ) : (
                        <path d="M4 16l4-8 4 5 3-3 5 6" />
                      )}
                    </svg>
                  </span>
                  <span
                    className={`font-display text-2xl ${
                      featured ? "text-white/25" : "text-navy/15"
                    }`}
                  >
                    {principle.number}
                  </span>
                </div>
                <h3
                  className={`font-display text-2xl ${
                    featured ? "text-white" : "text-navy"
                  }`}
                >
                  {principle.title}
                </h3>
                <p
                  className={`mt-2 font-display text-base italic ${
                    featured ? "text-gold-soft" : "text-gold"
                  }`}
                >
                  {principle.subtitle}
                </p>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    featured ? "text-white/70" : "text-ink-muted"
                  }`}
                >
                  {principle.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
