"use client";

import { usePathname } from "next/navigation";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname =
    usePathname();


  // ======================================================
  // DETECT STAFF PORTAL
  // ======================================================

  const isStaffPortal =
    pathname === "/staff" ||
    pathname.startsWith("/staff/");


  // ======================================================
  // STAFF PORTAL
  //
  // Do NOT display public website Header/Footer
  // ======================================================

  if (isStaffPortal) {

    return (
      <>
        {children}
      </>
    );

  }


  // ======================================================
  // PUBLIC WEBSITE
  // ======================================================

  return (
    <>

      <Header />

      <main>
        {children}
      </main>

      <Footer />

    </>
  );

}