"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Send, Building2 } from "lucide-react";
import Link from "next/link";

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6">

        {/* Back Button */}

        <Link
          href="/get-started"
          className="mb-10 inline-flex items-center gap-2 font-medium text-blue-600 transition hover:text-blue-700"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[36px] bg-white shadow-2xl"
        >

          {/* Header */}

          <div className="bg-gradient-to-r from-blue-600 to-violet-700 px-10 py-12 text-white">

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20">

              <Building2 size={42} />

            </div>

            <h1 className="text-5xl font-black">
              Become a Partner
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
              We'd love to work with your hotel, resort, travel agency or
              hospitality business. Fill in the details below and our team
              will contact you shortly.
            </p>

          </div>

          {/* FORM */}

          <form className="space-y-10 p-10">

            {/* BUSINESS INFORMATION */}

            <div>

              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Business Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block font-semibold text-slate-900">
                    Hotel / Company Name *
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Genesis Resort"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-semibold text-slate-900">
                    Business Type *
                  </label>

                  <select
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  >
                    <option>Hotel</option>
                    <option>Resort</option>
                    <option>Safari Lodge</option>
                    <option>Travel Agency</option>
                    <option>Hospitality Group</option>
                    <option>Apartment</option>
                    <option>Other</option>
                  </select>

                </div>

              </div>

            </div>

            {/* CONTACT INFORMATION */}

            <div>

              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Contact Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block font-semibold text-slate-900">
                    Contact Person *
                  </label>

                  <input
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-semibold text-slate-900">
                    Position
                  </label>

                  <input
                    placeholder="Marketing Manager"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-semibold text-slate-900">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-semibold text-slate-900">
                    Phone Number *
                  </label>

                  <input
                    required
                    placeholder="+254..."
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-semibold text-slate-900">
                    Country
                  </label>

                  <input
                    placeholder="Kenya"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-semibold text-slate-900">
                    City
                  </label>

                  <input
                    placeholder="Nairobi"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                  />

                </div>

              </div>

            </div>

            {/* Services */}

                        {/* Services */}

            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Services You're Interested In
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Hotel Video Production",
                  "Website Development",
                  "Digital Marketing",
                  "AI Video Validation",
                  "Drone Footage",
                  "Photography",
                  "Brand Strategy",
                  "Custom Solution",
                ].map((service) => (
                  <label
                    key={service}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 p-4 text-slate-900 transition hover:border-blue-600 hover:bg-blue-50"
                  >
                    <input
                      type="checkbox"
                      className="h-5 w-5 accent-blue-600"
                    />

                    <span className="font-medium text-slate-900">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Company Details */}

            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Company Details
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-slate-900">
                    Company Website
                  </label>

                  <input
                    type="url"
                    placeholder="https://yourhotel.com"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 placeholder:text-slate-500 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-slate-900">
                    Number of Properties
                  </label>

                  <select
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 outline-none focus:border-blue-600"
                  >
                    <option>1 Property</option>
                    <option>2 - 5 Properties</option>
                    <option>6 - 10 Properties</option>
                    <option>11+ Properties</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Budget */}

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-semibold text-slate-900">
                  Estimated Budget
                </label>

                <select
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 outline-none focus:border-blue-600"
                >
                  <option>Let's Discuss</option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-slate-900">
                  Project Timeline
                </label>

                <select
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 outline-none focus:border-blue-600"
                >
                  <option>Immediately</option>
                  <option>Within 1 Month</option>
                  <option>1 - 3 Months</option>
                  <option>Just Exploring</option>
                </select>
              </div>
            </div>

            {/* Project */}

            <div>
              <label className="mb-2 block font-semibold text-slate-900">
                Tell us about your project
              </label>

              <textarea
                rows={7}
                placeholder="Describe your hotel, your goals, and how Genesis Digital can help..."
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 placeholder:text-slate-500 outline-none focus:border-blue-600"
              />
            </div>

            {/* Submit */}

            <div className="pt-4">
              <button
                type="submit"
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-700 px-10 py-5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Send size={20} />

                Submit Partnership Request
              </button>
            </div>

          </form>

        </motion.div>

      </div>

    </main>
  );
}
