import Link from "next/link";

import {
  ArrowLeft,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import {
  StaffLoginForm,
} from "@/components/auth/StaffLoginForm";


export default function StaffLoginPage() {

  return (

    <section className="section">

      <div className="container">

        <div className="mx-auto max-w-xl">

          <Link
            href="/"
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-[var(--muted)]
              transition
              hover:text-[var(--brand)]
            "
          >

            <ArrowLeft
              size={17}
            />

            Back to Genesis Digital

          </Link>


          <div className="card p-8 md:p-10">

            <div className="flex items-center justify-between">

              <div
                className="
                  grid
                  h-14
                  w-14
                  place-items-center
                  rounded-2xl
                  bg-[var(--soft)]
                  text-[var(--brand)]
                "
              >

                <LockKeyhole
                  size={28}
                />

              </div>


              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[var(--soft)]
                  px-3
                  py-2
                  text-xs
                  font-black
                  text-[var(--brand)]
                "
              >

                <ShieldCheck
                  size={15}
                />

                Secure Staff Access

              </div>

            </div>


            <h1 className="mt-7 text-4xl font-black">

              Staff Login

            </h1>


            <p
              className="
                mt-4
                leading-7
                text-[var(--muted)]
              "
            >

              Sign in to the Genesis Digital AI Reliability
              operations portal.

            </p>


            <StaffLoginForm />

          </div>

        </div>

      </div>

    </section>

  );

}