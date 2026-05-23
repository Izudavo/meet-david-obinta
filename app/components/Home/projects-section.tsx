"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useMemo } from "react";
import { ExternalLink, X } from "lucide-react";
import { FaGithub, FaFigma } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  category: "uiux" | "frontend" | "backend" | "cloud";
  tech: string[];
  highlights?: string[];
  github?: string;
  live?: string;
  figma?: string;
  image: string;
  accent: string;
};

const projects: Project[] = [

  // UI/UX 
  {
    title: "AT Budget App UI",
    description:
      "A modern mobile budgeting experience focused on expense tracking, smart savings goals, analytics, and clean financial insights.",
    category: "uiux",
    tech: ["Figma", "Mobile UI", "Prototype", "Design System"],
    figma:
      "https://www.figma.com/proto/W3TP2BfFeOWvg3fmlqjcB1/AT_MVP_MOBILE?node-id=140-256&p=f&t=r8yuVXLd24o1xJSV-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=29%3A152&show-proto-sidebar=1",
    image: "/projects/budget-ui.png",
    accent: "#6366F1",
  },

  {
    title: "CirvaX Giftcard Trading App UI",
    description:
      "Mobile-first gift card trading experience designed for fast transactions, wallet management, rate visibility, and trust-driven user flows.",
    category: "uiux",
    tech: ["Figma", "Fintech UX", "Prototype"],
    figma:
      "https://www.figma.com/proto/WrZFNPAzz5UIgchCGYjobd/circle-of-smarter-money?node-id=2-513&p=f&t=zgT4ZSNLsxIbslNj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    image: "/projects/giftcard-ui.png",
    accent: "#F59E0B",
  },

  // FRONTEND
  {
    title: "GHAN Platform",
    description:
      "Led the end-to-end redesign and development of the GHAN platform, transforming product requirements and Figma concepts into a scalable production-ready web application focused on performance, maintainability, and operational efficiency.",
    category: "frontend",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "CMS",
      "API Integration",
      "SEO",
    ],
    highlights: [
      "Designed and implemented responsive user interfaces from Figma concepts",
      "Built scalable frontend architecture using Next.js and TypeScript",
      "Integrated backend services for forms, messaging, and content workflows",
      "Optimized SEO, accessibility, and performance across pages",
      "Implemented automated email workflows and validation systems",
      "Integrated dynamic content management using a headless CMS",
      "Improved platform reliability with structured error handling and abuse prevention",
      "Managed production deployments and release iterations",
    ],
    live: "https://www.globalharvestnetworks.com",
    image: "/projects/ghan-platform.png",
    accent: "#EAB308",
  },

  {
    title: "Giftcard Trading Platform",
    description:
      "Designed and developed a fintech landing platform for streamlined gift card trading with WhatsApp-assisted transaction workflows, trust-focused onboarding, and conversion-driven user experience.",
    category: "frontend",
    tech: [
      "Vite",
      "TypeScript",
      "WhatsApp Integration",
      "Tailwind",
      "Fintech UI",
    ],
    highlights: [
      "Built responsive fintech landing experience optimized for mobile users",
      "Integrated WhatsApp-driven customer interaction and trading workflows",
      "Designed trust-focused UI patterns for rates, transactions, and onboarding",
      "Developed reusable frontend components and scalable layout system",
      "Focused on conversion-oriented UX and simplified trading flows",
    ],
    live: "https://cirvax.com",
    image: "/projects/cirva-gift-landing.png",
    accent: "#10B981",
  },

  {
    title: "Authentic Technologies",
    description:
      "Designed and developed a modern enterprise solutions platform focused on workflow automation, operational efficiency, and interactive smart tools for digital decision-making.",
    category: "frontend",
    tech: ["Vite", "TypeScript", "Tailwind", "Interactive UI", "Enterprise UX"],
    highlights: [
      "Built modern enterprise landing platform with scalable frontend architecture",
      "Designed interactive Smart Test Labs for user engagement and lead generation",
      "Developed AI-assisted budgeting calculator experience",
      "Created industry-based app preview and demo interaction flows",
      "Implemented security assessment experience with scoring and recommendations",
      "Optimized responsive layouts, accessibility, and performance",
      "Designed reusable UI systems and modular frontend components",
    ],
    live: "https://authentictechnologies.co",
    image: "/projects/authentic-tech.png",
    accent: "#2563EB",
  },

  // BACKEND
  {
    title: "RideIT",
    description:
      "RideIT - A backend API for a student transport solution system, similar to Uber/Bolt but designed for campus rides.",
    category: "backend",
    tech: [" JavaScript, Node.js, Express, Prisma, MySQL, and Render"],
    github: "https://github.com/Web-dev-ENT-302/transport-backend",
    image: "/projects/rideit.png",
    accent: "#D4AF37",
  },

  {
    title: "AT Budget App",
    description:
      "A backend API powering modern mobile budgeting experience focused on expense tracking, smart savings goals, analytics, and clean financial insights.",
    category: "backend",
    tech: [" TypeScript, Node.js, Express, Prisma, MySQL, and AWS EC2"],
    github: "https://github.com/Web-Af-dev/AT-Budget-Backend",
    image: "/projects/budget-ui.png",
    accent: "#A78BFA",
  },

  {
    title: "CirvaX Giftcard API",
    description:
      "Backend API for Cirva-X card trade operations, both handling user and admin actions, deployed to AWS infra, using Sentry for monitoring",
    category: "backend",
    tech: [" TypeScript, Node.js, Express, Prisma, MySQL, Sentry, Resend, and AWS"],
    github: "https://github.com/devcirvax/node-backend",
    image: "/projects/giftcard-ui.png",
    accent: "#10B981",
  },

  // CLOUD
  {
    title: "Cloud CI/CD Pipeline", // will update this
    description:
      "Automated deployment system with Docker, GitHub Actions, and scalable AWS-like infrastructure.",
    category: "cloud",
    tech: ["Docker", "CI/CD", "Nginx"],
    github: "https://github.com",
    image: "/projects/cloud.png",
    accent: "#22C55E",
  },
];

