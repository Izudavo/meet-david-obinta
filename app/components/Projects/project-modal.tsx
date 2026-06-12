import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub, FaFigma } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Project } from "./types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onImageClick: (url: string) => void;
}

export function ProjectModal({ project, onClose, onImageClick }: ProjectModalProps) {
  const [figmaLoaded, setFigmaLoaded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    setFigmaLoaded(false);
  }, [project]);

  if (!project) return null;

  const getFigmaEmbedUrl = (url: string) => {
    const match = url.match(/figma\.com\/proto\/([^/?]+)/);
    if (match) {
      return `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/${match[1]}`;
    }
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 10 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-[95vw] md:w-full max-w-4xl max-h-[95vh] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md flex items-center justify-center hover:scale-105 transition"
        >
          <X className="w-4 h-4 text-black dark:text-white" />
        </button>

        <div className="p-5 md:p-6 space-y-4 overflow-y-auto max-h-[90vh]">
          <div className="space-y-3 pr-6">
            <h3 className="text-xl md:text-2xl font-black" style={{ color: project.accent }}>
              {project.title}
            </h3>
            <p className="leading-relaxed text-sm md:text-base text-zinc-700 dark:text-zinc-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.github && (
                <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition">
                  <FaGithub /> Code
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition">
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              )}
              {project.figma && (
                <a href={project.figma} target="_blank" className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition">
                  <FaFigma className="w-4 h-4" /> View in Figma
                </a>
              )}
            </div>
          </div>

          {project.figma && (
            <div className="rounded-xl overflow-hidden border">
              {!figmaLoaded && (
                <div className="h-[360px] flex items-center justify-center">
                  <div className="animate-spin h-8 w-8 border-2 border-t-black dark:border-t-white rounded-full" />
                </div>
              )}
              <iframe
                src={getFigmaEmbedUrl(project.figma)}
                className={`w-full h-[360px] ${figmaLoaded ? "block" : "hidden"}`}
                allowFullScreen
                onLoad={() => setFigmaLoaded(true)}
              />
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-3">
              <div
                className="overflow-hidden rounded-xl border bg-zinc-100 dark:bg-zinc-900 p-2 md:p-4 cursor-pointer"
                onClick={() => onImageClick(project.gallery![activeImage])}
              >
                <img src={project.gallery[activeImage]} alt={project.title} className="w-full h-auto object-contain rounded-lg" />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(idx)}
                    className={`shrink-0 rounded-lg overflow-hidden border-2 transition ${activeImage === idx ? "border-blue-500" : "border-transparent"}`}
                  >
                    <img src={img} alt="" className="w-24 h-16 object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {project.highlights && (
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Key Contributions</h4>
              <div className="grid gap-3">
                {project.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 bg-zinc-50 dark:bg-zinc-950">
                    <div className="mt-1 h-2 w-2 rounded-full shrink-0" style={{ background: project.accent }} />
                    <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}