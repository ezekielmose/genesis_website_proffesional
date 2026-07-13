"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { auth, db } from "@/lib/firebase";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import {
  ArrowLeft,
  Loader2,
  UserPlus,
} from "lucide-react";

export default function ContributorSignup() {

  const router = useRouter();

  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {

    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters.");
      return;
    }

    try {

      setLoading(true);

      const credential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = credential.user;

      await setDoc(
        doc(db, "contributors", user.uid),
        {
          uid: user.uid,
          fullName,
          email,
          role: "contributor",
          createdAt: serverTimestamp(),
        }
      );

      alert("Account created successfully!");

      router.push("/contributor/login");

    } catch (error: any) {

      alert(error.message);

    } finally {

      setLoading(false);

    }

  }

  return (

    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-2xl">

        <Link
          href="/contributor/login"
          className="mb-8 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft size={18} />
          Back to Login
        </Link>

        <h1 className="text-4xl font-black text-slate-900">

          Create Contributor Account

        </h1>

        <p className="mt-3 text-slate-600">

          Create your contributor account to access your dashboard.

        </p>

        <form
          onSubmit={handleSignup}
          className="mt-10 space-y-6"
        >

          <div>

            <label className="mb-2 block font-semibold text-black">

              Full Name

            </label>

            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-xl border border-slate-300 px-5 py-4 text-black outline-none focus:border-blue-600"
            />

          </div>

          <div>

            <label className="mb-2 block font-semibold text-black">

              Email Address

            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full rounded-xl border border-slate-300 px-5 py-4 text-black outline-none focus:border-blue-600"
            />

          </div>

          <div>

            <label className="mb-2 block font-semibold text-black">

              Password

            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full rounded-xl border border-slate-300 px-5 py-4 text-black outline-none focus:border-blue-600"
            />

          </div>

          <div>

            <label className="mb-2 block font-semibold text-black">

              Confirm Password

            </label>

            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              className="w-full rounded-xl border border-slate-300 px-5 py-4 text-black outline-none focus:border-blue-600"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-700 py-4 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-60"
          >

            {loading ? (

              <>
                <Loader2 className="animate-spin" />
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

        <p className="mt-8 text-center text-slate-600">

          Already have an account?

          <Link
            href="/contributor/login"
            className="ml-2 font-semibold text-blue-600 hover:text-blue-700"
          >

            Login

          </Link>

        </p>

      </div>

    </main>

  );

}
