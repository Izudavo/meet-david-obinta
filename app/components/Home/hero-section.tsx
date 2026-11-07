"use client";

import { FaArrowDown } from "react-icons/fa6";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { socials } from "../ui/socials";

const roles = ["SOFTWARE ENGINEER", "VIDEO EDITOR", "CREATIVE BUILDER"];

// ANIMATED TITLE
const AnimatedTitle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4500); // Tighter timing feels punchier

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-[34px] font-black uppercase tracking-[-0.045em] text-foreground sm:text-[54px] md:text-[60px] lg:text-[60px] xl:text-[68px]">
      <div className="relative h-[1.25em] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -60, opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="block whitespace-nowrap"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </h2>
  );
};

// HERO SECTION
const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-28 lg:pt-36 pb-24 lg:pb-32 items-center px-6"
    >
      {/* AMBIENT GLOW BACKDROP FOR DEPTH */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-4 lg:bottom-6 flex flex-col items-center text-muted-foreground/60 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-sm"
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>

      {/* PROFILE IMAGE & BUTTON WRAPPER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center gap-8"
      >
        {/* EDITORIAL IMAGE CAPSULE WITH DOUBLE RING & GLOW */}
        <div className="relative group p-3 rounded-full border border-border/80 bg-background/50 backdrop-blur-md shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/20 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="w-56 h-56 md:w-68 md:h-68 rounded-full overflow-hidden bg-muted relative">
            <img
              src="/izu.png"
              alt="David Obinta"
              className="object-cover object-top w-full h-full grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] pointer-events-none" />
          </div>
        </div>

        {/* VIEW PROJECTS BUTTON */}
        <button
          onClick={scrollToProjects}
          className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer bg-foreground text-background hover:opacity-90 shadow-md active:scale-95"
        >
          <span>Explore Works</span>
          <FaArrowDown className="text-[10px] text-sky-400 transition-transform duration-300 group-hover:translate-y-1" />
        </button>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-8 flex flex-col justify-center text-center lg:text-left space-y-10 order-2 lg:order-1"
      >
        <header className="space-y-4">
          
          <AnimatedTitle />

          <p className="max-w-xl mx-auto lg:mx-0 text-muted-foreground text-base md:text-lg leading-relaxed font-normal">
            I craft engineered web & mobile applications and shape raw digital concepts into immersive visual narratives, balancing rigorous systems architecture with fine-tuned aesthetic detail.
          </p>
        </header>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-3 gap-4 pt-2 border-t border-border/60 max-w-lg mx-auto lg:mx-0"
        >
          <Stat item="03+" label="Core disciplines" />
          <Stat item="20+" label="Projects shipped" />
          <Stat item="100%" label="Craft focus" />
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-3 pt-2"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
            Connect & Platforms
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 ${social.color}`}
                >
                  <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                  <span className="text-xs uppercase tracking-wider font-medium">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// STAT COMPONENT
const Stat = ({ item, label }: { item: string; label: string }) => (
  <div className="flex flex-col items-center lg:items-start leading-tight">
    <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
      {item}
    </p>
    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-1 font-semibold">
      {label}
    </p>
  </div>
);

export default HeroSection;