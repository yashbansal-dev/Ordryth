"use client";

import { useState } from "react";
import Image from "next/image";

interface Swatch {
  name: string;
  token: string;
  hex: string;
  role?: string;
  border?: boolean;
}

const CORE_COLORS: Swatch[] = [
  { role: "01 • Canvas", name: "Warm Stone", token: "--bg", hex: "#FAF9F5", border: true },
  { role: "02 • Typography", name: "Deep Charcoal", token: "--text", hex: "#191816" },
  { role: "03 • Brand Accent", name: "Terracotta Coral", token: "--accent", hex: "#C85A32" },
  { role: "04 • Structure", name: "Hairline Sand", token: "--border", hex: "#E8E4DB" },
];

const BACKGROUND_SURFACES: Swatch[] = [
  { name: "Warm Stone Main", token: "--bg-main", hex: "#FAF9F5", border: true },
  { name: "Surface Pure", token: "--bg-surface", hex: "#FFFFFF", border: true },
  { name: "Parchment Warm", token: "--bg-surface-alt", hex: "#F4F1EA" },
  { name: "Ivory Tint", token: "--bg-surface-tint", hex: "#EFECE3" },
  { name: "Surface Hover", token: "--bg-hover", hex: "#E9E5DB" },
];

const TYPOGRAPHY_NEUTRALS: Swatch[] = [
  { name: "Deep Charcoal", token: "--text-primary", hex: "#191816" },
  { name: "Warm Slate", token: "--text-secondary", hex: "#56534E" },
  { name: "Muted Stone", token: "--text-muted", hex: "#848079" },
  { name: "Inverted Light", token: "--text-inverted", hex: "#FAF9F5", border: true },
];

const BRAND_SCHEMATIC: Swatch[] = [
  { name: "Terracotta Ember", token: "--accent-terracotta", hex: "#C85A32" },
  { name: "Terracotta Deep", token: "--accent-terracotta-deep", hex: "#B34E29" },
  { name: "Cobalt Slate", token: "--accent-cobalt", hex: "#234E70" },
  { name: "Deep Verdigris", token: "--accent-verdigris", hex: "#1D685E" },
  { name: "Aligned Sage", token: "--accent-sage", hex: "#2C6E49" },
  { name: "Warm Ochre", token: "--accent-ochre", hex: "#A86A1D" },
  { name: "Rosewood Crimson", token: "--accent-crimson", hex: "#9E3A3A" },
  { name: "Muted Iris", token: "--accent-purple", hex: "#6A557A" },
  { name: "Nordic Steel", token: "--accent-steel", hex: "#4A6274" },
];

const STRUCTURAL_BORDERS: Swatch[] = [
  { name: "Subtle Line", token: "--border-subtle", hex: "#E8E4DB" },
  { name: "Medium Border", token: "--border-medium", hex: "#DCD6CA" },
  { name: "Focus Charcoal", token: "--border-focus", hex: "#191816" },
];

const CSS_SNIPPET = `:root {
  /* ========================================================================
     00. THE CORE 4-COLOR FOUNDATION (Primary Minimal Identity)
     ======================================================================== */
  --bg: #FAF9F5;                   /* 1. Canvas: Warm stone background */
  --text: #191816;                 /* 2. Typography: Deep charcoal text */
  --accent: #C85A32;               /* 3. Brand: Signature terracotta coral */
  --border: #E8E4DB;               /* 4. Structure: Hairline subtle sand */

  /* ========================================================================
     TYPOGRAPHY (Technical Minimalist)
     ======================================================================== */
  --font-serif: "Space Grotesk", sans-serif;
  --font-sans: "Inter", sans-serif;
  --font-mono: "Space Mono", monospace;

  /* ========================================================================
     EXTENDED PALETTE (Surfaces, Neutrals & Schematic Accents)
     ======================================================================== */
  /* Backgrounds & Surfaces */
  --bg-main: #FAF9F5;              /* Primary canvas */
  --bg-surface: #FFFFFF;           /* Card & panel surface */
  --bg-surface-alt: #F4F1EA;       /* Warm parchment secondary */
  --bg-surface-tint: #EFECE3;      /* Subtle chip & tag tint */
  --bg-hover: #E9E5DB;             /* Interactive element hover */

  /* Text & Typography */
  --text-primary: #191816;         /* Deep espresso-charcoal headline */
  --text-secondary: #56534E;       /* Warm slate body text */
  --text-muted: #848079;           /* Soft stone caption & metadata */
  --text-inverted: #FAF9F5;        /* Light contrast on dark buttons */

  /* Brand & Schematic Accents */
  --accent-terracotta: #C85A32;    /* Primary brand coral/terracotta */
  --accent-terracotta-deep: #B34E29; /* Deep brand hover */
  --accent-cobalt: #234E70;        /* Infrastructure, SDK & telemetry */
  --accent-verdigris: #1D685E;     /* Formal proofs & verified invariants */
  --accent-sage: #2C6E49;          /* Safety passes & status green */
  --accent-ochre: #A86A1D;         /* Deliberation, critique & attention */
  --accent-crimson: #9E3A3A;       /* Red-teaming, boundary limits & alerts */
  --accent-purple: #6A557A;        /* Interpretability & monosemantic latents */
  --accent-steel: #4A6274;         /* Extended context & memory cache */

  /* Structural Borders */
  --border-subtle: #E8E4DB;        /* 1px clean editorial dividers */
  --border-medium: #DCD6CA;        /* Card & input borders */
  --border-focus: #191816;         /* Active state stroke */
}`;

