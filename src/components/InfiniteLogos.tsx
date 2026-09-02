"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./InfiniteLogos.module.css";

const logos = [
  { name: "Amazon", src: "/Amazon.png" },
  { name: "Flipkart", src: "/Flipkart.png" },
  { name: "Meesho", src: "/Meesho.webp" },
  { name: "Myntra", src: "/Myntra.webp" },
  { name: "Shopify", src: "/Shopify.png" },
  { name: "Wordpress", src: "/Wordpress.webp" },
];

export default function InfiniteLogos() {
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleTouchStart = () => {
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
  };

  const handleTouchEnd = () => {
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    // Smoothly restart scrolling after user releases touch
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 400);
  };

  useEffect(() => {
    // Safety auto-resume: Scrolling the page, moving touch, or clicking anywhere immediately restarts the carousel
    const handleGlobalResume = () => {
      setIsPaused(false);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };

    window.addEventListener("scroll", handleGlobalResume, { passive: true });
    window.addEventListener("touchmove", handleGlobalResume, { passive: true });
    window.addEventListener("click", handleGlobalResume, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleGlobalResume);
      window.removeEventListener("touchmove", handleGlobalResume);
      window.removeEventListener("click", handleGlobalResume);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.networkHeader}>
        <h2 className={styles.title}>
          <span style={{ color: "var(--text-color)" }}>Our Network</span>
        </h2>
        <h3 className={styles.subtitle}>Growing Brands Across Top Marketplaces</h3>
        <p className={styles.description}>
          We work with leading platforms like Amazon, Flipkart, Meesho, and more to help businesses expand their reach and achieve consistent growth.
        </p>
      </div>

      <div 
        className={styles.container}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>
        
        <div className={`${styles.track} ${isPaused ? styles.trackPaused : ""}`}>
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <div className={styles.logoBox}>
                <Image 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  width={130} 
                  height={55} 
                  style={{ objectFit: 'contain' }}
                  priority={index < 6}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
