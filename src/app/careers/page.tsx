"use client";

import { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle, 
  X, 
  Send, 
  User, 
  Mail, 
  Phone, 
  Link2, 
  FileText,
  Zap,
  Globe2,
  TrendingUp,
  HeartHandshake
} from "lucide-react";
import styles from "./careers.module.css";

type JobRole = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  isHot?: boolean;
};

const jobOpenings: JobRole[] = [
  {
    id: "amazon-ppc-strategist",
    title: "Senior Amazon PPC Strategist",
    department: "Marketplace & PPC",
    location: "Remote (India / Global)",
    type: "Full-Time",
    experience: "3+ Years",
    isHot: true,
    summary: "Architect and execute aggressive Amazon Sponsored Products, Brands, and Display campaigns that lower ACoS and drive profitable top-of-search market share.",
    responsibilities: [
      "Manage high-budget multi-account Amazon advertising portfolios.",
      "Build custom search query harvesting and negative targeting architectures.",
      "Deliver weekly performance analytics and profit-margin attribution reports.",
      "Collaborate directly with 3D creative teams to optimize CTR and CVR."
    ],
    skills: ["Amazon PPC", "Helium 10", "ACoS / TACoS Optimization", "Data Analytics", "Bulk File Ops"]
  },
  {
    id: "3d-motion-designer",
    title: "3D CGI & Motion Creative Designer",
    department: "3D & Motion",
    location: "Remote (Global)",
    type: "Full-Time",
    experience: "2+ Years",
    isHot: true,
    summary: "Create hyper-realistic 3D product renders, dynamic simulations, and cinematic social video ads for top global DTC & marketplace brands.",
    responsibilities: [
      "Model, texture, and light photorealistic 3D product CAD files (Blender / Cinema4D).",
      "Produce scroll-stopping 3D motion graphics and short-form video ads.",
      "Design high-converting A+ Enhanced Brand Content modules.",
      "Iterate rapidly based on creative performance and click-through data."
    ],
    skills: ["Blender / C4D", "After Effects", "Photorealistic Lighting", "Octane / Redshift", "A+ Content"]
  },
  {
    id: "fullstack-web-dev",
    title: "Full-Stack D2C Web Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    experience: "3+ Years",
    summary: "Build bespoke Shopify Plus storefronts, custom Next.js/React web applications, and high-converting checkout architectures with sub-second load times.",
    responsibilities: [
      "Develop custom Liquid/Shopify Plus themes and headless React frontends.",
      "Implement frictionless mobile-first UI/UX with smooth micro-animations.",
      "Optimize Core Web Vitals and technical SEO performance.",
      "Integrate Klaviyo, GA4, pixel tracking, and custom conversion scripts."
    ],
    skills: ["Next.js / React", "Shopify Plus / Liquid", "TypeScript", "Performance CRO", "Tailwind / CSS"]
  },
  {
    id: "performance-marketing-lead",
    title: "Performance Marketing Lead (Meta & Google)",
    department: "Marketing",
    location: "Remote (India)",
    type: "Full-Time",
    experience: "3+ Years",
    summary: "Lead multi-channel customer acquisition across Meta Ads, Google Ads (Search, Shopping, PMax), and retention email sequences for high-growth brands.",
    responsibilities: [
      "Scale high-budget ad spend on Meta and Google while maintaining target ROAS.",
      "Coordinate weekly creative testing cycles with the motion design team.",
      "Set up full-funnel attribution, custom event pixels, and CAPI.",
      "Architect retention email flows in Klaviyo to boost LTV."
    ],
    skills: ["Meta Ads Manager", "Google PMax & Search", "Klaviyo", "Attribution & CAPI", "ROAS Scaling"]
  },
  {
    id: "marketplace-seo-specialist",
    title: "Marketplace Listing & SEO Specialist",
    department: "Marketplace & PPC",
    location: "Remote (India)",
    type: "Full-Time",
    experience: "2+ Years",
    summary: "Dominate search rankings on Amazon, Flipkart, and Meesho through scientific keyword indexation, algorithmic cataloging, and competitor gap analysis.",
    responsibilities: [
      "Perform high-intent keyword research and backend search term mapping.",
      "Write persuasive, high-converting product titles, bullets, and descriptions.",
      "Execute A/B split tests on main images and price points.",
      "Coordinate catalog onboarding across Amazon, Flipkart, and Meesho."
    ],
    skills: ["Amazon SEO", "Flipkart RPD", "Listing Optimization", "Helium 10 / Jungle Scout", "Cataloging"]
  }
];

