"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/lib/content";
import {
  GoldRule,
  SectionLabel,
  SectionShell,
} from "@/components/SectionPrimitives";

export function PulseforgeSection() {
  return (
    <SectionShell id="pulseforge" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel number="03" label="Platform" />
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-gold font-display text-sm font-bold text-navy">
            P
          </span>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-navy">
            Pulseforge
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div>
            <h2
              id="pulseforge-heading"
              className="max-w-2xl font-display text-4xl leading-[1.1] text-navy sm:text-5xl"
            >
              A modular AI platform designed from operational first principles.
            </h2>
            <GoldRule className="mt-7 mb-8" />
            <p className="max-w-2xl text-[1.02rem] leading-relaxed text-ink-muted">
              Pulseforge is the platform Jacob designed to prove the
              architecture works. Eight integrated capability layers share
              context, pass state, and surface only what humans need to act on —
              keeping automation deterministic and governance intact at every
              boundary.
            </p>
          </div>

          <aside className="rounded-2xl bg-navy p-6 text-white">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">
              Platform Design Philosophy
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/75">
              <li>
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
                <strong className="font-medium text-white">Modular —</strong>{" "}
                each service is independently deployable
              </li>
              <li>
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
                <strong className="font-medium text-white">Deterministic —</strong>{" "}
                predictable, auditable outputs
              </li>
              <li>
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
                <strong className="font-medium text-white">Observable —</strong>{" "}
                full visibility at every layer
              </li>
              <li>
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
                <strong className="font-medium text-white">Governed —</strong>{" "}
                humans approve before execution
              </li>
            </ul>
          </aside>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-2xl border border-navy/8 bg-white p-5 card-shadow"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-gold">
                Capability
              </p>
              <h3 className="mt-3 font-display text-xl text-navy">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {capability.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
