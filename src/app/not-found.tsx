import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-main)",
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          textAlign: "center",
          backgroundColor: "var(--bg-surface)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          padding: "clamp(36px, 6vw, 64px)",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "var(--bg-main)",
            border: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px auto",
          }}
        >
          <div style={{ position: "relative", width: 28, height: 28 }}>
            <Image
              src="/logo-transparent.png"
              alt="ORDRYTH Mark"
              width={28}
              height={28}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            fontWeight: 650,
            letterSpacing: "0.14em",
            color: "var(--accent-terracotta)",
            display: "block",
            marginBottom: "12px",
          }}
        >
          404 &bull; PAGE NOT LOCATED
        </span>

        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: "16px",
          }}
        >
          This coordinate does not exist.
        </h1>

        <p
          style={{
            fontSize: "0.96rem",
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            marginBottom: "32px",
          }}
        >
          The page or asset you requested could not be resolved within the ORDRYTH domain. It may have moved or been
          archived.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          <Link href="/" className="btn btn-primary">
            <ArrowLeft size={15} />
            <span>Return to Homepage</span>
          </Link>

          <Link href="/research" className="btn btn-secondary">
            <span>Explore Research</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
