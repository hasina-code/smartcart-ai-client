"use client";

import Image from "next/image";
import Link from "next/link";
import { Loader2, Pencil, Trash2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

import axiosInstance from "@/lib/axios";
import useMyProducts from "@/hooks/useMyProducts";

export default function ProductsPage() {
  const { data: products = [], isLoading } = useMyProducts();
  const queryClient = useQueryClient();

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Delete Product?",
      text: "You won't be able to undo this action.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#06b6d4",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axiosInstance.delete(`/products/${id}`);

      toast.success(res.data.message);

      queryClient.invalidateQueries({
        queryKey: ["my-products"],
      });
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Failed to delete product"
      );
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2
          className="animate-spin text-cyan-500"
          size={40}
        />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Products
          </h1>

          <p className="mt-2 text-slate-500">
            Manage all your products.
          </p>
        </div>

        <Link
          href="/dashboard/products/add"
          className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          + Add Product
        </Link>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <table className="w-full">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Brand</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="p-10 text-center text-slate-500"
                >
                  No Products Found
                </td>
              </tr>
            ) : (
                            products.map((product) => (
                <tr
                  key={product._id}
                  className="border-t border-slate-200 dark:border-slate-800"
                >
                  <td className="p-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                  </td>

                  <td className="p-4 font-medium">
                    {product.title}
                  </td>

                  <td className="p-4">
                    {product.category}
                  </td>

                  <td className="p-4">
                    {product.brand}
                  </td>

                  <td className="p-4">
                    ${product.price}
                  </td>

                  <td className="p-4">
                    {product.stock}
                  </td>

                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        href={`/dashboard/products/edit/${product._id}`}
                        className="rounded-lg bg-amber-500 p-2 text-white transition hover:bg-amber-600"
                        title="Edit Product"
                      >
                        <Pencil size={18} />
                      </Link>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                        title="Delete Product"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}