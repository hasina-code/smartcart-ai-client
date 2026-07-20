import ProductGrid from "@/components/products/ProductGrid";

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          All Products
        </h1>

        <p className="mt-2 text-slate-500">
          Explore our AI-powered shopping collection.
        </p>
      </div>

      <ProductGrid />
    </section>
  );
}