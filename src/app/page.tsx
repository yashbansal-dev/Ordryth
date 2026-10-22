"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleDropdown = (name: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".nav-dropdown-wrap")) {
        setActiveDropdown(null);
      }
    };
    if (activeDropdown) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [activeDropdown]);

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
          {/* Left Navigation Pills */}
          <div className="anthropic-nav-left">
            <Link href="#works" className="anthropic-pill">
              Selected Works
            </Link>

            <div className="nav-dropdown-wrap">
              <button
                onClick={() => toggleDropdown("disciplines")}
                className="anthropic-pill"
              >
                <span>Disciplines</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {activeDropdown === "disciplines" && (
                <div className="nav-dropdown-menu" style={{ width: "260px" }}>
                  <div className="nav-dropdown-meta">Studio Disciplines</div>
                  <a href="#works" onClick={() => setActiveDropdown(null)} className="nav-dropdown-item">
                    01 &bull; Digital Product Architecture
                  </a>
                  <a href="#works" onClick={() => setActiveDropdown(null)} className="nav-dropdown-item">
                    02 &bull; Tokenized Design Systems
                  </a>
                  <a href="#works" onClick={() => setActiveDropdown(null)} className="nav-dropdown-item">
                    03 &bull; Applied AI &amp; Spatial Canvas
                  </a>
                  <a href="#works" onClick={() => setActiveDropdown(null)} className="nav-dropdown-item">
                    04 &bull; Brand Architecture &amp; Type
                  </a>
                </div>
              )}
            </div>

            <div className="nav-dropdown-wrap">
              <button
                onClick={() => toggleDropdown("philosophy")}
                className="anthropic-pill"
              >
                <span>Philosophy</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {activeDropdown === "philosophy" && (
                <div className="nav-dropdown-menu" style={{ width: "250px" }}>
                  <div className="nav-dropdown-meta">Core Philosophy</div>
                  <div className="nav-dropdown-card">
                    <strong>Form Follows Clarity</strong>
                    Eliminating decorative noise so function becomes self-evident.
                  </div>
                  <div className="nav-dropdown-divider" />
                  <div className="nav-dropdown-card">
                    <strong>Radical Reduction</strong>
                    Software built like fine horology: mathematically sound and serene.
                  </div>
                </div>
              )}
            </div>

            <Link href="/brand" className="anthropic-pill">
              Brand Palette
            </Link>
          </div>

          {/* Centered Brand Wordmark with Logo */}
          <div className="anthropic-nav-center">
            <Link href="/" className="anthropic-logo">
              <Image
                src="/logo-transparent.png"
                alt="Ordryth Mark"
                width={24}
                height={24}
                className="brand-logo-img"
                style={{ marginRight: "6px" }}
                priority
              />
              <span>ORDRYTH</span>
            </Link>
          </div>

          {/* Right Navigation Actions */}
          <div className="anthropic-nav-right">
            <div className="nav-dropdown-wrap">
              <button
                onClick={() => toggleDropdown("studio")}
                className="anthropic-pill"
              >
                <span>Studio</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {activeDropdown === "studio" && (
                <div className="nav-dropdown-menu align-right" style={{ width: "230px" }}>
                  <div className="nav-dropdown-meta">ORDRYTH PRIVATE LIMITED &bull; INDIA</div>
                  <div className="nav-dropdown-card">
                    India &bull; Technology &amp; Design Laboratory
                  </div>
                  <div className="nav-dropdown-divider" />
                  <Link href="/brand" onClick={() => setActiveDropdown(null)} className="nav-dropdown-item">
                    Design Tokens &amp; Palette &rarr;
                  </Link>
                  <button onClick={() => { copyEmail(); setActiveDropdown(null); }} className="nav-dropdown-item">
                    Copy studio@ordryth.com
                  </button>
                </div>
              )}
            </div>

            <button onClick={copyEmail} className="anthropic-pill">
              <span>Start a Project</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Search Icon Button */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="anthropic-icon-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              className="anthropic-icon-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Headline Section tailored for Ordryth */}
      <header className="anthropic-hero-wrap">
        <h1 className="anthropic-headline">
          <strong>Digital products and interfaces that put craft at the frontier.</strong>{" "}
          Software will shape how humanity collaborates with intelligence. Ordryth is an independent design laboratory dedicated to high-conviction tools and timeless systems.
        </h1>

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
              <div className="macbook-screen">
                <Image
                  src="/imagica-desktop-ui.jpg"
                  alt="Imagica Desktop Application — Multimodal Generative AI Node Studio"
                  width={1440}
                  height={900}
                  priority
                  className="macbook-screen-img"
                />
                {/* Subtle Screen Reflection Glare */}
                <div className="macbook-screen-glare" />
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

      {/* Editorial High-Craft Footer for Ordryth */}
      <footer className="ordryth-footer">
        <div className="ordryth-footer-inner">
          <div className="ordryth-footer-top">
            {/* Column 1: Brand & Mission */}
            <div className="footer-brand-col">
              <div className="footer-brand-row">
                <Image
                  src="/logo-transparent.png"
                  alt="Ordryth Logo"
                  width={28}
                  height={28}
                  className="brand-logo-img"
                />
                <span className="footer-brand-wordmark">ORDRYTH</span>
              </div>
              <p className="footer-brand-desc">
                Independent technology brand and product design laboratory. Architecting sovereign software products, transcendent interfaces, and timeless visual systems.
              </p>
              <div className="footer-status-pill">
                <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
                <span>Accepting select Q4 2026 commissions</span>
              </div>
            </div>

            {/* Column 2: Selected Works */}
            <div className="footer-links-col">
              <h4 className="footer-heading">Selected Works</h4>
              <ul className="footer-list">
                <li><a href="#works" className="footer-link">Aether OS</a></li>
                <li><a href="#works" className="footer-link">Chronos Compute</a></li>
                <li><a href="#works" className="footer-link">Verve Kinetic</a></li>
                <li><a href="#works" className="footer-link">Kalon Intelligence</a></li>
                <li><a href="#works" className="footer-link">Monolith Variable</a></li>
                <li><a href="#works" className="footer-link">Prism Protocol</a></li>
              </ul>
            </div>

            {/* Column 3: Disciplines */}
            <div className="footer-links-col">
              <h4 className="footer-heading">Disciplines</h4>
              <ul className="footer-list">
                <li><a href="#works" className="footer-link">Digital Product Architecture</a></li>
                <li><a href="#works" className="footer-link">Tokenized Design Systems</a></li>
                <li><a href="#works" className="footer-link">Applied AI &amp; Spatial Canvas</a></li>
                <li><a href="#works" className="footer-link">Brand Architecture &amp; Type</a></li>
                <li><a href="#works" className="footer-link">Engineering Tolerances</a></li>
              </ul>
            </div>

            {/* Column 4: Studio Practice */}
            <div className="footer-links-col">
              <h4 className="footer-heading">Studio Practice</h4>
              <ul className="footer-list">
                <li><Link href="/brand" className="footer-link">Design Tokens &amp; Palette</Link></li>
                <li>
                  <button onClick={copyEmail} className="footer-link">
                    studio@ordryth.com
                  </button>
                </li>
                <li><span className="footer-link" style={{ cursor: "default", color: "#8A847B" }}>London &bull; San Francisco</span></li>
                <li><span className="footer-link" style={{ cursor: "default", color: "#8A847B" }}>Est. 2024 &bull; Independent</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="ordryth-footer-bottom">
            <div>&copy; 2026 Ordryth Design Studio. All rights reserved.</div>
            <div className="footer-legal-links">
              <button onClick={copyEmail} className="footer-legal-link">
                Inquire for Q4 2026
              </button>
              <Link href="/brand" className="footer-legal-link">
                Color Scheme
              </Link>
              <a href="mailto:studio@ordryth.com" className="footer-legal-link">
                Direct Email
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="scroll-top-btn"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <span>&uarr;</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

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

      {/* Hamburger Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-xs">
          <div className="bg-[#FAF9F5] border-l border-[#E6E1D5] w-full max-w-sm h-full p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo-transparent.png"
                    alt="Ordryth Logo"
                    width={28}
                    height={28}
                  />
                  <span className="font-bold text-lg tracking-widest font-sans">ORDRYTH</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 rounded-full border border-[#E6E1D5] flex items-center justify-center text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-4 text-base font-medium">
                <a href="#works" onClick={() => setMenuOpen(false)} className="hover:text-[#C85A32]">Selected Works</a>
                <a href="#works" onClick={() => setMenuOpen(false)} className="hover:text-[#C85A32]">Disciplines &amp; Architecture</a>
                <Link href="/brand" onClick={() => setMenuOpen(false)} className="hover:text-[#C85A32]">Brand Palette &amp; Tokens</Link>
                <button onClick={() => { copyEmail(); setMenuOpen(false); }} className="text-left hover:text-[#C85A32]">
                  Copy Studio Email
                </button>
                <a href="mailto:studio@ordryth.com" onClick={() => setMenuOpen(false)} className="hover:text-[#C85A32]">
                  Direct Inquiry &rarr;
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E6E1D5] text-xs text-[#7A756D]">
              Ordryth Design Studio &bull; London &amp; San Francisco
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
