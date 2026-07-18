"use client";

import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  Sparkles,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    description:
      "Get your favorite products delivered quickly and safely at your doorstep.",
    icon: Truck,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Secure Payment",
    description:
      "Shop with confidence using our secure and encrypted payment system.",
    icon: ShieldCheck,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "AI Recommendations",
    description:
      "Our AI suggests the best products based on your interests and shopping habits.",
    icon: Sparkles,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Best Price Guarantee",
    description:
      "We compare prices to help you find the best deals available online.",
    icon: BadgeDollarSign,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Why Choose SmartCart AI?
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Experience smarter shopping with AI-powered recommendations,
            secure payments, and unbeatable service.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div
                  className={`inline-flex rounded-2xl p-4 ${feature.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  {/* {feature.title} */}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}