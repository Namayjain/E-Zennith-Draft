"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function BlinkitServicePage() {
  return (
    <SubServiceLayout 
      title="Blinkit & Quick-Commerce Acceleration" 
      subtitle="Scale your brand across 10-minute instant delivery ecosystems with dark store inventory planning and high-visibility digital merchandising."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="/images/services/ecommerce/blinkit-quick-commerce.jpg" 
        alt="Blinkit Quick-Commerce Services" 
        className="featured-image" 
      />
      
      <h2>Dominate the 10-Minute Instant Commerce Revolution</h2>
      <p>
        Quick-Commerce is fundamentally transforming Indian retail behavior. We engineer end-to-end brand acceleration for Blinkit, Zepto, and Instamart—from dark store micro-warehouse allocation to strategic sponsored brand visibility at the exact moment of consumer impulse.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {[
          { 
            title: "Dark Store Inventory Allocation", 
            desc: "Predictive algorithmic stock distribution across high-demand urban dark store hubs to guarantee 99%+ in-stock availability." 
          },
          { 
            title: "Blinkit In-App Ads & Placements", 
            desc: "Dominating search bar suggestions, top category carousels, and cart-builder checkout upsells to drive immediate conversions." 
          },
          { 
            title: "Onboarding & Brand Cataloging", 
            desc: "Rapid compliance approval, GST alignment, high-res packshot asset creation, and SKU activation across city networks." 
          },
          { 
            title: "Real-Time Velocity Analytics", 
            desc: "Tracking live hourly run-rates, out-of-stock leakages, and competitor share-of-voice to maximize return on advertising spend." 
          }
        ].map((item, idx) => (
          <div key={idx} style={{ background: 'rgba(128, 128, 128, 0.08)', border: '1px solid rgba(128,128,128,0.18)', padding: '1.5rem', borderRadius: '16px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-color)' }}>{item.title}</h4>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </SubServiceLayout>
  );
}
