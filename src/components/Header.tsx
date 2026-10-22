"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Research", href: "/research" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-nav">
      <div className="container">
        <div className="nav-inner">
          {/* Logo & Brand Wordmark */}
          <Link href="/" className="brand-logo" aria-label="ORDRYTH Home">
            <div className="logo-symbol-wrap" style={{ position: "relative", width: 28, height: 28 }}>
              <Image
                src="/logo-transparent.png"
                alt="ORDRYTH Symbol"
                width={28}
                height={28}
                priority
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.05rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
              }}
            >
              ORDRYTH
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-only" aria-label="Main Navigation">
            <ul style={{ display: "flex", alignItems: "center", gap: "32px", listStyle: "none" }}>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="nav-link"
                      style={{
                        position: "relative",
                        padding: "8px 0",
                        fontSize: "0.9rem",
                        fontWeight: isActive ? 600 : 450,
                        color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                        transition: "color var(--transition)",
                      }}
                    >
                      {link.name}
                      {isActive && (
                        <span
                          style={{
                            position: "absolute",
                            bottom: "0px",
                            left: 0,
                            right: 0,
                            height: "1.5px",
                            backgroundColor: "var(--text-primary)",
                            borderRadius: "1px",
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action: Flagship link & Contact CTA */}
          <div className="nav-actions desktop-only">
            <a
              href="https://imagica.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                fontSize: "0.82rem",
                padding: "7px 15px",
                gap: "5px",
                borderColor: "var(--border-subtle)",
              }}
              title="Visit Imagica — AI Image Platform"
            >
              <span>Imagica</span>
              <ArrowUpRight size={13} style={{ color: "var(--text-muted)" }} />
            </a>

            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                fontSize: "0.84rem",
                padding: "8px 18px",
              }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="mobile-only">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                backgroundColor: "var(--bg-surface)",
                color: "var(--text-primary)",
                cursor: "pointer",
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "65px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--bg-main)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "32px 24px",
            borderTop: "1px solid var(--border-subtle)",
            overflowY: "auto",
          }}
        >
          <nav aria-label="Mobile Navigation">
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "20px" }}>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 0",
                        fontSize: "1.4rem",
                        fontFamily: "var(--font-serif)",
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                        borderBottom: "1px solid var(--border-subtle)",
                      }}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "var(--accent-terracotta)",
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "32px" }}>
            <a
              href="https://imagica.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-block"
              style={{ padding: "14px", justifyContent: "center" }}
            >
              <span>Explore Imagica</span>
              <ArrowUpRight size={16} />
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary btn-block"
              style={{ padding: "14px", justifyContent: "center" }}
            >
              Get in Touch
            </Link>
            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                textAlign: "center",
                marginTop: "16px",
              }}
            >
              Intelligence, thoughtfully built.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
