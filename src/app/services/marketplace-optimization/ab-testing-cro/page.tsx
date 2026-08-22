"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function ABTestingCROPage() {
  return (
    <SubServiceLayout 
      title="A/B Testing & CRO" 
      subtitle="Scientific split-testing of hero imagery, pricing tiers, and copy to unlock peak conversion rates."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
        alt="A/B Testing & CRO" 
        className="featured-image" 
      />
      
      <h2>Data-Backed Conversion Rate Optimization (CRO)</h2>
      <p>
        Even a 2% lift in listing conversion rate compounds into hundreds of thousands in incremental profit. We deploy rigorous multi-variant experiments across Amazon Manage Your Experiments (MYE) and proprietary split-testing frameworks to isolate winning angles, main image compositions, and pricing thresholds.
      </p>

      <h3>Key Methodologies</h3>
      <ul>
        <li><strong>Hero Image CTR Experiments:</strong> Testing background angles, 3D renderings, and product packaging callouts.</li>
        <li><strong>Price Elasticity Testing:</strong> Finding the exact price point that balances conversion volume with profit margin.</li>
        <li><strong>A+ Content Layout Comparisons:</strong> Split testing comparison charts, lifestyle infographics, and brand story banners.</li>
        <li><strong>Statistical Significance Validation:</strong> Ensuring all decisions are backed by statistical confidence before permanent rollout.</li>
      </ul>
    </SubServiceLayout>
  );
}
