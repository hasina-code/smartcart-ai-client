import Analytics from "@/components/dashboard/Analytics";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentOrders from "@/components/dashboard/RecentOrders";
import RecentProducts from "@/components/dashboard/RecentProducts";
import {
  ShoppingBag,
  Package,
  Heart,
  Bot,
} from "lucide-react";

export default function DashboardHomePage() {
  const stats = [
    {
      title: "Total Products",
      value: "24",
      icon: ShoppingBag,
      color: "bg-cyan-500",
    },
    {
      title: "Total Orders",
      value: "18",
      icon: Package,
      color: "bg-green-500",
    },
    {
      title: "Wishlist",
      value: "12",
      icon: Heart,
      color: "bg-pink-500",
    },
    {
      title: "AI Chats",
      value: "36",
      icon: Bot,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back to SmartCart AI Dashboard.
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`${item.color} rounded-xl p-4 text-white`}
                >
                  <Icon size={26} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
<QuickActions />
<Analytics />
<RecentOrders />
<RecentProducts />

      {/* Recent Activity */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-5 text-xl font-semibold">
          Recent Activity
        </h2>

        <div className="space-y-4">
          <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
            ✅ Product "Wireless Headphone" added successfully.
          </div>

          <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
            ❤️ Added "Gaming Mouse" to Wishlist.
          </div>

          <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
            🤖 AI Assistant recommended 5 products.
          </div>

          <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
            📦 New Order has been placed.
          </div>
        </div>
      </div>
    </div>
  );
}