"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, ShoppingBag, Globe, Zap, Layers, Clock, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import ServiceFeatureGrid from "@/components/ServiceFeatureGrid";

const amazonFeatures = [
  {
    title: "Account Management",
    description: "Daily health checks, inventory planning, and strategic oversight to ensure your seller rating stays pristine.",
    image: "/images/services/ecommerce/amazon-account-management.jpg",
    link: "/services/ecommerce/amazon/account-management",
  },
  {
    title: "Advertising (PPC)",
    description: "Aggressive, data-driven ad campaigns designed to lower ACOS and dominate your niche's search results.",
    image: "/images/services/ecommerce/amazon-advertising.jpg",
    link: "/services/ecommerce/amazon/advertising",
  },
  {
    title: "Account Reinstatement",
    description: "Expert reinstatement services to recover your suspended Amazon account quickly and compliantly.",
    image: "/images/services/ecommerce/amazon-account-reinstatement.jpg",
    link: "/services/ecommerce/amazon/account-reinstatement",
  },
  {
    title: "Account Launch & Registration",
    description: "End-to-end setup of your Amazon seller account with precise category un-gating and brand registry compliance.",
    image: "/images/services/ecommerce/amazon-account-launch-and-registration.jpg",
    link: "/services/ecommerce/amazon/account-launch-and-registration",
  },
  {
    title: "A+ Content (EBC)",
    description: "Visually immersive enhanced brand content that answers customer questions and reduces return rates.",
    image: "/images/services/ecommerce/amazon-a-plus.jpg",
    link: "/services/ecommerce/amazon/a-plus",
  },
  {
    title: "Storefront Creation",
    description: "Beautiful, brand-compliant storefronts that turn casual browsers into loyal, repeat customers.",
    image: "/images/services/ecommerce/amazon-storefront-creation.jpg",
    link: "/services/ecommerce/amazon/storefront-creation",
  },
  {
    title: "Cataloging & Product Listing",
    description: "Multi-portal cataloging with keyword-rich titles, bullet points, and backend search terms.",
    image: "/images/services/ecommerce/amazon-cataloging.jpg",
    link: "/services/ecommerce/amazon/cataloging",
  },
  {
    title: "Brand & Product Videos",
    description: "Cinematic brand videos and product demos that elevate your Amazon listing presence.",
    image: "/images/services/ecommerce/amazon-brand-videos.jpg",
    link: "/services/ecommerce/amazon/brand-videos",
  },
];

const flipkartFeatures = [
  {
    title: "Flipkart Account Management",
    description: "Full-service account management optimised for Flipkart's unique algorithms and seller metrics.",
    image: "/images/services/ecommerce/flipkart-account-management.jpg",
    link: "/services/ecommerce/flipkart/account-management",
  },
  {
    title: "Flipkart Advertising",
    description: "Strategic PLA campaigns and bid optimisation to maximise visibility on India's top marketplace.",
    image: "/images/services/ecommerce/flipkart-advertising.jpg",
    link: "/services/ecommerce/flipkart/advertising",
  },
  {
    title: "Flipkart RPD",
    description: "Revenue per day optimisation through strategic pricing, promotions, and inventory management.",
    image: "/images/services/ecommerce/flipkart-rpd.jpg",
    link: "/services/ecommerce/flipkart/rpd",
  },
  {
    title: "Account Launch & Registration",
    description: "Seamless onboarding onto India's premier e-commerce platform with full compliance.",
    image: "/images/services/ecommerce/flipkart-account-launch.jpg",
    link: "/services/ecommerce/flipkart/account-launch",
  },
];

const meeshoFeatures = [
  {
    title: "Zero-Commission Catalog Architecture",
    description: "High-throughput catalog setup tailored for Meesho's 0% commission structure and bulk consumer discovery.",
    image: "/images/services/ecommerce/meesho-scaling.jpg",
    link: "/services/ecommerce/meesho",
  },
  {
    title: "Dynamic Price Recommendation Engine",
    description: "Algorithmic pricing calibrations that trigger top-ranked badge placements and organic recommendation feeds.",
    image: "/images/services/ecommerce/meesho-scaling.jpg",
    link: "/services/ecommerce/meesho",
  },
  {
    title: "Bharat Tier 2 & 3 Customer Acquisition",
    description: "Hyper-targeted regional visibility campaigns tapping millions of emerging digital consumers across Bharat.",
    image: "/images/services/ecommerce/meesho-scaling.jpg",
    link: "/services/ecommerce/meesho",
  },
  {
    title: "NDR & RTO Reduction Framework",
    description: "Proactive non-delivery dispatch verification workflows minimizing return rates and protecting profit margins.",
    image: "/images/services/ecommerce/meesho-scaling.jpg",
    link: "/services/ecommerce/meesho",
  },
];

