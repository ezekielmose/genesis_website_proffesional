"use client";

import { motion } from "framer-motion";
import { ShieldCheck, PlayCircle } from "lucide-react";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/10 px-5 py-2 backdrop-blur-md"
      >
        <ShieldCheck
          size={16}
          className="text-blue-400"
        />

        <span className="text-sm font-semibold tracking-wide text-blue-100">
          Trusted by Hotels & Tourism Brands
        </span>
      </motion.div>

      {/* Heading */}

      <h1 className="max-w-xl text-5xl font-black leading-tight text-white lg:text-7xl">

        Create{" "}

        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">

          Stunning

        </span>

        <br />

        <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">

          Videos

        </span>{" "}

        That Inspire Travel

        <br />

        & Increase Bookings.

      </h1>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">

        Genesis Digital helps hotels, resorts, tourism boards,
        restaurants and destinations attract more guests through
        cinematic marketing videos that drive engagement,
        strengthen brands and increase direct bookings.

      </p>

      {/* Buttons */}

      <div className="mt-10">

        <HeroButtons />

      </div>

      {/* Watch Demo */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex items-center gap-3"
      >
        <PlayCircle
          size={20}
          className="text-blue-400"
        />

        <span className="text-sm font-medium text-slate-200">

          Watch how we transform hospitality brands with
          cinematic storytelling.

        </span>

      </motion.div>

      {/* Client Logos */}

      <div className="mt-12">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">

          Trusted Worldwide

        </p>

        <div className="flex flex-wrap items-center gap-8 text-lg font-bold text-white/80">

          <span>Booking.com</span>

          <span>Expedia</span>

          <span>Agoda</span>

          <span>Airbnb</span>

          <span>Trip.com</span>

        </div>

      </div>
    </motion.div>
  );
}