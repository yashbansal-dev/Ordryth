"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send, Mail } from "lucide-react";

const ENQUIRY_TYPES = [
  "General enquiries",
  "Research and collaboration",
  "Product enquiries",
  "Business partnerships",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    enquiryType: "General enquiries",
    message: "",
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Please provide your name.";
    if (!formData.email.trim()) {
      errs.email = "Please provide an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = "Please write a message with at least 15 characters.";
    }
    if (!formData.privacyAccepted) {
      errs.privacyAccepted = "Please acknowledge the privacy policy to proceed.";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 700);
    }
  };

  return (
    <div style={{ backgroundColor: "var(--bg-main)", minHeight: "100vh" }}>
      {/* Header */}
      <section
        style={{
          paddingTop: "clamp(64px, 10vw, 100px)",
          paddingBottom: "clamp(48px, 6vw, 72px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "800px" }}>
            <span
              style={{
                fontSize: "0.76rem",
                fontWeight: 650,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                display: "block",
                marginBottom: "16px",
              }}
            >
              CONTACT ORDRYTH
            </span>

            <h1
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "24px",
              }}
            >
              Start a conversation.
            </h1>

            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                fontWeight: 450,
              }}
            >
              We welcome thoughtful conversations about technology, research, product development, and potential
              collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Form & Details */}
      <section
        style={{
          paddingTop: "clamp(56px, 8vw, 88px)",
          paddingBottom: "clamp(72px, 10vw, 110px)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(40px, 6vw, 80px)",
            }}
          >
            {/* Left Column: Functional Contact Form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "48px 36px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(44, 110, 73, 0.1)",
                      color: "var(--accent-sage)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px auto",
                    }}
                  >
                    <CheckCircle2 size={30} />
                  </div>

                  <h2
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "12px",
                    }}
                  >
                    Message Received
                  </h2>

                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                      marginBottom: "28px",
                      maxWidth: "460px",
                      margin: "0 auto 28px auto",
                    }}
                  >
                    Thank you, {formData.name}. Your note has been registered with our team. We review all incoming
                    inquiries thoughtfully and will reach out if there is a mutual fit.
                  </p>

                  <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          organisation: "",
                          enquiryType: "General enquiries",
                          message: "",
                          privacyAccepted: false,
                        });
                      }}
                      className="btn btn-secondary"
                    >
                      Send another message
                    </button>
                    <a href="mailto:contact@ordryth.com" className="btn btn-primary">
                      Direct Email Client
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "clamp(28px, 5vw, 44px)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Name <span style={{ color: "var(--accent-crimson)" }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "0.95rem",
                        borderRadius: "var(--radius-sm)",
                        border: `1px solid ${errors.name ? "var(--accent-crimson)" : "var(--border-medium)"}`,
                        backgroundColor: "var(--bg-main)",
                        color: "var(--text-primary)",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                    {errors.name && (
                      <p style={{ fontSize: "0.78rem", color: "var(--accent-crimson)", marginTop: "6px" }}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Email address <span style={{ color: "var(--accent-crimson)" }}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "0.95rem",
                        borderRadius: "var(--radius-sm)",
                        border: `1px solid ${errors.email ? "var(--accent-crimson)" : "var(--border-medium)"}`,
                        backgroundColor: "var(--bg-main)",
                        color: "var(--text-primary)",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                    {errors.email && (
                      <p style={{ fontSize: "0.78rem", color: "var(--accent-crimson)", marginTop: "6px" }}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Organisation Field (Optional) */}
                  <div>
                    <label
                      htmlFor="contact-org"
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Organisation <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      placeholder="Company, university, or studio"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "0.95rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border-medium)",
                        backgroundColor: "var(--bg-main)",
                        color: "var(--text-primary)",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  {/* Enquiry Type Field */}
                  <div>
                    <label
                      htmlFor="contact-type"
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Enquiry type <span style={{ color: "var(--accent-crimson)" }}>*</span>
                    </label>
                    <select
                      id="contact-type"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "0.95rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border-medium)",
                        backgroundColor: "var(--bg-main)",
                        color: "var(--text-primary)",
                        outline: "none",
                        fontFamily: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      {ENQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-msg"
                      style={{
                        display: "block",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      Message <span style={{ color: "var(--accent-crimson)" }}>*</span>
                    </label>
                    <textarea
                      id="contact-msg"
                      rows={5}
                      placeholder="Please share details about your inquiry, project scope, or research topic..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "0.95rem",
                        borderRadius: "var(--radius-sm)",
                        border: `1px solid ${errors.message ? "var(--accent-crimson)" : "var(--border-medium)"}`,
                        backgroundColor: "var(--bg-main)",
                        color: "var(--text-primary)",
                        outline: "none",
                        fontFamily: "inherit",
                        resize: "vertical",
                        lineHeight: 1.5,
                      }}
                    />
                    {errors.message && (
                      <p style={{ fontSize: "0.78rem", color: "var(--accent-crimson)", marginTop: "6px" }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy Checkbox */}
                  <div>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.privacyAccepted}
                        onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                        style={{
                          marginTop: "3px",
                          accentColor: "var(--text-primary)",
                          cursor: "pointer",
                        }}
                      />
                      <span>
                        I acknowledge that the information provided will be handled in accordance with the ORDRYTH{" "}
                        <a href="/privacy" style={{ textDecoration: "underline", color: "var(--text-primary)" }}>
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                    {errors.privacyAccepted && (
                      <p style={{ fontSize: "0.78rem", color: "var(--accent-crimson)", marginTop: "6px" }}>
                        {errors.privacyAccepted}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg btn-block"
                    style={{ marginTop: "8px" }}
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Channels & Information */}
            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              <div>
                <h2
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                  }}
                >
                  Direct correspondence
                </h2>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>
                  You may also reach our team directly via electronic mail for specialized inquiries.
                </p>
              </div>

              {/* Email Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div
                  style={{
                    padding: "20px 24px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <Mail size={16} style={{ color: "var(--accent-terracotta)" }} />
                    <span style={{ fontSize: "0.76rem", fontWeight: 650, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                      General &amp; Partnerships
                    </span>
                  </div>
                  <a
                    href="mailto:contact@ordryth.com"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    contact@ordryth.com
                  </a>
                </div>

                <div
                  style={{
                    padding: "20px 24px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <Mail size={16} style={{ color: "var(--accent-cobalt)" }} />
                    <span style={{ fontSize: "0.76rem", fontWeight: 650, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                      Research Collaboration
                    </span>
                  </div>
                  <a
                    href="mailto:research@ordryth.com"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    research@ordryth.com
                  </a>
                </div>

                <div
                  style={{
                    padding: "20px 24px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <Mail size={16} style={{ color: "var(--accent-sage)" }} />
                    <span style={{ fontSize: "0.76rem", fontWeight: 650, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                      Careers &amp; Engineering
                    </span>
                  </div>
                  <a
                    href="mailto:careers@ordryth.com"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    careers@ordryth.com
                  </a>
                </div>
              </div>

              {/* Editorial Response Policy */}
              <div
                style={{
                  padding: "24px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-surface-alt)",
                  border: "1px solid var(--border-medium)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <AlertCircle size={16} style={{ color: "var(--text-muted)" }} />
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    Response timeline
                  </span>
                </div>
                <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  Because our small team concentrates deeply on active engineering and research, we prioritize inquiries
                  with clear context and alignment. Typical response times range from 2 to 4 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
