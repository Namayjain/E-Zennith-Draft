"use client";

import ServiceFeatureGrid from "@/components/ServiceFeatureGrid";

const optimizationFeatures = [
  {
    title: "Listing SEO Optimization",
    description: "Keyword-rich titles, bullet points, and backend search terms that satisfy A9 algorithms.",
    image: "/images/services/optimization/listing-seo.jpg",
    link: "/services/marketplace-optimization/listing-seo",
  },
  {
    title: "A/B Testing & CRO",
    description: "Continuous testing of primary images, pricing, and copy to find the absolute highest converting combination.",
    image: "/images/services/optimization/ab-testing-cro.jpg",
    link: "/services/marketplace-optimization/ab-testing-cro",
  },
  {
    title: "A+ Content (EBC)",
    description: "Visually immersive product descriptions that answer customer questions and reduce return rates.",
    image: "/images/services/optimization/a-plus-content.jpg",
    link: "/services/marketplace-optimization/a-plus-content",
  },
  {
    title: "Review Strategy & Management",
    description: "Ethical strategies for generating authentic reviews and mitigating the impact of negative feedback.",
    image: "/images/services/optimization/review-management.jpg",
    link: "/services/marketplace-optimization/review-management",
  }
];

export default function MarketplaceOptimizationService() {
  return (
    <>
      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <ServiceFeatureGrid 
          title="Marketplace Optimization" 
          subtitle="Fine-tuning every metric to ensure maximum visibility and conversion across all platforms." 
          features={optimizationFeatures} 
        />
      </main>
    </>
  );
}
