import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Layers,
  Sparkles,
  Cpu,
  UserCheck,
  Binary,
  ArrowRight,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description:
    "We investigate how emerging AI capabilities can become practical, efficient, and accessible technology across intelligent systems, creative AI, and local execution.",
};

const RESEARCH_THEMES = [
  {
    id: "intelligent-systems",
    label: "01 &bull; SYSTEMS &amp; INTERFACES",
    title: "Intelligent Systems",
    icon: Layers,
    accent: "var(--accent-cobalt)",
    description:
      "Exploring how AI models and software systems can work together to support complex tasks and new forms of interaction.",
    details: [
      "Dynamic coordination between procedural software logic and generative models.",
      "State-preserving multi-modal workspaces and deterministic execution guarantees.",
      "Context representation systems that maintain coherence over extended workflows.",
    ],
  },
  {
    id: "generative-ai",
    label: "02 &bull; CREATIVE SYNTHESIS",
    title: "Generative AI",
    icon: Sparkles,
    accent: "var(--accent-terracotta)",
    description:
      "Investigating how generative AI can expand the ways people imagine, develop, and transform visual ideas.",
    details: [
      "Latent space interpolation and structured visual attribute steering.",
      "Non-destructive image transformations with persistent composition guidance.",
      "Fine-grained multi-reference condition synthesis across creative pipelines.",
    ],
  },
  {
    id: "ai-product-engineering",
    label: "03 &bull; APPLIED SYSTEMS",
    title: "AI Product Engineering",
    icon: Binary,
    accent: "var(--accent-verdigris)",
    description:
      "Bridging the chasm between raw models and resilient consumer-grade applications with predictable latency and graceful degradation.",
    details: [
      "Fault-tolerant node-graph orchestrations designed for high-throughput production.",
      "Streaming execution pipelines that deliver immediate visual feedback to creators.",
      "Deterministic cache layers minimizing redundant compute across graph evaluations.",
    ],
  },
  {
    id: "efficient-local-ai",
    label: "04 &bull; COMPUTE &amp; ARCHITECTURE",
    title: "Efficient and Local AI",
    icon: Cpu,
    accent: "var(--accent-ochre)",
    description:
      "Exploring model integration, local execution, hardware-aware workflows, and approaches to making AI applications more accessible across different computing environments.",
    details: [
      "Zero-cloud offline inference pipelines utilizing native hardware primitives.",
      "Optimized execution targets across Apple Silicon, NVIDIA CUDA, AMD, and modern multi-core CPUs.",
      "Quantized representation schemes preserving high perceptual fidelity under constrained VRAM footprints.",
    ],
  },
  {
    id: "human-centered-technology",
    label: "05 &bull; ERGONOMICS &amp; AGENCY",
    title: "Human-Centered Technology",
    icon: UserCheck,
    accent: "var(--accent-purple)",
    description:
      "Designing systems around the people who use them, with attention to usability, control, and the relationship between human judgment and machine capability.",
    details: [
      "Control surfaces granting creators fine-grained leverage over computational outputs.",
      "Transparent parameter steering that reduces trial-and-error prompting friction.",
      "Designing intelligent workflows that amplify human creative intent without displacing agency.",
    ],
  },
];

export default function ResearchPage() {
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
          <div style={{ maxWidth: "840px" }}>
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
              RESEARCH &amp; EXPLORATION
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
              Understanding what is possible.
            </h1>

            <div
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                lineHeight: 1.6,
                color: "var(--text-primary)",
                fontWeight: 450,
                marginBottom: "20px",
              }}
            >
              We investigate how emerging AI capabilities can become practical, efficient, and accessible technology.
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
              }}
            >
              Our interest spans intelligent software, AI-powered creative tools, model integration, system architecture,
              and the engineering challenges involved in bringing AI into real products.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas Editorial List */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 96px)",
          paddingBottom: "clamp(64px, 8vw, 96px)",
          borderBottom: "1px solid var(--border-subtle)",
          backgroundColor: "var(--bg-surface)",
        }}
      >
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {RESEARCH_THEMES.map((theme, index) => {
              const Icon = theme.icon;
              return (
                <div
                  key={theme.id}
                  id={theme.id}
                  style={{
                    backgroundColor: "var(--bg-main)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "clamp(32px, 5vw, 48px)",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "36px",
                    alignItems: "start",
                  }}
                >
                  {/* Left Column: Heading and Overview */}
                  <div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "16px",
                      }}
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: "var(--bg-surface)",
                          border: "1px solid var(--border-subtle)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: theme.accent,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span
                        dangerouslySetInnerHTML={{ __html: theme.label }}
                        style={{
                          fontSize: "0.74rem",
                          fontWeight: 650,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                        }}
                      />
                    </div>

                    <h2
                      style={{
                        fontSize: "1.6rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.02em",
                        marginBottom: "16px",
                      }}
                    >
                      {theme.title}
                    </h2>

                    <p
                      style={{
                        fontSize: "1.05rem",
                        lineHeight: 1.65,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {theme.description}
                    </p>
                  </div>

                  {/* Right Column: Exploration Inquiries / Vectors */}
                  <div
                    style={{
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-sm)",
                      padding: "24px 28px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 650,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        display: "block",
                        marginBottom: "16px",
                      }}
                    >
                      AREAS OF ACTIVE INQUIRY
                    </span>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                      {theme.details.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            fontSize: "0.9rem",
                            lineHeight: 1.55,
                            color: "var(--text-secondary)",
                          }}
                        >
                          <span
                            style={{
                              width: "5px",
                              height: "5px",
                              borderRadius: "50%",
                              backgroundColor: theme.accent,
                              marginTop: "8px",
                              flexShrink: 0,
                            }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publications / Technical Notes Section */}
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
              PUBLICATIONS &amp; TECHNICAL NOTES
            </span>

            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "20px",
              }}
            >
              Documenting our findings.
            </h2>

            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--accent-terracotta)" }}>
                <BookOpen size={20} />
                <span style={{ fontSize: "0.92rem", fontWeight: 600 }}>Inaugural Dispatches in Preparation</span>
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                As our research and engineering initiatives progress, technical reports, architecture analyses, and
                system evaluations will be published here. We believe in sharing substantive technical documentation
                derived from real implementations rather than theoretical conjectures.
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                For research discussions or technical collaboration enquiries, please contact our team directly.
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
          backgroundColor: "var(--bg-surface)",
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
                Experience our work in practice
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                See how our research in creative intelligence translates into Imagica.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <Link href="/products" className="btn btn-secondary">
                <span>View Products</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="https://imagica.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Visit Imagica</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
