"use client";

import { ArrowUpRight, Clapperboard, Code2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const lanes = [
  {
    href: "/engineering",
    label: "Engineering",
    detail: "Products, systems & infrastructure",
    icon: Code2,
    accent: "engineering",
  },
  {
    href: "/video-editing",
    label: "Video editing",
    detail: "Stories, campaigns & visual cuts",
    icon: Clapperboard,
    accent: "video",
  },
];

export default function PortfolioSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed right-3 top-[58%] z-40 -translate-y-1/2 pointer-events-none sm:right-5">
      <div className="portfolio-switcher-rail flex w-12 flex-col items-center gap-1 rounded-2xl border border-white/15 bg-zinc-950/90 p-1.5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl pointer-events-auto dark:border-white/10 sm:w-14">
        {lanes.map((lane) => {
          const Icon = lane.icon;
          const active = pathname === lane.href;

          return (
            <Link
              key={lane.href}
              href={lane.href}
              aria-label={`Open ${lane.label}`}
              className={`group flex w-full flex-col items-center gap-1 rounded-xl px-1 py-2.5 transition-colors ${
                active
                  ? lane.accent === "engineering"
                    ? "bg-sky-400 text-zinc-950 shadow-lg shadow-sky-400/30"
                    : "bg-orange-400 text-zinc-950 shadow-lg shadow-orange-400/30"
                  : "text-white/65 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="min-w-0 text-center">
                <span className="block text-[9px] font-semibold uppercase leading-3 tracking-[0.08em] [writing-mode:vertical-rl]">
                  {lane.label}
                </span>
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 rotate-90 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  lane.accent === "engineering" ? "bg-sky-400" : "bg-orange-400"
                } ${active ? "animate-ping" : "animate-pulse"}`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
