import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, ArrowRight, ShieldCheck, Compass, Code2, Wrench, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "ORDRYTH is an independent technology company exploring and building intelligent systems, useful AI products, and technology for emerging digital experiences.",
};

const PRINCIPLES = [
  {
    num: "01",
    title: "Curiosity",
    description:
      "We begin with foundational questions, examine underlying assumptions, and remain receptive to concepts that reframe conventional thinking.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Technical depth",
    description:
      "We value profound architectural understanding over surface-level hype, emphasizing systems that solve tangible technical challenges.",
    icon: Code2,
  },
  {
    num: "03",
    title: "Responsible engineering",
    description:
      "We design intelligent systems with careful regard for user privacy, predictability, local execution, and sustainable system boundaries.",
    icon: ShieldCheck,
  },
  {
    num: "04",
    title: "Practical utility",
    description:
      "Technology is validated by what it enables people to create and accomplish. We prioritize concrete utility over abstract demonstrations.",
    icon: Wrench,
  },
  {
    num: "05",
    title: "Continuous improvement",
    description:
      "The bridge from theory to reliable systems is built through systematic experimentation, rigorous benchmarking, and continuous refinement.",
    icon: RefreshCw,
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-main)", minHeight: "100vh" }}>
      {/* Editorial Header */}
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
              ABOUT ORDRYTH
            </span>

            <h1
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "32px",
              }}
            >
              A company built around possibility.
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
              ORDRYTH is an independent technology company exploring and building intelligent systems, useful AI
              products, and technology for emerging digital experiences.
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
              }}
            >
              We bring together product thinking, software engineering, and an interest in emerging technologies to
              develop systems that translate technical possibilities into practical applications.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Split Editorial Section */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 96px)",
          paddingBottom: "clamp(64px, 8vw, 96px)",
          borderBottom: "1px solid var(--border-subtle)",
          backgroundColor: "var(--bg-surface)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
            }}
          >
            {/* Our Mission */}
            <div
              style={{
                padding: "36px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--bg-main)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <span
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 650,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent-terracotta)",
                  display: "block",
                  marginBottom: "14px",
                }}
              >
                OUR MISSION
              </span>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing: "-0.015em",
                  color: "var(--text-primary)",
                  marginBottom: "16px",
                }}
              >
                Expanding human capability through accessible intelligence.
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                To explore and build intelligent technology that expands human capability and makes powerful tools more
                accessible.
              </p>
            </div>

            {/* Our Vision */}
            <div
              style={{
                padding: "36px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--bg-main)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <span
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 650,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent-cobalt)",
                  display: "block",
                  marginBottom: "14px",
                }}
              >
                OUR VISION
              </span>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing: "-0.015em",
                  color: "var(--text-primary)",
                  marginBottom: "16px",
                }}
              >
                Empowering people to discover new frontiers.
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                A future in which intelligent systems help people accomplish more, explore new possibilities, and engage
                with technology in more meaningful ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perspective & Ecosystem Section */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 96px)",
          paddingBottom: "clamp(64px, 8vw, 96px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(36px, 6vw, 72px)",
              alignItems: "center",
            }}
          >
            <div>
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
                OUR PERSPECTIVE
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  marginBottom: "24px",
                }}
              >
                Understanding through practice.
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  marginBottom: "18px",
                }}
              >
                Meaningful progress requires more than a promising idea. It requires understanding the problem, testing
                assumptions, engineering carefully, and learning from what happens in practice.
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                }}
              >
                We do not view AI as a standalone novelty. Rather, it represents a foundational medium for reasoning,
                visual computation, and interface ergonomics that must be architected with intent.
              </p>
            </div>

            {/* Ecosystem Showcase Box */}
            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "36px",
              }}
            >
              <span
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 650,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                OUR ECOSYSTEM
              </span>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "16px",
                }}
              >
                ORDRYTH &amp; Imagica
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                  marginBottom: "24px",
                }}
              >
                ORDRYTH is the parent brand behind Imagica, our AI-powered image generation and editing platform. As the
                company grows, the ecosystem may expand to include additional products and technologies aligned with our
                mission.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: 22, height: 22, position: "relative" }}>
                    <Image
                      src="/logo-transparent.png"
                      alt="ORDRYTH"
                      width={22}
                      height={22}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>ORDRYTH</span>
                </div>

                <a
                  href="https://imagica.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: "0.82rem", padding: "6px 14px" }}
                >
                  <span>Visit Imagica</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 100px)",
          paddingBottom: "clamp(64px, 8vw, 100px)",
          borderBottom: "1px solid var(--border-subtle)",
          backgroundColor: "var(--bg-surface)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "720px", marginBottom: "52px" }}>
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
              OUR PRINCIPLES
            </span>

            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "var(--text-primary)",
              }}
            >
              How we approach our work.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {PRINCIPLES.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  style={{
                    backgroundColor: "var(--bg-main)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--accent-terracotta)",
                      }}
                    >
                      {principle.num}
                    </span>
                    <Icon size={18} style={{ color: "var(--text-muted)" }} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "10px",
                    }}
                  >
                    {principle.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
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
              gap: "32px",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>
                Interested in what we are building?
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
                Explore our research areas or connect directly with our engineering team.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <Link href="/research" className="btn btn-secondary">
                <span>View Research</span>
                <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="btn btn-primary">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
