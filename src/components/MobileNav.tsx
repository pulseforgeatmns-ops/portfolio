"use client";

import { useEffect, useState } from "react";
import { navItems, site, type SectionId } from "@/lib/content";

export function MobileNav({ activeId }: { activeId: SectionId }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-navy/10 bg-bg/95 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center bg-gold font-display text-xs font-semibold text-navy">
            JM
          </span>
          <span>
            <span className="block text-sm font-medium text-navy">
              {site.name}
            </span>
            <span className="block text-[0.65rem] tracking-wide text-ink-muted">
              AI Systems Architect
            </span>
          </span>
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy/15 text-navy"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-drawer"
          className="absolute inset-x-0 top-full max-h-[80vh] overflow-y-auto border-b border-navy/10 bg-navy text-white shadow-xl"
        >
          <nav aria-label="Mobile sections" className="px-3 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const active = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={active ? "true" : undefined}
                      className={`flex items-center gap-3 rounded-md px-3 py-3 text-sm ${
                        active ? "bg-white/10 text-white" : "text-white/70"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <span className="w-6 text-xs text-gold">{item.number}</span>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
