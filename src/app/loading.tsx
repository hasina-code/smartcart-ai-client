export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white dark:bg-slate-950">
   
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-cyan-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-blue-400 animate-spin-reverse"></div>
        </div>
      </div>
      
      <h2 className="mt-8 text-xl font-bold text-slate-800 dark:text-white animate-pulse">
        Loading...
      </h2>
      <p className="text-slate-500 dark:text-slate-400">Please wait while we prepare your AI experience.</p>
    </div>
  );
}