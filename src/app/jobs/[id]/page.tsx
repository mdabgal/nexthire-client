import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { jobs } from "@/data/jobs";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const job = jobs.find(
    (item) => item.id === Number(id)
  );

  if (!job) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/jobs"
            className="mb-8 inline-flex rounded-lg border px-4 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            ← Back to Jobs
          </Link>

          <div className="overflow-hidden rounded-3xl border bg-gray-50 shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <img
              src={job.image}
              alt={job.title}
              className="h-96 w-full object-cover"
            />

            <div className="p-8">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600 dark:bg-blue-950">
                {job.category}
              </span>

              <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                {job.title}
              </h1>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border p-4">
                  <h3 className="font-semibold">Company</h3>
                  <p>{job.company}</p>
                </div>

                <div className="rounded-xl border p-4">
                  <h3 className="font-semibold">Location</h3>
                  <p>{job.location}</p>
                </div>

                <div className="rounded-xl border p-4">
                  <h3 className="font-semibold">Job Type</h3>
                  <p>{job.type}</p>
                </div>

                <div className="rounded-xl border p-4">
                  <h3 className="font-semibold">Salary</h3>
                  <p className="font-bold text-blue-600">
                    {job.salary}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold">
                  Job Description
                </h2>

                <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">
                  {job.description}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Apply Now
                </button>

                <Link
                  href="/jobs"
                  className="rounded-xl border px-8 py-3 font-semibold transition hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Browse More Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}