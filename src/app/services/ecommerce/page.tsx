"use client";

import ServiceFeatureGrid from "@/components/ServiceFeatureGrid";

const amazonFeatures = [
  {
    title: "Account Management",
    description: "Daily health checks, inventory planning, and strategic oversight to ensure your seller rating stays pristine.",
    image: "/images/services/ecommerce/amazon-account-management.jpg",
    link: "/services/ecommerce/amazon/account-management",
  },
  {
    title: "Advertising (PPC)",
    description: "Aggressive, data-driven ad campaigns designed to lower ACOS and dominate your niche's search results.",
    image: "/images/services/ecommerce/amazon-advertising.jpg",
    link: "/services/ecommerce/amazon/advertising",
  },
  {
    title: "Account Reinstatement",
    description: "Expert reinstatement services to recover your suspended Amazon account quickly and compliantly.",
    image: "/images/services/ecommerce/amazon-account-reinstatement.jpg",
    link: "/services/ecommerce/amazon/account-reinstatement",
  },
  {
    title: "Account Launch & Registration",
    description: "End-to-end setup of your Amazon seller account with precise category un-gating and brand registry compliance.",
    image: "/images/services/ecommerce/amazon-account-launch-and-registration.jpg",
    link: "/services/ecommerce/amazon/account-launch-and-registration",
  },
  {
    title: "A+ Content (EBC)",
    description: "Visually immersive enhanced brand content that answers customer questions and reduces return rates.",
    image: "/images/services/ecommerce/amazon-a-plus.jpg",
    link: "/services/ecommerce/amazon/a-plus",
  },
  {
    title: "Storefront Creation",
    description: "Beautiful, brand-compliant storefronts that turn casual browsers into loyal, repeat customers.",
    image: "/images/services/ecommerce/amazon-storefront-creation.jpg",
    link: "/services/ecommerce/amazon/storefront-creation",
  },
  {
    title: "Cataloging & Product Listing",
    description: "Multi-portal cataloging with keyword-rich titles, bullet points, and backend search terms.",
    image: "/images/services/ecommerce/amazon-cataloging.jpg",
    link: "/services/ecommerce/amazon/cataloging",
  },
  {
    title: "Brand & Product Videos",
    description: "Cinematic brand videos and product demos that elevate your Amazon listing presence.",
    image: "/images/services/ecommerce/amazon-brand-videos.jpg",
    link: "/services/ecommerce/amazon/brand-videos",
  },
];

const flipkartFeatures = [
  {
    title: "Flipkart Account Management",
    description: "Full-service account management optimised for Flipkart's unique algorithms and seller metrics.",
    image: "/images/services/ecommerce/flipkart-account-management.jpg",
    link: "/services/ecommerce/flipkart/account-management",
  },
  {
    title: "Flipkart Advertising",
    description: "Strategic PLA campaigns and bid optimisation to maximise visibility on India's top marketplace.",
    image: "/images/services/ecommerce/flipkart-advertising.jpg",
    link: "/services/ecommerce/flipkart/advertising",
  },
  {
    title: "Flipkart RPD",
    description: "Revenue per day optimisation through strategic pricing, promotions, and inventory management.",
    image: "/images/services/ecommerce/flipkart-rpd.jpg",
    link: "/services/ecommerce/flipkart/rpd",
  },
  {
    title: "Account Launch & Registration",
    description: "Seamless onboarding onto India's premier e-commerce platform with full compliance.",
    image: "/images/services/ecommerce/flipkart-account-launch.jpg",
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
