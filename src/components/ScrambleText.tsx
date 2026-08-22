"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function ScrambleText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [displayText, setDisplayText] = useState(text.replace(/./g, " "));
  const [isScrambling, setIsScrambling] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (isInView && !hasTriggered.current) {
      hasTriggered.current = true;
      const timeout = setTimeout(() => scramble(), delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (text[index] === " ") return " ";
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / 3; // Controls speed of reveal
    }, 30);
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      onHoverStart={() => scramble()}
      style={{ display: "inline-block", whiteSpace: "pre" }}
    >
      {displayText}
    </motion.span>
  );
}
