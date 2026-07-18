"use client";

import { motion } from "framer-motion";
import { ShoppingBag, BrainCircuit, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
            About SmartCart AI
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Smarter Shopping with Artificial Intelligence
          </h2>

          <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
            SmartCart AI is an intelligent shopping platform that helps users
            discover the best products through AI-powered recommendations,
            price comparisons, and personalized suggestions. Our goal is to
            make online shopping faster, easier, and more reliable.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <BrainCircuit className="text-cyan-500" size={30} />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  AI Recommendations
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Personalized product suggestions based on your interests.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ShoppingBag className="text-cyan-500" size={30} />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  Smart Product Discovery
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Easily find trending and top-rated products in seconds.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ShieldCheck className="text-cyan-500" size={30} />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  Secure & Trusted
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Reliable shopping experience with verified product data.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900"
            alt="About SmartCart"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}