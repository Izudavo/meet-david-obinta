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
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const StackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-4 py-28 space-y-14">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-3 text-left"
      >
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
          Tech Stack
        </h2>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          From frontend interfaces to backend systems and cloud infrastructure,
          these are the tools I currently use while continuously learning and
          improving to build scalable, production-ready applications.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StackCard
          title="Frontend"
          inView={inView}
          items={[
            { icon: SiReact, name: "React", color: "#61DAFB" },
            {
              icon: SiNextdotjs,
              name: "Next.js",
              color: isDark ? "#FFFFFF" : "#000000",
            },
            { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
            { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
            { icon: SiTailwindcss, name: "TailwindCSS", color: "#38BDF8" },
            { icon: SiFlutter, name: "Flutter", color: "#02569B" },
          ]}
        />

        <StackCard
          title="Backend"
          inView={inView}
          items={[
            { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
            {
              icon: SiExpress,
              name: "Express",
              color: isDark ? "#FFFFFF" : "#000000",
            },
            {
              icon: SiNotion,
              name: "Notion",
              color: isDark ? "#FFFFFF" : "#000000",
            },
            { icon: SiMysql, name: "MySQL", color: "#4479A1" },
            { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
            {
              icon: SiResend,
              name: "Resend",
              color: isDark ? "#FFFFFF" : "#000000",
            },
          ]}
        />

        <StackCard
          title="Cloud & DevOps"
          inView={inView}
          items={[
            { icon: SiDocker, name: "Docker", color: "#2496ED" },
            { icon: SiGithubactions, name: "CI/CD", color: "#2088FF" },
            {
              icon: SiVercel,
              name: "Vercel",
              color: isDark ? "#FFFFFF" : "#000000",
            },
            { icon: FaAws, name: "AWS", color: "#FF9900" },
            { icon: SiRender, name: "Render", color: "#46E3B7" },
            {
              icon: SiSentry,
              name: "Sentry",
              color: isDark ? "#FFFFFF" : "#362D59",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default StackSection;

/*  STACK CARD */

const StackCard = ({
  title,
  items,
  inView,
}: {
  title: string;
  items: { icon: any; name: string; color?: string }[];
  inView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-border bg-background/40 backdrop-blur-md p-6 space-y-5 hover:scale-[1.02] transition-transform"
    >
      <h3 className="text-xl font-bold text-foreground tracking-tight">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition group"
          >
            <item.icon
              className="w-5 h-5 transition-transform group-hover:scale-110"
              style={{ color: item.color }}
            />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
