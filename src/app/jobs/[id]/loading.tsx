export default function Loading() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl animate-pulse px-6">
        <div className="mb-8 h-10 w-40 rounded bg-gray-300 dark:bg-gray-700"></div>

        <div className="overflow-hidden rounded-3xl border bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
          <div className="h-96 w-full bg-gray-300 dark:bg-gray-700"></div>

          <div className="space-y-6 p-8">
            <div className="h-6 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>

            <div className="h-10 w-2/3 rounded bg-gray-300 dark:bg-gray-700"></div>

            <div className="grid gap-4 md:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border p-4 dark:border-gray-700"
                >
                  <div className="mb-3 h-5 w-24 rounded bg-gray-300 dark:bg-gray-700"></div>
                  <div className="h-4 w-36 rounded bg-gray-300 dark:bg-gray-700"></div>
                </div>
              ))}
            </div>

            <div>
              <div className="mb-4 h-8 w-56 rounded bg-gray-300 dark:bg-gray-700"></div>

              <div className="space-y-3">
                <div className="h-4 rounded bg-gray-300 dark:bg-gray-700"></div>
                <div className="h-4 rounded bg-gray-300 dark:bg-gray-700"></div>
                <div className="h-4 w-5/6 rounded bg-gray-300 dark:bg-gray-700"></div>
              </div>
            </div>

            <div>
              <div className="mb-4 h-8 w-40 rounded bg-gray-300 dark:bg-gray-700"></div>

              <div className="space-y-3">
                <div className="h-4 rounded bg-gray-300 dark:bg-gray-700"></div>
                <div className="h-4 rounded bg-gray-300 dark:bg-gray-700"></div>
                <div className="h-4 w-4/6 rounded bg-gray-300 dark:bg-gray-700"></div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-12 w-40 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
              <div className="h-12 w-48 rounded-xl bg-gray-300 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}