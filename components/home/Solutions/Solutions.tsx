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
    "Genesis Digital specializes in creating premium cinematic videos for hotels, resorts, lodges, travel agencies and tourism brands. We produce engaging visual stories that inspire travellers, strengthen your brand and increase direct bookings.",
  features: [
    "4K Cinematic Hotel Videos",
    "Drone & Aerial Footage",
    "Social Media Reels",
    "Destination Marketing Videos",
    "Hotel Experience Videos",
  ],
};

const otherSolutions = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern hotel websites designed to showcase your property beautifully while maximizing direct bookings.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Grow your online visibility with SEO, social media campaigns and digital advertising tailored for hospitality brands.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Bot,
    title: "AI Video Validation",
    description:
      "AI-assisted quality validation to ensure every marketing video meets the highest production standards before delivery.",
    color: "bg-violet-100",
    iconColor: "text-violet-600",
  },
];

export default function Solutions() {
  const MainIcon = mainSolution.icon;

  return (
    <section
      id="solutions"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
            through cinematic content, modern technology and intelligent digital
            marketing.
          </p>
        </motion.div>

        {/* Layout */}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Featured Solution */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -10 }}
            className="lg:col-span-2 overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-white shadow-2xl"
          >
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600">

              <MainIcon size={40} />

            </div>

            <h3 className="text-4xl font-bold">
              {mainSolution.title}
            </h3>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {mainSolution.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {mainSolution.features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={20}
                    className="text-blue-400"
                  />

                  <span>{feature}</span>

                </div>

              ))}

            </div>

            <button
              className="
                mt-12
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-blue-600
                px-6
                py-4
                font-semibold
                transition
                hover:bg-blue-700
              "
            >
              Explore Our Video Services

              <ArrowRight size={20} />

            </button>

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
                    x: 50,
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
                    duration: 0.6,
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  className="rounded-3xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                >

                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                  >

                    <Icon
                      size={28}
                      className={item.iconColor}
                    />

                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-slate-900">

                    {item.title}

                  </h3>

                  <p className="leading-7 text-slate-600">

                    {item.description}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}