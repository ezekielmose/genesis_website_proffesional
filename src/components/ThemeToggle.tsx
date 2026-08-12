"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("genesis-theme");
    const preferred =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light";

    setTheme(preferred);
    document.documentElement.dataset.theme = preferred;
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("genesis-theme", next);
    document.documentElement.dataset.theme = next;
  }

  return (
    <button
      type="button"
      aria-label="Toggle light and dark mode"
      onClick={toggle}
      className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--panel)]"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
