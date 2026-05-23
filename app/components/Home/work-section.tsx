"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Web Engineer",
    company: "Authentic Finance",
    logo: "/af_logo.png",
    type: "Full-time",
    period: "Mar 2025 - Present",
    location: "Remote",
    color: "#38BDF8",
    description:
      "Building and maintaining full-stack solutions across financial and blockchain systems. Develops frontend client web applications, integrates blockchain (ethers/web3 dApps), smart contracts, server-side systems, and manages CI/CD pipelines with end-to-end DevOps responsibilities.",
    skills: "Smart Contracts · Blockchain · Fullstack · DevOps",
  },
  {
    role: "Full Stack Engineer",
    company: "Global Harvest And Networks",
    logo: "/ghan.png",
    type: "Contract",
    period: "Feb 2026 - Apr 2026",
    location: "Lagos State, Nigeria · Remote",
    color: "#A78BFA",
    description:
      "Led end-to-end redesign and development of the GHAN platform, transforming Figma designs into a production-ready web application. Built a scalable and secure full-stack system focused on performance, reliability, and maintainability.",
    highlights: [
      "Designed UI/UX in Figma and translated into responsive web application",
      "Built full-stack app using Next.js, TypeScript, and API routes",
      "Optimized performance and SEO structure for discoverability",
      "Developed backend services for forms, messaging, and data handling",
      "Integrated headless CMS for dynamic content management",
      "Implemented automated email workflows",
      "Improved security via validation and abuse prevention",
      "Managed deployment and production releases",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-4 py-28 space-y-14">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-left space-y-3"
      >
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
          Experience
        </h2>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Professional engineering experience spanning fullstack systems,
          blockchain integration, scalable architecture, and production-grade deployments.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative border-l border-border pl-6 space-y-12">
        {experiences.map((exp, i) => (
          <ExpandableCard key={i} exp={exp} inView={inView} index={i} />
        ))}
      </div>
    </section>
  );
}

/* EXPANDABLE CARD  */

const ExpandableCard = ({
  exp,
  inView,
  index,
}: {
  exp: any;
  inView: boolean;
  index: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {/* DOT */}
      <span
        className="absolute -left-[10px] top-3 w-4 h-4 rounded-full"
        style={{ backgroundColor: exp.color }}
      />

      {/* CARD */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer rounded-2xl border border-border bg-background/40 backdrop-blur-md p-6 space-y-4 hover:scale-[1.01] transition-transform"
      >
        {/* TOP ROW */}
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3
              className="text-xl md:text-2xl font-bold"
              style={{ color: exp.color }}
            >
              {exp.role}
            </h3>

            <p className="text-foreground font-medium">
              {exp.company} · {exp.type}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {exp.period}
              </span>

              <span>•</span>

              <span>{exp.location}</span>
            </div>
          </div>

          {/* COMPANY LOGO */}
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted flex items-center justify-center border border-border">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {exp.description}
        </p>

        {/* EXPAND BUTTON */}
        <div className="flex items-center justify-between pt-2">
          <div
            className="h-[2px] w-20 rounded-full"
            style={{ backgroundColor: exp.color }}
          />

          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </div>

        {/* EXPANDED CONTENT */}
        <motion.div
          initial={false}
          animate={{
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="pt-4 space-y-3">
            {"highlights" in exp && (
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                {exp.highlights.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {"skills" in exp && (
              <div className="text-xs text-muted-foreground pt-2">
                {exp.skills}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};