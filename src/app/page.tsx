"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer2 } from "@/components/ui/footer-2";
import logoTransparent from "../../public/logo-transparent.png";

interface Project {
  id: string;
  category: "Product & Software" | "Design Systems" | "Applied AI" | "Brand Architecture";
  date: string;
  client: string;
  title: string;
  description: string;
  metric: string;
  linkText?: string;
}

const ORDRYTH_PROJECTS: Project[] = [
  {
    id: "aether",
    category: "Product & Software",
    date: "Q1 2026",
    client: "Autonomous Computing Lab",
    title: "Aether OS: Spatial computing environment for multi-modal agent orchestration",
    description:
      "A next-generation desktop workspace engineered for local-first data persistence, multi-agent canvas manipulation, and deterministic 60fps interaction rendering.",
    metric: "Sub-16ms Frametime • Rust & WebGPU",
    linkText: "View case study",
  },
  {
    id: "chronos",
    category: "Design Systems",
    date: "Q4 2025",
    client: "Chronos Infrastructure",
    title: "Chronos Compute: Real-time telemetry dashboard & synchronized token system",
    description:
      "A mission-critical observability platform for distributed GPU clusters, delivering microsecond visualization and token engines binding Figma, React, and native Rust.",
    metric: "250+ Components • 1.2ms P99 Latency",
    linkText: "View design tokens",
  },
  {
    id: "kalon",
    category: "Applied AI",
    date: "Q4 2025",
    client: "Kalon BioSciences",
    title: "Kalon Intelligence: Diagnostic workstation and clinical biochemical parser",
    description:
      "High-precision diagnostic platform integrating generative molecular structure analysis with millimeter surgical telemetry and verifiable FDA-cleared design flows.",
    metric: "99.4% Model Fit • Clinical AI",
    linkText: "Explore platform",
  },
  {
    id: "verve",
    category: "Brand Architecture",
    date: "Q3 2025",
    client: "Verve Robotics",
    title: "Verve Kinetic: Dynamic motion identity and industrial hardware packaging",
    description:
      "A comprehensive brand transformation, algorithmic kinetic identity system, and physical hardware packaging suite for autonomous industrial robotics.",
    metric: "Red Dot Award 2025 • Global Relaunch",
    linkText: "View identity",
  },
  {
    id: "monolith",
    category: "Design Systems",
    date: "Q2 2025",
    client: "Foundry Monolith",
    title: "Monolith Variable: Algorithmic typeface family for dense engineering consoles",
    description:
      "An open-source variable typeface suite and editorial design token library crafted specifically for scientific workstations, financial tickers, and code editors.",
    metric: "12 Axes • 48 Instances • Open Source",
    linkText: "Specimen & tokens",
  },
  {
    id: "prism",
    category: "Product & Software",
    date: "Q1 2025",
    client: "Prism Decentralized",
    title: "Prism Protocol: Cryptographic treasury suite & zero-knowledge interface",
    description:
      "A high-assurance asset governance suite and zero-knowledge verification interface built for institutional treasuries and verifiable multi-party computation.",
    metric: "$2.4B Secured • Zero Exploits",
    linkText: "Read whitepaper",
  },
];

