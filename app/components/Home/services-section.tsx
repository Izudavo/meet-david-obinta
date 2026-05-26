"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  LayoutDashboard,
  Database,
  Cloud,
  Smartphone,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Frontend Development",
    color: "#3B82F6",
    description:
      "Designing and building responsive, fast, and modern web interfaces with Figma(UI/UX), React, Next.js, TypeScript, and TailwindCSS.",
  },

  {
    icon: Database,
    title: "Backend Systems",
    color: "#10B981",
    description:
      "Designing scalable APIs, authentication systems, databases, and business logic using Node.js, Express, and SQL technologies.",
  },

  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "#F59E0B",
    description:
      "Deploying and managing applications with Docker, CI/CD pipelines, AWS services, monitoring tools, and cloud infrastructure.",
  },

  {
    icon: Smartphone,
    title: "Mobile App Development",
    color: "#8B5CF6",
    description:
      "Creating cross-platform mobile applications with Flutter focused on clean UI, performance, and user experience.",
  },

  {
    icon: Workflow,
    title: "Automation & Integrations",
    color: "#06B6D4",
    description:
      "Integrating APIs, email workflows, CMS platforms, notifications, and automation systems for production-ready applications.",
  },

  {
    icon: Code2,
    title: "Full-Stack Solutions",
    color: "#EF4444",
    description:
      "Transforming ideas and product requirements into complete end-to-end applications from design to deployment.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-4 py-28 space-y-14">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
          My Services
        </h2>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          I help design, build, deploy, and maintain modern digital products
          from responsive frontend interfaces to scalable backend systems and
          cloud infrastructure.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
            }}
            className="rounded-2xl border border-border bg-background/40 backdrop-blur-md p-6 space-y-5 hover:scale-[1.02] transition-all"
          >
            <div className="flex items-center">
              <service.icon
                className="w-7 h-7"
                style={{ color: service.color }}
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;