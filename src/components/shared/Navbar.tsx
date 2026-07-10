"use client";

import ThemeToggle from "@/provider/ThemeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Jobs",
    href: "/jobs",
  },
  {
    title: "Companies",
    href: "/companies",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide text-blue-600"
        >
          Next<span className="text-slate-900 dark:text-white">Hire</span>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-medium transition ${
                pathname === link.href
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600 dark:text-gray-300"
              }`}
            >
              {link.title}

              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-blue-600" />
              )}
            </Link>
          ))}
        </nav>


        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Theme Button */}
          <ThemeToggle />

          {/* Login */}
          <Link
            href="/login"
            className="rounded-lg border border-blue-600 px-5 py-2 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            Login
          </Link>


          {/* Register */}
          <Link
            href="/register"
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Register
          </Link>

        </div>


        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 md:hidden">

          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-700 dark:text-white"
          >
            ☰
          </button>

        </div>

      </div>



      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t bg-white dark:border-gray-800 dark:bg-slate-950 md:hidden">

          <nav className="flex flex-col gap-2 p-6">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 font-medium transition ${
                  pathname === link.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                {link.title}
              </Link>
            ))}


            <Link
              href="/login"
              className="mt-3 rounded-lg border border-blue-600 py-3 text-center font-medium text-blue-600"
            >
              Login
            </Link>


            <Link
              href="/register"
              className="rounded-lg bg-blue-600 py-3 text-center font-medium text-white"
            >
              Register
            </Link>


          </nav>

        </div>
      )}

    </header>
  );
}