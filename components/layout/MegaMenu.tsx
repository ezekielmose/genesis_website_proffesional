"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { megaMenuItems } from "./navData";

interface MegaMenuProps {
  open: boolean;
}

export default function MegaMenu({ open }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.25 }}
          className="absolute left-0 top-full mt-5 w-full"
        >
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

            <div className="grid grid-cols-12">

              {/* LEFT SIDE */}

              <div className="col-span-8 p-8">

                <div className="mb-8">

                  <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                    Our Solutions
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    Professional Video Solutions
                  </h2>

                  <p className="mt-3 text-slate-500">
                    Discover the different services we provide to hotels,
                    tourism boards, restaurants and travel brands.
                  </p>

                </div>

                <div className="grid grid-cols-2 gap-5">

                  {megaMenuItems.map((item) => {

                    const Icon = item.icon;

                    return (

                      <Link
                        key={item.title}
                        href={item.href}
                        className="group"
                      >

                        <motion.div
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:shadow-xl"
                        >

                          <div className="flex items-start gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110">

                              <Icon size={24} />

                            </div>

                            <div className="flex-1">

                              <h3 className="font-semibold text-slate-900">
                                {item.title}
                              </h3>

                              <p className="mt-2 text-sm leading-6 text-slate-500">
                                {item.description}
                              </p>

                              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">

                                Learn More

                                <ArrowRight
                                  size={16}
                                  className="transition-transform duration-300 group-hover:translate-x-1"
                                />

                              </div>

                            </div>

                          </div>

                        </motion.div>

                      </Link>

                    );

                  })}

                </div>

              </div>

              {/* RIGHT PANEL */}

              <div className="col-span-4 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8">

                <div className="flex h-full flex-col justify-between">

                  <div>

                    <span className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-300">
                      Why Choose Us
                    </span>

                    <h3 className="mt-6 text-3xl font-bold text-white">
                      Create Videos That Convert Visitors Into Guests
                    </h3>

                    <p className="mt-5 leading-7 text-slate-300">
                      We combine creative storytelling, cinematic production,
                      AI-assisted quality control and hospitality expertise to
                      deliver videos that increase bookings and strengthen your
                      brand.
                    </p>

                  </div>

                  {/* Statistics */}

                  <div className="mt-10 grid grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">

                      <h2 className="text-3xl font-bold text-white">
                        500+
                      </h2>

                      <p className="mt-2 text-sm text-slate-300">
                        Projects Delivered
                      </p>

                    </div>

                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">

                      <h2 className="text-3xl font-bold text-white">
                        98%
                      </h2>

                      <p className="mt-2 text-sm text-slate-300">
                        Client Satisfaction
                      </p>

                    </div>

                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">

                      <h2 className="text-3xl font-bold text-white">
                        25+
                      </h2>

                      <p className="mt-2 text-sm text-slate-300">
                        Countries Served
                      </p>

                    </div>

                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">

                      <h2 className="text-3xl font-bold text-white">
                        24/7
                      </h2>

                      <p className="mt-2 text-sm text-slate-300">
                        Customer Support
                      </p>

                    </div>

                  </div>

                  {/* CTA */}

                  <div className="mt-10">

                    <Link href="/contact">

                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                      >

                        Book a Free Consultation

                        <ArrowRight size={18} />

                      </motion.button>

                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}