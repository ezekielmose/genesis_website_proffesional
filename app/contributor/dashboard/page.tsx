"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import {
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  auth,
  db,
} from "@/lib/firebase";

import {
  Settings,
  User,
  BadgeCheck,
  LogOut,
  ChevronDown,
  BarChart3,
  Wallet,
  UploadCloud,
  Globe,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Dashboard() {

  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [firstName, setFirstName] = useState("");

  const [role, setRole] = useState("Contributor");

  const [menuOpen, setMenuOpen] = useState(false);

  const [greeting, setGreeting] = useState("");

  useEffect(() => {

    const hour = new Date().getHours();

    if (hour < 12) {

      setGreeting("Good Morning");

    } else if (hour < 17) {

      setGreeting("Good Afternoon");

    } else {

      setGreeting("Good Evening");

    }

  }, []);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {

      if (!user) {

        router.push("/contributor/login");

        return;

      }

      try {

        const docRef = doc(db, "contributors", user.uid);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

          const data = docSnap.data();

          setFirstName(data.firstName || "Contributor");

          setRole(data.role || "Contributor");

        }

      } catch (error) {

        console.log(error);

      }

      setLoading(false);

    });

    return () => unsubscribe();

  }, [router]);

  async function handleLogout() {

    await signOut(auth);

    router.push("/contributor/login");

  }

  if (loading) {

    return (

      <main className="flex min-h-screen items-center justify-center bg-slate-100">

        <div className="text-lg font-semibold">

          Loading Dashboard...

        </div>

      </main>

    );

  }


  return (

    <main className="min-h-screen bg-slate-100">

      {/* Header */}

      <header className="sticky top-0 z-40 border-b bg-white shadow-sm">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <div>

            <h1 className="text-3xl font-black text-slate-900">

              Genesis Digital

            </h1>

            <p className="mt-1 text-slate-500">

              Contributor Dashboard

            </p>

          </div>

          {/* Profile */}

          <div className="relative">

            <button

              onClick={() => setMenuOpen(!menuOpen)}

              className="flex items-center gap-3 rounded-xl border bg-white px-5 py-3 shadow transition hover:bg-slate-50"

            >

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">

                {firstName.charAt(0).toUpperCase()}

              </div>

              <div className="text-left">

                <p className="font-semibold text-slate-900">

                  {firstName}

                </p>

                <p className="text-sm text-slate-500">

                  {role}

                </p>

              </div>

              <ChevronDown
                size={18}
                className={`transition ${
                  menuOpen ? "rotate-180" : ""
                }`}
              />

            </button>

            {/* Dropdown */}

            {menuOpen && (

              <motion.div

                initial={{ opacity: 0, y: -10 }}

                animate={{ opacity: 1, y: 0 }}

                className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border bg-white shadow-2xl"

              >

                <button className="flex w-full items-center gap-3 px-6 py-4 text-left hover:bg-slate-100">

                  <Settings size={18} />

                  Settings

                </button>

                <button className="flex w-full items-center gap-3 px-6 py-4 text-left hover:bg-slate-100">

                  <User size={18} />

                  My Profile

                </button>

                <div className="flex items-center gap-3 border-t px-6 py-4">

                  <BadgeCheck size={18} />

                  <div>

                    <p className="text-sm text-slate-500">

                      Role

                    </p>

                    <p className="font-semibold">

                      {role}

                    </p>

                  </div>

                </div>

                <button

                  onClick={handleLogout}

                  className="flex w-full items-center gap-3 border-t px-6 py-4 text-left text-red-600 hover:bg-red-50"

                >

                  <LogOut size={18} />

                  Logout

                </button>

              </motion.div>

            )}

          </div>

        </div>

      </header>

      {/* Content */}

      <div className="mx-auto max-w-7xl px-8 py-10">

        <div className="mb-10">

          <h2 className="text-4xl font-black text-slate-900">

            {greeting}, {firstName} 👋

          </h2>

          <p className="mt-3 text-lg text-slate-600">

            Welcome back to your Genesis Digital contributor dashboard.

          </p>

        </div>

        {/* Dashboard Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          <motion.div

            whileHover={{ y: -8 }}

            className="rounded-3xl bg-white p-8 shadow-lg transition"

          >

            <BarChart3 className="mb-5 text-blue-600" size={42} />

            <h3 className="text-2xl font-bold text-slate-900">

              My Report

            </h3>

            <p className="mt-3 text-slate-600">

              View uploads, completed work and performance reports.

            </p>

          </motion.div>

          <motion.div

            whileHover={{ y: -8 }}

            className="rounded-3xl bg-white p-8 shadow-lg transition"

          >

            <Wallet className="mb-5 text-green-600" size={42} />

            <h3 className="text-2xl font-bold text-slate-900">

              Finances

            </h3>

            <p className="mt-3 text-slate-600">

              Monitor earnings, payments and invoices.

            </p>

          </motion.div>

          <motion.div

            whileHover={{ y: -8 }}

            className="rounded-3xl bg-white p-8 shadow-lg transition"

          >

            <UploadCloud className="mb-5 text-violet-600" size={42} />

            <h3 className="text-2xl font-bold text-slate-900">

              Upload Videos

            </h3>

            <p className="mt-3 text-slate-600">

              Upload hotel videos assigned to you.

            </p>

          </motion.div>

          <motion.div

            whileHover={{ y: -8 }}

            className="rounded-3xl bg-white p-8 shadow-lg transition"

          >

            <Globe className="mb-5 text-orange-500" size={42} />

            <h3 className="text-2xl font-bold text-slate-900">

              Website

            </h3>

            <p className="mt-3 text-slate-600">

              Visit the Genesis Digital website.

            </p>

          </motion.div>

        </div>


              {/* Quick Navigation */}

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="mb-6 text-2xl font-bold text-slate-900">

            Quick Access

          </h2>

          <div className="flex flex-wrap gap-4">

            <button
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              My Report
            </button>

            <button
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Finances
            </button>

            <button
              className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              Upload Videos
            </button>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Website
            </a>

          </div>

        </div>

      </div>

    </main>

  );

}
