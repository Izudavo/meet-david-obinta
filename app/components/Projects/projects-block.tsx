"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useMemo } from "react";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { FullscreenGallery } from "./fullscreen-gallery";
import { projects } from "./data";
import { tabs, TabKey } from "./tabs";
import { Project } from "./types";

export default function SelectedProjects() {
  const [active, setActive] = useState<TabKey>("frontend");
  const [selected, setSelected] = useState<Project | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = useMemo(
    () => projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-4 py-28 space-y-10">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="space-y-3"
      >
        <h2 className="text-3xl md:text-5xl font-black uppercase text-foreground">
          Selected Projects
        </h2>
        <div className="space-y-3">
          <div className="space-y-3">
            <div className="space-y-3">
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                A collection of products, mobile experiences, backend systems,
                and cloud infrastructure projects spanning engineering and UI/UX
                design.
              </p>

              <p className="inline-flex items-center gap-2 text-xs md:text-sm italic text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0 animate-pulse" />
                Click a category below to filter projects
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* TABS */}
      <div className="flex flex-wrap gap-3">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 cursor-pointer ${
              active === t.key
                ? "bg-zinc-950 text-white border-zinc-950 dark:bg-zinc-50 dark:text-black dark:border-zinc-50"
                : "bg-transparent border-zinc-200 text-zinc-500 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              onClick={() => setSelected(p)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
            onImageClick={(url) => setFullscreenImage(url)}
          />
        )}
      </AnimatePresence>

      {/* FULLSCREEN VIEWER */}
      <FullscreenGallery
        image={fullscreenImage}
        onClose={() => setFullscreenImage(null)}
      />
    </section>
  );
}
