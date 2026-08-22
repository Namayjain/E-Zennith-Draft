"use client";

import styles from "./About.module.css";
import TextFlip from "./TextFlip";
import { Cpu, Sparkles, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <TextFlip text="WHO WE ARE" />
        </div>
        
        {/* Editorial Signature Manifesto (Image 2 style) */}
        <div className={styles.manifestoWrapper}>
          <h2 className={styles.manifestoTitle}>
            <span className="editorial-outline">THE GROWTH COLLECTIVE THAT</span> <br />
            <span className="editorial-solid">MAKES OTHER AGENCIES</span> <br />
            <span className={`${styles.glowText} editorial-solid`}>INSECURE.</span>
          </h2>
        </div>

        <p className={styles.paragraph}>
          Dedicated to elevating your brand's presence across the digital ecosystem. From Amazon and Flipkart algorithmic dominance to custom high-converting storefronts, we fuse aesthetic mastery with ruthless data engineering.
        </p>

        {/* Core Capability Pillars (Generic, Value-Driven) */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.pillarIconWrapper}>
              <Cpu size={24} />
            </div>
            <span className={styles.statNumber}>Strategy & Data</span>
            <span className={styles.statLabel}>Algorithmic marketplace optimization & high-intent search capture</span>
          </div>

          <div className={styles.statCard}>
            <div className={styles.pillarIconWrapper}>
              <Sparkles size={24} />
            </div>
            <span className={styles.statNumber}>Design & CGI</span>
            <span className={styles.statLabel}>Hyper-realistic 3D rendering, A+ content & scroll-stopping visuals</span>
          </div>

          <div className={styles.statCard}>
            <div className={styles.pillarIconWrapper}>
              <TrendingUp size={24} />
            </div>
            <span className={styles.statNumber}>Omnichannel</span>
            <span className={styles.statLabel}>Full-funnel expansion across Amazon, Flipkart, Shopify & Meta</span>
          </div>
        </div>
      </div>
    </section>
  );
}
