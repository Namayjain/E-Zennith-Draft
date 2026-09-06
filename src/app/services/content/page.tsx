"use client";

import ServiceFeatureGrid from "@/components/ServiceFeatureGrid";

const contentFeatures = [
  {
    title: "Branding & Identity",
    description: "Crafting unique visual identities, brand guidelines, and compelling narratives that resonate with your target audience.",
    image: "/images/services/content/brand-identity.jpg",
    link: "/services/content/branding",
  },
  {
    title: "3D Modeling & Graphics",
    description: "Hyper-realistic 3D product renders that showcase your items from impossible angles.",
    image: "/images/services/content/3d-cgi-modeling.jpg",
    link: "/services/content/3d",
  },
  {
    title: "Video Creation & Editing",
    description: "Engaging promotional videos, unboxings, and animations optimised for social media and product listings.",
    image: "/images/services/content/video-production.jpg",
    link: "/services/content/video",
  },
  {
    title: "Brand & Product Specific Videos",
    description: "Cinematic product demo videos and brand stories designed to convert browsers into buyers.",
    image: "/images/services/content/product-demos.jpg",
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
