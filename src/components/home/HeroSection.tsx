"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-100 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950">
      {/* Background Glow */}
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-14 px-6 py-20 lg:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-2xl"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300">
            <Sparkles size={16} />
            AI Powered Shopping Experience
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl dark:text-white">
            Shop Smarter with
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              SmartCart AI
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Discover AI-powered product recommendations, compare prices,
            explore trending items, and make smarter buying decisions with
            confidence.
          </p>

          {/* Search */}
          <div className="mt-8 flex w-full max-w-xl items-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <Search
              className="ml-5 shrink-0 text-slate-400"
              size={22}
            />

            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 bg-transparent px-4 py-4 text-slate-700 outline-none placeholder:text-slate-400 dark:text-white"
            />

            <button className="bg-cyan-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-cyan-600">
              Search
            </button>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-xl"
            >
              Explore Products
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/recommendations"
              className="rounded-2xl border border-cyan-500 px-6 py-4 font-semibold text-cyan-600 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white dark:text-cyan-300"
            >
              AI Recommendation
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex w-full items-center justify-center lg:w-auto"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="overflow-hidden rounded-3xl border-4 border-cyan-400/20 shadow-[0_0_50px_rgba(6,182,212,0.25)]"
          >
            <Image
  src="/images/hero-shopping-ai.jpg"
  alt="SmartCart AI"
  width={600}
  height={450}
  priority
  sizes="(max-width:768px) 100vw, 560px"
  className="h-[260px] w-full object-cover sm:h-[320px] md:h-[420px] md:w-[560px]"
/>
          </motion.div>

          {/* Floating Card 1 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute left-0 top-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">
              AI Recommendation
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              98% Match
            </h3>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute bottom-8 right-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Best Deal
            </p>

            <h3 className="mt-1 text-lg font-bold text-cyan-600">
              Save 40%
            </h3>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-cyan-500">
          <div className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
        </div>
      </div>
    </section>
  );
}