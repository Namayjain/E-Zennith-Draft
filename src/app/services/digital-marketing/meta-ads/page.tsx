"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function MetaAdsPage() {
  return (
    <SubServiceLayout 
      title="Meta Ads (Facebook & Instagram)" 
      subtitle="Creative-led performance advertising engineered to acquire high-LTV customers at scale."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200" 
        alt="Meta Ads Facebook Instagram" 
        className="featured-image" 
      />
      
      <h2>Full-Funnel Paid Social Architecture</h2>
      <p>
        In modern paid social, creative is the targeting. We pair high-production UGC, 3D product motion graphics, and dynamic carousel ads with advanced Advantage+ campaign structures to lower Customer Acquisition Cost (CAC) and scale return on ad spend (ROAS).
      </p>

      <h3>Our Performance Social Blueprint</h3>
      <ul>
        <li><strong>High-Velocity Creative Testing:</strong> Rapidly testing 10+ new hooks, visual angles, and formats weekly to discover breakout winners.</li>
        <li><strong>Advantage+ & Broad Targeting Architecture:</strong> Maximizing machine learning algorithm efficiency for predictable scaling.</li>
        <li><strong>Offer & Landing Page Alignment:</strong> Matching ad creative angles directly to dedicated, high-converting storefront landers.</li>
        <li><strong>First-Party Attribution & CAPI:</strong> Robust Conversions API (CAPI) and server-side tracking setup to counter iOS signal loss.</li>
      </ul>
    </SubServiceLayout>
  );
}