const departments = [
  "All Openings",
  "Marketplace & PPC",
  "3D & Motion",
  "Engineering",
  "Marketing"
];

export default function CareersPage() {
  const [activeDepartment, setActiveDepartment] = useState("All Openings");
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    experience: "3-5 years",
    note: ""
  });

  const filteredRoles = activeDepartment === "All Openings"
    ? jobOpenings
    : jobOpenings.filter((job) => job.department === activeDepartment);

  const handleApplyClick = (role: JobRole) => {
    setSelectedRole(role);
    setSubmitted(false);
  };

  const handleModalClose = () => {
    setSelectedRole(null);
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      portfolio: "",
      experience: "3-5 years",
      note: ""
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulated submission - Prepared to connect to Supabase backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <main className={styles.main}>
      {/* Hero Header */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.topPill}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>We're Hiring Top Talent</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className="editorial-outline">JOIN THE GROWTH</span> <br />
            <span className="editorial-solid">COLLECTIVE.</span>
          </h1>

          <p className={styles.heroSubtitle}>
            We’re assembling an elite group of algorithmic strategists, 3D CGI artists, and web engineers. Build compounding revenue engines for world-class brands with full autonomy.
          </p>

          {/* Quick Pillars */}
          <div className={styles.perksGrid}>
            <div className={styles.perkCard}>
              <div className={styles.perkIconBox}>
                <Globe2 size={20} />
              </div>
              <span className={styles.perkTitle}>100% Remote Flexibility</span>
              <span className={styles.perkDesc}>Work from anywhere in the world with high-trust teams.</span>
            </div>

            <div className={styles.perkCard}>
              <div className={styles.perkIconBox}>
                <Zap size={20} />
              </div>
              <span className={styles.perkTitle}>Cutting-Edge Tech Stack</span>
              <span className={styles.perkDesc}>3D CGI, proprietary bidding scripts, Next.js & Supabase.</span>
            </div>

            <div className={styles.perkCard}>
              <div className={styles.perkIconBox}>
                <TrendingUp size={20} />
              </div>
              <span className={styles.perkTitle}>Performance Bonuses</span>
              <span className={styles.perkDesc}>Direct profit-share and accelerated promotion tracks.</span>
            </div>

            <div className={styles.perkCard}>
              <div className={styles.perkIconBox}>
                <HeartHandshake size={20} />
              </div>
              <span className={styles.perkTitle}>Zero Bureaucracy</span>
              <span className={styles.perkDesc}>Direct impact on client brands without corporate red tape.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className={styles.rolesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionPill}>Open Positions</span>
            <h2 className={styles.sectionTitle}>Explore Current Opportunities</h2>
            <p className={styles.sectionSub}>Find the role that matches your superpowers.</p>
          </div>

          {/* Department Filter Tabs */}
          <div className={styles.filterTabsWrapper}>
            <div className={styles.filterTabs}>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDepartment(dept)}
                  className={`${styles.filterBtn} ${
                    activeDepartment === dept ? styles.filterBtnActive : ""
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Openings Grid */}
          <div className={styles.jobsList}>
            {filteredRoles.map((role) => (
              <article key={role.id} className={styles.jobCard}>
                <div className={styles.jobMain}>
                  <div className={styles.jobHeader}>
                    <div className={styles.jobBadgeGroup}>
                      <span className={styles.deptBadge}>{role.department}</span>
                      {role.isHot && <span className={styles.hotBadge}>🔥 Priority Role</span>}
                    </div>

                    <div className={styles.metaRow}>
                      <span className={styles.metaItem}>
                        <MapPin size={14} />
                        {role.location}
                      </span>
                      <span className={styles.metaItem}>
                        <Clock size={14} />
                        {role.type}
                      </span>
                      <span className={styles.metaItem}>
                        <Briefcase size={14} />
                        {role.experience}
                      </span>
                    </div>
                  </div>

                  <h3 className={styles.jobTitle}>{role.title}</h3>
                  <p className={styles.jobSummary}>{role.summary}</p>

                  <div className={styles.skillsChips}>
                    {role.skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillChip}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.jobActionCol}>
                  <button 
                    onClick={() => handleApplyClick(role)}
                    className={styles.applyBtn}
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Speculative Pitch Box */}
          <div className={styles.speculativeCard}>
            <div className={styles.speculativeContent}>
              <h3 className={styles.speculativeTitle}>Don't see your exact role?</h3>
              <p className={styles.speculativeText}>
                We are always seeking exceptional talent in growth marketing, 3D design, motion graphics, and full-stack engineering. Pitch us directly.
              </p>
            </div>
            <a 
              href="mailto:Team.ezennith@gmail.com?subject=Speculative%20Application%20-%20E%20Zennith" 
              className={styles.pitchBtn}
            >
              <span>Email Your Pitch ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Application Modal */}
      {selectedRole && (
        <div className={styles.modalOverlay} onClick={handleModalClose}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={handleModalClose} aria-label="Close modal">
              <X size={20} />
            </button>

            {submitted ? (
              <div className={styles.modalSuccess}>
                <div className={styles.successIconBox}>
                  <CheckCircle size={48} className={styles.checkIcon} />
                </div>
                <h3 className={styles.successTitle}>Application Received!</h3>
                <p className={styles.successText}>
                  Thank you, <strong>{formData.name || "candidate"}</strong>. Our talent team is reviewing your profile for the <strong>{selectedRole.title}</strong> role and will get back to you within 48 hours.
                </p>
                <button onClick={handleModalClose} className={styles.primaryBtn}>
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className={styles.modalHeader}>
                  <span className={styles.modalSubtitle}>Applying for:</span>
                  <h3 className={styles.modalRoleTitle}>{selectedRole.title}</h3>
                  <div className={styles.modalMeta}>
                    <span>{selectedRole.department}</span>
                    <span>•</span>
                    <span>{selectedRole.location}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className={styles.applicationForm}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="app-name" className={styles.label}>Your Full Name</label>
                    <div className={styles.inputWrapper}>
                      <User size={18} className={styles.fieldIcon} />
                      <input
                        type="text"
                        id="app-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Full Name"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="app-email" className={styles.label}>Email Address</label>
                      <div className={styles.inputWrapper}>
                        <Mail size={18} className={styles.fieldIcon} />
                        <input
                          type="email"
                          id="app-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@domain.com"
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="app-phone" className={styles.label}>Phone / WhatsApp</label>
                      <div className={styles.inputWrapper}>
                        <Phone size={18} className={styles.fieldIcon} />
                        <input
                          type="tel"
                          id="app-phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className={styles.input}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="app-portfolio" className={styles.label}>Portfolio / LinkedIn / GitHub URL</label>
                    <div className={styles.inputWrapper}>
                      <Link2 size={18} className={styles.fieldIcon} />
                      <input
                        type="url"
                        id="app-portfolio"
                        required
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://linkedin.com/in/yourname or portfolio.com"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="app-experience" className={styles.label}>Years of Relevant Experience</label>
                    <select
                      id="app-experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className={styles.select}
                    >
                      <option value="1-2 years">1–2 Years</option>
                      <option value="3-5 years">3–5 Years</option>
                      <option value="5+ years">5+ Years (Senior / Lead)</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="app-note" className={styles.label}>Why E Zennith? (Brief Note)</label>
                    <div className={styles.inputWrapper}>
                      <FileText size={18} className={`${styles.fieldIcon} ${styles.textareaIcon}`} />
                      <textarea
                        id="app-note"
                        rows={3}
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        placeholder="Tell us about your biggest win or why you'd excel in this role..."
                        className={styles.textarea}
                      />
                    </div>
                  </div>

                  <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                    {isSubmitting ? (
                      <span className={styles.spinner} />
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
