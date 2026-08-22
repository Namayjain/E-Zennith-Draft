"use client";

import Link from "next/link";
import styles from "./CTA.module.css";
import { ArrowRight, Phone, Mail, Sparkles, CheckCircle2, ShoppingBag, Layers, Zap, Video, ShieldCheck } from "lucide-react";

export default function CTA() {
  return (
    <section className={styles.section} id="contact-cta">
      <div className={styles.container}>
        {/* Left Column: Headline & Direct Contact */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            <span>Scale Without Limits</span>
          </div>

          <h2 className={styles.title}>
            <span className="editorial-outline">READY TO SCALE PAST</span> <br />
            <span className="editorial-solid">YOUR CEILING?</span>
          </h2>

          <p className={styles.subtitle}>
            Drop us a line. Whether you need full-service Amazon & Flipkart management, high-converting custom storefronts, or aggressive PPC performance, our growth collective is ready.
          </p>

          <div className={styles.contactInfo}>
            <a href="tel:+917488407737" className={styles.contactItem}>
              <div className={styles.iconCircle}>
                <Phone size={16} />
              </div>
              <span>+91 7488407737</span>
            </a>

            <a href="mailto:contact@ezennith.com" className={styles.contactItem}>
              <div className={styles.iconCircle}>
                <Mail size={16} />
              </div>
              <span>contact@ezennith.com</span>
            </a>
          </div>

          <Link href="/contact" className={styles.ctaButton}>
            <span>Claim Your Free Growth Audit</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right Column: Premium Interactive Growth Matrix Card (Replaced Globe) */}
        <div className={styles.showcaseCard}>
          <div className={styles.cardHeader}>
            <div className={styles.liveStatus}>
              <span className={styles.pulseDot} />
              <span>Accepting Select DTC & Marketplace Brands</span>
            </div>
            <span className={styles.statusWeek}>Q3/Q4 Cohort</span>
          </div>

          <div className={styles.pillarsGrid}>
            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>
                <ShoppingBag size={20} />
              </div>
              <div className={styles.pillarText}>
                <span className={styles.pillarTitle}>Amazon & Flipkart Scale</span>
                <span className={styles.pillarDesc}>Algorithmic SEO, cataloging & aggressive PPC</span>
              </div>
            </div>

            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>
                <Layers size={20} />
              </div>
              <div className={styles.pillarText}>
                <span className={styles.pillarTitle}>Custom DTC Storefronts</span>
                <span className={styles.pillarDesc}>Shopify Plus & bespoke UI/UX architecture</span>
              </div>
            </div>

            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>
                <Video size={20} />
              </div>
              <div className={styles.pillarText}>
                <span className={styles.pillarTitle}>3D CGI & Motion Creatives</span>
                <span className={styles.pillarDesc}>Hyper-realistic product renders & video ads</span>
              </div>
            </div>

            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>
                <Zap size={20} />
              </div>
              <div className={styles.pillarText}>
                <span className={styles.pillarTitle}>Omnichannel Performance</span>
                <span className={styles.pillarDesc}>Meta, Google & multi-platform ROAS optimization</span>
              </div>
            </div>
          </div>

          <div className={styles.cardFooter}>
            <div className={styles.guaranteeRow}>
              <ShieldCheck size={18} className={styles.guaranteeIcon} />
              <span>Includes 360° Account Gap Analysis & 90-Day Roadmap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
