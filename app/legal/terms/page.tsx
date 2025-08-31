import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Terms & Conditions - Service Agreement",
  description: "KADAIHUB's terms and conditions governing the use of our digital business platform and services.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/legal/terms",
  },
}

export default function TermsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-[#2E3A59]">Terms & Conditions</h1>
        <p className="mt-4 text-sm leading-6 text-gray-700">
          These terms govern your use of KADAIHUB services. Replace this placeholder with your finalized terms and
          conditions.
        </p>
      </section>
      <SiteFooter />
    </main>
  )
}
