"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Briefcase, ChevronDown, ArrowUpRight, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Independent",
    logo: "/izu.png",
    type: "Freelance",
    period: "Jun 2026 - Present",
    location: "Remote",
    badge: "Current Role",
    description:
      "Build and deploy custom software solutions for small and growing businesses, turning manual workflows into reliable digital systems.",
    highlights: [
      "Build booking and reservation systems for mobile auto detailing businesses and short-term rental hosts across the USA, Canada, and UK.",
      "Develop custom admin dashboards for bookings, services, customers, pricing, and daily operations.",
      "Design end-to-end systems across frontend, backend, databases, authentication, APIs, and cloud deployment.",
      "Work directly with business owners to translate existing processes into practical software solutions.",
      "Manage the full development lifecycle from requirements and system design through testing, deployment, and improvements.",
    ],
    skills: ["TypeScript", "React", "Next.js", "Node.js", "Flutter", "MySQL", "PostgreSQL", "Prisma", "AWS", "DevOps"],
  },
  {
    role: "Full Stack Engineer",
    company: "Global Harvest And Networks",
    logo: "/ghan.png",
    type: "Contract",
    period: "Feb 2026 - Apr 2026",
    location: "Remote",
    badge: "Full Stack",
    description:
      "Led end-to-end redesign and development of the GHAN platform, transforming Figma designs into a production-ready web application with high performance.",
    highlights: [
      "Designed UI/UX in Figma and translated into responsive web application.",
      "Built full-stack app using Next.js, TypeScript, and API routes.",
      "Optimized performance and SEO structure for discoverability.",
      "Developed backend services for forms, messaging, and data handling.",
      "Integrated headless CMS for dynamic content management and automated email workflows.",
    ],
    skills: ["Next.js", "TypeScript", "TailwindCSS", "Figma", "Node.js"],
  },
  {
    role: "Web Engineer",
    company: "Authentic Finance",
    logo: "/af_logo.png",
    type: "Full-time",
    period: "Mar 2025 - Mar 2026",
    location: "Remote",
    badge: "Web3 & Cloud",
    description:
      "Building and maintaining full-stack solutions across financial and blockchain systems. Developed frontend dApps, smart contracts, and server-side infrastructure.",
    highlights: [
      "Integrated blockchain protocols (ethers/web3) into high-performance client web applications.",
      "Managed end-to-end DevOps responsibilities, CI/CD pipelines, and secure cloud server states.",
    ],
    skills: ["Smart Contracts", "Blockchain", "Fullstack", "DevOps", "CI/CD"],
  },
  {
    role: "Video Editor",
    company: "Global Harvest And Networks",
    logo: "/ghan.png",
    type: "Contract",
    period: "Sep 2024 - May 2025",
    location: "Remote",
    badge: "Media Production",
    description:
      "Produced and edited digital media content to support GHAN's communication, outreach, and brand identity efforts.",
    highlights: [
      "Edited video content for major announcements, campaigns, and digital outreach.",
      "Supported visual storytelling for platform engagement, awareness, and promotional distributions.",
    ],
    skills: ["Video Editing", "Adobe Premiere Pro", "CapCut", "Adobe Audition"],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-6 py-28 lg:py-36 space-y-16">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4 max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-background/60 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 shadow-sm backdrop-blur-md">
          <Briefcase className="w-3.5 h-3.5" />
          Career Track Record
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.1]">
          Experience
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Professional experience spanning full-stack software engineering, cloud architecture,
          blockchain systems, and digital media storytelling.
        </p>
      </motion.div>

      {/* TIMELINE CONTAINER */}
      <div className="grid gap-6">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} inView={inView} index={i} />
        ))}
      </div>
    </section>
  );
}

/* REDESIGNED EXPERIENCE CARD */

const ExperienceCard = ({
  exp,
  inView,
  index,
}: {
  exp: any;
  inView: boolean;
  index: number;
}) => {
  const [open, setOpen] = useState(index === 0); // Open first card by default for engagement

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-[2rem] border border-border/80 bg-background/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-foreground/20 hover:shadow-2xl shadow-lg"
    >
      <div 
        onClick={() => setOpen(!open)}
        className="cursor-pointer space-y-6"
      >
        {/* TOP ROW */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl overflow-hidden bg-muted/80 flex items-center justify-center border border-border/80 shrink-0 shadow-inner">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                  {exp.role}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-border/40 text-muted-foreground border border-border/60">
                  {exp.badge}
                </span>
              </div>
              <p className="text-sm font-semibold text-muted-foreground/90 mt-0.5">
                {exp.company} <span className="text-muted-foreground/40 font-normal">/</span> {exp.type}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-border/40 text-xs font-semibold text-muted-foreground">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-border/30 border border-border/50">
              <Calendar className="w-3.5 h-3.5 text-sky-500" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          {exp.description}
        </p>

        {/* TOGGLE BAR */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-500 group-hover:underline">
            {open ? "Hide Details" : "View Key Contributions"}
          </span>
          <div className="w-8 h-8 rounded-full border border-border/80 bg-background/80 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4 text-foreground" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* EXPANDED CONTENT */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="pt-6 mt-6 border-t border-border/60 space-y-6">
          {"highlights" in exp && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Key Accomplishments & Responsibilities
              </h4>
              <ul className="grid gap-2.5">
                {exp.highlights.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {"skills" in exp && (
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Stack & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill: string, sIdx: number) => (
                  <span
                    key={sIdx}
                    className="rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs font-medium text-foreground shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};