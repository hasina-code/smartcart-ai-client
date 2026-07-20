"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

import axiosInstance from "@/lib/axios";
import { useAuth } from "@/context/AuthContext";
import { Camera } from "lucide-react";

export default function ProfilePage() {
  const { user, setUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    photo: user?.photo || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axiosInstance.put("/auth/update-profile", formData);

      setUser(data.user);

      toast.success(data.message || "Profile updated successfully!");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Profile Update Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="mt-2 text-slate-500">Update your profile information.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="grid gap-10 lg:grid-cols-3">
          
          {/* Left Column: Image, Name & Email */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative group">
              <div className="relative w-40 h-40">
                <Image
                  src={formData.photo || "/avatar.png"}
                  alt="Profile"
                  fill
                  className="rounded-3xl border-4 border-white shadow-2xl object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-cyan-500 p-2.5 rounded-full text-white shadow-lg">
                <Camera size={20} />
              </div>
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {user?.name}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {user?.email}
              </p>
            </div>

            <div className="text-center">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                {user?.role}
              </span>
            </div>
          </div>

          {/* Right Column: Form Fields */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <label className="mb-2 block font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Profile Image URL</label>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Email</label>
              <input
                value={user?.email || ""}
                readOnly
                className="w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Account Created</label>
              <input
                value={
                  user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "-"
                }
                readOnly
                className="w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
              />
            </div>

            <button
              disabled={loading}
              className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-white hover:bg-cyan-600 disabled:opacity-50 transition-colors"
            >
              {loading ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}