"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function ThreeDServicePage() {
  return (
    <SubServiceLayout 
      title="3D Modeling & Graphics" 
      subtitle="Hyper-realistic 3D product renders from impossible angles."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1615859131861-052f0641a6fd?auto=format&fit=crop&q=80&w=1200" 
        alt="3D Modeling" 
        className="featured-image" 
      />
      
      <h2>Defy Reality</h2>
      <p>
        Traditional photography has limits. 3D modeling allows us to showcase the internal mechanisms of your product, demonstrate it in impossible environments, and achieve absolute perfection in lighting and texture.
      </p>

      <h3>3D Capabilities</h3>
      <ul>
        <li><strong>Product Rendering:</strong> Studio-quality renders that replace expensive photoshoots.</li>
        <li><strong>Exploded Views:</strong> Showcasing the internal engineering of complex products.</li>
        <li><strong>Environment Staging:</strong> Placing your product in aspirational, photorealistic spaces.</li>
        <li><strong>Interactive Web 3D:</strong> Utilizing Three.js/WebGL to let customers rotate your product in the browser.</li>
      </ul>
    </SubServiceLayout>
  );
}
