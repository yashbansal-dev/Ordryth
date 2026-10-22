import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-main)",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "72px",
        paddingBottom: "56px",
        color: "var(--text-primary)",
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px 36px",
            marginBottom: "64px",
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: "340px" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "18px",
                textDecoration: "none",
              }}
            >
              <div style={{ position: "relative", width: 26, height: 26 }}>
                <Image
                  src="/logo-transparent.png"
                  alt="ORDRYTH Mark"
                  width={26}
                  height={26}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                }}
              >
                ORDRYTH
              </span>
            </Link>

            <p
              style={{
                fontSize: "0.95rem",
                fontWeight: 450,
                color: "var(--text-primary)",
                marginBottom: "8px",
                lineHeight: 1.4,
              }}
            >
              An independent approach to building technology.
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Exploring and building intelligent systems that expand what people can create, discover, and accomplish.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3
              style={{
                fontSize: "0.74rem",
                fontWeight: 650,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "20px",
              }}
            >
              Company &amp; Research
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <Link
                  href="/research"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    transition: "color var(--transition)",
                  }}
                  className="footer-nav-link"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    transition: "color var(--transition)",
                  }}
                  className="footer-nav-link"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    transition: "color var(--transition)",
                  }}
                  className="footer-nav-link"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    transition: "color var(--transition)",
                  }}
                  className="footer-nav-link"
                >
                  Careers &amp; Collaboration
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    transition: "color var(--transition)",
                  }}
                  className="footer-nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Product Column */}
          <div>
            <h3
              style={{
                fontSize: "0.74rem",
                fontWeight: 650,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "20px",
              }}
            >
              Featured Product
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="https://imagica.co.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                }}
              >
                <span>Imagica</span>
                <ArrowUpRight size={14} style={{ color: "var(--accent-terracotta)" }} />
              </a>
              <p
                style={{
                  fontSize: "0.84rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                }}
              >
                AI-powered image generation and editing platform developed for creative exploration.
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.76rem",
                  color: "var(--accent-sage)",
                  fontWeight: 500,
                  marginTop: "4px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-sage)",
                  }}
                />
                Live &amp; Available
              </div>
            </div>
          </div>

          {/* Legal & Standards Column */}
          <div>
            <h3
              style={{
                fontSize: "0.74rem",
                fontWeight: 650,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "20px",
              }}
            >
              Legal &amp; Ethics
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <Link
                  href="/privacy"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    transition: "color var(--transition)",
                  }}
                  className="footer-nav-link"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    transition: "color var(--transition)",
                  }}
                  className="footer-nav-link"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <span
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Independent Research Lab
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Divider & Meta */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "28px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
          }}
        >
          <div>© 2026 ORDRYTH. All rights reserved.</div>
          <div style={{ letterSpacing: "0.02em" }}>Intelligence, thoughtfully built.</div>
        </div>
      </div>
    </footer>
  );
}
