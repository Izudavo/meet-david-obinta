import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import type { Metadata } from "next";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const contentDir = path.join(process.cwd(), "content/blog");

// STATIC PARAMS
export async function generateStaticParams() {
  if (!fs.existsSync(contentDir)) {
    throw new Error(`Blog content folder not found: ${contentDir}`);
  }

  const files = fs.readdirSync(contentDir);

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

// GET POST
async function getPost(slug: string) {
  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog post not found: ${slug}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return {
    data,
    contentHtml: processedContent.toString(),
  };
}

// new: for seo
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await getPost(slug);

  return {
    title: data.title,
    description:
      data.excerpt ||
      "Insights on software engineering, cloud, DevOps and system design.",

    alternates: {
      canonical: `/blog/${slug}`,
    },

    openGraph: {
      title: data.title,
      description: data.excerpt,
      url: `https://davidobinta.xyz/blog/${slug}`,
      type: "article",
      publishedTime: data.date,
      images: data.image
        ? [
            {
              url: data.image,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.excerpt,
      images: data.image ? [data.image] : [],
    },
  };
}

// PAGE
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data, contentHtml } = await getPost(slug);

  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-4xl mx-auto px-4 py-24 md:py-32">
        {/* HERO */}
        <div className="space-y-10">
          {/* DATE */}
          {data?.date && (
            <div className="flex justify-center">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground border border-border rounded-full px-4 py-2">
                {data.date}
              </span>
            </div>
          )}

          {/* TITLE */}
          <div className="space-y-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] text-foreground">
              {data?.title}
            </h1>

            {data?.excerpt && (
              <p className="max-w-2xl mx-auto text-base md:text-xl text-muted-foreground leading-relaxed">
                {data.excerpt}
              </p>
            )}
          </div>

          {/* IMAGE */}
          {data?.image && (
            <div className="overflow-hidden rounded-3xl border border-border bg-muted/20">
              <img
                src={data.image}
                alt={data.title || "Blog image"}
                className="w-full h-[220px] md:h-[350px] object-cover"
              />
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="mt-20 mx-auto prose prose-blog max-w-none">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </article>
    </main>
  );
}
