"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Sparkles, HelpCircle } from "lucide-react";
import styles from "./FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Platforms & Scope",
    question: "What platforms and marketplaces does E Zennith specialize in?",
    answer: "We engineer end-to-end growth across Amazon, Flipkart, Shopify, WooCommerce, and custom web architectures. From catalog setup and algorithmic SEO to multi-channel advertising and 3D visual assets, we manage the complete commerce lifecycle.",
  },
  {
    category: "PPC & Advertising",
    question: "How do you approach advertising (PPC) on Amazon and Flipkart?",
    answer: "We build bespoke bidding architectures, harvest high-intent search queries, eliminate ad waste through continuous negative targeting, and aggressively drive down ACoS while driving profitable top-of-search market share.",
  },
  {
    category: "Creative & 3D CGI",
    question: "Can you handle custom 3D product rendering, video ads, and A+ content?",
    answer: "Yes. Our in-house creative collective delivers hyper-realistic 3D CGI mockups, high-converting product demo videos, immersive brand storefronts, and premium A+ enhanced brand modules designed specifically to convert scrollers into buyers.",
  },
  {
    category: "Timelines & Growth",
    question: "How quickly can we expect measurable traction and ranking gains?",
    answer: "Listing optimizations and catalog indexation reflect within 14–30 days. Compounding organic rank velocity, review generation, and optimized PPC scale typically deliver breakthrough scaling within the first 60–90 days.",
  },
  {
    category: "Onboarding & Engagement",
    question: "What does the onboarding process look like after booking an audit?",
    answer: "We begin with a comprehensive 360° account and competitive gap audit. Upon alignment, our dedicated strategists, designers, and growth engineers deploy your customized 90-day scaling roadmap within 48 hours.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            <span>Got Questions?</span>
          </div>

          <h2 className={styles.title}>
            <span className="editorial-outline">FREQUENTLY ASKED</span> <br />
            <span className="editorial-solid">QUESTIONS.</span>
          </h2>

          <p className={styles.subtitle}>
            Everything you need to know about partnering with our growth collective.
          </p>
        </div>

        {/* Accordion List */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.activeItem : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.questionContainer}>
                  <div className={styles.questionLeft}>
                    <span className={styles.itemCategory}>{faq.category}</span>
                    <h3 className={styles.question}>{faq.question}</h3>
                  </div>

                  <div className={`${styles.iconWrapper} ${isOpen ? styles.iconOpen : ""}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.answerWrapper}
                    >
                      <p className={styles.answer}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
