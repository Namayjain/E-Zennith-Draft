"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const trailingPos = useRef({ x: -1000, y: -1000 });
  const isFirstMove = useRef(true);

  useEffect(() => {
    // Only run on non-touch devices with fine pointers
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let animId: number;

    // 60fps physics loop (Never resets to top corner)
    const render = () => {
      // Lerp physics: outer ring smoothly glides towards center dot
      trailingPos.current.x += (mousePos.current.x - trailingPos.current.x) * 0.22;
      trailingPos.current.y += (mousePos.current.y - trailingPos.current.y) * 0.22;

      dot.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      ring.style.transform = `translate3d(${trailingPos.current.x}px, ${trailingPos.current.y}px, 0)`;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleMouseMove = (e: MouseEvent) => {
      if (isFirstMove.current) {
        // Snap immediately on first mouse appearance so it never flies from corner
        mousePos.current = { x: e.clientX, y: e.clientY };
        trailingPos.current = { x: e.clientX, y: e.clientY };
        isFirstMove.current = false;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      } else {
        mousePos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseDown = () => {
      ring.classList.add(styles.ringClick);
      dot.classList.add(styles.dotClick);
    };

    const handleMouseUp = () => {
      ring.classList.remove(styles.ringClick);
      dot.classList.remove(styles.dotClick);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        target.tagName.toLowerCase() === "select" ||
        target.getAttribute("role") === "button" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.closest('[role="button"]') !== null;

      if (isInteractive) {
        ring.classList.add(styles.ringHover);
        dot.classList.add(styles.dotHover);
      } else {
        ring.classList.remove(styles.ringHover);
        dot.classList.remove(styles.dotHover);
      }
    };

    const handleMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      isFirstMove.current = true;
    };

    const handleMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Outer Magnetic Trailing Aura Ring */}
      <div ref={ringRef} className={styles.cursorRing} />

      {/* Inner Precision Center Point */}
      <div ref={dotRef} className={styles.cursorDot} />
    </>
  );
}
