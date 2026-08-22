const fs = require('fs');
const path = require('path');

const amazonServices = [
  { slug: "account-management", title: "Amazon Account Management" },
  { slug: "advertising", title: "Amazon Advertising" },
  { slug: "account-reinstatement", title: "Amazon Account Reinstatement" },
  { slug: "account-launch-and-registration", title: "Amazon Account Launch & Registration" },
  { slug: "a-plus", title: "Amazon A+ (Enhanced Brand Content)" },
  { slug: "storefront-creation", title: "Amazon Storefront Creation" },
  { slug: "cataloging", title: "Amazon Cataloging" },
  { slug: "brand-videos", title: "Amazon Brand Videos" },
  { slug: "product-listing", title: "Amazon Product Listing" }
];

const flipkartServices = [
  { slug: "account-management", title: "Flipkart Account Management" },
  { slug: "advertising", title: "Flipkart Advertising" },
  { slug: "rpd", title: "Flipkart RPD" },
  { slug: "account-launch", title: "Flipkart Account Launch & Registration" }
];

const generatePageContent = (title) => `"use client";

import SubServiceLayout from "@/components/SubServiceLayout";

export default function ServicePage() {
  return (
    <SubServiceLayout 
      title="${title}" 
      subtitle="Dedicated expert solutions for ${title}."
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
        alt="${title}" 
        className="featured-image" 
      />
      
      <h2>${title} Expertise</h2>
      <p>
        Our dedicated team specializes in comprehensive <strong>${title}</strong> to ensure maximum visibility, optimized conversion rates, and sustainable growth for your brand on the marketplace.
      </p>

      <h3>Key Benefits</h3>
      <ul>
        <li><strong>Tailored Strategies:</strong> Custom approaches designed specifically for your brand's unique needs.</li>
        <li><strong>Data-Driven Execution:</strong> Every decision is backed by analytics and deep marketplace insights.</li>
        <li><strong>Continuous Optimization:</strong> We don't just set it and forget it. We constantly monitor and improve performance.</li>
        <li><strong>Dedicated Support:</strong> Your success is our priority, with expert account managers always available.</li>
      </ul>
    </SubServiceLayout>
  );
}
`;

function createPages(basePath, services) {
  services.forEach(service => {
    const dirPath = path.join(__dirname, 'src', 'app', 'services', 'ecommerce', basePath, service.slug);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(path.join(dirPath, 'page.tsx'), generatePageContent(service.title));
    console.log(`Created: ${dirPath}/page.tsx`);
  });
}

createPages('amazon', amazonServices);
createPages('flipkart', flipkartServices);
