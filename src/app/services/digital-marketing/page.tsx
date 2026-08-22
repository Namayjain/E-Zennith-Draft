"use client";

import ServiceFeatureGrid from "@/components/ServiceFeatureGrid";

const marketingFeatures = [
  {
    title: "Meta Ads (Facebook & Instagram)",
    description: "Hyper-targeted social campaigns that capture attention and drive qualified traffic to your funnels.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    link: "/services/digital-marketing/meta-ads",
  },
  {
    title: "Google Ads & PPC",
    description: "Capture high-intent search traffic with optimized keyword bidding and compelling ad copy.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    link: "/services/digital-marketing/google-ads",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Long-term organic growth strategies that secure your position at the top of search engine results.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    link: "/services/digital-marketing/seo",
  },
  {
    title: "Email Marketing & Retention",
    description: "Automated flows and segmented campaigns designed to increase customer lifetime value (LTV).",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
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
