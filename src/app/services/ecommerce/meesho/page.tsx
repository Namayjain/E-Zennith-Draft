"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function MeeshoServicePage() {
  return (
    <SubServiceLayout 
      title="Meesho Marketplace Scaling" 
      subtitle="Unlock high-volume Bharat commerce with precision pricing, zero-commission cataloging, and algorithmic order scaling."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="/images/services/ecommerce/meesho-scaling.jpg" 
        alt="Meesho Marketplace Services" 
        className="featured-image" 
      />
      
      <h2>Scale Massive Volume Across Tier 2 & Tier 3 India</h2>
      <p>
        Meesho is India's fastest-growing value commerce platform with over 140+ million active shoppers. We architect specialized cataloging strategies, high-velocity price algorithms, and automated supplier inventory synchronization to help your brand capture exponential sales volume.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {[
          { 
            title: "Zero-Commission Catalog Setup", 
            desc: "Flawless multi-variation product listings optimized for Meesho's visual-first mobile search feed and high click-through rates." 
          },
          { 
            title: "Dynamic Price & Promotion Engine", 
            desc: "Smart competitive pricing algorithms and automated participation in Meesho Maha Indian Shopping Festivals for peak velocity." 
          },
          { 
            title: "Order Fulfillment & NDR Management", 
            desc: "Active logistics tracking and Non-Delivery Report (NDR) optimization to slash return-to-origin (RTO) rates significantly." 
          },
          { 
            title: "Meesho Ads & Visibility Campaigns", 
            desc: "Cost-effective keyword and banner ad targeting ensuring your products rank on the top carousel of relevant category feeds." 
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
