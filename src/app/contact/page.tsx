"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Globe, Sparkles, CheckCircle2 } from "lucide-react";
import logoTransparent from "../../../public/logo-transparent.png";
import { Footer2 } from "@/components/ui/footer-2";
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="anthropic-canvas" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top Floating Editorial Navbar */}
      <nav className="anthropic-nav">
        <div className="anthropic-nav-inner">
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

          <div className="anthropic-nav-right">
            <Link href="/about" className="anthropic-nav-link">
              Company
            </Link>
            <Link href="/research" className="anthropic-nav-link">
              Architecture
            </Link>
            <Link href="/contact" className="anthropic-nav-link" style={{ color: "#191816", fontWeight: 600 }}>
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, maxWidth: "1160px", margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
        {/* Header Section */}
        <section style={{ marginBottom: "56px" }}>
          <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.03em", color: "#191816", marginBottom: "16px" }}>
            Get in touch with ORDRYTH.
          </h1>
          <p style={{ fontSize: "1.18rem", lineHeight: 1.6, color: "#56534E", maxWidth: "760px" }}>
            Whether you are exploring technical partnerships, enterprise deployments of Imagica, or have questions about our systems architecture, our engineering team responds promptly.
          </p>
        </section>

        {/* Contact Card Integration */}
        <div style={{ position: "relative", marginBottom: "80px" }}>
          <ContactCard
            title="Start a conversation"
            description="Send an inquiry to our software and research teams. We review every note and typically reply within 1 business day."
            contactInfo={[
              {
                icon: Mail,
                label: "Email",
                value: "contact@ordryth.com",
              },
              {
                icon: Sparkles,
                label: "Product Support",
                value: "support@imagica.co.in",
              },
              {
                icon: MapPin,
                label: "Headquarters",
                value: "India (Distributed Global Operations)",
              },
              {
                icon: Globe,
                label: "Product Ecosystem",
                value: "imagica.co.in",
              },
            ]}
          >
            {submitted ? (
              <div style={{ padding: "32px 16px", textAlign: "center", width: "100%" }}>
                <CheckCircle2 style={{ width: "48px", height: "48px", color: "#2C6E49", margin: "0 auto 16px" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#191816", marginBottom: "8px" }}>
                  Message Received
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#706B63", lineHeight: 1.5, marginBottom: "20px" }}>
                  Thank you for reaching out. We will get back to your inquiry at <strong>{formData.email}</strong> shortly.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    required
                    placeholder="Your name or company"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-phone">Phone / Organization (Optional)</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 / +1 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    required
                    placeholder="Tell us about your project, partnership inquiry, or technical requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            )}
          </ContactCard>
        </div>
      </main>

      {/* Global Footer */}
      <Footer2 />
    </div>
  );
}
