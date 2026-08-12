import {
  ShieldCheck,
} from "lucide-react";

import {
  requireUser,
} from "@/lib/auth-guards";

import {
  RoleBadge,
} from "@/components/auth/RoleBadge";

import {
  StaffLogoutButton,
} from "@/components/auth/StaffLogoutButton";


export default async function StaffLayout({
  children,
}: {
  children:
    React.ReactNode;
}) {

  const user =
    await requireUser();


  return (

    <section className="min-h-[75vh] bg-[var(--soft)] py-8">

      <div className="container">

        {/* =================================================
            STAFF HEADER
        ================================================= */}

        <div
          className="
            mb-7
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-[var(--line)]
            bg-[var(--panel)]
            p-5
            shadow-sm
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                grid
                h-12
                w-12
                place-items-center
                rounded-2xl
                bg-gradient-to-br
                from-[var(--brand)]
                to-[var(--brand2)]
                text-white
              "
            >

              <ShieldCheck
                size={24}
              />

            </div>


            <div>

              <div className="font-black">

                Genesis Digital Staff Portal

              </div>


              <div
                className="
                  mt-1
                  text-sm
                  text-[var(--muted)]
                "
              >

                {user.fullName}
                {" · "}
                {user.email}

              </div>

            </div>

          </div>


          <div className="flex items-center gap-3">

            <RoleBadge
              role={
                user.role
              }
            />


            <StaffLogoutButton />

          </div>

        </div>


        {children}

      </div>

    </section>

  );

}