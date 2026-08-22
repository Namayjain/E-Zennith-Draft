"use client";

import Link from "next/link";
import styles from "./ServiceFeatureGrid.module.css";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface ServiceFeatureGridProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export default function ServiceFeatureGrid({ title, subtitle, features }: ServiceFeatureGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => {
            const content = (
              <>
                <div className={styles.imageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    {feature.title}
                    {feature.link && (
                      <span className={styles.cardArrow}>
                        <ArrowUpRight size={18} />
                      </span>
                    )}
                  </h3>
                  <p className={styles.cardDescription}>{feature.description}</p>
                </div>
              </>
            );

            return (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {feature.link ? (
                  <Link href={feature.link} className={styles.cardLink}>
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
