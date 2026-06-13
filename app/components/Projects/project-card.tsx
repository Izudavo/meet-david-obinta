import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaFigma } from "react-icons/fa";
import { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 blur-3xl transition duration-700"
        style={{ background: project.accent }}
      />

      <div className="relative h-[300px] overflow-hidden">
        {project.gallery && project.gallery.length > 0 && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 rounded-full bg-black/70 text-white text-xs">
              {project.gallery.length} Screenshots
            </span>
          </div>
        )}
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      <div className="p-6 space-y-4 relative z-20">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold" style={{ color: project.accent }}>
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub className="w-4 h-4" />
              View Github repo →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
            >
              <ExternalLink className="w-4 h-4" />
              Click here to see live url
            </a>
          )}
          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
            >
              <FaFigma className="w-4 h-4" />
              Click here to view on Figma →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}