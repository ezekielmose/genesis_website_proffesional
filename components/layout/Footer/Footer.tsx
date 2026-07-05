"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { title: "Home", href: "#home" },
  { title: "Solutions", href: "#solutions" },
  { title: "Features", href: "#features" },
  { title: "Resources", href: "#resources" },
  { title: "Pricing", href: "#pricing" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

const solutions = [
  "Hotel Video Production",
  "Website Development",
  "Digital Marketing",
  "AI Video Validation",
  "Drone Photography",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Main Footer */}

        <div className="grid gap-14 py-20 lg:grid-cols-4">

          {/* Company */}

          <div>

            <Image
              src="/logos/logo.png"
              alt="Genesis Digital"
              width={180}
              height={60}
            />

            <p className="mt-6 leading-8 text-slate-400">

              Genesis Digital empowers hotels, resorts and travel brands
              through premium video production, modern websites,
              AI-powered validation and digital marketing solutions
              that increase visibility and drive direct bookings.

            </p>

            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Let's Work Together

              <ArrowRight size={18} />

            </Link>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-8 text-xl font-bold">

              Quick Links

            </h3>

            <div className="space-y-4">

              {quickLinks.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className="block text-slate-400 transition duration-300 hover:translate-x-2 hover:text-white"
                >
                  {item.title}
                </Link>

              ))}

            </div>

          </div>

          {/* Solutions */}

          <div>

            <h3 className="mb-8 text-xl font-bold">

              Our Solutions

            </h3>

            <div className="space-y-4">

              {solutions.map((solution) => (

                <p
                  key={solution}
                  className="text-slate-400"
                >
                  {solution}
                </p>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-8 text-xl font-bold">

              Contact Us

            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-blue-600/20 p-3">

                  <Mail
                    className="text-blue-400"
                    size={20}
                  />

                </div>

                <div>

                  <p className="text-sm text-slate-500">

                    Email

                  </p>

                  <p className="text-slate-300">

                    info@genesisdigital.in

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-blue-600/20 p-3">

                  <Phone
                    className="text-blue-400"
                    size={20}
                  />

                </div>

                <div>

                  <p className="text-sm text-slate-500">

                    Phone

                  </p>

                  <p className="text-slate-300">

                    +91 9731016770

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-blue-600/20 p-3">

                  <MapPin
                    className="text-blue-400"
                    size={20}
                  />

                </div>

                <div>

                  <p className="text-sm text-slate-500">

                    Location

                  </p>

                  <p className="text-slate-300">

                    India & Kenya

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800" />

        {/* Bottom Footer */}

        <div className="flex flex-col items-center justify-between gap-6 py-8 text-center lg:flex-row">

          <p className="text-slate-500">

            © {new Date().getFullYear()} Genesis Digital.
            All Rights Reserved.

          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">

            <Link
              href="#"
              className="text-slate-500 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-slate-500 transition hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              href="#"
              className="text-slate-500 transition hover:text-white"
            >
              Cookie Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}