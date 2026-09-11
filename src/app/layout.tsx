import type { Metadata } from "next";
import "./globals.css";
import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ezennith.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "E Zennith - Full-Stack E-Commerce & Growth Collective",
    template: "%s | E Zennith",
  },
  description: "Full-stack e-commerce acceleration collective. We fuse algorithmic marketplace data with high-end 3D CGI creatives, custom D2C storefronts, and high-ROAS PPC advertising.",
  keywords: [
    "E-Commerce Management",
    "Amazon PPC Agency",
    "Flipkart Seller Growth",
    "Meesho Scaling",
    "Blinkit Quick Commerce",
    "Myntra Fashion Store",
    "Etsy Global Export",
    "Shopify Plus Development",
    "3D CGI Product Renders",
    "Marketplace Optimization",
    "D2C Growth Agency",
    "Conversion Rate Optimization",
  ],
  authors: [{ name: "E Zennith Agency", url: baseUrl }],
  creator: "E Zennith Agency",
  publisher: "E Zennith Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "E Zennith",
    title: "E Zennith - Full-Stack E-Commerce & Growth Collective",
    description: "Full-stack e-commerce acceleration collective. We fuse algorithmic marketplace data with high-end 3D CGI creatives, custom D2C storefronts, and high-ROAS PPC advertising.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "E Zennith - E-Commerce Acceleration Collective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E Zennith - Full-Stack E-Commerce & Growth Collective",
    description: "Full-stack e-commerce acceleration collective. We fuse algorithmic marketplace data with high-end 3D CGI creatives, custom D2C storefronts, and high-ROAS PPC advertising.",
    images: ["/logo.png"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "E Zennith Agency",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  image: `${baseUrl}/logo.png`,
  description: "Full-stack e-commerce acceleration collective specializing in Amazon, Flipkart, Quick-Commerce, D2C web development, 3D CGI, and digital marketing.",
  telephone: "+918797787778",
  email: "info@ezennith.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  priceRange: "$$$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://ezennith.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <MainLayoutWrapper>
            {children}
          </MainLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
