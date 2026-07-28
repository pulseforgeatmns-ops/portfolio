"use client";

import { navItems, site, type SectionId } from "@/lib/content";

export function Sidebar({ activeId }: { activeId: SectionId }) {
  return (
    <aside
      className="no-print fixed inset-y-0 left-0 z-40 hidden w-[var(--sidebar-width)] flex-col border-r border-[var(--line)] bg-navy text-white lg:flex"
      aria-label="Primary"
    >
      <div className="px-5 pb-6 pt-7">
        <a href="#hero" className="block rounded-sm">
          <span className="font-display text-[1.15rem] leading-none tracking-tight">
            {site.name}
          </span>
          <span className="mt-2 block text-[0.68rem] leading-snug tracking-[0.04em] text-white/55">
            Founder · AI Systems Architect
          </span>
        </a>
      </div>

      <div className="mx-5 h-px bg-white/10" aria-hidden="true" />

      <nav className="flex-1 overflow-y-auto px-3 py-5" aria-label="Sections">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "true" : undefined}
                  className={`relative flex items-baseline gap-2.5 rounded-sm px-2.5 py-2 text-[0.8rem] leading-snug transition-colors ${
                    active
                      ? "bg-white/8 text-white"
                      : "text-white/55 hover:bg-white/5 hover:text-white/90"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 h-4 w-px -translate-y-1/2 ${
                      active ? "bg-gold" : "bg-transparent"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`w-5 shrink-0 tabular-nums text-[0.65rem] tracking-wider ${
                      active ? "text-gold" : "text-white/35"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-white/10 px-5 py-4">
        <p className="text-[0.65rem] leading-relaxed text-white/40">
          Executive architecture brief
        </p>
        <p className="mt-1 text-[0.65rem] text-white/30">© 2026 {site.name}</p>
      </div>
    </aside>
  );
}
