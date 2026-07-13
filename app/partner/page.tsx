"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Send,
  Building2,
  Loader2,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function PartnerPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    companyName: "",
    businessType: "",
    contactPerson: "",
    position: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    website: "",
    properties: "",
    budget: "",
    timeline: "",
    project: "",
    services: [] as string[],
  });

  const services = [
    "Hotel Video Production",
    "Website Development",
    "Digital Marketing",
    "AI Video Validation",
    "Drone Footage",
    "Photography",
    "Brand Strategy",
    "Custom Solution",
  ];

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

  const handleCheckbox = (service: string) => {
    if (formData.services.includes(service)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== service),
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, service],
      });
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (
      !formData.companyName ||
      !formData.businessType ||
      !formData.contactPerson ||
      !formData.email ||
      !formData.phone
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setSuccess(
        "Your partnership request has been submitted successfully. Our team will contact you shortly."
      );

      setFormData({
        companyName: "",
        businessType: "",
        contactPerson: "",
        position: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        website: "",
        properties: "",
        budget: "",
        timeline: "",
        project: "",
        services: [],
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6">

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

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="space-y-8 p-10"
          >

            {error && (
              <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-700">
                {error}
              </div>
            )}

            {success && (
              <div className="flex items-center gap-3 rounded-xl border border-green-300 bg-green-50 p-4 text-green-700">
                <CheckCircle size={22} />
                {success}
              </div>
            )}

            {/* Business Information */}

            <div>

              <h2 className="mb-6 text-2xl font-bold text-black">
                Business Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block font-semibold text-black">
                    Hotel / Company Name *
                  </label>

                  <input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="Genesis Resort"
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 text-black outline-none transition focus:border-blue-600"
                  />

                </div>

                <div>

                  <label className="mb-2 block font-semibold text-black">
                    Business Type *
                  </label>

                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-300 px-5 py-4 text-black outline-none focus:border-blue-600"
                  >
                    <option value="">Select Business Type</option>
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

              <h2 className="mb-6 text-2xl font-bold text-black">
                Contact Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  placeholder="Contact Person *"
                  className="rounded-xl border border-slate-300 px-5 py-4 text-black outline-none focus:border-blue-600"
                />

                <input
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Position"
                  className="rounded-xl border border-slate-300 px-5 py-4 text-black outline-none focus:border-blue-600"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="Email Address *"
                  className="rounded-xl border border-slate-300 px-5 py-4 text-black outline-none focus:border-blue-600"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number *"
                  className="rounded-xl border border-slate-300 px-5 py-4 text-black outline-none focus:border-blue-600"
                />

                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="rounded-xl border border-slate-300 px-5 py-4 text-black outline-none focus:border-blue-600"
                />

                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="rounded-xl border border-slate-300 px-5 py-4 text-black outline-none focus:border-blue-600"
                />

              </div>

            </div>


              {/* Services */}

            <div>

              <h2 className="mb-6 text-2xl font-bold text-black">
                Services You're Interested In
              </h2>

              <div className="grid gap-4 md:grid-cols-2">

                {services.map((service) => (

                  <label
                    key={service}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 p-4 transition hover:border-blue-600 hover:bg-blue-50"
                  >

                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleCheckbox(service)}
                      className="h-5 w-5"
                    />

                    <span className="font-medium text-black">
                      {service}
                    </span>

                  </label>

                ))}

              </div>

            </div>

            {/* Company Details */}

            <div>

              <h2 className="mb-6 text-2xl font-bold text-black">
                Company Details
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Company Website"
                  className="rounded-xl border border-slate-300 px-5 py-4 text-black outline-none transition focus:border-blue-600"
                />

                <select
                  name="properties"
                  value={formData.properties}
                  onChange={handleChange}
                  className="rounded-xl border border-slate-300 px-5 py-4 text-black outline-none transition focus:border-blue-600"
                >

                  <option value="">
                    Number of Properties
                  </option>

                  <option>1</option>

                  <option>2 - 5</option>

                  <option>6 - 10</option>

                  <option>11+</option>

                </select>

              </div>

            </div>

            {/* Budget & Timeline */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-semibold text-black">
                  Estimated Budget
                </label>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 text-black outline-none transition focus:border-blue-600"
                >

                  <option value="">
                    Let's Discuss
                  </option>

                  <option>Under $1,000</option>

                  <option>$1,000 - $5,000</option>

                  <option>$5,000 - $10,000</option>

                  <option>$10,000+</option>

                </select>

              </div>

              <div>

                <label className="mb-2 block font-semibold text-black">
                  Project Timeline
                </label>

                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 text-black outline-none transition focus:border-blue-600"
                >

                  <option value="">
                    Immediately
                  </option>

                  <option>Within 1 Month</option>

                  <option>1 - 3 Months</option>

                  <option>Just Exploring</option>

                </select>

              </div>

            </div>

            {/* Project Description */}

            <div>

              <label className="mb-2 block font-semibold text-black">
                Tell us about your project
              </label>

              <textarea
                name="project"
                value={formData.project}
                onChange={handleChange}
                rows={7}
                placeholder="Describe your hotel, goals and how Genesis Digital can help..."
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-black outline-none transition focus:border-blue-600"
              />

            </div>

              {/* Submit Button */}

            <div className="pt-4">

              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-700 px-10 py-5 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
              >

                {loading ? (
                  <>
                    <Loader2
                      size={20}
                      className="animate-spin"
                    />

                    Sending...

                  </>
                ) : (
                  <>
                    <Send size={20} />

                    Submit Partnership Request
                  </>
                )}

              </button>

            </div>

          </form>

        </motion.div>

      </div>

    </main>
  );
}
