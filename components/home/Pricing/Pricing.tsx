/*"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Essential",
    badge: "For Small Hotels",
    description:
      "Perfect for boutique hotels and hospitality businesses looking to establish a strong digital presence.",
    price: "Custom Quote",
    featured: false,
    features: [
      "Professional Hotel Video",
      "Basic Website Design",
      "Drone Footage",
      "Social Media Content",
      "Project Support",
    ],
  },
  {
    name: "Professional",
    badge: "Most Popular",
    description:
      "Designed for growing hotels and travel brands that want to increase bookings through premium digital marketing.",
    price: "Custom Quote",
    featured: true,
    features: [
      "Everything in Essential",
      "4K Cinematic Production",
      "Website Development",
      "Digital Marketing",
      "AI Video Validation",
      "Priority Delivery",
    ],
  },
  {
    name: "Enterprise",
    badge: "Hotel Chains",
    description:
      "Complete digital transformation for hotel groups, resorts and international hospitality brands.",
    price: "Contact Us",
    featured: false,
    features: [
      "Unlimited Projects",
      "Dedicated Account Manager",
      "Multi-property Support",
      "Monthly Marketing",
      "Analytics Dashboard",
      "24/7 Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-28"
    > */
      {/* Background Glow */}
     /* <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6"> */

        {/* Heading */}
        /*<motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            PRICING
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Flexible Packages for Every Hospitality Brand
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every hotel is unique. We tailor every project to your goals,
            property size and marketing strategy.
          </p>
        </motion.div> */

        {/* Pricing Cards */}
       /* <div className="grid gap-10 lg:grid-cols-3">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                plan.featured
                  ? "border-blue-600 bg-gradient-to-b from-blue-600 to-violet-700 text-white shadow-2xl scale-105"
                  : "border-slate-200 bg-white shadow-xl"
              }`}
            > */

              {/* Popular Badge */}
              /*{plan.featured && (
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-lg">
                  <Star
                    size={16}
                    fill="currentColor"
                  />
                  Popular
                </div>
              )}

              <div className="p-10"> */

                {/* Badge */}
               /* <p
                  className={`text-sm font-semibold uppercase tracking-widest ${
                    plan.featured
                      ? "text-blue-100"
                      : "text-blue-600"
                  }`}
                >
                  {plan.badge}
                </p> */

                {/* Plan Name */}
                /*<h3
                  className={`mt-4 text-3xl font-black ${
                    plan.featured
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3> */

                {/* Price */}
               /* <h4
                  className={`mt-8 text-4xl font-black ${
                    plan.featured
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {plan.price}
                </h4> */

                {/* Description */}
               /* <p
                  className={`mt-6 leading-7 ${
                    plan.featured
                      ? "text-blue-100"
                      : "text-slate-700"
                  }`}
                >
                  {plan.description}
                </p>

                <div
                  className={`my-10 h-px ${
                    plan.featured
                      ? "bg-white/20"
                      : "bg-slate-200"
                  }`}
                /> */

                {/* Features */}
                /*<div className="space-y-5">

                  {plan.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-4"
                    >

                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          plan.featured
                            ? "bg-white/20"
                            : "bg-blue-100"
                        }`}
                      >
                        <Check
                          size={18}
                          className={
                            plan.featured
                              ? "text-white"
                              : "text-blue-600"
                          }
                        />
                      </div>

                      <span
                        className={
                          plan.featured
                            ? "text-white"
                            : "font-medium text-slate-900"
                        }
                      >
                        {feature}
                      </span>

                    </div>

                  ))}

                </div> */

                {/* Button */}
                /*<button
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className={`mt-12 flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 font-semibold transition-all duration-300 ${
                      plan.featured
                        ? "bg-white text-blue-700 hover:scale-105"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Request Quote
                    <ArrowRight size={18} />
                  </button>
              </div>

            </motion.div>

          ))}

        </div> */

        {/* Bottom CTA */}
       /* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-24 max-w-5xl rounded-3xl bg-slate-900 px-12 py-16 text-center text-white"
        >
          <h3 className="text-4xl font-bold">
            Need a Custom Hospitality Solution?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're a boutique hotel, luxury resort, travel agency or
            international hotel chain, Genesis Digital can create a tailored
            package that matches your goals and budget.
          </p>

          <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
            Talk to Our Team
          </button>
        </motion.div>

      </div>
    </section>
  );
} */
