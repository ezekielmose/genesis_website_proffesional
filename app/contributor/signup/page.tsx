"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowLeft,
  UserPlus,
  Loader2,
} from "lucide-react";

import { auth, db } from "@/lib/firebase";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

export default function ContributorSignup() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

 const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();

  if (
    !form.fullName.trim() ||
    !form.email.trim() ||
    !form.phone.trim() ||
    !form.country.trim() ||
    !form.password ||
    !form.confirmPassword
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  if (form.password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {

    setLoading(true);

    // Create Firebase Authentication account
    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

    const user = userCredential.user;

    // Save contributor profile in Firestore
    await setDoc(
      doc(db, "contributors", user.uid),
      {
        uid: user.uid,

        fullName: form.fullName,

        email: form.email,

        phone: form.phone,

        country: form.country,

        role: "contributor",

        status: "active",

        createdAt: serverTimestamp(),
      }
    );

    alert("🎉 Account created successfully!");

    router.push("/contributor/dashboard");

  } catch (error: any) {

    console.error(error);

    switch (error.code) {

      case "auth/email-already-in-use":
        alert("An account with this email already exists.");
        break;

      case "auth/invalid-email":
        alert("Please enter a valid email address.");
        break;

      case "auth/weak-password":
        alert("Password should be at least 6 characters.");
        break;

      case "auth/network-request-failed":
        alert("Network error. Check your internet connection.");
        break;

      default:
        alert(error.message);
    }

  } finally {

    setLoading(false);

  }

};


  return (
    <main className="min-h-screen bg-slate-50 py-20">

      <div className="mx-auto max-w-3xl px-6">

        <Link
          href="/get-started"
          className="mb-8 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
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

              <UserPlus size={42} />

            </div>

            <h1 className="text-5xl font-black">

              Contributor Sign Up

            </h1>

            <p className="mt-5 text-lg text-blue-100">

              Join Genesis Digital as a contributor and start collaborating
              with hotels, resorts and hospitality brands across the world.

            </p>

          </div>

          {/* Signup Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-10"
          >

            <div>

              <label className="mb-2 block font-semibold text-slate-900">

                Full Name

              </label>

              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 outline-none focus:border-blue-600"
                placeholder="John Doe"
              />

            </div>

            <div>

              <label className="mb-2 block font-semibold text-slate-900">

                Email Address

              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 outline-none focus:border-blue-600"
                placeholder="john@example.com"
              />

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-semibold text-slate-900">

                  Country

                </label>

                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 outline-none focus:border-blue-600"
                  placeholder="Kenya"
                />

              </div>

              <div>

                <label className="mb-2 block font-semibold text-slate-900">

                  Phone Number

                </label>

                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 outline-none focus:border-blue-600"
                  placeholder="+254..."
                />

              </div>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-semibold text-slate-900">

                  Password

                </label>

                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 outline-none focus:border-blue-600"
                />

              </div>

              <div>

                <label className="mb-2 block font-semibold text-slate-900">

                  Confirm Password

                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 text-slate-900 outline-none focus:border-blue-600"
                />

              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-700 px-8 py-5 font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading ? (
                <>
                  <Loader2
                    size={20}
                    className="animate-spin"
                  />
                  Creating Account...
                </>
              ) : (
                <>
                  <UserPlus size={20} />
                  Create Account
                </>
              )}

            </button>

          </form>

        </motion.div>

      </div>

    </main>
  );
}
