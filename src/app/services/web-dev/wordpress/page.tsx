"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function WordpressServicePage() {
  return (
    <SubServiceLayout 
      title="WordPress Development" 
      subtitle="Flexible, robust, and completely custom WordPress architectures."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200" 
        alt="WordPress Development" 
        className="featured-image" 
      />
      
      <h2>Limitless Customization</h2>
      <p>
        WordPress remains the undisputed king of CMS platforms. We build highly scalable, ultra-fast, and deeply secure WordPress websites tailored perfectly to your brand's operational needs.
      </p>

      <h3>Our Approach</h3>
      <ul>
        <li><strong>Custom Theme Development:</strong> No bloated templates. We code from scratch for maximum speed.</li>
        <li><strong>WooCommerce Integration:</strong> Turn your WordPress site into a high-converting e-commerce engine.</li>
        <li><strong>Plugin Architecture:</strong> Custom plugin development for unique business logic.</li>
        <li><strong>Speed & SEO:</strong> Core Web Vitals optimization to ensure you rank #1.</li>
      </ul>
    </SubServiceLayout>
  );
}
