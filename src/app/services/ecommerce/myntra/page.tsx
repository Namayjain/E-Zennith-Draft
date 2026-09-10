"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function MyntraServicePage() {
  return (
    <SubServiceLayout 
      title="Myntra Brand Store & Fashion Scaling" 
      subtitle="Elevate your fashion, beauty, and lifestyle brand on India's premier style destination with curated cataloging and high-impact campaigns."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="/images/services/ecommerce/myntra-fashion-store.jpg" 
        alt="Myntra Brand Scaling Services" 
        className="featured-image" 
      />
      
      <h2>Captivate India's Most Fashion-Forward Consumers</h2>
      <p>
        Myntra represents the pinnacle of Indian fashion and lifestyle eCommerce. We help emerging and established D2C brands navigate Myntra's onboarding, curated brand store creation, seasonal lookbooks, and high-converting End of Reason Sale (EORS) promotional machinery.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {[
          { 
            title: "Brand Storefront & Visual Curation", 
            desc: "Custom high-aesthetic visual storefronts, thematic lookbooks, and trend-focused product showcases that amplify brand prestige." 
          },
          { 
            title: "Fashion Cataloging & Taxonomy", 
            desc: "Flawless attribute mapping (fits, fabrics, occasions, sizing) ensuring maximum discoverability across Myntra search filters." 
          },
          { 
            title: "EORS & Mega Sale Strategy", 
            desc: "End-to-end pricing strategy, early-bird deals configuration, and inventory locking for Myntra's flagship mega shopping events." 
          },
          { 
            title: "Performance Ads & Sponsored Search", 
            desc: "High-ROI sponsored product placements, brand banners, and influencer tie-in amplification to scale monthly Gross Merchandise Value (GMV)." 
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
