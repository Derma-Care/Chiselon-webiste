import React, { useState } from "react";
import "./ProductsSection.css";
import {
  FiCheck,
  FiArrowRight,
  FiCalendar,
  FiFileText,
  FiCreditCard,
  FiBarChart2,
  FiTrendingUp,
  FiArrowLeft,
} from "react-icons/fi";
import clinicEssentialsImg from "../../../Assests/clinic_essentials.jpg";
import clinicEnterpriseImg from "../../../Assests/clinic_enterprise.jpg";

/*
  ======================================================================
  PREVIOUS PRODUCTS CARDS KEPT IN COMMENT:
  ======================================================================

  import NITO from "../../../Assests/NITO.jpg";
  import AestheTech from "../../../Assests/AI.jpg";
  import QuantumQuest from "../../../Assests/SureCare.jpg";
  import HRMS from "../../../Assests/CHMS.jpg";

  const products = [
    {
      description: "AI-powered mock test and analytics platform that helps students prepare smarter and excel in competitive exams.",
      image: NITO,
      features: [
        "Adaptive test engine with customizable difficulty levels.",
        "Real-time analytics & performance reports for students.",
        "Secure, scalable cloud-based architecture.",
        "Multi-device compatibility"
      ],
      impact: "Helps students build confidence and track progress effectively."
    },
    {
      description: "Comprehensive clinic management system for dermatology and multi-specialty healthcare centers.",
      image: AestheTech,
      features: [
        "Patient management (records, history, appointments).",
        "AI-assisted imaging & diagnosis support.",
        "Doctor support modules and task management.",
        "Digital prescriptions, billing, and inventory integration"
      ],
      impact: "Improves patient outcomes and operational efficiency."
    },
    {
      description: "On-demand healthcare staffing solution connecting verified nurses with hospitals and patients.",
      image: QuantumQuest,
      features: [
        "Real-time nurse availability matching.",
        "Secure scheduling and shift management.",
        "Verified nursing professionals.",
        "Integrated payments and compliance tracking"
      ],
      impact: "Ensures timely patient care and flexible work opportunities."
    },
    {
      description: "Smart HR automation platform built to simplify workforce operations and boost team productivity.",
      image: HRMS,
      features: [
        "Timesheet management with project-wise tracking.",
        "Leave management with approval workflows.",
        "Integrated payroll compatibility.",
        "Employee self-service portal"
      ],
      impact: "Increases productivity and reduces manual errors."
    }
  ];
  ======================================================================
*/

// Target Icon SVG matching the design
const TargetIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="#a3e635" />
    <circle cx="12" cy="12" r="6" fill="#0b1122" />
    <circle cx="12" cy="12" r="3" fill="#a3e635" />
  </svg>
);

const TargetGreenIcon = ({ size = 44 }) => {
  const outer = size;
  const middle = Math.round(size * 0.5);
  const inner = Math.round(size * 0.22);
  return (
    <div
      style={{
        width: outer,
        height: outer,
        borderRadius: "50%",
        backgroundColor: "#a3e635",
        boxShadow: "0 0 16px rgba(163, 230, 53, 0.45)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: middle,
          height: middle,
          borderRadius: "50%",
          backgroundColor: "#0b1122",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: inner,
            height: inner,
            borderRadius: "50%",
            backgroundColor: "#a3e635",
          }}
        />
      </div>
    </div>
  );
};

