import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ezennith.com";
  const lastModified = new Date();

  const routes: { url: string; priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }[] = [
    // Core Landing & Conversion Pages
    { url: "", priority: 1.0, changeFrequency: "weekly" },
    { url: "/services", priority: 0.95, changeFrequency: "weekly" },
    { url: "/portfolio", priority: 0.9, changeFrequency: "weekly" },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { url: "/about", priority: 0.85, changeFrequency: "monthly" },
    { url: "/careers", priority: 0.8, changeFrequency: "weekly" },

    // E-Commerce Suites
    { url: "/services/ecommerce", priority: 0.9, changeFrequency: "weekly" },
    { url: "/services/ecommerce/amazon", priority: 0.85, changeFrequency: "weekly" },
    { url: "/services/ecommerce/amazon/account-management", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/ecommerce/amazon/advertising", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/ecommerce/amazon/account-reinstatement", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/ecommerce/amazon/account-launch-and-registration", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/ecommerce/amazon/a-plus", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/ecommerce/amazon/storefront-creation", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/ecommerce/amazon/cataloging", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/ecommerce/amazon/product-listing", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/ecommerce/amazon/brand-videos", priority: 0.8, changeFrequency: "monthly" },

    { url: "/services/ecommerce/flipkart", priority: 0.85, changeFrequency: "weekly" },
    { url: "/services/ecommerce/flipkart/account-management", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/ecommerce/flipkart/advertising", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/ecommerce/flipkart/rpd", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/ecommerce/flipkart/account-launch", priority: 0.8, changeFrequency: "monthly" },

    { url: "/services/ecommerce/meesho", priority: 0.85, changeFrequency: "weekly" },
    { url: "/services/ecommerce/blinkit", priority: 0.85, changeFrequency: "weekly" },
    { url: "/services/ecommerce/myntra", priority: 0.85, changeFrequency: "weekly" },
    { url: "/services/ecommerce/etsy", priority: 0.85, changeFrequency: "weekly" },

    // Marketplace Optimization & CRO
    { url: "/services/marketplace-optimization", priority: 0.85, changeFrequency: "weekly" },
    { url: "/services/marketplace-optimization/listing-seo", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/marketplace-optimization/ab-testing-cro", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/marketplace-optimization/a-plus-content", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/marketplace-optimization/review-management", priority: 0.8, changeFrequency: "monthly" },

    // Web Development & D2C
    { url: "/services/web-dev", priority: 0.85, changeFrequency: "weekly" },
    { url: "/services/web-dev/shopify", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/web-dev/wordpress", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/web-dev/ui-ux", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/web-dev/wix", priority: 0.8, changeFrequency: "monthly" },

    // Digital Marketing & PPC
    { url: "/services/digital-marketing", priority: 0.85, changeFrequency: "weekly" },
    { url: "/services/digital-marketing/meta-ads", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/digital-marketing/google-ads", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/digital-marketing/seo", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/digital-marketing/email-marketing", priority: 0.8, changeFrequency: "monthly" },

    // Content Creation & 3D CGI
    { url: "/services/content", priority: 0.85, changeFrequency: "weekly" },
    { url: "/services/content/3d", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/content/video", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/content/branding", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/content/product-videos", priority: 0.8, changeFrequency: "monthly" },

    // Legal
    { url: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
    { url: "/terms-and-conditions", priority: 0.4, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
