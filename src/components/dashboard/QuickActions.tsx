"use client";

import Link from "next/link";

import {
  PlusCircle,
  Bot,
  Package,
  Heart,
} from "lucide-react";

const actions = [
  {
    title: "Add Product",
    description: "Create a new product",
    href: "/dashboard/products/add",
    icon: PlusCircle,
    color: "bg-cyan-500",
  },

  {
    title: "AI Assistant",
    description: "Ask AI anything",
    href: "/dashboard/assistant",
    icon: Bot,
    color: "bg-purple-500",
  },

  {
    title: "Orders",
    description: "Manage customer orders",
    href: "/dashboard/orders",
    icon: Package,
    color: "bg-green-500",
  },

  {
    title: "Wishlist",
    description: "Saved favourite products",
    href: "/dashboard/wishlist",
    icon: Heart,
    color: "bg-pink-500",
  },
];

export default function QuickActions() {
  return (
    <div>
      <h2 className="mb-5 text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div
                className={`${action.color} mb-5 inline-flex rounded-2xl p-4 text-white transition-transform group-hover:scale-110`}
              >
                <Icon size={28} />
              </div>

              <h3 className="text-lg font-semibold">
                {action.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}