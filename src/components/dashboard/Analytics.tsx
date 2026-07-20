"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 1200 },
  { month: "Feb", sales: 2100 },
  { month: "Mar", sales: 1800 },
  { month: "Apr", sales: 3200 },
  { month: "May", sales: 2800 },
  { month: "Jun", sales: 4200 },
];

const pieData = [
  {
    name: "Products",
    value: 45,
  },
  {
    name: "Orders",
    value: 25,
  },
  {
    name: "Wishlist",
    value: 15,
  },
  {
    name: "AI",
    value: 15,
  },
];

const COLORS = [
  "#06b6d4",
  "#22c55e",
  "#ec4899",
  "#8b5cf6",
];

export default function Analytics() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Line Chart */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-5 text-xl font-semibold">
          Sales Overview
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="sales"
                stroke="#06b6d4"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-5 text-xl font-semibold">
          Dashboard Summary
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}