import {
  LogOut,
} from "lucide-react";

import {
  signOut,
} from "@/auth";


export function StaffLogoutButton() {

  return (

    <form
      action={async () => {

        "use server";


        await signOut({

          redirectTo:
            "/staff-login",

        });

      }}
    >

      <button
        type="submit"
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-[var(--line)]
          bg-[var(--panel)]
          px-4
          py-2
          text-sm
          font-black
          transition
          hover:border-red-400/40
          hover:text-red-500
        "
      >

        <LogOut
          size={16}
        />

        Sign Out

      </button>

    </form>

  );

}