import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Home, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Page Not Found - 404 Error",
  description: "The page you're looking for doesn't exist. Return to KADAIHUB homepage or explore our features and services.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <section className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 py-20 text-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-[#2E3A59]">404</h1>
          <h2 className="text-2xl font-semibold text-[#2E3A59]">Page Not Found</h2>
          <p className="max-w-md text-gray-600">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/">
              <Button className="rounded-full bg-[#2E3A59] text-white hover:bg-[#26314a]">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="rounded-full border-[#E53935] text-[#E53935] hover:bg-[#fff1f1]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </Link>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#2E3A59] mb-4">Popular Pages</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="/features" className="text-sm text-gray-600 hover:text-[#2E3A59] hover:underline">
                Features
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-[#2E3A59] hover:underline">
                Blog
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-[#2E3A59] hover:underline">
                Contact
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/about" className="text-sm text-gray-600 hover:text-[#2E3A59] hover:underline">
                About
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
