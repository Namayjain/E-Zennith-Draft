"use client";

import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, Sparkles, Shield, Clock, Award } from "lucide-react";
import styles from "./ContactForm.module.css";

const servicesList = [
  "Amazon & E-Commerce",
  "Flipkart Scaling",
  "Web Development",
  "3D CGI & Creatives",
  "Digital Marketing & PPC",
  "Full Account Management",
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("Amazon & E-Commerce");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
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
            Thank you, <strong>{formData.name || "partner"}</strong>. One of our senior strategists is already reviewing your brand details and will reach out within 24 hours with a custom audit.
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
              Tell us about your brand. We'll audit your account and present a customized scaling roadmap within 24 hours.
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
                    placeholder="+91 98765 43210"
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

            {/* Submit Button */}
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? (
                <span className={styles.loadingSpinner} />
              ) : (
                <>
                  <span>Claim Your Free Growth Audit</span>
                  <Send size={18} />
                </>
              )}
            </button>

            {/* Trust Indicators */}
            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <Shield size={14} />
                <span>100% Confidential (NDA)</span>
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
