"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function ServicePage() {
  return (
    <SubServiceLayout 
      title="Amazon Advertising" 
      subtitle="Dedicated expert solutions for Amazon Advertising."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
        alt="Amazon Advertising" 
        className="featured-image" 
      />
      
      <h2>Amazon Advertising Expertise</h2>
      <p>
        Our dedicated team specializes in comprehensive <strong>Amazon Advertising</strong> to ensure maximum visibility, optimized conversion rates, and sustainable growth for your brand on the marketplace.
      </p>

      <h3>Key Benefits</h3>
      <ul>
        <li><strong>Tailored Strategies:</strong> Custom approaches designed specifically for your brand's unique needs.</li>
        <li><strong>Data-Driven Execution:</strong> Every decision is backed by analytics and deep marketplace insights.</li>
        <li><strong>Continuous Optimization:</strong> We don't just set it and forget it. We constantly monitor and improve performance.</li>
        <li><strong>Dedicated Support:</strong> Your success is our priority, with expert account managers always available.</li>
      </ul>
    </SubServiceLayout>
  );
}
