"use client";

import Link from "next/link";
import {
  ChevronDown,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";

const aiLinks = [
  ["Overview", "/ai-reliability"],
  ["Solutions", "/ai-reliability/solutions"],
  ["Features", "/ai-reliability/features"],
  ["Resources", "/ai-reliability/resources"],
  ["Pricing", "/ai-reliability/pricing"],
  ["Get Started", "/ai-reliability/get-started"],
];

const mainLinks = [
  ["Home", "/"],
  ["Solutions", "/solutions"],
  ["Features", "/features"],
  ["Resources", "/resources"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
];

export function Header() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <header className="site-header">

      <div className="nav-container">

        {/* =====================================================
            BRAND
        ====================================================== */}

        <Link
          href="/"
          className="brand-link"
        >
          <div className="brand-mark">
            G
          </div>

          <div>
            <div className="brand-name">
              Genesis Digital
            </div>

            <div className="brand-tagline">
              Hospitality Creative & AI
            </div>
          </div>
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav className="desktop-nav">

          {mainLinks.map(
            ([label, href]) => (
              <Link
                key={href}
                href={href}
                className="nav-link"
              >
                {label}
              </Link>
            )
          )}


          {/* AI RELIABILITY */}
          <div className="ai-nav-group">

            <button
              type="button"
              className="ai-nav-button"
            >
              AI Reliability

              <ChevronDown
                size={15}
                className="ai-nav-chevron"
              />
            </button>


            <div className="ai-dropdown">

              <div className="ai-dropdown-intro">

                <div className="ai-dropdown-icon">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <div className="font-black">
                    Genesis AI Reliability
                  </div>

                  <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                    External QA for travel and hospitality AI systems.
                  </p>
                </div>

              </div>


              <div className="ai-dropdown-links">

                {aiLinks.map(
                  ([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="ai-dropdown-link"
                    >
                      {label}
                    </Link>
                  )
                )}

              </div>

            </div>

          </div>

        </nav>


        {/* =====================================================
            DESKTOP ACTIONS
        ====================================================== */}

        <div className="nav-actions">

          <ThemeToggle />

          <Link
            href="/staff-login"
            className="nav-staff-button"
          >
            Staff Login
          </Link>

          <Link
            href="/contact"
            className="nav-primary-button"
          >
            Start a Project
          </Link>

        </div>


        {/* =====================================================
            MOBILE BUTTON
        ====================================================== */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() =>
            setMobileOpen(
              previous => !previous
            )
          }
          aria-label="Open navigation"
        >
          {mobileOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>

      </div>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {mobileOpen && (

        <div className="mobile-nav-panel">

          <div className="mobile-nav-inner">

            {mainLinks.map(
              ([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="mobile-nav-link"
                >
                  {label}
                </Link>
              )
            )}


            <div className="mobile-ai-group">

              <div className="mobile-ai-title">

                <ShieldCheck size={16} />

                AI Reliability

              </div>

              {aiLinks.map(
                ([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className="mobile-ai-link"
                  >
                    {label}
                  </Link>
                )
              )}

            </div>


            <div className="mobile-nav-actions">

              <ThemeToggle />

              <Link
                href="/staff-login"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="nav-staff-button"
              >
                Staff Login
              </Link>

              <Link
                href="/contact"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="nav-primary-button flex-1"
              >
                Start a Project
              </Link>

            </div>

          </div>

        </div>

      )}

    </header>
  );
}