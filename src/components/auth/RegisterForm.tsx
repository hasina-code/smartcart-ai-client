"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Image as ImageIcon,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

import axiosInstance from "@/lib/axios";
import { signInWithGoogle } from "@/services/firebaseAuth";
import { useAuth } from "@/context/AuthContext";

export default function RegisterForm() {
  const router = useRouter();
  const { setUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // Register
  // =========================
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return toast.error("All fields are required");
    }

    if (
      formData.password !== formData.confirmPassword
    ) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      const { data } = await axiosInstance.post(
        "/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          photo: formData.photo,
        }
      );

 setUser(data.user);

toast.success(
  data.message || "Registration Successful"
);

router.push("/");
router.refresh();
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Google Register
  // =========================
  const handleGoogleRegister = async () => {
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


    // Backend cookie সেট করবে
    setUser(data.user);


    toast.success(
      data.message ||
      "Google Registration Successful"
    );


    router.push("/");
    router.refresh();


  } catch (error: any) {

    console.error(error);

    toast.error(
      error.response?.data?.message ||
      "Google Registration Failed"
    );

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
          Create your account
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Name */}
        <div>
          <label className="mb-2 block font-medium">
            Name
          </label>

          <div className="flex items-center rounded-xl border px-4">
            <User className="h-5 w-5 text-slate-400" />

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent px-3 py-3 outline-none"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium">
            Email
          </label>

          <div className="flex items-center rounded-xl border px-4">
            <Mail className="h-5 w-5 text-slate-400" />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent px-3 py-3 outline-none"
              required
            />
          </div>
        </div>

        {/* Photo */}
        <div>
          <label className="mb-2 block font-medium">
            Profile Image URL (Optional)
          </label>

          <div className="flex items-center rounded-xl border px-4">
            <ImageIcon className="h-5 w-5 text-slate-400" />

            <input
              type="url"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              value={formData.photo}
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

          <div className="flex items-center rounded-xl border px-4">
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
              required
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

        {/* Confirm Password */}
        <div>
          <label className="mb-2 block font-medium">
            Confirm Password
          </label>

          <div className="flex items-center rounded-xl border px-4">
            <Lock className="h-5 w-5 text-slate-400" />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-transparent px-3 py-3 outline-none"
              required
            />
          </div>
        </div>

        {/* Register */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white hover:bg-cyan-600 disabled:opacity-50"
        >
          {loading
            ? "Creating Account..."
            : "Register"}
        </button>

        {/* Divider */}
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-sm text-slate-500 dark:bg-slate-900">
              OR
            </span>
          </div>
        </div>

        {/* Google Register */}
        <button
          type="button"
          onClick={handleGoogleRegister}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-xl border py-3 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        {/* Login */}
        <p className="text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-cyan-600"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}