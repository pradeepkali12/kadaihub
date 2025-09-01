import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact KADAIHUB for business inquiries, support, or partnerships. We're here to help you connect your local business digitally.",
  keywords: [
    "contact kadaihub",
    "business support",
    "customer service",
    "business inquiries",
    "digital solutions support",
    "local business help"
  ],
  openGraph: {
    title: "Contact Us - Get in Touch | KADAIHUB",
    description: "Contact KADAIHUB for business inquiries, support, or partnerships. We're here to help you connect your local business digitally.",
    url: "https://kadaihub.tech/contact",
  },
  twitter: {
    title: "Contact Us - Get in Touch | KADAIHUB",
    description: "Contact KADAIHUB for business inquiries, support, or partnerships.",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-[#2E3A59]">Contact Us</h1>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-sm text-gray-700">Address: 123 Market Street, Your City, India</p>
            <p className="text-sm text-gray-700">Email: hello@kadaihub.com</p>
            <p className="text-sm text-gray-700">Phone: +91-90000-00000</p>
            <div className="overflow-hidden rounded-lg border">
              <iframe
                title="KADAIHUB office map"
                src="https://maps.google.com/maps?q=Market%20Street%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-48 w-full"
                loading="lazy"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
