"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
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
  HeartHandshake,
  Loader2,
  Inbox
} from "lucide-react";
import styles from "./careers.module.css";
import { JobRole } from "@/lib/supabase";

export default function CareersPage() {
  const [jobs, setJobs] = useState<JobRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeDepartment, setActiveDepartment] = useState("All Openings");
  const [selectedRole, setSelectedRole] = useState<{ id?: string; title: string; department?: string; location?: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    experience: "3-5 years",
    note: ""
  });

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/careers/jobs");
      const data = await res.json();
      if (res.ok && Array.isArray(data.jobs)) {
        setJobs(data.jobs);
      } else {
        setJobs([]);
      }
    } catch (err) {
      console.error("Failed to load jobs:", err);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const departments = useMemo(() => {
    const set = new Set<string>();
    jobs.forEach((job) => {
      if (job.department) set.add(job.department);
    });
    return ["All Openings", ...Array.from(set)];
  }, [jobs]);

  const filteredRoles = useMemo(() => {
    if (activeDepartment === "All Openings") return jobs;
    return jobs.filter((job) => job.department === activeDepartment);
  }, [jobs, activeDepartment]);

  const handleApplyClick = (role: { id?: string; title: string; department?: string; location?: string }) => {
    setSelectedRole(role);
    setSubmitted(false);
    setErrorMsg(null);
  };

  const handleGeneralPitch = () => {
    setSelectedRole({
      id: undefined,
      title: "Speculative / General Application",
      department: "Growth & Creative Collective",
      location: "Remote",
    });
    setSubmitted(false);
    setErrorMsg(null);
  };

  const handleModalClose = () => {
    setSelectedRole(null);
    setSubmitted(false);
    setErrorMsg(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      portfolio: "",
      experience: "3-5 years",
      note: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) return;
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          job_id: selectedRole.id || null,
          job_title: selectedRole.title,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          portfolio: formData.portfolio,
          experience: formData.experience,
          note: formData.note,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Application submission failed:", err);
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

          {/* Department Filter Tabs (if multiple departments exist) */}
          {departments.length > 1 && (
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
          )}

          {/* Job Openings Grid or Loading / Empty States */}
          {loading ? (
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "60px 20px",
              gap: "16px",
              color: "var(--text-muted)"
            }}>
              <Loader2 size={32} className="animate-spin" style={{ animation: "spin 1s linear infinite" }} />
              <p>Fetching active roles...</p>
            </div>
          ) : filteredRoles.length > 0 ? (
            <div className={styles.jobsList}>
              {filteredRoles.map((role) => (
                <article key={role.id} className={styles.jobCard}>
                  <div className={styles.jobMain}>
                    <div className={styles.jobHeader}>
                      <div className={styles.jobBadgeGroup}>
                        <span className={styles.deptBadge}>{role.department}</span>
                        {role.is_hot && <span className={styles.hotBadge}>🔥 Priority Role</span>}
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

                    {role.skills && role.skills.length > 0 && (
                      <div className={styles.skillsChips}>
                        {role.skills.map((skill, idx) => (
                          <span key={idx} className={styles.skillChip}>{skill}</span>
                        ))}
                      </div>
                    )}
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
          ) : (
            <div style={{
              background: "var(--card-bg, rgba(255, 255, 255, 0.03))",
              border: "1px dashed var(--border-color, rgba(255, 255, 255, 0.12))",
              borderRadius: "20px",
              padding: "48px 24px",
              textAlign: "center",
              maxWidth: "680px",
              margin: "0 auto 40px",
              backdropFilter: "blur(12px)"
            }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(56, 189, 248, 0.1)",
                color: "#38bdf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px"
              }}>
                <Inbox size={26} />
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "8px" }}>
                No active openings in this category right now
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px" }}>
                We frequently expand our team and welcome proactive candidates. If you have exceptional skills in eCommerce, 3D CGI, Web Dev, or Performance Ads, send us your pitch!
              </p>
              <button
                onClick={handleGeneralPitch}
                className={styles.applyBtn}
                style={{ margin: "0 auto" }}
              >
                <span>Submit General Application</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* Speculative Pitch Box */}
          <div className={styles.speculativeCard}>
            <div className={styles.speculativeContent}>
              <h3 className={styles.speculativeTitle}>Don't see your exact role?</h3>
              <p className={styles.speculativeText}>
                We are always seeking exceptional talent in growth marketing, 3D design, motion graphics, and full-stack engineering. Pitch us directly.
              </p>
            </div>
            <button 
              onClick={handleGeneralPitch}
              className={styles.pitchBtn}
            >
              <span>Submit Your Pitch ↗</span>
            </button>
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
                    <span>{selectedRole.department || "General Application"}</span>
                    <span>•</span>
                    <span>{selectedRole.location || "Remote"}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className={styles.applicationForm}>
                  {errorMsg && (
                    <div style={{
                      padding: "10px 14px",
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      borderRadius: "8px",
                      color: "#ef4444",
                      fontSize: "0.85rem",
                    }}>
                      ⚠️ {errorMsg}
                    </div>
                  )}

                  <div className={styles.inputGroup}>
                    <label htmlFor="app-name" className={styles.label}>Your Full Name *</label>
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
                      <label htmlFor="app-email" className={styles.label}>Email Address *</label>
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
                      <option value="Entry Level / Intern">Entry Level / Intern</option>
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
                        placeholder="Tell us about your biggest win or why you'd excel with us..."
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
