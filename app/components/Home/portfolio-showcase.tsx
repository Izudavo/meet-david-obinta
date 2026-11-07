"use client";

import { ArrowUpRight, Check, Clapperboard, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const lanes = [
  {
    href: "/engineering",
    label: "engineering",
    eyebrow: "01 / Software engineering",
    title: "Systems that feel simple to use.",
    description:
      "Full-stack products, backend services, and cloud infrastructure built with care for the details users never see.",
    icon: Code2,
    accent: "from-sky-500/25 via-sky-500/5 to-transparent",
    tags: ["UI/UX", "Frontend", "Backend", "Cloud Architecture"],
    points: ["Production-ready web products", "Reliable APIs & secure deployments"],
  },
  {
    href: "/video-editing",
    label: "video editing",
    eyebrow: "02 / Video editing",
    title: "Cuts with a point of view.",
    description:
      "Short-form edits, brand stories, and visual content shaped around rhythm, clarity, and the feeling you want people to remember.",
    icon: Clapperboard,
    accent: "from-orange-500/25 via-orange-500/5 to-transparent",
    tags: ["Showreel", "Social Clips", "Youtube Shorts", "Narrative Pacing"],
    points: ["Purposeful sound & rhythm", "Compelling visual narratives"],
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-12 sm:pb-32">
      {/* SECTION HEADER */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-3">
          <h2 className="text-3xl font-black tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl leading-tight">
            One curious mind. <br className="hidden sm:inline" />
            Two creative practices.
          </h2>
        </div>
        <p className="max-w-sm text-sm sm:text-base leading-relaxed text-muted-foreground font-normal">
          Explore the discipline that matches what you are building, hiring for, or trying to make people feel.
        </p>
      </div>

      {/* LANES GRID */}
      <div className="grid gap-6 lg:grid-cols-2">
        {lanes.map((lane, index) => {
          const Icon = lane.icon;

          return (
            <motion.div
              key={lane.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-border/80 bg-background/60 p-8 sm:p-10 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-foreground/20 dark:hover:shadow-white/5"
            >
              {/* AMBIENT GLOW BACKDROP */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${lane.accent} opacity-60 transition-opacity duration-700 group-hover:opacity-100`}
              />

              <div className="relative space-y-8">
                {/* TOP BAR */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/80 bg-background/90 shadow-sm transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80 px-3 py-1 rounded-full border border-border/50 bg-background/40">
                    {lane.eyebrow}
                  </span>
                </div>

                {/* HEADLINE & DESCRIPTION */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-black tracking-[-0.03em] text-foreground sm:text-4xl leading-tight">
                    {lane.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground text-sm sm:text-base font-normal">
                    {lane.description}
                  </p>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {lane.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 bg-background/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:border-foreground/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BULLET POINTS */}
                <div className="grid gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:grid-cols-2">
                  {lane.points.map((point) => (
                    <span key={point} className="flex items-center gap-2.5 font-medium">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {point}
                    </span>
                  ))}
                </div>

                {/* CALL TO ACTION LINK */}
                <div className="pt-2">
                  <Link
                    href={lane.href}
                    className="group/link inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:text-sky-500"
                  >
                    <span>Explore {lane.label}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 transition-all duration-300 group-hover/link:border-sky-500 group-hover/link:bg-sky-500 group-hover/link:text-white shadow-sm">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}