export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="h-16 w-16 animate-spin rounded-full border-[6px] border-blue-600 border-t-transparent"></div>

      <h2 className="mt-6 text-2xl font-bold text-blue-600">
        NextHire
      </h2>

      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Loading, please wait...
      </p>
    </div>
  );
}