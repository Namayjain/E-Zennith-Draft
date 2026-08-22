"use client";

import ServiceFeatureGrid from "@/components/ServiceFeatureGrid";

const contentFeatures = [
  {
    title: "Branding & Identity",
    description: "Crafting unique visual identities, brand guidelines, and compelling narratives that resonate with your target audience.",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=800",
    link: "/services/content/branding",
  },
  {
    title: "3D Modeling & Graphics",
    description: "Hyper-realistic 3D product renders that showcase your items from impossible angles.",
    image: "https://images.unsplash.com/photo-1615859131861-052f0641a6fd?auto=format&fit=crop&q=80&w=800",
    link: "/services/content/3d",
  },
  {
    title: "Video Creation & Editing",
    description: "Engaging promotional videos, unboxings, and animations optimised for social media and product listings.",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=800",
    link: "/services/content/video",
  },
  {
    title: "Brand & Product Specific Videos",
    description: "Cinematic product demo videos and brand stories designed to convert browsers into buyers.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800",
    link: "/services/content/product-videos",
  },
];

export default function ContentService() {
  return (
    <>
      <main style={{ paddingTop: "100px", minHeight: "100vh" }}>
        <ServiceFeatureGrid
          title="Content Creation & Branding"
          subtitle="Stand out in a crowded market with premium visual assets that tell your story."
          features={contentFeatures}
        />
      </main>
    </>
  );
}
