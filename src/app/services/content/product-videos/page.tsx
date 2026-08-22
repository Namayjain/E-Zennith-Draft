"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function ProductVideoServicePage() {
  return (
    <SubServiceLayout 
      title="Product-Specific Videos" 
      subtitle="Detailed product showcases designed to boost marketplace conversion rates."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200" 
        alt="Product Videos" 
        className="featured-image" 
      />
      
      <h2>Show, Don't Tell</h2>
      <p>
        Listings with videos convert significantly higher than those without. We create targeted product videos specifically for Amazon listings, Shopify product pages, and paid advertising funnels.
      </p>

      <h3>Product Video Features</h3>
      <ul>
        <li><strong>Unboxing Experiences:</strong> Capturing the premium feel of opening your product for the first time.</li>
        <li><strong>Feature Demonstrations:</strong> Clearly highlighting the unique selling points (USPs) of your item.</li>
        <li><strong>Lifestyle Integration:</strong> Showing your product being used naturally by your target demographic.</li>
        <li><strong>Amazon Compliant:</strong> Meeting all strict marketplace requirements for resolution, length, and content.</li>
      </ul>
    </SubServiceLayout>
  );
}
