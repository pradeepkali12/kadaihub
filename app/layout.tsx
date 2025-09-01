import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "KADAIHUB  Connecting Local Business Digitally",
    template: "%s | KADAIHUB"
  },
  description: "We connect local business with digital solutions, making commerce easier and smarter. Discover innovative features, compare offerings, and get the best digital solutions for your needs.",
  keywords: [
    "local business",
    "digital solutions",
    "business tools",
    "commerce platform",
    "business directory",
    "digital transformation",
    "local commerce",
    "business services"
  ],
  authors: [{ name: "KADAIHUB Team" }],
  creator: "KADAIHUB",
  publisher: "KADAIHUB",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // Replace with your actual domain
    title: "KADAIHUB – Connecting Local Business Digitally",
    description: "We connect local business with digital solutions, making commerce easier and smarter.",
    siteName: "KADAIHUB",
    images: [
      {
        url: "/images/kadai-logo.jpg",
        width: 1200,
        height: 630,
        alt: "KADAIHUB - Connecting Local Business Digitally",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KADAIHUB – Connecting Local Business Digitally",
    description: "We connect local business with digital solutions, making commerce easier and smarter.",
    images: ["/images/kadai-logo.jpg"],
    creator: "@kadaihub", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/images/kadai-logo.jpg",
    shortcut: "/images/kadai-logo.jpg",
    apple: "/images/kadai-logo.jpg",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KADAIHUB",
    "description": "We connect local business with digital solutions, making commerce easier and smarter.",
    "url": "https://kadaihub.tech", // Replace with your actual domain
    "logo": "https://kadaihub/images/kadai-logo.jpg", // Replace with your actual domain
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://kadaihub.tech#contact" // Replace with your actual domain
    },
    "sameAs": [
      "https://facebook.com/kadaihub", // Replace with actual social media links
      "https://instagram.com/kadaihub",
      "https://x.com/kadaihub"
    ]
  }

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-LRDECLQQ1T"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LRDECLQQ1T');
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/* Google Search Console verification - Replace with your actual verification code */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        {/* Bing Webmaster verification - Replace with your actual verification code */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#2E3A59" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
