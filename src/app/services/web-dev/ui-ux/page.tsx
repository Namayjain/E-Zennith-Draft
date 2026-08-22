"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function UiUxServicePage() {
  return (
    <SubServiceLayout 
      title="UI/UX Design" 
      subtitle="User-centric design philosophies that reduce friction and elevate aesthetics."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200" 
        alt="UI/UX Design" 
        className="featured-image" 
      />
      
      <h2>Designing for Conversion</h2>
      <p>
        A pretty website isn't enough. Our UI/UX philosophy is deeply rooted in psychology and data. Every button placement, color choice, and animation is designed to guide the user naturally toward a purchasing decision.
      </p>

      <h3>Our Process</h3>
      <ul>
        <li><strong>Wireframing & Prototyping:</strong> Rapid iteration using Figma to lock in the user journey.</li>
        <li><strong>Design Systems:</strong> Creating a scalable, cohesive visual language for your brand.</li>
        <li><strong>Micro-Interactions:</strong> Delightful animations that provide feedback and keep users engaged.</li>
        <li><strong>Usability Testing:</strong> Data-backed decisions based on real user behavior.</li>
      </ul>
    </SubServiceLayout>
  );
}
