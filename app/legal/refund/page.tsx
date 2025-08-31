import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function RefundPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-[#2E3A59]">Refund & Cancellation Policy</h1>
        <p className="mt-4 text-sm leading-6 text-gray-700">
          If you integrate e-commerce, outline refund and cancellation procedures here. This is a placeholder and should
          be customized for your workflow and local laws.
        </p>
      </section>
      <SiteFooter />
    </main>
  )
}
