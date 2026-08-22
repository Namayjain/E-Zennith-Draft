"use client";

import Link from "next/link";
import { Mail, Phone, ArrowUpRight, ArrowUp, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Grid Section */}
        <div className={styles.topSection}>
          {/* Brand Info Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="EZennith" className={styles.logoLight} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo_dark.png" alt="EZennith" className={styles.logoDark} />
            </Link>

            <p className={styles.description}>
              Full-stack eCommerce acceleration collective. We fuse algorithmic marketplace data with high-end 3D CGI creatives and custom DTC storefronts.
            </p>

            <div className={styles.statusPill}>
              <span className={styles.pulseDot} />
              <span>Accepting Brands for Q3/Q4</span>
            </div>

            <div className={styles.directContact}>
              <a href="tel:+917488407737" className={styles.contactItem}>
                <Phone size={15} />
                <span>+91 7488407737</span>
              </a>
              <a href="mailto:contact@ezennith.com" className={styles.contactItem}>
                <Mail size={15} />
                <span>contact@ezennith.com</span>
              </a>
              <a href="https://wa.me/917488407737" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <MessageCircle size={15} />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className={styles.linkGrid}>
            {/* Services Column */}
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Services</h4>
              <Link href="/services/ecommerce">Amazon & Flipkart Growth</Link>
              <Link href="/services/marketplace-optimization">Marketplace Optimization</Link>
              <Link href="/services/web-dev">DTC Storefronts & Web Dev</Link>
              <Link href="/services/digital-marketing">Digital Marketing & PPC</Link>
              <Link href="/services/content">3D CGI & Motion Creatives</Link>
            </div>

            {/* Company Column */}
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Company</h4>
              <Link href="/about">Who We Are (About)</Link>
              <Link href="/#what-we-do">What We Do</Link>
              <Link href="/#portfolio">Portfolio & Case Studies</Link>
              <Link href="/#testimonials">Client Testimonials</Link>
              <Link href="/#faq">Frequently Asked Questions</Link>
              <Link href="/contact">Book Free Growth Audit</Link>
            </div>

            {/* Legal & Compliance Column */}
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Legal & Trust</h4>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
              <div className={styles.trustBadge}>
                <ShieldCheck size={16} />
                <span>100% NDA Protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright, Legal Links & Back to Top */}
        <div className={styles.bottomSection}>
          <div className={styles.copyrightText}>
            © {new Date().getFullYear()} E Zennith Agency. All rights reserved.
          </div>

          <div className={styles.bottomLegalLinks}>
            <Link href="/privacy-policy">Privacy</Link>
            <span className={styles.dotSeparator}>•</span>
            <Link href="/terms-and-conditions">Terms</Link>
            <span className={styles.dotSeparator}>•</span>
            <Link href="/contact">Contact</Link>
          </div>

          <button onClick={scrollToTop} className={styles.backToTopBtn} aria-label="Back to Top">
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
