"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function AmazonServicePage() {
  return (
    <SubServiceLayout 
      title="Amazon Services" 
      subtitle="End-to-end management, launch, and scaling for the world's largest marketplace."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200" 
        alt="Amazon Services" 
        className="featured-image" 
      />
      
      <h2>Maximize Your Amazon Potential</h2>
      <p>
        Selling on Amazon requires more than just listing products. It requires a comprehensive strategy combining organic visibility, aggressive advertising, and relentless optimization. 
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {[
          { title: "Account management", desc: "Daily health checks, inventory planning, and strategic oversight." },
          { title: "Advertising (PPC)", desc: "Data-driven ad campaigns designed to lower ACOS and dominate your niche." },
          { title: "Account Reinstatement", desc: "Navigating Amazon's complex policies to get your suspended account back online." },
          { title: "Launch & Registration", desc: "End-to-end setup with precise category un-gating and brand registry compliance." },
          { title: "A+ Content (EBC)", desc: "Visually immersive product descriptions that answer customer questions." },
          { title: "Storefront creation", desc: "Beautiful, brand-compliant storefronts that turn browsers into loyal customers." },
          { title: "Cataloging", desc: "Listing on multiple portals with optimized backend search terms." },
          { title: "Brand Videos", desc: "Engaging promotional videos optimized for product listings." },
          { title: "Product listing", desc: "SEO-optimized titles, bullets, and descriptions." }
        ].map((item, idx) => (
          <div key={idx} style={{ background: 'rgba(128, 128, 128, 0.1)', border: '1px solid rgba(128,128,128,0.2)', padding: '1.5rem', borderRadius: '16px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-color)' }}>{item.title}</h4>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </SubServiceLayout>
  );
}
