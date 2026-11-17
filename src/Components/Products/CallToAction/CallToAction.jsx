import React, { useState } from "react";
import "./CallToAction.css";

const CallToAction = ({ onRequestDemo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullNameOrClinicName: "",
    email: "",
    phone: "",
    preferredTime: "",
  });

  const phoneNumber = "918807981081";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappAppUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const newWindow = window.open(whatsappAppUrl, "_blank");
    setTimeout(() => {
      if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
        window.open(whatsappWebUrl, "_blank");
      }
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullNameOrClinicName, email, phone } = formData;
    if (!fullNameOrClinicName || !email || !phone) {
      alert("Please fill all required fields before submitting!");
      return;
    }

    const message = `Hello! I would like to request a Demo.\n\nFull Name / Clinic Name: ${formData.fullNameOrClinicName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Time: ${formData.preferredTime || "Not specified"}`;
    openWhatsApp(message);
    setFormData({ fullNameOrClinicName: "", email: "", phone: "", preferredTime: "" });
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="cta-section">
        <div className="particles"></div>
        <div className="cta-container">
          <h6 className="cta-title">
            At Chiselon, our products are enablers of growth and transformation.
          </h6>
          <p>👉 Ready to explore how our products can work for you?</p>
          <div className="cta-buttons">
            <button
              className="btn primary"
              onClick={() => setIsModalOpen(true)}
            >
              Request a Demo
            </button>
            <button
              className="btn secondary"
              onClick={() =>
                openWhatsApp("Hello! I would like to get in touch with your team.")
              }
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* MODAL POPUP FOR DEMO REQUEST */}
      {isModalOpen && (
        <div className="demo-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="demo-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="demo-modal-close"
              onClick={() => setIsModalOpen(false)}
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

              <form className="demo-modal-form" onSubmit={handleSubmit}>
                <div className="demo-modal-row">
                  <input
                    type="text"
                    name="fullNameOrClinicName"
                    placeholder="Full Name / Clinic Name"
                    value={formData.fullNameOrClinicName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="demo-modal-row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="preferredTime"
                    placeholder="Preferred Time (optional)"
                    value={formData.preferredTime}
                    onChange={handleChange}
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
    </>
  );
};

export default CallToAction;
