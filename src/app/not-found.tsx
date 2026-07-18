import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center px-5 text-center bg-white dark:bg-slate-950">
      {/* ৪-০-৪ টেক্সট */}
      <h1 className="text-9xl font-extrabold text-cyan-500">404</h1>
      
      <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
        Page Not Found
      </h2>
      
      <p className="mt-4 max-w-md text-slate-600 dark:text-slate-400">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

   
      <Link
        href="/"
        className="mt-8 flex items-center gap-2 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600 hover:-translate-y-1"
      >
        <ArrowLeft size={20} />
        Back to Home
      </Link>
    </div>
  );
}