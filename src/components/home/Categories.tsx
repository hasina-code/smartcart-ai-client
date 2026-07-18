"use client";

import Link from "next/link";
import {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  House,
  Cable,
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Smartphones",
    icon: Smartphone,
    href: "/products?category=Smartphones",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    name: "Laptops",
    icon: Laptop,
    href: "/products?category=Laptops",
    color: "bg-violet-100 text-violet-600",
  },
  {
    name: "Audio",
    icon: Headphones,
    href: "/products?category=Audio",
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Wearables",
    icon: Watch,
    href: "/products?category=Wearables",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    name: "Cameras",
    icon: Camera,
    href: "/products?category=Cameras",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    href: "/products?category=Gaming",
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Home",
    icon: House,
    href: "/products?category=Home",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Accessories",
    icon: Cable,
    href: "/products?category=Accessories",
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          Shop by Category
        </h2>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Browse products by your favorite category.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <Link
                href={category.href}
                className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div
                  className={`inline-flex rounded-2xl p-4 ${category.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 transition group-hover:text-cyan-600 dark:text-white">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {/* Explore Products → */}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}