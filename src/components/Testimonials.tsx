"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles, CheckCircle2 } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote: "E Zennith completely turned our Amazon sales around. We went from struggling with keyword rankings to hitting top-of-search organically within 45 days. Their catalog architecture and aggressive PPC management are unmatched.",
    name: "Arjun Reddy",
    role: "Founder & CEO",
    brand: "Aura Ayurveda",
    verified: "Amazon Brand Verified",
    initials: "AR",
  },
  {
    id: 2,
    rating: 5,
    quote: "The digital marketing and storefront redesign they engineered for our brand generated an immediate surge in organic conversion rate. They don't just run campaigns; they understand unit economics and consumer psychology.",
    name: "Sneha Singhal",
    role: "Chief Marketing Officer",
    brand: "Velvet & Loom",
    verified: "Shopify Plus Merchant",
    initials: "SS",
  },
  {
    id: 3,
    rating: 5,
    quote: "Flipkart and Amazon marketplace dynamics were a constant friction point for our internal team until E Zennith took over. Incredibly proactive communication, crystal-clear reporting, and relentless execution.",
    name: "Karan Bajaj",
    role: "Head of E-Commerce",
    brand: "Terra Roasters",
    verified: "Category Leader",
    initials: "KB",
  },
  {
    id: 4,
    rating: 5,
    quote: "Their 3D CGI product renders and A+ brand storefront elevated our perceived brand value instantly. Our listing conversion rate jumped significantly in the first month alone.",
    name: "Pooja Verma",
    role: "Creative Director",
    brand: "Nova Living",
    verified: "DTC Innovator",
    initials: "PV",
  },
];

const AUTO_PLAY_INTERVAL = 5500; // 5.5 seconds

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section 
      className={styles.section} 
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            <span>Client Endorsements</span>
          </div>

          <h2 className={styles.title}>
            <span className="editorial-outline">PROVEN TRACK RECORD.</span> <br />
            <span className="editorial-solid">TRUSTED BY FOUNDERS.</span>
          </h2>

          <p className={styles.subtitle}>
            What brand leaders say after partnering with our marketplace collective.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className={styles.testimonialWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top Row: 5 Stars + Verification Badge */}
              <div className={styles.cardTopRow}>
                <div className={styles.starsRow}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={styles.starIcon} fill="currentColor" />
                  ))}
                </div>

                <div className={styles.verifiedBadge}>
                  <CheckCircle2 size={15} />
                  <span>{current.verified}</span>
                </div>
              </div>

              {/* Quote Body */}
              <div className={styles.quoteBody}>
                <Quote className={styles.quoteMark} size={36} />
                <p className={styles.quoteText}>"{current.quote}"</p>
              </div>

              {/* Author Details */}
              <div className={styles.authorSection}>
                <div className={styles.avatar}>
                  {current.initials}
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{current.name}</h4>
                  <p className={styles.authorRole}>
                    {current.role} • <span className={styles.brandName}>{current.brand}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls: Auto-sliding Progress Bar & Arrows */}
          <div className={styles.controls}>
            <div className={styles.pagination}>
              {testimonials.map((_, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`${styles.dot} ${isActive ? styles.activeDot : ""}`}
                    aria-label={`Slide ${index + 1}`}
                  >
                    {isActive && (
                      <motion.div
                        className={styles.progressFill}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: isPaused ? 0 : AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className={styles.arrows}>
              <button onClick={prevSlide} className={styles.arrowBtn} aria-label="Previous Review">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextSlide} className={styles.arrowBtn} aria-label="Next Review">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
