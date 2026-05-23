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
          around scalable systems, cloud infrastructure, and fullstack
          development.
        </p>

        {/* EMAIL */}
        <a
          href="mailto:izuchukwudavido@gmail.com"
          className="inline-block mt-2 text-lg md:text-xl font-semibold text-foreground hover:opacity-70 transition"
        >
          izuchukwudavido@gmail.com
        </a>
      </motion.div>

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
      </div>

      {/* SKILLS */}
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-muted-foreground pt-6 border-t border-white/10">
        © {year} All rights reserved. Built by David Obinta.
      </div>
    </footer>
  );
};

export default FooterSection;
