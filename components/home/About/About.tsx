"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Eye,
  HeartHandshake,
  Lightbulb,
  Globe2,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Client First",
    description:
      "Every project begins with understanding your hospitality brand and your guests.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We combine creativity with modern technologies including AI-powered quality validation.",
  },
  {
    icon: Globe2,
    title: "Global Standards",
    description:
      "Our productions meet international hospitality marketing standards for hotels and travel brands.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 py-28"
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Hotel Interior"
                width={700}
                height={800}
                unoptimized
                className="w-full object-cover"
              />

            </div>

            {/* Floating Experience Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -bottom-10 left-8 rounded-3xl bg-white p-8 shadow-2xl"
            >
              <h2 className="text-5xl font-black text-blue-600">

                10+

              </h2>

              <p className="mt-2 text-slate-600">

                Years Delivering Digital Excellence

              </p>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

              ABOUT GENESIS DIGITAL

            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">

              Helping Hospitality Brands Tell Stories That Inspire Travel

            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              Genesis Digital is a hospitality-focused creative agency
              specializing in cinematic hotel videos, professional website
              development, digital marketing and AI-powered media validation.

              <br />
              <br />

              We help hotels, resorts and travel businesses showcase their
              unique experiences through visually compelling digital content
              that attracts guests and increases bookings.

            </p>

            {/* Mission */}

            <div className="mt-12 grid gap-6">

              <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                  <Target
                    className="text-blue-600"
                    size={30}
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">

                    Our Mission

                  </h3>

                  <p className="mt-2 text-slate-600">

                    Empower hospitality businesses with world-class digital
                    solutions that create unforgettable guest experiences.

                  </p>

                </div>

              </div>

              {/* Vision */}

              <div className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100">

                  <Eye
                    className="text-violet-600"
                    size={30}
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">

                    Our Vision

                  </h3>

                  <p className="mt-2 text-slate-600">

                    To become Africa's leading digital transformation partner
                    for hotels and tourism brands.

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* VALUES */}

        <div className="mt-32">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >

            <h2 className="text-4xl font-black text-slate-900">

              What Drives Us

            </h2>

            <p className="mt-5 text-lg text-slate-600">

              Every project is guided by our commitment to quality,
              innovation and hospitality excellence.

            </p>

          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">

            {values.map((value, index) => {

              const Icon = value.icon;

              return (

                <motion.div
                  key={value.title}
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
                    delay: index * .15,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="rounded-3xl bg-white p-10 shadow-xl"
                >

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                    <Icon
                      className="text-blue-600"
                      size={30}
                    />

                  </div>

                  <h3 className="text-2xl font-bold">

                    {value.title}

                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">

                    {value.description}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

        {/* CTA */}

        <motion.div
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
            delay: .3,
          }}
          className="mt-28 rounded-[40px] bg-gradient-to-r from-blue-600 to-violet-700 px-12 py-20 text-center text-white shadow-2xl"
        >

          <CheckCircle2
            size={60}
            className="mx-auto mb-6"
          />

          <h2 className="text-5xl font-black">

            Let's Build Something Extraordinary

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-100">

            Whether you're promoting a boutique hotel, luxury resort,
            safari lodge or travel destination, Genesis Digital is ready
            to help you stand out through premium digital experiences.

          </p>

          <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">

            Start Your Project

          </button>

        </motion.div>

      </div>

    </section>
  );
}
