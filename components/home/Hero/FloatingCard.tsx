"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "+35%",
    subtitle: "More Bookings",
    color: "text-blue-600",
    bg: "bg-blue-100",
    duration: 4,
  },
  {
    icon: CheckCircle2,
    title: "98%",
    subtitle: "Client Satisfaction",
    color: "text-green-600",
    bg: "bg-green-100",
    duration: 5,
  },
  {
    icon: Sparkles,
    title: "4K",
    subtitle: "Cinematic Quality",
    color: "text-violet-600",
    bg: "bg-violet-100",
    duration: 6,
  },
];

export default function FloatingCards() {
  return (
    <div
      className="
        absolute
        right-10
        top-1/2
        z-30
        hidden
        -translate-y-1/2
        xl:flex
        flex-col
        gap-6
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: card.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              x: -8,
            }}
          >
            <div
              className="
                w-[270px]
                rounded-2xl
                border
                border-white/20
                bg-white/75
                backdrop-blur-xl
                shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                p-5
              "
            >
              <div className="flex items-center gap-4">

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    ${card.bg}
                  `}
                >
                  <Icon
                    className={card.color}
                    size={24}
                  />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-600">
                    {card.subtitle}
                  </p>

                </div>

              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}