export default function HomePage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage(label);
      setTimeout(() => {
        setToastMessage(null);
      }, 2000);
    });
  };

  return (
    <>
      {/* Pinned Top Navigation Bar with Logo in Top-Left Corner */}
      <nav className="site-nav">
        <div className="container nav-inner">
          <div className="brand-logo">
            <Image
              src="/logo-transparent.png"
              alt="Ordryth Mark"
              width={36}
              height={36}
              className="brand-logo-img"
              priority
            />
            <span className="brand-wordmark">ORDRYTH</span>
          </div>
        </div>
      </nav>

      {/* Page Title Header */}
      <header className="palette-header">
        <div className="container">
          <h1 className="page-title">Color Scheme</h1>
        </div>
      </header>

      <main className="container main-content">
        {/* Core 4-Color Foundation */}
        <section className="swatch-section core-section">
          <div className="core-header">
            <h2 className="section-heading core-heading">★ Core 4-Color Foundation (Primary Identity)</h2>
            <span className="core-badge">Essential Minimal Palette</span>
          </div>
          <p className="section-description">
            The four fundamental colors that establish Ordryth&apos;s visual identity. All extended shades derive from these four.
          </p>
          <div className="core-grid">
            {CORE_COLORS.map((item) => (
              <div
                key={item.token}
                className="core-card"
                onClick={() => copyToClipboard(item.hex, `Copied ${item.hex} (${item.name})!`)}
                title="Click to copy HEX code"
              >
                <div
                  className="core-preview"
                  style={{
                    backgroundColor: item.hex,
                    border: item.border ? "1.5px solid var(--border-medium)" : "none",
                  }}
                />
                <div className="swatch-info">
                  {item.role && <div className="swatch-role">{item.role}</div>}
                  <div className="swatch-name">{item.name}</div>
                  <div className="swatch-token">{item.token}</div>
                  <div className="swatch-hex">{item.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Mark & Palette Interaction */}
        <section className="swatch-section logo-showcase-section">
          <h2 className="section-heading">Brand Mark &amp; Palette Interaction</h2>
          <div className="logo-display-grid">
            <div
              className="logo-display-card"
              style={{ backgroundColor: "var(--bg-main)", border: "1px solid var(--border-medium)" }}
            >
              <Image
                src="/logo-transparent.png"
                alt="Ordryth Logo on Warm Stone"
                width={58}
                height={58}
                className="showcase-logo"
              />
              <div className="logo-display-label">On Warm Stone (Canvas)</div>
            </div>

            <div
              className="logo-display-card"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border-medium)" }}
            >
              <Image
                src="/logo-transparent.png"
                alt="Ordryth Logo on Pure White"
                width={58}
                height={58}
                className="showcase-logo"
              />
              <div className="logo-display-label">On Pure White (Surface)</div>
            </div>

            <div className="logo-display-card" style={{ backgroundColor: "var(--text-primary)" }}>
              <Image
                src="/logo-transparent.png"
                alt="Ordryth Logo Inverted on Charcoal"
                width={58}
                height={58}
                className="showcase-logo inverted-logo"
              />
              <div className="logo-display-label" style={{ color: "#FAF9F5" }}>
                Inverted on Deep Charcoal
              </div>
            </div>

            <div className="logo-display-card" style={{ backgroundColor: "var(--accent-terracotta)" }}>
              <Image
                src="/logo-transparent.png"
                alt="Ordryth Logo Inverted on Terracotta"
                width={58}
                height={58}
                className="showcase-logo inverted-logo"
              />
              <div className="logo-display-label" style={{ color: "#FFFFFF" }}>
                Inverted on Terracotta
              </div>
            </div>
          </div>
        </section>

        {/* Group 1: Backgrounds & Surfaces (Extended) */}
        <section className="swatch-section">
          <h2 className="section-heading">01 &mdash; Backgrounds &amp; Surfaces (Extended)</h2>
          <div className="swatches-grid">
            {BACKGROUND_SURFACES.map((item) => (
              <div
                key={item.token}
                className="swatch-card"
                onClick={() => copyToClipboard(item.hex, `Copied ${item.hex}!`)}
                title="Click to copy HEX code"
              >
                <div
                  className="swatch-preview"
                  style={{
                    backgroundColor: item.hex,
                    border: item.border ? "1px solid var(--border-subtle)" : "none",
                  }}
                />
                <div className="swatch-info">
                  <div className="swatch-name">{item.name}</div>
                  <div className="swatch-token">{item.token}</div>
                  <div className="swatch-hex">{item.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Group 2: Typography & Neutrals */}
        <section className="swatch-section">
          <h2 className="section-heading">02 &mdash; Typography &amp; Neutrals</h2>
          <div className="swatches-grid">
            {TYPOGRAPHY_NEUTRALS.map((item) => (
              <div
                key={item.token}
                className="swatch-card"
                onClick={() => copyToClipboard(item.hex, `Copied ${item.hex}!`)}
                title="Click to copy HEX code"
              >
                <div
                  className="swatch-preview"
                  style={{
                    backgroundColor: item.hex,
                    border: item.border ? "1px solid var(--border-subtle)" : "none",
                  }}
                />
                <div className="swatch-info">
                  <div className="swatch-name">{item.name}</div>
                  <div className="swatch-token">{item.token}</div>
                  <div className="swatch-hex">{item.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Group 3: Brand & Schematic Accents */}
        <section className="swatch-section">
          <h2 className="section-heading">03 &mdash; Brand &amp; Schematic Accents</h2>
          <div className="swatches-grid">
            {BRAND_SCHEMATIC.map((item) => (
              <div
                key={item.token}
                className="swatch-card"
                onClick={() => copyToClipboard(item.hex, `Copied ${item.hex}!`)}
                title="Click to copy HEX code"
              >
                <div className="swatch-preview" style={{ backgroundColor: item.hex }} />
                <div className="swatch-info">
                  <div className="swatch-name">{item.name}</div>
                  <div className="swatch-token">{item.token}</div>
                  <div className="swatch-hex">{item.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Group 4: Borders & Structure */}
        <section className="swatch-section">
          <h2 className="section-heading">04 &mdash; Borders &amp; Structure</h2>
          <div className="swatches-grid">
            {STRUCTURAL_BORDERS.map((item) => (
              <div
                key={item.token}
                className="swatch-card"
                onClick={() => copyToClipboard(item.hex, `Copied ${item.hex}!`)}
                title="Click to copy HEX code"
              >
                <div className="swatch-preview" style={{ backgroundColor: item.hex }} />
                <div className="swatch-info">
                  <div className="swatch-name">{item.name}</div>
                  <div className="swatch-token">{item.token}</div>
                  <div className="swatch-hex">{item.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Group 5: CSS Variables Code Block */}
        <section className="swatch-section">
          <div className="code-header">
            <h2 className="section-heading" style={{ marginBottom: 0 }}>
              05 &mdash; CSS Variables Tokens
            </h2>
            <button
              className="btn-copy-css"
              onClick={() => copyToClipboard(CSS_SNIPPET, "Copied all CSS variables to clipboard!")}
            >
              Copy CSS Tokens
            </button>
          </div>
          <pre className="css-tokens-box">
            <code>{CSS_SNIPPET}</code>
          </pre>
        </section>
      </main>

      {/* Floating Toast Notification */}
      <div className={`toast-feedback ${toastMessage ? "show" : ""}`}>
        {toastMessage || "Copied!"}
      </div>
    </>
  );
}
