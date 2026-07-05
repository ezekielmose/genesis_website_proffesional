"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, ArrowRight } from "lucide-react";

import Logo from "./Logo";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import { navItems, ctaButton } from "./navData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="fixed top-0 left-0 z-50 w-full px-6 py-5"
      >
        <nav
          className={`relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-8 py-4 transition-all duration-500 ${
            scrolled
              ? "border border-white/20 bg-white/90 shadow-2xl backdrop-blur-xl"
              : "bg-white shadow-lg"
          }`}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href={ctaButton.href}>
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-violet-600
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:shadow-xl
                "
              >
                {ctaButton.text}

                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
          >
            <Menu
              size={28}
              className="text-slate-800"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}