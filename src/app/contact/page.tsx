"use client";

import ContactForm from "@/components/ContactForm";
import styles from "./contact.module.css";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Contact Page Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className="editorial-outline">LET'S START</span> <br />
            <span className="editorial-solid">SOMETHING BIG.</span>
          </h1>
          <p className={styles.subtitle}>
            Ready to accelerate your marketplace ranking and elevate your digital storefront? Connect directly with our lead strategists.
          </p>
        </div>

        {/* Two-Column Grid: Direct Contact Channels & The Form */}
        <div className={styles.contentGrid}>
          {/* Left Column: Direct Info Cards */}
          <div className={styles.infoCol}>
            <div className={styles.channelCard}>
              <div className={styles.channelIcon}>
                <Phone size={22} />
              </div>
              <div className={styles.channelText}>
                <span className={styles.channelLabel}>Call or WhatsApp</span>
                <a href="tel:+917488407737" className={styles.channelValue}>
                  +91 7488407737
                </a>
              </div>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelIcon}>
                <Mail size={22} />
              </div>
              <div className={styles.channelText}>
                <span className={styles.channelLabel}>Official Inquiries</span>
                <a href="mailto:contact@ezennith.com" className={styles.channelValue}>
                  contact@ezennith.com
                </a>
              </div>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelIcon}>
                <MessageCircle size={22} />
              </div>
              <div className={styles.channelText}>
                <span className={styles.channelLabel}>Direct Strategist Chat</span>
                <a href="https://wa.me/917488407737" target="_blank" rel="noopener noreferrer" className={styles.channelValue}>
                  Chat on WhatsApp ↗
                </a>
              </div>
            </div>

            <div className={styles.channelCard}>
              <div className={styles.channelIcon}>
                <MapPin size={22} />
              </div>
              <div className={styles.channelText}>
                <span className={styles.channelLabel}>Global Operations</span>
                <span className={styles.channelValue}>
                  India & Global Marketplace Hubs
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Form */}
          <div className={styles.formCol}>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
