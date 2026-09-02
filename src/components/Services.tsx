"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Services.module.css";
import { ShoppingBag, TrendingUp, Monitor, Megaphone, PenTool, ArrowUpRight } from "lucide-react";
import ScrambleText from "./ScrambleText";

const services = [
  {
    title: "Amazon & E-Commerce",
    description: "End-to-end account management, cataloging, and high-conversion advertising for Amazon and Flipkart. We build compounding revenue engines.",
    icon: <ShoppingBag size={40} strokeWidth={1.5} />,
    link: "/services/ecommerce",
  },
  {
    title: "Web Development",
    description: "High-performance, conversion-optimized storefronts built for scale. Premium UI/UX, Shopify, & custom solutions.",
    icon: <Monitor size={40} strokeWidth={1.5} />,
    link: "/services/web-dev",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven ad campaigns that lower CPA and maximize ROI. We aggressively bid on high-converting keywords to dominate your category.",
    icon: <Megaphone size={40} strokeWidth={1.5} />,
    link: "/services/digital-marketing",
  },
  {
    title: "Content & Creatives",
    description: "Premium A+ content, infographics, and ad creatives that stop the scroll. We fuse aesthetics with psychology.",
    icon: <PenTool size={40} strokeWidth={1.5} />,
    link: "/services/content",
  },
  {
    title: "Marketplace Optimization",
    description: "Strategic scaling for top-tier platforms. We obsess over every pixel and every data point.",
    icon: <TrendingUp size={40} strokeWidth={1.5} />,
    link: "/services/marketplace-optimization",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section className={styles.section} id="what-we-do">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What We Do?</h2>
          <p className={styles.subtitle}>
            We don't just manage accounts; we build compounding revenue engines using data, design, and aggressive optimization.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.card}>
              <Link href={service.link} className={styles.cardLink}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>{service.icon}</div>
                  <div className={styles.arrowWrapper}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
