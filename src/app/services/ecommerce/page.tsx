"use client";

import ServiceFeatureGrid from "@/components/ServiceFeatureGrid";

const amazonFeatures = [
  {
    title: "Account Management",
    description: "Daily health checks, inventory planning, and strategic oversight to ensure your seller rating stays pristine.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    link: "/services/ecommerce/amazon/account-management",
  },
  {
    title: "Advertising (PPC)",
    description: "Aggressive, data-driven ad campaigns designed to lower ACOS and dominate your niche's search results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "/services/ecommerce/amazon/advertising",
  },
  {
    title: "Account Reinstatement",
    description: "Expert reinstatement services to recover your suspended Amazon account quickly and compliantly.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    link: "/services/ecommerce/amazon/account-reinstatement",
  },
  {
    title: "Account Launch & Registration",
    description: "End-to-end setup of your Amazon seller account with precise category un-gating and brand registry compliance.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    link: "/services/ecommerce/amazon/account-launch-and-registration",
  },
  {
    title: "A+ Content (EBC)",
    description: "Visually immersive enhanced brand content that answers customer questions and reduces return rates.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    link: "/services/ecommerce/amazon/a-plus",
  },
  {
    title: "Storefront Creation",
    description: "Beautiful, brand-compliant storefronts that turn casual browsers into loyal, repeat customers.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    link: "/services/ecommerce/amazon/storefront-creation",
  },
  {
    title: "Cataloging & Product Listing",
    description: "Multi-portal cataloging with keyword-rich titles, bullet points, and backend search terms.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    link: "/services/ecommerce/amazon/cataloging",
  },
  {
    title: "Brand & Product Videos",
    description: "Cinematic brand videos and product demos that elevate your Amazon listing presence.",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=800",
    link: "/services/ecommerce/amazon/brand-videos",
  },
];

const flipkartFeatures = [
  {
    title: "Flipkart Account Management",
    description: "Full-service account management optimised for Flipkart's unique algorithms and seller metrics.",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
    link: "/services/ecommerce/flipkart/account-management",
  },
  {
    title: "Flipkart Advertising",
    description: "Strategic PLA campaigns and bid optimisation to maximise visibility on India's top marketplace.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "/services/ecommerce/flipkart/advertising",
  },
  {
    title: "Flipkart RPD",
    description: "Revenue per day optimisation through strategic pricing, promotions, and inventory management.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    link: "/services/ecommerce/flipkart/rpd",
  },
  {
    title: "Account Launch & Registration",
    description: "Seamless onboarding onto India's premier e-commerce platform with full compliance.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    link: "/services/ecommerce/flipkart/account-launch",
  },
];

export default function EcommerceService() {
  return (
    <>
      <main style={{ paddingTop: "100px", minHeight: "100vh" }}>
        <ServiceFeatureGrid
          title="Amazon Services"
          subtitle="Dominate the world's largest marketplace with our end-to-end management solutions."
          features={amazonFeatures}
        />
        <ServiceFeatureGrid
          title="Flipkart Services"
          subtitle="Expand your reach across India's booming e-commerce ecosystem."
          features={flipkartFeatures}
        />
      </main>
    </>
  );
}
