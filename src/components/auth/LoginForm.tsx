"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

import axiosInstance from "@/lib/axios";
import { signInWithGoogle } from "@/services/firebaseAuth";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
  const router = useRouter();

  const { setUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================
  // Email Login
  // ==========================
  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);

      const { data } = await axiosInstance.post(
        "/auth/login",
        formData
      );

    setUser(data.user);

toast.success(data.message);

router.push("/");
router.refresh();

    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Demo Login
  // ==========================
  const handleDemoLogin = async () => {
    try {
      setLoading(true);

      const { data } = await axiosInstance.post(
        "/auth/login",
        { email: "demo@smartcart-ai.com",
          password: "Demo123@",
         
        }
      );

 setUser(data.user);

toast.success("Demo Login Successful");

router.push("/");
router.refresh();
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Demo Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Google Login
  // ==========================
 const handleGoogleLogin = async () => {
  try {
    setLoading(true);

    const googleUser = await signInWithGoogle();

    const { data } = await axiosInstance.post(
      "/auth/google",
      {
        name: googleUser.displayName,
        email: googleUser.email,
        photo: googleUser.photoURL,
      }
    );


    // cookie backend থেকে সেট হবে
    setUser(data.user);


    toast.success(data.message);

    router.push("/");
    router.refresh();

  } catch (error) {
    console.error(error);

    toast.error("Google Login Failed");

  } finally {
    setLoading(false);
  }
};
  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-cyan-600">
          SmartCart AI
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back! Sign in to continue.
        </p>
      </div>

      <form
        onSubmit={handleLogin}
        className="space-y-5"
      >
        {/* Email */}
        <div>
          <label className="mb-2 block font-medium">
            Email
          </label>

          <div className="flex items-center rounded-xl border border-slate-300 px-4 dark:border-slate-700">
            <Mail className="h-5 w-5 text-slate-400" />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent px-3 py-3 outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block font-medium">
            Password
          </label>

          <div className="flex items-center rounded-xl border border-slate-300 px-4 dark:border-slate-700">
            <Lock className="h-5 w-5 text-slate-400" />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-transparent px-3 py-3 outline-none"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Login */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-50"
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>

        {/* Demo Login */}
        <button
          type="button"
          onClick={handleDemoLogin}
          disabled={loading}
          className="w-full rounded-xl border border-cyan-500 py-3 font-semibold text-cyan-600 transition hover:bg-cyan-50 dark:hover:bg-slate-800"
        >
          🚀 Demo Login
        </button>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300 dark:border-slate-700"></div>
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-sm text-slate-500 dark:bg-slate-900">
              OR
            </span>
          </div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        {/* Register */}
        <p className="text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-cyan-600"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}