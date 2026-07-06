"use client";

import { motion } from "framer-motion";
import {
  Video,
  Globe,
  BarChart3,
  Bot,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const mainSolution = {
  icon: Video,
  title: "High-Quality Hospitality Video Production",
  description:
    "Genesis Digital creates premium cinematic videos for hotels, resorts, lodges and tourism brands. Every production is designed to inspire travellers, strengthen your brand and increase direct bookings.",
  features: [
    "4K Cinematic Videos",
    "Drone Footage",
    "Hotel Reels",
    "Destination Marketing",
    "Luxury Storytelling",
  ],
};

const otherSolutions = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern hotel websites designed to maximize direct bookings and showcase your property beautifully.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "SEO, Google Ads and social media campaigns tailored specifically for hospitality businesses.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Bot,
    title: "AI Video Validation",
    description:
      "Intelligent AI-assisted validation ensuring every production meets premium quality standards.",
    color: "bg-violet-100",
    iconColor: "text-violet-600",
  },
];

export default function Solutions() {

  const MainIcon = mainSolution.icon;

  return (

    <section
      id="solutions"
      className="relative overflow-hidden bg-slate-50 py-28"
    >

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            OUR SOLUTIONS

          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            Digital Solutions Built for Hospitality

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Helping hotels, resorts and travel companies attract more guests
            through cinematic content, modern technology and intelligent
            digital marketing.

          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* FEATURED CARD */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .8,
            }}
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-2xl backdrop-blur-xl lg:col-span-2"
          >

            {/* Animated Glow */}

            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [.35, .6, .35],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500 blur-[120px]"
            />

            <motion.div
              animate={{
                y: [0, 25, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-violet-500/20 blur-[100px]"
            />

            <motion.div
              animate={{
                rotate: [0, 15, 0],
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600 shadow-xl"
            >

              <MainIcon size={38} />

            </motion.div>

            <h3 className="text-3xl font-black">

              {mainSolution.title}

            </h3>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">

              {mainSolution.description}

            </p>

            {/* Feature Pills */}

            <div className="mt-8 flex flex-wrap gap-4">

              {mainSolution.features.map((feature) => (

                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  key={feature}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur"
                >

                  <CheckCircle2
                    size={18}
                    className="text-blue-400"
                  />

                  <span className="text-sm font-medium">

                    {feature}

                  </span>

                </motion.div>

              ))}

            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .95,
              }}
              className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
            >

              Explore Our Video Services

              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-2"
              />

            </motion.button>

          </motion.div>

          {/* Secondary Solutions */}

          <div className="space-y-8">

  {otherSolutions.map((item, index) => {

    const Icon = item.icon;

    return (

      <motion.div
        key={item.title}
        initial={{
          opacity: 0,
          x: 60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: index * 0.15,
          duration: 0.7,
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:border-blue-200 hover:shadow-2xl"
      >

        {/* Animated Background */}

        <motion.div
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-100 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100"
        />

        {/* Left Accent */}

        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{
            delay: index * 0.2,
            duration: .8,
          }}
          className="absolute left-0 top-0 w-1 rounded-full bg-gradient-to-b from-blue-500 to-violet-600"
        />

        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.15,
          }}
          className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} shadow-md`}
        >

          <Icon
            size={30}
            className={item.iconColor}
          />

        </motion.div>

        <h3 className="relative text-2xl font-black text-slate-900">

          {item.title}

        </h3>

        <p className="relative mt-4 leading-7 text-slate-600">

          {item.description}

        </p>

        {/* Learn More */}

        <motion.div
          whileHover={{
            x: 5,
          }}
          className="relative mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 cursor-pointer"
        >

          Learn More

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-2"
          />

        </motion.div>

      </motion.div>

    );

  })}

</div>

</div>

{/* Bottom CTA */}

<motion.div
  initial={{
    opacity: 0,
    y: 50,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    delay: .3,
    duration: .8,
  }}
  className="relative mt-24 overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-blue-700 to-violet-700 px-10 py-16 text-center text-white shadow-2xl"
>

  {/* Background Glow */}

  <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px]" />

  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 4,
    }}
  >

    <Video
      size={60}
      className="mx-auto mb-6"
    />

  </motion.div>

  <h2 className="relative text-4xl font-black">

    Ready to Showcase Your Hotel?

  </h2>

  <p className="relative mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">

    From cinematic hotel productions to powerful websites and digital
    marketing, Genesis Digital helps hospitality brands attract more
    guests and increase direct bookings.

  </p>

  <motion.a
    href="#contact"
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{
      scale: .95,
    }}
    className="relative mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg transition-all hover:shadow-2xl"
  >

    Start Your Project

    <ArrowRight
      size={20}
    />

  </motion.a>

</motion.div>

</div>

</section>

);
}
