"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ShoppingBag, 
  TrendingUp, 
  Layers, 
  Zap, 
  Video, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MessageCircle,
  HelpCircle
} from "lucide-react";
import styles from "./services.module.css";

type ServiceSuite = {
  id: string;
  category: string;
  icon: typeof ShoppingBag;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  mainLink: string;
  highlights: string[];
  subServices: { title: string; link: string }[];
};

const serviceSuites: ServiceSuite[] = [
  {
    id: "ecommerce",
    category: "ecommerce",
    icon: ShoppingBag,
    badge: "Amazon & Flipkart Scale",
    title: "E-Commerce Acceleration",
    tagline: "Dominate search rankings and scale revenue on Amazon & Flipkart.",
    description: "End-to-end marketplace management fusing algorithmic ranking velocity, catalog architecture, aggressive PPC bidding, and dispute reinstatement.",
    mainLink: "/services/ecommerce",
    highlights: [
      "Targeted Amazon & Flipkart PPC bid management",
      "Listing indexation & keyword SEO rank velocity",
      "A+ Enhanced Brand Content & Storefront Design",
      "Account suspension recovery & compliance protection"
    ],
    subServices: [
      { title: "Amazon Account Management", link: "/services/ecommerce/amazon/account-management" },
      { title: "Amazon PPC Advertising", link: "/services/ecommerce/amazon/advertising" },
      { title: "Amazon Reinstatement", link: "/services/ecommerce/amazon/account-reinstatement" },
      { title: "Amazon Launch & Setup", link: "/services/ecommerce/amazon/account-launch-and-registration" },
      { title: "Amazon A+ Content (EBC)", link: "/services/ecommerce/amazon/a-plus" },
      { title: "Amazon Storefront Creation", link: "/services/ecommerce/amazon/storefront-creation" },
      { title: "Flipkart Account Scaling", link: "/services/ecommerce/flipkart/account-management" },
      { title: "Flipkart Advertising", link: "/services/ecommerce/flipkart/advertising" },
      { title: "Flipkart RPD Optimization", link: "/services/ecommerce/flipkart/rpd" }
    ]
  },
  {
    id: "marketplace-optimization",
    category: "optimization",
    icon: TrendingUp,
    badge: "CRO & Algorithmic Ranking",
    title: "Marketplace Optimization",
    tagline: "Turn casual scrollers into high-converting buyers with CRO.",
    description: "Systematic conversion rate optimization, listing SEO architecture, scientific split testing, and reputation protection across every major portal.",
    mainLink: "/services/marketplace-optimization",
    highlights: [
      "Multi-portal keyword ranking & search indexing",
      "Main image & title A/B split-testing framework",
      "High-converting A+ Content & storytelling modules",
      "Proactive review harvesting & review management"
    ],
    subServices: [
      { title: "Listing SEO Optimization", link: "/services/marketplace-optimization/listing-seo" },
      { title: "A/B Testing & CRO", link: "/services/marketplace-optimization/ab-testing-cro" },
      { title: "A+ Content Architecture", link: "/services/marketplace-optimization/a-plus-content" },
      { title: "Review & Reputation Strategy", link: "/services/marketplace-optimization/review-management" }
    ]
  },
  {
    id: "web-dev",
    category: "webdev",
    icon: Layers,
    badge: "Custom DTC Architecture",
    title: "D2C Storebuilding & Web Dev",
    tagline: "Lightning-fast, high-converting digital storefronts built to scale.",
    description: "Custom Shopify Plus, WooCommerce, and bespoke modern web applications tailored for maximum average order value and frictionless checkout.",
    mainLink: "/services/web-dev",
    highlights: [
      "Custom Shopify Plus theme & app integration",
      "High-scale WooCommerce & WordPress builds",
      "Frictionless UI/UX mobile-first checkout flows",
      "WIX customized boutique storefronts"
    ],
    subServices: [
      { title: "Shopify Storefronts", link: "/services/web-dev/shopify" },
      { title: "WordPress / WooCommerce", link: "/services/web-dev/wordpress" },
      { title: "Custom UI/UX Architecture", link: "/services/web-dev/ui-ux" },
      { title: "WIX Custom Solutions", link: "/services/web-dev/wix" }
    ]
  },
  {
    id: "digital-marketing",
    category: "marketing",
    icon: Zap,
    badge: "Omnichannel Acquisition",
    title: "Digital Marketing & PPC",
    tagline: "Profitable paid customer acquisition and compounding organic growth.",
    description: "Precision-targeted performance marketing across Meta Ads, Google Ads, Search Engine Optimization, and high-retention email marketing flows.",
    mainLink: "/services/digital-marketing",
    highlights: [
      "High-ROAS Meta (Instagram & Facebook) ad scaling",
      "Google Search, Performance Max & Shopping PPC",
      "Full-funnel technical & content SEO rankings",
      "Automated Klaviyo & email retention sequences"
    ],
    subServices: [
      { title: "Meta Ads (Instagram & Facebook)", link: "/services/digital-marketing/meta-ads" },
      { title: "Google Ads & PMax", link: "/services/digital-marketing/google-ads" },
      { title: "Search Engine Optimization (SEO)", link: "/services/digital-marketing/seo" },
      { title: "Email Marketing & Retention", link: "/services/digital-marketing/email-marketing" }
    ]
  },
  {
    id: "content",
    category: "content",
    icon: Video,
    badge: "3D CGI & Visual Mastery",
    title: "3D CGI & Content Creation",
    tagline: "Hyper-realistic visual assets that captivate and convert.",
    description: "World-class 3D CGI product renders, cinematic motion video ads, and cohesive luxury brand identities that make your product impossible to ignore.",
    mainLink: "/services/content",
    highlights: [
      "Photorealistic 3D product CAD modeling & renders",
      "High-impact motion design & social video ads",
      "Complete visual identity, guidelines & logos",
      "Feature-highlight video demonstrations"
    ],
    subServices: [
      { title: "3D Modeling & CGI", link: "/services/content/3d" },
      { title: "Video Production & Motion", link: "/services/content/video" },
      { title: "Brand Identity & Strategy", link: "/services/content/branding" },
      { title: "Product Specific Video Demos", link: "/services/content/product-videos" }
    ]
  }
];

