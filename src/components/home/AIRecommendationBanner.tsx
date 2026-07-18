"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Bot } from "lucide-react";

export default function AIRecommendationBanner() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700" />

      {/* Blur Effects */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl text-white"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Sparkles size={18} />
            AI Powered Shopping Assistant
          </div>

          <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Let AI Find the
            <span className="block text-cyan-200">
              Perfect Product For You
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-cyan-100">
            Describe what you need and SmartCart AI will instantly recommend
            the best products based on your budget, preferences, and latest
            trends.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/recommendations"
              className="flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-cyan-700 transition hover:scale-105"
            >
              Try AI Assistant
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/products"
              className="rounded-2xl border border-white px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-cyan-700"
            >
              Browse Products
            </Link>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-lg">
            <div className="flex justify-center">
              <div className="rounded-full bg-white p-6 shadow-2xl">
                <Bot className="text-cyan-600" size={70} />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl bg-white/15 p-4 text-white">
                💬 "I need a gaming laptop under $1000"
              </div>

              <div className="rounded-xl bg-cyan-500 p-4 text-white shadow-lg">
                🤖 AI Found 12 Best Matches
              </div>

              <div className="rounded-xl bg-white/15 p-4 text-white">
                ⭐ 98% Recommendation Accuracy
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}