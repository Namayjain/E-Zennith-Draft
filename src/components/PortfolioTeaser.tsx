"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp, Sparkles, ShieldCheck, BarChart3, CheckCircle2 } from "lucide-react";
import styles from "./PortfolioTeaser.module.css";

export default function PortfolioTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.contentCol}>
            <div className={styles.badge}>
              <Sparkles size={14} />
              <span>Verified Client Results</span>
            </div>

            <h2 className={styles.title}>
              <span className="editorial-outline">VERIFIED PROOF &</span> <br />
              <span className="editorial-solid">CASE STUDIES.</span>
            </h2>

            <p className={styles.description}>
              Explore verified Amazon Seller Central reports, before-and-after PPC optimizations, and multi-million monthly revenue scaling case studies achieved for our partner brands.
            </p>

            <div className={styles.metricsRow}>
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>₹51.3L+</span>
                <span className={styles.metricLabel}>Peak Monthly Revenue</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>18.1x</span>
                <span className={styles.metricLabel}>Peak Verified ROAS</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricVal}>5.5%</span>
                <span className={styles.metricLabel}>Target Low ACoS</span>
              </div>
            </div>

            <div className={styles.actionRow}>
              <Link href="/portfolio" className={styles.primaryBtn}>
                <span>Explore Full Portfolio & Live Reports</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          <div className={styles.visualCol}>
            <div className={styles.previewStack}>
              {/* Preview Case Study Box */}
              <div className={styles.reportPreviewCard}>
                <div className={styles.previewHeader}>
                  <div className={styles.dotRed} />
                  <div className={styles.dotYellow} />
                  <div className={styles.dotGreen} />
                  <span className={styles.previewLabel}>Amazon Seller Central Performance Audit</span>
                </div>
                
                <div
                  className={styles.previewImageWrapper}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/portfolio/case1-june-after-scale-12x.jpeg"
                    alt="Amazon PPC Case Study Report"
                    className={styles.previewImg}
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>

                <div className={styles.previewFooter}>
                  <div className={styles.footerStat}>
                    <span className={styles.footerStatLabel}>ROAS:</span>
                    <span className={styles.footerStatVal}>12.16x</span>
                  </div>
                  <div className={styles.footerStat}>
                    <span className={styles.footerStatLabel}>ACoS:</span>
                    <span className={styles.footerStatVal}>8.22%</span>
                  </div>
                  <div className={styles.footerStat}>
                    <span className={styles.footerStatLabel}>Ad Sales:</span>
                    <span className={styles.footerStatVal}>₹1.38 Lakhs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
