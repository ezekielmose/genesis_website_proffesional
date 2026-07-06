"use client";

import { useState } from "react";
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

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "Hotel Video Production",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setSuccess("");
    setError("");

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.company.trim() ||
      !formData.message.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    try {

      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setSuccess(
        "Your message has been sent successfully. We will contact you shortly."
      );

      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "Hotel Video Production",
        message: "",
      });

    } catch (err: any) {

      setError(err.message || "Something went wrong.");

    } finally {

      setLoading(false);

    }

  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 py-28 text-white"
    >
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
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-slate-300">{item.value}</p>
                  </div>

                </div>
              );

            })}

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >

            <form
              onSubmit={handleSubmit}
              className="rounded-[36px] bg-white p-10 text-slate-900 shadow-2xl"
            >

              {error && (
                <div className="mb-6 rounded-xl bg-red-100 p-4 text-red-700">
                  {error}
                </div>
              )}

              {success && (
                <div className="mb-6 rounded-xl bg-green-100 p-4 text-green-700">
                  {success}
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block font-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="FirstName LastName"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                  />

                </div>

              </div>

              <div className="mt-6">

                <label className="mb-2 block font-semibold">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Hotel / Resort Name"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                />

              </div>

              <div className="mt-6">

                <label className="mb-2 block font-semibold">
                  Service Needed
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                >
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project..."
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-700 px-8 py-4 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
              >

                <Send size={20} />

                {loading ? "Sending..." : "Send Message"}

                <ArrowRight size={18} />

              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
