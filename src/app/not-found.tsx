import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-lg text-center">

        <h1 className="text-8xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Go Home
          </Link>

     
        </div>

      </div>
    </div>
  );
}