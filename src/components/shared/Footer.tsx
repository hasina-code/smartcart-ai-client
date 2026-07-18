"use client";

import Link from "next/link";
import {
  ShoppingCart,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500 p-2">
                <ShoppingCart size={22} className="text-white" />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  SmartCart AI
                </h2>

                <p className="text-sm text-slate-400">
                  AI Shopping Assistant
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              SmartCart AI helps users discover the best
              products through AI-powered recommendations,
              smart search, price comparison, and
              personalized shopping experiences.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/" className="hover:text-cyan-400">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="hover:text-cyan-400"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="hover:text-cyan-400"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Support
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link
                  href="/help"
                  className="hover:text-cyan-400"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="hover:text-cyan-400"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="hover:text-cyan-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="hover:text-cyan-400"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 text-cyan-400"
                />
                <span>
                  Noakhali, Chattogram,
                  Bangladesh
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-cyan-400"
                />
                <span>+880 1822-903392</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-cyan-400"
                />
                <span>
                  hasina.akter171407@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} SmartCart AI. All
          Rights Reserved. Built with ❤️ using Next.js,
          TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}