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
    <header className="no-print sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_92%,white)] backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between px-4 py-3.5">
        <a href="#hero" className="min-w-0">
          <span className="block font-display text-base text-navy">
            {site.name}
          </span>
          <span className="block truncate text-[0.65rem] tracking-[0.06em] text-muted">
            AI Systems Architect
          </span>
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-[var(--line)] text-navy"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-4 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-drawer"
          className="absolute inset-x-0 top-full max-h-[75vh] overflow-y-auto border-b border-[var(--line)] bg-bg"
        >
          <nav aria-label="Mobile sections" className="px-2 py-3">
            <ul>
              {navItems.map((item) => {
                const active = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={active ? "true" : undefined}
                      className={`flex items-baseline gap-3 px-3 py-3 text-sm ${
                        active ? "text-navy" : "text-muted"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <span className="w-5 text-[0.65rem] text-gold">
                        {item.number}
                      </span>
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
