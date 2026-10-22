import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, ArrowRight, CheckCircle2, Shield, Zap, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "We build products that bring emerging technology into practical use. Explore Imagica, our flagship AI-powered image generation and editing platform.",
};

const IMAGICA_FEATURES = [
  {
    icon: Sparkles,
    title: "Generative Canvas & Node Studio",
    description:
      "A flexible node-graph workspace enabling fine-grained visual synthesis, multi-stage composition, and non-destructive image workflows.",
  },
  {
    icon: Shield,
    title: "100% Private Offline Generation",
    description:
      "Engineered to execute natively on your GPU or CPU without sending data or prompts to third-party cloud servers.",
  },
  {
    icon: Zap,
    title: "Hardware-Aware Acceleration",
    description:
      "Native acceleration targets across Apple Silicon, NVIDIA CUDA, AMD, DirectML, and optimized multi-core CPU architectures.",
  },
  {
    icon: CheckCircle2,
    title: "Comprehensive Creative Control",
    description:
      "Intuitive inpainting, upscaling, style transfer, and prompt expansion designed around the iterative craft of making visual art.",
  },
];

export default function ProductsPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-main)", minHeight: "100vh" }}>
      {/* Header */}
      <section
        style={{
          paddingTop: "clamp(64px, 10vw, 100px)",
          paddingBottom: "clamp(56px, 8vw, 84px)",
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
              PRODUCT ECOSYSTEM
            </span>

            <h1
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "28px",
              }}
            >
              Technology made tangible.
            </h1>

            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                lineHeight: 1.6,
                color: "var(--text-primary)",
                fontWeight: 450,
              }}
            >
              We build products that bring emerging technology into practical use.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Product Showcase: Imagica */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 96px)",
          paddingBottom: "clamp(64px, 8vw, 96px)",
          borderBottom: "1px solid var(--border-subtle)",
          backgroundColor: "var(--bg-surface)",
        }}
      >
        <div className="container">
          {/* Top Title Card */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.74rem",
                  fontWeight: 650,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent-terracotta)",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-terracotta)",
                  }}
                />
                FLAGSHIP APPLICATION
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                Imagica &mdash; Creative possibilities, expanded.
              </h2>
            </div>

            <a
              href="https://imagica.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <span>Visit Imagica</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Description */}
          <div
            style={{
              maxWidth: "800px",
              fontSize: "1.08rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              marginBottom: "48px",
            }}
          >
            <p style={{ marginBottom: "16px" }}>
              Imagica is an AI-powered image generation and editing platform developed to help people translate ideas
              into visuals.
            </p>
            <p>
              It brings AI-assisted visual creation into a streamlined experience designed for creative exploration,
              image transformation, and visual workflows.
            </p>
          </div>

          {/* Large Desktop Application Screenshot Showcase */}
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-subtle)",
              backgroundColor: "#111317",
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.08)",
              marginBottom: "56px",
            }}
          >
            {/* Topbar */}
            <div
              style={{
                padding: "14px 24px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#181A1F",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FF5F56" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#27C93F" }} />
                <span
                  style={{
                    marginLeft: "16px",
                    fontSize: "0.82rem",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontFamily: "monospace",
                  }}
                >
                  Imagica Desktop &bull; Node Graph Generative Studio
                </span>
              </div>

              <div style={{ width: 80, height: 26, position: "relative" }}>
                <Image
                  src="/imagica-logo.png"
                  alt="Imagica Logo"
                  width={80}
                  height={26}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Screen */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
              <Image
                src="/imagica-desktop-ui.jpg"
                alt="Imagica Desktop Software Interface"
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>

          {/* Capabilities Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "28px",
              marginBottom: "64px",
            }}
          >
            {IMAGICA_FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  style={{
                    backgroundColor: "var(--bg-main)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "28px",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-terracotta)",
                      marginBottom: "18px",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "10px",
                    }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Actual Sample Gallery */}
          <div>
            <div style={{ marginBottom: "28px" }}>
              <span
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 650,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                ACTUAL GENERATION EXAMPLES
              </span>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: "var(--text-primary)" }}>
                Images created with Imagica
              </h3>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              <div
                style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-main)",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
                  <Image
                    src="/imagica-showcase-1.jpg"
                    alt="Imagica Generation 1"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <span style={{ fontSize: "0.76rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Concept Ideation
                  </span>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500, marginTop: "4px" }}>
                    Complex structural diffusion with lighting coherence
                  </p>
                </div>
              </div>

              <div
                style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-main)",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
                  <Image
                    src="/imagica-showcase-2.jpg"
                    alt="Imagica Generation 2"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <span style={{ fontSize: "0.76rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Stylistic Transformation
                  </span>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500, marginTop: "4px" }}>
                    Organic particle rendering and multi-reference blending
                  </p>
                </div>
              </div>

              <div
                style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-main)",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
                  <Image
                    src="/imagica-showcase-3.jpg"
                    alt="Imagica Generation 3"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <span style={{ fontSize: "0.76rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase" }}>
                    High-Fidelity Photorealism
                  </span>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500, marginTop: "4px" }}>
                    Subtle skin texture, micro-reflections, and cinematic depth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Comes Next Section */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 96px)",
          paddingBottom: "clamp(64px, 8vw, 96px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "780px" }}>
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
              FUTURE RELEASES
            </span>

            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "var(--text-primary)",
                marginBottom: "20px",
              }}
            >
              What comes next
            </h2>

            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "36px",
                fontSize: "1.02rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
              }}
            >
              <p style={{ marginBottom: "16px" }}>
                ORDRYTH’s future products will be introduced as they become available.
              </p>
              <p style={{ marginBottom: "16px" }}>
                Our research extends into intelligent developer environments, local-first inference runtimes, and
                multimodal system orchestrations. We intentionally refrain from announcing speculative product names or
                mock releases until systems meet our threshold of reliability, speed, and real-world utility.
              </p>
              <p style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                When new software is ready for creators and engineers, it will be unveiled directly through our official
                channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 96px)",
          paddingBottom: "clamp(64px, 8vw, 96px)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "28px",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
                Questions about Imagica or product partnerships?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                Reach out to our product development team.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <Link href="/contact" className="btn btn-primary">
                <span>Contact ORDRYTH</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
