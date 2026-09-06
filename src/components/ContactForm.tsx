"use client";

import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, Sparkles, Shield, Clock, Award } from "lucide-react";
import styles from "./ContactForm.module.css";

const servicesList = [
  "E-Commerce",
  "Amazon Scaling",
  "Flipkart Scaling",
  "Web Development",
  "3D CGI & Creatives",
  "Digital Marketing & PPC",
  "Full Account Management",
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("E-Commerce");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: selectedService,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit form. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      {submitted ? (
        <div className={styles.successState}>
          <div className={styles.successIconWrapper}>
            <CheckCircle size={48} className={styles.successIcon} />
          </div>
          <h3 className={styles.successTitle}>Growth Request Received!</h3>
          <p className={styles.successDesc}>
            Thank you, <strong>{formData.name || "partner"}</strong>. One of our senior strategists is already reviewing your brand details and will reach out within 24 hours with a custom strategy plan.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", phone: "", message: "" });
            }}
            className={styles.resetBtn}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <>
          <div className={styles.formHeader}>
            <div className={styles.badge}>
              <Sparkles size={14} className={styles.badgeIcon} />
              <span>Direct Strategist Access</span>
            </div>
            <h3 className={styles.title}>Let's Build Your Growth Engine</h3>
            <p className={styles.subtitle}>
              Tell us about your brand. We'll evaluate your account and present a customized scaling roadmap within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Name */}
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Your Name</label>
              <div className={styles.inputWrapper}>
                <User size={18} className={styles.fieldIcon} />
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                  placeholder="Your Name"
                />
              </div>
            </div>

            {/* Email & Phone Grid */}
            <div className={styles.rowGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Work Email</label>
                <div className={styles.inputWrapper}>
                  <Mail size={18} className={styles.fieldIcon} />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.input}
                    placeholder="email@gmail.com"
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Phone / WhatsApp</label>
                <div className={styles.inputWrapper}>
                  <Phone size={18} className={styles.fieldIcon} />
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={styles.input}
                    placeholder="+91 87977 87778"
                  />
                </div>
              </div>
            </div>

            {/* Service Selector Chips */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>Primary Focus Area</label>
              <div className={styles.chipsGrid}>
                {servicesList.map((service) => {
                  const isSelected = selectedService === service;
                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`${styles.chip} ${isSelected ? styles.chipSelected : ""}`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Project Details / Current Challenges</label>
              <div className={styles.inputWrapper}>
                <MessageSquare size={18} className={`${styles.fieldIcon} ${styles.textareaIcon}`} />
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.textarea}
                  placeholder="Tell us about your brand, current monthly revenue, and growth goals..."
                />
              </div>
            </div>

            {/* Error Message Display */}
            {errorMsg && (
              <div style={{
                padding: "12px 16px",
                background: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "10px",
                color: "#ef4444",
                fontSize: "0.88rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <span>⚠️ {errorMsg}</span>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? (
                <span className={styles.loadingSpinner} />
              ) : (
                <>
                  <span>Book Free Consultation</span>
                  <Send size={18} />
                </>
              )}
            </button>

            {/* Trust Indicators */}
            <div className={styles.trustRow}>
              <div className={`${styles.trustItem} ${styles.trustItemEnlarged}`}>
                <Shield size={16} className={styles.ndaIcon} />
                <span className={styles.ndaText}><strong>100% NDA Protected</strong></span>
              </div>
              <div className={styles.trustItem}>
                <Clock size={14} />
                <span>24hr Fast Turnaround</span>
              </div>
              <div className={styles.trustItem}>
                <Award size={14} />
                <span>No Hard Selling</span>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
