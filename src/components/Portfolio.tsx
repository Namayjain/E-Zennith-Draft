"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, TrendingUp, BarChart3, Palette, Store, Image as ImageIcon } from "lucide-react";
import styles from "./Portfolio.module.css";

export interface PortfolioItem {
  id: string;
  category: "amazon" | "flipkart" | "creative" | "brand-store" | "infographics";
  image?: string; // Drop your image URL here (e.g. "/portfolio/amazon-1.webp")
  aspect?: "tall" | "standard" | "wide";
}

const tabs = [
  { id: "amazon", label: "Amazon Sales", icon: <TrendingUp size={16} /> },
  { id: "flipkart", label: "Flipkart Growth", icon: <BarChart3 size={16} /> },
  { id: "creative", label: "Creative Design", icon: <Palette size={16} /> },
  { id: "brand-store", label: "Brand Store", icon: <Store size={16} /> },
  { id: "infographics", label: "Infographics", icon: <ImageIcon size={16} /> },
] as const;

type TabType = typeof tabs[number]["id"];

// Clean portfolio items (Ready for your images)
const portfolioData: PortfolioItem[] = [
  // --- Amazon Sales ---
  { id: "amz-1", category: "amazon", aspect: "standard" },
  { id: "amz-2", category: "amazon", aspect: "tall" },
  { id: "amz-3", category: "amazon", aspect: "tall" },
  { id: "amz-4", category: "amazon", aspect: "standard" },
  { id: "amz-5", category: "amazon", aspect: "standard" },
  { id: "amz-6", category: "amazon", aspect: "standard" },

  // --- Flipkart Growth ---
  { id: "flp-1", category: "flipkart", aspect: "tall" },
  { id: "flp-2", category: "flipkart", aspect: "standard" },
  { id: "flp-3", category: "flipkart", aspect: "standard" },
  { id: "flp-4", category: "flipkart", aspect: "tall" },
  { id: "flp-5", category: "flipkart", aspect: "standard" },
  { id: "flp-6", category: "flipkart", aspect: "standard" },

  // --- Creative Design ---
  { id: "crt-1", category: "creative", aspect: "standard" },
  { id: "crt-2", category: "creative", aspect: "tall" },
  { id: "crt-3", category: "creative", aspect: "standard" },
  { id: "crt-4", category: "creative", aspect: "tall" },
  { id: "crt-5", category: "creative", aspect: "standard" },
  { id: "crt-6", category: "creative", aspect: "standard" },

  // --- Brand Store ---
  { id: "bs-1", category: "brand-store", aspect: "tall" },
  { id: "bs-2", category: "brand-store", aspect: "standard" },
  { id: "bs-3", category: "brand-store", aspect: "standard" },
  { id: "bs-4", category: "brand-store", aspect: "tall" },

  // --- Infographics ---
  { id: "info-1", category: "infographics", aspect: "standard" },
  { id: "info-2", category: "infographics", aspect: "tall" },
  { id: "info-3", category: "infographics", aspect: "standard" },
  { id: "info-4", category: "infographics", aspect: "tall" },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabType>("amazon");

  const filteredItems = portfolioData.filter((item) => item.category === activeTab);

  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            <span>Our Portfolio</span>
          </div>

          <h2 className={styles.title}>
            <span className="editorial-outline">ECOMMERCE WORK &</span> <br />
            <span className="editorial-solid">GROWTH RESULTS.</span>
          </h2>

          <p className={styles.subtitle}>
            Portfolio of high-converting creatives with proven growth across marketplaces.
          </p>

          {/* Animated Tab Bar */}
          <div className={styles.tabContainer}>
            <div className={styles.tabBar}>
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${styles.tabButton} ${isActive ? styles.tabActive : ""}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePortfolioTab"
                        className={styles.activePill}
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className={styles.tabLabel}>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Clean Animated Cards Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -10 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`${styles.card} ${item.aspect === "tall" ? styles.cardTall : ""}`}
              >
                <div className={styles.cardInner}>
                  {/* If user provided an image, show it. Otherwise show clean watermark placeholder */}
                  {item.image ? (
                    <div className={styles.imageContainer}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt="Portfolio item" className={styles.realImage} />
                    </div>
                  ) : (
                    <div className={styles.placeholderContainer}>
                      <div className={styles.watermarkWrapper}>
                        <span className={styles.watermarkBrand}>ezennith</span>
                        <span className={styles.watermarkSub}>Placeholder Dashboard</span>
                      </div>
                      <div className={styles.placeholderGrid} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
