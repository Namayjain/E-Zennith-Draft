"use client";

import Image from "next/image";
import styles from "./InfiniteLogos.module.css";
import ScrambleText from "./ScrambleText";

const logos = [
  { name: "Amazon", src: "/Amazon.png" },
  { name: "Flipkart", src: "/Flipkart.png" },
  { name: "Meesho", src: "/Meesho.webp" },
  { name: "Myntra", src: "/Myntra.webp" },
  { name: "Shopify", src: "/Shopify.png" },
  { name: "Wordpress", src: "/Wordpress.webp" },
];

export default function InfiniteLogos() {
  const duplicatedLogos = [...logos, ...logos, ...logos];

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

      <div className={styles.container}>
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>
        
        <div className={styles.track}>
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <div className={styles.logoBox}>
                <Image 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  width={140} 
                  height={60} 
                  style={{ objectFit: 'contain' }}
                  priority={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
