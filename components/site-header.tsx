"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="KADAIHUB home">
          <Image
            src="/images/kadai-logo.jpg"
            alt="KADAIHUB logo"
            width={140}
            height={38}
            className="h-8 w-auto"
            priority
          />
          <span className="sr-only">KADAIHUB</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href ? "text-[#2E3A59]" : "text-gray-600 hover:text-[#2E3A59]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop Get Started Button */}
          <Link href="/contact" className="hidden md:block">
            <Button className="rounded-full bg-[#2E3A59] text-white hover:bg-[#26314a]">Get Started</Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                <Link href="/" className="flex items-center gap-3 mb-8">
                  <Image
                    src="/images/kadai-logo.jpg"
                    alt="KADAIHUB logo"
                    width={120}
                    height={32}
                    className="h-6 w-auto"
                  />
                </Link>
                
                <nav className="flex flex-col space-y-4">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "rounded-md px-3 py-3 text-base font-medium transition-colors",
                        pathname === item.href 
                          ? "text-[#2E3A59] bg-[#2E3A59]/10" 
                          : "text-gray-600 hover:text-[#2E3A59] hover:bg-gray-50",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="pt-6 border-t">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full rounded-full bg-[#2E3A59] text-white hover:bg-[#26314a]">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
