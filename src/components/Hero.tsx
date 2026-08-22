"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, Zap } from "lucide-react";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 240;
const currentFrame = (index: number) =>
  `/frames/frame_${index.toString().padStart(5, "0")}.webp`;

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hudOpacity, setHudOpacity] = useState(1);

  useEffect(() => {
    // Reset scroll to top on homepage entry
    window.scrollTo(0, 0);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Fixed canvas internal buffer (16:9 720p matching frame resolution)
    canvas.width = 1280;
    canvas.height = 720;

    const images: HTMLImageElement[] = [];
    let currentRenderedIndex = 0;

    function renderFrame(index: number) {
      const targetIndex = Math.min(frameCount - 1, Math.max(0, index));
      const img = images[targetIndex];
      if (img && img.complete && img.naturalWidth > 0) {
        currentRenderedIndex = targetIndex;
        context?.clearRect(0, 0, 1280, 720);
        context?.drawImage(img, 0, 0, 1280, 720);
      }
    }

    // Preload all 240 frames
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        if (i === currentRenderedIndex || (i === 0 && currentRenderedIndex === 0)) {
          renderFrame(i);
        }
      };
      images.push(img);
    }

    // Initial render of frame 0 if already cached
    renderFrame(0);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: trackRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          const frameIndex = Math.min(
            frameCount - 1,
            Math.max(0, Math.floor(self.progress * (frameCount - 1)))
          );
          renderFrame(frameIndex);

          // Fade out the overlay cleanly as the user begins scrolling
          const newOpacity = Math.max(0, 1 - self.progress * 4);
          setHudOpacity(newOpacity);
        },
      });

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={styles.heroTrack} ref={trackRef}>
      <div className={styles.stickyContainer}>
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* Luxury Hero HUD Overlay (fades out as you scroll) */}
        <div className={styles.hudOverlay} style={{ opacity: hudOpacity }}>
          {/* Top Status */}
          <div className={styles.topStatusRow}>
            <div className={styles.statusPill}>
              <span className={styles.pulseDot} />
              <span>Full-Stack eCommerce & Growth Collective</span>
            </div>
          </div>

          {/* Floating Value Badges */}
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <Layers size={18} />
              </div>
              <div className={styles.statText}>
                <span className={styles.statValue}>End-to-End Scale</span>
                <span className={styles.statLabel}>Strategy, Creative & Tech</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIconWrapper}>
                <Zap size={18} />
              </div>
              <div className={styles.statText}>
                <span className={styles.statValue}>Omnichannel Growth</span>
                <span className={styles.statLabel}>Amazon, Flipkart & DTC</span>
              </div>
            </div>
          </div>

          {/* Bottom Scroll Prompt */}
          <div className={styles.bottomPromptRow}>
            <div className={styles.mouseIndicator}>
              <div className={styles.mouseWheel} />
            </div>
            <span className={styles.scrollLabel}>Scroll to Explore</span>
          </div>
        </div>
      </div>
    </div>
  );
}
