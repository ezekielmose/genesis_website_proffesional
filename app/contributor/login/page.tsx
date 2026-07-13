"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { auth } from "@/lib/firebase";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  ArrowLeft,
  LogIn,
  Loader2,
} from "lucide-react";

export default function ContributorLogin() {

  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {

    e.preventDefault();

    setError("");

    try {

      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/contributor/dashboard");

    } catch (error: any) {

    switch (error.code) {
  
      case "auth/invalid-credential":
      case "auth/wrong-password":
        setError("Incorrect email or password.");
        break;
  
      case "auth/user-not-found":
        setError("No account found with this email.");
        break;
  
      case "auth/invalid-email":
        setError("Please enter a valid email address.");
        break;
  
      case "auth/too-many-requests":
        setError("Too many login attempts. Please try again later.");
        break;
  
      default:
        setError("Unable to login. Please try again.");
    }
  
  } finally {

      setLoading(false);

    }

  }

  return (

    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-2xl">

        <Link
          href="/get-started"
          className="mb-8 inline-flex items-center gap-2 text-blue-600"
        >
          <ArrowLeft size={18}/>
          Back
        </Link>

        <h1 className="text-4xl font-black text-slate-900">

          Contributor Login

        </h1>

        <p className="mt-3 text-slate-600">

          Sign in to access your contributor dashboard.

        </p>

        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-6"
        >

          <div>

            <label className="mb-2 block font-semibold text-black">

              Email Address

            </label>

            <input

              type="email"

              required

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              className="w-full rounded-xl border px-5 py-4 text-black"

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

              onChange={(e)=>setPassword(e.target.value)}

              className="w-full rounded-xl border px-5 py-4 text-black"

            />

          </div>

          <button

            disabled={loading}

            className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-semibold text-white"

          >

            {loading ?

              <Loader2 className="animate-spin"/>

              :

              <>

                <LogIn size={20}/>

                Login

              </>

            }

          </button>

        </form>

        <p className="mt-8 text-center text-slate-600">

          Don't have an account?

          <Link

            href="/contributor/signup"

            className="ml-2 font-semibold text-blue-600"

          >

            Create Account

          </Link>

        </p>

      </div>

    </main>

  );

}
