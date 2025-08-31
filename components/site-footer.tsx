import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-[#2E3A59]">KADAIHUB</h3>
            <p className="mt-2 text-sm text-gray-600">
              Connecting local business digitally. Discover nearby stores, compare, and shop smarter.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#2E3A59]">Explore</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-gray-600 hover:text-[#2E3A59]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-[#2E3A59]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#2E3A59]">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#2E3A59]">Support</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#2E3A59]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/features#benefits" className="text-gray-600 hover:text-[#2E3A59]">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#2E3A59]">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#2E3A59]">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy" className="text-gray-600 hover:text-[#2E3A59]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-gray-600 hover:text-[#2E3A59]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/refund" className="text-gray-600 hover:text-[#2E3A59]">
                  Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} KADAIHUB. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com" className="hover:text-[#2E3A59]" aria-label="Facebook">
              Facebook
            </Link>
            <Link href="https://instagram.com" className="hover:text-[#2E3A59]" aria-label="Instagram">
              Instagram
            </Link>
            <Link href="https://x.com" className="hover:text-[#2E3A59]" aria-label="X">
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
