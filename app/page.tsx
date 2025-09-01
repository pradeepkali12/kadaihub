import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KADAIHUB",
    "url": "https://kadaihub.tech", // Replace with your actual domain
    "description": "We connect local business with digital solutions, making commerce easier and smarter.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kadaihub.tech/search?q={search_term_string}", // Replace with your actual search URL
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "KADAIHUB",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kadaihub.tech/images/kadai-logo.jpg" // Replace with your actual domain
      }
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SiteHeader />

      <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pb-12 pt-10 text-center md:pt-16">
        <Image
          src="/images/kadai-logo.jpg"
          alt="KADAIHUB logo - Connecting Local Business Digitally"
          width={280}
          height={80}
          className="h-auto w-auto"
          priority
        />
        <h1 className="text-pretty text-3xl font-semibold text-[#2E3A59] md:text-5xl">
          Connecting Local Business Digitally
        </h1>
        <p className="max-w-2xl text-balance text-gray-600">
          We connect local business with digital solutions, making commerce easier and smarter. Discover innovative 
          features, compare offerings, and get the best digital solutions for your needs.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row" role="group" aria-label="Main actions">
          <Link href="/features">
            <Button size="lg" className="rounded-full bg-[#2E3A59] text-white hover:bg-[#26314a]">
              Explore Features
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#E53935] text-[#E53935] hover:bg-[#fff1f1] bg-transparent"
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* <div className="mt-8 w-full overflow-hidden rounded-xl">
          <img src="/local-market-street.png" alt="Local markets and shops" className="h-auto w-full object-cover" />
        </div> */}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10" aria-labelledby="features-heading">
        <h2 id="features-heading" className="sr-only">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Digital Solutions", desc: "Browse innovative tools and services for your business needs." },
            { title: "Compare & Choose", desc: "Check features and pricing before making your decision." },
            { title: "Expert Support", desc: "Get professional guidance and support throughout your journey." },
          ].map((f) => (
            <article key={f.title} className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold text-[#2E3A59]">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
