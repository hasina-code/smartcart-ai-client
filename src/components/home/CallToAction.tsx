"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CallToAction() {
  return (
  
    <section className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
     
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent"></div>
      
      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-950 px-5 py-2 text-cyan-300 border border-cyan-800">
            <Sparkles size={18} />
            <span className="text-sm font-medium">AI Shopping Experience</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Ready to Shop <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Smarter?</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Join thousands of users discovering the best products with 
            AI-powered recommendations, smart price comparison, and 
            personalized shopping experiences.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/products"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Explore Products
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/register"
              className="rounded-2xl border-2 border-slate-700 bg-slate-900 px-8 py-4 font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
            >
              {/* Get Started Free */}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}