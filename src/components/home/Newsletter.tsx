"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-20">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Icon */}

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
            <Mail className="text-white" size={40} />
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold text-white">
            Subscribe to Our Newsletter
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-cyan-100">
            Get the latest product updates, exclusive discounts,
            AI shopping tips, and special offers delivered directly
            to your inbox.
          </p>

          {/* Form */}

          <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-2xl bg-white px-6 py-4 text-slate-700 outline-none"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-black"
            >
              Subscribe
              <Send size={18} />
            </button>
          </form>

          {/* Bottom Text */}

          <p className="mt-5 text-sm text-cyan-100">
            📧 No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}