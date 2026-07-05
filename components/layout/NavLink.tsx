"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export default function NavLink({
  href,
  label,
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className={`
          relative
          rounded-xl
          px-4
          py-2
          font-semibold
          transition-all
          duration-300
          ${
            isActive
              ? "text-blue-600"
              : "text-slate-800 hover:text-blue-600"
          }
          hover:bg-slate-100
        `}
      >
        {label}

        {/* Animated Underline */}

        <span
          className={`
            absolute
            left-0
            -bottom-[2px]
            h-[3px]
            rounded-full
            bg-blue-600
            transition-all
            duration-300
            ${
              isActive
                ? "w-full"
                : "w-0 group-hover:w-full"
            }
          `}
        />

        {/* Active Glow */}

        {isActive && (
          <motion.div
            layoutId="navbar-active"
            className="absolute inset-0 rounded-xl border border-blue-100 bg-blue-50/40 -z-10"
            transition={{
              type: "spring",
              stiffness: 450,
              damping: 35,
            }}
          />
        )}
      </motion.div>
    </Link>
  );
}