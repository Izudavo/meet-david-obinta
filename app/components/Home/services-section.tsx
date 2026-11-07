"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cloud,
  Code2,
  Film,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    kind: "engineering",
    icon: Code2,
    title: "Product Engineering",
    color: "#3B82F6",
    description:
      "Designing and building responsive digital products with strong interfaces, backend systems, and scalable application architecture.",
    deliverables: [
      "Pixel-perfect UI translation",
      "Scalable application architecture",
      "Accessible design systems",
    ],
    tone: "bg-zinc-100/70 dark:bg-white/[0.06]",
  },
  {
    kind: "engineering",
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "#F59E0B",
    description:
      "Deploying and operating reliable applications systems, Docker, CI/CD, AWS services, and practical automation.",
    deliverables: [
      "Secure APIs and databases",
      "Automated deployments",
      "Production monitoring",
    ],
    tone: "bg-zinc-100/70 dark:bg-white/[0.06]",
  },
  {
    kind: "video",
    icon: Film,
    title: "Video Editing",
    color: "#F97316",
    description:
      "Editing short-form content, brand stories, and social videos with purposeful pacing, clean transitions, sound, and visual flow.",
    deliverables: [
      "Retention-focused pacing",
      "Sound cleanup and finishing",
      "Platform-ready exports",
    ],
    tone: "bg-zinc-100/70 dark:bg-white/[0.06]",
  },
] as const;

type Service = (typeof services)[number];

const ServicesSection = ({
  mode = "all",
}: {
  mode?: "all" | "engineering" | "video";
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const filteredServices = services.filter(
    (service) => mode === "all" || service.kind === mode,
  );

  return (
    <section
      ref={ref}
      className="mx-auto max-w-6xl space-y-16 px-6 py-28 lg:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl space-y-4"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 shadow-sm backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-sky-500" />
          Core Expertise
        </div>
        <h2 className="text-3xl font-black uppercase leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          My Services
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          I design and build digital products, then shape visual stories with
          the same unwavering attention to clarity, rhythm, and structural
          detail.
        </p>
      </motion.div>

      <div className="space-y-6">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`w-full lg:w-[84%] ${index % 2 === 1 ? "lg:ml-auto" : ""}`}
          >
            <ServiceBand service={service} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ServiceBand = ({ service, index }: { service: Service; index: number }) => {
  const Icon = service.icon;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl px-7 py-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:px-8 sm:py-8 lg:px-10 ${service.tone}`}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex min-w-0 items-start gap-5 md:max-w-[58%]">
          <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/5 text-foreground transition-transform duration-500 group-hover:scale-110 dark:bg-white/10">
            <Icon className="h-6 w-6" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                0{index + 1}
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight text-foreground sm:text-2xl">
                {service.title}
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              {service.description}
            </p>
          </div>
        </div>

        <div className="md:max-w-[34%]">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            What I deliver
          </p>
          <ul className="space-y-1.5 text-xs font-semibold text-muted-foreground sm:text-sm">
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <ArrowUpRight className="hidden h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:block" />
      </div>
    </article>
  );
};

export default ServicesSection;
