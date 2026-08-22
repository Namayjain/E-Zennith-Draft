"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TextFlip({ text }: { text: string }) {
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "center" }}>
      {text.split("").map((char, i) => (
        <motion.div
          key={`${i}-${trigger}`}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: "backOut" }}
          style={{
            background: "var(--card-bg)",
            color: "var(--text-color)",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid var(--card-border)",
            fontWeight: "bold",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            display: "inline-block",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transformOrigin: "center center"
          }}
        >
          {char === " " ? "\u00A0" : char.toUpperCase()}
        </motion.div>
      ))}
    </div>
  );
}
