"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function APlusContentPage() {
  return (
    <SubServiceLayout 
      title="A+ Content & Brand Story (EBC)" 
      subtitle="Immersive visual storytelling, comparison charts, and brand modules that turn scrollers into loyal buyers."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
        alt="A+ Content & EBC" 
        className="featured-image" 
      />
      
      <h2>Premium Visual Real Estate for Enhanced Conversions</h2>
      <p>
        Standard product descriptions leave money on the table. Our creative collective designs customized Premium A+ Content modules that visually answer customer objections, showcase cross-selling comparison tables, and anchor your brand identity in the customer's mind.
      </p>

      <h3>What We Build</h3>
      <ul>
        <li><strong>Premium & Standard A+ Modules:</strong> High-resolution banners, ingredient highlights, and ergonomic breakdowns.</li>
        <li><strong>Cross-Selling Comparison Tables:</strong> Direct traffic seamlessly across your product catalogue to increase average order value (AOV).</li>
        <li><strong>Brand Story Carousel Integration:</strong> Highlighting your brand origin, certifications, and mission directly on product pages.</li>
        <li><strong>Mobile-First Formatting:</strong> Pixel-perfect responsive rendering across desktop, tablet, and mobile app interfaces.</li>
      </ul>
    </SubServiceLayout>
  );
}
