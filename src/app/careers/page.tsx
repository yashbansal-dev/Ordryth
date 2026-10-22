import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Code, Cpu, Palette, Search, Terminal, ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Collaboration",
  description:
    "We are interested in people who enjoy solving difficult problems, exploring emerging technology, and turning ideas into working products.",
};

const COLLABORATION_AREAS = [
  {
    icon: Code,
    title: "Software Engineering",
    description:
      "Engineers proficient in high-performance desktop runtimes, local state persistence, systems programming, and modern reactive application architecture.",
  },
  {
    icon: Cpu,
    title: "AI and Machine Learning",
    description:
      "Practitioners exploring latent space navigation, diffusion model optimizations, local hardware execution, quantization, and multimodal inference pipelines.",
  },
  {
    icon: Palette,
    title: "Product Design",
    description:
      "Designers with meticulous typographic sensibilities, ergonomic intuition, and a drive to build interfaces that feel transparent and responsive to creative intent.",
  },
  {
    icon: Search,
    title: "Research Collaboration",
    description:
      "Independent researchers, academic fellows, and domain specialists interested in joint exploration of intelligent systems and human-machine interaction.",
  },
  {
    icon: Terminal,
    title: "Developer Technologies",
    description:
      "Engineers building developer tooling, SDKs, compilers, and hardware acceleration bridges across diverse operating systems.",
  },
];

export default function CareersPage() {
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
          <div style={{ maxWidth: "820px" }}>
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
              PEOPLE &amp; COLLABORATION
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
              Help build what comes next.
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
              We are interested in people who enjoy solving difficult problems, exploring emerging technology, and
              turning ideas into working products.
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
              }}
            >
              We welcome thoughtful conversations with engineers, researchers, designers, and collaborators who share
              an interest in building useful technology.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 96px)",
          paddingBottom: "clamp(64px, 8vw, 96px)",
          borderBottom: "1px solid var(--border-subtle)",
          backgroundColor: "var(--bg-surface)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "700px", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Areas of interest &amp; collaboration
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Rather than maintaining rigid corporate job quotas, we organize around high-caliber contributors whose
              skills and curiosity intersect with our mission.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
            }}
          >
            {COLLABORATION_AREAS.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  style={{
                    backgroundColor: "var(--bg-main)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-terracotta)",
                      marginBottom: "20px",
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "12px",
                    }}
                  >
                    {area.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.65,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Talent Network & Open Dialogue */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 96px)",
          paddingBottom: "clamp(64px, 8vw, 96px)",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center",
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(40px, 7vw, 64px)",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "var(--bg-surface-alt)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px auto",
                color: "var(--text-primary)",
              }}
            >
              <Mail size={22} />
            </div>

            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Start an open conversation
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.65,
                color: "var(--text-secondary)",
                marginBottom: "32px",
                maxWidth: "600px",
                margin: "0 auto 32px auto",
              }}
            >
              If our approach to engineering and intelligent software resonates with you, we encourage you to send an
              introductory note detailing your background, projects you have built, and topics you are passionate about
              exploring.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                <span>Submit Collaboration Note</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
