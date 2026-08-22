"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Loader.module.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      // Give time for fade-out, then fully remove
      setTimeout(() => setLoading(false), 800);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className={styles.loaderContainer}
      animate={exiting ? { opacity: 0, y: -50, filter: "blur(10px)" } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className={styles.logoContainer}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/logo.png" alt="EZennith" className="logoLight" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
        <img src="/logo_dark.png" alt="EZennith" className="logoDark" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
        <motion.div
          className={styles.loadingBar}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
