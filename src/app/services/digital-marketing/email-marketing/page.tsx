"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function EmailMarketingPage() {
  return (
    <SubServiceLayout 
      title="Email Marketing & Customer Retention" 
      subtitle="Automated Klaviyo & WhatsApp retention flows engineered to maximize Customer Lifetime Value (LTV)."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
        alt="Email Marketing Retention" 
        className="featured-image" 
      />
      
      <h2>Maximize LTV & Unlock 30%+ of Revenue from Owned Channels</h2>
      <p>
        Acquiring a customer once is only half the battle; the real profit is generated through repeat purchases. We design and deploy high-converting automated email and WhatsApp retention funnels that nurture first-time buyers into lifelong brand advocates.
      </p>

      <h3>High-Impact Retention Flows</h3>
      <ul>
        <li><strong>Core Revenue Automation Flows:</strong> Welcome Series, Abandoned Cart, Browse Abandonment, and Post-Purchase Cross-Sell.</li>
        <li><strong>Advanced Customer Segmentation:</strong> VIP tier tagging, unengaged subscriber scrubbing, and zero-party data profiling.</li>
        <li><strong>Interactive WhatsApp Marketing:</strong> Direct-to-consumer broadcast campaigns with high open rates and instant conversion.</li>
        <li><strong>Deliverability Governance:</strong> Dedicated sending domain authentication (DKIM, DMARC, SPF) to ensure inbox landing.</li>
      </ul>
    </SubServiceLayout>
  );
}
