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
          className="mb-10 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
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

            <p className="mt-5 max-w-3xl text-lg text-blue-100">
              We'd love to work with your hotel, resort, travel agency or
              hospitality business. Fill in the details below and our team
              will contact you shortly.
            </p>

          </div>

          {/* Form */}

          <form className="space-y-8 p-10">

            {/* Business Information */}

            <div>

              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Business Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-semibold">
                    Hotel / Company Name *
                  </label>

                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                    placeholder="Genesis Resort"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold">
                    Business Type *
                  </label>

                  <select
                    required
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
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

            {/* Contact Information */}

            <div>

              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Contact Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  required
                  placeholder="Contact Person *"
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                />

                <input
                  placeholder="Position"
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address *"
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                />

                <input
                  required
                  placeholder="Phone Number *"
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                />

                <input
                  placeholder="Country"
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                />

                <input
                  placeholder="City"
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                />

              </div>

            </div>

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
                    className="flex items-center gap-3 rounded-xl border border-slate-300 p-4 hover:border-blue-600"
                  >

                    <input
                      type="checkbox"
                      className="h-5 w-5"
                    />

                    {service}

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

                <input
                  placeholder="Company Website"
                  className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                />

                <select className="rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600">

                  <option>Number of Properties</option>
                  <option>1</option>
                  <option>2 - 5</option>
                  <option>6 - 10</option>
                  <option>11+</option>

                </select>

              </div>

            </div>

            {/* Budget */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-semibold">
                  Estimated Budget
                </label>

                <select className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600">

                  <option>Let's Discuss</option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>

                </select>

              </div>

              <div>

                <label className="mb-2 block font-semibold">
                  Project Timeline
                </label>

                <select className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600">

                  <option>Immediately</option>
                  <option>Within 1 Month</option>
                  <option>1 - 3 Months</option>
                  <option>Just Exploring</option>

                </select>

              </div>

            </div>

            {/* Project */}

            <div>

              <label className="mb-2 block font-semibold">
                Tell us about your project
              </label>

              <textarea
                rows={7}
                placeholder="Describe your hotel, goals and how Genesis Digital can help..."
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
              />

            </div>

            {/* Submit */}

            <button
              type="submit"
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-700 px-10 py-5 font-semibold text-white transition hover:scale-105"
            >

              <Send size={20} />

              Submit Partnership Request

            </button>

          </form>

        </motion.div>

      </div>
    </main>
  );
}
