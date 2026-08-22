"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function VideoServicePage() {
  return (
    <SubServiceLayout 
      title="Video Creation & Editing" 
      subtitle="Engaging promotional videos optimized for social media."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=1200" 
        alt="Video Creation" 
        className="featured-image" 
      />
      
      <h2>Stop the Scroll</h2>
      <p>
        In the era of TikTok and Instagram Reels, static images aren't enough. We produce high-retention, short-form and long-form video content designed explicitly to stop users from scrolling and force them to pay attention.
      </p>

      <h3>Video Services</h3>
      <ul>
        <li><strong>Short-form Content:</strong> Vertical video designed for high engagement on Reels, TikTok, and Shorts.</li>
        <li><strong>Brand Anthems:</strong> High-production storytelling videos that communicate your core values.</li>
        <li><strong>Motion Graphics:</strong> Animated text and graphics that explain complex products simply.</li>
        <li><strong>Post-Production:</strong> Professional color grading, sound design, and VFX.</li>
      </ul>
    </SubServiceLayout>
  );
}
