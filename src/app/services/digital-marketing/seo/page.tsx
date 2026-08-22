"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function SEOPage() {
  return (
    <SubServiceLayout 
      title="Search Engine Optimization (SEO)" 
      subtitle="Sustainable organic search growth, technical website architecture, and authoritative content."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200" 
        alt="Search Engine Optimization" 
        className="featured-image" 
      />
      
      <h2>Long-Term Organic Growth & Search Authority</h2>
      <p>
        Paid ads stop working when you turn off the budget; organic SEO builds an enduring asset that delivers compounding free traffic month after month. We resolve technical crawl issues, optimize collection and product page schema, and build authoritative topical content hubs.
      </p>

      <h3>Our 4-Phase SEO Process</h3>
      <ul>
        <li><strong>Technical SEO & Core Web Vitals:</strong> Resolving page speed bottlenecks, JavaScript rendering issues, and indexing anomalies.</li>
        <li><strong>Commercial Intent Keyword Mapping:</strong> Structuring category and product URLs to rank for high-buying-intent queries.</li>
        <li><strong>Structured Data & Rich Snippets:</strong> Implementing Product, Review, Breadcrumb, and Organization schema markup.</li>
        <li><strong>Digital PR & Brand Authority:</strong> Earning authentic editorial backlinks from high-authority commerce and industry publications.</li>
      </ul>
    </SubServiceLayout>
  );
}
