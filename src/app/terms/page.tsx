import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for ORDRYTH. Guidelines governing the use of this website, intellectual property, and external service links.",
};

export default function TermsPage() {
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
              LEGAL TERMS
            </span>

            <h1
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "var(--text-primary)",
                marginBottom: "20px",
              }}
            >
              Terms of Use
            </h1>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
              Effective date: October 22, 2026 &bull; Last updated: October 2026
            </p>
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section
        style={{
          paddingTop: "clamp(56px, 8vw, 84px)",
          paddingBottom: "clamp(72px, 10vw, 110px)",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "760px",
              fontSize: "1rem",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              display: "flex",
              flexDirection: "column",
              gap: "36px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "14px",
                }}
              >
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or navigating the ORDRYTH website (<code style={{ color: "var(--text-primary)" }}>ordryth.com</code>),
                you agree to comply with and be bound by these Terms of Use. If you do not agree with any portion of
                these terms, you should refrain from using this website.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "14px",
                }}
              >
                2. Informational Purpose
              </h2>
              <p>
                This website is made available for informational purposes regarding ORDRYTH, its research programs,
                architectural principles, and technology products. While we endeavor to ensure that all information
                presented is current and accurate, we do not warrant that all specifications or materials will remain
                error-free or uninterrupted.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "14px",
                }}
              >
                3. Intellectual Property Rights
              </h2>
              <p>
                All visual design systems, brand identities, logomarks, typography tokens, text copy, graphic
                compositions, and interface elements on this site are the exclusive intellectual property of ORDRYTH or
                its respective product lines (including Imagica). You may not reproduce, distribute, modify, or create
                derivative works of these assets without prior written consent from ORDRYTH.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "14px",
                }}
              >
                4. External Links &amp; Product Services
              </h2>
              <p>
                Our website links to our flagship product platform Imagica (<code style={{ color: "var(--text-primary)" }}>imagica.co.in</code>)
                as well as external technical references. ORDRYTH is not responsible for the availability, terms, or
                practices of unaffiliated third-party services. Usage of Imagica or other standalone applications is
                subject to their respective software license agreements and terms.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "14px",
                }}
              >
                5. Disclaimer of Warranties
              </h2>
              <p>
                This website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis,
                without express or implied warranties of any kind, including but not limited to fitness for a particular
                purpose, title, or non-infringement.
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "14px",
                }}
              >
                6. Questions &amp; Contact
              </h2>
              <p>
                For questions regarding these Terms of Use, please reach out via electronic mail at{" "}
                <a
                  href="mailto:contact@ordryth.com"
                  style={{ color: "var(--text-primary)", textDecoration: "underline" }}
                >
                  contact@ordryth.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
