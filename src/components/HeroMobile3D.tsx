"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Globe2, TrendingUp, Zap } from "lucide-react";
import styles from "./HeroMobile3D.module.css";

export default function HeroMobile3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeBadge, setActiveBadge] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 4.8;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 3. Central 3D Tech Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Icosahedron Wireframe
    const icoGeometry = new THREE.IcosahedronGeometry(1.2, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x800000,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    coreGroup.add(icosahedron);

    // Outer Octahedron Ring Cage
    const octaGeometry = new THREE.OctahedronGeometry(1.6, 1);
    const octaMaterial = new THREE.MeshBasicMaterial({
      color: 0xff4d4d,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    coreGroup.add(octahedron);

    // Orbital Ring 1
    const torusGeometry1 = new THREE.TorusGeometry(1.9, 0.015, 16, 100);
    const torusMaterial1 = new THREE.MeshBasicMaterial({
      color: 0xffa500,
      transparent: true,
      opacity: 0.5,
    });
    const torus1 = new THREE.Mesh(torusGeometry1, torusMaterial1);
    torus1.rotation.x = Math.PI / 3;
    coreGroup.add(torus1);

    // Orbital Ring 2
    const torusGeometry2 = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
    const torusMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x800000,
      transparent: true,
      opacity: 0.6,
    });
    const torus2 = new THREE.Mesh(torusGeometry2, torusMaterial2);
    torus2.rotation.y = Math.PI / 4;
    coreGroup.add(torus2);

    // Surrounding Particle Constellation
    const particleCount = 90;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 1.8 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xff7777,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // 4. Touch & Drag Inertia Interaction
    let isTouching = false;
    let previousTouchX = 0;
    let previousTouchY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isTouching = true;
        previousTouchX = e.touches[0].clientX;
        previousTouchY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isTouching || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousTouchX;
      const deltaY = e.touches[0].clientY - previousTouchY;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;

      previousTouchX = e.touches[0].clientX;
      previousTouchY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isTouching = false;
    };

    const containerEl = container;
    containerEl.addEventListener("touchstart", onTouchStart, { passive: true });
    containerEl.addEventListener("touchmove", onTouchMove, { passive: true });
    containerEl.addEventListener("touchend", onTouchEnd, { passive: true });

    // 5. High Performance Animation Loop (Using performance.now() without deprecated Clock)
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Continuous autonomous rotation
      coreGroup.rotation.y += 0.007;
      coreGroup.rotation.x += 0.003;

      // Smooth touch interpolation
      coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.1;
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.1;

      // Pulse effects
      const scale = 1 + Math.sin(elapsedTime * 2) * 0.04;
      icosahedron.scale.set(scale, scale, scale);
      octahedron.rotation.z += 0.005;
      torus1.rotation.z += 0.01;
      torus2.rotation.z -= 0.008;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      containerEl.removeEventListener("touchstart", onTouchStart);
      containerEl.removeEventListener("touchmove", onTouchMove);
      containerEl.removeEventListener("touchend", onTouchEnd);
      renderer.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      octaGeometry.dispose();
      octaMaterial.dispose();
      torusGeometry1.dispose();
      torusMaterial1.dispose();
      torusGeometry2.dispose();
      torusMaterial2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  // Cycling badge highlight for foreign buyers
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBadge((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.mobile3dContainer} ref={containerRef}>
      {/* Dynamic 3D WebGL Canvas */}
      <canvas ref={canvasRef} className={styles.webglCanvas} />

      {/* Floating International Conversion Badges */}
      <div className={`${styles.floatingBadge} ${styles.badgeGlobal} ${activeBadge === 0 ? styles.badgeActive : ""}`}>
        <div className={styles.badgeIconBox}>
          <Globe2 size={16} />
        </div>
        <div className={styles.badgeContent}>
          <span className={styles.badgeTitle}>Global Scale</span>
          <span className={styles.badgeSub}>US • UK • IN • UAE</span>
        </div>
      </div>

      <div className={`${styles.floatingBadge} ${styles.badgeGmv} ${activeBadge === 1 ? styles.badgeActive : ""}`}>
        <div className={styles.badgeIconBox}>
          <Zap size={16} />
        </div>
        <div className={styles.badgeContent}>
          <span className={styles.badgeTitle}>Full-Stack Scale</span>
          <span className={styles.badgeSub}>Amazon • Shopify • D2C</span>
        </div>
      </div>

      <div className={`${styles.floatingBadge} ${styles.badgeRoas} ${activeBadge === 2 ? styles.badgeActive : ""}`}>
        <div className={styles.badgeIconBox}>
          <TrendingUp size={16} />
        </div>
        <div className={styles.badgeContent}>
          <span className={styles.badgeTitle}>Performance Growth</span>
          <span className={styles.badgeSub}>Engineered for Scale</span>
        </div>
      </div>
    </div>
  );
}
