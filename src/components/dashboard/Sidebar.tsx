"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  User,
  ShoppingBag,
  PlusCircle,
  Bot,
  Heart,
  Package,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

const menus = [
  { title: "Dashboard Home", href: "/dashboard", icon: LayoutDashboard },
  { title: "Profile", href: "/dashboard/profile", icon: User },
  { title: "Products", href: "/dashboard/products", icon: ShoppingBag },
  { title: "Add Product", href: "/dashboard/products/add", icon: PlusCircle },
  { title: "AI Assistant", href: "/dashboard/assistant", icon: Bot },
  { title: "Wishlist", href: "/dashboard/wishlist", icon: Heart },
  { title: "Orders", href: "/dashboard/orders", icon: Package },
  { title: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`flex flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 transition-all duration-300 ${
        collapsed ? "w-24" : "w-72"
      }`}
    >
      {/* Header */}
      <div className="relative flex h-20 items-center justify-center border-b border-slate-200 dark:border-slate-800">
        {!collapsed && (
          <h2 className="text-2xl font-bold text-cyan-500">SmartCart AI</h2>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute right-3 rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2 p-4">
        {menus.map((menu) => {
          const Icon = menu.icon;
          const isActive = menu.href === "/dashboard" 
            ? pathname === "/dashboard" 
            : pathname.startsWith(menu.href);

          return (
            <Link
              key={menu.href}
              href={menu.href}
              onClick={() => onClose?.()}
              className={`flex items-center rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              } ${collapsed ? "justify-center" : "gap-4"}`}
            >
              <Icon size={20} />
              {!collapsed && <span className="font-medium">{menu.title}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-slate-200 p-4 dark:border-slate-800">
        <button
          onClick={logout}
          className={`flex w-full items-center rounded-xl px-4 py-3 text-red-500 transition hover:bg-red-50 dark:hover:bg-slate-800 ${
            collapsed ? "justify-center" : "gap-4"
          }`}
        >
          <LogOut size={20} />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
}