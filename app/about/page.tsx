import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description: "Learn about KADAIHUB's mission to connect local businesses digitally. Discover our vision, story, and team dedicated to empowering neighborhood businesses.",
  keywords: [
    "about kadaihub",
    "company mission",
    "local business platform",
    "digital transformation",
    "business empowerment",
    "company vision"
  ],
  openGraph: {
    title: "About Us - Our Story & Mission | KADAIHUB",
    description: "Learn about KADAIHUB's mission to connect local businesses digitally. Discover our vision and story.",
    url: "https://kadaihub.tech/about",
  },
  twitter: {
    title: "About Us - Our Story & Mission | KADAIHUB",
    description: "Learn about KADAIHUB's mission to connect local businesses digitally.",
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-[#2E3A59]">About KADAIHUB</h1>
        <p className="mt-3 text-gray-600">
          KADAIHUB bridges the gap between local retailers and digital customers, enabling discovery, comparison, and
          community-first commerce.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h2 className="text-xl font-semibold text-[#2E3A59]">Vision</h2>
            <p className="mt-2 text-gray-600">
              A future where every local store is digitally discoverable and thriving.
            </p>
          </div>
          <div className="rounded-lg border p-5">
            <h2 className="text-xl font-semibold text-[#2E3A59]">Mission</h2>
            <p className="mt-2 text-gray-600">
              Empower neighborhood businesses with simple tools for presence, promotion, and growth.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-lg border p-5">
          <h2 className="text-xl font-semibold text-[#2E3A59]">Our Story</h2>
          <p className="mt-2 text-gray-600">
            We started KADAIHUB after noticing how many great local stores lack digital visibility. Our platform
            connects these shops with customers nearby—quickly and transparently.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { name: "Founder", role: "Founder & CEO" },
            { name: "Co-founder", role: "Growth & Partnerships" },
            { name: "Tech Lead", role: "Platform & Engineering" },
          ].map((m) => (
            <div key={m.role} className="rounded-lg border p-5 text-center">
              <img src="/diverse-person-avatars.png" alt="" className="mx-auto h-24 w-24 rounded-full object-cover" />
              <h3 className="mt-3 font-medium text-[#2E3A59]">{m.name}</h3>
              <p className="text-sm text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
