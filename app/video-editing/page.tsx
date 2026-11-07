"use client";

import type { Metadata } from "next";
import { ArrowUpRight, Clapperboard, Film, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PortfolioSwitcher from "../components/Home/portfolio-switcher";
import StackSection from "../components/Home/stack-section";
import VideoProjectGrid from "./video-project-grid";

export default function VideoEditingPage() {
  return (
    <main className="pt-28 overflow-hidden">
      {/* HERO SECTION WITH 3D PERSPECTIVE */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-24 [perspective:1200px]">
        {/* AMBIENT BACKDROP GLOW */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.65fr]">
          {/* LEFT COLUMN: HERO TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 [transform-style:preserve-3d]"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-background/60 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 shadow-sm backdrop-blur-md">
              <Film className="w-3.5 h-3.5" />
              Video Editing Portfolio
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.04em] text-foreground sm:text-7xl leading-[1.05] uppercase">
              Make the moment land.
            </h1>

            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground font-normal">
              I shape raw footage into clear, memorable visual stories through
              pacing, sound, structure, and a close eye for the detail that
              makes an edit feel finished.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: 3D QUOTE CARD WITH REPLACED FILM ICON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15, y: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotateY: 5, rotateX: -5, translateZ: 10 }}
            className="rounded-[2.5rem] border border-orange-500/20 bg-orange-500/[0.04] p-8 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden transition-all duration-500 [transform-style:preserve-3d]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
            
            {/* NEW FILM/CAMERA ICON */}
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-orange-500 shadow-sm">
              <Film className="h-6 w-6" />
            </div>

            <p className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-foreground">
              "The edit is where the idea becomes a feeling."
            </p>
          </motion.div>
        </div>
      </section>

      {/* STACK SECTION */}
      <StackSection mode="video" />

      {/* REEL SECTION */}
      <section className="mx-auto max-w-6xl px-6 pb-28 pt-8 [perspective:1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-background/60 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground shadow-sm">
              Work in progress
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.1]">
              The reel is taking shape.
            </h2>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/80 bg-background/80 shadow-sm text-orange-500 shrink-0">
            <Clapperboard className="h-6 w-6" />
          </div>
        </motion.div>

        <VideoProjectGrid />
      </section>

      {/* CALL TO ACTION BANNER WITH 3D POP */}
      <section className="mx-auto max-w-6xl px-6 pb-36 [perspective:1200px]">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ rotateX: -2, rotateY: 2 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-8 sm:p-14 text-white shadow-2xl border border-zinc-800 transition-all duration-500 [transform-style:preserve-3d]"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              Have a story to shape?
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]">
              Bring the footage. I&apos;ll find the rhythm.
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Available for brand films, social cuts, and custom post-production contracts. Let's make something remarkable.
            </p>

            <div className="pt-2">
              <a
                href="mailto:izuchukwudavido@gmail.com"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 transition-all duration-300 hover:bg-orange-500 hover:text-white shadow-lg active:scale-95"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PORTFOLIO SWITCHER */}
      <PortfolioSwitcher />
    </main>
  );
}