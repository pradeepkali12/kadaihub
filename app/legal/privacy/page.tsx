import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection",
  description: "KADAIHUB's privacy policy explaining how we collect, use, and protect your personal information and business data.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/legal/privacy",
  },
}

export default function PrivacyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "KADAIHUB's privacy policy explaining how we collect, use, and protect your personal information and business data.",
    "url": "https://your-domain.com/legal/privacy", // Replace with your actual domain
    "isPartOf": {
      "@type": "WebSite",
      "name": "KADAIHUB",
      "url": "https://your-domain.com" // Replace with your actual domain
    }
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-[#2E3A59]">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-6 text-gray-700">
          We respect your privacy. This placeholder describes how we collect, use, and safeguard information. Update
          this copy with your actual policy before launch.
        </p>
      </section>
      <SiteFooter />
    </main>
  )
}