const blinkitFeatures = [
  {
    title: "10-Minute Dark Store Allocation",
    description: "City-wide micro-warehouse inventory mapping ensuring continuous stock availability across high-demand pin codes.",
    image: "/images/services/ecommerce/blinkit-quick-commerce.jpg",
    link: "/services/ecommerce/blinkit",
  },
  {
    title: "Sponsored In-App Search Ads",
    description: "High-intent keyword bidding and category banner placements capturing instant 10-minute impulse orders.",
    image: "/images/services/ecommerce/blinkit-quick-commerce.jpg",
    link: "/services/ecommerce/blinkit",
  },
  {
    title: "Brand Onboarding & FMCG Compliance",
    description: "End-to-end documentation, FSSAI verification, and barcode compliance for lightning-fast catalog activation.",
    image: "/images/services/ecommerce/blinkit-quick-commerce.jpg",
    link: "/services/ecommerce/blinkit",
  },
  {
    title: "Live Stockout Prediction & Restocking",
    description: "Automated replenishment triggers preventing dark-store stockouts during peak evening and weekend surges.",
    image: "/images/services/ecommerce/blinkit-quick-commerce.jpg",
    link: "/services/ecommerce/blinkit",
  },
];

const myntraFeatures = [
  {
    title: "Curated Brand Storefront Architecture",
    description: "Luxury lookbooks, editorial visual storytelling, and category-first storefront styling for fashion brands.",
    image: "/images/services/ecommerce/myntra-fashion-store.jpg",
    link: "/services/ecommerce/myntra",
  },
  {
    title: "Fashion Attribute Taxonomy & SEO",
    description: "Deep indexing of sizing, fabrics, occasions, and color palettes for maximum search filter visibility.",
    image: "/images/services/ecommerce/myntra-fashion-store.jpg",
    link: "/services/ecommerce/myntra",
  },
  {
    title: "EORS Mega Sale Event War-Room",
    description: "Pre-sale discount scheduling, buffer inventory scaling, and hourly bid management during flagship sales.",
    image: "/images/services/ecommerce/myntra-fashion-store.jpg",
    link: "/services/ecommerce/myntra",
  },
  {
    title: "Sponsored Search & Trend Campaigns",
    description: "Data-driven in-app ads driving high-converting shoppers directly to your hero product collections.",
    image: "/images/services/ecommerce/myntra-fashion-store.jpg",
    link: "/services/ecommerce/myntra",
  },
];

const etsyFeatures = [
  {
    title: "Artisanal & Bespoke Shop Architecture",
    description: "Cohesive handcrafted brand identity, creator bio storytelling, and premium policies setup.",
    image: "/images/services/ecommerce/etsy-global-scaling.jpg",
    link: "/services/ecommerce/etsy",
  },
  {
    title: "13-Tag Etsy SEO & Algorithmic Indexing",
    description: "Exhaustive multi-word tag keyword research dominating buyer searches across the US, UK, and Europe.",
    image: "/images/services/ecommerce/etsy-global-scaling.jpg",
    link: "/services/ecommerce/etsy",
  },
  {
    title: "Star Seller Badge Acceleration",
    description: "Message response optimization, on-time shipping pipelines, and 5-star review collection workflows.",
    image: "/images/services/ecommerce/etsy-global-scaling.jpg",
    link: "/services/ecommerce/etsy",
  },
  {
    title: "Global Export & Courier Logistics",
    description: "Streamlined DHL, FedEx, and India Post International shipping profiles with transparent delivery times.",
    image: "/images/services/ecommerce/etsy-global-scaling.jpg",
    link: "/services/ecommerce/etsy",
  },
];

const quickNavPlatforms = [
  { name: "Amazon", href: "#amazon" },
  { name: "Flipkart", href: "#flipkart" },
  { name: "Meesho", href: "#meesho" },
  { name: "Blinkit", href: "#blinkit" },
  { name: "Myntra", href: "#myntra" },
  { name: "Etsy", href: "#etsy" },
  { name: "Other Marketplaces", href: "#other-marketplaces" },
];

