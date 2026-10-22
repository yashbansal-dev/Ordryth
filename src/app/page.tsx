"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer2 } from "@/components/ui/footer-2";
import logoTransparent from "../../public/logo-transparent.png";

interface Project {
  id: string;
  number: string;
  category: "Products & Software" | "Applied AI" | "Engineering";
  secondaryCategories?: string[];
  title: string;
  description: string;
  metric: string;
  linkText: string;
  href: string;
  isExternal?: boolean;
}

const CATEGORIES = [
  "All",
  "Products & Software",
  "Applied AI",
  "Engineering",
];

const ORDRYTH_PROJECTS: Project[] = [
  {
    id: "imagica-desktop",
    number: "01",
    category: "Products & Software",
    title: "Imagica Desktop: Dedicated creative AI workspace for image generation & editing",
    description:
      "A creative AI workspace for image generation and editing, bringing powerful models and intuitive creative controls into a dedicated desktop application.",
    metric: "AI Creation · Desktop Software",
    linkText: "Explore Imagica Desktop",
    href: "https://imagica.co.in/desktop",
    isExternal: true,
  },
  {
    id: "generative-ai-systems",
    number: "02",
    category: "Applied AI",
    title: "Generative AI Systems: Multi-model infrastructure & visual refinement pipelines",
    description:
      "The AI infrastructure behind Imagica's creative workflows, connecting generative models with tools for image creation, refinement, and transformation.",
    metric: "Generative AI · Model Integration",
    linkText: "Explore architecture",
    href: "/research#generative-ai",
  },
  {
    id: "local-ai-computing",
    number: "03",
    category: "Engineering",
    secondaryCategories: ["Applied AI"],
    title: "Local AI Computing: Hardware-aware execution & sovereign desktop inference",
    description:
      "Hardware-aware AI execution designed to make creative workflows adapt to available computing resources, bringing local inference closer to the user.",
    metric: "Local Inference · Performance Engineering",
    linkText: "Discover our approach",
    href: "/research#local-ai",
  },
  {
    id: "imagica-studio",
    number: "04",
    category: "Products & Software",
    title: "Imagica Studio: Unified creative environment for models, ratios & styling",
    description:
      "A unified creative environment that brings model selection, generation settings, aspect ratios, and visual styles into one streamlined workflow.",
    metric: "Product Design · Creative Tools",
    linkText: "Explore the studio",
    href: "#showcase",
  },
  {
    id: "ordryth-engineering",
    number: "05",
    category: "Engineering",
    title: "ORDRYTH Engineering: Foundational architecture for sovereign software systems",
    description:
      "The engineering foundation behind ORDRYTH products, combining software architecture, AI integration, and performance-conscious design to turn complex systems into usable technology.",
    metric: "Software Architecture · AI Engineering",
    linkText: "Our methodology",
    href: "/about#engineering",
  },
  {
    id: "ordryth-company",
    number: "06",
    category: "Products & Software",
    secondaryCategories: ["Applied AI", "Engineering"],
    title: "ORDRYTH: AI and software technology company building useful computing products",
    description:
      "An AI and software technology company building products that make advanced computing more accessible, creative workflows more capable, and technology more useful.",
    metric: "Company · Technology · Products",
    linkText: "Discover ORDRYTH",
    href: "/about",
  },
];

export default function OrdrythHomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [imageZoomOpen, setImageZoomOpen] = useState<boolean>(false);


  const filteredProjects =
    activeCategory === "All"
      ? ORDRYTH_PROJECTS
      : ORDRYTH_PROJECTS.filter(
          (p) => p.category === activeCategory || p.secondaryCategories?.includes(activeCategory)
        );

  const searchedProjects = searchQuery.trim()
    ? ORDRYTH_PROJECTS.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.metric.toLowerCase().includes(searchQuery.toLowerCase())
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

          {/* Top-Right: Navigation & 3-line Hamburger Menu Button */}
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

      {/* Editorial Selected Work & Technology Section */}
      <main className="anthropic-feed-section" id="works">
        <div className="anthropic-feed-header">
          <div>
            <h2 className="anthropic-feed-title">Selected work &amp; technology</h2>
            <p className="anthropic-feed-subtitle">
              Products and engineering shaping a more capable creative future.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="anthropic-feed-tabs">
            {CATEGORIES.map((cat) => (
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
          {filteredProjects.map((project) => {
            const isExternal = project.isExternal;
            const CardWrapper = isExternal ? "a" : Link;
            const linkProps = isExternal
              ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: project.href };

            return (
              <CardWrapper
                key={project.id}
                {...linkProps}
                className="anthropic-card"
                title={`${project.title} — ${project.linkText}`}
              >
                <div>
                  <div className="anthropic-card-meta">
                    <span className="text-[#C85A32] font-semibold">
                      {project.number} &mdash; {project.category}
                    </span>
                  </div>
                  <h3 className="anthropic-card-heading">{project.title}</h3>
                  <p className="anthropic-card-desc">{project.description}</p>
                </div>
                <div className="pt-3 border-t border-[#EBE6DB] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#7A756D]">
                    {project.metric}
                  </span>
                  <span className="anthropic-card-link text-xs">
                    {project.linkText} &rarr;
                  </span>
                </div>
              </CardWrapper>
            );
          })}
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
                  Quick search: Try &ldquo;Imagica&rdquo;, &ldquo;Engine&rdquo;, &ldquo;Local AI&rdquo;, or &ldquo;ORDRYTH&rdquo;.
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

              {/* Company Section */}
              <div className="ordryth-drawer-section-title">Company</div>
              <nav className="ordryth-drawer-links">
                <Link href="/about" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>About</span>
                </Link>
                <Link href="/#works" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Our Work</span>
                </Link>
                <Link href="/about#engineering" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Our Approach</span>
                </Link>
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Contact</span>
                </Link>
                <Link href="/brand" onClick={() => setMenuOpen(false)} className="ordryth-drawer-link">
                  <span>Brand</span>
                </Link>
              </nav>

              {/* Products */}
              <div className="ordryth-drawer-section-title">Products</div>
              <nav className="ordryth-drawer-links">
                <a
                  href="https://imagica.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="ordryth-drawer-link"
                >
                  <span>Imagica</span>
                </a>
                <a
                  href="https://imagica.co.in/desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="ordryth-drawer-link"
                >
                  <span>Imagica Desktop</span>
                  <span className="ordryth-drawer-link-badge">New</span>
                </a>
              </nav>
            </div>

            {/* Drawer Footer */}
            <div className="ordryth-drawer-footer">
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
            <div style={{ marginTop: "12px", textAlign: "center" }}>
              <a
                href="https://imagica.co.in/desktop"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 20px",
                  backgroundColor: "#C85A32",
                  color: "#FAF9F5",
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  borderRadius: "9999px",
                  textDecoration: "none",
                }}
              >
                <span>Get Imagica Desktop &rarr;</span>
              </a>
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
