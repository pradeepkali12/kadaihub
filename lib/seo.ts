// SEO utility functions and constants

export const SITE_CONFIG = {
  name: "KADAIHUB",
  description: "We connect local business with digital solutions, making commerce easier and smarter.",
  url: "https://your-domain.com", // Replace with your actual domain
  ogImage: "https://your-domain.com/images/kadai-logo.jpg", // Replace with your actual domain
  creator: "KADAIHUB Team",
  keywords: [
    "local business",
    "digital solutions", 
    "business tools",
    "commerce platform",
    "business directory",
    "digital transformation"
  ],
  authors: [
    {
      name: "KADAIHUB Team",
      url: "https://your-domain.com", // Replace with your actual domain
    }
  ],
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
}) {
  const url = `${SITE_CONFIG.url}${path}`
  
  return {
    title,
    description,
    keywords: [...SITE_CONFIG.keywords, ...keywords],
    authors: SITE_CONFIG.authors,
    creator: SITE_CONFIG.creator,
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [SITE_CONFIG.ogImage],
      creator: "@kadaihub", // Replace with your actual Twitter handle
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: path || "/",
    },
  }
}

export function generateStructuredData(type: "organization" | "website" | "webpage", data: any) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type === "organization" ? "Organization" : type === "website" ? "WebSite" : "WebPage",
  }

  switch (type) {
    case "organization":
      return {
        ...baseData,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        logo: SITE_CONFIG.ogImage,
        ...data,
      }
    case "website":
      return {
        ...baseData,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
        ...data,
      }
    case "webpage":
      return {
        ...baseData,
        name: data.title,
        description: data.description,
        url: data.url,
        isPartOf: {
          "@type": "WebSite",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
        ...data,
      }
    default:
      return baseData
  }
}
