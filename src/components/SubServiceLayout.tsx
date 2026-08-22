"use client";

import { ReactNode } from "react";
import ContactForm from "@/components/ContactForm";
import styles from "./SubServiceLayout.module.css";

interface SubServiceLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function SubServiceLayout({ children, title, subtitle }: SubServiceLayoutProps) {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      
      <div className={styles.container}>
        {/* Left Side: Completely customizable content */}
        <div className={styles.content}>
          {children}
        </div>
        
        {/* Right Side: Sticky Contact Form */}
        <div className={styles.sidebar}>
          <div className={styles.stickyWrapper}>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
