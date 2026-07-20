"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
    name: "Wireless Headphone",
    category: "Electronics",
    price: "$120",
    stock: "In Stock",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co/Rk9r23F2/images-28.jpg",
    name: "Gaming Laptop",
    category: "Laptop",
    price: "$1350",
    stock: "Low Stock",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200",
    name: "Smart Watch",
    category: "Wearable",
    price: "$250",
    stock: "In Stock",
  },
  {
    id: 4,
    image:
      "https://i.ibb.co/RpyhGBKP/images-29.jpg",
    name: "Bluetooth Speaker",
    category: "Audio",
    price: "$80",
    stock: "Out of Stock",
  },
];

export default function RecentProducts() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Recent Products
        </h2>

        <button className="text-cyan-500 hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b dark:border-slate-700">
              <th className="py-3 text-left">
                Product
              </th>

              <th className="py-3 text-left">
                Category
              </th>

              <th className="py-3 text-left">
                Price
              </th>

              <th className="py-3 text-left">
                Stock
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b dark:border-slate-800"
              >
                <td className="flex items-center gap-3 py-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded-xl object-cover"
                  />

                  <span>{product.name}</span>
                </td>

                <td>{product.category}</td>

                <td>{product.price}</td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold

                    ${
                      product.stock === "In Stock"
                        ? "bg-green-100 text-green-700"
                        : product.stock ===
                          "Low Stock"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.stock}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}