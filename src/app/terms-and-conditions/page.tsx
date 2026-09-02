"use client";

import styles from "../privacy-policy/legal.module.css";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className={styles.badge}>
            <Scale size={16} />
            <span>Terms of Service</span>
          </div>

          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.lastUpdated}>Last Updated: August 2026</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing our website (ezennith.com), requesting a growth consultation, or engaging E Zennith for e-commerce management, advertising, design, or web development services, you agree to be legally bound by these Terms and Conditions.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Scope of Services</h2>
            <p>
              E Zennith provides growth consulting, Amazon and Flipkart account management, paid advertising (PPC) execution, 3D CGI and creative asset design, and custom web development. Detailed scopes, deliverables, timelines, and milestones are governed by individual client Service Level Agreements (SLAs) or project Statements of Work (SOWs).
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Intellectual Property Rights</h2>
            <p>
              Upon full settlement of contracted project invoices, all custom creative deliverables, 3D assets, storefront codebases, and copywriting produced specifically for the client become the exclusive property of the client, unless otherwise stipulated in writing.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Marketplace Compliance & Third-Party Platforms</h2>
            <p>
              While E Zennith strictly adheres to marketplace best practices and algorithm policies (Amazon Seller Central, Flipkart Seller Hub, Meta Ads, Google Ads), clients understand that third-party platforms reserve independent authority over algorithmic shifts, account suspensions, and policy enforcements. We operate as authorized brand advocates and managers.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Limitation of Liability</h2>
            <p>
              E Zennith shall not be held liable for indirect, incidental, or consequential damages resulting from third-party marketplace disruptions, inventory stockouts caused by supply chain delays, or platform-wide policy updates beyond our direct managerial control.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Contact Information</h2>
            <p>
              For inquiries or clarifications regarding these Terms & Conditions, please contact:
            </p>
            <p className={styles.contactBlock}>
              <strong>E Zennith Agency</strong><br />
              Email: <a href="mailto:Team.ezennith@gmail.com">Team.ezennith@gmail.com</a><br />
              Phone: <a href="tel:+918797787778">+91 8797787778</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
