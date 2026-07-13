import Link from "next/link";
import { Building2, Users, ArrowRight } from "lucide-react";

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900">
            Get Started
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Choose how you'd like to work with Genesis Digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Partner */}

          <Link href="/partner">
            <div className="cursor-pointer rounded-3xl bg-white p-10 shadow-xl transition hover:-translate-y-2">

              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100">
                <Building2
                  className="text-blue-600"
                  size={42}
                />
              </div>

              <h2 className="text-3xl font-bold text-slate-900">
                Partner
              </h2>

              <p className="mt-4 text-slate-600">
                Hotels, resorts and hospitality businesses looking for
                professional digital solutions.
              </p>

              <div className="mt-8 flex items-center gap-2 text-blue-600 font-semibold">
                Continue
                <ArrowRight size={18} />
              </div>

            </div>
          </Link>

          {/* Contributor */}

          <Link href="/contributor/login">
            <div className="cursor-pointer rounded-3xl bg-white p-10 shadow-xl transition hover:-translate-y-2">

              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-violet-100">
                <Users
                  className="text-violet-600"
                  size={42}
                />
              </div>

              <h2 className="text-3xl font-bold text-slate-900">
                Contributor
              </h2>

              <p className="mt-4 text-slate-600">
                Join our global community of video soursing, videographers, photographers, and
                editors.
              </p>

              <div className="mt-8 flex items-center gap-2 text-violet-600 font-semibold">
                Continue
                <ArrowRight size={18} />
              </div>

            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}
