"use client";

import { useParams } from "next/navigation";
import useRelatedProducts from "@/hooks/useRelatedProducts";
import ProductCard from "./ProductCard";

export default function RelatedProducts() {
  const params = useParams();

  const { data: products, isLoading } =
    useRelatedProducts(params.id as string);

  if (isLoading) {
    return (
      <div className="py-10 text-center">
        Loading Related Products...
      </div>
    );
  }

  if (!products?.length) return null;

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold">
        Related Products
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}