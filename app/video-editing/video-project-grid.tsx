"use client";

import { ArrowUpRight, Play, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Hyundai Tucson Paint Correction & Ceramic Coating",
    category: "YouTube Short",
    description:
      "A short-form automotive edit featuring a Hyundai Tucson paint correction and Gtechniq ceramic coating finish.",
    href: "https://www.youtube.com/shorts/DYx5kumUjhA",
    preview: "https://i.ytimg.com/vi/DYx5kumUjhA/hqdefault.jpg",
    thumbnail: "/video-thumbnails/hyundai-tucson.svg",
    embedUrl: "https://www.youtube.com/embed/DYx5kumUjhA",
    platform: "youtube",
  },
  {
    title: "Custom Copper Camaro: Before & After",
    category: "YouTube Short",
    description:
      "A before-and-after edit documenting paint correction work on a custom copper Camaro.",
    href: "https://www.youtube.com/shorts/pMRiNDtZkaY",
    preview: "https://i.ytimg.com/vi/pMRiNDtZkaY/hqdefault.jpg",
    thumbnail: "/video-thumbnails/copper-camaro.svg",
    embedUrl: "https://www.youtube.com/embed/pMRiNDtZkaY",
    platform: "youtube",
  },
  {
    title: "GHAN: A Journey to Canada",
    category: "Instagram Reel",
    description:
      "A social-first story following a GHAN member's journey to Canada through support, guidance, and new possibilities.",
    href: "https://www.instagram.com/reel/DAtioq2PqPf/",
    embedUrl: "https://www.instagram.com/reel/DAtioq2PqPf/embed",
    thumbnail: "/video-thumbnails/ghan-travel-with-me.svg",
    platform: "instagram",
  },
  {
    title: "GHAN: Our Journey So Far",
    category: "Instagram Post",
    description:
      "A one-year highlight reel celebrating GHAN's growth, community, connection, and transformation.",
    href: "https://www.instagram.com/p/DEXzrL3MylS/",
    embedUrl: "https://www.instagram.com/p/DEXzrL3MylS/embed",
    thumbnail: "/video-thumbnails/ghan-journey-so-far.svg",
    platform: "instagram",
  },
];

export default function VideoProjectGrid() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
          className="group overflow-hidden rounded-[1.75rem] border border-border bg-background/70 backdrop-blur-md transition-all duration-300 hover:border-foreground/20 hover:shadow-xl"
        >
          <button
            type="button"
            onClick={() => setActiveProject(project)}
            className="block w-full text-left"
            aria-label={`Watch ${project.title} on this website`}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950 p-6">
              <img
                src={project.platform === "youtube" ? project.preview : project.thumbnail}
                alt={`Thumbnail for ${project.title}`}
                loading={index < 2 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between text-white/50">
                  <span className="text-xs uppercase tracking-[0.18em]">
                    {project.category}
                  </span>
                  <span className="text-xs">0{index + 1}</span>
                </div>

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                  <Play className="ml-1 h-6 w-6 fill-current" />
                </div>

              
              </div>
            </div>

            <div className="space-y-3 p-6">
              <span className="inline-flex rounded-full border border-orange-500/25 bg-orange-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-orange-500">
                {project.category}
              </span>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-foreground">
                {project.title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
            </div>
          </button>
        </motion.article>
      ))}
    </div>

    {activeProject && (
      <div
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label={activeProject.title}
        onClick={() => setActiveProject(null)}
      >
        <div
          className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-zinc-950 shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 text-white">
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold uppercase tracking-[0.16em] text-orange-400">
                {activeProject.category}
              </p>
              <h3 className="truncate text-base font-bold sm:text-lg">
                {activeProject.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="Close video viewer"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="aspect-[9/16] max-h-[70vh] bg-black">
            <iframe
              src={`${activeProject.embedUrl}?autoplay=1`}
              title={activeProject.title}
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-5 py-4 text-sm text-white/70">
            <span className="line-clamp-2">{activeProject.description}</span>
            <a
              href={activeProject.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-orange-400 hover:text-orange-300"
            >
              Original post <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    )}
    </>
  );
}