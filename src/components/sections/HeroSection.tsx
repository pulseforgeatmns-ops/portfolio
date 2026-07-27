"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { SectionLabel, SectionShell } from "@/components/SectionPrimitives";

export function HeroSection() {
  return (
    <SectionShell
      id="hero"
      tone="black"
      className="flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
        <SectionLabel number="01" label="Executive Portfolio" light />

        <div className="relative mx-auto flex aspect-square w-full max-w-[34rem] items-center justify-center sm:max-w-[38rem]">
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-gold"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="relative z-10 max-w-[18rem] px-6 text-center text-white sm:max-w-[22rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-[0.68rem] uppercase tracking-[0.28em] text-white/75">
              Executive Portfolio
            </p>
            <h1
              id="hero-heading"
              className="font-display text-[2.8rem] leading-[0.95] tracking-tight sm:text-[3.6rem]"
            >
              Jacob
              <br />
              Maynard
            </h1>
            <p className="mt-5 text-[0.7rem] uppercase tracking-[0.28em] text-white/80">
              Founder · AI Systems Architect
            </p>
            <p className="mt-6 font-display text-lg italic leading-snug text-white/95 sm:text-xl">
              “{site.tagline}”
            </p>
          </motion.div>
        </div>

        <div className="mt-10 flex items-end justify-between gap-6 border-t border-white/10 pt-6 text-xs text-white/55">
          <div>
            <p className="tracking-[0.2em] text-white/75">PULSEFORGE</p>
            <p className="mt-1">AI Systems Architecture · 2026</p>
          </div>
          <p>01 / 10</p>
        </div>
      </div>
    </SectionShell>
  );
}
