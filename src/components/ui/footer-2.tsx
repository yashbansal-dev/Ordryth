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
        { label: "Our Work", href: "/#works" },
        { label: "Our Approach", href: "/about#engineering" },
        { label: "Contact", href: "/contact" },
        { label: "Brand", href: "/brand" },
      ],
    },
    {
      name: "Products",
      links: [
        { label: "Imagica", href: "https://imagica.co.in", isExternal: true },
        { label: "Imagica Desktop", href: "https://imagica.co.in/desktop", isExternal: true },
        { label: "Download", href: "https://imagica.co.in/desktop", isExternal: true },
      ],
    },
    {
      name: "Connect",
      links: [
        {
          label: "Business Enquiries",
          href: "/contact",
        },
        {
          label: "Partnerships",
          href: "/contact",
        },
        {
          label: "Careers",
          href: "mailto:careers@ordryth.com?subject=Career%20Application%20%E2%80%94%20ORDRYTH",
          isExternal: true,
        },
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
            "radial-gradient(rgba(25, 24, 22, 0.08) 0.8px, transparent 0.8px)",
          backgroundSize: "14px 14px",
          maskImage:
            "radial-gradient(circle at 50% 10%, rgba(0,0,0,1), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 10%, rgba(0,0,0,1), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="footer2-inner">
        {/* Main 4-Column Grid */}
        <div className="footer2-grid">
          {/* Column 1: ORDRYTH Brand */}
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
              ORDRYTH builds intelligent software and AI-powered products through thoughtful engineering, purposeful design, and a commitment to useful technology.
            </p>
          </div>

          {/* Columns 2-4: Company, Products, Connect */}
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
                    ) : link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer2-link"
                      >
                        {link.label}
                      </a>
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

        {/* Enterprise Bottom Row: Legal links, Social icons, Copyright, Back to Top */}
        <div className="footer2-bottom-row" style={{ marginTop: "56px" }}>
          {/* Copyright & Legal Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span className="footer2-copyright">
              &copy; 2026 ORDRYTH Private Limited. All rights reserved.
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8rem" }}>
              <Link href="/privacy" className="footer2-legal-item">
                Privacy Policy
              </Link>
              <span className="footer2-legal-sep">&bull;</span>
              <Link href="/terms" className="footer2-legal-item">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social Media Links & Back to top */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
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
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/useimagica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                title="X"
                className="footer2-social-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#FAF9F5" />
                </svg>
              </a>
            </div>

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
