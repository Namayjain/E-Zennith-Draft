"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Users,
  Briefcase,
  UserCheck,
  Search,
  Download,
  Plus,
  Trash2,
  Edit,
  ExternalLink,
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  LogOut,
  Sparkles,
  Database,
  ArrowUpRight,
  Eye,
  X,
  Loader2,
  Calendar,
  Layers,
  Flame,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";
import styles from "./dashboard.module.css";
import { ContactSubmission, JobRole, JobApplication } from "@/lib/supabase";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"leads" | "jobs" | "applicants" | "db">("leads");
  const [isSupabaseOnline, setIsSupabaseOnline] = useState<boolean>(false);
  const [authChecking, setAuthChecking] = useState<boolean>(true);

  // Leads State
  const [leads, setLeads] = useState<ContactSubmission[]>([]);
  const [loadingLeads, setLoadingLeads] = useState<boolean>(false);
  const [leadSearch, setLeadSearch] = useState<string>("");
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>("all");
  const [leadServiceFilter, setLeadServiceFilter] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<ContactSubmission | null>(null);

  // Jobs State
  const [jobs, setJobs] = useState<JobRole[]>([]);
  const [loadingJobs, setLoadingJobs] = useState<boolean>(false);
  const [jobModalOpen, setJobModalOpen] = useState<boolean>(false);
  const [editingJob, setEditingJob] = useState<JobRole | null>(null);
  const [jobFormData, setJobFormData] = useState({
    title: "",
    department: "Marketplace & PPC",
    location: "Remote (India / Global)",
    type: "Full-Time",
    experience: "2+ Years",
    summary: "",
    responsibilities: "",
    skills: "",
    is_hot: false,
    is_active: true,
  });

  // Applicants State
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loadingApps, setLoadingApps] = useState<boolean>(false);
  const [appSearch, setAppSearch] = useState<string>("");
  const [appStatusFilter, setAppStatusFilter] = useState<string>("all");
  const [selectedApp, setSelectedApp] = useState<JobApplication | null>(null);

  // UI helpers
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // 1. Auth Check
  const checkAuth = useCallback(async () => {
    try {
      setAuthChecking(true);
      const res = await fetch("/api/admin/auth-check");
      const data = await res.json();

      if (!data.authenticated) {
        router.push("/admin/login");
        return;
      }

      setIsSupabaseOnline(Boolean(data.isSupabaseConfigured));
    } catch {
      router.push("/admin/login");
    } finally {
      setAuthChecking(false);
    }
  }, [router]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // 2. Data Fetchers
  const fetchLeads = useCallback(async () => {
    try {
      setLoadingLeads(true);
      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      if (res.ok && Array.isArray(data.leads)) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Failed to load leads:", err);
    } finally {
      setLoadingLeads(false);
    }
  }, []);

  const fetchJobs = useCallback(async () => {
    try {
      setLoadingJobs(true);
      const res = await fetch("/api/careers/jobs");
      const data = await res.json();
      if (res.ok && Array.isArray(data.jobs)) {
        setJobs(data.jobs);
      }
    } catch (err) {
      console.error("Failed to load jobs:", err);
    } finally {
      setLoadingJobs(false);
    }
  }, []);

  const fetchApplications = useCallback(async () => {
    try {
      setLoadingApps(true);
      const res = await fetch("/api/careers/applications");
      const data = await res.json();
      if (res.ok && Array.isArray(data.applications)) {
        setApplications(data.applications);
      }
    } catch (err) {
      console.error("Failed to load applications:", err);
    } finally {
      setLoadingApps(false);
    }
  }, []);

  useEffect(() => {
    if (!authChecking) {
      fetchLeads();
      fetchJobs();
      fetchApplications();
    }
  }, [authChecking, fetchLeads, fetchJobs, fetchApplications]);

  // 3. Logout Handler
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      router.push("/admin/login");
    }
  };

  // 4. Leads Filtering & Actions
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        !leadSearch ||
        lead.name?.toLowerCase().includes(leadSearch.toLowerCase()) ||
        lead.email?.toLowerCase().includes(leadSearch.toLowerCase()) ||
        lead.phone?.toLowerCase().includes(leadSearch.toLowerCase()) ||
        lead.message?.toLowerCase().includes(leadSearch.toLowerCase()) ||
        lead.service?.toLowerCase().includes(leadSearch.toLowerCase());

      const matchesStatus =
        leadStatusFilter === "all" || lead.status === leadStatusFilter;

      const matchesService =
        leadServiceFilter === "all" || lead.service === leadServiceFilter;

      return matchesSearch && matchesStatus && matchesService;
    });
  }, [leads, leadSearch, leadStatusFilter, leadServiceFilter]);

  const handleUpdateLeadStatus = async (id: string, newStatus: string, notes?: string) => {
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus, notes }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus as any, notes: notes !== undefined ? notes : l.notes } : l))
        );
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead((prev) => (prev ? { ...prev, status: newStatus as any, notes: notes !== undefined ? notes : prev.notes } : null));
        }
      }
    } catch (err) {
      console.error("Error updating lead status:", err);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        if (selectedLead?.id === id) setSelectedLead(null);
      }
    } catch (err) {
      console.error("Error deleting lead:", err);
    }
  };

  const exportLeadsCSV = () => {
    if (leads.length === 0) {
      alert("No leads to export.");
      return;
    }
    const headers = ["ID", "Date", "Name", "Email", "Phone", "Service", "Status", "Message", "Notes"];
    const rows = leads.map((l) => [
      `"${l.id}"`,
      `"${new Date(l.created_at).toLocaleString()}"`,
      `"${(l.name || "").replace(/"/g, '""')}"`,
      `"${(l.email || "").replace(/"/g, '""')}"`,
      `"${(l.phone || "").replace(/"/g, '""')}"`,
      `"${(l.service || "").replace(/"/g, '""')}"`,
      `"${l.status || "new"}"`,
      `"${(l.message || "").replace(/"/g, '""')}"`,
      `"${(l.notes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ezennith_contact_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 5. Job Posting Actions
  const handleOpenJobModal = (job?: JobRole) => {
    if (job) {
      setEditingJob(job);
      setJobFormData({
        title: job.title,
        department: job.department,
        location: job.location,
        type: job.type,
        experience: job.experience,
        summary: job.summary,
        responsibilities: job.responsibilities ? job.responsibilities.join("\n") : "",
        skills: job.skills ? job.skills.join(", ") : "",
        is_hot: Boolean(job.is_hot),
        is_active: Boolean(job.is_active),
      });
    } else {
      setEditingJob(null);
      setJobFormData({
        title: "",
        department: "Marketplace & PPC",
        location: "Remote (India / Global)",
        type: "Full-Time",
        experience: "2+ Years",
        summary: "",
        responsibilities: "",
        skills: "",
        is_hot: false,
        is_active: true,
      });
    }
    setJobModalOpen(true);
  };

  const handleSaveJob = async (e: React.FormEvent) => {
    e.preventDefault();
    const responsibilitiesArray = jobFormData.responsibilities
      .split("\n")
      .map((r) => r.trim())
      .filter(Boolean);

    const skillsArray = jobFormData.skills
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const payload = {
      title: jobFormData.title,
      department: jobFormData.department,
      location: jobFormData.location,
      type: jobFormData.type,
      experience: jobFormData.experience,
      summary: jobFormData.summary,
      responsibilities: responsibilitiesArray,
      skills: skillsArray,
      is_hot: jobFormData.is_hot,
      is_active: jobFormData.is_active,
    };

    try {
      if (editingJob) {
        const res = await fetch("/api/careers/jobs", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingJob.id, ...payload }),
        });
        const data = await res.json();
        if (res.ok && data.job) {
          setJobs((prev) => prev.map((j) => (j.id === editingJob.id ? data.job : j)));
          setJobModalOpen(false);
        } else {
          alert(data.error || "Failed to update job.");
        }
      } else {
        const res = await fetch("/api/careers/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (res.ok && data.job) {
          setJobs((prev) => [data.job, ...prev]);
          setJobModalOpen(false);
        } else {
          alert(data.error || "Failed to create job.");
        }
      }
    } catch (err) {
      console.error("Error saving job:", err);
      alert("Error saving job.");
    }
  };

  const handleToggleJobActive = async (job: JobRole) => {
    try {
      const updatedActive = !job.is_active;
      const res = await fetch("/api/careers/jobs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: job.id, is_active: updatedActive }),
      });
      if (res.ok) {
        setJobs((prev) =>
          prev.map((j) => (j.id === job.id ? { ...j, is_active: updatedActive } : j))
        );
      }
    } catch (err) {
      console.error("Error toggling job status:", err);
    }
  };

  const handleDeleteJob = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this job posting?")) return;
    try {
      const res = await fetch(`/api/careers/jobs?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setJobs((prev) => prev.filter((j) => j.id !== id));
      }
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  // 6. Applicant Actions
  const filteredApps = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch =
        !appSearch ||
        app.name?.toLowerCase().includes(appSearch.toLowerCase()) ||
        app.email?.toLowerCase().includes(appSearch.toLowerCase()) ||
        app.job_title?.toLowerCase().includes(appSearch.toLowerCase()) ||
        app.note?.toLowerCase().includes(appSearch.toLowerCase()) ||
        app.portfolio?.toLowerCase().includes(appSearch.toLowerCase());

      const matchesStatus =
        appStatusFilter === "all" || app.status === appStatusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [applications, appSearch, appStatusFilter]);

  const handleUpdateAppStatus = async (id: string, newStatus: string, notes?: string) => {
    try {
      const res = await fetch("/api/careers/applications", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus, notes }),
      });
      if (res.ok) {
        setApplications((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status: newStatus as any, notes: notes !== undefined ? notes : a.notes } : a))
        );
        if (selectedApp && selectedApp.id === id) {
          setSelectedApp((prev) => (prev ? { ...prev, status: newStatus as any, notes: notes !== undefined ? notes : prev.notes } : null));
        }
      }
    } catch (err) {
      console.error("Error updating application status:", err);
    }
  };

  const handleDeleteApp = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;
    try {
      const res = await fetch(`/api/careers/applications?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setApplications((prev) => prev.filter((a) => a.id !== id));
        if (selectedApp?.id === id) setSelectedApp(null);
      }
    } catch (err) {
      console.error("Error deleting application:", err);
    }
  };

  const exportAppsCSV = () => {
    if (applications.length === 0) {
      alert("No applications to export.");
      return;
    }
    const headers = ["ID", "Date", "Role", "Name", "Email", "Phone", "Portfolio", "Experience", "Status", "Note", "Admin Notes"];
    const rows = applications.map((a) => [
      `"${a.id}"`,
      `"${new Date(a.created_at).toLocaleString()}"`,
      `"${(a.job_title || "").replace(/"/g, '""')}"`,
      `"${(a.name || "").replace(/"/g, '""')}"`,
      `"${(a.email || "").replace(/"/g, '""')}"`,
      `"${(a.phone || "").replace(/"/g, '""')}"`,
      `"${(a.portfolio || "").replace(/"/g, '""')}"`,
      `"${(a.experience || "").replace(/"/g, '""')}"`,
      `"${a.status || "new"}"`,
      `"${(a.note || "").replace(/"/g, '""')}"`,
      `"${(a.notes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ezennith_career_applicants_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (authChecking) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#060609",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ff5e5e",
        gap: "12px",
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}>
        <Loader2 size={32} className="animate-spin" style={{ animation: "spin 1s linear infinite" }} />
        <span style={{ fontWeight: 600, letterSpacing: "0.02em" }}>Authenticating Executive Session...</span>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      {/* Top Navigation */}
      <header className={styles.topNav}>
        <div className={styles.navContent}>
          <div className={styles.brandGroup}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="E Zennith" className={styles.brandLogo} />
            <div className={styles.brandDivider} />
            <div className={styles.portalTitle}>
              <span className={styles.portalHeading}>Executive Console</span>
              <div className={`${styles.statusPill} ${isSupabaseOnline ? styles.statusPillOnline : styles.statusPillOffline}`}>
                <span className={styles.statusDot} />
                <span>{isSupabaseOnline ? "Supabase Live" : "Supabase Pending"}</span>
              </div>
            </div>
          </div>

          <div className={styles.navActions}>
            <Link href="/" target="_blank" className={styles.viewSiteBtn}>
              <span>Live Website</span>
              <ExternalLink size={14} />
            </Link>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              <LogOut size={14} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className={styles.mainContent}>
        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          <button
            onClick={() => setActiveTab("leads")}
            className={`${styles.tabBtn} ${activeTab === "leads" ? styles.tabBtnActive : ""}`}
          >
            <Users size={18} />
            <span>Contact Leads</span>
            <span className={styles.tabCount}>{leads.length}</span>
          </button>

          <button
            onClick={() => setActiveTab("jobs")}
            className={`${styles.tabBtn} ${activeTab === "jobs" ? styles.tabBtnActive : ""}`}
          >
            <Briefcase size={18} />
            <span>Job Postings</span>
            <span className={styles.tabCount}>{jobs.filter((j) => j.is_active).length} Active</span>
          </button>

          <button
            onClick={() => setActiveTab("applicants")}
            className={`${styles.tabBtn} ${activeTab === "applicants" ? styles.tabBtnActive : ""}`}
          >
            <UserCheck size={18} />
            <span>Career Leads / Applicants</span>
            <span className={styles.tabCount}>{applications.length}</span>
          </button>

          <button
            onClick={() => setActiveTab("db")}
            className={`${styles.tabBtn} ${activeTab === "db" ? styles.tabBtnActive : ""}`}
          >
            <Database size={18} />
            <span>DB & Schema Setup</span>
          </button>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TAB 1: CONTACT LEADS */}
        {/* ------------------------------------------------------------- */}
        {activeTab === "leads" && (
          <section>
            {/* Quick Metrics */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIconBox}>
                  <Users size={22} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statValue}>{leads.length}</span>
                  <span className={styles.statLabel}>Total Inquiries</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconBox} style={{ background: "rgba(239, 68, 68, 0.15)", color: "#f87171", borderColor: "rgba(239, 68, 68, 0.3)" }}>
                  <Sparkles size={22} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statValue}>{leads.filter((l) => l.status === "new").length}</span>
                  <span className={styles.statLabel}>New Unread</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconBox} style={{ background: "rgba(245, 158, 11, 0.15)", color: "#fbbf24", borderColor: "rgba(245, 158, 11, 0.3)" }}>
                  <Clock size={22} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statValue}>{leads.filter((l) => l.status === "contacted").length}</span>
                  <span className={styles.statLabel}>In Discussion</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconBox} style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80", borderColor: "rgba(34, 197, 94, 0.3)" }}>
                  <CheckCircle2 size={22} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statValue}>{leads.filter((l) => l.status === "converted").length}</span>
                  <span className={styles.statLabel}>Converted Clients</span>
                </div>
              </div>
            </div>

            {/* Controls Bar */}
            <div className={styles.controlsBar}>
              <div className={styles.searchWrapper}>
                <Search size={16} className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search leads by name, email, phone, message..."
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.filterGroup}>
                <select
                  value={leadStatusFilter}
                  onChange={(e) => setLeadStatusFilter(e.target.value)}
                  className={styles.selectInput}
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="converted">Converted</option>
                  <option value="archived">Archived</option>
                </select>

                <select
                  value={leadServiceFilter}
                  onChange={(e) => setLeadServiceFilter(e.target.value)}
                  className={styles.selectInput}
                >
                  <option value="all">All Services</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Amazon Scaling">Amazon Scaling</option>
                  <option value="Flipkart Scaling">Flipkart Scaling</option>
                  <option value="Web Development">Web Development</option>
                  <option value="3D CGI & Creatives">3D CGI & Creatives</option>
                  <option value="Digital Marketing & PPC">Digital Marketing & PPC</option>
                  <option value="Full Account Management">Full Account Management</option>
                </select>

                <button onClick={exportLeadsCSV} className={`${styles.actionBtn} ${styles.secondaryBtn}`}>
                  <Download size={14} />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Leads Table */}
            {loadingLeads ? (
              <div style={{ textAlign: "center", padding: "60px", color: "#a1a1aa" }}>
                <Loader2 size={32} className="animate-spin" style={{ animation: "spin 1s linear infinite", margin: "0 auto 12px", color: "#ff5e5e" }} />
                <p>Loading inquiries...</p>
              </div>
            ) : filteredLeads.length > 0 ? (
              <div className={styles.tableContainer}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Contact Details</th>
                      <th>Service Focus</th>
                      <th>Message / Goal</th>
                      <th>Status</th>
                      <th style={{ textAlign: "right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id}>
                        <td>
                          <span style={{ fontSize: "0.82rem", color: "#d4d4d8", display: "flex", alignItems: "center", gap: "5px" }}>
                            <Calendar size={13} color="#a1a1aa" />
                            {new Date(lead.created_at).toLocaleDateString()}
                          </span>
                          <span style={{ fontSize: "0.74rem", color: "#71717a", display: "block", marginTop: "2px" }}>
                            {new Date(lead.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </span>
                        </td>
                        <td>
                          <span className={styles.tableLeadName}>{lead.name}</span>
                          <div className={styles.contactChips}>
                            <a href={`mailto:${lead.email}`} className={styles.contactLink}>
                              <Mail size={12} />
                              <span>{lead.email}</span>
                            </a>
                            {lead.phone && (
                              <a
                                href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                                style={{ color: "#4ade80" }}
                              >
                                <Phone size={12} />
                                <span>{lead.phone}</span>
                              </a>
                            )}
                          </div>
                        </td>
                        <td>
                          <span className={styles.metaTag}>{lead.service || "General Inquiry"}</span>
                        </td>
                        <td>
                          <div className={styles.messageSnippet} title={lead.message}>
                            {lead.message}
                          </div>
                        </td>
                        <td>
                          <select
                            value={lead.status || "new"}
                            onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value)}
                            className={styles.selectInput}
                            style={{ padding: "5px 10px", fontSize: "0.8rem", borderRadius: "8px" }}
                          >
                            <option value="new">🔴 New</option>
                            <option value="contacted">🟡 Contacted</option>
                            <option value="qualified">🔵 Qualified</option>
                            <option value="converted">🟢 Converted</option>
                            <option value="archived">⚪ Archived</option>
                          </select>
                        </td>
                        <td>
                          <div className={styles.tableActions} style={{ justifyContent: "flex-end" }}>
                            <button
                              onClick={() => setSelectedLead(lead)}
                              className={styles.iconBtn}
                              title="View Full Lead Details"
                            >
                              <Eye size={15} />
                            </button>
                            <button
                              onClick={() => handleDeleteLead(lead.id)}
                              className={`${styles.iconBtn} ${styles.iconBtnDelete}`}
                              title="Delete Lead"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyStateIcon}>
                  <Users size={24} />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>No leads match your filter</h3>
                <p>Try clearing search keywords or selecting "All Statuses".</p>
              </div>
            )}
          </section>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 2: JOB POSTINGS MANAGER */}
        {/* ------------------------------------------------------------- */}
        {activeTab === "jobs" && (
          <section>
            <div className={styles.controlsBar}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: "800", fontFamily: "'Syne', sans-serif" }}>Careers Job Openings</h2>
                <span className={styles.metaTag}>{jobs.length} Total Roles</span>
              </div>

              <div className={styles.filterGroup}>
                <Link href="/careers" target="_blank" className={`${styles.actionBtn} ${styles.secondaryBtn}`}>
                  <ExternalLink size={14} />
                  <span>Preview Careers Page</span>
                </Link>

                <button onClick={() => handleOpenJobModal()} className={`${styles.actionBtn} ${styles.primaryBtn}`}>
                  <Plus size={16} />
                  <span>Create New Job</span>
                </button>
              </div>
            </div>

            {loadingJobs ? (
              <div style={{ textAlign: "center", padding: "60px", color: "#a1a1aa" }}>
                <Loader2 size={32} className="animate-spin" style={{ animation: "spin 1s linear infinite", margin: "0 auto 12px", color: "#ff5e5e" }} />
                <p>Loading jobs...</p>
              </div>
            ) : jobs.length > 0 ? (
              <div className={styles.jobsGrid}>
                {jobs.map((job) => (
                  <article key={job.id} className={styles.jobCard}>
                    <div>
                      <div className={styles.jobCardHeader}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                            <span className={styles.metaTag} style={{ background: "rgba(128, 0, 0, 0.2)", color: "#ff6b6b", borderColor: "rgba(255, 59, 48, 0.3)" }}>
                              {job.department}
                            </span>
                            {job.is_hot && (
                              <span className={styles.metaTag} style={{ background: "rgba(239, 68, 68, 0.18)", color: "#f87171", borderColor: "rgba(239, 68, 68, 0.4)" }}>
                                <Flame size={12} style={{ display: "inline", verticalAlign: "middle", marginRight: "3px" }} />
                                Hot Priority
                              </span>
                            )}
                          </div>
                          <h3 className={styles.jobRoleTitle}>{job.title}</h3>
                        </div>
                      </div>

                      <div className={styles.jobMetaRow}>
                        <span className={styles.metaTag}>{job.location}</span>
                        <span className={styles.metaTag}>{job.type}</span>
                        <span className={styles.metaTag}>{job.experience}</span>
                      </div>

                      <p className={styles.jobDesc}>{job.summary}</p>

                      {job.skills && job.skills.length > 0 && (
                        <div className={styles.skillsRow}>
                          {job.skills.map((s, i) => (
                            <span key={i} className={styles.skillPill}>{s}</span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className={styles.jobFooter}>
                      <label className={styles.toggleSwitch} title="Toggle published on Careers page">
                        <div
                          className={`${styles.switchTrack} ${job.is_active ? styles.switchTrackActive : ""}`}
                          onClick={() => handleToggleJobActive(job)}
                        >
                          <div className={`${styles.switchThumb} ${job.is_active ? styles.switchThumbActive : ""}`} />
                        </div>
                        <span style={{ color: job.is_active ? "#4ade80" : "#a1a1aa" }}>{job.is_active ? "Published" : "Draft"}</span>
                      </label>

                      <div className={styles.tableActions}>
                        <button onClick={() => handleOpenJobModal(job)} className={styles.iconBtn} title="Edit Job">
                          <Edit size={14} />
                        </button>
                        <button onClick={() => handleDeleteJob(job.id)} className={`${styles.iconBtn} ${styles.iconBtnDelete}`} title="Delete Job">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyStateIcon}>
                  <Briefcase size={24} />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>No Job Postings Yet</h3>
                <p>Click "Create New Job" above to publish your first open position directly to the careers page.</p>
              </div>
            )}
          </section>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 3: CAREER APPLICANTS / LEADS */}
        {/* ------------------------------------------------------------- */}
        {activeTab === "applicants" && (
          <section>
            {/* Quick Metrics */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIconBox}>
                  <UserCheck size={22} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statValue}>{applications.length}</span>
                  <span className={styles.statLabel}>Total Applicants</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconBox} style={{ background: "rgba(239, 68, 68, 0.15)", color: "#f87171", borderColor: "rgba(239, 68, 68, 0.3)" }}>
                  <Clock size={22} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statValue}>{applications.filter((a) => a.status === "new").length}</span>
                  <span className={styles.statLabel}>New Submissions</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconBox} style={{ background: "rgba(168, 85, 247, 0.15)", color: "#c084fc", borderColor: "rgba(168, 85, 247, 0.3)" }}>
                  <Layers size={22} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statValue}>
                    {applications.filter((a) => a.status === "reviewing" || a.status === "shortlisted").length}
                  </span>
                  <span className={styles.statLabel}>In Review / Shortlisted</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconBox} style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80", borderColor: "rgba(34, 197, 94, 0.3)" }}>
                  <CheckCircle2 size={22} />
                </div>
                <div className={styles.statInfo}>
                  <span className={styles.statValue}>{applications.filter((a) => a.status === "hired").length}</span>
                  <span className={styles.statLabel}>Hired Talent</span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className={styles.controlsBar}>
              <div className={styles.searchWrapper}>
                <Search size={16} className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search applicants by name, email, role, portfolio..."
                  value={appSearch}
                  onChange={(e) => setAppSearch(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.filterGroup}>
                <select
                  value={appStatusFilter}
                  onChange={(e) => setAppStatusFilter(e.target.value)}
                  className={styles.selectInput}
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="reviewing">In Review</option>
                  <option value="shortlisted">Shortlisted</option>
                  <option value="hired">Hired</option>
                  <option value="rejected">Rejected</option>
                </select>

                <button onClick={exportAppsCSV} className={`${styles.actionBtn} ${styles.secondaryBtn}`}>
                  <Download size={14} />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Applicants Table */}
            {loadingApps ? (
              <div style={{ textAlign: "center", padding: "60px", color: "#a1a1aa" }}>
                <Loader2 size={32} className="animate-spin" style={{ animation: "spin 1s linear infinite", margin: "0 auto 12px", color: "#ff5e5e" }} />
                <p>Loading applications...</p>
              </div>
            ) : filteredApps.length > 0 ? (
              <div className={styles.tableContainer}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Candidate</th>
                      <th>Applied Role</th>
                      <th>Experience</th>
                      <th>Portfolio / Link</th>
                      <th>Status</th>
                      <th style={{ textAlign: "right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApps.map((app) => (
                      <tr key={app.id}>
                        <td>
                          <span style={{ fontSize: "0.82rem", color: "#d4d4d8", display: "flex", alignItems: "center", gap: "5px" }}>
                            <Calendar size={13} color="#a1a1aa" />
                            {new Date(app.created_at).toLocaleDateString()}
                          </span>
                        </td>
                        <td>
                          <span className={styles.tableLeadName}>{app.name}</span>
                          <div className={styles.contactChips}>
                            <a href={`mailto:${app.email}`} className={styles.contactLink}>
                              <Mail size={12} />
                              <span>{app.email}</span>
                            </a>
                            {app.phone && (
                              <a
                                href={`https://wa.me/${app.phone.replace(/[^0-9]/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactLink}
                                style={{ color: "#4ade80" }}
                              >
                                <Phone size={12} />
                                <span>{app.phone}</span>
                              </a>
                            )}
                          </div>
                        </td>
                        <td>
                          <span className={styles.metaTag} style={{ fontWeight: 700, color: "#ffffff", background: "rgba(255, 255, 255, 0.08)" }}>
                            {app.job_title}
                          </span>
                        </td>
                        <td>
                          <span className={styles.metaTag}>{app.experience || "Not specified"}</span>
                        </td>
                        <td>
                          {app.portfolio ? (
                            <a
                              href={app.portfolio.startsWith("http") ? app.portfolio : `https://${app.portfolio}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.contactLink}
                              style={{ color: "#ff5e5e", fontWeight: 600 }}
                            >
                              <span>View Profile</span>
                              <ArrowUpRight size={13} />
                            </a>
                          ) : (
                            <span style={{ color: "#71717a", fontSize: "0.82rem" }}>None</span>
                          )}
                        </td>
                        <td>
                          <select
                            value={app.status || "new"}
                            onChange={(e) => handleUpdateAppStatus(app.id, e.target.value)}
                            className={styles.selectInput}
                            style={{ padding: "5px 10px", fontSize: "0.8rem", borderRadius: "8px" }}
                          >
                            <option value="new">🔴 New</option>
                            <option value="reviewing">🟣 In Review</option>
                            <option value="shortlisted">🟣 Shortlisted</option>
                            <option value="hired">🟢 Hired</option>
                            <option value="rejected">⚪ Rejected</option>
                          </select>
                        </td>
                        <td>
                          <div className={styles.tableActions} style={{ justifyContent: "flex-end" }}>
                            <button
                              onClick={() => setSelectedApp(app)}
                              className={styles.iconBtn}
                              title="View Full Candidate Profile"
                            >
                              <Eye size={15} />
                            </button>
                            <button
                              onClick={() => handleDeleteApp(app.id)}
                              className={`${styles.iconBtn} ${styles.iconBtnDelete}`}
                              title="Delete Candidate"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyStateIcon}>
                  <UserCheck size={24} />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>No Applications Found</h3>
                <p>When candidates apply via the careers portal, their profiles and links will appear here immediately.</p>
              </div>
            )}
          </section>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 4: SUPABASE & DB CONFIGURATION */}
        {/* ------------------------------------------------------------- */}
        {activeTab === "db" && (
          <section style={{ maxWidth: "820px", margin: "0 auto" }}>
            <div style={{
              background: "rgba(18, 18, 24, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "24px",
              padding: "36px",
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.7)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "rgba(128, 0, 0, 0.2)",
                  border: "1px solid rgba(255, 59, 48, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ff5e5e"
                }}>
                  <Database size={26} />
                </div>
                <div>
                  <h2 style={{ fontSize: "1.35rem", fontWeight: "800", color: "#ffffff", fontFamily: "'Syne', sans-serif" }}>
                    Supabase Database Integration
                  </h2>
                  <p style={{ color: "#a1a1aa", fontSize: "0.88rem" }}>
                    Connect your Supabase project with E Zennith for production leads & career storage.
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div style={{
                padding: "18px 20px",
                borderRadius: "14px",
                background: isSupabaseOnline ? "rgba(34, 197, 94, 0.1)" : "rgba(234, 179, 8, 0.1)",
                border: `1px solid ${isSupabaseOnline ? "rgba(34, 197, 94, 0.3)" : "rgba(234, 179, 8, 0.3)"}`,
                marginBottom: "32px",
                display: "flex",
                alignItems: "center",
                gap: "14px"
              }}>
                {isSupabaseOnline ? (
                  <CheckCircle2 size={24} style={{ color: "#4ade80", flexShrink: 0 }} />
                ) : (
                  <AlertCircle size={24} style={{ color: "#facc15", flexShrink: 0 }} />
                )}
                <div>
                  <h4 style={{ color: isSupabaseOnline ? "#4ade80" : "#facc15", fontWeight: "800", fontSize: "0.95rem" }}>
                    {isSupabaseOnline ? "Database Live & Connected" : "Pending Supabase Keys in .env.local"}
                  </h4>
                  <p style={{ color: "#d4d4d8", fontSize: "0.84rem", marginTop: "3px", lineHeight: "1.4" }}>
                    {isSupabaseOnline
                      ? "All contact form submissions and career job applications are persisting live to Supabase."
                      : "Open .env.local in your editor and paste your Supabase Project URL and Anon API key to enable live database persistence."}
                  </p>
                </div>
              </div>

              {/* Step 1 */}
              <div style={{ marginBottom: "28px" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "#ffffff", marginBottom: "8px", fontFamily: "'Syne', sans-serif" }}>
                  Step 1: Run SQL Schema in Supabase SQL Editor
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#a1a1aa", marginBottom: "12px", lineHeight: "1.5" }}>
                  The raw SQL script is prepared at <code>supabase_schema.sql</code> in your project folder. Copy and paste it into your <strong>Supabase Dashboard &gt; SQL Editor</strong> and hit <strong>Run</strong>.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: "800", color: "#ffffff", marginBottom: "8px", fontFamily: "'Syne', sans-serif" }}>
                  Step 2: Add Keys to .env.local
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#a1a1aa", marginBottom: "14px", lineHeight: "1.5" }}>
                  In your Supabase project under <strong>Settings &gt; API</strong>, copy your <strong>Project URL</strong> and <strong>anon public API Key</strong>, then put them into <code>.env.local</code>:
                </p>
                <pre style={{
                  background: "rgba(10, 10, 14, 0.9)",
                  padding: "18px",
                  borderRadius: "12px",
                  color: "#ff6b6b",
                  fontSize: "0.84rem",
                  overflowX: "auto",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  fontFamily: "monospace"
                }}>
{`NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...

# Admin Portal Login Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=ezennith@admin2026`}
                </pre>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ------------------------------------------------------------- */}
      {/* MODAL: LEAD DETAILS */}
      {/* ------------------------------------------------------------- */}
      {selectedLead && (
        <div className={styles.modalOverlay} onClick={() => setSelectedLead(null)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.metaTag} style={{ background: "rgba(128, 0, 0, 0.2)", color: "#ff6b6b", borderColor: "rgba(255, 59, 48, 0.3)", marginBottom: "8px", display: "inline-block" }}>
                  {selectedLead.service || "General Inquiry"}
                </span>
                <h3 className={styles.modalTitle}>{selectedLead.name}</h3>
                <span style={{ fontSize: "0.82rem", color: "#a1a1aa" }}>
                  Received on {new Date(selectedLead.created_at).toLocaleString()}
                </span>
              </div>
              <button onClick={() => setSelectedLead(null)} className={styles.modalCloseBtn} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Quick Actions */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={`mailto:${selectedLead.email}?subject=E%20Zennith%20Consultation%20-%20${encodeURIComponent(selectedLead.name)}`}
                  className={`${styles.actionBtn} ${styles.primaryBtn}`}
                >
                  <Mail size={14} />
                  <span>Email {selectedLead.email}</span>
                </a>

                {selectedLead.phone && (
                  <a
                    href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.secondaryBtn}`}
                    style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80", borderColor: "rgba(34, 197, 94, 0.3)" }}
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp Chat</span>
                  </a>
                )}
              </div>

              {/* Contact Info Grid */}
              <div className={styles.formGrid}>
                <div>
                  <span className={styles.formLabel}>Full Name</span>
                  <p style={{ color: "#ffffff", fontWeight: 700 }}>{selectedLead.name}</p>
                </div>

                <div>
                  <span className={styles.formLabel}>Email Address</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <p style={{ color: "#d4d4d8" }}>{selectedLead.email}</p>
                    <button
                      onClick={() => copyToClipboard(selectedLead.email, "lead-email")}
                      className={styles.iconBtn}
                      title="Copy Email"
                    >
                      {copiedId === "lead-email" ? <Check size={12} color="#4ade80" /> : <Copy size={12} />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className={styles.formLabel}>Phone / WhatsApp</span>
                  <p style={{ color: "#d4d4d8" }}>{selectedLead.phone || "Not provided"}</p>
                </div>

                <div>
                  <span className={styles.formLabel}>Lead Status</span>
                  <select
                    value={selectedLead.status || "new"}
                    onChange={(e) => handleUpdateLeadStatus(selectedLead.id, e.target.value, selectedLead.notes)}
                    className={styles.formSelect}
                  >
                    <option value="new">🔴 New</option>
                    <option value="contacted">🟡 Contacted</option>
                    <option value="qualified">🔵 Qualified</option>
                    <option value="converted">🟢 Converted</option>
                    <option value="archived">⚪ Archived</option>
                  </select>
                </div>
              </div>

              {/* Message Content */}
              <div>
                <span className={styles.formLabel}>Client Growth Goals / Project Details:</span>
                <div style={{
                  background: "rgba(10, 10, 14, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "14px",
                  padding: "18px",
                  color: "#f4f4f5",
                  lineHeight: "1.6",
                  fontSize: "0.94rem",
                  whiteSpace: "pre-wrap"
                }}>
                  {selectedLead.message}
                </div>
              </div>

              {/* Internal Notes */}
              <div>
                <span className={styles.formLabel}>Internal Admin Notes:</span>
                <textarea
                  rows={3}
                  defaultValue={selectedLead.notes || ""}
                  onBlur={(e) => handleUpdateLeadStatus(selectedLead.id, selectedLead.status, e.target.value)}
                  placeholder="Add notes about call summary, budget discussion, or next steps..."
                  className={styles.formTextarea}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL: CANDIDATE APPLICATION DETAILS */}
      {/* ------------------------------------------------------------- */}
      {selectedApp && (
        <div className={styles.modalOverlay} onClick={() => setSelectedApp(null)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.metaTag} style={{ background: "rgba(168, 85, 247, 0.15)", color: "#c084fc", borderColor: "rgba(168, 85, 247, 0.3)", marginBottom: "8px", display: "inline-block" }}>
                  Role: {selectedApp.job_title}
                </span>
                <h3 className={styles.modalTitle}>{selectedApp.name}</h3>
                <span style={{ fontSize: "0.82rem", color: "#a1a1aa" }}>
                  Applied on {new Date(selectedApp.created_at).toLocaleString()}
                </span>
              </div>
              <button onClick={() => setSelectedApp(null)} className={styles.modalCloseBtn} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Quick Actions */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href={`mailto:${selectedApp.email}?subject=E%20Zennith%20Careers%20-%20${encodeURIComponent(selectedApp.job_title)}%20Application`}
                  className={`${styles.actionBtn} ${styles.primaryBtn}`}
                >
                  <Mail size={14} />
                  <span>Email Candidate</span>
                </a>

                {selectedApp.phone && (
                  <a
                    href={`https://wa.me/${selectedApp.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.secondaryBtn}`}
                    style={{ background: "rgba(34, 197, 94, 0.15)", color: "#4ade80", borderColor: "rgba(34, 197, 94, 0.3)" }}
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                )}

                {selectedApp.portfolio && (
                  <a
                    href={selectedApp.portfolio.startsWith("http") ? selectedApp.portfolio : `https://${selectedApp.portfolio}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.secondaryBtn}`}
                  >
                    <ExternalLink size={14} />
                    <span>Open Portfolio / LinkedIn</span>
                  </a>
                )}
              </div>

              {/* Details Grid */}
              <div className={styles.formGrid}>
                <div>
                  <span className={styles.formLabel}>Candidate Name</span>
                  <p style={{ color: "#ffffff", fontWeight: 700 }}>{selectedApp.name}</p>
                </div>

                <div>
                  <span className={styles.formLabel}>Email Address</span>
                  <p style={{ color: "#d4d4d8" }}>{selectedApp.email}</p>
                </div>

                <div>
                  <span className={styles.formLabel}>Phone / WhatsApp</span>
                  <p style={{ color: "#d4d4d8" }}>{selectedApp.phone || "Not provided"}</p>
                </div>

                <div>
                  <span className={styles.formLabel}>Experience Level</span>
                  <p style={{ color: "#d4d4d8" }}>{selectedApp.experience || "Not provided"}</p>
                </div>

                <div className={styles.formGridFull}>
                  <span className={styles.formLabel}>Candidate Status</span>
                  <select
                    value={selectedApp.status || "new"}
                    onChange={(e) => handleUpdateAppStatus(selectedApp.id, e.target.value, selectedApp.notes)}
                    className={styles.formSelect}
                  >
                    <option value="new">🔴 New</option>
                    <option value="reviewing">🟣 In Review</option>
                    <option value="shortlisted">🟣 Shortlisted</option>
                    <option value="hired">🟢 Hired</option>
                    <option value="rejected">⚪ Rejected</option>
                  </select>
                </div>
              </div>

              {/* Pitch Note */}
              {selectedApp.note && (
                <div>
                  <span className={styles.formLabel}>Candidate Pitch Note:</span>
                  <div style={{
                    background: "rgba(10, 10, 14, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "14px",
                    padding: "18px",
                    color: "#f4f4f5",
                    lineHeight: "1.6",
                    fontSize: "0.94rem",
                    whiteSpace: "pre-wrap"
                  }}>
                    {selectedApp.note}
                  </div>
                </div>
              )}

              {/* Interview / HR Notes */}
              <div>
                <span className={styles.formLabel}>HR & Interview Notes:</span>
                <textarea
                  rows={3}
                  defaultValue={selectedApp.notes || ""}
                  onBlur={(e) => handleUpdateAppStatus(selectedApp.id, selectedApp.status, e.target.value)}
                  placeholder="Add evaluation notes, interview feedback, score..."
                  className={styles.formTextarea}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL: CREATE / EDIT JOB */}
      {/* ------------------------------------------------------------- */}
      {jobModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setJobModalOpen(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div>
                <h3 className={styles.modalTitle}>
                  {editingJob ? "Edit Job Posting" : "Create New Job Opening"}
                </h3>
                <p style={{ color: "#a1a1aa", fontSize: "0.84rem", marginTop: "4px" }}>
                  This role will be instantly published and manageable on the public Careers page.
                </p>
              </div>
              <button onClick={() => setJobModalOpen(false)} className={styles.modalCloseBtn} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveJob} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div className={styles.formGrid}>
                <div className={styles.formGridFull}>
                  <label className={styles.formLabel}>Job Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior 3D CGI & Motion Designer"
                    value={jobFormData.title}
                    onChange={(e) => setJobFormData({ ...jobFormData, title: e.target.value })}
                    className={styles.formInput}
                  />
                </div>

                <div>
                  <label className={styles.formLabel}>Department *</label>
                  <select
                    value={jobFormData.department}
                    onChange={(e) => setJobFormData({ ...jobFormData, department: e.target.value })}
                    className={styles.formSelect}
                  >
                    <option value="Marketplace & PPC">Marketplace & PPC</option>
                    <option value="3D & Motion">3D & Motion</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Design & Creative">Design & Creative</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>

                <div>
                  <label className={styles.formLabel}>Location</label>
                  <input
                    type="text"
                    placeholder="Remote / India / Hybrid"
                    value={jobFormData.location}
                    onChange={(e) => setJobFormData({ ...jobFormData, location: e.target.value })}
                    className={styles.formInput}
                  />
                </div>

                <div>
                  <label className={styles.formLabel}>Employment Type</label>
                  <select
                    value={jobFormData.type}
                    onChange={(e) => setJobFormData({ ...jobFormData, type: e.target.value })}
                    className={styles.formSelect}
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract / Project-based</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label className={styles.formLabel}>Experience Requirement</label>
                  <input
                    type="text"
                    placeholder="e.g. 2+ Years / 3-5 Years"
                    value={jobFormData.experience}
                    onChange={(e) => setJobFormData({ ...jobFormData, experience: e.target.value })}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGridFull}>
                  <label className={styles.formLabel}>Summary / Role Overview *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Brief description of the position and its core objective..."
                    value={jobFormData.summary}
                    onChange={(e) => setJobFormData({ ...jobFormData, summary: e.target.value })}
                    className={styles.formTextarea}
                  />
                </div>

                <div className={styles.formGridFull}>
                  <label className={styles.formLabel}>Core Responsibilities (One per line)</label>
                  <textarea
                    rows={4}
                    placeholder="Architect and manage Amazon PPC campaigns...&#10;Coordinate weekly creative asset pipelines...&#10;Deliver weekly ACoS attribution reports..."
                    value={jobFormData.responsibilities}
                    onChange={(e) => setJobFormData({ ...jobFormData, responsibilities: e.target.value })}
                    className={styles.formTextarea}
                  />
                </div>

                <div className={styles.formGridFull}>
                  <label className={styles.formLabel}>Required Skills (Comma separated tags)</label>
                  <input
                    type="text"
                    placeholder="e.g. Amazon PPC, Helium 10, Blender, TypeScript, CRO"
                    value={jobFormData.skills}
                    onChange={(e) => setJobFormData({ ...jobFormData, skills: e.target.value })}
                    className={styles.formInput}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input
                    type="checkbox"
                    id="job-is-hot"
                    checked={jobFormData.is_hot}
                    onChange={(e) => setJobFormData({ ...jobFormData, is_hot: e.target.checked })}
                    style={{ width: "18px", height: "18px", cursor: "pointer", accentColor: "#dc2626" }}
                  />
                  <label htmlFor="job-is-hot" style={{ fontSize: "0.88rem", color: "#ffffff", fontWeight: 600, cursor: "pointer" }}>
                    🔥 Mark as Priority / Hot Role
                  </label>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input
                    type="checkbox"
                    id="job-is-active"
                    checked={jobFormData.is_active}
                    onChange={(e) => setJobFormData({ ...jobFormData, is_active: e.target.checked })}
                    style={{ width: "18px", height: "18px", cursor: "pointer", accentColor: "#22c55e" }}
                  />
                  <label htmlFor="job-is-active" style={{ fontSize: "0.88rem", color: "#ffffff", fontWeight: 600, cursor: "pointer" }}>
                    Publish to Public Careers Page
                  </label>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
                <button type="button" onClick={() => setJobModalOpen(false)} className={`${styles.actionBtn} ${styles.secondaryBtn}`}>
                  Cancel
                </button>
                <button type="submit" className={`${styles.actionBtn} ${styles.primaryBtn}`}>
                  {editingJob ? "Save Changes" : "Publish Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
