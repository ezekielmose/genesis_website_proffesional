"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { auth, db } from "@/lib/firebase";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import {
  User,
  Mail,
  Calendar,
  LogOut,
  Home,
  Video,
  Building2,
} from "lucide-react";

export default function ContributorDashboard() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>(null);

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
          setUserData(docSnap.data());
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
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
        <h2 className="text-2xl font-bold text-slate-700">
          Loading Dashboard...
        </h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}

      <header className="bg-gradient-to-r from-blue-600 to-violet-700 px-8 py-6 text-white shadow-lg">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div>

            <h1 className="text-3xl font-black">
              Contributor Dashboard
            </h1>

            <p className="mt-1 text-blue-100">
              Welcome back,
              <span className="font-semibold">
                {" "}
                {userData?.fullName}
              </span>
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Profile Card */}

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="mb-8 text-2xl font-bold text-slate-900">
            My Profile
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">

              <User className="text-blue-600" />

              <div>

                <p className="text-sm text-slate-500">
                  Full Name
                </p>

                <p className="font-semibold text-slate-900">
                  {userData?.fullName}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">

              <Mail className="text-blue-600" />

              <div>

                <p className="text-sm text-slate-500">
                  Email
                </p>

                <p className="font-semibold text-slate-900">
                  {userData?.email}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">

              <Calendar className="text-blue-600" />

              <div>

                <p className="text-sm text-slate-500">
                  Role
                </p>

                <p className="font-semibold text-slate-900">
                  {userData?.role}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <Link
            href="#"
            className="rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-1"
          >

            <Video
              className="mb-5 text-blue-600"
              size={40}
            />

            <h3 className="text-2xl font-bold text-slate-900">
              Assigned Hotels
            </h3>

            <p className="mt-3 text-slate-600">
              View hotels assigned to you.
            </p>

          </Link>

          <Link
            href="#"
            className="rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-1"
          >

            <Building2
              className="mb-5 text-green-600"
              size={40}
            />

            <h3 className="text-2xl font-bold text-slate-900">
              Upload Videos
            </h3>

            <p className="mt-3 text-slate-600">
              Submit hotel videos for review.
            </p>

          </Link>

          <Link
            href="/"
            className="rounded-3xl bg-white p-8 shadow-xl transition hover:-translate-y-1"
          >

            <Home
              className="mb-5 text-violet-600"
              size={40}
            />

            <h3 className="text-2xl font-bold text-slate-900">
              Website
            </h3>

            <p className="mt-3 text-slate-600">
              Return to Genesis Digital.
            </p>

          </Link>

        </div>

      </div>

    </main>
  );
}
