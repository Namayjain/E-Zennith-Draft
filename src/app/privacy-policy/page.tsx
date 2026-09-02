"use client";

import styles from "./legal.module.css";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <div className={styles.badge}>
            <ShieldCheck size={16} />
            <span>Legal Governance</span>
          </div>

          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: August 2026</p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Introduction & Overview</h2>
            <p>
              E Zennith ("we," "our," or "us") is dedicated to safeguarding the privacy and confidential data of our clients, partners, and website visitors. This Privacy Policy details the types of information we collect, how it is utilized, and the stringent security measures we maintain across all our marketplace management, digital consulting, and web development operations.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Information We Collect</h2>
            <p>
              We collect information to provide superior growth consulting and e-commerce optimization services. This includes:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Name, work email address, phone/WhatsApp number, and company name provided via our contact forms or consultation requests.</li>
              <li><strong>Brand & Account Details:</strong> Marketplace store identifiers, product catalogue parameters, and business metrics shared under Non-Disclosure Agreements (NDAs) for strategy evaluations.</li>
              <li><strong>Technical Data:</strong> Anonymized browsing patterns, device characteristics, IP addresses, and interaction timestamps collected via secure analytics cookies.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>
              Your data is utilized strictly for professional business purposes:
            </p>
            <ul>
              <li>Conducting comprehensive 360° marketplace and digital storefront evaluations.</li>
              <li>Delivering customized strategic proposals and growth roadmaps.</li>
              <li>Executing contracted services, including account management, advertising optimization, and creative production.</li>
              <li>Complying with statutory legal obligations and enforcing service agreements.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Client Confidentiality & Non-Disclosure (NDA)</h2>
            <p>
              We treat all client revenue numbers, supply chain insights, advertising data, and creative assets with utmost confidentiality. E Zennith never sells, rents, or monetizes client data to third-party brokers or competitors under any circumstances.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Data Security & Storage</h2>
            <p>
              We employ enterprise-grade encryption (TLS/SSL) and access-restricted workflows to protect information against unauthorized access, loss, or alteration. Access to client accounts is strictly restricted to authorized strategists managing your account.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Your Rights</h2>
            <p>
              You maintain the right to access, update, or request the permanent deletion of your personal data stored within our systems at any time by contacting our compliance officer.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy or our security standards, please contact us at:
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
