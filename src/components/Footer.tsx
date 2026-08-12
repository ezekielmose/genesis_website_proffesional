import Link from "next/link";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="premium-footer">

      <div className="container">

        <div className="footer-grid">

          {/* BRAND */}

          <div className="footer-brand">

            <Link
              href="/"
              className="footer-brand-link"
            >

              <div className="brand-mark">
                G
              </div>

              <div>

                <div className="footer-brand-name">
                  Genesis Digital
                </div>

                <div className="footer-brand-tagline">
                  Hospitality Creative & AI
                </div>

              </div>

            </Link>


            <p>

              Digital experiences for modern
              hospitality — combining cinematic
              content, technology and AI reliability.

            </p>


            <Link
              href="/contact"
              className="footer-project-link"
            >
              Start a Project

              <ArrowUpRight
                size={16}
              />
            </Link>

          </div>


          {/* SOLUTIONS */}

          <div className="footer-column">

            <h3>
              Solutions
            </h3>

            <Link href="/solutions#video-production">
              Video Production
            </Link>

            <Link href="/solutions#web-development">
              Website Development
            </Link>

            <Link href="/solutions#digital-marketing">
              Digital Marketing
            </Link>

            <Link href="/solutions#ai-video-validation">
              AI Video Validation
            </Link>

            <Link href="/solutions#drone-photography">
              Drone Photography
            </Link>

          </div>


          {/* AI */}

          <div className="footer-column">

            <h3>
              AI Reliability
            </h3>

            <Link href="/ai-reliability">
              Overview
            </Link>

            <Link href="/ai-reliability/solutions">
              Solutions
            </Link>

            <Link href="/ai-reliability/features">
              Features
            </Link>

            <Link href="/ai-reliability/pricing">
              Pricing
            </Link>

            <Link href="/ai-reliability/get-started">
              Free Sample
            </Link>

          </div>


          {/* COMPANY */}

          <div className="footer-column">

            <h3>
              Company
            </h3>

            <Link href="/about">
              About
            </Link>

            <Link href="/resources">
              Resources
            </Link>

            <Link href="/pricing">
              Pricing
            </Link>

            <Link href="/contact">
              Contact
            </Link>

            <Link href="/staff-login">
              Staff Login
            </Link>

          </div>


          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <h3>
              Contact
            </h3>


            <div>
              <Mail size={16} />

              <span>
                info@genesisdigital.in
              </span>
            </div>


            <div>
              <Phone size={16} />

              <span>
                +91 9731016770
              </span>
            </div>


            <div>
              <MapPin size={16} />

              <span>
                India & Kenya
              </span>
            </div>


            <div className="footer-ai-badge">

              <ShieldCheck
                size={16}
              />

              AI Reliability

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <div>
            © 2026 Genesis Digital.
            All Rights Reserved.
          </div>


          <div className="footer-bottom-links">

            <span>
              Privacy
            </span>

            <span>
              Terms
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}