const categories = [
  { id: "all", label: "All Services" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "optimization", label: "Marketplace CRO" },
  { id: "webdev", label: "D2C Web Development" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "content", label: "3D CGI & Content" },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSuites = selectedCategory === "all"
    ? serviceSuites
    : serviceSuites.filter((suite) => suite.category === selectedCategory);

  return (
    <main className={styles.main}>
      {/* Hero Header Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.topPill}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>Full-Stack Growth Architecture</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className="editorial-outline">ENGINEERED FOR</span> <br />
            <span className="editorial-solid">COMPOUNDING SCALE.</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Whether you need algorithmic Amazon dominance, bespoke D2C web development, or photorealistic 3D CGI creatives, explore our full suite of tailored growth services below.
          </p>

          {/* Interactive Filter Tabs */}
          <div className={styles.filterTabsWrapper}>
            <div className={styles.filterTabs}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`${styles.filterBtn} ${
                    selectedCategory === cat.id ? styles.filterBtnActive : ""
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Suite Grid */}
      <section className={styles.servicesGridSection}>
        <div className={styles.container}>
          <div className={styles.suitesList}>
            {filteredSuites.map((suite, index) => {
              const IconComponent = suite.icon;
              return (
                <article key={suite.id} className={styles.suiteCard}>
                  {/* Left Column: Suite Overview */}
                  <div className={styles.suiteMain}>
                    <div className={styles.suiteHeader}>
                      <div className={styles.iconCircle}>
                        <IconComponent size={24} />
                      </div>
                      <div className={styles.badge}>{suite.badge}</div>
                    </div>

                    <h2 className={styles.suiteTitle}>{suite.title}</h2>
                    <p className={styles.suiteTagline}>{suite.tagline}</p>
                    <p className={styles.suiteDescription}>{suite.description}</p>

                    {/* Highlights List */}
                    <div className={styles.highlightsBox}>
                      <h3 className={styles.highlightsHeader}>Key Deliverables</h3>
                      <div className={styles.highlightsGrid}>
                        {suite.highlights.map((item, i) => (
                          <div key={i} className={styles.highlightItem}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Sub-Services Quick Links & CTAs */}
                  <div className={styles.suiteSidebar}>
                    <div className={styles.subServicesContainer}>
                      <h3 className={styles.subServicesTitle}>Included Sub-Services</h3>
                      <div className={styles.chipsGrid}>
                        {suite.subServices.map((sub, idx) => (
                          <Link key={idx} href={sub.link} className={styles.subChip}>
                            <span>{sub.title}</span>
                            <ArrowUpRight size={13} className={styles.chipArrow} />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className={styles.cardActions}>
                      <Link href={suite.mainLink} className={styles.overviewBtn}>
                        <span>Explore Full Suite</span>
                        <ArrowUpRight size={16} />
                      </Link>
                      <Link href="/contact" className={styles.consultBtn}>
                        <span>Book Consultation</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Methodology Section */}
      <section className={styles.methodologySection}>
        <div className={styles.container}>
          <div className={styles.methodologyHeader}>
            <span className={styles.sectionPill}>The E Zennith Advantage</span>
            <h2 className={styles.methodologyTitle}>Why Leading Brands Partner With Us</h2>
          </div>

          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <div className={styles.trustIconCircle}>
                <ShieldCheck size={24} />
              </div>
              <h3 className={styles.trustCardTitle}>100% NDA Protected</h3>
              <p className={styles.trustCardText}>
                Your brand metrics, product blueprints, and sales data remain strictly confidential under legally binding NDAs.
              </p>
            </div>

            <div className={styles.trustCard}>
              <div className={styles.trustIconCircle}>
                <Clock size={24} />
              </div>
              <h3 className={styles.trustCardTitle}>24hr Fast Turnaround</h3>
              <p className={styles.trustCardText}>
                No weeks of endless waiting. Get rapid audit evaluations and tactical sprint deployment within 24–48 hours.
              </p>
            </div>

            <div className={styles.trustCard}>
              <div className={styles.trustIconCircle}>
                <Zap size={24} />
              </div>
              <h3 className={styles.trustCardTitle}>Data & CGI Fusion</h3>
              <p className={styles.trustCardText}>
                We combine deep algorithmic search data with hyper-realistic 3D visual storytelling for maximum conversion lift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer-Friendly Help / Bottom Consultation Callout */}
      <section className={styles.bottomHelpSection}>
        <div className={styles.container}>
          <div className={styles.helpCard}>
            <div className={styles.helpContent}>
              <div className={styles.helpBadge}>
                <HelpCircle size={15} />
                <span>Need Personalized Guidance?</span>
              </div>
              <h2 className={styles.helpTitle}>Not Sure Which Service Fits Your Stage?</h2>
              <p className={styles.helpText}>
                Tell our senior strategists where your brand is today and what your 90-day targets look like. We’ll design a custom execution roadmap for your unique category.
              </p>
            </div>

            <div className={styles.helpActions}>
              <Link href="/contact" className={styles.primaryHelpBtn}>
                <span>Get Free Consultation</span>
                <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/918797787778?text=Hi%20E%20Zennith%20team%2C%20I%20need%20guidance%20on%20choosing%20the%20right%20service%20for%20my%20brand."
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.whatsappHelpBtn}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
