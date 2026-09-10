"use client";

import { useState } from "react";
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  Sparkles, 
  Shield, 
  Clock, 
  Award,
  ShoppingBag,
  Layers,
  Check,
  Zap,
  Globe,
  Monitor,
  TrendingUp,
  Megaphone,
  Palette,
  AlertCircle
} from "lucide-react";
import styles from "./ContactForm.module.css";

type ServiceOption = {
  id: string;
  title: string;
  tag: string;
  icon: typeof ShoppingBag;
};

type CategoryGroup = {
  id: string;
  name: string;
  badge: string;
  icon: typeof ShoppingBag;
  services: ServiceOption[];
};

const serviceGroups: CategoryGroup[] = [
  {
    id: "marketplaces",
    name: "Marketplaces & Scaling",
    badge: "7 Platforms",
    icon: ShoppingBag,
    services: [
      { id: "Amazon Growth & PPC", title: "Amazon Growth & PPC", tag: "PPC, DSP & Scaling", icon: ShoppingBag },
      { id: "Flipkart Marketplace", title: "Flipkart Marketplace", tag: "PLA & Account Mgmt", icon: Layers },
      { id: "Meesho Scaling", title: "Meesho Scaling", tag: "0% Comm. Bharat Scale", icon: Zap },
      { id: "Blinkit Quick-Commerce", title: "Blinkit Quick-Commerce", tag: "10-Min Dark Store Scale", icon: Clock },
      { id: "Myntra Fashion Scale", title: "Myntra Fashion Scale", tag: "Curated Store & EORS", icon: Sparkles },
      { id: "Etsy Global Marketplace", title: "Etsy Global Marketplace", tag: "Global Export & SEO", icon: Globe },
      { id: "Other Marketplaces Inquiry", title: "Other Marketplaces", tag: "Nykaa, Ajio, Tata CliQ", icon: Award },
    ]
  },
  {
    id: "solutions",
    name: "D2C, Ads & Creatives",
    badge: "5 Suites",
    icon: Monitor,
    services: [
      { id: "D2C Web Development & Shopify", title: "D2C Web & Shopify", tag: "Shopify Plus & Custom", icon: Monitor },
      { id: "Marketplace Optimization & CRO", title: "Marketplace CRO & SEO", tag: "A+ Content & A/B Tests", icon: TrendingUp },
      { id: "Digital Marketing & Paid Ads", title: "Digital Marketing (Meta/Google)", tag: "High-ROAS Campaigns", icon: Megaphone },
      { id: "3D CGI & Motion Creatives", title: "3D CGI & Motion Creatives", tag: "CAD Renders & Videos", icon: Palette },
      { id: "Full-Service Account Management", title: "Full-Service Revenue Engine", tag: "Omnichannel End-to-End", icon: Shield },
    ]
  }
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("marketplaces");
  const [selectedService, setSelectedService] = useState("Amazon Growth & PPC");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    message?: boolean;
  }>({});

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Real-time field validation logic
  const validateField = (field: "name" | "email" | "phone" | "message", value: string): string | undefined => {
    switch (field) {
      case "name": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your full name.";
        if (trimmed.length < 2) return "Name must be at least 2 characters.";
        if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) return "Please enter letters only for your name.";
        return undefined;
      }
      case "email": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your work email.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmed)) return "Please enter a valid email address (e.g. name@brand.com).";
        return undefined;
      }
      case "phone": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your contact phone / WhatsApp number.";
        const digits = trimmed.replace(/\D/g, "");
        if (digits.length < 10) return `Phone number is too short (${digits.length}/10 digits required).`;
        if (digits.length > 15) return "Phone number must not exceed 15 digits.";
        return undefined;
      }
      case "message": {
        const trimmed = value.trim();
        if (!trimmed) return "Please share a brief summary of your project or brand goals.";
        if (trimmed.length < 10) return `Please provide a bit more detail (${trimmed.length}/10 characters).`;
        return undefined;
      }
    }
  };

  const handleBlur = (field: "name" | "email" | "phone" | "message") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits, plus, hyphens, parentheses, and spaces
    const sanitized = e.target.value.replace(/[^0-9+\s\-()]/g, "");
    setFormData((prev) => ({ ...prev, phone: sanitized }));
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validateField("phone", sanitized) }));
    }
  };

  const handleTextChange = (field: "name" | "email" | "message", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validate all fields
    const nameErr = validateField("name", formData.name);
    const emailErr = validateField("email", formData.email);
    const phoneErr = validateField("phone", formData.phone);
    const msgErr = validateField("message", formData.message);

    const validationErrors = {
      name: nameErr,
      email: emailErr,
      phone: phoneErr,
      message: msgErr,
    };

    setTouched({ name: true, email: true, phone: true, message: true });
    setErrors(validationErrors);

    if (nameErr || emailErr || phoneErr || msgErr) {
      setErrorMsg("Please fix the highlighted errors before submitting.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: selectedService,
          message: formData.message.trim(),
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

  const currentGroup = serviceGroups.find(g => g.id === activeCategory) || serviceGroups[0];

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
              setErrors({});
              setTouched({});
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

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            {/* Name */}
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Your Name *</label>
              <div className={styles.inputWrapper}>
                <User size={18} className={styles.fieldIcon} />
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleTextChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ""}`}
                  placeholder="Your Name"
                />
              </div>
              {errors.name && touched.name && (
                <div className={styles.fieldErrorMessage}>
                  <AlertCircle size={13} />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            {/* Email & Phone Grid */}
            <div className={styles.rowGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Work Email *</label>
                <div className={styles.inputWrapper}>
                  <Mail size={18} className={styles.fieldIcon} />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleTextChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={`${styles.input} ${errors.email && touched.email ? styles.inputError : ""}`}
                    placeholder="email@gmail.com"
                  />
                </div>
                {errors.email && touched.email && (
                  <div className={styles.fieldErrorMessage}>
                    <AlertCircle size={13} />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Phone / WhatsApp *</label>
                <div className={styles.inputWrapper}>
                  <Phone size={18} className={styles.fieldIcon} />
                  <input
                    type="tel"
                    id="phone"
                    required
                    inputMode="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={() => handleBlur("phone")}
                    className={`${styles.input} ${errors.phone && touched.phone ? styles.inputError : ""}`}
                    placeholder="+91 87977 87778"
                  />
                </div>
                {errors.phone && touched.phone && (
                  <div className={styles.fieldErrorMessage}>
                    <AlertCircle size={13} />
                    <span>{errors.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Executive Service Selector Component */}
            <div className={styles.inputGroup}>
              <div className={styles.selectorHeader}>
                <label className={styles.label}>Primary Focus Area</label>
                <span className={styles.selectedIndicator}>
                  Selected: <strong>{selectedService}</strong>
                </span>
              </div>

              {/* Category Navigation Tabs */}
              <div className={styles.categoryTabs}>
                {serviceGroups.map((group) => {
                  const Icon = group.icon;
                  const isActive = activeCategory === group.id;
                  return (
                    <button
                      type="button"
                      key={group.id}
                      onClick={() => setActiveCategory(group.id)}
                      className={`${styles.catTab} ${isActive ? styles.catTabActive : ""}`}
                    >
                      <Icon size={15} />
                      <span>{group.name}</span>
                      <span className={styles.tabBadge}>{group.badge}</span>
                    </button>
                  );
                })}
              </div>

              {/* Luxury Segmented Service Cards Grid */}
              <div className={styles.serviceCardsGrid}>
                {currentGroup.services.map((service) => {
                  const Icon = service.icon;
                  const isSelected = selectedService === service.id;
                  return (
                    <button
                      type="button"
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`${styles.serviceCard} ${isSelected ? styles.serviceCardSelected : ""}`}
                    >
                      <div className={styles.serviceCardTop}>
                        <div className={styles.serviceCardIconWrap}>
                          <Icon size={16} />
                        </div>
                        <div className={styles.radioIndicator}>
                          {isSelected && <Check size={12} strokeWidth={3} />}
                        </div>
                      </div>
                      <div className={styles.serviceCardInfo}>
                        <span className={styles.serviceCardTitle}>{service.title}</span>
                        <span className={styles.serviceCardTag}>{service.tag}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Project Details / Current Challenges *</label>
              <div className={styles.inputWrapper}>
                <MessageSquare size={18} className={`${styles.fieldIcon} ${styles.textareaIcon}`} />
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleTextChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  className={`${styles.textarea} ${errors.message && touched.message ? styles.inputError : ""}`}
                  placeholder="Tell us about your brand, current monthly revenue, and growth goals..."
                />
              </div>
              {errors.message && touched.message && (
                <div className={styles.fieldErrorMessage}>
                  <AlertCircle size={13} />
                  <span>{errors.message}</span>
                </div>
              )}
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
                <AlertCircle size={16} />
                <span>{errorMsg}</span>
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
