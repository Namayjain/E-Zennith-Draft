"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, Zap, ArrowUpRight, ShoppingBag, Sparkles, Shield, Clock, TrendingUp, Cpu } from "lucide-react";
import styles from "./Hero.module.css";
import HeroMobile3D from "./HeroMobile3D";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 240;
const currentFrame = (index: number) =>
  `/frames/frame_${index.toString().padStart(5, "0")}.webp`;

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hudOpacity, setHudOpacity] = useState(1);

  useEffect(() => {
    // Only run GSAP canvas scroll animation on desktop screens (>900px)
    if (window.innerWidth <= 900) return;

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

    // Preload frames on desktop
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
    <>
      {/* --- Desktop Hero (300vh Interactive 3D Scroll Canvas) --- */}
      <div className={styles.desktopHero}>
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
      </div>

      {/* --- Mobile & Tablet Hero (Modern, Faded Grid & 3D Floating Elements) --- */}
      <div className={styles.mobileHero}>
        {/* Half-Fading Grid Background Layer */}
        <div className={styles.mobileGridOverlay} />
        <div className={styles.mobileGlowOrb} />

        <div className={styles.mobileHeroContainer}>
          {/* Top Live Status Pill */}
          <div className={styles.mobileStatusPill}>
            <span className={styles.pulseDot} />
            <span>Full-Stack Growth Collective</span>
          </div>

          {/* Headline with Hanging 3D Badges */}
          <div className={styles.titleWrapper}>
            {/* Top-Right 3D Hanging Badge */}
            <div className={styles.floatingBadgeTop}>
              <div className={styles.floatingBadgeInner}>
                <Sparkles size={13} className={styles.sparkleIcon} />
                <span>3D CGI & Motion</span>
              </div>
            </div>

            <h1 className={styles.mobileTitle}>
              <span className="editorial-outline">SCALING GLOBAL</span> <br />
              <span className="editorial-solid">TOP MARKETPLACES</span> <br />
              <span className={styles.glowText}>& D2C BRANDS.</span>
            </h1>

            {/* Bottom-Left 3D Hanging Badge */}
            <div className={styles.floatingBadgeBottom}>
              <div className={styles.floatingBadgeInner}>
                <TrendingUp size={13} className={styles.growthIcon} />
                <span>Algorithmic Scale</span>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className={styles.mobileSubtitle}>
            From algorithmic Amazon & Flipkart dominance to custom high-converting storefronts and 3D motion creatives.
          </p>

          {/* 3D Interactive WebGL Holographic Tech Core */}
          <HeroMobile3D />

          {/* Mobile CTA Buttons */}
          <div className={styles.mobileCtaRow}>
            <Link href="/contact" className={styles.mobilePrimaryCta}>
              <span>Book Free Consultation</span>
              <ArrowUpRight size={18} />
            </Link>
            <Link href="/#what-we-do" className={styles.mobileSecondaryCta}>
              <span>Explore What We Do?</span>
            </Link>
          </div>

          {/* Quick Value Cards */}
          <div className={styles.mobileCardsList}>
            <div className={styles.mobileFeatureCard}>
              <div className={styles.featureIconCircle}>
                <ShoppingBag size={18} />
              </div>
              <div className={styles.featureCardText}>
                <span className={styles.featureCardTitle}>Amazon & Flipkart Scaling</span>
                <span className={styles.featureCardDesc}>Algorithmic SEO, cataloging & aggressive PPC</span>
              </div>
            </div>

            <div className={styles.mobileFeatureCard}>
              <div className={styles.featureIconCircle}>
                <Layers size={18} />
              </div>
              <div className={styles.featureCardText}>
                <span className={styles.featureCardTitle}>Custom DTC Storefronts</span>
                <span className={styles.featureCardDesc}>Shopify Plus & bespoke UI/UX architecture</span>
              </div>
            </div>

            <div className={styles.mobileFeatureCard}>
              <div className={styles.featureIconCircle}>
                <Sparkles size={18} />
              </div>
              <div className={styles.featureCardText}>
                <span className={styles.featureCardTitle}>3D CGI & Motion Creatives</span>
                <span className={styles.featureCardDesc}>Hyper-realistic renders & scroll-stopping ads</span>
              </div>
            </div>
          </div>

          {/* Trust Guarantee Bar */}
          <div className={styles.mobileTrustRow}>
            <div className={`${styles.trustPill} ${styles.trustPillEnlarged}`}>
              <Shield size={15} />
              <span><strong>100% NDA Protected</strong></span>
            </div>
            <div className={styles.trustPill}>
              <Clock size={14} />
              <span>24hr Strategy Turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
