"use client";

import Image from "next/image";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import FloatingCards from "./FloatingCard"
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative mt-24 overflow-hidden bg-white py-10 lg:mt-28 lg:py-14">

      {/* Decorative Background */}
      <HeroBackground />

      {/* Main Container */}
      <div className="relative z-10 w-full">

        {/* Hero Card */}
        <div className="relative h-[700px] overflow-hidden">

          {/* Background Image */}

          
          <Image
            src="/images/hero/hero-main.png"
            alt="Genesis Digital"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Left Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/60 to-transparent" />


          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="absolute inset-0 z-20 flex items-center justify-center"
          >
            <div className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-2xl backdrop-blur-xl">

              <Play
                size={34}
                className="ml-1 text-blue-600"
                fill="currentColor"
              />

            </div>
          </motion.div>

          {/* Content Layer */}
          <div className="relative z-20 flex h-full items-center">

            <div className="w-full px-10 lg:px-16">

              <HeroContent />

            </div>

          </div>

          {/* Floating Stats */}

          <div>
            <FloatingCards />
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center">

        <span className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-400">

          Scroll

        </span>

        <div className="flex h-10 w-6 justify-center rounded-full border border-slate-300">

          <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-blue-600" />

        </div>

      </div>

    </section>


    
  );
  <div className="absolute bottom-10 left-10 z-30 rounded-2xl bg-white/90 px-6 py-4 backdrop-blur-xl">

  <p className="font-semibold text-slate-900">

    Luxury Hotel Showcase

  </p>

  <p className="text-sm text-slate-500">

    Cinematic Marketing Video

  </p>

</div>
}