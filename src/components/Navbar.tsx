"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X, ChevronRight, Sun, Moon, ArrowUpRight, ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./Navbar.module.css";

// --- Types ---
type ServiceFeature = {
  title: string;
  link: string;
};

type ServicePlatform = {
  title: string;
  link?: string;
  items?: ServiceFeature[];
};

type ServiceCategory = {
  title: string;
  link?: string;
  subItems?: ServicePlatform[];
};

type MenuItem = {
  title: string;
  link?: string;
  subItems?: ServiceCategory[];
};

// --- Data ---
const menuItems: MenuItem[] = [
  { title: "Home", link: "/" },
  {
    title: "Services",
    link: "/services",
    subItems: [
      {
        title: "E-commerce",
        subItems: [
          {
            title: "Amazon",
            link: "/services/ecommerce/amazon",
            items: [
              { title: "Account Management", link: "/services/ecommerce/amazon/account-management" },
              { title: "Advertising (PPC)", link: "/services/ecommerce/amazon/advertising" },
              { title: "Account Reinstatement", link: "/services/ecommerce/amazon/account-reinstatement" },
              { title: "Launch & Registration", link: "/services/ecommerce/amazon/account-launch-and-registration" },
              { title: "A+ Enhanced Brand Content", link: "/services/ecommerce/amazon/a-plus" },
              { title: "Storefront Creation", link: "/services/ecommerce/amazon/storefront-creation" },
              { title: "Multi-Portal Cataloging", link: "/services/ecommerce/amazon/cataloging" },
              { title: "Brand & Product Videos", link: "/services/ecommerce/amazon/brand-videos" },
              { title: "Product Listing Optimization", link: "/services/ecommerce/amazon/product-listing" },
            ],
          },
          {
            title: "Flipkart",
            link: "/services/ecommerce/flipkart",
            items: [
              { title: "Flipkart Account Management", link: "/services/ecommerce/flipkart/account-management" },
              { title: "Flipkart Advertising", link: "/services/ecommerce/flipkart/advertising" },
              { title: "Flipkart RPD Optimization", link: "/services/ecommerce/flipkart/rpd" },
              { title: "Account Launch & Onboarding", link: "/services/ecommerce/flipkart/account-launch" },
            ],
          },
        ],
      },
      {
        title: "Marketplace Optimization",
        link: "/services/marketplace-optimization",
        subItems: [
          { title: "Listing SEO Optimization", link: "/services/marketplace-optimization/listing-seo" },
          { title: "A/B Testing & CRO", link: "/services/marketplace-optimization/ab-testing-cro" },
          { title: "A+ Content (EBC)", link: "/services/marketplace-optimization/a-plus-content" },
          { title: "Review Strategy & Management", link: "/services/marketplace-optimization/review-management" },
        ],
      },
      {
        title: "Web Development",
        subItems: [
          { title: "WordPress / WooCommerce", link: "/services/web-dev/wordpress" },
          { title: "Shopify Storefront", link: "/services/web-dev/shopify" },
          { title: "Custom UI/UX Architecture", link: "/services/web-dev/ui-ux" },
          { title: "WIX Customization", link: "/services/web-dev/wix" },
        ],
      },
      {
        title: "Digital Marketing",
        link: "/services/digital-marketing",
        subItems: [
          { title: "Meta Ads (FB & IG)", link: "/services/digital-marketing/meta-ads" },
          { title: "Google Ads & PPC", link: "/services/digital-marketing/google-ads" },
          { title: "Search Engine Optimization (SEO)", link: "/services/digital-marketing/seo" },
          { title: "Email Marketing & Retention", link: "/services/digital-marketing/email-marketing" },
        ],
      },
      {
        title: "Content Creation",
        subItems: [
          { title: "Brand Identity & Strategy", link: "/services/content/branding" },
          { title: "3D Modeling & CGI", link: "/services/content/3d" },
          { title: "Video Production & Motion", link: "/services/content/video" },
          { title: "Product Specific Video Demos", link: "/services/content/product-videos" },
        ],
      },
    ],
  },
  { title: "What We Do?", link: "/#what-we-do" },
  { title: "Portfolio", link: "/#portfolio" },
  { title: "Who We Are?", link: "/about" },
];

