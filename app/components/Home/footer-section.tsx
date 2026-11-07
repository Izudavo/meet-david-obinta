"use client";

import { motion } from "framer-motion";
import { socials } from "../ui/socials";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Prisma",
  "MySQL",
  "AWS",
  "Docker",
  "CI/CD",
  "Flutter",
  "System Design",
  "Premiere Pro",
  "CapCut",
  "Adobe Audition",
  "Sound Design",
  "Visual Storytelling",
];

const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-6xl mx-auto px-4 py-24 border-t border-white/10 space-y-16">
      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
          Let’s Work Together
        </h2>

        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          I’m open to full-time roles, freelance projects, and collaborations
          across software engineering, video editing, and visual storytelling.
        </p>

        {/* EMAIL */}
        <a
          href="mailto:izuchukwudavido@gmail.com"
          className="inline-block mt-2 text-base md:text-lg font-semibold text-foreground hover:opacity-70 transition"
        >
          Let’s talk - izuchukwudavido@gmail.com
        </a>
      </motion.div>

      {/* SOCIAL LINKS */}
      <div className="space-y-4">
        <p className="text-base md:text-lg italic text-muted-foreground/80 tracking-wide text-center">
          Connect with me across these platforms
        </p>

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
        </div>
      </div>

      {/* SKILLS CAROUSEL */}
      <div className="space-y-4">
  
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="footer-skills-track flex w-max items-center gap-3 pr-3 hover:[animation-play-state:paused]">
            {[...skills, ...skills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="whitespace-nowrap rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-md transition-colors hover:text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-muted-foreground pt-6 border-t border-white/10">
        © {year} All rights reserved. Built by David Obinta.
      </div>
    </footer>
  );
};

export default FooterSection;
