"use client";

import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Support" className={styles.whatsappFloatWrapper}>
      <a
        href="https://wa.me/918797787778?text=Hello%20E%20Zennith%20Team%2C%20I%20would%20like%20to%20discuss%20scaling%20my%20brand."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        aria-label="Chat on WhatsApp with E Zennith team"
      >
        <span className={styles.pulseRing} />
        <span className={styles.pulseRingSecond} />
        <div className={styles.iconContainer}>
          {/* Authentic Official WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="currentColor"
            className={styles.waIcon}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.979-.276-.1-.477-.15-.678.15-.2.301-.777.979-.953 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.636-.929-2.242-.244-.59-.493-.51-.678-.52l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.512c0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zm-5.452 7.378c-1.802 0-3.568-.485-5.118-1.405l-.367-.218-3.805.998 1.016-3.71-.239-.38a10.22 10.22 0 0 1-1.567-5.465c0-5.672 4.614-10.286 10.289-10.286 2.748 0 5.332 1.07 7.276 3.015a10.237 10.237 0 0 1 3.013 7.272c0 5.674-4.615 10.288-10.288 10.288zm8.74-17.585C18.423 1.83 15.485.75 12.02.75 5.795.75.75 5.796.75 12.022c0 1.99.52 3.931 1.506 5.643L.75 23.25l5.733-1.504a11.235 11.235 0 0 0 5.536 1.455h.005c6.223 0 11.269-5.046 11.27-11.272 0-3.016-1.174-5.852-3.305-7.983z" />
          </svg>
        </div>
        <div className={styles.tooltip}>
          <span className={styles.tooltipTitle}>Chat on WhatsApp</span>
          <span className={styles.tooltipSub}>Quick response within 10 mins</span>
        </div>
      </a>
    </aside>
  );
}
