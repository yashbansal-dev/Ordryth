"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoTransparent from "../../../public/logo-transparent.png";
import { Footer2 } from "@/components/ui/footer-2";

export default function ResearchPage() {
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
            <Link href="/research" className="anthropic-nav-link" style={{ color: "#191816", fontWeight: 600 }}>
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
            Systems &amp; Architecture
          </h1>
          <p style={{ fontSize: "1.25rem", lineHeight: 1.6, color: "#56534E", maxWidth: "800px" }}>
            Deep-dives into the generative pipelines, hardware-aware execution layers, and systems engineering behind ORDRYTH technology.
          </p>
        </section>

        {/* Section 1: Generative AI Systems */}
        <section id="generative-ai" style={{ marginBottom: "80px", scrollMarginTop: "100px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#C85A32", fontFamily: "var(--font-mono)" }}>
              02 • APPLIED AI
            </span>
          </div>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2rem", fontWeight: 600, color: "#191816", marginBottom: "20px" }}>
            Generative AI Systems
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#56534E", marginBottom: "24px" }}>
            Modern generative visual workflows require orchestrating heterogeneous foundation models — text encoders, latent diffusion backbones, attention processors, and upscaling autoencoders — into a seamless, low-latency pipeline.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "32px" }}>
            <div style={{ padding: "28px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid #E6E1D5" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#191816", marginBottom: "10px" }}>Model Orchestration</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#56534E" }}>
                Connecting text encoders, multi-scale diffusion UNets, and latent decoders with dynamic memory eviction and asynchronous background tensor preparation.
              </p>
            </div>

            <div style={{ padding: "28px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid #E6E1D5" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#191816", marginBottom: "10px" }}>Non-Destructive Refinement</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#56534E" }}>
                Layered visual composition pipelines allowing users to iterate on aspect ratios, localized inpainting, style transfers, and seed variations without destructive re-computation.
              </p>
            </div>

            <div style={{ padding: "28px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid #E6E1D5" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#191816", marginBottom: "10px" }}>Precision Quantization</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#56534E" }}>
                FP8 and INT4 weight-only quantization kernels preserving perceptual quality while cutting VRAM utilization by up to 60%, unlocking desktop execution on consumer GPUs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Local AI Computing */}
        <section id="local-ai" style={{ marginBottom: "80px", scrollMarginTop: "100px", paddingTop: "48px", borderTop: "1px solid #E6E1D5" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#C85A32", fontFamily: "var(--font-mono)" }}>
              03 • SYSTEMS ENGINEERING
            </span>
          </div>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2rem", fontWeight: 600, color: "#191816", marginBottom: "20px" }}>
            Local AI Computing
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#56534E", marginBottom: "24px" }}>
            Hardware-aware AI execution designed to make creative workflows adapt automatically to available computing resources, bringing local inference closer to the user with sovereign data privacy.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div style={{ padding: "28px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid #E6E1D5" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#191816", marginBottom: "10px" }}>Hardware-Aware Sharding</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#56534E" }}>
                Intelligent compute graph decomposition targeting Apple Metal (MPS), NVIDIA CUDA/TensorRT, and Microsoft DirectML with dynamic CPU fallback.
              </p>
            </div>

            <div style={{ padding: "28px", backgroundColor: "#FFFFFF", borderRadius: "12px", border: "1px solid #E6E1D5" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#191816", marginBottom: "10px" }}>Zero-Egress Security</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#56534E" }}>
                When running in local inference mode, zero user images or textual prompts are transmitted outside the device boundary, giving sovereign enterprise privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Systems Architecture */}
        <section id="systems" style={{ paddingTop: "48px", borderTop: "1px solid #E6E1D5", scrollMarginTop: "100px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#C85A32", fontFamily: "var(--font-mono)" }}>
              05 • TECHNOLOGY &amp; ARCHITECTURE
            </span>
          </div>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2rem", fontWeight: 600, color: "#191816", marginBottom: "20px" }}>
            Desktop Systems Architecture
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#56534E", marginBottom: "28px" }}>
            Building client software capable of handling gigapixel image buffers, live neural updates, and instantaneous undo/redo histories requires a robust local runtime architecture.
          </p>

          <div style={{ padding: "32px", backgroundColor: "#F5F2EA", borderRadius: "16px", border: "1px solid #E6E1D5", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "#191816" }}>
              The Rust + Tauri Native Runtime
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "#56534E" }}>
              Imagica&apos;s desktop shell combines a native Rust core process with optimized OS webviews. By isolating heavyweight model loading and IPC pipelines in memory-safe Rust, the UI thread maintains a silky 60fps frametime regardless of computation intensity.
            </p>
            <div style={{ paddingTop: "8px" }}>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", fontWeight: 600, color: "#C85A32", textDecoration: "none" }}>
                <span>Read more about ORDRYTH company engineering</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer2 />
    </div>
  );
}
