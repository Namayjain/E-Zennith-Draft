"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function ReviewManagementPage() {
  return (
    <SubServiceLayout 
      title="Review Strategy & Feedback Management" 
      subtitle="Compliant review generation workflows and brand reputation defense to safeguard seller trust."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
        alt="Review Strategy & Management" 
        className="featured-image" 
      />
      
      <h2>Authentic Social Proof & Reputation Protection</h2>
      <p>
        Ratings and reviews directly influence conversion velocity and organic algorithm weight. We establish automated, policy-compliant review capture mechanisms via Amazon Vine, automated request sequences, and proactive customer satisfaction flows while monitoring negative feedback triggers.
      </p>

      <h3>Key Strategic Pillars</h3>
      <ul>
        <li><strong>Amazon Vine Program Enrolment:</strong> Accelerating initial review velocity for new product launches with trusted voices.</li>
        <li><strong>Automated Feedback Sequences:</strong> Leveraging compliant buyer-seller messaging to encourage verified reviews.</li>
        <li><strong>Negative Feedback Root-Cause Analysis:</strong> Identifying recurring customer pain points to improve product quality and listing accuracy.</li>
        <li><strong>Brand Registry Infringement Monitoring:</strong> Protecting your listings against unauthorized hijackers and counterfeiters.</li>
      </ul>
    </SubServiceLayout>
  );
}
