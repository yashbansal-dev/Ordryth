import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for ORDRYTH. Clear and transparent information regarding data collection, analytics, and contact communications.",
};

export default function PrivacyPage() {
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
              LEGAL &amp; TRANSPARENCY
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
              Privacy Policy
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
                1. Overview &amp; Commitment
              </h2>
              <p>
                ORDRYTH (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is an independent technology company
                exploring and building intelligent systems. We are committed to transparency and respect for user
                privacy. This Privacy Policy accurately describes the information collected through our official
                website (<code style={{ color: "var(--text-primary)" }}>ordryth.com</code>) and how that information is
                handled.
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
                2. Information We Collect
              </h2>
              <p style={{ marginBottom: "12px" }}>
                We collect only the information necessary to provide an informative web experience and facilitate direct
                communication:
              </p>
              <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>Correspondence Information:</strong> When you submit
                  an inquiry through our contact form or send us an email, we collect your name, email address,
                  organisation (if provided), inquiry type, and message content.
                </li>
                <li>
                  <strong style={{ color: "var(--text-primary)" }}>Technical Telemetry:</strong> We utilize privacy-first
                  web analytics (Vercel Web Analytics) that operates without third-party tracking cookies, user profiling,
                  or cross-site identity tracking. Collected data is aggregated and anonymized (e.g., page views, general
                  geographic region, browser type).
                </li>
              </ul>
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
                3. How We Use Information
              </h2>
              <p style={{ marginBottom: "12px" }}>Any information received is used exclusively to:</p>
              <ul style={{ paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li>Respond to inquiries, collaboration proposals, or partnership requests.</li>
                <li>Evaluate talent submissions for prospective career and research engagements.</li>
                <li>Monitor aggregate website health, performance, and uptime.</li>
                <li>Comply with applicable legal or regulatory obligations.</li>
              </ul>
              <p style={{ marginTop: "14px" }}>
                We do not sell, rent, monetize, or disclose personal communication details to advertisers or data brokers.
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
                4. External Products &amp; Services (Imagica)
              </h2>
              <p>
                ORDRYTH is the parent brand behind Imagica (<code style={{ color: "var(--text-primary)" }}>imagica.co.in</code>).
                Imagica operates as a standalone creative platform with its own dedicated local execution architecture
                and separate service terms. When visiting external product sites or downloading local software binaries,
                please refer to the specific privacy documentation provided on those domains.
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
                5. Data Retention &amp; User Rights
              </h2>
              <p>
                Inquiry correspondence is retained only for as long as necessary to fulfill the purpose for which it was
                communicated. Depending on your jurisdiction, you may have the right to request access to, correction of,
                or deletion of any personal information you have provided.
              </p>
              <p style={{ marginTop: "12px" }}>
                To exercise any privacy rights or request information regarding your correspondence records, please email
                us directly at{" "}
                <a
                  href="mailto:contact@ordryth.com"
                  style={{ color: "var(--text-primary)", textDecoration: "underline" }}
                >
                  contact@ordryth.com
                </a>
                .
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
                6. Updates to This Policy
              </h2>
              <p>
                We may periodically update this policy to reflect modifications in our systems, products, or regulatory
                guidelines. Any updates will be published on this page with an updated effective date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
