"use client";

import ServiceFeatureGrid from "@/components/ServiceFeatureGrid";

const optimizationFeatures = [
  {
    title: "Listing SEO Optimization",
    description: "Keyword-rich titles, bullet points, and backend search terms that satisfy A9 algorithms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "/services/marketplace-optimization/listing-seo",
  },
  {
    title: "A/B Testing & CRO",
    description: "Continuous testing of primary images, pricing, and copy to find the absolute highest converting combination.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "/services/marketplace-optimization/ab-testing-cro",
  },
  {
    title: "A+ Content (EBC)",
    description: "Visually immersive product descriptions that answer customer questions and reduce return rates.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    link: "/services/marketplace-optimization/a-plus-content",
  },
  {
    title: "Review Strategy & Management",
    description: "Ethical strategies for generating authentic reviews and mitigating the impact of negative feedback.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
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
