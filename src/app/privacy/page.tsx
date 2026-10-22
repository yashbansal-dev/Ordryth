"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoTransparent from "../../../public/logo-transparent.png";
import { Footer2 } from "@/components/ui/footer-2";

export default function PrivacyPolicyPage() {
  return (
    <div className="anthropic-canvas" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top Floating Editorial Navbar */}
      <nav className="anthropic-nav">
        <div className="anthropic-nav-inner">
          <div className="anthropic-nav-left">
            <Link href="/" className="anthropic-logo">
              <Image
                src={logoTransparent}
                alt="Ordryth Mark"
                width={26}
                height={26}
                className="brand-logo-img"
                style={{ marginRight: "8px" }}
                priority
              />
              <span>ORDRYTH</span>
            </Link>
          </div>

          <div className="anthropic-nav-right">
            <Link href="/about" className="anthropic-nav-link">
              Company
            </Link>
            <Link href="/research" className="anthropic-nav-link">
              Architecture
            </Link>
            <Link href="/contact" className="anthropic-nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, maxWidth: "860px", margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        <header style={{ marginBottom: "48px", borderBottom: "1px solid #E6E1D5", paddingBottom: "32px" }}>
          <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.03em", color: "#191816", marginBottom: "16px" }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: "0.95rem", color: "#7A756D" }}>
            Last updated: October 2026 &bull; ORDRYTH Private Limited, India
          </p>
        </header>

        <article style={{ display: "flex", flexDirection: "column", gap: "36px", fontSize: "1rem", lineHeight: 1.75, color: "#56534E" }}>
          <section>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", fontWeight: 600, color: "#191816", marginBottom: "12px" }}>
              1. Overview &amp; Commitment to Privacy
            </h2>
            <p>
              ORDRYTH Private Limited (&ldquo;ORDRYTH&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, handle, and safeguard your data when you visit our website (ordryth.com) or interact with our software products, including Imagica.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", fontWeight: 600, color: "#191816", marginBottom: "12px" }}>
              2. Sovereign Local-First Computing
            </h2>
            <p>
              A cornerstone of our engineering philosophy is local-first architecture. When utilizing our standalone desktop software in offline/local execution mode, all image generation prompts, model weights, and output artifacts remain entirely on your local machine. No prompt data, training inputs, or generated images are transmitted to external servers without your explicit opt-in.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", fontWeight: 600, color: "#191816", marginBottom: "12px" }}>
              3. Information We Collect
            </h2>
            <p>
              When you use our public websites or voluntarily communicate with us:
            </p>
            <ul style={{ paddingLeft: "24px", marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li><strong>Contact Information:</strong> Email address and name provided when reaching out to contact@ordryth.com or for business inquiries.</li>
              <li><strong>Technical Telemetry:</strong> Aggregated, privacy-preserving performance metrics (e.g., page load times, device OS type) via privacy-first analytics tools. We do not sell or monetize personal browsing history.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", fontWeight: 600, color: "#191816", marginBottom: "12px" }}>
              4. Data Retention &amp; Security
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to preserve data integrity and prevent unauthorized access. Personal data is retained only for as long as necessary to fulfill the specific purposes outlined herein or comply with statutory requirements under Indian law.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", fontWeight: 600, color: "#191816", marginBottom: "12px" }}>
              5. Contact &amp; Grievances
            </h2>
            <p>
              For any questions regarding this Privacy Policy or data requests, you can contact our privacy officer directly at:
            </p>
            <p style={{ marginTop: "12px", padding: "16px 20px", backgroundColor: "#F5F2EA", borderRadius: "8px", border: "1px solid #E6E1D5", fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
              ORDRYTH Private Limited<br />
              Email: <a href="mailto:contact@ordryth.com" style={{ color: "#C85A32", textDecoration: "underline" }}>contact@ordryth.com</a><br />
              Jurisdiction: India
            </p>
          </section>
        </article>
      </main>

      <Footer2 />
    </div>
  );
}
