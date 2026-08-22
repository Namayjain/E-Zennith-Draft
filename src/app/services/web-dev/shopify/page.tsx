"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function ShopifyServicePage() {
  return (
    <SubServiceLayout 
      title="Shopify Development" 
      subtitle="High-converting, visually stunning Shopify stores optimized for massive scale."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200" 
        alt="Shopify Development" 
        className="featured-image" 
      />
      
      <h2>Engineered for E-commerce</h2>
      <p>
        We don't just build stores; we build revenue engines. Our Shopify development focuses on frictionless checkout, immersive product pages, and technical architectures that can handle viral traffic.
      </p>

      <h3>Shopify Solutions</h3>
      <ul>
        <li><strong>Custom Headless Builds:</strong> Using Next.js and Shopify Hydrogen for lightning-fast speeds.</li>
        <li><strong>Theme Customization:</strong> Modifying premium themes to fit your exact brand guidelines.</li>
        <li><strong>App Integrations:</strong> Seamlessly connecting ERPs, CRMs, and marketing tools.</li>
        <li><strong>Conversion Rate Optimization (CRO):</strong> A/B testing layouts to maximize AOV and minimize cart abandonment.</li>
      </ul>
    </SubServiceLayout>
  );
}
