"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function BrandingServicePage() {
  return (
    <SubServiceLayout 
      title="Brand Identity & Strategy" 
      subtitle="Crafting unique visual identities and compelling narratives."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1200" 
        alt="Branding Strategy" 
        className="featured-image" 
      />
      
      <h2>Become Unforgettable</h2>
      <p>
        Your brand is more than a logo. It's the gut feeling a customer gets when they interact with your business. We build cohesive, premium brand identities that command authority and trust in the marketplace.
      </p>

      <h3>What We Deliver</h3>
      <ul>
        <li><strong>Logo & Mark Design:</strong> Timeless, scalable, and versatile logos.</li>
        <li><strong>Brand Guidelines:</strong> Strict rules for typography, color palettes, and tone of voice.</li>
        <li><strong>Packaging Design:</strong> Premium unboxing experiences that drive social sharing.</li>
        <li><strong>Brand Storytelling:</strong> Crafting the narrative that connects emotionally with your audience.</li>
      </ul>
    </SubServiceLayout>
  );
}