export default function OrdrythHomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [imageZoomOpen, setImageZoomOpen] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("studio@ordryth.com").then(() => {
      setToastMessage("Copied studio@ordryth.com to clipboard!");
      setTimeout(() => setToastMessage(null), 2400);
    });
  };

  const filteredProjects =
    activeCategory === "All"
      ? ORDRYTH_PROJECTS
      : ORDRYTH_PROJECTS.filter((p) => p.category === activeCategory);

  const searchedProjects = searchQuery.trim()
    ? ORDRYTH_PROJECTS.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  return (
    <div className="anthropic-canvas">
      {/* Top Floating Editorial Navbar */}
      <nav className="anthropic-nav">
        <div className="anthropic-nav-inner">
          {/* Top-Left Corner: Brand Logo */}
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

          {/* Top-Right: Main Link & 3-line Hamburger Menu Button */}
          <div className="anthropic-nav-right">
            <Link href="/" className="anthropic-nav-link">
              Main
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              title="Menu"
              className="ordryth-hamburger-btn"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="ordryth-hero-wrap">
        <h1 className="ordryth-hero-title">
          Architecting instruments of clarity for complex computing.
        </h1>
        <p className="ordryth-hero-subhead">
          ORDRYTH is a technology company developing AI-powered applications, intelligent software systems, and computational tools. We turn complex technical ideas into practical products that help people create, work, and solve problems more effectively.
        </p>

        {/* Full-Scale Showcase: MacBook Pro Laptop displaying Imagica Desktop Application */}
        <div className="laptop-full-showcase-wrap">
          <div className="macbook-showcase macbook-showcase-full">
            {/* Screen Lid */}
            <div className="macbook-lid">
              {/* Top Notch with Camera and Privacy LED */}
              <div className="macbook-notch">
                <div className="macbook-camera-lens" />
                <div className="macbook-camera-led" />
              </div>

              {/* Display Screen running Imagica Desktop */}
              <div
                className="macbook-screen"
                onClick={() => setImageZoomOpen(true)}
                title="Click to view Imagica Studio in full resolution"
              >
                <Image
                  src="/imagica-studio-ui.jpg"
                  alt="Imagica Desktop Application — AI Multimodal Generative Studio"
                  width={1024}
                  height={608}
                  priority
                  unoptimized
                  className="macbook-screen-img"
                />
              </div>
            </div>

            {/* Unibody Aluminum Base / Chassis with Center Opening Thumb Notch */}
            <div className="macbook-base">
              <div className="macbook-base-notch" />
            </div>

            {/* Dimensional Shadow & Ambient Reflection beneath the laptop */}
            <div className="macbook-shadow-ambient" />
          </div>
        </div>
      </header>

      {/* Editorial Selected Works Section */}
      <main className="anthropic-feed-section" id="works">
        <div className="anthropic-feed-header">
          <h2 className="anthropic-feed-title">Selected works &amp; architecture releases</h2>

          {/* Filter Pills */}
          <div className="anthropic-feed-tabs">
            {["All", "Product & Software", "Design Systems", "Applied AI", "Brand Architecture"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`anthropic-tab-btn ${activeCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Editorial Grid for Ordryth */}
        <div className="anthropic-feed-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="anthropic-card">
              <div>
                <div className="anthropic-card-meta">
                  <span className="text-[#C85A32] font-semibold">{project.category}</span>
                  <span>&bull;</span>
                  <span>{project.date}</span>
                </div>
                <h3 className="anthropic-card-heading">{project.title}</h3>
                <p className="anthropic-card-desc">{project.description}</p>
              </div>
              <div className="pt-3 border-t border-[#EBE6DB] flex items-center justify-between">
                <span className="text-xs font-mono text-[#7A756D]">
                  {project.metric}
                </span>
                <span className="anthropic-card-link text-xs">
                  {project.linkText || "Case study"} &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer 2 Component with subtle dotted grid overlay and AI actions */}
      <Footer2 />

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/40 backdrop-blur-sm">
          <div className="bg-[#FAF9F5] border border-[#E6E1D5] rounded-2xl w-full max-w-xl p-6 shadow-2xl mx-4">
            <div className="flex items-center justify-between border-b border-[#E6E1D5] pb-4">
              <input
                type="text"
                placeholder="Search Ordryth works, disciplines, and tokens..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-base outline-none text-[#191816] placeholder-[#8A847B]"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[#7A756D] hover:text-[#191816] text-xs font-mono ml-4"
              >
                ESC
              </button>
            </div>

            <div className="mt-4">
              {searchQuery.trim() ? (
                <div className="space-y-3">
                  {searchedProjects.length > 0 ? (
                    searchedProjects.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => setSearchOpen(false)}
                        className="p-3 rounded-lg hover:bg-[#F3EFE6] cursor-pointer"
                      >
                        <div className="text-xs font-mono text-[#C85A32]">{p.category}</div>
                        <div className="text-sm font-semibold text-[#191816]">{p.title}</div>
                        <div className="text-xs text-[#7A756D]">{p.metric}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-[#7A756D] py-4">No matching works found for &ldquo;{searchQuery}&rdquo;.</div>
                  )}
                </div>
              ) : (
                <div className="text-xs text-[#7A756D]">
                  Quick search: Try &ldquo;Aether&rdquo;, &ldquo;Telemetry&rdquo;, &ldquo;Design System&rdquo;, or &ldquo;Robotics&rdquo;.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Slide-out Navigation Drawer Menu */}
      {menuOpen && (
        <div
          className="ordryth-drawer-overlay"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="ordryth-drawer-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="ordryth-drawer-header">
                <Link href="/" onClick={() => setMenuOpen(false)} className="ordryth-drawer-brand">
                  <Image
                    src={logoTransparent}
                    alt="Ordryth Logo"
                    width={26}
                    height={26}
                    className="brand-logo-img"
                  />
                  <span className="ordryth-drawer-brand-name">ORDRYTH</span>
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="ordryth-drawer-close"
                >
                  ✕
                </button>
              </div>

              {/* Main Navigation Links */}
              <div className="ordryth-drawer-section-title">Main Pages</div>
              <nav className="ordryth-drawer-links">
                <Link href="/" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Main (Home)</span>
                </Link>
                <Link href="/about" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>About</span>
                </Link>
                <Link href="/mission" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Our Mission</span>
                </Link>
                <Link href="/products/imagica" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Products (Imagica)</span>
                  <span className="ordryth-drawer-link-badge">New</span>
                </Link>
                <Link href="/download" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Download Desktop App</span>
                </Link>
                <Link href="/enterprise" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Enterprise &amp; Sovereign</span>
                </Link>
                <Link href="/research/publications" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Research &amp; Science</span>
                </Link>
                <Link href="/careers" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Careers</span>
                </Link>
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Contact</span>
                </Link>
                <Link href="/login" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Sign In / Account</span>
                </Link>
                <Link href="/brand" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Brand Tokens &amp; Palette</span>
                </Link>
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="ordryth-drawer-footer">
              <button
                type="button"
                onClick={copyEmail}
                className="ordryth-drawer-copy-btn"
              >
                <span>studio@ordryth.com</span>
                <span>Copy</span>
              </button>
              <div className="ordryth-drawer-company-meta">
                Ordryth Private Limited &bull; India
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Lightbox Modal */}
      {imageZoomOpen && (
        <div
          className="image-lightbox-overlay"
          onClick={() => setImageZoomOpen(false)}
        >
          <div
            className="image-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImageZoomOpen(false)}
              aria-label="Close fullscreen view"
              className="image-lightbox-close"
            >
              ✕
            </button>
            <Image
              src="/imagica-studio-ui.jpg"
              alt="Imagica Desktop Application — Full Native Resolution"
              width={1024}
              height={608}
              unoptimized
              className="image-lightbox-img"
            />
            <div className="image-lightbox-hint">
              Imagica AI Multimodal Generative Studio • Native Resolution (1024 × 608)
            </div>
          </div>
        </div>
      )}

      {/* Toast Feedback */}
      <div className={`toast-feedback ${toastMessage ? "show" : ""}`}>
        {toastMessage}
      </div>
    </div>
  );
}
