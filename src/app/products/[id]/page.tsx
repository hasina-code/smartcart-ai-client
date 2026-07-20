"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import useProduct from "@/hooks/useProduct";
import RelatedProducts from "@/components/products/RelatedProducts";

export default function ProductDetailsPage() {
  const params = useParams();

  const {
    data: product,
    isLoading,
    isError,
  } = useProduct(params.id as string);

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">
          Loading Product...
        </h2>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="py-20 text-center text-red-500">
        Product Not Found
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Product Image */}
        <div className="overflow-hidden rounded-3xl border">
          <Image
            src={product.image}
            alt={product.title}
            width={700}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            {product.category}
          </span>

          <h1 className="mt-5 text-4xl font-bold">
            {product.title}
          </h1>

          <p className="mt-5 text-slate-600">
            {product.description}
          </p>

          <div className="mt-8 space-y-4">
            <h3 className="text-3xl font-bold text-cyan-600">
              ${product.price}
            </h3>

            <p>
              ⭐ Rating:
              <span className="font-semibold">
                {" "}
                {product.rating}
              </span>
            </p>

            <p>
              Brand:
              <span className="font-semibold">
                {" "}
                {product.brand}
              </span>
            </p>

            <p>
              Stock:
              <span className="font-semibold">
                {" "}
                {product.stock}
              </span>
            </p>
          </div>

          <button className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white hover:bg-cyan-600">
            Add To Cart
          </button>
        </div>
      </div>
      <RelatedProducts />
    </section>
  );
}