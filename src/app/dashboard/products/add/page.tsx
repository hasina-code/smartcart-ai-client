"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loader2, PlusCircle, Package } from "lucide-react";

import axiosInstance from "@/lib/axios";
import { useAuth } from "@/context/AuthContext";

type ProductForm = {
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  image: string;
};

export default function AddProductPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductForm>();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="animate-spin text-cyan-500" size={40} />
      </div>
    );
  }

  if (!user) return null;

  const onSubmit = async (data: ProductForm) => {
    try {
      setSubmitting(true);
      const res = await axiosInstance.post("/products", data);
      toast.success(res.data.message || "Product added successfully!");
      reset();
      router.push("/dashboard/products");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to add product");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 dark:border-slate-700 dark:bg-slate-800 transition-all";

  return (
    <div className="mx-auto max-w-4xl animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
          <Package className="text-cyan-500" /> Add New Product
        </h1>
        <p className="mt-2 text-slate-500">Fill in the details below to list a new product in your store.</p>
      </div>

      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-100 dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="grid gap-6">
          {/* Product Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">Product Name</label>
            <input {...register("title", { required: "Product name is required" })} className={inputClass} placeholder="e.g. Wireless Headphone" />
            {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>}
          </div>

          {/* Category, Price, Stock */}
         {/* Category, Brand, Price, Stock */}
<div className="grid gap-6 md:grid-cols-4">
  {/* Category */}
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
      Category
    </label>

    <select
      {...register("category", { required: "Category is required" })}
      className={inputClass}
    >
      <option value="">Select Category</option>
      <option value="Laptop">Laptop</option>
      <option value="Phone">Phone</option>
      <option value="Watch">Watch</option>
      <option value="Camera">Camera</option>
      <option value="Accessories">Accessories</option>
    </select>

    {errors.category && (
      <p className="mt-1 text-sm text-red-500">
        {errors.category.message}
      </p>
    )}
  </div>

  {/* Brand */}
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
      Brand
    </label>

    <input
      {...register("brand", {
        required: "Brand is required",
      })}
      className={inputClass}
      placeholder="e.g. Apple, Samsung, Sony"
    />

    {errors.brand && (
      <p className="mt-1 text-sm text-red-500">
        {errors.brand.message}
      </p>
    )}
  </div>

  {/* Price */}
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
      Price ($)
    </label>

    <input
      type="number"
      step="any"
      {...register("price", {
        required: "Price is required",
        valueAsNumber: true,
      })}
      className={inputClass}
      placeholder="0.00"
    />

    {errors.price && (
      <p className="mt-1 text-sm text-red-500">
        {errors.price.message}
      </p>
    )}
  </div>

  {/* Stock */}
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
      Stock Quantity
    </label>

    <input
      type="number"
      {...register("stock", {
        required: "Stock is required",
        valueAsNumber: true,
      })}
      className={inputClass}
      placeholder="0"
    />

    {errors.stock && (
      <p className="mt-1 text-sm text-red-500">
        {errors.stock.message}
      </p>
    )}
  </div>
</div>

          {/* Image URL */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">Image URL</label>
            <input {...register("image", { required: "Image URL is required" })} className={inputClass} placeholder="https://..." />
          </div>

          {/* Short Description */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">Short Description</label>
            <input {...register("shortDescription", { required: "Required" })} className={inputClass} placeholder="A short catchy summary" />
          </div>

          {/* Full Description */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">Full Description</label>
            <textarea rows={5} {...register("description", { required: "Required" })} className={inputClass} placeholder="Detail product specs and features..." />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 py-4 font-bold text-white transition-all hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20 disabled:opacity-50"
          >
            {submitting ? (
              <><Loader2 className="animate-spin" size={20} /> Adding...</>
            ) : (
              <><PlusCircle size={20} /> Add Product</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}