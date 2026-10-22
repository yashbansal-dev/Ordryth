import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Layers, Sparkles, UserCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "var(--bg-main)", minHeight: "100vh" }}>
      {/* =========================================================================
          SECTION A: HERO
          ========================================================================= */}
      <section
        style={{
          paddingTop: "clamp(64px, 10vw, 110px)",
          paddingBottom: "clamp(64px, 8vw, 100px)",
          borderBottom: "1px solid var(--border-subtle)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(40px, 6vw, 80px)",
              alignItems: "center",
            }}
          >
            {/* Left Column: Editorial Hero Text */}
            <div style={{ maxWidth: "620px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.76rem",
                  fontWeight: 650,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-secondary)",
                  marginBottom: "24px",
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
                INDEPENDENT AI &amp; TECHNOLOGY
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
                  fontWeight: 600,
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  color: "var(--text-primary)",
                  marginBottom: "28px",
                }}
              >
                Intelligence, thoughtfully built.
              </h1>

              <p
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                  lineHeight: 1.5,
                  color: "var(--text-primary)",
                  fontWeight: 450,
                  marginBottom: "16px",
                }}
              >
                ORDRYTH is an independent technology company exploring and building intelligent systems that expand
                what people can create, discover, and accomplish.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  marginBottom: "36px",
                  maxWidth: "540px",
                }}
              >
                We bring together research, software engineering, and product development to turn emerging
                possibilities into practical technology.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
                <a href="#research" className="btn btn-primary btn-lg">
                  <span>Explore Our Work</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="https://imagica.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  <span>Discover Imagica</span>
                  <ArrowUpRight size={16} style={{ color: "var(--text-muted)" }} />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual — Geometric sculptural composition with ORDRYTH symbol */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "540px",
                  aspectRatio: "1.25 / 1",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-surface)",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/forma-hero-exact.png"
                  alt="Abstract sculptural exploration — ORDRYTH"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 540px"
                />

                {/* Subtle Brand Badge in corner */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    backgroundColor: "rgba(245, 241, 232, 0.9)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                    padding: "8px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div style={{ position: "relative", width: 18, height: 18 }}>
                    <Image
                      src="/logo-transparent.png"
                      alt="ORDRYTH Mark"
                      width={18}
                      height={18}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-primary)",
                    }}
                  >
                    ORDRYTH LABS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION B: BRAND INTRODUCTION (OUR PERSPECTIVE)
          ========================================================================= */}
      <section
        style={{
          paddingTop: "clamp(60px, 8vw, 100px)",
          paddingBottom: "clamp(60px, 8vw, 100px)",
          borderBottom: "1px solid var(--border-subtle)",
          backgroundColor: "var(--bg-surface)",
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
            {/* Left: Perspective Narrative */}
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
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  color: "var(--text-primary)",
                  marginBottom: "28px",
                }}
              >
                Building beyond the obvious.
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                }}
              >
                <p>The most interesting problems rarely have simple answers.</p>
                <p>
                  We explore the possibilities of emerging technology, investigate what makes systems useful, and build
                  products that bring advanced capabilities into the hands of people.
                </p>
                <p style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                  Our focus is not technology for its own sake. It is what technology makes possible.
                </p>
              </div>
            </div>

            {/* Right: Architectural Monogram Plate */}
            <div
              style={{
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)",
                backgroundColor: "var(--bg-main)",
                padding: "clamp(36px, 6vw, 60px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                minHeight: "340px",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  position: "relative",
                  marginBottom: "24px",
                }}
              >
                <Image
                  src="/logo-transparent.png"
                  alt="ORDRYTH Symbol"
                  width={72}
                  height={72}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                  letterSpacing: "-0.01em",
                }}
              >
                Principled Exploration
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  maxWidth: "380px",
                }}
              >
                A deliberate synthesis of theoretical curiosity, rigorous system design, and product craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: RESEARCH AND ENGINEERING
          ========================================================================= */}
      <section
        id="research"
        style={{
          paddingTop: "clamp(64px, 9vw, 110px)",
          paddingBottom: "clamp(64px, 9vw, 110px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "780px", marginBottom: "56px" }}>
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
              RESEARCH &amp; ENGINEERING
            </span>

            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                color: "var(--text-primary)",
                marginBottom: "20px",
              }}
            >
              Understanding what is possible.
            </h2>

            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: 1.65,
                color: "var(--text-secondary)",
              }}
            >
              Progress in artificial intelligence creates new possibilities, but turning those possibilities into
              useful technology requires more than a model. It requires thoughtful systems, reliable engineering, and a
              clear understanding of the problems being solved.
            </p>
          </div>

          {/* Research Areas Restrained Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            {/* Area 1 */}
            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                transition: "border-color var(--transition), transform var(--transition)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-surface-alt)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-cobalt)",
                  marginBottom: "20px",
                }}
              >
                <Layers size={20} />
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                  letterSpacing: "-0.015em",
                }}
              >
                Intelligent Systems
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                Exploring how AI models and software systems can work together to support complex tasks and new forms of
                interaction.
              </p>
            </div>

            {/* Area 2 */}
            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                transition: "border-color var(--transition), transform var(--transition)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-surface-alt)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-terracotta)",
                  marginBottom: "20px",
                }}
              >
                <Sparkles size={20} />
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                  letterSpacing: "-0.015em",
                }}
              >
                Creative Intelligence
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                Investigating how generative AI can expand the ways people imagine, develop, and transform visual ideas.
              </p>
            </div>

            {/* Area 3 */}
            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                transition: "border-color var(--transition), transform var(--transition)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-surface-alt)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-verdigris)",
                  marginBottom: "20px",
                }}
              >
                <Cpu size={20} />
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                  letterSpacing: "-0.015em",
                }}
              >
                Efficient AI Engineering
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                Exploring model integration, local execution, hardware-aware workflows, and approaches to making AI
                applications more accessible across different computing environments.
              </p>
            </div>

            {/* Area 4 */}
            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                transition: "border-color var(--transition), transform var(--transition)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-surface-alt)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-purple)",
                  marginBottom: "20px",
                }}
              >
                <UserCheck size={20} />
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                  letterSpacing: "-0.015em",
                }}
              >
                Human-Centered Technology
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                Designing systems around the people who use them, with attention to usability, control, and the
                relationship between human judgment and machine capability.
              </p>
            </div>
          </div>

          <div>
            <Link href="/research" className="btn btn-secondary">
              <span>Explore Our Approach</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION D: FEATURED PRODUCT — IMAGICA
          ========================================================================= */}
      <section
        style={{
          paddingTop: "clamp(64px, 9vw, 110px)",
          paddingBottom: "clamp(64px, 9vw, 110px)",
          borderBottom: "1px solid var(--border-subtle)",
          backgroundColor: "var(--bg-surface)",
        }}
      >
        <div className="container">
          {/* Header of Section */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            <div style={{ maxWidth: "620px" }}>
              <span
                style={{
                  fontSize: "0.76rem",
                  fontWeight: 650,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent-terracotta)",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                BUILT AT ORDRYTH
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  fontWeight: 600,
                  lineHeight: 1.12,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                }}
              >
                Meet Imagica.
              </h2>

              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                }}
              >
                Creative possibilities, expanded.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href="https://imagica.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Explore Imagica</span>
                <ArrowUpRight size={15} />
              </a>
              <Link href="/products" className="btn btn-secondary">
                <span>Discover the Product</span>
              </Link>
            </div>
          </div>

          {/* Editorial Description */}
          <div
            style={{
              maxWidth: "760px",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              marginBottom: "48px",
            }}
          >
            <p style={{ marginBottom: "16px" }}>
              Imagica is our AI-powered image generation and editing platform, developed to help people translate ideas
              into visuals.
            </p>
            <p style={{ marginBottom: "16px" }}>
              By bringing generative capabilities into creative workflows, Imagica aims to make visual exploration more
              accessible and flexible.
            </p>
            <p>From developing a concept to refining an image, the platform is designed around the process of creating.</p>
          </div>

          {/* Large Editorial Showcase: Application Interface & Artwork Grid */}
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-subtle)",
              backgroundColor: "#0F1115",
              overflow: "hidden",
              boxShadow: "0 20px 48px rgba(0, 0, 0, 0.08)",
              marginBottom: "36px",
            }}
          >
            {/* Window Topbar */}
            <div
              style={{
                padding: "14px 20px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#16181D",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FF5F56" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#27C93F" }} />
                <span
                  style={{
                    marginLeft: "12px",
                    fontSize: "0.8rem",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontFamily: "monospace",
                  }}
                >
                  Imagica Studio — Node-Graph Generative Pipeline
                </span>
              </div>

              <div style={{ height: "22px", width: "70px", position: "relative" }}>
                <Image
                  src="/imagica-logo.png"
                  alt="Imagica Logo"
                  width={70}
                  height={22}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Real Desktop Application Screenshot */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
              <Image
                src="/imagica-desktop-ui.jpg"
                alt="Imagica Studio Desktop Interface"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>

          {/* Genuine Imagica Creation Examples */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
                  alt="Imagica creative generation example"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
              <div style={{ padding: "16px 20px" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase" }}>
                  Visual Exploration
                </span>
                <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500, marginTop: "4px" }}>
                  High-fidelity generative concept rendering
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
                  alt="Imagica CPU & GPU generation example"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
              <div style={{ padding: "16px 20px" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase" }}>
                  Style &amp; Detail Transformation
                </span>
                <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500, marginTop: "4px" }}>
                  Fine control over texture, lighting, and composition
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
                  alt="Imagica RealVis generation sample"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
              <div style={{ padding: "16px 20px" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase" }}>
                  Photorealistic Nuance
                </span>
                <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500, marginTop: "4px" }}>
                  Local-first model execution with authentic fidelity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E: THE PRODUCT ECOSYSTEM
          ========================================================================= */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 100px)",
          paddingBottom: "clamp(64px, 8vw, 100px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "720px", marginBottom: "48px" }}>
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
              OUR ECOSYSTEM
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
              One vision. Many possibilities.
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
              }}
            >
              ORDRYTH is built around a broader interest in intelligent technology. Imagica represents one expression
              of that vision: bringing AI into the creative process. As our work evolves, this ecosystem can expand to
              include additional products, systems, and research initiatives.
            </p>
          </div>

          {/* Ecosystem Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
            }}
          >
            {/* Card 1: Imagica Available */}
            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "24px",
                  }}
                >
                  <div style={{ width: "80px", height: "26px", position: "relative" }}>
                    <Image
                      src="/imagica-logo.png"
                      alt="Imagica Logo"
                      width={80}
                      height={26}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      color: "var(--accent-sage)",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-full)",
                      backgroundColor: "rgba(44, 110, 73, 0.08)",
                      border: "1px solid rgba(44, 110, 73, 0.2)",
                    }}
                  >
                    Available Now
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                  }}
                >
                  Imagica
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                    marginBottom: "24px",
                  }}
                >
                  AI-assisted image generation and editing designed for creative exploration, workflow flexibility, and
                  private offline execution.
                </p>
              </div>

              <a
                href="https://imagica.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: "fit-content" }}
              >
                <span>Visit imagica.co.in</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Card 2: Future Products Under Development */}
            <div
              style={{
                backgroundColor: "var(--bg-surface-alt)",
                border: "1px dashed var(--border-medium)",
                borderRadius: "var(--radius-md)",
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "260px",
              }}
            >
              <span
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 650,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "14px",
                }}
              >
                FUTURE INITIATIVES
              </span>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                  fontStyle: "italic",
                  fontFamily: "var(--font-serif)",
                }}
              >
                More to explore in time.
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                }}
              >
                We maintain active explorations across intelligent developer systems, workflow orchestrators, and
                hardware-aware AI engines. Further releases will be shared as they reach maturity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION F: HOW WE WORK (OUR APPROACH)
          ========================================================================= */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 100px)",
          paddingBottom: "clamp(64px, 8vw, 100px)",
          borderBottom: "1px solid var(--border-subtle)",
          backgroundColor: "var(--bg-surface)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "680px", marginBottom: "52px" }}>
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
              OUR APPROACH
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
              From ideas to systems.
            </h2>
          </div>

          {/* Three Editorial Columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "36px",
            }}
          >
            {/* 01 */}
            <div
              style={{
                borderTop: "1px solid var(--border-medium)",
                paddingTop: "28px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--accent-terracotta)",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                01
              </span>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "14px",
                }}
              >
                Curiosity before convention
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                We question assumptions, investigate new approaches, and remain open to ideas that challenge
                established ways of thinking.
              </p>
            </div>

            {/* 02 */}
            <div
              style={{
                borderTop: "1px solid var(--border-medium)",
                paddingTop: "28px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--accent-terracotta)",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                02
              </span>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "14px",
                }}
              >
                Depth before noise
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                We value understanding over hype, substance over appearances, and engineering that solves real
                problems.
              </p>
            </div>

            {/* 03 */}
            <div
              style={{
                borderTop: "1px solid var(--border-medium)",
                paddingTop: "28px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--accent-terracotta)",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                03
              </span>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "14px",
                }}
              >
                Progress through practice
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                }}
              >
                We believe the path from an idea to a useful system requires experimentation, evaluation, and continuous
                improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION G: ABOUT ORDRYTH
          ========================================================================= */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 100px)",
          paddingBottom: "clamp(64px, 8vw, 100px)",
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
                ABOUT ORDRYTH
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  color: "var(--text-primary)",
                  marginBottom: "28px",
                }}
              >
                A different way to build.
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--text-secondary)",
                  marginBottom: "36px",
                }}
              >
                <p>
                  ORDRYTH was founded around a simple conviction: the most meaningful technology comes from combining
                  ambitious thinking with careful execution.
                </p>
                <p>
                  We are interested in the space between what technology can do today and what it could make possible
                  tomorrow.
                </p>
                <p>
                  That means exploring emerging capabilities, understanding their limitations, and building products
                  that translate technical progress into useful experiences.
                </p>
              </div>

              <Link href="/about" className="btn btn-secondary">
                <span>Learn About Us</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Quiet Architectural Stat Block */}
            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "clamp(36px, 6vw, 56px)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div style={{ borderBottom: "1px solid var(--border-subtle)", paddingBottom: "20px" }}>
                  <span style={{ fontSize: "0.76rem", fontWeight: 650, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Structure
                  </span>
                  <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", marginTop: "4px" }}>
                    Independent Technology &amp; AI Research
                  </div>
                </div>

                <div style={{ borderBottom: "1px solid var(--border-subtle)", paddingBottom: "20px" }}>
                  <span style={{ fontSize: "0.76rem", fontWeight: 650, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Active Product
                  </span>
                  <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", marginTop: "4px" }}>
                    Imagica — Creative Visual Studio
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: "0.76rem", fontWeight: 650, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Focus
                  </span>
                  <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", marginTop: "4px" }}>
                    Intelligent Systems &bull; Creative AI &bull; Efficient Computing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION H: CLOSING STATEMENT (DARK CHARCOAL EDITORIAL FINALE)
          ========================================================================= */}
      <section
        style={{
          backgroundColor: "var(--bg-dark)",
          color: "var(--text-inverted)",
          paddingTop: "clamp(80px, 11vw, 130px)",
          paddingBottom: "clamp(80px, 11vw, 130px)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                margin: "0 auto 28px auto",
                position: "relative",
              }}
            >
              <Image
                src="/logo-white-transparent.png"
                alt="ORDRYTH Monogram Inverted"
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
              />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                fontWeight: 600,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: "var(--text-inverted)",
                marginBottom: "28px",
              }}
            >
              The future is shaped by what we build today.
            </h2>

            <div
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
                lineHeight: 1.7,
                color: "var(--text-dark-secondary)",
                marginBottom: "44px",
                maxWidth: "660px",
                margin: "0 auto 44px auto",
              }}
            >
              <p style={{ marginBottom: "16px" }}>
                We are exploring the technologies that will shape how people think, create, and work in the years
                ahead.
              </p>
              <p>
                Our journey begins with the questions worth asking and continues through the systems we build to answer
                them.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
              <Link
                href="/research"
                className="btn"
                style={{
                  backgroundColor: "var(--text-inverted)",
                  color: "var(--bg-dark)",
                  padding: "13px 26px",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                }}
              >
                <span>Explore Our Work</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/contact"
                className="btn"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--text-inverted)",
                  border: "1px solid rgba(245, 241, 232, 0.25)",
                  padding: "13px 26px",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                }}
              >
                <span>Contact ORDRYTH</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
