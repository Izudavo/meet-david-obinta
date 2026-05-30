"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
    >
      {/* TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="lg:col-span-6 space-y-6"
      >
        <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight uppercase tracking-tight">
          About Me
        </h2>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          I’m a fullstack engineer with a strong focus on building scalable
          systems across web, mobile, and cloud infrastructure. I work across
          the entire product lifecycle from system design and backend APIs to
          frontend interfaces and deployment automation.
        </p>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Over the past few years, I’ve built and contributed to multiple
          production systems involving authentication flows, wallet-based
          transaction systems, real-time communication features, and
          cloud-hosted services on AWS.
        </p>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          My strength lies in connecting product thinking with engineering
          execution, designing systems that are not just functional, but
          reliable, scalable, and ready for real users.
        </p>
      </motion.div>

      {/* VIDEO FRAME */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="lg:col-span-6"
      >
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/rxb82BxPz-0"
            title="Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/*  subtle caption */}
        <p className="text-xs text-muted-foreground mt-3 text-center lg:text-left">
          A short walkthrough of my work, systems, and engineering approach.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
