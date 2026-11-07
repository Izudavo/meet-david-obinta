"use client";

import { useTheme } from "next-themes";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiNotion,
  SiFlutter,
  SiJavascript,
  SiResend,
  SiPostgresql,
  SiRender,
  SiSentry,
  SiFigma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const CapCutIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M17.525 3.528c-.41-.41-1.075-.41-1.485 0L10.82 8.748l-2.12-2.12c-.41-.41-1.075-.41-1.485 0l-3.3 3.3c-.41.41-.41 1.075 0 1.485l2.12 2.12-2.12 2.12c-.41.41-.41 1.075 0 1.485l3.3 3.3c.41.41 1.075.41 1.485 0l2.12-2.12 5.22 5.22c.41.41 1.075.41 1.485 0l3.3-3.3c.41-.41.41-1.075 0-1.485l-2.12-2.12 2.12-2.12c.41-.41.41-1.075 0-1.485l-3.3-3.3zM12 15a3 3 0 110-6 3 3 0 010 6z" />
  </svg>
);

const PremiereProIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
    <rect width="32" height="32" rx="6" fill="#2d0b4e" />
    <rect x="3" y="3" width="26" height="26" rx="4" fill="none" stroke="#a855f7" strokeWidth="1.5" />
    <text x="7" y="21" fill="#d8b4fe" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">Pr</text>
  </svg>
);

const AuditionIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
    <rect width="32" height="32" rx="6" fill="#190b2b" />
    <rect x="3" y="3" width="26" height="26" rx="4" fill="none" stroke="#ec4899" strokeWidth="1.5" />
    <text x="6" y="21" fill="#f9a8d4" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">Au</text>
  </svg>
);

const StackSection = ({
  mode = "all",
}: {
  mode?: "all" | "engineering" | "video";
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <section ref={ref} className="w-full py-28 space-y-14">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl space-y-3 px-4 text-left"
      >
        <h2 className="text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
          {mode === "video"
            ? "Video Toolkit"
            : mode === "engineering"
              ? "Engineering Stack"
              : "Skills & Toolkit"}
        </h2>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {mode === "video"
            ? "The tools I use to shape footage, refine sound, and build visual stories with clarity and rhythm."
            : mode === "engineering"
              ? "The tools I use to design, build, deploy, and maintain production-ready digital products."
              : "The tools I use across software engineering and video editing, from product systems to visual storytelling."}
        </p>
      </motion.div>

      {/* Keep the original hierarchy; only the tool presentation flows. */}
      <div className="space-y-10">
        {mode !== "video" && (
          <StackCard
            title="Software Engineering"
            inView={inView}
            items={[
              { icon: SiFigma, name: "Figma", color: "#F24E1E" },
              { icon: SiReact, name: "React", color: "#61DAFB" },
              { icon: SiNextdotjs, name: "Next.js", color: isDark ? "#FFFFFF" : "#000000" },
              { icon: SiFlutter, name: "Flutter", color: "#02569B" },
              { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
              { icon: SiTailwindcss, name: "TailwindCSS", color: "#38BDF8" },
              { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
              { icon: SiExpress, name: "Express", color: isDark ? "#FFFFFF" : "#000000" },
              { icon: SiMysql, name: "MySQL", color: "#4479A1" },
              { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
              { icon: SiDocker, name: "Docker", color: "#2496ED" },
              { icon: SiGithubactions, name: "CI/CD", color: "#2088FF" },
              { icon: SiVercel, name: "Vercel", color: isDark ? "#FFFFFF" : "#000000" },
              { icon: FaAws, name: "AWS", color: "#FF9900" },
              { icon: SiRender, name: "Render", color: "#46E3B7" },
              { icon: SiSentry, name: "Sentry", color: isDark ? "#FFFFFF" : "#362D59" },
            ]}
          />
        )}

        {mode !== "engineering" && (
          <StackCard
            title="Video Editing"
            inView={inView}
            reverse
            items={[
              { icon: CapCutIcon, name: "CapCut", color: isDark ? "#FFFFFF" : "#000000" },
              { icon: PremiereProIcon, name: "Premiere Pro", color: "#A855F7" },
              { icon: AuditionIcon, name: "Adobe Audition", color: "#EC4899" },
              { icon: CapCutIcon, name: "Short-form edits", color: isDark ? "#FFFFFF" : "#000000" },
              { icon: AuditionIcon, name: "Sound design", color: "#06B6D4" },
              { icon: PremiereProIcon, name: "Visual storytelling", color: "#F59E0B" },
            ]}
          />
        )}
      </div>
    </section>
  );
};

export default StackSection;

/* FLOWING STACK RAIL */

const StackCard = ({
  title,
  items,
  inView,
  reverse = false,
}: {
  title: string;
  items: { icon: any; name: string; color?: string }[];
  inView: boolean;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group space-y-4 mx-auto max-w-6xl px-4"
    >
      <div className="flex items-center gap-4">
        <h3 className="shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {title}
        </h3>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className={`stack-track flex w-max items-center gap-7 pr-3 group-hover:[animation-play-state:paused] sm:gap-10 ${reverse ? "stack-track-reverse" : ""}`}>
          {[...items, ...items].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              title={item.name}
              aria-label={item.name}
              className="flex shrink-0 items-center gap-2.5 py-2 transition-all duration-300 hover:-translate-y-1"
            >
              <item.icon
                className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
                style={{ color: item.color }}
              />
              <span className="whitespace-nowrap text-sm font-semibold text-foreground">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};