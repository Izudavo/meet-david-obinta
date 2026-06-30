import { MetadataRoute } from 'next'

async function getPosts() {
  return [
    {
      slug: 'devops-journey',
      updatedAt: '2026-01-10',
    },
    {
      slug: 'blockchain-system',
      updatedAt: '2026-02-18',
    },
    {
      slug: 'nextjs-performance',
      updatedAt: '2026-03-02',
    },
    {
      slug: 'system-design',
      updatedAt: '2026-04-05',
    },
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  const blogUrls = posts.map((post) => ({
    url: `https://davidobinta.xyz/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
  }))

  return [
    {
      url: 'https://davidobinta.xyz',
      lastModified: new Date('2026-06-30'),
    },
    {
      url: 'https://davidobinta.xyz/blog',
      lastModified: new Date('2026-04-05'),
    },

    ...blogUrls,
  ]
}