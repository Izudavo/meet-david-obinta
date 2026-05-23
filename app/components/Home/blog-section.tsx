"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "My Journey into DevOps as a Fullstack Engineer",
    image: "/blog/devops_img.svg",
    excerpt: "How I moved from frontend to full cloud ownership.",
    slug: "devops-journey",
    accent: "from-sky-500/20 to-blue-500/10",
  },
  {
    title: "Blockchain Systems",
    image: "/blog/coin_img.svg",
    excerpt: "Integrating smart contracts with scalable backends.",
    slug: "blockchain-system",
    accent: "from-purple-500/20 to-indigo-500/10",
  },
  {
    title: "Next.js Performance Optimization",
    image: "/blog/next-js.png",
    excerpt: "Production-level optimization strategies.",
    slug: "nextjs-performance",
    accent: "from-emerald-500/20 to-green-500/10",
  },
  {
    title: "Thinking in Systems",
    image: "/blog/code-img.jpeg",
    excerpt: "How architecture thinking changed my engineering.",
    slug: "system-design",
    accent: "from-orange-500/20 to-amber-500/10",
  },
];

export default function BlogPreviewSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-32 space-y-14">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-left space-y-3"
      >
        <h2 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tight">
          Blog
        </h2>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Thoughts, lessons, and engineering insights from building full-stack systems,
          infrastructure, and scalable products.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`group relative rounded-2xl overflow-hidden border border-border bg-background/40 backdrop-blur-md hover:scale-[1.02] transition-all duration-300`}
          >
            {/* IMAGE */}
            <div className="h-52 overflow-hidden relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${post.accent} opacity-60`}
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-foreground group-hover:text-sky-400 transition">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm text-sky-400 hover:text-sky-300 transition"
              >
                Read more →
              </Link>
            </div>

            {/* glow border effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none border border-sky-500/20 rounded-2xl" />
          </motion.div>
        ))}
      </div>

      {/* VIEW ALL */}
      <div className="text-center pt-8">
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground transition text-sm tracking-wide"
        >
          View all articles →
        </Link>
      </div>
    </section>
  );
}