"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Online Shopper",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "SmartCart AI helped me find the perfect laptop within my budget. The AI recommendations were incredibly accurate!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Tech Enthusiast",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I compared multiple products instantly and saved both time and money. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "The interface is beautiful, fast, and the AI assistant makes shopping much easier.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Thousands of happy shoppers trust SmartCart AI every day.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Rating */}

              <div className="mb-5 flex">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600 dark:text-slate-400">
                {item.review}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}