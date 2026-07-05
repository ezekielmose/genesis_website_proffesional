"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@genesisdigital.in",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9731016770",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "India & Kenya",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Fri • 8:00 AM - 6:00 PM",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-600/20 px-5 py-2 text-sm font-semibold text-blue-300">
            CONTACT US
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Let's Build Something Amazing Together
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Whether you're looking for hotel video production, website
            development or complete digital marketing services, we'd love to
            hear about your project.
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-5">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-2"
          >

            {contactInfo.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="flex items-start gap-5 rounded-3xl bg-white/5 p-6 backdrop-blur-md"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">

                    <Icon size={24} />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">

                      {item.title}

                    </h3>

                    <p className="mt-2 text-slate-300">

                      {item.value}

                    </p>

                  </div>

                </div>

              );

            })}

            {/* Why Contact */}

            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-violet-700 p-8">

              <h3 className="text-2xl font-bold">

                Why Choose Genesis Digital?

              </h3>

              <ul className="mt-6 space-y-3 text-blue-100">

                <li>✓ Hospitality Industry Specialists</li>
                <li>✓ Cinematic 4K Video Production</li>
                <li>✓ Modern Website Development</li>
                <li>✓ AI Powered Quality Validation</li>
                <li>✓ Fast Project Delivery</li>

              </ul>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >

            <form className="rounded-[36px] bg-white p-10 text-slate-900 shadow-2xl">

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block font-semibold">

                    Full Name

                  </label>

                  <input
                    type="text"
                    placeholder="FirstName LastName"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-semibold">

                    Email Address

                  </label>

                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
                  />

                </div>

              </div>

              <div className="mt-6">

                <label className="mb-2 block font-semibold">

                  Company

                </label>

                <input
                  type="text"
                  placeholder="Hotel / Resort Name"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
                />

              </div>

              <div className="mt-6">

                <label className="mb-2 block font-semibold">

                  Service Needed

                </label>

                <select className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600">

                  <option>Hotel Video Production</option>

                  <option>Website Development</option>

                  <option>Digital Marketing</option>

                  <option>AI Video Validation</option>

                  <option>Custom Solution</option>

                </select>

              </div>

              <div className="mt-6">

                <label className="mb-2 block font-semibold">

                  Tell Us About Your Project

                </label>

                <textarea
                  rows={6}
                  placeholder="Describe your project..."
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-600"
                />

              </div>

              <button
                type="submit"
                className="mt-8 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-700 px-8 py-4 font-semibold text-white transition hover:scale-105"
              >

                <Send size={20} />

                Send Message

                <ArrowRight size={18} />

              </button>

            </form>

          </motion.div>

        </div>

        {/* Google Map Placeholder */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-[36px] bg-slate-800"
        >

        </motion.div>

      </div>

    </section>
  );
}