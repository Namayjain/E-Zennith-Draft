"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function FlipkartServicePage() {
  return (
    <SubServiceLayout 
      title="Flipkart Services" 
      subtitle="Expand your reach in the Indian e-commerce ecosystem with tailored Flipkart strategies."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200" 
        alt="Flipkart Services" 
        className="featured-image" 
      />
      
      <h2>Dominate the Indian Marketplace</h2>
      <p>
        Flipkart is a powerhouse in the Indian e-commerce sector. Our team understands the nuances of its algorithm, advertising ecosystem, and promotional events to help you capture massive market share.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {[
          { title: "Account management", desc: "Comprehensive end-to-end oversight to keep your seller metrics pristine." },
          { title: "Advertising", desc: "Strategic PLA (Product Listing Ads) optimization for top-tier rankings." },
          { title: "Flipkart RPD", desc: "Participation in high-visibility promotional events and deals." },
          { title: "Launch & Registration", desc: "Seamless onboarding onto India's premier e-commerce platform." }
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
