"use client";

import Image from "next/image";
import { Bell, Menu, Search } from "lucide-react";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { useAuth } from "@/context/AuthContext";

// প্রপস ইন্টারফেস যোগ করা
interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-900">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button - এখানে ক্লিক করলে সাইডবার টগল হবে */}
        <button 
          onClick={onMenuClick}
          className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
        >
          <Menu size={22} />
        </button>

        {/* Search */}
        <div className="relative hidden md:block">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-80 rounded-xl border border-slate-300 bg-transparent py-2 pl-10 pr-4 outline-none focus:border-cyan-500 dark:border-slate-700"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <ThemeToggle />
        <button className="relative rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
          <Bell size={22} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {user ? (
          <div className="flex items-center gap-3">
            <Image
              src={user.photo || "/avatar.png"}
              alt="User"
              width={42}
              height={42}
              className="h-11 w-11 rounded-full border object-cover"
            />
            <div className="hidden md:block">
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-xs text-slate-500">{user.email}</p>
            </div>
          </div>
        ) : (
          <div className="text-sm text-slate-500">Not Logged In</div>
        )}
      </div>
    </header>
  );
}