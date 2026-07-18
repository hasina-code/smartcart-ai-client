"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Users,
  Star,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    icon: ShoppingBag,
    number: "50K+",
    title: "Products",
  },
  {
    icon: Users,
    number: "20K+",
    title: "Happy Customers",
  },
  {
    icon: Star,
    number: "4.9",
    title: "Average Rating",
  },
  {
    icon: BrainCircuit,
    number: "98%",
    title: "AI Accuracy",
  },
];

export default function Stats() {
  return (
    <section className="bg-cyan-600 py-20 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-bold">
            SmartCart AI in Numbers
          </h2>

          <p className="mt-4 text-cyan-100">
            Trusted by thousands of shoppers worldwide.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-5xl font-extrabold">
                  {item.number}
                </h3>

                <p className="mt-3 text-lg text-cyan-100">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}