const tabs = [
  { key: "uiux", label: "UI/UX" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "cloud", label: "Cloud" },
] as const;

export default function SelectedProjects() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("uiux");

  const [selected, setSelected] = useState<Project | null>(null);

  // cache loaded figma embeds
  const loadedFigma = useRef<Record<string, boolean>>({});

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

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

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          A collection of products, mobile experiences, backend systems, and
          cloud infrastructure projects spanning engineering and UI/UX design.
        </p>
      </motion.div>

      {/* TABS */}
      <div className="flex flex-wrap gap-3">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
              active === t.key
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              onClick={() => setSelected(p)}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5"
            >
              {/* glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 blur-3xl transition duration-700"
                style={{ background: p.accent }}
              />

              {/* IMAGE */}
              <div className="relative h-[300px] overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4 relative z-20">
                <div className="space-y-2">
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: p.accent }}
                  >
                    {p.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {p.description}
                  </p>
                </div>

                {/* tech stack */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* links */}
                <div className="flex items-center gap-5 pt-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                    >
                      <FaGithub className="w-4 h-4" />
                      View Github repo →
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Click to see live url
                    </a>
                  )}

                  {p.figma && (
                    <a
                      href={p.figma}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                    >
                      <FaFigma className="w-4 h-4" />
                      Figma →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
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
              className="relative w-full max-w-2xl md:max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black shadow-2xl"
            >
              {/* close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-50 w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md flex items-center justify-center hover:scale-105 transition"
              >
                <X className="w-4 h-4 text-black dark:text-white" />
              </button>

              {/* content (scroll container) */}
              <div className="p-5 md:p-6 space-y-4 overflow-y-auto max-h-[90vh]">
                {/* top */}
                <div className="space-y-3 pr-6">
                  <h3
                    className="text-xl md:text-2xl font-black"
                    style={{ color: selected.accent }}
                  >
                    {selected.title}
                  </h3>

                  <p className="leading-relaxed text-sm md:text-base text-zinc-700 dark:text-zinc-300">
                    {selected.description}
                  </p>

                  {/* tech */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* links */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                      >
                        <FaGithub />
                        Code
                      </a>
                    )}

                    {selected.live && (
                      <a
                        href={selected.live}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}

                    {selected.figma && (
                      <a
                        href={selected.figma}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                      >
                        <FaFigma className="w-4 h-4" />
                        View in Figma
                      </a>
                    )}
                  </div>
                </div>

                {/* figma */}
                {selected.figma && (
                  <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                    {!loadedFigma.current[selected.title] && (
                      <div className="h-[320px] md:h-[380px] flex items-center justify-center">
                        <div className="space-y-3 text-center">
                          <div className="w-8 h-8 border-2 border-zinc-300 border-t-black dark:border-zinc-700 dark:border-t-white rounded-full animate-spin mx-auto" />
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            Loading prototype...
                          </p>
                        </div>
                      </div>
                    )}

                    <iframe
                      src={`https://www.figma.com/embed?embed_host=share&url=${selected.figma}`}
                      className={`w-full h-[320px] md:h-[380px] ${
                        loadedFigma.current[selected.title] ? "block" : "hidden"
                      }`}
                      allowFullScreen
                      onLoad={() => {
                        loadedFigma.current[selected.title] = true;
                      }}
                    />
                  </div>
                )}

                {/* highlights */}
                {selected.highlights && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Key Contributions
                    </h4>

                    <div className="grid gap-3">
                      {selected.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 bg-zinc-50 dark:bg-zinc-950"
                        >
                          <div
                            className="mt-1 h-2 w-2 rounded-full shrink-0"
                            style={{ background: selected.accent }}
                          />

                          <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
