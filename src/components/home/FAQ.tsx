"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does SmartCart AI recommend products?",
    answer:
      "Our AI analyzes your preferences, search history, product ratings, and current trends to recommend the best products for you.",
  },
  {
    question: "Is SmartCart AI free to use?",
    answer:
      "Yes. You can browse products and receive AI recommendations completely free.",
  },
  {
    question: "Can I compare products before buying?",
    answer:
      "Absolutely! SmartCart AI lets you compare prices, ratings, specifications, and features side by side.",
  },
  {
    question: "Do I need an account to use AI recommendations?",
    answer:
      "No, basic recommendations are available for everyone. Creating an account unlocks personalized recommendations.",
  },
  {
    question: "Are product prices updated regularly?",
    answer:
      "Yes. We regularly synchronize product information and prices to provide the most accurate shopping experience.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-5">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Everything you need to know about SmartCart AI.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition dark:border-slate-800 dark:bg-slate-900"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900 dark:text-white">
                {faq.question}

                <ChevronDown className="transition group-open:rotate-180" />
              </summary>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}