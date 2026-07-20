"use client";

import { useState } from "react";
import useProducts from "@/hooks/useProducts";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
  } = useProducts(search, category, sort, page);

  const products = data?.data ?? [];
  const pagination = data?.pagination;

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-semibold">
          Loading Products...
        </h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20 text-center text-red-500">
        Failed to load products.
      </div>
    );
  }

  return (
    <>
      {/* Search + Category + Sort */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        {/* Search */}
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="rounded-xl border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-900"
        >
          <option value="">All Categories</option>
          <option value="Smartphones">Smartphones</option>
          <option value="Laptops">Laptops</option>
          <option value="Headphones">Headphones</option>
          <option value="Smart Watches">Smart Watches</option>
          <option value="Gaming">Gaming</option>
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
          className="rounded-xl border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-900"
        >
          <option value="">Default</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            disabled={pagination.currentPage === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from(
            { length: pagination.totalPages },
            (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`rounded-lg px-4 py-2 ${
                  pagination.currentPage === i + 1
                    ? "bg-cyan-500 text-white"
                    : "border"
                }`}
              >
                {i + 1}
              </button>
            )
          )}

          <button
            disabled={
              pagination.currentPage ===
              pagination.totalPages
            }
            onClick={() => setPage((prev) => prev + 1)}
            className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}