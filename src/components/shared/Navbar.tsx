"use client";

import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  UserCircle,
  LogOut,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const router = useRouter();
  
  
  const { user, logout, loading } = useAuth();

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "AI Assistant", href: "/assistant" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const getUserImage = () => {
  if (!user) return "/avatar.png"; 
  if (user.photo && user.photo !== "") return user.photo;
  return "/avatar.png";
};

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-cyan-500 p-2">
            <ShoppingCart className="text-white" size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">SmartCart AI</h2>
            <p className="text-xs text-slate-500">AI Shopping Assistant</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="font-medium text-slate-700 transition hover:text-cyan-600 dark:text-slate-300">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="relative hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          {!loading && (
            user ? (
              <>
                <button onClick={() => setProfileOpen(!profileOpen)} className="overflow-hidden rounded-full border-2 border-cyan-500">
                  <Image
                    src={getUserImage()}
                    alt="User"
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 top-16 z-50 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                    <div className="border-b border-slate-200 p-5 dark:border-slate-700">
                      <div className="flex items-center gap-3">
                        <Image src={getUserImage()} alt="User" width={50} height={50} className="rounded-full" />
                        <div>
                          <h3 className="font-semibold">{user.name || user.displayName || "User"}</h3>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/dashboard" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-5 py-4 hover:bg-slate-100 dark:hover:bg-slate-800">
                      <LayoutDashboard size={18} /> Dashboard
                    </Link>
                    <Link href="/profile" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-5 py-4 hover:bg-slate-100 dark:hover:bg-slate-800">
                      <UserCircle size={18} /> Profile
                    </Link>
                    <button 
                      onClick={async () => { await logout(); setProfileOpen(false);
                      router.push("/login");router.refresh();  
                       }} 
                      className="flex w-full items-center gap-3 px-5 py-4 text-red-500 hover:bg-red-50 dark:hover:bg-slate-800"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link href="/login" className="font-medium text-slate-700 dark:text-slate-300">Login</Link>
                <Link href="/register" className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-white hover:bg-cyan-600">Register</Link>
              </>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="font-medium">{link.name}</Link>
            ))}
            <ThemeToggle />
            {!loading && (
              user ? (
                <>
                  <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
                  <button
                  onClick={async () => {
                  await logout();

                router.push("/login");

                router.refresh();
                }}
               className="text-left text-red-500"
>
               Logout
              </button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
                  <Link href="/register" onClick={() => setIsOpen(false)}>Register</Link>
                </>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}