"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function EtsyServicePage() {
  return (
    <SubServiceLayout 
      title="Etsy Global Shop Scaling" 
      subtitle="Export artisanal, bespoke, and handcrafted luxury to worldwide buyers with strategic Etsy SEO, shop branding, and cross-border logistics."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="/images/services/ecommerce/etsy-global-scaling.jpg" 
        alt="Etsy Global Marketplace Services" 
        className="featured-image" 
      />
      
      <h2>Export Indian Craftsmanship & Bespoke Creations Globally</h2>
      <p>
        Etsy connects boutique creators with over 90+ million discerning global buyers across the US, UK, Europe, and Australia. We build international sales pipelines for Indian artisanal brands, handling shop launch compliance, 13-tag SEO indexation, Star Seller rating acceleration, and cross-border export logistics.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {[
          { 
            title: "Global Shop Architecture & Branding", 
            desc: "Editorial shop banners, compelling founder origin stories, policy compliance, and high-trust international seller profiling." 
          },
          { 
            title: "Etsy SEO & 13-Tag Optimization", 
            desc: "Scientific long-tail keyword research, title-tag matching, and backend category attribute tagging to capture US & EU search traffic." 
          },
          { 
            title: "Etsy Ads & Offsite Ad Management", 
            desc: "Precision daily budget allocation across Etsy Sponsored Search and Google/Facebook Offsite Ad channels for maximum ROAS." 
          },
          { 
            title: "Star Seller & Cross-Border Logistics", 
            desc: "Integrating global tracking couriers (DHL, FedEx, India Post EMS) with automated messaging to achieve 5-star badges." 
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
