"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoTransparent from "../../../public/logo-transparent.png";
import { Footer2 } from "@/components/ui/footer-2";

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p style={{ fontSize: "0.95rem", color: "#7A756D" }}>
            Last updated: October 2026 &bull; ORDRYTH Private Limited, India
          </p>
        </header>

        <article style={{ display: "flex", flexDirection: "column", gap: "36px", fontSize: "1rem", lineHeight: 1.75, color: "#56534E" }}>
          <section>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", fontWeight: 600, color: "#191816", marginBottom: "12px" }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the services, applications, software, or websites provided by ORDRYTH Private Limited (&ldquo;ORDRYTH&rdquo;, &ldquo;we&rdquo;, or &ldquo;us&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our platforms and software.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", fontWeight: 600, color: "#191816", marginBottom: "12px" }}>
              2. Intellectual Property &amp; User Ownership
            </h2>
            <p>
              All trademarks, visual identity systems, interface code, software binaries, and documentation created by ORDRYTH are the intellectual property of ORDRYTH Private Limited.
            </p>
            <p style={{ marginTop: "12px" }}>
              <strong>Your Content &amp; Creations:</strong> You retain complete ownership of all creative content, images, graphics, and outputs generated through your use of our software applications, including Imagica, subject to applicable open model licenses.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", fontWeight: 600, color: "#191816", marginBottom: "12px" }}>
              3. Permissible &amp; Responsible Use
            </h2>
            <p>
              You agree not to use ORDRYTH software to generate, distribute, or facilitate unlawful content, malware, non-consensual media, or materials that violate safety policies or the rights of third parties.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", fontWeight: 600, color: "#191816", marginBottom: "12px" }}>
              4. Disclaimer &amp; Limitation of Liability
            </h2>
            <p>
              Our software products and services are provided &ldquo;as is&rdquo; without warranties of any kind, whether express or implied. In no event shall ORDRYTH Private Limited be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our tools.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", fontWeight: 600, color: "#191816", marginBottom: "12px" }}>
              5. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", fontWeight: 600, color: "#191816", marginBottom: "12px" }}>
              6. Contact Information
            </h2>
            <p>
              Questions about these Terms of Service can be directed to:
            </p>
            <p style={{ marginTop: "12px", padding: "16px 20px", backgroundColor: "#F5F2EA", borderRadius: "8px", border: "1px solid #E6E1D5", fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
              ORDRYTH Private Limited<br />
              Email: <a href="mailto:contact@ordryth.com" style={{ color: "#C85A32", textDecoration: "underline" }}>contact@ordryth.com</a><br />
              India
            </p>
          </section>
        </article>
      </main>

      <Footer2 />
    </div>
  );
}
