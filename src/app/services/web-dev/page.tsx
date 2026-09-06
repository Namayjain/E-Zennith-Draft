"use client";

import ServiceFeatureGrid from "@/components/ServiceFeatureGrid";

const webDevFeatures = [
  {
    title: "WordPress / WooCommerce",
    description: "Flexible, robust, and SEO-friendly WordPress architectures tailored to your specific business needs.",
    image: "/images/services/webdev/wordpress-woocommerce.jpg",
    link: "/services/web-dev/wordpress",
  },
  {
    title: "Shopify Development",
    description: "High-converting, visually stunning Shopify stores optimised for speed and seamless checkout experiences.",
    image: "/images/services/webdev/shopify-storefronts.jpg",
    link: "/services/web-dev/shopify",
  },
  {
    title: "Custom UI/UX Design",
    description: "User-centric design philosophies that reduce friction, elevate aesthetics, and maximise conversion rates.",
    image: "/images/services/webdev/ui-ux-design.jpg",
    link: "/services/web-dev/ui-ux",
  },
  {
    title: "WIX Customization",
    description: "Rapid deployment of elegant, responsive websites on the WIX platform for emerging brands.",
    image: "/images/services/webdev/wix-boutique.jpg",
    link: "/services/web-dev/wix",
  },
];

export default function WebDevService() {
  return (
    <>
      <main style={{ paddingTop: "100px", minHeight: "100vh" }}>
        <ServiceFeatureGrid
          title="Web Development & UI/UX"
          subtitle="We build digital storefronts that don't just look pretty—they engineer conversions."
          features={webDevFeatures}
        />
      </main>
    </>
  );
}
