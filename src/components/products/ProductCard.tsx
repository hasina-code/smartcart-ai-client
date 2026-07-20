"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/hooks/useProducts";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
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

        <div className="mt-4 space-y-1 text-sm text-slate-500 dark:text-slate-400">
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>

          <p>
            <strong>Stock:</strong> {product.stock}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-bold text-cyan-600">
            ${product.price}
          </span>

          <span className="text-yellow-500">
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
  );
}