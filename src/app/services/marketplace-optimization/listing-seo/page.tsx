"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function ListingSEOPage() {
  return (
    <SubServiceLayout 
      title="Listing SEO Optimization" 
      subtitle="Dominate marketplace search algorithms with high-intent keyword indexing and algorithmic copywriting."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
        alt="Listing SEO Optimization" 
        className="featured-image" 
      />
      
      <h2>Algorithmic Search Visibility & Organic Rank Domination</h2>
      <p>
        Visibility is the prerequisite to sales. Our dedicated listing optimization team analyzes thousands of competitor search queries to construct keyword-dense titles, feature bullets, structured backend search terms, and product descriptions engineered specifically for Amazon A9 and Flipkart search algorithms.
      </p>

      <h3>What We Deliver</h3>
      <ul>
        <li><strong>Deep Search Intent Harvesting:</strong> Comprehensive reverse-ASIN extraction and high-conversion search term mapping.</li>
        <li><strong>High-Converting Copywriting:</strong> Persuasive bullet points that overcome customer objections while integrating indexed keywords.</li>
        <li><strong>Backend Keyword Architecture:</strong> Complete utilization of search terms, subject matter, and target audience metadata.</li>
        <li><strong>Continuous Rank Tracking:</strong> Weekly monitoring of indexed search terms and proactive re-optimization against algorithm updates.</li>
      </ul>
    </SubServiceLayout>
  );
}
