"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Zap,
  ZoomIn,
  X,
  Layers,
  Award,
  Clock,
  CheckCircle2,
  Lock,
  ChevronRight
} from "lucide-react";
import styles from "./portfolio.module.css";

type CaseStudy = {
  id: string;
  title: string;
  category: "Before & After Turnarounds" | "High ROAS PPC Audits" | "Enterprise Marketplace Scale" | "Rapid Growth Multipliers";
  marketplace: string;
  image: string;
  metrics: {
    highlight: string;
    label: string;
    secondaryHighlight: string;
    secondaryLabel: string;
  };
  summary: string;
  analysis: string;
};

const caseStudiesData: CaseStudy[] = [
  {
    id: "case-1-turnaround",
    title: "Amazon PPC Turnaround & Scaling: May Calibration to June Dominance",
    category: "Before & After Turnarounds",
    marketplace: "Amazon Seller Central",
    image: "/images/portfolio/case1-june-after-scale-12x.jpeg",
    metrics: {
      highlight: "12.16x ROAS",
      label: "Verified June ROAS",
      secondaryHighlight: "₹10.28L/mo",
      secondaryLabel: "Total Monthly Revenue"
    },
    summary: "Transformed May initial calibration (₹88.0K sales @ 3.53 ROAS, 28.34% ACoS) into a high-margin June scaling engine (12.16x ROAS, 8.22% ACoS), expanding macro store revenue to ₹10.28L/month.",
    analysis: "Phase 1 (May): Deployed ad harvesting campaigns to identify high-converting keyword roots and isolate bleeding search queries (₹24,945 spend, ₹88,037 sales @ 3.53 ROAS / 28.34% ACoS). Phase 2 (June): Re-allocated budget into high-converting exact match roots with Top-of-Search placement multipliers, surging ROAS to 12.16x and slashing ACoS down to 8.22%."
  },
  {
    id: "case-2-enterprise-scale",
    title: "Enterprise Marketplace Scaling: ₹51.37 Lakhs Monthly Revenue",
    category: "Enterprise Marketplace Scale",
    marketplace: "Amazon Seller Central",
    image: "/images/portfolio/case2-enterprise-scale-51L.jpeg",
    metrics: {
      highlight: "₹51.37 Lakhs",
      label: "Peak Monthly Ordered Sales",
      secondaryHighlight: "17,087 Units",
      secondaryLabel: "Monthly Volume Ordered"
    },
    summary: "Large-scale catalog optimization and algorithmic advertising scaling an established brand to over ₹51 Lakhs/month with a stellar 6% low refund rate.",
    analysis: "Re-architected the entire multi-variation catalog structure, deployed dynamic PPC bid scripts based on real-time inventory levels, and enhanced product listings with 3D CGI infographics that boosted organic conversion rates by 34%."
  },
  {
    id: "case-3-high-roas-18x",
    title: "High-Margin PPC Portfolio: 18.10x ROAS & 5.53% ACoS",
    category: "High ROAS PPC Audits",
    marketplace: "Amazon Sponsored Products",
    image: "/images/portfolio/case3-roas-18x-acos-5pct.jpeg",
    metrics: {
      highlight: "18.10x ROAS",
      label: "Peak Campaign Return",
      secondaryHighlight: "5.53% ACoS",
      secondaryLabel: "Target Low Ad Cost"
    },
    summary: "Laser-targeted search query isolation generating ₹1,36,372 in sales on just ₹7,535 ad spend, delivering maximum profit margins to the brand.",
    analysis: "Implemented single-keyword ad groups (SKAGs) with dynamic down-only bidding algorithms. Isolated high-converting branded and exact search terms while aggressively negating irrelevant traffic."
  },
  {
    id: "case-4-exponential-growth",
    title: "700% Revenue Multiplier: From ₹74K to ₹5.27 Lakhs/Month",
    category: "Rapid Growth Multipliers",
    marketplace: "Amazon Seller Central",
    image: "/images/portfolio/case4-7x-growth-74k-to-527k.jpeg",
    metrics: {
      highlight: "+610% Scale",
      label: "7-Month Compounding Growth",
      secondaryHighlight: "₹5.27L/mo",
      secondaryLabel: "Scaled Run Rate"
    },
    summary: "Revitalized a stagnant account from ₹74,257/mo in Nov 2025 to ₹5,27,862/mo in June 2026 through full-stack listing & PPC optimization.",
    analysis: "Redesigned product main hero imagery, rewrote backend search terms with scientific keyword indexation, and built layered Sponsored Brands & Sponsored Products campaigns that increased monthly unit velocity by 7x."
  },
  {
    id: "case-5-ad-dominance-489k",
    title: "Category Dominance: ₹4.89 Lakhs Ad Sales @ 7.17x ROAS",
    category: "High ROAS PPC Audits",
    marketplace: "Amazon Advertising",
    image: "/images/portfolio/case3-roas-7x-sales-489k.jpeg",
    metrics: {
      highlight: "₹4.89 Lakhs",
      label: "Monthly Ad Attributed Sales",
      secondaryHighlight: "7.17x ROAS",
      secondaryLabel: "Blended Return"
    },
    summary: "Scaled monthly advertising spend to ₹68,272 while generating ₹4,89,258 in ad sales at a highly profitable 13.95% ACoS.",
    analysis: "Leveraged Sponsored Brands video creatives combined with custom Storefront traffic funnels to drive customer lifetime value and brand defense on high-value search terms."
  },
  {
    id: "case-6-consistent-8figure",
    title: "8-Figure Run Rate: Consistent ₹11.56 Lakhs Monthly Sales",
    category: "Enterprise Marketplace Scale",
    marketplace: "Amazon Seller Central",
    image: "/images/portfolio/case5-monthly-sales-11L.jpeg",
    metrics: {
      highlight: "₹11.56 Lakhs",
      label: "Consistent Monthly Revenue",
      secondaryHighlight: "4,123 Units",
      secondaryLabel: "Monthly Order Volume"
    },
    summary: "Maintained a strong multi-month ₹10L–₹11.5L revenue baseline with 4,000+ units moved monthly and compounding organic search rank.",
    analysis: "Engineered continuous listing split-testing, automated stock replenishment forecasts, and review acceleration strategies to lock in top-3 keyword positions across key product lines."
  },
  {
    id: "case-7-growth-compounder",
    title: "Compounding Growth: Scaled From ₹2.38L to ₹6.19L/Month",
    category: "Rapid Growth Multipliers",
    marketplace: "Amazon Seller Central",
    image: "/images/portfolio/case5-scale-238k-to-619k.jpeg",
    metrics: {
      highlight: "+160% Growth",
      label: "H1 Revenue Expansion",
      secondaryHighlight: "1,746 Units",
      secondaryLabel: "June Monthly Units"
    },
    summary: "Systematic monthly growth compounding from ₹2.38 Lakhs (Jan) to ₹6.19 Lakhs (June), building a sustainable eCommerce growth machine.",
    analysis: "Expanded organic search term indexation by 180%, launched competitor conquesting campaigns, and introduced enhanced A+ Brand Content."
  }
];

