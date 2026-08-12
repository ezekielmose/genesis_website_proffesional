import Link from "next/link";
import { ShieldX } from "lucide-react";

import { requireUser } from "@/lib/auth-guards";

export default async function UnauthorizedPage() {
  await requireUser();

  return (
    <div className="card p-8 text-center md:p-12">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-red-500/10 text-red-500">
        <ShieldX size={30} />
      </div>

      <h1 className="mt-6 text-3xl font-black">
        Access denied
      </h1>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--muted)]">
        Your account is authenticated, but your role does not have permission to open that section.
      </p>

      <Link href="/staff" className="btn-primary mt-7">
        Return to my dashboard
      </Link>
    </div>
  );
}
