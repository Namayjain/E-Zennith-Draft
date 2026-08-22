"use client";

import ServiceFeatureGrid from "@/components/ServiceFeatureGrid";

const webDevFeatures = [
  {
    title: "WordPress / WooCommerce",
    description: "Flexible, robust, and SEO-friendly WordPress architectures tailored to your specific business needs.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
    link: "/services/web-dev/wordpress",
  },
  {
    title: "Shopify Development",
    description: "High-converting, visually stunning Shopify stores optimised for speed and seamless checkout experiences.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    link: "/services/web-dev/shopify",
  },
  {
    title: "Custom UI/UX Design",
    description: "User-centric design philosophies that reduce friction, elevate aesthetics, and maximise conversion rates.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    link: "/services/web-dev/ui-ux",
  },
  {
    title: "WIX Customization",
    description: "Rapid deployment of elegant, responsive websites on the WIX platform for emerging brands.",
    image: "https://images.unsplash.com/photo-1481481833548-282490a07999?auto=format&fit=crop&q=80&w=800",
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
