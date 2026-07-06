"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 60,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative"
    >
      {/* Browser Window */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.15)]"
      >
        {/* Browser Top */}

        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100 px-6 py-4">

          <div className="flex gap-2">

            <span className="h-3 w-3 rounded-full bg-red-400" />

            <span className="h-3 w-3 rounded-full bg-yellow-400" />

            <span className="h-3 w-3 rounded-full bg-green-400" />

          </div>

          <div className="rounded-full bg-white px-5 py-2 text-xs font-medium text-slate-500 shadow-sm">

            genesisdigital.in

          </div>

          <div />

        </div>

        {/* Hero Image */}

        <div className="relative">

          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80"
            alt="Genesis Digital"
            width={700}
            height={700}
            priority
            className="h-auto w-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Play Button */}

          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-2xl backdrop-blur">

              <Play
                size={34}
                className="ml-1 text-blue-600"
                fill="currentColor"
              />

            </div>
          </motion.div>

          {/* Bottom Label */}

          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-3 backdrop-blur">

            <p className="font-semibold text-slate-900">
              Luxury Hotel Showcase
            </p>

            <p className="text-sm text-slate-500">
              Cinematic Marketing Video
            </p>

          </div>

        </div>

      </motion.div>

      {/* Floating Card 1 */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute -left-10 top-12 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl lg:block"
      >

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-100 p-3">

            <TrendingUp
              className="text-blue-600"
              size={22}
            />

          </div>

          <div>

            <h3 className="text-xl font-bold text-slate-900">
              +35%
            </h3>

            <p className="text-sm text-slate-500">
              More Bookings
            </p>

          </div>

        </div>

      </motion.div>

      {/* Floating Card 2 */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute -right-10 top-24 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl lg:block"
      >

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-green-100 p-3">

            <CheckCircle2
              className="text-green-600"
              size={22}
            />

          </div>

          <div>

            <h3 className="text-xl font-bold text-slate-900">
              98%
            </h3>

            <p className="text-sm text-slate-500">
              Satisfaction
            </p>

          </div>

        </div>

      </motion.div>

      {/* Floating Card 3 */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute bottom-8 left-16 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl lg:block"
      >

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-violet-100 p-3">

            <Sparkles
              className="text-violet-600"
              size={22}
            />

          </div>

          <div>

            <h3 className="text-xl font-bold text-slate-900">
              4K
            </h3>

            <p className="text-sm text-slate-500">
              Video Quality
            </p>

          </div>

        </div>

      </motion.div>

      {/* Background Glow */}

      <div className="absolute -z-10 left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/20 blur-[140px]" />

    </motion.div>
  );
}
