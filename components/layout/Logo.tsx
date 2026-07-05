"use client";

import Image from "next/image";
import Link from "next/link";
import { company } from "./navData";

interface LogoProps {
  showText?: boolean;
  size?: number;
}

export default function Logo({
  showText = true,
  size = 48,
}: LogoProps) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 transition-all duration-300"
    >
      {/* Logo Image */}

      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={company.logo}
          alt={company.name}
          width={size}
          height={size}
          priority
          className="rounded-xl transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Company Name */}

      {showText && (
        <div className="leading-tight">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
            {company.name}
          </h1>

          <p className="text-sm text-slate-500">
            {company.slogan}
          </p>
        </div>
      )}
    </Link>
  );
}