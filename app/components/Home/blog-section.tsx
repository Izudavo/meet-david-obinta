"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

const posts = [
  {
    title: "My Journey into DevOps as a Fullstack Engineer",
    image: "/blog/devops_img.svg",
    excerpt: "How I moved from frontend development to full cloud ownership and automated infrastructure.",
    slug: "devops-journey",
    accent: "from-sky-500/25 via-sky-500/5 to-transparent",
    readTime: "5 min read",
  },
  {
    title: "Blockchain Systems",
    image: "/blog/coin_img.svg",
    excerpt: "Integrating smart contracts, web3 providers, and ethers.js into secure client platforms.",
    slug: "blockchain-system",
    accent: "from-purple-500/25 via-purple-500/5 to-transparent",
    readTime: "7 min read",
  },
  {
    title: "Next.js Performance Optimization",
    image: "/blog/next-js.png",
    excerpt: "Production-level optimization strategies, caching bails, and React Server Components tuning.",
    slug: "nextjs-performance",
    accent: "from-emerald-500/25 via-emerald-500/5 to-transparent",
    readTime: "6 min read",
  },
  {
    title: "Thinking in Systems",
    image: "/blog/code-img.jpeg",
    excerpt: "How architectural thinking, atomic transactions, and clean boundaries changed my engineering.",
    slug: "system-design",
    accent: "from-orange-500/25 via-orange-500/5 to-transparent",
    readTime: "4 min read",
  },
];

export default function BlogPreviewSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28 lg:py-36 space-y-16">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-border bg-background/60 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 shadow-sm backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5" />
            Engineering & Insights
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.1]">
            Blog & Writings
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Thoughts, lessons, and architectural insights from building full-stack systems, 
            cloud infrastructure, and scalable web products.
          </p>
        </div>

        {/* VIEW ALL BUTTON DESKTOP */}
        <div className="hidden md:block">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/80 bg-background/60 backdrop-blur-xl text-xs font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
          >
            <span>View All Articles</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-[2.5rem] border border-border/80 bg-background/60 overflow-hidden shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-2xl"
          >
            <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
              {/* IMAGE CONTAINER */}
              <div className="h-56 overflow-hidden relative border-b border-border/50 bg-muted/30">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* GRADIENT OVERLAY */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${post.accent} opacity-60 pointer-events-none`}
                />

                {/* READ TIME BADGE */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/60 text-[10px] font-bold uppercase tracking-widest text-foreground shadow-sm">
                  {post.readTime}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground group-hover:text-sky-500 transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Read Article
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 transition-all duration-300 group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white shadow-sm">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* VIEW ALL MOBILE */}
      <div className="text-center pt-4 md:hidden">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/80 bg-background/60 text-xs font-semibold uppercase tracking-widest text-foreground shadow-sm"
        >
          <span>View All Articles</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}