import Link from "next/link";

const posts = [
  "devops-journey",
  "blockchain-system",
  "nextjs-performance",
  "system-design",
];

export default function BlogPage() {
  return (

    <section className="max-w-4xl mx-auto px-4 py-28 space-y-10">
      <h1 className="text-4xl font-black text-foreground">Blog</h1>

      <div className="space-y-6">
        {posts.map((slug) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="block p-5 rounded-xl border border-border hover:bg-muted/20 transition"
          >
            <p className="text-foreground font-medium">{slug.replace("-", " ")}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}