export default function EcommerceService() {
  return (
    <>
      <main style={{ paddingTop: "120px", minHeight: "100vh" }}>
        {/* Luxury E-Commerce Suite Hero Header */}
        <section style={{ maxWidth: "1280px", margin: "0 auto 40px", padding: "0 24px", textAlign: "center" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "100px",
            background: "rgba(128, 0, 0, 0.08)",
            border: "1px solid rgba(128, 0, 0, 0.2)",
            color: "var(--primary-maroon, #ff4d4d)",
            fontSize: "0.85rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "20px"
          }}>
            <Sparkles size={16} />
            <span>Omnichannel E-Commerce Suite</span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "var(--text-color, #ffffff)",
            marginBottom: "20px",
            lineHeight: 1.15
          }}>
            DOMINATE MARKETPLACES. <br />
            <span style={{
              background: "linear-gradient(135deg, #ff5e5e 0%, #b91c1c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              SCALE COMPOUNDING REVENUE.
            </span>
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--text-color, #a1a1aa)",
            opacity: 0.85,
            maxWidth: "800px",
            margin: "0 auto 36px",
            lineHeight: 1.6
          }}>
            From Amazon & Flipkart PPC dominance to 10-minute Quick-Commerce on Blinkit, high-volume Tier 2/3 expansion on Meesho, curated fashion scaling on Myntra, and global artisanal exports on Etsy.
          </p>

          {/* Quick Platform Anchor Jump Links */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            maxWidth: "960px",
            margin: "0 auto 30px"
          }}>
            {quickNavPlatforms.map((plat) => (
              <a
                key={plat.name}
                href={plat.href}
                style={{
                  padding: "8px 18px",
                  borderRadius: "50px",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  background: "rgba(0, 0, 0, 0.04)",
                  border: "1px solid rgba(128, 0, 0, 0.2)",
                  color: "var(--text-color, #ffffff)",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <span>{plat.name}</span>
                <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
              </a>
            ))}
          </div>
        </section>

        {/* Amazon Section */}
        <ServiceFeatureGrid
          id="amazon"
          title="Amazon Growth Suite"
          subtitle="Dominate the world's largest marketplace with our end-to-end management, PPC bidding, and A+ visual storytelling."
          features={amazonFeatures}
        />

        {/* Flipkart Section */}
        <ServiceFeatureGrid
          id="flipkart"
          title="Flipkart Scaling Suite"
          subtitle="Expand your reach across India's booming marketplace ecosystem with high-conversion PLA campaigns and RPD maximization."
          features={flipkartFeatures}
        />

        {/* Meesho Section */}
        <ServiceFeatureGrid
          id="meesho"
          title="Meesho Bharat Scaling Suite"
          subtitle="Leverage 0% commission cataloging, algorithmic price positioning, and high-velocity order volume across Tier 2, 3 & Bharat consumers."
          features={meeshoFeatures}
        />

        {/* Blinkit Quick-Commerce Section */}
        <ServiceFeatureGrid
          id="blinkit"
          title="Blinkit Quick-Commerce Suite"
          subtitle="Capture 10-minute high-impulse buying with dark store allocation, sponsored in-app search placement, and zero-stockout replenishment."
          features={blinkitFeatures}
        />

        {/* Myntra Fashion Section */}
        <ServiceFeatureGrid
          id="myntra"
          title="Myntra Fashion & Lifestyle Suite"
          subtitle="Curate prestigious digital brand storefronts, optimize fashion attribute taxonomy, and dominate EORS mega sale war-rooms."
          features={myntraFeatures}
        />

        {/* Etsy Global Section */}
        <ServiceFeatureGrid
          id="etsy"
          title="Etsy Global Export Suite"
          subtitle="Scale your bespoke, artisanal, and creator brand worldwide with 13-tag Etsy SEO, Star Seller acceleration, and express international shipping."
          features={etsyFeatures}
        />

        {/* Other Marketplaces Custom Banner */}
        <section id="other-marketplaces" style={{ maxWidth: "1280px", margin: "0 auto 80px", padding: "0 24px" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(128, 0, 0, 0.2) 0%, rgba(17, 17, 22, 0.95) 100%)",
            border: "1px solid rgba(255, 94, 94, 0.3)",
            borderRadius: "28px",
            padding: "48px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
            boxShadow: "0 20px 50px -10px rgba(0, 0, 0, 0.7)"
          }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "100px",
                background: "rgba(239, 68, 68, 0.15)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                color: "#ff5e5e",
                fontSize: "0.8rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "16px"
              }}>
                <Globe size={14} />
                <span>Omnichannel Custom Coverage</span>
              </div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                fontWeight: 900,
                color: "#ffffff",
                marginBottom: "12px",
                lineHeight: 1.2
              }}>
                Selling On Other Marketplaces?
              </h3>
              <p style={{ fontSize: "1rem", color: "#a1a1aa", lineHeight: 1.6, margin: 0 }}>
                We also manage and scale accounts across <strong>Nykaa, Tata CliQ, Ajio, Walmart (US), eBay, Zepto, Swiggy Instamart, and FirstCry</strong>. Let our senior strategists customize an omnichannel growth playbook for your brand.
              </p>
            </div>

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 32px",
                background: "linear-gradient(135deg, #800000 0%, #b91c1c 100%)",
                color: "#ffffff",
                borderRadius: "14px",
                fontWeight: 800,
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow: "0 10px 30px -5px rgba(185, 28, 28, 0.5)",
                transition: "transform 0.2s ease",
                whiteSpace: "nowrap"
              }}
            >
              <span>Inquire For Other Marketplaces</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