const categories = [
  "All Case Studies",
  "Before & After Turnarounds",
  "High ROAS PPC Audits",
  "Enterprise Marketplace Scale",
  "Rapid Growth Multipliers"
] as const;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All Case Studies");
  const [activeStage, setActiveStage] = useState<"may-before" | "june-after" | "sales-impact">("june-after");
  const [selectedImage, setSelectedImage] = useState<CaseStudy | null>(null);

  const filteredCaseStudies = activeCategory === "All Case Studies"
    ? caseStudiesData
    : caseStudiesData.filter((item) => item.category === activeCategory);

  const turnaroundStages = {
    "may-before": {
      stageBadge: "Stage 1: MAY (Before - Initial Calibration)",
      badgeClass: styles.stageBadgeBefore,
      title: "Initial Calibration & Ad Harvesting (May 2026)",
      image: "/images/portfolio/case1-may-before-ads.jpeg",
      narrative: "Initial calibration and search term harvesting phase (1 May – 31 May, 2026). Identified conversion queries and pruned bleeding search terms, establishing a baseline of ₹88,037.20 in ad sales at 3.53 ROAS with 28.34% ACoS.",
      metrics: [
        { label: "May Ad Spend", value: "₹24,945.63" },
        { label: "May Ad Sales", value: "₹88,037.20" },
        { label: "Baseline ROAS", value: "3.53x" },
        { label: "Initial ACoS", value: "28.34%" }
      ],
      caseStudyRef: caseStudiesData[0]
    },
    "june-after": {
      stageBadge: "Stage 2: JUNE (After - Scaled @ 12.16x ROAS)",
      badgeClass: styles.stageBadgeAfter,
      title: "Optimized Scaling & 12.16x ROAS Engine (June 2026)",
      image: "/images/portfolio/case1-june-after-scale-12x.jpeg",
      narrative: "Full campaign restructuring with aggressive Top-of-Search placement on proven root terms. ACoS dropped from 28.34% down to 8.22%, while ROAS surged 3.4x from 3.53x to 12.16x, scaling ad sales to ₹1,38,368.",
      metrics: [
        { label: "Scaled Ad Sales", value: "₹1,38,368" },
        { label: "Optimized Spend", value: "₹11,375" },
        { label: "Verified ROAS", value: "12.16x" },
        { label: "Target ACoS", value: "8.22%" }
      ],
      caseStudyRef: caseStudiesData[0]
    },
    "sales-impact": {
      stageBadge: "Stage 3: TOTAL BUSINESS REVENUE DOUBLED",
      badgeClass: styles.stageBadgeImpact,
      title: "Macro Account Impact: ₹5.15L to ₹10.28L/Month",
      image: "/images/portfolio/case1-monthly-sales-scale.jpeg",
      narrative: "The compound effect of PPC dominance and organic keyword indexation doubled the total business monthly sales from ₹5.15 Lakhs to ₹10.28 Lakhs in 5 months.",
      metrics: [
        { label: "June Monthly Sales", value: "₹10,28,440" },
        { label: "Units Ordered", value: "5,914" },
        { label: "B2B Sales", value: "₹36,313" },
        { label: "Growth Trajectory", value: "+100%" }
      ],
      caseStudyRef: caseStudiesData[0]
    }
  };

  const currentStageData = turnaroundStages[activeStage];

  return (
    <main className={styles.main} onContextMenu={(e) => e.preventDefault()}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.topPill}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>Verified Marketplace Growth Audits</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className="editorial-outline">VERIFIED PROOF &</span> <br />
            <span className="editorial-solid">REVENUE CASE STUDIES.</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Real marketplace performance data, live Amazon Seller Central reports, and compounding growth case studies engineered by E Zennith.
          </p>

          {/* Quick Metrics Strip */}
          <div className={styles.kpiGrid}>
            <div className={styles.kpiCard}>
              <div className={styles.kpiIconBox}>
                <TrendingUp size={24} />
              </div>
              <div>
                <span className={styles.kpiValue}>₹51.38L+</span>
                <span className={styles.kpiLabel}>Peak Single Account Scale</span>
              </div>
            </div>

            <div className={styles.kpiCard}>
              <div className={styles.kpiIconBox}>
                <Zap size={24} />
              </div>
              <div>
                <span className={styles.kpiValue}>18.10x</span>
                <span className={styles.kpiLabel}>Peak Verified Campaign ROAS</span>
              </div>
            </div>

            <div className={styles.kpiCard}>
              <div className={styles.kpiIconBox}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <span className={styles.kpiValue}>5.53%</span>
                <span className={styles.kpiLabel}>Low Target ACoS Rate</span>
              </div>
            </div>

            <div className={styles.kpiCard}>
              <div className={styles.kpiIconBox}>
                <Award size={24} />
              </div>
              <div>
                <span className={styles.kpiValue}>700%+</span>
                <span className={styles.kpiLabel}>6-Month Revenue Multiplier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* ========================================================================= */}
        {/* FEATURED CASE STUDY: THE BEFORE & AFTER PPC & SALES TURNAROUND */}
        {/* ========================================================================= */}
        <section className={styles.featuredTurnaroundSection}>
          <div className={styles.featuredHeader}>
            <div className={styles.featuredPill}>
              <Clock size={13} />
              <span>Interactive Step-by-Step Case Study</span>
            </div>
            <h2 className={styles.featuredTitle}>The Complete PPC Scaling Turnaround</h2>
            <p className={styles.featuredDesc}>
              Follow the exact 3-stage progression from initial May keyword testing to June high-ROAS ad scaling and complete account revenue doubling.
            </p>
          </div>

          {/* Stage Selector Tabs */}
          <div className={styles.stageTabsRow}>
            <button
              onClick={() => setActiveStage("may-before")}
              className={`${styles.stageTabBtn} ${activeStage === "may-before" ? styles.stageTabActive : ""}`}
            >
              <span className={styles.stageTag}>Stage 1</span>
              <span>May (Before - Initial Calibration)</span>
            </button>

            <button
              onClick={() => setActiveStage("june-after")}
              className={`${styles.stageTabBtn} ${activeStage === "june-after" ? styles.stageTabActive : ""}`}
            >
              <span className={styles.stageTag}>Stage 2</span>
              <span>June (After - Ads Scaled @ 12.16x ROAS)</span>
            </button>

            <button
              onClick={() => setActiveStage("sales-impact")}
              className={`${styles.stageTabBtn} ${activeStage === "sales-impact" ? styles.stageTabActive : ""}`}
            >
              <span className={styles.stageTag}>Stage 3</span>
              <span>Full Account Sales Impact (₹10.28L/mo)</span>
            </button>
          </div>

          {/* Interactive Stage Display Grid */}
          <div className={styles.stageGrid}>
            <div
              className={styles.stageVisualWrapper}
              onClick={() => setSelectedImage(currentStageData.caseStudyRef)}
              onContextMenu={(e) => e.preventDefault()}
              title="Click to view full-size report in high resolution"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentStageData.image}
                alt={currentStageData.title}
                className={styles.stageImage}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
              />

              <div className={styles.zoomPrompt}>
                <ZoomIn size={14} />
                <span>Click to Inspect Full Report</span>
              </div>
            </div>

            {/* Stage Strategic Narrative */}
            <div className={styles.stageInfoCol}>
              <div className={styles.stageBadgeRow}>
                <span className={`${styles.stageBadge} ${currentStageData.badgeClass}`}>
                  {currentStageData.stageBadge}
                </span>
              </div>

              <h3 className={styles.stageTitle}>{currentStageData.title}</h3>
              <p className={styles.stageNarrative}>{currentStageData.narrative}</p>

              <div className={styles.stageMetricsGrid}>
                {currentStageData.metrics.map((m, idx) => (
                  <div key={idx} className={styles.stageMetricItem}>
                    <span className={styles.stageMetricVal}>{m.value}</span>
                    <span className={styles.stageMetricLabel}>{m.label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedImage(currentStageData.caseStudyRef)}
                className={styles.cardInspectBtn}
              >
                <span>Examine High-Res Verified Report</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ALL CASE STUDIES SECTION */}
        {/* ========================================================================= */}
        <section>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 900, marginBottom: "8px" }}>
              Explore All Verified Case Studies
            </h2>
            <p style={{ color: "#71717a", fontSize: "1rem" }}>
              Click on any report to zoom into the verified Seller Central metrics and strategic takeaways.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className={styles.filterTabsRow}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${styles.filterTabBtn} ${activeCategory === cat ? styles.filterTabActive : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className={styles.caseStudiesGrid}>
            {filteredCaseStudies.map((study) => (
              <article key={study.id} className={styles.caseStudyCard}>
                <div
                  className={styles.cardMediaWrapper}
                  onClick={() => setSelectedImage(study)}
                  onContextMenu={(e) => e.preventDefault()}
                  title="Click to zoom report"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={study.image}
                    alt={study.title}
                    className={styles.cardImg}
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    onContextMenu={(e) => e.preventDefault()}
                  />

                  <div className={styles.zoomPrompt}>
                    <ZoomIn size={13} />
                    <span>Zoom</span>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardTagRow}>
                    <span className={styles.cardMarketplaceTag}>{study.marketplace}</span>
                    <span className={styles.cardMarketplaceTag} style={{ background: "rgba(0,0,0,0.05)", color: "#71717a", borderColor: "rgba(0,0,0,0.1)" }}>
                      {study.category}
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>{study.title}</h3>
                  <p className={styles.cardSummary}>{study.summary}</p>

                  <div className={styles.cardStatsStrip}>
                    <div className={styles.statPair}>
                      <span className={styles.statPairVal}>{study.metrics.highlight}</span>
                      <span className={styles.statPairLabel}>{study.metrics.label}</span>
                    </div>
                    <div className={styles.statPair} style={{ textAlign: "right" }}>
                      <span className={styles.statPairVal}>{study.metrics.secondaryHighlight}</span>
                      <span className={styles.statPairLabel}>{study.metrics.secondaryLabel}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedImage(study)}
                    className={styles.cardInspectBtn}
                  >
                    <span>Inspect Verified Audit & Takeaways</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className={styles.bottomCtaSection}>
          <h2 className={styles.ctaTitle}>
            Ready To Scale Your Brand's Revenue Like This?
          </h2>
          <p className={styles.ctaSub}>
            Book a confidential 1-on-1 account audit with our senior marketplace strategists. We will evaluate your advertising architecture, search indexation, and conversion rate.
          </p>
          <Link href="/contact" className={styles.ctaActionBtn}>
            <span>Claim Your Free Account Audit</span>
            <ArrowUpRight size={20} />
          </Link>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE FULL-SCREEN LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {selectedImage && (
        <div className={styles.lightboxOverlay} onClick={() => setSelectedImage(null)} onContextMenu={(e) => e.preventDefault()}>
          <div className={styles.lightboxBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxHeader}>
              <div>
                <span className={styles.cardMarketplaceTag} style={{ marginBottom: "6px", display: "inline-block" }}>
                  {selectedImage.marketplace} • {selectedImage.category}
                </span>
                <h3 className={styles.lightboxTitle}>{selectedImage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className={styles.lightboxCloseBtn}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div
              className={styles.lightboxMediaWrapper}
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className={styles.lightboxImg}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            <div className={styles.lightboxDetailsGrid}>
              <div>
                <h4 className={styles.lightboxAnalysisTitle}>Strategic Execution & Methodology:</h4>
                <p className={styles.lightboxAnalysisText}>{selectedImage.analysis}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div className={styles.cardStatsStrip}>
                  <div className={styles.statPair}>
                    <span className={styles.statPairVal}>{selectedImage.metrics.highlight}</span>
                    <span className={styles.statPairLabel}>{selectedImage.metrics.label}</span>
                  </div>
                  <div className={styles.statPair} style={{ textAlign: "right" }}>
                    <span className={styles.statPairVal}>{selectedImage.metrics.secondaryHighlight}</span>
                    <span className={styles.statPairLabel}>{selectedImage.metrics.secondaryLabel}</span>
                  </div>
                </div>

                <Link href="/contact" className={styles.lightboxCtaBtn}>
                  <span>Apply This Strategy To Your Account</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
