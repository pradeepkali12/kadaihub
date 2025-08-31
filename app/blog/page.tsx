import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog & Updates - Latest News",
  description: "Stay updated with KADAIHUB's latest blog posts, business tips, and platform updates. Learn how to grow your local business digitally.",
  keywords: [
    "kadaihub blog",
    "business tips",
    "local business growth",
    "digital commerce news",
    "business updates",
    "retail insights"
  ],
  openGraph: {
    title: "Blog & Updates - Latest News | KADAIHUB", 
    description: "Stay updated with KADAIHUB's latest blog posts, business tips, and platform updates.",
    url: "https://your-domain.com/blog",
  },
  twitter: {
    title: "Blog & Updates - Latest News | KADAIHUB",
    description: "Stay updated with KADAIHUB's latest blog posts and business tips.",
  },
  alternates: {
    canonical: "/blog",
  },
}

const posts = [
  {
    slug: "how-retail-shops-can-grow-online",
    title: "How Retail Shops Can Grow Online",
    excerpt: "Simple steps to boost your store’s digital presence and attract local customers.",
  },
  {
    slug: "festival-offers-and-local-commerce",
    title: "Festival Offers and Local Commerce",
    excerpt: "Make the most of festive seasons with targeted promotions.",
  },
  {
    slug: "kadai-hub-product-update",
    title: "KADAIHUB Product Update",
    excerpt: "New features to help shops stand out and connect with buyers.",
  },
]

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-[#2E3A59]">Blog & Updates</h1>
        <div className="mt-6 space-y-4">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-lg border p-5">
              <h2 className="text-xl font-semibold text-[#2E3A59]">{p.title}</h2>
              <p className="mt-2 text-gray-600">{p.excerpt}</p>
              <Link href="#" className="mt-3 inline-block text-sm text-[#E53935] hover:underline">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
