"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function GoogleAdsPage() {
  return (
    <SubServiceLayout 
      title="Google Ads & Performance Max" 
      subtitle="Capture high-intent in-market buyers with precision Google Search, Shopping, and PMax campaigns."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
        alt="Google Ads & PPC" 
        className="featured-image" 
      />
      
      <h2>High-Intent Search & Shopping Dominance</h2>
      <p>
        When customers search for your products on Google, you need to be at the exact top of the search results with optimized Merchant Center feeds and compelling ad extensions. We engineer Performance Max and exact-match search campaigns designed to turn search intent into immediate revenue.
      </p>

      <h3>Key Strategic Capabilities</h3>
      <ul>
        <li><strong>Performance Max (PMax) Optimization:</strong> Custom asset groups segmented by product category, margin, and audience signals.</li>
        <li><strong>Google Merchant Center Feed Optimization:</strong> Enriching product titles, custom labels, and attributes to win Google Shopping auctions.</li>
        <li><strong>Brand Defense & Competitor Conquesting:</strong> Protecting your branded terms while capturing competitor search volume at a lower CPC.</li>
        <li><strong>Negative Keyword Governance:</strong> Daily search term filtering to ensure not a single rupee of ad spend is wasted.</li>
      </ul>
    </SubServiceLayout>
  );
}
