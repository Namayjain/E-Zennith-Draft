"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function WixServicePage() {
  return (
    <SubServiceLayout 
      title="WIX Customization" 
      subtitle="Rapid deployment of elegant, responsive websites on the WIX platform."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1481481833548-282490a07999?auto=format&fit=crop&q=80&w=1200" 
        alt="WIX Customization" 
        className="featured-image" 
      />
      
      <h2>Sleek & Professional</h2>
      <p>
        For emerging brands and local businesses, WIX offers an incredibly powerful visual editor. We take it a step further by injecting custom code and advanced animations to make your WIX site indistinguishable from custom-coded enterprise platforms.
      </p>

      <h3>WIX Features</h3>
      <ul>
        <li><strong>Velo by WIX:</strong> Advanced custom JavaScript programming for dynamic data and user interactions.</li>
        <li><strong>Animation & Interactivity:</strong> Premium scrolling effects and hover states.</li>
        <li><strong>Mobile Optimization:</strong> Pixel-perfect responsive adjustments for smaller screens.</li>
      </ul>
    </SubServiceLayout>
  );
}
