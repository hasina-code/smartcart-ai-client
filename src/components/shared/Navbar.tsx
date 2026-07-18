"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  



  
  const user = null;

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-cyan-500 p-2">
            <ShoppingCart className="text-white" size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              SmartCart AI
            </h2>

            <p className="text-xs text-slate-500">
              AI Shopping Assistant
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-slate-700 transition hover:text-cyan-600 dark:text-slate-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          {user ? (
            <>
              <Link
                href="/dashboard"
                className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-white"
              >
                Dashboard
              </Link>

              <button className="rounded-xl border px-5 py-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="font-medium text-slate-700 dark:text-slate-300"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-white transition hover:bg-cyan-600"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-medium"
              >
                {link.name}
              </Link>
            ))}

            <ThemeToggle />

            {user ? (
              <>
                <Link href="/dashboard">
                  Dashboard
                </Link>

                <button className="text-left">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  Login
                </Link>

                <Link href="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}