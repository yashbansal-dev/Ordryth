"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoTransparent from "../../../public/logo-transparent.png";
import { Footer2 } from "@/components/ui/footer-2";

export default function AboutPage() {
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
            <Link href="/about" className="anthropic-nav-link" style={{ color: "#191816", fontWeight: 600 }}>
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
      <main style={{ flex: 1, maxWidth: "1120px", margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        {/* Header Section */}
        <section style={{ marginBottom: "64px", borderBottom: "1px solid #E6E1D5", paddingBottom: "48px" }}>
          <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.03em", color: "#191816", marginBottom: "24px" }}>
            ORDRYTH
          </h1>
          <p style={{ fontSize: "1.25rem", lineHeight: 1.6, color: "#56534E", maxWidth: "800px" }}>
            An AI and software technology company building products that make advanced computing more accessible, creative workflows more capable, and technology more useful.
          </p>
        </section>

        {/* Company Overview Grid */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", marginBottom: "72px" }}>
          <div>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.5rem", fontWeight: 600, color: "#191816", marginBottom: "16px" }}>
              Our Mission &amp; Purpose
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#56534E", marginBottom: "20px" }}>
              ORDRYTH Private Limited (India) is an independent technology and software engineering laboratory. We architect sovereign computing systems, transcendent interfaces, and practical AI applications designed to run with low latency, complete user privacy, and high craftsmanship.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#56534E" }}>
              Rather than viewing artificial intelligence as an isolated novelty, we integrate state-of-the-art models into intuitive, native desktop workspaces where creative professionals and software engineers retain full ownership over their work and computing environment.
            </p>
          </div>

          <div style={{ backgroundColor: "#F5F2EA", borderRadius: "16px", padding: "36px", border: "1px solid #E6E1D5" }}>
            <span style={{ fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#848079", display: "block", marginBottom: "12px", fontFamily: "var(--font-mono)" }}>
              Ecosystem Flagship
            </span>
            <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.35rem", fontWeight: 600, color: "#191816", marginBottom: "12px" }}>
              Imagica Workspace
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "#56534E", marginBottom: "24px" }}>
              Our premiere generative studio product. Imagica brings multi-modal diffusion pipelines, local model execution, and non-destructive image refinement into a unified desktop application.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://imagica.co.in/desktop"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 20px",
                  backgroundColor: "#191816",
                  color: "#FAF9F5",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  borderRadius: "9999px",
                  textDecoration: "none",
                }}
              >
                <span>Explore Imagica Desktop</span>
                <span>&rarr;</span>
              </a>
              <Link
                href="/research#generative-ai"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 20px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #DCD6CA",
                  color: "#191816",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  borderRadius: "9999px",
                  textDecoration: "none",
                }}
              >
                <span>Architecture</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Engineering Philosophy */}
        <section id="engineering" style={{ paddingTop: "48px", borderTop: "1px solid #E6E1D5", marginBottom: "72px" }}>
          <div style={{ maxWidth: "700px", marginBottom: "40px" }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C85A32", fontFamily: "var(--font-mono)" }}>
              05 — Technology &amp; Architecture
            </span>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2rem", fontWeight: 600, color: "#191816", marginTop: "8px", marginBottom: "12px" }}>
              ORDRYTH Engineering Foundation
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#56534E" }}>
              The architectural principles that govern our engineering choices across client applications, model adapters, and system runtimes.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            <div style={{ padding: "28px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid #E6E1D5" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#C85A32", marginBottom: "8px", fontFamily: "var(--font-mono)" }}>01 • DEPTH OVER HYPE</div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "#191816", marginBottom: "10px" }}>Technical Rigor</h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#56534E" }}>
                We prioritize foundational systems engineering, deterministic memory management, and reproducible pipelines over ephemeral trends.
              </p>
            </div>

            <div style={{ padding: "28px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid #E6E1D5" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#C85A32", marginBottom: "8px", fontFamily: "var(--font-mono)" }}>02 • SOVEREIGNTY</div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "#191816", marginBottom: "10px" }}>Local-First Execution</h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#56534E" }}>
                User assets, prompts, and inference workloads are designed to run directly on the user&apos;s machine, maximizing data sovereignty and minimizing cloud egress.
              </p>
            </div>

            <div style={{ padding: "28px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid #E6E1D5" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#C85A32", marginBottom: "8px", fontFamily: "var(--font-mono)" }}>03 • ERGONOMICS</div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "#191816", marginBottom: "10px" }}>Transcendent Interfaces</h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#56534E" }}>
                Interfaces engineered for smooth 60fps responsiveness, typography rooted in typographic proportion, and minimal cognitive friction.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer2 />
    </div>
  );
}
