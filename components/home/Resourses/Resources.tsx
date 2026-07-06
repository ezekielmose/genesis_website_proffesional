"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  PlayCircle,
  FileText,
} from "lucide-react";

const resources = [
  {
    title: "Luxury Hotel Video Portfolio",
    description:
      "Discover how cinematic storytelling helps luxury hotels increase visibility and bookings.",

    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",

    icon: PlayCircle,
    badge: "Portfolio",
  },

  {
    title: "Hospitality Marketing Guide",
    description:
      "Learn proven digital marketing strategies that help hotels attract more direct bookings.",

    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",

    icon: BookOpen,
    badge: "Guide",
  },

  {
    title: "Case Study: 35% More Bookings",
    description:
      "See how one hotel increased online engagement and reservations using professional video content.",

    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",

    icon: FileText,
    badge: "Case Study",
  },
];

export default function Resources() {
  return (
    <section
      id="resources"
      className="relative overflow-hidden bg-slate-50 py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

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
            RESOURCES
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Learn, Explore & Get Inspired
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Browse our latest hotel marketing resources, production case
            studies and expert insights to help your hospitality brand stand
            out.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-3">

          {resources.map((resource, index) => {

            const Icon = resource.icon;

            return (

              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl"
              >

                {/* Image */}

                <div className="relative h-64 overflow-hidden">

                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur">
                    {resource.badge}
                  </span>

                </div>

                {/* Content */}

                <div className="p-8">

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

                    <Icon
                      className="text-blue-600"
                      size={28}
                    />

                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {resource.title}
                  </h3>

                  <p className="mb-8 leading-7 text-slate-600">
                    {resource.description}
                  </p>

                  <button className="flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-4">

                    Learn More

                    <ArrowRight size={18} />

                  </button>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