const ProductsSection = ({ onSpecChange }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoProductTarget, setDemoProductTarget] = useState("");
  const [demoFormData, setDemoFormData] = useState({
    fullNameOrClinicName: "",
    email: "",
    phone: "",
    preferredTime: "",
  });

  const phoneNumber = "918807981081";

  const handleOpenWhatsApp = (message) => {
    const encoded = encodeURIComponent(message);
    const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encoded}`;
    const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${encoded}`;

    const newWindow = window.open(whatsappAppUrl, "_blank");
    setTimeout(() => {
      if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
        window.open(whatsappWebUrl, "_blank");
      }
    }, 500);
  };

  const openDemoModal = (targetProduct = "") => {
    setDemoProductTarget(targetProduct);
    setIsDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleDemoFormChange = (e) => {
    setDemoFormData({ ...demoFormData, [e.target.name]: e.target.value });
  };

  const handleDemoFormSubmit = (e) => {
    e.preventDefault();
    const { fullNameOrClinicName, email, phone } = demoFormData;
    if (!fullNameOrClinicName || !email || !phone) {
      alert("Please fill all required fields before submitting!");
      return;
    }

    const prodLabel = demoProductTarget
      ? ` for ${demoProductTarget}`
      : selectedProduct === "clinic-enterprise"
      ? " for Clinic Enterprise Edition"
      : selectedProduct === "clinic-essentials"
      ? " for Clinic Essentials Edition"
      : "";

    const message = `Hello! I would like to request a Demo${prodLabel}.\n\nFull Name / Clinic Name: ${demoFormData.fullNameOrClinicName}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nPreferred Time: ${demoFormData.preferredTime || "Not specified"}`;

    handleOpenWhatsApp(message);
    setDemoFormData({
      fullNameOrClinicName: "",
      email: "",
      phone: "",
      preferredTime: "",
    });
    setIsDemoModalOpen(false);
  };

  const handleScrollToCapabilities = () => {
    const element = document.getElementById("detailed-breakdown");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTopContainer = () => {
    // Scroll all possible scrolling containers right to the top hero section
    const specPage = document.getElementById("spec-top");
    if (specPage) {
      specPage.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (document.documentElement) {
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    if (document.body) {
      document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const handleSelectProduct = (prod) => {
    setSelectedProduct(prod);
    if (onSpecChange) onSpecChange(true);
    // Trigger scroll animation directly to the hero section
    setTimeout(scrollToTopContainer, 20);
    setTimeout(scrollToTopContainer, 150);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
    if (onSpecChange) onSpecChange(false);
    setTimeout(scrollToTopContainer, 20);
    setTimeout(scrollToTopContainer, 150);
  };

  // IF "Full Specifications" IS CLICKED: SHOW DETAILED SPECIFICATIONS VIEW ACCORDING TO SCREENSHOTS
  if (selectedProduct) {
    const isEnterprise = selectedProduct === "clinic-enterprise";

    return (
      <div className="pes-spec-page" id="spec-top">
        <div className="pes-spec-container">
          <button
            onClick={handleBackToProducts}
            className="pes-back-link"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 0 20px 0",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#38bdf8",
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          >
            <FiArrowLeft /> Back to Products
          </button>

          {/* SECTION 1: HERO HEADER */}
          <section className="pes-spec-hero">
            <div className="pes-spec-hero-left">
              <div className="pes-spec-module-pill">
                <span>
                  {isEnterprise
                    ? "MODULE 02 · MULTI-BRANCH & 4-APP CONNECTED SUITE"
                    : "MODULE 01 · ALL-IN-ONE CLINIC MANAGEMENT"}
                </span>
                <span className="status-dot"></span>
                <span>Verified Architecture</span>
              </div>

              <div className="pes-spec-hero-icon-wrap">
                <TargetGreenIcon size={48} />
              </div>

              <h1 className="pes-spec-hero-title">
                {isEnterprise
                  ? "Clinic Enterprise Edition"
                  : "Clinic Essentials Edition"}
              </h1>

              <p className="pes-spec-hero-company">
                Developed by <strong>Chiselon Technologies Private Limited</strong> ·{" "}
                <span className="version-tag">
                  {isEnterprise
                    ? "CTPL-ENT-v4.6.1-ENTERPRISE"
                    : "CTPL-ESS-v4.2.8-STABLE"}
                </span>
              </p>

              <h2 className="pes-spec-hero-tagline">
                {isEnterprise
                  ? "One connected multi-branch ecosystem for clinics, hospital departments & chains"
                  : "Clinic management made simple for independent & growing clinics"}
              </h2>

              <p className="pes-spec-hero-desc">
                {isEnterprise
                  ? "A unified platform connecting clinic owners, consulting doctors, therapists, and patients through 4 dedicated applications: Clinic Admin (manage all branches), Doctor Web Application, Therapist PWA App, and Patient PWA App."
                  : "Complete digital administration for physiotherapy practices. Handle appointment scheduling, patient billing, SOAP clinical notes, therapist assignment, and built-in clinic analytics in one place."}
              </p>

              <div className="pes-spec-hero-actions">
                <button
                  className="pes-spec-btn-primary"
                  onClick={() =>
                    openDemoModal(
                      isEnterprise
                        ? "Clinic Enterprise Edition"
                        : "Clinic Essentials Edition"
                    )
                  }
                >
                  Request {isEnterprise ? "Clinic Enterprise Edition" : "Clinic Essentials Edition"} Demo
                </button>
                <button
                  className="pes-spec-btn-outline"
                  onClick={handleScrollToCapabilities}
                >
                  Explore Capabilities
                </button>
              </div>
            </div>

            <div className="pes-spec-hero-right">
              <div className="pes-spec-hero-frame">
                <img
                  src={isEnterprise ? clinicEnterpriseImg : clinicEssentialsImg}
                  alt={isEnterprise ? "Clinic Enterprise Edition Interface" : "Clinic Essentials Interface"}
                  className="pes-spec-hero-img"
                />
                <div className="pes-spec-hero-frame-footer">
                  <div className="pes-spec-frame-info">
                    <TargetGreenIcon size={28} />
                    <div>
                      <div className="pes-spec-frame-title">
                        {isEnterprise
                          ? "Clinic Enterprise Edition"
                          : "Clinic Essentials Edition"}
                      </div>
                      <div className="pes-spec-frame-sub">
                        {isEnterprise
                          ? "Multi-Branch & 4-App Connected Suite"
                          : "All-in-One Clinic Management"}
                      </div>
                    </div>
                  </div>
                  <span className="pes-spec-frame-badge">✓ Verified</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: 4 CONNECTED PILLARS & TELEMETRY */}
          <section className="pes-spec-section">
            <div className="pes-spec-section-header">
              <span className="pes-spec-section-badge">
                {isEnterprise ? "FOUR CONNECTED APPLICATIONS" : "INTEGRATED OPERATIONS & INTELLIGENCE"}
              </span>
              <h2 className="pes-spec-section-title">
                {isEnterprise
                  ? "The 4 Pillars of Clinic Enterprise Edition"
                  : "All-in-One Clinic Management & Analytics"}
              </h2>
              <p className="pes-spec-section-sub">
                {isEnterprise
                  ? "Four specialized interfaces built to connect clinic management, doctor consultations, therapist rehabilitation, and patient recovery into one seamless loop."
                  : "Four integrated operational pillars powering daily patient throughput and reception efficiency."}
              </p>
            </div>

            <div className="pes-spec-pillars-grid">
              {isEnterprise ? (
                <>
                  {/* Enterprise Pillar 1: Clinic Admin Portal */}
                  <div className="pes-spec-pillar-card">
                    <div className="pes-spec-pillar-head">
                      <div className="pes-spec-pillar-icon">
                        🏥
                      </div>
                      <div>
                        <h3 className="pes-spec-pillar-title">Clinic Admin Portal</h3>
                        <p className="pes-spec-pillar-sub">
                          Manage All Branches &amp; Central Operations
                        </p>
                      </div>
                    </div>
                    <p className="pes-spec-pillar-desc">
                      Complete command center to manage multiple clinic branches, staff credentials, room &amp; bed allocations, cross-branch revenue, inventory, and executive-level analytics from one unified dashboard.
                    </p>
                    <div className="pes-spec-pillar-list">
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Manage all clinic branches &amp; locations seamlessly</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Staff &amp; therapist role-based access &amp; attendance</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Centralized patient directory &amp; cross-branch records</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Facility &amp; bed capacity utilization metrics</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Multi-branch comparative analytics &amp; P&amp;L reports</span>
                      </div>
                    </div>
                  </div>

                  {/* Enterprise Pillar 2: Doctor Web Application */}
                  <div className="pes-spec-pillar-card">
                    <div className="pes-spec-pillar-head">
                      <div className="pes-spec-pillar-icon">
                        🩺
                      </div>
                      <div>
                        <h3 className="pes-spec-pillar-title">Doctor Web Application</h3>
                        <p className="pes-spec-pillar-sub">
                          Prescriptions, SOAP Notes &amp; Treatment Plans
                        </p>
                      </div>
                    </div>
                    <p className="pes-spec-pillar-desc">
                      Specialized clinical portal for doctors and consulting orthopedic/physiatrist specialists to evaluate patients, generate digital prescriptions, record detailed SOAP clinical notes, and design tailored treatment plans.
                    </p>
                    <div className="pes-spec-pillar-list">
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Digital prescription generation with dosage &amp; frequency</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Comprehensive SOAP clinical documentation</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Customized physiotherapy treatment plans &amp; milestones</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Direct patient referral &amp; therapist handover workflow</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Live recovery curves &amp; mobility progress tracking</span>
                      </div>
                    </div>
                  </div>

                  {/* Enterprise Pillar 3: Therapist PWA App */}
                  <div className="pes-spec-pillar-card">
                    <div className="pes-spec-pillar-head">
                      <div className="pes-spec-pillar-icon">
                        📱
                      </div>
                      <div>
                        <h3 className="pes-spec-pillar-title">Therapist PWA App</h3>
                        <p className="pes-spec-pillar-sub">
                          Treatment Process &amp; Session Management
                        </p>
                      </div>
                    </div>
                    <p className="pes-spec-pillar-desc">
                      A fast, lightweight Progressive Web App that therapists install directly on any iOS or Android phone without an app store. Guides therapists through active patient treatment processes, session repetitions, and daily schedules.
                    </p>
                    <div className="pes-spec-pillar-list">
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Interactive treatment process execution &amp; exercise logging</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Daily appointment schedule &amp; assigned patient list</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Instant clinical session notes &amp; progress updates</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Check-in / check-out timestamps with bed assignment</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Works offline and syncs automatically with cloud</span>
                      </div>
                    </div>
                  </div>

                  {/* Enterprise Pillar 4: Patient PWA App */}
                  <div className="pes-spec-pillar-card" style={{ border: "1.5px solid #3b82f6" }}>
                    <div className="pes-spec-pillar-head">
                      <div className="pes-spec-pillar-icon">
                        📲
                      </div>
                      <div>
                        <h3 className="pes-spec-pillar-title">Patient PWA App</h3>
                        <p className="pes-spec-pillar-sub">
                          Appointments, Treatment Tracking &amp; Home Exercises
                        </p>
                      </div>
                    </div>
                    <p className="pes-spec-pillar-desc">
                      An intuitive Progressive Web App empowering patients to view their personal health records, upcoming appointments, treatment milestones, prescribed home exercises, and digital receipts on their smartphone.
                    </p>
                    <div className="pes-spec-pillar-list">
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>View upcoming &amp; past appointment schedules</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Real-time treatment tracking &amp; recovery journey score</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Prescribed home exercise programs with clear guidance</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Access digital prescriptions, invoices &amp; SOAP summaries</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>One-tap appointment rescheduling &amp; WhatsApp support</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Essentials Pillar 1 */}
                  <div className="pes-spec-pillar-card">
                    <div className="pes-spec-pillar-head">
                      <div className="pes-spec-pillar-icon">
                        <FiCalendar />
                      </div>
                      <div>
                        <h3 className="pes-spec-pillar-title">Smart Patient Scheduling</h3>
                        <p className="pes-spec-pillar-sub">Multi-Bed Calendar &amp; WhatsApp Confirmations</p>
                      </div>
                    </div>
                    <p className="pes-spec-pillar-desc">
                      Effortlessly book, reschedule, and manage multi-bed outpatient queues with automated slot buffers and therapist availability sync.
                    </p>
                    <div className="pes-spec-pillar-list">
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Color-coded multi-bed and room allocation calendar</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Automated WhatsApp appointment confirmations &amp; reminders</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Instant walk-in triage and token queue management</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Therapist leave management &amp; emergency shift handovers</span>
                      </div>
                    </div>
                  </div>

                  {/* Essentials Pillar 2 */}
                  <div className="pes-spec-pillar-card">
                    <div className="pes-spec-pillar-head">
                      <div className="pes-spec-pillar-icon">
                        <FiFileText />
                      </div>
                      <div>
                        <h3 className="pes-spec-pillar-title">Standardized SOAP Clinical Notes</h3>
                        <p className="pes-spec-pillar-sub">Rapid Clinical Records &amp; Milestone Tracking</p>
                      </div>
                    </div>
                    <p className="pes-spec-pillar-desc">
                      Document patient assessments with structured Subjective, Objective, Assessment, and Plan fields, digital pain scale, and Range-of-Motion charts.
                    </p>
                    <div className="pes-spec-pillar-list">
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Pre-populated orthopedic &amp; neurological assessment templates</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Digital pain scale (VAS) &amp; mobile ROM angle recording</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Cumulative session history &amp; previous treatment notes</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>One-click discharge summary &amp; medical certificate export</span>
                      </div>
                    </div>
                  </div>

                  {/* Essentials Pillar 3 */}
                  <div className="pes-spec-pillar-card">
                    <div className="pes-spec-pillar-head">
                      <div className="pes-spec-pillar-icon">
                        <FiCreditCard />
                      </div>
                      <div>
                        <h3 className="pes-spec-pillar-title">Smart Billing &amp; Inventory</h3>
                        <p className="pes-spec-pillar-sub">Digital Invoicing &amp; Package Settlements</p>
                      </div>
                    </div>
                    <p className="pes-spec-pillar-desc">
                      Generate professional digital invoices, track package sessions (e.g., 10-session rehab package), and manage modality consumables in real time.
                    </p>
                    <div className="pes-spec-pillar-list">
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Instant GST-compliant invoicing with WhatsApp dispatch</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Rehabilitation package session balance decrementing</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>UPI, Card, Net Banking &amp; Cash ledger reconciliation</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Electrotherapy supplies &amp; taping inventory tracking</span>
                      </div>
                    </div>
                  </div>

                  {/* Essentials Pillar 4 */}
                  <div className="pes-spec-pillar-card">
                    <div className="pes-spec-pillar-head">
                      <div className="pes-spec-pillar-icon">
                        <FiBarChart2 />
                      </div>
                      <div>
                        <h3 className="pes-spec-pillar-title">Built-in Clinic Analytics Engine</h3>
                        <p className="pes-spec-pillar-sub">Attendance Trends, Utilization &amp; Revenue</p>
                      </div>
                    </div>
                    <p className="pes-spec-pillar-desc">
                      Gain crystal-clear visibility into clinical operations without export spreadsheets or external reporting software.
                    </p>
                    <div className="pes-spec-pillar-list">
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Daily, weekly &amp; monthly patient footfall trend charts</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Therapist productivity, treatment completion &amp; drop-off rates</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Room &amp; therapy bed capacity utilization metrics</span>
                      </div>
                      <div className="pes-spec-pillar-item">
                        <FiCheck className="check-icon" />
                        <span>Net collection run-rate &amp; treatment package revenue breakdown</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Telemetry pill row */}
            <div className="pes-spec-telemetry-box">
              <div className="pes-spec-telemetry-title">
                <span>{isEnterprise ? "⚡" : "📊"}</span>{" "}
                {isEnterprise
                  ? "Enterprise Multi-Branch Synchronization & Deployment Features:"
                  : "Built-In Integrated Analytics & Clinical Operational Telemetry:"}
              </div>
              <div className="pes-spec-telemetry-tags">
                {isEnterprise ? (
                  <>
                    <span className="pes-spec-telemetry-tag">
                      🏢 Central Headquarters Command Center
                    </span>
                    <span className="pes-spec-telemetry-tag">
                      🩺 Doctor Web App SOAP Generation
                    </span>
                    <span className="pes-spec-telemetry-tag">
                      📱 Therapist Mobile PWA Offline Sync
                    </span>
                    <span className="pes-spec-telemetry-tag">
                      📲 Patient PWA Exercise Video Portal
                    </span>
                    <span className="pes-spec-telemetry-tag">
                      🔄 Cross-Branch Patient Transfer Ledger
                    </span>
                    <span className="pes-spec-telemetry-tag">
                      🛡️ Enterprise Custom EHR/HIS Integration
                    </span>
                  </>
                ) : (
                  <>
                    <span className="pes-spec-telemetry-tag">
                      <FiTrendingUp /> Patient Footfall &amp; Growth Velocity
                    </span>
                    <span className="pes-spec-telemetry-tag">
                      <FiTrendingUp /> Therapy Bed &amp; Modality Utilization
                    </span>
                    <span className="pes-spec-telemetry-tag">
                      <FiTrendingUp /> Therapist Session Productivity
                    </span>
                    <span className="pes-spec-telemetry-tag">
                      <FiTrendingUp /> Treatment Package Drop-off Rates
                    </span>
                    <span className="pes-spec-telemetry-tag">
                      <FiTrendingUp /> Net Daily Collections &amp; Cash Ledger
                    </span>
                    <span className="pes-spec-telemetry-tag">
                      <FiTrendingUp /> Automated WhatsApp Retention Alerts
                    </span>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* SECTION 3: DETAILED BREAKDOWN & TARGET AUDIENCE */}
          <section className="pes-spec-section" id="detailed-breakdown">
            <div className="pes-spec-breakdown-layout">
              {/* Left Column */}
              <div>
                <span className="pes-spec-section-badge">DETAILED BREAKDOWN</span>
                <h2 className="pes-spec-breakdown-title">
                  Key Clinical &amp; Management Capabilities
                </h2>
                <p className="pes-spec-breakdown-sub">
                  Engineered to save time, prevent documentation errors, and streamline patient outcomes.
                </p>

                <div className="pes-spec-analytics-callout">
                  <h4>
                    <span>{isEnterprise ? "⚡" : "📊"}</span>{" "}
                    {isEnterprise
                      ? "Four Interconnected Applications in One Enterprise Platform"
                      : "Built-in Clinic Analytics & Reports (Integrated)"}
                  </h4>
                  <p>
                    {isEnterprise
                      ? "1. Clinic Admin Portal (Manage all branches) · 2. Doctor Web App (Prescriptions, SOAP notes & treatment plans) · 3. Therapist PWA App (Treatment process) · 4. Patient PWA App..."
                      : "Track daily, weekly and monthly patient trends, therapist utilization, and revenue without separate tools."}
                  </p>
                </div>

                <div className="pes-spec-capabilities-grid">
                  {isEnterprise ? (
                    <>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Clinic Admin: Multi-Branch Central Control</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Doctor Web App: Prescriptions &amp; SOAP Plans</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Therapist PWA: Treatment Process Logging</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Patient PWA: Appointment &amp; Recovery Tracking</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Therapist PWA App: Mobile Session Schedule &amp; Patient Notes</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Patient PWA App: Live Appointment Booking &amp; Info Viewing</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Patient PWA App: Recovery Milestone &amp; Treatment Tracking</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Patient PWA App: Home Exercise Program Guidance</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Integrated Multi-Branch Growth &amp; Financial Analytics</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Custom Hospital EHR/HIS Integration &amp; Enterprise SLA</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Patient Booking &amp; Smart Billing</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Clinical Notes (Standard SOAP)</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Treatment Plans &amp; Multi-Sessions</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Therapist &amp; Bed Assignment</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Employee Attendance &amp; HR</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Inventory &amp; Therapy Equipment</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>WhatsApp Reminders &amp; Invoices</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Daily, Weekly &amp; Monthly Reports</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Patient Retention &amp; Revenue Trends</span>
                      </div>
                      <div className="pes-spec-cap-item">
                        <FiCheck className="cap-check" />
                        <span>Secure Cloud Backup &amp; Export</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column: Platform Engineering card */}
              <div className="pes-spec-sidebar">
                <div className="pes-spec-sidebar-card">
                  <h3 className="pes-spec-sidebar-title">Who is this built for?</h3>
                  <p className="pes-spec-sidebar-text">
                    {isEnterprise
                      ? "Multi-branch clinic chains, hospital physiotherapy departments, and regional rehabilitation networks needing a complete doctor-therapist-patient digital ecosystem."
                      : "Single-branch physiotherapy clinics, private rehabilitation practices, and sports outpatient centers seeking effortless digital workflow."}
                  </p>

                  <div style={{ marginTop: "18px" }}>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "#cbd5e1",
                        marginBottom: "8px",
                      }}
                    >
                      Technology Specs:
                    </div>
                    <div className="pes-spec-specs-row">
                      <span className="pes-spec-tech-badge">Cloud Based (24/7 Access)</span>
                      <span className="pes-spec-tech-badge">Doctor &amp; Admin Web Portal</span>
                      <span className="pes-spec-tech-badge">Therapist &amp; Patient PWAs</span>
                      <span className="pes-spec-tech-badge">WhatsApp Business API</span>
                      <span className="pes-spec-tech-badge">Role-Based Access Control</span>
                      <span className="pes-spec-tech-badge">Encrypted Data Backups</span>
                    </div>
                  </div>
                </div>

                <div className="pes-spec-platform-card">
                  <div className="pes-spec-platform-header">
                    <div style={{ marginBottom: "10px" }}>
                      <TargetGreenIcon size={34} />
                    </div>
                    <span className="pes-spec-platform-badge">PLATFORM ENGINEERING</span>
                    <h4 className="pes-spec-platform-title">
                      Developed by Chiselon Technologies Private Limited
                    </h4>
                    <p className="pes-spec-platform-division">
                      {isEnterprise
                        ? "Enterprise Multi-Tenant Systems Architecture Group"
                        : "Clinical Practice Automation & SOAP Informatics Division"}
                    </p>
                  </div>

                  <p className="pes-spec-platform-desc">
                    {isEnterprise
                      ? "Built as a four-application synchronous ecosystem bridging Clinic Admin, Doctor Web App, Therapist PWA, and Patient PWA across multi-branch hospital chains."
                      : "Engineered specifically for outpatient physiotherapy practices to streamline clinical documentation, automated billing, and daily reception workflow."}
                  </p>




                </div>

                <button
                  className="pes-spec-specialist-btn"
                  onClick={() =>
                    openDemoModal(
                      isEnterprise
                        ? "Clinic Enterprise Edition (Specialist Consultation)"
                        : "Clinic Essentials Edition (Specialist Consultation)"
                    )
                  }
                >
                  Talk to an Implementation Specialist
                </button>
              </div>
            </div>
          </section>

          {/* POPUP MODAL FOR DEMO REQUEST (IN SPEC VIEW) */}
          {isDemoModalOpen && (
            <div className="demo-modal-overlay" onClick={closeDemoModal}>
              <div className="demo-modal-container" onClick={(e) => e.stopPropagation()}>
                <button
                  className="demo-modal-close"
                  onClick={closeDemoModal}
                  aria-label="Close"
                >
                  ✕
                </button>
                <div className="demo-modal-card">
                  <div className="demo-modal-header">
                    <h3 className="demo-modal-title">READY TO TRANSFORM YOUR PRACTICE?</h3>
                    <p className="demo-modal-sub">
                      Schedule a free, no-obligation demo and discover how Chiselon can optimize your practice workflow.
                    </p>
                  </div>

                  <form className="demo-modal-form" onSubmit={handleDemoFormSubmit}>
                    <div className="demo-modal-row">
                      <input
                        type="text"
                        name="fullNameOrClinicName"
                        placeholder="Full Name / Clinic Name"
                        value={demoFormData.fullNameOrClinicName}
                        onChange={handleDemoFormChange}
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={demoFormData.email}
                        onChange={handleDemoFormChange}
                        required
                      />
                    </div>
                    <div className="demo-modal-row">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={demoFormData.phone}
                        onChange={handleDemoFormChange}
                        required
                      />
                      <input
                        type="text"
                        name="preferredTime"
                        placeholder="Preferred Time (optional)"
                        value={demoFormData.preferredTime}
                        onChange={handleDemoFormChange}
                      />
                    </div>

                    <button type="submit" className="demo-modal-submit-btn">
                      Request a Demo
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // DEFAULT VIEW: SHOW THE TWO CARDS (MODULE 01 & MODULE 02)
  return (
    <section className="pes-products-page">
      <div className="pes-container">
        {/* Visit Our PhysioElite Website Button placed at top center above Module 1 Card */}
        <div className="pes-visit-website-wrap">
          <a
            href="https://ccmspes.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="pes-visit-website-btn"
          >
            Visit Our PhysioElite Website ↗
          </a>
        </div>

        <div className="pes-cards-grid">
          {/* Card 1: Module 01 - Clinic Essentials Edition (Left Image, Right Information) */}
          <div className="pes-card featured-card layout-left-img">
            <div className="pes-card-image-wrap">
              <img
                src={clinicEssentialsImg}
                alt="Clinic Essentials Edition"
                className="pes-card-img"
              />
              <div className="pes-badge-top-left">
                <TargetIcon />
                <span>Module 01</span>
              </div>
              <div className="pes-badge-top-right">
                All-in-One Clinic Management
              </div>
            </div>

            <div className="pes-card-body">
              <div className="pes-card-header">
                <div className="pes-bullet-icon">
                  <TargetIcon />
                </div>
                <h3 className="pes-card-title">Clinic Essentials Edition</h3>
              </div>

              <p className="pes-card-company">
                Developed by <strong>Chiselon Technologies Private Limited</strong>
              </p>

              <p className="pes-card-tagline">
                Clinic management made simple for independent &amp; growing clinics
              </p>

              <p className="pes-card-desc">
                Complete digital administration for physiotherapy practices. Handle
                appointment scheduling, patient billing, SOAP clinical notes, therapist
                assignment, and built-in clinic analytics in one place.
              </p>

              <div className="pes-highlight-box">
                <div className="pes-highlight-heading">
                  <span>📊</span> Built-in Clinic Analytics &amp; Reports (Integrated)
                </div>
                <p className="pes-highlight-text">
                  Track daily, weekly and monthly patient trends, therapist utilization, and revenue without separate tools.
                </p>
              </div>

              <div className="pes-feature-grid">
                <div className="pes-feature-item">
                  <FiCheck className="pes-feature-icon" />
                  <span>Patient Booking &amp; Smart Billing</span>
                </div>
                <div className="pes-feature-item">
                  <FiCheck className="pes-feature-icon" />
                  <span>Clinical Notes (Standard SOAP)</span>
                </div>
                <div className="pes-feature-item">
                  <FiCheck className="pes-feature-icon" />
                  <span>Treatment Plans &amp; Multi-Sessions</span>
                </div>
                <div className="pes-feature-item">
                  <FiCheck className="pes-feature-icon" />
                  <span>Therapist &amp; Bed Assignment</span>
                </div>
              </div>

              <div className="pes-card-footer">
                <span className="pes-pill-btn">All-in-One Clinic Management</span>
                <button
                  type="button"
                  onClick={() => handleSelectProduct("clinic-essentials")}
                  className="pes-specs-link"
                >
                  Full Specifications <FiArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Module 02 - Clinic Enterprise Edition (Left Information, Right Image) */}
          <div className="pes-card standard-card layout-right-img">
            <div className="pes-card-image-wrap">
              <img
                src={clinicEnterpriseImg}
                alt="Clinic Enterprise Edition"
                className="pes-card-img"
              />
              <div className="pes-badge-top-left">
                <TargetIcon />
                <span>Module 02</span>
              </div>
              <div className="pes-badge-top-right">
                Multi-Branch &amp; 4-App Connected Suite
              </div>
            </div>

            <div className="pes-card-body">
              <div className="pes-card-header">
                <div className="pes-bullet-icon">
                  <TargetIcon />
                </div>
                <h3 className="pes-card-title">Clinic Enterprise Edition</h3>
              </div>

              <p className="pes-card-company">
                Developed by <strong>Chiselon Technologies Private Limited</strong>
              </p>

              <p className="pes-card-tagline">
                One connected multi-branch ecosystem for clinics, hospital departments &amp; chains
              </p>

              <p className="pes-card-desc">
                A unified platform connecting clinic owners, consulting doctors, therapists,
                and patients through 4 dedicated applications: Clinic Admin (manage all
                branches), Doctor Web Application, Therapist PWA App, and Patient PWA...
              </p>

              <div className="pes-highlight-box">
                <div className="pes-highlight-heading">
                  <span>⚡</span> Four Interconnected Applications in One Enterprise Platform
                </div>
                <p className="pes-highlight-text">
                  1. Clinic Admin Portal (Manage all branches) · 2. Doctor Web App (Prescriptions, SOAP notes &amp; treatment plans) · 3. Therapist PWA App (Treatment process) · 4. Patient PWA...
                </p>
              </div>

              <div className="pes-feature-grid">
                <div className="pes-feature-item">
                  <FiCheck className="pes-feature-icon" />
                  <span>Clinic Admin: Multi-Branch Central Control</span>
                </div>
                <div className="pes-feature-item">
                  <FiCheck className="pes-feature-icon" />
                  <span>Doctor Web App: Prescriptions &amp; SOAP Plans</span>
                </div>
                <div className="pes-feature-item">
                  <FiCheck className="pes-feature-icon" />
                  <span>Therapist PWA: Treatment Process Logging</span>
                </div>
                <div className="pes-feature-item">
                  <FiCheck className="pes-feature-icon" />
                  <span>Patient PWA: Appointment &amp; Recovery Tracking</span>
                </div>
              </div>

              <div className="pes-card-footer">
                <span className="pes-pill-btn">Multi-Branch &amp; 4-App Connected Suite</span>
                <button
                  type="button"
                  onClick={() => handleSelectProduct("clinic-enterprise")}
                  className="pes-specs-link"
                >
                  Full Specifications <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP MODAL FOR DEMO REQUEST */}
      {isDemoModalOpen && (
        <div className="demo-modal-overlay" onClick={closeDemoModal}>
          <div className="demo-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="demo-modal-close"
              onClick={closeDemoModal}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="demo-modal-card">
              <div className="demo-modal-header">
                <h3 className="demo-modal-title">READY TO TRANSFORM YOUR PRACTICE?</h3>
                <p className="demo-modal-sub">
                  Schedule a free, no-obligation demo and discover how Chiselon can optimize your practice workflow.
                </p>
              </div>

              <form className="demo-modal-form" onSubmit={handleDemoFormSubmit}>
                <div className="demo-modal-row">
                  <input
                    type="text"
                    name="fullNameOrClinicName"
                    placeholder="Full Name / Clinic Name"
                    value={demoFormData.fullNameOrClinicName}
                    onChange={handleDemoFormChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={demoFormData.email}
                    onChange={handleDemoFormChange}
                    required
                  />
                </div>
                <div className="demo-modal-row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={demoFormData.phone}
                    onChange={handleDemoFormChange}
                    required
                  />
                  <input
                    type="text"
                    name="preferredTime"
                    placeholder="Preferred Time (optional)"
                    value={demoFormData.preferredTime}
                    onChange={handleDemoFormChange}
                  />
                </div>

                <button type="submit" className="demo-modal-submit-btn">
                  Request a Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
