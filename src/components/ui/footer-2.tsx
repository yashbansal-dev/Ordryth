"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoTransparent from "../../../public/logo-transparent.png";

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
}

interface FooterLinkGroup {
  name: string;
  links: FooterLink[];
}

export function Footer2() {
  const [toast, setToast] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("studio@ordryth.com").then(() => {
      setToast("Copied studio@ordryth.com to clipboard!");
      setTimeout(() => setToast(null), 2400);
    });
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };



  const footerLinkGroups: FooterLinkGroup[] = [
    {
      name: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Our Mission", href: "/mission" },
        { label: "Our Approach", href: "/approach" },
        { label: "Leadership", href: "/leadership" },
        { label: "Enterprise & Sovereign", href: "/enterprise" },
        { label: "News & Announcements", href: "/news" },
        { label: "Press & Media", href: "/press" },
        { label: "Partners & Investors", href: "/partners" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      name: "Products & Tech",
      links: [
        { label: "Imagica Workspace", href: "/products/imagica" },
        { label: "Download Desktop", href: "/download" },
        { label: "Core Technology", href: "/technology" },
        { label: "Product Roadmap", href: "/roadmap" },
        { label: "Model Documentation", href: "/docs" },
        { label: "API Reference", href: "/docs/api" },
        { label: "Engineering Blog", href: "/blog" },
        { label: "Open Source", href: "/open-source" },
      ],
    },
    {
      name: "Research",
      links: [
        { label: "Research Publications", href: "/research/publications" },
        { label: "Technical Reports", href: "/research/reports" },
        { label: "Research Projects", href: "/research/projects" },
        { label: "Developer Resources", href: "/developers" },
        { label: "Security Architecture", href: "/security" },
        { label: "Responsible AI", href: "/responsible-ai" },
      ],
    },
    {
      name: "Careers & Studio",
      links: [
        { label: "All Open Positions", href: "/careers" },
        { label: "Engineering Careers", href: "/careers/engineering" },
        { label: "Research Careers", href: "/careers/research" },
        { label: "Student Internships", href: "/careers/internships" },
        { label: "Brand Tokens & Palette", href: "/brand" },
        { label: "Copy studio@ordryth.com", href: "#", onClick: copyEmail },
        { label: "India", href: "#" },
      ],
    },
  ];

  return (
    <footer className="footer2-wrap">
      {/* Subtle dotted grid overlay with radial fade */}
      <div
        aria-hidden="true"
        className="footer2-dotted-grid"
        style={{
          backgroundImage:
            "radial-gradient(rgba(25, 24, 22, 0.09) 0.8px, transparent 0.8px)",
          backgroundSize: "14px 14px",
          maskImage:
            "radial-gradient(circle at 50% 10%, rgba(0,0,0,1), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 10%, rgba(0,0,0,1), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="footer2-inner">
        {/* Main Multi-Column Grid */}
        <div className="footer2-grid">
          {/* Brand Column (spans 3 columns) */}
          <div className="footer2-brand-col">
            <Link href="/" className="footer2-logo-row" aria-label="Ordryth Home">
              <Image
                src={logoTransparent}
                alt="Ordryth Logo"
                width={28}
                height={28}
                className="brand-logo-img"
              />
              <span className="footer2-wordmark">ORDRYTH</span>
            </Link>

            <p className="footer2-desc">
              Independent technology brand and product design laboratory. Architecting sovereign software products, transcendent interfaces, and timeless visual systems.
            </p>
          </div>

          {/* Grouped Link Columns */}
          {footerLinkGroups.map((group) => (
            <div key={group.name} className="footer2-links-col">
              <span className="footer2-col-title">{group.name}</span>
              <ul className="footer2-links-list">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    {link.onClick ? (
                      <button onClick={link.onClick} className="footer2-link-btn">
                        {link.label}
                      </button>
                    ) : (
                      <Link href={link.href} className="footer2-link">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dedicated Legal Compliance Section for Indian Private Limited Company */}
        <div className="footer2-legal-compliance-bar">
          <span className="footer2-legal-bar-title">Legal &amp; Compliance:</span>
          <div className="footer2-legal-bar-links">
            <Link href="/legal/privacy" className="footer2-legal-item">Privacy Policy</Link>
            <span className="footer2-legal-sep">&bull;</span>
            <Link href="/legal/terms" className="footer2-legal-item">Terms of Service</Link>
            <span className="footer2-legal-sep">&bull;</span>
            <Link href="/legal/cookies" className="footer2-legal-item">Cookie Policy</Link>
            <span className="footer2-legal-sep">&bull;</span>
            <Link href="/legal/copyright" className="footer2-legal-item">Copyright Policy</Link>
            <span className="footer2-legal-sep">&bull;</span>
            <Link href="/legal/trademarks" className="footer2-legal-item">Trademark Policy</Link>
            <span className="footer2-legal-sep">&bull;</span>
            <Link href="/legal/responsible-disclosure" className="footer2-legal-item">Responsible Disclosure</Link>
            <span className="footer2-legal-sep">&bull;</span>
            <Link href="/accessibility" className="footer2-legal-item">Accessibility Statement</Link>
            <span className="footer2-legal-sep">&bull;</span>
            <Link href="/legal/grievance" className="footer2-legal-item">Grievance Officer (India)</Link>
          </div>
        </div>

        {/* Bottom Actions & Legal Row */}
        <div className="footer2-bottom-row">
          {/* Social Media Links */}
          <div className="footer2-social-section">
            <span className="footer2-social-label">Follow &amp; Connect</span>
            <div className="footer2-social-buttons">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/imagicastudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="footer2-social-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/useimagica/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="footer2-social-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@useimagica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="footer2-social-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#FAF9F5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Legal / Copyright / Back to top */}
          <div className="footer2-legal-section">
            <span className="footer2-copyright">
              &copy; 2026 Ordryth Private Limited, India. All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              className="footer2-scroll-top"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <span>&uarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating feedback toast */}
      {toast && (
        <div className="footer2-toast">
          {toast}
        </div>
      )}
    </footer>
  );
}

export default Footer2;
