"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

import Logo from "./Logo";
import { mobileNavItems, ctaButton } from "./navData";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-[340px] max-w-[90vw] flex-col bg-white shadow-2xl"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-200 p-6">

              <Logo size={42} />

              <button
                onClick={onClose}
                className="rounded-xl p-2 transition hover:bg-slate-100"
              >
                <X
                  size={24}
                  className="text-slate-700"
                />
              </button>

            </div>

            {/* Navigation */}

            <div className="flex-1 overflow-y-auto px-6 py-6">

              <div className="space-y-2">

                {mobileNavItems.map((item) => {

                  const Icon = item.icon;

                  return (

                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center gap-4 rounded-xl px-4 py-4 transition-all duration-300 hover:bg-blue-50"
                    >

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 group-hover:bg-blue-100">

                        <Icon
                          size={20}
                          className="text-slate-700 group-hover:text-blue-600"
                        />

                      </div>

                      <span className="font-semibold text-slate-800 group-hover:text-blue-600">

                        {item.title}

                      </span>

                    </Link>

                  );

                })}

              </div>

            </div>

            {/* Bottom CTA */}

            <div className="border-t border-slate-200 p-6">

              <Link href={ctaButton.href} onClick={onClose}>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 font-semibold text-white shadow-lg transition-all"
                >

                  {ctaButton.text}

                  <ArrowRight size={18} />

                </motion.button>

              </Link>

            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}