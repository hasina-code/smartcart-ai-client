"use client";

import Image from "next/image";
import Link from "next/link";
import useFeaturedProducts from "@/hooks/useFeaturedProducts";

export default function FeaturedProducts() {
 
  const { data: products = [], isLoading } = useFeaturedProducts();

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Featured Products
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Loading products...
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="animate-pulse rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="h-48 rounded-xl bg-slate-200 dark:bg-slate-700" />

              <div className="mt-4 h-5 rounded bg-slate-200 dark:bg-slate-700" />

              <div className="mt-3 h-4 rounded bg-slate-200 dark:bg-slate-700" />

              <div className="mt-2 h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />

              <div className="mt-5 h-10 rounded bg-slate-200 dark:bg-slate-700" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Featured Products
        </h2>

        <p className="mt-5 text-slate-500">
          No featured products found.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          Featured Products
        </h2>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          {/* Explore our AI recommended top products. */}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="relative h-56 w-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width:768px) 100vw,
                       (max-width:1024px) 50vw,
                       25vw"
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300">
                {product.category}
              </span>

              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                {product.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                {product.shortDescription}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xl font-bold text-cyan-600">
                  ${product.price}
                </span>

                <span className="text-sm font-medium text-yellow-500">
                  ⭐ {product.rating}
                </span>
              </div>

              <Link
                href={`/products/${product._id}`}
                className="mt-6 block rounded-xl bg-cyan-500 py-3 text-center font-semibold text-white transition hover:bg-cyan-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}