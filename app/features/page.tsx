import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BarChart3, Megaphone, BookmarkCheck, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Features - Digital Business Solutions",
  description: "Discover KADAIHUB's powerful features for local businesses. Get digital presence, analytics, promotions, and customer comparison tools to grow your business.",
  keywords: [
    "business features",
    "digital presence",
    "business analytics", 
    "local business tools",
    "customer engagement",
    "business promotions"
  ],
  openGraph: {
    title: "Features - Digital Business Solutions | KADAIHUB",
    description: "Discover KADAIHUB's powerful features for local businesses. Get digital presence, analytics, promotions, and customer comparison tools.",
    url: "https://your-domain.com/features",
  },
  twitter: {
    title: "Features - Digital Business Solutions | KADAIHUB",
    description: "Discover KADAIHUB's powerful features for local businesses.",
  },
  alternates: {
    canonical: "/features",
  },
}

const items = [
  { icon: Building2, title: "Digital Presence", desc: "Get discovered by customers searching nearby." },
  { icon: BookmarkCheck, title: "Compare Shops", desc: "Transparent offers help customers choose confidently." },
  { icon: Megaphone, title: "Promotions", desc: "Run coupons and seasonal campaigns with ease." },
  { icon: BarChart3, title: "Analytics", desc: "Understand visits and enquiries to grow faster." },
]

export default function FeaturesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-[#2E3A59]">Why join KADAIHUB?</h1>
        <div id="benefits" className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border p-5">
              <Icon className="h-6 w-6 text-[#E53935]" aria-hidden />
              <h3 className="mt-3 font-semibold text-[#2E3A59]">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
