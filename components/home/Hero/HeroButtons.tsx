"use client";

import Link from "next/link";
import { motion } from "framer-motion";
/*import { ArrowRight, PlayCircle } from "lucide-react";*/

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">

      {/* Primary Button */}

      <Link href="/contact">

        <motion.button
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            via-blue-700
            to-violet-600
            px-8
            py-4
            font-semibold
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:shadow-blue-300/40
          "
        >

          {/* Shine Effect */}

          <span
            className="
              absolute
              inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-transform
              duration-700
              group-hover:translate-x-full
            "
          />

          <span className="relative flex items-center gap-3">

            Get Started

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </span>

        </motion.button>

      </Link>

      {/* Secondary Button */}

      <Link href="/portfolio">

        <motion.button
          whileHover={{
            scale: 1.03,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            group
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-slate-300
            bg-white/70
            px-8
            py-4
            font-semibold
            text-slate-800
            shadow-lg
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-blue-300
            hover:bg-blue-50
            hover:text-blue-600
          "
        >

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-blue-100
              transition-all
              duration-300
              group-hover:bg-blue-600
            "
          >

          </div>

          Watch Our Work

        </motion.button>

      </Link>

    </div>
  );
}
