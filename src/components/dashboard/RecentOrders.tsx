"use client";

const orders = [
  {
    id: "#1001",
    customer: "Hasina Akter",
    product: "Wireless Headphone",
    amount: "$120",
    status: "Completed",
  },
  {
    id: "#1002",
    customer: "John Smith",
    product: "Gaming Mouse",
    amount: "$75",
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Sarah Lee",
    product: "Mechanical Keyboard",
    amount: "$150",
    status: "Completed",
  },
  {
    id: "#1004",
    customer: "Alex",
    product: "Laptop Stand",
    amount: "$45",
    status: "Cancelled",
  },
];

export default function RecentOrders() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Recent Orders
        </h2>

        <button className="text-cyan-500 hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b dark:border-slate-700">
              <th className="py-3 text-left">Order</th>
              <th className="py-3 text-left">Customer</th>
              <th className="py-3 text-left">Product</th>
              <th className="py-3 text-left">Amount</th>
              <th className="py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b dark:border-slate-800"
              >
                <td className="py-4">{order.id}</td>

                <td>{order.customer}</td>

                <td>{order.product}</td>

                <td>{order.amount}</td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold

                    ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"

                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"

                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
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