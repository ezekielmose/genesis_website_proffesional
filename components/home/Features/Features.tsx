"use client";

import { motion } from "framer-motion";
import {
  Film,
  Plane,
  Clock3,
  Globe2,
  Smartphone,
  Bot,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Film,
    title: "4K Cinematic Production",
    description:
      "Premium hotel and destination videos captured using cinema-grade cameras and professional storytelling techniques.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Plane,
    title: "Professional Coverage",
    description:
      "Capture breathtaking aerial perspectives that showcase your property's surroundings and unique location.",
    color: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Clock3,
    title: "Fast Delivery",
    description:
      "Efficient production workflows ensure your marketing content is delivered on time without compromising quality.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Globe2,
    title: "Hospitality Expertise",
    description:
      "We understand hotels, resorts and travel brands, producing content that resonates with modern travellers.",
    color: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    icon: Smartphone,
    title: "Content for Every Platform",
    description:
      "Videos optimized for websites, booking platforms, YouTube, Instagram, TikTok and social advertising.",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Bot,
    title: "AI Quality Validation",
    description:
      "Every project passes through AI-assisted quality checks to ensure consistency and exceptional visual standards.",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            WHY GENESIS DIGITAL
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Premium Features Built for Hospitality
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine creativity, technology and hospitality expertise to
            produce digital experiences that help hotels attract, engage and
            convert more guests.
          </p>
        </motion.div>

        {/* Features Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
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
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-lg
                  transition-all
                  duration-500
                  hover:border-blue-200
                  hover:shadow-2xl
                "
              >

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
                >
                  <Icon
                    className={feature.iconColor}
                    size={30}
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mb-6 leading-7 text-slate-600">
                  {feature.description}
                </p>

                

              </motion.div>

            );

          })}

        </div>
      </div>
    </section>
  );
}
