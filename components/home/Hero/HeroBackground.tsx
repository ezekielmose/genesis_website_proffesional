"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Soft Blue Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/20
          blur-[140px]
        "
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/3
          -right-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-500/20
          blur-[140px]
        "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-48
          left-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/15
          blur-[170px]
        "
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#1e293b 1px,transparent 1px),
            linear-gradient(to bottom,#1e293b 1px,transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative Circle */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          right-24
          top-24
          h-40
          w-40
          rounded-full
          border
          border-blue-300/30
        "
      />

      {/* Small Blue Dot */}
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          left-20
          top-32
          h-5
          w-5
          rounded-full
          bg-blue-400/50
        "
      />

      {/* Small Purple Dot */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          right-48
          bottom-40
          h-4
          w-4
          rounded-full
          bg-violet-400/50
        "
      />

    </div>
  );
}