export default function Navbar() {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<number | null>(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>("ecommerce");
  
  const { theme, setTheme } = useTheme();

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Guaranteed flawless mobile navigation handler
  const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.body.style.overflow = "unset";
    router.push(href);
  };

  return (
    <>
      <motion.nav 
        className={styles.navbar}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.navContainer}>
          {/* Brand Logo */}
          <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="EZennith" className={styles.logoLight} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo_dark.png" alt="EZennith" className={styles.logoDark} />
          </Link>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={styles.menuItem}
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubDropdown(null);
                  setActiveNestedDropdown(null);
                }}
              >
                <div>
                  {item.link && item.subItems ? (
                    <Link href={item.link} className={styles.menuLink}>
                      {item.title} <ChevronDown size={14} />
                    </Link>
                  ) : item.link ? (
                    <Link href={item.link} className={styles.menuLink}>
                      {item.title}
                    </Link>
                  ) : (
                    <span className={styles.menuLink}>
                      {item.title} <ChevronDown size={14} />
                    </span>
                  )}
                </div>

                {/* L1: Services Dropdown */}
                {item.subItems && activeDropdown === index && (
                  <motion.div
                    className={styles.dropdown}
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.subItems.map((sub, subIndex) => (
                      <div
                        key={subIndex}
                        className={styles.subMenuItemWrapper}
                        onMouseEnter={() => setActiveSubDropdown(subIndex)}
                        onMouseLeave={() => {
                          setActiveSubDropdown(null);
                          setActiveNestedDropdown(null);
                        }}
                      >
                        {sub.link && !sub.subItems ? (
                          <Link href={sub.link} className={styles.dropdownItem}>
                            {sub.title}
                          </Link>
                        ) : sub.link && sub.subItems ? (
                          <div className={styles.dropdownItemWithLink}>
                            <Link href={sub.link} className={styles.dropdownItem}>
                              {sub.title}
                            </Link>
                            <ChevronRight size={14} className={styles.navRightArrow} />
                          </div>
                        ) : (
                          <span className={styles.dropdownItem}>
                            {sub.title} <ChevronRight size={14} />
                          </span>
                        )}

                        {/* L2: Platform Dropdown */}
                        {sub.subItems && activeSubDropdown === subIndex && (
                          <motion.div
                            className={styles.subDropdown}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {sub.subItems.map((nested, nIndex) => (
                              <div
                                key={nIndex}
                                className={styles.subMenuItemWrapper}
                                onMouseEnter={() => setActiveNestedDropdown(nIndex)}
                                onMouseLeave={() => setActiveNestedDropdown(null)}
                              >
                                {nested.link ? (
                                  <Link href={nested.link} className={styles.dropdownItem}>
                                    {nested.title}
                                    {nested.items && <ChevronRight size={14} />}
                                  </Link>
                                ) : (
                                  <span className={styles.dropdownItem}>
                                    {nested.title} {nested.items && <ChevronRight size={14} />}
                                  </span>
                                )}

                                {/* L3: Features Dropdown */}
                                {nested.items && activeNestedDropdown === nIndex && (
                                  <motion.div
                                    className={styles.nestedDropdown}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    {nested.items.map((feature, fIndex) => (
                                      <Link key={fIndex} href={feature.link} className={styles.dropdownItem}>
                                        {feature.title}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className={styles.navActions}>
            <button 
              className={styles.themeToggle} 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle Theme"
            >
              <Sun className={styles.sunIcon} size={18} />
              <Moon className={styles.moonIcon} size={18} />
            </button>
            
            <Link href="/contact" className={styles.ctaButton}>
              <span>Book Consultation</span>
              <ArrowUpRight size={16} />
            </Link>

            {/* Mobile Toggle */}
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Luxury Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header */}
            <div className={styles.mobileDrawerHeader}>
              <Link href="/" className={styles.logo} onClick={(e) => handleMobileNav(e, "/")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="EZennith" className={styles.logoLight} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo_dark.png" alt="EZennith" className={styles.logoDark} />
              </Link>
              <button
                className={styles.mobileCloseBtn}
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.body.style.overflow = "unset";
                }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className={styles.mobileScrollBody}>
              <div className={styles.mobileLinksList}>
                <a
                  href="/"
                  className={styles.mobileNavLink}
                  onClick={(e) => handleMobileNav(e, "/")}
                >
                  Home
                </a>

                <a
                  href="/services"
                  className={styles.mobileNavLink}
                  onClick={(e) => handleMobileNav(e, "/services")}
                >
                  All Services (Hub) ↗
                </a>

                {/* E-Commerce Section */}
                <div className={styles.mobileAccordionSection}>
                  <div
                    className={styles.mobileAccordionHeader}
                    onClick={() =>
                      setMobileExpandedCat(
                        mobileExpandedCat === "ecommerce" ? null : "ecommerce"
                      )
                    }
                  >
                    <span>E-Commerce</span>
                    {mobileExpandedCat === "ecommerce" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>

                  {mobileExpandedCat === "ecommerce" && (
                    <div className={styles.mobileAccordionContent}>
                      <a href="/services/ecommerce" className={styles.mobileOverviewLink} onClick={(e) => handleMobileNav(e, "/services/ecommerce")}>
                        Overview Page ↗
                      </a>
                      <a href="/services/ecommerce/amazon" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/ecommerce/amazon")}>
                        Amazon Complete Suite
                      </a>
                      <a href="/services/ecommerce/amazon/advertising" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/ecommerce/amazon/advertising")}>
                        Amazon PPC Advertising
                      </a>
                      <a href="/services/ecommerce/flipkart" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/ecommerce/flipkart")}>
                        Flipkart Management
                      </a>
                    </div>
                  )}
                </div>

                {/* Marketplace Optimization Section */}
                <div className={styles.mobileAccordionSection}>
                  <div
                    className={styles.mobileAccordionHeader}
                    onClick={() =>
                      setMobileExpandedCat(
                        mobileExpandedCat === "optimization" ? null : "optimization"
                      )
                    }
                  >
                    <span>Marketplace Optimization</span>
                    {mobileExpandedCat === "optimization" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>

                  {mobileExpandedCat === "optimization" && (
                    <div className={styles.mobileAccordionContent}>
                      <a href="/services/marketplace-optimization" className={styles.mobileOverviewLink} onClick={(e) => handleMobileNav(e, "/services/marketplace-optimization")}>
                        Overview Page ↗
                      </a>
                      <a href="/services/marketplace-optimization/listing-seo" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/marketplace-optimization/listing-seo")}>
                        Listing SEO Optimization
                      </a>
                      <a href="/services/marketplace-optimization/ab-testing-cro" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/marketplace-optimization/ab-testing-cro")}>
                        A/B Testing & CRO
                      </a>
                      <a href="/services/marketplace-optimization/a-plus-content" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/marketplace-optimization/a-plus-content")}>
                        A+ Enhanced Content
                      </a>
                      <a href="/services/marketplace-optimization/review-management" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/marketplace-optimization/review-management")}>
                        Review Management
                      </a>
                    </div>
                  )}
                </div>

                {/* Web Development Section */}
                <div className={styles.mobileAccordionSection}>
                  <div
                    className={styles.mobileAccordionHeader}
                    onClick={() =>
                      setMobileExpandedCat(
                        mobileExpandedCat === "webdev" ? null : "webdev"
                      )
                    }
                  >
                    <span>Web Development</span>
                    {mobileExpandedCat === "webdev" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>

                  {mobileExpandedCat === "webdev" && (
                    <div className={styles.mobileAccordionContent}>
                      <a href="/services/web-dev" className={styles.mobileOverviewLink} onClick={(e) => handleMobileNav(e, "/services/web-dev")}>
                        Overview Page ↗
                      </a>
                      <a href="/services/web-dev/shopify" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/web-dev/shopify")}>
                        Shopify Storefronts
                      </a>
                      <a href="/services/web-dev/wordpress" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/web-dev/wordpress")}>
                        WordPress / WooCommerce
                      </a>
                      <a href="/services/web-dev/ui-ux" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/web-dev/ui-ux")}>
                        Custom UI/UX Architecture
                      </a>
                    </div>
                  )}
                </div>

                {/* Digital Marketing Section */}
                <div className={styles.mobileAccordionSection}>
                  <div
                    className={styles.mobileAccordionHeader}
                    onClick={() =>
                      setMobileExpandedCat(
                        mobileExpandedCat === "marketing" ? null : "marketing"
                      )
                    }
                  >
                    <span>Digital Marketing</span>
                    {mobileExpandedCat === "marketing" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>

                  {mobileExpandedCat === "marketing" && (
                    <div className={styles.mobileAccordionContent}>
                      <a href="/services/digital-marketing" className={styles.mobileOverviewLink} onClick={(e) => handleMobileNav(e, "/services/digital-marketing")}>
                        Overview Page ↗
                      </a>
                      <a href="/services/digital-marketing/meta-ads" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/digital-marketing/meta-ads")}>
                        Meta Ads (FB & IG)
                      </a>
                      <a href="/services/digital-marketing/google-ads" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/digital-marketing/google-ads")}>
                        Google Ads & PMax
                      </a>
                      <a href="/services/digital-marketing/seo" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/digital-marketing/seo")}>
                        Search Engine Optimization
                      </a>
                      <a href="/services/digital-marketing/email-marketing" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/digital-marketing/email-marketing")}>
                        Email Marketing & Retention
                      </a>
                    </div>
                  )}
                </div>

                {/* Content Creation Section */}
                <div className={styles.mobileAccordionSection}>
                  <div
                    className={styles.mobileAccordionHeader}
                    onClick={() =>
                      setMobileExpandedCat(
                        mobileExpandedCat === "content" ? null : "content"
                      )
                    }
                  >
                    <span>Content & 3D CGI</span>
                    {mobileExpandedCat === "content" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>

                  {mobileExpandedCat === "content" && (
                    <div className={styles.mobileAccordionContent}>
                      <a href="/services/content" className={styles.mobileOverviewLink} onClick={(e) => handleMobileNav(e, "/services/content")}>
                        Overview Page ↗
                      </a>
                      <a href="/services/content/3d" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/content/3d")}>
                        3D Modeling & CGI
                      </a>
                      <a href="/services/content/video" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/content/video")}>
                        Video Production & Motion
                      </a>
                      <a href="/services/content/branding" className={styles.mobileSubLink} onClick={(e) => handleMobileNav(e, "/services/content/branding")}>
                        Brand Identity & Strategy
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href="/#what-we-do"
                  className={styles.mobileNavLink}
                  onClick={(e) => handleMobileNav(e, "/#what-we-do")}
                >
                  What We Do?
                </a>

                <a
                  href="/#portfolio"
                  className={styles.mobileNavLink}
                  onClick={(e) => handleMobileNav(e, "/#portfolio")}
                >
                  Portfolio
                </a>

                <a
                  href="/about"
                  className={styles.mobileNavLink}
                  onClick={(e) => handleMobileNav(e, "/about")}
                >
                  Who We Are?
                </a>

                <a
                  href="/contact"
                  className={styles.mobileNavLink}
                  onClick={(e) => handleMobileNav(e, "/contact")}
                >
                  Contact
                </a>
              </div>

              {/* Mobile CTA */}
              <div className={styles.mobileFooterActions}>
                <a
                  href="/contact"
                  className={styles.mobileDrawerCta}
                  onClick={(e) => handleMobileNav(e, "/contact")}
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
