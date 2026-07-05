"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
} from "framer-motion";

import {
  Building2,
  Globe2,
  Star,
  Video,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 30000,
    suffix: "+",
    label: "Hotels Searched",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Video,
    value: 60000,
    suffix: "+",
    label: "Videos Generated",
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    icon: Globe2,
    value: 100,
    suffix: "+",
    label: "Countries Reached",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    icon: Star,
    value: 90,
    suffix: "%",
    label: "Client Satisfaction",
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let controls: ReturnType<typeof animate>;

    const startAnimation = () => {
      setCount(0);

      controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(latest) {
          setCount(Math.floor(latest));
        },
      });
    };

    // Run immediately
    startAnimation();

    // Restart every 30 seconds
    const interval = setInterval(() => {
      controls.stop();
      startAnimation();
    }, 30000);

    return () => {
      controls?.stop();
      clearInterval(interval);
    };
  }, [inView, value]);

  let display = count.toString();

  if (value >= 1000) {
    display =
      count >= 1000
        ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K`
        : count.toString();
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (

              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                }}
                className="group relative text-center"
              >

                {/* Animated Icon */}

                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                  className={`
                    mx-auto
                    mb-6
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    ${stat.bg}
                    shadow-lg
                  `}
                >

                  <Icon
                    className={stat.color}
                    size={34}
                  />

                </motion.div>

                {/* Counter */}

                <h2 className="text-5xl font-black tracking-tight text-slate-900">

                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                  />

                </h2>

                {/* Label */}

                <p className="mt-3 text-lg text-slate-500">

                  {stat.label}

                </p>

                {/* Animated Line */}

                <motion.div
                  animate={{
                    scaleX: [0, 1, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mt-6 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"
                />

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}