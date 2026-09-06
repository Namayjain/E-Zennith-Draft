"use client";

import ServiceFeatureGrid from "@/components/ServiceFeatureGrid";

const marketingFeatures = [
  {
    title: "Meta Ads (Facebook & Instagram)",
    description: "Hyper-targeted social campaigns that capture attention and drive qualified traffic to your funnels.",
    image: "/images/services/marketing/meta-ads.jpg",
    link: "/services/digital-marketing/meta-ads",
  },
  {
    title: "Google Ads & PPC",
    description: "Capture high-intent search traffic with optimized keyword bidding and compelling ad copy.",
    image: "/images/services/marketing/google-ads.jpg",
    link: "/services/digital-marketing/google-ads",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Long-term organic growth strategies that secure your position at the top of search engine results.",
    image: "/images/services/marketing/seo-growth.jpg",
    link: "/services/digital-marketing/seo",
  },
  {
    title: "Email Marketing & Retention",
    description: "Automated flows and segmented campaigns designed to increase customer lifetime value (LTV).",
    image: "/images/services/marketing/email-marketing.jpg",
    link: "/services/digital-marketing/email-marketing",
  }
];

export default function DigitalMarketingService() {
  return (
    <>
      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <ServiceFeatureGrid 
          title="Digital Marketing" 
          subtitle="Data-driven acquisition engines that scale your revenue predictably." 
          features={marketingFeatures} 
        />
      </main>
    </>
  );
}
