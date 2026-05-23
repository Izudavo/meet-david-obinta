"use client";

import { FaArrowDown } from "react-icons/fa6";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { socials } from "../ui/socials";

const roles = ["FULLSTACK", "DEVOPS", "CLOUD"];

{/* SOCIAL LINKS */}
<div className="flex flex-wrap justify-center gap-6">
  {socials.map((social) => {
    const Icon = social.icon;

    return (
      <a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 hover:opacity-80 transition ${social.color}`}
      >
        <Icon className="w-5 h-5" />
        {social.label}
      </a>
    );
  })}
</div>;

// TITLE
const AnimatedTitle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-[40px] sm:text-[60px] md:text-[75px] lg:text-[85px] font-black leading-[0.9] uppercase tracking-tight text-foreground">
      <div className="h-[1.1em] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="block"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      <span className="block text-muted-foreground">ENGINEER</span>
    </h2>
  );
};

// HERO 
const HeroSection = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-30 lg:pt-40 pb-24 lg:pb-36 items-center px-4"
    >
      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 lg:bottom-12 flex flex-col items-center text-muted-foreground pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-lg"
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>

      {/* PROFILE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end"
      >
        <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] flex items-center justify-center">
          <div className="w-44 h-44 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-border bg-background">
            <img
              src="/izu.png"
              alt="David Obinta"
              className="object-cover object-top w-full h-full grayscale contrast-125"
            />
          </div>
        </div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-8 flex flex-col justify-center text-center lg:text-left space-y-10 order-2 lg:order-1"
      >
        <header>
          <AnimatedTitle />

          <p className="max-w-md mx-auto lg:mx-0 text-muted-foreground text-base md:text-lg mt-6 leading-relaxed">
            I design, build, and deploy scalable systems from infrastructure to
            fullstack applications with a focus on performance, automation, and
            reliability.
          </p>
        </header>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-x-2 md:gap-x-4"
        >
          <Stat item="+3" label="Years Experience" />
          <Stat item="+20" label="Projects" />
          <Stat item="+4" label="Certifications" />
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-2"
        >
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 hover:opacity-80 transition ${social.color}`}
              >
                <Icon className="w-5 h-5" />

                <span
                  className={`text-sm uppercase tracking-wider ${
                    social.label === "GitHub"
                      ? "text-foreground"
                      : "text-foreground"
                  }`}
                >
                  {social.label}
                </span>
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

// STAT
const Stat = ({ item, label }: { item: string; label: string }) => (
  <div className="flex flex-col items-center lg:items-start leading-tight">
    <p className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
      {item}
    </p>

    <p className="text-[10px] md:text-[12px] uppercase tracking-[0.15em] text-muted-foreground mt-1 font-semibold">
      {label}
    </p>
  </div>
);

export default HeroSection;
